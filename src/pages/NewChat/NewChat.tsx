import Chat from "../../components/Chat/Chat"
import ChatHeader from "../../components/Header/ChatHeader/ChatHeader"
import "./NewChat.css"

function NewChat() {
  return (
    <div className="nc-shell">
      <ChatHeader />
      <div className="content hc-content">
        <div className="hc-wrap">
          <section className="hc-top">
            <p className="hc-greet">Good evening, Bogdan</p>
            <h1 className="hc-title">What would you like to research?</h1>
            <Chat />
          </section>
        </div>
      </div>
    </div>
  )
}

export default NewChat
