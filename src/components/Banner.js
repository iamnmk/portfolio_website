import { Container,Row, Col } from "react-bootstrap"

export const Banner = () => {
        return(
            <section className = "banner" id="home">
              <Container>
                <Row className="align-items-center">
                    <Col xs ={12} md = {6} xl={7}>
                        <span className = 'tagline'>Welcome to my profile!</span>
                        <h1>{'Hi I am an Developer!'} <span className="wrap">Full Stack And DevOps</span></h1>
                        <p> I am a versatile Full Stack Developer and seasoned DevOps Engineer dedicated to crafting robust, scalable, and efficient solutions that bridge the gap between development and operations. With a passion for innovation and a keen eye for detail, I thrive in dynamic environments where I can seamlessly navigate the entire software development lifecycle.</p>
                        <button>onClick={() => console.log('connect')}</button>
                    </Col>
                </Row>
              </Container>

            </section>

        )

}