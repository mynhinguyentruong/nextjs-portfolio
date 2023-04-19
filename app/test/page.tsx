// Test Next.js Loading UI
import Loading from "./loading";

// With server component
export default async function Page() {

    // await, fetch the data inside the component

    return (
        <>
            <h1>Some dynamic data</h1>
            <Loading />
        </>

    )
}
