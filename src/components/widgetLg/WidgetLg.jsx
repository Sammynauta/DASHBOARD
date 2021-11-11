import "./WidgetLg.css";

export default function WidgetLg() {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transacions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">John Kennedy</span>
          </td>
          <td className="widgetLgDate"> 2 Jun 2021</td>
          <td className="widgetLgAmount"> $152.00</td>
          <td className="widgetLgStatus">
            <button className="widgetLgButton Approved">Approved</button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">John Kennedy</span>
          </td>
          <td className="widgetLgDate"> 2 Jun 2021</td>
          <td className="widgetLgAmount"> $152.00</td>
          <td className="widgetLgStatus">
            <button className="widgetLgButton Declined">Declined</button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">John Kennedy</span>
          </td>
          <td className="widgetLgDate"> 2 Jun 2021</td>
          <td className="widgetLgAmount"> $152.00</td>
          <td className="widgetLgStatus">
            <button className="widgetLgButton Pending">Pending</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
