export default ({ id, title, description, image }) => (
  <>
    <a href={`/origami/${id}/`}>
      <div class="card">
        <img src={image} alt={title} />
        <p>{title}</p>
      </div>
    </a>
  </>
);
