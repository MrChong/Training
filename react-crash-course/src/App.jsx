import { Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './Pages/HomePage';
import JobsPage from './Pages/JobsPage';
import NotFoundPage from './Pages/NotFoundPage';
import JobPage,{jobLoader} from './Pages/JobPage';
import AddJobPage from './Pages/AddJobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/add-Job' element={<AddJobPage/>}/>
      <Route path='/job/:id' element={<JobPage/>} loader ={jobLoader}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Route>)
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App