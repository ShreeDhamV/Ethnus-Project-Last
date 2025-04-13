
import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import Share from './components/Share/Share';
import ApiNews from './components/ApiNews/apinews';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #f0f4f8, #e0e7ff)',
        paddingBottom: '20px',
      }}
    >
      <BrowserRouter>
        <Container
          maxWidth="xl"
          style={{
            paddingTop: '20px',
            paddingBottom: '20px',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <Navbar />
          <Switch>
            <Route path="/" exact component={() => <Redirect to="/posts" />} />
            <Route path="/posts" exact component={Home} />
            <Route path="/posts/search" exact component={Home} />
            <Route path="/share" exact component={Share} />
            <Route path="/apinews" exact component={ApiNews} />
            <Route path="/posts/:id" exact component={PostDetails} />
            <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
            <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
