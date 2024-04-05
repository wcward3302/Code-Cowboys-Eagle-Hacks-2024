"use client"
import ChatBox from "../chatbox/page";

export default function ChatButton() {

    function togglePopup() {
      var popup = document.getElementById("chatBox") as HTMLDivElement;
  
      if (popup.style.display === "none") {
        popup.style.display = "block";
      } else {
        popup.style.display = "none";
      }
    }
    return (
      <main >
        <button className="showChat bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={togglePopup}>Open Chat</button>
        <div id="chatBox">
          <ChatBox/>
        </div>
      </main>
    );
}