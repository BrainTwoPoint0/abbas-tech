'use client';

import React, { useEffect } from 'react';

const CalendlyEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js',
    );
    head!.appendChild(script);
  }, []);

  return (
    <div className="my-20 flex h-[60vh] items-center justify-center">
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minHeight: '650px', width: '100%', height: '100%' }}
      ></div>
    </div>
  );
};

export default CalendlyEmbed;
