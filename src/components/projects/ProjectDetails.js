import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id
    return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title"> Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem commodi totam ex consequatur. Provident
            necessitatibus autem error dolore corporis adipisci neque laudantium
            commodi asperiores in repellat dolorum vel, expedita velit!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
            <div>Posted by AA</div>
            <div>3rd July</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
