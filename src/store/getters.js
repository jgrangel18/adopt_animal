// Creating a getter that uses the state to modify the state and update the comnponents that you need

export default {
    animalsCount: (state) => {
        return state.cats.length + state.dogs.length
    }
}
