var ResultView = Backbone.View.extend({
  className: "result",
  tagName: "div",

  events: {
    'click .create': "addResult"
  },

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  addResult: function(){
    var newResult = new ResultModel({
      noun1: $("noun1").val(),
      noun2: $("noun2").val(),
      noun3: $("noun3").val(),
      adj1: $("adj1").val(),
      adj2: $("adj2").val(),
      adj3: $("adj3").val(),
      verb1: $("verb1").val(),
      verb2: $("verb2").val(),
      verb3: $("verb3").val()
    });
    newResult.save();
  },

  render: function(){
    var renderedHTML = HandlebarsTemplates['results/show'](this.model.toJSON());
    this.$el.html(renderedHTML);
  }



})
