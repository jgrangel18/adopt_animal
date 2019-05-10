<template>
  <div class="home">
    <h1>Adopt a new best Friemnd</h1>
    <button v-on:click ="showpetForm" class="btn btn-primary">
      SHOW PET FORM
    </button>
    <b-form @submit="handleSubmit" v-if="showpetForm">
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      showpetForm: false
    }
  },
  methods: {
    toogglePetForm () {
      this.showpetForm = !this.showpetForm

    },
    handleSubmit () {

    }
  }
}
</script>
