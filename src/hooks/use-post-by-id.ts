import { ApiServiceFetchPostByIdError, fetchPostById, type GithubPost } from '@/services/github/posts.service'
import { useQuery } from '@tanstack/react-query'

export function usePostById(id?: GithubPost['id']) {
    const { data: post, ...postQuery } = useQuery<GithubPost|undefined, ApiServiceFetchPostByIdError>({
        queryKey: ['post', id],
        async queryFn() {
            if ( !id ) {
                return undefined
            }
            return await fetchPostById(id)
        },
        staleTime: 5 * 60 * 1000, // 5 minutos
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    })

    return {
        post,
        ...postQuery 
    }
}