import BannerEffect from '@/assets/effect.svg?react'
import { Logo } from '@/components/logo';

export const Banner = () => {
    return (
        <figure className='w-full bg-base-profile grid place-items-center py-8 min-h-72 relative'>
            <BannerEffect className='absolute left-0 size-96 sm:size-auto' />
            <Logo className='mb-11' />
            <BannerEffect className='rotate-180 absolute right-0 size-96 sm:size-auto' />
        </figure>
    )
}