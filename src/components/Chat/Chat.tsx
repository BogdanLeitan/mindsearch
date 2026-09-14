import "./Chat.css"

function Chat() {
  return (
    <div className="ask-area">
      <input type="radio" name="model" id="m1" className="model-radio" defaultChecked />
      <input type="radio" name="model" id="m2" className="model-radio" />
      <input type="radio" name="model" id="m3" className="model-radio" />
      <input type="radio" name="model" id="m4" className="model-radio" />
      <input type="radio" name="model" id="m5" className="model-radio" />
      <input type="radio" name="model" id="m6" className="model-radio" />
      <input type="radio" name="model" id="m7" className="model-radio" />
      <input type="radio" name="model" id="m8" className="model-radio" />
      <input type="radio" name="mode" id="mode-search" className="model-radio" defaultChecked />
      <input type="radio" name="mode" id="mode-deep" className="model-radio" />
      <input type="file" id="ask-files" className="ask-file" multiple accept=".pdf,.csv,.xlsx,.xls,.txt,.md,.png,.jpg,.jpeg,.webp" />

      <div className="ask-box">
        <textarea className="ask-input" placeholder="Ask anything..."></textarea>

        <div className="ask-controls">
          <div className="ask-left">
            <label htmlFor="ask-files" className="round-btn" title="Upload files">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            </label>
            <div className="ask-switch">
              <i className="switch-thumb"></i>
              <label htmlFor="mode-search" className="switch-btn switch-search">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.2" y2="16.2" /></svg>
                Search
              </label>
              <label htmlFor="mode-deep" className="switch-btn switch-deep">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="12" rx="3" /><path d="M8 21h8" /></svg>
                Deep Search
              </label>
            </div>
          </div>

          <div className="ask-right">
            <div className="model-dd">
              <input type="checkbox" id="model-toggle" className="dd-toggle" />
              <label htmlFor="model-toggle" className="model-btn">
                <span className="model-current"></span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
              </label>
              <label htmlFor="model-toggle" className="dd-overlay"></label>
              <div className="dd-menu drop-down">
                <div className="dd-head">Model</div>
                <label htmlFor="m1" className="dd-item">
                  <span className="dd-left"><img className="model-logo" src="/assets/logo.png" alt="" />Chartum One</span>
                  <span className="dd-badge">Default</span>
                </label>
                <label htmlFor="m2" className="dd-item">
                  <span className="dd-left"><span className="model-dot d-openai"></span>GPT-5.6 Terra</span>
                </label>
                <label htmlFor="m3" className="dd-item">
                  <span className="dd-left"><span className="model-dot d-openai"></span>GPT-5.6 Sol</span>
                  <span className="dd-badge">Max</span>
                </label>
                <label htmlFor="m4" className="dd-item">
                  <span className="dd-left"><span className="model-dot d-gemini"></span>Gemini 3.8 Flash</span>
                </label>
                <label htmlFor="m5" className="dd-item">
                  <span className="dd-left"><span className="model-dot d-claude"></span>Claude Sonnet 5</span>
                </label>
                <label htmlFor="m6" className="dd-item">
                  <span className="dd-left"><span className="model-dot d-claude"></span>Claude Opus 5</span>
                  <span className="dd-badge">Max</span>
                </label>
                <label htmlFor="m7" className="dd-item">
                  <span className="dd-left"><span className="model-dot d-kimi"></span>Kimi K3</span>
                </label>
                <label htmlFor="m8" className="dd-item">
                  <span className="dd-left"><span className="model-dot d-grok"></span>Grok 4.6</span>
                </label>
              </div>
            </div>

            <button className="round-btn" title="Dictate">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /></svg>
            </button>
            <button className="send-btn" title="Send">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5" /><path d="M5 12l7-7 7 7" /></svg>
            </button>
          </div>
        </div>
      </div>

      <div className="ask-promos">
        <label htmlFor="mode-search" className="ask-promo promo-search">
          <strong>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.2" y2="16.2" /></svg>
            Search anything
          </strong>
          <span>Get fast and accurate answers from the most trusted sources.</span>
        </label>
        <label htmlFor="mode-deep" className="ask-promo promo-deep">
          <strong>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="12" rx="3" /><path d="M8 21h8" /></svg>
            Deep Search
            <em>NEW</em>
          </strong>
          <span>A deeper pass across filings, transcripts, and the web.</span>
        </label>
      </div>
    </div>
  )
}

export default Chat
