export default () => (
  <>
    <form name="register" method="POST" data-netlify="true" id="register-form" action="/#register">
      <p>Lưu ý: Hiện tại chỉ có thể gửi 1 ảnh</p>
      <p>
        <label for="author">Tên hoặc Nghệ danh:</label>
        <input type="text" name="author" placeholder="anomynous" required />
      </p>
      <p>
        <label for="email">Email:</label>
        <input type="email" name="email" placeholder="anomynous@xxx.com" />
      </p>
      <p>
        <label for="name">Tên tác phẩm:</label>
        <input type="text" name="name" placeholder="Chim hạc" />
      </p>
      <p>
        <label for="image">Ảnh:</label>
        <input type="file" name="image" />
      </p>
      <p>
        <label for="caption">Giới thiệu:</label>
        <textarea
          name="caption"
          placeholder="Viết gì đó giới thiệu về tác phẩm"
        />
      </p>
      <p>
        <button type="submit">Gửi</button>
      </p>
    </form>
  </>
);
