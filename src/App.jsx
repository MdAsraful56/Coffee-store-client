import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import HomeLayout from './layout/HomeLayout'
import Main from './components/Main'
import AddCoffees from './components/AddCoffees'
import UpdateCoffee from './components/UpdateCoffee'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Main/> } >
        <Route index element={ <HomeLayout/> } />
        <Route path='addcoffee' element={ <AddCoffees/> } />
        <Route path='updatecoffee' element={ <UpdateCoffee/> } />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
