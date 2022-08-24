import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { AlbumList } from "./AlbumList"
import { Sidebar } from "./Sidebar"
import { TodoList } from "./TodoList"

export const ReactQuery = () => {
  return (
    <div style={{ display: 'flex', padding: '16px' }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <ErrorBoundary fallback={<h1>AlbumListエラーだよ〜</h1>}>
          <Suspense fallback={<p>AlbumListローディング中だよ〜</p>}>
            <AlbumList />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<h1>TodoListエラーだよ〜</h1>}>
          <Suspense fallback={<p>TodoListローディング中だよ〜</p>}>
            <TodoList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}
