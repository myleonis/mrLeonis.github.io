import{d as a,e,a3 as l,X as t,o as n,a0 as u,Z as s,Y as o,a as p,bj as r}from"./vendor.70faab48.js";const d=p("span",null,"NaiveUiAdmin@163.com",-1),i=p("span",null,"NaiveUiAdmin@qq.com",-1),m=p("span",null,"Ah jung",-1),f=p("span",null,"￥1980",-1),v={style:{"margin-left":"80px"}},c=r("提交"),b=r("上一步"),_=a({emits:["prevStep","nextStep"],setup(a,{emit:r}){const _=e(null),g=l(),h=e(!1),w=e({password:"086611"}),x={password:{required:!0,message:"请输入支付密码",trigger:"blur"}};function y(){r("prevStep")}function A(){h.value=!0,_.value.validate((a=>{a?g.error("验证失败，请填写完整信息"):setTimeout((()=>{r("nextStep")}),1500)}))}return(a,e)=>{const l=t("n-form-item"),r=t("n-divider"),g=t("n-input"),S=t("n-button"),j=t("n-space"),q=t("n-form");return n(),u(q,{"label-width":90,model:w.value,rules:x,"label-placement":"left",ref:(a,e)=>{e.form2Ref=a,_.value=a},style:{"max-width":"500px",margin:"40px auto 0 80px"}},{default:s((()=>[o(l,{label:"付款账户",path:"myAccount"},{default:s((()=>[d])),_:1}),o(l,{label:"收款账户",path:"account"},{default:s((()=>[i])),_:1}),o(l,{label:"收款人姓名",path:"name"},{default:s((()=>[m])),_:1}),o(l,{label:"转账金额",path:"money"},{default:s((()=>[f])),_:1}),o(r),o(l,{label:"支付密码",path:"password"},{default:s((()=>[o(g,{type:"password",value:w.value.password,"onUpdate:value":e[0]||(e[0]=a=>w.value.password=a)},null,8,["value"])])),_:1}),p("div",v,[o(j,null,{default:s((()=>[o(S,{type:"primary",loading:h.value,onClick:A},{default:s((()=>[c])),_:1},8,["loading"]),o(S,{onClick:y},{default:s((()=>[b])),_:1})])),_:1})])])),_:1},8,["model"])}}});export default _;
