AppLoadingComponent = React.createClass({
  render() {
    var fun = [
        "Sorting books...",
        "Finding cool stuff...",
        "Hunting for unicorns...",
        "Determining best movies..."
      ];
    fun.sort(function () { return 0.5 - Math.random(); });

    var message = fun[0];

    var text = (
      <div id="loader-pitch">
        <h1>Loading</h1>
        <h2>{message}</h2>
      </div>
    );
    if (this.props.noText) {
      text = '';
    }

    return <div className="loading">
      <div className="spinner">
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
      {text}
    </div>
  }
});