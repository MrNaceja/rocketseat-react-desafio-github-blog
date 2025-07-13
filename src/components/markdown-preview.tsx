import { Link } from '@/components/link'
import type { ComponentProps } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula as codeTheme } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface MarkdownPreviewProps extends ComponentProps<'div'> {
    markup: string
}
export const MarkdownPreview = ({ markup, ...divProps }: MarkdownPreviewProps) => {
    return (
        <div {...divProps}>
            <Markdown
                remarkPlugins={[remarkGfm]}
                components={{
                    p: ({ children }) => (<p className='font-style-text-m text-base-text'>{children}</p>),
                    b: ({ children }) => (<strong className='font-bold'>{children}</strong>),
                    h1: ({ children }) => (<h1 className='font-style-title-l my-2'>{children}</h1>),
                    h2: ({ children }) => (<h2 className='font-style-title-m my-2'>{children}</h2>),
                    h3: ({ children }) => (<h3 className='font-style-title-s my-2'>{children}</h3>),
                    hr: () => (<hr className='border-t-base-border my-2'/>),
                    a: ({ children, href }) => (<Link to={href!}>{children}</Link>),
                    code: ({ children, className, ...rest }) => {
                        const languageMatched = /language-(\w+)/.exec(className || '')
                        return languageMatched ? (
                            <SyntaxHighlighter
                                PreTag="div"
                                children={String(children).replace(/\n$/, '')}
                                language={languageMatched[1]}
                                style={codeTheme}
                            />
                        ) : (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                        )
                    }
                }}
            >
                {markup}
            </Markdown>
        </div>
    )
}