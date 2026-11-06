import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

/**
 * The original pages and JavaScript are intentionally retained.
 * React loads the matching original page into the app and starts its
 * existing scripts, so the design, Local Storage keys and workflows stay intact.
 */
function App() {
  const [pageMarkup, setPageMarkup] = useState('');
  const [pageClass, setPageClass] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    const pagePath = window.location.pathname.replace(/^\//, '') || 'index.html';

    async function loadOriginalPage() {
      try {
        const response = await fetch(`/original/${pagePath}`);
        if (!response.ok) {
          throw new Error(`Could not load page: ${pagePath}`);
        }

        const html = await response.text();
        const parsed = new DOMParser().parseFromString(html, 'text/html');
        const scripts = Array.from(parsed.querySelectorAll('script[src]'));
        const markup = parsed.body.innerHTML;

        if (cancelled) return;

        document.title = parsed.title || 'E-Shop';
        document.body.className = parsed.body.className || '';
        setPageClass(parsed.body.className || '');
        setPageMarkup(markup);

        // Wait until React has inserted the original page's elements.
        requestAnimationFrame(async () => {
          for (const originalScript of scripts) {
            if (cancelled) return;

            const scriptUrl = new URL(originalScript.getAttribute('src'), window.location.origin + '/' + pagePath);
            const script = document.createElement('script');
            script.src = scriptUrl.pathname;
            script.async = false;

            await new Promise((resolve, reject) => {
              script.onload = resolve;
              script.onerror = () => reject(new Error(`Unable to load ${script.src}`));
              document.body.appendChild(script);
            });
          }

          // The legacy files initialize themselves on DOMContentLoaded.
          document.dispatchEvent(new Event('DOMContentLoaded'));
        });
      } catch (loadError) {
        if (!cancelled) setError(loadError.message);
      }
    }

    loadOriginalPage();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <main className="app-error">
        <h1>Unable to open this page</h1>
        <p>{error}</p>
        <a href="/index.html">Return to E-Shop home</a>
      </main>
    );
  }

  return (
    <div className={`legacy-page ${pageClass}`}>
      {pageMarkup ? (
        <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />
      ) : (
        <div className="app-loading" aria-live="polite">Loading E-Shop…</div>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
