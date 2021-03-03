import { json } from 'express';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import { useAddUserMutation, useLoginMutation, useMeQuery } from '../../../api/generated';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data }] = useLoginMutation();

  const session = useMeQuery();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ variables: { email, password } });
  };

  return (
    <div className="App">
      <div>{String(data?.login?.ok)}</div>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <Link href="/modules/account/user">
        <a>Account</a>
      </Link>
    </div>
  );
}
