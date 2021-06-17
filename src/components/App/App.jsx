/** @jsx jsx */
import { jsx } from 'theme-ui';
// import React from "react";
import { Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';

import Splash from '../Splash/Splash'
import Match from '../Match/Match';
import AddMatch from '../Match/AddMatch';
import TeamsList from '../Team/TeamsList';
import AddTeam from '../Team/AddTeam';
import Game from '../Game/Game';

export default () => {
  return (
    <div
      sx={{ fontFamily: `Arial` }}
    >
      <nav
        sx={{
          background: 'black',
          display: 'block',
          listStyle: 'none',
          width: '100%',
          height: '60px',
        }}
      >
        <a href="/"
          sx={{
            color: 'white',
            fontSize: '2rem',
            height: '60px',
            lineHeight: '60px',
            padding: '0 10px',
            textDecoration: 'none',
            width: '150px',
          }}
        >
          Bowling Experimenting
        </a>
        <div
          sx={{
            display: 'inline-block',
          }}
        >
          <li
            sx={{
              display: 'inline-block',
            }}
          >
            <Link
              to="/team-info"
              sx={{
                color: 'gray',
                fontSize: '1.25rem',
                height: '60px',
                lineHeight: '60px',
                padding: '0 10px',
                textDecoration: 'none',
                width: '150px',
              }}
            >
              Team Information
            </Link>
          </li>
          <li
            sx={{
              display: 'inline-block',
            }}
          >
            <Link
              to="/match-info"
              sx={{
                color: 'gray',
                fontSize: '1.25rem',
                height: '60px',
                lineHeight: '60px',
                padding: '0 10px',
                textDecoration: 'none',
                width: '150px',
              }}
            >
              Match Information
            </Link>
          </li>
        </div>
      </nav>

      <div sx={{ mt: `60px` }} >
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/match-info" component={Match} />
          {/*
          <Route exact path="/match-info/add" component={AddMatch} />
          <Route exact path="/match-info/:id" component={Match} />
          */}
          <Route exact path="/team-info" component={TeamsList} />
          <Route exact path="/add-team" component={AddTeam} />
          {/*
          <Route path="/team-info/add" component={AddTeam} />
          <Route path="/team-info/:id" component={Team} />
          
          {/*<Route exact path="/team-info" component={Team} />
          */}
        </Switch>
      </div>
    </div>
  )
};