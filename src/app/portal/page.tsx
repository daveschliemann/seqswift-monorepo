"use client"

import { useState } from 'react'

export default function Portal() {
  const [pass, setPass] = useState('')
  const [open, setOpen] = useState(false)

  if (!open) {
    return (
      <main className="min-h-screen bg-black text-cyan-400 font-mono flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl mb-8">Precision Club Portal</h1>
        <form onSubmit={(e)=>{e.preventDefault(); if(pass==='seqswift2025') setOpen(true); else alert('nope')}} className="space-y-6">
          <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="seqswift2025" className="px-8 py-4 text-2xl bg-black border-4 border-cyan-400 text-cyan-400 text-center rounded"/>
          <button type="submit" className="px-12 py-6 bg-lime-500 text-black text-2xl font-bold rounded">Unlock</button>
        </form>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-cyan-400 font-mono p-8 text-center">
      <h1 className="text-6xl mb-8 text-lime-500">UNLOCKED</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {[1,2,3,4,5,6,7].map(n=>(
          <a key={n} href={`/zips/pilot${n}.zip.gpg`} download className="block p-8 border-4 border-cyan-400 rounded text-2xl hover:bg-cyan-400 hover:text-black transition">
            Pilot {n} GPG Zip
          </a>
        ))}
      </div>
      <p className="mt-8 text-sm opacity-70">Decrypt → echo 'seqswift2025' | gpg -d pilotX.zip.gpg {'>'} pilotX.zip</p>
      <a href="/" className="mt-8 inline-block text-lime-500">← Back</a>
    </main>
  )
}
