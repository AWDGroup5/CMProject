import{f as n,u as U,g as s,o as k,c as y,e,h as t,F as P,a as f,i as V}from"./index-30f84f12.js";const w=f("div",{style:{margin:"auto","text-align":"center"}},[f("h2",null,"Add Post")],-1),T={__name:"UploadView",props:{posts:{type:Array,default:()=>[]}},emits:["add-post"],setup(B,{emit:c}){const d=n(""),m=n(""),r=n(""),p=n(""),i=n(""),v=U();function b(){c("add-post",d.value,m.value,r.value,p.value,i.value),v.push("/")}return(g,l)=>{const u=s("el-input"),a=s("el-form-item"),_=s("el-button"),x=s("router-link"),C=s("el-form");return k(),y(P,null,[w,e(C,{ref:"form",model:g.form,"label-width":"120px"},{default:t(()=>[e(a,{label:"Slug"},{default:t(()=>[e(u,{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=o=>d.value=o)},null,8,["modelValue"])]),_:1}),e(a,{label:"Title"},{default:t(()=>[e(u,{modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=o=>m.value=o)},null,8,["modelValue"])]),_:1}),e(a,{label:"Description"},{default:t(()=>[e(u,{modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=o=>r.value=o)},null,8,["modelValue"])]),_:1}),e(a,{label:"Content"},{default:t(()=>[e(u,{type:"textarea",modelValue:p.value,"onUpdate:modelValue":l[3]||(l[3]=o=>p.value=o)},null,8,["modelValue"])]),_:1}),e(a,{label:"Tags"},{default:t(()=>[e(u,{modelValue:i.value,"onUpdate:modelValue":l[4]||(l[4]=o=>i.value=o)},null,8,["modelValue"])]),_:1}),e(a,null,{default:t(()=>[e(_,{type:"success",onClick:b},{default:t(()=>[V("Create Post")]),_:1}),e(x,{to:{name:"PostList"}},{default:t(()=>[e(_,null,{default:t(()=>[V("Cancel")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])],64)}}};export{T as default};