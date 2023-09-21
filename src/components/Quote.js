import { useEffect, useState } from 'react';

function Quote() {
  const baseUrl = 'https://api.api-ninjas.com/v1/quotes?category=knowledge';
  const [quoteResponse, setQuote] = useState({
    quote: 'this is a quote',
    author: 'this is the author',
    category: 'computers',
  });

  useEffect(() => {
    fetch(baseUrl, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'KdVLHMbgPDKurv3dbkJsVg==dpDNbHcHUZXmZHsx',
      },
    })
      .then((resp) => resp.json())
      .then((data) => setQuote(data));
  }, []);

  return (
    <div id="quote-wrapper">
      <h6 id="quote">
        &quot;
        {quoteResponse[0].quote}
        &quot;
      </h6>
      <p id="author">{quoteResponse[0].author}</p>
    </div>
  );
}

export default Quote;
