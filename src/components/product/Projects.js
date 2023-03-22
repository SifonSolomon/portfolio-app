import './projects.css'
const Projects = (props) => {
  return (
    <div className='card'>
    <a href={props.link} target="_blank" rel="noopener noreferrer" className="project-card">
       <img src={props.imageSrc} alt={props.title}/>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
    </div>
  );
}
export default Projects;