import React from 'react';

const SupportCTA = () => {
  const items = [
    { title:'Chat with us', desc:'Live agents 24/7', color:'#7adbba' },
    { title:'Email support', desc:'Response within 1 business day', color:'#246980' },
    { title:'Call a specialist', desc:'Global numbers and hours', color:'#521466' },
  ];
  return (
    <section className="py-14" aria-labelledby="support-heading" style={{background:'#eef0ec'}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl p-8" style={{background:'#222121'}}>
          <div className="flex items-center justify-between flex-col md:flex-row gap-6">
            <div className="max-w-xl">
              <h2 id="support-heading" className="text-2xl md:text-3xl font-bold" style={{color:'#eef0ec', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>Need help with your booking?</h2>
              <p className="mt-2 text-sm" style={{color:'#eef0ec'}}>Our service team is ready to assist.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
              {items.map((it, i)=> (
                <div key={i} className="rounded-xl p-4" style={{background:'#ffffff'}}>
                  <div className="w-10 h-10 rounded-lg mb-3" style={{background:it.color}} aria-hidden="true"/>
                  <div className="text-sm font-semibold" style={{color:'#222121', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>{it.title}</div>
                  <div className="text-xs mt-1" style={{color:'#246980'}}>{it.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportCTA;