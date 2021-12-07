export default () => (
  <>
    <form
      name="register"
      id="register-form"
      action="/#register"
      method="POST"
      data-netlify-recaptcha="true"
      data-netlify="true"
    >
      <p>
        <small>
          <em>
            Lưu ý: Đơn dưới đây chỉ nhận gửi 1 ảnh dưới 1Mb, gửi qua mail để
            đăng nhiều hơn
          </em>
        </small>
      </p>
      <p>
        <label for="author">Tên hoặc Nghệ danh*:</label>
        <input type="text" name="author" placeholder="anomynous" required />
      </p>
      <p>
        <label for="email">Email:</label>
        <input type="email" name="email" placeholder="anomynous@xxx.com" />
      </p>
      <p>
        <label for="name">Tên tác phẩm*:</label>
        <input type="text" name="name" placeholder="Chim hạc" required />
      </p>
      <p>
        <label for="image">
          Ảnh*: <small>(.png, .jpg, .jpeg, .webp)</small>
        </label>
        <input
          type="file"
          name="image"
          accept=".png, .jpg, .jpeg, .webp"
          required
        />
      </p>
      <p>
        <label for="caption">Giới thiệu:</label>
        <textarea
          name="caption"
          placeholder="Viết gì đó giới thiệu về tác phẩm"
        />
      </p>

      <p>
        <div data-netlify-recaptcha="true"></div>
        <button type="submit">Nhấn để Gửi</button>
      </p>
    </form>
  </>
);
