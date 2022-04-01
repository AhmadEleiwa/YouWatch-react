import React from "react";
import './App.css'

import { useEffect } from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from'react-router-dom'
import MoviePage from "./movie/Pages/MoviePage";
import Header from './shared/components/header/Header'
import { NavLink } from "react-router-dom";
import Button from "./shared/components/form-component/button/Button";

import Input from "./shared/components/form-component/input/Input";
import { VALIDATOR_REQUIRE } from "./shared/utils/validators";

import { useForm } from "./shared/components/hooks/form-hook";
import Form from "./shared/components/form-component/Form";
import SearchInput from "./shared/components/form-component/custom/search-input/SearchInput";
import Auth from "./movie/Pages/Auth";

import PlayerPage from "./movie/Pages/PlayerPage";
const App = () =>{

  const [formState, inputHandler, setFormData] = useForm(
    {},
    false
  );

  return <div>
  
    <Router>
      <Header 
      className='Header'
      theme='dark'  
      
      links={[
      <Button  color='darkblue'  to={'/'}> My List</Button>,
      <Button color='darkblue' to={'/'}>My Movies</Button>,
      <Button color='darkblue' inverse  to={'/auth'}>Login</Button>]}
      title='You Watch'
      titleTo='/'
      >
         <Form noborder nocolor >
            <SearchInput  onInput={inputHandler} color='dark' searchIconColor='dark' >search</SearchInput>
         </Form>

      </Header>
        
      <main>
      <Switch>
        <Route path="/" exact>
          <MoviePage />
        </Route>
        <Route path={'/auth'}>
          <Auth/>
        </Route>
        <Route path={'/player/:videoId'} exact >
          <PlayerPage />
        </Route>
        <Redirect to='/'/>
      </Switch>
      </main>
    </Router>
  </div>
}

export default App