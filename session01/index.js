// Add the code here
function ClickButton() {

    const [clicked, setClick] = React.useState(false);
  
    if (clicked) {
      return React.createElement("h1" , { className: "h1" }, 'Hello World!')
    }
  
    return React.createElement(
      'button', { className: "main-button", 
      onClick: () => {setClick(true), alert('Hello!')}
    },
      'Press here'
    );
  }
  
  const domContainer = document.querySelector('#root');
  ReactDOM.render(React.createElement(ClickButton), domContainer);