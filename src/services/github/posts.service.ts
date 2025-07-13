import { api, options } from '@/services/github/api'
import { AxiosError, isAxiosError } from 'axios'

export interface GithubPost {
    id: number,
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

type FetchIssueServiceResponse = {
    url: string,
    repository_url: string,
    html_url: string,
    number: number,
    title: string,
    user: {
        login: string,
        avatar_url: string,
        html_url: string,
    },
    comments: number,
    created_at: string,
    body: string,
}
type FetchIssuesServiceResponse = {
    items: FetchIssueServiceResponse[]
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
            id: issue.number
        }))
    }
    catch (e) {
        throw new ApiServiceFetchPostsError(e as Error, (isAxiosError(e) && e.code) ? e.code : '500')
    }
}

export class ApiServiceFetchPostByIdError extends AxiosError {
    constructor(cause: Error, status: string) {
        super('Falha ao buscar o post do github pelo id.')
        this.cause = cause
        this.code = status
    }
}
export async function fetchPostById(id: GithubPost['id']): Promise<GithubPost> {
    try {
        const issueResponse = (await api.get<FetchIssueServiceResponse>(
            `repos/${options.github_username}/${options.github_issues_posts_repository}/issues/${id}`
        )).data

        return ({
            amount_comments: issueResponse.comments,
            author: {
                avatar_url: issueResponse.user.avatar_url,
                profile_url: issueResponse.user.html_url,
                username: issueResponse.user.login
            },
            content: issueResponse.body,
            title: issueResponse.title,
            created_at: issueResponse.created_at,
            github_url: issueResponse.repository_url,
            id: issueResponse.number
        })
    }
    catch (e) {
        throw new ApiServiceFetchPostByIdError(e as Error, (isAxiosError(e) && e.code) ? e.code : '500')
    }
}