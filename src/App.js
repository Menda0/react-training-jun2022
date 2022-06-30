import React from "react"
import {InlineStyledComponentExample1, InlineStyledComponentExample2} from "./components/01_Styling/InlineStyledComponentExample"
import {ClassStyledComponentExample1, ClassStyledComponentExample2} from "./components/01_Styling/ClassStyledComponentExample"
import {PropsComponentExample1, PropsComponentExample2} from "./components/02_StateProps/PropsComponentExample"
import {StateComponentExample1} from "./components/02_StateProps/StateComponentExample"
import {ComponentLifecycleExample} from "./components/03_ComponentLifecycle/ComponentLifecycleExample"
import {HookExample1, HookExample2, HookExample3} from "./components/04_Hooks/HookComponentExample"
import Layout from "./layout"

class App extends React.Component{
  
  render(){
    return (
      <>
        {/* <InlineStyledComponentExample1 />
        <InlineStyledComponentExample2 />
        <ClassStyledComponentExample1 />
        <ClassStyledComponentExample2 />
        <PropsComponentExample1 name="Sergiu" />
        <PropsComponentExample1 name="Eduard" />
        <PropsComponentExample2 >
          <PropsComponentExample1 name="Sergiu" />
          <PropsComponentExample1 name="Eduard" />
        </PropsComponentExample2>
        <StateComponentExample1 defaultName="Marco"/>
        <ComponentLifecycleExample />
        <HookExample1 />
        <HookExample2 name="Sergiu" />
        <HookExample2 />
        <HookExample3 defaultName="Marco" /> */}
        <Layout/>
      </>
    )
  }
}

export default App