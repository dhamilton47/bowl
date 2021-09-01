/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState} from "react";
import { Link, Redirect } from 'react-router-dom';

import TeamDataService from '../../services/team.service';

export default () => {
  const [schoolName, setSchoolName] = useState('');
  const [schoolMascot, setSchoolMascot] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const onSchoolNameChange = e => setSchoolName(e.target.value);
  const onSchoolMascotChange = e => setSchoolMascot(e.target.value);
  const onCityChange = e => setCity(e.target.value);
  const onStateChange = e => setState(e.target.value);

  const saveTeam = () => {
    const team = {
      school_name: schoolName,
      school_mascot: schoolMascot,
      city: city,
      state: state
    };

    TeamDataService.create(team)
      .then(res => {
        setSchoolName(res.data.school_name);
        setSchoolMascot(res.data.school_mascot);
        setCity(res.data.city);
        setState(res.data.state);

        setSubmitted(true);

        console.log("Record number", res.data.id, "created.");
      })
      .catch(e => {
        console.log(e);
      });
    
  };

  return (
    <div sx={{m: `0 auto`, width: `900px`}}>
      <h3>Add a New Team</h3>
      {submitted ? 
        <div>
          <Redirect to='/team-info' />
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
        </div>
      :
        <div>
          <div sx={{ m: `10px 0` }}>
           School Name:
            <span>
              <input
                type="text"
                name="schoolName"
                placeholder="Enter your school's name"
                onChange={onSchoolNameChange}
                required="required"
              />
            </span>
          </div>
          
          <div sx={{ m: `10px 0` }}>
            School Mascot:
            <span>
              <input
                type="text"
                name="homeOption"
                placeholder="Enter your school mascot."
                onChange={onSchoolMascotChange}
                required
              />
            </span>
          </div>
          
          <div sx={{ m: `10px 0` }}>
            City: 
            <span>
              <input
                type="text"
                name="schoolCity"
                placeholder="Enter your city."
                onChange={onCityChange}
                required
              />
            </span>
          </div>
          
          <div sx={{ m: `10px 0` }}>
            State:
            <span>
              <input
                type="text"
                name="state"
                placeholder="Enter your state."
                onChange={onStateChange}
                required
              />
            </span>
          </div>
    
          <li
            sx={{
              variant: `lis.success_medium`,
              display: `inline-block`,
            }}
            onClick={saveTeam}
          >
            Create Team
          </li>

          <Link
            to={`/team-info`}
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
