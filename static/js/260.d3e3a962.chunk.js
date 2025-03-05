"use strict";(self.webpackChunknote_taking_app=self.webpackChunknote_taking_app||[]).push([[260],{7260:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Te});var r=n(5043),i=n(5464),l=n(579);const o=i.Ay.nav`
  display: block;
  padding: 0 0 4px 0;
  margin-bottom: 4px;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.noteLink.borderBottom}};
  font-family: ${e=>{let{theme:t}=e;return t.typography.fontFamily}};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.2px;
  color: ${e=>{let{theme:t}=e;return t.colors.noteLink.text}};
  cursor: pointer;
  transition: border-color 0.25s ease;

  &.active {
    border-color: transparent;
  }
`,s=i.Ay.div`
  padding: 8px;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  ${o}.active & {
    background-color: ${e=>{let{theme:t}=e;return t.colors.noteLink.backgroundActive}};
  }

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.noteLink.backgroundHover}};
  }
`,a=i.Ay.h2`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.3px;
`,c=i.Ay.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
`,d=i.Ay.span`
  padding: 2px 6px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.noteLink.tagBackground}};
  border-radius: 4px;
`,u=i.Ay.time`
  color: ${e=>{let{theme:t}=e;return t.colors.noteLink.lastEdited}};
`;const h=function(e){let{id:t,title:n,tags:r,lastEdited:i,isActive:h,onClick:p}=e;return(0,l.jsx)("li",{children:(0,l.jsx)(o,{className:h?"active":"",onClick:()=>(e=>{p(e)})(t),children:(0,l.jsxs)(s,{children:[(0,l.jsx)(a,{children:n}),(0,l.jsx)(c,{children:null===r||void 0===r?void 0:r.map((e=>(0,l.jsx)(d,{children:e},e)))}),(0,l.jsx)(u,{children:i})]})})})};const p=function(e,t){const[n,i]=(0,r.useState)([]),[l,o]=(0,r.useState)(!1),[s,a]=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async()=>{o(!0),a(null),i([]);try{const n=await fetch("/fm-note-taking-desktop-app/data.json");if(!n.ok)throw new Error(`Failed to fetch: ${n.statusText}`);const r=await n.json();i(x(r.notes,e,t))}catch(s){a(s.message)}finally{o(!1)}})()}),[e,t]),{notes:n,isLoading:l,error:s}},x=(e,t,n)=>{if(!e.length)return[];let r=e;switch(!0){case!t||"all"===t:r=e;break;case"archived"===t:r=e.filter((e=>e.isArchived));break;case t.startsWith("tag:"):const n=t.replace("tag:","").trim();r=e.filter((e=>e.tags.includes(n)));break;default:r=[]}return n&&(r=r.filter((e=>e.title.toLowerCase().includes(n)||e.content.toLowerCase().includes(n)||e.tags.includes(n)))),r};var f=n(6727),g=n(7343);const m=i.Ay.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.2px;
  color: ${e=>{let{theme:t}=e;return t.colors.hintText}};
`,v={archived:"All your archived notes are stored here. You can restore or delete them anytime.",tag:e=>`All notes with the \u201d${e}\u201d tag are shown here.`};const y=function(e){let{filter:t=""}=e;const{key:n,value:r}=t.startsWith("tag:")?{key:"tag",value:t.replace(/^tag:/,"").trim()}:{key:t,value:null},i=v[n],o="function"===typeof i?i(r):i;return o?(0,l.jsx)(m,{children:o}):null},b=i.Ay.div`
  padding: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.2px;
  color: ${e=>{let{theme:t}=e;return t.colors.emptyText}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.emptyTextBackground}};
  border-radius: 8px;

  span {
    text-decoration: underline;
  }
`,j={all:(0,l.jsx)(l.Fragment,{children:"You don\u2019t have any notes yet. Start a new note to capture your thoughts and ideas."}),archived:(0,l.jsxs)(l.Fragment,{children:["No notes have been archived yet. Move notes here for safekeeping, or"," ",(0,l.jsx)("span",{children:"create a new note"}),"."]}),search:(0,l.jsxs)(l.Fragment,{children:["No notes match your search. Try a different keyword or"," ",(0,l.jsx)("span",{children:"create a new note"}),"."]})};const w=function(e){let{filter:t}=e;const n=j[t];return n?(0,l.jsx)(b,{children:n}):null};var A=n(7055);n(7590);const C=i.Ay.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .ql-toolbar {
  }

  .ql-container {
    flex: 1;
    height: auto;
  }
