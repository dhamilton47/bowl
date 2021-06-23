/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DataService from '../../services/team.service';

export default () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  const [current, setCurrent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1)
  
  useEffect(() => retreiveList(), []);
  
  const retreiveList = () => {
    DataService.getAll()
      .then(res => {
        setList(res.data);
        console.log("res.data:",res.data);
      })
      .catch(e => {
        console.log(e);
      })
  }

  const refreshPointer = () => {
    retreiveList();
    setCurrent(null);
    setCurrentIndex(-1);
  }

  const onDeleteAll = () => {
    DataService.deleteAll()
      .then(res => {
        console.log(res.data);
        refreshPointer();
      })
      .catch(e => console.log(e));
  }

  const onChangeSearch = (e) => {
    const search = e.target.value;
    setSearch(search);
  }

  function searchTeam1() {
    setTeams(DataService.findBySchoolName(searchTeam));
    console.log(teams);
  }

  const editTeamInfo = () => {}

  const setActive = (value, index) => {
    setCurrent(value);
    setCurrentIndex(index);
    console.log(value)
  }

  return (
    <div sx={{m: `0 auto`, width: `900px`}}>

      {/* Search Bar */}
      <div sx={{mb: `1rem`}}>
        <input
          type="text"
          placeholder="Search by high school"
          value={search}
          onChange={onChangeSearch}
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
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `flex-start`,
        width: `100%`
      }}>

        {/* Team List */}
        <div sx={{width: `50%`, minHeight: `20rem`, maxHeight: `32rem`, position: `relative`}}>
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
              {list && list.map((team, index) => (
                <li
                  key={index}
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
                  onClick={() => setActive(team, index)}
                >
                  {team.school_name}
                </li>
              ))}
            </ul>
          </div>

          <nav sx={{ position: `absolute`, bottom: 0}}>
            <div
              sx={{
                display: `inline-block`,
                width: `100%`
              }}
            >
              <li
                sx={{
                  variant: `lis.success_medium`,
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
                  variant: `lis.warning_medium`,
                  display: `inline-block`,
                }}
                onClick={onDeleteAll}
              >
                Delete All Teams
              </li>
            </div>        
          </nav>
        
        </div>

        {/* Team Detail */}
        {
          current ?
            <div
              sx={{
                minHeight: `20rem`,
                position: `relative`,
                width: `49%`
              }}
            >
              <div>
                <div sx={{ display: `block` }}>
                  <h3>Selected Team Details</h3>
                  <div sx={{ display: `block` }}><strong>School Name:</strong>{current.school_name}</div>
                  <div sx={{ display: `block` }}><strong>Mascot:</strong>{current.school_mascot}</div>
                  <div sx={{ display: `block` }}><strong>City:</strong>{current.city}</div>
                  <div sx={{ display: `block` }}><strong>State:</strong>{current.state}</div>
                </div>
              </div>

              <nav sx={{ position: `absolute`, bottom: 0}}>
                <div
                  sx={{
                    display: `inline-block`,
                    width: `100%`
                  }}
                >
                  <li
                    sx={{
                      variant: `lis.primary_small`,
                      display: `inline-block`,
                    }}
                  >
                    <Link
                      to={'/team-roster'}
                      sx={{
                        color: `inherit`,
                        fontSize: `14px`,
                        textDecoration: `none`,
                      }}
                    >
                      Roster
                    </Link>
                  </li>

                  <li
                    sx={{
                      variant: `lis.caution_small`,
                      display: `inline-block`,
                    }}
                    onClick={editTeamInfo}
                  >
                    Edit
                  </li>
                </div>        
              </nav>
            </div>
          : null
        }
      </div>
    </div>
  )
}
