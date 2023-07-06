import React from 'react';

interface WindowSize {
    width: number | undefined;
    height: number | undefined;
}

function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight, 
  });

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  return windowSize;
}

export default useWindowSize;
