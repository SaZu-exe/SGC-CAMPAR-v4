const STORAGE_KEY = 'campar-sgc-v0.4-state';
const STAGES = ['En corte','En armado','En estufado','Limpios'];
const SAWMILLS = {
  'MX-1361': {name:'Cosme', code:'MX-1361'},
  'MX-1071': {name:'Duma', code:'MX-1071'}
};

const seedState = {
  orders:[
    {oc:'450018',client:'Cliente A',plant:'Planta 1',date:'2026-10-08',priority:'Alta',status:'Activa',line:{part:'P001',code:'207457',qty:400,plan:'PLN-207457-R03',rev:'R03',ht:true}},
    {oc:'450019',client:'Cliente A',plant:'Planta 2',date:'2026-10-12',priority:'Media',status:'Activa',line:{part:'P001',code:'207458',qty:300,plan:'Pendiente vínculo',rev:'—',ht:true}},
    {oc:'450020',client:'Cliente A',plant:'Planta 3',date:'2026-10-15',priority:'Alta',status:'Activa',line:{part:'P001',code:'207461',qty:500,plan:'Pendiente vínculo',rev:'—',ht:true}}
  ],
  products:[
    {code:'207457',name:'Tarima PBA',type:'Tarima',dims:'1420 × 1120 × 114.5 mm',ht:'Sí',plan:'PLN-207457-R03',rev:'R03',status:'Activo'},
    {code:'207458',name:'Tarima estándar',type:'Tarima',dims:'Según catálogo',ht:'Sí',plan:'Pendiente vínculo',rev:'—',status:'Activo'},
    {code:'207461',name:'Tarima HT',type:'Tarima',dims:'Según catálogo',ht:'Sí',plan:'Pendiente vínculo',rev:'—',status:'Activo'},
    {code:'207470',name:'Tarima exportación',type:'Tarima',dims:'Según catálogo',ht:'Sí',plan:'Pendiente vínculo',rev:'—',status:'Activo'},
    {code:'207456',name:'Tarima estándar',type:'Tarima',dims:'Según catálogo',ht:'Sí',plan:'Histórico',rev:'—',status:'Activo'}
  ],
  lots:[
    {id:'COS-2401',oc:'450018',code:'207457',supplier:'MX-1361',qty:40,stage:'En corte',quality:'No aplica',due:'2026-10-08',committed:0},
    {id:'COS-2402',oc:'450018',code:'207457',supplier:'MX-1361',qty:60,stage:'En armado',quality:'No aplica',due:'2026-10-08',committed:0},
    {id:'COS-2403',oc:'450018',code:'207457',supplier:'MX-1361',qty:50,stage:'En estufado',quality:'No aplica',due:'2026-10-08',committed:0},
    {id:'COS-2404',oc:'450018',code:'207457',supplier:'MX-1361',qty:30,stage:'Limpios',quality:'Pendiente de inspección',due:'2026-10-08',committed:0},
    {id:'DUM-3101',oc:'450018',code:'207457',supplier:'MX-1071',qty:50,stage:'En corte',quality:'No aplica',due:'2026-10-08',committed:0},
    {id:'DUM-3102',oc:'450018',code:'207457',supplier:'MX-1071',qty:80,stage:'En armado',quality:'No aplica',due:'2026-10-08',committed:0},
    {id:'DUM-3103',oc:'450018',code:'207457',supplier:'MX-1071',qty:60,stage:'En estufado',quality:'No aplica',due:'2026-10-08',committed:0},
    {id:'DUM-3104',oc:'450018',code:'207457',supplier:'MX-1071',qty:30,stage:'Limpios',quality:'Pendiente de inspección',due:'2026-10-08',committed:0},

    {id:'COS-2411',oc:'450019',code:'207458',supplier:'MX-1361',qty:90,stage:'En armado',quality:'No aplica',due:'2026-10-12',committed:0},
    {id:'COS-2412',oc:'450019',code:'207458',supplier:'MX-1361',qty:60,stage:'Limpios',quality:'Liberado',due:'2026-10-12',committed:10},
    {id:'DUM-3111',oc:'450019',code:'207458',supplier:'MX-1071',qty:80,stage:'En estufado',quality:'No aplica',due:'2026-10-12',committed:0},
    {id:'DUM-3112',oc:'450019',code:'207458',supplier:'MX-1071',qty:70,stage:'Limpios',quality:'Retenido',due:'2026-10-12',committed:0},

    {id:'COS-2420',oc:'450020',code:'207461',supplier:'MX-1361',qty:180,stage:'En corte',quality:'No aplica',due:'2026-10-15',committed:0},
    {id:'COS-2421',oc:'450020',code:'207461',supplier:'MX-1361',qty:120,stage:'En estufado',quality:'No aplica',due:'2026-10-15',committed:0},
    {id:'DUM-3120',oc:'450020',code:'207461',supplier:'MX-1071',qty:100,stage:'En armado',quality:'No aplica',due:'2026-10-15',committed:0},
    {id:'DUM-3121',oc:'450020',code:'207461',supplier:'MX-1071',qty:100,stage:'Limpios',quality:'Pendiente de liberación',due:'2026-10-15',committed:0}
  ],
  inspections:[
    {id:'INS-2026-0020',lotId:'COS-2412',oc:'450019',code:'207458',supplier:'MX-1361',lot:60,sample:13,result:'Liberado',ncCount:0,defect:'—',authorizedBy:'Gustavo',date:'2026-09-26'},
    {id:'INS-2026-0021',lotId:'DUM-3112',oc:'450019',code:'207458',supplier:'MX-1071',lot:70,sample:13,result:'Retenido',ncCount:2,defect:'DIM-01',authorizedBy:'',date:'2026-09-27'},
    {id:'INS-2026-0022',lotId:'DUM-3121',oc:'450020',code:'207461',supplier:'MX-1071',lot:100,sample:20,result:'Pendiente de liberación',ncCount:0,defect:'—',authorizedBy:'',date:'2026-09-28'}
  ],
  ncs:[
    {id:'NC-2026-001',inspection:'INS-2026-0021',lotId:'DUM-3112',oc:'450019',code:'207458',supplier:'MX-1071',severity:'Mayor',level:'N2',qty:2,status:'Seguimiento',defect:'DIM-01',action:'Selección y retrabajo del lote'}
  ],
  deliveries:[
    {id:'ENT-2026-007',oc:'450019',lotId:'COS-2412',code:'207458',supplier:'MX-1361',qty:10,plant:'Planta 2',driver:'Miguel',date:'2026-09-27',status:'Programada'}
  ],
  suppliers:[
    {code:'MX-1361',name:'Cosme',status:'Activo',conformity:94,rework:4,critical:2,reject:1},
    {code:'MX-1071',name:'Duma',status:'Activo',conformity:91,rework:6,critical:1,reject:2}
  ],
  pilotGates:[
    {id:'G-01',title:'Especie de pino identificada',when:'Antes de usar corrección del BDX-30',state:'open'},
    {id:'G-02',title:'MMD4E comprobado e identificado',when:'Antes del primer uso',state:'open'},
    {id:'G-03',title:'BDX-30 verificado e identificado',when:'Antes del primer uso',state:'open'},
    {id:'G-04',title:'Flexómetro + referencia interna',when:'Antes de medir dimensiones',state:'open'},
    {id:'G-05',title:'Producto ligado a plano/revisión',when:'Antes de inspección',state:'closed'},
    {id:'G-06',title:'Validación práctica Gustavo / Alessandri',when:'Durante Piloto 1',state:'open'},
    {id:'G-08',title:'Revisar remisión real',when:'Primera entrega',state:'open'},
    {id:'G-09',title:'Aprobación formal de documentos',when:'Antes de estado VIGENTE',state:'deferred'}
  ]
};

