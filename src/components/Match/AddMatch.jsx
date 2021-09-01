/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState} from "react";
import MatchDataService from '../../services/match.service';
import Status from '../App/Status';
import useStatus from '../App/useStatus';

export default () => {
  const { matchId, setMatchId } = useState('');
  const { team, setTeam } = useState('');
  const { opponent, setOpponent } = useState('');
  const { home, setHome } = useState(false);

  const { submitted, setSubmitted } = useState(false);

  return (
    <div sx={{ ml: `200px`}}>
      Hello from the Match page
      <div 
        sx={{
          m: `10px 0`,
        }}
      >
        Team:
        <span>
          <input type="text" name="teamName" placeholder="Enter you team's name" />
        </span>
      </div>
      
      <div 
        sx={{
          m: `10px 0`,
        }}
      >
        Home:
        <span>
          <input type="checkbox" id="homeOption"  name="homeOption" value="false" />
        </span>
      </div>
      
      <div 
        sx={{
          m: `10px 0`,
        }}
      >
        Opponent: 
        <span>
          <input type="text" name="teamName" placeholder="Enter you team's name" />
        </span>
      </div>
      
      <div 
        sx={{
          m: `10px 0`,
        }}
      >
        Date:
        <span>
          <input type="date" id="start" name="trip-start"  min="2018-01-01" max="2022-12-31" />
         </span>
      </div>
      
      <button
        type="submit"
        sx={{
          color: `white`,
          backgroundColor: `green`,
          borderRadius: `3px`
        }}
      >
        Create Match
      </button>
      
      <button
        type="submit"
        sx={{
          color: `white`,
          backgroundColor: `green`,
          borderRadius: `3px`
        }}
      >
        Delete Match
      </button>
    </div>
  )
}
