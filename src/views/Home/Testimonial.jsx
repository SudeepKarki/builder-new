import C1 from "assets/img/testimonial-user/c1.png";
import C2 from "assets/img/testimonial-user/c2.png";
import C3 from "assets/img/testimonial-user/c3.png";
import C4 from "assets/img/testimonial-user/c4.png";
import { Row, Col} from 'antd';

import { Carousel } from 'antd';

function Testimonial() {
    const settings = {
        dots: false,
        arrows: true
      };
    return (
        <div className="home-testimonial">
            <h2 className="section-title">
            Listen from our <br />
            Clients
            </h2>   
            <div className="container-fluid">
                <Row justify="center">
                    <Col xs={22} xl={11}>
                    <div className="client-list">
                        <a href="/">
                            <img alt="" src={C1} />
                        </a>
                        <a href="/">
                            <img alt="" src={C2} />
                        </a>
                        <a href="/">
                            <img alt="" src={C3} />
                        </a>
                        <a href="/">
                            <img alt="" src={C4} />
                        </a>
                        <a href="/">
                            <img alt="" src={C2} />
                        </a>
                        <a href="/">
                            <img alt="" src={C3} />
                        </a>
                    </div>
                    
                    <Carousel autoplay {...settings}>
                        <div className="client-text">
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non turpis vel enim volutpat hendrerit pretium vitae ipsum. In dictum sed quam nec fermentum. Donec vitae pulvinar quam, vel ultrices arcu. Nullam sed sollicitudin sapien.</p>
                        </div>
                        
                        <div className="client-text">
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non turpis vel enim volutpat hendrerit pretium vitae ipsum. In dictum sed quam nec fermentum. Donec vitae pulvinar quam, vel ultrices arcu. Nullam sed sollicitudin sapien.</p>
                        </div>
                    </Carousel>
                </Col>
                </Row>        
            </div>    
        </div>
    )
}

export default Testimonial
