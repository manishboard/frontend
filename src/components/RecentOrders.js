import { ordersData } from "assets/config/orderConfig";

export default function RecentOrders() {
  return (
    <div className="recent-orders">
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Number</th>
            <th>Payment</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((order, index) => (
            <tr key={index}>
              <td>{order.name}</td>
              <td>{order.number}</td>
              <td>{order.payment}</td>
              <td className={order.statusClass}>{order.status}</td>
              <td className="primary">Details</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="#">Show All</a>
    </div>
  );
}
