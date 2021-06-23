/** @jsx jsx */
import { jsx } from 'theme-ui';
// import React from "react";
import { Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';

import Splash from '../Splash/Splash'
import MatchesList from '../Match/MatchesList';
import AddMatch from '../Match/AddMatch';
import ScoreSheet from '../Match/ScoreSheet';
import TeamsList from '../Team/TeamsList';
import AddTeam from '../Team/AddTeam';
import TeamRoster from '../Player/TeamRoster';
import AddPlayer from '../Player/AddPlayer';
import Modal from './Modal';
import useModal from './useModal';

export default () => {
  const {isVisible, toggleModal} = useModal();

  return (
    <div
      sx={{ fontFamily: `Arial` }}
    >
      <nav
        sx={{
          backgroundColor: 'text',
          display: 'block',
          listStyle: 'none',
          width: '100%',
          height: '60px',
        }}
      >
        <a href="/" sx={{ variant: 'as.brand' }}>
          Bowling Experimenting
        </a>
        <div sx={{ display: 'inline-block' }}
        >
          <li sx={{ display: 'inline-block' }}>
            <Link to="/match-info" sx={{ variant: 'lis.top_nav' }}>
              Match Information
            </Link>
          </li>

          <li sx={{ display: 'inline-block' }}>
            <Link to="/scoresheet" sx={{ variant: 'lis.top_nav' }}>
              Score Sheet
            </Link>
          </li>

          <li sx={{ display: 'inline-block' }}>
            <Link to="/team-info" sx={{ variant: 'lis.top_nav' }}>
              Team Information
            </Link>
          </li>

          <li sx={{ display: 'inline-block' }}>
            <Link to="/team-roster" sx={{ variant: 'lis.top_nav' }}>
              Team Roster
            </Link>
          </li>

          <li sx={{ display: 'inline-block' }}>
            <Link to="/add-player" sx={{ variant: 'lis.top_nav' }}>
              Add Player
            </Link>
          </li>
        </div>
      </nav>

      <div sx={{ mt: `60px` }} >
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/match-info" component={MatchesList} />
          <Route exact path="/add-match" component={AddMatch} />
          <Route exact path="/scoresheet" component={ScoreSheet} />
          <Route exact path="/team-info" component={TeamsList} />
          <Route exact path="/add-team" component={AddTeam} />
          <Route exact path="/team-roster" component={TeamRoster} />
          <Route exact path="/add-player" component={AddPlayer} />
        </Switch>
      </div>
      <div>
        <button onClick={toggleModal}>
          Show modal
        </button>
        <Modal isVisible={isVisible} hideModal={toggleModal} />
      </div>
    </div>
  )
};