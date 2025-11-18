import React, { useState } from 'react';

const faqs = [
  { q: 'How do I reschedule?', a: 'Use your confirmation link to change time or location within policy.' },
  { q: 'What ID is required?', a: 'Government-issued photo ID matching your account name.' },
  { q: 'Can I test online?', a: 'Yes, select online proctoring where available during booking.' },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-14" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6">
        <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold mb-6" style={{color:'#222121', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>FAQs</h2>
        <div className="space-y-3">
          {faqs.map((f, i)=> (
            <div key={i} className="rounded-xl border" style={{borderColor:'#eef0ec', background:'#ffffff'}}>
              <button className="w-full text-left px-4 py-4 flex items-center justify-between" onClick={()=> setOpen(open===i? -1 : i)}>
                <span className="font-semibold" style={{color:'#246980', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>{f.q}</span>
                <span aria-hidden="true" className="ml-4 h-6 w-6 rounded-full flex items-center justify-center text-white" style={{background:'#246980'}}>{open===i ? '-' : '+'}</span>
              </button>
              {open===i && (
                <div className="px-4 pb-4 text-sm" style={{color:'#222121'}}>{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;