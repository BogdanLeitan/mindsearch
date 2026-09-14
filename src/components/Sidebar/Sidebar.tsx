import "./Sidebar.css"
import profil from "../../assets/profil.png"
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <input type="checkbox" id="sidebar-collapsed" className="sidebar-collapse-cb" />
        <input type="radio" name="theme" id="theme-dark" className="theme-cb" defaultChecked />
        <input type="radio" name="theme" id="theme-light" className="theme-cb" />
        <input type="radio" name="theme" id="theme-system" className="theme-cb" />

        <div className="brand-row">
          <div className="brand-logo-wrap">
            <Link className="brand" to="/" aria-label="MindSearch">
              <svg className="brand-mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <g transform="translate(32 32)" fill="currentColor">
                  <ellipse cx="0" cy="-17.2" rx="5.15" ry="13.35" />
                  <ellipse cx="0" cy="-17.2" rx="5.15" ry="13.35" transform="rotate(45)" />
                  <ellipse cx="0" cy="-17.2" rx="5.15" ry="13.35" transform="rotate(90)" />
                  <ellipse cx="0" cy="-17.2" rx="5.15" ry="13.35" transform="rotate(135)" />
                  <ellipse cx="0" cy="-17.2" rx="5.15" ry="13.35" transform="rotate(180)" />
                  <ellipse cx="0" cy="-17.2" rx="5.15" ry="13.35" transform="rotate(225)" />
                  <ellipse cx="0" cy="-17.2" rx="5.15" ry="13.35" transform="rotate(270)" />
                  <ellipse cx="0" cy="-17.2" rx="5.15" ry="13.35" transform="rotate(315)" />
                </g>
              </svg>
            </Link>
            <label className="brand-toggle-overlay" htmlFor="sidebar-collapsed" title="Expand sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
            </label>
          </div>

          <div className="brand-tools">
            <button className="icon-btn" type="button" title="Search">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.2" y2="16.2" />
              </svg>
            </button>
            <label className="icon-btn sidebar-toggle" htmlFor="sidebar-collapsed" title="Collapse sidebar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
            </label>
          </div>
        </div>

        <Link className="new-thread" to="/" title="New chat">
          <span className="new-thread-ico">
            <svg className="side-ico ico-plus" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </span>
          <span>New chat</span>
        </Link>

        <nav className="side-nav">
          <Link className="side-item" to="/discover" title="Discover">
            <span className="side-ico ico-compass">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="8.2" />
                <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
                <g className="compass-needle">
                  <path d="M12 5.5 14.2 12 12 18.5 9.8 12Z" fill="currentColor" fillOpacity=".18" />
                  <path className="needle-n" d="M12 5.5 14.2 12 9.8 12Z" fill="currentColor" stroke="none" />
                </g>
              </svg>
            </span>
            Discover
          </Link>

          <NavLink className={({ isActive }) => (isActive ? "side-item active" : "side-item")} to="/charting" title="Charting">
            <span className="side-ico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 17 9 11 13 15 21 7" />
                <polyline points="15 7 21 7 21 13" />
              </svg>
            </span>
            Charting
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? "side-item active" : "side-item")} to="/calendar" title="Calendar">
            <span className="side-ico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3.4" y="4.6" width="17.2" height="16" rx="2.2" />
                <path d="M3.4 9.4h17.2M8 3.4v3.4M16 3.4v3.4" />
              </svg>
            </span>
            Calendar
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? "side-item active" : "side-item")} to="/transcripts" title="Transcripts">
            <span className="side-ico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 3.6h7.2L20 9.4v11a1.6 1.6 0 0 1-1.6 1.6H7A1.6 1.6 0 0 1 5.4 20.4V5.2A1.6 1.6 0 0 1 7 3.6z" />
                <path d="M14.2 3.6V9.4H20M8.6 13h6.8M8.6 16.6h5" />
              </svg>
            </span>
            Transcripts
          </NavLink>

        </nav>

        <div className="side-section">
          <div className="side-label">
            Spaces
            <button className="mini-add" type="button" title="New space">
              <svg className="side-ico ico-plus" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>
          <a className="side-item" href="#" title="Portfolio research">
            <span className="side-ico ico-folder">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path className="folder-body" d="M3.6 8.1A2.2 2.2 0 0 1 5.8 5.9h3.5l1.7 2.2h7.4A2.2 2.2 0 0 1 20.6 10.3v6.6a2.2 2.2 0 0 1-2.2 2.2H5.8A2.2 2.2 0 0 1 3.6 16.9Z" />
              </svg>
            </span>
            Portfolio research
          </a>
          <a className="side-item" href="#" title="Macro watch">
            <span className="side-ico ico-folder">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path className="folder-body" d="M3.6 8.1A2.2 2.2 0 0 1 5.8 5.9h3.5l1.7 2.2h7.4A2.2 2.2 0 0 1 20.6 10.3v6.6a2.2 2.2 0 0 1-2.2 2.2H5.8A2.2 2.2 0 0 1 3.6 16.9Z" />
              </svg>
            </span>
            Macro watch
          </a>
        </div>

        <div className="side-section">
          <div className="side-label">Recent</div>
          <Link className="recent-item" to="/answer">Is Nvidia still a buy after Q2 earnings?</Link>
        </div>

        <div className="side-bottom">
          <label className="user-row" htmlFor="ui-profile" title="Account">
            <img className="avatar" src={profil} alt="Leitan Bogdan" />
            <div className="user-meta">
              <span className="user-name">Leitan Bogdan</span>
              <span className="user-plan">Free plan</span>
            </div>
          </label>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;