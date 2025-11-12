export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">About</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I'm a product-focused engineer who blends design sense with strong technical foundations. I love
              crafting minimal interfaces that feel effortless and fast.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['React','Next.js','TypeScript','Tailwind','FastAPI','MongoDB'].map(s => (
                <span key={s} className="inline-flex items-center rounded-full bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 text-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 border border-orange-300/50" />
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const data = [
    { title: 'SaaS Dashboard', desc: 'Analytics, billing, and user management in a clean UI.', tag: 'Product' },
    { title: 'Marketing Site', desc: 'High-performance landing pages with A/B testing.', tag: 'Website' },
    { title: 'Design System', desc: 'Reusable components and tokens for scale.', tag: 'Design' },
  ]
  return (
    <section id="projects" className="py-20 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <a href="#contact" className="hidden sm:inline-flex rounded-md bg-orange-600 text-white px-4 py-2 hover:bg-orange-700">Work with me</a>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((p) => (
            <article key={p.title} className="group rounded-xl bg-white border border-orange-100 p-6 hover:shadow-lg transition-shadow">
              <div className="h-36 rounded-lg bg-gradient-to-br from-orange-100 to-orange-200" />
              <div className="mt-4">
                <span className="inline-flex rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-xs px-2 py-0.5">
                  {p.tag}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-orange-700">{p.title}</h3>
                <p className="mt-1 text-gray-600 text-sm">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const skills = [
    { label: 'Frontend', value: 90 },
    { label: 'Backend', value: 80 },
    { label: 'Design', value: 75 },
    { label: 'Performance', value: 85 },
  ]
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {skills.map(s => (
            <div key={s.label}>
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span>{s.label}</span>
                <span>{s.value}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-orange-100">
                <div className="h-full rounded-full bg-orange-500" style={{ width: `${s.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
            <p className="mt-4 text-gray-600">Have a project in mind or just want to say hi? Let's talk.</p>
            <div className="mt-6 text-sm text-gray-700">
              <p>Email: you@example.com</p>
              <p className="mt-1">Location: Remote / Worldwide</p>
            </div>
          </div>
          <form className="bg-white border border-orange-100 rounded-xl p-6 space-y-4">
            <input type="text" placeholder="Name" className="w-full rounded-md border border-orange-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            <input type="email" placeholder="Email" className="w-full rounded-md border border-orange-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            <textarea placeholder="Message" rows="4" className="w-full rounded-md border border-orange-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            <button type="button" className="rounded-md bg-orange-600 text-white px-4 py-2 hover:bg-orange-700">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
