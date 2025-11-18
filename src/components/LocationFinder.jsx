import React from 'react';

const LocationFinder = () => {
  const cities = [
    { name:'New York', color:'#246980' },
    { name:'London', color:'#7adbba' },
    { name:'Singapore', color:'#521466' },
    { name:'Toronto', color:'#f5694f' },
  ];

  return (
    <section className="py-14" aria-labelledby="location-heading" style={{background:'#eef0ec'}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 id="location-heading" className="text-2xl md:text-3xl font-bold" style={{color:'#222121', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>Find a location</h2>
            <p className="text-sm mt-1" style={{color:'#246980'}}>Map uses CertiPoint overlay. Search by city to see official centers.</p>
          </div>
          <button className="px-4 py-2 rounded-lg text-sm font-semibold" style={{background:'#246980', color:'#eef0ec', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>Open map</button>
        </div>

        {/* Map placeholder with brand overlay */}
        <div className="rounded-2xl h-64 w-full mb-6 relative overflow-hidden">
          <div className="absolute inset-0" style={{background:'#246980', opacity:0.15}} aria-hidden="true"/>
          <div className="absolute inset-4 rounded-xl border-2" style={{borderColor:'#7adbba'}} aria-hidden="true"/>
          <img alt="Official CertiPoint map overlay placeholder in brand tints" className="sr-only" />
        </div>

        {/* City cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((c, i)=> (
            <article key={i} className="rounded-2xl p-5 border" style={{background:'#ffffff', borderColor:'#eef0ec'}}>
              <div className="h-24 rounded-xl mb-3" style={{background:c.color}} aria-hidden="true"/>
              <h3 className="text-base font-semibold" style={{color:'#222121', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>{c.name}</h3>
              <p className="text-sm mt-1" style={{color:'#246980'}}>Official centers • Same-week dates</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationFinder;