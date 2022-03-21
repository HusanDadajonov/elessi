import "./HeaderTopItem.scss"
function HeaderTopItem({icon}) {
  return (
    <li className='header__top--item'>
        <a href="#" className='header__top--link'>{icon}</a>
    </li>
  )
}

export default HeaderTopItem
