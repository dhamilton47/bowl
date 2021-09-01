/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState} from "react";
import { Link, Redirect } from 'react-router-dom';

import PlayerDataService from '../../services/player.service';

export default () => {
  const [teamId, setTeamId] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [year, setYear] = useState(null);

  const [submitted, setSubmitted] = useState(false);

  const onTeamIdChange = e => setTeamId(e.target.value);
  const onFirstNameChange = e => setFirstName(e.target.value);
  const onLastNameChange = e => setLastName(e.target.value);
  const onYearChange = e => setYear(e.target.value);

  const savePlayer = () => {
    const player = {
      teamId: teamId,
      first_name: firstName,
      last_name: lastName,
      year: year
    };

    PlayerDataService.create(player)
      .then(res => {
        setTeamId(res.data.teamId);
        setFirstName(res.data.first_name);
        setLastName(res.data.last_name);
        setYear(res.data.year);

        setSubmitted(true);

        console.log("Record number", res.data.id, "created.");
      })
      .catch(e => {
        console.log(e);
      });

    <Redirect to='/team-roster' />
  };

  return (
    <div sx={{m: `0 auto`, width: `900px`}}>
      <h3>Add a New Player</h3>
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
            Team:
            <span>
              <input
                type="text"
                name="teamId"
                placeholder="Enter your teamId."
                onChange={onTeamIdChange}
              />
            </span>
          </div>
          
          <div sx={{ m: `10px 0` }}>
            First Name:
            <span>
              <input
                type="text"
                name="firstName"
                placeholder="Enter player's first name."
                onChange={onFirstNameChange}
              />
            </span>
          </div>
          
          <div sx={{ m: `10px 0` }}>
            Last Name:
            <span>
              <input
                type="text"
                name="lastName"
                placeholder="Enter player's last name."
                onChange={onLastNameChange}
              />
            </span>
          </div>
          
          <div sx={{ m: `10px 0` }}>
            Year: 
            <span>
              <input
                type="text"
                name="year"
                placeholder="Enter the year the player is expect to graduate."
                onChange={onYearChange}
              />
            </span>
          </div>
          
          <li
            sx={{
              variant: `lis.success_medium`,
              display: `inline-block`,
            }}
            onClick={savePlayer}
          >
            Create Player
          </li>

          <Link
            to={`/team-roster`}
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
