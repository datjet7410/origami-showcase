export const layout = "layouts/base.jsx";
export const title = "Trang thông tin về Triễn lãm origami";
export default ({ sources: origamiSources }) => (
  <>
    <h2>Về tác giả</h2>
    <p>Họ và tên &nbsp; 🢣 &nbsp; Nguyễn Tiến Đạt</p>
    <p>Mã số sinh viên &nbsp; 🢣 &nbsp; 1911019</p>
    <p>
      Email &nbsp; 🢣 &nbsp; dat.nguyendatjet7410@hcmut.edu.vn &nbsp; 🢣 &nbsp;
      <a href="mailto:dat.nguyendatjet7410@hcmut.edu.vn">Gửi mail đến tôi</a>
    </p>
    <h2>Lỗi có thể gặp</h2>
    <p>Không hiện được hình &nbsp; 🢣 &nbsp; Do trình duyệt của bạn quá cũ</p>
    <p>
      Trang hiển thị xấu trên điện thoại &nbsp; 🢣 &nbsp; Do tác giả lười cập
      nhật
    </p>
    <h2>Sources</h2>
    <ul>
      {origamiSources.map(({ name, url }) => (
        <li>
          {name} &nbsp; 🢣 &nbsp; <a href={url}>{url}</a>
        </li>
      ))}
    </ul>
    <h2>Code của trang web</h2>
    <p>
      Có thể xem tại &nbsp; 🢣 &nbsp;
      <a href="https://github.com/datjet7410/origami-showcase/tree/gh-pages">
        https://github.com/datjet7410/origami-showcase/tree/gh-pages
      </a>
    </p>
  </>
);
