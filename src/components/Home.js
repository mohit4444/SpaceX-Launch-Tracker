import { Banner } from "../styles/Common.styled";
import Launches from "./Launches";
import img from "../assets/background1.jpg";

export default function Home() {
  return (
    <>
      <Banner $imgUrl={img}>
        <h1>Launches</h1>
      </Banner>
      <Launches />
    </>
  );
}
