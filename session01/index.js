// Add the code here
function ClickButton() {

    const [clicked, setClick] = React.useState(false);
  
    if (clicked) {
      return 'Nothing here yet! Change this text to add more info.';
    }
  
    return React.createElement(
      'button', {
      style: {
        backgroundColor: "#3392e4",
        color: "#fff",
        border: "0",
        padding: "10px 20px",
        fontWeight: "bold",
        borderRadius: "5px",
        fontSize: "1.1em"
      },
      onClick: () => setClick(true)
    },
      'Click To Reveal'
    );
  }
  
  const domContainer = document.querySelector('#root');
  ReactDOM.render(React.createElement(ClickButton), domContainer);