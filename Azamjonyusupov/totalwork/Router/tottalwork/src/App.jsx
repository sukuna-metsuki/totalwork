import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from './components/Root/Root'
import { ErrorPage404 } from './components/ErrorPage404/ErrorPage404';
import TodoList, {loader as rootLoader} from './routes/TodoList/TodoList';
import { NoteBook } from './routes/NoteBook/NoteBook';



const qwerty = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage404 />,
    children: [
      {
        path: 'ToDO_List',
        element: <TodoList />,
        loader: rootLoader,
      },
      {
        path: 'NoteBOOK',
        element: <NoteBook />,
      }
    ]
  },

]);

function App() {
  return <RouterProvider router={qwerty} />
}
export default App
