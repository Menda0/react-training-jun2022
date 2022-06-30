
export const initialState = {
    text: "Hello world"
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_MESSAGE:
            // Getting message from our action payload
            const message = action.payload
            // Change our state
            const newState = {...state, text: message}
            return newState
        default:
            return state
    }
}

export const actionTypes = {
    SET_MESSAGE: "MESSAGES/SET_MESSAGE"
}

export const actions = {
    setMessage: (message) => {
        return {
            type: actionTypes.SET_MESSAGE,
            payload: message
        }
    }
}