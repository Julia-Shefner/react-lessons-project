// import "./index.css";
// import Mailbox from "./Product";

// import { useState } from "react";

// export default function App() {
//   return (
//     <>
//       <h1>Best selling</h1>

//       <Mailbox username="Monica" messages={["1", "2"]} />
//       <Mailbox username="Ross" messages={[]} />
//       <Mailbox username="Joey" messages={["1", "2", "1", "2"]} />
//     </>
//   );
// }

// interface Book {
//   id: string;
//   name: string;
// }

// const books: Book[] = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Query overview" },
// ];

// export default function App() {
//   return (
//     <>
//       <h1>Books of the week</h1>
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>{book.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default function App() {
//   const handleClick = () => {
//     console.log("I'm a button!");
//   };
//   return <button onClick={handleClick}>Click me!</button>;
// }

// export default function App() {
//   return <button onClick={() => console.log("Clicked!")}> Click me!</button>;
// }

// export default function App() {
//   const handleClick = (event) => {
//     console.log(event);
//   };
//   return (
//     <>
//       <button onClick={handleClick}>First button</button>
//       <button onClick={(event) => console.log(event)}>Second button</button>
//     </>
//   );
// }

// import { useState } from "react";

// export default function App() {
//   const [clicks, setClicks] = useState(0);
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };
//   return <button onClick={handleClick}>Current: {clicks}</button>;
// }

// import ClickCounter from "./ClickCounter";

// export default function App() {
//   return (
//     <>
//       <ClickCounter />
//       <ClickCounter />
//     </>
//   );
// }

// import { useState } from "react";

// interface Values {
//   x: number;
//   y: number;
// }

// export default function App() {
//   const [values, setValues] = useState<Values>({ x: 0, y: 0 });
//   const updateValue = (key: keyof Values) => {
//     setValues({
//       ...values,
//       [key]: values[key] + 1,
//     });
//   };

//   return (
//     <div>
//       <p>Trying Vercel!</p>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>
//       <button onClick={() => updateValue("x")}>Update x</button>
//       <button onClick={() => updateValue("y")}>Update y</button>
//     </div>
//   );
// }

// export default function App() {
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     const formData = new FormData(form);
//     const username = formData.get("username");
//     console.log("Username:", username);

//     form.reset();
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="username" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default function App() {
//   const handleSubmit = (formData: FormData) => {
//     console.log("Form submitted");
//   };

//   return (
//     <form action={handleSubmit}>
//       <input type="text" name="username" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default function App() {
//   const handleSubmit = (formData: FormData) => {
//     const username = formData.get("username") as string;
//     console.log("Name:", username);
//   };

//   return (
//     <form action={handleSubmit}>
//       <input type="text" name="username" defaultValue="John Doe" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// import OrderForm from "./OrderForm";

// export default function App() {
//   const handleOrder = (data: string) => {
//     console.log("Order received from:", data);
//   };
//   return (
//     <>
//       <h1>Place your order</h1>
//       <OrderForm onSubmit={handleOrder} />
//     </>
//   );
// }

import SearchForm from "./SearchForm";
import { useState } from "react";
import type { Article } from "../types/article";
import ArticleList from "./ArticleList";
import { fetchArticles } from "../services/articleService";

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await fetchArticles(topic);
      setArticles(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {isLoading && <p>Loading data, please wait...</p>}
      {isError && <p>Whoops, something went wrong! Please try again!</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
