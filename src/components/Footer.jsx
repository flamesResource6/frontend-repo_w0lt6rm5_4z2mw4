import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-16 pb-10" style={{background:'#222121'}} aria-labelledby="footer-heading">
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="footer-heading" className="sr-only">CertiPoint footer</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          {["Programs","Candidates","Partners","Resources","Company"].map((col, idx)=> (
            <div key={idx}>
              <h3 className="mb-3 font-semibold" style={{color:'#7adbba', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>{col}</h3>
              <ul className="space-y-2">
                {["Overview","Guides","Policies","Accessibility"].map((item, i)=> (
                  <li key={i}><a href="#" className="hover:underline" style={{color:'#eef0ec'}}>{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-between border-t pt-6" style={{borderColor:'rgba(238,240,236,0.1)'}}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded" style={{background:'#7adbba'}} aria-hidden="true"/>
            <span className="text-sm" style={{color:'#eef0ec', fontFamily:'\"Hurme Geometric Sans 2\", sans-serif'}}>CertiPoint</span>
          </div>
          <p className="text-xs" style={{color:'#eef0ec'}}>© {new Date().getFullYear()} CertiPoint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;