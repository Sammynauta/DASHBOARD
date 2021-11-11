import "./WidgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className="widgetSmImg"
            alt="foto user"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Samuel Oliver</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className="widgetSmImg"
            alt="foto user"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Samuel Oliver</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className="widgetSmImg"
            alt="foto user"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Samuel Oliver</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
          </button>
        </li>
      </ul>
    </div>
  );
}
