<template>
<div class="reaction-tray">
  <button @click="toggleReactions()">Mimise</button>
  <div class="reaction-tray__reactions"
    :class="{ active: isVisible }">
    <Reaction reaction='Handup' />
    <Reaction reaction='Agree' />
    <Reaction reaction='Disagree' />
    <Reaction reaction='Respond' />
    <Reaction reaction='Clarify' />
    <Reaction reaction='Point of Order' />
    <Reaction reaction='Block' />
    <Reaction reaction='Oppose' />
  </div>
</div>
</template>

<script>
import Reaction from './Reaction.vue'

export default {
  components: {
    Reaction
  },
  props: {
    reaction: String
  },
  data: function () {
    return {
      isVisible: false
    }
  },
   methods: {
    toggleReactions: function() {
      this.isVisible = !this.isVisible;
    }
  }
}


</script>

<style scoped>
.reaction-tray {
  position: absolute;
  top:0;
  left: 0;
}
.reaction-tray__reactions {
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5em;
  transform: translateX(-200px);
  border-radius: 0 0 8px;
  transition-duration: 0.25s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.active {
  transform: translateX(0);
}


</style>