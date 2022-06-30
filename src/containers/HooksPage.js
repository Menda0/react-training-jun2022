import React from 'react'
import { HookExample1, HookExample2, HookExample3 } from '../components/04_Hooks/HookComponentExample'

export default function HooksPage() {
  return (
        <>
            <HookExample1 />
            <HookExample2 name="Sergiu" />
            <HookExample2 />
            <HookExample3 defaultName="Marco" /> 
        </>
  )
}
