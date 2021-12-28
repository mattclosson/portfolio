import { Link } from "react-router-dom"

function Nav() {
    return (
        <div class="nav-container">
            <ul>
                <li class="animate__animated animate__fadeInUp"><a href="#">/home</a></li>
                <li class="animate__animated animate__fadeInUp animate__delay-1s"><a href="#projects">/projects</a></li>
                <li class="animate__animated animate__fadeInUp animate__delay-2s"><a href="#contact">/contact</a></li>
                <li class="animate__animated animate__fadeInUp animate__delay-3s"><Link to="/resume">/resume</Link></li>
            </ul>
        </div>
    )
}

export default Nav