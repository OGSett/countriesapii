import { useState, useEffect } from "react";

const FilterCont = ({ countries, theme, selectedRegion, searchValue }) => {
    const [filteredCountriesItems, setFilteredCountriesItems] = useState([]);

    useEffect(() => {
        if (searchValue) {
            const searchCountryItems = countries
                .filter((country) => country.name.common.toLowerCase().includes(searchValue.toLowerCase()))
                .map((country, index) => (
                    <li key={index} className={`countryCard ${theme}`}>
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
                <li key={index} className={`countryCard ${theme}`}>
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
                <li key={index} className={`countryCard ${theme}`}>
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
    }, [selectedRegion, countries, theme, searchValue]);

    return (
        <ul>
            {filteredCountriesItems.length > 0 ? (
                filteredCountriesItems
            ) : (
                <p>No countries found matching your criteria.</p>
            )}
        </ul>
    );
};

export default FilterCont;
