import axios from 'axios'
import { author as github_username, name as github_issues_posts_repository } from '../../../package.json'

type ApiGithubOptions = {
    github_username: string, 
    github_issues_posts_repository: string,
    aditional_delay_in_seconds: number
}

export const options: ApiGithubOptions = {
    github_username,
    github_issues_posts_repository,
    aditional_delay_in_seconds: 0
} 

export const api = axios.create({
    baseURL: 'https://api.github.com'
})

if ( options.aditional_delay_in_seconds > 0 ) {
    api.interceptors.response.use(async (response) => {
        await new Promise(ok => setTimeout(ok, (options.aditional_delay_in_seconds * 1000))) // Fake Delay
        response.data = response.data.data
        return response
    })
}