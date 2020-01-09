(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,r){e.exports={utils:r(35),Input:r(42),RenderClip:r(39),RenderClip2D:r(43),Tree:r(44),RenderClipController:r(40),RenderClip2DController:r(48),TreeController:r(50)}},35:function(e,t,r){(()=>{"use strict";const t="object"==typeof e.exports;let r,i;const o=()=>{const e=document.createElement("div");return e.style.width="fit-content","fit-content"===e.style.width?"fit-content":"-moz-fit-content"},n=()=>{const e=document.createElement("div");return e.style.position="sticky","sticky"===e.style.position?"sticky":"-webkit-sticky"},l={debounce:(e,t)=>{let r;return{function(...i){clearTimeout(r),r=setTimeout(()=>{e.apply(this,i)},t)}}.function},getFitContentValue:()=>(r||(r=o()),r),getStickyValue:()=>(i||(i=n()),i)};t?e.exports=l:(window.crizmas=window.crizmas||{},window.crizmas.componentUtils=l)})()},38:function(e,t,r){(()=>{"use strict";const t="object"==typeof e.exports,r=(e,t,r)=>{e.forEach(e=>{if(n(t,e))throw new Error(`${e} was already mixed in.`);const i=r[e];if(!o(i))throw new Error("The mixin method must be a function.");t[e]=i})},i=e=>!!e&&"object"==typeof e,o=e=>"function"==typeof e,n=Function.prototype.call.bind(Object.prototype.hasOwnProperty),l=e=>{if(!o(e))throw new Error("The mixin callback must be a function.");const t=({context:o,state:n,contextMethods:l,mixMethods:s,meta:a})=>{const c=e(o,n),d={};if(a){if(t.getContext){if(!i(o))throw new Error("The context must be an object when getContext is provided.");Object.defineProperties(o,Object.getOwnPropertyDescriptors(t.getContext(o,n)))}if(t.getState){if(!i(n))throw new Error("The state must be an object when getState is provided.");Object.defineProperties(n,Object.getOwnPropertyDescriptors(t.getState(o,n)))}}if(l){if(!i(o))throw new Error("The context must be an object when contextMethods is provided.");r(l,o,c)}return s&&r(s,d,c),d};return t};t?e.exports=l:window.mixin=l})()},39:function(e,t,r){(()=>{"use strict";const t="object"==typeof e.exports;let i,o,n;t?(i=r(0),o=r(8),n=r(35)):(i=window.React,o=window.PropTypes,({componentUtils:n}=window.crizmas));const{Component:l,createElement:s}=i,{getFitContentValue:a,getStickyValue:c}=n,d=a(),p=c();class u extends l{constructor(){super(),this.containerRef=i.createRef(),this.renderedItemsRef=i.createRef(),this.syncHeightAfterRender=()=>{const{renderedItemsCount:e,orthogonalScrollSizeProp:t,onRender:r}=this.props.controller;if(!e)return;const{mustResetOrthogonalMinSize:i,mustReapplyLastOperationForSizeSync:o,mustReapplyLastOperationForSizeSyncIfChangesMade:n,lastOperationForSizeSync:l}=r(),s=this.renderedItemsRef.current.style;let a=!1;if(i){a="unset"!==s[this.orthogonalMinSizeProp],s[this.orthogonalMinSizeProp]="unset"}else this.props.controller.isOrthogonalOverflow&&(s[this.orthogonalMinSizeProp]=`${this.renderedItemsRef.current[t]}px`);(o||a&&n)&&l()},this.onWindowResize=()=>{this.props.controller.refresh()}}get sizeProp(){return this.props.controller.isVertical?"height":"width"}get orthogonalSizeProp(){return this.props.controller.isVertical?"width":"height"}get orthogonalMinSizeProp(){return this.props.controller.isVertical?"minWidth":"minHeight"}get paddingPosition(){return this.props.controller.isVertical?"top":"left"}get overflowProp(){return this.props.controller.isVertical?"overflowY":"overflowX"}get translateProp(){return this.props.controller.isVertical?"translateY":"translateX"}get itemSizeProp(){return this.props.controller.isVertical?"itemHeight":"itemWidth"}componentDidMount(){this.props.controller.setDomContainer(this.containerRef.current),window.addEventListener("resize",this.onWindowResize)}componentDidUpdate(e){this.props.controller!==e.controller&&this.props.controller.setDomContainer(this.containerRef.current),this.syncHeightAfterRender()}componentWillUnmount(){this.props.controller.setDomContainer(null),window.removeEventListener("resize",this.onWindowResize)}render(){const{controller:{renderedItemsStartIndex:e,renderedItemsCount:t,trimmedStartNegativeSize:r,virtualTotalItemsSize:i,isScrollVirtualized:o,items:n,getRealItemSize:l,onScroll:a},renderItem:c}=this.props;return s("div",{ref:this.containerRef,style:{position:"relative",width:"100%",height:"100%",overflow:"auto",whiteSpace:"nowrap"},onScroll:a},!!t&&s("div",{ref:this.renderedItemsRef,style:o?{position:p,[this.paddingPosition]:0,[this.orthogonalSizeProp]:d,[this.sizeProp]:"100%",[this.overflowProp]:"hidden"}:null},s("div",{style:{transform:`${this.translateProp}(${r}px)`}},Array.from({length:t},(t,r)=>{const i=e+r;return c({index:i,[this.itemSizeProp]:l(i),...n&&{item:n[i]}})}))),!!t&&o&&s("div",{style:{position:"absolute",left:0,top:0,zIndex:-1,[this.orthogonalSizeProp]:"100%",[this.sizeProp]:i}}))}}u.propTypes={controller:o.object.isRequired,renderItem:o.func.isRequired};const m=u;t?e.exports=m:window.crizmas.RenderClip=m})()},40:function(e,t,r){(()=>{"use strict";const t="object"==typeof e.exports;let i,o;t?(i=r(5),o=r(41)):({Mvc:i,getRenderClip1DDefinition:o}=window.crizmas);const n=i.controller((function({items:e,itemsCount:t,itemHeight:r,itemWidth:n}={}){const l=o({items:e,itemsCount:t,itemHeight:r,itemWidth:n}),{ctrl:s,ctrlMixState:a,ctrlMix:c}=l;let d=!1;return s.refresh=()=>{d=!0,a.refreshWithCurrentRealScrollPosition()},s.onRender=i.ignore(()=>c.onRender({afterSizeSyncChecksHook:e=>{if(d)return d=!1,{...e,mustResetOrthogonalMinSize:!0,mustReapplyLastOperationForSizeSyncIfChangesMade:!0}}})),l.init(),s}));t?e.exports=n:(window.crizmas=window.crizmas||{},window.crizmas.RenderClipController=n)})()},41:function(e,t,r){(()=>{"use strict";const t="object"==typeof e.exports;let i,o,n,l,s;t?(i=r(5),o=r(7),n=r(45),l=r(46),s=r(47)):({Mvc:i,utils:o,renderClip1DMixin:n,renderClipSameSize1DMixin:l,renderClipIndividualSize1DMixin:s}=window.crizmas);const{isFunc:a}=o,c=({items:e,itemsCount:t,itemHeight:r,itemWidth:o})=>{const c={},d={},p=n({meta:!0,context:d,state:c,mixMethods:["init","refreshWithCurrentRealScrollPosition","onRender"],contextMethods:["setDomContainer","setItems","setItemsCount","onScroll","scrollIntoView","scrollToFit","scrollTo"]}),u=!a(r)&&!a(o),m=u?l({meta:!0,context:d,state:c,mixMethods:["init","getRealItemSize"]}):s({meta:!0,context:d,state:c,mixMethods:["init","getGetRealItemSizeDefinition"]});return c.refreshWithCurrentRealScrollPosition=i.observe(p.refreshWithCurrentRealScrollPosition),{ctrl:d,ctrlMixState:c,ctrlMix:p,init:()=>{p.init({items:e,itemsCount:t,itemHeight:r}),d.getRealItemSize=u?i.ignore(m.getRealItemSize):i.ignore(m.getGetRealItemSizeDefinition(r,o)),m.init({itemHeight:r,itemWidth:o})}}};t?e.exports=c:(window.crizmas=window.crizmas||{},window.crizmas.getRenderClip1DDefinition=c)})()},42:function(e,t,r){(()=>{"use strict";const t="object"==typeof e.exports;let i,o,n,l;t?(i=r(0),o=r(8),n=r(7),l=r(35)):(i=window.React,o=window.PropTypes,({utils:n,componentUtils:l}=window.crizmas));const{Component:s,createElement:a}=i,{isVal:c}=n,{debounce:d}=l,p=100,u=0,m=/^(-|\+)?(((\d+(\.\d*)?)|(\.\d+))(e(-|\+)?\d+)?)$/i,h=/^(-|\+)?((\d*(\.\d*)?)|((((\d+(\.\d*)?)|(\.\d+))(e(-|\+)?\d*)?)?))$/i,S=/^(-|\+)?\d+$/,g=/^(-|\+)?\d*$/,C=["text","password","email","url","tel","search","hidden","radio","checkbox"],z=e=>"radio"===e||"checkbox"===e,f={number:(e,t)=>""===e?void 0===t?t:null:Number(e),integer:(e,t)=>f.number(e,t),string:e=>e.trim(),text:e=>f.string(e),textarea:e=>f.string(e)},w={number:e=>h.test(e),integer:e=>g.test(e)},I={number:e=>""===e||m.test(e),integer:e=>""===e||S.test(e),string:(e,t)=>"string"!=typeof(t=t||"")||t.trim()!==e.trim(),text:(e,t)=>I.string(e,t),textarea:(e,t)=>I.string(e,t)};class R extends s{constructor(...e){super(...e),this.state={value:this.props.value,oldValue:this.props.value},this.initOnChange=this.initOnChange.bind(this),this.setOnChangeMethod()}componentDidUpdate(e){this.props.debounce!==e.debounce&&this.setOnChangeMethod(),this.props.isInputPending||this.props.value===this.state.oldValue||this.setState({value:this.props.value,oldValue:this.props.value})}initOnChange(e){const{type:t,isInputPending:r,onStartPending:i,onChange:o}=this.props,n=z(t)?e.target.checked:e.target.value,l=w[t];if(l&&!l(n))return;this.setState({value:n});const s=I[t];if(s&&!s(n,this.state.oldValue))return;const a=f[t],c=a?a(n,this.props.initialValue):n;this.setState({oldValue:c}),o&&(!r&&i&&i(),this.onChange(c))}setOnChangeMethod(){const e="number"==typeof this.props.debounce?this.props.debounce:z(this.props.type)?u:"number"==typeof this.context.inputDebounce?this.context.inputDebounce:p;this.onChange=0===e?this.props.onChange:d(this.props.onChange,e)}render(){const{errors:e,type:t,required:r,placeholder:i,className:o,onBlur:n,readOnly:l,disabled:s,autoFocus:d,inputClassName:p,inputProps:u}=this.props,m=c(this.state.value)?this.state.value:"",h=!!e&&!!e.length;return a("span",{className:`crizmas-input ${h?"has-errors":""} ${o}`},!!r&&a("span",null,"*"),a("textarea"===t?t:"input",Object.assign({},u,{value:m,checked:z(t)&&m,type:C.includes(t)?t:"text",placeholder:i,onChange:this.initOnChange,onBlur:n,readOnly:l,disabled:s,autoFocus:d,className:p})),h&&a("span",null,e.map((e,t)=>a("span",{key:t},e))))}}R.propTypes={value:o.any,initialValue:o.any,type:o.oneOf([...C,"string","number","integer","textarea"]),errors:o.array,isInputPending:o.bool,required:o.bool,placeholder:o.string,className:o.string,inputClassName:o.string,debounce:o.number,onChange:o.func,onBlur:o.func,onStartPending:o.func,readOnly:o.bool,disabled:o.bool,autoFocus:o.bool,inputProps:o.object},R.defaultProps={type:"text",className:""},R.contextTypes={inputDebounce:o.number};const x=R;t?e.exports=x:window.crizmas.Input=x})()},43:function(e,t,r){(()=>{"use strict";const t="object"==typeof e.exports;let i,o,n;t?(i=r(0),o=r(8),n=r(35)):(i=window.React,o=window.PropTypes,({componentUtils:n}=window.crizmas));const{Component:l,createElement:s}=i,{getFitContentValue:a,getStickyValue:c}=n,d=a(),p=c();class u extends l{constructor(){super(),this.containerRef=i.createRef(),this.syncHeightAfterRender=()=>{if(!this.props.controller.verticalRenderClipController.renderedItemsCount||!this.props.controller.horizontalRenderClipController.renderedItemsCount)return;const{mustReapplyLastOperationForSizeSync:e,lastOperationForSizeSync:t}=this.props.controller.verticalRenderClipController.onRender(),{mustReapplyLastOperationForSizeSync:r,lastOperationForSizeSync:i}=this.props.controller.horizontalRenderClipController.onRender();e&&t(),r&&i()},this.onWindowResize=()=>{this.props.controller.refresh()}}componentDidMount(){this.props.controller.setDomContainer(this.containerRef.current),window.addEventListener("resize",this.onWindowResize)}componentDidUpdate(e){this.props.controller!==e.controller&&this.props.controller.setDomContainer(this.containerRef.current),this.syncHeightAfterRender()}componentWillUnmount(){this.props.controller.setDomContainer(null),window.removeEventListener("resize",this.onWindowResize)}render(){const{controller:{verticalRenderClipController:e,horizontalRenderClipController:t,onScroll:r},renderRow:i,renderCell:o}=this.props;return s("div",{ref:this.containerRef,style:{position:"relative",width:"100%",height:"100%",overflow:"auto",whiteSpace:"nowrap"},onScroll:r},!!e.renderedItemsCount&&!!t.renderedItemsCount&&s("div",{style:{position:p,top:e.isScrollVirtualized?0:"unset",left:t.isScrollVirtualized?0:"unset",height:e.isScrollVirtualized?"100%":t.isScrollVirtualized?d:"unset",width:t.isScrollVirtualized?"100%":e.isScrollVirtualized?d:"unset",overflowY:e.isScrollVirtualized?"hidden":"unset",overflowX:t.isScrollVirtualized?"hidden":"unset"}},s("div",{style:{transform:`translateY(${e.trimmedStartNegativeSize}px) translateX(${t.trimmedStartNegativeSize}px)`}},Array.from({length:e.renderedItemsCount},(r,n)=>{const l=e.renderedItemsStartIndex+n;return i({index:l,itemHeight:e.getRealItemSize(l),renderCells:()=>Array.from({length:t.renderedItemsCount},(r,i)=>{const n=t.renderedItemsStartIndex+i;return o({index:n,itemWidth:t.getRealItemSize(n),itemHeight:e.getRealItemSize(l),rowIndex:l})})})}))),!!e.renderedItemsCount&&e.isScrollVirtualized&&s("div",{style:{position:"absolute",left:0,top:0,zIndex:-1,width:"100%",height:e.virtualTotalItemsSize}}),!!t.renderedItemsCount&&t.isScrollVirtualized&&s("div",{style:{position:"absolute",left:0,top:0,zIndex:-1,height:"100%",width:t.virtualTotalItemsSize}}))}}u.propTypes={controller:o.object.isRequired,renderRow:o.func.isRequired,renderCell:o.func.isRequired};const m=u;t?e.exports=m:window.crizmas.RenderClip2D=m})()},44:function(e,t,r){(()=>{"use strict";const t="object"==typeof e.exports;let i,o,n;t?(i=r(0),o=r(8),n=r(39)):(i=window.React,o=window.PropTypes,({RenderClip:n}=window.crizmas));const{Component:l,createElement:s}=i;class a extends l{constructor(){super(),this.renderArrayTreeNode=({index:e,itemHeight:t})=>{const{controller:r,indentation:i,renderExpandToggle:o}=this.props,{treeArray:n,toggleExpand:l}=r,a=n[e];return s("div",{key:e,style:{height:t,paddingLeft:i*a.level}},a.children&&o({item:a,toggleExpand:l}),a.data.label)}}render(){return s(n,{controller:this.props.controller.renderClipController,renderItem:this.renderArrayTreeNode})}}a.propTypes={controller:o.object.isRequired,indentation:o.number.isRequired,renderExpandToggle:o.func.isRequired},a.defaultProps={indentation:20,renderExpandToggle:({item:e,toggleExpand:t})=>s("span",{style:{marginRight:5},onClick:t.bind(null,e)},String.fromCodePoint(e.isExpanded?9660:9658))};const c=a;t?e.exports=c:window.crizmas.Tree=c})()},45:function(e,t,r){(()=>{"use strict";const t="object"==typeof e.exports;let i;t?i=r(38):({mixin:i}=window);const o={vertical:Symbol("vertical"),horizontal:Symbol("horizontal")},n=i((e,t)=>{let r=0,i=!1,n=null,l=!1;const s={init:({items:r,itemsCount:i=(r?r.length:0),itemHeight:n})=>{a(r,i),t.itemsCount=i,t.items=r,t.templateUpdateNonVirtualized=d,t.templateSetItemsCount=c,t.setPreservingRealScrollPosition=p,e.direction=n?o.vertical:o.horizontal}},a=(e,t)=>{if(e&&e.length!==t)throw new Error("The passed itemsCount is not equal to the passed items.length.")};s.setDomContainer=r=>{t.domContainer=r,e.refresh()},s.setItems=e=>{t.items=e,s.setItemsCount(t.items.length)},s.setItemsCount=e=>t.setItemsCount(e);const c=(r,{afterUpdatingItemsCountHook:i}={})=>{a(t.items,r),t.itemsCount=r,i&&i(),e.refresh()};s.refreshWithCurrentRealScrollPosition=()=>{if(i=!0,!e.isScrollVirtualized)return void t.updateNonVirtualized();let r;t.realScrollPosition=Math.min(t.realScrollPosition,e.realScrollSpace),t.realScrollPosition===e.realScrollSpace?r=e.virtualScrollSpace:!(r=Math.min(Math.trunc(t.realScrollPosition/e.realVirtualScrollSpaceRatio),e.virtualScrollSpace))&&t.realScrollPosition>0&&(r=1),n=r,e.containerScrollPosition!==r&&(l=!0,t.domContainer[e.scrollPositionProp]=r),t.updateRenderedItems()};const d=({afterUpdatingRenderingInfoHook:o}={})=>{e.renderedItemsStartIndex=0,e.renderedItemsCount=t.domContainer?t.itemsCount:0,e.trimmedStartNegativeSize=0,o&&o(),t.domContainer?(r=e.containerScrollPosition,i&&e.containerScrollPosition!==t.realScrollPosition&&(t.domContainer[e.scrollPositionProp]=t.realScrollPosition),t.realScrollPosition=e.containerScrollPosition):(t.realScrollPosition=0,r=0)},p=()=>{t.realScrollPosition=i&&n===e.containerScrollPosition?t.realScrollPosition:e.containerScrollPosition*e.realVirtualScrollSpaceRatio};s.onRender=({afterSizeSyncChecksHook:r}={})=>{if(!t.domContainer)throw new Error("DOM container missing");const o={mustReapplyLastOperationForSizeSync:!1,lastOperationForSizeSync:t.lastOperationForSizeSync||t.refreshWithCurrentRealScrollPosition};if(!l){const r=t.prevIsOrthogonalOverflow;if(t.prevIsOrthogonalOverflow=e.isOrthogonalOverflow,e.isVirtualizationEmptySpace||!r&&t.prevIsOrthogonalOverflow)return{...o,mustReapplyLastOperationForSizeSync:!0}}if(r){const e=r(o);if(e)return e}return l||(t.lastOperationForSizeSync=null,i=!1),o},s.onScroll=()=>{const i=l;if(l=!1,!e.isScrollVirtualized)return void t.updateNonVirtualized();let o=e.containerScrollPosition-r;if(r=e.containerScrollPosition,e.isTranslatedVirtualization&&!i&&Math.abs(o)<=100)return o=Math.sign(o)*Math.max(Math.abs(o),40),void u(t.realScrollPosition+o);t.updateRenderedItems()};const u=r=>{t.realScrollPosition=Math.min(Math.max(0,r),e.realScrollSpace),t.refreshWithCurrentRealScrollPosition()};s.scrollIntoView=(e,{ifNeeded:r,alignEnd:i,fit:o}={})=>{t.domContainer&&(t.lastOperationForSizeSync=s.scrollIntoView.bind(null,e,{ifNeeded:r,alignEnd:i,fit:o}),u(m(e,{ifNeeded:r,alignEnd:i,fit:o})))};const m=(r,{ifNeeded:i,alignEnd:o,fit:n}={})=>{r=Math.max(Math.min(r,t.itemsCount-1),0);const l=t.getRealItemPosition(r),s=Math.max(0,l-e.containerClientSize+e.getRealItemSize(r));if(i||n){if(l>=t.realScrollPosition&&t.realScrollPosition>=s)return t.realScrollPosition;if(n&&Math.abs(t.realScrollPosition-s)<Math.abs(t.realScrollPosition-l))return s}return o?s:l};return s.scrollToFit=e=>s.scrollIntoView(e,{fit:!0}),s.scrollTo=r=>{t.domContainer&&(t.lastOperationForSizeSync=t.refreshWithCurrentRealScrollPosition,u(r*e.realVirtualScrollSpaceRatio))},s});n.getContext=(e,t)=>({direction:null,renderedItemsStartIndex:0,renderedItemsCount:0,trimmedStartNegativeSize:0,get items(){return t.items},get isVertical(){return e.direction===o.vertical},get clientSizeProp(){return e.isVertical?"clientHeight":"clientWidth"},get scrollPositionProp(){return e.isVertical?"scrollTop":"scrollLeft"},get orthogonalClientSizeProp(){return e.isVertical?"clientWidth":"clientHeight"},get orthogonalScrollSizeProp(){return e.isVertical?"scrollWidth":"scrollHeight"},get containerClientSize(){return t.domContainer[e.clientSizeProp]},get containerScrollPosition(){return Math.min(Math.max(0,t.domContainer[e.scrollPositionProp]),e.virtualScrollSpace)},get containerOrthogonalClientSize(){return t.domContainer[e.orthogonalClientSizeProp]},get containerOrthogonalScrollSize(){return t.domContainer[e.orthogonalScrollSizeProp]},get virtualTotalItemsSize(){return Math.min(e.realTotalItemsSize,1e6)},get realVirtualScrollSpaceRatio(){return e.virtualScrollSpace||e.realScrollSpace?e.realScrollSpace/e.virtualScrollSpace:1},get virtualScrollSpace(){return Math.max(0,e.virtualTotalItemsSize-e.containerClientSize)},get realScrollSpace(){return Math.max(0,e.realTotalItemsSize-e.containerClientSize)},get isScrollVirtualized(){return!!t.domContainer&&e.virtualTotalItemsSize>3*e.containerClientSize},get isTranslatedVirtualization(){return e.realVirtualScrollSpaceRatio>1},get isOrthogonalOverflow(){return e.containerOrthogonalScrollSize>e.containerOrthogonalClientSize}}),n.getState=()=>({itemsCount:0,items:null,domContainer:null,realScrollPosition:0,setItemsCount:null,templateSetItemsCount:null,lastOperationForSizeSync:null,prevIsOrthogonalOverflow:!1,getRealItemPosition:null,updateNonVirtualized:null,templateUpdateNonVirtualized:null,updateRenderedItems:null,setPreservingRealScrollPosition:null});const l=n;t?e.exports=l:(window.crizmas=window.crizmas||{},window.crizmas.renderClip1DMixin=l)})()},46:function(e,t,r){(()=>{"use strict";const t="object"==typeof e.exports;let i;t?i=r(38):({mixin:i}=window);const o=i((e,t)=>{const r={getRealItemSize:()=>t.realItemSize,init:({itemHeight:e,itemWidth:r})=>{if(!e&&!r)throw new Error("Either itemHeight or itemWidth must be provided.");t.realItemSize=e||r,t.setItemsCount=t.templateSetItemsCount,t.getRealItemPosition=i,t.updateNonVirtualized=t.templateUpdateNonVirtualized,t.updateRenderedItems=o}},i=e=>e*t.realItemSize,o=()=>{t.setPreservingRealScrollPosition();const r=n(t.realScrollPosition),i=n(e.realTotalItemsSize-t.realScrollPosition-e.containerClientSize),o=t.itemsCount-r-i,l=r*t.realItemSize,s=t.realScrollPosition-l;e.renderedItemsStartIndex=r,e.renderedItemsCount=o,e.trimmedStartNegativeSize=-s},n=e=>Math.trunc(e/t.realItemSize);return r});o.getContext=(e,t)=>({get realTotalItemsSize(){return t.itemsCount*t.realItemSize},get isVirtualizationEmptySpace(){return e.isScrollVirtualized&&e.renderedItemsCount*t.realItemSize+e.trimmedStartNegativeSize<e.containerClientSize}}),o.getState=()=>({realItemSize:0});const n=o;t?e.exports=n:(window.crizmas=window.crizmas||{},window.crizmas.renderClipSameSize1DMixin=n)})()},47:function(e,t,r){(()=>{"use strict";const t="object"==typeof e.exports;let i;t?i=r(38):({mixin:i}=window);const o=i((e,t)=>{let r=null;const i={init:({itemHeight:e,itemWidth:r})=>{if(!e&&!r)throw new Error("Either itemHeight or itemWidth must be provided.");t.setItemsCount=o,t.getRealItemPosition=n,t.updateNonVirtualized=a,t.updateRenderedItems=c,l()},getGetRealItemSizeDefinition:(r,i)=>e.isVertical?e=>r(e,t.items&&t.items[e]):e=>i(e,t.items&&t.items[e])},o=e=>t.templateSetItemsCount(e,{afterUpdatingItemsCountHook:()=>{l()}}),n=e=>r[e],l=()=>{r=Array(t.itemsCount+1),e.realTotalItemsSize=s()},s=()=>{let i=0,{itemsCount:o}=t;for(let t=0;t<o;t+=1)r[t]=i,i+=e.getRealItemSize(t);return r[o]=i,i},a=()=>t.templateUpdateNonVirtualized({afterUpdatingRenderingInfoHook:()=>{t.totalRenderedItemsSize=t.domContainer?e.realTotalItemsSize:0}}),c=()=>{t.setPreservingRealScrollPosition();const{lastItemIndexInSpace:r,lastItemIndexInSpacePosition:i}=d(t.realScrollPosition),{spaceEndFromLastIndexBeforePosition:o,fromPositionClosestIndex:n}=d(t.realScrollPosition+e.containerClientSize),l=t.realScrollPosition-i;e.renderedItemsStartIndex=r,e.renderedItemsCount=n-r,e.trimmedStartNegativeSize=-l,t.totalRenderedItemsSize=o-i},d=i=>{let o;if(i=Math.min(i,e.realTotalItemsSize),r[0]===i)o=0;else{const e=t.itemsCount;o=r[e]===i?e:p(i,0,e)}const n=r[o],l=n===i;return{lastItemIndexInSpace:o,lastItemIndexInSpacePosition:n,fromPositionClosestIndex:l?o:o+1,spaceEndFromLastIndexBeforePosition:l?n:n+e.getRealItemSize(o)}},p=(e,t,i)=>{if(i-t==1){return r[i]<e?i:t}const o=Math.floor((t+i)/2),n=r[o];return n===e?o:n<e?p(e,o,i):p(e,t,o)};return i});o.getContext=(e,t)=>({realTotalItemsSize:0,get isVirtualizationEmptySpace(){return e.isScrollVirtualized&&t.totalRenderedItemsSize+e.trimmedStartNegativeSize<e.containerClientSize}}),o.getState=()=>({totalRenderedItemsSize:0});const n=o;t?e.exports=n:(window.crizmas=window.crizmas||{},window.crizmas.renderClipIndividualSize1DMixin=n)})()},48:function(e,t,r){(()=>{"use strict";const t="object"==typeof e.exports;let i,o;t?(i=r(5),o=r(49)):({Mvc:i,RenderClip1DController:o}=window.crizmas);const n=i.controller((function({verticalItemsCount:e=0,horizontalItemsCount:t=0,itemHeight:r,itemWidth:i}={}){const n={verticalRenderClipController:new o({itemsCount:e,itemHeight:r}),horizontalRenderClipController:new o({itemsCount:t,itemWidth:i}),setDomContainer:e=>{n.verticalRenderClipController.setDomContainer(e),n.horizontalRenderClipController.setDomContainer(e)},setItemsCount:({verticalItemsCount:e,horizontalItemsCount:t})=>{n.verticalRenderClipController.setItemsCount(e),n.horizontalRenderClipController.setItemsCount(t)},refresh:()=>{n.verticalRenderClipController.refresh(),n.horizontalRenderClipController.refresh()},onScroll:()=>{n.verticalRenderClipController.onScroll(),n.horizontalRenderClipController.onScroll()}};return n}));t?e.exports=n:(window.crizmas=window.crizmas||{},window.crizmas.RenderClip2DController=n)})()},49:function(e,t,r){(()=>{"use strict";const t="object"==typeof e.exports;let i,o;t?(i=r(5),o=r(41)):({Mvc:i,getRenderClip1DDefinition:o}=window.crizmas);const n=i.controller((function({items:e,itemsCount:t,itemHeight:r,itemWidth:n}={}){const l=o({items:e,itemsCount:t,itemHeight:r,itemWidth:n}),{ctrl:s,ctrlMixState:a,ctrlMix:c}=l;return s.refresh=a.refreshWithCurrentRealScrollPosition,s.onRender=i.ignore(c.onRender),l.init(),s}));t?e.exports=n:(window.crizmas=window.crizmas||{},window.crizmas.RenderClip1DController=n)})()},50:function(e,t,r){(()=>{"use strict";const t="object"==typeof e.exports;let i,o;t?(i=r(5),o=r(40)):({Mvc:i,RenderClipController:o}=window.crizmas);const n=i.controller((function({nodes:e,itemHeight:t}){let r,i,n=e;const l={renderClipController:new o({itemHeight:t}),get treeArray(){return i}},s=()=>{a(),d()},a=()=>{r=c(n,0)},c=(e,t)=>{const r=t+1;return e.map(e=>({data:e,level:t,isExpanded:!!e.children&&!!e.isExpanded,children:e.children?c(e.children,r):null}))},d=()=>{i=p(r),l.renderClipController.setItemsCount(i.length)},p=(e,t=[])=>(e.forEach(e=>{t.push(e),e.isExpanded&&p(e.children,t)}),t);l.setNodes=e=>{n=e,s()},l.refresh=()=>{l.renderClipController.refresh()},l.toggleExpand=e=>{const t=i.indexOf(e);if(e.isExpanded=!e.isExpanded,e.isExpanded){const r=p(e.children),o=i.slice(0,t+1),n=i.slice(t+1);i=[...o,...r,...n]}else{const r=u(e);i.splice(t+1,r)}l.renderClipController.setItemsCount(i.length)};const u=e=>e.children?e.children.reduce((e,t)=>e+1+(t.isExpanded?u(t):0),0):0;return s(),l}));t?e.exports=n:(window.crizmas=window.crizmas||{},window.crizmas.TreeController=n)})()}}]);
//# sourceMappingURL=vendors~article~editor~login~register~settings.bundle-7a27a7e88ed05830c85a.js.map