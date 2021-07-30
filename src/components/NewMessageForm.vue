<template>
  <div>
    <input type="text" data-test="messageText" v-model="message" />
    <button @click="send" data-test="sendButton">send</button>
  </div>
</template>

<script>
export default {
  name: "NewMessageForm",
};
</script>

<script setup>
import { ref } from "vue";
const message = ref("");
const emits = defineEmits(["send"]);

function send() {
  emits("send", message.value);
  message.value = "";
}
</script>

<style></style>
