import { useEffect, useState } from 'react';
import styles from '../styles/quoteScreen.module.css';

function Quote() {
  const baseUrl = 'https://api.api-ninjas.com/v1/quotes?category=knowledge';
  const [quoteResponse, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(baseUrl, {
          method: 'GET',
          headers: {
            'X-Api-Key': 'KdVLHMbgPDKurv3dbkJsVg==dpDNbHcHUZXmZHsx',
          },
        });
        if (!response.ok) {
          throw new Error(
            `Couldn't retrieve quote. Status: ${response.status}`,
          );
        }
        const data = await response.json();
        setQuote(data);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{`Couldn't retrieve quote. Error: ${error}`}</div>;
  }
  if (!quoteResponse) {
    return null;
  }
  return (
    <div className={styles.quoteWrapper}>
      <h6 className={styles.quote}>
        &quot;
        {quoteResponse[0].quote}
        &quot;
      </h6>
      <p className={styles.author}>{quoteResponse[0].author}</p>
    </div>
  );
}

export default Quote;
