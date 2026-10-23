import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const getScrollBehavior = () => (
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
)

export const ScrollRestoration = () => {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const targetId = decodeURIComponent(hash.slice(1))
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({
          block: 'start',
          behavior: getScrollBehavior(),
        })
      })
      return () => window.cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, left: 0, behavior: getScrollBehavior() })
    return undefined
  }, [pathname, hash])
  return null
}

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={`scroll-to-top ${visible ? 'is-visible' : ''}`}
      aria-label="回到頂端"
      onClick={() => window.scrollTo({ top: 0, behavior: getScrollBehavior() })}
    >
      ↑
    </button>
  )
}
