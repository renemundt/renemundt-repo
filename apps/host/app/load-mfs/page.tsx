'use client';

import { useEffect } from "react";
import styles from "../page.module.css";

export default function Home(): React.JSX.Element {

    useEffect(() => {   
        const loadMFS = async () => {
            try {
                // Fetch manifest to get the actual file path
                const host = window.location.hostname === 'renemundt-repo-host.vercel.app' ? 'renemundt-repo-microfrontend-a.vercel.app' : 'localhost:8011';
                const manifestResponse = await fetch(`http://${host}/.vite/manifest.json`);
                const manifest = await manifestResponse.json();
                
                // Get the JS file path from manifest
                const entryFile = manifest['index.html'].file;
                
                // Load microfrontend-a
                const scriptA = document.createElement('script');
                scriptA.src = `http://localhost:8011/${entryFile}`;
                scriptA.type = 'module';
                scriptA.crossOrigin = 'anonymous';
                document.body.appendChild(scriptA);
            } catch (error) {
                console.error('Error loading (microfrontend-a) manifest or script:', error);
            }

            try {
                // Fetch manifest to get the actual file path
                const host = window.location.hostname === 'renemundt-repo-host.vercel.app' ? 'renemundt-repo-microfrontend-b.vercel.app' : 'localhost:8012';
                const manifestResponse = await fetch(`http://${host}/.vite/manifest.json`);
                const manifest = await manifestResponse.json();
                
                // Get the JS file path from manifest
                const entryFile = manifest['index.html'].file;
                
                // Load microfrontend-b
                const scriptB = document.createElement('script');
                scriptB.src = `http://localhost:8012/${entryFile}`;
                scriptB.type = 'module';
                scriptB.crossOrigin = 'anonymous';
                document.body.appendChild(scriptB);
            } catch (error) {
                console.error('Error loading (microfrontend-b) manifest or script:', error);
            }
        };

        loadMFS();
    }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello there, I am the host</h1>
        <h2>Below is the MFS loaded content:</h2>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%', width: '100%'}} >
            <div id="mf-app-a"></div>
            <div id="mf-app-b"></div>
        </div>
      </main>
    </div>
  );
}
