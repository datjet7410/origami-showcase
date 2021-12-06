import Panel from "./_includes/components/panel.jsx";

export const layout = "layouts/base.jsx";

export const title = "Chào mừng đến với Triễn lãm origami";

export default ({ origami: origamiData, references: origamiRef }) => (
  <>
    <h2 class="text-2xl my-4">Origami là gì</h2>
    <p>
      Origami (tiếng Nhật: 折り紙)
      là một loại nghệ thuật gấp giấy có xuất xứ từ Nhật Bản. Chữ origami trong
      tiếng Nhật bắt nguồn từ hai chữ: ori là gấp hay xếp và kami là giấy.
    </p>
    <p>Không hiểu vì lý do gì, hầu hết các mẫu origami là động vật.</p>
    <h2 class="text-2xl my-4">Các mẫu origami thường gặp</h2>
    <Panel list={origamiData.common} />
    <h2 class="text-2xl my-4">Các mẫu tuyệt đỉnh origami</h2>
    <Panel list={origamiData.wonderful} />
    <h2>Một vài trang web tham khảo</h2>
    <ul>
      {origamiRef.map(({ url, title }) => (
        <li>
          {title} &nbsp; 🢣 &nbsp;
          <a href={url} target="_blank">
            {url}
          </a>
        </li>
      ))}
    </ul>
  </>
);
