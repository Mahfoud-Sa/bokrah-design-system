import { isUnavailable } from './interaction.js';
/** Bind a native modal dialog. Native showModal contains focus and inerts the page. */
export function bindBokrahModal(trigger, dialog) {
 if (!(dialog instanceof HTMLDialogElement)) throw new TypeError('Expected a native dialog element');
 trigger.setAttribute('aria-haspopup','dialog');
 if(dialog.id)trigger.setAttribute('aria-controls',dialog.id);
 const open=()=>{if(isUnavailable(trigger))return;if(!dialog.open)dialog.showModal()};
 const dismiss=event=>{if(event.target.closest('[data-bk-close]'))dialog.close()};
 const restore=()=>{if(trigger.isConnected)trigger.focus()};
 trigger.addEventListener('click',open);dialog.addEventListener('click',dismiss);dialog.addEventListener('close',restore);
 return ()=>{trigger.removeEventListener('click',open);dialog.removeEventListener('click',dismiss);dialog.removeEventListener('close',restore);if(dialog.open)dialog.close()};
}
