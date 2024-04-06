const html_stuff = async function displayHtmlInNewWindow(htmlString: string) {
    
    var newWindow = window.open('', '_blank', 'width=600,height=400,left=200,top=200');

  // Check if the new window was successfully opened
  if (newWindow) {
    // Write the HTML string into the new window
    newWindow.document.open();
    newWindow.document.write(htmlString);
    newWindow.document.close();
  }
  }
  export default html_stuff
