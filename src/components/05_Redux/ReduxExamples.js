
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as messages from "../../store/message.duck"
import * as counter from "../../store/counter.duck"
import * as collections from "../../store/collections.duck"

export function ReduxExample1() {

    // Get text message from our store
    // useSelector is connect to our lifecycle
    // Whenever text is changed re render component
    const text = useSelector((state) => { return state.message.text})
    const dispatch = useDispatch()

    return (
        <>
            <input 
                onChange={e => dispatch(messages.actions.setMessage(e.target.value))}
                type="text" 
                placeholder="type a message" 
                defaultValue={text} 
            />
            <h1>{text}</h1>
        </>
    )
}

export const ReduxExample2 = () => {

    const value = useSelector(state => state.counter.value)
    const text = useSelector((state) => { return state.message.text})
    const dispatch = useDispatch()

    // This will trigger only one re render
    // TODO: Check more about this topic
    const onClick = () => {
        dispatch(counter.actions.increment())
        dispatch(messages.actions.setMessage("Hello Sergiu"))
    }

    console.log("Component rendered ...")
    
    return (
        <>
            <h1>Counter: {value}, {text}</h1>
            <button onClick={onClick} >Do all</button>
            <button onClick={()=> dispatch(counter.actions.increment())} >Increment</button>
            <button onClick={()=> dispatch(counter.actions.decrement())} >Decrement</button>
        </>
    )
}

export const ReduxExample3 = () => {

    const {data, error, isLoading} = collections.useGetCollectionsQuery()
    
    return (
        <>
            {isLoading && <h3>Is loading ...</h3>}
            {error && <h3>Error: {error}</h3>}
            {!isLoading && !error && 
                <ul>
                    {data?.collections.map(c => <li>{c.name}</li>)}
                </ul>
            }
        </>
    )
}