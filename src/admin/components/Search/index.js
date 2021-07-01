import React from "react";
import SearchIcon from "../../../assets/search.svg";
import styled from "styled-components";
import ResponsiveIcon from "../styled/ResponsiveIcon";

const StyledSearch = styled.div`
  position: relative;
  display: flex;
  margin-top: calc(100vw * (16 / 375));
  .icon {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: calc(100vw * (16 / 375));
    top: 50%;
    transform: translateY(-50%);
  }
  input {
    border: none;
    border-radius: calc(100vw * (4 / 375));
    font-size: calc(100vw * (14 / 375));
    font-weight: 400;
    height: calc(100vw * (40 / 375));
    width: 100%;
    padding: 0;
    padding-left: calc(100vw * (44 / 375));
    flex-grow: 1;
    color: #8c8a98;
  }

  @media only screen and (min-width: 768px) {
    width: calc(100vw * (404 / 1440));
    margin: calc(100vw * (16 / 1440)) calc(100vw * (8 / 1440))
      calc(100vw * (19 / 1440)) calc(100vw * (30 / 1440));
    margin-top: calc(100vw * (15 / 1440));
    margin-bottom: 0;
    input {
      height: calc(100vw * (40 / 375));
      padding: 0;
      padding-left: calc(100vw * (44 / 375));
      font-size: calc(100vw * (12 / 1440));
      height: calc(100vw * (40 / 1440));
      border-radius: calc(100vw * (4 / 1440));
      padding-left: calc(100vw * (44 / 1440));
    }
    .icon {
      left: 4%;
    }
  }
`;
function Search() {
  return (
    <StyledSearch className="input-container mobile-side-margins searchbar">
      <div className="icon">
        <ResponsiveIcon
          mobileSize={20}
          desktopSize={20}
          src={SearchIcon}
          alt="SearchIcon"
        />
      </div>
      <input placeholder="Search by any order parameter" />
    </StyledSearch>
  );
}

export default Search;
