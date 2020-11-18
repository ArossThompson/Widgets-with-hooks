import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    // Allow user to load link in a new window
    if(e.metaKey || e.ctrlKey) {
      return;
    }

    // Prevent full page reload
    e.preventDefault();
    
    // Change URL
    window.history.pushState({}, '', href);

    // Navigation Event
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }


  return <a onClick={onClick} className={className} href={href}>{children}</a>
}

export default Link;