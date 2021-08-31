import { useEffect, useState } from 'react';
import { getCounties, getReportByCountry } from './apis';
import CountrySelector from './components/CountrySelector';
import Highlight from './components/Highlight';
import Summary from './components/Summary';


function App() {
  const [countries, setCountries] = useState([]);
  const [selecCountryId, setSelectedCountryId] = useState (''); 


  useEffect(()=> {
    getCounties()
    .then(res =>{
      console.log({res})
      setCountries(res.data)
    })
  }, [])

  const handleOnchange = (e) =>{
    setSelectedCountryId(e.target.value)
  };

  useEffect(() => {
    if (selectedCountryId) {
      const selectedCountry = countries.find(
        (country) => country.ISO2 === selectedCountryId.toUpperCase()
      );
      getReportByCountry(selectedCountry.Slug).then((res) => {
        console.log('getReportByCountry', { res });
        // remove last item = current date
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [selectedCountryId, countries]);
  
  return (

    <div>
      <CountrySelector countries = {countries} handleOnchange={handleOnchange}/>
      <Highlight></Highlight>
      <Summary></Summary>
    </div>
  );
}

export default App;
