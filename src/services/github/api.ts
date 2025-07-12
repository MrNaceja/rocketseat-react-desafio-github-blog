import axios from 'axios'
import { author as github_username, name as github_issues_posts_repository } from '../../../package.json'

type ApiGithubOptions = {
    github_username: string, 
    github_issues_posts_repository: string,
}

export const options: ApiGithubOptions = {
    github_username,
    github_issues_posts_repository,
} 

export const api = axios.create({
    baseURL: 'https://api.github.com'
})