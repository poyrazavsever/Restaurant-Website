import MobileNavbar from './Components/Navbar/MobileNavbar'
import DesktopNavbar from './Components/Navbar/DesktopNavbar'
import MainPage from './Components/MainPage/MainPage';

import "./index.css"

function App() {


  return (
      <div className='bg-primary h-screen w-full text-white overflow-x-hidden relative'>

      <nav className='desktop:hidden z-20 fixed bg-primary'>
        <MobileNavbar/>
      </nav>

      <nav className='mobile:hidden z-20 fixed bg-primary'>
        <DesktopNavbar />
      </nav> 

      <MainPage />
 

    </div>
  );
}

export default App;
