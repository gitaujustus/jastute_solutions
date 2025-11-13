'use client';

export default function NetworkBackground() {
  return (
    <div className="absolute inset-0 opacity-30">
      <svg width="100%" height="100%" viewBox="0 0 1440 560" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="networkGradient">
            <stop stopColor="#ffffff" offset="0.1"></stop>
            <stop stopColor="rgba(6, 56, 55, 0.41)" offset="0.2"></stop>
            <stop stopColor="rgba(6, 56, 55, 0)" offset="1"></stop>
          </radialGradient>
        </defs>
        <g>
          <path d="M-62.27 513.62L38.85 504.47" stroke="hsla(178.8, 80.6%, 15.8%, 0.41)" strokeWidth="1.5"></path>
          <path d="M38.85 504.47L243.51 554.65" stroke="hsla(178.8, 80.6%, 15.8%, 0.41)" strokeWidth="1.5"></path>
          <path d="M243.51 554.65L346.42 554.67" stroke="hsla(178.8, 80.6%, 15.8%, 0.41)" strokeWidth="1.5"></path>
          <path d="M346.42 554.67L489.51 490.32" stroke="hsla(178.8, 80.6%, 15.8%, 0.41)" strokeWidth="1.5"></path>
          <path d="M489.51 490.32L680.11 534" stroke="hsla(178.8, 80.6%, 15.8%, 0.41)" strokeWidth="1.5"></path>
          <path d="M680.11 534L827.77 499.98" stroke="hsla(178.8, 80.6%, 15.8%, 0.41)" strokeWidth="1.5"></path>
          <path d="M827.77 499.98L971.66 362.1" stroke="hsla(178.8, 80.6%, 15.8%, 0.41)" strokeWidth="1.5"></path>
          <path d="M971.66 362.1L1096.65 393.04" stroke="hsla(178.8, 80.6%, 15.8%, 0.41)" strokeWidth="1.5"></path>
          <path d="M1096.65 393.04L1151.03 500.67" stroke="hsla(178.8, 80.6%, 15.8%, 0.41)" strokeWidth="1.5"></path>
          <path d="M1151.03 500.67L1310.98 340.63" stroke="hsla(178.8, 80.6%, 15.8%, 0.41)" strokeWidth="1.5"></path>
          
          <circle r="25" cx="38.85" cy="504.47" fill="url(#networkGradient)"></circle>
          <circle r="25" cx="489.51" cy="490.32" fill="url(#networkGradient)"></circle>
          <circle r="25" cx="1106.18" cy="228.05" fill="url(#networkGradient)"></circle>
          <circle r="25" cx="1451.43" cy="259.97" fill="url(#networkGradient)"></circle>
          
          <circle r="5" cx="243.51" cy="554.65" fill="rgba(204, 214, 214, 0.705)"></circle>
          <circle r="5" cx="346.42" cy="554.67" fill="rgba(204, 214, 214, 0.705)"></circle>
          <circle r="5" cx="680.11" cy="534" fill="rgba(204, 214, 214, 0.705)"></circle>
          <circle r="5" cx="827.77" cy="499.98" fill="rgba(204, 214, 214, 0.705)"></circle>
          <circle r="5" cx="971.66" cy="362.1" fill="rgba(204, 214, 214, 0.705)"></circle>
          <circle r="5" cx="1096.65" cy="393.04" fill="rgba(204, 214, 214, 0.705)"></circle>
          <circle r="5" cx="1151.03" cy="500.67" fill="rgba(204, 214, 214, 0.705)"></circle>
          <circle r="5" cx="1310.98" cy="340.63" fill="rgba(204, 214, 214, 0.705)"></circle>
        </g>
      </svg>
    </div>
  );
}