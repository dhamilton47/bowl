/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState} from "react";
import TeamDataService from '../../services/team.service';

export default () => {
  const team = {
    school_name: "",
    school_mascot: "",
    city: "",
    state: ""
  };

  const [ schoolName, setSchoolName ] = useState('');
  const [ schoolMascot, setSchoolMascot ] = useState('');
  const [ city, setCity ] = useState('');
  const [ state, setState ] = useState(false);

  const [ submitted, setSubmitted ] = useState(false);

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
      })
  };

  return (
    <div sx={{ ml: `200px` }}>
      <h3>Add a New Team</h3>
      {
        submitted ? 
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
          <div 
            sx={{
              m: `10px 0`,
            }}
          >
            School Name:
            <span>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                placeholder="Enter you school's name"
                onChange={onSchoolNameChange}
                required
              />
            </span>
          </div>
          
          <div 
            sx={{
              m: `10px 0`,
            }}
          >
            School Mascot:
            <span>
              <input
                type="text"
                id="schoolMascot"
                name="homeOption"
                placeholder="Enter you school mascot"
                onChange={onSchoolMascotChange}
                required
              />
            </span>
          </div>
          
          <div 
            sx={{
              m: `10px 0`,
            }}
          >
            City: 
            <span>
              <input
                type="text"
                id="schoolCity"
                name="schoolCity"
                placeholder="Enter you city's name"
                onChange={onCityChange}
                required
              />
            </span>
          </div>
          
          <div 
            sx={{
              m: `10px 0`,
            }}
          >
            State:
            <span>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="Enter you state's name"
                onChange={onStateChange}
                required
              />
            </span>
          </div>
    
          <button
            type="button"
            sx={{
              color: `background`,
              backgroundColor: `success`,
              borderRadius: `3px`,
              m: `5px 10px`
            }}
            onClick={saveTeam}
          >
            Create Team
          </button>
          
          <button
            type="submit"
            sx={{
              color: `background`,
              backgroundColor: `success`,
              borderRadius: `3px`,
              m: `5px 10px`
            }}
          >
            Delete Team
          </button>        
        </div>
      }

    </div>
  )
}
