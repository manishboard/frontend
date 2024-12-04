import { mailData } from "assets/config/mailConfig";

export default function Mails() {
  return (
    <div className="mails">
      <h2>Recent Mails</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>From</th>
            <th>Alias</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {mailData.map((mail, index) => (
            <tr key={index}>
              <td>{mail.name}</td>
              <td>{mail.from}</td>
              <td>{mail.alias}</td>
              <td className={mail.statusClass}>{mail.status}</td>
              <td className="primary"><a href={mail.link} target="_blank" id="open-mail">open</a></td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="#">Show All</a>
    </div>
  );
}
