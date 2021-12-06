import BaseLayout from "./base.jsx";

export const layout = "layouts/base.njk";

export default ({
  title,
  image,
  description,
  steps,
  variants,
  sources,
}) => (
  <BaseLayout title={`Mẫu ${title}`}>
    <div class="main-smaller">
      <img src={image} alt={title} />
      {!description ? (
        <></>
      ) : (
        <>
          <h2>Giới thiệu</h2>
          <p>{description}</p>
        </>
      )}
      {!steps ? (
        <></>
      ) : (
        <>
          <h2>Các bước gấp</h2>
          <img src={steps} alt="Các bước gấp" />
        </>
      )}
      {!variants || variants.length == 0 ? (
        <></>
      ) : (
        <>
          <h2>Các biến thể</h2>
          {variants.map(({ image, caption }) => (
            <div>
              <p>{caption}</p>
              <img src={image} alt={caption} />
            </div>
          ))}
        </>
      )}
      {!sources || sources.length == 0 ? (
        <></>
      ) : (
        <>
          <h2>Nguồn</h2>
          <ul>
            {sources.map((url) => (
              <li>
                <a href={url}>{url}</a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  </BaseLayout>
);