`;const k=function(e){let{placeholder:t,defaultValue:n,ref:i}=e;const o=(0,r.useRef)(null),s=(0,r.useRef)(t),a=(0,r.useRef)(n);return(0,r.useEffect)((()=>{const e=o.current,t=e.appendChild(e.ownerDocument.createElement("div")),n=new A.Ay(t,{theme:"snow",placeholder:s.current});return i.current=n,a.current&&n.setContents(a.current),()=>{i.current=null,e.innerHTML=""}}),[i]),(0,l.jsx)(C,{id:"quill-editor",ref:o})};var $=n(8890);const E=i.AH`
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.2px;
`,L=i.Ay.label`
  ${E}
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>{let{theme:t}=e;return t.colors.input.labelLight}};
`,R=i.Ay.div`
  svg {
    width: 16px;
    height: 16px;
  }
`,N=i.Ay.div`
  flex: 0 0 115px;
  padding: 4px 0;
  display: flex;
  align-items: center;
  gap: 6px;
`,M=i.Ay.input`
  ${E}
  flex: 1;
  color: ${e=>{let{theme:t}=e;return t.colors.input.text}};
  border: none;
  border-radius: 4px;
  outline: none;
  background-color: ${e=>{let{theme:t}=e;return t.colors.input.background}};

  &::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.input.placeholderLight}};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${e=>{let{theme:t}=e;return t.colors.input.shadowInner}},
      0 0 0 3px ${e=>{let{theme:t}=e;return t.colors.input.shadowOuter}};
  }
`,I=i.Ay.input.attrs({type:"text"})`
  font-family: inherit;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
  color: ${e=>{let{theme:t}=e;return t.colors.input.text}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.input.background}};
  border: none;
  outline: none;

  &::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.input.text}};
  }
`;const O=function(e){let{icon:t,label:n,...r}=e;return(0,l.jsxs)(L,{children:[(0,l.jsxs)(N,{children:[t&&(0,l.jsx)(R,{children:(0,l.jsx)(t,{})}),n]}),(0,l.jsx)(M,{...r})]})};var S,z,Z=n(5290);function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(null,arguments)}function V(e,t){let{title:n,titleId:i,...l}=e;return r.createElement("svg",B({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},l),n?r.createElement("title",{id:i},n):null,S||(S=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.2505 3.75C7.69378 3.75 4.00049 7.44329 4.00049 12C4.00049 16.5558 7.69384 20.25 12.2505 20.25C16.8072 20.25 20.5005 16.5558 20.5005 12C20.5005 7.44329 16.8072 3.75 12.2505 3.75ZM2.50049 12C2.50049 6.61487 6.86536 2.25 12.2505 2.25C17.6356 2.25 22.0005 6.61487 22.0005 12C22.0005 17.3841 17.6357 21.75 12.2505 21.75C6.8653 21.75 2.50049 17.3841 2.50049 12Z",fill:"currentcolor"})),z||(z=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.9224 7.82666C12.3366 7.82666 12.6724 8.16245 12.6724 8.57666V12.2493L15.4819 13.9283C15.8375 14.1408 15.9535 14.6013 15.741 14.9569C15.5285 15.3124 15.068 15.4284 14.7124 15.2159L11.5376 13.3186C11.3111 13.1832 11.1724 12.9388 11.1724 12.6748V8.57666C11.1724 8.16245 11.5082 7.82666 11.9224 7.82666Z",fill:"currentcolor"})))}const T=r.forwardRef(V),H=(n.p,{ops:[{insert:"Key performance optimization techniques:\n\n"},{attributes:{bold:!0},insert:"Code Splitting"},{attributes:{list:"ordered"},insert:"\n"},{insert:"Use React.lazy() for route-based splitting"},{attributes:{list:"bullet"},insert:"\n"},{insert:"Implement dynamic imports for heavy components"},{attributes:{list:"bullet"},insert:"\n"},{insert:"\n"},{attributes:{bold:!0},insert:"Memoization"},{attributes:{list:"ordered"},insert:"\n"},{insert:"useMemo for expensive calculations"},{attributes:{list:"bullet"},insert:"\n"},{insert:"useCallback for function props"},{attributes:{list:"bullet"},insert:"\n"},{insert:"React.memo for component optimization"},{attributes:{list:"bullet"},insert:"\n"},{insert:"\n"},{attributes:{bold:!0},insert:"Virtual List Implementation"},{attributes:{list:"ordered"},insert:"\n"},{insert:"Use react-window for long lists"},{attributes:{list:"bullet"},insert:"\n"},{insert:"Implement infinite scrolling"},{attributes:{list:"bullet"},insert:"\n"},{insert:"\nTODO: Benchmark current application and identify bottlenecks\n\n"}]}),F=i.Ay.div.attrs({id:"XXXXXX"})`
  max-width: 588px;
  height: 100%;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-right: 1px solid ${e=>{let{theme:t}=e;return t.colors.border}};
