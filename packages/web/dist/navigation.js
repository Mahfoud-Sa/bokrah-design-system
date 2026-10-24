import { isUnavailable } from './interaction.js';
/** Enhance a tab group containing a tablist, tab buttons and associated panels. */
export function bindBokrahTabs(root, {onChange} = {}) {
  const list=root.querySelector('[role="tablist"]');
  if(!list)throw new TypeError('A tablist is required');
  const tabs=[...list.querySelectorAll('[role="tab"]')];
  const enabled=()=>tabs.filter(tab=>!tab.disabled&&tab.getAttribute('aria-disabled')!=='true');
  function select(tab,focus=false,notify=true){
    if(!enabled().includes(tab))return;
    const changed=tab.getAttribute('aria-selected')!=='true';
    for(const candidate of tabs){const active=candidate===tab;candidate.setAttribute('aria-selected',String(active));candidate.tabIndex=active?0:-1;const panel=root.ownerDocument.getElementById(candidate.getAttribute('aria-controls'));if(panel&&root.contains(panel))panel.hidden=!active;}
    if(focus)tab.focus();if(changed&&notify)onChange?.(tabs.indexOf(tab));
  }
  const click=event=>{const tab=event.target.closest('[role="tab"]');if(tab&&list.contains(tab))select(tab)};
  const keydown=event=>{const current=event.target.closest('[role="tab"]');if(!current)return;const all=enabled();let index=all.indexOf(current);const rtl=getComputedStyle(list).direction==='rtl';
    if(event.key==='Home')index=0;else if(event.key==='End')index=all.length-1;else if(event.key==='ArrowRight')index=(index+(rtl?-1:1)+all.length)%all.length;else if(event.key==='ArrowLeft')index=(index+(rtl?1:-1)+all.length)%all.length;else return;
    event.preventDefault();select(all[index],true);
  };
  list.addEventListener('click',click);list.addEventListener('keydown',keydown);
  select(enabled().find(tab=>tab.getAttribute('aria-selected')==='true')??enabled()[0],false,false);
  return ()=>{list.removeEventListener('click',click);list.removeEventListener('keydown',keydown)};
}

/** Menu button behavior; a context surface can reuse openAt with its own trigger. */
export function bindBokrahMenu(trigger,menu,{onSelect}={}) {
  const doc=trigger.ownerDocument;
  let returnFocus=trigger;
  const items=()=>[...menu.querySelectorAll('[role="menuitem"]')].filter(item=>!item.disabled);
  function close(restore=true){menu.hidden=true;trigger.setAttribute('aria-expanded','false');if(restore&&returnFocus.isConnected)returnFocus.focus()}
  function openAt(x,y,focusTarget=trigger){if(isUnavailable(trigger))return;returnFocus=focusTarget;menu.hidden=false;trigger.setAttribute('aria-expanded','true');menu.style.position='fixed';const rect=menu.getBoundingClientRect();menu.style.left=Math.max(8,Math.min(x,doc.documentElement.clientWidth-rect.width-8))+'px';menu.style.top=Math.max(8,Math.min(y,doc.documentElement.clientHeight-rect.height-8))+'px';items()[0]?.focus()}
  function open(){if(isUnavailable(trigger))return;menu.hidden=false;menu.style.position='fixed';const rect=trigger.getBoundingClientRect();const rtl=getComputedStyle(trigger).direction==='rtl';openAt(rtl?rect.right-menu.getBoundingClientRect().width:rect.left,rect.bottom+4)}
  const triggerClick=()=>{if(isUnavailable(trigger))return;if(menu.hidden)open();else close()};
  const triggerKey=event=>{if(isUnavailable(trigger))return;if(['ArrowDown','ArrowUp'].includes(event.key)){event.preventDefault();open();if(event.key==='ArrowUp')items().at(-1)?.focus()}};
  const menuClick=event=>{const item=event.target.closest('[role="menuitem"]');if(!items().includes(item))return;if(item.getAttribute('aria-disabled')==='true'){event.preventDefault();return}close();onSelect?.(item.dataset.value??'',item)};
  const menuKey=event=>{const all=items();let index=all.indexOf(doc.activeElement);if(event.key==='Escape'){event.preventDefault();close();return}if(event.key==='Tab'){close();return}
    if(event.key==='Home')index=0;else if(event.key==='End')index=all.length-1;else if(event.key==='ArrowDown')index=(index+1)%all.length;else if(event.key==='ArrowUp')index=(index-1+all.length)%all.length;else if(event.key.length===1&&!event.ctrlKey&&!event.metaKey&&!event.altKey){const match=[...all.slice(index+1),...all.slice(0,index+1)].find(item=>item.textContent.trim().toLocaleLowerCase().startsWith(event.key.toLocaleLowerCase()));if(match){event.preventDefault();match.focus()}return}else return;
    event.preventDefault();all[index]?.focus();
  };
  const outside=event=>{if(!menu.hidden&&!menu.contains(event.target)&&!trigger.contains(event.target))close(false)};
  trigger.setAttribute('aria-haspopup','menu');trigger.setAttribute('aria-expanded','false');menu.hidden=true;
  trigger.addEventListener('click',triggerClick);trigger.addEventListener('keydown',triggerKey);menu.addEventListener('click',menuClick);menu.addEventListener('keydown',menuKey);doc.addEventListener('pointerdown',outside);
  return {open,openAt,close,destroy(){close(false);trigger.removeEventListener('click',triggerClick);trigger.removeEventListener('keydown',triggerKey);menu.removeEventListener('click',menuClick);menu.removeEventListener('keydown',menuKey);doc.removeEventListener('pointerdown',outside)}};
}
