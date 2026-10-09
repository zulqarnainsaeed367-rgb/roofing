import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './Pages/Home'
import AboutUs from './Pages/Aboutus'
import ContactUs from './Pages/Contactus'
import FreeInspection from './Pages/FreeInspection'
import FAQ from './Pages/FAQ'
import Commercial from './Pages/Commercial'
import Residential from './Pages/Residential'
import CapabilityStatement from './Pages/CapabilityStatement'
import NotFound from './Pages/NotFound'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="residential" element={<Residential />} />
        <Route path="commercial" element={<Commercial />} />
        <Route path="capability-statement" element={<CapabilityStatement />} />
        <Route path="free-inspection" element={<FreeInspection />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
