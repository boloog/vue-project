<template>
  <div>内容：{{ content }}</div>
</template>

<script>
export default {
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>
