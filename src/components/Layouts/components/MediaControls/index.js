import { useState } from 'react';
import "./MediaControls.css";
import { PlusCircleOutlined, StepBackwardOutlined, 
        StepForwardOutlined, PlayCircleFilled,
        SoundOutlined
} from '@ant-design/icons';
import { Tooltip, Input, Slider } from "antd";



function MediaControls() {
    const [currentTime, setCurrentTime] = useState(0);
    const totalDuration = 132; 
    const [currentVolume, setCurrentVolume] = useState(0);


    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`
    };

    const handleSliderChange = (value) => {
        setCurrentTime(value);
        // Thêm logic seek nhạc nếu cần
      };

    return (
        <div className="MediaControls">
            <div className="MediaControls_track">
                <div className="track-image">
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
                <div className="track-information">
                    <a 
                        className="name" 
                        href=""
                        style={{
                            color: 'white'
                        }}
                    >
                        Nước mắt em lau bằng tình yêu mới
                    </a>
                    <span className="artist" style={{color: '#b3b3b3', fontSize: '13px'}}>
                        Da LAB, Tóc Tiên
                    </span>
                </div>
                <Tooltip className="add-into-playlist" placement="top" title={"Lưu vào thư viện"}>
                    <PlusCircleOutlined 

                    />
                </Tooltip>
            </div>

            <div className="MediaControls_controls">
                <div className="controls-btn">
                    <Tooltip className="prev" placement="top" title={"Trước"}>
                        <StepBackwardOutlined />
                    </Tooltip>
                    <Tooltip className="play" placement="top" title={"Phát"}>
                        <PlayCircleFilled />
                    </Tooltip>
                    <Tooltip className="next" placement="top" title={"Tiếp"}>
                        <StepForwardOutlined />
                    </Tooltip>
                </div>
                <div className="duration">
                    <span className="time-display">{formatTime(currentTime)}</span>
                    <Slider 
                        className="custom-slider"
                        value={currentTime}
                        min={0}
                        max={totalDuration}
                        onChange={(newValue) => setCurrentTime(newValue)}
                        tooltip={{ formatter: null }}
                    />
                    <span className="time-display">2:12</span>
                </div>
            </div>

            <div className="MediaControls_additional-controls">
                    <SoundOutlined 
                        style={{
                            color: 'white'
                        }}
                    />
                    <Slider 
                        className="custom-volume"
                        value={currentVolume}
                        min={0}
                        max={100}
                        onChange={(newValue) => setCurrentVolume(newValue)}
                        // tooltip={{ formatter: null }}
                    />
            </div>

        </div>
    )
}

export default MediaControls;