import { Row, Col} from 'antd';
import {Link} from "react-router-dom";

import FT from "assets/img/ft.png";

function WeWant() {
    return (
        <div className="home-wewant">
            <h2 className="section-title">We are the developers you want.
            <p>
                Our team of Happiness Engineers works remotely from 58 countries
                providing
                <br /> customer support across multiple time zones.
            </p>
            </h2>
            <img alt="" src={FT} className="img-fluid" />
            
            <div className="contact-section">
                <div className="container">
                <Row justify="center" align="middle">
                    <Col md={15}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur{" "}
                            <b>adipiscing elit. Nunc non turpis vel</b> enim volutpat
                            hendrerit
                        </p>
                    </Col>
                    <Col>
                    <Link to="/" className="btn btn-primary">Contact Us</Link>
                    </Col>
                </Row>
                </div>
            </div>  
        </div>
    )
}

export default WeWant
