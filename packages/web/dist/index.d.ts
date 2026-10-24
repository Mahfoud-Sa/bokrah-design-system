export interface BokrahTokens {
 version:string;
 color:Record<'light'|'dark'|'highContrast',Record<string,string>>;
 font:Record<string,string>;
 space:Record<string,number>;radius:Record<string,number>;fontSize:Record<string,number>;
 fontWeight:Record<string,number>;lineHeight:Record<string,number>;letterSpacing:Record<string,number>;
 borderWidth:Record<string,number>;elevation:Record<string,number>;layout:Record<string,number>;
 motion:Record<string,number>;iconSize:Record<string,number>;iconStroke:Record<string,number>;
 shadow:Record<string,{x:number;y:number;blur:number;spread:number;opacity:number}>;
 dropShadow:Record<string,{x:number;y:number;blur:number;opacity:number}>;
 icon:{library:string;viewBox:number;strokeWidth:number};
 grid:{columns:Record<string,number>;gutter:Record<string,number>;margin:Record<string,number>;breakpoint:Record<string,number>;maxWidth:number};
 easing:Record<string,number[]>;
 transition:Record<string,{duration:string;easing:string}>;
 accessibility:Record<string,number>;
}
export const tokens:Readonly<BokrahTokens>;
export function setBokrahTheme(theme:'light'|'dark'|'high-contrast',root?:Pick<HTMLElement,'dataset'>):void;
export function setBokrahLanguage(language:'en'|'ar',root?:Pick<HTMLElement,'lang'|'dir'>):void;
export const foundations:ReadonlyArray<{id:string;en:string;ar:string;itemsEn:string[];itemsAr:string[];groups:string[];values:Record<string,unknown>}>;
export const icons:Record<string,Array<Array<[string,...number[]]>>>;
export function bindBokrahTabs(root:HTMLElement,options?:{onChange?:(index:number)=>void}):()=>void;
export function bindBokrahMenu(trigger:HTMLElement,menu:HTMLElement,options?:{onSelect?:(value:string,item:HTMLElement)=>void}):{open():void;openAt(x:number,y:number,returnFocus?:HTMLElement):void;close(restoreFocus?:boolean):void;destroy():void};
export function bindBokrahTooltip(trigger:HTMLElement,tooltip:HTMLElement):()=>void;
export function bindBokrahPopover(trigger:HTMLElement,popover:HTMLElement):{open():void;close(restoreFocus?:boolean):void;destroy():void};
