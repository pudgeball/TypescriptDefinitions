// Type definition for Backbone 1.1.2
// Project: http://backbonejs.org
// Definitions by: Nick McGuire <https://github.com/pudgeball>
// Definitions: https://github.com/pudgeball/TypescriptDefiniitions

/// <reference path="../jQuery/jQuery.d.ts" />

declare module Backbone {
  var $: typeof $;
  var emulateHTTP: boolean;
  var emulateJSON: boolean;
  var history: History;
  var VERSION: string;

  function noConflict(): typeof Backbone;
  function sync(method: string, model: Model, options: any): JQueryXHR;
  function ajax(options?: JQueryAjaxSettings): JQueryXHR;

  interface Collectionable {
    collection?: any;
  }

  interface NavigateOptions {
    trigger?: boolean;
    replace?: boolean;
  }

  interface Parseable {
    parse?: any;
  }

  interface Patchable {
    patch?: boolean;
  }

  interface PersistenceOptions {
    url?: string;
    beforeSend?: (jqxhr: JQueryXHR) => void;
    success?: (modelOrCollection?: any, response?: any, options?: any) => void;
    error?: (modelOrCollection?: any, jqxhr?: JQueryXHR, options?: any) => void;
  }

  interface Silenceable {
    silence?: boolean;
  }

  interface Unsetable {
    unset?: boolean;
  }

  interface Validateable {
    validate?: boolean;
  }

  interface Waitable {
    wait?: boolean;
  }

  // Model Options Interfaces
  interface ModelConstructorOptions extends Collectionable, Parseable {}
  interface ModelSetOptions extends Silenceable, Validateable, Unsetable {}
  interface ModelFetchOptions extends PersistenceOptions, ModelSetOptions, Parseable {}
  interface ModelSaveOptions extends Silenceable, Waitable, Validateable, Parseable, PersistenceOptions, Patchable {}
  interface ModelDestroyOptions extends Waitable, PersistenceOptions {}


  class Events {
    on(name: string, callback: Function, context?: any): any;
    once(name: string, callback: Function, context?: any): any;
    off(name?: string, callback?: Function, context?: any): any;

    trigger(name: string, ...args: Array<any>): any;

    listenTo(object: Object, name: string, callback: Function): any;
    listenToOnce(object: Object, name: string, callback: Function): any;

    stopListening(object?: Object, name?: string, callback?: Function): any;
  }


  class Model extends Events {
    attributes: Object;
    cid: string;
    changed: Object;
    collection: Collection<Model>;
    defaults: any; // TODO: Update this to Function | Object when union types exist
    id: any;
    idAttribute: string;
    url: any; //TODO: Update this to Function | string when union types exist
    urlRoot: any; // TODO: Update this to Function | string when union types exist
    validationError: any;

    constructor(attributes?: Object, options?: ModelConstructorOptions);

    // DEPRECATED -- maybe
    get(attribute: string): any;
    set(attributes: Object, options?: ModelSetOptions): Model;
    set(key:string, value: any, options?: ModelSetOptions): Model;

    
    changedAttributes(attributes?: Object): Object;
    clear(options?: Silenceable): Model;
    clone(): Model;
    destroy(options?: ModelDestroyOptions): JQueryXHR;
    escape(attribute: string): any;
    fetch(options?: ModelFetchOptions): JQueryXHR;
    has(attribute: string): boolean;
    hasChanged(attribute?: string): boolean;
    initialize(options?: ModelConstructorOptions): void;
    isNew(): boolean;
    isValid(): boolean;
    parse(response: any, options: any): any;
    previous(attribute: string): any;
    previousAttributes(): any;
    save(attributes?: Object, options?: ModelSaveOptions): JQueryXHR;
    save(attribute: string, value: any, options?: ModelSaveOptions): JQueryXHR;
    sync(method: string, model: Model, options?: any): JQueryXHR;
    toJSON(options?: any): any;
    unset(attribute: string, options?: Silenceable): Model;

