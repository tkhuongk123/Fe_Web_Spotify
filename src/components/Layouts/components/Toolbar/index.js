import { useEffect, useState } from "react";
import "./Toolbar.css";

const khachHang = (
  <>
    <li>
      <a href="/">Trang chủ</a>
    </li>
    <li>
      <a href="/">Giỏ hàng</a>
    </li>
    <li>
      <a href="/">Đơn hàng</a>
    </li>
  </>
);

const nhanVien = (
  <>
    <li>
      <a href="/">Nhận đơn</a>
    </li>
    <li>
      <a href="/">Trả đơn</a>
    </li>
  </>
);

const quanLy = (
  <>
    <li>
      <a href="/">Lịch sử đơn hàng</a>
    </li>
    <li>
      <a href="/">Thống kê</a>
    </li>
    <li>
      <a href="/">Xem đánh giá</a>
    </li>
  </>
);

const bep = (
  <>
    <li>
      <a href="/">Nhận đơn</a>
    </li>
    <li>
      <a href="/">Trả đơn</a>
    </li>
  </>
);

function Toolbar() {
  const [dsChucNang, setDsChucNang] = useState("");
  const [tenNguoiDung, setTenNguoiDung] = useState("");

  useEffect(() => {
    const nguoidung = JSON.parse(sessionStorage.getItem("nguoidung"));
    setTenNguoiDung(nguoidung.tennguoidung)
    if (nguoidung.idquyen === 0) {
      setDsChucNang(nhanVien);
    } else if (nguoidung.idquyen === 1) {
      setDsChucNang(quanLy);
    } else if (nguoidung.idquyen === 2) {
      setDsChucNang(bep);
    } else if (nguoidung.idquyen === 3) {
      setDsChucNang(khachHang);
    }
  }, []);

  return (
    <nav className="Toolbar">
      <div className="Toolbar_content">
        <div className="Toolbar_content-img">
          <img src={`${process.env.PUBLIC_URL}/favicon.png`} alt="Logo" />
        </div>
        <h4>Xin chào: {tenNguoiDung}</h4>
        <div className="Toolbar_content-subnav">
          <ul>
            {dsChucNang}
            <li>
                <a href="/" onClick={(event) => {
                    sessionStorage.removeItem('nguoidung')
                    window.location.reload()
                }}>
                    Đăng xuất
                </a>
            </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}

export default Toolbar;
