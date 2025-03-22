import { useState, useEffect } from "react";
import { Form, Button, Input, Select, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
// import "./Them.css";

const { Option } = Select;

function Them(props) {
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(true);

  const handleCancel = () => {
    setModalVisible(false); // Đóng modal
    props.setChucNang("");
  };



  return (
        <Modal
            title="Add New Course"
            open={modalVisible}
            onCancel={handleCancel}
            // onOk={handleSave}
            width={600}
        >
            <Form form={form} layout="vertical" className="mt-4">
                <Form.Item
                    name="title"
                    label="Course Title"
                    rules={[{ required: true, message: "Please enter course title" }]}
                >
                    <Input placeholder="Enter course title" />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Description"
                    rules={[{ required: true, message: "Please enter course description" }]}
                >
                    <TextArea rows={4} placeholder="Enter course description" />
                </Form.Item>

                <Form.Item
                    name="instructor"
                    label="Instructor"
                    rules={[{ required: true, message: "Please enter instructor name" }]}
                >
                    <Input placeholder="Enter instructor name" />
                </Form.Item>

                <Form.Item name="category" label="Category" rules={[{ required: true, message: "Please select a category" }]}>
                    <Select placeholder="Select a category">
                    <Option value="Web Development">Web Development</Option>
                    <Option value="Programming">Programming</Option>
                    <Option value="Design">Design</Option>
                    <Option value="Data Science">Data Science</Option>
                    <Option value="Business">Business</Option>
                    <Option value="Marketing">Marketing</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="status" label="Status" rules={[{ required: true, message: "Please select a status" }]}>
                    <Select placeholder="Select status">
                    <Option value="active">Active</Option>
                    <Option value="draft">Draft</Option>
                    <Option value="archived">Archived</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
  );
}

export default Them;
