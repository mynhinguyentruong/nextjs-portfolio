
const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent`;

function Skeleton() {
    return (
        <div className={`space-y-4 ${shimmer}`}>
            <div className="h-6 w-2/6 rounded-lg bg-gray-200" />
            <div className="h-4 w-1/6 rounded-lg bg-gray-200" />
            <div className="h-4 w-full rounded-lg bg-gray-200" />
            <div className="h-4 w-4/6 rounded-lg bg-gray-200" />
        </div>
    );
}

export default function ReviewSkeleton() {

    return (
        <div className="space-y-6 p-3">
            <div className={`h-7 w-2/5 rounded-lg bg-gray-300 ${shimmer}`} />

            <div className="space-y-8">
                <Skeleton />
                <Skeleton />
            </div>
        </div>
    )
}
