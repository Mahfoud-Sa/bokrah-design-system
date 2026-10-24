import { renderDocumentation } from './documentation.js';
import { renderPatterns } from './patterns.js';
import { renderStates } from './states.js';
import { renderLayout } from './layout.js';
import { renderDataDisplay } from './data-display.js';
import { renderNavigation } from './navigation.js';
import { renderUIComponents } from './ui-components.js';
import { renderReference } from './reference.js';
import { tokens, setBokrahLanguage, setBokrahTheme } from '../../packages/web/dist/index.js';
const arabic = {accountingPlayground:"مختبر المحاسبة ↗",fontFamily:"Somar Sans · العربية والإنجليزية",documentationNav:"التوثيق",documentationTitle:"مرجع لكل مكون.",documentationIntro:"مرجع باللغتين لكل مكون، يغطي المتطلبات العشرة مع واجهة التنفيذ الفعلية وأمثلة الويب وفلاتر.",documentationGuide:"اقرأ متطلبات التوثيق وفهرس المكونات ↗",patternsTitle:"تجارب كاملة من مكونات مشتركة.",patternsIntro:"تسعة أنماط تفاعلية ببيانات محلية تجريبية. لا تُرسل بيانات أو تُنشأ حسابات فعلية.",patternsGuide:"اقرأ دليل الأنماط ومسارات الاستخدام ↗",statesGuide:"اقرأ دليل الحالات وتطبيقها ↗",statesNav:"حالات المكونات",statesTitle:"وضوح في كل تفاعل.",statesIntro:"عشر حالات متسقة. تفاعل مع الأمثلة لرؤية التغييرات، واستخدم Tab للتحقق من التركيز.",layoutNav:"التخطيط",layoutTitle:"مساحة لكل جزء.",layoutIntro:"عشرة مكونات لتخطيط صفحات متجاوبة وواضحة باللغتين.",
 dataDisplay:'عرض البيانات',dataTitle:'وضوح في كل سجل.',dataIntro:'عشرة أنماط لعرض البيانات. جميع السجلات والإحصاءات أدناه توضيحية.',navigation:'التنقل',navigationTitle:'مسار واضح لكل مهمة.',navigationIntro:'أحد عشر نمطاً للتنقل، بحالات نشطة واضحة ودعم لوحة المفاتيح.',buttonsActions:'الأزرار والإجراءات',feedbackStatus:'التنبيهات والحالة',referenceTitle:'مكتبة الأسس الكاملة.',referenceIntro:'كل فئة بقيمها المشتركة وأمثلتها التفاعلية. اختر المظهر لاستعراض ألوانه.',referenceNav:'مرجع الأسس',highContrast:'تباين عالٍ',skip:'انتقل إلى المحتوى',system:'نظام التصميم',dark:'المظهر الداكن',light:'المظهر الفاتح',library:'المكتبة',overview:'نظرة عامة',foundations:'الأسس',components:'المكونات',patterns:'الأنماط',start:'ابدأ الآن',shared:'لغة تصميم واحدة.\nطريقتان للبناء.',eyebrow:'بكرة / الأساس 01',headline:'نظام أكثر وضوحاً.\nغد أفضل.',intro:'أسس مدروسة لكل من يبني بكرة. لغة بصرية مشتركة، من دفتر حسابات المطعم إلى الويب.',explore:'استكشف المكونات ↓',flutter:'افتح مكتبة فلاتر ↗',bilingual:'العربية والإنجليزية',themes:'فاتح وداكن',platforms:'الويب وفلاتر',naturally:'هدوء في كل تفصيلة.',source:'مصدر رموز مشترك',foundationCopy:'أخضر الغابة، درجات محايدة دافئة، ومساحة للتنفس. تبدأ كل قيمة في tokens/tokens.json وتصل إلى المنصتين.',type:'الخطوط',typeTitle:'وضوح بكل لغة.',fontNote:'خطوط مضمنة محلياً. جاهزة للتطبيقات دون اتصال.',space:'المسافات والزوايا',rhythm:'إيقاع متناسق.',small:'مكونات واجهة للمهام اليومية.',actions:'الإجراءات',actionCopy:'أولويات واضحة، تركيز مرئي، ومساحة لكل لمسة.',primary:'إجراء أساسي',secondary:'ثانوي',disabled:'معطل',loading:'جرّب حالة التحميل',danger:'إجراء حذفي',fields:'حقول الإدخال',fieldCopy:'عنوان واضح، إرشادات بسيطة، ورسالة خطأ مفيدة.',restaurant:'اسم المطعم',restaurantHelp:'يظهر في ملف مطعمك.',amount:'المبلغ (دينار)',amountHelp:'أدخل مبلغاً أكبر من صفر.',validate:'تحقق من المثال',feedback:'الحالة والتنبيهات',paid:'مدفوع',pending:'قيد الانتظار',overdue:'متأخر',draft:'مسودة',uptodate:'سجلاتك محدثة',feedbackCopy:'تُوضح الحالة بالكلمات إلى جانب اللون.',review:'جاهز للمراجعة',reviewCopy:'راجع التفاصيل قبل تأكيد المعاملة.',empty:'الحالات الفارغة',fresh:'بداية جديدة.',emptyCopy:'ستظهر معاملتك الأولى هنا.\nلنبدأ بخطوة جيدة.',add:'أضف معاملة',together:'أفضل معاً.',patternsCopy:'مكونات تعمل بانسجام. لمحة صغيرة عن يوم المطعم، ببيانات توضيحية فقط.',today:'اليوم في بكرة',sample:'مطعم تجريبي · دينار أردني',open:'مفتوح',sales:'مبيعات اليوم',transactions:'24 معاملة',expenses:'المصروفات',expensesDetail:'المستلزمات والتشغيل',net:'صافي الرصيد',sampleOnly:'أرقام توضيحية فقط',recent:'المعاملات الأخيرة',description:'الوصف',status:'الحالة',lunch:'خدمة الغداء',supplies:'مستلزمات المطبخ',build:'ابنِ على أساس مشترك.',webCopy:'HTML أصلي. CSS مستقل عن إطار العمل. دون اعتماديات تشغيل.',flutterCopy:'سمات Material، رموز مشتركة، ومكونات قابلة لإعادة الاستخدام.',readDocs:'اقرأ دليل التثبيت والتوثيق ↗',footer:'بُني بعناية. صُمم لبكرة.',dialogTitle:'جاهز لبكرة.',dialogCopy:'هذه معاينة للمكون. لا تُحفظ بيانات محاسبية. اضغط Escape أو إغلاق للعودة.',close:'أغلق المعاينة',saved:'تم التحقق من المثال. لم تُحفظ بيانات.',actionPreview:'هذه معاينة للإجراء فقط.',loadingNow:'جارٍ التحميل…',loaded:'اكتملت معاينة التحميل.',primaryColor:'أساسي',backgroundColor:'خلفية',surfaceColor:'سطح',textColor:'نص',accentColor:'سطح مميز'
};
const english = Object.fromEntries([...document.querySelectorAll('[data-i18n]')].map(el=>[el.dataset.i18n,el.innerText]));
Object.assign(english,{highContrast:'High contrast',light:'Light mode',saved:'Example validated. No data was saved.',actionPreview:'Component action preview only.',loadingNow:'Loading…',loaded:'Loading preview completed.',primaryColor:'Forest / Primary',backgroundColor:'Warm background',surfaceColor:'Surface',textColor:'Text',accentColor:'Sage surface'});
let language='en', theme='light', loading=false;
const t=key=>(language==='ar'?arabic:english)[key]??key;
const feedback=document.querySelector('#demo-feedback');
function swatches(){
 const colors=tokens.color[theme==='high-contrast'?'highContrast':theme];
 const container=document.querySelector('#swatches');container.replaceChildren();
 for(const [key,label] of [['primary','primaryColor'],['background','backgroundColor'],['surface','surfaceColor'],['text','textColor'],['surfaceAlt','accentColor']]){
  const card=document.createElement('div');card.className='swatch';
  const color=document.createElement('div');color.className='swatch-color';color.style.background=colors[key];
  const copy=document.createElement('div');copy.className='swatch-copy';copy.textContent=t(label);
  const value=document.createElement('code');value.textContent=colors[key];copy.append(value);card.append(color,copy);container.append(card);
 }
}
function render(){
 setBokrahLanguage(language);setBokrahTheme(theme);
 for(const el of document.querySelectorAll('[data-i18n]')){
  if(el.id==='load-demo'&&loading)continue;
  el.innerText=t(el.dataset.i18n);
 }
 const langButton=document.querySelector('#language');langButton.textContent=language==='en'?'العربية':'English';langButton.lang=language==='en'?'ar':'en';
 document.querySelector('#theme').textContent=t(theme==='light'?'dark':theme==='dark'?'highContrast':'light');
 document.title=language==='en'?'Bokrah · Design system':'بكرة · نظام التصميم';
 document.querySelector('nav').ariaLabel=language==='en'?'Sections':'الأقسام';

 if(loading)document.querySelector('#load-demo').textContent=t('loadingNow');
 document.querySelector('#amount-help').textContent=t('amountHelp');feedback.textContent='';swatches();renderReference(language,theme);renderUIComponents(language);renderNavigation(language);renderDataDisplay(language);renderLayout(language);renderStates(language);renderPatterns(language);renderDocumentation(language);
}
document.querySelector('#language').addEventListener('click',()=>{language=language==='en'?'ar':'en';render()});
document.querySelector('#theme').addEventListener('click',()=>{theme=theme==='light'?'dark':theme==='dark'?'high-contrast':'light';render()});
for(const size of Object.values(tokens.space).filter(n=>n<=48)){const bar=document.createElement('span');bar.style.height=(size*2)+'px';bar.textContent=size;document.querySelector('.spacing').append(bar)}
const dialog=document.querySelector('#example-dialog');
for(const id of ['open-dialog','empty-demo'])document.getElementById(id).addEventListener('click',()=>dialog.showModal());
for(const id of ['secondary','danger-demo'])document.getElementById(id).addEventListener('click',()=>{feedback.textContent=t('actionPreview')});
document.querySelector('#demo-form').addEventListener('submit',event=>{
 event.preventDefault();const input=document.querySelector('#amount');const valid=input.checkValidity();
 input.setAttribute('aria-invalid',String(!valid));document.querySelector('#amount-help').classList.toggle('bk-error',!valid);
 if(valid)feedback.textContent=t('saved');else{feedback.textContent=t('amountHelp');input.focus()}
});
document.querySelector('#load-demo').addEventListener('click',async event=>{
 const button=event.currentTarget;loading=true;button.disabled=true;button.setAttribute('aria-busy','true');button.textContent=t('loadingNow');feedback.textContent=t('loadingNow');
 await new Promise(resolve=>setTimeout(resolve,1200));loading=false;button.disabled=false;button.removeAttribute('aria-busy');button.textContent=t('loading');feedback.textContent=t('loaded');
});
render();
