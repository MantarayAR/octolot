SearchComponent = React.createClass({
  getInitialState() {
    return {
      lastTimeout: null,
      term: null
    }
  },
  search(term) {
    this.setState({term: term});
  },
  handleChange(e) {
    var $search  = $(this.refs.search.getDOMNode());
    var value    = $search.val();
    var callback = this.search;

    if (value !== '') {
      if (this.state.lastTimeout !== null) {
        clearTimeout(this.state.lastTimeout);
      }

      var lastTimeout = setTimeout(function() { callback(value) }, 300);

      this.setState({lastTimeout: lastTimeout});
    }
  },
  render() {
    return (
      <div>
        <form>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">search</i>
              <input ref="search" id="icon_prefix" type="text" className="validate" onChange={this.handleChange} />
              <label forHtml="icon_prefix">Search</label>
            </div>
          </div>
        </form>

        <SearchResultsComponent term={this.state.term} />
      </div>
    );
  }  
});
