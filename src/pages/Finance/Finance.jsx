import "./Finance.css"
import ChartingSection from "./sections/ChartingSection"
import CalendarSection from "./sections/CalendarSection"
import TranscriptsSection from "./sections/TranscriptsSection"

function FinancePage({ title, fill, children }) {
  return (
    <>
      <header className="page-head finance-head">
        <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><line x1="9" y1="3" x2="9" y2="21" /></svg>
        </label>
        <span className="ph-title">{title}</span>
      </header>
      <div className={fill ? "content fin-fill" : "content"}>
        {children}
      </div>
    </>
  )
}

export function ChartingPage() {
  return (
    <FinancePage title="Charting" fill>
      <ChartingSection />
    </FinancePage>
  )
}

export function CalendarPage() {
  return (
    <FinancePage title="Calendar">
      <CalendarSection />
    </FinancePage>
  )
}

export function TranscriptsPage() {
  return (
    <FinancePage title="Transcripts" fill>
      <TranscriptsSection />
    </FinancePage>
  )
}
