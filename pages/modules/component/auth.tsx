import { FormEvent, useState } from "react";
import { useAddUserMutation } from "../../../api/generated";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [addUser, { loading, error }] = useAddUserMutation()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser({variables: {email, password, name}})
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your pass"
          required
        />
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}