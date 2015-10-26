HomePage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var isLoggedIn = !! Meteor.userId;

    return {
      isLoggedIn: isLoggedIn
    };
  },
  render() {
    var content = <LoginComponent />

    if ( this.data.isLoggedIn ) {
      content = <ThreePaneComponent collectionId={this.props.collectionId} />;
    }

    return (
      <div>
        {content}
      </div>
    );
  }
});