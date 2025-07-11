import { HomePage } from '@/pages/home/page'
import { Layout } from '@/pages/layout'
import { PostPage } from '@/pages/post/page'
import { BrowserRouter, Route, Routes } from 'react-router'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/posts/:id" index element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}