import "./CountryCard.css";

type CountryProps = {
  country: {
    name: { common: string };
    flags: { png: string };
    capital?: string[];
    population: number;
  };
};

export default function CountryCard({ country }: CountryProps) {
  return (
    <div className="card">
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      <h3>{country.name.common}</h3>
      <p>
        <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
      </p>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
    </div>
  );
}

