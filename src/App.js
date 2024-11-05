import './App.css';
import { useEffect, useState } from "react";
import Home from './pages/HomePage';
import axios from 'axios';

function App() {
  const [dark, setDark] = useState('Dark');
  const [isDark, setIsDark] = useState('Dark');

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital')
    .then(response => {
      setCountries(response.data);
      setLoading(false)
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
      setLoading(false)
    })
  }, [])

  if (loading) return <p> Loading... </p>;

  const handleTheme = () => {
    if ( dark === 'Dark') {
      setDark('Light')
      setIsDark(0)
    } else {
      setDark('Dark')
      setIsDark(1)
    }
  }

  console.log('in app', dark, isDark)


  return (
    <Home countries={countries} dark={dark} setDark={setDark} isDark={isDark} setIsDark={setIsDark} handleTheme={handleTheme}/>
  );
}

export default App;
