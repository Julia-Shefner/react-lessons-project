// import Mailbox from "./Product";

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

import { useState } from "react";

interface Values {
  x: number;
  y: number;
}

export default function App() {
  const [values, setValues] = useState<Values>({ x: 0, y: 0 });
  const updateValue = (key: keyof Values) => {
    setValues({
      ...values,
      [key]: values[key] + 1,
    });
  };

  return (
    <div>
      <p>Trying Vercel!</p>
      <p>
        x: {values.x}, y: {values.y}
      </p>
      <button onClick={() => updateValue("x")}>Update x</button>
      <button onClick={() => updateValue("y")}>Update y</button>
    </div>
  );
}
