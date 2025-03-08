<script lang="ts" setup>
import { computed, ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import PlusIcon from "@/assets/icons/Other/PlusIcon.vue";
import { FieldBlockBase, LinksBlockSettings } from "@/entities/form";
import {
  LinkColumnTitles,
  LinkRow,
  LinksButton,
} from "../ModalWidgets/ui/Links";

interface Link {
  id: string;
  url: string;
  description?: string;
}

const field = defineModel<FieldBlockBase>("field", { required: true });

const settings = field.value.settings as LinksBlockSettings;
field.value.value = ref<Link[]>([{ id: uuidv4(), url: settings.defaultValue }]);

const maxHeight = computed(() => {
  const length = field.value.value.length;
  if (length === settings.maxLinks) {
    return `${54 * length + 10 * (length - 1)}px`;
  } else {
    return `${54 * length + 10 * length}px`;
  }
});

const addLink = () => {
  field.value.value.push({ id: uuidv4(), url: "" });
};
const deleteLink = (index: number) => {
  field.value.value.splice(index, 1);
};
</script>

<template>
  <a-form-item :name="[field.id, 'value']">
    <a-flex class="links-list" vertical>
      <LinkColumnTitles />
      <a-form v-model:model="field.value" layout="vertical">
        <TransitionGroup
          name="list"
          tag="div"
          class="list-container"
          :style="{ maxHeight: maxHeight }"
        >
          <div
            :class="['link-row', { shift: field.value.length > 1 }]"
            :key="link.id"
            v-for="(link, index) in field.value"
          >
            <LinkRow
              :link="link"
              :index="index"
              :required="field.requiredField"
              @delete="deleteLink(index)"
            />
          </div>
        </TransitionGroup>
      </a-form>

      <a-flex justify="center" :style="{ marginTop: '20px' }">
        <Transition name="fade">
          <LinksButton
            :disabled="field.value.length === settings.maxLinks"
            condition
            @click="addLink"
          >
            <PlusIcon class="btn-icon" />
          </LinksButton>
        </Transition>
      </a-flex>
    </a-flex>
  </a-form-item>
</template>

<style lang="scss" scoped>
.links-list {
  width: 100%;
  gap: 10px;

  .list-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    transition: max-height 0.2s ease-in-out;

    .link-row {
      position: relative;
      display: flex;
      width: 100%;
      align-items: center;
      gap: 10px;
      transition: width 0.2s ease-in-out;

      &.shift:nth-child(1) {
        width: calc(100% - 42px);
      }
    }
  }
}

:deep(.ant-input-affix-wrapper) {
  height: 54px;
  font-size: 16px;
  padding: 0 15px;
  border-radius: 10px;
}

@media (max-width: 1024px) {
  :deep(.ant-input-affix-wrapper) {
    height: 45px;
    font-size: 14px;
    padding: 0 12px;
    border-radius: 8px;
  }
}

@media (max-width: 540px) {
  :deep(.ant-input-affix-wrapper) {
    height: 38px;
    font-size: 12px;
    padding: 0 10px;
    border-width: 1px;
  }
}
</style>
