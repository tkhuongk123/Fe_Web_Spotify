import { useTrack } from "../../../Layouts/contexts/TrackProvider";
import { useState, useRef, useEffect } from 'react';
import "./MediaControls.css";
import { PlusCircleOutlined, StepBackwardOutlined, 
        StepForwardOutlined, PlayCircleFilled,
        SoundOutlined, PauseCircleFilled
} from '@ant-design/icons';
import { Tooltip, Input, Slider } from "antd";




function MediaControls() {
    const [currentTime, setCurrentTime] = useState(0);
    // const [isPlaying, setIsPlaying] = useState(false);
    const [currentVolume, setCurrentVolume] = useState(100);
    const [currentTrack, setCurrentTrack] = useState(null);
    const { trackInfo, setTrackInfo, isPlaying, setIsPlaying } = useTrack();

    const audioRef = useRef(null);


    useEffect(() => {
        const track = {
            track_id: "1",
            track_name: "Yêu thương ngày đó",
            track_artist: "Soobin Hoàng Sơn",
            duration: 285,
            audio_file_path: `${process.env.PUBLIC_URL}/assets/mp3/yeu_thuong_ngay_do.mp3`,
        }
        const playlist= [
            {
                track_id: "1",
                track_name: "Nước mắt em lau bằng tình yêu mới 1",
                track_artist: "Dalab, Tóc Tiên",
                duration: 285,
                audio_file_path: `${process.env.PUBLIC_URL}/assets/mp3/nuoc_mat_em_lau_bang_tinh_yeu_moi.mp3`,
            },
            {
                track_id: "2",
                track_name: "Nước mắt em lau bằng tình yêu mới 2",
                track_artist: "Dalab, Tóc Tiên",
                duration: 285,
                audio_file_path: `${process.env.PUBLIC_URL}/assets/mp3/nuoc_mat_em_lau_bang_tinh_yeu_moi.mp3`,
            },
            {
                track_id: "3",
                track_name: "Nước mắt em lau bằng tình yêu mới 3",
                track_artist: "Dalab, Tóc Tiên",
                duration: 285,
                audio_file_path: `${process.env.PUBLIC_URL}/assets/mp3/nuoc_mat_em_lau_bang_tinh_yeu_moi.mp3`,
            }
        ]
        if(trackInfo.type === "track")
        {
            setCurrentTrack(track);

        }
        else if(trackInfo.type === "playlist")
        {
            setCurrentTrack(playlist[trackInfo.positionTrack]);
        }
    }, [trackInfo]);


    useEffect(() => {
        if (audioRef.current) {
            if (!isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
        }
    }, [isPlaying]);


    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = currentVolume / 100;
        }
    }, [currentVolume]);


    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`
    };


    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleSliderChange = (value) => {
        if (audioRef.current) {
            audioRef.current.currentTime = value;
            setCurrentTime(value);
        }
    };

    const changeTime = () => {
        setCurrentTime(100);
    };


    return (
        <div className="MediaControls">
            {currentTrack ? (
                <>
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
                                {currentTrack.track_name}
                            </a>
                            <span className="artist" style={{color: '#b3b3b3', fontSize: '13px'}}>
                                {currentTrack.track_artist}
                            </span>
                        </div>
                        <Tooltip className="add-into-playlist" placement="top" title={"Lưu vào thư viện"}>
                            <PlusCircleOutlined 
                                onClick={changeTime}
                            />
                        </Tooltip>
                    </div>
                </>
            ) : (
                <>    
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
                                    null
                                </a>
                                <span className="artist" style={{color: '#b3b3b3', fontSize: '13px'}}>
                                    null
                                </span>
                            </div>
                            <Tooltip className="add-into-playlist" placement="top" title={"Lưu vào thư viện"}>
                                <PlusCircleOutlined 
                                    
                                />
                            </Tooltip>
                    </div>
                </>
            )}

            <div className="MediaControls_controls">
                <div className="controls-btn">
                    <Tooltip className="prev" placement="top" title={"Trước"}>
                        <StepBackwardOutlined />
                    </Tooltip>
                    <Tooltip className="play" placement="top" title={"Phát"}>
                        {isPlaying ? (
                            <PauseCircleFilled onClick={handlePlayPause} />
                        ) : (
                            <PlayCircleFilled onClick={handlePlayPause} />
                        )}
                    </Tooltip>
                    <Tooltip className="next" placement="top" title={"Tiếp"}>
                        <StepForwardOutlined />
                    </Tooltip>
                </div>
                <div className="duration">
                    <span className="time-display">
                        {formatTime(currentTime)}
                    </span>
                    <Slider 
                        className="custom-slider"
                        value={currentTime}
                        min={0}
                        max={audioRef.current ? audioRef.current.duration : 100}
                        onChange={handleSliderChange}
                        tooltip={{ formatter: null }}
                    />
                    <span className="time-display">
                        {audioRef.current ? formatTime(audioRef.current.duration) : "0:00"}
                    </span>
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

            {/** Thẻ audio để phát nhạc */}
            {currentTrack && (
                <audio 
                    ref={audioRef}
                    src={currentTrack.audio_file_path}
                    onTimeUpdate={handleTimeUpdate}
                    
                />
            )}
        </div>
    )
}

export default MediaControls;

