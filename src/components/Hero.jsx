import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative h-full z-10">
        <div className="h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 backdrop-blur px-3 py-1 text-xs text-white mb-4 pointer-events-none">Available for freelance</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Minimalist portfolio for modern builders
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80">
              I design and build fast, accessible web experiences. Clean UI, solid engineering, and a dash of motion.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-orange-500 text-white px-5 py-3 shadow-sm hover:bg-orange-600 transition-colors">
                View projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/10 text-white px-5 py-3 border border-white/30 hover:bg-white/20 transition-colors">
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent" />
    </section>
  )
}
