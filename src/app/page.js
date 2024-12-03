import Sidebar from 'assets/components/Sidebar'
import Insights from 'assets/components/Insights'
import RecentOrders from 'assets/components/RecentOrders'
import RightSection from 'assets/components/RightSection'

export default function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <main>
        <h1>Dashboard</h1>
        <div className="date">
          <input type="date" />
        </div>
        <Insights />
        <RecentOrders />
      </main>
      <RightSection />
    </div>
  )
}