import React from "react";

function QuotesCard({ quote, quoteAuthor }) {
  return (
    <div className="quote-container">
      <div className="img-tag"></div>
      <div className="quote-d">{quote}</div>
      {quoteAuthor ? <div className="quote-author">- {quoteAuthor}</div> : null}
    </div>
  );
}

export default QuotesCard;
