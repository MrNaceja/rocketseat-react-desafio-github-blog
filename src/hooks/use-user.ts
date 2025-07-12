import { ApiServiceFetchUserError, fetchUser, type GithubUser } from '@/services/github/users.service'
import { useQuery } from '@tanstack/react-query'

export function useUser() {
    const { data: user, ...userQuery } = useQuery<GithubUser, ApiServiceFetchUserError>({
        queryKey: ['user'],
        queryFn: fetchUser,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    })

    return {
        user: user || null,
        ...userQuery
    }
}