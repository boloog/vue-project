<template>
  <div>
    <button @click="handleClick">按钮</button>
    <!-- longbolong@outlook.com -->
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'outlook.com')
    }
  },
  mounted () {
    console.log(this.$bus)
  }
}
</script>
