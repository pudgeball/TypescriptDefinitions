/// <reference path="backbone.d.ts" />
/// <reference path="../jQuery/jQuery.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
var Model = (function (_super) {
    __extends(Model, _super);
    function Model(attributes, options) {
        this.defaults = {
            id: 1
        };
        _super.call(this, attributes, options);
    }
    return Model;
})(Backbone.Model);
var extendedModel = new Model();
extendedModel.omit(function (value, key) { return key === 'id'; });
var view = new Backbone.View();
var $el = $('.awesome');
view.setElement($el);
