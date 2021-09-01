/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import AddMatch from './AddMatch';
import MatchDataService from '../../services/match.service';
import { formatDate } from '../../utilities/utilities';

const Match = props => {
  const initialState = {
    id: null,
    home_team: "",
    away_team: "",
    location: "",
    date: null
  };
  const [current, setCurrent] = useState(initialState);
  const [message, setMessage] = useState("");

  const getMatch = id => {
    MatchDataService.get(id)
      .then(res => {
        setCurrent(res.data);
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      })
  };

  useEffect(() => {
    getMatch(props.match.params.id)
  },[props.match.params.id]);

  const updateMatch = id => {};

  const deleteMatch = id => {};

  return (
    <div sx={{ ml: `200px` }}>
      {current ? (
        <div>
          <h3>Match</h3>
          <div>
            <label>Home Team</label>
            <input type="text" name="home_team" value={current.home_team} onChange={updateMatch} />
          </div>
          <div>
            <label>Away Team</label>
            <input type="text" name="away_team" value={current.away_team} onChange={updateMatch} />
          </div>
          <div>
            <label>Bowling Site</label>
            <input type="text" name="location" value={current.location} onChange={updateMatch} />
          </div>
          <div>
            <label>Date Played</label>
            <input
              type="text"
              name="date"
              value={(new Date(current.date)).slice(0, 10)}
              onChange={() => null}
            />
          </div>

          <nav>
            <button
              type="button"
              sx={{
                variant: `buttons.caution`,
                m: `5px 10px`
              }}
            >
              Edit
            </button>

            <button
              type="button"
              sx={{
                variant: `buttons.warning`,
                m: `5px 10px`
              }}
            >
              Delete
            </button>        
          </nav>
        </div>
      )
      : null
      }
    </div>
  )
}

export default Match;