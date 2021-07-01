import React from "react";
import styled from "styled-components";
import ShoppingBag from "../../../assets/shopping-bag.svg";
import Menu3Dots from "../../../assets/menu-3-dots.svg";
import Barrier from "../Barrier";
import Checkbox from "../common/Checkbox";

import { MockedOrders } from "../../../mock-data.js";

const statusToColorsMapping = {
  Sent: {
    color: "rgba(111, 162, 207, 1)",
    background: "rgba(111, 162, 207, 0.25)",
  },
  Preparing: {
    color: "rgba(255, 158, 14, 1)",
    background: "rgba(255, 181, 70, 0.25)",
  },
  Returned: {
    color: "rgba(70, 108, 162, 1)",
    background: "rgba(70, 108, 162, 0.25)",
  },
  Cancelled: {
    color: "rgba(255, 82, 70, 1)",
    background: "rgba(255, 82, 70, 0.25)",
  },
  Delivered: {
    color: "rgba(85, 163, 174, 1)",
    background: "rgba(85, 163, 174, 0.25)",
  },
};

const StyledOrders = styled.section``;

function Orders() {
  return (
    <StyledOrders className="orders">
      {MockedOrders.map((order) => (
        <Order {...order} key={order.id} />
      ))}
    </StyledOrders>
  );
}

export default Orders;

