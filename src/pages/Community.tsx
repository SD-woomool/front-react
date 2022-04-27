import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { loadCommunityArticles } from "../api/community";
import ArticleList from "../components/ArticleList";
import BottomNavigation from "../components/BottomNavigation";
import SearchBar from "../components/SearchBar";

const StyledLoading = styled.div`
  font-size: 40px;
`;

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
    <StyledLoading>loading...</StyledLoading>
  ) : (
    <div>
      <div>Community</div>
      <p>articles</p>
      <SearchBar />
      <ArticleList articles={state.articles} />
    </div>
  );
}

export default Community;
