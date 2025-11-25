export default function Home() {
  return (
    <main className="min-h-screen bg-black text-cyan-400 font-mono text-center px-8 py-16">
      <h1 className="text-5xl md:text-7xl mb-8">3.45 million HPV16+18 mutations in 0.0069 s</h1>
      <p className="text-2xl opacity-90 mb-12">Pure Python • No GPU • No cloud • Chromebook verified</p>

      <div className="space-y-8">
        <a href="https://github.com/daveschliemann/seqswift-pilots/tags" target="_blank" rel="noopener" className="inline-block px-12 py-6 border-4 border-lime-500 text-lime-500 text-2xl rounded-lg hover:bg-lime-500 hover:text-black transition">
          Download All BOOM Binaries
        </a>
        <br/>
        <a href="/portal" className="inline-block px-12 py-6 bg-lime-500 text-black text-2xl font-bold rounded-lg">
          Enter Beta Portal → seqswift2025
        </a>
      </div>

      <p className="mt-20 opacity-70 text-lg">
        Encrypted pilots • Open-source core • Patent pending<br/>No cloud • No Docker • Free forever
      </p>
    </main>
  )
}
