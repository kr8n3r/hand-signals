<template>
  <ReactionTray />
  <Messages />
</template>

<script setup>
import ReactionTray from './components/ReactionTray.vue'
import Messages from './components/messages/Messages.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  margin:0;
  padding:0;
}
</style>