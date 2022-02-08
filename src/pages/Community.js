import { useEffect, useState } from "react";
import { loadCommunityArticles } from "../api/community";

function Community() {
  const [state, setState] = useState({
    loading: true,
    articles: [],
  });

  useEffect(() => {
    // 최초 실행시 데이터 불러오기
    loadCommunityArticles(1, 15).then((json) => {
      setState({
        ...state,
        loading: false,
        articles: json.data.articles,
      });
    });
  }, []);

  console.log(state.articles);

  return state.loading ? (
    <div>loading...</div>
  ) : (
    <div>
      <div>Community</div>
      <p>articles</p>
      {state.articles.map((article) => (
        <div key={article.id}>
          <p>{article.title}</p>
          {
            // TODO article.places 화면에 표시하기
            // TODO article.like, article.comments 화면에 표시하기
            // TODO article.createdAt 화면에 표시하기
          }
        </div>
      ))}
    </div>
  );
}

export default Community;
