<template>
  <b-container class="container">
      <h1 class="text-center">Create routine</h1>
      <CreateForm />
  </b-container>
</template>

<script>
import CreateForm from '../components/CreateForm'
export default {
  name: 'Create',
  components: {
    CreateForm
  }
}
</script>

<style>

</style>