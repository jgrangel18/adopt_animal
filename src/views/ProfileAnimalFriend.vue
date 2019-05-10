<template>
<div>
  <h1>Your animal Friend</h1>
  <h2>{{animals.name}}</h2>
  <h3>{{animals.breed}}</h3>
  <h3>{{animals.gender}}</h3>
  <h3>{{animals.age}}</h3>
  <h3>{{animals.color}}</h3>
  <h3>{{animals.location}}</h3>
  <p>{{animals.notes}}</p>
</div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        animals: {}
      }
    },
    // BECAUSE I AM NOT IMPORTING THE DATA FILE IS DIRECTLY FROM THE STATE.
    // cats: cats
    // USING A COMPUTED PROPERTY TO LOAD THE INFO OF THE STATE FOR THIS COMPONENT
    computed: {
      ...mapState([
        'cats',
        'dogs'
      ])
    },
    mounted () {
        console.log('HOLA ENTRE AQUI!!')
        const animals = this[this.$route.params.species][this.$route.params.id]
        console.log(animals)
        this.animals = animals
    }
}
</script>
