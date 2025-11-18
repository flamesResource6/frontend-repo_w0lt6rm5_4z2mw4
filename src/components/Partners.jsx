import React from 'react';

const Partners = () => {
  const partners = ['Partner One','Partner Two','Partner Three','Partner Four','Partner Five'];
  return (
    <section className="py-12 md:py-16" aria-labelledby="partners-heading" style={{background:'#eef0ec'}}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 id="partners-heading" className="sr-only">Official Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {partners.map((p, i)=> (
            <div key={i} className="h-16 rounded-xl flex items-center justify-center border" style={{borderColor:'#246980'}}>
              <span className="text-sm font-semibold" style={{color:'#246980', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>{p} badge</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;