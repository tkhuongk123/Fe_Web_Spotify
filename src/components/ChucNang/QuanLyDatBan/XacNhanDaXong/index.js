import { capNhapTrangThaiBanTheoId, xoa } from "../../../../services/BanAPI";
import { capNhatTrangThaiChiTietDatBan } from "../../../../services/ChiTietDatBanAPI";
import { NotifyError, NotifySuccess } from "../../../components/Toast";
import "./XacNhanDaXong.css";

function XacNhanDaXong(props) {

    function handleCancel() {
        props.setChucNang('')
    }

    const handleOk = async () => {
        const data = await capNhapTrangThaiBanTheoId({ id: props.idban, trangthai: '0' });
        const data1 = await capNhatTrangThaiChiTietDatBan({ trangthai: '3', idmanguoidung: props.idmanguoidung, idban: props.idban });
        if (data.error) {
            NotifyError('Xác nhận không thành công')
        } else {
            const newDs = [...props.dsChiTietDatBan];
            newDs.splice(props.index, 1);
            props.setDsChiTietDatBan(newDs);
            NotifySuccess(`Xác nhận thành công`);
            props.setChucNang('');
        }

    }

    return (
        <div className="XacNhanDaXong" onClick={(e) => {
            if (e.target.className === "Xoa") {
                props.setChucNang('')
            }
        }}>
            <div className="XacNhanDaXong_content">
                <h2>Thông báo</h2>
                <p>Bạn có chắc chắn muốn xác nhận bàn 'B{props.vitri}'' đã xong ?</p>
                <div>
                    <button className="XacNhanDaXong_content-cancel" onClick={handleCancel}>Hủy</button>
                    <button className="XacNhanDaXong_content-ok" onClick={handleOk}>Đồng ý</button>
                </div>
            </div>
        </div>
    );
}

export default XacNhanDaXong;
