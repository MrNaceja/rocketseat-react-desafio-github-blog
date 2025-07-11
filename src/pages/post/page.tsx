import { NavLink, redirect, useParams } from 'react-router'

export function PostPage() {
    const { id } = useParams<{ id: string }>()

    if ( !id ) {
        redirect('/404')
        return null
    }

    return (
        <section>
            <h1>Post Page {id}</h1>
            <NavLink to="/">Voltar para home</NavLink>
        </section>
    )
}