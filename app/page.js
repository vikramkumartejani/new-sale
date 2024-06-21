import Image from "next/image";
import Shekel from "./components/Shekel";
import AboutMyself from "./components/AboutMyself";
import Unichat from "./components/Unichat";
import UsersConnected from "./components/UsersConnected";
import Suitable from "./components/Suitable";
import ForStarters from "./components/ForStarters";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
   <div>
      <Shekel/>
      <AboutMyself/>
      <Unichat/>
      <UsersConnected/>
      <Suitable/>
      <ForStarters/>
      <FAQ/>
   </div>
  );
}
