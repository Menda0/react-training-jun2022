import * as React from "react"

// Component have a property name
// <PropsComponentExample1 name="Sergiu" />
// Can reused the same component
export class PropsComponentExample1 extends React.Component{

    render(){
        return <p>Hello student, {this.props.name}</p>
    }
}

export class PropsComponentExample2 extends React.Component{

    // Uses children
    // Children are a default property of every component
    // Children are the sub components inside a component
    // High order component
    render(){
        return (
            <div style={{background: "red"}}>
                {this.props.children}
            </div>
        )
    }
}