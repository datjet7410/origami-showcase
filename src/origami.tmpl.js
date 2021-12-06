export const layout = "layouts/post.jsx";

export default function* ({ origami: origamiData }, filters) {
  for (const tag in origamiData) {
    for (const post of origamiData[tag]) {
      yield { ...post, url: `/origami/${post.id}/` };
    }
  }
}
