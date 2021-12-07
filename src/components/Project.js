function Project(props) {
    return (
        <div class="project-container">
            <img src={props.img} width="100%" />
            <div className="project">
                <h2>{props.title}</h2>
                <p>{props.about}</p>
                <span><a href="github.com"><i class="fab fa-github"></i></a> <a href="heroku.com"><i class="fas fa-link"></i></a></span>
            </div>
        </div>
    )
}

export default Project