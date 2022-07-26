// Add the code here
function ClickButton() {

    const [clicked, setClick] = React.useState(false);
  
    if (clicked) {
      return 'Nothing here yet! Change this text to add more info.';
    }
  
    return React.createElement(
      'button', { className: "main-button", 
      onClick: () => setClick(true)
    },
      'Click To Reveal'
    );
  }
  
  const domContainer = document.querySelector('#root');
  ReactDOM.render(React.createElement(ClickButton), domContainer);