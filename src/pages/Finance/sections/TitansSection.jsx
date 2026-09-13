import "./titans-home.css"

export default function TitansSection() {
  return (
    <div className="titans">
      <input className="titans-radio" type="radio" name="titans-pick" id="titans-pick-buffett" defaultChecked />
      <input className="titans-radio" type="radio" name="titans-pick" id="titans-pick-wood" />
      <input className="titans-radio" type="radio" name="titans-pick" id="titans-pick-dalio" />
      <input className="titans-radio" type="radio" name="titans-pick" id="titans-pick-ackman" />
      <input className="titans-radio" type="radio" name="titans-pick" id="titans-pick-druck" />
      <input className="titans-radio" type="radio" name="titans-pick" id="titans-pick-tepper" />

      <div className="titans-split">
        <section className="titans-table">
          <div className="titans-table-head">
            <span>Investor</span>
            <span>Style</span>
          </div>
          <label className="titans-row" htmlFor="titans-pick-buffett">
            <img className="titans-face" src="https://commons.wikimedia.org/wiki/Special:FilePath/Warren%20Buffett%20KU%20Visit.jpg?width=640" alt="Warren Buffett" />
            <span className="titans-sym"><strong>Warren Buffett</strong><em>Berkshire Hathaway</em></span>
            <span className="titans-style">Value</span>
          </label>
          <label className="titans-row" htmlFor="titans-pick-wood">
            <img className="titans-face" src="https://commons.wikimedia.org/wiki/Special:FilePath/Cathie%20Wood%20ARK%20Invest%20Photo.jpg?width=640" alt="Cathie Wood" />
            <span className="titans-sym"><strong>Cathie Wood</strong><em>ARK Invest</em></span>
            <span className="titans-style">Innovation</span>
          </label>
          <label className="titans-row" htmlFor="titans-pick-dalio">
            <img className="titans-face" src="https://commons.wikimedia.org/wiki/Special:FilePath/Ray%20Dalio%20-%20World%20Economic%20Forum%20Annual%20Meeting%202012.jpg?width=640" alt="Ray Dalio" />
            <span className="titans-sym"><strong>Ray Dalio</strong><em>Bridgewater</em></span>
            <span className="titans-style">Macro</span>
          </label>
          <label className="titans-row" htmlFor="titans-pick-ackman">
            <img className="titans-face" src="https://commons.wikimedia.org/wiki/Special:FilePath/Bill%20Ackman%2C%202016.jpg?width=640" alt="Bill Ackman" />
            <span className="titans-sym"><strong>Bill Ackman</strong><em>Pershing Square</em></span>
            <span className="titans-style">Activist</span>
          </label>
          <label className="titans-row" htmlFor="titans-pick-druck">
            <img className="titans-face" src="https://commons.wikimedia.org/wiki/Special:FilePath/Stanley%20Druckenmiller.jpg?width=640" alt="Stanley Druckenmiller" />
            <span className="titans-sym"><strong>Stanley Druckenmiller</strong><em>Duquesne</em></span>
            <span className="titans-style">Macro</span>
          </label>
          <label className="titans-row" htmlFor="titans-pick-tepper">
            <img className="titans-face" src="https://commons.wikimedia.org/wiki/Special:FilePath/David%20Tepper%202013.jpg?width=640" alt="David Tepper" />
            <span className="titans-sym"><strong>David Tepper</strong><em>Appaloosa</em></span>
            <span className="titans-style">Opportunistic</span>
          </label>
        </section>

        <aside className="titans-side">
          <article className="titans-research titans-research-buffett">
            <header className="titans-res-head">
              <img className="titans-res-face" src="https://commons.wikimedia.org/wiki/Special:FilePath/Warren%20Buffett%20KU%20Visit.jpg?width=640" alt="Warren Buffett" />
              <div>
                <h2>Warren Buffett</h2>
                <p>Chairman and CEO · Berkshire Hathaway</p>
              </div>
              <span className="titans-chip">Value</span>
            </header>
            <div className="titans-book">
              <div className="titans-book-head">
                <span><i>Holding</i><b>Weight</b></span>
                <span><i>Holding</i><b>Weight</b></span>
              </div>
              <div className="titans-book-list">
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/AAPL.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Apple</strong><em>AAPL</em></span>
                  <span className="titans-book-w">22%</span>
                  <span className="titans-book-bar"><i className="w22" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>A</i></span>
                  <span className="titans-book-name"><strong>American Express</strong><em>AXP</em></span>
                  <span className="titans-book-w">16%</span>
                  <span className="titans-book-bar"><i className="w16" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/BAC.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Bank of America</strong><em>BAC</em></span>
                  <span className="titans-book-w">11%</span>
                  <span className="titans-book-bar"><i className="w11" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>K</i></span>
                  <span className="titans-book-name"><strong>Coca-Cola</strong><em>KO</em></span>
                  <span className="titans-book-w">10%</span>
                  <span className="titans-book-bar"><i className="w10" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/CVX.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Chevron</strong><em>CVX</em></span>
                  <span className="titans-book-w">8%</span>
                  <span className="titans-book-bar"><i className="w8" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>O</i></span>
                  <span className="titans-book-name"><strong>Occidental</strong><em>OXY</em></span>
                  <span className="titans-book-w">6%</span>
                  <span className="titans-book-bar"><i className="w6" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>M</i></span>
                  <span className="titans-book-name"><strong>Moody&apos;s</strong><em>MCO</em></span>
                  <span className="titans-book-w">5%</span>
                  <span className="titans-book-bar"><i className="w5" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/KHC.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Kraft Heinz</strong><em>KHC</em></span>
                  <span className="titans-book-w">4%</span>
                  <span className="titans-book-bar"><i className="w4" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/V.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Visa</strong><em>V</em></span>
                  <span className="titans-book-w">4%</span>
                  <span className="titans-book-bar"><i className="w4" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/MA.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Mastercard</strong><em>MA</em></span>
                  <span className="titans-book-w">3%</span>
                  <span className="titans-book-bar"><i className="w3" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/AMZN.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Amazon</strong><em>AMZN</em></span>
                  <span className="titans-book-w">3%</span>
                  <span className="titans-book-bar"><i className="w3" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>D</i></span>
                  <span className="titans-book-name"><strong>DaVita</strong><em>DVA</em></span>
                  <span className="titans-book-w">2%</span>
                  <span className="titans-book-bar"><i className="w2" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>K</i></span>
                  <span className="titans-book-name"><strong>Kroger</strong><em>KR</em></span>
                  <span className="titans-book-w">2%</span>
                  <span className="titans-book-bar"><i className="w2" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>C</i></span>
                  <span className="titans-book-name"><strong>Capital One</strong><em>COF</em></span>
                  <span className="titans-book-w">2%</span>
                  <span className="titans-book-bar"><i className="w2" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>S</i></span>
                  <span className="titans-book-name"><strong>Sirius XM</strong><em>SIRI</em></span>
                  <span className="titans-book-w">2%</span>
                  <span className="titans-book-bar"><i className="w2" /></span>
                </div>
              </div>
            </div>
            <div className="titans-copy-grid">
              <section className="titans-copy">
                <h3>The fund</h3>
                <p>Buys simple businesses that throw off cash and can be held for decades. Insurance float funds the book. Concentration is a feature: Apple, the credit names, and a handful of consumer franchises do most of the work.</p>
              </section>
              <section className="titans-copy">
                <h3>The investor</h3>
                <p>Buffett has run Berkshire since 1965. The method is public: owner earnings, a margin of safety, and almost no trading. He still writes the annual letter. The succession plan is Greg Abel; the culture is not.</p>
              </section>
            </div>
            <dl className="titans-facts">
              <div><dt>Fund</dt><dd>Berkshire Hathaway</dd></div>
              <div><dt>Style</dt><dd>Value</dd></div>
              <div><dt>AUM</dt><dd>$347b</dd></div>
              <div><dt>HQ</dt><dd>Omaha</dd></div>
              <div><dt>Started</dt><dd>1965</dd></div>
              <div><dt>Vehicle</dt><dd>Public company</dd></div>
              <div><dt>Horizon</dt><dd>Permanent</dd></div>
              <div><dt>Focus</dt><dd>Moats, cash</dd></div>
            </dl>
          </article>

          <article className="titans-research titans-research-wood">
            <header className="titans-res-head">
              <img className="titans-res-face" src="https://commons.wikimedia.org/wiki/Special:FilePath/Cathie%20Wood%20ARK%20Invest%20Photo.jpg?width=640" alt="Cathie Wood" />
              <div>
                <h2>Cathie Wood</h2>
                <p>Founder and CIO · ARK Invest</p>
              </div>
              <span className="titans-chip">Innovation</span>
            </header>
            <div className="titans-book">
              <div className="titans-book-head">
                <span><i>Holding</i><b>Weight</b></span>
                <span><i>Holding</i><b>Weight</b></span>
              </div>
              <div className="titans-book-list">
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/TSLA.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Tesla</strong><em>TSLA</em></span>
                  <span className="titans-book-w">11%</span>
                  <span className="titans-book-bar"><i className="w11" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/COIN.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Coinbase</strong><em>COIN</em></span>
                  <span className="titans-book-w">9%</span>
                  <span className="titans-book-bar"><i className="w9" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/ROKU.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Roku</strong><em>ROKU</em></span>
                  <span className="titans-book-w">8%</span>
                  <span className="titans-book-bar"><i className="w8" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>C</i></span>
                  <span className="titans-book-name"><strong>CrowdStrike</strong><em>CRWD</em></span>
                  <span className="titans-book-w">7%</span>
                  <span className="titans-book-bar"><i className="w7" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/HOOD.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Robinhood</strong><em>HOOD</em></span>
                  <span className="titans-book-w">7%</span>
                  <span className="titans-book-bar"><i className="w7" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/RBLX.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Roblox</strong><em>RBLX</em></span>
                  <span className="titans-book-w">6%</span>
                  <span className="titans-book-bar"><i className="w6" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/PLTR.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Palantir</strong><em>PLTR</em></span>
                  <span className="titans-book-w">6%</span>
                  <span className="titans-book-bar"><i className="w6" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/AMD.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>AMD</strong><em>AMD</em></span>
                  <span className="titans-book-w">5%</span>
                  <span className="titans-book-bar"><i className="w5" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>S</i></span>
                  <span className="titans-book-name"><strong>Shopify</strong><em>SHOP</em></span>
                  <span className="titans-book-w">5%</span>
                  <span className="titans-book-bar"><i className="w5" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>P</i></span>
                  <span className="titans-book-name"><strong>UiPath</strong><em>PATH</em></span>
                  <span className="titans-book-w">4%</span>
                  <span className="titans-book-bar"><i className="w4" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/AMZN.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Amazon</strong><em>AMZN</em></span>
                  <span className="titans-book-w">4%</span>
                  <span className="titans-book-bar"><i className="w4" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/META.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Meta</strong><em>META</em></span>
                  <span className="titans-book-w">4%</span>
                  <span className="titans-book-bar"><i className="w4" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/NVDA.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Nvidia</strong><em>NVDA</em></span>
                  <span className="titans-book-w">3%</span>
                  <span className="titans-book-bar"><i className="w3" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/TSM.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>TSMC</strong><em>TSM</em></span>
                  <span className="titans-book-w">3%</span>
                  <span className="titans-book-bar"><i className="w3" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>S</i></span>
                  <span className="titans-book-name"><strong>Block</strong><em>SQ</em></span>
                  <span className="titans-book-w">3%</span>
                  <span className="titans-book-bar"><i className="w3" /></span>
                </div>
              </div>
            </div>
            <div className="titans-copy-grid">
              <section className="titans-copy">
                <h3>The fund</h3>
                <p>Runs high-conviction thematic books across robotics, energy storage, genomic sequencing, and digital wallets. Turnover is high. The bet is that a few platforms become the default and the rest of the book is optionality.</p>
              </section>
              <section className="titans-copy">
                <h3>The investor</h3>
                <p>Wood founded ARK after leaving AllianceBernstein. She publishes the research and sits on CNBC more than most CIOs. The 2020–21 run and the 2022 drawdown are both part of the record. The process has not changed.</p>
              </section>
            </div>
            <dl className="titans-facts">
              <div><dt>Fund</dt><dd>ARK Invest</dd></div>
              <div><dt>Style</dt><dd>Innovation</dd></div>
              <div><dt>AUM</dt><dd>$14b</dd></div>
              <div><dt>HQ</dt><dd>St. Petersburg</dd></div>
              <div><dt>Started</dt><dd>2014</dd></div>
              <div><dt>Vehicle</dt><dd>Active ETFs</dd></div>
              <div><dt>Horizon</dt><dd>5 years</dd></div>
              <div><dt>Focus</dt><dd>AI, crypto, geno</dd></div>
            </dl>
          </article>

          <article className="titans-research titans-research-dalio">
            <header className="titans-res-head">
              <img className="titans-res-face" src="https://commons.wikimedia.org/wiki/Special:FilePath/Ray%20Dalio%20-%20World%20Economic%20Forum%20Annual%20Meeting%202012.jpg?width=640" alt="Ray Dalio" />
              <div>
                <h2>Ray Dalio</h2>
                <p>Founder · Bridgewater</p>
              </div>
              <span className="titans-chip">Macro</span>
            </header>
            <div className="titans-book">
              <div className="titans-book-head">
                <span><i>Holding</i><b>Weight</b></span>
                <span><i>Holding</i><b>Weight</b></span>
              </div>
              <div className="titans-book-list">
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>V</i></span>
                  <span className="titans-book-name"><strong>Emerging markets</strong><em>VWO</em></span>
                  <span className="titans-book-w">12%</span>
                  <span className="titans-book-bar"><i className="w12" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>G</i></span>
                  <span className="titans-book-name"><strong>Gold</strong><em>GLD</em></span>
                  <span className="titans-book-w">10%</span>
                  <span className="titans-book-bar"><i className="w10" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>I</i></span>
                  <span className="titans-book-name"><strong>S&amp;P 500</strong><em>IVV</em></span>
                  <span className="titans-book-w">9%</span>
                  <span className="titans-book-bar"><i className="w9" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>L</i></span>
                  <span className="titans-book-name"><strong>IG credit</strong><em>LQD</em></span>
                  <span className="titans-book-w">8%</span>
                  <span className="titans-book-bar"><i className="w8" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>T</i></span>
                  <span className="titans-book-name"><strong>TIPS</strong><em>TIP</em></span>
                  <span className="titans-book-w">8%</span>
                  <span className="titans-book-bar"><i className="w8" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>I</i></span>
                  <span className="titans-book-name"><strong>EM equity</strong><em>IEMG</em></span>
                  <span className="titans-book-w">7%</span>
                  <span className="titans-book-bar"><i className="w7" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>H</i></span>
                  <span className="titans-book-name"><strong>High yield</strong><em>HYG</em></span>
                  <span className="titans-book-w">6%</span>
                  <span className="titans-book-bar"><i className="w6" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>T</i></span>
                  <span className="titans-book-name"><strong>Long Treasuries</strong><em>TLT</em></span>
                  <span className="titans-book-w">6%</span>
                  <span className="titans-book-bar"><i className="w6" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/XOM.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Exxon</strong><em>XOM</em></span>
                  <span className="titans-book-w">5%</span>
                  <span className="titans-book-bar"><i className="w5" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/JPM.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>JPMorgan</strong><em>JPM</em></span>
                  <span className="titans-book-w">5%</span>
                  <span className="titans-book-bar"><i className="w5" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/MSFT.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Microsoft</strong><em>MSFT</em></span>
                  <span className="titans-book-w">5%</span>
                  <span className="titans-book-bar"><i className="w5" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/GOOG.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Alphabet</strong><em>GOOG</em></span>
                  <span className="titans-book-w">4%</span>
                  <span className="titans-book-bar"><i className="w4" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/V.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Visa</strong><em>V</em></span>
                  <span className="titans-book-w">4%</span>
                  <span className="titans-book-bar"><i className="w4" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/JNJ.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Johnson &amp; Johnson</strong><em>JNJ</em></span>
                  <span className="titans-book-w">3%</span>
                  <span className="titans-book-bar"><i className="w3" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>P</i></span>
                  <span className="titans-book-name"><strong>Procter &amp; Gamble</strong><em>PG</em></span>
                  <span className="titans-book-w">3%</span>
                  <span className="titans-book-bar"><i className="w3" /></span>
                </div>
              </div>
            </div>
            <div className="titans-copy-grid">
              <section className="titans-copy">
                <h3>The fund</h3>
                <p>Balances growth, inflation, and deflation sleeves so no single regime sinks the book. Equities, duration, credit, and gold are sized by risk, not notional. The Pure Alpha book is the discretionary overlay.</p>
              </section>
              <section className="titans-copy">
                <h3>The investor</h3>
                <p>Dalio built Bridgewater into the largest hedge fund and then stepped back from the CIO seat. Principles and the economic machine videos are the public face. The firm is now a process more than a person.</p>
              </section>
            </div>
            <dl className="titans-facts">
              <div><dt>Fund</dt><dd>Bridgewater</dd></div>
              <div><dt>Style</dt><dd>Macro</dd></div>
              <div><dt>AUM</dt><dd>$124b</dd></div>
              <div><dt>HQ</dt><dd>Westport</dd></div>
              <div><dt>Started</dt><dd>1975</dd></div>
              <div><dt>Vehicle</dt><dd>Hedge fund</dd></div>
              <div><dt>Horizon</dt><dd>Cycle</dd></div>
              <div><dt>Focus</dt><dd>Risk parity</dd></div>
            </dl>
          </article>

          <article className="titans-research titans-research-ackman">
            <header className="titans-res-head">
              <img className="titans-res-face" src="https://commons.wikimedia.org/wiki/Special:FilePath/Bill%20Ackman%2C%202016.jpg?width=640" alt="Bill Ackman" />
              <div>
                <h2>Bill Ackman</h2>
                <p>Founder and CEO · Pershing Square</p>
              </div>
              <span className="titans-chip">Activist</span>
            </header>
            <div className="titans-book">
              <div className="titans-book-head">
                <span><i>Holding</i><b>Weight</b></span>
                <span><i>Holding</i><b>Weight</b></span>
              </div>
              <div className="titans-book-list">
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/UBER.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Uber</strong><em>UBER</em></span>
                  <span className="titans-book-w">18%</span>
                  <span className="titans-book-bar"><i className="w18" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>H</i></span>
                  <span className="titans-book-name"><strong>Hilton</strong><em>HLT</em></span>
                  <span className="titans-book-w">15%</span>
                  <span className="titans-book-bar"><i className="w15" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>Q</i></span>
                  <span className="titans-book-name"><strong>Restaurant Brands</strong><em>QSR</em></span>
                  <span className="titans-book-w">13%</span>
                  <span className="titans-book-bar"><i className="w13" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/GOOG.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Alphabet</strong><em>GOOG</em></span>
                  <span className="titans-book-w">12%</span>
                  <span className="titans-book-bar"><i className="w12" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>C</i></span>
                  <span className="titans-book-name"><strong>Chipotle</strong><em>CMG</em></span>
                  <span className="titans-book-w">11%</span>
                  <span className="titans-book-bar"><i className="w11" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/AMZN.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Amazon</strong><em>AMZN</em></span>
                  <span className="titans-book-w">8%</span>
                  <span className="titans-book-bar"><i className="w8" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/GOOGL.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Alphabet A</strong><em>GOOGL</em></span>
                  <span className="titans-book-w">6%</span>
                  <span className="titans-book-bar"><i className="w6" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>H</i></span>
                  <span className="titans-book-name"><strong>Howard Hughes</strong><em>HHH</em></span>
                  <span className="titans-book-w">5%</span>
                  <span className="titans-book-bar"><i className="w5" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>C</i></span>
                  <span className="titans-book-name"><strong>Canadian Pacific</strong><em>CP</em></span>
                  <span className="titans-book-w">4%</span>
                  <span className="titans-book-bar"><i className="w4" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>N</i></span>
                  <span className="titans-book-name"><strong>Nike</strong><em>NKE</em></span>
                  <span className="titans-book-w">3%</span>
                  <span className="titans-book-bar"><i className="w3" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>B</i></span>
                  <span className="titans-book-name"><strong>Brookfield</strong><em>BN</em></span>
                  <span className="titans-book-w">3%</span>
                  <span className="titans-book-bar"><i className="w3" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>S</i></span>
                  <span className="titans-book-name"><strong>Seaport</strong><em>SEG</em></span>
                  <span className="titans-book-w">2%</span>
                  <span className="titans-book-bar"><i className="w2" /></span>
                </div>
              </div>
            </div>
            <div className="titans-copy-grid">
              <section className="titans-copy">
                <h3>The fund</h3>
                <p>Runs a short book of large, high-quality names and is willing to take a board seat. Position sizes are large on purpose. The 2020 hedge and the Universal Music / Hilton / Chipotle chapter are the current tape.</p>
              </section>
              <section className="titans-copy">
                <h3>The investor</h3>
                <p>Ackman is the most public activist of his generation. Pershing Square Holdings is the permanent-capital wrapper. He writes long letters and does not hide the book. The style is concentrated, not diversified.</p>
              </section>
            </div>
            <dl className="titans-facts">
              <div><dt>Fund</dt><dd>Pershing Square</dd></div>
              <div><dt>Style</dt><dd>Activist</dd></div>
              <div><dt>AUM</dt><dd>$18b</dd></div>
              <div><dt>HQ</dt><dd>New York</dd></div>
              <div><dt>Started</dt><dd>2004</dd></div>
              <div><dt>Vehicle</dt><dd>Hedge fund</dd></div>
              <div><dt>Horizon</dt><dd>Multi-year</dd></div>
              <div><dt>Focus</dt><dd>Quality, control</dd></div>
            </dl>
          </article>

          <article className="titans-research titans-research-druck">
            <header className="titans-res-head">
              <img className="titans-res-face" src="https://commons.wikimedia.org/wiki/Special:FilePath/Stanley%20Druckenmiller.jpg?width=640" alt="Stanley Druckenmiller" />
              <div>
                <h2>Stanley Druckenmiller</h2>
                <p>Founder and chairman · Duquesne</p>
              </div>
              <span className="titans-chip">Macro</span>
            </header>
            <div className="titans-book">
              <div className="titans-book-head">
                <span><i>Holding</i><b>Weight</b></span>
                <span><i>Holding</i><b>Weight</b></span>
              </div>
              <div className="titans-book-list">
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/NVDA.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Nvidia</strong><em>NVDA</em></span>
                  <span className="titans-book-w">13%</span>
                  <span className="titans-book-bar"><i className="w13" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/MSFT.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Microsoft</strong><em>MSFT</em></span>
                  <span className="titans-book-w">11%</span>
                  <span className="titans-book-bar"><i className="w11" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/AMZN.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Amazon</strong><em>AMZN</em></span>
                  <span className="titans-book-w">10%</span>
                  <span className="titans-book-bar"><i className="w10" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/META.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Meta</strong><em>META</em></span>
                  <span className="titans-book-w">9%</span>
                  <span className="titans-book-bar"><i className="w9" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/AVGO.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Broadcom</strong><em>AVGO</em></span>
                  <span className="titans-book-w">8%</span>
                  <span className="titans-book-bar"><i className="w8" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/TSM.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>TSMC</strong><em>TSM</em></span>
                  <span className="titans-book-w">7%</span>
                  <span className="titans-book-bar"><i className="w7" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/GOOGL.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Alphabet</strong><em>GOOGL</em></span>
                  <span className="titans-book-w">6%</span>
                  <span className="titans-book-bar"><i className="w6" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/AMD.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>AMD</strong><em>AMD</em></span>
                  <span className="titans-book-w">6%</span>
                  <span className="titans-book-bar"><i className="w6" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/AMAT.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Applied Materials</strong><em>AMAT</em></span>
                  <span className="titans-book-w">5%</span>
                  <span className="titans-book-bar"><i className="w5" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/ASML.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>ASML</strong><em>ASML</em></span>
                  <span className="titans-book-w">5%</span>
                  <span className="titans-book-bar"><i className="w5" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/MU.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Micron</strong><em>MU</em></span>
                  <span className="titans-book-w">4%</span>
                  <span className="titans-book-bar"><i className="w4" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/PLTR.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Palantir</strong><em>PLTR</em></span>
                  <span className="titans-book-w">4%</span>
                  <span className="titans-book-bar"><i className="w4" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/V.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Visa</strong><em>V</em></span>
                  <span className="titans-book-w">3%</span>
                  <span className="titans-book-bar"><i className="w3" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/LLY.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Eli Lilly</strong><em>LLY</em></span>
                  <span className="titans-book-w">3%</span>
                  <span className="titans-book-bar"><i className="w3" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/COST.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Costco</strong><em>COST</em></span>
                  <span className="titans-book-w">3%</span>
                  <span className="titans-book-bar"><i className="w3" /></span>
                </div>
              </div>
            </div>
            <div className="titans-copy-grid">
              <section className="titans-copy">
                <h3>The fund</h3>
                <p>Sizes into liquidity and growth when the Fed is easy and cuts when the tape turns. Famous for the 1992 sterling trade with Soros. The family office still publishes 13Fs; the real book is more derivatives than the filing shows.</p>
              </section>
              <section className="titans-copy">
                <h3>The investor</h3>
                <p>Druckenmiller ran Duquesne for three decades without a down year, then returned outside money. He is still the reference macro voice. When he talks about duration or tech, the Street listens even if the print is delayed.</p>
              </section>
            </div>
            <dl className="titans-facts">
              <div><dt>Fund</dt><dd>Duquesne</dd></div>
              <div><dt>Style</dt><dd>Macro</dd></div>
              <div><dt>AUM</dt><dd>$4b</dd></div>
              <div><dt>HQ</dt><dd>New York</dd></div>
              <div><dt>Started</dt><dd>1981</dd></div>
              <div><dt>Vehicle</dt><dd>Family office</dd></div>
              <div><dt>Horizon</dt><dd>Tactical</dd></div>
              <div><dt>Focus</dt><dd>Liquidity, growth</dd></div>
            </dl>
          </article>

          <article className="titans-research titans-research-tepper">
            <header className="titans-res-head">
              <img className="titans-res-face" src="https://commons.wikimedia.org/wiki/Special:FilePath/David%20Tepper%202013.jpg?width=640" alt="David Tepper" />
              <div>
                <h2>David Tepper</h2>
                <p>Founder and president · Appaloosa</p>
              </div>
              <span className="titans-chip">Opportunistic</span>
            </header>
            <div className="titans-book">
              <div className="titans-book-head">
                <span><i>Holding</i><b>Weight</b></span>
                <span><i>Holding</i><b>Weight</b></span>
              </div>
              <div className="titans-book-list">
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/AMZN.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Amazon</strong><em>AMZN</em></span>
                  <span className="titans-book-w">12%</span>
                  <span className="titans-book-bar"><i className="w12" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/META.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Meta</strong><em>META</em></span>
                  <span className="titans-book-w">11%</span>
                  <span className="titans-book-bar"><i className="w11" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/GOOGL.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Alphabet</strong><em>GOOGL</em></span>
                  <span className="titans-book-w">10%</span>
                  <span className="titans-book-bar"><i className="w10" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/MSFT.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Microsoft</strong><em>MSFT</em></span>
                  <span className="titans-book-w">10%</span>
                  <span className="titans-book-bar"><i className="w10" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/NVDA.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Nvidia</strong><em>NVDA</em></span>
                  <span className="titans-book-w">8%</span>
                  <span className="titans-book-bar"><i className="w8" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><i>U</i></span>
                  <span className="titans-book-name"><strong>UnitedHealth</strong><em>UNH</em></span>
                  <span className="titans-book-w">6%</span>
                  <span className="titans-book-bar"><i className="w6" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/BAC.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Bank of America</strong><em>BAC</em></span>
                  <span className="titans-book-w">6%</span>
                  <span className="titans-book-bar"><i className="w6" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/JPM.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>JPMorgan</strong><em>JPM</em></span>
                  <span className="titans-book-w">5%</span>
                  <span className="titans-book-bar"><i className="w5" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/XOM.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Exxon</strong><em>XOM</em></span>
                  <span className="titans-book-w">5%</span>
                  <span className="titans-book-bar"><i className="w5" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/WMT.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Walmart</strong><em>WMT</em></span>
                  <span className="titans-book-w">5%</span>
                  <span className="titans-book-bar"><i className="w5" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/AMD.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>AMD</strong><em>AMD</em></span>
                  <span className="titans-book-w">4%</span>
                  <span className="titans-book-bar"><i className="w4" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/AVGO.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Broadcom</strong><em>AVGO</em></span>
                  <span className="titans-book-w">4%</span>
                  <span className="titans-book-bar"><i className="w4" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/TSM.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>TSMC</strong><em>TSM</em></span>
                  <span className="titans-book-w">3%</span>
                  <span className="titans-book-bar"><i className="w3" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/V.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Visa</strong><em>V</em></span>
                  <span className="titans-book-w">3%</span>
                  <span className="titans-book-bar"><i className="w3" /></span>
                </div>
                <div className="titans-book-row">
                  <span className="titans-book-mark"><img src="/assets/logos/PFE.svg" alt="" /></span>
                  <span className="titans-book-name"><strong>Pfizer</strong><em>PFE</em></span>
                  <span className="titans-book-w">3%</span>
                  <span className="titans-book-bar"><i className="w3" /></span>
                </div>
              </div>
            </div>
            <div className="titans-copy-grid">
              <section className="titans-copy">
                <h3>The fund</h3>
                <p>Made the firm in distressed credit, then rotated into large-cap tech when the cycle paid for it. The book can look like a growth fund one year and a bank-credit book the next. Concentration follows the tape, not a style box.</p>
              </section>
              <section className="titans-copy">
                <h3>The investor</h3>
                <p>Tepper left Goldman’s distressed desk and started Appaloosa in 1993. He also owns the Panthers. The 2009 bank trade is still the case study. He says what he thinks and sizes it.</p>
              </section>
            </div>
            <dl className="titans-facts">
              <div><dt>Fund</dt><dd>Appaloosa</dd></div>
              <div><dt>Style</dt><dd>Opportunistic</dd></div>
              <div><dt>AUM</dt><dd>$17b</dd></div>
              <div><dt>HQ</dt><dd>Miami Beach</dd></div>
              <div><dt>Started</dt><dd>1993</dd></div>
              <div><dt>Vehicle</dt><dd>Hedge fund</dd></div>
              <div><dt>Horizon</dt><dd>Cycle</dd></div>
              <div><dt>Focus</dt><dd>Distress, tech</dd></div>
            </dl>
          </article>
        </aside>
      </div>
    </div>
  )
}
