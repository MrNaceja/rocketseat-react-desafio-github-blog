import { Link } from '@/components/link'
import type { GithubPost } from '@/services/github/posts.service'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar, ChevronLeft, ExternalLink, Github, MessageCircle } from 'lucide-react'

interface PostInfoProps {
    post: GithubPost
}
export const PostInfo = ({ post }: PostInfoProps) => {
    const createdAtDate = new Date(post.created_at)
    const humanCreatedAtFormat = format(createdAtDate, "'Criado em' d 'de' MMMM 'de' yyyy 'às' p", { locale: ptBR })
    const relativeCreatedAtFormat = formatDistanceToNow(createdAtDate, { locale: ptBR, addSuffix: true })

    return (
        <header className='bg-base-profile rounded-xl px-8 py-10 shadow -mt-24 flex flex-col gap-5'>
            <div className='flex items-center justify-between gap-2'>
                <Link to='/'>
                    <ChevronLeft />
                    <span>Voltar</span>
                </Link>
                <Link to={post.author.profile_url}>
                    <span>ver no github</span>
                    <ExternalLink />
                </Link>
            </div>

            <div className='flex flex-col gap-2'>
                <h1 className='font-style-title-l text-base-title flex-1'>{post.title}</h1>
                <aside className='flex items-center gap-6 flex-wrap'>
                    <div className='flex items-center gap-2'>
                        <Github size={18} className='text-base-label' />
                        <span className='text-base-subtitle font-style-text-m lowercase'>{post.author.username}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Calendar size={18} className='text-base-label' />
                        <time 
                            dateTime={createdAtDate.toISOString()}
                            title={humanCreatedAtFormat}
                            className='text-base-subtitle font-style-text-m'
                        >
                            {relativeCreatedAtFormat}
                        </time>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MessageCircle size={18} className='text-base-label' />
                        <span className='text-base-subtitle font-style-text-m'>{post.amount_comments} comentário(s)</span>
                    </div>
                </aside>
            </div>
        </header>
    )
}