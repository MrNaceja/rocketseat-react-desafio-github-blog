import { Link } from '@/components/link'
import { ApiServiceFetchUserError, fetchUser, type GithubUser } from '@/services/github/fetch-user.service'
import { Building, ExternalLink, Github, Users } from 'lucide-react'
import { useCallback, useEffect, useState, type PropsWithChildren } from 'react'

export const Profile = () => {
    const [user, setUser] = useState<GithubUser | null>(null)
    const [isLoadingUser, setIsLoadingUser] = useState(true)
    const [loadUserError, setLoadUserError] = useState<ApiServiceFetchUserError | null>(null)

    const loadUser = useCallback(async () => {
        setIsLoadingUser(true)

        try {
            setUser(await fetchUser())
        }
        catch (e) {
            setLoadUserError(e as ApiServiceFetchUserError)
        }
        finally {
            setIsLoadingUser(false)
        }

    }, [])


    useEffect(() => {
        if (!user) {
            loadUser()
        }
    }, [user, loadUser])
    return (
        <header className='bg-base-profile rounded-xl px-8 py-10 shadow -mt-24 flex flex-col sm:flex-row gap-8'>
            <ProfileSkeleton visible={isLoadingUser || !user}>
                {
                    loadUserError
                        ? (
                            <span>{loadUserError.message} ({loadUserError.cause?.message})</span>
                        )
                        : (
                            <>
                                <img
                                    src={user?.avatar_url}
                                    alt=""
                                    className='rounded-lg size-36 aspect-square'
                                />
                                <div className='flex flex-col gap-6 justify-between flex-1'>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center justify-between'>
                                            <h1 className='font-style-title-l text-base-title flex-1'>{user?.name}</h1>
                                            <Link to={user?.profile_url as string}>
                                                <span>github</span>
                                                <ExternalLink />
                                            </Link>
                                        </div>
                                        <p className='text-base-text font-style-text-m'>{user?.bio}</p>
                                    </div>

                                    <aside className='flex items-center gap-6 flex-wrap'>
                                        <div className='flex items-center gap-2'>
                                            <Github size={18} className='text-base-label' />
                                            <span className='text-base-subtitle font-style-text-m lowercase'>{user?.login}</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <Building size={18} className='text-base-label' />
                                            <span className='text-base-subtitle font-style-text-m'>{user?.company}</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <Users size={18} className='text-base-label' />
                                            <span className='text-base-subtitle font-style-text-m'>{user?.amount_followers} seguidore(s)</span>
                                        </div>
                                    </aside>
                                </div>
                            </>
                        )
                }

            </ProfileSkeleton>
        </header >
    )
}

const ProfileSkeleton = ({ children, visible }: PropsWithChildren & { visible: boolean }) => {
    return (
        !visible ? children : (
            <>
                <span className='rounded-lg size-36 aspect-square bg-base-border' />
                <div className='flex flex-col gap-3 justify-between w-full'>
                    <span className='w-3/4 h-4 bg-base-border rounded-xs' />
                    <div className='flex flex-col gap-1 w-full flex-1'>
                        <span className='w-1/2 h-2 bg-base-border rounded-xs' />
                        <span className='w-1/2 h-2 bg-base-border rounded-xs' />
                        <span className='w-1/2 h-2 bg-base-border rounded-xs' />
                    </div>
                    <div className='flex items-center gap-6 flex-wrap'>
                        <div className='flex items-center gap-2'>
                            <span className='size-6 bg-base-border rounded-sm' />
                            <span className='w-20 h-3 bg-base-border rounded-xs' />
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='size-6 bg-base-border rounded-sm' />
                            <span className='w-20 h-3 bg-base-border rounded-xs' />
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='size-6 bg-base-border rounded-sm' />
                            <span className='w-20 h-3 bg-base-border rounded-xs' />
                        </div>
                    </div>
                </div>
            </>
        )
    )
}