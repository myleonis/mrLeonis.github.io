var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,o=(e,o)=>{for(var i in o||(o={}))t.call(o,i)&&n(e,i,o[i]);if(a)for(var i of a(o))l.call(o,i)&&n(e,i,o[i]);return e},i=(e,a,t)=>new Promise(((l,n)=>{var o=e=>{try{s(t.next(e))}catch(a){n(a)}},i=e=>{try{s(t.throw(e))}catch(a){n(a)}},s=e=>e.done?l(e.value):Promise.resolve(e.value).then(o,i);s((t=t.apply(e,a)).next())}));import{T as s,B as u}from"./TableAction.a8b39504.js";import{A as r,o as c,q as d}from"./index.2cc56d29.js";import{s as f,u as p,d as v,R as m,e as y,a3 as b,i as h,f as k,X as w,o as g,c as _,a as x,Y as j,Z as C,x as O,bO as S,bj as T,t as D}from"./vendor.70faab48.js";import"./sortable.esm.11f2586f.js";import"./useDesignSetting.64fe49ff.js";import"./propTypes.37756db6.js";import"./componentSetting.df76d574.js";import"./index.esm.ce6efd7b.js";const K=[{title:"id",key:"id"},{title:"角色名称",key:"name"},{title:"说明",key:"explain"},{title:"是否默认角色",key:"isDefault",render:e=>f(p,{type:e.isDefault?"success":"error"},{default:()=>e.isDefault?"是":"否"})},{title:"创建时间",key:"create_date"}],P={class:"n-layout-page-header"},U=T(" 页面数据为 Mock 示例数据，非真实数据。 "),q=T(" 添加角色 "),R={class:"py-3 menu-list"},A=T("提交"),E=v({setup(e){const a=m(),t=y(null),l=b(),n=y(),p=y(!1),v=y(!1),E=y(!1),M=y(""),z=y([]),B=y([]),G=y(["console","step-form"]),I=h({pageSize:5,name:"xiaoMa"}),X=h({width:250,title:"操作",key:"action",fixed:"right",render:e=>f(s,{style:"button",actions:[{label:"菜单权限",onClick:J.bind(null,e),ifShow:()=>!0,auth:["basic_list"]},{label:"编辑",onClick:F.bind(null,e),ifShow:()=>!0,auth:["basic_list"]},{label:"删除",icon:"ic:outline-delete-outline",onClick:H.bind(null,e),ifShow:()=>!0,auth:["basic_list"]}]})}),Y=e=>i(this,null,(function*(){return o(o({},O(I)),e),yield r.request({url:"/role/list",method:"GET"})}));function Z(e){}function $(e){e.preventDefault(),v.value=!0,t.value.validate((e=>{e?l.error("请填写完整信息"):(l.success("新建成功"),setTimeout((()=>{p.value=!1,n.value.reload()}))),v.value=!1}))}function F(e){a.push({name:"basic-info",params:{id:e.id}})}function H(e){l.info("点击了删除")}function J(e){M.value=`分配 ${e.name} 的菜单权限`,G.value=e.menu_keys,p.value=!0}function L(e){G.value=[G.value,...e]}function N(e){B.value=e}function Q(){B.value.length?B.value=[]:B.value=z.value.map((e=>e.key))}function V(){E.value?(G.value=[],E.value=!1):(G.value=d(z.value),E.value=!0)}return k((()=>i(this,null,(function*(){const e=yield c();B.value=e.list.map((e=>e.key)),z.value=e.list})))),(e,a)=>{const t=w("n-card"),l=w("n-icon"),o=w("n-button"),i=w("n-tree"),r=w("n-space"),c=w("n-modal");return g(),_("div",null,[x("div",P,[j(t,{bordered:!1,title:"角色权限管理"},{default:C((()=>[U])),_:1})]),j(t,{bordered:!1,class:"mt-4 proCard"},{default:C((()=>[j(O(u),{columns:O(K),request:Y,"row-key":e=>e.id,ref:(e,a)=>{a.actionRef=e,n.value=e},actionColumn:O(X),"onUpdate:checkedRowKeys":Z},{tableTitle:C((()=>[j(o,{type:"primary"},{icon:C((()=>[j(l,null,{default:C((()=>[j(O(S))])),_:1})])),default:C((()=>[q])),_:1})])),action:C((()=>[j(O(s))])),_:1},8,["columns","row-key","actionColumn"])])),_:1}),j(c,{show:p.value,"onUpdate:show":a[0]||(a[0]=e=>p.value=e),"show-icon":!1,preset:"dialog",title:M.value},{action:C((()=>[j(r,null,{default:C((()=>[j(o,{type:"info",ghost:"","icon-placement":"left",onClick:Q},{default:C((()=>[T(" 全部"+D(B.value.length?"收起":"展开"),1)])),_:1}),j(o,{type:"info",ghost:"","icon-placement":"left",onClick:V},{default:C((()=>[T(" 全部"+D(E.value?"取消":"选择"),1)])),_:1}),j(o,{type:"primary",loading:v.value,onClick:$},{default:C((()=>[A])),_:1},8,["loading"])])),_:1})])),default:C((()=>[x("div",R,[j(i,{"block-line":"",cascade:"",checkable:"","virtual-scroll":!0,data:z.value,expandedKeys:B.value,"checked-keys":G.value,style:{"max-height":"950px",overflow:"hidden"},"onUpdate:checkedKeys":L,"onUpdate:expandedKeys":N},null,8,["data","expandedKeys","checked-keys"])])])),_:1},8,["show","title"])])}}});export default E;
