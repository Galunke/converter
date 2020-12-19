<template>
  <div>
    <div class="flex items-center">
      <label class="px-2 text-xl my-3 mr-auto">{{ label }}</label>
      <button
        class="inline focus:outline-none hover:bg-gray-200 rounded-full hover:shadow-lg p-2 h-10 w-10"
        @click="copyToClipboard"
      >
        <copy-icon />
      </button>
    </div>
    <textarea
      ref="textarea"
      :class="{ 'bg-red-200': invalid }"
      class="w-full bg-white rounded-lg shadow-lg p-2 focus:outline-none"
      :value="value"
      @input.prevent.stop="$emit('input', $event.target.value)"
      rows="15"
    ></textarea>
  </div>
</template>
<script>
import CopyIcon from "./CopyIcon.vue";

export default {
  components: { CopyIcon },
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: "",
    },
  },
  methods: {
    copyToClipboard() {
        this.$refs.textarea.select();
        this.$refs.textarea.setSelectionRange(0, 99999);

        document.execCommand('copy');
    },
  },
};
</script>
<style scoped>
.invalid {
  outline: 1px solid red;
}
</style>