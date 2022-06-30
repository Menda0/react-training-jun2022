import React from "react";

export class StateComponentExample1 extends React.Component{

    constructor(props){
        super(props)

        // Initial state
        this.state = {
            name: props.defaultName
        }
    }

    render(){
        return(
            <>
                <input 
                    defaultValue={this.state.name}
                    onChange={e => this.setState({name: e.target.value})}
                    type="text" placeholder="type a name ..." 
                />
                <p>Hello, {this.state.name}</p>
            </>
        )
    }
}