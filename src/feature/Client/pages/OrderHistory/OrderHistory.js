import OrderItem from "feature/Client/components/OrderItem.js/OrderItem";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderHistoryRequest } from "redux/orderHistorySlice";
import "./OrderHistory.scss";

function OrderHistory() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.ordersHistory.filters);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const ordersHistory = useSelector((state) => state.ordersHistory.list);

  useEffect(() => {
    const newFilters = {
      ...filters,
      "user.id": currentUser.uid,
    };
    dispatch(fetchOrderHistoryRequest(newFilters));
  }, []);

  const renderOrder = (list) => {
    return list.map((item) => {
      return <OrderItem order={item} />;
    });
  };

  return (
    <div className="order-history">
      <table>
        <thead>
          <th>Sản phẩm</th>
          <th>Mô tả</th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Tổng</th>
        </thead>
        <tbody>{renderOrder(ordersHistory)}</tbody>
      </table>
    </div>
  );
}

export default OrderHistory;
