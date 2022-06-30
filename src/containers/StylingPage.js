import { InlineStyledComponentExample1, InlineStyledComponentExample2 } from "../components/01_Styling/InlineStyledComponentExample"
import { ClassStyledComponentExample1, ClassStyledComponentExample2 } from "../components/01_Styling/ClassStyledComponentExample"

// This is container
// This a page
// Will be used in our routing
// Route => /examples/styling
const StylingPage = () => {
    return (
        <>
            <InlineStyledComponentExample1 />
            <InlineStyledComponentExample2 />
            <ClassStyledComponentExample1 />
            <ClassStyledComponentExample2 />
        </>
    )
}

export default StylingPage