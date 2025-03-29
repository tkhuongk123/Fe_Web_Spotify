import "./Playlists.css";
import { PlusOutlined, ReadFilled, SearchOutlined, HeartFilled, PushpinFilled } from '@ant-design/icons';
import { Tooltip, Input } from "antd";

function Playlists() {

    return (
        <div className="playlists">
            <div className="playlists_header">
                <div className="title">
                    <ReadFilled 
                        style={{
                            fontSize: '24px'
                        }}
                    />
                    <span 
                        style={{ 
                            marginLeft: '10px',
                            fontWeight: '700',
                        }}
                    >
                        Thư viện
                    </span>
                </div>
                <Tooltip className="add-playlist" placement="top" title={"Tạo danh sách phát"}>
                    <PlusOutlined />
                </Tooltip>
            </div>

            <div className="playlists_main">
                <div className="search-input">
                    <Input
                        className="custom-placeholder"
                        placeholder="Tìm kiếm trong thư viện"
                        prefix={<SearchOutlined 
                                    style={{
                                        fontSize: '20px',
                                        marginRight: '5px'
                                    }}
                                />}
                        style={{
                            background: '#383838',
                            border: '1px solid transparent',
                            color: '#b3b3b3'
                        }}
                    />
                </div>

                <div className="wrap-playlists">
                    <div className="playlist">
                        <div className="liked-image">
                            <HeartFilled 
                                style={{
                                    color: 'white'
                                }}
                            />
                        </div>
                        <div className="title">
                            <span className="main-title" style={{color: 'white'}}>
                                Bài hát đã thích
                            </span>
                            <span className="sub-title" style={{color: '#b3b3b3', fontSize: '13px'}}>
                                <PushpinFilled 
                                    style={{
                                        color: '#1cc659'
                                    }}
                                />
                                &nbsp;
                                Danh sách phát
                                &#8226;
                                1 Bài hát
                            </span>
                        </div>
                    </div>
                    <div className="playlist">
                        <div className="image">
                            <img 
                                src={`${process.env.PUBLIC_URL}/default_music.png`} 
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                        <div className="title">
                            <span className="main-title" style={{color: 'white'}}>
                                Danh sách phát của tôi #1
                            </span>
                            <span className="sub-title" style={{color: '#b3b3b3', fontSize: '13px'}}>
                                Danh sách phát
                                &#8226;
                                Khuong Tran
                            </span>
                        </div>
                    </div>
                    <div className="playlist">
                        <div className="image">
                            <img 
                                src={`${process.env.PUBLIC_URL}/default_music.png`} 
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                        <div className="title">
                            <span className="main-title" style={{color: 'white'}}>
                                Danh sách phát của tôi #1
                            </span>
                            <span className="sub-title" style={{color: '#b3b3b3', fontSize: '13px'}}>
                                Danh sách phát
                                &#8226;
                                Khuong Tran
                            </span>
                        </div>
                    </div>
                    <div className="playlist">
                        <div className="image">
                            <img 
                                src={`${process.env.PUBLIC_URL}/default_music.png`} 
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                        <div className="title">
                            <span className="main-title" style={{color: 'white'}}>
                                Danh sách phát của tôi #1
                            </span>
                            <span className="sub-title" style={{color: '#b3b3b3', fontSize: '13px'}}>
                                Danh sách phát
                                &#8226;
                                Khuong Tran
                            </span>
                        </div>
                    </div>
                    <div className="playlist">
                        <div className="image">
                            <img 
                                src={`${process.env.PUBLIC_URL}/default_music.png`} 
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                        <div className="title">
                            <span className="main-title" style={{color: 'white'}}>
                                Danh sách phát của tôi #1
                            </span>
                            <span className="sub-title" style={{color: '#b3b3b3', fontSize: '13px'}}>
                                Danh sách phát
                                &#8226;
                                Khuong Tran
                            </span>
                        </div>
                    </div>
                    <div className="playlist">
                        <div className="image">
                            <img 
                                src={`${process.env.PUBLIC_URL}/default_music.png`} 
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                        <div className="title">
                            <span className="main-title" style={{color: 'white'}}>
                                Danh sách phát của tôi #1
                            </span>
                            <span className="sub-title" style={{color: '#b3b3b3', fontSize: '13px'}}>
                                Danh sách phát
                                &#8226;
                                Khuong Tran
                            </span>
                        </div>
                    </div>
                    <div className="playlist">
                        <div className="image">
                            <img 
                                src={`${process.env.PUBLIC_URL}/default_music.png`} 
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                        <div className="title">
                            <span className="main-title" style={{color: 'white'}}>
                                Danh sách phát của tôi #1
                            </span>
                            <span className="sub-title" style={{color: '#b3b3b3', fontSize: '13px'}}>
                                Danh sách phát
                                &#8226;
                                Khuong Tran
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Playlists;