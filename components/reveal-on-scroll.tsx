"use client"

import { useEffect, useRef, useState } from "react"

type RevealOnScrollProps = {
  children: React.ReactNode
  className?: string
}

export function RevealOnScroll({ children, className = "" }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${className} reveal ${isVisible ? "reveal-visible" : ""}`}>
      {children}
    </div>
  )
}
