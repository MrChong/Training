import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MainPage from './Pages/MainPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<MainPage/>}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router = {router}/>;
}

export default App;
