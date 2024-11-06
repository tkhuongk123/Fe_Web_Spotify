import "./DanhGiaDichVu.css";
import { useEffect, useState } from "react";
import DanhSachDonHang from "../../components/DanhSachDonHang";
import { layDanhSachTheoId } from "../../../services/DonHangAPI";
import ThongBaoTrong from "../../components/ThongBaoTrong";

function XemDonHang() {
  const [dsDonHang, setDsDonHang] = useState([]);

  useEffect(() => {
    (async () => {
      const nguoidung = JSON.parse(sessionStorage.getItem("nguoidung"));
      const idmanguoidung = nguoidung.id;
      const data = await layDanhSachTheoId({ idmanguoidung });
      if (data.dsDonHang) {
        const newDs = []
        for(let x of data.dsDonHang) {
            if(x.trangthai === '11' || x.trangthai === '12') {
                newDs.push(x)
            }
        }
        setDsDonHang(newDs);
      }
    })();
  }, []);

  return (
    <div className="DanhGiaDichVu">
      <div className="DanhGiaDichVu_content">
        <h2>Đánh giá dịch vụ</h2>
        {dsDonHang.length === 0 ? (
          <ThongBaoTrong
            title="Trang chủ"
            message="Chưa có đơn hàng nào hoàn tất"
            link="/"
          />
        ) : (
          <DanhSachDonHang dsDonHang={dsDonHang} idquyen={3} option="30" />
        )}
      </div>
    </div>
  );
}

export default XemDonHang;
