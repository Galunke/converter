<template>
  <button
    :class="{ 'bg-green-300': active }"
    class="focus:outline-none bg-white rounded-lg shadow-lg p-4 mr-2 mb-2"
  >
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>