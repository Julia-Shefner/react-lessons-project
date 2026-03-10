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

// import SearchForm from "./SearchForm";
// import { useState } from "react";
// import type { Article } from "../types/article";
// import ArticleList from "./ArticleList";
// import { fetchArticles } from "../services/articleService";

// export default function App() {
//   const [articles, setArticles] = useState<Article[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [isError, setIsError] = useState<boolean>(false);

//   const handleSearch = async (topic: string) => {
//     try {
//       setIsLoading(true);
//       setIsError(false);
//       setArticles([]);
//       const data = await fetchArticles(topic);
//       setArticles(data);
//     } catch {
//       setIsError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   return (
//     <>
//       <SearchForm onSubmit={handleSearch} />
//       {isLoading && <p>Loading data, please wait...</p>}
//       {isError && <p>Whoops, something went wrong! Please try again!</p>}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </>
//   );
// }

// import { useId } from "react";
// import OrderForm from "./OrderForm";

// export default function App() {
//   return <OrderForm />;
// }

// import { useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [person, setPerson] = useState(null);
//   console.log("App rendered!");
//   axios
//     .get("https://swapi.info/api/people/1")
//     .then((response) => setPerson(response.data));

//   return (
//     <>
//       <pre>{JSON.stringify(person, null, 2)}</pre>
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [person, setPerson] = useState(null);

//   useEffect(() => {
//     console.log("Effect ran!");
//     axios
//       .get("https://swapi.info/api/people/1")
//       .then((response) => setPerson(response.data));
//   }, []);

//   console.log("App rendred!");

//   return (
//     <>
//       <pre>{JSON.stringify(person, null, 2)}</pre>
//     </>
//   );
// }

// import axios from "axios";
// import { useState, useEffect } from "react";

// export default function App() {
//   const [person, setPerson] = useState(null);
//   const [count, setCount] = useState(1);

//   useEffect(() => {
//     console.log("Effect ran!");
//     axios
//       .get("https://swapi.info/api/people/1")
//       .then((response) => setPerson(response.data));
//   }, []);
//   console.log("App rendered!");

//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>The count is {count}</button>
//       <pre>{JSON.stringify(person, null, 2)}</pre>
//     </>
//   );
// }

// import axios from "axios";
// import { useState, useEffect } from "react";

// export default function App() {
//   const [person, setPerson] = useState(null);
//   const [count, setCount] = useState(1);

//   useEffect(() => {
//     console.log("Effect ran!");
//     axios
//       .get(`https://swapi.info/api/people/${count}`)
//       .then((response) => setPerson(response.data));
//   }, [count]);
//   console.log("App rendered!");

//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>Get next character</button>
//       <pre>{JSON.stringify(person, null, 2)}</pre>
//     </>
//   );
// }

// * Рефакторинг коду, синтаксис async/await for useEffect()
// import axios from "axios";
// import { useState, useEffect } from "react";

// export default function App() {
//   const [person, setPerson] = useState(null);
//   const [count, setCount] = useState(1);

//   useEffect(() => {
//     async function fetchCharacter() {
//       const response = await axios.get(
//         `https://swapi.info/api/people/${count}`,
//       );
//       setPerson(response.data);
//     }
//     fetchCharacter();
//   }, [count]);

//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>Get next character</button>
//       <pre>{JSON.stringify(person, null, 2)}</pre>
//     </>
//   );
// }

// import { useState, useEffect } from "react";

// export default function App() {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// }

// import Timer from "./Timer";
// import { useState } from "react";

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Hide timer" : "Show timer"}
//       </button>
//       {isOpen && <Timer />}
//     </>
//   );
// }

// import { useState, useEffect } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`Effect ran for: ${count}`);
//     return () => {
//       console.log(`Clean up for ${count}`);
//     };
//   }, [count]);
//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>Count is ${count}</button>
//     </>
//   );
// }

// import { useState } from "react";
// import Modal from "./Modal";

// export default function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div>
//       <h1>Main content of the page</h1>
//       <button onClick={openModal}>Open modal</button>
//       {isModalOpen && (
//         <Modal onClose={closeModal}>
//           <h2>Custom Modal Content</h2>
//           <p>This is reusable modal with dynamic content.</p>
//         </Modal>
//       )}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";

