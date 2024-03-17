import ButtonGradiant from "../src/assets/svg/ButtonGradient"
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4.7rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Hero/>
      </div>
      <ButtonGradiant/>
    </>
  );
};

export default App;
