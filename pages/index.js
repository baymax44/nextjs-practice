import Head from 'next/head'
import Footer from '../comps/Footer'
import NavBar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Homepage</h1>
      <Footer />
    </div>
  )
}
