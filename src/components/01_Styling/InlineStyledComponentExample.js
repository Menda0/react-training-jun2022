import * as React from "react"

export class InlineStyledComponentExample1 extends React.Component{

    // Inline Styling
    // <h1 style="background-color: red; font-size:40px">...</h1>
    render(){
        return <h1 style={{backgroundColor:"red", fontSize:40}}>hello world</h1>
    }
}

const styles = {
    header:{
        backgroundColor: "green",
        fontSize: 50
    }
}

export class InlineStyledComponentExample2 extends React.Component{

    // This is a better aproach
    // More clean
    // Code efficent
    // Still inline styling
    // Inline Styling aswell
    // <h1 style="background-color: green; font-size:50px">...</h1>
    render(){
        return <h1 style={styles.header}>hello world</h1>
    }
}