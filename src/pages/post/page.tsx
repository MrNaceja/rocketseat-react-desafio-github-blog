import { MarkdownPreview } from '@/components/markdown-preview'
import { usePostById } from '@/hooks/use-post-by-id'
import { PostInfo } from '@/pages/post/post-info'
import { redirect, useParams } from 'react-router'

export function PostPage() {
    const { id } = useParams<{ id: string }>()
    const { post, isPending: isLoadingPost, error: loadPostError } = usePostById(id as number | undefined)

    if (!id) {
        redirect('/404')
        return null
    }

    if (isLoadingPost) {
        return <h3>Carregando post...</h3>
    }

    if (loadPostError) {
        return (
            <>
                <div>Problemas ao carregar o post</div>
                <span>{loadPostError.message}</span>
            </>
        )
    }

    return (
        <section>
            <PostInfo post={post!} />
            <MarkdownPreview className='py-10 px-8' markup={post!.content || ''} />
        </section>
    )
}