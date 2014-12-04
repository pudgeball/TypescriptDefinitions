/// <reference path="marionette.d.ts" />

class TestView extends Marionette.ItemView {
    static ui:Object = {
        testField: '.testField'
    };

    constructor(options?: any) {
        super(options);

        this.ui = TestView.ui;
    }
}

var tv = new TestView();

class Laytt extends Marionette.Layout {
    itemViewRegion: Marionette.Region;
    static regions:Object = {
        itemViewRegion: '.item-region'
    };

    constructor(options?: any) {
        super(options);

        this.regions = Laytt.regions;
        this.template = this.template();


    }

    template:any = () => '';
}
