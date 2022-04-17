import {useNavigate} from 'react-router-dom';
import { RouteOrder } from "../routeOrder";

export default function Home(){
  let navigate = useNavigate();

  function onNextButtonClick(){
    navigate('/'+RouteOrder[1]);
  }
  return(
    <div className="home page-center">
      <h1> UI Widgets </h1>
      <a className = "next-btn" onClick = {onNextButtonClick}> &rarr; </a>
    </div>
  )
}