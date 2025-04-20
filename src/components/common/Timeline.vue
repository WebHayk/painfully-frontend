<template>
  <div class="timeline">
    <div
        v-for="(entry, index) in entries"
        :key="index"
        class="container"
        :class="index % 2 === 0 ? 'left' : 'right'"
    >
      <div class="content">
        <h2>{{ entry.title }}</h2>
        <p>{{ entry.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  entries: Array
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: #7ED6A7;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -12px;
  background-color: #fff;
  border: 4px solid #7ED6A7;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

.left {
  left: 0;
}

.right {
  left: 50%;
}

.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30.5px;
  border: medium solid #7ED6A7;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #7ED6A7;
}

.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid #7ED6A7;
  border-width: 10px 10px 10px 0;
  border-color: transparent #7ED6A7 transparent transparent;
}

.right::after {
  left: -12px;
}

.content {
  padding: 20px 30px;
  background-color: #7ED6A7;
  position: relative;
  border-radius: 6px;
}

@media screen and (max-width: 600px) {
  .timeline::after {
    left: 28px;
  }

  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  .container::before {
    left: 61px;
    border: medium solid #7ED6A7;
    border-width: 10px 10px 10px 0;
    border-color: transparent #7ED6A7 transparent transparent;
  }

  .left::after,
  .right::after {
    left: 15px;
  }

  .right {
    left: 0%;
  }
}
</style>
