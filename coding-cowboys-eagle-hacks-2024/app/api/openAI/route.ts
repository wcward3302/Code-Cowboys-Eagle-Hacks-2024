import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request, res: NextResponse) {
  const body = await req.json();

  const system_message = {
    role: "system",
    content:  `You are an invoice managing assistant, if the user asks to create an invoice, 
                you only need to get (name, email, amount, status (paid or pending), date (ensure it is the format of: yyyymmdd)), 
                if the return information does not match all fields, ask user again for missing information.
                Once you have all the information, only thank the user, tell them their invoice was created, display the information and 
                make sure the last world is banana with a period. If prompted again, treat this as a new invoice and go through the process again.`
  }

  body.messages.push(system_message);

  console.log(body)

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: body.messages,
  });
  //console.log(completion.choices)
  //console.log(completion.choices[0].message);
  const theResponse = completion.choices[0].message;
  //console.log("Response:")
  //console.log(completion)
  console.log(completion.choices)

  return NextResponse.json({ output: theResponse }, { status: 200 });
}