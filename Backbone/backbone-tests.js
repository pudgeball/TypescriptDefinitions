/// <reference path="backbone.d.ts" />
/// <reference path="../jQuery/jQuery.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BBModel = (function (_super) {
    __extends(BBModel, _super);
    function BBModel() {
        _super.apply(this, arguments);
    }
    BBModel.prototype.logMe = function () {
        console.log(this);
    };
    return BBModel;
})(Backbone.Model);
var OtherModel = (function (_super) {
    __extends(OtherModel, _super);
    function OtherModel() {
        _super.apply(this, arguments);
    }
    return OtherModel;
})(Backbone.Model);
var BackboneCollection = (function (_super) {
    __extends(BackboneCollection, _super);
    function BackboneCollection() {
        _super.apply(this, arguments);
    }
    return BackboneCollection;
})(Backbone.Collection);
var collection = new BackboneCollection();
//var otherModel = new OtherModel();
var testModel = collection.model;
testModel.logMe();
//# sourceMappingURL=backbone-tests.js.map