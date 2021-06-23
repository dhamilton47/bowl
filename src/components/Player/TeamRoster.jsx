/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DataService from '../../services/player.service';

export default () => {
  const [search, setSearch] = useState('');
  const [roster, setRoster] = useState([]);
  const [current, setCurrent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1)
  
  useEffect(() => {
    DataService.getAll()
      .then(res => {
        setRoster(res.data);
        console.log("res.data:", res.data);
      })
      .catch(e => {
        console.log(e);
      })
  },[]);
  
  const refreshPointer = () => {
    setCurrent(null);
    setCurrentIndex(-1);
  }

  const onDelete = (id) => {
    if (id === -1) return
    DataService.delete(id)
      .then(res => {
        console.log(res.data);
        refreshPointer();
      })
      .catch(e => console.log(e));
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

  function searchPlayer1() {
    setList(DataService.findByName(search));
    console.log(roster);
  }

  const editPlayerInfo = () => {}

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

        {/* Roster */}
        <div sx={{width: `50%`, minHeight: `20rem`, maxHeight: `32rem`, position: `relative`}}>
          <h3>Roster</h3>

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
              {roster && roster.map((player, index) => (
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
                  onClick={() => setActive(player, index)}
                >
                  {player.name}
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
                  to={'/add-player'}
                  sx={{
                    color: `inherit`,
                    fontSize: `14px`,
                    textDecoration: `none`,
                  }}
                >
                  Add New Player
                </Link>
              </li>

              <li
                sx={{
                  variant: `lis.warning_medium`,
                  display: `inline-block`,
                }}
                onClick={onDeleteAll}
              >
                Delete All Players
              </li>
            </div>        
          </nav>
        
        </div>

        {/* Player Detail */}
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
                  <h3>Player Details</h3>
                  <div sx={{ display: `block` }}><strong>Name:</strong>{current.first_name}</div>
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
                      variant: `lis.caution_small`,
                      display: `inline-block`,
                    }}
                    onClick={editPlayerInfo}
                  >
                    Edit
                  </li>

                  <li
                    sx={{
                      variant: `lis.warning_small`,
                      display: `inline-block`,
                    }}
                    onClick={() => onDelete(currentIndex)}
                  >
                    Remove
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
