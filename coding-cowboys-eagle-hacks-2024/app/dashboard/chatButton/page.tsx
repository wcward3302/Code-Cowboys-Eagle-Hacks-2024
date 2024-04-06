"use client"
import ChatBox from "../chatbox/page";

export default function ChatButton() {

    function togglePopup() {
      var popup = document.getElementById("chatBox") as HTMLDivElement;
  
      if (popup.style.visibility === "visible") {
        popup.style.visibility = "hidden";
      } else {
        popup.style.visibility = "visible";
      }
    }
    return (
      <main >
        <button className="showChat bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={togglePopup}>Open Chat</button>
        <div id="chatBox" className="invisible">
          <ChatBox/>
        </div>
      </main>
    );
}