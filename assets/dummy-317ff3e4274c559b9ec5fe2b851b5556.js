"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,r){var l=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),(0,a["default"])(l,r["default"].modulePrefix),e["default"]=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n["default"].APP.name,r=n["default"].APP.version;e["default"]=t["default"].extend({version:r,name:a})}),define("dummy/components/ember-chimp",["exports","ember-chimp/components/ember-chimp"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){this.route("home",{path:"/"}),this.route("test")}),e["default"]=a}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/ember-chimp",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:1,column:0},end:{line:11,column:0}},moduleName:"dummy/templates/components/ember-chimp.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("label"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","label-text");var r=e.createComment("");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","chimp-says");var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("button");e.setAttribute(n,"type","submit");var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0]),r=new Array(4);return r[0]=e.createMorphAt(e.childAt(a,[1]),0,0),r[1]=e.createMorphAt(a,3,3),r[2]=e.createMorphAt(e.childAt(t,[2]),0,0),r[3]=e.createMorphAt(e.childAt(t,[4]),0,0),r},statements:[["content","label",["loc",[null,[2,26],[2,35]]]],["inline","input",[],["key-press","valueDidChange","placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[4,22],[4,33]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[5,16],[5,21]]]]],[],[]],"type","email","name","EMAIL"],["loc",[null,[3,2],[7,24]]]],["content","chimpSays",["loc",[null,[9,24],[9,37]]]],["inline","if",[["get","isLoading",["loc",[null,[10,27],[10,36]]]],["get","loadingText",["loc",[null,[10,37],[10,48]]]],["get","buttonText",["loc",[null,[10,49],[10,59]]]]],[],["loc",[null,[10,22],[10,61]]]]],locals:[],templates:[]}}())}),define("dummy/templates/home",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:1,column:0},end:{line:23,column:0}},moduleName:"dummy/templates/home.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","container");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("header"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("h1"),l=e.createTextNode("Ember Chimp");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("h5"),l=e.createTextNode("A Simple, Ajax Powered Mailchimp Form Component for the Ember CLI.");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("section"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("footer"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("p"),l=e.createTextNode("Usage Instructions at ");e.appendChild(r,l);var l=e.createElement("a");e.setAttribute(l,"href","https://github.com/hhff/ember-chimp");var i=e.createTextNode("Github");e.appendChild(l,i),e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode(" \n\n    ");e.appendChild(a,r);var r=e.createComment(" Place this tag where you want the button to render. ");e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("a");e.setAttribute(r,"class","github-button"),e.setAttribute(r,"href","https://github.com/hhff/ember-chimp"),e.setAttribute(r,"data-icon","octicon-star"),e.setAttribute(r,"data-style","mega"),e.setAttribute(r,"data-count-href","/hhff/ember-chimp/stargazers"),e.setAttribute(r,"data-count-api","/repos/hhff/ember-chimp#stargazers_count"),e.setAttribute(r,"data-count-aria-label","# stargazers on GitHub"),e.setAttribute(r,"aria-label","Star hhff/ember-chimp on GitHub");var l=e.createTextNode("Star");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[0,3]),1,1),a},statements:[["inline","ember-chimp",[],["label","Email Address","placeholder","Your Email Here","formAction","//computer.us11.list-manage.com/subscribe/post?u=6e62b74d002f42a0e5350892e&amp;id=4e7effa6bd","buttonText","Submit","loadingText","Loading"],["loc",[null,[8,4],[12,41]]]]],locals:[],templates:[]}}())}),define("dummy/templates/test",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:1,column:0},end:{line:6,column:0}},moduleName:"dummy/templates/test.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["inline","ember-chimp",[],["label","Ember Chimp Input","placeholder","Email","formAction","//computer.us11.list-manage.com/subscribe/post?u=6e62b74d002f42a0e5350892e&amp;id=4e7effa6bd","buttonText","Submit","loadingText","Loading"],["loc",[null,[1,0],[5,37]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(l){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-chimp",version:"0.1.0+f1e7a58f"});