<template>
  <div class="skeleton-header d-flex align-items-center justify-content-between gap-3 p-2 mb-2">
    <div class="d-flex align-items-center gap-2 flex-grow-1">
      <div class="skeleton skeleton-icon"></div>

      <div class="flex-grow-1">
        <div class="skeleton skeleton-heading mb-2"></div>
        <div class="skeleton skeleton-subheading"></div>
      </div>
    </div>

    <div class="skeleton skeleton-link"></div>
  </div>
  <div class="table-responsive custom-scrollbar flex-grow-1">
    <table class="table container-table">
      <thead>
        <tr>
          <th
            v-for="(column, index) in columns"
            :key="column"
            :style="{
              backgroundColor: '#f0f4fb',
              borderTopLeftRadius: index === 0 ? '5px' : '0',
              borderTopRightRadius: index === columns.length - 1 ? '5px' : '0',
            }"
          >
            {{ column }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="row in rows" :key="row">
          <td v-for="column in columns" :key="column">
            <div
              v-if="column === 'Customer'"
              class="d-flex align-items-center gap-3 customer-skeleton"
            >
              <div class="skeleton skeleton-avatar"></div>

              <div class="flex-grow-1">
                <div class="skeleton skeleton-name mb-2"></div>
                <div class="skeleton skeleton-email"></div>
              </div>
            </div>

            <div v-else-if="column === 'Actions'" class="skeleton skeleton-button"></div>

            <div v-else-if="column === 'Status'" class="skeleton skeleton-status"></div>

            <div v-else class="skeleton skeleton-text"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  columns: {
    type: Array,
    default: () => ["Customer", "Service", "Date & Time", "Status", "Actions"],
  },
  rows: {
    type: Number,
    default: 5,
  },
});
</script>

<style scoped>
.skeleton {
  position: relative;
  overflow: hidden;
  background-color: #edf0f5;
  border-radius: 5px;
}

.skeleton::after {
  content: "";
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.75), transparent);
  animation: skeleton-loading 1.4s infinite;
}

.skeleton-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-shrink: 0;
}

.skeleton-name {
  width: 120px;
  max-width: 100%;
  height: 15px;
}

.skeleton-email {
  width: 160px;
  max-width: 100%;
  height: 12px;
}

.skeleton-text {
  width: 75%;
  height: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.skeleton-status {
  width: 85px;
  height: 28px;
  margin-top: 8px;
  margin-bottom: 8px;
}

.skeleton-button {
  width: 90px;
  height: 35px;
  margin-top: 4px;
}

.customer-skeleton {
  min-height: 58px;
}

.skeleton-icon {
  width: 35px;
  height: 35px;
  flex-shrink: 0;
}

.skeleton-heading {
  width: 180px;
  max-width: 100%;
  height: 18px;
}

.skeleton-subheading {
  width: 240px;
  max-width: 100%;
  height: 12px;
}

.skeleton-link {
  width: 65px;
  height: 15px;
  flex-shrink: 0;
}

@keyframes skeleton-loading {
  100% {
    transform: translateX(100%);
  }
}
</style>
