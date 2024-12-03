import { capNhapTrangThaiBanTheoId, xoa } from "../../../../services/BanAPI";
import { capNhatTrangThaiChiTietDatBan } from "../../../../services/ChiTietDatBanAPI";
import { NotifyError, NotifySuccess } from "../../../components/Toast";
import "./TuChoiDatBan.css";

function TuChoiDatBan(props) {

    function handleCancel() {
        props.setChucNang('')
    }

    const handleOk = async () => {
        const data = await capNhapTrangThaiBanTheoId({ id: props.idban, trangthai: '0' });
        const data1 = await capNhatTrangThaiChiTietDatBan({ trangthai: '5', idmanguoidung: props.idmanguoidung, idban: props.idban });
        if (data.error) {
            NotifyError('Từ chối không thành công')
        } else {
            const newDs = [...props.dsChiTietDatBan];
            newDs.splice(props.index, 1);
            props.setDsChiTietDatBan(newDs);
            NotifySuccess(`Từ chối thành công`);
            props.setChucNang('');
        }

    }

    return (
        <div className="TuChoiDatBan" onClick={(e) => {
            if (e.target.className === "Xoa") {
                props.setChucNang('')
            }
        }}>
            <div className="TuChoiDatBan_content">
                <h2>Thông báo</h2>
                <p>Bạn có chắc chắn muốn xác nhận bàn 'B{props.vitri}'' đã xong ?</p>
                <div>
                    <button className="TuChoiDatBan_content-cancel" onClick={handleCancel}>Hủy</button>
                    <button className="TuChoiDatBan_content-ok" onClick={handleOk}>Đồng ý</button>
                </div>
            </div>
        </div>
    );
}

export default TuChoiDatBan;
