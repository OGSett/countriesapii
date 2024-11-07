import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import FilterCont from "./FilterByCont";


const HomeContent = ({countries, dark, setDark, isDark, setIsDark, handleTheme}) => {

    const [drop, setDrop] = useState(false)
    const [theme, setTheme] = useState('light')
    const [selectedRegion, setSelectedRegion] = useState(null)
    const [searchValue, setSearchValue] = useState('')
    


    const handleDropBox = () => {
        if (drop === false) {
            setDrop(true)
        } else {
            setDrop(false)
        }
    }


    // const countryItems = countries.slice(0,8).map((country, index) => (
    //     <li key={index} className={`countryCard ${theme}`}>
    //       <div className="imgHolder">
    //         <img src={country.flags.png} alt={`${country.name.common} flag`} width="30" />
    //       </div>
    //       <div className="infoHolder">
    //         <p><strong>Name:</strong> {country.name.common}</p>
    //         <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
    //         <p><strong>Region:</strong> {country.region}</p>
    //         <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
    //       </div>
    //     </li>
    // ));

    
    // const handleAfricansSearch = () => {
    //     const africanCountries = countries.filter((country) => country.region === 'Africa');
    //     const items = africanCountries.map((country, index) => (
    //       <li key={index} className={`countryCard ${theme}`}>
    //         <div className="imgHolder">
    //           <img src={country.flags.png} alt={`${country.name} flag`} width="30" />
    //         </div>
    //         <div className="infoHolder">
    //           <p><strong>Name:</strong> {country.name}</p>
    //           <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
    //           <p><strong>Region:</strong> {country.region}</p>
    //           <p><strong>Capital:</strong> {country.capital || "N/A"}</p>
    //         </div>
    //       </li>
    //     ));
    //     setDisplayAfrica(true)
    //     setAfricanCountriesItems(items)
    // }

    useEffect(() => {
        if (dark === 1) {
            setTheme('dark');
          
        } else {
            setTheme('light');
        }
    }, [dark]);

    console.log('selected are ', selectedRegion)

    return ( 
        <main className={`mainContent ${theme}`}>
            <div className="searchAndFilter">
                <div className="searchandfilterholder">
                    <div className="search">
                        <IoIosSearch className={`searchIcon  ${theme}`}/>
                        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={`searchInp  ${theme}`} placeholder="Search for country"/>
                    </div>
                    <div className={`filter ${theme}`}>
                        <span>Filter by Region</span>
                        <FaChevronDown className='dropIcon' onClick={handleDropBox} />
                    </div>
                </div>
                
                {drop? ( <div className={`dropBoxContent ${theme}`}>
                    <button className="cntbtn" onClick={() => (setSelectedRegion('Africa'), setDrop(!drop))}>Africa</button>
                    <button className="cntbtn" onClick={() => (setSelectedRegion('Americas'), setDrop(!drop))}>America</button>
                    <button className="cntbtn" onClick={() => (setSelectedRegion('Asia'), setDrop(!drop))}>Asia</button>
                    <button className="cntbtn" onClick={() => (setSelectedRegion('Europe'), setDrop(!drop))}>Europe</button>
                    <button className="cntbtn" onClick={() => (setSelectedRegion('Oceania'), setDrop(!drop))}>Oceania</button>
                </div> ): ''}
                <ul className="cardHolder">
                    {/* {displayAfrica ? africanCountriesItems: countryItems } */}
                    <FilterCont countries={countries} theme={theme} selectedRegion={selectedRegion} searchValue={searchValue}/>
                </ul>
            </div>
        </main>
    );
}
 
export default HomeContent;