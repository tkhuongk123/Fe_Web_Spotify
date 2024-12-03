import { capNhapTrangThaiBanTheoId } from "../../../../services/BanAPI";
import { capNhatTrangThaiChiTietDatBan, layDsChiTietDatBanTheoIdMaNguoiDung } from "../../../../services/ChiTietDatBanAPI";
import { NotifyError, NotifySuccess } from "../../../components/Toast";
import "./HuyDatBan.css";


function HuyDatBan(props) {

    function handleCancel() {
        props.setChucNang('')
    }

    const handleOk = async () => {
        const data = await capNhatTrangThaiChiTietDatBan({ idmanguoidung: props.idmanguoidung, idban: props.idban, trangthai: '2' });
        if (data.error) {
            NotifyError('Hủy đặt bàn không thành công')
        } else {
            const newDs = await layDsChiTietDatBanTheoIdMaNguoiDung({ idmanguoidung: props.idmanguoidung });
            if (newDs.dsChiTietDatBan) {
                props.setDsChiTietDatBan(newDs.dsChiTietDatBan);
            }
            await capNhapTrangThaiBanTheoId({ trangthai: '0', id: props.idban });
            NotifySuccess(`Hủy đặt bàn thành công`);
            props.setChucNang('');
        }

    }

    return (
        <div className="HuyDatBan" onClick={(e) => {
            if (e.target.className === "HuyDatBan") {
                props.setChucNang('')
            }
        }}>
            <div className="HuyDatBan_content">
                <h2>Thông báo</h2>
                <p>Bạn có chắc chắn muốn xóa bàn 'B{props.idban}'</p>
                <div>
                    <button className="HuyDatBan_content-cancel" onClick={handleCancel}>Hủy</button>
                    <button className="HuyDatBan_content-ok" onClick={handleOk}>Đồng ý</button>
                </div>
            </div>
        </div>
    );
}

export default HuyDatBan;
