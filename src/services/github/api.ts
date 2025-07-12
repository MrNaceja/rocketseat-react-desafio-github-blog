import axios from 'axios'

const shouldUseMock = true

const URL_GITHUB_API_MOCK = 'http://localhost:3000'
const URL_GITHUB_API = 'https://api.github.com'

export const api = axios.create({
    baseURL: shouldUseMock ? URL_GITHUB_API_MOCK : URL_GITHUB_API
})

if ( shouldUseMock ) {
    api.interceptors.response.use(async (response) => {
        await new Promise(ok => setTimeout(ok, 3000)) // Fake Delay
        response.data = response.data.data
        return response
    })
}