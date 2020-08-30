import instance from "../axios-db-instance";
import * as newsActions from "./newsActions";

export const newsLoading = () => {
  return {
    type: newsActions.NEWS_LOADING,
  };
};

export const newsSuccess = (newsData) => {
  const news = newsData;
  return {
    type: newsActions.NEWS_SUCCESS,
    data: {
      news: news,
    },
  };
};

export const newsError = (error) => {
  return {
    type: newsActions.NEWS_ERROR,
    error: error,
  };
};

export const newsAdd = (news) => {
  return {
    type: newsActions.NEWS_ADD,
    data: news,
  };
};

export const checkNewsState = () => {
  return (dispatch) => {
    const localData = getLocalStorageNews();
    if (localData !== null) {
      dispatch(newsSuccess(localData));
    } else {
      dispatch(downloadNews());
    }
  };
};

export const downloadNews = () => {
  return (dispatch) => {
    instance
      .get(`/news.json`)
      .then((resolve) => {
        dispatch(newsSuccess(resolve.data));
        setLocalStorageNews(resolve.data);
      })
      .catch((error) => {
        dispatch(newsError(error));
      });
  };
};

const setLocalStorageNews = (data) => {
  localStorage.setItem("news", JSON.stringify(data));
};

const getLocalStorageNews = () => {
  const news = localStorage.getItem("news");
  return JSON.parse(news);
};
