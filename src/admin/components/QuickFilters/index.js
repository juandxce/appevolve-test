import React, { useState } from "react";
import styled from "styled-components";
import Text from "../styled/Text";

const QuickFiltersStyles = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  margin-top: calc(100vw * (18 / 375));
  margin-bottom: calc(100vw * (22 / 375));

  @media only screen and (min-width: 768px) {
    margin-top: calc(100vw * (20 / 1440));
    margin-left: calc(100vw * (30 / 1440));
    margin-bottom: calc(100vw * (21 / 1440));
  }
`;

function QuickFilters() {
  return (
    <QuickFiltersStyles className="quickfilters">
      <div className="mobile-side-margins">
        <SingleFilter defaultSelected={true} text="All Orders" amount="294" />
        <SingleFilter text="Preparing" amount="12" />
        <SingleFilter text="Sent" amount="77" />
        <SingleFilter text="Returned" amount="14" />
        <SingleFilter text="Cancelled" amount="16" />
        <SingleFilter text="Delivered" amount="134" />
      </div>
    </QuickFiltersStyles>
  );
}

export default QuickFilters;

const SingleFilterChip = styled.div`
  display: inline-block;
  button {
    border: none;
    background: transparent;
    color: #8c8a98;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: calc(100vw * (4 / 375));
    padding: calc(100vw * (4 / 375)) 0;
    margin-right: calc(100vw * (15 / 375));
    font-weight: 500;
    line-height: calc(100vw * (22 / 375));
    height: calc(100vw * (30 / 375));
    cursor: pointer;
    transition: all 0.3s;

    .amount {
      color: white;
      background: #8c8a98;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: calc(100vw * (8 / 375));
      border-radius: calc(100vw * (100 / 375));
      height: calc(100vw * (20 / 375));
      padding: 0 calc(100vw * (4 / 375));
      margin: 0 calc(100vw * (8 / 375)) 0 calc(100vw * (4 / 375));
      font-weight: bold;
      transition: all 0.3s;
    }
  }
  &:not(.selected) {
    .amount {
      min-width: calc(100vw * (9 / 1440));
      margin: 0 calc(100vw * (8 / 1440)) 0 calc(100vw * (9 / 1440));
      margin-left: calc(100vw * (5 / 375));
    }
  }
  &.selected {
    button {
      cursor: pointer;
      color: #55a3ae;
      background: rgba(85, 163, 174, 0.25);
      padding: calc(100vw * (4 / 375)) 0;
      font-weight: 700;
      margin-right: calc(100vw * (16 / 375));
    }
    .amount {
      background: #55a3ae;
    }
    .text {
      margin-left: calc(100vw * (8 / 375));
    }
  }

  @media only screen and (min-width: 768px) {
    button {
      height: calc(100vw * (30 / 1440));
      margin-right: calc(100vw * (24 / 1440));
      padding: calc(100vw * (4 / 1440)) 0;
      .amount {
        font-size: calc(100vw * (10 / 1440));
        height: calc(100vw * (20 / 1440));
        border-radius: calc(100vw * (100 / 1440));
        margin-left: calc(100vw * (9 / 1440));
        padding: 0 calc(100vw * (4 / 1440));
        margin-right: 0;
      }
    }
    &.negative-beta button {
      margin-right: calc(100vw * (20 / 1440));
    }
    &.selected {
      button {
        padding: calc(100vw * (4 / 1440)) calc(100vw * (8 / 1440));
        border-radius: calc(100vw * (4 / 1440));
        margin-right: calc(100vw * (30 / 1440));
        .text {
          margin-left: 0;
        }
        .amount {
          min-width: calc(100vw * (9 / 1440));
          margin: 0 calc(100vw * (8 / 1440)) 0 calc(100vw * (9 / 1440));
          margin-right: 0;
        }
      }
    }
  }
`;
const SingleFilter = ({ text, amount, defaultSelected }) => {
  const [selected, setSelected] = useState(!!defaultSelected);
  return (
    <SingleFilterChip
      className={`${selected ? "selected" : ""} ${
        text === "Cancelled" || text === "Returned" ? "negative-beta" : ""
      }`}
    >
      <button onClick={() => setSelected((prevSelected) => !prevSelected)}>
        <Text mobileSize={14} desktopSize={16} className="text">
          {text}
        </Text>{" "}
        <span className="amount">{amount}</span>
      </button>
    </SingleFilterChip>
  );
};
