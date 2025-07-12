import { HomePage } from '@/pages/home/page'
import { Layout } from '@/pages/layout'
import { PostPage } from '@/pages/post/page'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <Providers>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/posts/:id" index element={<PostPage />} />
        </Route>
      </Routes>
    </Providers>
  )
}

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </QueryClientProvider>
  )
}