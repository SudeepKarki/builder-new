import { Spin } from 'antd';

function index() {
    return (
        <div className="loading-spinner">
            <div className="container">
                <Spin size="large" />
            </div>
        </div>
    )
}

export default index
