import { AlbumList } from "./AlbumList"
import { Sidebar } from "./Sidebar"
import { TodoList } from "./TodoList"

export const ReactQuery = () => {
  return (
    <div style={{ display: 'flex', padding: '16px' }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <AlbumList />
        <TodoList />
      </div>
    </div>
  ) 
}
