import P1 from "assets/img/p1.png";
import P2 from "assets/img/p2.png";
import P3 from "assets/img/p3.png";
import { Row, Col,Card} from 'antd';

import { Link} from 'react-router-dom';
const { Meta } = Card;

function Projects() {
    return (
        <div className="home-projects">
            <div className="bg" />
            <h2 className="section-title">Projects</h2>
                <Row gutter={{ xs: 8, sm: 16, md: 30, lg: 40, xl: 130 }}>
                    <Col md={8}>
                    <Card
                        cover={<img alt="example" src={P1} />}
                    >
                        <Meta title="All You Need to Start" description="Add WooCommerce plugin to any WordPress site and set up a new store in minutes." />
                        <Link to={'/'} className="">Ecommerce for Wordpress › </Link>
                    </Card>
                    </Col>
                    <Col md={8}>
                    <Card
                        cover={<img alt="example" src={P2} />}
                    >
                        <Meta title="Customize and Extend" description="From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable." />
                        <Link to={'/'} className="">Browse Extensions › </Link>
                    </Card>
                    </Col>
                    <Col md={8}>
                    <Card
                        cover={<img alt="example" src={P3}  />}
                    >
                        <Meta title="Active Community" description="WooCommerce is one of the fastest-growing eCommerce communities. " />
                        <Link to={'/'} className="">Check our Forums › </Link>
                    </Card>
                    </Col>
                </Row>
            
        </div>
    )
}

export default Projects
