import { useState } from 'react';
import "./HomePage.css";

function HomePage() {
    const [page, setPage] = useState("HomePage");

    return (
        <div className="HomePage">
            <div className="wrap_genres">
                <div className="genre">
                    <div className="title">
                        <a 
                            href=""
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '25px'

                            }}
                        >
                            Ballad
                        </a>
                        <a 
                            href=""
                            style={{
                                color: '#b3b3b3',
                                fontWeight: '500',
                                fontSize: '14px',
                                alignSelf: 'center',
                                marginRight: '15px'
                            }}
                        >
                            Hiện tất cả
                        </a>
                    </div>
                    <div className="genre-track-list">
                        <div className="genre-track">
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
        </div>
    )
}

export default HomePage;