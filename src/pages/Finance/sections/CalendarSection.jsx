import "./calendar-week.css"

export default function CalendarSection() {
  return (
    <div className="ew">
      <div className="ew-bar">
        <div className="ew-bar-nav">
          <a className="ew-chev" href="/calendar" aria-label="Previous week">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </a>
          <div className="ew-today">Today</div>
          <a className="ew-chev" href="/calendar" aria-label="Next week">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </a>
        </div>
        <div className="ew-bar-nav">
          <a className="ew-today" href="/calendar">Update Earnings</a>
          <details className="ew-cap">
            <summary className="ew-today">Market Cap: All</summary>
            <div className="ew-cap-menu">
              <label><input type="radio" name="ew-cap" defaultChecked /> All</label>
              <label><input type="radio" name="ew-cap" /> Mega</label>
              <label><input type="radio" name="ew-cap" /> Large</label>
              <label><input type="radio" name="ew-cap" /> Mid</label>
              <label><input type="radio" name="ew-cap" /> Small</label>
            </div>
          </details>
          <a className="ew-today" href="/insights">Filter by Watchlist</a>
        </div>
      </div>
      <div className="ew-board">
        <section className="ew-day">
          <header className="ew-day-h">
            <span>Monday</span>
            <b>28</b>
            <em>Earnings</em>
          </header>
          <div className="ew-slot ew-bo">
            <div className="ew-card-h">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
              Before Open
            </div>
            <div className="ew-card">
              <div className="ew-grid">
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>O</i></span>
                  <div className="ew-tick">ON</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>P</i></span>
                  <div className="ew-tick">PRCT</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>A</i></span>
                  <div className="ew-tick">ARLP</div>
                </a>
              </div>
            </div>
            <a className="ew-more" href="/calendar">View more</a>
          </div>
          <div className="ew-slot ew-ac">
            <div className="ew-card-h">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" /></svg>
              After Close
            </div>
            <div className="ew-card">
              <div className="ew-grid">
                <a className="ew-co" href="/finance/WM">
                  <span className="ew-mark"><img src="/assets/logos/WM.svg" alt="" /></span>
                  <div className="ew-tick">WM</div>
                </a>
                <a className="ew-co" href="/finance/F">
                  <span className="ew-mark"><img src="/assets/logos/F.svg" alt="" /></span>
                  <div className="ew-tick">F</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>T</i></span>
                  <div className="ew-tick">TMDX</div>
                </a>
                <a className="ew-co" href="/finance/CDNS">
                  <span className="ew-mark"><img src="/assets/logos/CDNS.svg" alt="" /></span>
                  <div className="ew-tick">CDNS</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>T</i></span>
                  <div className="ew-tick">TREX</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>W</i></span>
                  <div className="ew-tick">WELL</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>L</i></span>
                  <div className="ew-tick">LTC</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>C</i></span>
                  <div className="ew-tick">CCC</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>C</i></span>
                  <div className="ew-tick">CWH</div>
                </a>
              </div>
            </div>
            <a className="ew-more" href="/calendar">View more</a>
          </div>
        </section>

        <section className="ew-day">
          <header className="ew-day-h">
            <span>Tuesday</span>
            <b>29</b>
            <em>Earnings</em>
          </header>
          <div className="ew-slot ew-bo">
            <div className="ew-card-h">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
              Before Open
            </div>
            <div className="ew-card">
              <div className="ew-grid">
                <a className="ew-co" href="/finance/PYPL">
                  <span className="ew-mark"><img src="/assets/logos/PYPL.svg" alt="" /></span>
                  <div className="ew-tick">PYPL</div>
                </a>
                <a className="ew-co" href="/finance/SOFI">
                  <span className="ew-mark"><img src="/assets/logos/SOFI.svg" alt="" /></span>
                  <div className="ew-tick">SOFI</div>
                </a>
                <a className="ew-co" href="/finance/MCD">
                  <span className="ew-mark"><img src="/assets/logos/MCD.svg" alt="" /></span>
                  <div className="ew-tick">MCD</div>
                </a>
                <a className="ew-co" href="/finance/PFE">
                  <span className="ew-mark"><img src="/assets/logos/PFE.svg" alt="" /></span>
                  <div className="ew-tick">PFE</div>
                </a>
                <a className="ew-co" href="/finance/CROX">
                  <span className="ew-mark"><img src="/assets/logos/CROX.svg" alt="" /></span>
                  <div className="ew-tick">CROX</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>B</i></span>
                  <div className="ew-tick">BP</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>M</i></span>
                  <div className="ew-tick">MSCI</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>A</i></span>
                  <div className="ew-tick">AMT</div>
                </a>
                <a className="ew-co" href="/finance/HSBC">
                  <span className="ew-mark"><img src="/assets/logos/HSBC.svg" alt="" /></span>
                  <div className="ew-tick">HSBC</div>
                </a>
              </div>
            </div>
            <a className="ew-more" href="/calendar">View more</a>
          </div>
          <div className="ew-slot ew-ac">
            <div className="ew-card-h">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" /></svg>
              After Close
            </div>
            <div className="ew-card">
              <div className="ew-grid">
                <a className="ew-co" href="/finance/AMD">
                  <span className="ew-mark"><img src="/assets/logos/AMD.svg" alt="" /></span>
                  <div className="ew-tick">AMD</div>
                </a>
                <a className="ew-co" href="/finance/GOOGL">
                  <span className="ew-mark"><img src="/assets/logos/GOOGL.svg" alt="" /></span>
                  <div className="ew-tick">GOOGL</div>
                </a>
                <a className="ew-co" href="/finance/V">
                  <span className="ew-mark"><img src="/assets/logos/V.svg" alt="" /></span>
                  <div className="ew-tick">V</div>
                </a>
                <a className="ew-co" href="/finance/GOOG">
                  <span className="ew-mark"><img src="/assets/logos/GOOG.svg" alt="" /></span>
                  <div className="ew-tick">GOOG</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>C</i></span>
                  <div className="ew-tick">CMG</div>
                </a>
                <a className="ew-co" href="/finance/SNAP">
                  <span className="ew-mark"><img src="/assets/logos/SNAP.svg" alt="" /></span>
                  <div className="ew-tick">SNAP</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>F</i></span>
                  <div className="ew-tick">FSLR</div>
                </a>
                <a className="ew-co" href="/finance/EA">
                  <span className="ew-mark"><img src="/assets/logos/EA.svg" alt="" /></span>
                  <div className="ew-tick">EA</div>
                </a>
                <a className="ew-co" href="/finance/SYK">
                  <span className="ew-mark"><img src="/assets/logos/SYK.svg" alt="" /></span>
                  <div className="ew-tick">SYK</div>
                </a>
              </div>
            </div>
            <a className="ew-more" href="/calendar">View more</a>
          </div>
        </section>

        <section className="ew-day">
          <header className="ew-day-h">
            <span>Wednesday</span>
            <div className="ew-now"><b>30</b></div>
            <em>Earnings</em>
          </header>
          <div className="ew-slot ew-bo">
            <div className="ew-card-h">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
              Before Open
            </div>
            <div className="ew-card">
              <div className="ew-grid">
                <a className="ew-co" href="/finance/LLY">
                  <span className="ew-mark"><img src="/assets/logos/LLY.svg" alt="" /></span>
                  <div className="ew-tick">LLY</div>
                </a>
                <a className="ew-co" href="/finance/CAT">
                  <span className="ew-mark"><img src="/assets/logos/CAT.svg" alt="" /></span>
                  <div className="ew-tick">CAT</div>
                </a>
                <a className="ew-co" href="/finance/ABBV">
                  <span className="ew-mark"><img src="/assets/logos/ABBV.svg" alt="" /></span>
                  <div className="ew-tick">ABBV</div>
                </a>
                <a className="ew-co" href="/finance/ADP">
                  <span className="ew-mark"><img src="/assets/logos/ADP.svg" alt="" /></span>
                  <div className="ew-tick">ADP</div>
                </a>
                <a className="ew-co" href="/finance/GRMN">
                  <span className="ew-mark"><img src="/assets/logos/GRMN.svg" alt="" /></span>
                  <div className="ew-tick">GRMN</div>
                </a>
                <a className="ew-co" href="/finance/KHC">
                  <span className="ew-mark"><img src="/assets/logos/KHC.svg" alt="" /></span>
                  <div className="ew-tick">KHC</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>U</i></span>
                  <div className="ew-tick">UBS</div>
                </a>
                <a className="ew-co" href="/finance/GE">
                  <span className="ew-mark"><img src="/assets/logos/GE.svg" alt="" /></span>
                  <div className="ew-tick">GE</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>W</i></span>
                  <div className="ew-tick">WING</div>
                </a>
              </div>
            </div>
            <a className="ew-more" href="/calendar">View more</a>
          </div>
          <div className="ew-slot ew-ac">
            <div className="ew-card-h">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" /></svg>
              After Close
            </div>
            <div className="ew-card">
              <div className="ew-grid">
                <a className="ew-co" href="/finance/MSFT">
                  <span className="ew-mark"><img src="/assets/logos/MSFT.svg" alt="" /></span>
                  <div className="ew-tick">MSFT</div>
                </a>
                <a className="ew-co" href="/finance/META">
                  <span className="ew-mark"><img src="/assets/logos/META.svg" alt="" /></span>
                  <div className="ew-tick">META</div>
                </a>
                <a className="ew-co" href="/finance/HOOD">
                  <span className="ew-mark"><img src="/assets/logos/HOOD.svg" alt="" /></span>
                  <div className="ew-tick">HOOD</div>
                </a>
                <a className="ew-co" href="/finance/SBUX">
                  <span className="ew-mark"><img src="/assets/logos/SBUX.svg" alt="" /></span>
                  <div className="ew-tick">SBUX</div>
                </a>
                <a className="ew-co" href="/finance/COIN">
                  <span className="ew-mark"><img src="/assets/logos/COIN.svg" alt="" /></span>
                  <div className="ew-tick">COIN</div>
                </a>
                <a className="ew-co" href="/finance/MSTR">
                  <span className="ew-mark"><img src="/assets/logos/MSTR.svg" alt="" /></span>
                  <div className="ew-tick">MSTR</div>
                </a>
                <a className="ew-co" href="/finance/DASH">
                  <span className="ew-mark"><img src="/assets/logos/DASH.svg" alt="" /></span>
                  <div className="ew-tick">DASH</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>C</i></span>
                  <div className="ew-tick">CVNA</div>
                </a>
                <a className="ew-co" href="/finance/ROKU">
                  <span className="ew-mark"><img src="/assets/logos/ROKU.svg" alt="" /></span>
                  <div className="ew-tick">ROKU</div>
                </a>
              </div>
            </div>
            <a className="ew-more" href="/calendar">View more</a>
          </div>
        </section>

        <section className="ew-day">
          <header className="ew-day-h">
            <span>Thursday</span>
            <b>31</b>
            <em>Earnings</em>
          </header>
          <div className="ew-slot ew-bo">
            <div className="ew-card-h">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
              Before Open
            </div>
            <div className="ew-card">
              <div className="ew-grid">
                <a className="ew-co" href="/finance/UBER">
                  <span className="ew-mark"><img src="/assets/logos/UBER.svg" alt="" /></span>
                  <div className="ew-tick">UBER</div>
                </a>
                <a className="ew-co" href="/finance/MA">
                  <span className="ew-mark"><img src="/assets/logos/MA.svg" alt="" /></span>
                  <div className="ew-tick">MA</div>
                </a>
                <a className="ew-co" href="/finance/RBLX">
                  <span className="ew-mark"><img src="/assets/logos/RBLX.svg" alt="" /></span>
                  <div className="ew-tick">RBLX</div>
                </a>
                <a className="ew-co" href="/finance/MRK">
                  <span className="ew-mark"><img src="/assets/logos/MRK.svg" alt="" /></span>
                  <div className="ew-tick">MRK</div>
                </a>
                <a className="ew-co" href="/finance/SHEL">
                  <span className="ew-mark"><img src="/assets/logos/SHEL.svg" alt="" /></span>
                  <div className="ew-tick">SHEL</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>M</i></span>
                  <div className="ew-tick">MO</div>
                </a>
                <a className="ew-co" href="/finance/PTON">
                  <span className="ew-mark"><img src="/assets/logos/PTON.svg" alt="" /></span>
                  <div className="ew-tick">PTON</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>L</i></span>
                  <div className="ew-tick">LI</div>
                </a>
                <a className="ew-co" href="/finance/K">
                  <span className="ew-mark"><img src="/assets/logos/K.svg" alt="" /></span>
                  <div className="ew-tick">K</div>
                </a>
              </div>
            </div>
            <a className="ew-more" href="/calendar">View more</a>
          </div>
          <div className="ew-slot ew-ac">
            <div className="ew-card-h">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" /></svg>
              After Close
            </div>
            <div className="ew-card">
              <div className="ew-grid">
                <a className="ew-co" href="/finance/AAPL">
                  <span className="ew-mark"><img src="/assets/logos/AAPL.svg" alt="" /></span>
                  <div className="ew-tick">AAPL</div>
                </a>
                <a className="ew-co" href="/finance/AMZN">
                  <span className="ew-mark"><img src="/assets/logos/AMZN.svg" alt="" /></span>
                  <div className="ew-tick">AMZN</div>
                </a>
                <a className="ew-co" href="/finance/INTC">
                  <span className="ew-mark"><img src="/assets/logos/INTC.svg" alt="" /></span>
                  <div className="ew-tick">INTC</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>V</i></span>
                  <div className="ew-tick">VICI</div>
                </a>
                <a className="ew-co" href="/finance/TEAM">
                  <span className="ew-mark"><img src="/assets/logos/TEAM.svg" alt="" /></span>
                  <div className="ew-tick">TEAM</div>
                </a>
                <a className="ew-co" href="/finance/X">
                  <span className="ew-mark"><img src="/assets/logos/X.svg" alt="" /></span>
                  <div className="ew-tick">X</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>A</i></span>
                  <div className="ew-tick">ARDX</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>E</i></span>
                  <div className="ew-tick">EF</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>C</i></span>
                  <div className="ew-tick">CUBE</div>
                </a>
              </div>
            </div>
            <a className="ew-more" href="/calendar">View more</a>
          </div>
        </section>

        <section className="ew-day">
          <header className="ew-day-h">
            <span>Friday</span>
            <b>1</b>
            <em>Earnings</em>
          </header>
          <div className="ew-slot ew-bo">
            <div className="ew-card-h">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
              Before Open
            </div>
            <div className="ew-card">
              <div className="ew-grid">
                <a className="ew-co" href="/finance/XOM">
                  <span className="ew-mark"><img src="/assets/logos/XOM.svg" alt="" /></span>
                  <div className="ew-tick">XOM</div>
                </a>
                <a className="ew-co" href="/finance/CVX">
                  <span className="ew-mark"><img src="/assets/logos/CVX.svg" alt="" /></span>
                  <div className="ew-tick">CVX</div>
                </a>
                <a className="ew-co" href="/finance/FUBO">
                  <span className="ew-mark"><img src="/assets/logos/FUBO.svg" alt="" /></span>
                  <div className="ew-tick">FUBO</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>T</i></span>
                  <div className="ew-tick">TROW</div>
                </a>
                <a className="ew-co" href="/finance/W">
                  <span className="ew-mark"><img src="/assets/logos/W.svg" alt="" /></span>
                  <div className="ew-tick">W</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>E</i></span>
                  <div className="ew-tick">ENB</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>D</i></span>
                  <div className="ew-tick">D</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>C</i></span>
                  <div className="ew-tick">CHTR</div>
                </a>
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>A</i></span>
                  <div className="ew-tick">AMR</div>
                </a>
              </div>
            </div>
            <a className="ew-more" href="/calendar">View more</a>
          </div>
          <div className="ew-slot ew-ac">
            <div className="ew-card-h">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" /></svg>
              After Close
            </div>
            <div className="ew-card">
              <div className="ew-grid">
                <a className="ew-co" href="/calendar">
                  <span className="ew-mark"><i>H</i></span>
                  <div className="ew-tick">HUBC</div>
                </a>
              </div>
            </div>
            <a className="ew-more" href="/calendar">View more</a>
          </div>
        </section>
      </div>
    </div>
  )
}
