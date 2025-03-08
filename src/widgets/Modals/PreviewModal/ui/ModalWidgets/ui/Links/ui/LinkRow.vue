<script lang="ts" setup>
import TrashIcon from "@/assets/icons/Buttons/TrashIcon.vue";
import { linkRules } from "@/features/Modals/PreviewModal/model";
import { Input } from "@/widgets/Modals/ModalFields";
import LinksButton from "./LinksButton.vue";

interface Link {
  url: string;
  description?: string;
}

defineProps<{
  link: Link;
  index: number;
  required: boolean | undefined;
}>();

const emit = defineEmits<{
  (e: "delete"): void;
}>();
</script>

<template>
  <a-flex class="link-row-fields">
    <Input
      class="link-field"
      v-model:value="link.url"
      name="url"
      :rules="required ? linkRules.url : null"
      :placeholder="$t.components.placeholder.enterLink"
    />
    <Input
      class="description-field"
      v-model:value="link.description"
      name="description"
      :rules="null"
      :placeholder="$t.components.placeholder.enterText"
    />
  </a-flex>
  <Transition name="fade">
    <LinksButton
      class="delete"
      :condition="index !== 0"
      @click="emit('delete')"
    >
      <TrashIcon class="btn-icon" />
    </LinksButton>
  </Transition>
</template>

<style lang="scss" scoped>
.link-row-fields {
  width: 100%;
  height: fit-content;
  gap: 10px;

  .link-field,
  .description-field {
    width: 100%;
  }
}
</style>
