// Page
import Login from "../pages/Login";
import Signup from "../pages/Signup";


import QL_AudioMusic from "../pages/QL_AudioMusic";
import TrangChu from "../pages/TrangChu";





// Layout
import LoginLayout from "../components/Layouts/LoginLayout";
import ClientLayout from "../components/Layouts/ClientLayout";
import AdminLayout from "../components/Layouts/AdminLayout";


const quanLyRoutes = [
    // { path: '/quanly/taikhoan', component: QL_TaiKhoan, },
    // { path: '/quanly/sanpham', component: QL_SanPham, },

]


// Public routes
const publicRoutes = [
    { path: '/', component: QL_AudioMusic, layout: AdminLayout },
    { path: '/signup', component: Signup, layout: LoginLayout },
];


export { quanLyRoutes, publicRoutes };