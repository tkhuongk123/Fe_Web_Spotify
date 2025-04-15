import { useTrack } from "../../../Layouts/contexts/TrackProvider";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./TrackPage.css";
import { PlayCircleFilled, CloseCircleOutlined,
    ClockCircleOutlined, CaretRightFilled, PlusCircleOutlined
} from '@ant-design/icons';
import { Tooltip, Popconfirm } from "antd";

function TrackPage() {
    const { setTrackInfo, setIsPlaying } = useTrack();
    const { idTrack } = useParams();

    const mockTrack = {
        type: "track",
        id: idTrack
    }


    return (
        <div className="TrackPage">
            <div className="track_header">
                <div className="track-img">
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
                <div className="track-info">
                    <span className="type">Bài hát</span>
                    <span className="name">Nước mắt em lau bằng tình yêu mới</span>
                    <span className="sub-info">
                        <a className="user">Dalab</a> 
                        &nbsp;
                        &#8226; 
                        &nbsp;
                        <span>2019</span>
                        &nbsp;
                        &#8226; 
                        &nbsp;
                        <span>1 Bài hát, 4:45</span>
                    </span>
                </div>
            </div>

            <div className="track_body">
                <div className="actions-btn">
                    <Tooltip className="play-btn" placement="top" title={"Phát track"}>
                        <PlayCircleFilled 
                            onClick={() => {
                                setTrackInfo(mockTrack);
                                setIsPlaying(true);

                            }}
                        />
                    </Tooltip>
                    <Tooltip className="add-into-playlist" placement="top" title={"Lưu vào thư viện"}>
                        <PlusCircleOutlined 
                        />
                    </Tooltip>
                </div>

                <div className="artist">
                    <div className="artist-img">
                        <img 
                            src={`${process.env.PUBLIC_URL}/avatar-artist.avif`} 
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '50%'
                            }}
                        />
                    </div>

                    <div className="artist-info">
                        <span>Nghệ sĩ</span>
                        <span className="name">Dalab</span>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default TrackPage;