const processes=[
  ['PE-01','PE','Dirección y Planeación del SGC','docs/procesos/PE-01_Direccion_Planeacion_SGC_v1.0.docx'],
  ['PE-02','PE','Seguimiento y Evaluación del Desempeño','docs/procesos/PE-02_Seguimiento_Evaluacion_v1.0.docx'],
  ['PE-03','PE','Revisión y Mejora del SGC','docs/procesos/PE-03_Revision_Mejora_v1.0.docx'],
  ['PO-01','PO','Gestión de Requisitos y Órdenes','docs/procesos/PO-01_Gestion_Requisitos_Ordenes_v1.0.docx'],
  ['PO-02','PO','Planeación y Seguimiento de Producción','docs/procesos/PO-02_Planeacion_Seguimiento_Produccion_v1.0.docx'],
  ['PO-03','PO','Inspección y Liberación de Producto','docs/procesos/PO-03_Inspeccion_Liberacion_v1.0.docx'],
  ['PO-04','PO','Control de Inventario y Producto','docs/procesos/PO-04_Control_Inventario_v1.0.docx'],
  ['PO-05','PO','Carga, Transporte y Entrega','docs/procesos/PO-05_Carga_Transporte_Entrega_v1.0.docx'],
  ['PO-06','PO','Gestión de NC y Rechazos','docs/procesos/PO-06_Gestion_NC_Rechazos_v1.0.docx'],
  ['PO-07','PO','Gestión y Evaluación de Proveedores','docs/procesos/PO-07_Gestion_Evaluacion_Proveedores_v1.0.docx'],
  ['PS-01','PS','Gestión de Información Documentada','docs/procesos/PS-01_Gestion_Informacion_Documentada_v1.0.docx'],
  ['PS-02','PS','Gestión de Equipos de Medición','docs/procesos/PS-02_Gestion_Equipos_Medicion_v1.0.docx'],
  ['PS-03','PS','Competencia y Capacitación','docs/procesos/PS-03_Competencia_Capacitacion_v1.0.docx']
].map(([code,type,name,file])=>({code,type,name,file}));

const docs=[
  {code:'MAN-SGC-01',title:'Manual de Calidad e Inspección CAMPAR',version:'1.2',status:'EN REVISIÓN',pdf:'docs/MAN-SGC-01_Manual_Calidad_Inspeccion_v1.2.pdf',docx:'docs/MAN-SGC-01_Manual_Calidad_Inspeccion_v1.2.docx'},
  {code:'DOC-SGC-04',title:'Compendio Maestro de Procesos y Documentación',version:'1.0',status:'EN REVISIÓN',pdf:'docs/DOC-SGC-04_Compendio_Maestro_v1.0.pdf',docx:'docs/DOC-SGC-04_Compendio_Maestro_v1.0.docx'},
  {code:'DOC-IMP-01',title:'Guía de Implementación Piloto',version:'1.1',status:'EN REVISIÓN',pdf:'docs/DOC-IMP-01_Guia_Piloto_v1.1.pdf',docx:'docs/DOC-IMP-01_Guia_Piloto_v1.1.docx'},
  {code:'PLT-PS01-01',title:'Plantilla Maestra CAMPAR',version:'1.1',status:'EN REVISIÓN',pdf:'docs/PLT-PS01-01_Plantilla_Maestra_v1.1.pdf'},
  {code:'MAT-PS01-01',title:'Matrices y Registros del SGC',version:'1.0',status:'EN REVISIÓN',xlsx:'docs/SGC_CAMPAR_Matrices_y_Registros_v1.0.xlsx'}
];

const titles={dashboard:'Dashboard',orders:'Órdenes de compra',production:'Producción',inventory:'Inventario',inspections:'Inspecciones',deliveries:'Entregas',ncs:'No conformidades',suppliers:'Aserraderos',products:'Productos',sgc:'Sistema de Gestión de Calidad',documents:'Documentación controlada',pilot:'Piloto 1'};
let state=loadState();
let selectedInventoryProduct='207457';
const content=document.getElementById('content');
const pageTitle=document.getElementById('pageTitle');

