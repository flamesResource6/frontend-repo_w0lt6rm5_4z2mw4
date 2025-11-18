import React from 'react';

const items = [
  { title: 'Official Testing', desc: 'Accredited centers and proctors, globally vetted.', color: '#246980' },
  { title: 'Fast Scheduling', desc: 'Choose a time in minutes with live availability.', color: '#7adbba' },
  { title: 'Secure & Fair', desc: 'Identity checks and anti-cheat protocols by design.', color: '#521466' },
  { title: 'Instant Proof', desc: 'Immediate confirmations and receipts for employers.', color: '#f5694f' },
];

const WhyCertipoint = () => {
  return (
    <section className="py-14" aria-labelledby="why-heading" style={{background:'#eef0ec'}}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="why-heading" className="text-2xl md:text-3xl font-bold mb-8" style={{color:'#222121', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>Why CertiPoint</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((it, idx)=> (
            <div key={idx} className="rounded-2xl p-6" style={{background:'#ffffff'}}>
              <div className="w-12 h-12 rounded-xl mb-4" style={{background:it.color}} aria-hidden="true"/>
              <h3 className="text-lg font-semibold" style={{color:'#222121', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>{it.title}</h3>
              <p className="mt-1 text-sm" style={{color:'#246980'}}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCertipoint;