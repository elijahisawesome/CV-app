(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{16:function(e,A,t){},17:function(e,A,t){},20:function(e,A,t){"use strict";t.r(A);var n=t(5),r=t.n(n),a=t(11),s=t.n(a),c=(t(16),t(1)),o=t(2),i=t(4),l=t(3),d=(t(17),t(0));function j(e){return Object(d.jsx)("div",{children:e.propArray.map((function(A,t){return Object(d.jsxs)("li",{children:[A.Skill,Object(d.jsx)("button",{className:"RemovableForm",onClick:function(){e.deleter(t)},children:"Delete"})]},A.id)}))})}j.defaultProps={propArray:[{Skill:"Skill: ",id:1}]};var u=j,b=t(8),h=t(7),O=t(6),m=t(10),f=t.n(m),B=function(e){Object(i.a)(t,e);var A=Object(l.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=A.call(this,e)).state={infoToBePassedArray:[],infoToBePassedProto:{id:f()()}},n.submitBox=n.submitBox.bind(Object(O.a)(n)),n.updateHandler=n.updateHandler.bind(Object(O.a)(n)),n.removeElement=n.removeElement.bind(Object(O.a)(n)),n}return Object(o.a)(t,[{key:"submitBox",value:function(e,A){var t=this;e.preventDefault(),A?this.setState((function(e){return{infoToBePassedArray:[t.state.infoToBePassedProto]}})):this.setState((function(e){return{infoToBePassedArray:t.state.infoToBePassedArray.concat(t.state.infoToBePassedProto),infoToBePassedProto:Object(h.a)(Object(h.a)({},e.infoToBePassedProto),{},{id:f()()})}}))}},{key:"updateHandler",value:function(e,A){this.setState((function(t){return{infoToBePassedProto:Object(h.a)(Object(h.a)({},t.infoToBePassedProto),{},Object(b.a)({},A,e.target.value))}}))}},{key:"removeElement",value:function(e){var A=this.state.infoToBePassedArray;A.splice(e,1),this.setState((function(e){return{infoToBePassedArray:A}}))}}]),t}(n.Component),x=function(e){Object(i.a)(t,e);var A=Object(l.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=A.call(this,e)).defaultArray=n.state.infoToBePassedArray,n}return Object(o.a)(t,[{key:"render",value:function(){var e,A=this;return this.state.infoToBePassedArray!=this.defaultArray&&(e=this.state.infoToBePassedArray),Object(d.jsxs)("div",{className:"SkillBox Controller",children:[Object(d.jsxs)("form",{className:"RemovableForm",onSubmit:this.submitBox,children:["Add Skill",Object(d.jsx)("input",{onChange:function(e){return A.updateHandler(e,"Skill")}}),Object(d.jsx)("button",{children:"Submit"})]}),Object(d.jsxs)("div",{className:"Rendered Moveable",children:["Skills:",Object(d.jsx)(u,{propArray:e,deleter:this.removeElement})]})]})}}]),t}(B);function p(e){return Object(d.jsx)("ul",{children:e.EdArray.map((function(A,t){return Object(d.jsxs)("li",{children:[Object(d.jsxs)("div",{id:"School",className:"Content",children:["School: ",A.School]}),Object(d.jsxs)("div",{id:"From",className:"Content",children:["From: ",A.From]}),Object(d.jsxs)("div",{id:"To",className:"Content",children:["To: ",A.To]}),Object(d.jsxs)("div",{id:"GPA",className:"Content",children:["GPA: ",A.TotalGPA]}),Object(d.jsx)("button",{className:"RemovableForm",onClick:function(){e.deleter(t)},children:"Delete"})]},A.id)}))})}p.defaultProps={EdArray:[{School:"",From:"",To:"",TotalGPA:"",id:0}]};var v=p,E=function(e){Object(i.a)(t,e);var A=Object(l.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=A.call(this,e)).blankArray=n.state.infoToBePassedArray,n}return Object(o.a)(t,[{key:"render",value:function(){var e,A=this;return this.state.infoToBePassedArray!=this.blankArray&&(e=this.state.infoToBePassedArray),Object(d.jsxs)("div",{className:"EducationBox Controller",children:[Object(d.jsxs)("form",{className:"RemovableForm",onSubmit:function(e){return A.submitBox(e)},children:[Object(d.jsx)("p",{children:"Add Education"}),"School",Object(d.jsx)("input",{id:"edboxschool",onChange:function(e){return A.updateHandler(e,"School")}}),"From",Object(d.jsx)("input",{id:"edboxfrom",onChange:function(e){return A.updateHandler(e,"From")}}),"To",Object(d.jsx)("input",{id:"edboxto",onChange:function(e){return A.updateHandler(e,"To")}}),"GPA",Object(d.jsx)("input",{id:"edboxgpa",onChange:function(e){return A.updateHandler(e,"TotalGPA")}}),Object(d.jsx)("button",{children:"Submit"})]}),Object(d.jsxs)("div",{className:"Rendered Moveable",children:[Object(d.jsx)("p",{children:"Education: "}),Object(d.jsx)(v,{EdArray:e,deleter:this.removeElement})]})]})}}]),t}(B);function C(e){return Object(d.jsx)("ul",{children:e.propArray.map((function(A,t){return Object(d.jsxs)("li",{children:[Object(d.jsx)("div",{className:"Content",children:A.Company}),Object(d.jsx)("div",{className:"Content",children:A.Role}),Object(d.jsx)("div",{className:"Content Description",children:A.Description}),Object(d.jsx)("button",{className:"RemovableForm",onClick:function(){e.deleter(t)},children:"Delete"})]},A.id)}))})}C.defaultProps={propArray:[{Company:"Company: ",Role:"Role: ",Description:"Description: ",id:1}]};var g=C,P=function(e){Object(i.a)(t,e);var A=Object(l.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=A.call(this,e)).blankArray=n.state.infoToBePassedArray,n}return Object(o.a)(t,[{key:"render",value:function(){var e,A=this;return this.state.infoToBePassedArray!=this.blankArray&&(e=this.state.infoToBePassedArray),Object(d.jsxs)("div",{className:"ExperienceBox Controller",children:[Object(d.jsxs)("form",{onSubmit:this.submitBox,className:"RemovableForm",children:[Object(d.jsx)("p",{children:"Add Experience"}),"Company",Object(d.jsx)("input",{onChange:function(e){return A.updateHandler(e,"Company")}}),"Role",Object(d.jsx)("input",{onChange:function(e){return A.updateHandler(e,"Role")}}),Object(d.jsxs)("div",{children:["Description",Object(d.jsx)("textarea",{onChange:function(e){return A.updateHandler(e,"Description")}})]}),Object(d.jsx)("button",{children:"Submit"})]}),Object(d.jsxs)("div",{className:"Rendered Moveable",children:[Object(d.jsx)("p",{children:"Experience: "}),Object(d.jsx)(g,{propArray:e,deleter:this.removeElement})]})]})}}]),t}(B);function y(e){return Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:"Headshot",src:e.image})})}y.defaultProps={image:"data:image/jpeg;base64,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"};var Q=y,R=function(e){Object(i.a)(t,e);var A=Object(l.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=A.call(this,e)).blankProp=n.state.infoToBePassedProto,n}return Object(o.a)(t,[{key:"render",value:function(){var e,A=this;return this.blankProp!=this.state.infoToBePassedProto&&(e=this.state.infoToBePassedProto),Object(d.jsxs)("div",{className:"HeadshotBox",children:[Object(d.jsx)("input",{className:"RemovableForm",type:"file",accept:"image/*",onChange:function(e){A.handleUpdate(e)}}),Object(d.jsx)("div",{className:"Rendered",children:Object(d.jsx)(Q,{image:e})})]})}},{key:"handleUpdate",value:function(e){var A=e.target.files;this.setState({infoToBePassedProto:URL.createObjectURL(A[0])})}}]),t}(B);function T(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:e.propArray.Objective}),Object(d.jsx)("button",{className:"RemovableForm",onClick:function(){return e.deleter(0)},children:"Delete"})]})}T.defaultProps={propArray:[{Objective:"Objective: ",id:1}]};var I=T,N=function(e){Object(i.a)(t,e);var A=Object(l.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=A.call(this,e)).defaultArray=n.state.infoToBePassedArray,n}return Object(o.a)(t,[{key:"render",value:function(){var e=this,A=[];return this.state.infoToBePassedArray!=this.defaultArray&&(A=this.state.infoToBePassedArray),Object(d.jsxs)("div",{className:"ObjectiveBox Controller",children:[Object(d.jsxs)("form",{className:"RemovableForm",onSubmit:function(A){e.submitBox(A,!0)},children:["Add Objective",Object(d.jsx)("textarea",{onChange:function(A){return e.updateHandler(A,"Objective")}}),Object(d.jsx)("button",{children:"Submit"})]}),Object(d.jsxs)("div",{className:"Rendered Moveable",children:[Object(d.jsx)("p",{children:"Objective: "}),Object(d.jsx)(I,{propArray:A[0],deleter:this.removeElement})]})]})}}]),t}(B);function k(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("li",{children:[Object(d.jsx)("div",{className:"Content",children:e.propArray.Name}),Object(d.jsx)("div",{className:"Content",children:e.propArray.Address}),Object(d.jsx)("div",{className:"Content",children:e.propArray.Email}),Object(d.jsx)("div",{className:"Content",children:e.propArray.Phone}),Object(d.jsx)("button",{className:"RemovableForm",onClick:function(){e.deleter(0)},children:"Delete"})]},e.propArray.id)})}k.defaultProps={propArray:{}};var w=k,G=function(e){Object(i.a)(t,e);var A=Object(l.a)(t);function t(){return Object(c.a)(this,t),A.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"UserID",children:[Object(d.jsx)("p",{children:"Add Contact Info:"}),Object(d.jsxs)("form",{className:"RemovableForm",onSubmit:function(A){e.submitBox(A,!0)},children:["Name:",Object(d.jsx)("input",{type:"text",onChange:function(A){e.updateHandler(A,"Name")}}),"Address:",Object(d.jsx)("input",{type:"text",onChange:function(A){e.updateHandler(A,"Address")}}),"Email:",Object(d.jsx)("input",{type:"email",onChange:function(A){e.updateHandler(A,"Email")}}),"Phone Number:",Object(d.jsx)("input",{type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",required:!0,onChange:function(A){e.updateHandler(A,"Phone")}}),Object(d.jsx)("button",{children:"Submit"})]}),Object(d.jsxs)("div",{className:"Rendered Moveable",children:[Object(d.jsx)("p",{children:"Contact Info: "}),Object(d.jsx)(w,{propArray:this.state.infoToBePassedArray[0],deleter:this.removeElement})]})]})}}]),t}(B),S=function(e){Object(i.a)(t,e);var A=Object(l.a)(t);function t(e){return Object(c.a)(this,t),A.call(this,e)}return Object(o.a)(t,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"CV",id:"CV",children:[Object(d.jsx)(R,{}),Object(d.jsx)(G,{}),Object(d.jsx)(E,{}),Object(d.jsx)(P,{}),Object(d.jsx)(x,{}),Object(d.jsx)(N,{}),Object(d.jsx)("button",{onClick:this.togglePrint,children:"Ready To Print"})]})}},{key:"togglePrint",value:function(){document.getElementById("CV").classList.toggle("Printing");var e=document.getElementsByClassName("RemovableForm");Array.from(e).forEach((function(e){e.classList.toggle("Printing")}));var A=document.getElementsByClassName("Rendered");Array.from(A).forEach((function(e){e.classList.toggle("Printing")}))}}]),t}(n.Component);s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.26db3bab.chunk.js.map