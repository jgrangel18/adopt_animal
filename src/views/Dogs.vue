<template>
<div>
    <h1>Doggies!</h1>
    <b-table striped hover :items="dogs"></b-table>
  </div>
</template>

<script>
// import dogs from '@/data/dogs'
// eslint-disable-next-line no-unused-expressions
/* eslint no-tabs: ["error", { allowIndentationTabs: true }] */
/* eslint-disable */
//eslint-disable-next-line
import { mapState } from 'vuex'
export default {
  data () {
    return {
    
    }
  },
  //USING A COMPUTED PROPERTY TO LOAD THE INFO OF THE STATE FOR THIS COMPONENT
  computed: {
    ...mapState (['dogs'])
  }

}
</script>
