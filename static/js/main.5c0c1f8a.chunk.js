(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(3),r=a.n(c);var o=e=>{let{startQuiz:t}=e;const[a,c]=Object(n.useState)(!1);return s.a.createElement("div",{className:"home animated"},s.a.createElement("h1",null,"Welcome to the Quiz App"),a?s.a.createElement("p",null,"Loading questions..."):s.a.createElement("button",{className:"start-button",onClick:async()=>{c(!0);try{const a=await fetch("https://opentdb.com/api.php?amount=10&type=multiple"),n={questions:(await a.json()).results.map(e=>({question:e.question,answers:[...e.incorrect_answers,e.correct_answer].sort(),correct:e.correct_answer}))};t(n)}catch(e){console.error("Error fetching quiz questions:",e)}c(!1)}},"Start Quiz"))};var l=e=>{let{timeSpent:t}=e;return s.a.createElement("div",{className:"timer"},s.a.createElement("p",null,"Time spent: ",t," seconds"))},u=a(1);var i=e=>{let{data:t,onFinish:a,setScore:c,setTimeSpent:r}=e;const[o,i]=Object(n.useState)(0),[m,p]=Object(n.useState)(0),[d,E]=Object(n.useState)(!1),[b,w]=Object(n.useState)(""),S=new u.Howl({src:["/React-App/sounds/correct.mp3"]}),h=new u.Howl({src:["/React-App/sounds/incorrect.mp3"]}),j=()=>{w("fade-out"),setTimeout(()=>{w(""),o<t.questions.length-1?(i(e=>e+1),E(!1)):a()},300)};return Object(n.useEffect)(()=>{const e=setInterval(()=>{p(e=>e+1),r(e=>e+1)},1e3);return()=>clearInterval(e)},[r]),s.a.createElement("div",{className:`quiz animated ${b}`},s.a.createElement("h2",null,"Question ",o+1,"/",t.questions.length),s.a.createElement("p",null,t.questions[o].question),s.a.createElement(l,{timeSpent:m}),s.a.createElement("div",{className:"choices"},t.questions[o].answers.map((e,a)=>s.a.createElement("button",{key:a,onClick:()=>(e=>{d||(E(!0),e===t.questions[o].correct?(c(e=>e+1),S.play()):h.play(),j())})(e),disabled:d},e))))};var m=()=>{const[e,t]=Object(n.useState)(!1),[a,c]=Object(n.useState)(null),[r,l]=Object(n.useState)(!1),[m,p]=Object(n.useState)(0),[d,E]=Object(n.useState)(0),[b,w]=Object(n.useState)(null);Object(n.useEffect)(()=>{const e=new u.Howl({src:["/React-App/sounds/background.mp3"],loop:!0,volume:.5});return w(e),()=>{e.stop()}},[]);return s.a.createElement("div",{className:"App"},e?r?s.a.createElement("div",{className:"result animated"},s.a.createElement("h2",null,"Quiz Completed!"),s.a.createElement("p",null,"Your score: ",m),s.a.createElement("p",null,"Time spent: ",d," seconds"),s.a.createElement("button",{onClick:()=>{t(!1),l(!1),p(0)}},"Restart Quiz")):s.a.createElement(i,{data:a,onFinish:()=>{b.stop(),l(!0)},setScore:p,setTimeSpent:E}):s.a.createElement(o,{startQuiz:e=>{c(e),t(!0),b.play(),E(0)}}))};a(13);r.a.createRoot(document.getElementById("root")).render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(m,null)))},4:function(e,t,a){e.exports=a(14)}},[[4,1,2]]]);
//# sourceMappingURL=main.5c0c1f8a.chunk.js.map