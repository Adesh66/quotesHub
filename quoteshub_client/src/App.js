import { useEffect, useState } from "react";
import { fetchQuotesList } from "./apiService";
import Footer from "./components/Footer";
import Header from "./components/Header";
import QuotesCard from "./components/QuotesCard";

function App() {
  const [quotesList, setQuotesList] = useState([]);
  useEffect(() => {
    fetchQuotesList()
      .then((res) => {
        setQuotesList(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="quotes_wrapper">
        {quotesList?.map((quote) => (
          <QuotesCard {...quote} key={quote._id} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
