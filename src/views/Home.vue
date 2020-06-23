<template>
  <b-container>
    <h1 class="text-center">This is Home page</h1>
    <b-container>
        <FilterRoutines />
        <RoutineCard />
    </b-container>
  </b-container>
</template>

<script>
// @ is an alias to /src
import RoutineCard from '../components/RoutineCard'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import FilterRoutines from '../components/FilterRoutines'

library.add(faTrashAlt, faEdit)
export default {
  name: 'Home',
  components: {
    RoutineCard,
    FilterRoutines
  }
}
</script>
