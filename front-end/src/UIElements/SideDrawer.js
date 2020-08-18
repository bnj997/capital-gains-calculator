import React from 'react';

import './SideDrawer.css';

const SideDrawer = props => (


  <div className="side-drawer" onClick={props.onClick}>
    <ul className="nav-links">
      <li onClick={() => props.onChange('VAS')}> 
        VAS 
      </li>
      <li onClick={() => props.onChange('VTS')}> 
        VTS 
      </li>
      <li onClick={() => props.onChange('NAB')}> 
        NAB 
      </li>
      <li onClick={() => props.onChange('ANZ')}> 
        ANZ 
      </li>
    </ul>
  </div>
);

export default SideDrawer;
