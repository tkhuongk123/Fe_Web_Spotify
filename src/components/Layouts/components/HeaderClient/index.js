import "./HeaderClient.css";
import { Button } from "antd";
import { SpotifyOutlined, HomeOutlined } from '@ant-design/icons';


function HeaderClient() {

    return (
        <div className="header">
            <div className="left-container">
                <div className="logo">
                    <SpotifyOutlined className="icon"/>
                </div>
                <div className="home">
                    <Button 
                        className="icon"
                        icon={<HomeOutlined />}
                        ghost
                        // style={{ border: "none" }}
                    >

                    </Button>
                </div>

            </div>
            <div className="right-container"></div>
        </div>
    )
}

export default HeaderClient;