<template>
  <div class="editor-footer" />
</template>

<style lang="scss" scoped>
.editor-footer {
  width: 100%;
  height: 67px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: solid 2px var(--accent-color);
  background-color: #2a2e52;
}

@media (max-width: 1280px) {
  .editor-footer {
    height: 40px;
  }
}

@media (max-width: 1024px) {
  .editor-footer {
    height: 35px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
}

@media (max-width: 540px) {
  .editor-footer {
    height: 30px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
}
</style>
