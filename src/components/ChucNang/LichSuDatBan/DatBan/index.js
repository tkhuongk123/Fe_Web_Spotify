import { useEffect, useState } from "react";
import "./DatBan.css";
import { taoChiTiet } from '../../../../services/ChiTietDatBanAPI';
import { layDsBan, capNhapTrangThaiBanTheoId } from "../../../../services/BanAPI";
import { DatePicker } from "antd";
import { NotifyError, NotifySuccess } from "../../../components/Toast";


function DatBan(props) {
    const [dsBan, setDsBan] = useState([]);


    useEffect(() => {
        (async () => {
            const data = await layDsBan();
            if (data.dsBan) {
                setDsBan(data.dsBan);
            }
        })();
    }, []);



    async function Dat() {
        const idmanguoidung = JSON.parse(
            sessionStorage.getItem("nguoidung")
        ).id;
        let idban = "";
        const currentDate = new Date();
        for (let x of dsBan) {
            if (x.color === "red") {
                idban = x.id;
            }
        }
        let values = {
            idmanguoidung,
            idban,
            ngaygio: currentDate.toLocaleString(),
            trangthai: '1'
        }
        const data = await taoChiTiet(values);
        if (data.error) {
            NotifyError(data.error);
        } else {
            await capNhapTrangThaiBanTheoId({ trangthai: "1", id: idban });
            NotifySuccess("Đặt bàn thành công");
            props.setChucNang("");
            const newDs = [...props.dsChiTietDatBan];
            newDs.push(values);
            props.setDsChiTietDatBan(newDs);

        }
    };


    function setLaiDsChon(item) {
        const newDs = [...dsBan];
        for (let x of newDs) {
            if (x.id === item.id) {
                x.color = "red";
            } else {
                x.color = "var(--primary-color)";
            }
        }
        setDsBan(newDs);
    }

    return (
        <div className="DatBan" onClick={(e) => {
            if (e.target.className === "DatBan") {
                props.setChucNang("");
            }
        }}>
            <div className="DatBan_content">
                <h3>Đặt bàn</h3>
                <div className="DatBan_listBan">
                    <ul>
                        {dsBan.map((item, index) => {
                            return (
                                <li
                                    className="DatBan_item"
                                    key={index}
                                    style={{
                                        opacity:
                                            item.trangthai === '0' ? "1" : "0.6",
                                        cursor:
                                            item.trangthai === '0'
                                                ? "pointer"
                                                : "not-allowed",
                                        backgroundColor: item.color,
                                    }}
                                    onClick={(e) => {
                                        if (item.trangthai === '0') {
                                            setLaiDsChon(item);
                                        }
                                    }}
                                >
                                    <span>B{item.vitri}</span>
                                    <p>
                                        Số người: <span>{item.soluong}</span>
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="DatBan_controll">
                    <div className="DatBan_controll-btn">
                        <button
                            className="DatBan_btn-mangve"
                            onClick={() => {
                                props.setChucNang("");
                            }}
                        >
                            Đóng
                        </button>
                        <button
                            className="DatBan_btn-datban"
                            onClick={() => {
                                Dat();
                            }}
                        >
                            Đặt bàn
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DatBan;
