import { Link } from "react-router-dom"

function Resume () {
    return (
        <div className="resume-page">
            <Link to="/" style={{marginLeft:"23px"}}>&#8592; back to home page</Link>
            <div className="resume-container">
                <div class="resume-header">
                    <h1>Matt Closson</h1>
                    <a href="#">View PDF Version</a>
                </div>
                <p>(410) 564-6960 | mattwclosson@gmail.com</p>
                <p><a href="http://linkedin.com/in/matt-closson" target="_blank">LinkedIn</a> | <a href="http://github.com/mattclosson" target="_blank">Github</a></p>
                <h2>Skills</h2>
                <ul>
                    <li><strong>Frontend:</strong> React, Vue, Angular, Svelte, NextJS, jQuery, Redux</li>
                    <li><strong>Backend:</strong> ExpressJS, Node, Django, Masonite, Flask, Python, MongoDB, Postgres, Apollo, GraphQL</li>
                    <li><strong>Languages:</strong> Javascript, Typescript, Python</li>
                    <li><strong>DevOps:</strong> Docker, AWS, Lambda, Firebase, Netlify, Heroku, Vercel</li>
                    <li><strong>Methodologies:</strong> Object-Oriented Programming, MVC, Test-Drive Development, Responsive Design, Authentication, Wireframing, Agile, Scrum, Kanban</li>
                </ul>
                <h2>Experience</h2>
                <h3>Agora Financial</h3>
                <h4>Frontend Developer | 2019-2020 | Baltimore, MD</h4>
                <ul>
                    <li>Developed ecommerce funnels and sales promos on enterprise scale systems using jQuery, HTML, and CSS.</li>
                    <li>Created landing pages for clients using GatsbyJS.</li>
                    <li>Worked productively with copywriters and product managers to deliver sale campaigns successfully.</li>
                    <li>Part of a company wide 50% layoff due to covid.</li>
                </ul>
                <h3>Social Wallet</h3>
                <h4>Frontend Developer | 2018-2019 | Austin, TX</h4>
                <ul>
                    <li>Implemented and updated application features using VueJS and Postgres.</li>
                    <li>Effectively addressed complex bug issues.</li>
                    <li>Worked with real-time crypto data to deliver user-friendly analytics and tools.</li>
                </ul>
                <h2>Education</h2>
                <h3>General Assembly</h3>
                <h4>Software Engineering Immersive | Aug-Dec 2021</h4>
            </div>
        </div>
    )
}

export default Resume