import { useEffect, useState } from "react";
import "./Ban.css";
import { taoChiTiet } from '../../../services/ChiTietDatBanAPI';
import { layDsBan, capNhapTrangThaiBanTheoId } from "../../../services/BanAPI";
import { layDsChiTietDatBanTheoIdMaNguoiDung } from "../../../services/ChiTietDatBanAPI";
import { NotifyError, NotifySuccess } from "../../components/Toast";
import ThemBan from "./ThemBan";
import XoaBan from "./XoaBan";

function Ban() {
    const [dsBan, setDsBan] = useState([]);
    const [dsChiTietDatBan, setDsChiTietDatBan] = useState([]);

    const [chucNang, setChucNang] = useState("");


    useEffect(() => {
        (async () => {
            const nguoidung = JSON.parse(sessionStorage.getItem("nguoidung"));
            const idmanguoidung = nguoidung.id;
            const data = await layDsBan();
            const dataCTDB = await layDsChiTietDatBanTheoIdMaNguoiDung({ idmanguoidung });
            if (data.dsBan) {
                setDsBan(data.dsBan);
            }
            if (dataCTDB.dsChiTietDatBan) {
                setDsChiTietDatBan(dataCTDB.dsChiTietDatBan);
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
        if (idban === "") {
            NotifyError("Vui lòng chọn bàn để đặt bàn");
            return;
        }
        let values = {
            idmanguoidung,
            idban,
            ngaygio: currentDate.toLocaleString(),
            trangthai: '4'
        }
        const data = await taoChiTiet(values);
        if (data.error) {
            NotifyError(data.error);
        } else {
            await capNhapTrangThaiBanTheoId({ trangthai: "1", id: idban });
            NotifySuccess("Đặt bàn thành công");
            const newDs = [...dsChiTietDatBan];
            console.log(">>> ", newDs)
            newDs.push(values);
            setDsChiTietDatBan(newDs);
        }
    };

    async function Xoa() {
        let idban = "";
        let vitri = "";
        for (let x of dsBan) {
            if (x.color === "red") {
                idban = x.id;
                vitri = x.vitri;
            }
        }
        if (idban === "") {
            NotifyError("Vui lòng chọn bàn để xóa");
            return;
        }
        else {
            return setChucNang(
                <XoaBan
                    setChucNang={setChucNang}
                    setDsBan={setDsBan}
                    id={idban}
                    vitri={vitri}
                    dsBan={dsBan}
                />
            );
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
        <div className="Ban_content">
            <h3>Đặt bàn</h3>
            <div className="Ban_controll">
                <div className="Ban_controll-btn">
                    <button
                        className="Ban_btn-datban"
                        onClick={() => {
                            Dat();
                        }}
                    >
                        Đặt bàn
                    </button>
                    <button
                        className="Ban_btn-themban"
                        onClick={() => {
                            setChucNang(
                                <ThemBan
                                    setChucNang={setChucNang}
                                    dsBan={dsBan}
                                    setDsBan={setDsBan}
                                />
                            );
                        }}
                    >
                        Thêm bàn
                    </button>
                    <button
                        className="Ban_btn-xoaban"
                        onClick={() => {
                            Xoa()
                        }}
                    >
                        Xóa bàn
                    </button>
                </div>
            </div>
            <div className="Ban_listBan">
                <ul>
                    {dsBan.map((item, index) => {
                        return (
                            <li
                                className="Ban_item"
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
            {chucNang}
        </div>

    )
}


export default Ban;
