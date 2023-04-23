const initialState = {
    views: {
        bathroom: false,
        kitchen: false,
        bedroom: false,
        living: false,
        study: false
    },
    discovered: {
        bathroom: false,
        kitchen: false,
        bedroom: false,
        living: false,
        study: false,
        key: false
    },
    showClue: false,
    renderKey: false,
    clueText: 'Look at you! Water water everywhere and not a drop to drink!',
    showInitial: true,
    success: false,
    completed: false,
    elapsedTime: 0,
    noOfInteractions: 0
}

const newState = {
    views: {
        bathroom: true,
        kitchen: false,
        bedroom: false,
        living: false,
        study: true
    },
    discovered: {
        bathroom: false,
        kitchen: false,
        bedroom: true,
        living: false,
        study: true,
        key: false
    },
    showClue: true,
    renderKey: false,
    clueText: 'Look at you! Water water everywhere and not a drop to drink!',
    showInitial: true,
    success: false,
    completed: false,
    elapsedTime: 0,
    noOfInteractions: 0
}

const user = {
    name: 'Good Named Guy',
    email: 'good@named.guy',
    password: 'goodpassword',
    game: initialState
}

module.exports = { user, initialState, newState }