import React from 'react';

const data = [
  { name: 'Amina K.', quote: 'Booked my exam between meetings. Smooth process and instant confirmation.', color:'#7adbba' },
  { name: 'Luis R.', quote: 'Found a nearby center the same week. Clear instructions and helpful support.', color:'#246980' },
  { name: 'Priya S.', quote: 'Loved the reminders and reschedule options. Professional and reliable.', color:'#f5694f' },
];

const Testimonials = () => {
  return (
    <section className="py-14" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-bold mb-8" style={{color:'#222121', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>What learners say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((t, i)=> (
            <figure key={i} className="rounded-2xl p-6 border" style={{background:'#ffffff', borderColor:'#eef0ec'}}>
              <div className="h-24 w-full rounded-xl mb-4" style={{background:t.color}} aria-hidden="true"/>
              <blockquote className="text-sm" style={{color:'#222121'}}>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-3 text-sm font-semibold" style={{color:'#246980', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;