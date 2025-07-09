import logoGithubBlog from '@/assets/logo-github-blog.svg'

export const Logo = () => {
    return (
        <figure>
            <img 
                src={logoGithubBlog}
                alt="Logotipo Github Blog"
                className='size-36'
            />
            <figcaption className='sr-only'>Logotipo Github Blog</figcaption>
        </figure>
    )
}