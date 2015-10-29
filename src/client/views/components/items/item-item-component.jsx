ItemItemComponent = React.createClass({
  handleClick(e) {
    e.preventDefault();
    var item, itemId, collectionId, clickHandler, that;

    that         = this;
    clickHandler = this.props.clickHandler

    if (clickHandler) { 
    } else {
      item         = this.props.item;
      itemId       = item._id;
      collectionId = item.collectionId;
    }

    $('#item_card_container').removeClass('show');

    setTimeout(function() {
      if(clickHandler) { 
        clickHandler(e, that);
      } else {
        FlowRouter.go('/collection/' + collectionId + '/' + itemId);  
      }

      setTimeout(function() {
        $('#item_card_container').addClass('show');
      }, 200);
    }, 200);
  },
  render() {
    var badge = '';

    if (this.props.item.count) {
      if (this.props.item.count > 1) {
        badge = <span className="badge">{this.props.item.count}</span>;
      }
    }

    return (
      <a className="item__item" href='#!' onClick={this.handleClick}>
        {this.props.item.title}
        {badge}
      </a>
    );
  }
});
