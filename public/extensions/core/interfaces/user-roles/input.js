parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"QdEO":[function(require,module,exports) {
module.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}};
},{}],"QhH9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../../../mixins/interface"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n={mixins:[t.default],name:"interface-user-role",data:function(){return{loading:!1,roles:[],error:null}},computed:{selectOptions:function(){var t={};return this.roles.filter(function(t){return 2!==t.id}).forEach(function(e){t[e.id]=e.name}),t},currentRole:function(){var t=this.value&&this.value[0]&&this.value[0].role;if("object"!==r(t)){var e=this.roles.filter(function(e){return e.id==t});return e&&e[0]}return t},currentRoleID:function(){return this.currentRole&&this.currentRole.id}},created:function(){this.fetchRoles()},methods:{fetchRoles:function(){var t=this;this.loading=!0,this.$api.getRoles().then(function(t){return t.data}).then(function(e){t.roles=e,t.loading=!1,t.error=null}).catch(function(e){t.loading=!1,t.error=e})},emitValue:function(t){var e=this.value&&this.value[0]&&this.value[0].id;e?this.$emit("input",[{id:e,role:t}]):this.$emit("input",[{role:t}])}}};exports.default=n;
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this.$createElement;return(this._self._c||e)("v-select",{attrs:{icon:"perm_identity",id:this.name,name:this.name,placeholder:this.$t("choose_one"),options:this.selectOptions,value:this.currentRoleID},on:{input:this.emitValue}})},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-bd9b9e",functional:void 0});})();
},{"../../../mixins/interface":"QdEO"}]},{},["QhH9"], "__DirectusExtension__")