FlowRouter.route('/', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <HomePage />
    });
  },
  name: "Home"
});

FlowRouter.route('/collection/:collectionId', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <HomePage collectionId={params.collectionId} />
    });
  },
  name: "Collection"
});

FlowRouter.route('/collection/:collectionId/:itemId', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <HomePage collectionId={params.collectionId} itemId={params.itemId} />
    });
  },
  name: "Item"
});

FlowRouter.route('/public/:collectionKey', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <PublicPage collectionKey={params.collectionKey} />
    });
  },
  name: "Public Collection"
});