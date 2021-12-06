import Panel from "./_includes/components/panel.jsx";

export const layout = "layouts/base.jsx";

export const title = "Chào mừng đến với Triễn lãm origami";

export default ({ origami: origamiData, references: origamiRef }) => (
  <>
    <h2 class="text-2xl my-4">Origami là gì</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero veniam
      sit impedit porro nsemo hic animi perspiciatis vel corrupti eligendi
      possimus distinctio similique facilis architecto ex rem, iste ea! Omnis?I
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
          {title} 🢣 &nbsp;
          <a href={url} target="_blank">
            {url}
          </a>
        </li>
      ))}
    </ul>
  </>
);
