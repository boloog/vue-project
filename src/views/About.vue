<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Apple'
    }
  }
}
</script>
