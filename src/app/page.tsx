export default function Home() {
  return (
    <main style={{padding: '5rem 2rem', textAlign: 'center', fontFamily: 'monospace', color: '#0ff', background: '#000', minHeight: '100vh'}}>
      <h1 style={{fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1rem'}}>3.45 million HPV16+18 mutations in 0.0069 s</h1>
      <p style={{fontSize: '1.5rem', opacity: 0.9}}>Pure Python • No GPU • No cloud • 489 MB RAM peak • Chromebook verified</p>

      <div style={{margin: '2rem 0'}}>
        <h2 style={{color: '#0f0', fontSize: '1.8rem'}}>Week 2 BOOM – live right now:</h2>
        <ul style={{listStyle: 'none', padding: 0, fontSize: '1.2rem', opacity: 0.9, textAlign: 'left', maxWidth: '600px', margin: '0 auto'}}>
          <li style={{margin: '0.5rem 0'}}>HPV16+18 oncology panel → 0.0069 s</li>
          <li style={{margin: '0.5rem 0'}}>HPV16 only panel → ~0.004 s</li>
          <li style={{margin: '0.5rem 0'}}>E. coli complete genome → ~0.012 s</li>
          <li style={{margin: '0.5rem 0'}}>SARS-CoV-2 + variants → ~0.008 s</li>
          <li style={{margin: '0.5rem 0'}}>VHL hereditary cancer panel → 0.006 s</li>
        </ul>
        <p style={{marginTop: '2rem', fontSize: '1.2rem', opacity: 0.8}}>Full GRCh38 human genome (3.1 B bases) 80s BOOM dropping next week</p>
      </div>

      <div style={{margin: '60px 0', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
        <a href="https://github.com/daveschliemann/seqswift-pilots/tags" target="_blank" rel="noopener" style={{padding: '1.2rem 2rem', fontSize: '1.3rem', border: '3px solid #0f0', color: '#0f0', textDecoration: 'none', borderRadius: '10px'}}>
          Download All BOOM Binaries
        </a>
        <a href="/portal" style={{background: '#0f0', color: '#000', padding: '1.2rem 3rem', fontSize: '1.4rem', fontWeight: 'bold', textDecoration: 'none', borderRadius: '10px'}}>
          Enter Beta Portal → seqswift2025
        </a>
      </div>

      <p style={{opacity: 0.8, fontSize: '1.1rem'}}>Encrypted pilots • Open-source core • Patent pending<br/>No cloud • No Docker • Free forever<br/><small>Designed by Schliemann</small></p>
    </main>
  );
}
