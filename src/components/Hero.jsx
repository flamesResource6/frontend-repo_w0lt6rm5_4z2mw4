import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Copy */}
          <div className="md:col-span-7">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold leading-tight" style={{color:'#222121', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>
              Book Your Certification Exam in 3 Minutes
            </h1>
            <p className="mt-4 text-lg md:text-xl" style={{color:'#246980', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif', fontWeight:500}}>
              Real-time availability, official testing centers, instant confirmation.
            </p>

            {/* Integrated search bar */}
            <form className="mt-8" onSubmit={(e)=>e.preventDefault()} aria-label="Exam search form">
              <div className="flex w-full flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  aria-label="Search exams"
                  placeholder="Search certifications (e.g., Cloud Architect)"
                  className="flex-1 rounded-xl px-4 py-4 text-base outline-none transition focus:ring-4"
                  style={{background:'#eef0ec', color:'#222121', border:'2px solid #7adbba', boxShadow:'0 0 0 0 rgba(0,0,0,0)'}}
                  onFocus={(e)=>{e.currentTarget.style.boxShadow='0 0 0 3px rgba(122,219,186,0.6)'}}
                  onBlur={(e)=>{e.currentTarget.style.boxShadow='0 0 0 0 rgba(0,0,0,0)'}}
                />
                <button
                  type="submit"
                  className="rounded-xl px-6 py-4 text-base font-semibold transition-colors"
                  style={{background:'#246980', color:'#eef0ec', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}
                  onMouseEnter={(e)=>{e.currentTarget.style.background='#521466'}}
                  onMouseLeave={(e)=>{e.currentTarget.style.background='#246980'}}
                >
                  Find Dates
                </button>
                <button
                  type="button"
                  className="rounded-xl px-6 py-4 text-base font-semibold border-2"
                  style={{borderColor:'#246980', color:'#246980', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}
                >
                  Browse Popular
                </button>
              </div>
              <p className="mt-3 text-sm" style={{color:'#222121'}}>Use keywords or exam codes. All results are official CertiPoint centers.</p>
            </form>
          </div>

          {/* Image inside CertiPoint symbol (placeholder block) */}
          <div className="md:col-span-5 relative">
            <div className="relative w-full aspect-square max-w-md ml-auto">
              {/* Symbol container with brand background */}
              <div className="absolute inset-0 rounded-[40%_60%_55%_45%/60%_40%_60%_40%]"
                   style={{background:'#7adbba'}} aria-hidden="true"/>
              {/* Cut-out learner image placeholder */}
              <figure className="absolute inset-6 rounded-3xl flex items-center justify-center" style={{background:'#eef0ec'}}>
                <div className="w-24 h-24 rounded-full" style={{background:'#f5694f'}} aria-hidden="true"/>
                <figcaption className="sr-only">Approved CertiPoint imagery: confident learner within CertiPoint symbol on CP Mint background.</figcaption>
                <img alt="CertiPoint learner portrait placeholder on brand background" className="sr-only" />
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* Background accent */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-[34rem] h-[34rem] rounded-full opacity-20" style={{background:'#7adbba'}} aria-hidden="true"/>
    </section>
  );
};

export default Hero;
