import Description from '../components/Description';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Nav from '../components/Nav'
import Contact from '../components/Contact'
import { useState } from 'react';
import { ThemeContext, themes } from '../utils/Context'

function Home() {
    const [darkMode, setDarkMode] = useState(true)
    return (
        <div className="App">
            <ThemeContext.Consumer>
                {({ changeTheme }) => (
                <button 
                    color="link"
                    onClick={() => {
                    setDarkMode(!darkMode);
                    changeTheme(darkMode ? themes.light : themes.dark);
                    }}
                    className="theme-btn"
                >
                    <i className={darkMode ? 'fas fa-moon' : 'fas fa-sun'}></i>
                </button>
                )}
            </ThemeContext.Consumer>
            <Nav />
            <Header />
            <Description />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home