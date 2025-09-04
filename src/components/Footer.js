"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  return (
    <motion.footer 
      className="mt-12 py-6 border-t border-gray-700 text-center text-gray-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-center gap-6 mb-4">
        <Link href="https://github.com/yourusername" target="_blank" className="hover:text-white transition">
          GitHub
        </Link>
        <Link href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-white transition">
          LinkedIn
        </Link>
        <Link href="mailto:yourmail@example.com" className="hover:text-white transition">
          Email
        </Link>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </motion.footer>
  )
}
