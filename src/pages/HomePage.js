import HomeContent from "../components/HomeContent";
import NavBar from "../components/Navbar";

const Home = ({countries, dark, setDark, isDark, setIsDark, handleTheme}) => {
    console.log(countries)



    return ( 
        <div>
            <NavBar dark={dark} setDark={setDark} isDark={isDark} setIsDark={setIsDark} handleTheme={handleTheme}/>
            <HomeContent countries={countries} dark={dark} setDark={setDark} isDark={isDark} setIsDark={setIsDark} handleTheme={handleTheme}/>
            <footer className="myFoot">
                <p>Author: Youssef MK</p>
                <p><a href="mailto:ecomseth@gmail.com">ecomseth@gmail.com</a></p>
            </footer>
        </div>
     );
}
 
export default Home;