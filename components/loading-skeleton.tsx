import clsx from 'clsx'
// This is Server Component -> compiled at build time

export default function SkeletonCard({ isLoading }: { isLoading?: boolean}) {
    return (
        <div
            className={clsx('rounded-2xl bg-gray-300/80 p-4', {
                'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/100 before:to-transparent':
                isLoading,
            })}
        >
            <div className="space-y-3">
                {/*<div className="h-14 rounded-lg bg-gray-300" />*/}
                <div className="h-3 w-11/12 rounded-lg bg-gray-300" />
                <div className="h-3 w-8/12 rounded-lg bg-gray-300" />
            </div>
        </div>
    )
}

