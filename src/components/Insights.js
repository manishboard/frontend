import { salesData, expenseData, incomeData } from "assets/config/insightsConfig";

export default function Insights() {
  return (
    <div className="insights">
      <div className="sales">
        <span className="material-icons">{salesData.icon}</span>
        <div className="middle">
          <div className="left">
            <h3>{salesData.title}</h3>
            <h1>{salesData.unread} / {salesData.total}</h1>
          </div>

          <div className="progress">
            <svg>
              <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <div className="number">
              <p>{salesData.percentage}</p>
            </div>
          </div>
        </div>
        <small className="text-muted">{salesData.time}</small>
      </div>

      <div className="expenses">
        <span className="material-icons">{expenseData.icon}</span>
        <div className="middle">
          <div className="left">
            <h3>{expenseData.title}</h3>
            <h1>{expenseData.amount}</h1>
          </div>

          <div className="progress">
            <svg>
              <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <div className="number">
              <p>{expenseData.percentage}</p>
            </div>
          </div>
        </div>
        <small className="text-muted">{expenseData.time}</small>
      </div>

      <div className="income">
        <span className="material-icons">{incomeData.icon}</span>
        <div className="middle">
          <div className="left">
            <h3>{incomeData.title}</h3>
            <h1>{incomeData.amount}</h1>
          </div>

          <div className="progress">
            <svg>
              <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <div className="number">
              <p>{incomeData.percentage}</p>
            </div>
          </div>
        </div>
        <small className="text-muted">{incomeData.time}</small>
      </div>
    </div>
  );
}


// import { insightsData } from "assets/config/insightsConfig";

// export default function Insights() {
//   return (
//     <div className="insights">
//       {insightsData.map((insight, index) => (
//         <div key={index} className={insight.class}>
//           <span className="material-icons">{insight.icon}</span>
//           <div className="middle">
//             <div className="left">
//               <h3>{insight.title}</h3>
//               <h1>{insight.unre}</h1>
//             </div>
//             <div className="progress">
//               <svg>
//                 <circle cx="38" cy="38" r="36"></circle>
//               </svg>
//               <div className="number">
//                 <p>{insight.percentage}</p>
//               </div>
//             </div>
//           </div>
//           <small className="text-muted">{insight.time}</small>
//         </div>
//       ))}
//     </div>
//   );
// }
