<template>
<div class="reaction-tray">
  <button class="minimise-btn aux-btn" :class="{ active: isVisible }"
    @click="toggleReactions()">
    <svg style="display: none;">
      <symbol id="icon-circle-right" viewBox="0 0 32 32">
        <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
        <path d="M11.086 22.086l2.829 2.829 8.914-8.914-8.914-8.914-2.828 2.828 6.086 6.086z"></path>
      </symbol>
      <symbol id="icon-circle-left" viewBox="0 0 32 32">
        <path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z"></path>
        <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"></path>
      </symbol>
    </svg>
    <span aria-hidden="true">
      <svg class="icon icon-circle-left"><use xlink:href="#icon-circle-left"></use></svg>
      <svg class="icon icon-circle-right"><use xlink:href="#icon-circle-right"></use></svg>
    </span>
  </button>
  <button class="settings-btn aux-btn">
    <span aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class="Hdh4hc cIGbvc NMm5M">
          <path
            d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"
          />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      </span>
  </button>
  <div class="reactions"
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
}

.reactions {
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5em;
  transform: translateX(-200px);
  border-radius: 0 0 8px;
  transition-duration: 0.25s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  grid-row: 2 / 2;
  grid-column: 1 / 3;
  padding: 10px 5px 10px;
}

.reactions.active {
  transform: translateX(0);
}

.icon {
  display: inline-block;
  width:  2em;
  height: 2em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

.icon-circle-left {
  display: none;
}

.minimise-btn {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.minimise-btn.active .icon-circle-left {
  display: inline-block;
}

.minimise-btn.active .icon-circle-right {
  display: none;
}

.settings-btn {
  grid-row: 1 / 1;
  grid-column: 2 / 2;
  border-radius: 0 8px 0 0;
}

.aux-btn {
  background: white;
  border: 0;
  appearance: none;
  padding: 5px 0 5px;
  border-bottom: 1px solid lightgray;
}


button:focus {
  outline:0;
}
button:focus-visible,
button:hover {
  background: rgb(255, 217, 0);
}

button:active {
  background: rgb(255, 187, 0);
}


</style>