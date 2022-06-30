import React from "react";

export class ChildComponentExample1 extends React.Component{
    render(){
        return <h1>this.props.message</h1>
    }
}

export class ParentComponentExample1 extends React.Component{

    // Comunication between parent to child
    render(){
        return <ChildComponentExample1 message="Hello world" />
    }
}

export class ChildComponentExample2 extends React.Component{
    render(){
        return <input 
            type="text" 
            placeholder="type a name ..." 
            onChange={e => this.props.changeName(e.target.value)}
        />
    }
}

export class ParentComponentExample2 extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            name: props.defaultName
        }
    }

    changeName(name){
        this.setState({name})
    }

    render(){
        <>
            <ChildComponentExample2 changeName={this.changeName.bind(this)}/>
            <p>Hello, {this.state.name}</p>
        </>
    }
}