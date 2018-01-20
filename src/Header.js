import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header className="py-5 bg-image-full" style={{backgroundImage: 'url("https://unsplash.it/1900/1080?image=1076")'}}>
        <img className="img-fluid d-block mx-auto" src="http://placehold.it/200x200&text=Logo" alt />
      </header>
    );
  }
}

export default Header;
