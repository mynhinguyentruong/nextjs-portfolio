// Test Next.js Loading UI
import Loading from "./loading";
import ReviewSkeleton from "../../components/review-skeleton";

type Params = {
    params: {
        categorySlug: string
    },
    key: 'value'
}

// With server component
export default async function Page({ params }: Params) {

    // await, fetch the data inside the component

    return (
        <>
            <h1>Some dynamic data</h1>
            <Loading />
            <ReviewSkeleton />
        </>

    )
}
