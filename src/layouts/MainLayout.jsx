import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

function MainLayout() {
  const { pathname } = useLocation()
  const isFullWidthPage = ['/', '/about-us', '/about-us/', '/residential', '/residential/', '/contact-us', '/contact-us/', '/faq', '/faq/'].includes(pathname)

  return (
    <div className="site-layout">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-[#FFF0D0] focus:px-4 focus:py-3 focus:text-[#100E0B]"
        href="#main-content"
      >
        Skip to content
      </a>
      <Navbar />
      <main
        id="main-content"
        className={`site-main ${isFullWidthPage ? 'w-full' : 'container'}`}
        tabIndex={-1}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
