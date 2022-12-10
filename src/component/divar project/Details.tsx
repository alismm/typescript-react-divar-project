import React from "react";
import "../../assets/Details.css";
import Datajs from "./interfacedata";
interface props {
  card: Datajs;
  sendDataToParent: any;
}
const Details: React.FC<props> = ({ card, sendDataToParent }) => {
  return (
    <div className="detailsCard">
      <div>
        <span
          className="detailsCard-close"
          onClick={() => sendDataToParent(null)}
          title="????"
        >
          X
        </span>
        <h4 className=" detail-text">{card.title}</h4>
        <span className="detailsCard-date">{card.address}</span>
        <div className="info">
          <div>
            <button className="detailsCard-contact">اطلاعات تماس</button>
            <button className="detailsCard-contact detailsCard-chat">چت</button>
          </div>
          <div>
            <a href="#">1</a>
            <a href="#">2</a>
          </div>
        </div>
        <div className="status">
          <div className="statusText">وضعیت</div>
          <div className="statusId">{card.moreInfo.state}</div>
        </div>
        <div className="price">
          <div className="priceText">قیمت</div>
          <div className="priceId">{card.moreInfo.price}</div>
        </div>
        <div>
          <h5 className="detail-text">توضیحات</h5>
          <p>{card.body}</p>
        </div>
      </div>
    </div>
  );
};
export default Details;
