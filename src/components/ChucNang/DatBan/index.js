import { useEffect, useState } from "react";
import "./DatBan.css";
import { layDsBan } from "../../../services/BanAPI";
import { DatePicker } from "antd";

function DatBan() {
    const [dsBan, setDsBan] = useState([]);
    const [ngaygio, setNgaygio] = useState("");

    useEffect(() => {
        (async () => {
            const data = await layDsBan();
            if (data.dsBan) {
                setDsBan(data.dsBan);
            }
        })();
    }, []);

    const onChange = (date, dateString) => {
        setNgaygio(dateString);
    };

    async function Dat() {
        const idmanguoidung = JSON.parse(
            sessionStorage.getItem("nguoidung")
        ).id;
        let idban = "";
        for (let x of dsBan) {
            if (x.color === "red") {
                idban = x.id;
            }
        }
        console.log(idmanguoidung, idban, ngaygio);
    }

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
            if(e.target.className === "DatBan") {
                e.target.style.display = 'none'
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
                                    <i className="fa-solid fa-table"></i>
                                    <p>
                                        Số người: <span>{item.soluong}</span>
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="DatBan_controll">
                    <DatePicker
                        showTime
                        format="YYYY-MM-DD HH:mm"
                        onChange={onChange}
                    />
                    <div className="DatBan_controll-btn">
                        <button
                            className="DatBan_btn-mangve"
                            onClick={() => {
                                document.querySelector(
                                    ".DatBan"
                                ).style.display = "none";
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
    );
}

export default DatBan;
