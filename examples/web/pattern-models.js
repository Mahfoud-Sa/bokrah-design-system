/** Sample-only recipe helpers. No authentication, persistence or accounting API. */
export const demoRecords = () => [
  {id:1,name:'Lunch / الغداء',category:'sales',amount:240},
  {id:2,name:'Supplies / مستلزمات',category:'expenses',amount:80},
  {id:3,name:'Dinner / العشاء',category:'sales',amount:1200},
  {id:4,name:'Breakfast / الإفطار',category:'sales',amount:45},
  {id:5,name:'Utilities / الخدمات',category:'expenses',amount:200},
];
export function canPerform(role, action) {
  const roles={viewer:['read'],cashier:['read','create','update'],owner:['read','create','update','delete']};
  return Object.hasOwn(roles,role) && roles[role].includes(action);
}
export function validDraft(name, amount) {
  return name.trim().length>0 && String(amount).trim()!=='' && Number.isFinite(Number(amount)) && Number(amount)>0;
}
export function queryRecords(records,{query='',category='all',sort='name'}={}) {
  const needle=query.trim().toLocaleLowerCase();
  return records.filter(row=>(category==='all'||row.category===category)&&row.name.toLocaleLowerCase().includes(needle))
    .sort((a,b)=>sort==='amount'?a.amount-b.amount:a.name.localeCompare(b.name));
}
export function pageRecords(records,page,size) {
  if(!Number.isInteger(size)||size<1)throw new RangeError('Positive integer page size required');
  const pages=Math.max(1,Math.ceil(records.length/size));
  const current=Math.max(1,Math.min(Number.isFinite(page)?Math.trunc(page):1,pages));
  return {items:records.slice((current-1)*size,current*size),page:current,pages};
}
