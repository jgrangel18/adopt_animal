export default {
  //  addPet: ({commit}, pet)
  addPet: (context, payload) => {
    // THIS CALL A MUTATION
    context.commit('appendPet', payload)
    // 1)commit('appendPet', pet)
    // 2)context.commit('appendPet', pet)
  }

}
// MUTATIONS UPDATE STATE FOR YOU
// ACTION CALLED A MUTATION THAT UPDATE STATE
