import { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./components/CountryCard";
import "./App.css";

type Country = {
  cca2: string;
  name: { common: string };
  flags: { png: string };
  population: number;
  capital?: string[];
  languages?: { [key: string]: string };
  currencies?: { [key: string]: { name: string } };
};

export default function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,flags,population,capital"
      )
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.error("Error fetching countries:", err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,flags,population,capital"
      )
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.error("Error fetching countries:", err);
      });
  }, []);

  const filtered = countries.filter((c) =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search countries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid-container">
        {filtered.map((country) => (
          <CountryCard key={country.cca2} country={country} />
        ))}
      </div>

      <button className="show-all-btn">Show all supported countries →</button>
    </div>
  );
}
