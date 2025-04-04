import React, { useEffect } from "react";
import styled from "styled-components";
import { Loading, PageHero } from "../components";
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

const Orders = () => {
  const { getOrders, orders, loading } = useCartContext();

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  if (loading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  if (!orders?.length) {
    return (
      <Wrapper>
        <div className="empty">
          <h1>you didn't order anything yet</h1>
          <Link to="/products">Check Our Products</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <PageHero title={"orders"} />
      <div className="table-container">
        {!orders.length ? (
          <h1>you don't have any order yet</h1>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.address}</td>
                  <td>{order.totalAmount}</td>
                  <td>${order.total / 100}</td>
                  <td>{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 80px);

  width: 100%;
  overflow: hidden;
  padding: 0 20px;

  .table-container {
    width: 100%;
    max-width: 900px;
    margin: auto;
    margin-top: 40px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background: #f8f9fa;
    font-weight: bold;
  }

  tbody tr:nth-child(even) {
    background: #f2f2f2;
  }

  @media (max-width: 600px) {
    table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }
  }

  .empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 100px 5px 0 5px;
    gap: 20px;
    text-align: center;
    text-transform: capitalize;
  }

  .empty a {
    background-color: var(--clr-primary-5);
    color: white;
    font-size: 20px;
    padding: 10px 18px;
    border-radius: 5px;
    text-transform: uppercase;
    display: block;
  }
`;

export default Orders;
