import React from 'react'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full h-[58px] bg-blue-900 text-white flex items-center justify-between px-6">
      {/* Sol */}
      <div className="flex items-center space-x-4">
        <span className="font-bold text-lg">Marka İsmi</span>
        <a href="mailto:example@mail.com" className="text-sm underline">example@mail.com</a>
      </div>

      {/* Orta */}
      <div className="text-sm text-center hidden md:block">
        Bizi takip edin, fırsatları kaçırmayın
      </div>

      {/* Sağ */}
      <div className="flex items-center space-x-3">
        <span className="text-sm">Follow us</span>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
      </div>
    </header>
  )
}
