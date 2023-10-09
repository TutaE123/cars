import './Header.css' 
import Menu from './Menu'
import HeaderContent from './HeaderContent'


function Header() {

    return (
        <header>  
            <div className='img'>
                <Menu />
                <HeaderContent />
            </div>
        </header>
    )
}

export default Header