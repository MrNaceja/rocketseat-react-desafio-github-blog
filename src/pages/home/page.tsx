import { Posts } from '@/pages/home/posts'
import { Profile } from '@/pages/home/profile'

export function HomePage() {
    return (
        <article>
            <Profile />
            <Posts />
        </article>
    )
}