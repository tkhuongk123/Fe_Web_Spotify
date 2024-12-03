import { xoa } from "../../../../services/BanAPI";
import { NotifyError, NotifySuccess } from "../../../components/Toast";
import "./XoaBan.css";

function XoaBan(props) {

    function handleCancel() {
        props.setChucNang('')
    }

    const handleOk = async () => {
        const data = await xoa({ id: props.id });
        if (data.error) {
            NotifyError('Xóa sản phẩm không thành công')
        } else {
            const newDs = [...props.dsBan];
            newDs.splice(props.index, 1);
            props.setDsBan(newDs);
            NotifySuccess(`Xóa bàn thành công`);
            props.setChucNang('');
        }

    }

    return (
        <div className="XoaBan" onClick={(e) => {
            if (e.target.className === "Xoa") {
                props.setChucNang('')
            }
        }}>
            <div className="XoaBan_content">
                <h2>Thông báo</h2>
                <p>Bạn có chắc chắn muốn xóa bàn 'B{props.vitri}'</p>
                <div>
                    <button className="XoaBan_content-cancel" onClick={handleCancel}>Hủy</button>
                    <button className="XoaBan_content-ok" onClick={handleOk}>Đồng ý</button>
                </div>
            </div>
        </div>
    );
}

export default XoaBan;
