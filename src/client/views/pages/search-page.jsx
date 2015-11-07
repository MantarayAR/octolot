SearchPage = React.createClass({
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 m9 l10">
              <div>
                <h4>Search Your Items and Collections</h4>
                
                <SearchComponent defaultSearchTerms={this.props.searchTerms} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});