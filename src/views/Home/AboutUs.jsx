import A1 from "assets/img/a1.jpg";
import A2 from "assets/img/a2.jpg";
import { Row, Col,Card} from 'antd';

import { Link} from 'react-router-dom';
const { Meta } = Card;

function Projects() {
    return (
        <div className="home-about">
            <div className="bg" />
            <Row gutter={{ xs: 8, sm: 16, md: 40 }}  align="middle" className="item">
                <Col  xs={10} md={{span: 6 , offset:4}} lg={{span: 6 , offset:5}}>
                    <img
                    className="img-fluid img-1"
                    src={A1}
                    alt=""
                    />
                </Col>
                <Col xs={24} md={12} lg={10} xl={8} className="item-content item-content-1">
                    <h3>Construct for World Business</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
                    turpis vel enim volutpat hendrerit pretium vitae ipsum. In dictum
                    sed quam nec fermentum. Donec vitae pulvinar quam, vel ultrices
                    arcu. Nullam sed sollicitudin sapien.
                    </p>
                    <Link className="btn btn-primary">Read the Documentation</Link>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 40 }} align="top" className="item">
                <Col xs={{ span:24, order: 2 }}    md={{span:12, offset:4, order:1}} lg={{span:10, offset:5}}  xl={{span:8, offset:7}} className="item-content item-content-2">
                    <h3>
                    The road to Development is through us
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
                    turpis vel enim volutpat hendrerit pretium vitae ipsum. In dictum
                    sed quam nec fermentum. Donec vitae pulvinar quam, vel ultrices
                    arcu. Nullam sed sollicitudin sapien.
                    </p>
                    <Link className="btn btn-primary">Read the Documentation</Link>
                </Col>
                <Col  xs={{ span: 10, order: 1 }}    md={{span:6, order:2}}>
                    <img
                    className="img-fluid img-2"
                    src={A2}
                    alt=""
                    />
                </Col>
            </Row>            
        </div>
    )
}

export default Projects