    // Underscore Mixins
    keys(): Array<string>;
    values(): Array<any>;
    pairs(): Array<Array<any>>;
    invert(): Object;
    pick(...keys: string[]): Object;
    pick(filter: (value: any, key: string, object: Object) => boolean): Object;
    omit(...keys: string[]): Object;
    omit(filter: (value: any, key: string, object: Object) => boolean): Object;
  }

  interface CollectionUnderscoreMixins {
    //['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    // 'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    // 'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    // 'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    // 'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
    // 'lastIndexOf', 'isEmpty', 'chain', 'sample'];
  }

  interface CollectionUnderscoreNamedMixins {
    // Underscore methods that take a property name as an argument.
    //var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];
  }

  interface CollectionConstrutorOptions {
    model?: Model;
    comparator?: any; // TODO: make this Function | string when union type exists
  }

  interface CollectionAdditionOptions {
    at?: number;
    merge?: boolean;
  }

  class Collection<TModel extends Model> extends Events { // implements CollectionUnderscoreMixins, CollectionUnderscoreNamedMixins {
    cid: string;
    length: number;
    model: TModel;
    //model: { new(): TModel };
    models: TModel[];
    url: any; // TODO: replace with Function | String

    constructor(models?: TModel[], options?: CollectionConstrutorOptions);


    add(model: TModel, options?: CollectionAdditionOptions): TModel;
    add(models: TModel[], options?: CollectionAdditionOptions): TModel[];
    at(index: number): TModel;
    clone(): Collection<TModel>;
    create(model: any, options?: any): TModel;
    fetch(options?: any): JQueryXHR;
    findWhere(attributes: any): any;
    get(id: number): TModel;
    get(id: string): TModel;
    get(id: TModel): TModel;
    initialize(options?: CollectionConstrutorOptions): void;
    parse(response: any, options: any): any;
    pluck(attributes?: any): any;
    pop(options: any): any;
    push(model: any, options: any): any;
    remove(models: Array<any>, options: any): Array<any>;
    reset(models: Array<any>, options: any): Array<any>;
    set(models: Array<any>, options: any): Array<any>;
    shift(options: any): TModel;
    slice(begin?: number, end?: number): Array<TModel>;
    sort(options?: any): Collection<TModel>;
    sync(method: string, collection: Collection<TModel>, options?: any): JQueryXHR;
    toJSON(options?: any): any;
    unshift(model: TModel, options: any): any;
    where(attributes: any, first?: boolean): any;
  }

  interface ViewOptions {
    model: Model;
    collection: Collection<Backbone.Model>;
    el: any;
    id: string;
    className: any; //TODO: replace with Function | string when union types are available
    tagName: string;
    attributes: Object;
    events: Object;
  }

  class View extends Events {
    attributes: Object;
    cid: string;
    collection: Collection<Backbone.Model>;
    className: string;
    el: any;
    $el: JQuery;
    model: Model;
    tagName: string;

    constructor(options?: ViewOptions);

    $(selector: string): JQuery;
    delegateEvents(events?: Object): View;
    initialize(options?: ViewOptions): any;
    remove(): View;
    render(): View;
    setElement(element: HTMLElement): View;
    setElement(element: JQuery): View;
    undelegateEvents(): View;
  }

  interface RouterOptions {
    routes?: any;
  }

  class Router extends Events {
    routes: any;

    constructor(options?: RouterOptions);

    initialize(options?: RouterOptions): void;

    route(route: string, name: string, callback?: Function): Router;

    navigate(fragment: string, options?: NavigateOptions): Router;
  }

  interface HistoryOptions extends Silenceable {
    hashChange?: boolean;
    pushState?: boolean;
    root?: boolean;
  }

  interface HistoryHandler {
    route: string;
    callback: (fragment?: string) => void;
  }

  class History extends Events {
    handlers: Array<HistoryHandler>;
    interval: number;
    started: boolean;

    atRoot():boolean;
    checkUrl(e?: any): void;
    getFragment(fragment: string, forcePushState: boolean): string;
    getHash(window: any): string;
    loadUrl(fragment: string): any;
    navigate(fragment: string, options: NavigateOptions): boolean;
    route(route: string, callback: (fragment?: string) => void): number;
    start(options?: HistoryOptions): boolean;
    stop(): void;
  }
}

declare module "backbone" {
  export = Backbone
}