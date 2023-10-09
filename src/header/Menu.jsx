import './Menu.css'


function Menu() {
  
  return (
    <header>
    <div className='header'>
      <div className='LogoMenu'>
        <div className="Logo">
          <img src="src/assets/Logotype.png" alt="Logo" />
        </div>
        <div className="MainMenu">
          <button className='ButtonMenu'>
            <img src="src/assets/Group.png" alt="Меню" />
            <p>Услуги</p>
          </button>
        </div>
      </div>
      <div className='MenuTel'>
        <div className="menu">
          <a href="#">Работы</a>
          <a href="#">О компании</a>
          <a href="#">Акции</a>
          <a href="#">Контакты</a>
        </div>
        <div className="telefon">
          <p>+7 495 207-75-70</p>
        </div>
      </div>
    </div>

    <div className='line' />
    
    </header>
  )
}

export default Menu