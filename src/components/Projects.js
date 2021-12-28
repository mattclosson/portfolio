import Project from "./Project"
import quizgame from "../quiz-game.png"
import paymo from "../paymo.png"
import bloggr from "../bloggr.svg"
import binary from "../binary-vis.png"
import moviebox from "../moviebox.png"

function Projects() {
    const paymotags = ['Javascript', 'Express', 'React']
    const movietags = ['Python', 'Masonite', 'Javascript', 'Recat']
    const quizgametags = ['jQuery']
    const bloggrtags = ['LiquidJS', 'ExpressJS', 'MongoDB']
    const binarytags = ['Javascript']
    return (
        <>
            <h1 style={{marginTop:"-30px", paddingTop:"30px"}} id="projects">/projects</h1>
            <div class="projects-container">
                <Project 
                    img={paymo} 
                    title="Paymo" 
                    about="An app that allows you to create invoices and receive payments. Built with the Stripe API." 
                    tags={paymotags} 
                    github="https://github.com/mattclosson/quiz-game"
                    livelink="https://seir-penguin-project-1-mattwclosson.vercel.app/"
                />
                <Project 
                    img={moviebox} 
                    title="Movie Box" 
                    about="An app where users can review movies on a 1-5 star system." 
                    tags={movietags} 
                    github="https://github.com/mattclosson/quiz-game"
                    livelink="https://seir-penguin-project-1-mattwclosson.vercel.app/"
                />
                <Project 
                    img={binary} 
                    title="Binary Search Visualizer" 
                    about="Visualize a binary search algorithm and compare it to a linear search." 
                    tags={binarytags} 
                    github="https://github.com/mattclosson/linear-binary-visualizer"
                    livelink="https://binary-linear-search.netlify.app/"
                />
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