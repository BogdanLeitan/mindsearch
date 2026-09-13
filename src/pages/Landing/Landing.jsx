import { Link } from "react-router-dom"
import "./Landing.css"

export default function Landing() {
  return (
    <div className="lp">
      <input type="checkbox" id="theme-light" className="theme-cb" />
      <header className="lp-nav">
        <Link className="lp-brand" to="/landing">
          <img src="/assets/logo.png" alt="" />
          <span>CHARTUM</span>
        </Link>
        <nav className="lp-links">
          <a href="#product">Product</a>
          <Link to="/charting">Finance</Link>
          <a href="#open-source">Open source</a>
        </nav>
        <div className="lp-nav-right">
          <label className="lp-theme" htmlFor="theme-light" title="Toggle theme">
            <svg className="theme-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
            <svg className="theme-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" />
            </svg>
          </label>
          <Link className="lp-text" to="/">Sign in</Link>
          <Link className="lp-pill solid" to="/">Open app</Link>
        </div>
      </header>

      <main>
        <section className="lp-hero">
          <p className="lp-kicker">Open source AI search</p>
          <h1>The light browser<br />for asking the web.</h1>
          <p className="lp-lede">
            Chartum is an AI search engine — light like a browser, fully customizable.
            Research, markets, and filings, in one place.
          </p>
          <div className="lp-hero-cta">
            <Link className="lp-cta" to="/">Try Chartum <span>→</span></Link>
            <a className="lp-cta ghost" href="#open-source">View source</a>
          </div>
        </section>

        <section className="lp-stage" id="product">
          <div className="lp-stage-bg" role="presentation"></div>
          <div className="lp-browser">
            <div className="lp-chrome">
              <span className="lp-dots"><i /><i /><i /></span>
              <div className="lp-omni">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                chartum.app
              </div>
              <span className="lp-chrome-tabs">Search</span>
            </div>
            <div className="lp-app">
              <aside className="lp-side">
                <img src="/assets/logo.png" alt="" />
                <span className="lp-side-item on">New chat</span>
                <span className="lp-side-item">Discover</span>
                <span className="lp-side-item">Finance</span>
              </aside>
              <div className="lp-pane">
                <p className="lp-pane-greet">Good evening</p>
                <h2 className="lp-pane-title">What would you like to research?</h2>
                <div className="lp-ask">
                  <div className="lp-ask-q">
                    <span className="lp-typed">Is Nvidia still a buy after Q2 earnings?</span>
                  </div>
                  <div className="lp-ask-foot">
                    <span className="lp-chip">Search</span>
                    <span className="lp-send">↑</span>
                  </div>
                </div>
                <div className="lp-live">
                  <div className="lp-src-stack">
                    <i className="f-dark">B</i><i className="f-orange">R</i><i className="f-teal">F</i>
                    <em>21 sources · 4s</em>
                  </div>
                  <p className="lp-live-p">
                    Data center is 82% of revenue and still compounding. Guidance moved to $265B.
                    The multiple prices a linear Blackwell ramp — size a two-quarter slip before adding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lp-shots">
          <input type="radio" name="lp-shot" id="lp-s1" className="lp-shot-radio" defaultChecked />
          <input type="radio" name="lp-shot" id="lp-s2" className="lp-shot-radio" />
          <input type="radio" name="lp-shot" id="lp-s3" className="lp-shot-radio" />

          <div className="lp-shots-copy">
            <p className="lp-kicker">The product</p>
            <h2>Every surface, in a light browser.</h2>
            <p>Search, Discover, and Finance — same shell, no extra chrome.</p>
            <div className="lp-shot-tabs">
              <label htmlFor="lp-s1">Search</label>
              <label htmlFor="lp-s2">Discover</label>
              <label htmlFor="lp-s3">Finance</label>
            </div>
          </div>

          <div className="lp-shots-stage">
            <div className="lp-frame vis-s1">
              <div className="lp-shot-ui">
                <aside className="lp-mini-side">
                  <img src="/assets/logo.png" alt="" />
                  <i /><i /><i /><i />
                </aside>
                <div className="lp-mini-main search-shot">
                  <p className="lp-mini-greet">Good evening</p>
                  <h3>What would you like to research?</h3>
                  <div className="lp-mini-ask">
                    <span className="lp-typed">Is Nvidia still a buy after Q2 earnings?</span>
                    <div className="lp-mini-ask-bar">
                      <span>Search</span>
                      <b>↑</b>
                    </div>
                  </div>
                  <div className="lp-mini-answer">
                    <p className="lp-src-line"><i /><i /><i /> 21 sources</p>
                    <p>Data-center mix is still doing the work. Guidance moved up; the multiple still assumes a linear Blackwell ramp.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lp-frame vis-s2">
              <div className="lp-shot-ui">
                <aside className="lp-mini-side">
                  <img src="/assets/logo.png" alt="" />
                  <i /><i /><i /><i />
                </aside>
                <div className="lp-mini-main">
                  <div className="lp-mini-head"><b>Discover</b><span>For You</span><span>Weather</span></div>
                  <div className="lp-disc-feat">
                    <div>
                      <h4>Nvidia's Rubin Ultra ships early — Wall Street rewrites 2027 AI capex</h4>
                      <p>First hyperscaler deliveries landed two months ahead of schedule.</p>
                    </div>
                    <div className="lp-photo g-hero"></div>
                  </div>
                  <div className="lp-disc-row">
                    <div className="lp-disc-card"><div className="lp-photo g-3"></div><p>Apple foldable enters mass production</p></div>
                    <div className="lp-disc-card"><div className="lp-photo g-5"></div><p>Oil nears $100 ahead of Fed week</p></div>
                    <div className="lp-disc-card"><div className="lp-photo g-2"></div><p>Yen rallies on BOJ tightening bets</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lp-frame vis-s3">
              <div className="lp-shot-ui">
                <aside className="lp-mini-side">
                  <img src="/assets/logo.png" alt="" />
                  <i /><i /><i /><i />
                </aside>
                <div className="lp-mini-main">
                  <div className="lp-mini-head"><b>Charting</b><span className="on">NVDA</span><span>Watchlist</span></div>
                  <div className="lp-co-grid">
                    <div className="lp-co">
                      <em>NV</em>
                      <div><b>NVDA</b><span>$224.25</span></div>
                      <small className="up">+0.4%</small>
                    </div>
                    <div className="lp-co">
                      <em>AA</em>
                      <div><b>AAPL</b><span>$247.81</span></div>
                      <small className="up">+0.4%</small>
                    </div>
                    <div className="lp-co">
                      <em>MS</em>
                      <div><b>MSFT</b><span>$428.90</span></div>
                      <small className="up">+0.4%</small>
                    </div>
                    <div className="lp-co">
                      <em>AM</em>
                      <div><b>AMZN</b><span>$231.40</span></div>
                      <small className="up">+0.4%</small>
                    </div>
                    <div className="lp-co">
                      <em>ME</em>
                      <div><b>META</b><span>$651.14</span></div>
                      <small className="up">+0.4%</small>
                    </div>
                    <div className="lp-co">
                      <em>TS</em>
                      <div><b>TSLA</b><span>$248.50</span></div>
                      <small className="dn">−0.7%</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lp-pillars">
          <article>
            <span className="lp-ico">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
            </span>
            <h3>Open source</h3>
            <p>Read the code, fork the engine, ship your own build. Chartum stays light because the community can see every layer.</p>
          </article>
          <article>
            <span className="lp-ico">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
            </span>
            <h3>Fully customizable</h3>
            <p>Themes, modes, spaces, and the layout you actually work in. Turn Chartum into your desk — not a generic chat window.</p>
          </article>
          <article>
            <span className="lp-ico">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
            </span>
            <h3>Finance, in the same shell</h3>
            <p>Charts, transcripts, and earnings — markets next to search, without leaving the page.</p>
          </article>
        </section>

        <section className="lp-gallery">
          <p className="lp-kicker">In the product</p>
          <h2>Screens from the actual engine.</h2>
          <div className="lp-gallery-grid">
            <figure className="wide">
              <figcaption>Search</figcaption>
              <div className="lp-shot-ui">
                <aside className="lp-mini-side">
                  <img src="/assets/logo.png" alt="" />
                  <i /><i /><i /><i />
                </aside>
                <div className="lp-mini-main search-shot">
                  <p className="lp-mini-greet">Good evening</p>
                  <h3>What would you like to research?</h3>
                  <div className="lp-mini-ask">
                    <span className="lp-typed">Is Nvidia still a buy after Q2 earnings?</span>
                    <div className="lp-mini-ask-bar">
                      <span>Search</span>
                      <b>↑</b>
                    </div>
                  </div>
                  <div className="lp-mini-answer">
                    <p className="lp-src-line"><i /><i /><i /> 21 sources</p>
                    <p>Data-center mix is still doing the work. Guidance moved up; the multiple still assumes a linear Blackwell ramp.</p>
                  </div>
                </div>
              </div>
            </figure>
            <figure>
              <figcaption>Discover</figcaption>
              <div className="lp-shot-ui">
                <aside className="lp-mini-side">
                  <img src="/assets/logo.png" alt="" />
                  <i /><i /><i /><i />
                </aside>
                <div className="lp-mini-main">
                  <div className="lp-mini-head"><b>Discover</b><span>For You</span><span>Weather</span></div>
                  <div className="lp-disc-feat">
                    <div>
                      <h4>Nvidia's Rubin Ultra ships early — Wall Street rewrites 2027 AI capex</h4>
                      <p>First hyperscaler deliveries landed two months ahead of schedule.</p>
                    </div>
                    <div className="lp-photo g-hero"></div>
                  </div>
                  <div className="lp-disc-row">
                    <div className="lp-disc-card"><div className="lp-photo g-3"></div><p>Apple foldable enters mass production</p></div>
                    <div className="lp-disc-card"><div className="lp-photo g-5"></div><p>Oil nears $100 ahead of Fed week</p></div>
                    <div className="lp-disc-card"><div className="lp-photo g-2"></div><p>Yen rallies on BOJ tightening bets</p></div>
                  </div>
                </div>
              </div>
            </figure>
            <figure>
              <figcaption>Finance</figcaption>
              <div className="lp-shot-ui">
                <aside className="lp-mini-side">
                  <img src="/assets/logo.png" alt="" />
                  <i /><i /><i /><i />
                </aside>
                <div className="lp-mini-main">
                  <div className="lp-mini-head"><b>Charting</b><span className="on">NVDA</span><span>Watchlist</span></div>
                  <div className="lp-co-grid">
                    <div className="lp-co">
                      <em>NV</em>
                      <div><b>NVDA</b><span>$224.25</span></div>
                      <small className="up">+0.4%</small>
                    </div>
                    <div className="lp-co">
                      <em>AA</em>
                      <div><b>AAPL</b><span>$247.81</span></div>
                      <small className="up">+0.4%</small>
                    </div>
                    <div className="lp-co">
                      <em>MS</em>
                      <div><b>MSFT</b><span>$428.90</span></div>
                      <small className="up">+0.4%</small>
                    </div>
                    <div className="lp-co">
                      <em>AM</em>
                      <div><b>AMZN</b><span>$231.40</span></div>
                      <small className="up">+0.4%</small>
                    </div>
                    <div className="lp-co">
                      <em>ME</em>
                      <div><b>META</b><span>$651.14</span></div>
                      <small className="up">+0.4%</small>
                    </div>
                    <div className="lp-co">
                      <em>TS</em>
                      <div><b>TSLA</b><span>$248.50</span></div>
                      <small className="dn">−0.7%</small>
                    </div>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </section>

        <section className="lp-oss" id="open-source">
          <p className="lp-kicker">Open source</p>
          <h2>Yours to read, fork, and reshape.</h2>
          <p>Chartum is built in the open — a light AI search engine you can read, fork, and reshape.</p>
          <div className="lp-oss-cta">
            <Link className="lp-cta" to="/">Launch Chartum <span>→</span></Link>
            <Link className="lp-cta ghost" to="/charting">Open Finance</Link>
          </div>
        </section>
      </main>

      <footer className="lp-foot">
        <div className="lp-foot-cta">
          <div>
            <p className="lp-kicker">Get started</p>
            <h2>Ask the web. Keep it light.</h2>
            <p>Open Chartum — an AI search engine you can read, fork, and extend.</p>
          </div>
          <Link className="lp-cta" to="/">Launch Chartum <span>→</span></Link>
        </div>
        <div className="lp-foot-inner">
          <div className="lp-foot-brand">
            <Link className="lp-brand" to="/landing">
              <img src="/assets/logo.png" alt="" />
              <span>CHARTUM</span>
            </Link>
            <p>The open-source AI search engine. Light like a browser, built for research and markets.</p>
          </div>
          <nav className="lp-foot-cols" aria-label="Footer">
            <div>
              <strong>Product</strong>
              <Link to="/">New chat</Link>
              <Link to="/discover">Discover</Link>
              <Link to="/charting">Finance</Link>
              <Link to="/settings">Settings</Link>
            </div>
            <div>
              <strong>Finance</strong>
              <Link to="/charting">Hub</Link>
              <Link to="/discover">Discover</Link>
            </div>
            <div>
              <strong>Company</strong>
              <a href="#open-source">Open source</a>
              <Link to="/settings">Settings</Link>
              <Link to="/">Sign in</Link>
              <Link to="/">Open app</Link>
            </div>
          </nav>
        </div>
        <div className="lp-foot-bar">
          <span>© 2026 Chartum. Built in the open.</span>
          <div className="lp-foot-bar-links">
            <a href="#product">Product</a>
            <Link to="/charting">Finance</Link>
            <a href="#open-source">Source</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
