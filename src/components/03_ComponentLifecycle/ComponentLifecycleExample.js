import * as React from "react"

export class ComponentLifecycleExample extends React.Component {
    
    // Initialization phase
    constructor(props){
        super(props)

        this.state = {
            message: "hello wolrd"
        }

        console.log("Component Initialized ...")
    }

    // Executed onload 
    // Loaded for the fist time
    // Render is executed for the first time
    componentDidMount(){
        console.log("Component did mount!")
    }

    componentDidUpdate(){
        console.log("Component did update!")
    }

    render(){

        console.log("Component as rendered ...")

        return(
            <>
                <input 
                    onChange={e => this.setState({message: e.target.value})}
                    type="text" 
                    placeholder="Type a message ..."
                />
                <h1>{this.state.message}</h1>
            </>
        )
    }
}