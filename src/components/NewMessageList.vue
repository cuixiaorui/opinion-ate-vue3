<template>
  <div>
    <ul>
      <li v-for="(message, index) in messages" :key="index">
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps(["messages"]);
</script>

<style></style>
