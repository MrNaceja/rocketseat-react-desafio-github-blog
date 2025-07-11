import logoGithubBlog from '@/assets/logo-github-blog.svg'
import { cx } from 'class-variance-authority'

interface LogoProps {
    className?: string
}
export const Logo = ({ className }: LogoProps) => {
    return (
        <figure className={cx('[&>img]:size-48 sm:[&>img]:size-36', className)}>
            <img 
                src={logoGithubBlog}
                alt="Logotipo Github Blog"
            />
            <figcaption className='sr-only'>Logotipo Github Blog</figcaption>
        </figure>
    )
}