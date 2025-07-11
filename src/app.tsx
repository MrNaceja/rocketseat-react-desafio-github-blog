import { HomePage } from '@/pages/home/page'
import { PostPage } from '@/pages/post/page'
import { BrowserRouter, Route, Routes } from 'react-router'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/posts/:id" index element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  )
}