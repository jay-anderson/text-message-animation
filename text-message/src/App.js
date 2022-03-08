import logo from './logo.svg';
import './App.css';
import './styles.css';

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);


function App() {
  return (
      <div className={"container"}>
        <body>
        <p className="send reveal">Hey bear! What's up</p>
        <p className="receive reveal">Nothing much..</p>
        <p className="send reveal">Does this format look good?</p>
        <p className="receive reveal">Haven't added the animations but it shouldn't take much.</p>
        <p className="receive reveal">I think this code should be importable too.</p>
        <p className="send reveal">Yeah it's pure CSS &amp; HTML</p>
        <p className="receive reveal">Even better? You can make this as long as you want. Like a whole ass paragraph.
          Friends, Romans, countrymen, lend me you ears...</p>
        <p className="send reveal">Hey bear! What's up</p>
        <p className="receive reveal">Nothing much..</p>
        <p className="send reveal">Does this format look good?</p>
        <p className="receive reveal">google.com</p>
        <p className="send reveal">Does this format look good?</p>
        <p className="receive reveal">Haven't added the animations but it shouldn't take much.</p>
        <p className="send reveal">Does this format look good?</p>
        <p className="receive reveal">I think this code should be importable too.</p>
        <p className="send reveal">Yeah it's pure CSS &amp; HTML</p>
        </body>
      </div>
  );
}

export default App;
