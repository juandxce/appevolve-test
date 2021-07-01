import React, { useState } from "react";
import styled from "styled-components";
import { MockedPages } from "../../../mock-data";
import MenuIcon from "../../../assets/menu.svg";
import Avatar from "../../../assets/avatar.svg";
import Barrier from "../Barrier";
import HorizontalLogo from "../../../assets/horizontal-logo.svg";
import MenuDashboardIcon from "../../../assets/menu-dashboard-icon.svg";
import MenuShoppingBag from "../../../assets/menu-shopping-bag.svg";
import MenuPriceTag from "../../../assets/menu-price-tag-icon.svg";
import MenuProfileIcon from "../../../assets/menu-profile-icon.svg";
import MenuStoreIcon from "../../../assets/menu-store-icon.svg";
import MenuDiscountVoucher from "../../../assets/menu-discount-voucher-icon.svg";
import MenuAnalysisVoucher from "../../../assets/menu-analysis-icon.svg";
import MenuSupportVoucher from "../../../assets/menu-support-icon.svg";
import Group from "../../../assets/group.svg";
import ResponsiveIcon from "../styled/ResponsiveIcon";
import Text from "../styled/Text";

export const PagesIconsMap = {
  Dashboard: MenuDashboardIcon,
  Orders: MenuShoppingBag,
  Products: MenuPriceTag,
  Clients: MenuProfileIcon,
  Stores: MenuStoreIcon,
  "Promo Codes": MenuDiscountVoucher,
  Reports: MenuAnalysisVoucher,
  Support: MenuSupportVoucher,
};

const MenuStyles = styled.nav`
  align-items: center;
  background-color: var(--bg-1);
  color: var(--text-1);
  display: flex;
  height: calc(100vw * (62 / 375));
  justify-content: space-between;
  .current-page {
    font-weight: 700;
    font-size: calc(100vw * (20 / 375));
    line-height: calc(100vw * (31 / 375));
  }
  .avatar {
    padding: 5.216vw;
    height: calc(100vw * (26 / 375));
    width: calc(100vw * (26 / 375));
    padding-top: 6vw;
    padding-right: 4.8vw;
    cursor: pointer;
  }
  .main-menu {
    color: var(--text-1);
    background: #2c2d35;
    width: 0;
    position: fixed;
    top: 0;
    overflow: hidden;
    z-index: 1000;
    transition: all 0.3s;
    overflow: auto;
    right: 100%;
    &.open {
      transform: translateX(100%);
      width: 100vw;
      height: 100vh;
    }
    .app-evolve-logo-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      .app-evolve-logo {
        width: calc(100vw * (120 / 375));
        height: calc(100vw * (50 / 375));
      }
    }
  }
  .menu-item-wrapper {
    display: flex;
    align-items: center;
    width: calc(100vw * (200 / 350));
    height: calc(100vw * (50 / 350));
    position: relative;
    line-height: calc(100vw * (27 / 1440));
    font-weight: 600;
    margin-top: calc(100vw * (9 / 1440));
    cursor: pointer;
    &:nth-child(3) {
      margin-top: calc(100vw * (14 / 1440));
    }
    .menu-item-icon {
      margin-left: calc(100vw * (24 / 1440));
      margin-right: calc(100vw * (19 / 1440));
      margin-top: calc(100vw * (12 / 1440));
      margin-bottom: calc(100vw * (16 / 1440));
    }
    .menu-item-text {
      padding-top: calc(100vw * (11 / 1440));
      padding-bottom: calc(100vw * (12 / 1440));
    }
    .selected-overlay {
      position: absolute;
      height: 100%;
      width: 100%;
      background: rgba(255, 82, 70, 0.25);
      border-left: 5px solid rgba(255, 82, 70, 1);
    }
    img {
      margin: calc(100vw * (15 / 375));
    }
  }

  @media only screen and (min-width: 768px) {
    background: transparent;
    color: rgba(44, 45, 53, 1);
    margin-left: calc(100vw * (200 / 1440));
    padding: calc(100vw * (30 / 1440)) calc(100vw * (30 / 1440)) 0
      calc(100vw * (30 / 1440));
    justify-content: flex-start;
    align-items: flex-start;
    height: auto;
    .avatar {
      display: none;
    }
    .main-menu {
      width: calc(100vw * (200 / 1440)) !important;
      height: 100vh;
      transform: translateX(100%);
      .app-evolve-logo-wrapper {
        display: flex;
        .app-evolve-logo {
          cursor: pointer;
          margin: calc(100vw * (32 / 1440)) calc(100vw * (20 / 1440))
            calc(100vw * (31 / 1440)) calc(100vw * (20 / 1440));
          width: calc(100vw * (160 / 1440));
          height: calc(100vw * (31 / 1440));
        }
      }
    }
    .menu-item-wrapper {
      width: calc(100vw * (200 / 1440));
      height: calc(100vw * (50 / 1440));
      .menu-item-text {
        font-size: calc(100vw * (16 / 1440));
      }
      img {
        margin-left: calc(100vw * (24 / 1440));
        margin-right: calc(100vw * (19 / 1440));
        margin-bottom: calc(100vw * (4 / 1440));
        margin-top: 0;
      }
    }
    .current-page {
      background: transparent;
      font-size: calc(100vw * (28 / 1440));
      line-height: calc(100vw * (39 / 1440));
      margin-top: calc(100vw * (5 / 1440));
      font-weight: bold;
    }
    .menu-profile {
      display: felx;
      height: calc(100vw * (108 / 1440));
      padding-left: calc(100vw * (22 / 1440));
      position: relative;
      padding-top: calc(100vw * (15 / 1440));
      padding-right: calc(100vw * (20 / 1440));
      display: flex;
      justify-content: space-between;
      width: auto;
      align-items: center;

      .menu-barrier {
        margin-bottom: calc(100vw * (32 / 1440));
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
      .avatar-profile {
        height: calc(100vw * (47 / 1440));
        width: calc(100vw * (47 / 1440));
        margin-top: calc(100vw * (-27 / 1440));
        cursor: pointer;
      }
      .config-profile {
        margin-bottom: calc(100vw * (28 / 1440));
        cursor: pointer;
      }
      .username {
        height: calc(100vw * (40 / 1440));
        margin-right: calc(100vw * (37 / 1440));
      }
    }
  }
`;

