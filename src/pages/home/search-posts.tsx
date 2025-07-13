import { Input } from '@/components/input'
import { useCallback, type FormEvent } from 'react'

interface SearchPostsProps {
    onSearch?: (searchTerm: string) => void,
    amountTotalPosts: number
}
export const SearchPosts = ({ onSearch, amountTotalPosts }: SearchPostsProps) => {

    const handleSearch = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget
        const search = (new FormData(form)).get('search')?.toString() || ''

        onSearch?.(search)
    }, [onSearch])

    return (
        <div className='flex flex-col gap-3'>
            <div className='flex items-center justify-between'>
                <h4 className='font-style-title-s text-base-subtitle'>Publicações</h4>
                <span className='text-base-span font-style-text-s'>{amountTotalPosts} publicações</span>
            </div>
            <search className='**:w-full'>
                <form onSubmit={handleSearch}>
                    <Input
                        placeholder='Buscar conteúdo'
                        name='search'
                    />
                </form>
            </search>
        </div>
    )
}