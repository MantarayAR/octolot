MainLayout = React.createClass({
  render() {
    return (
      <div>
        <NavigationComponent />
        <main>
          {this.props.content}
        </main>
        <FooterComponent />
      </div>
    );
  }
});