import { useEffect, useState } from "react";
import "./LichSuDatBanNV.css";
import { Divider, Table } from "antd";
import { layDsChiTietDatBan, layViTriBanTheoIdBan } from "../../../../services/ChiTietDatBanAPI";



function LichSuDatBanNV(props) {
    const [dsChiTietDatBan, setDsChiTietDatBan] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await layDsChiTietDatBan();
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
            trangthai: trangThai
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
    ];

    return (
        <div className="LichSuDatBanNV" onClick={(e) => {
            if (e.target.className === "LichSuDatBanNV") {
                props.setChucNang("");
            }
        }}>
            <div className="LichSuDatBanNV_content">
                <h2>Lịch sử đặt bàn</h2>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    className="LichSuDatBanNV_content-table"
                    pagination={{ pageSize: 5 }}
                />
            </div>
        </div>
    )
}

export default LichSuDatBanNV;
