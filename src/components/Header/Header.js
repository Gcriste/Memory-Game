
import "./style.css";

import React from 'react'

const Header = props => (
    <div className="header">
      <div className="title">{props.children}</div>
      </div>
  );
  
  export default Header;