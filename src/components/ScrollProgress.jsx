"use client"

import { useMemo } from "react"
import { useWindowScroll, useWindowSize } from "react-use"

export function ScrollProgress() {
  const { y } = useWindowScroll()
  const { height } = useWindowSize()

  const progress = useMemo(() => {
    if (typeof document === "undefined") return 0

    const scrollable = document.documentElement.scrollHeight - height
    if (scrollable <= 0) return 0

    return Math.min(100, Math.max(0, (y / scrollable) * 100))
  }, [y, height])

  return (
    <div className="absolute inset-x-0 bottom-0 h-px bg-white/10">
      <div
        className="h-full bg-accent-400 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
