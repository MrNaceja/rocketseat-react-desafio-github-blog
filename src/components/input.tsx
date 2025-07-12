import { cx } from 'class-variance-authority'
import type { ComponentProps } from 'react'

export const Input = ({ className, ...inputProps }: ComponentProps<'input'>) => {
    return (
        <input 
            className={cx(
                `
                bg-base-input rounded-md border border-base-border py-3 px-4 text-base-text placeholder:text-base-label font-style-text-m
                hover:border-brand
                `,
                className
            )}
            {...inputProps}
        />
    )
}