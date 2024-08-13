import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="row">
          <div>
            <h3>This is About Component</h3>
          </div>
          <div className="row">
            <h4> Sub title </h4>
          </div>
            <hr />
          <p>
            Without login you cannot go to Dashboard page.
          </p>
          <div className="row">
            <Link to={"/dashboard"}>
              {" "}
              <button className="btn btn-primary"> Go to dashboard</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
