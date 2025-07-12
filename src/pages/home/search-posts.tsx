import { Input } from '@/components/input'

export const SearchPosts = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex items-center justify-between'>
                <h4 className='font-style-title-s text-base-subtitle'>Publicações</h4>
                <span className='text-base-span font-style-text-s'>6 publicações</span>
            </div>
            <search className='**:w-full'>
                <form>
                    <Input
                        placeholder='Buscar conteúdo'
                    />
                </form>
            </search>
        </div>
    )
}