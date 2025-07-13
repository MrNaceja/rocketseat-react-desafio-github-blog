import { CardPost } from '@/components/card-post'
import { usePosts } from '@/hooks/use-posts'
import { SearchPosts } from '@/pages/home/search-posts'
import { useState, type PropsWithChildren } from 'react'

export const Posts = () => {
    const [searchFilter, setSearchFilter] = useState('')
    const { posts, isPending: isLoadingPosts, error: loadPostsError } = usePosts(searchFilter)

    return (
        <div className='flex flex-col gap-12 mt-20'>
            <SearchPosts onSearch={setSearchFilter} amountTotalPosts={posts.length} />
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <PostsListSkeleton visible={isLoadingPosts || posts.length == 0}>
                    {
                        loadPostsError
                            ? (
                                <span>{loadPostsError.message} ({loadPostsError.cause?.message})</span>
                            )
                            : (
                                posts.map((post) => (
                                    <li key={post.id}>
                                        <CardPost post={post} />
                                    </li>
                                ))
                            )
                    }
                </PostsListSkeleton>
            </ul>
        </div>
    )
}

const PostsListSkeleton = ({ children, visible }: PropsWithChildren & { visible: boolean }) => {
    return (
        !visible ? children : (
            <>
                {
                    Array.from({ length: 5 }).map((_, idx) => (
                        <li key={idx}>
                            <div
                                className='rounded-xl bg-base-post p-8 flex flex-col gap-5 min-h-56'
                            >
                                <div className='flex items-center justify-between gap-2'>
                                    <span className='h-5 w-1/2 bg-base-border' />
                                    <span className='h-2 w-6 bg-base-border' />
                                </div>
                                <div className='flex flex-col gap-1 w-full flex-1'>
                                    <span className='w-4/4 h-3 bg-base-border rounded-xs' />
                                    <span className='w-3/4 h-3 bg-base-border rounded-xs' />
                                    <span className='w-3/4 h-3 bg-base-border rounded-xs' />
                                    <span className='w-2/4 h-3 bg-base-border rounded-xs' />
                                </div>
                            </div>
                        </li>
                    ))
                }
            </>
        )
    )
}