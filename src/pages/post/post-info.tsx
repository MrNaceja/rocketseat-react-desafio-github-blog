import { Link } from '@/components/link'
import { Calendar, ChevronLeft, ExternalLink, Github, MessageCircle } from 'lucide-react'

export const PostInfo = () => {
    return (
        <header className='bg-base-profile rounded-xl px-8 py-10 shadow -mt-24 flex flex-col gap-5'>
            <div className='flex items-center justify-between gap-2'>
                <Link to='/'>
                    <ChevronLeft />
                    <span>Voltar</span>
                </Link>
                <Link to="https://github.com/MrNaceja">
                    <span>ver no github</span>
                    <ExternalLink />
                </Link>
            </div>

            <div className='flex flex-col gap-2'>
                <h1 className='font-style-title-l text-base-title flex-1'>Eduardo Toriani</h1>
                <aside className='flex items-center gap-6 flex-wrap'>
                    <div className='flex items-center gap-2'>
                        <Github size={18} className='text-base-label' />
                        <span className='text-base-subtitle font-style-text-m'>mrnaceja</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Calendar size={18} className='text-base-label' />
                        <time dateTime='2025-07-12T02:00:56.525Z' className='text-base-subtitle font-style-text-m'>Há 1 dia</time>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MessageCircle size={18} className='text-base-label' />
                        <span className='text-base-subtitle font-style-text-m'>5 comentários</span>
                    </div>
                </aside>
            </div>
        </header>
    )
}