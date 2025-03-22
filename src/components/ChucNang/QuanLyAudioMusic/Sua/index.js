import { useState, useEffect } from "react";
import { Form, Button, Input, Select, Modal, Tabs, Popconfirm } from "antd";
import { AndroidOutlined, AppleOutlined, PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
import "./Sua.css";


const { Option } = Select;

function Sua(props) {
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(true);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");




  const items = [
    {
        key: '1',
        label: 'Tab 1',
        icon: <AndroidOutlined/>,
        children:
            <>
                <div className="table-container">
                    <table className="">
                        <thead>
                            <th></th>
                            <th className="column">
                                Tiêu đề video
                            </th>
                            <th className="column">
                                URL video
                            </th>
                        </thead>
                        <tbody className="videos">
                            <tr className="video">
                                <td>
                                <Popconfirm
                                    title="Are you sure you want to delete this course?"
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <Button 
                                        type="text"
                                        danger
                                        className="icon" 
                                        icon={<DeleteOutlined/>}
                                        style={{display: 'none'}}
                                    />
                                </Popconfirm>
                                </td>
                                <td className="column">
                                    <Input 
                                        className="input-video"
                                        value="Test #1" 
                                        
                                    />
                                </td>
                                <td className="column">
                                    <Input 
                                        className="input-video"
                                        value="Test Url"
                                        
                                    />
                                </td>
                            </tr>
                        </tbody>
                        <tbody className="adding">
                            <tr className="border-top">
                                <td></td>
                                <td>Thêm video:</td>
                            </tr>
                            <tr className="add-form">
                                <td>
                                    <Button 
                                        type="text"
                                        className="icon" 
                                        icon={<PlusCircleOutlined/>}
                                        style={{display: 'none'}}
                                    />
                                </td>
                                <td className="column">
                                    <Input 
                                        className="input-video"
                                        value={videoTitle} 
                                        onChange={(e) => setVideoTitle(e.target.value)}
                                    />
                                </td>
                                <td className="column">
                                    <Input 
                                        className="input-video"
                                        value={videoUrl} 
                                        onChange={(e) => setVideoUrl(e.target.value)}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
    },
    {
      key: '2',
      label: 'Tab 2',
      icon: <AppleOutlined/>,
      children: 
        <>
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
        </>
    },
  ];

  const handleCancel = () => {
    setModalVisible(false); // Đóng modal
    props.setChucNang("");
  };



  return (
        <Modal
            title="Edit Course"
            open={modalVisible}
            onCancel={handleCancel}
            // onOk={handleSave}
            width={800}
        >
            <h3 style={{textAlign: 'center'}}>Đang chỉnh sửa</h3>
            <Tabs defaultActiveKey="1" 
                  items={items} 
                //   onChange={onChange} 
            />
        </Modal>
  );
}

export default Sua;
