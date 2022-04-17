import { RouteOrder } from "../routeOrder";
import Suggestions from "./Suggestions";
import Hide from "./Hide";
//import Suggestions from "./Suggestions";
import {useNavigate} from 'react-router-dom';

export default function Template(props){
  const components = { // since dynamic component names dont accept a string directly
    Home: '',
    Suggestions: Suggestions,
    Hide: Hide
  };
  
  let currIdx = RouteOrder.indexOf(`${props.spec}`);
  let CurrComponent = components[props.spec || 'Home'];
  let navigate = useNavigate();

  function onPrevButtonClick(){
   navigate('/'+RouteOrder[currIdx-1]);
  }

  function onNextButtonClick(){
    navigate('/'+RouteOrder[currIdx+1]);
  }

  return(
    <div className = "page-center">
      <div className = "col-1">
        <a className = "prev-btn" onClick = {onPrevButtonClick}> &larr; </a>
        <h3>{props.spec}</h3>
        <CurrComponent/>
      </div>
      <div className = "col-2">
        <a className = "next-btn" onClick = {onNextButtonClick}> &rarr; </a>
        <code className = "code-snippet-html">

        </code>
      </div>
    </div>
  );
}