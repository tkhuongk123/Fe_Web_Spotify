import { useEffect, useState } from "react";
import "./QuanLyDatBan.css";
import { Divider, Table } from "antd";
import { layDsChiTietDatBanTrongHangCho } from "../../../services/ChiTietDatBanAPI";
import { layTaiKhoan } from "../../../services/TaiKhoanAPI";
import TuChoiDatBan from "./TuChoiDatBan";
import XacNhanDaXong from "./XacNhanDaXong";
import LichSuDatBanNV from "./LichSuDatBanNV";


function QuanLyDatBan() {
    const [dsChiTietDatBan, setDsChiTietDatBan] = useState([]);
    const [chucNang, setChucNang] = useState("");


    useEffect(() => {
        (async () => {
            // const nguoidung = JSON.parse(sessionStorage.getItem("nguoidung"));
            // const idmanguoidung = nguoidung.id;
            const data = await layDsChiTietDatBanTrongHangCho();
            if (data.dsChiTietDatBan) {
                setDsChiTietDatBan(data.dsChiTietDatBan);
            }
        })();
    }, []);

    const dataSource = dsChiTietDatBan.map((item, index) => {
        return {
            key: index,
            id: item.idmanguoidung,
            vitri: item.idban,
            ngaygio: item.ngaygio,
            xacNhanDaXong: (
                <button
                    className="btn-xacNhan"
                    onClick={() => {
                        setChucNang(
                            <XacNhanDaXong
                                setChucNang={setChucNang}
                                idban={item.idban}
                                idmanguoidung={item.idmanguoidung}
                                dsChiTietDatBan={dsChiTietDatBan}
                                setDsChiTietDatBan={setDsChiTietDatBan}
                            />
                        );
                    }}
                >
                    <i class="fa-solid fa-check"></i>
                </button>
            ),
            tuChoiDatBan: (
                <button
                    className="btn-tuChoi"
                    onClick={() => {
                        setChucNang(
                            <TuChoiDatBan
                                setChucNang={setChucNang}
                                idban={item.idban}
                                idmanguoidung={item.idmanguoidung}
                                dsChiTietDatBan={dsChiTietDatBan}
                                setDsChiTietDatBan={setDsChiTietDatBan}
                            />
                        );
                    }}
                >
                    <i class="fa-solid fa-ban"></i>
                </button>
            )

        }
    });

    const columns = [
        {
            title: "ID Người dùng",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "ID Bàn",
            dataIndex: "vitri",
            key: "vitri",
        },
        {
            title: "Ngày đặt",
            dataIndex: "ngaygio",
            key: "ngaygio",
        },
        {
            title: "Xác nhận đã xong",
            dataIndex: "xacNhanDaXong",
            key: "xacNhanDaXong",
        },
        {
            title: "Từ chối đặt bàn",
            dataIndex: "tuChoiDatBan",
            key: "tuChoiDatBan",
        },
    ];

    return (
        <div className="QuanLyDatBan">
            <div className="QuanLyDatBan_content">
                <button
                    className="QuanLyDatBan_content-lichSuDatBan"
                    onClick={() => {
                        setChucNang(
                            <LichSuDatBanNV
                                setChucNang={setChucNang}
                                dsChiTietDatBan={dsChiTietDatBan}
                                setDsChiTietDatBan={setDsChiTietDatBan}
                            />
                        );
                    }}
                >
                    Lịch sử đặt bàn
                </button>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    className="QuanLyDatBan_content-table"
                    pagination={{ pageSize: 5 }}
                />
            </div>
            {chucNang}
        </div>
    )
}

export default QuanLyDatBan;
