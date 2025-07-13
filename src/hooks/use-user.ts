import { ApiServiceFetchUserError, fetchUser, type GithubUser } from '@/services/github/users.service'
import { useQuery } from '@tanstack/react-query'

export function useUser() {
    const { data: user, ...userQuery } = useQuery<GithubUser, ApiServiceFetchUserError>({
        queryKey: ['user'],
        queryFn: fetchUser,
        staleTime: 5 * 60 * 1000, // 5 minutos
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    })

    return {
        user,
        ...userQuery
    }
}