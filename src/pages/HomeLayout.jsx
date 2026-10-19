import { Outlet, useNavigation, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  const navigation = useNavigation()
  const location = useLocation()
  const isPageLoading = navigation.state === 'loading'
  const value = 'some value'
  const isFullWidthPage =
    ['/newsletter', '/about'].includes(location.pathname) ||
    /^\/cocktail\/[^/]+\/?$/.test(location.pathname)
  return (
    <>
      <Navbar />
      <section className={isFullWidthPage ? 'newsletter-page' : 'page'}>
        {isPageLoading ? (
          <div className="loading" />
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </>
  )
}
export default HomeLayout
