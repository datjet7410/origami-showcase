export const layout = "layouts/base.jsx";
export const title = "About";
export default ({ sources: origamiSources }) => (
  <>
    <h2>Email</h2>
    <p>
      dat.nguyendatjet7410@hcmut.edu.vn - &nbsp;
      <a href="mailto:dat.nguyendatjet7410@hcmut.edu.vn">Gửi mail đến tôi</a>
    </p>
    <h2>Sources</h2>
    <ul>
      {origamiSources.map(({ name, url }) => (
        <li>
          {name} 🢣 &nbsp; <a href={url}>{url}</a>
        </li>
      ))}
    </ul>
  </>
);
