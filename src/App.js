
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Main from './components/Main';
import { useState } from 'react';
import Rules from './components/Rules';

function App() {

  const [login, setLogin] = useState(false)

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Home />}>
        <Route index element={<Main login={login}/>} />
        <Route path="signUp" element={<SignUp setLogin={setLogin}/>} />
        <Route path="rules" element = {<Rules/>}/>
      </Route>
    )
  )



  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
