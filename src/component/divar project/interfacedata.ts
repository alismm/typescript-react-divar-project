import { defaultMaxListeners } from "events";

interface Datajs {
  id: Number;
  img: string;
  title: String;
  address: String;
  price: number;
  time: String;
  body: String;
  phoneNumber: String;
  moreInfo: {
    state: String;
    price: number;
  };
}
export default Datajs;