`,P=i.Ay.div`
  display: flex;
  padding: 0 4px 0 0;
  flex-direction: column;
  gap: 12px;
`,X=i.Ay.div`
  min-height: 41px;
  display: flex;
  align-items: center;
  gap: 8px;
`,q=i.Ay.div.attrs({id:"quil-wrapper"})`
  flex: 1;
  min-height: 120px;
`,W=e=>{let{onCancel:t}=e;const[n,i]=(0,r.useState)({title:"",tags:"",lastEdited:"",note:""}),o=(0,r.useRef)(),s=(0,r.useRef)(new A.Ru(H)),a=e=>{let{target:{name:t,value:n}}=e;i((e=>({...e,[t]:n})))};return(0,l.jsxs)(F,{children:[(0,l.jsx)(I,{name:"title",value:n.title,onChange:a,placeholder:"Enter a title\u2026"}),(0,l.jsxs)(P,{children:[(0,l.jsx)(O,{name:"tags",value:n.tags,onChange:a,icon:Z.h,label:"Tags",placeholder:"Add tags separated by commas (e.g. Work, Planning)"}),(0,l.jsx)(O,{name:"lastEdited",value:n.lastEdited,onChange:a,icon:T,label:"Last edited",placeholder:"Not yet saved"})]}),(0,l.jsx)(q,{children:(0,l.jsx)(k,{placeholder:"Start typing your note here\u2026",defaultValue:s.current,ref:o})}),(0,l.jsxs)(X,{children:[(0,l.jsx)(g.A,{onClick:()=>{const e={...n,note:JSON.stringify(o.current.getContents())};console.log(e),(0,$.$)("Note saved successfully!")},children:"Save Note"}),(0,l.jsx)(g.A,{variant:"secondary",onClick:t,children:"Cancel"})]})]})};var Y=n(606);const _=i.Ay.div`
  padding: 4px 0;
  display: flex;
`,D=i.Ay.span`
  width: 115px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${e=>{let{theme:t}=e;return t.colors.subtitle}};
`,U=i.Ay.div`
  display: flex;
  align-items: center;
  svg {
    width: 16px;
    height: 16px;
  }
`,J=i.Ay.span`
  flex: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
  color: ${e=>{let{theme:t}=e;return t.colors.title}};
