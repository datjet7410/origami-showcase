import Panel from "./_includes/components/panel.jsx";
import Arrow from "./_includes/components/arrow.jsx";
import Register from "./_includes/components/register.jsx";

export const layout = "layouts/base.jsx";

export const title = "Chào mừng đến với Triễn lãm origami";

export default ({ origami: origamiData, references: origamiRef }) => (
  <>
    <h2 class="text-2xl my-4">Origami là gì</h2>
    <p>
      Origami (tiếng Nhật: 折り紙) là một loại nghệ thuật gấp giấy có xuất xứ từ
      Nhật Bản. Chữ origami trong tiếng Nhật bắt nguồn từ hai chữ: ori là gấp
      hay xếp và kami là giấy.
    </p>
    <p>Không hiểu vì lý do gì, hầu hết các mẫu origami là động vật.</p>

    <h2 class="text-2xl my-4">Các mẫu origami thường gặp</h2>
    <Panel list={origamiData.common} />

    <h2 class="text-2xl my-4">Các mẫu tuyệt đỉnh origami</h2>
    <Panel list={origamiData.wonderful} />

    <h2>Một vài trang web tham khảo cho bạn</h2>
    <ul>
      {origamiRef.map(({ url, title }) => (
        <li>
          {title} <Arrow />
          <a href={url} target="_blank">
            {url}
          </a>
        </li>
      ))}
    </ul>

    <h2>Trưng bày mẫu của bạn</h2>
    <p>
      Bạn có thể đăng mẫu origami mà bạn gấp cùng một câu chuyện của riêng bạn
      tại triễn lãm này.
    </p>
    <p>
      Bạn chỉ cần <em>điền đơn dưới đây</em> hoặc
      <em>gửi mail đến tác giả</em> triễn lãm qua địa chỉ
      dat.nguyendatjet7410@hcmut.edu.vn <Arrow />
      <a href="mailto:dat.nguyendatjet7410@hcmut.edu.vn">
        Gửi mail đến tác giả
      </a>
    </p>
    <p>Sau khi kiểm duyệt, tác giả sẽ đăng bài của bạn lên.</p>

    <h2 id="register">Đơn đăng kí trưng bày</h2>
    <Register />
  </>
);
