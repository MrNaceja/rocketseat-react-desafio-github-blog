export const CardPost = () => {
    return (
        <article 
            className='rounded-xl border border-transparent hover:border-base-border bg-base-post p-8 flex flex-col gap-5'
        >
            <caption className='flex items-center justify-between gap-2'>
                <h3 className='font-style-title-m text-base-title'>Titulo do card</h3>
                <time className='text-base-span font-style-text-s' dateTime="2025-07-12T01:16:21.245Z">Há 1 dia</time>
            </caption>
            <p className='font-style-text-m text-base-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero, adipisci qui fuga molestias enim cumque rem aut tenetur, ipsum possimus quod doloremque harum cupiditate eveniet illum atque quaerat exercitationem.</p>
        </article>
    )
}