// export default function App() {
//   const [clicks, setClicks] = useState(() => {
//     const savedClicks = window.localStorage.getItem("saved-clicks");
//     if (savedClicks !== null) {
//       return JSON.parse(savedClicks);
//     }
//     return 0;
//   });

//   useEffect(() => {
//     localStorage.setItem("saved-clicks", JSON.stringify(clicks));
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";

// export default function App() {
//   const [clicks, setClicks] = useState(0);
//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);
//   useEffect(() => {
//     console.log("Clicks update:", clicks);
//   }, [clicks]);
//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });
//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// }

// import { useState, useEffect } from "react";

// export default function App() {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log("First update:", first);
//   }, [first]);
//   useEffect(() => {
//     console.log("Second update:", second);
//   }, [second]);
//   useEffect(() => {
//     console.log("First or second update:", first + second);
//   }, [first, second]);

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}>First: {first}</button>
//       <button onClick={() => setSecond(second + 1)}>First: {second}</button>
//     </>
//   );
// }

// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const fetchPerson = async () => {
//   const responce = await axios.get(`https://swapi.info/api/people/1`);
//   return responce.data;
// };

// export default function App() {
//   const { data, error, isLoading, isError } = useQuery({
//     queryKey: ["person"],
//     queryFn: fetchPerson,
//   });

//   return (
//     <>
//       {isLoading && <p>Loading...</p>}
//       {isError && <p>An error occurred: {error.message}</p>}
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </>
//   );
// }

// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const fetchPerson = async (id: number) => {
//   const responce = await axios.get(`https://swapi.info/api/people/${id}`);
//   return responce.data;
// };

// export default function App() {
//   const [count, setCount] = useState(1);
//   console.log(count);
//   const { data, error, isLoading, isError } = useQuery({
//     queryKey: ["person", count],
//     queryFn: () => fetchPerson(count),
//   });

//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>Get next character</button>
//       {isLoading && <p>Loading...</p>}
//       {isError && <p>An error occurred: {error?.message}</p>}
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </>
//   );
// }

// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const fetchCharacter = async (id: string) => {
//   const responce = await axios.get(`https://swapi.info/api/people/${id}`);
//   return responce.data;
// };

// export default function App() {
//   const [characterId, setCharacterId] = useState("");

//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: ["chracter", characterId],
//     queryFn: () => fetchCharacter(characterId),
//     enabled: characterId !== "",
//   });
//   const handleSearch = (formData: FormData) => {
//     const id = formData.get("id") as string;
//     setCharacterId(id);
//   };

//   return (
//     <>
//       <form action={handleSearch}>
//         <input type="text" name="id" placeholder="Enter characted ID" />
//         <button type="submit">Search</button>
//       </form>
//       {isLoading && <p>Loading data, please wait...</p>}
//       {isError && <p>Whoops, something went wrong!{error?.message}</p>}
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </>
//   );
// }

// import { useQuery, keepPreviousData } from "@tanstack/react-query";
// import { useState } from "react";
// import SearchForm from "./SearchForm";
// import ArticleList from "./ArticleList";
// import { fetchArticles } from "../services/articleService";

// export default function App() {
//   const [topic, setTopic] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["articles", topic, currentPage],
//     queryFn: () => fetchArticles(topic, currentPage),
//     enabled: topic !== "",
//     placeholderData: keepPreviousData,
//   });

//   const totalPages = data?.nbPages ?? 0;

//   const handleSearch = async (newTopic: string) => {
//     setTopic(newTopic);
//     setCurrentPage(1);
//   };

//   return (
//     <>
//       <SearchForm onSubmit={handleSearch} />
//       <p>
//         Current page {currentPage} | Total pages {totalPages}
//       </p>
//       <button
//         onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
//         disabled={currentPage === 1}
//       >
//         Previous
//       </button>
//       <button
//         onClick={() => setCurrentPage(currentPage + 1)}
//         disabled={currentPage >= totalPages}
//       >
//         Next
//       </button>
//       {isLoading && <p>Loading data, please wait...</p>}
//       {isError && <p>Whoops, spmething went wrong! Please try again!</p>}
//       {data && data.hits.length > 0 && <ArticleList items={data.hits} />}
//     </>
//   );
// }

