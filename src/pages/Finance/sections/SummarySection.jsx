import "./summary-home.css"

export default function SummarySection() {
  return (
    <div className="ov-home">
      <div className="ov-hero">
        <p className="ov-greet">Good evening, Bogdan</p>
        <h1 className="ov-title">What would you like to analyze?</h1>
        <div className="ov-find">
          <form className="ov-search" action="/insights" method="get">
            <input type="search" name="q" placeholder="Search a company or ETF…" autoComplete="off" />
            <button className="ov-send" type="submit" title="Search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5" />
                <path d="M5 12l7-7 7 7" />
              </svg>
            </button>
          </form>
          <button className="ov-filt" type="button" title="Filters">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="7" y1="12" x2="17" y2="12" />
              <line x1="10" y1="16" x2="14" y2="16" />
            </svg>
          </button>
        </div>
      </div>

      <div className="ov-browse">
        <input className="ov-radio" type="radio" name="ov-sec" id="ov-sec-all" defaultChecked />
        <input className="ov-radio" type="radio" name="ov-sec" id="ov-sec-semi" />
        <input className="ov-radio" type="radio" name="ov-sec" id="ov-sec-soft" />
        <input className="ov-radio" type="radio" name="ov-sec" id="ov-sec-cons" />
        <input className="ov-radio" type="radio" name="ov-sec" id="ov-sec-comm" />
        <input className="ov-radio" type="radio" name="ov-sec" id="ov-sec-fin" />
        <input className="ov-radio" type="radio" name="ov-sec" id="ov-sec-hlth" />

        <div className="ov-browse-label">
          <div className="ov-secs">
            <label className="ov-sec" htmlFor="ov-sec-all">All</label>
            <label className="ov-sec" htmlFor="ov-sec-semi">Semiconductors</label>
            <label className="ov-sec" htmlFor="ov-sec-soft">Software</label>
            <label className="ov-sec" htmlFor="ov-sec-cons">Consumer</label>
            <label className="ov-sec" htmlFor="ov-sec-comm">Communication</label>
            <label className="ov-sec" htmlFor="ov-sec-fin">Financials</label>
            <label className="ov-sec" htmlFor="ov-sec-hlth">Health</label>
          </div>
        </div>

        <div className="ov-grid">
          <a className="ov-co semi" href="/finance/NVDA">
            <img className="ov-logo" src="/assets/logos/NVDA.svg" alt="" />
            <div className="ov-co-body">
              <strong>Nvidia</strong>
              <em>NVDA</em>
              <p>GPUs and systems for data-center AI training and inference.</p>
              <b>Market cap $5.58t</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co cons" href="/finance/AAPL">
            <img className="ov-logo" src="/assets/logos/AAPL.svg" alt="" />
            <div className="ov-co-body">
              <strong>Apple</strong>
              <em>AAPL</em>
              <p>iPhone, services, and the consumer hardware franchise.</p>
              <b>Market cap $4.70t</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co soft" href="/finance/MSFT">
            <img className="ov-logo" src="/assets/logos/MSFT.svg" alt="" />
            <div className="ov-co-body">
              <strong>Microsoft</strong>
              <em>MSFT</em>
              <p>Azure, Office, and AI layered across the enterprise stack.</p>
              <b>Market cap $3.71t</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co comm" href="/finance/GOOGL">
            <img className="ov-logo" src="/assets/logos/GOOGL.svg" alt="" />
            <div className="ov-co-body">
              <strong>Alphabet</strong>
              <em>GOOGL</em>
              <p>Search, YouTube, and cloud — ads still fund the AI build.</p>
              <b>Market cap $2.41t</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co cons" href="/finance/AMZN">
            <img className="ov-logo" src="/assets/logos/AMZN.svg" alt="" />
            <div className="ov-co-body">
              <strong>Amazon</strong>
              <em>AMZN</em>
              <p>E-commerce plus AWS, the largest cloud franchise.</p>
              <b>Market cap $2.18t</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co comm" href="/finance/META">
            <img className="ov-logo" src="/assets/logos/META.svg" alt="" />
            <div className="ov-co-body">
              <strong>Meta</strong>
              <em>META</em>
              <p>Family of apps, ad ranking, and a long Reality Labs bet.</p>
              <b>Market cap $1.82t</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co semi" href="/finance/AVGO">
            <img className="ov-logo" src="/assets/logos/AVGO.svg" alt="" />
            <div className="ov-co-body">
              <strong>Broadcom</strong>
              <em>AVGO</em>
              <p>Custom silicon and networking for the hyperscalers.</p>
              <b>Market cap $1.64t</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co cons" href="/finance/TSLA">
            <img className="ov-logo" src="/assets/logos/TSLA.svg" alt="" />
            <div className="ov-co-body">
              <strong>Tesla</strong>
              <em>TSLA</em>
              <p>EVs, energy storage, and autonomy software.</p>
              <b>Market cap $1.40t</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co semi" href="/finance/TSM">
            <img className="ov-logo" src="/assets/logos/TSM.svg" alt="" />
            <div className="ov-co-body">
              <strong>TSMC</strong>
              <em>TSM</em>
              <p>The foundry that makes leading-edge chips for the industry.</p>
              <b>Market cap $1.21t</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co semi" href="/finance/AMD">
            <img className="ov-logo" src="/assets/logos/AMD.svg" alt="" />
            <div className="ov-co-body">
              <strong>AMD</strong>
              <em>AMD</em>
              <p>CPUs and GPUs for PCs and the data center.</p>
              <b>Market cap $779b</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co hlth" href="/finance/LLY">
            <img className="ov-logo" src="/assets/logos/LLY.svg" alt="" />
            <div className="ov-co-body">
              <strong>Eli Lilly</strong>
              <em>LLY</em>
              <p>Obesity and diabetes drugs now driving the multiple.</p>
              <b>Market cap $742b</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co fin" href="/finance/JPM">
            <img className="ov-logo" src="/assets/logos/JPM.svg" alt="" />
            <div className="ov-co-body">
              <strong>JPMorgan</strong>
              <em>JPM</em>
              <p>The largest US bank — consumer, markets, and CIB.</p>
              <b>Market cap $688b</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co soft" href="/finance/PLTR">
            <img className="ov-logo" src="/assets/logos/PLTR.svg" alt="" />
            <div className="ov-co-body">
              <strong>Palantir</strong>
              <em>PLTR</em>
              <p>Data platforms for government and the enterprise.</p>
              <b>Market cap $392b</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co semi" href="/finance/ASML">
            <img className="ov-logo" src="/assets/logos/ASML.svg" alt="" />
            <div className="ov-co-body">
              <strong>ASML</strong>
              <em>ASML</em>
              <p>The lithography machines every leading-edge fab needs.</p>
              <b>Market cap $310b</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co semi" href="/finance/INTC">
            <img className="ov-logo" src="/assets/logos/INTC.svg" alt="" />
            <div className="ov-co-body">
              <strong>Intel</strong>
              <em>INTC</em>
              <p>Foundry turnaround and x86 CPUs for PCs and servers.</p>
              <b>Market cap $108b</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co semi" href="/finance/MU">
            <img className="ov-logo" src="/assets/logos/MU.svg" alt="" />
            <div className="ov-co-body">
              <strong>Micron</strong>
              <em>MU</em>
              <p>Memory and HBM for AI servers and the device cycle.</p>
              <b>Market cap $186b</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co semi" href="/finance/AMAT">
            <img className="ov-logo" src="/assets/logos/AMAT.svg" alt="" />
            <div className="ov-co-body">
              <strong>Applied Materials</strong>
              <em>AMAT</em>
              <p>Wafer-fab equipment across deposition and inspection.</p>
              <b>Market cap $148b</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co cons" href="/finance/COST">
            <img className="ov-logo" src="/assets/logos/COST.svg" alt="" />
            <div className="ov-co-body">
              <strong>Costco</strong>
              <em>COST</em>
              <p>Membership warehouse retail with a high-retention model.</p>
              <b>Market cap $412b</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co cons" href="/finance/WMT">
            <img className="ov-logo" src="/assets/logos/WMT.svg" alt="" />
            <div className="ov-co-body">
              <strong>Walmart</strong>
              <em>WMT</em>
              <p>US retail at scale, plus a growing e-commerce mix.</p>
              <b>Market cap $780b</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co fin" href="/finance/V">
            <img className="ov-logo" src="/assets/logos/V.svg" alt="" />
            <div className="ov-co-body">
              <strong>Visa</strong>
              <em>V</em>
              <p>The rails under card spend — volume, not balance sheet.</p>
              <b>Market cap $668b</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co fin" href="/finance/MA">
            <img className="ov-logo" src="/assets/logos/MA.svg" alt="" />
            <div className="ov-co-body">
              <strong>Mastercard</strong>
              <em>MA</em>
              <p>Payments network alongside Visa, more ex-US mix.</p>
              <b>Market cap $512b</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co fin" href="/finance/BAC">
            <img className="ov-logo" src="/assets/logos/BAC.svg" alt="" />
            <div className="ov-co-body">
              <strong>Bank of America</strong>
              <em>BAC</em>
              <p>Consumer deposits, wealth, and a large trading book.</p>
              <b>Market cap $356b</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co fin" href="/finance/BRK-B">
            <img className="ov-logo" src="/assets/logos/BRK-B.svg" alt="" />
            <div className="ov-co-body">
              <strong>Berkshire</strong>
              <em>BRK-B</em>
              <p>Insurance float funding a book of operating companies.</p>
              <b>Market cap $1.08t</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co hlth" href="/finance/JNJ">
            <img className="ov-logo" src="/assets/logos/JNJ.svg" alt="" />
            <div className="ov-co-body">
              <strong>Johnson & Johnson</strong>
              <em>JNJ</em>
              <p>Medtech and pharma after the consumer-health split.</p>
              <b>Market cap $372b</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co hlth" href="/finance/ABBV">
            <img className="ov-logo" src="/assets/logos/ABBV.svg" alt="" />
            <div className="ov-co-body">
              <strong>AbbVie</strong>
              <em>ABBV</em>
              <p>Immunology and aesthetics after the Humira cliff.</p>
              <b>Market cap $334b</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co comm" href="/finance/CSCO">
            <img className="ov-logo" src="/assets/logos/CSCO.svg" alt="" />
            <div className="ov-co-body">
              <strong>Cisco</strong>
              <em>CSCO</em>
              <p>Enterprise networking, security, and collaboration.</p>
              <b>Market cap $214b</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
          <a className="ov-co cons" href="/finance/XOM">
            <img className="ov-logo" src="/assets/logos/XOM.svg" alt="" />
            <div className="ov-co-body">
              <strong>Exxon Mobil</strong>
              <em>XOM</em>
              <p>Upstream oil and a long-cycle chemicals franchise.</p>
              <b>Market cap $498b</b>
            </div>
            <span className="ov-co-go" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
            </span>
          </a>
        </div>

        <nav className="ov-pager" aria-label="Pagination">
          <span className="ov-page-btn is-off">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </span>
          <div className="ov-page-dots">
            <span className="ov-page-num is-on">1</span>
            <span className="ov-page-num">2</span>
            <span className="ov-page-num">3</span>
          </div>
          <span className="ov-page-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </span>
        </nav>
      </div>
    </div>
  )
}
