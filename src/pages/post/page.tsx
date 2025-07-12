import { MarkdownPreview } from '@/components/markdown-preview'
import { PostInfo } from '@/pages/post/post-info'
import { redirect, useParams } from 'react-router'

const markup = `

**React** é uma biblioteca JavaScript criada pelo Facebook para construir interfaces de usuário de forma **rápida, modular e reativa**.

### Principais Vantagens:
- ✔️ Componentes reutilizáveis
- ⚡ Atualizações eficientes com o Virtual DOM
- 🔁 Integração fácil com outras libs e frameworks

Ideal para quem busca **performance e escalabilidade** no front-end!

~~~js
let foo = 42;   // foo is now a number
foo = ‘bar’;    // foo is now a string
foo = true;     // foo is now a boolean
~~~
---

#ReactJS #JavaScript #FrontEnd #WebDev #Programação

`

export function PostPage() {
    const { id } = useParams<{ id: string }>()

    if (!id) {
        redirect('/404')
        return null
    }

    return (
        <section>
            <PostInfo />
            <MarkdownPreview className='py-10 px-8' markup={markup} />
        </section>
    )
}