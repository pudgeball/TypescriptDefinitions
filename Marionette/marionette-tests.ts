/// <reference path="marionette.d.ts" />

class TestView extends Marionette.ItemView {
    static ui:Object = {
        testField: '.testField'
    };

    constructor(options?: any) {
        this.ui = TestView.ui;

        super(options);
    }
}

var tv = new TestView();

class Laytt extends Marionette.Layout {
    itemViewRegion: Marionette.Region;
    static regions:Object = {
        itemViewRegion: '.item-region'
    };

    constructor(options?: any) {
        this.regions = Laytt.regions;
        this.template = this.template();

        super(options);
    }

    template:any = () => '';
}