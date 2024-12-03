import { useEffect, useState } from "react";
import "./LichSuDatBan.css";
import { Divider, Table } from "antd";
import DatBan from "./DatBan";
import { layDsChiTietDatBanTheoIdMaNguoiDung, layViTriBanTheoIdBan } from "../../../services/ChiTietDatBanAPI";
import HuyDatBan from "./HuyDatBan";


function LS_DatBan() {
    const [dsChiTietDatBan, setDsChiTietDatBan] = useState([]);
    const [chucNang, setChucNang] = useState("");


    useEffect(() => {
        (async () => {
            const nguoidung = JSON.parse(sessionStorage.getItem("nguoidung"));
            const idmanguoidung = nguoidung.id;
            const data = await layDsChiTietDatBanTheoIdMaNguoiDung({ idmanguoidung });
            if (data.dsChiTietDatBan) {
                setDsChiTietDatBan(data.dsChiTietDatBan);
            }
        })();
    }, []);

    const dataSource = dsChiTietDatBan.map((item, index) => {
        let trangThai = "";
        if (item.trangthai === '1')
            trangThai = "Đã đặt bởi khách hàng"
        else if (item.trangthai === '2')
            trangThai = "Đã hủy bởi khách hàng"
        else if (item.trangthai === '3')
            trangThai = "Đã ăn xong"
        else if (item.trangthai === '4')
            trangThai = "Đã đặt bởi nhân viên"
        else if (item.trangthai === '5')
            trangThai = "Đã hủy bởi nhân viên"
        return {
            key: index,
            id: item.idmanguoidung,
            vitri: item.idban,
            ngaygio: item.ngaygio,
            trangthai: trangThai,

            huyDatBan: item.trangthai !== "1" ? "" : (
                <button
                    className="btn-xoa"
                    onClick={() => {
                        setChucNang(
                            <HuyDatBan
                                setChucNang={setChucNang}
                                idban={item.idban}
                                dsChiTietDatBan={dsChiTietDatBan}
                                setDsChiTietDatBan={setDsChiTietDatBan}
                                idmanguoidung={item.idmanguoidung}
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
            title: "Trạng thái",
            dataIndex: "trangthai",
            key: "trangthai",
        },
        {
            title: "Hủy đặt bàn",
            dataIndex: "huyDatBan",
            key: "huyDatBan",
        },
    ];

    return (
        <div className="LishSuDatBan">
            <div className="LichSuDatBan_content">
                <button
                    className="LichSuDatBan_content-datBan"
                    onClick={() => {
                        setChucNang(
                            <DatBan
                                setChucNang={setChucNang}
                                dsChiTietDatBan={dsChiTietDatBan}
                                setDsChiTietDatBan={setDsChiTietDatBan}
                            />
                        );
                    }}
                >
                    Đặt bàn
                </button>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    className="LichSuDatBan_content-table"
                    pagination={{ pageSize: 5 }}
                />
            </div>
            {chucNang}
        </div>
    )
}

export default LS_DatBan;
