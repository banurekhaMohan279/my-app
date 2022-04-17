import {useState, useMemo, useEffect} from 'react';
import '../App.css';

//https://dmitripavlutin.com/react-throttle-debounce/
// now input is uncontrolled - coz if we use both onchange and onkeyup - multiple calls triggering despite debounce

const INPUT_TIMEOUT = 250; //ms - It's our input delay
function App() {
    const [predictions, setPredictions] = useState([]);
  
    function filterPredictions(value) {
      // let's say that it's an API call
      let result =  [
        'Boston',
        'Los Angeles',
        'San Diego',
        'San Franciso',
        'Sacramento',
        'New York',
        'New Jersie',
        'Chicago',
      ].filter(item => item.toLowerCase().indexOf(value.toLowerCase()) !== -1);
      console.log(result);
      return result;
    }
  
    function debounce(func){
      let timer = null;
      return function(...args){
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
          func.call(this,...args);
        },INPUT_TIMEOUT)
      }
    }

    const fetchPredictions = (event) => {
      let value = event.target.value;
      if (value.length > 0) {
          const predictions = filterPredictions(value);
          setPredictions(predictions);
      } else {
        setPredictions([]);
      }
    }

    const debouncedChangeHandler = useMemo( () => debounce(fetchPredictions), [] );

    useEffect(() => {
      return () => {
        debouncedChangeHandler.cancel();
      }
    }, []);

        return ( 
          <div >
          <input type = "text"  onChange = {debouncedChangeHandler}/>
            <div> 
            {
              predictions && predictions.map((item, index) => (
                <div key={index + item}>{item}</div>
              ))
            } 
            </div> 
          </div>
        )
    }

export default App;
