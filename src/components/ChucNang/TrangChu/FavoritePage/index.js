import { useState } from 'react';
import "./FavoritePage.css";
import { PlayCircleFilled, CloseCircleOutlined,
    ClockCircleOutlined, CaretRightFilled 
} from '@ant-design/icons';
import { Tooltip, Popconfirm } from "antd";

function FavoritePage() {

    return (
        <div className="FavoritePage">
            <div className="favorite_header">
                <div className="favorite-img">
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
                <div className="favorite-info">
                    <span className="type">Playlist</span>
                    <span className="name">Playlist usuk này chill lắm #1</span>
                    <span className="sub-info">
                        <a className="user">Khuong Tran</a> 
                        &nbsp;
                        &#8226; 
                        &nbsp;
                        <span>3 bài hát</span>
                    </span>
                </div>
            </div>

            <div className="favorite_body">
                <div className="actions-btn">
                    <Tooltip className="play-btn" placement="top" title={"Phát favorite"}>
                        <PlayCircleFilled />
                    </Tooltip>
                    <Tooltip className="delete-favorite-btn" placement="top" title={"Xóa favorite"}>
                        <Popconfirm
                            title="Bạn có chắc muốn xóa favorite này ?"
                            okText="Yes"
                            cancelText="No"
                        >
                            <CloseCircleOutlined />
                        </Popconfirm>
                    </Tooltip>
                </div>

                <div className="wrap-tracks">
                    <table className="table-tracks">
                        <thead>
                            <tr>
                                <th style={{width: '10%'}}>
                                    #
                                </th>
                                <th style={{width: '80%', textAlign: 'left', marginLeft: '12px'}}>
                                    Tiêu đề
                                </th>
                                <th style={{width: '10%'}}>
                                    <ClockCircleOutlined/>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="number-col">
                                    <CaretRightFilled 
                                        className="play-icon"
                                        style={{
                                            display: 'none',
                                            color: 'white',
                                            fontSize: '22px', 
                                            textAlign: "center"
                                        }}
                                    />
                                    <span className="number">1</span>
                                </td>
                                <td class="title-col">
                                    <div className="track">
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
                                            <a className="main-title" style={{color: 'white'}}>
                                                Nước mắt em lau bằng tình yêu mới
                                            </a>
                                            <span className="sub-title" style={{color: '#b3b3b3', fontSize: '13px'}}>
                                                Dalab, Tóc Tiên
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td class="duration-col">
                                    4:30
                                </td>
                            </tr>
                            <tr>
                                <td class="number-col">
                                    <CaretRightFilled 
                                        className="play-icon"
                                        style={{
                                            display: 'none',
                                            color: 'white',
                                            fontSize: '22px', 
                                            textAlign: "center"
                                        }}
                                    />
                                    <span className="number">2</span>
                                </td>
                                <td class="title-col">
                                    <div className="track">
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
                                </td>
                                <td class="duration-col">
                                    4:45
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    )
}

export default FavoritePage;