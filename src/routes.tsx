import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import Album from './pages/Album'
import NotFoundPage from './pages/NotFound'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/albums/:artist' exact component={Album} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
