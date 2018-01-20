import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
        <div>
        <section className="py-5">
        <div className="container">
          <h1>Section Heading</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
        </div>
      </section>
      <section className="py-5 bg-image-full" style={{backgroundImage: 'url("https://unsplash.it/1900/1080?image=1081")'}}>
      <div style={{height: 200}} />
    </section>
    <section className="py-5">
        <div className="container">
          <h1>Section Heading</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
        </div>
      </section>
    </div>
    );
  }
}

export default Section;
