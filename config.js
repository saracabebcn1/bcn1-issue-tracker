// ══════════════════════════════════════════════════════════
// CONFIG — BCN1
// ══════════════════════════════════════════════════════════
// Para adaptar a otro FC: edita solo este archivo.
// No toques index.html.
// ══════════════════════════════════════════════════════════

const FC_CONFIG = {

  // Nombre del FC (aparece en el header)
  name: 'BCN1',

  // ── Links de departamentos ──────────────────────────────
  deptLinks: {
    CBRE:     { label: 'Workflow RME/CBRE',  url: 'https://river.amazon.com/BCN1/workflows?buildingType=fc&q0=8eddca34-afe4-48db-9206-b41529fa1349&q1=de867ca4-d11b-4e0b-ae4b-f3b801865c32&q2=ba57fb84-6d7a-4afb-89f4-b53b295ff79e&q3=e4bb11b9-c6b7-46ef-9b27-a23d2992628b&id=e4bb11b9-c6b7-46ef-9b27-a23d2992628b' },
    EUROCERN: { label: 'TT EUROCERN',        url: 'https://t.corp.amazon.com/D499060453' },
    IT:       { label: 'Ticket IT',          url: 'https://river.amazon.com/?org=it_help&q0=a74a3d48-56aa-4649-a1af-da4da42e5291' },
    CHANGE:   { label: 'TT CHANGE',          url: 'https://t.corp.amazon.com/D513389296' },
  },

  // ── Garitas de trabajo ──────────────────────────────────
  garitas: ['V0', 'V2'],

  // ── Muelles ─────────────────────────────────────────────
  dockRows: [
    { label: 'RAMP/SAYCA', ids: ['DD300-RAMP','101-SAYCA','102-SAYCA','103-SAYCA','104-SAYCA','105-SAYCA','106-RAMP'] },
    { label: 'IB',         ids: ['IB107','IB108','IB109','IB110','IB111','IB112','IB113','IB114','IB115','IB116','IB117','IB118','IB119','IB120','IB121','IB122','IB123','IB124'] },
    { label: 'OB 125–142', ids: ['OB125','OB126','OB127','OB128','OB129','OB130','OB131','OB132','OB133','OB134','OB135','OB136','OB137','OB138','OB139','OB140','OB141','OB142'] },
    { label: 'OB 143–158', ids: ['OB143','OB144','OB145','OB146','OB147','OB148','OB149','OB150','OB151','OB152','OB153','OB154','OB155','OB156','OB157','OB158'] },
    { label: 'OB 159–175', ids: ['OB159','OB160','OB161','OB162','OB163','OB164','OB165','OB166','OB167','OB168','OB169','OB170','OB171','OB172','OB173','174-SEMI','175-RAMP'] },
  ],

  // ── Plazas parking ──────────────────────────────────────
  psRange:  { from: 0, to: 112 },   // genera PS000 → PS112
  preRange: { from: 1, to: 12 },    // genera PRE-001 → PRE-012
  tpRange:  { from: 1, to: 11 },    // genera TP-01 → TP-11
  otherSlips: ['RESIDUOS', 'NO-ASIGNADO'],

  // ── Infraestructura (base por defecto, editable desde la UI) ──
  infraDefault: [
    { label: 'Bumpers · Zona IB (107-124)',    ids: ['B·IB·1','B·IB·2','B·IB·3'] },
    { label: 'Bumpers · Zona OB-A (125-149)',  ids: ['B·OB·A·1','B·OB·A·2','B·OB·A·3'] },
    { label: 'Bumpers · Zona OB-B (150-175)',  ids: ['B·OB·B·1','B·OB·B·2','B·OB·B·3'] },
    { label: 'Bumpers · Zona GH / Accesos',    ids: ['B·GH·1','B·GH·2'] },
    { label: 'Quitamiedos · Zona IB',          ids: ['QM·IB·1','QM·IB·2'] },
    { label: 'Quitamiedos · Zona OB-A',        ids: ['QM·OB·A·1','QM·OB·A·2'] },
    { label: 'Quitamiedos · Zona OB-B',        ids: ['QM·OB·B·1','QM·OB·B·2'] },
    { label: 'Quitamiedos · Zona GH / Rampas', ids: ['QM·GH·1','QM·GH·2'] },
    { label: 'Calzada / Firme',                ids: ['VIA·IB','VIA·OB·A','VIA·OB·B','VIA·GH','VIA·RAMP'] },
    { label: 'Señalización',                   ids: ['SÑL·01','SÑL·02','SÑL·03'] },
  ],

};
