import { MarkdownPreview } from '@/components/markdown-preview'
import type { GithubPost } from '@/services/github/posts.service'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router'

interface CardPostProps {
    post: GithubPost
}
export const CardPost = ({ post }: CardPostProps) => {
    const navigate = useNavigate()
    
    const createdAtDate = new Date(post.created_at)
    const humanCreatedAtFormat = format(createdAtDate, "'Criado em' d 'de' MMMM 'de' yyyy 'às' p", { locale: ptBR })
    const relativeCreatedAtFormat = formatDistanceToNow(createdAtDate, { locale: ptBR, addSuffix: true })

    const handlePressCard = () => {
        navigate(`/posts/${post.id}`)
    }   

    return (
        <article 
            onClick={handlePressCard}
            className='rounded-xl border border-transparent hover:border-base-border bg-base-post p-8 flex flex-col gap-5'
        >
            <div className='flex justify-between gap-2'>
                <h3 className='font-style-title-m text-base-title line-clamp-2 flex-1'>{post.title}</h3>
                <time className='text-base-span font-style-text-s' dateTime={createdAtDate.toISOString()} title={humanCreatedAtFormat}>{relativeCreatedAtFormat}</time>
            </div>
            <MarkdownPreview markup={post.content} className='line-clamp-4'/>
        </article>
    )
}