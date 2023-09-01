function Header(props) {
    return (
        <nav>
        <ul className="main-nav">
            <li>elemento menu</li>
            <li>elemento menu</li>
            <li>elemento menu</li>
            <li>elemento menu</li>
        </ul>
        <ul className="user">
            <li>{props.usuario} <img src="./img/user.jpg" alt=""></img></li>
        </ul>
    </nav>)
}

export default Header;