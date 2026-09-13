import WatchlistSection from "./WatchlistSection"
import SummarySection from "./SummarySection"
import "./insights-home.css"

function InsightsSection() {
  return (
    <>
      <input type="radio" name="ins-tab" id="ins-summary" className="ins-radio" defaultChecked />
      <input type="radio" name="ins-tab" id="ins-watch" className="ins-radio" />

      <header className="page-head finance-head ins-head">
        <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><line x1="9" y1="3" x2="9" y2="21" /></svg>
        </label>
        <nav className="ph-nav">
          <label className="ph-link" htmlFor="ins-summary">Summary</label>
          <label className="ph-link" htmlFor="ins-watch">Watchlist</label>
        </nav>
      </header>

      <div className="content ins-body">
        <div className="ins-panel ins-summary">
          <SummarySection />
        </div>

        <div className="ins-panel ins-watch">
          <WatchlistSection />
        </div>
      </div>
    </>
  )
}

export default InsightsSection
