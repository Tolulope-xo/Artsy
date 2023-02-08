import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

