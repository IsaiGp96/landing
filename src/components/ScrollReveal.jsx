import { useRef, useState, useEffect } from "react"
import { useIntersection } from "react-use"

export function ScrollReveal({ children, className, once = false, as: Component = "div", ...props }) {
  const container = useRef(null)

  const intersection = useIntersection(container, {
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.1,
  })

  const isIntersecting = intersection ? intersection.isIntersecting : false

  const [isActive, setActive] = useState(false)

  useEffect(() => {
    if (once && isIntersecting) {
      setActive(true)
    } else if (!once) {
      setActive(isIntersecting)
    }
  }, [isIntersecting, once])

  return (
    <Component ref={container} className={className} {...props}>
      {children(isActive)}
    </Component>
  )
}
