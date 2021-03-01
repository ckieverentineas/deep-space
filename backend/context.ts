import { Database } from './database';
import { Session } from './session';

export interface ResolverContext {
  database: Database;
  session: Session;
}