const StyledOrder = styled.div`
  background: white;
  border-radius: calc(100vw * (4 / 375));
  padding: calc(100vw * (8 / 375));
  margin-bottom: calc(100vw * (16 / 375));
  font-size: calc(100vw * (12 / 375));
  .order-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: calc(100vw * (14 / 375));
    margin-top: calc(100vw * (8 / 375));
  }
  .order-inner {
    display: flex;
    align-items: center;
  }
  .order-icon {
    background-color: #ffb546;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100vw * (30 / 375));
    height: calc(100vw * (30 / 375));
    border-radius: 100%;
    margin: 0 calc(100vw * (8 / 375));
    margin-bottom: calc(100vw * (2 / 375));
    img {
      width: calc(100vw * (16 / 375));
      height: calc(100vw * (16 / 375));
      margin: calc(100vw * (7 / 375));
    }
  }
  .order-id-value {
    color: rgba(44, 45, 53, 1);
    font-weight: 600;
    font-size: calc(100vw * (14 / 375));
    margin-left: -22%;
  }
  .order-status-value {
    color: ${(props) => statusToColorsMapping[props.status]?.color};
    background: ${(props) => statusToColorsMapping[props.status]?.background};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: calc(100vw * (100 / 375));
    font-weight: 600;
    padding: calc(100vw * (4 / 375)) calc(100vw * (16 / 375))
      calc(100vw * (6 / 375)) calc(100vw * (15 / 375));
    margin: 0 calc(100vw * (8 / 375));
    line-height: calc(100vw * (20 / 375));
    margin-bottom: calc(100vw * (2 / 375));
    width: auto;
    margin-left: calc(100vw * (-14 / 375));
  }
  .order-table {
    margin-top: calc(100vw * (7 / 375));
    .order-row {
      display: flex;
      justify-content: space-between;
      padding: calc(100vw * (5 / 375)) calc(100vw * (5 / 375))
        calc(100vw * (5 / 375)) calc(100vw * (8 / 375));
      color: #8c8a98;
      line-height: calc(100vw * (20 / 375));
      div {
        &:nth-child(even) {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          text-align: right;
        }
      }
      &:nth-child(even) {
        background: #f8f8f9;
      }
      &:nth-child(odd) {
        height: calc(100vw * (26 / 375));
      }
      &:nth-child(1) {
        margin-bottom: calc(100vw * (8 / 375)) !important;
      }
      &:nth-child(3),
      &:nth-child(1) {
        height: calc(100vw * (22 / 375));
      }
    }
  }

  @media only screen and (max-width: 767px) {
    display: grid;
    grid-template-rows:
      calc(100vw * (48 / 375)) calc(100vw * (20 / 375)) calc(100vw * (32 / 375))
      repeat(8, auto);
    grid-template-columns: repeat(4, 25%);
    grid-template-areas:
      "orderIcon orderID orderID orderStatus"
      "orderBarrier orderBarrier orderBarrier orderBarrier"
      "orderDate orderHour orderPlace orderPlace"
      "orderNameLabel orderNameLabel orderName orderName"
      "orderEmailLabel orderEmailLabel orderEmail orderEmail"
      "orderDCL orderDCL orderDeliveryCompany orderDeliveryCompany"
      "orderTCL orderTCL orderTrackingCode orderTrackingCode"
      "orderProdL orderProdL orderProducts orderProducts"
      "orderPriceLabel orderPriceLabel orderPrice orderPrice"
      "orderPML orderPML orderPaymentMethodType orderPaymentMethodValue";
    .table-label {
      padding-left: calc(100vw * (8 / 375));
      border-top-left-radius: calc(100vw * (4 / 375));
      border-bottom-left-radius: calc(100vw * (4 / 375));
    }
    .table-value {
      border-top-right-radius: calc(100vw * (4 / 375));
      border-bottom-right-radius: calc(100vw * (4 / 375));
      padding-right: calc(100vw * (5 / 375));
    }
    .order-table-item {
      display: flex;
      align-items: center;
      line-height: calc(100vw * (20 / 375));
    }
    .order-dark-row {
      background-color: red;
      line-height: calc(100vw * (20 / 375));
      padding-bottom: calc(100vw * (5 / 375));
      padding-top: calc(100vw * (5 / 375));
      background: #f8f8f9;
    }
    .order-icon {
      grid-area: orderIcon;
      align-self: center;
    }
    .order-checkbox {
      grid-area: orderCheckbox;
      background: rgba(240, 240, 240, 1);
      &:checked {
        background: rgba(85, 163, 174, 1);
      }
    }
    .order-barrier {
      grid-area: orderBarrier;
      margin-top: calc(100vw * (5 / 375));
    }
    .order-id-value {
      grid-area: orderID;
      align-self: center;
    }
    .order-date-value {
      grid-area: orderDate;
      width: fit-content;
      padding-left: calc(100vw * (8 / 375));
      &:after {
        content: ",";
      }
    }
    .order-hour-value {
      grid-area: orderHour;
      width: fit-content;
      margin-left: calc(100vw * (-7 / 375));
    }
    .order-payment-method-label {
      grid-area: orderPML;
    }
    .order-products-label {
      grid-area: orderProdL;
      align-items: flex-start;
    }
    .order-delivery-company-label {
      grid-area: orderDCL;
      height: calc(100vw * (20 / 375));
    }
    .order-tracking-code-label {
      grid-area: orderTCL;
    }
    .order-price-label {
      grid-area: orderPriceLabel;
    }
    .order-email-label {
      grid-area: orderEmailLabel;
    }
    .order-name-label {
      grid-area: orderNameLabel;
      overflow: overlay;
    }
    .order-name-value {
      grid-area: orderName;
      justify-self: end;
      padding-left: 100%;
      white-space: nowrap;
    }
    .order-email-value {
      grid-area: orderEmail;
      justify-self: end;
    }
    .order-products-value {
      grid-area: orderProducts;
      white-space: initial;
      justify-self: end;
      text-align: end;
      width: calc(100vw * (200 / 375));
    }
    .order-place-value {
      grid-area: orderPlace;
      width: fit-content;
      justify-self: end;
      justify-self: end;
    }
    .order-status-value {
      grid-area: orderStatus;
      align-self: center;
    }
    .order-tracking-code-value {
      grid-area: orderTrackingCode;
      justify-self: end;
    }
    .order-delivery-company-value {
      grid-area: orderDeliveryCompany;
      justify-self: end;
      height: calc(100vw * (20 / 375));
      padding-left: 100%;
      white-space: nowrap;
    }
    .order-price-value {
      grid-area: orderPrice;
      justify-self: end;
    }
    .order-payment-method-type {
      grid-area: orderPaymentMethodType;
      justify-self: end;
      width: fit-content;
      margin-right: calc(100vw * (-33 / 375));
      padding-left: 100%;
      white-space: nowrap;
      z-index: 1;
      &:after {
        content: "${(props) =>
          props.paymentMethodType?.toLowerCase().includes("card") ? "," : ""}";
      }
    }
    .order-payment-method-value {
      grid-area: orderPaymentMethodValue;
      justify-self: end;
      padding-left: 100%;
      white-space: nowrap;
    }
    .menu-3-dots {
      grid-area: menu3Dots;
    }

    .order-row-sz1 {
      line-height: calc(100vw * (16 / 375));
      padding-bottom: calc(100vw * (12 / 375));
      padding-top: calc(100vw * (8 / 375));
    }
    .order-row-sz2 {
      line-height: calc(100vw * (16 / 375));
      padding-bottom: calc(100vw * (8 / 375));
      padding-top: calc(100vw * (8 / 375));
    }
    .order-row-sz3 {
      line-height: calc(100vw * (20 / 375));
      padding-bottom: calc(100vw * (8 / 375));
      padding-top: calc(100vw * (8 / 375));
    }
  }

  @media only screen and (min-width: 768px) {
    border-radius: calc(100vw * (4 / 1440));
    height: calc(100vw * (70 / 1440));
    padding: 0 calc(100vw * (16 / 1440));
    font-size: calc(100vw * (12 / 1440));
    margin-left: calc(100vw * (30 / 1440));
    margin-right: calc(100vw * (30 / 1440));
    margin-bottom: calc(100vw * (8 / 1440));
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns:
      calc(100vw * (34 / 1440))
      calc(100vw * (90 / 1440))
      calc(100vw * (82 / 1440))
      calc(100vw * (210 / 1440))
      calc(100vw * (219 / 1440))
      calc(100vw * (122 / 1440))
      calc(100vw * (112 / 1440))
      calc(100vw * (87 / 1440))
      calc(100vw * (75 / 1440))
      calc(100vw * (97 / 1440))
      calc(100vw * (20 / 1440));
    grid-template-areas:
      "orderCheckbox orderID orderDate orderName orderProducts orderPlace orderStatus orderTrackingCode orderPrice orderPaymentMethodType menu3Dots"
      "orderCheckbox orderID orderHour orderEmail orderProducts orderPlace orderStatus orderDeliveryCompany orderPrice orderPaymentMethodValue menu3Dots";
    align-items: center;
    justify-content: center;

    .order-checkbox {
      grid-area: orderCheckbox;
      align-self: center;
      border-radius: calc(100vw * (4 / 1440));
      height: calc(100vw * (24 / 1440));
      width: calc(100vw * (24 / 1440));
      margin-right: calc(100vw * (4 / 1440));
    }
    .order-id-value {
      grid-area: orderID;
      font-size: calc(100vw * (12 / 1440));
      margin-bottom: calc(100vw * (1 / 1440));
      font-weight: 600;
      margin-left: 0;
    }
    .order-date-value {
      grid-area: orderDate;
      align-self: end;
      line-height: calc(100vw * (16 / 1440));
    }
    .order-hour-value {
      grid-area: orderHour;
      align-self: flex-start;
      line-height: calc(100vw * (22 / 1440));
      color: #8c8a98;
    }
    .order-name-value {
      grid-area: orderName;
      align-self: flex-end;
      line-height: calc(100vw * (14 / 1440));
    }
    .order-email-value {
      grid-area: orderEmail;
      align-self: flex-start;
      line-height: calc(100vw * (21 / 1440));
      color: #8c8a98;
    }
    .order-products-value {
      grid-area: orderProducts;
      line-height: calc(100vw * (20 / 1440));
      margin-top: calc(100vw * (1 / 1440));
      width: calc(100vw * (200 / 1440));
      display: flex;
      align-items: center;
      align-self: flex-start;
      padding-top: calc(100vw * (15 / 1440));
    }
    .order-place-value {
      grid-area: orderPlace;
      white-space: nowrap;
    }
    .order-status-value {
      grid-area: orderStatus;
      line-height: calc(100vw * (20 / 1440));
      padding: calc(100vw * (6 / 1440)) calc(100vw * (17 / 1440))
        calc(100vw * (4 / 1440)) calc(100vw * (17 / 1440));
      font-size: calc(100vw * (12 / 1440));
      font-weight: 500;
      margin: 0;
      width: min-content;
      justify-self: start;
    }
    .order-tracking-code-value {
      grid-area: orderTrackingCode;
      align-self: end;
      line-height: calc(100vw * (16 / 1440));
      margin-left: calc(100vw * (-1 / 1440));
    }
    .order-delivery-company-value {
      grid-area: orderDeliveryCompany;
      align-self: start;
      line-height: calc(100vw * (20 / 1440));
      color: #8c8a98;
    }
    .order-price-value {
      grid-area: orderPrice;
    }
    .order-payment-method-type {
      grid-area: orderPaymentMethodType;
      line-height: calc(100vw * (16 / 1440));
      align-self: end;
      margin-left: -calc(100vw * (-1 / 1440));
    }
    .order-payment-method-value {
      grid-area: orderPaymentMethodValue;
      align-self: start;
      line-height: calc(100vw * (22 / 1440));
      margin-left: calc(100vw * (-1 / 1440));
    }
    .menu-3-dots {
      grid-area: menu3Dots;
      cursor: pointer;
      padding: 100% 0;
      width: calc(100vw * (20 / 1440));
      height: calc(100vw * (4 / 1440));
    }
  }
`;

