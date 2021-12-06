import Card from "./card.jsx";

export default ({ list }) => (
  <>
    <div class="panel">
      {list.map((info) => (
        <Card {...info} />
      ))}
    </div>
  </>
);
