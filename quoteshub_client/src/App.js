import QuotesCard from "./components/QuotesCard";

function App() {
  return (
    <div className="App">
      <h1>Quotes Hub</h1>

      <div className="quotes_wrapper">
        <QuotesCard />
        <QuotesCard />
        <QuotesCard />
        <QuotesCard />
        <QuotesCard />
      </div>
    </div>
  );
}

export default App;
