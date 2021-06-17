/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// import Splash from '../Splash/Splash'

import AddTeam from './AddTeam';
import TeamDataService from '../../services/team.service';


export default () => {
  return (
    <div>
      Team Detail Component
      <div sx={{ display: `inline-block` }}>
        <div sx={{ display: `inline-block` }}>{team.school_name}</div>
        <div sx={{ display: `inline-block` }}>{team.school_mascot}</div>
        <div sx={{ display: `inline-block` }}>{team.city}</div>
        <div sx={{ display: `inline-block` }}>{team.state}</div>
      </div>
    </div>
  )
}