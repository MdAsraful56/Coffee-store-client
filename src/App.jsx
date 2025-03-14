import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import HomeLayout from './layout/HomeLayout'
import Main from './components/Main'
import AddCoffees from './components/AddCoffees'
import UpdateCoffee from './components/UpdateCoffee'
import Error from './components/Error'
import Details from './components/Details'
// import Fuck from './components/Fuck'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Main/> } >
        <Route index element={ <HomeLayout/> } 
            loader={async () => {
            const response = await fetch('http://localhost:5000/coffee');
            if (!response.ok) {
              throw new Error('Failed to fetch coffees');
            }
            return response.json(); // Ensure JSON is returned
          }} />
        <Route path='*' element={ <Error/> } />
        <Route path='addcoffee' element={ <AddCoffees/> } />
        <Route path='updatecoffee/:id' element={ <UpdateCoffee/> } loader={async({params}) => {return fetch(`http://localhost:5000/updatecoffee/${params.id}`)}} />
        <Route path='details/:id' element={ <Details/> } loader={ async({params}) => {return fetch(`http://localhost:5000/details/${params.id}`)}} />
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
