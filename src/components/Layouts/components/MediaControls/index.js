import { useTrack } from "../../../Layouts/contexts/TrackProvider";
import { useState, useRef, useEffect } from 'react';
import "./MediaControls.css";
import { PlusCircleOutlined, StepBackwardOutlined, 
        StepForwardOutlined, PlayCircleFilled,
        SoundOutlined, PauseCircleFilled,
        CheckCircleFilled
} from '@ant-design/icons';
import { Tooltip, Input, Slider, message } from "antd";
import { getTrackByIdAPI } from "../../../../services/TrackAPI";
import { getPlaylistTracksAPI } from "../../../../services/PlaylistTrackAPI";
import { getFavoriteTracksAPI, createFavoriteTrackAPI } from "../../../../services/FavoriteTrackAPI";
import { getFavoriteByIdUserAPI } from "../../../../services/FavoriteAPI";




function MediaControls() {
    const [currentTime, setCurrentTime] = useState(0);
    const [currentVolume, setCurrentVolume] = useState(100);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [listSongs, setListSongs ] = useState([]);
    const [isInFavorite, setIsInFavorite] = useState(false);
    const { trackInfo, setTrackInfo, user, isPlaying, setIsPlaying } = useTrack();

    const audioRef = useRef(null);

    // Mock Data
    useEffect(() => {
        ( async () => {
            if(trackInfo)
            {
                if(trackInfo.type === "track")
                {
                    let dataTrack = await getTrackByIdAPI(trackInfo.id);
                    setCurrentTrack(dataTrack.track);
                }
                else if(trackInfo.type === "playlist")
                {
                    let dataTrack = await getTrackByIdAPI(trackInfo.song_id);
                    let dataListSong = await getPlaylistTracksAPI(trackInfo.id);
                    setCurrentTrack(dataTrack.track);
                    setListSongs(dataListSong.playlist_tracks);
                }
                else if(trackInfo.type === "favorite")
                {
                    let dataTrack = await getTrackByIdAPI(trackInfo.song_id);
                    let dataListSong = await getFavoriteTracksAPI(trackInfo.id);
                    setCurrentTrack(dataTrack.track);
                    setListSongs(dataListSong.favorite_tracks);
                }
            }
        })();
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
        if (audioRef.current && currentTrack) {
            audioRef.current.load();
        }
    }, [currentTrack]);

    useEffect(() => {
        const checkFavorite = async () => {
            if (currentTrack) {
                const result = await checkTrackInFavorite(currentTrack.id);
                setIsInFavorite(result);
            }
        };
        checkFavorite();
    }, [currentTrack]);

    

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = currentVolume / 100;
        }
    }, [currentVolume]);


    const handleSwitchPrev = () => {
        if(trackInfo.type === "track")
        {
            return;
        }
        if(listSongs)
        {
            const index = listSongs.findIndex(song => song.id === currentTrack.id);
            if((index - 1) <  0)
            {
                setCurrentTrack(listSongs[index]);
                if(trackInfo.type === "playlist")
                {
                    setTrackInfo({
                        type: "playlist",
                        id: trackInfo.id,
                        song_id: listSongs[index].id
                    });
                    
                    setIsPlaying(true);
                }
                else if(trackInfo.type === "favorite")
                {
                    setTrackInfo({
                        type: "favorite",
                        id: trackInfo.id,
                        song_id: listSongs[index].id
                    });
                    
                    setIsPlaying(true);
                }
            }
            else 
            {
                setCurrentTrack(listSongs[index - 1]);
                if(trackInfo.type === "playlist")
                {
                    setTrackInfo({
                        type: "playlist",
                        id: trackInfo.id,
                        song_id: listSongs[index - 1].id
                    });
                    
                    setIsPlaying(true);
                }
                else if(trackInfo.type === "favorite")
                {
                    setTrackInfo({
                        type: "favorite",
                        id: trackInfo.id,
                        song_id: listSongs[index - 1].id
                    });
                    
                    setIsPlaying(true);
                }
            }
        }
    }

    const handleSwitchNext = () => {
        if(trackInfo.type === "track")
        {
            return;
        }
        if(listSongs)
        {
            const index = listSongs.findIndex(song => song.id === currentTrack.id);
            if((index + 1) >=  listSongs.length)
            {
                setCurrentTrack(listSongs[0]);
                if(trackInfo.type === "playlist")
                {
                    setTrackInfo({
                        type: "playlist",
                        id: trackInfo.id,
                        song_id: listSongs[0].id
                    });
                    setIsPlaying(true);
                }
                else if(trackInfo.type === "favorite")
                {
                    
                    setTrackInfo({
                        type: "favorite",
                        id: trackInfo.id,
                        song_id: listSongs[0].id
                    });
                    setIsPlaying(true);
                }
            }
            else 
            {
                setCurrentTrack(listSongs[index + 1]);
                if(trackInfo.type === "playlist")
                {
                    setTrackInfo({
                        type: "playlist",
                        id: trackInfo.id,
                        song_id: listSongs[index + 1].id
                    });
                    setIsPlaying(true);
                }
                else if(trackInfo.type === "favorite")
                {
                    setTrackInfo({
                        type: "favorite",
                        id: trackInfo.id,
                        song_id: listSongs[index + 1].id
                    });
                    setIsPlaying(true);
                }
            }
        }
    }

    const addIntoFavorite = async (idTrack) => {
        const dataFavorite = await getFavoriteByIdUserAPI(user.id);
        const dataCreateFavoriteTrack = await createFavoriteTrackAPI(dataFavorite.favorite.id, idTrack);
        if(dataCreateFavoriteTrack.success)
        {
            setIsInFavorite(true);
            message.success('Đã thêm bài hát vào favorite thành công!');
        }
    }

    const checkTrackInFavorite = async (idTrack) => {
        const dataFavorite = await getFavoriteByIdUserAPI(user.id);
        const favoriteSongs = await getFavoriteTracksAPI(dataFavorite.favorite.id);
        if(favoriteSongs.favorite_tracks)
        {
            return favoriteSongs.favorite_tracks.some(song => song.id === idTrack);
        }
        return false;
        
    };


    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`
    };

    const handleCanPlay = () => {
        if (isPlaying && audioRef.current) {
            audioRef.current.play();
        }
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



    return (
        <div className="MediaControls">
            {currentTrack ? (
                <>
                    <div className="MediaControls_track">
                        <div className="track-image">
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/${currentTrack.img_file_path ? currentTrack.img_file_path : 'default_music.png'}`}
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
                                {currentTrack.title}
                            </a>
                            <span className="artist" style={{color: '#b3b3b3', fontSize: '13px'}}>
                                {currentTrack.artist}
                            </span>
                        </div>
                        {
                            (!isInFavorite ?
                                <Tooltip className="add-into-playlist" placement="top" title={"Lưu vào thư viện"}>
                                    <PlusCircleOutlined 
                                        onClick={() => addIntoFavorite(currentTrack.id)}
                                    />
                                </Tooltip>
                                :
                                <Tooltip 
                                    className="find-tracks-add-btn" 
                                    placement="top" 
                                    title={"Đã thêm vào danh sách này"}
                                                                                                        
                                >
                                    <CheckCircleFilled 
                                        style={{
                                            color: '#1ed35e'
                                        }}
                                    />
                                </Tooltip>
                            )
                        }
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
                        <StepBackwardOutlined onClick={handleSwitchPrev}/>
                    </Tooltip>
                    <Tooltip className="play" placement="top" title={"Phát"}>
                        {isPlaying ? (
                            <PauseCircleFilled onClick={handlePlayPause} />
                        ) : (
                            <PlayCircleFilled onClick={handlePlayPause} />
                        )}
                    </Tooltip>
                    <Tooltip className="next" placement="top" title={"Tiếp"}>
                        <StepForwardOutlined onClick={handleSwitchNext}/>
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
            {currentTrack && currentTrack.audio_file_path && (
                <audio 
                    key={currentTrack?.id}
                    ref={audioRef}
                    src={`${process.env.PUBLIC_URL}/assets/mp3/${currentTrack.audio_file_path}`}
                    onTimeUpdate={handleTimeUpdate}
                    onCanPlay={handleCanPlay}
                />
            )}
        </div>
    )
}

export default MediaControls;


