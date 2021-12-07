import Project from "./Project"
import quizgame from "../quiz-game.png"
import bloggr from "../bloggr.png"

function Projects() {
    const quizgametags = ['jQuery']
    const bloggrtags = ['LiquidJS', 'ExpressJS', 'MongoDB']
    return (
        <>
            <h1>/projects</h1>
            <div class="projects-container" id="projects">
                <Project 
                    img={bloggr} 
                    title="Bloggr" 
                    about="A simple blogging app that allows users to create and manage their blog posts." 
                    tags={bloggrtags} 
                    github="https://github.com/mattclosson/bloggr"
                    livelink=""
                />
                <Project 
                    img={quizgame} 
                    title="Quiz Game" 
                    about="A trivia game styled in the Squid Game televsion show theme." 
                    tags={quizgametags} 
                    github="https://github.com/mattclosson/quiz-game"
                    livelink="https://seir-penguin-project-1-mattwclosson.vercel.app/"
                />
            </div>
        </>
    )
}

export default Projects