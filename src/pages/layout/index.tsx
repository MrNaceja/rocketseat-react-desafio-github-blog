import { Banner } from '@/pages/layout/banner'
import { Outlet } from 'react-router'

export function Layout() {
    return (
        <section className='min-h-screen w-full'>
            <Banner />
            <main className='container relative py-8'>
                <Outlet />
            </main>
        </section>
    )
}