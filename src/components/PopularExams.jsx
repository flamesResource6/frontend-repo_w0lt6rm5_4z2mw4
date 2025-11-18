import React, { useState } from 'react';

const categories = ['Popular', 'Cloud', 'Security', 'Data', 'Developer'];

const PopularExams = () => {
  const [active, setActive] = useState('Popular');
  const exams = [
    { title: 'Cloud Architect Pro', color: '#246980' },
    { title: 'Security Analyst I', color: '#521466' },
    { title: 'Data Engineer Associate', color: '#7adbba' },
    { title: 'Frontend Developer', color: '#f5694f' },
  ];

  return (
    <section className="py-14 md:py-18" aria-labelledby="exams-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 id="exams-heading" className="text-2xl md:text-3xl font-bold" style={{color:'#222121', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>Top Certifications</h2>
          <div className="flex gap-2 flex-wrap">
            {categories.map((c)=> (
              <button key={c} onClick={()=>setActive(c)} className="px-4 py-2 rounded-full text-sm font-semibold transition"
                style={{
                  background: active===c ? '#246980' : '#eef0ec',
                  color: active===c ? '#eef0ec' : '#246980',
                  border: '2px solid #246980',
                  fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'
                }}
              >{c}</button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exams.map((exam, idx)=> (
            <article key={idx} className="rounded-2xl p-5 border transition hover:-translate-y-0.5"
              style={{borderColor:'#eef0ec', background:'#ffffff'}} aria-label={`${exam.title} booking card`}>
              <div className="h-28 w-full rounded-2xl mb-4 relative overflow-hidden" style={{background: exam.color}}>
                {/* Symbol shaped mask placeholder */}
                <div className="absolute inset-3 rounded-[40%_60%_55%_45%/60%_40%_60%_40%] bg-[#eef0ec]" aria-hidden="true"/>
                <img alt="Official CertiPoint exam imagery placeholder inside symbol" className="sr-only" />
              </div>
              <h3 className="text-lg font-semibold" style={{color:'#222121', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>{exam.title}</h3>
              <p className="mt-1 text-sm" style={{color:'#246980'}}>Available worldwide • Next dates within 7 days</p>
              <div className="mt-4 flex items-center justify-between">
                <button className="px-4 py-2 rounded-lg text-sm font-semibold" style={{background:'#7adbba', color:'#222121', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>Book now</button>
                <button className="px-3 py-2 rounded-lg text-sm font-semibold border" style={{borderColor:'#246980', color:'#246980', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>Details</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularExams;