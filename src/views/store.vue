<template>
  <div>
    <h1>store</h1>
    <a-input @input="handelInput"></a-input>
    <!-- <p>{{ inputValue }}</p> -->
    <a-show :content="inputValue" />
  </div>
</template>

<script>
import AInput from '_c/AInput';
import AShow from '_c/AShow';

export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    handelInput (val) {
      this.inputValue = val
    }
  }
}
</script>
