import Description from '../components/Description';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Nav from '../components/Nav'
import Contact from '../components/Contact'

function Home() {
    return (
        <div className="App">
            <Nav />
            <Header />
            <Description />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home