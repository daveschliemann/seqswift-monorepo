"use client";

import { useState } from 'react';

export default function Portal() {
  const [pass, setPass] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pass === 'seqswift2025') setUnlocked(true);
    else { alert('nope'); setPass(''); }
  };

  if (!unlocked) {
    return (
      <main className="min-h-screen bg-black text-cyan-400 font-mono flex flex-col items-center justify-center px-8">
        <h1 className="text-5xl mb-12">Precision Club Portal</h1>
        <form onSubmit={submit} className="space-y-8">
          <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="seqswift2025"
            className="px-12 py-6 text-2xl bg-black border-4 border-cyan-400 text-cyan-400 text-center rounded-lg"/>
          <button type="submit" className="px-16 py-6 bg-lime-500 text-black text-2xl font-bold rounded-lg">Unlock</button>
        </form>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-cyan-400 font-mono p-8 text-center">
      <h1 className="text-6xl mb-12 text-lime-500">UNLOCKED</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[1,2,3,4,5,6,7].map(n => (
          <a key={n} href={`/zips/pilot${n}.zip.gpg`} download
            className="block p-10 border-4 border-cyan-400 rounded-lg text-2xl hover:bg-cyan-400 hover:text-black transition">
            Pilot {n} GPG Zip
          </a>
        ))}
      </div>
      <p className="mt-8 text-sm opacity-70">Decrypt: echo 'seqswift2025' | gpg -d pilotX.zip.gpg > pilotX.zip</p>
      <a href="/" className="mt-12 inline-block text-lime-500 text-xl">← Back</a>
    </main>
  )
}
