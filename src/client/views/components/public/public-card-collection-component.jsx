PublicCardCollectionComponent = React.createClass({
  render() {
    return (
      <div className="collection__card">
        <h2>{this.props.collection.title}</h2>

        <PublicListItemsComponent items={this.props.items} goToItem={this.props.goToItem}/>
      </div>
    );
  }
});