`;const K=function(e){let{icon:t,name:n,value:r}=e;const i=Array.isArray(r)?r.join(", "):r||"N/A";return(0,l.jsxs)(_,{children:[(0,l.jsxs)(D,{children:[t&&(0,l.jsx)(U,{"aria-hidden":"true",children:(0,l.jsx)(t,{})}),n]}),(0,l.jsx)(J,{children:i})]})};var Q,G,ee=n(4067);function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(null,arguments)}function ne(e,t){let{title:n,titleId:i,...l}=e;return r.createElement("svg",te({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},l),n?r.createElement("title",{id:i},n):null,Q||(Q=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.65775 6.3478C5.92811 6.07743 6.36646 6.07742 6.63682 6.34778L7.51281 7.22375C7.78317 7.49411 7.78318 7.93245 7.51282 8.20282C7.24246 8.47319 6.80412 8.47319 6.53375 8.20283L5.65777 7.32687C5.3874 7.05651 5.38739 6.61816 5.65775 6.3478ZM7.51267 15.794C7.78312 16.0643 7.78324 16.5026 7.51295 16.7731L5.92417 18.3627C5.65388 18.6332 5.21553 18.6333 4.9451 18.363C4.67466 18.0927 4.67454 17.6545 4.94482 17.384L6.5336 15.7943C6.80389 15.5238 7.24224 15.5237 7.51267 15.794ZM15.1052 15.794C15.3756 15.5237 15.8139 15.5238 16.0842 15.7943L17.673 17.384C17.9433 17.6545 17.9432 18.0927 17.6727 18.363C17.4023 18.6333 16.964 18.6332 16.6937 18.3627L15.1049 16.7731C14.8346 16.5026 14.8347 16.0643 15.1052 15.794Z",fill:"#2B303B"})),G||(G=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.308 4.5835C11.6904 4.5835 12.0003 4.89346 12.0003 5.2758V5.93838C12.0003 6.32073 11.6904 6.63069 11.308 6.63069C10.9257 6.63069 10.6157 6.32073 10.6157 5.93838V5.2758C10.6157 4.89346 10.9257 4.5835 11.308 4.5835ZM2.82373 11.9989C2.82373 11.6166 3.13369 11.3066 3.51604 11.3066H5.24746C5.62981 11.3066 5.93977 11.6166 5.93977 11.9989C5.93977 12.3812 5.62981 12.6912 5.24746 12.6912H3.51604C3.13369 12.6912 2.82373 12.3812 2.82373 11.9989ZM16.6764 11.9989C16.6764 11.6166 16.9862 11.3066 17.3687 11.3066H19.6157C19.998 11.3066 20.308 11.6166 20.308 11.9989C20.308 12.3812 19.998 12.6912 19.6157 12.6912H17.3687C16.9862 12.6912 16.6764 12.3812 16.6764 11.9989ZM11.308 17.3672C11.6904 17.3672 12.0003 17.6772 12.0003 18.0596V20.3067C12.0003 20.689 11.6904 20.999 11.308 20.999C10.9257 20.999 10.6157 20.689 10.6157 20.3067V18.0596C10.6157 17.6772 10.9257 17.3672 11.308 17.3672Z",fill:"#2B303B"})))}const re=r.forwardRef(ne),ie=(n.p,i.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`),le=i.Ay.div`
  width: 100%;
  max-width: 440px;
  border-radius: 12px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.modal.border}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.modal.background}};
`,oe=i.Ay.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
`,se=i.Ay.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.modal.iconContainer.background}};
`,ae=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ce=i.Ay.h1`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.3px;
  color: ${e=>{let{theme:t}=e;return t.colors.modal.title}};
`,de=i.Ay.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.2px;
  color: ${e=>{let{theme:t}=e;return t.colors.modal.text}};
