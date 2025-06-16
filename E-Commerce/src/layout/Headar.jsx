import React from 'react'
import { Mail,Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Header() {
  return (
    <header className="hidden md:flex w-full h-[58px] bg-[#252B42] text-white flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <span className="text-lg"><Phone size={20}/></span>
        <span className="text-lg font-bold">(225) 555-0118</span>
        <span className="text-lg"><Mail size={20}/></span>
        <a href="mailto:michelle.rivera@example.com" className="font-bold">michelle.rivera@example.com</a>
      </div>

      <div className="text-center font-bold">
        Follow Us  and get a chance to win 80% off
      </div>

      <div className="flex items-center space-x-3">
        <h6 className="font-bold">Follow us:</h6>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><Youtube size={25} /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter color='white' size={20} /></a>
      </div>
    </header>
  )
}
