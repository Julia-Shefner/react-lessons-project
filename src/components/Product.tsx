// interface ProductProprs {
//   name: string;
//   imgURL: string;
//   price: number;
// }

// export default function Product({ name, imgURL, price }: ProductProprs) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src={imgURL} alt={name} width="480" />
//       <p>Price: {price} credits</p>
//     </div>
//   );
// }

interface MailboxProps {
  username: string;
  messages: string[];
}

export default function Mailbox({ username, messages }: MailboxProps) {
  return (
    <>
      <p>Hello {username}</p>
      {messages.length > 0 ? (
        <>
          <p>You have {messages.length} undead messages</p>
          <p>Check your inbox to read them!</p>
          <button>Open inbox</button>
        </>
      ) : (
        <p>No unread messages</p>
      )}
    </>
  );
}
