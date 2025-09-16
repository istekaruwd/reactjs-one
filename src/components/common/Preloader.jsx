import { useEffect, useState } from 'react';
import preLoaderBg from '/images/pre_loader.gif';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId = null;

    function onLoad() {
      // small delay for smooth fade-out
      timeoutId = window.setTimeout(() => setVisible(false), 300);
    }

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }

    // Safety: hide after 6 seconds even if load never fires
    const safetyId = window.setTimeout(() => setVisible(false), 6000);

    return () => {
      window.removeEventListener('load', onLoad);
      if (timeoutId) window.clearTimeout(timeoutId);
      window.clearTimeout(safetyId);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      id="preloader"
      style={{
        backgroundImage: `url(${preLoaderBg})`,
      }}
    ></div>
  );
}
