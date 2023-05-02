import { StarIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

export default async function Review({ data }: { data: Promise<Response>}) {

    const reviews = await data.then((res) => res.json())

    return (
        // <div className="space-y-6">
        //     <div className="text-lg font-medium text-white">Customer Reviews</div>
        //     <div className="space-y-8">
        //         {reviews.map((review) => {
        //             return (
        //                 <div className="space-y-7">
        //                     <h3 className="text-2xl font-medium text-white">Customer Reviews</h3>
        //                     <div className="space-y-8">
        //                         {reviews.map((review) => {
        //                             return (
        //                                 <div key={review.id}>
        //                                     <div className="space-y-4">
        //                                         <div className="space-y-2">
        //                                             <div className="flex items-center gap-x-2">
        //                                                 <div className="h-6 w-6 rounded-full bg-gray-700" />
        //                                                 <div className="text-sm text-white">{review.name}</div>
        //                                             </div>
        //
        //                                             {review.rating ? (<div className="flex gap-x-1">
        //                                                 {Array.from({ length: 5 }).map((_, i) => {
        //                                                     return (
        //                                                         <StarIcon
        //                                                             key={i}
        //                                                             className={clsx('w-4', i < review.rating ? 'text-white' : 'text-gray-500')}
        //                                                         />
        //                                                     );
        //                                                 })}
        //                                             </div>) : null}
        //                                         </div>
        //
        //                                         <div className="text-gray-400">{review.text}</div>
        //                                     </div>
        //                                 </div>
        //                             );
        //                         })}
        //                     </div>
        //                 </div>
        //             )
        //         })}
        //     </div>
        // </div>
        <div className="space-y-6 p-3">
            <h1 className='text-gray-500 pt-10'>Done ✅</h1>

            <div className="space-y-8">
                <div className={`space-y-4`}>
                    <div className="h-6 w-2/6  " /> Something
                    <div className="h-4 w-1/6 " />Something
                    <div className="h-4 w-full " />Something
                    <div className="h-4 w-4/6 " />Something
                </div>
                <div className={`space-y-4 `}>
                    <div className="h-6 w-2/6 " />Something
                    <div className="h-4 w-1/6 " />Something
                    <div className="h-4 w-full " />Something
                    <div className="h-4 w-4/6 " />Something
                </div>
            </div>
        </div>
    )
}
