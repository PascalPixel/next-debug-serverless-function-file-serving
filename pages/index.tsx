import React, { useEffect, useState } from "react";

export default function Page() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("/api/stripe/webhooks")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <h1>Hello World</h1>;
}
