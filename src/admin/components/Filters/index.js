import React from "react";
import styled from "styled-components";
import DropdownIcon from "../../../assets/dropdown.svg";
import FiltersIcon from "../../../assets/filtersIcon.svg";
import DateIcon from "../../../assets/date.svg";
import StatusIcon from "../../../assets/status.svg";
import DistributionIcon from "../../../assets/distribution.svg";
import ResponsiveIcon from "../styled/ResponsiveIcon";
import Text from "../styled/Text";

const StyledFilters = styled.div`
  display: flex;
  gap: calc(100vw * (16 / 375));
  margin-top: calc(100vw * (18 / 375));
  margin-bottom: calc(100vw * (16 / 375));
  margin-left: calc(100vw * (16 / 375));
  .filters-btn,
  .sort,
  .filter-btn {
    cursor: pointer;
    width: 100%;
    background: white;
    border: none;
    border-radius: calc(100vw * (4 / 375));
    font-weight: 600;
    height: calc(100vw * (40 / 375));
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      margin-left: calc(100vw * (8 / 375));
      line-height: calc(100vw * (20 / 375));
    }
  }
  .filters-btn {
    margin-right: 2.133vw;
    img {
      margin-bottom: calc(100vw * (2 / 375));
    }
  }

  @media only screen and (min-width: 768px) {
    align-self: end;
    margin-top: calc(100vw * (16 / 1440));
    margin-right: calc(100vw * (30 / 1440));
    margin-bottom: 0;
    margin-left: calc(100vw * (-178 / 1440));
    gap: calc(100vw * (8 / 1440));
    flex-grow: 1;
    .filter-btn {
      min-width: calc(100vw * (186 / 1440));
      border-radius: calc(100vw * (4 / 1440));
      height: calc(100vw * (40 / 1440));
      white-space: nowrap;
      padding: calc(100vw * (12 / 1440)) calc(100vw * (16 / 1440));
      justify-content: flex-start;
      position: relative;
      span {
        margin-left: calc(100vw * (8 / 1440));
        line-height: initial;
      }
      .dropdown-icon {
        position: absolute;
        right: calc(100vw * (15 / 1440));
        top: calc(100vw * (15 / 1440));
      }
    }
  }
`;
function Filters() {
  return (
    <StyledFilters className="filters">
      <button className="filter-btn color-scheme-1 desktop-only">
        <ResponsiveIcon
          mobileSize={14}
          desktopSize={16}
          src={DateIcon}
          alt="DateIcon"
        />
        <Text mobileSize={14} desktopSize={12}>
          Date Range
        </Text>
        <img src={DropdownIcon} className="dropdown-icon desktop-only" alt="dropdown icon" />
      </button>
      <button className="filter-btn color-scheme-1 desktop-only">
        <ResponsiveIcon
          mobileSize={14}
          desktopSize={16}
          src={StatusIcon}
          alt="StatusIcon"
        />
        <Text className="text" mobileSize={14} desktopSize={12}>
          Order Status
        </Text>
        <img src={DropdownIcon} className="dropdown-icon desktop-only" alt="dropdown icon" />
      </button>
      <button className="filter-btn color-scheme-1 desktop-only">
        <ResponsiveIcon
          mobileSize={14}
          desktopSize={16}
          src={DistributionIcon}
          alt="DistributionIcon"
        />
        <Text mobileSize={14} desktopSize={12}>
          Distribution City
        </Text>
        <img src={DropdownIcon} className="dropdown-icon desktop-only" alt="dropdown icon" />
      </button>
      <button className="filter-btn filters-btn color-scheme-1">
        <ResponsiveIcon
          mobileSize={14}
          desktopSize={16}
          src={FiltersIcon}
          alt="FiltersIcon"
        />
        <Text mobileSize={14} desktopSize={12}>
          Filters
        </Text>
        <img src={DropdownIcon} className="dropdown-icon desktop-only" alt="dropdown icon" />
      </button>
    </StyledFilters>
  );
}

export default Filters;
