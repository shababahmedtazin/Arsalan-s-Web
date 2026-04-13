import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Signatures from './components/sections/Signatures'
import MenuSection from './components/sections/MenuSection'
import Gallery from './components/sections/Gallery'
import Testimonials from './components/sections/Testimonials'
import Story from './components/sections/Story'
import Location from './components/sections/Location'
import ContactCTA from './components/sections/ContactCTA'

export default function App() {
  return (
    <div className="bg-bg text-cream font-body grain min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Signatures />
        <MenuSection />
        <Gallery />
        <Testimonials />
        <Story />
        <Location />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
