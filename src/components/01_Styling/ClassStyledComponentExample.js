import * as react from "react"
import "./styles.css"
import styles from "./styles.module.css"

export class ClassStyledComponentExample1 extends react.Component{

    // Class styled component
    // <h1 class="header">...</h1> 
    // Css Colision
    render(){
        return <h1 className="header">hello world</h1>
    }
}

export class ClassStyledComponentExample2 extends react.Component{
    // Solve our CSS colision
    // <h1 class="styles_header__3BMF9">...</h1>
    render(){
        return <h1 className={styles.header}>hello world</h1>
    }
}