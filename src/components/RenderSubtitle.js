import React, {useState, useEffect} from 'react';

function RenderSubtitle() {
  const [subtitle, setSubtitle] = useState('');
  const text = `
  Connected to Vitaliy's Masich page...
  Start to loading resources...
  Waiting for access denied...
  Done!
  `;
  let currentIndex = 0;

  useEffect(() => {
    const id = setInterval(() => {
      setSubtitle(prev => prev + text[currentIndex] );
      currentIndex++;
      if (currentIndex === text.length) {
        clearInterval(id)
      }
    }, 70);
    return () => clearInterval(id);
  }, [currentIndex, text]);

  return (
    <h1 className='home__line' >{subtitle}</h1>
  );
}

export default RenderSubtitle;
