/// <reference path="marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TestView = (function (_super) {
    __extends(TestView, _super);
    function TestView(options) {
        this.ui = TestView.ui;
        _super.call(this, options);
    }
    TestView.ui = {
        testField: '.testField'
    };
    return TestView;
})(Marionette.ItemView);
var tv = new TestView();
var Laytt = (function (_super) {
    __extends(Laytt, _super);
    function Laytt(options) {
        this.template = function () { return ''; };
        this.regions = Laytt.regions;
        this.template = this.template();
        _super.call(this, options);
    }
    Laytt.regions = {
        itemViewRegion: '.item-region'
    };
    return Laytt;
})(Marionette.Layout);
//# sourceMappingURL=marionette-tests.js.map