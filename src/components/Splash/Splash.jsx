/** @jsx jsx */
import { jsx } from 'theme-ui';

export default () => (
  <div 
    sx={{
      ml: `200px`,
    }}
  >
    <div>Hello there.  How are you?</div>
    <div sx={{ml: `10px`}}>
      There will be Match object here.
      <ul>
        <li>Index?</li>
        <li>Search?</li>
        <li>Add</li>
        <li>Delete</li>
        <li>Modify?</li>
        <li>Play</li>
      </ul>
      <div sx={{ml: `10px`}}>
        There will be a Team object(s) here, if any.
        <ul>
          <li>Index?</li>
          <li>Search?</li>
          <li>Add</li>
          <li>Delete</li>
          <li>Modify?</li>
        </ul>
        <div sx={{ml: `10px`}}>
          There will be a Game object(s) here.
          <ul>
          <li>Index?</li>
          <li>Search?</li>
          <li>Add</li>
          <li>Delete</li>
          <li>Modify?</li>
        </ul>
          <div sx={{ml: `10px`}}>
            <div sx={{ml: `10px`}}>There will be 10 frame objects here.
              <div sx={{ml: `10px`}}>There will be either two or three ball objects here depending on the frame.</div>
            </div>
            <div sx={{ml: `10px`}}>There will be a total score object here.</div>
          </div>
        </div>
      </div>
    </div>
  </div>)