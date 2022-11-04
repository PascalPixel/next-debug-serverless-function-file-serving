import React, { useEffect } from "react";

export default function hello() {
  const [result, setResult] = React.useState(null);

  useEffect(() => {
    fetch("/api/stripe/webhooks")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <h1>Hello World</h1>;
}
