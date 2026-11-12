/* ---------- icone ---------- */
const I={
search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
locate:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 14.4c1.9.8 3 2.6 3 5.6"/>',
sliders:'<path d="M4 6h8M18 6h2M4 12h2M12 12h8M4 18h10M20 18h0"/><circle cx="15" cy="6" r="2.5"/><circle cx="9" cy="12" r="2.5"/><circle cx="17" cy="18" r="2.5"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
navigate:'<path d="M3 11 21 3l-8 18-2.5-7.5z"/>',
copy:'<rect x="9" y="9" width="12" height="12" rx="2.5"/><path d="M5 15h-.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5"/>',
more:'<circle cx="12" cy="5" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/><circle cx="12" cy="19" r="1.3" fill="currentColor"/>',
pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
pencil:'<path d="m4 20 1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19z"/><path d="m14.5 6.5 3 3"/>',
trash:'<path d="M4 7h16M9 7V4.5h6V7M6 7l1 13h10l1-13M10 11v5.5M14 11v5.5"/>',
close:'<path d="M6 6l12 12M18 6 6 18"/>',
back:'<path d="m14.5 6-6 6 6 6"/>',
chevR:'<path d="m9.5 6 6 6-6 6"/>',
chevD:'<path d="m6 9.5 6 6 6-6"/>',
settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
logout:'<path d="M9 4H5.5A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20H9M15 8l4 4-4 4M19 12H9"/>',
crown:'<path d="m3 8 4.5 4L12 5l4.5 7L21 8l-2 10H5z"/>',
bell:'<path d="M6 9a6 6 0 0 1 12 0c0 6 2.5 7 2.5 8h-17c0-1 2.5-2 2.5-8zM10 20.5a2.2 2.2 0 0 0 4 0"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.3 3 14.7 0 18M12 3c-3 3.3-3 14.7 0 18"/>',
file:'<path d="M7 3h7l5 5v11.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.500V4.500A1.5 1.5 0 0 1 6.500 3zM14 3v5h5M9 13h6M9 17h6"/>',
ban:'<circle cx="12" cy="12" r="9"/><path d="m5.7 5.7 12.6 12.6"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 20.500c0-4 3.400-6.500 7.500-6.500s7.500 2.500 7.500 6.500"/>',
refresh:'<path d="M20 11a8 8 0 0 0-14.500-4.500L4 8M4 4v4h4M4 13a8 8 0 0 0 14.500 4.500L20 16M20 20v-4h-4"/>',
link:'<path d="M10 14a4.500 4.500 0 0 0 6.400 0l3-3A4.500 4.500 0 0 0 13 4.600l-1 1M14 10a4.500 4.500 0 0 0-6.400 0l-3 3a4.500 4.500 0 0 0 6.400 6.400l1-1"/>',
movida:'<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
popup:'<path d="m10 3 1.800 5.200L17 10l-5.200 1.800L10 17l-1.800-5.200L3 10l5.200-1.800zM18 15l.8 2.200 2.200.8-2.200.8-.8 2.200-.8-2.200-2.200-.8 2.200-.8z"/>',
esplora:'<circle cx="12" cy="12" r="9"/><path d="m15.500 8.500-2 5-5 2 2-5z"/>',
food:'<path d="M5 3v7a2.500 2.500 0 0 0 5 0V3M7.500 3v18M16 3c-1.700 1.500-2.500 4-2.500 7 0 1.500.8 2.500 2.500 2.500zM16 3v18"/>',
lavoro:'<rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M9 7V5.500A1.500 1.500 0 0 1 10.500 4h3A1.500 1.500 0 0 1 15 5.500V7M9 7v13M15 7v13"/>',
layers:'<path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
check:'<path d="m5 12.500 4.500 4.500L19 7.500"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.500 7.500 8.500 6 8.500-6"/>',
lock:'<rect x="5" y="10.500" width="14" height="10" rx="2.5"/><path d="M8 10.500V8a4 4 0 0 1 8 0v2.500"/>',
info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5.500M12 7.600v.1"/>',
heart:'<path d="M12 20.500S3.500 15.500 3.500 9.300A4.600 4.600 0 0 1 12 7a4.600 4.600 0 0 1 8.500 2.300c0 6.200-8.500 11.200-8.500 11.200z"/>',
map:'<path d="M9 4 3 6.500V20l6-2.500 6 2.500 6-2.500V4l-6 2.500zM9 4v13.500M15 6.500V20"/>',
share:'<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.200 10.800 7.600-4.500M8.200 13.200l7.600 4.500"/>',
flag:'<path d="M5 21V4h11l-2 4.500 2 4.500H5"/>',
calendar:'<rect x="3.500" y="5" width="17" height="15.500" rx="2.500"/><path d="M3.500 10h17M8 3v4M16 3v4"/>'
};
I.note=I.file;
const ic=(n,s=18)=>`<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[n]||''}</svg>`;

