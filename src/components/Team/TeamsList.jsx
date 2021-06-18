/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import AddTeam from './AddTeam';
import TeamDataService from '../../services/team.service';

export default () => {
  const [searchTeam, setSearchTeam] = useState('');
  const [teamList, setTeamList] = useState([]);
  const [highlightedTeam, setHighlightedTeam] = useState(null);
  const [highlightedTeamIndex, setHighlightedTeamIndex] = useState(-1)
  
  useEffect(() => {
    TeamDataService.getAll()
        .then(res => {
          setTeamList(res.data);
          console.log("res.data:",res.data);
        })
        .catch(e => {
          console.log(e);
        })
    console.log("teams:",teamList)
  },[]);
  
  const refreshPointer = () => {
    setHighlightedTeam(null);
    setHighlightedTeamIndex(-1);
  }

  const onClickDeleteAll = () => {
    TeamDataService.deleteAll()
      .then(res => {
        console.log(res.data);
        refreshPointer();
      })
      .catch(e => console.log(e));
  }

  const onChangeSearchInput = (e) => {
    const searchInput = e.target.value;
    setSearchTeam(searchInput);
  }

  function searchTeam1() {
    setTeams(TeamDataService.findBySchoolName(searchTeam));
    console.log(teams);
  }

  const editTeamInfo = () => {}

  const setActiveTeam = (team, index) => {
    setHighlightedTeam(team);
    setHighlightedTeamIndex(index);
    console.log(highlightedTeam)
  }

  return (
    <div sx={{m: `0 auto`, width: `900px`}}>

      {/* Search Bar */}
      <div sx={{mb: `1rem`}}>
        <input
          type="text"
          placeholder="Search by high school"
          value={searchTeam}
          onChange={onChangeSearchInput}
          sx={{width:400, height: 30}} 
        />
        <span>
          <button
            type="button"
            sx={{height: 30}}
          >
              Search
          </button>
        </span>
      </div>

      <div sx={{
        alignItems: `flex-start`,
        border: `scaffold`,
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `flex-start`,
        width: `100%`
      }}>

        {/* Team List */}
        <div sx={{border: `scaffold`, width: `50%`, minHeight: `20rem`, maxHeight: `32rem`}}>
          <h3>High School Teams</h3>

          <div>
            <ul
              sx={{
                borderLeft: `lightgray 1px solid`,
                borderRight: `lightgray 1px solid`,
                borderTop: `lightgray 1px solid`,
                borderRadius: `5px`,
                pl: `0`,
                width: `90%`,
              }}
            >
              {teamList && teamList.map(team => (
                <li
                  key={team.id}
                  sx={{
                    borderBottom: `lightgray 1px solid`,
                    cursor: `pointer`,
                    listStyle: `none`,
                    ml: `0`,
                    p: `4px`,
                    '&:hover': {
                      bg: `lightblue`,
                      color: `white`
                    },
                  }}
                  onClick={() => setActiveTeam(team.school_name, team.id)}
                >
                  {team.school_name}
                </li>
              ))}
            </ul>
          </div>

          <nav>
            <div
              sx={{
                display: `inline-block`,
                width: `100%`
              }}
            >
              <li
                sx={{
                  variant: 'lis.success_medium',
                  display: `inline-block`,
                }}
              >
                <Link
                  to={'/add-team'}
                  sx={{
                    color: 'inherit',
                    fontSize: `14px`,
                    textDecoration: `none`,
                  }}
                >
                  Add New Team
                </Link>
              </li>

              <li
                sx={{
                  variant: 'lis.warning_medium',
                  display: `inline-block`,
                }}
                onClick={onClickDeleteAll}
              >
                Delete All Teams
              </li>
            </div>        
          </nav>
        
        </div>

        {/* Team Detail */}
        <div
          sx={{
            border: `scaffold`,
            minHeight: `20rem`,
            width: `49%`
          }}
        >
          <div>
            <div sx={{ display: `block` }}>
              <h3>Selected Team Details</h3>
              <div sx={{ display: `block` }}><strong>School Name:</strong>{}</div>
              <div sx={{ display: `block` }}><strong>Mascot:</strong>{}</div>
              <div sx={{ display: `block` }}><strong>City:</strong>{}</div>
              <div sx={{ display: `block` }}><strong>State:</strong>{}</div>
            </div>
          </div>

          <nav>
            <div
              sx={{
                display: `inline-block`,
                width: `100%`
              }}
            >
              <li
                sx={{
                  variant: 'lis.caution_small',
                  display: `inline-block`,
                }}
                onClick={editTeamInfo}
              >
                Edit
              </li>
            </div>        
          </nav>
        </div>
      </div>
    </div>
  )
}
