import{c as h,h as g}from"./render.3b93844e.js";import{e as s,c as i,h as y,f as d,j as v,C,g as $,_ as b,G as x,I as _,J as P,K as I,A as c,Z as p,T as n,N as Q,O as F}from"./index.d9914fad.js";var N=h({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:a}){const{proxy:{$q:l}}=$(),t=d(v,s);if(t===s)return console.error("QPage needs to be a deep child of QLayout"),s;if(d(C,s)===s)return console.error("QPage needs to be child of QPageContainer"),s;const u=i(()=>{const r=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const f=t.isContainer.value===!0?t.containerHeight.value:l.screen.height;return e.styleFn(r,f)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-r+"px":l.screen.height===0?r!==0?`calc(100vh - ${r}px)`:"100vh":l.screen.height-r+"px"}}),o=i(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>y("main",{class:o.value,style:u.value},g(a.default))}});const B=x({name:"IndexPage",data(){return{result:0}},methods:{teste(){const e=parseInt(this.num1,10)+parseInt(this.num2,10);console.log(e),this.result=e}}}),V=n("label",{for:"fname"},"Num 1:",-1),k=n("br",null,null,-1),q=n("br",null,null,-1),H=n("label",{for:"lname"},"Num 2:",-1),K=n("br",null,null,-1);function S(e,a,l,t,m,u){return _(),P(N,{class:"flex flex-center column"},{default:I(()=>[V,k,c(n("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>e.num1=o),type:"number",id:"fname",name:"fname"},null,512),[[p,e.num1]]),q,H,K,c(n("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>e.num2=o),type:"text",id:"lname",name:"lname"},null,512),[[p,e.num2]]),n("button",{onClick:a[2]||(a[2]=o=>e.teste())}," Somar"),n("label",null,[Q(" Resultado: "),n("span",null,F(e.result),1)])]),_:1})}var w=b(B,[["render",S]]);export{w as default};