/* ---------- dati ---------- */
const CATS={movida:{n:'Movida',c:'#8b5cf6'},popup:{n:'Pop-up',c:'#ec4899'},esplora:{n:'Esplora',c:'#10b3a3'},food:{n:'Food',c:'#f5a524'},lavoro:{n:'Lavoro',c:'#3b82f6'}};
const S={
  events:[
    {id:1,t:'Serata live al Molo',cat:'movida',x:254,y:250,addr:'Via del Molo, 4, Lineri',km:'0,9',by:'marta_r',link:''},
    {id:2,t:'Trattoria da Nino',cat:'food',x:80,y:414,addr:'Via Galermo, 21, Lineri',km:'0,6',by:'dragos_m',link:''},
    {id:3,t:'WUP studio',cat:'lavoro',x:172,y:458,addr:'Via Rosina Anselmi, 90, Lineri, 95045 Misterbianco CT',km:'1,2',by:'fnc_fabio',link:'instagram.com/wup.studio'},
    {id:4,t:'Mercatino vintage',cat:'popup',x:260,y:582,addr:'Piazza Mazzini, Lineri',km:'1,4',by:'massi_p',link:'instagram.com/mercatino.vintage'},
    {id:5,t:'Belvedere di Lineri',cat:'esplora',x:108,y:652,addr:'Strada Panoramica, Lineri',km:'1,8',by:'marta_r',link:''},
    {id:6,t:'Dj set in piazza',cat:'movida',x:208,y:722,addr:'Piazza Pertini, Lineri',km:'2,1',by:'dragos_m',link:''},
    {id:7,t:'Aperitivo sul porto',cat:'food',x:284,y:384,addr:'Lungomare, 12, Lineri',km:'0,8',by:'massi_p',link:''}],
  favs:new Set([3]), filter:'all', filters:[{id:'f1',name:'Serata',cats:['movida','food']}],
  groups:[
    {id:'g1',name:'Mappa di fnc_fabio',icon:'map',col:['#ffb547','#ff7a2f'],personal:true,tappe:18,admin:true},
    {id:'g2',name:'WUP',icon:'users',col:['#ff8a4c','#ee5410'],tappe:12,members:['fnc_fabio','massi_p','dragos_m'],code:'FZP3MB',admin:true,vis:'priv'},
    {id:'g3',name:'Weekend a Siracusa',icon:'heart',col:['#3bb8e8','#3b82f6'],tappe:6,until:'2026-11-20',vis:'priv',members:['marta_r','fnc_fabio']}],
  group:'g2', blocked:[], notif:false, geo:false, lang:'it', nid:8, shown:false
};
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const phone=$('#phone');phone.addEventListener('scroll',()=>{phone.scrollTop=0;phone.scrollLeft=0});
const esc=s=>String(s??'').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const ev=id=>S.events.find(e=>e.id==id);
const grp=id=>S.groups.find(g=>g.id===(id||S.group));
const pad=n=>String(n).padStart(2,'0');
const iso=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const MESI=['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
const fmtD=s=>{const [,m,d]=s.split('-');return `${+d} ${MESI[m-1].slice(0,3).toLowerCase()}`};

/* ---------- componenti ---------- */
const btn=(v,label,icon,act,attr='')=>`<button class="btn ${v}" data-act="${act}" ${attr}>${icon?ic(icon):''}<span>${label}</span></button>`;
const field=(label,name,val,ph,icon,area)=>`<label class="field"><span>${label}</span><div class="inp">${icon?ic(icon):''}${area?`<textarea name="${name}" placeholder="${ph||''}">${esc(val)}</textarea>`:`<input name="${name}" value="${esc(val)}" placeholder="${ph||''}" autocomplete="off">`}</div></label>`;
const head=t=>`<div class="shead grab"><h2>${t}</h2><button class="xbtn" data-act="close" aria-label="Chiudi">${ic('close')}</button></div>`;
const catChips=(sel,multi,label='Categoria')=>`<div class="field"><span>${label}</span><div class="chips" ${multi?'data-multi="1"':''}>${Object.entries(CATS).map(([k,c])=>`<button class="chip ${sel.includes(k)?'on':''}" data-act="chip" data-cat="${k}" style="--c:${c.c}">${ic(k,16)}${c.n}</button>`).join('')}</div></div>`;
const fold=(k,inner,open)=>`<div class="fold ${open?'open':''}" data-fold="${k}"><div>${inner}</div></div>`;
const badge=(t,k)=>`<span class="badge ${k}">${t}</span>`;
const gicon=(g,cls='')=>`<span class="gicon ${cls}" style="background:linear-gradient(135deg,${g.col[0]},${g.col[1]})">${ic(g.icon,cls?20:24)}</span>`;
const avatar=(n,cls='')=>`<span class="avatar ${cls}">${esc(n[0].toUpperCase())}</span>`;
const confirmDef=o=>({handle:true,ok:o.ok,html:`<div class="cf"><span class="cftile">${ic(o.icon,28)}</span><h2>${o.title}</h2><p>${o.body}</p></div><div class="row g10">${btn('ghost grow1','Annulla',null,'close')}${btn('danger grow1',o.cta,o.icon,'ok')}</div>`});
const dlChip=d=>`<button class="achip ${d?'set':''}" data-act="deadline">${ic('clock',15)}<span>${d?'Scade il '+fmtD(d):'Imposta scadenza'}</span></button>`;

/* ---------- schede ---------- */
const SHEETS={
event:p=>{const e=ev(p.id),c=CATS[e.cat];return{modal:false,handle:true,
  extra:`<div class="abar open"><button class="rbtn r" data-act="open" data-s="report" aria-label="Segnala">${ic('flag')}</button><button class="rbtn r" data-act="open" data-s="block" aria-label="Blocca utente">${ic('ban')}</button><i></i><button class="rbtn r" data-act="open" data-s="del" aria-label="Elimina">${ic('trash')}</button><button class="rbtn" data-act="open" data-s="edit" aria-label="Modifica">${ic('pencil')}</button><button class="rbtn" data-act="open" data-s="copy" aria-label="Copia in un gruppo">${ic('copy')}</button></div>`,
  html:`<div class="row between grab"><span class="chip on" style="--c:${c.c}">${ic(e.cat,16)}${c.n}</span><div class="row g8"><button class="rbtn" data-act="open" data-s="share" aria-label="Condividi">${ic('share')}</button><button class="rbtn fav ${S.favs.has(e.id)?'on':''}" data-act="fav" aria-label="Salva nei preferiti">${ic('heart')}</button><button class="rbtn" data-act="abar" aria-label="Azioni evento">${ic('more')}</button></div></div>
  <div><h1>${esc(e.t)}</h1><p class="addr">${ic('pin',15)}<span>${esc(e.addr.split(',').slice(0,3).join(','))}</span><b>· ${e.km} km</b></p></div>
  ${e.link?`<button class="linkcard" data-act="soon" data-m="Apertura del link"><span class="row g12"><span class="thumb">${ic('popup',26)}</span><span class="ltx"><small>LINK</small><b>${esc(e.link)}</b><span>Foto e post importati dal link</span></span>${ic('chevR',20)}</span><span class="shots"><i></i><i></i><i></i></span></button>`:''}
  <div class="row g8 wrap"><span class="pill">${ic('users',14)}${grp().personal?'Mappa personale':'Gruppo '+esc(grp().name)}</span><span class="pill">${ic('user',14)}da ${esc(e.by)}</span>${e.deadline?`<span class="pill">${ic('clock',14)}fino al ${fmtD(e.deadline)}</span>`:''}</div>
  ${btn('pri full','GO','navigate','soon','data-m="Navigazione"')}`}},
edit:p=>{const e=ev(p.id);return{init:el=>el._dl=e.deadline||null,html:head('Modifica evento')+
  `<div class="addrbox"><span class="t">${ic('pin',20)}</span><div><small>INDIRIZZO</small><p>${esc(e.addr)}</p></div></div>`+
  field('Titolo','title',e.t)+catChips([e.cat])+
  `<div class="row g8 wrap"><button class="achip ${e.note?'set':''}" data-act="fold" data-k="note">${ic('note',15)}<span>Aggiungi note</span></button>${dlChip(e.deadline)}</div>`+
  fold('note',field('Note','note',e.note,'Orari, consigli, cosa portare…',null,true),!!e.note)+
  field('Link Instagram / Sito (opzionale)','link',e.link,'https://','link')+
  `<div class="row g10">${btn('ghost','Annulla',null,'close')}${btn('pri grow1','Salva modifiche','check','saveEdit')}</div>`}},
add:()=>({init:el=>el._dl=null,html:head('Aggiungi evento')+field('Titolo','title','','Mercatino vintage')+catChips(['popup'])+
  `<div>${field('Indirizzo','addr','','Cerca via, piazza, città…','search')}<p class="hint" style="margin-top:8px">${ic('info',14)}L’indirizzo verrà convertito in coordinate tramite Mapbox.</p></div>
  <div class="row g8 wrap"><button class="achip" data-act="fold" data-k="note">${ic('note',15)}<span>Aggiungi note</span></button><button class="achip" data-act="fold" data-k="link">${ic('link',15)}<span>Aggiungi link</span></button>${dlChip(null)}</div>`+
  fold('note',field('Note','note','','Orari, consigli, cosa portare…',null,true))+fold('link',field('Link Instagram / Sito','link','','https://','link'))+
  btn('pri full','Crea evento','plus','create')}),
copy:p=>{const e=ev(p.id);return{nopad:true,html:`<div class="chead grab"><div class="row between"><small>COPIA EVENTO</small><button class="xbtn" data-act="close" aria-label="Chiudi">${ic('close')}</button></div><h1>${esc(e.t)}</h1><p>${esc(e.addr)}</p><div class="note">${ic('info',16)}<span>Nasce una copia indipendente: modifiche e scadenze restano separate.</span></div></div>
  <div class="cbody"><div class="lbl" style="margin:0 0 2px">DOVE LO COPIAMO?</div>${S.groups.filter(g=>g.id!==S.group).map((g,i)=>`<button class="opt ${i?'':'on'}" data-act="opt" data-id="${g.id}">${gicon(g,'sm')}<span class="tx"><b>${esc(g.name)}</b>${g.personal?badge('MAPPA PERSONALE','per'):badge('GRUPPO · '+(g.members?.length||1)+' MEMBRI','neu')}</span><span class="radio">${ic('check',14)}</span></button>`).join('')||'<p class="lead">Non hai altri gruppi in cui copiarlo.</p>'}<div style="height:4px"></div>${btn('pri full','Copia qui','copy','copyHere')}</div>`}},
share:p=>{const e=ev(p.id);return{html:head('Condividi evento')+
  `<div class="addrbox"><span class="t">${ic('pin',20)}</span><div><p>${esc(e.t)}</p><span class="lead" style="font-size:12px">${esc(e.addr.split(',').slice(0,3).join(','))}</span></div></div>
  <div class="lbl" style="margin:0">CONDIVIDI CON</div>
  <div class="targets">${[['mail','Messaggi'],['users','Gruppo'],['link','Copia link'],['more','Altro']].map(([i,l])=>`<button data-act="shareTo" data-l="${l}"><span>${ic(i,22)}</span>${l}</button>`).join('')}</div>
  <div class="inp">${ic('link')}<input readonly value="map-a.vercel.app/e/${esc(e.t.toLowerCase().replace(/[^a-z0-9]+/g,'-'))}"></div>`+btn('pri full','Copia link','copy','copyLink')}},
report:p=>({html:head('Segnala evento')+`<p class="lead">Perché vuoi segnalare “${esc(ev(p.id).t)}”?</p><div style="display:grid;gap:8px">${['Contenuto inappropriato','Posizione errata','Evento falso o spam','Altro'].map(m=>`<button class="opt slim" data-act="opt"><span>${m}</span><span class="radio">${ic('check',14)}</span></button>`).join('')}</div>`+
  field('Dettagli (facoltativo)','det','','Aggiungi qualche dettaglio…')+`<div class="row g10">${btn('ghost','Annulla',null,'close')}${btn('pri grow1','Invia segnalazione','flag','sendReport')}</div>`}),
block:p=>{const e=ev(p.id);return confirmDef({icon:'ban',title:`Bloccare ${esc(e.by)}?`,body:'Non vedrai più i suoi eventi sulla mappa. Puoi sbloccarlo quando vuoi da Impostazioni › Utenti bloccati.',cta:'Blocca utente',ok(){S.blocked.push(e.by);closeAll();applyFilter();refreshPages();toast(`${e.by} è stato bloccato`)}})},
del:p=>{const e=ev(p.id);return confirmDef({icon:'trash',title:'Eliminare questo evento?',body:`“${esc(e.t)}” verrà rimosso dalla mappa${grp().personal?'':' del gruppo '+esc(grp().name)}. L’azione non si può annullare.`,cta:'Elimina',ok(){closeAll();removeEvent(e.id);toast('Evento eliminato')}})},
deadline:p=>({html:head(p.title||'Imposta scadenza')+`<div class="cal"></div><p class="hint">${ic('info',14)}${p.hint||'Dopo la scadenza l’evento scompare dalla mappa.'}</p><div class="row g10">${btn('ghost','Rimuovi',null,'dlClear')}${btn('pri grow1','Conferma scadenza','check','dlOk')}</div>`,
  init(el){const d=p.value?new Date(p.value+'T12:00'):new Date();el._v={y:d.getFullYear(),m:d.getMonth(),sel:p.value||null};drawCal(el)}}),
filter:p=>{const f=S.filters.find(x=>x.id===p.fid);return{html:head(f?'Modifica filtro':'Crea filtro')+field('Nome del filtro','name',f?.name,'Es. Serata, Weekend, Relax…')+catChips(f?f.cats:[],true,'Categorie incluse')+
  (f?`<div class="row g10">${btn('danger','Elimina','trash','open','data-s="delFilter"')}${btn('pri grow1','Salva modifiche','check','saveFilter')}</div>`:`<p class="hint">${ic('info',14)}Il filtro comparirà nel menu sopra il pulsante filtro della mappa.</p>${btn('pri full','Salva filtro','check','saveFilter')}`)}},
delFilter:p=>{const f=S.filters.find(x=>x.id===p.fid);return confirmDef({icon:'trash',title:'Eliminare il filtro?',body:`“${esc(f.name)}” verrà rimosso dal menu filtro. Gli eventi sulla mappa non vengono cancellati.`,cta:'Elimina filtro',ok(){S.filters=S.filters.filter(x=>x!==f);if(S.filter===f.id)S.filter='all';closeAll();applyFilter();renderMenu();toast('Filtro eliminato')}})},
groupDetail:p=>{const g=grp(p.gid);return{html:`<div class="shead grab"><div class="row g10" style="min-width:0">${gicon(g,'sm')}<h2 style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(g.name)}</h2>${badge('ATTIVO','ok')}</div><button class="xbtn" data-act="close" aria-label="Chiudi">${ic('close')}</button></div>
  ${g.personal?'':`<div class="row g8 wrap"><span class="pill">${ic(g.vis==='pub'?'globe':'lock',14)}${g.vis==='pub'?'Pubblico':'Privato'}</span>${g.until?`<span class="pill">${ic('clock',14)}Accessi fino al ${fmtD(g.until)}</span>`:''}</div>`}
  ${g.code?`<div class="codebox"><small>CODICE INVITO</small><div class="row between"><b class="code">${g.code}</b><button class="btn dark sm" data-act="copyCode">${ic('copy',16)}Copia</button></div><div class="linkrow">${ic('link',14)}<span>map-a.vercel.app/join?code=<span class="c2">${g.code}</span></span></div><p>${g.vis==='pub'?'Il gruppo è pubblico: chiunque può unirsi con questo codice o dal link.':'Chi usa questo codice entra solo dopo la tua approvazione.'}</p><button class="btn ghost sm" data-act="regen">${ic('refresh',16)}Rigenera codice</button></div>
  ${g.vis==='pub'?'':`<div class="lbl" style="margin:0"><span>RICHIESTE IN ATTESA</span><span>0</span></div><div class="softrow">${ic('check',16)}Nessuna richiesta in attesa.</div>`}`:''}
  <div class="lbl" style="margin:0"><span>MEMBRI</span><span>${(g.members||['fnc_fabio']).length}</span></div>
  <div style="display:grid;gap:10px">${(g.members||['fnc_fabio']).map(m=>`<div class="member">${avatar(m)}${esc(m)}${m==='fnc_fabio'&&g.admin?`<span class="badge per">Admin</span>`:''}</div>`).join('')}</div>
  ${g.personal?'':btn('danger full',g.admin?'Elimina gruppo':'Esci dal gruppo',g.admin?'trash':'logout','open','data-s="delGroup"')}`}},
delGroup:p=>{const g=grp(p.gid);return confirmDef({icon:g.admin?'trash':'logout',title:g.admin?'Eliminare il gruppo?':'Uscire dal gruppo?',body:`“${esc(g.name)}” e le sue tappe non saranno più sulla tua mappa.`,cta:g.admin?'Elimina gruppo':'Esci',ok(){S.groups=S.groups.filter(x=>x!==g);if(S.group===g.id)S.group='g1';closeAll();updateSw();refreshPages();toast(g.admin?'Gruppo eliminato':'Sei uscito dal gruppo')}})},
join:()=>({html:head('Unisciti a un gruppo')+`<p class="lead">Inserisci il codice di 6 caratteri che ti ha condiviso l’admin del gruppo.</p><div class="codein">${'<input class="code-in" maxlength="1" autocomplete="off" aria-label="Carattere del codice">'.repeat(6)}</div><p class="hint">${ic('info',14)}Puoi anche aprire direttamente il link di invito.</p>`+btn('pri full','Unisciti','users','join')}),
newGroup:()=>({init:el=>{el._type='amici';el._vis='priv';el._until=null},html:head('Nuovo gruppo')+`<div class="field"><span>Icona del gruppo</span><div class="picks">${[['users','#ff6a1f'],['heart','#ec4899'],['food','#f5a524'],['esplora','#10b3a3'],['movida','#8b5cf6']].map(([i,c],n)=>`<button class="gpick ${n?'':'on'}" data-act="gpick" data-i="${i}" data-c="${c}" style="--c:${c}" aria-label="Icona ${i}">${ic(i,20)}</button>`).join('')}</div></div>`+
  field('Nome del gruppo','name','','Es. Amici di Roma, Famiglia…')+field('Descrizione (facoltativa)','desc','','Descrivi il gruppo…',null,true)+
  `<div class="field"><span>Tipo di gruppo</span><div class="tcards"><button class="opt on" data-act="gtype" data-t="amici">${ic('users',20)}<b>Amici</b><small>Tutti possono creare e gestire le tappe.</small><span class="radio">${ic('check',14)}</span></button><button class="opt" data-act="gtype" data-t="community">${ic('globe',20)}<b>Community</b><small>Ideale per gruppi pubblici o strutture.</small><span class="radio">${ic('check',14)}</span></button></div></div>
  <div class="field"><span>Visibilità</span><div class="seg vis"><button data-act="vis" data-v="priv">${ic('lock',15)}Privato</button><button data-act="vis" data-v="pub">${ic('globe',15)}Pubblico</button></div><p class="hint" data-vishint style="margin-top:2px">${ic('lock',14)}Solo chi ha il codice invito può entrare, dopo la tua approvazione.</p></div>
  <div class="togrow"><span class="xbtn" style="background:var(--white)">${ic('clock')}</span><div class="tx"><b>Accesso a tempo</b><small>Utile per hotel e B&amp;B: i membri escono a scadenza</small></div><button class="switch" data-act="switch" aria-label="Accesso a tempo" aria-pressed="false"></button></div>`+
  fold('until',`<div class="field"><span>Quando scade l’accesso?</span><div class="chips">${[['wk','Fine settimana'],['7','Tra 1 settimana'],['14','Tra 2 settimane']].map(([d,l])=>`<button class="chip uchip" data-act="untilQuick" data-d="${d}" style="--c:var(--or)">${l}</button>`).join('')}<button class="chip uchip" data-act="untilCustom" style="--c:var(--or)">${ic('calendar',15)}<span>Scegli data</span></button></div></div><p class="hint" data-untilsum>${ic('info',14)}Scegli quando scade l’accesso dei membri.</p>`)+
  `<div class="stick">`+btn('pri full','Crea gruppo','plus','newGroupOk')+`</div>`}),
forgot:()=>({html:head('Password dimenticata?')+`<p class="lead">Inserisci l’email del tuo account: ti mandiamo un link per scegliere una nuova password.</p>`+field('Email','mail','','nome@email.com','mail')+btn('pri full','Invia link di reset','mail','sendReset')}),
delAccount:()=>confirmDef({icon:'trash',title:'Eliminare l’account?',body:'Il tuo account e tutti i dati associati verranno eliminati in modo permanente.',cta:'Elimina account',ok(){closeAll();A.logout()}}),
search:()=>({html:head('Cerca')+`<div class="inp">${ic('search')}<input data-search placeholder="Cerca eventi, luoghi…" autocomplete="off"></div><div class="reslist"></div>`,init:el=>drawResults(el,'')})
};

/* ---------- motore schede ---------- */
const stack=[];let SC=1;
function openSheet(name,p={}){
  const def=SHEETS[name](p),el=document.createElement('section');
  el.className='sheet fresh';el._p=p;el._name=name;el._modal=def.modal!==false;el._ok=def.ok;
  el.innerHTML=(def.handle?'<div class="handle grab"><i></i></div>':'')+`<div class="sbody ${def.nopad?'nopad':''}">${def.html}</div>`+(def.extra||'');
  stack.at(-1)?.classList.add('under');
  $('#sheets').append(el);stack.push(el);def.init?.(el);
  el.offsetHeight;el.classList.add('in');setTimeout(()=>el.classList.remove('fresh'),900);sync();
}
function closeSheet(){
  const el=stack.pop();if(!el)return;
  el.classList.remove('in');el.style.transform='';setTimeout(()=>el.remove(),650);
  stack.at(-1)?.classList.remove('under');sync();
}
function closeAll(){while(stack.length)closeSheet()}
function refreshSheet(el){if(!el)return;const d=SHEETS[el._name](el._p);$('.sbody',el).innerHTML=d.html}
function sync(){
  const top=stack.at(-1);
  phone.classList.toggle('modal',!!top&&top._modal);
  const es=stack.find(s=>s._name==='event');
  $$('.mk').forEach(m=>m.classList.toggle('sel',!!es&&m.dataset.id==es._p.id));
  const pan=$('#pan');
  if(es&&ev(es._p.id)){const e=ev(es._p.id),W=phone.clientWidth,H=phone.clientHeight,my=e.y/915*H,mx=e.x/412*W;
    const ty=Math.min(Math.max(H-es.offsetHeight-90,150),H*.42);
    const dy=Math.max(-.28*H,Math.min(.28*H,ty-my)),dx=Math.max(-.13*W,Math.min(.13*W,W/2-mx));
    pan.style.transform=`translate(${dx}px,${dy}px)`}
  else pan.style.transform='';
}
let drag=null;
document.addEventListener('pointerdown',e=>{
  const g=e.target.closest('.grab');if(!g||e.target.closest('button,input,textarea'))return;
  const el=g.closest('.sheet');if(el!==stack.at(-1))return;
  drag={el,y:e.clientY,t:performance.now(),dy:0};el.style.transition='none';
});
document.addEventListener('pointermove',e=>{if(!drag)return;let dy=(e.clientY-drag.y)/SC;if(dy<0)dy/=5;drag.dy=dy;drag.el.style.transform=`translateY(${dy}px)`});
const endDrag=()=>{if(!drag)return;const{el,dy,t}=drag;drag=null;el.style.transition='';const v=dy/(performance.now()-t);
  if(dy>120||(dy>36&&v>.55)){el.style.transform='';closeSheet()}else el.style.transform=''};
document.addEventListener('pointerup',endDrag);document.addEventListener('pointercancel',endDrag);

/* ---------- pagine ---------- */
const pstack=[];
const PAGES={
groups:()=>`<header class="phead"><button class="bbtn" data-act="back" aria-label="Indietro">${ic('back')}</button><div><h1>I miei gruppi</h1><p>Gestisci le mappe condivise</p></div></header>
  <div class="pscroll">
  <div class="card ucard">${avatar('fnc_fabio')}<div class="tx"><b>fnc_fabio</b><small>Il tuo profilo</small></div><button class="mini" data-act="page" data-p="settings">${ic('settings',15)}Impostazioni</button><button class="mini red" data-act="logout" aria-label="Esci">${ic('logout',16)}</button></div>
  <button class="card gcard" data-act="page" data-p="favs"><span class="gicon" style="background:var(--tint);color:var(--or)">${ic('heart',24)}</span><span class="gtx"><b>Preferiti</b><small>${S.favs.size} ${S.favs.size===1?'evento salvato':'eventi salvati'}</small></span>${ic('chevR',20)}</button>
  <div class="lbl">LE TUE MAPPE</div>
  ${S.groups.map(g=>{const on=g.id===S.group;return `<button class="card gcard ${on?'on':''}" data-act="group" data-id="${g.id}">${gicon(g)}<span class="gtx"><b>${esc(g.name)}${g.admin?`<i class="crown">${ic('crown',14)}</i>`:''}</b><span class="row g8 wrap">${on?badge('ATTIVO','ok'):g.personal?badge('PERSONALE','per'):''}${g.personal?'':badge(g.vis==='pub'?'PUBBLICO':'PRIVATO','neu')}${g.until?badge('FINO AL '+fmtD(g.until).toUpperCase(),'neu'):''}<small>${g.tappe} tappe${g.members?' · '+g.members.length+' membri':''}</small></span>${on&&g.code?`<span class="row g8 codeline">${ic('link',13)}<em>${g.code}</em><span class="avs">${g.members.map(m=>avatar(m,'s')).join('')}</span></span>`:''}</span>${ic('chevR',20)}</button>`}).join('')}
  <button class="dashed" data-act="open" data-s="join">${ic('plus')}Unisciti a un gruppo esistente</button>
  </div><button class="fab pagefab" data-act="open" data-s="newGroup" aria-label="Crea gruppo">${ic('plus',28)}</button>`,
settings:()=>{const perm=(k,icon,t,d,w,cta)=>`<div class="card scard"><span class="t">${ic(icon,20)}</span><div class="tx"><h2>${t}${S[k]?badge('ATTIVO','ok'):badge('NEGATO','no')}</h2><p>${d}</p>${S[k]?'':`<div class="warn">${ic('info',15)}<span>${w}</span></div><button class="btn sec sm" data-act="perm" data-k="${k}">${ic(icon,16)}${cta}</button>`}</div></div>`;
  return `<header class="phead"><button class="bbtn" data-act="back" aria-label="Indietro">${ic('back')}</button><div><h1>Impostazioni</h1><p>Permessi e preferenze</p></div></header><div class="pscroll">
  <div class="lbl">PREFERENZE APP</div>
  ${perm('notif','bell','Notifiche','Promemoria prima della scadenza degli eventi.','Hai bloccato le notifiche. Sbloccale dalle impostazioni del browser o del telefono.','Abilita notifiche')}
  ${perm('geo','locate','Posizione','Centra la mappa sulla tua posizione.','Hai bloccato la posizione. Senza permesso la mappa non può mostrarti gli eventi vicini.','Abilita posizione')}
  <div class="card scard"><span class="t" style="background:#e0f5f1;color:#10b3a3">${ic('globe',20)}</span><div class="tx"><h2>Lingua</h2><p>Scegli la lingua dell’applicazione.</p><div class="seg ${S.lang==='en'?'b':''}"><button data-act="lang" data-l="it">Italiano</button><button data-act="lang" data-l="en">English</button></div></div></div>
  <div class="lbl">SICUREZZA E PRIVACY</div>
  <div class="card scard"><span class="t" style="background:#e8f1fd;color:#3b82f6">${ic('file',20)}</span><div class="tx"><h2>Documenti legali</h2><p>Informativa sulla privacy e termini di utilizzo.</p><button class="row-btn" data-act="soon" data-m="Informativa sulla privacy">Informativa sulla privacy${ic('chevR',16)}</button><button class="row-btn" data-act="soon" data-m="Termini di utilizzo">Termini di utilizzo${ic('chevR',16)}</button></div></div>
  <div class="card scard"><span class="t" style="background:#efe9ff;color:#8b5cf6">${ic('ban',20)}</span><div class="tx"><h2>Utenti bloccati</h2><p>${S.blocked.length?`Hai bloccato ${S.blocked.map(esc).join(', ')}. Vuoi sbloccarli tutti?`:'Non hai bloccato nessun utente.'}</p>${S.blocked.length?`<button class="btn ghost sm" data-act="unblock">Svuota lista bloccati</button>`:''}</div></div>
  <div class="lbl">AVANZATE</div>
  <div class="card scard"><span class="t" style="background:var(--redp);color:var(--red)">${ic('user',20)}</span><div class="tx"><h2>Account</h2><p>Elimina permanentemente il tuo account e tutti i dati associati.</p><button class="btn danger sm" data-act="open" data-s="delAccount">${ic('trash',16)}Elimina account</button></div></div></div>`},
favs:()=>{const list=S.events.filter(e=>S.favs.has(e.id));return `<header class="phead"><button class="bbtn" data-act="back" aria-label="Indietro">${ic('back')}</button><div><h1>Preferiti</h1><p>Gli eventi che hai salvato</p></div></header><div class="pscroll">
  ${list.length?`<div class="lbl">EVENTI SALVATI</div>`+list.map(e=>`<div class="card fcard" style="--c:${CATS[e.cat].c}"><button class="row g12 grow1" style="min-width:0" data-act="goEvent" data-id="${e.id}"><span class="t">${ic(e.cat,24)}</span><span class="tx"><b>${esc(e.t)}</b><small>${esc(e.addr.split(',').slice(0,2).join(','))} · ${e.km} km</small><em>${CATS[e.cat].n.toUpperCase()}</em></span></button><button class="rbtn fav on" data-act="unfav" data-id="${e.id}" aria-label="Rimuovi dai preferiti">${ic('heart')}</button></div>`).join(''):`<p class="empty">Nessun evento salvato.<br>Tocca il cuore nella scheda di un evento per ritrovarlo qui.</p>`}</div>`}
};
function pushPage(name){
  const el=document.createElement('div');el.className='page fresh';el._name=name;el.innerHTML=PAGES[name]();
  (pstack.at(-1)||$('#home')).classList.add('under');
  $('#pages').append(el);pstack.push(el);el.offsetHeight;el.classList.add('in');setTimeout(()=>el.classList.remove('fresh'),900);
}
function popPage(){const el=pstack.pop();if(!el)return;el.classList.remove('in');setTimeout(()=>el.remove(),600);(pstack.at(-1)||$('#home')).classList.remove('under')}
function popAll(){while(pstack.length)popPage()}
function refreshPages(){pstack.forEach(el=>{const sc=$('.pscroll',el)?.scrollTop||0;el.innerHTML=PAGES[el._name]();const n=$('.pscroll',el);if(n)n.scrollTop=sc})}

/* ---------- mappa ---------- */
const visible=e=>!S.blocked.includes(e.by)&&(S.filter==='all'||e.cat===S.filter||S.filters.find(f=>f.id===S.filter)?.cats.includes(e.cat));
function mkHtml(e){return `<svg class="pin" viewBox="0 0 44 54"><path d="M22 51.500C22 51.500 3.500 35 3.500 21.500a18.500 18.500 0 0 1 37 0C40.500 35 22 51.500 22 51.500z" fill="${CATS[e.cat].c}" stroke="#fff" stroke-width="2.500"/></svg>${ic(e.cat,19)}`}
function addMarker(e){const b=document.createElement('button');b.className='mk off';b.dataset.act='marker';b.dataset.id=e.id;b.setAttribute('aria-label',e.t);b.style.left=e.x/4.12+'%';b.style.top=e.y/9.15+'%';b.innerHTML=mkHtml(e);$('#pan').append(b);return b}
function applyFilter(){$$('.mk').forEach(m=>{const e=ev(m.dataset.id);m.classList.toggle('off',!S.shown||!e||!visible(e))});$('#fil').classList.toggle('on',S.filter!=='all')}
function removeEvent(id){const m=$(`.mk[data-id="${id}"]`);S.events=S.events.filter(e=>e.id!=id);S.favs.delete(+id);if(m){m.classList.add('off');setTimeout(()=>m.remove(),500)}refreshPages()}
function updateSw(){$('#sw').innerHTML=`<span class="av">${ic(grp().icon,20)}</span><span><small>GRUPPO ATTIVO</small><b>${esc(grp().name)}</b></span>${ic('chevD',16)}`}
function renderMenu(){
  const row=(id,icon,label,c)=>`<button class="voce ${S.filter===id?'on':''}" data-act="setFilter" data-f="${id}" style="--c:${c}"><span class="t">${ic(icon,17)}</span>${esc(label)}<span class="ck">${ic('check',16)}</span></button>`;
  $('#menu').innerHTML=`<header><span>FILTRA PER</span><button data-act="editFilters">${ic('pencil',13)}Modifica</button></header>`+row('all','layers','Tutti','#ff6a1f')+Object.entries(CATS).map(([k,c])=>row(k,k,c.n,c.c)).join('')+S.filters.map(f=>row(f.id,'sliders',f.name,'#1e1510')).join('')+`<hr><button class="voce" data-act="newFilter" style="--c:#ee5410;color:var(--or2)"><span class="t">${ic('plus',17)}</span>Crea filtro</button>`;
}
function openEvent(id){const e=ev(id);if(!e)return;if(!visible(e)){S.filter='all';applyFilter();renderMenu()}closeAll();openSheet('event',{id:e.id})}
function drawCal(el,dir=0){
  const v=el._v,first=(new Date(v.y,v.m,1).getDay()+6)%7,n=new Date(v.y,v.m+1,0).getDate(),td=iso(new Date());let cells='<span></span>'.repeat(first);
  for(let d=1;d<=n;d++){const s=`${v.y}-${pad(v.m+1)}-${pad(d)}`;cells+=`<button class="day ${s===v.sel?'sel':''} ${s===td?'today':''}" ${s<td?'disabled':''} data-act="day" data-d="${s}">${d}</button>`}
  $('.cal',el).innerHTML=`<div class="row between"><button class="xbtn" data-act="calNav" data-d="-1" aria-label="Mese precedente">${ic('back')}</button><b class="month">${MESI[v.m]} ${v.y}</b><button class="xbtn" data-act="calNav" data-d="1" aria-label="Mese successivo">${ic('chevR')}</button></div><div class="wd">${[...'LMMGVSD'].map(x=>`<span>${x}</span>`).join('')}</div><div class="days ${dir>0?'sl':dir<0?'sr':''}">${cells}</div>`;
}
function drawResults(el,q){const list=S.events.filter(e=>visibleAny(e)&&(e.t+' '+e.addr+' '+CATS[e.cat].n).toLowerCase().includes(q.toLowerCase()));
  $('.reslist',el).innerHTML=list.map(e=>`<button class="res" data-act="goEvent" data-id="${e.id}" style="--c:${CATS[e.cat].c}"><span class="t">${ic(e.cat,20)}</span><span><b>${esc(e.t)}</b><small>${esc(e.addr.split(',').slice(0,2).join(','))} · ${e.km} km</small></span></button>`).join('')||`<p class="empty" style="padding:40px 10px">Nessun risultato per “${esc(q)}”.</p>`}
const visibleAny=e=>!S.blocked.includes(e.by);
let tt;function toast(m){const el=$('#toast');el.textContent=m;el.classList.add('in');clearTimeout(tt);tt=setTimeout(()=>el.classList.remove('in'),2400)}
const shake=el=>{el.classList.remove('shake');el.offsetHeight;el.classList.add('shake');$('input,textarea',el)?.focus({preventScroll:true})};
const ctx=t=>t.closest('.sheet')?._p||stack.at(-1)?._p||{};
const val=(sh,n)=>$(`[name="${n}"]`,sh)?.value.trim()||'';

/* ---------- nuovo gruppo: visibilità e scadenza ---------- */
function setVis(sh){
  const comm=sh._type==='community',v=comm?'pub':sh._vis,seg=$('.seg.vis',sh);
  seg.classList.toggle('b',v==='pub');seg.classList.toggle('locked',comm);
  $('[data-vishint]',sh).innerHTML=comm?`${ic('lock',14)}Le community sono sempre pubbliche.`:v==='pub'?`${ic('globe',14)}Il gruppo è visibile a tutti e chiunque può unirsi.`:`${ic('lock',14)}Solo chi ha il codice invito può entrare, dopo la tua approvazione.`;
}
function setUntil(sh,d,chip){
  sh._until=d;const sb=$('.sbody',sh);setTimeout(()=>sb.scrollTo({top:sb.scrollHeight,behavior:'smooth'}),80);
  $$('.uchip',sh).forEach(c=>c.classList.toggle('on',!!d&&c===chip));
  $('[data-act="untilCustom"] span',sh).textContent=d&&chip&&chip.dataset.act==='untilCustom'?fmtD(d):'Scegli data';
  $('[data-untilsum]',sh).innerHTML=d?`${ic('check',14)}Gli accessi scadono il ${fmtD(d)}: i membri escono in automatico.`:`${ic('info',14)}Scegli quando scade l’accesso dei membri.`;
}

/* ---------- azioni ---------- */
const A={
login(){phone.classList.add('authed');document.activeElement?.blur();setTimeout(()=>{S.shown=true;$$('.mk').forEach((m,i)=>setTimeout(()=>{const e=ev(m.dataset.id);if(e&&visible(e))m.classList.remove('off')},i*70))},380)},
logout(){closeAll();phone.classList.remove('authed');setTimeout(()=>{popAll();S.shown=false;applyFilter()},750)},
tab(t){const up=t.dataset.t==='up';$('#ltabs').classList.toggle('b',up);$('#lname').classList.toggle('open',up);$('#lcta').textContent=up?'Crea account':'Log in';$('#llink').textContent=up?'Hai già un account? Accedi':'Forgot Password?'},
forgotOrLogin(){$('#ltabs').classList.contains('b')?A.tab({dataset:{t:'in'}}):openSheet('forgot')},
sendReset(t){const sh=t.closest('.sheet');if(!val(sh,'mail').includes('@'))return shake($('.inp',sh));closeSheet();toast('Link inviato. Controlla la tua email.')},
close(){closeSheet()},
scrim(){closeSheet()},
open(t){const s=t.dataset.s,p={...ctx(t)};$('#menu').classList.remove('in');openSheet(s,p)},
page(t){$('#menu').classList.remove('in');closeAll();pushPage(t.dataset.p)},
back(){popPage()},
mapTap(){$('#menu').classList.remove('in');if(stack.at(-1)?._name==='event')closeAll()},
marker(t){$('#menu').classList.remove('in');if(stack.at(-1)?._p.id==t.dataset.id)return;openEvent(t.dataset.id)},
locate(){closeAll();const m=$('#me');m.classList.remove('ping');m.offsetHeight;m.classList.add('ping')},
menu(){$('#menu').classList.toggle('in')},
setFilter(t){S.filter=t.dataset.f;renderMenu();applyFilter();setTimeout(()=>$('#menu').classList.remove('in'),220)},
editFilters(){const f=S.filters.find(x=>x.id===S.filter)||S.filters[0];if(!f)return toast('Non hai ancora filtri personalizzati');$('#menu').classList.remove('in');openSheet('filter',{fid:f.id})},
newFilter(){$('#menu').classList.remove('in');openSheet('filter',{})},
saveFilter(t){const sh=t.closest('.sheet'),name=val(sh,'name'),cats=$$('.chip.on',sh).map(c=>c.dataset.cat);if(!name)return shake($('.inp',sh));if(!cats.length)return shake($('.chips',sh));
  let f=S.filters.find(x=>x.id===sh._p.fid);if(f){f.name=name;f.cats=cats}else{f={id:'f'+S.nid++,name,cats};S.filters.push(f)}S.filter=f.id;closeSheet();renderMenu();applyFilter();toast(`Filtro “${name}” attivo`)},
chip(t){const b=t.closest('.chips');if(b.dataset.multi)t.classList.toggle('on');else $$('.chip',b).forEach(c=>c.classList.toggle('on',c===t))},
opt(t){$$('.opt',t.parentElement).forEach(o=>o.classList.toggle('on',o===t))},
fold(t){const f=$(`[data-fold="${t.dataset.k}"]`,t.closest('.sheet'));const o=f.classList.toggle('open');t.classList.toggle('set',o);if(o)setTimeout(()=>$('input,textarea',f).focus({preventScroll:true}),300)},
deadline(t){const sh=t.closest('.sheet');openSheet('deadline',{value:sh._dl,onSet:d=>{sh._dl=d;t.classList.toggle('set',!!d);$('span',t).textContent=d?'Scade il '+fmtD(d):'Imposta scadenza'}})},
calNav(t){const sh=t.closest('.sheet'),v=sh._v,d=+t.dataset.d;v.m+=d;if(v.m<0){v.m=11;v.y--}if(v.m>11){v.m=0;v.y++}drawCal(sh,d)},
day(t){const sh=t.closest('.sheet');sh._v.sel=t.dataset.d;$$('.day',sh).forEach(x=>x.classList.toggle('sel',x===t))},
dlOk(t){const sh=t.closest('.sheet');if(!sh._v.sel)return shake($('.days',sh));sh._p.onSet(sh._v.sel);closeSheet()},
dlClear(t){t.closest('.sheet')._p.onSet(null);closeSheet()},
saveEdit(t){const sh=t.closest('.sheet'),e=ev(sh._p.id),title=val(sh,'title');if(!title)return shake($('.inp',sh));
  e.t=title;e.cat=$('.chip.on',sh).dataset.cat;e.note=val(sh,'note');e.link=val(sh,'link').replace(/^https?:\/\/(www\.)?/,'');e.deadline=sh._dl;
  const m=$(`.mk[data-id="${e.id}"]`);if(m)m.innerHTML=mkHtml(e);closeSheet();refreshSheet(stack.at(-1));applyFilter();refreshPages();toast('Modifiche salvate')},
create(t){const sh=t.closest('.sheet'),title=val(sh,'title');if(!title)return shake($('.inp',sh));
  const e={id:S.nid++,t:title,cat:$('.chip.on',sh).dataset.cat,x:70+Math.random()*190,y:230+Math.random()*420,addr:val(sh,'addr')||'Lineri, Misterbianco CT',km:(0.5+Math.random()*2).toFixed(1).replace('.',','),by:'fnc_fabio',note:val(sh,'note'),link:val(sh,'link').replace(/^https?:\/\/(www\.)?/,''),deadline:sh._dl};
  S.events.push(e);if(!visible(e)){S.filter='all';renderMenu()}closeAll();const m=addMarker(e);applyFilter();m.classList.add('off');setTimeout(()=>m.classList.remove('off'),350);toast('Evento creato')},
copyHere(t){const o=$('.opt.on',t.closest('.sheet'));if(!o)return closeSheet();closeSheet();toast(`Copiato in “${grp(o.dataset.id).name}”`)},
shareTo(t){if(t.dataset.l==='Copia link')return A.copyLink(t);closeSheet();toast(`Condiviso con ${t.dataset.l}`)},
copyLink(t){const v=$('input[readonly]',t.closest('.sheet')).value;try{navigator.clipboard.writeText(v).catch(()=>{})}catch(e){}closeSheet();toast('Link copiato')},
sendReport(t){const sh=t.closest('.sheet');if(!$('.opt.on',sh))return shake($('.opt',sh).parentElement);closeSheet();toast('Segnalazione inviata. Grazie!')},
ok(t){t.closest('.sheet')._ok()},
fav(t){const id=ctx(t).id,on=!S.favs.has(id);on?S.favs.add(id):S.favs.delete(id);t.classList.toggle('on',on);t.classList.remove('pop');t.offsetHeight;t.classList.add('pop');toast(on?'Salvato nei preferiti':'Rimosso dai preferiti')},
unfav(t){S.favs.delete(+t.dataset.id);refreshPages()},
abar(t){$('.abar',t.closest('.sheet')).classList.toggle('open')},
goEvent(t){const id=t.dataset.id;closeAll();popAll();setTimeout(()=>openEvent(id),pstack.length?0:260)},
group(t){const id=t.dataset.id;if(id===S.group)return openSheet('groupDetail',{gid:id});S.group=id;updateSw();popAll();toast(`Mappa attiva: ${grp().name}`)},
copyCode(t){const g=grp(ctx(t).gid);try{navigator.clipboard.writeText(g.code).catch(()=>{})}catch(e){}toast('Codice copiato')},
regen(t){const sh=t.closest('.sheet'),g=grp(sh._p.gid);g.code=Array.from({length:6},()=>'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[Math.random()*32|0]).join('');const c=$('.code',sh);c.textContent=g.code;$('.c2',sh).textContent=g.code;c.classList.remove('flip');c.offsetHeight;c.classList.add('flip');refreshPages()},
join(t){const sh=t.closest('.sheet');if($$('.code-in',sh).map(i=>i.value).join('').length<6)return shake($('.codein',sh));closeSheet();toast('Richiesta inviata: entrerai dopo l’approvazione dell’admin')},
gpick(t){$$('.gpick',t.parentElement).forEach(g=>g.classList.toggle('on',g===t))},
gtype(t){const sh=t.closest('.sheet');$$('.tcards .opt',sh).forEach(o=>o.classList.toggle('on',o===t));sh._type=t.dataset.t;setVis(sh)},
vis(t){const sh=t.closest('.sheet');if(sh._type==='community')return;sh._vis=t.dataset.v;setVis(sh)},
switch(t){const sh=t.closest('.sheet'),on=t.classList.toggle('on'),f=$('[data-fold="until"]',sh);t.setAttribute('aria-pressed',on);if(f){f.classList.toggle('open',on);if(on)setTimeout(()=>{const sb=$('.sbody',sh);sb.scrollTo({top:sb.scrollHeight,behavior:'smooth'})},470)}},
untilQuick(t){const sh=t.closest('.sheet'),d=new Date(),k=t.dataset.d;d.setDate(d.getDate()+(k==='wk'?((7-d.getDay())%7||7):+k));setUntil(sh,iso(d),t)},
untilCustom(t){const sh=t.closest('.sheet');openSheet('deadline',{value:sh._until,title:'Scadenza accesso',hint:'Dopo questa data i membri escono dal gruppo.',onSet:d=>setUntil(sh,d,d?t:null)})},
newGroupOk(t){const sh=t.closest('.sheet'),name=val(sh,'name');if(!name)return shake($$('.inp',sh)[0]);const timed=$('.switch',sh).classList.contains('on');if(timed&&!sh._until){const f=$('[data-fold="until"]',sh);const sb=$('.sbody',sh);sb.scrollTo({top:sb.scrollHeight,behavior:'smooth'});shake($('.field',f));return toast('Scegli quando scade l’accesso')}const k=$('.gpick.on',sh);
  S.groups.push({id:'g'+S.nid++,name,icon:k.dataset.i,col:[k.dataset.c,k.dataset.c],tappe:0,members:['fnc_fabio'],code:'NEW'+(100+Math.random()*900|0),admin:true,type:sh._type,vis:sh._type==='community'?'pub':sh._vis,until:timed?sh._until:null});closeSheet();refreshPages();toast(`Gruppo “${name}” creato`)},
perm(t){S[t.dataset.k]=true;refreshPages();toast(t.dataset.k==='notif'?'Notifiche attive':'Posizione attiva')},
lang(t){S.lang=t.dataset.l;t.parentElement.classList.toggle('b',S.lang==='en')},
unblock(){S.blocked=[];applyFilter();refreshPages();toast('Lista bloccati svuotata')},
soon(t){toast(`${t.dataset.m}: non incluso nel prototipo`)}
};
document.addEventListener('click',e=>{const t=e.target.closest('[data-act]');if(t&&A[t.dataset.act])A[t.dataset.act](t,e)});
document.addEventListener('input',e=>{const t=e.target;
  if(t.matches('[data-search]'))drawResults(t.closest('.sheet'),t.value);
  if(t.matches('.code-in')){t.value=t.value.toUpperCase();if(t.value)t.nextElementSibling?.focus()}});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){if(stack.length)closeSheet();else if($('#menu').classList.contains('in'))$('#menu').classList.remove('in');else popPage()}
  if(e.key==='Backspace'&&e.target.matches?.('.code-in')&&!e.target.value)e.target.previousElementSibling?.focus();
  if(e.key==='Enter'&&e.target.closest?.('#login'))A.login()});

/* ---------- avvio ---------- */
function fit(){const m=innerWidth<=480;SC=m?1:Math.min(1,(innerHeight-32)/915,(innerWidth-32)/412);document.documentElement.style.setProperty('--s',SC)}
addEventListener('resize',fit);fit();
$('#loc').innerHTML=ic('locate',22);$('#fil').innerHTML=ic('sliders',22);$('#add').innerHTML=ic('plus',28);
$('#srch').innerHTML=ic('search',20)+'Cerca eventi, luoghi…';
$('#lnameIcon').insertAdjacentHTML('afterbegin',ic('user'));$('#lmailIcon').insertAdjacentHTML('afterbegin',ic('mail'));$('#lpwIcon').insertAdjacentHTML('afterbegin',ic('lock'));
S.events.forEach(addMarker);updateSw();renderMenu();
