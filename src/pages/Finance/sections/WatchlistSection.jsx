import "./watchlist-home.css"

export default function WatchlistSection() {
  return (
    <div className="wlist">
      <input className="wlist-radio" type="radio" name="wlist-pick" id="wlist-pick-nvda" defaultChecked />
      <input className="wlist-radio" type="radio" name="wlist-pick" id="wlist-pick-aapl" />
      <input className="wlist-radio" type="radio" name="wlist-pick" id="wlist-pick-msft" />
      <input className="wlist-radio" type="radio" name="wlist-pick" id="wlist-pick-amd" />
      <input className="wlist-radio" type="radio" name="wlist-pick" id="wlist-pick-tsla" />
      <input className="wlist-radio" type="radio" name="wlist-pick" id="wlist-pick-pltr" />
      <input className="wlist-radio" type="radio" name="wlist-pick" id="wlist-pick-avgo" />
      <input className="wlist-radio" type="radio" name="wlist-pick" id="wlist-pick-tsm" />
      <input className="wlist-radio" type="radio" name="wlist-pick" id="wlist-pick-asml" />

      <div className="wlist-split">
        <section className="wlist-table">
          <div className="wlist-table-head">
            <span>Company</span>
            <span>Sector</span>
          </div>
          <label className="wlist-row" htmlFor="wlist-pick-nvda">
            <img className="wlist-logo" src="/assets/logos/NVDA.svg" alt="" />
            <span className="wlist-sym">
              <strong>Nvidia</strong>
              <em>NVDA</em>
            </span>
            <span className="wlist-sector">Semiconductors</span>
          </label>
          <label className="wlist-row" htmlFor="wlist-pick-aapl">
            <img className="wlist-logo" src="/assets/logos/AAPL.svg" alt="" />
            <span className="wlist-sym">
              <strong>Apple</strong>
              <em>AAPL</em>
            </span>
            <span className="wlist-sector">Consumer</span>
          </label>
          <label className="wlist-row" htmlFor="wlist-pick-msft">
            <img className="wlist-logo" src="/assets/logos/MSFT.svg" alt="" />
            <span className="wlist-sym">
              <strong>Microsoft</strong>
              <em>MSFT</em>
            </span>
            <span className="wlist-sector">Software</span>
          </label>
          <label className="wlist-row" htmlFor="wlist-pick-amd">
            <img className="wlist-logo" src="/assets/logos/AMD.svg" alt="" />
            <span className="wlist-sym">
              <strong>AMD</strong>
              <em>AMD</em>
            </span>
            <span className="wlist-sector">Semiconductors</span>
          </label>
          <label className="wlist-row" htmlFor="wlist-pick-tsla">
            <img className="wlist-logo" src="/assets/logos/TSLA.svg" alt="" />
            <span className="wlist-sym">
              <strong>Tesla</strong>
              <em>TSLA</em>
            </span>
            <span className="wlist-sector">Consumer</span>
          </label>
          <label className="wlist-row" htmlFor="wlist-pick-pltr">
            <img className="wlist-logo" src="/assets/logos/PLTR.svg" alt="" />
            <span className="wlist-sym">
              <strong>Palantir</strong>
              <em>PLTR</em>
            </span>
            <span className="wlist-sector">Software</span>
          </label>
          <label className="wlist-row" htmlFor="wlist-pick-avgo">
            <img className="wlist-logo" src="/assets/logos/AVGO.svg" alt="" />
            <span className="wlist-sym">
              <strong>Broadcom</strong>
              <em>AVGO</em>
            </span>
            <span className="wlist-sector">Semiconductors</span>
          </label>
          <label className="wlist-row" htmlFor="wlist-pick-tsm">
            <img className="wlist-logo" src="/assets/logos/TSM.svg" alt="" />
            <span className="wlist-sym">
              <strong>TSMC</strong>
              <em>TSM</em>
            </span>
            <span className="wlist-sector">Semiconductors</span>
          </label>
          <label className="wlist-row" htmlFor="wlist-pick-asml">
            <img className="wlist-logo" src="/assets/logos/ASML.svg" alt="" />
            <span className="wlist-sym">
              <strong>ASML</strong>
              <em>ASML</em>
            </span>
            <span className="wlist-sector">Equipment</span>
          </label>
          <form className="wlist-add-row" action="/insights" method="get">
            <button type="submit" className="wlist-add-plus" title="Add company">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
              </svg>
            </button>
            <input type="search" name="q" placeholder="Add a company…" autoComplete="off" />
          </form>
        </section>

        <aside className="wlist-side">
          <article className="wlist-research wlist-research-nvda">
            <header className="wlist-res-head">
              <img className="wlist-res-logo" src="/assets/logos/NVDA.svg" alt="" />
              <div>
                <h2>Nvidia</h2>
                <p>NVDA · NASDAQ</p>
              </div>
              <a href="/finance/NVDA">Open</a>
            </header>

            <section className="wlist-about">
              <h3>Company</h3>
              <p>Nvidia designs the GPUs and the systems around them that train and run large models. CUDA, networking, and the software stack are what turn a chip vendor into the default AI factory. A handful of hyperscalers still take most of the volume, so the book is rich and concentrated at the same time.</p>
            </section>

            <section className="wlist-mgmt">
              <h3>Management</h3>
              <div className="wlist-team">
                <figure className="wlist-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Jensen%20Huang%2020231109%20(cropped2).jpg?width=400" alt="Jensen Huang" />
                  <figcaption>
                    <strong>Jensen Huang</strong>
                    <em>Founder, president and CEO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Colette%20Kress.png?width=400" alt="Colette Kress" />
                  <figcaption>
                    <strong>Colette Kress</strong>
                    <em>EVP and CFO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Debora%20Shoquist&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Debora Shoquist" />
                  <figcaption>
                    <strong>Debora Shoquist</strong>
                    <em>EVP, operations</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Jay%20Puri&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Jay Puri" />
                  <figcaption>
                    <strong>Jay Puri</strong>
                    <em>EVP, worldwide field operations</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Ian%20Buck&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Ian Buck" />
                  <figcaption>
                    <strong>Ian Buck</strong>
                    <em>VP, hyperscale and HPC</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Tim%20Teter&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Tim Teter" />
                  <figcaption>
                    <strong>Tim Teter</strong>
                    <em>EVP, general counsel</em>
                  </figcaption>
                </figure>
              </div>
            </section>

            <dl className="wlist-facts">
              <div><dt>HQ</dt><dd>Santa Clara</dd></div>
              <div><dt>Country</dt><dd>United States</dd></div>
              <div><dt>Founded</dt><dd>1993</dd></div>
              <div><dt>People</dt><dd>29,600</dd></div>
              <div><dt>IPO</dt><dd>1999</dd></div>
              <div><dt>Fiscal year</dt><dd>Late January</dd></div>
              <div><dt>Next print</dt><dd>Nov 19</dd></div>
              <div><dt>Sector</dt><dd>Semiconductors</dd></div>
              <div><dt>Dividend</dt><dd>Token</dd></div>
              <div><dt>Index</dt><dd>NDX, S&amp;P 500</dd></div>
              <div><dt>Customers</dt><dd>Hyperscalers</dd></div>
              <div><dt>Listing</dt><dd>NASDAQ</dd></div>
            </dl>

            <div className="wlist-metrics">
              <div><span>Market cap</span><strong>$5.58t</strong></div>
              <div><span>EV / sales</span><strong>27.1x</strong></div>
              <div><span>Price to sales</span><strong>28.4x</strong></div>
              <div><span>FCF yield</span><strong>2.1%</strong></div>
              <div><span>Gross margin</span><strong>75%</strong></div>
              <div><span>Op. margin</span><strong>61%</strong></div>
              <div><span>Revenue</span><strong>$165b</strong></div>
              <div><span>FCF</span><strong>$72b</strong></div>
            </div>

            <section className="wlist-take">
              <img className="wlist-take-logo" src="/assets/mindsearch-logo.svg" alt="" />
              <div>
                <h3>AI take</h3>
                <p>The franchise is real; the queue is the risk. As long as capex stays with the same four or five buyers, Nvidia keeps the high-confidence print. The multiple already pays for that. A pause in rack deployments, or a serious alternative stack, is what breaks the story — not a single quarter of sequential noise.</p>
              </div>
            </section>
          </article>

          <article className="wlist-research wlist-research-aapl">
            <header className="wlist-res-head">
              <img className="wlist-res-logo" src="/assets/logos/AAPL.svg" alt="" />
              <div>
                <h2>Apple</h2>
                <p>AAPL · NASDAQ</p>
              </div>
              <a href="/finance/AAPL">Open</a>
            </header>

            <section className="wlist-about">
              <h3>Company</h3>
              <p>Apple sells the iPhone and then rents the rest of the house — Services, wearables, and a locked-in developer economy. Hardware still sets the year; the installed base is what keeps Services from behaving like a normal software company. China and the upgrade cycle remain the two variables that move the print.</p>
            </section>

            <section className="wlist-mgmt">
              <h3>Management</h3>
              <div className="wlist-team">
                <figure className="wlist-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Tim%20Cook%20(2017%2C%20cropped).jpg?width=400" alt="Tim Cook" />
                  <figcaption>
                    <strong>Tim Cook</strong>
                    <em>CEO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://www.apple.com/leadership/images/overview/Kevan_Parekh.jpg.large_2x.jpg" alt="Kevan Parekh" />
                  <figcaption>
                    <strong>Kevan Parekh</strong>
                    <em>CFO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://www.apple.com/leadership/images/overview/Sabih_Khan_image.jpg.large_2x.jpg" alt="Sabih Khan" />
                  <figcaption>
                    <strong>Sabih Khan</strong>
                    <em>SVP, operations</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://www.apple.com/leadership/images/overview/srvpsoftwareengineering_image.jpg.large_2x.jpg" alt="Craig Federighi" />
                  <figcaption>
                    <strong>Craig Federighi</strong>
                    <em>SVP, software engineering</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://www.apple.com/leadership/images/overview/John_Ternus.jpg.large_2x.jpg" alt="John Ternus" />
                  <figcaption>
                    <strong>John Ternus</strong>
                    <em>SVP, hardware engineering</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://www.apple.com/leadership/images/overview/srvphardwaretech_image.jpg.large_2x.jpg" alt="Johny Srouji" />
                  <figcaption>
                    <strong>Johny Srouji</strong>
                    <em>SVP, hardware technologies</em>
                  </figcaption>
                </figure>
              </div>
            </section>

            <dl className="wlist-facts">
              <div><dt>HQ</dt><dd>Cupertino</dd></div>
              <div><dt>Country</dt><dd>United States</dd></div>
              <div><dt>Founded</dt><dd>1976</dd></div>
              <div><dt>People</dt><dd>164,000</dd></div>
              <div><dt>IPO</dt><dd>1980</dd></div>
              <div><dt>Fiscal year</dt><dd>Late September</dd></div>
              <div><dt>Next print</dt><dd>Oct 30</dd></div>
              <div><dt>Sector</dt><dd>Consumer</dd></div>
              <div><dt>Dividend</dt><dd>Yes</dd></div>
              <div><dt>Index</dt><dd>NDX, S&amp;P 500</dd></div>
              <div><dt>Customers</dt><dd>Consumers</dd></div>
              <div><dt>Listing</dt><dd>NASDAQ</dd></div>
            </dl>

            <div className="wlist-metrics">
              <div><span>Market cap</span><strong>$4.70t</strong></div>
              <div><span>EV / sales</span><strong>8.8x</strong></div>
              <div><span>Price to sales</span><strong>9.1x</strong></div>
              <div><span>FCF yield</span><strong>3.4%</strong></div>
              <div><span>Gross margin</span><strong>47%</strong></div>
              <div><span>Op. margin</span><strong>32%</strong></div>
              <div><span>Revenue</span><strong>$416b</strong></div>
              <div><span>FCF</span><strong>$109b</strong></div>
            </div>

            <section className="wlist-take">
              <img className="wlist-take-logo" src="/assets/mindsearch-logo.svg" alt="" />
              <div>
                <h3>AI take</h3>
                <p>This is a compounding machine with a consumer-cycle wrapper. Services justify a premium; they do not make the company cycle-proof. Apple Intelligence has to become a reason to stay, not a slide. Until that shows up in mix, treat the name as a high-quality compounder that still needs a phone year.</p>
              </div>
            </section>
          </article>

          <article className="wlist-research wlist-research-msft">
            <header className="wlist-res-head">
              <img className="wlist-res-logo" src="/assets/logos/MSFT.svg" alt="" />
              <div>
                <h2>Microsoft</h2>
                <p>MSFT · NASDAQ</p>
              </div>
              <a href="/finance/MSFT">Open</a>
            </header>

            <section className="wlist-about">
              <h3>Company</h3>
              <p>Microsoft is Azure, Office, and a distribution engine for AI across the enterprise. Copilot rides an install base that already pays for seats. The capex is the bill for staying in the cloud race; the question is whether AI attach covers it without starving the rest of Intelligent Cloud.</p>
            </section>

            <section className="wlist-mgmt">
              <h3>Management</h3>
              <div className="wlist-team">
                <figure className="wlist-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Satya%20Nadella.jpg?width=400" alt="Satya Nadella" />
                  <figcaption>
                    <strong>Satya Nadella</strong>
                    <em>Chairman and CEO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Amy%20Hood.jpg?width=400" alt="Amy Hood" />
                  <figcaption>
                    <strong>Amy Hood</strong>
                    <em>EVP and CFO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Brad%20Smith%20-%20Microsoft%20-%2001.jpg?width=400" alt="Brad Smith" />
                  <figcaption>
                    <strong>Brad Smith</strong>
                    <em>Vice chair and president</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/MIX08%20Scott%20Guthrie%20(2313147236).jpg?width=400" alt="Scott Guthrie" />
                  <figcaption>
                    <strong>Scott Guthrie</strong>
                    <em>EVP, cloud and AI</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Judson-Althoff-Microsoft.jpg?width=400" alt="Judson Althoff" />
                  <figcaption>
                    <strong>Judson Althoff</strong>
                    <em>EVP, chief commercial officer</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Mustafa%20Suleyman%20photo%20(cropped).jpg?width=400" alt="Mustafa Suleyman" />
                  <figcaption>
                    <strong>Mustafa Suleyman</strong>
                    <em>EVP, Microsoft AI</em>
                  </figcaption>
                </figure>
              </div>
            </section>

            <dl className="wlist-facts">
              <div><dt>HQ</dt><dd>Redmond</dd></div>
              <div><dt>Country</dt><dd>United States</dd></div>
              <div><dt>Founded</dt><dd>1975</dd></div>
              <div><dt>People</dt><dd>228,000</dd></div>
              <div><dt>IPO</dt><dd>1986</dd></div>
              <div><dt>Fiscal year</dt><dd>June</dd></div>
              <div><dt>Next print</dt><dd>Oct 22</dd></div>
              <div><dt>Sector</dt><dd>Software</dd></div>
              <div><dt>Dividend</dt><dd>Yes</dd></div>
              <div><dt>Index</dt><dd>NDX, S&amp;P 500</dd></div>
              <div><dt>Customers</dt><dd>Enterprise</dd></div>
              <div><dt>Listing</dt><dd>NASDAQ</dd></div>
            </dl>

            <div className="wlist-metrics">
              <div><span>Market cap</span><strong>$3.71t</strong></div>
              <div><span>EV / sales</span><strong>13.2x</strong></div>
              <div><span>Price to sales</span><strong>13.6x</strong></div>
              <div><span>FCF yield</span><strong>2.8%</strong></div>
              <div><span>Gross margin</span><strong>69%</strong></div>
              <div><span>Op. margin</span><strong>45%</strong></div>
              <div><span>Revenue</span><strong>$282b</strong></div>
              <div><span>FCF</span><strong>$74b</strong></div>
            </div>

            <section className="wlist-take">
              <img className="wlist-take-logo" src="/assets/mindsearch-logo.svg" alt="" />
              <div>
                <h3>AI take</h3>
                <p>Nadella’s Microsoft is still the cleanest way to own enterprise AI without betting the farm on one chip vendor. Azure growth is the tape; Copilot conversion is the proof. If spend stays this high and attach stays slow, the multiple compresses. If attach lands, this remains the core holding.</p>
              </div>
            </section>
          </article>

          <article className="wlist-research wlist-research-amd">
            <header className="wlist-res-head">
              <img className="wlist-res-logo" src="/assets/logos/AMD.svg" alt="" />
              <div>
                <h2>AMD</h2>
                <p>AMD · NASDAQ</p>
              </div>
              <a href="/finance/AMD">Open</a>
            </header>

            <section className="wlist-about">
              <h3>Company</h3>
              <p>AMD sells CPUs into PCs and servers and is pushing GPUs into the AI rack. The CPU franchise is the ballast; MI300 and what follows are the option. Software and supply — not just silicon — decide whether share versus Nvidia is a trade or a business.</p>
            </section>

            <section className="wlist-mgmt">
              <h3>Management</h3>
              <div className="wlist-team">
                <figure className="wlist-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Lisa%20T.%20Su%2C%20PCAST%20Member%20(cropped).jpg?width=400" alt="Lisa Su" />
                  <figcaption>
                    <strong>Lisa Su</strong>
                    <em>Chair and CEO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://www.amd.com/content/dam/amd/en/images/photography/corporate/jean-hu-executive-photo.jpg" alt="Jean Hu" />
                  <figcaption>
                    <strong>Jean Hu</strong>
                    <em>EVP and CFO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://www.amd.com/content/dam/amd/en/images/photography/corporate/mark-papermaster-executive-photo.jpg" alt="Mark Papermaster" />
                  <figcaption>
                    <strong>Mark Papermaster</strong>
                    <em>EVP and CTO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://www.amd.com/content/dam/amd/en/images/photography/corporate/forrest-norrod-executive-photo.jpg" alt="Forrest Norrod" />
                  <figcaption>
                    <strong>Forrest Norrod</strong>
                    <em>EVP, data center solutions</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://www.amd.com/content/dam/amd/en/images/photography/corporate/jack-huynh-executive-photo.jpg" alt="Jack Huynh" />
                  <figcaption>
                    <strong>Jack Huynh</strong>
                    <em>SVP, computing and graphics</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://www.amd.com/content/dam/amd/en/images/photography/corporate/phil-guido-executive-photo.jpg" alt="Phil Guido" />
                  <figcaption>
                    <strong>Phil Guido</strong>
                    <em>EVP, chief commercial officer</em>
                  </figcaption>
                </figure>
              </div>
            </section>

            <dl className="wlist-facts">
              <div><dt>HQ</dt><dd>Santa Clara</dd></div>
              <div><dt>Country</dt><dd>United States</dd></div>
              <div><dt>Founded</dt><dd>1969</dd></div>
              <div><dt>People</dt><dd>26,000</dd></div>
              <div><dt>IPO</dt><dd>1972</dd></div>
              <div><dt>Fiscal year</dt><dd>Late December</dd></div>
              <div><dt>Next print</dt><dd>Oct 28</dd></div>
              <div><dt>Sector</dt><dd>Semiconductors</dd></div>
              <div><dt>Dividend</dt><dd>None</dd></div>
              <div><dt>Index</dt><dd>NDX</dd></div>
              <div><dt>Customers</dt><dd>OEMs, cloud</dd></div>
              <div><dt>Listing</dt><dd>NASDAQ</dd></div>
            </dl>

            <div className="wlist-metrics">
              <div><span>Market cap</span><strong>$779b</strong></div>
              <div><span>EV / sales</span><strong>10.8x</strong></div>
              <div><span>Price to sales</span><strong>11.2x</strong></div>
              <div><span>FCF yield</span><strong>1.4%</strong></div>
              <div><span>Gross margin</span><strong>54%</strong></div>
              <div><span>Op. margin</span><strong>10%</strong></div>
              <div><span>Revenue</span><strong>$26b</strong></div>
              <div><span>FCF</span><strong>$2.4b</strong></div>
            </div>

            <section className="wlist-take">
              <img className="wlist-take-logo" src="/assets/mindsearch-logo.svg" alt="" />
              <div>
                <h3>AI take</h3>
                <p>Su has already shown she can take share in CPUs. The AI chapter is harder: customers want a second source, but they also want CUDA-like gravity. Treat AMD as the hedge, not the replacement. The stock works if data-center GPU revenue compounds without the PC book falling out.</p>
              </div>
            </section>
          </article>

          <article className="wlist-research wlist-research-tsla">
            <header className="wlist-res-head">
              <img className="wlist-res-logo" src="/assets/logos/TSLA.svg" alt="" />
              <div>
                <h2>Tesla</h2>
                <p>TSLA · NASDAQ</p>
              </div>
              <a href="/finance/TSLA">Open</a>
            </header>

            <section className="wlist-about">
              <h3>Company</h3>
              <p>Tesla still makes most of its money selling cars. Energy storage is the quieter growth line. Autonomy and robotaxi are the story the multiple is actually paying for. Volume, mix, and price in the core auto book decide whether the next print looks like a car company or an option on software.</p>
            </section>

            <section className="wlist-mgmt">
              <h3>Management</h3>
              <div className="wlist-team">
                <figure className="wlist-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Elon%20Musk%20Royal%20Society%20crop.jpg?width=400" alt="Elon Musk" />
                  <figcaption>
                    <strong>Elon Musk</strong>
                    <em>CEO and product architect</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Vaibhav%20Taneja&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Vaibhav Taneja" />
                  <figcaption>
                    <strong>Vaibhav Taneja</strong>
                    <em>CFO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Tom%20Zhu&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Tom Zhu" />
                  <figcaption>
                    <strong>Tom Zhu</strong>
                    <em>SVP, automotive</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Lars%20Moravy&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Lars Moravy" />
                  <figcaption>
                    <strong>Lars Moravy</strong>
                    <em>VP, vehicle engineering</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Ashok%20Elluswamy&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Ashok Elluswamy" />
                  <figcaption>
                    <strong>Ashok Elluswamy</strong>
                    <em>VP, Autopilot</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Franz%20von%20Holzhausen%20(cropped).jpg?width=400" alt="Franz von Holzhausen" />
                  <figcaption>
                    <strong>Franz von Holzhausen</strong>
                    <em>Chief designer</em>
                  </figcaption>
                </figure>
              </div>
            </section>

            <dl className="wlist-facts">
              <div><dt>HQ</dt><dd>Austin</dd></div>
              <div><dt>Country</dt><dd>United States</dd></div>
              <div><dt>Founded</dt><dd>2003</dd></div>
              <div><dt>People</dt><dd>140,000</dd></div>
              <div><dt>IPO</dt><dd>2010</dd></div>
              <div><dt>Fiscal year</dt><dd>December</dd></div>
              <div><dt>Next print</dt><dd>Oct 22</dd></div>
              <div><dt>Sector</dt><dd>Consumer</dd></div>
              <div><dt>Dividend</dt><dd>None</dd></div>
              <div><dt>Index</dt><dd>NDX, S&amp;P 500</dd></div>
              <div><dt>Customers</dt><dd>Retail, fleet</dd></div>
              <div><dt>Listing</dt><dd>NASDAQ</dd></div>
            </dl>

            <div className="wlist-metrics">
              <div><span>Market cap</span><strong>$1.40t</strong></div>
              <div><span>EV / sales</span><strong>14.2x</strong></div>
              <div><span>Price to sales</span><strong>14.8x</strong></div>
              <div><span>FCF yield</span><strong>1.1%</strong></div>
              <div><span>Gross margin</span><strong>18%</strong></div>
              <div><span>Op. margin</span><strong>8%</strong></div>
              <div><span>Revenue</span><strong>$95b</strong></div>
              <div><span>FCF</span><strong>$6.2b</strong></div>
            </div>

            <section className="wlist-take">
              <img className="wlist-take-logo" src="/assets/mindsearch-logo.svg" alt="" />
              <div>
                <h3>AI take</h3>
                <p>The operating company and the narrative are two different assets. Auto margins have to hold or the option expires. Musk remains both the product engine and the governance discount. Fine as a satellite; a poor core if you need the cash flows to match the story this year.</p>
              </div>
            </section>
          </article>

          <article className="wlist-research wlist-research-pltr">
            <header className="wlist-res-head">
              <img className="wlist-res-logo" src="/assets/logos/PLTR.svg" alt="" />
              <div>
                <h2>Palantir</h2>
                <p>PLTR · NASDAQ</p>
              </div>
              <a href="/finance/PLTR">Open</a>
            </header>

            <section className="wlist-about">
              <h3>Company</h3>
              <p>Palantir builds platforms — Gotham for government, Foundry and AIP for commercial — that sit on messy data and try to make it operational. The US commercial book is the new engine; government is the original one. The revenue base is still small next to the multiple.</p>
            </section>

            <section className="wlist-mgmt">
              <h3>Management</h3>
              <div className="wlist-team">
                <figure className="wlist-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Alex%20Karp%20attends%20AI%20Summit%20(53302457013)%20(cropped).jpg?width=400" alt="Alex Karp" />
                  <figcaption>
                    <strong>Alex Karp</strong>
                    <em>Co-founder and CEO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=David%20Glazer&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="David Glazer" />
                  <figcaption>
                    <strong>David Glazer</strong>
                    <em>CFO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Shyam%20Sankar&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Shyam Sankar" />
                  <figcaption>
                    <strong>Shyam Sankar</strong>
                    <em>President and CTO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Stephen%20Cohen&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Stephen Cohen" />
                  <figcaption>
                    <strong>Stephen Cohen</strong>
                    <em>Co-founder and president</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Ryan%20Taylor&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Ryan Taylor" />
                  <figcaption>
                    <strong>Ryan Taylor</strong>
                    <em>Chief revenue and legal officer</em>
                  </figcaption>
                </figure>
              </div>
            </section>

            <dl className="wlist-facts">
              <div><dt>HQ</dt><dd>Denver</dd></div>
              <div><dt>Country</dt><dd>United States</dd></div>
              <div><dt>Founded</dt><dd>2003</dd></div>
              <div><dt>People</dt><dd>3,700</dd></div>
              <div><dt>IPO</dt><dd>2020</dd></div>
              <div><dt>Fiscal year</dt><dd>December</dd></div>
              <div><dt>Next print</dt><dd>Nov 3</dd></div>
              <div><dt>Sector</dt><dd>Software</dd></div>
              <div><dt>Dividend</dt><dd>None</dd></div>
              <div><dt>Index</dt><dd>NDX</dd></div>
              <div><dt>Customers</dt><dd>Gov, commercial</dd></div>
              <div><dt>Listing</dt><dd>NASDAQ</dd></div>
            </dl>

            <div className="wlist-metrics">
              <div><span>Market cap</span><strong>$392b</strong></div>
              <div><span>EV / sales</span><strong>84x</strong></div>
              <div><span>Price to sales</span><strong>86x</strong></div>
              <div><span>FCF yield</span><strong>0.6%</strong></div>
              <div><span>Gross margin</span><strong>81%</strong></div>
              <div><span>Op. margin</span><strong>17%</strong></div>
              <div><span>Revenue</span><strong>$3.1b</strong></div>
              <div><span>FCF</span><strong>$1.4b</strong></div>
            </div>

            <section className="wlist-take">
              <img className="wlist-take-logo" src="/assets/mindsearch-logo.svg" alt="" />
              <div>
                <h3>AI take</h3>
                <p>AIP is the first product that made commercial look like a real motion, not a hope. The multiple assumes that motion becomes a large software company. Watch remaining deal value and bootstrapped AI deployments, not the rhetoric. This is a high-conviction, high-drawdown name — size it that way.</p>
              </div>
            </section>
          </article>

          <article className="wlist-research wlist-research-avgo">
            <header className="wlist-res-head">
              <img className="wlist-res-logo" src="/assets/logos/AVGO.svg" alt="" />
              <div>
                <h2>Broadcom</h2>
                <p>AVGO · NASDAQ</p>
              </div>
              <a href="/finance/AVGO">Open</a>
            </header>

            <section className="wlist-about">
              <h3>Company</h3>
              <p>Broadcom sells custom silicon and networking into the same AI build, then stacks infrastructure software — VMware included — on top. The semiconductor book is cyclical and concentrated. The software book is the ballast that lets Tan run the company like a cash machine.</p>
            </section>

            <section className="wlist-mgmt">
              <h3>Management</h3>
              <div className="wlist-team">
                <figure className="wlist-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Hock%20Tan%202022.png?width=400" alt="Hock Tan" />
                  <figcaption>
                    <strong>Hock Tan</strong>
                    <em>President and CEO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Kirsten%20Spears&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Kirsten Spears" />
                  <figcaption>
                    <strong>Kirsten Spears</strong>
                    <em>CFO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Charlie%20Kawwas&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Charlie Kawwas" />
                  <figcaption>
                    <strong>Charlie Kawwas</strong>
                    <em>President, semiconductor solutions</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Mark%20Brazeal&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Mark Brazeal" />
                  <figcaption>
                    <strong>Mark Brazeal</strong>
                    <em>Chief legal officer</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Ivy%20Pong&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Ivy Pong" />
                  <figcaption>
                    <strong>Ivy Pong</strong>
                    <em>VP, global taxation</em>
                  </figcaption>
                </figure>
              </div>
            </section>

            <dl className="wlist-facts">
              <div><dt>HQ</dt><dd>Palo Alto</dd></div>
              <div><dt>Country</dt><dd>United States</dd></div>
              <div><dt>Founded</dt><dd>1961</dd></div>
              <div><dt>People</dt><dd>37,000</dd></div>
              <div><dt>IPO</dt><dd>2009</dd></div>
              <div><dt>Fiscal year</dt><dd>Late October</dd></div>
              <div><dt>Next print</dt><dd>Dec 11</dd></div>
              <div><dt>Sector</dt><dd>Semiconductors</dd></div>
              <div><dt>Dividend</dt><dd>Yes</dd></div>
              <div><dt>Index</dt><dd>NDX, S&amp;P 500</dd></div>
              <div><dt>Customers</dt><dd>Hyperscalers</dd></div>
              <div><dt>Listing</dt><dd>NASDAQ</dd></div>
            </dl>

            <div className="wlist-metrics">
              <div><span>Market cap</span><strong>$1.64t</strong></div>
              <div><span>EV / sales</span><strong>26.8x</strong></div>
              <div><span>Price to sales</span><strong>26.1x</strong></div>
              <div><span>FCF yield</span><strong>2.4%</strong></div>
              <div><span>Gross margin</span><strong>64%</strong></div>
              <div><span>Op. margin</span><strong>40%</strong></div>
              <div><span>Revenue</span><strong>$57b</strong></div>
              <div><span>FCF</span><strong>$22b</strong></div>
            </div>

            <section className="wlist-take">
              <img className="wlist-take-logo" src="/assets/mindsearch-logo.svg" alt="" />
              <div>
                <h3>AI take</h3>
                <p>Tan is a capital allocator first. Custom XPUs and switching are the upside; VMware is the grind. Customer concentration is the standing risk, not the model. Own it if you want AI exposure with a management team that will not over-romance the cycle.</p>
              </div>
            </section>
          </article>

          <article className="wlist-research wlist-research-tsm">
            <header className="wlist-res-head">
              <img className="wlist-res-logo" src="/assets/logos/TSM.svg" alt="" />
              <div>
                <h2>TSMC</h2>
                <p>TSM · NYSE</p>
              </div>
              <a href="/finance/TSM">Open</a>
            </header>

            <section className="wlist-about">
              <h3>Company</h3>
              <p>TSMC is the foundry the industry uses when the node has to work. Nvidia, Apple, AMD, and the rest of the leading edge run through Hsinchu and the new sites abroad. Utilization on N3 and the ramp of N2 set the cycle. Geography and export rules sit under every forecast.</p>
            </section>

            <section className="wlist-mgmt">
              <h3>Management</h3>
              <div className="wlist-team">
                <figure className="wlist-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/10.27%20%E7%B8%BD%E7%B5%B1%E5%87%BA%E5%B8%AD%E3%80%8C%E7%AC%AC9%E5%B1%86%E5%B7%A5%E6%A5%AD%E6%8A%80%E8%A1%93%E7%A0%94%E7%A9%B6%E9%99%A2%E9%99%A2%E5%A3%AB%E6%8E%88%E8%AD%89%E5%85%B8%E7%A6%AE%E3%80%8D%20(50536154856)%20(cropped).jpg?width=400" alt="C.C. Wei" />
                  <figcaption>
                    <strong>C.C. Wei</strong>
                    <em>Chairman and CEO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Wendell%20Huang&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Wendell Huang" />
                  <figcaption>
                    <strong>Wendell Huang</strong>
                    <em>VP and CFO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=YJ%20Mii&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Y.J. Mii" />
                  <figcaption>
                    <strong>Y.J. Mii</strong>
                    <em>EVP and Co-COO, R&amp;D</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=YP%20Chin&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Y.P. Chin" />
                  <figcaption>
                    <strong>Y.P. Chin</strong>
                    <em>EVP and Co-COO, operations</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Cliff%20Hou&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Cliff Hou" />
                  <figcaption>
                    <strong>Cliff Hou</strong>
                    <em>SVP, Europe and Asia operations</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Sylvia%20Fang&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Sylvia Fang" />
                  <figcaption>
                    <strong>Sylvia Fang</strong>
                    <em>VP, general counsel</em>
                  </figcaption>
                </figure>
              </div>
            </section>

            <dl className="wlist-facts">
              <div><dt>HQ</dt><dd>Hsinchu</dd></div>
              <div><dt>Country</dt><dd>Taiwan</dd></div>
              <div><dt>Founded</dt><dd>1987</dd></div>
              <div><dt>People</dt><dd>76,000</dd></div>
              <div><dt>IPO</dt><dd>1994</dd></div>
              <div><dt>Fiscal year</dt><dd>December</dd></div>
              <div><dt>Next print</dt><dd>Oct 16</dd></div>
              <div><dt>Sector</dt><dd>Semiconductors</dd></div>
              <div><dt>Dividend</dt><dd>Yes</dd></div>
              <div><dt>Index</dt><dd>NYSE ADR</dd></div>
              <div><dt>Customers</dt><dd>Nvidia, Apple</dd></div>
              <div><dt>Listing</dt><dd>NYSE</dd></div>
            </dl>

            <div className="wlist-metrics">
              <div><span>Market cap</span><strong>$1.21t</strong></div>
              <div><span>EV / sales</span><strong>10.2x</strong></div>
              <div><span>Price to sales</span><strong>10.8x</strong></div>
              <div><span>FCF yield</span><strong>3.2%</strong></div>
              <div><span>Gross margin</span><strong>57%</strong></div>
              <div><span>Op. margin</span><strong>46%</strong></div>
              <div><span>Revenue</span><strong>$90b</strong></div>
              <div><span>FCF</span><strong>$30b</strong></div>
            </div>

            <section className="wlist-take">
              <img className="wlist-take-logo" src="/assets/mindsearch-logo.svg" alt="" />
              <div>
                <h3>AI take</h3>
                <p>This is still the cleanest way to own the manufacturing bottleneck. Capex is the tell on how long the AI build runs; politics is the discount that never fully leaves. Wei’s shop executes. The multiple is reasonable if you can live with Taiwan as a permanent footnote.</p>
              </div>
            </section>
          </article>

          <article className="wlist-research wlist-research-asml">
            <header className="wlist-res-head">
              <img className="wlist-res-logo" src="/assets/logos/ASML.svg" alt="" />
              <div>
                <h2>ASML</h2>
                <p>ASML · NASDAQ</p>
              </div>
              <a href="/finance/ASML">Open</a>
            </header>

            <section className="wlist-about">
              <h3>Company</h3>
              <p>ASML makes the lithography tools — EUV and High-NA — that every leading-edge fab has to buy. The install base turns into a service annuity. The backlog stretches years. China licensing and the pace of High-NA adoption are what bend the slope, not a rival at the same node.</p>
            </section>

            <section className="wlist-mgmt">
              <h3>Management</h3>
              <div className="wlist-team">
                <figure className="wlist-person">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Ursula%20von%20der%20Leyen%20%26%20Christophe%20Fouquet%20-%202025.jpg?width=400" alt="Christophe Fouquet" />
                  <figcaption>
                    <strong>Christophe Fouquet</strong>
                    <em>President and CEO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Roger%20Dassen&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Roger Dassen" />
                  <figcaption>
                    <strong>Roger Dassen</strong>
                    <em>CFO</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Wayne%20Allan&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Wayne Allan" />
                  <figcaption>
                    <strong>Wayne Allan</strong>
                    <em>EVP, customer supply chain</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Jim%20Koonmen&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Jim Koonmen" />
                  <figcaption>
                    <strong>Jim Koonmen</strong>
                    <em>EVP, business</em>
                  </figcaption>
                </figure>
                <figure className="wlist-person">
                  <img src="https://ui-avatars.com/api/?name=Ron%20Kool&size=256&background=3d5a70&color=f4f7f6&bold=true&font-size=0.4" alt="Ron Kool" />
                  <figcaption>
                    <strong>Ron Kool</strong>
                    <em>CVP, applications</em>
                  </figcaption>
                </figure>
              </div>
            </section>

            <dl className="wlist-facts">
              <div><dt>HQ</dt><dd>Veldhoven</dd></div>
              <div><dt>Country</dt><dd>Netherlands</dd></div>
              <div><dt>Founded</dt><dd>1984</dd></div>
              <div><dt>People</dt><dd>42,000</dd></div>
              <div><dt>IPO</dt><dd>1995</dd></div>
              <div><dt>Fiscal year</dt><dd>December</dd></div>
              <div><dt>Next print</dt><dd>Oct 15</dd></div>
              <div><dt>Sector</dt><dd>Equipment</dd></div>
              <div><dt>Dividend</dt><dd>Yes</dd></div>
              <div><dt>Index</dt><dd>AEX, NASDAQ</dd></div>
              <div><dt>Customers</dt><dd>TSMC, Samsung</dd></div>
              <div><dt>Listing</dt><dd>NASDAQ</dd></div>
            </dl>

            <div className="wlist-metrics">
              <div><span>Market cap</span><strong>$310b</strong></div>
              <div><span>EV / sales</span><strong>9.1x</strong></div>
              <div><span>Price to sales</span><strong>9.4x</strong></div>
              <div><span>FCF yield</span><strong>2.0%</strong></div>
              <div><span>Gross margin</span><strong>51%</strong></div>
              <div><span>Op. margin</span><strong>32%</strong></div>
              <div><span>Revenue</span><strong>$32b</strong></div>
              <div><span>FCF</span><strong>$7.8b</strong></div>
            </div>

            <section className="wlist-take">
              <img className="wlist-take-logo" src="/assets/mindsearch-logo.svg" alt="" />
              <div>
                <h3>AI take</h3>
                <p>A monopoly with a new CEO is still a monopoly. Fouquet inherits a machine that works; his job is not to break the cadence or the China dance. This is infrastructure for the AI build, one step further back than TSMC. Own it for the bottleneck, not for a quarter of bookings.</p>
              </div>
            </section>
          </article>
        </aside>
      </div>
    </div>
  )
}
