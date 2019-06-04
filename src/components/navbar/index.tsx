import { Link } from 'gatsby';
import * as React from 'react';
import './style.scss';

interface State {
  activeNav: boolean;
}

export class Navbar extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      activeNav: false,
    };
  }

  toggleNav = () => {
    this.setState({ activeNav: !this.state.activeNav });
  }

  render() {
    const { activeNav } = this.state;

    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            Sightglass Engineering
          </a>
          <div className={ `navbar-burger burger ${ activeNav ? 'is-active' : '' }` }
               data-target="navbarExampleTransparentExample"
               onClick={ () => this.toggleNav() }>
            <span/>
            <span/>
            <span/>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className={ `navbar-menu ${ activeNav ? 'is-active' : '' }` }>
          <div className="navbar-start">
            <Link to="/blog" className="navbar-item">
              Blog
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