`,ue=i.Ay.div`
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`,he=e=>{let{icon:t,title:n,text:i,open:o,closeable:s=!1,onClose:a,confirmText:c,onConfirm:d,action:u}=e;return(0,r.useEffect)((()=>{const e=e=>{"Escape"===e.key&&a()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[a]),o?(0,l.jsx)(ie,{onClick:s?()=>a():()=>{},children:(0,l.jsxs)(le,{onClick:e=>e.stopPropagation(),children:[(0,l.jsxs)(oe,{children:[t&&(0,l.jsx)(se,{children:(0,l.jsx)(t,{})}),(0,l.jsxs)(ae,{children:[(0,l.jsx)(ce,{children:n}),(0,l.jsx)(de,{children:i})]})]}),(0,l.jsx)(ee.A,{$margin:"0"}),(0,l.jsxs)(ue,{children:[(0,l.jsx)(g.A,{variant:"secondary",onClick:a,children:"Cancel"}),u]})]})}):null};var pe=n(8940);const xe=function(e){let{noteId:t}=e;const[n,i]=(0,r.useState)(!1),o="Archive Note";return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.A,{variant:"border",icon:pe.h,onClick:()=>i(!0),children:o}),(0,l.jsx)(he,{icon:pe.h,title:o,text:"Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.",open:n,onClose:()=>i(!1),action:(0,l.jsx)(g.A,{onClick:()=>{i(!1),(0,$.$)("Note archived.",{linkProps:{text:"Archived Notes",to:"/archived-notes",noteId:t}})},children:o})})]})};var fe,ge;function me(){return me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(null,arguments)}function ve(e,t){let{title:n,titleId:i,...l}=e;return r.createElement("svg",me({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24",ref:t,"aria-labelledby":i},l),n?r.createElement("title",{id:i},n):null,fe||(fe=r.createElement("path",{fill:"currentcolor",fillRule:"evenodd",d:"M3.708 7.404a.75.75 0 0 1 .983.398l1.316 3.114L9.1 9.608a.75.75 0 0 1 .584 1.382L5.9 12.59a.75.75 0 0 1-.983-.4L3.309 8.387a.75.75 0 0 1 .4-.982Z",clipRule:"evenodd"})),ge||(ge=r.createElement("path",{fill:"currentcolor",fillRule:"evenodd",d:"M12.915 5.664c-3.447 0-6.249 2.746-6.335 6.16a.75.75 0 0 1-1.5-.038c.108-4.228 3.575-7.622 7.835-7.622a7.838 7.838 0 0 1 7.835 7.835 7.833 7.833 0 0 1-7.835 7.835 7.843 7.843 0 0 1-6.457-3.384.75.75 0 1 1 1.232-.856 6.343 6.343 0 0 0 5.225 2.74 6.333 6.333 0 0 0 6.335-6.335 6.339 6.339 0 0 0-6.335-6.335Z",clipRule:"evenodd"})))}const ye=r.forwardRef(ve);n.p;const be=function(e){let{noteId:t}=e;const[n,i]=(0,r.useState)(!1),o="Restore Note";return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.A,{variant:"border",icon:ye,onClick:()=>i(!0),children:o}),(0,l.jsx)(he,{icon:ye,title:o,text:"Are you sure you want to restore this note? You can find it in the All Notes section and archive it anytime.",open:n,onClose:()=>i(!1),action:(0,l.jsx)(g.A,{onClick:()=>{i(!1),(0,$.$)("Note restored to active notes.",{linkProps:{text:"All Notes",to:"/all-notes",noteId:t}})},children:o})})]})};var je;function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we.apply(null,arguments)}function Ae(e,t){let{title:n,titleId:i,...l}=e;return r.createElement("svg",we({xmlns:"http://www.w3.org/2000/svg",width:24,height:25,fill:"none",viewBox:"0 0 24 25",ref:t,"aria-labelledby":i},l),n?r.createElement("title",{id:i},n):null,je||(je=r.createElement("path",{stroke:"currentcolor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"m14.852 3.879.818 1.785h2.64c.811 0 1.47.658 1.47 1.47V8.22c0 .555-.45 1.005-1.006 1.005H5.005C4.45 9.226 4 8.776 4 8.221V7.133c0-.811.658-1.47 1.47-1.47h2.639l.818-1.784c.246-.536.78-.879 1.37-.879h3.185c.59 0 1.125.343 1.37.879ZM18.24 9.3v8.686c0 1.665-1.333 3.014-2.977 3.014H8.517c-1.644 0-2.977-1.349-2.977-3.014V9.301M10.2 12.816v4.509m3.38-4.509v4.509"})))}const Ce=r.forwardRef(Ae);n.p;const ke=function(e){let{noteId:t}=e;const[n,i]=(0,r.useState)(!1),o="Delete Note";return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.A,{variant:"border",icon:Ce,onClick:()=>i(!0),children:o}),(0,l.jsx)(he,{icon:Ce,title:o,text:"Are you sure you want to permanently delete this note? This action cannot be undone.",open:n,onClose:()=>i(!1),action:(0,l.jsx)(g.A,{variant:"delete",onClick:()=>{i(!1),(0,$.$)("Note permanently deleted.")},children:o})})]})},$e=i.Ay.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.2px;
`,Ee=i.Ay.div`
  flex: 1;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-right: 1px solid ${e=>{let{theme:t}=e;return t.colors.border}};
`,Le=i.Ay.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
  color: ${e=>{let{theme:t}=e;return t.colors.title}};
