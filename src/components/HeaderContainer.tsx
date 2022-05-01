import React, { useEffect, useState } from 'react'

type HeaderContainerProps = {
  /** The content of the header */
  children: React.ReactNode[] | React.ReactNode
}

export default function HeaderContainer({ children }: HeaderContainerProps) {
  
  /** @const {boolean} stucked If true, the header will have white background */
  const [stucked, setStucked] = useState<boolean>(window.scrollY !== 0);

  /**
   * Sets the stucked state to true if csrolled on website, otherwise it will be false
   */
  const toggleStuck = (): void => {
    setStucked(window.scrollY !== 0);
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleStuck);

    return () => {
      window.removeEventListener('scroll', toggleStuck);
    }
  }, []);

  // --------------------------------------------

  return (
    <header className={`z-30 fixed top-0 left-0 right-0 px-4 ${stucked ? 'bg-white' : ''} text-base text-dark`}>
      <nav className="flex container py-2">
        {children}
      </nav>
    </header>
  )
}