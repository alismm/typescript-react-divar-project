import React, { useState } from "react";
import "../../assets/home.css";
import Datajs from "./interfacedata";
// import cardData from "./data.json";
import Details from "./Details";
// Create a type for the expernal data.

// Result of `JSON.parse()` will be `any`, since typescript can't parse it.
const untypedData = JSON.parse(`[
  {
    "id": 1,
    "img": "/logo192.png",
    "title": "ماشین سمند",
    "address": "مشهد",
    "price": 12000,
    "time": "یک ساعت قبل",
    "body": "ماشین در حد نو دست یک خانوم دکتر بوده",
    "phoneNumber": "09059745647",
    "moreInfo": {
      "state": "نو",
      "price": 12000
    }
  },
  {
    "id": 2,
    "img": "/images/12.jpg",
    "title": "ماشین  زیبا",
    "address": "تهران",
    "price": 10000,
    "time": "دو ساعت قبل",
    "body": "ماشین در حد نو ",
    "phoneNumber": "09059888647",
    "moreInfo": {
      "state": "نو",
      "price": 10000
    }
  },
  {
    "id": 3,
    "img": "/images/WhatsApp.jpeg",
    "title": "ماشین خارجی",
    "address": "جاغرق",
    "price": 20000,
    "time": "دقایقی قبل",
    "body": "ماشین اپشن  دار فول ",
    "phoneNumber": "09059888620",
    "moreInfo": {
      "state": "چهارسال کارکرد",
      "price": 20000
    }
  },
  {
    "id": 4,
    "img": "/logo192.png",
    "title": "هیوندای تمیز",
    "address": "تبریز",
    "price": 20000,
    "time": "یک ساعت قبل",
    "body": "ماشین فول ",
    "phoneNumber": "09059882020",
    "moreInfo": {
      "state": "چهارسال کارکرد",
      "price": 20000
    }
  },
  {
    "id": 5,
    "img": "/images/12.jpg",
    "title": "هیوندای تمیز",
    "address": "تبریز",
    "price": 20000,
    "time": "یک ساعت قبل",
    "body": "ماشین فول ",
    "phoneNumber": "09059882020",
    "moreInfo": {
      "state": "چهارسال کارکرد",
      "price": 20000
    }
  },
  {
    "id": 6,
    "img": "/logo192.png",
    "title": "هیوندای تمیز زیر قیمت",
    "address": "تبریز",
    "price": 20000,
    "time": "یک ساعت قبل",
    "body": "ماشین فول ",
    "phoneNumber": "09059882020",
    "moreInfo": {
      "state": "چهارسال کارکرد",
      "price": 20000
    }
  },
  {
    "id": 7,
    "img": "/images/12.jpg",
    "title": "هیوندای تمیز",
    "address": "تبریز",
    "price": 20000,
    "time": "یک ساعت قبل",
    "body": "ماشین فول ",
    "phoneNumber": "09059882020",
    "moreInfo": {
      "state": "چهارسال کارکرد",
      "price": 20000
    }
  },
  {
    "id": 8,
    "img": "/logo192.png",
    "title": "هیوندای تمیز",
    "address": "تبریز",
    "price": 30000,
    "time": "یک ساعت قبل",
    "body": "ماشین فول ",
    "phoneNumber": "09109882020",
    "moreInfo": {
      "state": "نو",
      "price": 30000
    }
  }
]`);

const Home: React.FC = () => {
  const [details, setDetails] = useState<Datajs | null>(null);

  const Data: Datajs[] = untypedData;

  const getDetail = (data: Datajs) => {
    setDetails(data);
  };

  const sendDataToParent = (data: null) => {
    setDetails(data);
  };

  // Header Function
  const [state, setstate] = useState({
    query: "",
    list: Data,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const results = Data.filter((post) => {
      if (e.target.value === "") return Data;
      return post.title.includes(e.target.value);
    });

    setstate({
      query: e.target.value,
      list: results,
    });
  };
  // Header Function End

  return (
    <>
      <div className="header-container">
        <form>
          <input
            className="header-searchBox"
            placeholder="تایپ کنید..."
            type="search"
            value={state.query}
            onChange={handleChange}
          />
        </form>
        <img className="header-logo" src="/logo192.png" alt="logo" />
      </div>
      {/* main */}

      <div className="main-container">
        {state.list.map(
          (card) =>
            details &&
            details.id === card.id && (
              <div className="details-sm-container">
                <Details card={card} sendDataToParent={sendDataToParent} />
              </div>
            )
        )}
        <div className="card-container">
          {!state.list.length ? (
            <h4 className="resultsNotFoundText">موردی یافت نشد</h4>
          ) : (
            state.list.map((card) => (
              <>
                <div className="card" onClick={() => getDetail(card)}>
                  <div className="card-info">
                    <h2 className="card-title">
                      {card.title.length > 20
                        ? card.title.substring(0, 20) + " ..."
                        : card.title}
                    </h2>
                    <div className="card-footer">
                      <span>{card.price}</span>
                      <span>{card.time}</span>
                    </div>
                  </div>
                  <img className="card-img" src={card.img} alt="logo" />
                </div>
                <div className="details-container">
                  {details && details.id === card.id && (
                    <Details card={card} sendDataToParent={sendDataToParent} />
                  )}
                </div>
              </>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
