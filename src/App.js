import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCircle } from "react-icons/fa";
import './components/media.css';
function App() {
const [data,setdata]=useState([]);

  useEffect(()=>{

    axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {
      // handle success
      console.log(response.data.results);
      setdata(response.data.results)
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  },[]);







  return (
    <>

<div className='row d-flex'>
    {
      data.map((item)=>{
        return(
          <>
          <div className='card '>
            <div className='dimage'>
              <img src={item.image}></img>
            </div>
            <div className='cardcontent'>

              <div className='section'>
              <h2>{item.name}</h2>              
              <span className='status'>
                <span className='status-icon'>
                  {
                    (item.status=='Alive')?<FaCircle  className='txt-green'/>:(item.status=='Dead')?<FaCircle className='txt-red'/>:<FaCircle/>
                  }
                  </span>
                {item.status} - {item.species}
              </span>
              </div>

              <div className='section'>
              <span className='text-gray'>Last Known location:</span>            
              <a>
                {item.location.name}
              </a>
              </div>

              <div className='section'>
              <span className='text-gray'>First seen in:</span>            
              <a>
                {item.origin.name}
              </a>
              </div>
            </div>
          </div>
          </>
        )
      })
    }
</div>

    </>
  );
}

export default App;
