import { PageTitle } from './PageTitle/PageTitle';
import { EventBoard } from './EventBoard/EventBoard';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <PageTitle tetx="24th Core Worlds Coalition Conference" />
      <EventBoard />
    </div>
  );
};
