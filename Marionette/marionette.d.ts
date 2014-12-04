// Type definition for Marionette 1.1.4
// Project: http://marionettejs.com
// Definitions by: Nick McGuire <https://github.com/pudgeball>
// Definitions: https://github.com/pudgeball/TypescriptDefiniitions

/// <reference path="../Backbone/Backbone.d.ts" />
/// <reference path="../jQuery/jQuery.d.ts" />

declare module Marionette {
    var $: typeof $;

    function getOption(target: any, optionName: string): any;
    function triggerMethod(methodName: string, ...arguments: any[]);
    function bindEntityEvents(target: any, entity: any, bindings: Object);


    class Application extends Backbone.Events {
        constructor(options?: Object);

        addInitializer(initializer: (options?:Object) => void);
        addRegions(regions: Object);
        closeRegions();
        getRegion(regionName: string);
        module(moduleName: string, moduleDefinition: (Module: any, Backbone: typeof Backbone, Marionette: typeof Marionette, jQuery: any, Underscore: any) => any);
        removeRegion(regionName: string);
        start(options?: Object);
    }

    interface AppRouterOptions extends Backbone.RouterOptions {
        appRoutes?: Object;
        controller?: any;
    }

    class AppRouter extends Backbone.Router {
        constructor(options?: AppRouterOptions);

        appRoute(route: string, methodName: string);
    }

    class CollectionView extends Marionette.View {
        emptyView: any; // TODO: replace with Function | string
        itemView: any // TODO: replace with Function | View
        itemViewOptions: any; // TODO : replace with Function | Object
        itemViewEventPrefix: string;
    }

    class CompositeView extends Marionette.CollectionView {
        itemViewContainer: any // TODO: replace with Function | string;
    }

    class Controller {

    }

    class ItemView extends Marionette.View {
    }

    class Layout extends Marionette.View {
        regions: any;
    }

    interface RegionConstructorOptions {
        el?: any; // TODO replace with string | HTMLElement | JQuery
    }
    class Region extends Backbone.Events {
        constructor(options?: RegionConstructorOptions);

        close();
        reset();
        show(view: View);

    }

    class RegionManager {

    }

    class RequestResponse {

    }

    class View extends Backbone.View {
        events: any // TODO: replace with Function | Object
        template: any; // TODO: replace with Function | string
        templateHelpers: any; // TODO: replace with Function | Object
        triggers: any; // TODO: replace with Function | Object
        ui: any; // TODO: replace with Function | Object

        constructor(options?: Object);

        bindUIElements();
        close();
        getTemplate(): any;
        normalizeUIKeys(hash: Object): Object;
        serializeData();
        unbindUIElements();
    }
}

declare module "backbone.marionette" {
    import Backbone = require('backbone');

    export = Marionette;
}
