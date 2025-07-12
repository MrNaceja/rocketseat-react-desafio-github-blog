import { NavLink, type NavLinkProps } from 'react-router'

export const Link = ({ children, ...linkProps }: NavLinkProps) => {
    return (
        <NavLink
            {...linkProps}
            className='uppercase font-style-component-link text-brand flex items-center gap-2 pb-2 border-b-2 border-transparent hover:border-brand [&>.lucide]:size-4'
        >
            <>
                {children}
            </>
        </NavLink>
    )
}