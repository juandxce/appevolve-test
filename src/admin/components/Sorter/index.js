import React from "react";
import styled from "styled-components";
import SortIcon from "../../../assets/sortIcon.svg";
import Sort from "../../../assets/sort.svg";
import Checkbox from "../common/Checkbox";
import ResponsiveIcon from "../styled/ResponsiveIcon";
import Text from "../styled/Text";

const StyledMobileSorter = styled.div`
  display: flex;
  margin-left: 2.133vw;
  .sort {
    cursor: pointer;
    width: 100%;
    background: white;
    border: none;
    border-radius: calc(100vw * (4 / 375));
    font-weight: 600;
    height: calc(100vw * (40 / 375));
    margin-top: calc(100vw * (2 / 375));
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      margin-left: calc(100vw * (8 / 375));
      line-height: calc(100vw * (20 / 375));
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const StyledDesktopSorter = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: calc(100vw * (28 / 1440)) calc(100vw * (90 / 1440)) calc(
        100vw * (82 / 1440)
      ) calc(100vw * (210 / 1440)) calc(100vw * (219 / 1440)) calc(
        100vw * (123 / 1440)
      ) calc(100vw * (110 / 1440)) calc(100vw * (88 / 1440)) calc(
        100vw * (74 / 1440)
      ) auto;
    background: white;
    border-radius: calc(100vw * (4 / 1440));
    margin-left: calc(100vw * (30 / 1440));
    margin-bottom: calc(100vw * (8 / 1440));
    padding: calc(100vw * (8 / 1440)) calc(100vw * (16 / 1440));
    height: calc(100vw * (24 / 1440));
    align-items: center;
    button {
      font-weight: 500;
      cursor: pointer;
      font-size: calc(100vw * (10 / 1440));
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      height: 100%;
      white-space: nowrap;
      img {
        margin-left: calc(100vw * (5 / 1440));
      }
    }
  }
`;
function Sorter() {
  return (
    <>
      <StyledMobileSorter className="mobile-sorter mobile-side-margins">
        <button className="sort color-scheme-1 mobile-only">
          <ResponsiveIcon
            mobileSize={14}
            desktopSize={16}
            src={SortIcon}
            alt="SortIcon"
          />
          <Text mobileSize={14} desktopSize={12}>
            Sort
          </Text>
        </button>
      </StyledMobileSorter>
      <StyledDesktopSorter className="desktop-sorter">
        <Checkbox className="order-checkbox desktop-only" />
        <button>
          ORDER NO. <img src={Sort} alt="Sort" />
        </button>
        <button>
          CREATED
          <img src={Sort} alt="Sort" />
        </button>
        <button>
          CLIENT
          <img src={Sort} alt="Sort" />
        </button>
        <button>
          PRODUCTS
          <img src={Sort} alt="Sort" />
        </button>
        <button>
          DISTRIBUTION
          <img src={Sort} alt="Sort" />
        </button>
        <button>
          STATUS
          <img src={Sort} alt="Sort" />
        </button>
        <button>
          TRACKING
          <img src={Sort} alt="Sort" />
        </button>
        <button>
          PRICE
          <img src={Sort} alt="Sort" />
        </button>
        <button>
          PAYMENT
          <img src={Sort} alt="Sort" />
        </button>
      </StyledDesktopSorter>
    </>
  );
}

export default Sorter;
