<template>
  <b-container>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-col md=6 class="jumbotron mx-auto shadow">
        <b-form-group
          id="input-group-1"
          label="Title:"
          label-for="input-1"
          description="We'll never share your title with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.title"
            type="text"
            required
            placeholder="Enter routine title"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Image URL:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.image_url"
            required
            placeholder="Enter image url"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Description:" label-for="input-3">
          <b-form-textarea
            id="input-3"
            v-model="form.description"
            required
            placeholder="Enter routine description"
            rows="3"
            max-rows="8"
          ></b-form-textarea>
        </b-form-group>


        <!-- <b-form-group id="input-group-4">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group> -->

        <b-button type="submit" variant="primary" class="m-2">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-col>
    </b-form>
<!--     
    <b-col md=6 class="mx-auto">
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </b-col> -->
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        form: {
          title: '',
          image_url: '',
          description: '',
          // checked: []
        },
        show: true
      }
    },
    methods: {
      ...mapActions(['addRoutine']),
      onSubmit(evt) {
        evt.preventDefault()
        this.addRoutine(this.form)
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.title = ''
        this.form.image_url = ''
        this.form.description = null
        // this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>