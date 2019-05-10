// LEER STATE MUTATIONS PORQUE AUN NO ENTIENDO ,........
export default {
  appendPet: (state, { species, pet }) => {
    state[species].push(pet)
  }
}
