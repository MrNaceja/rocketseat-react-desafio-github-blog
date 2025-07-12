import { Link } from '@/components/link'
import { Building, ExternalLink, Github, Users } from 'lucide-react'

export const Profile = () => {
    return (
        <header className='bg-base-profile rounded-xl px-8 py-10 shadow -mt-24 flex flex-col sm:flex-row items-center gap-8'>
            <img
                src="https://github.com/MrNaceja.png"
                alt=""
                className='rounded-lg size-36 aspect-square'
            />
            <div className='flex flex-col gap-6 justify-between flex-1'>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between'>
                        <h1 className='font-style-title-l text-base-title flex-1'>Eduardo Toriani</h1>
                        <Link to="https://github.com/MrNaceja">
                            <span>github</span> 
                            <ExternalLink />
                        </Link>
                    </div>
                    <p className='text-base-text font-style-text-m'>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                </div>

                <aside className='flex items-center gap-6 flex-wrap'>
                    <div className='flex items-center gap-2'>
                        <Github size={18} className='text-base-label' />
                        <span className='text-base-subtitle font-style-text-m'>mrnaceja</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Building size={18} className='text-base-label' />
                        <span className='text-base-subtitle font-style-text-m'>IPM Sistemas</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Users size={18} className='text-base-label' />
                        <span className='text-base-subtitle font-style-text-m'>32 seguidores</span>
                    </div>
                </aside>
            </div>
        </header>
    )
}