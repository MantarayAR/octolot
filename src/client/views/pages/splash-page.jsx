SplashPage = React.createClass({
  render() {
    return(
      <div>
        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <br />
            <br />
            <h1 className="header center">Octolot</h1>
            <div className="row center">
              <h5 className="header col s12 light">Organize your stuff and always know what you own – no matter where you are</h5>
            </div>
            <hr />
            <div className="row center">
              <div className="col s4 offset-s4">
                <LoginComponent />
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
        
      </div>
    );
  }
});
