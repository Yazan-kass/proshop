import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as mm } from '@fortawesome/free-regular-svg-icons';


function Star (){
    return(
        <FontAwesomeIcon className='StarIcon' icon={faStar} />
    );
}

function HalfStar (){
    return(
        <FontAwesomeIcon className='StarIcon' icon={faStarHalfStroke} />
    );
}

function EmptyStar (){
    return(
        <FontAwesomeIcon className='StarIcon' icon={mm} />
    );
}

export default Star;
export {HalfStar,EmptyStar}