`,Re=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ne=i.Ay.div`
  flex: 1;
  overflow: hidden;
`,Me=i.Ay.pre`
  white-space: pre-wrap;
  font-family: inherit;
`,Ie=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Oe=i.Ay.div`
  width: 258px;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 20px 0 20px 16px;
  margin-right: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;const Se=function(e){let{note:t}=e;const{id:n,title:r,tags:i,lastEdited:o,isArchived:s,content:a}=t;return(0,l.jsxs)($e,{children:[(0,l.jsxs)(Ee,{children:[(0,l.jsx)(Le,{children:r}),(0,l.jsxs)(Re,{children:[(0,l.jsx)(K,{icon:Z.h,name:"Tags",value:i}),s&&(0,l.jsx)(K,{icon:re,name:"Status",value:"Archived"}),(0,l.jsx)(K,{icon:T,name:"Last edited",value:o})]}),(0,l.jsx)(ee.A,{$margin:"0"}),(0,l.jsx)(Ne,{children:(0,l.jsx)(Y.A,{children:(0,l.jsx)(Me,{children:a})})}),(0,l.jsx)(ee.A,{$margin:"0"}),(0,l.jsxs)(Ie,{children:[(0,l.jsx)(g.A,{children:"Save Note"}),(0,l.jsx)(g.A,{variant:"secondary",children:"Cancel"})]})]}),(0,l.jsxs)(Oe,{children:[s?(0,l.jsx)(be,{noteId:n}):(0,l.jsx)(xe,{noteId:n}),(0,l.jsx)(ke,{noteId:n})]})]})},ze=i.Ay.div`
  flex: 1;
  display: flex;
`,Ze=i.Ay.aside`
  width: 290px;
  padding: 20px 16px 20px 32px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  border-right: 1px solid ${e=>{let{theme:t}=e;return t.colors.border}};
`,Be=i.Ay.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
`,Ve=i.Ay.div`
  flex: 1;
`;const Te=function(e){let{archived:t}=e;const{tagName:n,searchQuery:i}=(0,f.g)(),o=t?"archived":n?`tag:${n}`:"all",{notes:s,isLoading:a,error:c}=p(o,i),[d,u]=(0,r.useState)(null),[x,m]=(0,r.useState)(!1),v=(0,r.useRef)();(0,r.useEffect)((()=>{m(!1),u(s.length>0?s[0]:null)}),[s]);const b=e=>{u(s.find((t=>t.id===e))),m(!1)};return a?(0,l.jsx)("p",{children:"Loading ..."}):c?(0,l.jsx)("p",{children:`Error: ${c}`}):(0,l.jsxs)(ze,{children:[(0,l.jsxs)(Ze,{children:[(0,l.jsx)(g.A,{onClick:()=>{v.current=d,u(null),m(!0)},children:"+ Create New Note"}),(0,l.jsx)(y,{filter:o}),!s.length&&(0,l.jsx)(w,{filter:o}),(0,l.jsx)(Be,{children:(0,l.jsx)(Y.A,{children:s.map((e=>(0,l.jsx)(h,{id:e.id,title:e.title,tags:e.tags,lastEdited:e.lastEdited,onClick:b,isActive:e.id===(null===d||void 0===d?void 0:d.id)},e.id)))})})]}),(0,l.jsx)(Ve,{children:x?(0,l.jsx)(W,{onCancel:()=>{m(!1),u(v.current||(s.length>0?s[0]:null))}}):d&&(0,l.jsx)(Se,{note:d})})]})}}}]);
//# sourceMappingURL=260.d3e3a962.chunk.js.map