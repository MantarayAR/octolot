NavigationComponent = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var isLoggedIn = !! Meteor.userId();

    return {
      isLoggedIn: isLoggedIn
    };
  },
  logout(e) {
    e.preventDefault();

    Meteor.logout(function(err) {
      FlowRouter.go('/');
    });
  },
  render() {
    var items = [(<li><a href="/about">About</a></li>)];

    if (this.data.isLoggedIn) {
      items.push(<li><a href="/search">Search</a></li>);

      items.push(<li><a href="#!" onClick={this.logout}>Logout</a></li>);
    }

    return(
     <nav>
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s12">
              <a href="/" className="brand-logo"><img className="nav__logo" src="/mstile-70x70.png" /> Octolot</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {items}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
})