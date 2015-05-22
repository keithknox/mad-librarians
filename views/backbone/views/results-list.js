var ResultsListView = Backbone.View.extend({
  el: "results-list",

  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderOne);
    this.listenTo(this.collection, 'reset' this.renderAll);
  },

  renderOne: function(result){
    var view = new ResultView({model: result}),
    this.$el.append(view.$el);
  },

  renderAll: function(){
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
  }
});
