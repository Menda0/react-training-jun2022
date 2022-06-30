import { useState, useEffect } from "react"

export const HookExample1 = () => {

    // Render method
    return <h1>Hello World</h1>
}


// This functional component with props
// Decomposing props in diferent variables
export const HookExample2 = ({name = "Eduard"}) => {
    return <p>Hello, {name}</p>
}

// Using state with react hooks
export const HookExample3 = ({defaultName = "Eduard"}) => {

    // setName = this.setState({name:...})
    // name = this.state.name
    const [name, setName] = useState(defaultName)

    return (
        <>
            <input 
                onChange={e => setName(e.target.value)}
                placeholder="Type a name ..."  
                type="text"
            />
            <p>Hello, {name}</p>
        </>
    )
}

export const HookExample4 = ({defaultName = "Eduard"}) => {

    // setName = this.setState({name:...})
    // name = this.state.name
    const [name, setName] = useState(defaultName)

    // This is the same as component did mount
    useEffect(() => {
        console.log("Component did mount ...")

        return () => {} // Component unmount
    }, [])

    // This is component did update
    useEffect(() => {
        console.log("Component did update ...")
    }, [name])

    return (
        <>
            <input 
                onChange={e => setName(e.target.value)}
                placeholder="Type a name ..."  
                type="text"
            />
            <p>Hello, {name}</p>
        </>
    )
}

const useAttendeName = (defaultName) => {
// setName = this.setState({name:...})
    // name = this.state.name
    const [name, setName] = useState(defaultName)

    // This is the same as component did mount
    useEffect(() => {
        console.log("Component did mount ...")

        return () => {} // Component unmount
    }, [])

    // This is component did update
    useEffect(() => {
        console.log("Component did update ...")
    }, [name])

    return {name, setName}
}

export const HookExample5 = ({defaultName}) => {

    const {name, setName} = useAttendeName(defaultName)
    
    return (
        <>
            <input 
                onChange={e => setName(e.target.value)}
                placeholder="Type a name ..."  
                type="text"
            />
            <p>Hello, {name}</p>
        </>
    )
}