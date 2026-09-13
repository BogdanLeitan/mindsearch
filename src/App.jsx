import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import NewChat from './pages/NewChat/NewChat'
import Discover from './pages/Discover/Discover'
import {
  ChartingPage,
  CalendarPage,
  TranscriptsPage,
} from './pages/Finance/Finance'
import Stock from './pages/Finance/Stock'
import { Answer } from './Static'
import Landing from './pages/Landing/Landing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<NewChat />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/charting" element={<ChartingPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/transcripts" element={<TranscriptsPage />} />
          <Route path="/insights" element={<Navigate to="/" replace />} />
          <Route path="/titans" element={<Navigate to="/" replace />} />
          <Route path="/dcf" element={<Navigate to="/" replace />} />
          <Route path="/portfolio" element={<Navigate to="/" replace />} />
          <Route path="/finance" element={<Navigate to="/charting" replace />} />
          <Route path="/finance/:ticker" element={<Stock />} />
          <Route path="/overview" element={<Navigate to="/" replace />} />
          <Route path="/tools/*" element={<Navigate to="/" replace />} />
          <Route path="/answer" element={<Answer />} />
          <Route path="/extensions" element={<Navigate to="/" replace />} />
          <Route path="/settings" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
