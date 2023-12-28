import { Container,Row,Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../Assets/img/node_new.svg";
import skill2 from "../Assets/img/react.svg";
import skill3 from "../Assets/img/angular.svg";
import skill4 from "../Assets/img/git.svg";
import skill5 from "../Assets/img/jenkins-svgrepo-com.svg";
import skill6 from "../Assets/img/kubernetes-svgrepo-com.svg";
import skill7 from "../Assets/img/html.svg";
import skill8 from "../Assets/img/css.svg";
import skill9 from "../Assets/img/python.svg";
import skill11 from "../Assets/img/docker.svg";
import skill12 from "../Assets/img/2993682_brand_brands_linux_logo_logos_icon.svg";
import skill13 from "../Assets/img/aws-svgrepo-com.svg";
import skill14 from "../Assets/img/terraform-svgrepo-com.svg"
import colorSharp from "../Assets/img/color-sharp.png"



export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

        return (
            <section className= "skill" id = "skills">
                <Container>
                    <Row>
                        <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Some of my many skills</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src ={skill2} alt="Image"/>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src ={skill1} alt="Image"/>
                                    <h5>Node</h5>
                                </div>
                                
                                <div className="item">
                                    <img src ={skill3} alt="Image"/>
                                    <h5>Angular</h5>
                                </div>

                                <div className="item">
                                    <img src ={skill4} alt="Image"/>
                                    <h5>Git</h5>
                                </div>

                                <div className="item">
                                    <img src ={skill5} alt="Image"/>
                                    <h5>Jenkins</h5>
                                </div>

                                <div className="item">
                                    <img src ={skill6} alt="Image"/>
                                    <h5>Kubernetes</h5>
                                </div>

                                <div className="item">
                                    <img src ={skill7} alt="Image"/>
                                    <h5>HTML</h5>
                                </div>

                                <div className="item">
                                    <img src ={skill8} alt="Image"/>
                                    <h5>CSS</h5>
                                </div>

                                <div className="item">
                                    <img src ={skill13} alt="Image"/>
                                    <h5>AWS</h5>
                                </div>

                                <div className="item">
                                    <img src ={skill9} alt="Image"/>
                                    <h5>Python</h5>
                                </div>

                                <div className="item">
                                    <img src ={skill11} alt="Image"/>
                                    <h5>Docker</h5>
                                </div>

                                <div className="item">
                                    <img src ={skill12} alt="Image"/>
                                    <h5>Linux</h5>
                                </div>

                                <div className="item">
                                    <img src ={skill14} alt="Image"/>
                                    <h5>Terraform</h5>
                                </div>
                            </Carousel>
                        </div>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-left" src={colorSharp} />

            </section>


                )    
    
}