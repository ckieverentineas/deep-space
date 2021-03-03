import session from 'express-session';
import Link from 'next/link';
import { useMeQuery } from '../../../api/generated';

export default function User() {
  const { data } = useMeQuery();
  const me = data?.me;

  return (
    <div>
      {' '}
      Acconut
      <div>{me ? `Name:${me.name} Email:${me.email}` : 'Вы не авторизованы'}</div>
    </div>
  );
}
