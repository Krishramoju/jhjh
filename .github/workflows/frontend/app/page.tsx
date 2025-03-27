"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/customer")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <main className="p-10 text-center">
      <h1 className="text-4xl font-bold">Customer 360</h1>
      {data ? (
        <div className="mt-5 p-4 bg-gray-200 rounded">
          <h2 className="text-2xl">{data.name}</h2>
          <ul className="mt-3">
            {data.transactions.map((t: string, i: number) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
