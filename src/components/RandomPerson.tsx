import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const URL = "https://randomuser.me/api";

export interface Picture {
  thumbnail: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface OurPeople {
  name: Name;
  picture: Picture;
}

export const RandomPerson = () => {
  const [randomPersonInfo, setRandomPersonInfo] = useState<OurPeople[]>([]);
  const [count, setCount] = useState(0);

  const getRandomPersonInfo = useCallback(async () => {
    let newPerson = {} as OurPeople;

    try {
      const response = await axios.get(URL);
      newPerson = response.data.results[0] as OurPeople;
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setRandomPersonInfo((prev) => [...prev, newPerson]);
  }, []);

  useEffect(() => {
    getRandomPersonInfo();
  }, [count, getRandomPersonInfo]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Count!</button>
      <p>{count}</p>
      <p>Random Person Information</p>
      {randomPersonInfo.length > 0 &&
        randomPersonInfo.map((person, idx) => (
          <div key={idx}>
            <p>
              {person.name.title} {person.name.first} {person.name.last}
            </p>
            <img src={person.picture.thumbnail} alt="" />
          </div>
        ))}
    </div>
  );
};
