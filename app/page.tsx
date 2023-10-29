import Image from 'next/image'
import Layout from './layout'
import Banner from './components/Banner'
import Hero from './components/Hero'

export default function Home() {
  return (
    <div>
      <Banner />
      <Hero />
    </div>
  )
}
