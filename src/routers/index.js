// Page
import Login from "../pages/Login";

import TrangChu from "../pages/TrangChu";
import ThanhToan from "../pages/ThanhToan";
import DonHang from "../pages/DonHang";
import DanhGia from "../pages/DanhGia";

import NV_NhanDon from "../pages/NV_NhanDon";
import NV_TraDon from "../pages/NV_TraDon";

import QL_ThongKe from "../pages/QL_ThongKe";
import QL_DonHang from "../pages/QL_DonHang";
import QL_XemDanhGia from "../pages/QL_XemDanhGia";

import Bep_NhanDon from "../pages/Bep_NhanDon";
import Bep_TraDon from "../pages/Bep_TraDon";


// Layout
import { LoginLayout } from "../components/Layouts";

const khachHangRoutes = [
    { path: '/', component: TrangChu, },

    { path: '/auth/payment', component: ThanhToan, },
    { path: '/donhang', component: DonHang, },
    { path: '/danhgia', component: DanhGia, },
]

const nhanVienRoutes = [
    { path: '/nhanvien/nhandon', component: NV_NhanDon, },
    { path: '/nhanvien/tradon', component: NV_TraDon, },
]

const quanLyRoutes = [
    { path: '/quanly/donhang', component: QL_DonHang, },
    { path: '/quanly/thongke', component: QL_ThongKe, },
    { path: '/quanly/xemdanhgia', component: QL_XemDanhGia, },
]

const bepRoutes = [
    { path: '/bep/nhandon', component: Bep_NhanDon, },
    { path: '/bep/tradon', component: Bep_TraDon, },
]

// Public routes
const publicRoutes = [
    { path: '/', component: Login, layout: LoginLayout},
];


export { khachHangRoutes, nhanVienRoutes, quanLyRoutes, bepRoutes, publicRoutes };