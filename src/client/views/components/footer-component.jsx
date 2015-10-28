FooterComponent = React.createClass({
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
                <h5 className="white-text">Organize Your Life</h5>
                <p className="grey-text text-lighten-4">
                  Octolot helps you organize your stuff into collections
                  so that you know what you own!
                </p>
            </div>
            <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            &copy; 2014 Copyright Mantaray AR LLC
          </div>
        </div>
      </footer>
    );
  }
});