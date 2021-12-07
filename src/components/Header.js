import Linkedin from '../linkedin.svg'

function Header() {
    return (
        <div class="header-container">
            <div class="header-name"><h1>Matt Closson</h1></div>
            <div><img src={Linkedin} /></div>
        </div>
    )
}

export default Header