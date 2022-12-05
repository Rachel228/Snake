import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import { Leaderboards } from './pages/Leaderboards';

import { Notfoundpage } from './pages/Notfoundpage';

import { Layout } from './components/Layout'

import { RequireAuth } from './hoc/RequireAuth'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="posts" element={<Leaderboards />} />
          <Route path="posts/new" element={
            <RequireAuth>
            </RequireAuth>
          } />

          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
  );
}

export default App;
