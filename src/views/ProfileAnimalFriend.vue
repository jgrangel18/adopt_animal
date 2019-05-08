<template>
<div>
  <h1>Your animal Friend</h1>
  {{$route.params.species}}
  {{$route.params.id}}
</div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        // BECAUSE I AM NOT IMPORTING THE DATA FILE IS DIRECTLY FROM THE STATE.
        // cats: cats
      }
    },
    // USING A COMPUTED PROPERTY TO LOAD THE INFO OF THE STATE FOR THIS COMPONENT
    computed: {
      ...mapState(['cats'])
    }
}
</script>
