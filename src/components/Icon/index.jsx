import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Icon ({icon,title}){
    return(
        <div className='containerHight flex'>
            <FontAwesomeIcon className='ico' icon={icon}></FontAwesomeIcon>
            <div>{title}</div>
        </div>
    );

}

export default Icon;