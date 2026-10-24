import test from 'node:test';
import assert from 'node:assert/strict';
import {demoRecords,canPerform,validDraft,queryRecords,pageRecords} from '../examples/web/pattern-models.js';
test('filtering composes query/category and numeric sort without changing source',()=>{
 const source=demoRecords(),copy=structuredClone(source);
 assert.deepEqual(queryRecords(source,{category:'sales',sort:'amount'}).map(r=>r.amount),[45,240,1200]);
 assert.equal(queryRecords(source,{query:' الغداء ',category:'sales'}).length,1);
 assert.equal(queryRecords(source,{query:'missing'}).length,0);
 assert.deepEqual(source,copy);
});
test('paging clamps after deletion and produces an empty first page',()=>{
 assert.equal(pageRecords(demoRecords(),99,2).page,3);
 assert.deepEqual(pageRecords([],2,2),{items:[],page:1,pages:1});
 assert.equal(pageRecords(demoRecords().slice(0,2),3,2).page,1);
});
test('sample permission rules deny unknown roles/actions and restrict mutations',()=>{
 assert.equal(canPerform('viewer','read'),true);
 for(const action of ['create','update','delete'])assert.equal(canPerform('viewer',action),false);
 assert.equal(canPerform('cashier','update'),true);assert.equal(canPerform('cashier','delete'),false);
 assert.equal(canPerform('owner','delete'),true);assert.equal(canPerform('unknown','delete'),false);
 assert.equal(canPerform('owner','unknown'),false);
  for(const role of ['constructor','toString','__proto__'])assert.equal(canPerform(role,'delete'),false);
});
test('draft validation rejects blank, zero and nonfinite amounts',()=>{
 for(const [name,value] of [[' ',10],['Lunch',''],['Lunch',0],['Lunch',-1],['Lunch','Infinity'],['Lunch','abc']])assert.equal(validDraft(name,value),false);
 assert.equal(validDraft('الغداء','42.50'),true);
});
