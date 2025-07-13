import { api, options } from '@/services/github/api'
import { AxiosError, isAxiosError } from 'axios'

export interface GithubPost {
    id: string,
    author: {
        avatar_url: string,
        profile_url: string,
        username: string
    },
    github_url: string,
    title: string,
    content: string,
    amount_comments: number,
    created_at: string  
}

type FetchIssuesServiceResponse = {
    items: [{
        url: string,
        repository_url: string,
        html_url: string,
        node_id: string,
        title: string,
        user: {
            login: string,
            avatar_url: string,
            html_url: string,
        },
        comments: number,
        created_at: string,
        body: string,
    }]
} 

export class ApiServiceFetchPostsError extends AxiosError {
    constructor(cause: Error, status: string) {
        super('Falha ao buscar posts do github.')
        this.cause = cause
        this.code = status
    }
}
export async function fetchPosts(filter: string = ''): Promise<GithubPost[]> {
    filter = (filter ? `${filter} ` : '')

    try {
        const issuesResponse = (await api.get<FetchIssuesServiceResponse>('/search/issues', {
            params: {
                q: `${filter}repo:${options.github_username}/${options.github_issues_posts_repository}`
            }
        })).data

        return issuesResponse.items.map(issue => ({
            amount_comments: issue.comments,
            author: {
                avatar_url: issue.user.avatar_url,
                profile_url: issue.user.html_url,
                username: issue.user.login
            },
            content: issue.body,
            title: issue.title,
            created_at: issue.created_at,
            github_url: issue.repository_url,
            id: issue.node_id
        }))
    }
    catch (e) {
        throw new ApiServiceFetchPostsError(e as Error, (isAxiosError(e) && e.code) ? e.code : '500')
    }
}