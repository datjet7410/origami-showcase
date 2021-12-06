import Arrow from "./_includes/components/arrow.jsx";

export const layout = "layouts/base.jsx";
export const title = "Trang thông tin về Triễn lãm origami";

export default ({ sources: origamiSources }, filter) => (
  <>
    <p>
      Nội dung của triễn lãm bao gồm hình ảnh sưu tầm từ Internet và truyện chế
      của tác giả.
    </p>
    <p>
      Bạn cũng có thể đăng mẫu origami của bạn tại link này <Arrow />
      <a href="/#register">{filter.url("/#register", true)}</a>
    </p>

    <h2>Về tác giả</h2>
    <p>
      Họ và tên <Arrow /> Nguyễn Tiến Đạt
    </p>
    <p>
      Mã số sinh viên <Arrow /> 1911019
    </p>
    <p>
      Email <Arrow /> dat.nguyendatjet7410@hcmut.edu.vn <Arrow />
      <a href="mailto:dat.nguyendatjet7410@hcmut.edu.vn">Gửi mail đến tôi</a>
    </p>

    <h2>Lỗi có thể gặp</h2>
    <p>
      Không hiện được hình <Arrow /> Do trình duyệt của bạn quá cũ
    </p>
    <p>
      Trang hiển thị xấu trên điện thoại <Arrow /> Do tác giả lười cập nhật
    </p>

    <h2>Sources</h2>
    <ul>
      {origamiSources.map(({ name, url }) => (
        <li>
          {name} <Arrow />
          <a href={url} target="_blank">
            {url}
          </a>
        </li>
      ))}
    </ul>

    <h2>Code của trang web</h2>
    <p>
      Có thể xem tại <Arrow />
      <a
        href="https://github.com/datjet7410/origami-showcase/tree/gh-pages"
        target="_blank"
      >
        https://github.com/datjet7410/origami-showcase/tree/gh-pages
      </a>
    </p>
  </>
);
