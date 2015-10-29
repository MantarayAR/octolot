PublicListItemsComponent = React.createClass({
  render() {
    var goToItem = this.props.goToItem;

    return (
      <div className="item__list">
        {this.props.items.map(function(item, i){
          return <ItemItemComponent item={item} key={i} clickHandler={goToItem} />;
        })}
      </div>
    );
  }
});
