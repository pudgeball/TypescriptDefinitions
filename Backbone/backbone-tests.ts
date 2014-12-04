/// <reference path="backbone.d.ts" />
/// <reference path="../jQuery/jQuery.d.ts" />

module Trackr {

}

class BBModel extends Backbone.Model {
    logMe():void {
        console.log(this);
    }
}

class OtherModel extends Backbone.Model {

}

class BackboneCollection extends Backbone.Collection<BBModel> {

}


var collection = new BackboneCollection();

//var otherModel = new OtherModel();

var testModel = collection.model;

testModel.logMe();