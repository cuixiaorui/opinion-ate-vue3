<template>
  <div>
    <NewMessageForm @send="handleSend"></NewMessageForm>
    <NewMessageList :messages="messages"></NewMessageList>
  </div>
</template>

<script setup>
import NewMessageForm from "./components/NewMessageForm.vue";
import NewMessageList from "./components/NewMessageList.vue";

import { ref } from "vue";
const messages = ref([]);

function handleSend(msg) {
  messages.value.push(msg);
}

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
