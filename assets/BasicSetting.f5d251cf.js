import{d as e,e as a,a3 as l,i as u,X as r,o as t,a0 as s,Z as d,Y as n,x as o,a as i,bj as m}from"./vendor.70faab48.js";const p=m("更新基本信息"),f=e({setup(e){const m={name:{required:!0,message:"请输入昵称",trigger:"blur"},email:{required:!0,message:"请输入邮箱",trigger:"blur"},mobile:{required:!0,message:"请输入联系电话",trigger:"input"}},f=a(null),v=l(),b=u({name:"",mobile:"",email:"",address:""});function c(){f.value.validate((e=>{e?v.error("验证失败，请填写完整信息"):v.success("验证成功")}))}return(e,a)=>{const l=r("n-input"),u=r("n-form-item"),v=r("n-button"),g=r("n-space"),h=r("n-form"),_=r("n-grid-item"),x=r("n-grid");return t(),s(x,{cols:"2 s:2 m:2 l:3 xl:3 2xl:3",responsive:"screen"},{default:d((()=>[n(_,null,{default:d((()=>[n(h,{"label-width":80,model:o(b),rules:m,ref:(e,a)=>{a.formRef=e,f.value=e}},{default:d((()=>[n(u,{label:"昵称",path:"name"},{default:d((()=>[n(l,{value:o(b).name,"onUpdate:value":a[0]||(a[0]=e=>o(b).name=e),placeholder:"请输入昵称"},null,8,["value"])])),_:1}),n(u,{label:"邮箱",path:"email"},{default:d((()=>[n(l,{placeholder:"请输入备案编号",value:o(b).email,"onUpdate:value":a[1]||(a[1]=e=>o(b).email=e)},null,8,["value"])])),_:1}),n(u,{label:"联系电话",path:"mobile"},{default:d((()=>[n(l,{placeholder:"请输入联系电话",value:o(b).mobile,"onUpdate:value":a[2]||(a[2]=e=>o(b).mobile=e)},null,8,["value"])])),_:1}),n(u,{label:"联系地址",path:"address"},{default:d((()=>[n(l,{value:o(b).address,"onUpdate:value":a[3]||(a[3]=e=>o(b).address=e),type:"textarea",placeholder:"请输入联系地址"},null,8,["value"])])),_:1}),i("div",null,[n(g,null,{default:d((()=>[n(v,{type:"primary",onClick:c},{default:d((()=>[p])),_:1})])),_:1})])])),_:1},8,["model"])])),_:1})])),_:1})}}});export default f;
