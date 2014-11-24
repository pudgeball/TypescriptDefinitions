/// <reference path="backbone.d.ts" />
/// <reference path="../jQuery/jQuery.d.ts" />

module Trackr {

}

var model = new Backbone.Model();

model.set({
  MyAwesomeVar: '124'
});

var model2 = model.clone();
console.log(model2.get('MyAwesomeVar'));

Backbone.emulateHTTP = false;
Backbone.emulateJSON = false;

console.log(Backbone.VERSION);

Backbone.$.ajax({
  url: 'http://www.google.com'
});

var localBackbone = Backbone.noConflict();

console.log(localBackbone.VERSION);

class Model extends Backbone.Model {
  constructor(attributes?: any, options?: any) {
    this.defaults = {
      id: 1
    };

    super(attributes, options);
  }
}

var extendedModel = new Model();

extendedModel.omit(function() {

});


var view = new Backbone.View();
var $el = $('.awesome');

view.setElement($el);