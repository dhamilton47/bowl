/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState} from "react";
import PlayerDataService from '../../services/player.service';

export default () => {
  /*
  const player = {
    playerId: 0,
    first_name: "",
    last_name: "",
    year: 0
  };
*/
  const [ teamId, setTeamId ] = useState(null);
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ year, setYear ] = useState(null);

  const [ submitted, setSubmitted ] = useState(false);

  const onTeamIdChange = e => setTeamId(e.target.value);
  const onFirstChange = e => setFirstName(e.target.value);
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
      })
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
            ID:
            <span>
              <input type="text" name="teamId" placeholder="Enter your teamId." onChange={onTeamIdChange} />
            </span>
          </div>
          
          <div sx={{ m: `10px 0` }}>
            First Name:
            <span>
              <input type="text" name="firstName" placeholder="Enter your first name." onChange={onFirstChange} />
            </span>
          </div>
          
          <div sx={{ m: `10px 0` }}>
            Last Name:
            <span>
              <input type="text" name="lastName" placeholder="Enter your last name." onChange={onLastNameChange} />
            </span>
          </div>
          
          <div sx={{ m: `10px 0` }}>
            Year: 
            <span>
              <input type="text" name="year" placeholder="Enter the year you expect to graduate. " onChange={onYearChange} />
            </span>
          </div>
          
          <button
            type="button"
            sx={{
              color: `white`,
              backgroundColor: `green`,
              borderRadius: `3px`
            }}
            onClick={savePlayer}
          >
            Create Player
          </button>
          
          <button
            type="submit"
            sx={{
              color: `white`,
              backgroundColor: `green`,
              borderRadius: `3px`
            }}
          >
            Delete Player
          </button>
        </div>
      }
    </div>
  )
}
