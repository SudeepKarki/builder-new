import { Row, Col } from 'antd';
import { Link} from 'react-router-dom';

import { HomeBanner } from "components/Icons";
  
function Hero() {
    return (
        <div className="home-hero">
            <Row align="middle">
                <Col xl={3}></Col>
                <Col xl={13} xs={24}>
                    <div className="home-hero__text">
                        <h1>Building the Projects the empowers the next Global Progress</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non turpis vel enim volutpat hendrerit pretium vitae ipsum. In dictum sed quam nec fermentum. </p>
                        <Link to={'/'} className="btn btn-primary">VIew Projects </Link> or <Link to={'/'}> Contact Us</Link>
                    </div> 
                </Col>
                <Col xl={8} xs={24} className="home-hero__vector">
                    <HomeBanner />
                </Col>
            </Row>
        </div>
        
    )
}

export default Hero
