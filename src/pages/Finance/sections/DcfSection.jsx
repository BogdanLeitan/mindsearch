function DcfSection() {
  return (
    <div className="ip-wrap dcf-wrap">
      <div className="page-title-row">
        <div>
          <h1 className="page-title">DCF Calculator</h1>
          <p className="ip-sub">Project free cash flow per share, apply an exit yield, and discount back to today.</p>
        </div>
        <span className="symbol-chip">NVDA <span className="co">Nvidia Corp</span></span>
      </div>

      <div className="kpi-row">
        <div className="kpi">
          <span className="kpi-k">Fair value</span>
          <span className="kpi-v">$162.48</span>
          <span className="kpi-note">Per share, discounted</span>
        </div>
        <div className="kpi">
          <span className="kpi-k">Upside / downside</span>
          <span className="kpi-v">−29.0%</span>
          <span className="kpi-note">Versus $228.75</span>
        </div>
        <div className="kpi">
          <span className="kpi-k">Implied return</span>
          <span className="kpi-v">−6.6%</span>
          <span className="kpi-note">Annualized over 5 years</span>
        </div>
        <div className="kpi">
          <span className="kpi-k">Exit value</span>
          <span className="kpi-v">$246.50</span>
          <span className="kpi-note">Year 5 FCF / exit yield</span>
        </div>
      </div>

      <div className="ip-cols">
        <div className="ip-main">
          <section className="card ip-panel">
            <div className="ip-panel-head">
              <span className="ip-title">Projected FCF / share</span>
              <span className="ip-sub">$ per share</span>
            </div>
            <div className="dcf-bars">
              <div className="dcf-bar">
                <span className="bar-val">4.81</span>
                <i className="dcf-h61" />
                <span className="bar-lbl">Y1</span>
              </div>
              <div className="dcf-bar">
                <span className="bar-val">5.70</span>
                <i className="dcf-h72" />
                <span className="bar-lbl">Y2</span>
              </div>
              <div className="dcf-bar">
                <span className="bar-val">6.55</span>
                <i className="dcf-h83" />
                <span className="bar-lbl">Y3</span>
              </div>
              <div className="dcf-bar">
                <span className="bar-val">7.30</span>
                <i className="dcf-h93" />
                <span className="bar-lbl">Y4</span>
              </div>
              <div className="dcf-bar">
                <span className="bar-val">7.89</span>
                <i className="dcf-h100" />
                <span className="bar-lbl">Y5</span>
              </div>
            </div>
          </section>

          <section className="card ip-panel">
            <div className="ip-panel-head">
              <span className="ip-title">Sensitivity — fair value</span>
              <span className="ip-sub">Growth \ discount</span>
            </div>
            <table className="sens-table">
              <thead>
                <tr>
                  <th />
                  <th>10%</th>
                  <th>12%</th>
                  <th>14%</th>
                  <th>16%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>18%</th>
                  <td>$162</td>
                  <td>$154</td>
                  <td>$147</td>
                  <td>$139</td>
                </tr>
                <tr>
                  <th>22%</th>
                  <td>$171</td>
                  <td className="hot">$162</td>
                  <td>$154</td>
                  <td>$146</td>
                </tr>
                <tr>
                  <th>26%</th>
                  <td>$179</td>
                  <td>$171</td>
                  <td>$162</td>
                  <td>$154</td>
                </tr>
                <tr>
                  <th>30%</th>
                  <td>$188</td>
                  <td>$179</td>
                  <td>$170</td>
                  <td>$161</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <aside className="ip-rail">
          <section className="card ip-panel">
            <div className="ip-panel-head">
              <span className="ip-title">Assumptions</span>
            </div>
            <label className="field">
              <span className="fld-label">Current price</span>
              <span className="fld-input"><input type="number" defaultValue="228.75" /><span className="unit">USD</span></span>
            </label>
            <label className="field">
              <span className="fld-label">FCF / share (TTM)</span>
              <span className="fld-input"><input type="number" defaultValue="3.94" /><span className="unit">USD</span></span>
            </label>
            <label className="field">
              <span className="fld-label">Year 1 growth</span>
              <span className="fld-input"><input type="number" defaultValue="22" /><span className="unit">%</span></span>
            </label>
            <label className="field">
              <span className="fld-label">Terminal growth</span>
              <span className="fld-input"><input type="number" defaultValue="8" /><span className="unit">%</span></span>
            </label>
            <label className="field">
              <span className="fld-label">Projection years</span>
              <span className="fld-input"><input type="number" min={3} max={10} defaultValue="5" /><span className="unit">yrs</span></span>
            </label>
            <label className="field">
              <span className="fld-label">Exit FCF yield</span>
              <span className="fld-input"><input type="number" step="0.1" defaultValue="3.2" /><span className="unit">%</span></span>
            </label>
            <label className="field">
              <span className="fld-label">Desired return</span>
              <span className="fld-input"><input type="number" defaultValue="12" /><span className="unit">%</span></span>
            </label>
          </section>

          <section className="card ip-panel">
            <div className="ip-panel-head">
              <span className="ip-title">Model notes</span>
            </div>
            <div className="assump-row"><span className="k">SBC impact</span><span className="v">−18.2%</span></div>
            <div className="assump-row"><span className="k">Adj. FCF / share</span><span className="v">$3.23</span></div>
            <div className="assump-row"><span className="k">FCF yield</span><span className="v">1.72%</span></div>
            <div className="assump-row"><span className="k">Shares</span><span className="v">24.4B</span></div>
            <p className="dcf-note">Stock-based compensation is shown separately. The core model runs on FCF / share growth and the exit yield.</p>
          </section>
        </aside>
      </div>
    </div>
  )
}

export default DcfSection
