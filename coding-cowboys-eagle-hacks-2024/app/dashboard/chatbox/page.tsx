"use client";
import api_stuff from "@/app/lib/apifunctions";
import html_stuff from "@/app/lib/htmlfunctions";
import OpenAI from "openai";
import { useState } from "react";

export default function ChatBox() {
  const [theInput, setTheInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello, feel free to ask me to create an invoice or add, modify, or delete information!",
    },
  ]);
 
  // below this

  const callGetResponse = async () => {
    setIsLoading(true);
    let temp = messages;
    temp.push({ role: "user", content: theInput });
    setMessages(temp);
    setTheInput("");

    const response = await fetch("/api/openAI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ messages }),
    });

    const data = await response.json();
    const { output } = data;

    const Indexterm = output.content.indexOf("banana");
    output.content = Indexterm !== -1 ? output.content.substring(0, Indexterm) : output.content;

    if (Indexterm !== -1){
      var sql_insert = await api_stuff('sql', output.content)

      console.log(sql_insert)

      var html_content = await api_stuff('html', output.content)
      html_stuff(html_content.toString())
    }

    setMessages((prevMessages) => [...prevMessages, output]);
    setIsLoading(false);
  };

  const Submit = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      callGetResponse();
    }
  };
  

  return (
    <div>
    <div className="flex min-h-screen flex-col items-center justify-between px-24 py-5">
      <div className="flex  h-[35rem] w-[40rem] flex-col items-center bg-gray-600 rounded-xl">
        <div className=" h-full flex flex-col gap-2 overflow-y-auto py-8 px-3 w-full">
          {messages.map((e) => {
            return (
              <div
                key={e.content}
                className={`w-max max-w-[18rem] rounded-md px-4 py-3 h-min ${
                  e.role === "assistant"
                    ? "self-start  bg-gray-200 text-gray-800"
                    : "self-end  bg-gray-800 text-gray-50"
                } `}
              >
                {e.content}
              </div>
            );
          })}

          {isLoading ? (
            <div className="self-start  bg-gray-200 text-gray-800 w-max max-w-[18rem] rounded-md px-4 py-3 h-min">
              *thinking*
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="relative  w-[80%] bottom-4 flex justify-center">
          <textarea
            value={theInput}
            onChange={(event) => setTheInput(event.target.value)}
            className="w-[85%] h-10 px-3 py-2
          resize-none overflow-y-auto text-black bg-gray-300 rounded-l outline-none"
            onKeyDown={Submit}
          />
          <button
            onClick={callGetResponse}
            className="w-[15%] bg-blue-500 px-4 py-2 rounded-r"
          >
            send
          </button>
        </div>
      </div>

      <div></div>
    </div>
    </div>
  );
}