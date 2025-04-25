# Music Streaming API

Đây là một dự án API dịch vụ phát nhạc trực tuyến được xây dựng bằng Django và Django REST Framework (DRF). Dự án cung cấp các chức năng tương tự như các nền tảng phát nhạc phổ biến như Spotify, bao gồm quản lý người dùng, duyệt danh mục nhạc, tạo playlist và theo dõi lịch sử phát nhạc.

---

## Mục lục

- [Music Streaming API](#music-streaming-api)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Danh sách API](#danh-sách-api)
  - [App Users](#app-users)
  - [App Music](#app-music)
  - [App Playlists](#app-playlists)
  - [App Streaming](#app-streaming)
- [Lưu ý quan trọng](#lưu-ý-quan-trọng)
- [Hướng dẫn cài đặt](#hướng-dẫn-cài-đặt)

---

## Cấu trúc thư mục

Dự án được tổ chức theo cấu trúc thư mục sau:

```
my_project/
├── manage.py
├── my_project/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── apps/
│   ├── users/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── admin.py
│   │   └── api/
│   │       ├── __init__.py
│   │       ├── serializers.py
│   │       ├── views.py
│   │       └── urls.py
│   ├── music/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── admin.py
│   │   └── api/
│   │       ├── __init__.py
│   │       ├── serializers.py
│   │       ├── views.py
│   │       └── urls.py
│   ├── playlists/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── admin.py
│   │   └── api/
│   │       ├── __init__.py
│   │       ├── serializers.py
│   │       ├── views.py
│   │       └── urls.py
│   └── streaming/
│       ├── __init__.py
│       ├── models.py
│       ├── admin.py
│       └── api/
│           ├── __init__.py
│           ├── serializers.py
│           ├── views.py
│           └── urls.py
```

### Giải thích
- Mỗi app (ví dụ: `users`, `music`) tập trung vào một miền chức năng riêng biệt, giúp mã nguồn dễ quản lý và mở rộng.
- Thư mục `api/` trong mỗi app chứa các thành phần liên quan đến API như:
  - `serializers.py`: Chuyển đổi dữ liệu giữa mô hình và JSON.
  - `views.py`: Xử lý yêu cầu HTTP.
  - `urls.py`: Định nghĩa các endpoint API.
- Cấu trúc này phù hợp cho các dự án lớn, đảm bảo mã nguồn được tổ chức rõ ràng và dễ bảo trì.

---

## Danh sách API

Dưới đây là danh sách các API cần thiết, được phân bổ theo từng app:

### App Users

| Phương thức | Endpoint                       | Mô tả                           |
|-------------|--------------------------------|---------------------------------|
| POST        | `/api/users/register/`         | Đăng ký tài khoản mới.          |
| POST        | `/api/users/login/`            | Đăng nhập.                      |
| POST        | `/api/users/logout/`           | Đăng xuất.                      |
| GET         | `/api/users/profile/`          | Lấy thông tin hồ sơ người dùng. |
| PUT         | `/api/users/profile/`          | Cập nhật thông tin hồ sơ người dùng. |
| POST        | `/api/users/password/reset/`   | Khởi tạo quá trình đặt lại mật khẩu. |
| PUT         | `/api/users/password/reset/confirm/` | Xác nhận đặt lại mật khẩu. |

### App Music

| Phương thức | Endpoint                       | Mô tả                           |
|-------------|--------------------------------|---------------------------------|
| GET         | `/api/music/songs/`            | Lấy danh sách tất cả các bài hát. |
| GET         | `/api/music/songs/<id>/`       | Lấy chi tiết một bài hát cụ thể. |
| GET         | `/api/music/songs/search/?query=<string>` | Tìm kiếm bài hát theo tên, nghệ sĩ hoặc album. |
| GET         | `/api/music/artists/`          | Lấy danh sách tất cả các nghệ sĩ. |
| GET         | `/api/music/artists/<id>/`     | Lấy chi tiết một nghệ sĩ cụ thể. |
| GET         | `/api/music/albums/`           | Lấy danh sách tất cả các album. |
| GET         | `/api/music/albums/<id>/`      | Lấy chi tiết một album cụ thể.  |
| GET         | `/api/music/albums/<id>/songs/`| Lấy danh sách bài hát trong một album. |

### App Playlists

| Phương thức | Endpoint                       | Mô tả                           |
|-------------|--------------------------------|---------------------------------|
| POST        | `/api/playlists/`              | Tạo một playlist mới.           |
| GET         | `/api/playlists/`              | Lấy danh sách tất cả playlist của người dùng. |
| GET         | `/api/playlists/<id>/`         | Lấy chi tiết một playlist cụ thể. |
| PUT         | `/api/playlists/<id>/`         | Cập nhật thông tin của một playlist. |
| DELETE      | `/api/playlists/<id>/`         | Xóa một playlist.               |
| POST        | `/api/playlists/<id>/songs/`   | Thêm bài hát vào playlist.      |
| DELETE      | `/api/playlists/<id>/songs/<song_id>/` | Xóa bài hát khỏi playlist. |

### App Streaming

| Phương thức | Endpoint                       | Mô tả                           |
|-------------|--------------------------------|---------------------------------|
| POST        | `/api/streaming/start/`        | Bắt đầu một phiên phát nhạc.    |
| POST        | `/api/streaming/end/`          | Kết thúc một phiên phát nhạc.   |
| GET         | `/api/streaming/history/`      | Lấy lịch sử phát nhạc của người dùng. |

---

## Lưu ý quan trọng

- **Xác thực và quyền truy cập**: Hầu hết các API (trừ đăng ký và đăng nhập) yêu cầu xác thực người dùng. Dự án sử dụng cơ chế xác thực dựa trên token (ví dụ: JWT). Hãy thêm token xác thực vào header của yêu cầu khi gọi các endpoint được bảo vệ.
  
- **Phân trang và lọc dữ liệu**: Đối với các API trả về danh sách (như danh sách bài hát, playlist), dự án hỗ trợ phân trang (pagination) và lọc dữ liệu (filtering) để tối ưu hiệu suất. Xem tài liệu API để biết thêm về các tham số truy vấn.

- **Versioning**: API sử dụng versioning (ví dụ: `/api/v1/users/`) để quản lý các thay đổi trong tương lai. Hãy luôn chỉ định phiên bản khi gọi API để tránh vấn đề tương thích.

- **Tài liệu hóa API**: Dự án sử dụng Swagger (thông qua `drf-yasg`) để tạo tài liệu API tự động. Truy cập tài liệu tương tác tại `/api/docs/` để khám phá các endpoint, tham số và phản hồi.

---

## Hướng dẫn cài đặt

### Yêu cầu trước khi cài đặt

- Python 3.8 trở lên
- Django 3.2 trở lên
- Django REST Framework 3.12 trở lên
- PostgreSQL (hoặc bất kỳ cơ sở dữ liệu nào bạn muốn sử dụng)

### Các bước cài đặt

1. **Sao chép dự án từ kho lưu trữ**:
   ```bash
   git clone https://github.com/Tinhs05/CloneSpotify_Backend.git
   cd src
   ```

2. **Tạo môi trường ảo**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Trên Windows: venv\Scripts\activate
   ```

3. **Cài đặt các thư viện cần thiết**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Thiết lập cơ sở dữ liệu**:
   - Cấu hình cài đặt cơ sở dữ liệu trong `src/settings.py`.
   - Chạy lệnh migrate để tạo bảng:
     ```bash
     python manage.py migrate
     ```

5. **Tạo tài khoản quản trị viên (superuser)**:
   ```bash
   python manage.py createsuperuser
   ```

6. **Khởi động server phát triển**:
   ```bash
   python manage.py runserver
   ```

7. **Truy cập API**:
   - API có sẵn tại `http://localhost:8000/api/`.
   - Tài liệu API có thể xem tại `http://localhost:8000/api/docs/`.

---
