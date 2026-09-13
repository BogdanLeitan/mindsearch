import { Link } from "react-router-dom"
import "./stock.css"

function Stock() {
  return (
    <>
      <input className="fs-radio" type="radio" name="fs-tab" id="fs-tab-ov" defaultChecked />
      <input className="fs-radio" type="radio" name="fs-tab" id="fs-tab-fin" />
      <input className="fs-radio" type="radio" name="fs-tab" id="fs-tab-ir" />
      <input className="fs-radio" type="radio" name="fs-tab" id="fs-tab-rs" />
      <input className="fs-radio" type="radio" name="fs-tab" id="fs-tab-est" />
      <input className="fs-radio" type="radio" name="fs-tab" id="fs-tab-news" />
      <input className="fs-radio" type="radio" name="fs-tab" id="fs-tab-own" />
      <input className="fs-radio" type="radio" name="fs-tab" id="fs-tab-ind" />
      <input className="fs-radio" type="radio" name="fs-tab" id="fs-tab-div" />
      <input className="fs-radio" type="radio" name="fs-tab" id="fs-tab-mod" />
      <input className="fs-radio" type="radio" name="fs-tab" id="fs-tab-fil" />

      <header className="page-head finance-head fs-head">
        <label className="icon-btn header-sidebar-toggle" htmlFor="sidebar-collapsed" title="Expand sidebar">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><line x1="9" y1="3" x2="9" y2="21" /></svg>
        </label>

        <nav className="fs-crumb" aria-label="Breadcrumb">
          <Link to="/charting">Chartum Finance</Link>
          <span>›</span>
          <strong>META</strong>
        </nav>
      </header>

      <div className="content">
        <div className="fs-page">
          <div className="fs-hero">
            <img className="fs-logo" src="/assets/logos/META.svg" alt="" />
            <div>
              <h1>Meta Platforms, Inc.</h1>
              <p>META · NASDAQ</p>
            </div>
          </div>

          <nav className="fs-subnav">
            <label htmlFor="fs-tab-ov">Overview</label>
            <label htmlFor="fs-tab-fin">Financials</label>
            <label htmlFor="fs-tab-ir">Investor Relations</label>
            <label htmlFor="fs-tab-rs">Research</label>
            <label htmlFor="fs-tab-est">Estimates</label>
            <label htmlFor="fs-tab-news">News</label>
            <label htmlFor="fs-tab-own">Ownership</label>
            <label htmlFor="fs-tab-ind">Industry</label>
            <label htmlFor="fs-tab-div">Dividends</label>
            <label htmlFor="fs-tab-mod">Modeling</label>
            <label htmlFor="fs-tab-fil">Filings</label>
          </nav>

          <div className="fs-panel fs-ov">
            <section className="fs-sec">
              <h2>Business Description</h2>
              <p>
                Meta develops apps and devices that help people connect. The company reports in two segments. Family of Apps — Facebook, Instagram, Messenger, WhatsApp and Threads — is the cash engine: a global attention surface turned into advertising through ranking, targeting and measurement. Reels closed the short-video gap. Advantage+ made the auction cheaper to run for the buyer.
              </p>
              <p>
                Reality Labs is the long-duration bet: Quest, Ray-Ban Meta, and unreleased glasses. It loses money on purpose. Llama and the GPU build sit in the middle — keep the family of apps current and give the hardware something intelligent on-device. The research question is whether ad growth can fund that infra without the multiple compressing.
              </p>
              <dl className="fs-id">
                <div><dt>Founded</dt><dd>2004</dd></div>
                <div><dt>Headquarters</dt><dd>Menlo Park, CA</dd></div>
                <div><dt>Employees</dt><dd>~74,000</dd></div>
                <div><dt>CEO</dt><dd>Mark Zuckerberg</dd></div>
                <div><dt>Sector</dt><dd>Communication Services</dd></div>
                <div><dt>Website</dt><dd><a href="https://about.meta.com" target="_blank" rel="noreferrer">about.meta.com</a></dd></div>
              </dl>
            </section>

            <section className="fs-sec">
              <div className="fs-cols">
                <div>
                  <h3>Valuation</h3>
                  <div className="fs-dash"><span>Market Cap</span><b>$1.66T</b></div>
                  <div className="fs-dash"><span>PE (TTM)</span><b>24.17</b></div>
                  <div className="fs-dash"><span>PE (NTM)</span><b>21.32</b></div>
                  <div className="fs-dash"><span>Price / Sales</span><b>7.26</b></div>
                  <div className="fs-dash"><span>EV / EBITDA</span><b>16.30</b></div>
                  <div className="fs-dash"><span>Price / Book</span><b>6.33</b></div>
                </div>
                <div>
                  <h3>Cash Flow</h3>
                  <div className="fs-dash"><span>FCF Yield</span><b>2.47%</b></div>
                  <div className="fs-dash"><span>SBC-adj. FCF Yield</span><b>0.95%</b></div>
                  <div className="fs-dash"><span>SBC Impact</span><b>−61.34%</b></div>
                  <div className="fs-dash"><span>FCF / Share</span><b>$16.08</b></div>
                </div>
                <div>
                  <h3>Margins</h3>
                  <div className="fs-dash"><span>Profit Margin</span><b>29.84%</b></div>
                  <div className="fs-dash"><span>Operating Margin</span><b>38.08%</b></div>
                  <div className="fs-dash"><span>Earnings YoY</span><b>−13.57%</b></div>
                  <div className="fs-dash"><span>Revenue YoY</span><b>27.96%</b></div>
                </div>
                <div>
                  <h3>Balance</h3>
                  <div className="fs-dash"><span>Cash</span><b>$90.26B</b></div>
                  <div className="fs-dash"><span>Debt</span><b>$83.66B</b></div>
                  <div className="fs-dash"><span>Net Cash</span><b>$6.60B</b></div>
                </div>
                <div>
                  <h3>Dividend</h3>
                  <div className="fs-dash"><span>Yield</span><b>0.32%</b></div>
                  <div className="fs-dash"><span>Payout Ratio</span><b>3.91%</b></div>
                  <div className="fs-dash"><span>Payout Date</span><b>Jan 15, 2026</b></div>
                </div>
              </div>
            </section>

            <section className="fs-sec fs-debate">
              <article>
                <h3 className="bull">Bulls say</h3>
                <ul>
                  <li>Reels filled the TikTok hole and the ads system now knows how to price it. If ad load catches Feed, the multiple has room.</li>
                  <li>Advantage+ lowered the cost of running the auction. The print is a compounding story, not a recovery.</li>
                  <li>Buybacks work while DAP holds. The ads machine still funds everything that matters.</li>
                </ul>
              </article>
              <article>
                <h3 className="bear">Bears say</h3>
                <ul>
                  <li>Capex on Llama and clusters can run ahead of ad growth. Then this is an AI-tax name, not a cash compounder.</li>
                  <li>Reality Labs is duration with a real cash burn. Glasses have to become habit, not a press cycle.</li>
                  <li>Regulatory risk on ads, AI and kids is not abstract. A hit on the auction moves the multiple first.</li>
                </ul>
              </article>
            </section>

            <section className="fs-sec">
              <h2>Management</h2>
              <div className="fs-team">
                <article className="fs-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Mark%20Zuckerberg%20F8%202019%20Keynote%20(32830578717)%20(cropped).jpg?width=400" alt="Mark Zuckerberg" />
                  <strong>Mark Zuckerberg</strong>
                  <em>Founder, chairman and CEO</em>
                  <p>Sets product and capital allocation. Efficiency reset the cost base. This cycle is AI infra, Llama, and the hardware bet in Reality Labs.</p>
                </article>
                <article className="fs-person">
                  <img src="https://ui-avatars.com/api/?name=Susan%20Li&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Susan Li" />
                  <strong>Susan Li</strong>
                  <em>Chief financial officer</em>
                  <p>CFO since 2022. Owns the capital plan, buybacks, and the Reality Labs disclosure. Has to fund infra without breaking the FCF story.</p>
                </article>
                <article className="fs-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/26.02.2024%20-%20Andrew%20Bosworth.jpg?width=400" alt="Andrew Bosworth" />
                  <strong>Andrew Bosworth</strong>
                  <em>Chief technology officer</em>
                  <p>Built the ads system, then Oculus. As CTO he sits across infra, research, and the glasses roadmap. Hardware has to become something people wear.</p>
                </article>
                <article className="fs-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Chris%20Cox%2C%20Meta.jpg?width=400" alt="Chris Cox" />
                  <strong>Chris Cox</strong>
                  <em>Chief product officer</em>
                  <p>Owns Feed, Reels, and messaging — and how they monetize. Keep Instagram and Facebook compounding while Threads finds a lane.</p>
                </article>
                <article className="fs-person">
                  <img src="https://ui-avatars.com/api/?name=Javier%20Olivan&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Javier Olivan" />
                  <strong>Javier Olivan</strong>
                  <em>Chief operating officer</em>
                  <p>Former chief growth officer. Runs regional ops, integrity, and the post-efficiency org. Turns product bets into something the company can ship.</p>
                </article>
                <article className="fs-person">
                  <img src="https://ui-avatars.com/api/?name=Jennifer%20Newstead&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Jennifer Newstead" />
                  <strong>Jennifer Newstead</strong>
                  <em>Chief legal officer</em>
                  <p>Former State Department legal adviser. Owns litigation and the map around ads, AI, and kids. Legal risk on this name lands here first.</p>
                </article>
              </div>
            </section>

            <section className="fs-sec">
              <h2>What’s happening</h2>
              <ul className="fs-happen">
                <li>
                  <span>Sep 2026</span>
                  <div>
                    <strong>Infra cadence</strong>
                    <p>Capex and GPU delivery versus ad growth is the print to mark. If clusters stay in proportion to the auction, the FCF story holds.</p>
                  </div>
                </li>
                <li>
                  <span>Aug 2026</span>
                  <div>
                    <strong>Reels monetization</strong>
                    <p>Watch time is no longer the question. Ad load and conversion versus Feed decide whether mix shift is growth or just rotation.</p>
                  </div>
                </li>
                <li>
                  <span>Jul 2026</span>
                  <div>
                    <strong>Ray-Ban Meta run-rate</strong>
                    <p>The first glasses people wear in public. A tell for whether Reality Labs is still a lab or the start of a hardware cycle.</p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="fs-take">
              <img className="fs-take-logo" src="/assets/mindsearch-logo.svg" alt="" />
              <div>
                <h3>AI take</h3>
                <p>
                  Own the ads machine, not the glasses press cycle. Family of Apps still pays for everything that matters. Reality Labs is duration with a real cash burn. The risk that moves the multiple is capex running ahead of ad growth, or a hit on the auction. If infra stays in proportion to the print, this is a cash compounder with a call option attached.
                </p>
              </div>
            </section>
          </div>

          <div className="fs-panel fs-fin" />
          <div className="fs-panel fs-ir" />
          <div className="fs-panel fs-rs" />
          <div className="fs-panel fs-est" />
          <div className="fs-panel fs-news" />
          <div className="fs-panel fs-own" />
          <div className="fs-panel fs-ind" />
          <div className="fs-panel fs-div" />
          <div className="fs-panel fs-mod" />
          <div className="fs-panel fs-fil" />

        </div>
      </div>
    </>
  )
}

export default Stock
