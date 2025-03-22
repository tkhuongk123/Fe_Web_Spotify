import Footer from "../components/Footer";
import Toolbar from "../components/Toolbar";
import HeaderClient from "../components/HeaderClient";
import "./ClientLayout.css";

function ClientLayout({ children }) {
    return (
        <div className="ClientLayout">
            <div className="ClientLayout_Header">
                <HeaderClient />
            </div>
            <div className="ClientLayout_Main">
                {children}
            </div>
            <div className="ClientLayout_Media-Controls">

            </div>
        </div>
    )
}

export default ClientLayout;
