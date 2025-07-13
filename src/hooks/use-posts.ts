import { fetchPosts, type ApiServiceFetchPostsError, type GithubPost } from '@/services/github/posts.service'
import { useQuery } from '@tanstack/react-query'

export function usePosts(filter?: string) {
    const { data: posts, ...postsQuery } = useQuery<GithubPost[], ApiServiceFetchPostsError>({
        queryKey: ['posts', filter],
        async queryFn() {
            return await fetchPosts(filter)
        },
        staleTime: 5 * 60 * 1000, // 5 minutos
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    })

    return {
        posts: posts || [],
        ...postsQuery 
    }
}