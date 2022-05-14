import React, { useEffect, useState } from "react";
import { loadCommunityArticles } from "../api/communityApi";
import ArticleList from "../components/ArticleList";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";

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

  return state.loading ? (
    <Loading />
  ) : (
    <div>
      <SearchBar />
      <ArticleList articles={state.articles} />
    </div>
  );
}

export default Community;
