import {Component} from 'react';
import Button from '../Button';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon';


class Header extends Component {
    render(){
        return(
            <header className='flex'>
                <div className='flex container'>
                    <div className='ProShop'><span>Pro</span>Shop</div>
                    <div className='Search flex'>
                            <input placeholder='iphone' defaultValue={''}/>
                            <Button inHeader>
                                <FontAwesomeIcon className='ico' icon={faSearch}></FontAwesomeIcon>
                                Search
                                </Button>
                    </div>
                    <div className='Icons flex'>
                        <Icon icon={faUser} title='Login / Sign up'></Icon>
                        <Icon icon={faBookmark} title='Wishlist'></Icon>
                        <Icon icon={faCartShopping} title='Cart'></Icon>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;