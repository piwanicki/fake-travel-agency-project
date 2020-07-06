import React from "react";
import styled from "styled-components";

const UserFavoritesDiv = styled.div`
  padding: 2em;
`;

const FavoriteList = styled.ul`
  li {
    text-decoration: none;
    display: inline-flex;
  }
`;

const UserFavorites = (props) => {
  const listItems = props.userFavorites.map((favorite) => {
    return (<li>
      <span>{favorite.country}</span>
      <span>{favorite.city}</span>
      <span>{favorite.price}</span>
      <span>{favorite.link}</span>
    </li>);
  });

  return (
    <UserFavoritesDiv>
      <FavoriteList>{listItems}</FavoriteList>
    </UserFavoritesDiv>
  );
};

export default UserFavorites;
