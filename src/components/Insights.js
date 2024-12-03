import { insightsData } from "assets/config/insightsConfig";

export default function Insights() {
  return (
    <div className="insights">
      {insightsData.map((insight, index) => (
        <div key={index} className={insight.class}>
          <span className="material-icons">{insight.icon}</span>
          <div className="middle">
            <div className="left">
              <h3>{insight.title}</h3>
              <h1>{insight.amount}</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="number">
                <p>{insight.percentage}</p>
              </div>
            </div>
          </div>
          <small className="text-muted">{insight.time}</small>
        </div>
      ))}
    </div>
  );
}
