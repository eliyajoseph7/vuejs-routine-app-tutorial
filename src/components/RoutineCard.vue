<template>
  <b-row>
      <b-col md=4
       v-for="routine in allRoutines"
       :key="routine.id"
      >
          <b-card
            :title="routine.title"
            :img-src="routine.image_url"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2 text-center"
          >

            <b-card-text>
              <p>{{routine.description}}</p>
            </b-card-text>
            <div class="flex justify-content-between">
              <b-link href="#" class="d-inline float-left">
                <b-button variant="outline-primary">
                  <font-awesome-icon :icon="['fas', 'edit']" />
                  Edit
                </b-button>
              </b-link>
              
              <b-link href="#" class="d-inline float-right text-danger">
                <b-button variant="outline-danger" @click="deleteRoutine(routine.id)">
                  <font-awesome-icon :icon="['fas', 'trash-alt']" />
                </b-button>
              </b-link>
            </div>
          </b-card>
      </b-col>  
  </b-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'RoutineCard',
  methods: {
    ...mapActions(['fetchRoutines', 'deleteRoutine']),
    deleteTodo(del){
      this.deleteTodo(del)
    }
  },
  computed: mapGetters(['allRoutines']),
  created() {
    this.fetchRoutines()
  }
}
</script>

<style>

</style>