import React, { useEffect, useState } from 'react';
import './App.css';
import Advice from './Interfaces/Interface';
import getData from './DataServices/DataServices';
import AdviceGeneratorComponent from './components/AdviceGeneratorComponent';

export default function App() {
  const [adviceInfo, setAdviceInfo] = useState<Advice>();

  useEffect(() => {
    const adviceData = async () => {
      const fetchedData = await getData();
      setAdviceInfo(fetchedData);
    }

    adviceData();
  }, []);


  return (
    <div>
      {
        adviceInfo && <AdviceGeneratorComponent id={adviceInfo.id} advice={adviceInfo.advice}/>
      }
    </div>
  );
}
