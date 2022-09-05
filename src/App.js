import MobileNavbar from './Components/Navbar/MobileNavbar'
import DesktopNavbar from './Components/Navbar/DesktopNavbar'

import "./index.css"

function App() {


  return (
    <div className='bg-primary h-screen w-full text-white overflow-hidden relative'>

        <section>

            <nav className='relative desktop:hidden'>
              <MobileNavbar/>
            </nav>

            <nav className='mobile:hidden'>
              <DesktopNavbar />
            </nav>

          </section>

    </div>
  );
}

export default App;
