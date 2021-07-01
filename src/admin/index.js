import React from "react";
import Menu from "./components/Menu";
import Search from "./components/Search";
import Filters from "./components/Filters";
import QuickFilters from "./components/QuickFilters";
import Orders from "./components/Orders";
import Sorter from "./components/Sorter";
import Barrier from "./components/Barrier";
import styled from "styled-components";

const Content = styled.div`
  .flow-control {
    display: grid;
    grid-template-rows: calc(100vw * (55 / 375)) calc(100vw * (72 / 375)) calc(
        100vw * (1 / 375)
      ) calc(100vw * (66 / 375)) 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "searchbar searchbar"
      "filters sorter"
      "qfbarrier qfbarrier"
      "quickfilters quickfilters"
      "orders orders";
    align-items: center;
    justify-content: center;

    .searchbar {
      grid-area: searchbar;
    }

    .filters {
      grid-area: filters;
    }
    .sorter {
      grid-area: sorter;
    }
    .qfbarrier {
      grid-area: qfbarrier;
    }
    .quickfilters {
      grid-area: quickfilters;
    }
    .orders {
      grid-area: orders;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-left: calc(100vw * (200 / 1440));

    .flow-control {
      align-items: start;
      grid-template-rows:
        calc(100vw * (56 / 1440)) calc(100vw * (20 / 1440)) calc(
          100vw * (71 / 1440)
        )
        calc(100vw * (48 / 1440)) 1fr;
      grid-template-columns: 50% 50%;
      grid-template-areas:
        "searchbar filters"
        "qfbarrier qfbarrier"
        "quickfilters quickfilters"
        "desktopSorter desktopSorter"
        "orders orders";
      .desktop-sorter {
        grid-area: desktopSorter;
        margin-right: calc(100vw * (30 / 1440));
      }
    }
  }

  .qfbarrier {
    margin-top: calc(100vw * (19 / 1440));
  }
`;
function Layout() {
  return (
    <div className="admin">
      <Menu />
      <Content>
        <div className="flow-control">
          <Search />
          <Filters />
          <Barrier className="qfbarrier" color={"rgba(140, 138, 152, 0.25)"} />
          <QuickFilters />
          <Sorter />
          <Orders />
        </div>
      </Content>
    </div>
  );
}

export default Layout;
