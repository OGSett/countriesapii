import { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";


const FilterCont = ({ countries, theme, selectedRegion, searchValue }) => {
    const [filteredCountriesItems, setFilteredCountriesItems] = useState([]);
    const [upp, setUpp] = useState(true)
    const [goto, setGoto] = useState(null)

    const Test = () => {
        return (
            <ul>
            {filteredCountriesItems.length > 0 ? (
                filteredCountriesItems
            ) : (
                <p>No countries found matching your criteria.</p>
            )}
        </ul>
        )
    }

    const Test2 = () => {
        const selectedCountry = countries.find((country)=> country.name.common.toLowerCase() === goto.toLowerCase())
        if (!selectedCountry) {
            return <p>No country found!</p>
        }
        const firstNativeName = selectedCountry.name.nativeName
            ? Object.values(selectedCountry.name.nativeName)[0].common
            : 'N/A';
        const firstCurrency = selectedCountry.currencies
            ? Object.values(selectedCountry.currencies)[0].name
            : 'N/A';
        const languages1 = selectedCountry.languages
            ? Object.values(selectedCountry.languages)
            : [];
            const formattedLanguages = languages1.join('').replace(/([a-z])([A-Z])/g, "$1, $2")

        const formattedNumber = selectedCountry.population.toLocaleString();
        console.log(selectedCountry)
        return (
            <div>
                <a href="/"><IoArrowBack /> <span>Back</span></a>
                <div>
                    <img src={selectedCountry.flags.png} alt={`${selectedCountry.name.common} flag`} />
                </div>
                <div className="infoHolder">
                    <div className="info">
                        <div className="mainInfo">
                            <h3>{selectedCountry.name.common}</h3>
                            <p><strong>Native Name :</strong>{firstNativeName}</p>
                            <p><strong>Population :</strong>{formattedNumber}</p>
                            <p><strong>Region :</strong>{selectedCountry.region}</p>
                            <p><strong>Sub Region :</strong>{selectedCountry.subregion}</p>
                            <p><strong>Capital :</strong>{selectedCountry.capital}</p>
                        </div>
                        <div className="SubInfo">
                            <p><strong>Top Level Domain :</strong>{selectedCountry.tld}</p>
                            <p><strong>Currencies :</strong>{firstCurrency}</p>
                            <p><strong>Languages :</strong>{formattedLanguages}</p> 
                            
                        </div>
                    </div>
                    <div className="bordersHolder">
                        <p><strong>Border Countries:</strong></p>
                        {selectedCountry.borders && selectedCountry.borders.length > 0 ? (
                            selectedCountry.borders.map((borderCode, index) => (
                            <button key={index} className="border-button">
                                {borderCode}
                            </button>
                            ))
                        ) : (
                        <p>No border countries</p>
                        )}
                    </div>
                </div>
            </div>
        )
    }

   

    useEffect(() => {
        const handleCardClick = (countryName) => {
            setUpp(!upp)
            setGoto(countryName)
        }

        if (searchValue) {
            const searchCountryItems = countries
                .filter((country) => country.name.common.toLowerCase().includes(searchValue.toLowerCase()))
                .map((country, index) => (
                    <li key={index} className={`countryCard ${theme}`} onClick={() => handleCardClick(country.name.common)}>
                        <div className="imgHolder">
                            <img src={country.flags.png} alt={`${country.name.common} flag`} width="30" />
                        </div>
                        <div className="infoHolder">
                            <p><strong>Name:</strong> {country.name.common}</p>
                            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                            <p><strong>Region:</strong> {country.region}</p>
                            <p><strong>Capital:</strong> {country.capital || "N/A"}</p>
                        </div>
                    </li>
                ));
            setFilteredCountriesItems(searchCountryItems);
        } else if (selectedRegion) {
            const filtredByRegCountries = countries.filter((country) => country.region === selectedRegion);
            const items = filtredByRegCountries.map((country, index) => (
                <li key={index} className={`countryCard ${theme}`} onClick={() => handleCardClick(country.name.common)}>
                    <div className="imgHolder">
                        <img src={country.flags.png} alt={`${country.name.common} flag`} width="30" />
                    </div>
                    <div className="infoHolder">
                        <p><strong>Name:</strong> {country.name.common}</p>
                        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                        <p><strong>Region:</strong> {country.region}</p>
                        <p><strong>Capital:</strong> {country.capital || "N/A"}</p>
                    </div>
                </li>
            ));
            setFilteredCountriesItems(items);
        } else {
            const countryItems = countries.slice(0, 8).map((country, index) => (
                <li key={index} className={`countryCard ${theme}`} onClick={() => handleCardClick(country.name.common)}>
                    <div className="imgHolder">
                        <img src={country.flags.png} alt={`${country.name.common} flag`} width="30" />
                    </div>
                    <div className="infoHolder">
                        <p><strong>Name:</strong> {country.name.common}</p>
                        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                        <p><strong>Region:</strong> {country.region}</p>
                        <p><strong>Capital:</strong> {country.capital || "N/A"}</p>
                    </div>
                </li>
            ));
            setFilteredCountriesItems(countryItems);
        }
    }, [selectedRegion, countries, theme, searchValue, goto, upp]);

    return (
        <div>{upp? <Test /> : <Test2 />}</div>
    );
};

export default FilterCont;
