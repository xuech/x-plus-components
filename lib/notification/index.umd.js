(function(e,o){typeof exports=="object"&&typeof module!="undefined"?module.exports=o(require("vue")):typeof define=="function"&&define.amd?define(["vue"],o):(e=typeof globalThis!="undefined"?globalThis:e||self,e.index=o(e.Vue))})(this,function(e){"use strict";const o=t=>t.replace(/(A-Z)g/,"-$1").toLowerCase();var d=(()=>`svg[data-v-d33c25ac]{width:1.5em;height:1.5em}
`)(),r=(t,n)=>{const i=t.__vccOpts||t;for(const[a,c]of n)i[a]=c;return i},l=r(e.defineComponent({__name:"index",props:{icon:{type:String,default:"Bell"},value:{type:[String,Number],default:""},max:{type:Number},isDot:{type:Boolean,default:!1}},setup(t){return(n,i)=>{const a=e.resolveComponent("el-badge"),c=e.resolveComponent("el-popover");return e.openBlock(),e.createBlock(c,{"popper-class":"notification-popper-class",placement:"bottom",width:300,trigger:"click"},{default:e.withCtx(()=>[e.renderSlot(n.$slots,"default",{},void 0,!0)]),reference:e.withCtx(()=>[e.createVNode(a,{style:{cursor:"pointer"},value:t.value,max:t.max,"is-dot":t.isDot},{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(`el-icon-${e.unref(o)(t.icon)}`)))]),_:1},8,["value","max","is-dot"])]),_:3})}}}),[["__scopeId","data-v-d33c25ac"]]),s={install(t){t.component("m-notification",l)}};return s});