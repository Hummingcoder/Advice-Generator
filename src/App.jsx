import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const url = "https://api.adviceslip.com/advice";
  const [quote, setQuote] = useState({
    id: "",
    advice: "",
  });
  const [loading, setloading] = useState(false);
  const [firstTimeLoading, setfirstTimeLoading] = useState(true);
  const [error, seterror] = useState(null);

  const fetchQuotes = async () => {
    setloading(true);
    seterror(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network respose error");
      }
      const data = await response.json();
      setQuote(data.slip);
    } catch (error) {
      seterror(error.message);
    } finally {
      setloading(false);
      setfirstTimeLoading(false);
    }
  };
  useEffect(() => {
    fetchQuotes();
  }, []);

  if (error)
    return (
      <main className="bg-[#1f2632] min-h-screen w-full grid place-content-center ">
        <p className="text-white mx-auto text-sm">{error}</p>
      </main>
    );
  if (firstTimeLoading)
    return (
      <main className="bg-[#1f2632] min-h-screen w-full grid place-content-center ">
        <section className="flex gap-2">
          <div className="w-[10px] h-[10px] bg-emerald-400 rounded-full">
            <div className="w-[10px] h-[10px] bg-emerald-400 rounded-full animate-ping-slow"></div>
          </div>
        </section>
      </main>
    );

  return (
    <main className="bg-[#1f2632] min-h-screen w-full grid place-content-center font-Manrope">
      <article className=" relative bg-[#343e4c] w-[90%] max-w-[600px] mx-auto min-h-[260px] flex justify-center flex-col items-center text-center px-5 md:px-8 pt-8 pb-[60px] gap-[1.6rem] rounded-lg shadow-shadow duration-700  ">
        <p className="text-[#52ffa8] tracking-[3px] text-sm font-thin">
          ADVICE #{quote.id}
        </p>
        <p
          className={`text-[#cee3e9] font-bold min-h-[40px] text-[1.5rem] md:text-[2rem] duration-700 md:leading-10 ${
            loading ? "opacity-0 scale-50" : "opacity-100 scale-100"
          } `}
        >
          "{quote.advice}"
        </p>
        <img
          src="./images/pattern-divider-mobile.svg"
          alt="pattern-divider-mobile"
          className="inline-block xs:hidden"
        />
        <img
          src="./images/pattern-divider-desktop.svg"
          alt="pattern-divider-mobile"
          className="xs:inline-block hidden w-full"
        />
        <button
          onClick={() => fetchQuotes()}
          className="bg-[#52ffa8] p-5 rounded-full absolute bottom-0 translate-y-[50%]"
        >
          <img
            src="./images/icon-dice.svg"
            alt="dice-icon"
            className={`${loading ? "animate-spin" : "animate-none"} w-[22px] `}
          />
        </button>
      </article>
    </main>
  );
};

export default App;
