<template>
  <div class="editor-footer" />
</template>

<style lang="scss" scoped>
.editor-footer {
  width: 100%;
  height: 57px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: solid 2px var(--accent-color);
  background-color: #2a2e52;
}

@media (max-width: 1280px) {
  .editor-footer {
    height: 52px;
  }
}

@media (max-width: 1024px) {
  .editor-footer {
    height: 44px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
}

@media (max-width: 540px) {
  .editor-footer {
    height: 37px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
}
</style>
