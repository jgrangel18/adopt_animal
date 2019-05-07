<template>
  <div>
    <h1>Felines!</h1>
    <b-table striped hover :items="cats">
      <template slot="name" slot-scope="data">
      <router-link :to="`/pets/${data.index}`">
			{{data.value}}
			</router-link>
      </template>
    </b-table>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-expressions
/* eslint no-tabs: ["error", { allowIndentationTabs: true }] */
/* eslint-disable */
//eslint-disable-next-line
// IMPORTING DATA OF THE CATS
// import cats from '@/data/cats' 
//IMPORTING DATA FROM THE STATE OF VUE TO BE ACCESIBLE IN EVERY COMPONENT 
import { mapState } from 'vuex'
export default {
  data () {
    return {
      //BECAUSE I AM NOT IMPORTING THE DATA FILE IS DIRECTLY FROM THE STATE.
      //cats: cats
    }
  },
  //USING A COMPUTED PROPERTY TO LOAD THE INFO OF THE STATE FOR THIS COMPONENT
  computed: {
    ...mapState (['cats'])
  }
}
</script>
