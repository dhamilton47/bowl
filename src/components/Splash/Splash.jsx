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
      There will be page(s) for the manipulation of Match objects.
      <ul>
        <li>Index?</li>
        <li>Search?</li>
        <li>Add</li>
        <li>Delete</li>
        <li>Modify?</li>
        <li>Play</li>
      </ul>
      <div sx={{ml: `10px`}}>
        There will be Game object(s) subsidiary to Match definition.
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
          <br />
        </div>
      </div>
    </div>
    <div sx={{ml: `10px`}}>
      There will be page(s) for the manipulation of Team objects.
      <ul>
        <li>Index?</li>
        <li>Search?</li>
        <li>Add</li>
        <li>Delete</li>
        <li>Modify?</li>
      </ul>
      <div sx={{ml: `10px`}}>
        There will be Roster object(s) subsidiary to Team objects.
        <ul>
          <li>Index?</li>
          <li>Search?</li>
          <li>Add</li>
          <li>Delete</li>
          <li>Modify?</li>
        </ul>
        <div sx={{ml: `10px`}}>
          There will be Player object(s) subsidiary to Roster objects.
          <ul>
            <li>Index?</li>
            <li>Search?</li>
            <li>Add</li>
            <li>Delete</li>
            <li>Modify?</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)
