<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { useFormStore } from "@/entities/form/stores/useFormStore";
import { TextArea, AddButtonContent } from ".";

const store = useFormStore();

const props = defineProps<{
  modalVisible: boolean;
  currentIndex: number;
}>();

const currentBlock = computed(() => store.formBlocks[props.currentIndex]);

const commentInput = ref(currentBlock.value?.commentary || "");
const defaultInput = ref("");
const isCommentOpen = ref(!!currentBlock.value?.commentary);
const isDefaultOpen = ref(!!defaultInput.value);
const isNeedDefault = ref(
  currentBlock.value?.generalSettings.isNeedDefault || false
);

const isDefaultValid = ref(true);

function toggleComment() {
  isCommentOpen.value = !isCommentOpen.value;
  commentInput.value = "";
}

function toggleDefault() {
  isDefaultOpen.value = !isDefaultOpen.value;
  defaultInput.value = "";
}

watch(
  () => props.modalVisible,
  (newVal) => {
    const block = currentBlock.value;
    if (newVal) {
      commentInput.value = block?.commentary || "";
      defaultInput.value = block?.defaultValue || "";
      isCommentOpen.value = !!block?.commentary;
      isDefaultOpen.value = !!block?.defaultValue;
      isNeedDefault.value = block?.generalSettings.isNeedDefault || false;
      isDefaultValid.value = false;
    } else {
      store.clearTempBlock();
    }
  }
);

watch([commentInput, defaultInput], ([newComment, newDefault]) => {
  if (store.tempBlock) {
    store.tempBlock.commentary = newComment;
    store.tempBlock.defaultValue = newDefault;
  }
});
</script>

<template>
  <a-flex gap="middle" vertical>
    <a-flex gap="small" vertical>
      <Transition name="fade-up" mode="out-in">
        <TextArea
          v-if="isCommentOpen"
          subtitle="Комментарий"
          hintText="Здесь можно уточнить Ваш вопрос"
          v-model:titleInput="commentInput"
        />
      </Transition>
      <AddButtonContent
        :text="isCommentOpen ? 'Удалить комментарий' : 'Добавить комментарий'"
        :callback="toggleComment"
        :isIcon="isCommentOpen ? false : true"
      />
    </a-flex>

    <div v-if="isNeedDefault">
      <a-flex gap="small" vertical>
        <Transition name="fade-up" mode="out-in">
          <TextArea
            v-if="isDefaultOpen"
            subtitle="Значение по умолчанию"
            hintText="Будет отображаться в поле для ответа"
            v-model:titleInput="defaultInput"
          />
        </Transition>
        <AddButtonContent
          :text="
            isDefaultOpen
              ? 'Удалить значение по умолчанию'
              : 'Добавить значение по умолчанию'
          "
          :callback="toggleDefault"
          :isIcon="isDefaultOpen ? false : true"
        />
      </a-flex>
    </div>
  </a-flex>
</template>
