NavigationComponent = React.createClass({
  render() {
    return(
     <nav>
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s12">
              <a href="/" className="brand-logo"><img className="nav__logo" src="/mstile-70x70.png" /> Octolot</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/about">About</a></li>
                <li><a href="/search">Search</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
})