// import { useQuery, keepPreviousData } from "@tanstack/react-query";
// import { useState } from "react";
// import ReactPaginate from "react-paginate";
// import SearchForm from "./SearchForm";
// import ArticleList from "./ArticleList";
// import { fetchArticles } from "../services/articleService";
// import css from "./App.module.css";

// export default function App() {
//   const [topic, setTopic] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const { data, isLoading, isError, isSuccess } = useQuery({
//     queryKey: ["articles", topic, currentPage],
//     queryFn: () => fetchArticles(topic, currentPage),
//     enabled: topic !== "",
//     placeholderData: keepPreviousData,
//   });

//   const totalPages = data?.nbPages ?? 0;

//   const handleSearch = async (newTopic: string) => {
//     setTopic(newTopic);
//     setCurrentPage(1);
//   };

//   return (
//     <>
//       <SearchForm onSubmit={handleSearch} />
//       {isSuccess && totalPages > 1 && (
//         <ReactPaginate
//           pageCount={totalPages}
//           pageRangeDisplayed={5}
//           marginPagesDisplayed={1}
//           onPageChange={({ selected }) => setCurrentPage(selected + 1)}
//           forcePage={currentPage - 1}
//           containerClassName={css.pagination}
//           activeClassName={css.active}
//           nextLabel="→"
//           previousLabel="←"
//         />
//       )}
//       {isLoading && <p>Loading data, please wait..</p>}
//       {isError && <p>Whoops, something went wrong! Please try again!</p>}
//       {data && data.hits.length > 0 && <ArticleList items={data.hits} />}
//     </>
//   );
// }

// * Infinite Load
// import { useInfiniteQuery } from "@tanstack/react-query";
// import { useState } from "react";
// import SearchForm from "./SearchForm";
// import ArticleList from "./ArticleList";
// import { fetchArticles } from "../services/articleService";

// export default function App() {
//   const [topic, setTopic] = useState("");

//   const {
//     data,
//     fetchNextPage,
//     isFetching,
//     hasNextPage,
//     isFetchingNextPage,
//     isError,
//     isLoading,
//     isFetched,
//   } = useInfiniteQuery({
//     queryKey: ["article", topic],
//     queryFn: ({ queryKey, pageParam }) => {
//       const [, currentTopic] = queryKey;
//       return fetchArticles(currentTopic, pageParam);
//     },
//     initialPageParam: 0,
//     getNextPageParam: (lastResponse) => {
//       const nextPage = lastResponse.page + 1;
//       return nextPage < lastResponse.nbPages ? nextPage : undefined;
//     },

//     enabled: topic !== "",
//     select: (data) => {
//       return {
//         ...data,
//         articles: data.pages.flatMap((page) => page.hits),
//       };
//     },
//   });

//   const handleSearch = (newTopic: string) => {
//     setTopic(newTopic);
//   };

//   const articles = data?.articles ?? [];
//   const hasArticles = articles.length > 0;
//   const showNoResults = isFetched && !isError && !hasArticles;

//   return (
//     <>
//       <SearchForm onSubmit={handleSearch} />

//       {isLoading && <p>Loading data, please wait..</p>}
//       {isError && <p>Whoops, something went wrong! Please try again!</p>}
//       {showNoResults && <p>No articles found. Try another search</p>}
//       {hasArticles && (
//         <>
//           <ArticleList items={articles} />
//           <button
//             onClick={() => fetchNextPage()}
//             disabled={isFetching || !hasNextPage}
//           >
//             {isFetchingNextPage
//               ? "Loading more..."
//               : hasNextPage
//                 ? "load more"
//                 : "Nothing more to load"}
//           </button>
//         </>
//       )}
//     </>
//   );
// }

import OrderForm from "./OrderForm";

export default function App() {
  return <OrderForm />;
}
