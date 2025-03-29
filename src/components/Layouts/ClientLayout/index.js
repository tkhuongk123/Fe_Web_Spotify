import HeaderClient from "../components/HeaderClient";
import Playlists from "../components/Playlists";
import MediaControls from "../components/MediaControls";
import "./ClientLayout.css";

function ClientLayout({ children }) {
    return (
        <div className="ClientLayout">
            <div className="ClientLayout_Header">
                <HeaderClient />
            </div>
            <div className="ClientLayout_WrapContent">
                <div className="ClientLayout_Playlists">
                    <Playlists />
                </div>
                <div className="ClientLayout_Main">
                    {children}
                </div>
            </div>
            <div className="ClientLayout_Media-Controls">
                <MediaControls />
            </div>
        </div>
    )
}

export default ClientLayout;