const Hamburger = styled.img`
  padding: calc(100vw * (16 / 375));
  cursor: pointer;
  margin-top: calc(100vw * (2 / 375));
  width: calc(100vw * (30 / 375));
  height: calc(100vw * (30 / 375));
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

function Menu() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Orders");
  return (
    <MenuStyles>
      <div>
        <Hamburger
          src={MenuIcon}
          alt="hamburger"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        />
      </div>
      <div className="current-page">{currentPage}</div>
      <div>
        <img className="avatar" src={Avatar} alt="Avatar" />
      </div>
      <div className={`main-menu ${open ? "open" : ""}`}>
        <div className="app-evolve-logo-wrapper">
          <img
            className="app-evolve-logo"
            src={HorizontalLogo}
            alt="AppEvolveLogo"
          />
        </div>
        <div>
          <Barrier color={"rgba(140, 138, 152, .5)"} />
        </div>
        {MockedPages.map((page) => (
          <div
            key={page.name}
            className="menu-item-wrapper"
            onClick={() => {
              setCurrentPage(page.name);
              setOpen(false);
            }}
          >
            {page.name === currentPage && (
              <div className="selected-overlay"></div>
            )}
            <ResponsiveIcon
              mobileSize={20}
              desktopSize={20}
              className="menu-item-icon"
              src={PagesIconsMap[page.name]}
              alt={page.name}
            />
            <div className="menu-item-text">{page.name}</div>
          </div>
        ))}
        <div className="menu-profile desktop-only">
          <Barrier className="menu-barrier" />
          <img className="avatar-profile" src={Avatar} alt="Avatar" />
          <Text className="username" mobileSize={14} desktopSize={14}>
            Admin
          </Text>
          <img className="config-profile" src={Group} alt="Avatar" />
        </div>
      </div>
    </MenuStyles>
  );
}

export default Menu;
