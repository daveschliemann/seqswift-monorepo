"use client";

import { useState } from 'react';

export default function Portal() {
  const [passphrase, setPassphrase] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const correctPass = 'seqswift2025';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passphrase === correctPass) {
      setUnlocked(true);
    } else {
      alert('Wrong passphrase—try seqswift2025?');
      setPassphrase('');
    }
  };

  if (!unlocked) {
    return (
      <main style={{padding: '5rem 2rem', textAlign: 'center', fontFamily: 'monospace', color: '#0ff', background: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '2rem'}}>Precision Club Portal</h1>
        <p style={{fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.8}}>Enter passphrase to unlock pilots & binaries</p>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', width: '100%'}}>
          <input
            type="password"
            value={passphrase}
            onChange={(e) => setPassphrase(e.target.value)}
            placeholder="seqswift2025"
            style={{padding: '1rem', fontSize: '1.2rem', fontFamily: 'monospace', background: '#111', color: '#0ff', border: '2px solid #0ff', borderRadius: '8px', textAlign: 'center'}}
            required
          />
          <button type="submit" style={{padding: '1rem 2rem', fontSize: '1.2rem', background: '#0f0', color: '#000', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold'}}>
            Unlock Portal
          </button>
        </form>
        <p style={{marginTop: '3rem', fontSize: '0.9rem', opacity: 0.6}}>Lost? DM @daveschliemann on X • license@seqswift.com</p>
      </main>
    );
  }

  return (
    <main style={{padding: '5rem 2rem', textAlign: 'center', fontFamily: 'monospace', color: '#0ff', background: '#000', minHeight: '100vh', maxWidth: '1000px', margin: '0 auto'}}>
      <h1 style={{fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '2rem'}}>Unlocked: Full Access</h1>
      <p style={{fontSize: '1.5rem', margin: '1rem 0', color: '#0f0'}}>Decrypt zips with seqswift2025 via GPG</p>

      <div style={{display: 'grid', gap: '2rem', margin: '4rem 0', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
        {[1,2,3,4,5,6,7].map(n => (
          <div key={n}>
            <a href={`/zips/pilot${n}.zip.gpg`} download style={{display: 'block', padding: '1.8rem 1rem', fontSize: '1.4rem', border: '3px solid #0ff', color: '#0ff', textDecoration: 'none', borderRadius: '12px', background: 'rgba(0,255,255,0.05)'}}>
              Pilot {n} (GPG Zip)
            </a>
            <p style={{marginTop: '0.8rem', fontSize: '0.9rem', opacity: 0.7}}>gpg -d pilot{n}.zip.gpg > pilot{n}.zip</p>
          </div>
        ))}
        <div>
          <a href="https://github.com/daveschliemann/seqswift-pilots/tags" target="_blank" rel="noopener" style={{display: 'block', padding: '1.8rem 1rem', fontSize: '1.4rem', border: '3px solid #0f0', color: '#0f0', textDecoration: 'none', borderRadius: '12px', background: 'rgba(0,255,0,0.05)'}}>
            All Binaries (GitHub)
          </a>
          <p style={{marginTop: '0.8rem', fontSize: '0.9rem', opacity: 0.7}}>Free v1.0+ releases</p>
        </div>
      </div>

      <button onClick={() => { setUnlocked(false); setPassphrase(''); }} style={{color: '#f00', background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', margin: '2rem 0'}}>
        🔒 Lock Portal
      </button>
      <a href="/" style={{color: '#0f0', fontSize: '1.2rem'}}>← Back</a>
    </main>
  );
}
