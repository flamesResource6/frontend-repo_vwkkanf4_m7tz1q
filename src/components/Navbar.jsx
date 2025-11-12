import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 border-b border-orange-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-orange-500 text-white grid place-items-center font-bold">F</div>
            <span className="sr-only">Home</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-gray-700 hover:text-orange-600 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-orange-600 text-white px-4 py-2 shadow-sm hover:bg-orange-700 transition-colors">
              Get in touch
            </a>
          </nav>
          <button className="md:hidden p-2 rounded-md border border-orange-200" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-orange-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-gray-800 hover:text-orange-600">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-md bg-orange-600 text-white px-4 py-2 shadow-sm hover:bg-orange-700">
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
