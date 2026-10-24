function positionSurface(trigger,surface){const rect=trigger.getBoundingClientRect(),box=surface.getBoundingClientRect(),doc=trigger.ownerDocument;const rtl=getComputedStyle(trigger).direction==='rtl';surface.style.left=Math.max(8,Math.min(rtl?rect.right-box.width:rect.left,doc.documentElement.clientWidth-box.width-8))+'px';const top=rect.bottom+8+box.height<=doc.documentElement.clientHeight?rect.bottom+8:rect.top-box.height-8;surface.style.top=Math.max(8,top)+'px'}
/** Noninteractive, hoverable tooltip. Preserve existing accessible descriptions. */
export function bindBokrahTooltip(trigger,tooltip){
 if(!tooltip.id)throw new TypeError('Tooltip needs a unique id');
 const doc=trigger.ownerDocument,original=trigger.getAttribute('aria-describedby');let timer;
 tooltip.setAttribute('role','tooltip');tooltip.hidden=true;trigger.setAttribute('aria-describedby',[original,tooltip.id].filter(Boolean).join(' '));
 const show=()=>{clearTimeout(timer);tooltip.hidden=false;positionSurface(trigger,tooltip)};
 const hide=()=>{clearTimeout(timer);tooltip.hidden=true};
 const leave=()=>{clearTimeout(timer);timer=setTimeout(()=>{if(doc.activeElement!==trigger)hide()},150)};
 const escape=event=>{if(event.key==='Escape')hide()};
 const reposition=()=>{if(!tooltip.hidden)positionSurface(trigger,tooltip)};
 trigger.addEventListener('pointerenter',show);trigger.addEventListener('pointerleave',leave);trigger.addEventListener('focus',show);trigger.addEventListener('blur',leave);tooltip.addEventListener('pointerenter',show);tooltip.addEventListener('pointerleave',leave);doc.addEventListener('keydown',escape);doc.addEventListener('scroll',reposition,true);doc.defaultView.addEventListener('resize',reposition);
 return ()=>{hide();if(original===null)trigger.removeAttribute('aria-describedby');else trigger.setAttribute('aria-describedby',original);trigger.removeEventListener('pointerenter',show);trigger.removeEventListener('pointerleave',leave);trigger.removeEventListener('focus',show);trigger.removeEventListener('blur',leave);tooltip.removeEventListener('pointerenter',show);tooltip.removeEventListener('pointerleave',leave);doc.removeEventListener('keydown',escape);doc.removeEventListener('scroll',reposition,true);doc.defaultView.removeEventListener('resize',reposition)};
}
/** Nonmodal details surface; native popover light-dismiss with a fallback. */
export function bindBokrahPopover(trigger,popover){
 const doc=trigger.ownerDocument,native=typeof popover.showPopover==='function';let isOpen=false;
 popover.setAttribute('role','dialog');popover.setAttribute('popover','auto');if(!native)popover.hidden=true;
 trigger.setAttribute('aria-haspopup','dialog');trigger.setAttribute('aria-expanded','false');if(popover.id)trigger.setAttribute('aria-controls',popover.id);
 function close(restore=true){if(!isOpen)return;isOpen=false;if(native){if(popover.matches(':popover-open'))popover.hidePopover()}else popover.hidden=true;trigger.setAttribute('aria-expanded','false');if(restore&&trigger.isConnected)trigger.focus()}
 function open(){isOpen=true;if(native)popover.showPopover();else popover.hidden=false;trigger.setAttribute('aria-expanded','true');positionSurface(trigger,popover);popover.querySelector('button,a[href],input,[tabindex="0"]')?.focus()}
 const click=()=>isOpen?close():open();
 const dismiss=event=>{if(event.target.closest('[data-bk-close]'))close()};
 const key=event=>{if(isOpen&&event.key==='Escape'){event.preventDefault();close()}};
 const outside=event=>{if(!native&&isOpen&&!popover.contains(event.target)&&!trigger.contains(event.target))close(false)};
 const layout=event=>{if(isOpen&&!(event.target instanceof Node&&popover.contains(event.target)))close(false)};
 const toggle=event=>{if(event.newState==='closed'){isOpen=false;trigger.setAttribute('aria-expanded','false')}};
 trigger.addEventListener('click',click);popover.addEventListener('click',dismiss);popover.addEventListener('toggle',toggle);doc.addEventListener('keydown',key);doc.addEventListener('pointerdown',outside);doc.addEventListener('scroll',layout,true);doc.defaultView.addEventListener('resize',layout);
 return {open,close,destroy(){close(false);trigger.removeEventListener('click',click);popover.removeEventListener('click',dismiss);popover.removeEventListener('toggle',toggle);doc.removeEventListener('keydown',key);doc.removeEventListener('pointerdown',outside);doc.removeEventListener('scroll',layout,true);doc.defaultView.removeEventListener('resize',layout)}};
}
