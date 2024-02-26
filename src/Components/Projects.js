import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/image/color-sharp2.png";
import projImg1 from "../assets/image/project-img1.png";
import projImg2 from "../assets/image/project-img2.png";
import projImg3 from "../assets/image/project-img3.png";
import "animate.css";
export const Projects = () => {
  const projects = [
    {
      title: "TextUtils",
      description: "Design and Development",
      imgUrl: projImg1,
    },
    {
      title: "News Monkey App",
      description: "Design and Development",
      imgUrl: projImg2,
    },
    {
      title: "Image Search App",
      description: "Design and Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            
                  <h2>Projects</h2>
                  <p>
                    This project serves as a showcase of my skills in ReactJS,
                    demonstrating my ability to build dynamic and responsive web
                    applications. Each project featured in this portfolio is
                    crafted using ReactJS, showcasing my proficiency in
                    leveraging its powerful features for front-end development.
                    From interactive user interfaces to seamless data handling,
                    ReactJS empowers these projects with efficiency and
                    scalability.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      
                    
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">Lorem Ipsum</Tab.Pane>
                      <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img"></img>
    </section>
  );
};
