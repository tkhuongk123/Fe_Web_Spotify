import { Form, Button, Input, Select } from "antd";
import "./ThemBan.css";
import { them } from "../../../../services/BanAPI";
import { NotifyError, NotifySuccess } from "../../../components/Toast";
import TextArea from "antd/es/input/TextArea";

const { Option } = Select;

function ThemBan(props) {
    const [form] = Form.useForm();

    const themBan = async (values) => {
        const data = await them(values);
        if (data.error) {
            NotifyError(data.error);
        } else if (data.inputInvalid) {
            form.setFields([
                {
                    name: data.inputInvalid,
                    errors: [data.messageInvalid],
                },
            ]);
        } else {
            NotifySuccess("Thêm bàn thành công");
            const newDs = [...props.dsBan];
            values.id = data.ban;
            newDs.push(values);
            props.setDsBan(newDs);
            form.resetFields();
        }
    };

    return (
        <div
            className="ThemBan"
            onClick={(e) => {
                if (e.target.className === "ThemBan") {
                    props.setChucNang("");
                }
            }}
        >
            <div className="ThemBan_content">
                <Form
                    onFinish={(values) => {
                        themBan(values);
                    }}
                    layout="vertical"
                    form={form}
                >
                    <Form.Item
                        label="Vị trí bàn"
                        name="vitri"
                        rules={[
                            { required: true, message: " Vui lòng nhập Vị trí bàn!" },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Số lượng chỗ ngồi"
                        name="soluong"
                        rules={[{ required: true, message: " Vui lòng nhập Số lượng chỗ ngồi!" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{
                                width: "100%",
                                marginTop: "10px",
                                backgroundColor: "var(--primary-color)",
                            }}
                        >
                            Thêm bàn
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default ThemBan;
