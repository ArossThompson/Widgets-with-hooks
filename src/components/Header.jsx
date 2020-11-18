import React from 'react';

//Component Imports
import Link from '../components/Link';

const Header = () => {
  return <div className="ui secondary pointing menu">
    <Link href="/" className="item">Accordion</Link>
    <Link href="/list" className="item">List</Link>
    <Link href="/dropdown" className="item">Dropdown</Link>
    <Link href="/translate" className="item">Translate</Link>
  </div>
}

export default Header;