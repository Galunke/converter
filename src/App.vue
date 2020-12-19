<template>
  <div class="container mx-auto my-4 grid gap-4 grid-cols-2">
    <h1 class="text-4xl col-span-2">Converter</h1>
      <textbox
        label="Input"
        :value="input.value"
        :invalid="!input.valid"
        :error="input.error"
        @input="encode"
      />
      <textbox
        label="Output"
        :value="output.value"
        :invalid="!output.valid"
        :error="output.error"
        @input="decode"
      />

    <div class="col-span-2">
      <converter-button
        v-for="(c, i) in converters"
        :key="i"
        :active="converter == c"
        @click="switchMode(c)"
        >{{ c.label }}</converter-button
      >
    </div>
  </div>
</template>

<script>
import Textbox from "./components/Textbox.vue";
import ConverterButton from "./components/ConverterButton.vue";

import converters from "./converters";

export default {
  name: "App",
  components: { Textbox, ConverterButton },
  data: function () {
    return {
      input: {
        value: "",
        valid: true,
        error: "",
      },
      output: {
        value: "",
        valid: true,
        error: "",
      },
      lastConversion: "encode",
      converter: converters.base64,
      converters: converters,
    };
  },
  methods: {
    encode(e) {
      console.log("encode");
      this.input.value = event.target.value;
      try {
        this.output.value = this.converter.encode(this.input.value);
        this.input.valid = true;
        this.output.valid = true;
      } catch (err) {
        this.input.valid = false;
      }
      this.lastConversion = "encode";
    },
    decode(e) {
      console.log("decode");
      this.output.value = event.target.value;
      try {
        this.input.value = this.converter.decode(this.output.value);
        this.input.valid = true;
        this.output.valid = true;
      } catch (err) {
        this.output.valid = false;
      }
      this.lastConversion = "decode";
    },
    switchMode(mode) {
      this.converter = mode;
      if (this.lastConversion === "encode") {
        try {
          this.output.value = this.converter.encode(this.input.value);
          this.input.valid = true;
          this.output.valid = true;
        } catch (err) {
          this.input.valid = false;
        }
      } else {
        try {
          this.input.value = this.converter.decode(this.output.value);
          this.input.valid = true;
          this.output.valid = true;
        } catch (err) {
          this.output.valid = false;
        }
      }
    },
  },
};
</script>
