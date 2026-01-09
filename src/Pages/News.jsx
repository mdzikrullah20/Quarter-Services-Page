import { Link } from "react-router-dom";

const newsData = [
  { id: 1, title: "React 19 Released" },
  { id: 2, title: "JavaScript Trends 2026" }
];

function News() {
  return (
    <div>
      <h1>Latest News</h1>
      {newsData.map((item) => (
        <div key={item.id}>
          <Link to={`/news/${item.id}`}>
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default News;
