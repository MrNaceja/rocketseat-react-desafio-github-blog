import { CardPost } from '@/components/card-post'
import { SearchPosts } from '@/pages/home/search-posts'

const posts = Array.from({ length: 5 })

export const Posts = () => {
    return (
        <div className='flex flex-col gap-12 mt-20'>
            <SearchPosts />
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {posts.map((_, idx) => (
                    <li key={idx}>
                        <CardPost />
                    </li>
                ))}
            </ul>
        </div>
    )
}