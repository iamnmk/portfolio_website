import { Container,Row,Col,Nav,Tab} from "react-bootstrap";
import { ServiceCard} from "./Servicecard";
import projImg1 from "../Assets/img/header_new.jpeg";
import projImg2 from "../Assets/img/header_new.jpeg";
import projImg3 from "../Assets/img/header_new.jpeg";
import colorSharp2 from "../Assets/img/color-sharp2.png";
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
                imgUrl: projImg1,
              },
              {
                title: "Backend Development",
                description: "Node and PHP",
                imgUrl: projImg2,
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
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                          <Tab.Pane eventKey="section">
                            <p>First Section.</p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <p>Second Section</p>
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