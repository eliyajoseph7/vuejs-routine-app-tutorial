<template>
  <div>
     Filter Routine:
      <select @change="filterRoutine($event)">
          <option value="100">80</option>
          <option value="50">50</option>
          <option value="20">20</option>
          <option value="10">10</option>
          <option value="5">5</option>
      </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'FilterRoutines',
    methods: mapActions(['filterRoutine'])
}
</script>

<style>

</style>