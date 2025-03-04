<template>
  <div class="empty-editor-wrapper">
    <a-flex class="content-container" justify="center" align="center" vertical>
      <div class="title">
        {{ $t.pages.formDesigner.startCreateBrief }}
      </div>
      <div class="subtitle" align="center">
        {{ $t.pages.formDesigner.chooseFromList }}
      </div>
    </a-flex>
  </div>
</template>

<style lang="scss" scoped>
.empty-editor-wrapper {
  width: 100%;
  height: 100%;
  border-bottom: none;
  padding: 30px;

  .content-container {
    width: 100%;
    gap: 14px;
    padding: 90px;
    border-radius: 30px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='%23959BCDFF' stroke-width='8' stroke-dasharray='20%2c20' stroke-dashoffset='70'/%3e%3c/svg%3e");

    .title {
      font-size: 40px;
      text-align: center;
    }

    .subtitle {
      font-size: 30px;
      color: var(--accent-color);
      text-align: center;
    }
  }
}

@media (max-width: 1280px) {
  .empty-editor-wrapper {
    padding: 30px;

    .content-container {
      padding: 70px;

      .title {
        font-size: 35px;
      }

      .subtitle {
        font-size: 25px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .empty-editor-wrapper {
    .content-container {
      border-radius: 20px;
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23959BCDFF' stroke-width='5' stroke-dasharray='20%2c20' stroke-dashoffset='70'/%3e%3c/svg%3e");

      .title {
        font-size: 25px;
      }

      .subtitle {
        font-size: 15px;
      }
    }
  }
}

@media (max-width: 540px) {
  .empty-editor-wrapper {
    padding: 20px;

    .content-container {
      padding: 20px;
      border-radius: 10px;
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23959BCDFF' stroke-width='5' stroke-dasharray='20%2c20' stroke-dashoffset='70'/%3e%3c/svg%3e");

      .title {
        font-size: 20px;
      }

      .subtitle {
        font-size: 15px;
      }
    }
  }
}
</style>
