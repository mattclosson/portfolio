import {Link} from 'react-router-dom'
function Project(props) {
    const tags = props.tags || []
    return (
        <a href={props.livelink} class="project-container">
            <img src={props.img} width="100%" />
            <div className="project">
                <h2>{props.title}</h2>
                <p>{props.about}</p>
                <ul>
                    {tags.map((item, i) => (<li>{item}</li>))}
                </ul>
                <span><a href={props.github} target="_blank"><i class="fab fa-github"></i></a> <a href={props.livelink} target="_blank"><i class="fas fa-link"></i></a></span>
            </div>
        </a>
    )
}

export default Project