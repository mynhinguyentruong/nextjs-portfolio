// Test Next.js Loading UI
import Loading from "./loading";
import ReviewSkeleton from "../../components/review-skeleton";
import {Suspense} from "react";
import Review from "../../components/review";

// With server component
export default async function Page() {

    // await, fetch the data inside the component
    return (
        <>
            <h1>Some dynamic data</h1>
            {/* @ts-expect-error Async Server Component */}
            <Loading />
            {/*<ReviewSkeleton />*/}
            <Suspense fallback={<ReviewSkeleton/>}>
                <Review
                    {/* @ts-expect-error Async Server Component */}
                    data={fetch(
                        // We intentionally delay the reponse to simulate a slow data
                        // request that would benefit from streaming
                        `https://app-dir.vercel.app/api/reviews?delay=5000`,
                        {
                            // We intentionally disable Next.js Cache to better demo
                            // streaming
                            cache: 'no-store',
                        },
                    )}
                />
            </Suspense>
        </>

    )
}
