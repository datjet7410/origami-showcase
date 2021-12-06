export default ({ id, title, image }) => (
  <>
    <a href={`/origami/${id}/`} title={`Mẫu ${title}`}>
      <div class="card">
        <img src={image} alt={title} />
        <p>{title}</p>
      </div>
    </a>
  </>
);
