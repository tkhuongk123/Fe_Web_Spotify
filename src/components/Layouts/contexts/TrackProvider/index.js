import { createContext, useState, useContext, useRef, useEffect } from "react";

// Tạo Context
const TrackContext = createContext();

// Provider để bọc toàn bộ ứng dụng
export function TrackProvider({ children }) {
    const [trackInfo, setTrackInfo] = useState(() => {
        const saved = localStorage.getItem("trackInfo");
        return saved ? JSON.parse(saved) : {};
    });
    const [isPlaying, setIsPlaying] = useState(false);

    

    useEffect(() => {
        if (trackInfo) {
            localStorage.setItem("trackInfo", JSON.stringify(trackInfo));
        }
    }, [trackInfo]);


    return (
        <TrackContext.Provider value={{ trackInfo ,setTrackInfo, isPlaying, setIsPlaying }}>
            {children}
        </TrackContext.Provider>
    );
}

// Hook để sử dụng context trong component khác
export function useTrack() {
    return useContext(TrackContext);
}