function clone(v){return JSON.parse(JSON.stringify(v))}
function loadState(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||clone(seedState)}catch{return clone(seedState)}}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function esc(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function fmt(v){return new Intl.NumberFormat('es-MX').format(Number(v||0))}
function dmx(s){if(!s)return'—';const [y,m,d]=s.split('-');return `${d}/${m}/${y}`}
function product(code){return state.products.find(p=>p.code===code)||{code,name:code,type:'—',dims:'—',plan:'—',rev:'—',ht:'—'}}
function sawmill(code){return SAWMILLS[code]||{name:code,code}}
function lotsForProduct(code){return state.lots.filter(l=>l.code===code&&l.qty>0)}
function lotById(id){return state.lots.find(l=>l.id===id)}
function inspectionForLot(id){return state.inspections.filter(i=>i.lotId===id).slice(-1)[0]}
function sum(arr,fn){return arr.reduce((a,x)=>a+Number(fn(x)||0),0)}
function nextId(prefix,list,width=3){const max=list.reduce((m,x)=>Math.max(m,Number(String(x.id||'').split('-').pop())||0),0);return `${prefix}-${String(max+1).padStart(width,'0')}`}
function stageQty(code,supplier,stage){return sum(state.lots.filter(l=>l.code===code&&l.supplier===supplier&&l.stage===stage),l=>l.qty)}
function supplierQty(code,supplier){return sum(state.lots.filter(l=>l.code===code&&l.supplier===supplier),l=>l.qty)}
function totalProductQty(code){return sum(lotsForProduct(code),l=>l.qty)}
function cleanPendingLots(){return state.lots.filter(l=>l.stage==='Limpios'&&l.quality==='Pendiente de inspección'&&l.qty>0)}
function releasedAvailableLots(){return state.lots.filter(l=>l.stage==='Limpios'&&l.quality==='Liberado'&&l.qty-(l.committed||0)>0)}

function sampleSize(n){n=Number(n||0);if(n<=0)return 0;if(n<=15)return n;if(n<=25)return 5;if(n<=50)return 8;if(n<=90)return 13;if(n<=150)return 20;if(n<=280)return 32;if(n<=500)return 50;if(n<=1200)return 80;if(n<=3200)return 125;if(n<=10000)return 200;if(n<=35000)return 315;if(n<=150000)return 500;if(n<=500000)return 800;return 1250}
function toneFor(s){return ({'En corte':'gray','En armado':'blue','En estufado':'orange','Limpios':'green','Pendiente de inspección':'orange','Pendiente de liberación':'blue','Liberado':'green','Retenido':'red','Retrabajo':'orange','Alta':'red','Media':'orange','Baja':'green','En producción':'blue','Producción completa':'green','Activa':'green','Activo':'green','Programada':'blue','Entregada':'green','Abierta':'red','Seguimiento':'blue','Pendiente reinspección':'orange','Cerrada':'green','Crítica':'red','Mayor':'orange','Menor':'green','EN REVISIÓN':'orange'})[s]||'gray'}
function pill(text,tone=toneFor(text)){return `<span class="pill ${tone}">${esc(text)}</span>`}
function pageHead(h,p,actions=''){return `<div class="page-head"><div><h1>${esc(h)}</h1><p>${esc(p)}</p></div><div class="page-actions">${actions}</div></div>`}
function kpi(label,value,note,mark,tone){return `<div class="card kpi"><div><div class="kpi-label">${esc(label)}</div><div class="kpi-value">${value}</div><div class="kpi-note">${esc(note||'')}</div></div><div class="kpi-tag ${tone}">${mark}</div></div>`}
function metric(label,value,tone=''){return `<div class="metric-mini ${tone}"><span>${esc(label)}</span><strong>${value}</strong></div>`}
function progress(p){const v=Math.max(0,Math.min(100,Number(p||0)));return `<div class="progress"><span style="width:${v}%"></span></div><div class="progress-label">${v}%</div>`}
function modal(html,wide=false){document.getElementById('modalRoot').innerHTML=`<div class="modal-backdrop" onclick="if(event.target===this)closeModal()"><div class="modal ${wide?'wide':''}">${html}</div></div>`}
function closeModal(){document.getElementById('modalRoot').innerHTML=''}
window.closeModal=closeModal;
function openPdf(file,title='Documento'){modal(`<div class="card-header"><div><h3>${esc(title)}</h3><div class="card-sub">Vista previa del documento</div></div><button class="btn small" onclick="closeModal()">Cerrar</button></div><iframe class="pdf-frame" src="${file}"></iframe>`,true)}
window.openPdf=openPdf;
function resetDemo(){if(confirm('¿Restablecer los datos de demostración de CAMPAR SGC Digital v0.4?')){state=clone(seedState);selectedInventoryProduct='207457';saveState();render('dashboard')}}
window.resetDemo=resetDemo;

function overallStageTotals(){return Object.fromEntries(STAGES.map(s=>[s,sum(state.lots.filter(l=>l.stage===s),l=>l.qty)]))}
function dashboard(){
  const stages=overallStageTotals();
  const pending=cleanPendingLots();
  const pendingRelease=state.lots.filter(l=>l.quality==='Pendiente de liberación').length;
  const openNc=state.ncs.filter(n=>n.status!=='Cerrada').length;
  const totalUnits=sum(state.lots,l=>l.qty);
  return `${pageHead('Dashboard','Resumen ejecutivo de la operación y puntos que requieren atención.','<button class="btn" onclick="resetDemo()">Restablecer demo</button>')}
  <div class="hero"><div><div class="eyebrow">CAMPAR SGC DIGITAL · v0.4</div><h3>Seguimiento operativo con enfoque por producto y aserradero</h3><p>Las etapas de producción se normalizan en En corte, En armado, En estufado y Limpios. Al llegar a Limpios, el lote queda disponible para inspección CAMPAR sin confundirse con producto liberado.</p></div><img src="assets/logo-campar.png" class="hero-logo" alt="CAMPAR"></div>
  <div class="grid cols-4">${kpi('Unidades físicas',fmt(totalUnits),'Ambos aserraderos','Σ','green')}${kpi('Lotes listos para inspección',pending.length,'Etapa Limpios','✓','orange')}${kpi('Pendientes de liberación',pendingRelease,'Inspección conforme','L','blue')}${kpi('NC abiertas',openNc,'Seguimiento requerido','!','red')}</div>
  <div class="grid cols-2" style="margin-top:14px">
    <div class="card"><div class="card-header"><div><h3>Producción por etapa</h3><div class="card-sub">Concentrado físico actual</div></div><button class="btn small" onclick="render('production')">Ver producción</button></div><div class="stage-strip">${STAGES.map(s=>`<div class="stage-box ${s==='Limpios'?'clean':''}"><span>${s}</span><strong>${fmt(stages[s])}</strong><small>piezas</small></div>`).join('')}</div></div>
    <div class="card"><div class="card-header"><div><h3>Inventario por aserradero</h3><div class="card-sub">Concentrado de todas las etapas</div></div><button class="btn small" onclick="render('inventory')">Abrir inventario</button></div><div class="grid cols-2">${metric('Cosme (MX-1361)',fmt(sum(state.lots.filter(l=>l.supplier==='MX-1361'),l=>l.qty))+' pzas','green')}${metric('Duma (MX-1071)',fmt(sum(state.lots.filter(l=>l.supplier==='MX-1071'),l=>l.qty))+' pzas','orange')}</div></div>
  </div>
  <div class="grid cols-2" style="margin-top:14px">
    <div class="card"><div class="card-header"><div><h3>Lotes listos para inspección</h3><div class="card-sub">Etapa Limpios · pendiente de inspección</div></div></div>${pending.length?`<div class="table-wrap"><table class="table"><thead><tr><th>Lote</th><th>Producto</th><th>Aserradero</th><th>Cantidad</th><th></th></tr></thead><tbody>${pending.slice(0,6).map(l=>`<tr><td><strong>${l.id}</strong></td><td>${l.code} · ${esc(product(l.code).name)}</td><td>${esc(sawmill(l.supplier).name)}</td><td>${fmt(l.qty)}</td><td><button class="btn small primary" onclick="startInspection('${l.id}')">Inspeccionar</button></td></tr>`).join('')}</tbody></table></div>`:'<div class="notice green">No hay lotes pendientes de inspección.</div>'}</div>
    <div class="card"><div class="card-header"><div><h3>Prioridades de entrega</h3><div class="card-sub">Órdenes activas por fecha requerida</div></div><button class="btn small" onclick="render('orders')">Ver órdenes</button></div><div class="table-wrap"><table class="table"><thead><tr><th>OC</th><th>Producto</th><th>Planta</th><th>Fecha</th><th>Prioridad</th></tr></thead><tbody>${state.orders.slice().sort((a,b)=>a.date.localeCompare(b.date)).map(o=>`<tr><td><strong>${o.oc}</strong></td><td>${o.line.code}</td><td>${esc(o.plant)}</td><td>${dmx(o.date)}</td><td>${pill(o.priority)}</td></tr>`).join('')}</tbody></table></div></div>
  </div>`;
}

function orders(){
  return `${pageHead('Órdenes de compra','Control de requerimientos y asignación de lotes a Cosme o Duma.','<button class="btn primary" onclick="openNewOrder()">+ Nueva OC</button>')}
  <div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>OC</th><th>Partida</th><th>Producto</th><th>Cantidad</th><th>Planta</th><th>Fecha requerida</th><th>Prioridad</th><th>Estado</th><th></th></tr></thead><tbody>${state.orders.map(o=>`<tr><td><strong>${o.oc}</strong></td><td>${o.line.part}</td><td>${o.line.code} · ${esc(product(o.line.code).name)}</td><td>${fmt(o.line.qty)}</td><td>${esc(o.plant)}</td><td>${dmx(o.date)}</td><td>${pill(o.priority)}</td><td>${pill(o.status)}</td><td><button class="btn small" onclick="openOrder('${o.oc}')">Ver / asignar</button></td></tr>`).join('')}</tbody></table></div></div>`;
}
function openNewOrder(){modal(`<h3>Nueva orden de compra</h3><div class="form-grid"><div class="field"><label>OC</label><input id="noOc" value="450021"></div><div class="field"><label>Producto</label><select id="noCode">${state.products.map(p=>`<option value="${p.code}">${p.code} · ${esc(p.name)}</option>`).join('')}</select></div><div class="field"><label>Cantidad</label><input id="noQty" type="number" value="250" min="1"></div><div class="field"><label>Planta</label><input id="noPlant" value="Planta 1"></div><div class="field"><label>Fecha requerida</label><input id="noDate" type="date" value="2026-10-20"></div><div class="field"><label>Prioridad</label><select id="noPriority"><option>Alta</option><option selected>Media</option><option>Baja</option></select></div></div><div class="modal-actions"><button class="btn" onclick="closeModal()">Cancelar</button><button class="btn primary" onclick="createOrder()">Guardar OC</button></div>`)}
window.openNewOrder=openNewOrder;
function createOrder(){const oc=document.getElementById('noOc').value.trim(),code=document.getElementById('noCode').value,qty=Number(document.getElementById('noQty').value);if(!oc||qty<=0){alert('Capture OC y cantidad válidas.');return}if(state.orders.some(o=>o.oc===oc)){alert('La OC ya existe.');return}const p=product(code);state.orders.push({oc,client:'Cliente A',plant:document.getElementById('noPlant').value,date:document.getElementById('noDate').value,priority:document.getElementById('noPriority').value,status:'Activa',line:{part:'P001',code,qty,plan:p.plan,rev:p.rev,ht:p.ht==='Sí'}});saveState();closeModal();render('orders')}
window.createOrder=createOrder;
function openOrder(oc){const o=state.orders.find(x=>x.oc===oc);const lots=state.lots.filter(l=>l.oc===oc);modal(`<h3>OC ${o.oc}</h3><div class="modal-summary"><div class="summary-box"><span>Producto</span><strong>${o.line.code} · ${esc(product(o.line.code).name)}</strong></div><div class="summary-box"><span>Cantidad OC</span><strong>${fmt(o.line.qty)}</strong></div><div class="summary-box"><span>Fecha</span><strong>${dmx(o.date)}</strong></div><div class="summary-box"><span>Prioridad</span><strong>${o.priority}</strong></div></div><div class="card flat"><div class="card-header"><div><h3>Lotes vinculados</h3><div class="card-sub">${fmt(sum(lots,l=>l.qty))} piezas actualmente en operación</div></div></div>${lots.length?`<div class="table-wrap"><table class="table"><thead><tr><th>Lote</th><th>Aserradero</th><th>Etapa</th><th>Cantidad</th><th>Calidad</th></tr></thead><tbody>${lots.map(l=>`<tr><td>${l.id}</td><td>${esc(sawmill(l.supplier).name)}</td><td>${pill(l.stage)}</td><td>${fmt(l.qty)}</td><td>${l.stage==='Limpios'?pill(l.quality):'—'}</td></tr>`).join('')}</tbody></table></div>`:'<div class="notice blue">Todavía no hay lotes asignados.</div>'}</div><div class="modal-actions"><button class="btn" onclick="closeModal()">Cerrar</button><button class="btn primary" onclick="openNewLot('${o.oc}')">Asignar lote</button></div>`,true)}
window.openOrder=openOrder;

function openNewLot(oc=''){const options=state.orders.map(o=>`<option value="${o.oc}" ${o.oc===oc?'selected':''}>${o.oc} · ${o.line.code} · ${esc(product(o.line.code).name)}</option>`).join('');modal(`<h3>Nueva asignación de producción</h3><div class="form-grid"><div class="field"><label>OC</label><select id="lotOc" onchange="syncLotProduct()">${options}</select></div><div class="field"><label>Producto</label><input id="lotProduct" readonly></div><div class="field"><label>Aserradero</label><select id="lotSupplier"><option value="MX-1361">Cosme (MX-1361)</option><option value="MX-1071">Duma (MX-1071)</option></select></div><div class="field"><label>Cantidad</label><input id="lotQty" type="number" min="1" value="100"></div><div class="field"><label>Etapa inicial</label><select id="lotStage">${STAGES.map(s=>`<option>${s}</option>`).join('')}</select></div><div class="field"><label>Fecha requerida</label><input id="lotDue" type="date"></div></div><div class="modal-actions"><button class="btn" onclick="closeModal()">Cancelar</button><button class="btn primary" onclick="createLot()">Crear lote</button></div>`);syncLotProduct()}
window.openNewLot=openNewLot;
function syncLotProduct(){const oc=document.getElementById('lotOc')?.value,o=state.orders.find(x=>x.oc===oc);if(!o)return;document.getElementById('lotProduct').value=`${o.line.code} · ${product(o.line.code).name}`;document.getElementById('lotDue').value=o.date}
window.syncLotProduct=syncLotProduct;
function createLot(){const o=state.orders.find(x=>x.oc===document.getElementById('lotOc').value),supplier=document.getElementById('lotSupplier').value,qty=Number(document.getElementById('lotQty').value),stage=document.getElementById('lotStage').value;if(!o||qty<=0){alert('Capture una cantidad válida.');return}const prefix=supplier==='MX-1361'?'COS':'DUM';const seq=state.lots.filter(l=>l.supplier===supplier).length+3200;state.lots.push({id:`${prefix}-${seq}`,oc:o.oc,code:o.line.code,supplier,qty,stage,quality:stage==='Limpios'?'Pendiente de inspección':'No aplica',due:document.getElementById('lotDue').value||o.date,committed:0});o.status='Activa';saveState();closeModal();render('production')}
window.createLot=createLot;

function production(){
  const all=overallStageTotals();
  return `${pageHead('Producción','Seguimiento por las cuatro etapas operativas definidas para CAMPAR.','<button class="btn primary" onclick="openNewLot()">+ Nueva asignación</button>')}
  <div class="summary-strip">${STAGES.map(s=>`<div class="summary-cell"><span>${s}</span><strong>${fmt(all[s])}</strong><small>piezas</small></div>`).join('')}</div>
  <div class="grid cols-2">
    ${['MX-1361','MX-1071'].map(code=>productionSawmillCard(code)).join('')}
  </div>
  <div class="card" style="margin-top:14px"><div class="card-header"><div><h3>Detalle de lotes</h3><div class="card-sub">Etapa física separada del estado de calidad</div></div></div><div class="table-wrap"><table class="table"><thead><tr><th>Lote</th><th>OC</th><th>Producto</th><th>Aserradero</th><th>Cantidad</th><th>Etapa</th><th>Calidad</th><th>Fecha</th><th></th></tr></thead><tbody>${state.lots.filter(l=>l.qty>0).map(l=>`<tr><td><strong>${l.id}</strong></td><td>${l.oc}</td><td>${l.code} · ${esc(product(l.code).name)}</td><td>${esc(sawmill(l.supplier).name)}</td><td>${fmt(l.qty)}</td><td>${pill(l.stage)}</td><td>${l.stage==='Limpios'?pill(l.quality):'<span class="muted">—</span>'}</td><td>${dmx(l.due)}</td><td>${l.stage==='Limpios'&&l.quality==='Pendiente de inspección'?`<button class="btn small primary" onclick="startInspection('${l.id}')">Inspeccionar</button>`:`<button class="btn small" onclick="openLot('${l.id}')">Actualizar</button>`}</td></tr>`).join('')}</tbody></table></div></div>`;
}
function productionSawmillCard(code){const s=sawmill(code),lots=state.lots.filter(l=>l.supplier===code&&l.qty>0),total=sum(lots,l=>l.qty);return `<div class="card"><div class="sawmill-head"><div class="sawmill-id"><div class="sawmill-badge">${s.name[0]}</div><div><strong>${s.name}</strong><span>${s.code}</span></div></div><strong>${fmt(total)} piezas</strong></div><div class="stage-flow">${STAGES.map(st=>`<div class="stage-box ${st==='Limpios'?'clean':''}"><span>${st}</span><strong>${fmt(sum(lots.filter(l=>l.stage===st),l=>l.qty))}</strong><small>pzas</small></div>`).join('')}</div><div class="notice ${cleanPendingLots().some(l=>l.supplier===code)?'orange':'green'}">${cleanPendingLots().filter(l=>l.supplier===code).length?`${cleanPendingLots().filter(l=>l.supplier===code).length} lote(s) en Limpios pendientes de inspección CAMPAR.`:'Sin lotes pendientes de inspección.'}</div></div>`}
function openLot(id){const l=lotById(id),idx=STAGES.indexOf(l.stage);const next=STAGES[Math.min(idx+1,STAGES.length-1)];modal(`<h3>${l.id} · seguimiento de producción</h3><div class="modal-summary"><div class="summary-box"><span>Producto</span><strong>${l.code} · ${esc(product(l.code).name)}</strong></div><div class="summary-box"><span>Aserradero</span><strong>${esc(sawmill(l.supplier).name)}</strong></div><div class="summary-box"><span>Cantidad</span><strong>${fmt(l.qty)}</strong></div><div class="summary-box"><span>Etapa actual</span><strong>${l.stage}</strong></div></div><div class="field"><label>Nueva etapa</label><select id="newStage">${STAGES.map(s=>`<option ${s===l.stage?'selected':''}>${s}</option>`).join('')}</select></div><div class="notice blue" style="margin-top:12px">Al registrar <strong>Limpios</strong>, el lote quedará listo para inspección CAMPAR. Limpios no equivale a producto liberado.</div><div class="modal-actions"><button class="btn" onclick="closeModal()">Cerrar</button><button class="btn primary" onclick="saveLotStage('${l.id}')">Guardar etapa</button></div>`)}
window.openLot=openLot;
function saveLotStage(id){const l=lotById(id),stage=document.getElementById('newStage').value;l.stage=stage;if(stage==='Limpios'&&(!l.quality||l.quality==='No aplica'))l.quality='Pendiente de inspección';if(stage!=='Limpios')l.quality='No aplica';saveState();closeModal();render('production')}
window.saveLotStage=saveLotStage;

function inventory(){
  const code=selectedInventoryProduct&&state.products.some(p=>p.code===selectedInventoryProduct)?selectedInventoryProduct:state.products[0].code;
  const p=product(code),cos=supplierQty(code,'MX-1361'),dum=supplierQty(code,'MX-1071'),total=cos+dum;
  return `${pageHead('Inventario','Vista por producto, desglosada entre Cosme y Duma con concentrado total.','')}
  <div class="card flat inventory-filter"><div class="filter-field"><label>Producto</label><select id="inventoryProduct" onchange="changeInventoryProduct(this.value)">${state.products.map(x=>`<option value="${x.code}" ${x.code===code?'selected':''}>${x.code} · ${esc(x.name)}</option>`).join('')}</select></div><div class="filter-field"><label>Buscar por código o nombre</label><input id="inventorySearch" placeholder="Ej. 207457, Tarima PBA" onkeydown="if(event.key==='Enter')searchInventoryProduct()"></div><div class="filter-field"><label>&nbsp;</label><button class="btn primary" onclick="searchInventoryProduct()">Aplicar búsqueda</button></div></div>
  <div class="product-focus">
    <div class="card product-card"><div class="product-illustration">PRODUCTO</div><div><div class="eyebrow">Producto seleccionado</div><h3>${p.code} · ${esc(p.name)}</h3><div class="product-meta"><b>Tipo</b><span>${esc(p.type)}</span><b>Dimensiones</b><span>${esc(p.dims)}</span><b>HT</b><span>${esc(p.ht)}</span></div></div></div>
    <div class="card inventory-total-card cosme"><div class="label">Cosme · MX-1361</div><strong>${fmt(cos)}</strong><span>piezas</span></div>
    <div class="card inventory-total-card duma"><div class="label">Duma · MX-1071</div><strong>${fmt(dum)}</strong><span>piezas</span></div>
    <div class="card inventory-total-card total"><div class="label">Concentrado total</div><strong>${fmt(total)}</strong><span>piezas</span></div>
  </div>
  <div class="inventory-sawmills">${inventorySawmill(code,'MX-1361')}${inventorySawmill(code,'MX-1071')}</div>
  <div class="card inventory-concentrate"><div class="card-header"><div><h3>Concentrado general del producto</h3><div class="card-sub">Resumen por etapa y aserradero</div></div><strong>${fmt(total)} piezas</strong></div><div class="table-wrap"><table class="table"><thead><tr><th>Aserradero</th>${STAGES.map(s=>`<th class="numeric">${s}</th>`).join('')}<th class="numeric">Total</th></tr></thead><tbody><tr class="cosme-row"><td><strong>Cosme (MX-1361)</strong></td>${STAGES.map(s=>`<td class="numeric">${fmt(stageQty(code,'MX-1361',s))}</td>`).join('')}<td class="numeric">${fmt(cos)}</td></tr><tr class="duma-row"><td><strong>Duma (MX-1071)</strong></td>${STAGES.map(s=>`<td class="numeric">${fmt(stageQty(code,'MX-1071',s))}</td>`).join('')}<td class="numeric">${fmt(dum)}</td></tr><tr class="total-row"><td>Total general</td>${STAGES.map(s=>`<td class="numeric">${fmt(stageQty(code,'MX-1361',s)+stageQty(code,'MX-1071',s))}</td>`).join('')}<td class="numeric">${fmt(total)}</td></tr></tbody></table></div></div>`;
}
function inventorySawmill(code,supplier){const s=sawmill(supplier),total=supplierQty(code,supplier),clean=state.lots.filter(l=>l.code===code&&l.supplier===supplier&&l.stage==='Limpios'&&l.qty>0);return `<div class="card"><div class="sawmill-head"><div class="sawmill-id"><div class="sawmill-badge">${s.name[0]}</div><div><strong>${s.name} (${s.code})</strong><span>Inventario del producto por etapa de producción</span></div></div><strong>${fmt(total)} piezas</strong></div><div class="stage-flow">${STAGES.map(st=>`<div class="stage-box ${st==='Limpios'?'clean':''}"><span>${st}</span><strong>${fmt(stageQty(code,supplier,st))}</strong><small>piezas</small></div>`).join('')}</div><div class="clean-lots"><h4>Lotes en etapa de Limpios</h4>${clean.length?`<div class="table-wrap"><table class="table"><thead><tr><th>Lote</th><th>Cantidad</th><th>Calidad</th><th>Acción</th></tr></thead><tbody>${clean.map(l=>`<tr><td><strong>${l.id}</strong></td><td>${fmt(l.qty)}</td><td>${pill(l.quality)}</td><td>${l.quality==='Pendiente de inspección'?`<button class="btn small primary" onclick="startInspection('${l.id}')">Inspeccionar lote</button>`:`<button class="btn small" onclick="openInspectionForLot('${l.id}')">Ver inspección</button>`}</td></tr>`).join('')}</tbody></table></div>`:'<div class="notice green">No hay lotes en Limpios para este producto.</div>'}</div></div>`}
function changeInventoryProduct(code){selectedInventoryProduct=code;render('inventory')}
window.changeInventoryProduct=changeInventoryProduct;
function searchInventoryProduct(){const q=(document.getElementById('inventorySearch')?.value||'').trim().toLowerCase();if(!q)return;const p=state.products.find(x=>x.code.toLowerCase().includes(q)||x.name.toLowerCase().includes(q));if(!p){alert('No se encontró un producto con esa búsqueda.');return}selectedInventoryProduct=p.code;render('inventory')}
window.searchInventoryProduct=searchInventoryProduct;

function inspections(){const pending=cleanPendingLots(),history=state.inspections.slice().reverse();return `${pageHead('Inspecciones','Los lotes se habilitan para inspección al alcanzar la etapa Limpios.','')}
  <div class="grid cols-3">${kpi('Lotes listos',pending.length,'Pendientes de inspección','✓','orange')}${kpi('Pendientes de liberación',state.lots.filter(l=>l.quality==='Pendiente de liberación').length,'Requieren autorización','L','blue')}${kpi('Retenidos',state.lots.filter(l=>l.quality==='Retenido').length,'Requieren tratamiento','!','red')}</div>
  <div class="card" style="margin-top:14px"><div class="card-header"><div><h3>Lotes disponibles para inspección</h3><div class="card-sub">Etapa de producción: Limpios</div></div></div>${pending.length?`<div class="table-wrap"><table class="table"><thead><tr><th>Lote</th><th>OC</th><th>Producto</th><th>Aserradero</th><th>Cantidad</th><th>Muestra</th><th></th></tr></thead><tbody>${pending.map(l=>`<tr><td><strong>${l.id}</strong></td><td>${l.oc}</td><td>${l.code} · ${esc(product(l.code).name)}</td><td>${esc(sawmill(l.supplier).name)}</td><td>${fmt(l.qty)}</td><td>${fmt(sampleSize(l.qty))}</td><td><button class="btn small primary" onclick="startInspection('${l.id}')">Iniciar inspección</button></td></tr>`).join('')}</tbody></table></div>`:'<div class="notice green">No hay lotes pendientes de inspección.</div>'}</div>
  <div class="card" style="margin-top:14px"><div class="card-header"><div><h3>Historial de inspecciones</h3><div class="card-sub">Resultado y autorización de liberación</div></div></div><div class="table-wrap"><table class="table"><thead><tr><th>Inspección</th><th>Fecha</th><th>Lote</th><th>Producto</th><th>Aserradero</th><th>Muestra</th><th>Resultado</th><th>Autoriza</th><th></th></tr></thead><tbody>${history.map(i=>`<tr><td><strong>${i.id}</strong></td><td>${dmx(i.date)}</td><td>${i.lotId}</td><td>${i.code}</td><td>${esc(sawmill(i.supplier).name)}</td><td>${fmt(i.sample)} / ${fmt(i.lot)}</td><td>${pill(i.result)}</td><td>${esc(i.authorizedBy||'—')}</td><td><button class="btn small" onclick="openInspection('${i.id}')">Ver</button></td></tr>`).join('')}</tbody></table></div></div>`}
function startInspection(lotId){const l=lotById(lotId);if(!l||l.stage!=='Limpios'){alert('El lote debe estar en la etapa Limpios para inspeccionarse.');return}if(l.quality!=='Pendiente de inspección'){openInspectionForLot(lotId);return}const sample=sampleSize(l.qty);modal(`<h3>Nueva inspección · ${l.id}</h3><div class="modal-summary"><div class="summary-box"><span>Producto</span><strong>${l.code} · ${esc(product(l.code).name)}</strong></div><div class="summary-box"><span>Aserradero</span><strong>${esc(sawmill(l.supplier).name)} (${l.supplier})</strong></div><div class="summary-box"><span>Tamaño de lote</span><strong>${fmt(l.qty)}</strong></div><div class="summary-box"><span>Muestra Nivel II</span><strong>${fmt(sample)}</strong></div></div><div class="notice blue">La cantidad de muestra se calcula automáticamente con la tabla incorporada al Manual. Para lotes de 1 a 15 piezas, CAMPAR aplica revisión al 100 % como criterio interno.</div><div class="form-grid" style="margin-top:14px"><div class="field"><label>Resultado de demostración</label><select id="inspectionOutcome"><option value="ok">Conforme</option><option value="nc">Con no conformidad</option></select></div><div class="field"><label>Unidades no conformes</label><input id="inspectionNcQty" type="number" min="0" max="${l.qty}" value="0"></div><div class="field"><label>Defecto principal</label><select id="inspectionDefect"><option value="DIM-01">DIM-01 · Dimensional</option><option value="HUM-01">HUM-01 · Humedad</option><option value="HNG-01">HNG-01 · Hongo</option><option value="NUD-01">NUD-01 · Ojo/nudo desprendible</option><option value="FIJ-02">FIJ-02 · Fijación estructural</option></select></div><div class="field"><label>Inspector</label><select id="inspectionBy"><option>Gustavo</option><option>Alessandri</option><option>Ian</option><option>Cris</option></select></div></div><div class="modal-actions"><button class="btn" onclick="closeModal()">Cancelar</button><button class="btn primary" onclick="saveInspection('${l.id}')">Registrar inspección</button></div>`)}
window.startInspection=startInspection;
function saveInspection(lotId){const l=lotById(lotId),outcome=document.getElementById('inspectionOutcome').value,ncQty=Math.max(0,Number(document.getElementById('inspectionNcQty').value)),defect=document.getElementById('inspectionDefect').value;const id=nextId('INS-2026',state.inspections,4);const result=outcome==='ok'?'Pendiente de liberación':'Retenido';state.inspections.push({id,lotId:l.id,oc:l.oc,code:l.code,supplier:l.supplier,lot:l.qty,sample:sampleSize(l.qty),result,ncCount:outcome==='ok'?0:ncQty,defect:outcome==='ok'?'—':defect,authorizedBy:'',inspectedBy:document.getElementById('inspectionBy').value,date:'2026-09-28'});l.quality=result;if(outcome==='nc'){state.ncs.push({id:nextId('NC-2026',state.ncs),inspection:id,lotId:l.id,oc:l.oc,code:l.code,supplier:l.supplier,severity:['HUM-01','HNG-01'].includes(defect)?'Crítica':'Mayor',level:'N1',qty:ncQty,status:'Abierta',defect,action:'Segregar lote y definir retrabajo'})}saveState();closeModal();render('inspections');setTimeout(()=>openInspection(id),50)}
window.saveInspection=saveInspection;
function openInspectionForLot(lotId){const i=inspectionForLot(lotId);if(i)openInspection(i.id);else alert('No existe una inspección registrada para este lote.')}
window.openInspectionForLot=openInspectionForLot;
function openInspection(id){const i=state.inspections.find(x=>x.id===id),l=lotById(i.lotId);modal(`<h3>${i.id} · detalle de inspección</h3><div class="modal-summary"><div class="summary-box"><span>Lote</span><strong>${i.lotId}</strong></div><div class="summary-box"><span>Producto</span><strong>${i.code}</strong></div><div class="summary-box"><span>Muestra</span><strong>${fmt(i.sample)} / ${fmt(i.lot)}</strong></div><div class="summary-box"><span>Resultado</span><strong>${i.result}</strong></div></div>${i.result==='Pendiente de liberación'?'<div class="notice green">La inspección resultó conforme. El lote requiere autorización de liberación por Gustavo o Alessandri.</div>':''}${i.result==='Retenido'?`<div class="notice red">Lote retenido. Unidades no conformes registradas: ${fmt(i.ncCount)}. Defecto: ${esc(i.defect)}.</div>`:''}${i.result==='Liberado'?`<div class="notice green">Lote liberado por ${esc(i.authorizedBy)}. Permanece físicamente en la etapa Limpios hasta su salida.</div>`:''}<div class="modal-actions"><button class="btn" onclick="closeModal()">Cerrar</button>${i.result==='Pendiente de liberación'?`<button class="btn primary" onclick="chooseRelease('${i.id}')">Autorizar liberación</button>`:''}${i.result==='Retenido'?`<button class="btn danger" onclick="openNCByInspection('${i.id}')">Ver NC</button>`:''}</div>`)}
window.openInspection=openInspection;
function chooseRelease(id){modal(`<h3>Autorizar liberación</h3><div class="notice blue">La autoridad de liberación del piloto se mantiene en Gustavo y Alessandri.</div><div class="field" style="margin-top:14px"><label>Autoriza</label><select id="releaseBy"><option>Gustavo</option><option>Alessandri</option></select></div><div class="modal-actions"><button class="btn" onclick="closeModal()">Cancelar</button><button class="btn primary" onclick="releaseInspection('${id}')">Liberar lote</button></div>`)}
window.chooseRelease=chooseRelease;
function releaseInspection(id){const i=state.inspections.find(x=>x.id===id),l=lotById(i.lotId);i.result='Liberado';i.authorizedBy=document.getElementById('releaseBy').value;if(l)l.quality='Liberado';const nc=state.ncs.find(n=>n.lotId===i.lotId&&n.status==='Pendiente reinspección');if(nc)nc.status='Cerrada';saveState();closeModal();render('inspections')}
window.releaseInspection=releaseInspection;

function ncs(){return `${pageHead('No conformidades','Seguimiento de producto retenido, retrabajo y reinspección.','')}
  <div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>NC</th><th>Inspección</th><th>Lote</th><th>Producto</th><th>Aserradero</th><th>Defecto</th><th>Severidad</th><th>Estado</th><th></th></tr></thead><tbody>${state.ncs.slice().reverse().map(n=>`<tr><td><strong>${n.id}</strong></td><td>${n.inspection}</td><td>${n.lotId}</td><td>${n.code}</td><td>${esc(sawmill(n.supplier).name)}</td><td>${esc(n.defect)}</td><td>${pill(n.severity)}</td><td>${pill(n.status)}</td><td><button class="btn small" onclick="openNC('${n.id}')">Gestionar</button></td></tr>`).join('')}</tbody></table></div></div>`}
function openNC(id){const n=state.ncs.find(x=>x.id===id);modal(`<h3>${n.id} · seguimiento</h3><div class="modal-summary"><div class="summary-box"><span>Lote</span><strong>${n.lotId}</strong></div><div class="summary-box"><span>Defecto</span><strong>${n.defect}</strong></div><div class="summary-box"><span>Cantidad afectada</span><strong>${fmt(n.qty)}</strong></div><div class="summary-box"><span>Estado</span><strong>${n.status}</strong></div></div><div class="field"><label>Acción / retrabajo</label><textarea id="ncAction">${esc(n.action||'')}</textarea></div><div class="modal-actions"><button class="btn" onclick="closeModal()">Cerrar</button>${n.status!=='Cerrada'?`<button class="btn primary" onclick="sendToReinspection('${n.id}')">Retrabajo terminado → reinspección</button>`:''}</div>`)}
window.openNC=openNC;
function openNCByInspection(ins){const n=state.ncs.find(x=>x.inspection===ins);if(n)openNC(n.id)}
window.openNCByInspection=openNCByInspection;
function sendToReinspection(id){const n=state.ncs.find(x=>x.id===id),l=lotById(n.lotId);n.action=document.getElementById('ncAction').value;n.status='Pendiente reinspección';if(l){l.stage='Limpios';l.quality='Pendiente de inspección'}saveState();closeModal();render('ncs')}
window.sendToReinspection=sendToReinspection;

function deliveries(){return `${pageHead('Entregas','Programación de salidas a partir de lotes Limpios y liberados.','<button class="btn primary" onclick="openDelivery()">+ Nueva entrega</button>')}
  <div class="notice blue" style="margin-bottom:14px">La etapa productiva sigue siendo <strong>Limpios</strong>; la disponibilidad para entrega depende del estado de calidad <strong>Liberado</strong>.</div>
  <div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>Viaje</th><th>Fecha</th><th>OC</th><th>Planta</th><th>Producto</th><th>Aserradero</th><th>Lote</th><th>Cantidad</th><th>Estado</th><th></th></tr></thead><tbody>${state.deliveries.slice().reverse().map(d=>`<tr><td><strong>${d.id}</strong></td><td>${dmx(d.date)}</td><td>${d.oc}</td><td>${esc(d.plant)}</td><td>${d.code}</td><td>${esc(sawmill(d.supplier).name)}</td><td>${d.lotId}</td><td>${fmt(d.qty)}</td><td>${pill(d.status)}</td><td>${d.status==='Programada'?`<button class="btn small primary" onclick="completeDelivery('${d.id}')">Confirmar entrega</button>`:''}</td></tr>`).join('')}</tbody></table></div></div>`}
function openDelivery(){const lots=releasedAvailableLots();if(!lots.length){modal(`<h3>Sin inventario liberado disponible</h3><div class="notice orange">No existen lotes Limpios con estado Liberado y cantidad disponible.</div><div class="modal-actions"><button class="btn" onclick="closeModal()">Cerrar</button></div>`);return}modal(`<h3>Nueva entrega</h3><div class="form-grid"><div class="field"><label>Lote liberado</label><select id="dLot" onchange="syncDeliveryLot()">${lots.map(l=>`<option value="${l.id}">${l.id} · ${l.code} · ${esc(sawmill(l.supplier).name)} · disponible ${fmt(l.qty-(l.committed||0))}</option>`).join('')}</select></div><div class="field"><label>OC</label><input id="dOc" readonly></div><div class="field"><label>Planta</label><input id="dPlant" value="Planta 1"></div><div class="field"><label>Cantidad</label><input id="dQty" type="number" min="1" value="10"></div><div class="field"><label>Fecha</label><input id="dDate" type="date" value="2026-10-01"></div><div class="field"><label>Chofer</label><input id="dDriver" value="Miguel"></div></div><div class="modal-actions"><button class="btn" onclick="closeModal()">Cancelar</button><button class="btn primary" onclick="createDelivery()">Programar</button></div>`);syncDeliveryLot()}
window.openDelivery=openDelivery;
function syncDeliveryLot(){const l=lotById(document.getElementById('dLot')?.value);if(l)document.getElementById('dOc').value=l.oc}
window.syncDeliveryLot=syncDeliveryLot;
function createDelivery(){const l=lotById(document.getElementById('dLot').value),qty=Number(document.getElementById('dQty').value),available=l.qty-(l.committed||0);if(qty<=0||qty>available){alert('Cantidad no disponible.');return}l.committed=(l.committed||0)+qty;state.deliveries.push({id:nextId('ENT-2026',state.deliveries),oc:l.oc,lotId:l.id,code:l.code,supplier:l.supplier,qty,plant:document.getElementById('dPlant').value,driver:document.getElementById('dDriver').value,date:document.getElementById('dDate').value,status:'Programada'});saveState();closeModal();render('deliveries')}
window.createDelivery=createDelivery;
function completeDelivery(id){const d=state.deliveries.find(x=>x.id===id),l=lotById(d.lotId);if(l){l.committed=Math.max(0,(l.committed||0)-d.qty);l.qty=Math.max(0,l.qty-d.qty)}d.status='Entregada';saveState();render('deliveries')}
window.completeDelivery=completeDelivery;

function suppliers(){return `${pageHead('Aserraderos','Identificación práctica de los dos proveedores productivos autorizados.','')}
  <div class="grid cols-2">${state.suppliers.map(s=>`<div class="card"><div class="card-header"><div><div class="eyebrow">${s.code}</div><h3>${esc(s.name)}</h3><div class="card-sub">Proveedor / aserradero operativo</div></div>${pill(s.status)}</div><div class="grid cols-4">${metric('Conformidad',s.conformity+'%','green')}${metric('Retrabajo',s.rework+'%','orange')}${metric('NC críticas',s.critical+'%','red')}${metric('Rechazo planta',s.reject+'%','red')}</div></div>`).join('')}</div>`}
function products(){return `${pageHead('Productos','Catálogo maestro de referencia para la trazabilidad del prototipo.','')}
  <div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>Código</th><th>Producto</th><th>Tipo</th><th>Dimensiones</th><th>HT</th><th>Plano</th><th>Rev.</th><th>Estado</th></tr></thead><tbody>${state.products.map(p=>`<tr><td><strong>${p.code}</strong></td><td>${esc(p.name)}</td><td>${esc(p.type)}</td><td>${esc(p.dims)}</td><td>${p.ht}</td><td>${esc(p.plan)}</td><td>${esc(p.rev)}</td><td>${pill(p.status)}</td></tr>`).join('')}</tbody></table></div></div>`}
function sgc(){return `${pageHead('Sistema de Gestión de Calidad','Arquitectura documental del SGC CAMPAR.','')}
  <div class="grid cols-2"><div class="card"><div class="card-header"><div><h3>Arquitectura de procesos</h3><div class="card-sub">13 procesos: estratégicos, operativos y de soporte</div></div></div><div class="process-grid">${processes.map(p=>`<div class="process-card"><div class="code">${p.code} · ${p.type}</div><h4>${esc(p.name)}</h4><button class="btn small" onclick="window.open('${p.file}','_blank')">Abrir</button></div>`).join('')}</div></div><div class="card map-card"><div class="card-header"><div><h3>Mapa de procesos</h3><div class="card-sub">Referencia de consulta y exposición</div></div></div><img src="assets/mapa-procesos.png" alt="Mapa de procesos CAMPAR"></div></div>`}
function documents(){return `${pageHead('Documentación controlada','Biblioteca preliminar del SGC para consulta en la interfaz.','')}
  <div class="card"><div class="table-wrap"><table class="table"><thead><tr><th>Código</th><th>Documento</th><th>Versión</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>${docs.map(d=>`<tr><td><strong>${d.code}</strong></td><td>${esc(d.title)}</td><td>${d.version}</td><td>${pill(d.status)}</td><td>${d.pdf?`<button class="btn small" onclick="openPdf('${d.pdf}','${esc(d.title)}')">PDF</button>`:''} ${d.docx?`<button class="btn small" onclick="window.open('${d.docx}','_blank')">DOCX</button>`:''} ${d.xlsx?`<button class="btn small" onclick="window.open('${d.xlsx}','_blank')">XLSX</button>`:''}</td></tr>`).join('')}</tbody></table></div></div>`}
function pilot(){const closed=state.pilotGates.filter(g=>g.state==='closed').length,total=state.pilotGates.filter(g=>g.state!=='deferred').length;return `${pageHead('Piloto 1','Gates de ejecución antes de operar el SGC como sistema vigente.','')}
  <div class="grid cols-3">${kpi('Gates cerrados',`${closed}/${total}`,'Ejecución del piloto','G','green')}${kpi('Preparación',Math.round(closed/total*100)+'%','Sin contar diferidos','%','blue')}${kpi('Diferidos',state.pilotGates.filter(g=>g.state==='deferred').length,'Cierre posterior','D','orange')}</div>
  <div class="card" style="margin-top:14px"><div class="gates">${state.pilotGates.map(g=>`<div class="gate ${g.state}"><strong>${g.id}</strong><div><strong>${esc(g.title)}</strong><div class="card-sub">${esc(g.when)}</div></div>${pill(g.state==='closed'?'CERRADO':g.state==='deferred'?'DIFERIDO':'ABIERTO',g.state==='closed'?'green':g.state==='deferred'?'blue':'orange')}<button class="btn small" ${g.state==='deferred'?'disabled':''} onclick="toggleGate('${g.id}')">${g.state==='closed'?'Reabrir':'Cerrar gate'}</button></div>`).join('')}</div></div>`}
function toggleGate(id){const g=state.pilotGates.find(x=>x.id===id);if(!g||g.state==='deferred')return;g.state=g.state==='closed'?'open':'closed';saveState();render('pilot')}
window.toggleGate=toggleGate;

function openExecutive(){const stages=overallStageTotals();modal(`<div class="card-header"><div><div class="eyebrow">VISTA DIRECCIÓN</div><h3 style="font-size:20px;margin-top:5px">CAMPAR SGC Digital v0.4</h3><div class="card-sub">Resumen del modelo presentado en esta versión</div></div><img src="assets/logo-campar.png" style="width:95px" alt="CAMPAR"></div><div class="grid cols-4">${metric('Cosme',fmt(sum(state.lots.filter(l=>l.supplier==='MX-1361'),l=>l.qty))+' pzas','green')}${metric('Duma',fmt(sum(state.lots.filter(l=>l.supplier==='MX-1071'),l=>l.qty))+' pzas','orange')}${metric('Limpios',fmt(stages['Limpios'])+' pzas','green')}${metric('NC abiertas',state.ncs.filter(n=>n.status!=='Cerrada').length,'red')}</div><div class="notice green" style="margin-top:14px"><strong>Cambio central v0.4:</strong> la interfaz completa adopta un diseño más formal y ejecutivo. Producción e inventario utilizan únicamente En corte, En armado, En estufado y Limpios; la inspección se habilita desde Limpios y el estado de calidad se gestiona por separado.</div><div class="modal-actions"><button class="btn" onclick="closeModal()">Cerrar</button><button class="btn primary" onclick="closeModal();render('inventory')">Mostrar inventario</button></div>`,true)}
window.openExecutive=openExecutive;

function render(page){pageTitle.textContent=titles[page]||'CAMPAR SGC';document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.page===page));const fn={dashboard,orders,production,inventory,inspections,deliveries,ncs,suppliers,products,sgc,documents,pilot}[page]||dashboard;content.innerHTML=fn();window.scrollTo({top:0,behavior:'smooth'})}
window.render=render;
document.querySelectorAll('.nav-item').forEach(b=>b.addEventListener('click',()=>render(b.dataset.page)));
document.getElementById('loginForm').addEventListener('submit',e=>{e.preventDefault();document.getElementById('loginView').classList.add('hidden');document.getElementById('app').classList.remove('hidden');render('dashboard')});
document.getElementById('logoutBtn').addEventListener('click',()=>{document.getElementById('app').classList.add('hidden');document.getElementById('loginView').classList.remove('hidden')});
