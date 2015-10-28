NavigationComponent = React.createClass({
  render() {
    return(
     <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Octolot</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/about">About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
})