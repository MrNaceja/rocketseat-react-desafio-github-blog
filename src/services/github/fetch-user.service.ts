import { api } from '@/services/github/api'

import { author } from '../../../package.json'
import { AxiosError, isAxiosError } from 'axios'

export interface GithubUser {
    name: string,
    profile_url: string,
    login: string,
    id: number,
    company: string,
    bio: string,
    amount_followers: number,
    amount_repos: number,
    avatar_url: string
}
type FetchUserServiceResponse = {
    login: string,
    id: number,
    avatar_url: string
    html_url: string,
    name: string,
    company: string,
    bio: string,
    public_repos: number,
    followers: number
} 

export class ApiServiceFetchUserError extends AxiosError {
    constructor(cause: Error, status: string) {
        super('Falha ao carregar usuário do github.')
        this.cause = cause
        this.code = status
    }
}
export async function fetchUser(): Promise<GithubUser> {
    try {
        const userResponse = (await api.get<FetchUserServiceResponse>(`/users/${author}`)).data
        return {
            name: userResponse.name,
            profile_url: userResponse.html_url,
            login: userResponse.login,
            amount_followers: userResponse.followers,
            amount_repos: userResponse.public_repos,
            avatar_url: userResponse.avatar_url,
            bio: userResponse.bio,
            company: userResponse.company,
            id: userResponse.id
        }
    }
    catch (e) {
        throw new ApiServiceFetchUserError(e as Error, (isAxiosError(e) && e.code) ? e.code : '500')
    }
}