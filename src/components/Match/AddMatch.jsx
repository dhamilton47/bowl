/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import MatchDataService from '../../services/match.service';
import Status from '../App/Status';
import useStatus from '../App/useStatus';

export default () => {
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [location, setLocation] = useState(false);
  const [date, setDate] = useState(Date.now());

  const [submitted, setSubmitted] = useState(false);
  const {isVisible, toggleModal} = useStatus();

  const onHomeTeamChange = e => setHomeTeam(e.target.value);
  const onAwayTeamChange = e => setAwayTeam(e.target.value);
  const onLocationChange = e => setLocation(e.target.value);
  const onDateChange = e => setDate(e.target.value);

  const saveMatch = () => {
    const match = {
      home_team: homeTeam,
      away_team: awayTeam,
      location: location,
      date: date
    };

    const create = MatchDataService.create(match)
      .then(res => {
        setHomeTeam(res.data.home_team);
        setAwayTeam(res.data.away_team);
        setLocation(res.data.location);
        setDate(res.data.date);

        setSubmitted(true);

        console.log("Record number", res.data.id, "created.");
//        return true;
      })
      .catch(e => {
        console.log(e);
//        return e;
      });
    /*
    if (create) {
      console.log(create);
      <Status isVisible={isVisible} hideModal={toggleModal} message={"Record added!"} />
    } else {
      console.log(create);
      <Status isVisible={isVisible} hideModal={toggleModal} message={create} />
    }
*/
  };

  const cancelAdd = () => { <Redirect to='/match-info' />};

  return (
    <div sx={{m: `0 auto`, width: `900px`}}>
      <h3>Add a New Match</h3>
      {submitted ? 
        <h5
          sx={{
            backgroundColor: `successMuted`,
            width: `200px`,
            height: `3rem`,
            lineHeight: `3rem`,
            textAlign: `center`,
            verticalAlign: `middle`
          }}
        >
          Successfully submitted!
        </h5>
      :
        <div>
          <div sx={{ m: `10px 0` }}>
            Home Team:
            <span>
              <input
                type="text"
                name="home-team"
                placeholder="Enter the home team's name"
                onChange={onHomeTeamChange}
              />
            </span>
          </div>
          
          <div sx={{ m: `10px 0` }}>
            Away Team: 
            <span>
              <input
                type="text"
                name="away_team"
                placeholder="Enter the away team's name"
                onChange={onAwayTeamChange}
              />
            </span>
          </div>
          
          <div sx={{ m: `10px 0` }}>
            Location:
            <span>
              <input
                type="text"
                name="location"
                placeholder="Enter the bowling alley"
                onChange={onLocationChange}
              />
            </span>
          </div>
          
          <div sx={{ m: `10px 0` }}>
            Date:
            <span>
              <input
                type="date"
                name="date"
                min="2018-01-01"
                max="2022-12-31"
                onChange={onDateChange}
              />
            </span>
          </div>
          
          <li
            sx={{
              variant: `lis.success_medium`,
              display: `inline-block`,
            }}
            onClick={saveMatch}
          >
            Create Match
          </li>

          <Link
            to={`/match-info`}
            sx={{
              variant: `lis.caution_medium`,
              display: `inline-block`,
              textDecoration: `none`
            }}
          >
            Cancel
          </Link>
        </div>
      }
    </div>
  )
}
