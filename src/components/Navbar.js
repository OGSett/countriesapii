
import { MdOutlineDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";

const NavBar = ({dark, setDark, isDark, setIsDark, handleTheme}) => {
    console.log('in nav', dark, isDark)
    const [modeIs, setModeIs] = useState('Light');

    useEffect(() => {
        if (dark === 1) {
          document.body.classList.add('dark');
          setModeIs('Light')
        } else {
          document.body.classList.remove('dark');
          setModeIs('Dark')
        }
      }, [dark]);
    
    return ( 
        <div className= 'navWrapper'  >
            <div className="left">
              <a href="/" className="logo"><h2>Where in the world?</h2></a>
            </div>
            <div className="right">
                <button onClick={() => setDark(dark === 0 ? 1 : 0)} className="btntheme">
                <MdOutlineDarkMode className={dark === 1 ? 'islight' : 'ss'} onClick={handleTheme} />
                </button>
                <span className="chooseTheme">{modeIs} Mode</span>
            </div>
        </div>
     );
}
 
export default NavBar;