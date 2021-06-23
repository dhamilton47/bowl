/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Splash from '../Splash/Splash'

import AddMatch from './AddMatch';
import MatchDataService from '../../services/match.service';

export default () => {
  return (
    <div sx={{ ml: `200px` }}>
      Match
      <button
        type="button"
        sx={{
          color: `white`,
          backgroundColor: `green`,
          borderRadius: `3px`
        }}
      >
        New Match
      </button>

      <button
        type="button"
        sx={{
          color: `white`,
          backgroundColor: `green`,
          borderRadius: `3px`
        }}
      >
        Delete All Matches
      </button>


      <AddMatch />
    </div>
  )
}
