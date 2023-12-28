import { Container,Row,Col,Nav,Tab} from "react-bootstrap";
import { ServiceCard} from "./Servicecard";
import projImg1 from "../Assets/img/ecom.jpeg";
import projImg2 from "../Assets/img/fullstack.jpeg";
import projImg3 from "../Assets/img/weddes.jpeg";
import projImg5 from "../Assets/img/backend.jpeg";
import projImg4 from "../Assets/img/defvops.jpeg";
import colorSharp2 from "../Assets/img/color-sharp2.png";
import 'animate.css';
//import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Services = () => {

        const services= [
            {
                title: "E-Commerce Website",
                description: "MERN and MEAN stack",
                imgUrl: projImg1,
              },
              {
                title: "Full-Stack Applications",
                description: "Design & Development",
                imgUrl: projImg2,
              },
              {
                title: "Web Design",
                description: "BootStrap, CSS and WordPress",
                imgUrl: projImg3,
              },
              {
                title: "DevOps",
                description: "Containerization, CI/CD pipelines and Deployment",
                imgUrl: projImg4,
              },
              {
                title: "Backend Development",
                description: "Node and PHP",
                imgUrl: projImg5,
              }
        ];

        return(
            <section className="project" id="projects">
            <Container>
              <Row>
                <Col size={12}>
                  <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                      <h2>Services</h2>
                      <p>These are the services I provide for Remote Work.
                        Hope it helps :P
                      </p>
                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Service</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                          <Tab.Pane eventKey="first">
                            <Row>
                              {
                                services.map((project, index) => {
                                  return (
                                    <ServiceCard
                                      key={index}
                                      {...project}
                                      />
                                  )
                                })
                              }
                            </Row>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>}
                  </TrackVisibility>
                </Col>
              </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
          </section>
        )

}