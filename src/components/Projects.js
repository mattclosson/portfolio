import Project from "./Project"
import quizgame from "../quiz-game.png"
import bloggr from "../bloggr.png"

function Projects() {
    return (
        <>
            <h1>/projects</h1>
            <div class="projects-container" id="projects">
                <Project img={bloggr} title="Bloggr" about=" " />
                <Project img={quizgame} title="Quiz Game" about="A trivia game styled in the Squid Game televsion show theme. This application was built on Jquery."/>
            </div>
        </>
    )
}

export default Projects