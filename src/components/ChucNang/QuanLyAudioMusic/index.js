import { useState, useEffect } from "react";
import "./QuanLyAudioMusic.css";
import { Table, Button, Modal, Form, Input, Select, Popconfirm, message, Space, Tag, Divider } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Them from "./Them";
import Sua from "./Sua";

const { Option } = Select
const { TextArea } = Input


export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [chucNang, setChucNang] = useState("");
  const [form] = Form.useForm();

  // Mock data
  useEffect(() => {
    const mockCourses = [
      {
        id: "1",
        title: "Introduction to React",
        description: "Learn the basics of React development",
        instructor: "John Doe",
        category: "Web Development",
        status: "active",
        students: 120,
        videos: [
          {
            id: "v1",
            title: "Getting Started with React",
            duration: "10:30",
            url: "https://example.com/video1",
          },
          {
            id: "v2",
            title: "Components and Props",
            duration: "15:45",
            url: "https://example.com/video2",
          },
        ],
        actions: (
            <Space size="middle">
              <Button 
                  type="text" 
                  icon={<EditOutlined />} 
                  onClick={() => {
                    setChucNang(
                      <Sua
                        modalVisible={true}
                        setChucNang={setChucNang}
                      />
                    )
                  }} 
              />
              <Popconfirm
                title="Are you sure you want to delete this course?"
                okText="Yes"
                cancelText="No"
              >
                <Button type="text" danger icon={<DeleteOutlined />} />
              </Popconfirm> 
            </Space>
        )
      },

    ]

    setCourses(mockCourses);
  }, [])



  const handleDelete = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id)
    setCourses(updatedCourses)
    message.success("Course deleted successfully")
  }

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Instructor",
      dataIndex: "instructor",
      key: "instructor",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      filters: [
        { text: "Web Development", value: "Web Development" },
        { text: "Programming", value: "Programming" },
        { text: "Design", value: "Design" },
        { text: "Data Science", value: "Data Science" },
      ],
      onFilter: (value, record) => record.category === value,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "green"
        if(status === "draft") 
          color = "gold"
        if(status === "archived") 
          color = "volcano"

        return <Tag color={color}>{status.toUpperCase()}</Tag>
      },
      filters: [
        { text: "Active", value: "active" },
        { text: "Draft", value: "draft" },
        { text: "Archived", value: "archived" },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: "Students",
      dataIndex: "students",
      key: "students",
    },
    {
      title: "Videos",
      key: "videos",
      render: (_, record) => record.videos.length,
    },
    {
      title: "Actions",
      key: "actions",
      dataIndex: "actions"
    },
  ]

  return (
    <div className="QuanLyAudioMusic">
      <div className="mb-20">
        <h1 className="mb-20">Course Management</h1>
        <Button 
          className="" 
          type="primary" 
          icon={<PlusOutlined />} 
          onClick={() => {
            setChucNang(
              <Them
                modalVisible={true}
                setChucNang={setChucNang}
              />
            );
          }}
        >
          Add Course
        </Button>
      </div>

      <Table 
        columns={columns} 
        dataSource={courses} 
        rowKey="id" 
        pagination={{ pageSize: 1, position: ["bottomCenter"] }} 
        
      />
      {chucNang}
    </div>
  )
}
