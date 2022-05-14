import React from 'react'
import Header from '../../components/Home/Header/Index';
import Listing from '../../components/Home/Listing/Index';
import { useEffect, useState } from 'react';

const Home = () => {

  const api = 'https://test.canalrcndigital.com/notas.json';

  const [datos, setDatos] = useState([]);

  const getData = async () => {

    const response = await fetch(api);
    const responseJSON = await response.json();
    setDatos(responseJSON);

  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>

      <Header />
      <Listing datos={datos}/>

    </div>
    
  );
}

export default Home