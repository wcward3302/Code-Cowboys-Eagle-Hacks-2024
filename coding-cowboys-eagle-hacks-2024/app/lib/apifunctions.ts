import OpenAI from "openai"


const api_stuff = async function api_call_function(needs: any, message_string: any) {

    
    var html_example = `
    <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invoice</title>
  <style>
  body {
    font-family: Arial, sans-serif;
  }
  .invoice {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 2px solid #333;
  }
  .invoice header {
    text-align: center;
    margin-bottom: 20px;
  }
  .invoice h1 {
    font-size: 24px;
  }
  .invoice .details {
    margin-bottom: 20px;
  }
  .invoice .details p {
    margin: 5px 0;
  }
  .invoice table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  .invoice table th, .invoice table td {
    border: 1px solid #333;
    padding: 8px;
    text-align: left;
  }
  .invoice table th {
    background-color: #f2f2f2;
  }
  .invoice .total {
    font-size: 18px;
    text-align: right;
  }
  .invoice .status {
    text-align: center;
    margin-top: 20px;
  }
  </style>
  </head>
  <body>
  <div class="invoice">
    <header>
        <h1>Invoice</h1>
    </header>
    <div class="details">
        <p><strong>Name:</strong> [Name]</p>
        <p><strong>Email:</strong> [Email]</p>
        <p><strong>Amount:</strong> [$Amount]</p>
        <p><strong>Date:</strong> [mm/dd/yyyy]</p>
    </div>
    <table>
        <tr>
            <th>Description</th>
            <th>Amount</th>
        </tr>
        <tr>
            <td>Service provided</td>
            <td>[$Amount]</td>
        </tr>
    </table>
    <div class="total">
        <p><strong>Total:</strong> [$Total]</p>
    </div>
    <div class="status">
        <p><strong>Status:</strong> Pending</p>
    </div>
  </div>
  </body>
  </html>
    `
  
    var prompt: any
    if (needs == 'html'){
        prompt = `Generate the HTML for a fancy invoice for these values with no introduction or explanation, just html: ` + message_string + `. Additionally, ensure the invoice follows this format: ` + html_example
    }
    else if (needs == 'sql'){
        prompt = `create an SQL statement to insert the values of ` + message_string + ` assuming we alreaady have the table created, only output an sql statement with no introduction or explanation`
    }
  
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY2,
    });
  
    const messages = [
    {
        role: "assistant",
        content: prompt
        } as const,
    ];
  
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
      });
        return response.choices[0].message.content
      
  }
  export default api_stuff

