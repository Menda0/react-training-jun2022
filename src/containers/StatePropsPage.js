import { PropsComponentExample1, PropsComponentExample2 } from "../components/02_StateProps/PropsComponentExample"
import { StateComponentExample1 } from "../components/02_StateProps/StateComponentExample"

const StatePropsPage = () => {
    return (
        <>
            <PropsComponentExample1 name="Sergiu" />
            <PropsComponentExample1 name="Eduard" />
            <PropsComponentExample2 >
                <PropsComponentExample1 name="Sergiu" />
                <PropsComponentExample1 name="Eduard" />
            </PropsComponentExample2>
            <StateComponentExample1 defaultName="Marco"/>
        </>
    )
}

export default StatePropsPage