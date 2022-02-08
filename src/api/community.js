import { addBackendUrl, fakeFetch } from "./util";

export function loadCommunityArticles(page = 1, size = 15) {
  return fakeFetch(addBackendUrl("/community"), {
    data: {
      articles: [
        {
          id: 1,
          title: "데이트는 역시 남산이죠?",
          places: [
            {
              placeId: 1,
              name: "녹사평역 6호선",
              category: "SW8",
            },
            {
              placeId: 2,
              name: "꾸에바마테라",
              category: "CE7",
            },
            {
              placeId: 3,
              name: "해방촌노아",
              category: "FD6",
            },
            {
              placeId: 4,
              name: "남산공원 N서울타워",
              category: "AT4",
            },
          ],
          createdAt: "2021.11.09",
          like: 0,
          comments: 0,
        },
        {
          id: 2,
          title: "맨헤튼 말고 송도에 있는 센트럴파크요!!",
          places: [
            {
              placeId: 5,
              name: "센트럴파크",
              category: "AT4",
            },
            {
              placeId: 6,
              name: "속초코다리냉면 송도본점",
              category: "FD6",
            },
            {
              placeId: 7,
              name: "트리플스트리트",
              category: "AT4",
            },
            {
              placeId: 8,
              name: "제우스볼",
              category: "AT4",
            },
          ],
          createdAt: "2021.11.10",
          like: 0,
          comments: 0,
        },
      ],
    },
  });
}