const Order = ({
  id,
  status,
  date,
  hour,
  place,
  clientName,
  clientEmail,
  deliveryCompany,
  trackingCode,
  product,
  price,
  paymentMethodType,
  paymentMethod,
}) => {
  return (
    <StyledOrder
      paymentMethodType={paymentMethodType}
      status={status}
      className="mobile-side-margins"
    >
      <Checkbox className="order-checkbox desktop-only" />
      <div className="order-icon mobile-only">
        <img src={ShoppingBag} alt="ShoppingBag" />
      </div>
      <div className="order-id-value">{id}</div>
      <div className="order-status-value">{status}</div>
      <Barrier className="order-barrier mobile-only" />

      <div className="order-date-value">{date}</div>
      <div className="order-hour-value">{hour}</div>
      <div className="order-place-value table-value">{place}</div>
      <div className="order-name-label table-label order-table-item mobile-only order-dark-row">
        Client Name
      </div>
      <div className="order-name-value table-value order-table-item order-dark-row">
        {clientName}
      </div>
      <div className="order-email-label table-label order-table-item mobile-only order-row-sz2">
        Client Email
      </div>
      <div className="order-email-value table-value order-table-item order-row-sz2">
        {clientEmail}
      </div>
      <div className="order-delivery-company-label table-label order-table-item mobile-only order-dark-row">
        Delivery Company
      </div>
      <div className="order-delivery-company-value table-value order-table-item order-dark-row">
        {deliveryCompany}
      </div>
      <div className="order-tracking-code-label table-label order-table-item mobile-only order-row-sz1">
        Tracking Code
      </div>
      <div className="order-tracking-code-value table-value order-table-item order-row-sz3">
        {trackingCode}
      </div>
      <div className="order-products-label table-label order-table-item mobile-only order-dark-row">
        Products
      </div>
      <div className="order-products-value table-value order-table-item order-dark-row">
        {product}
      </div>
      <div className="order-price-label table-label order-table-item mobile-only order-row-sz1">
        Price
      </div>
      <div className="order-price-value table-value order-table-item order-row-sz3">
        {price}
      </div>
      <div className="order-payment-method-label table-label order-table-item mobile-only order-dark-row">
        Payment Method
      </div>
      <div className="order-payment-method-type table-value order-table-item order-dark-row">
        {paymentMethodType}
      </div>
      <div className="order-payment-method-value table-value order-table-item order-dark-row">
        {paymentMethod}
      </div>
      <img
        className="menu-3-dots desktop-only"
        src={Menu3Dots}
        alt="Menu3Dots"
      />
    </StyledOrder>
  );
};
