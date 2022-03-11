import logo from './logo.svg';
import './App.css';
import prayer from './prayer.jpg'
import respondingToGrace from './IMG_4506.jpg';
import timelyWords from './IMG_4553.jpg';
import beeLadyBug from './IMG_4554.jpg';
import comfort from './IMG_4652.jpg';
import theCrushedSpirit from './IMG_4791.jpg';
import simpleFormula from './IMG_4837.jpg';
import blindnessOfPride from './IMG_4913.jpg';
import lord from './IMG_4955.jpg';

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


function gentle() {
    var reveals = document.querySelectorAll(".gentle");

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
window.addEventListener("scroll", gentle);

function loud() {
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
window.addEventListener("scroll", loud);


function dots() {
    var reveals = document.querySelectorAll(".dots");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 155;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", dots);

//<p className={"receive dots reveal"}><div className={"dot"}/><div className={"dot"}/><div className={"dot"}/></p>


function App() {
  return (
      <div className={"container"}>
        <body>
        <p className="send reveal">Merely knowing the Bible doesn't give u salvation. Like the Pharisees in the New Testament- they knew the Bible, but didn't believe. They were too proud. We need to be humble before God.</p>
        <p className="send reveal">"The fear of the Lord is the beginning of wisdom" proverbs 9:10 </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p className="send reveal">Praying for a safe fun trip! Luv U!!</p>
        <br/>
        <p className="send reveal">where are U?</p>
        <p className="receive reveal gentle">Crystal Cove</p>
        <p className="send reveal">be careful when u are running</p>
        <br/>
        <br/>
        <br/>
        <p className="send reveal">Many blessings to our great dad! Happy Father's Day!</p>
        <p className="send reveal">It is also our 29th wedding anniversary today! Thank U for your faithfulness in our lives!</p>
        <br/>
        <br/>
        <p className="send reveal">Did u stay up to finish your paper? Do u submit your rationale too?</p>
        <p className="receive reveal">Yes</p>
        <br/>
        <br/>
        <br/>
        <p className="send reveal">Can u share your location?</p>
        <p className="receive reveal">uhhhh</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p className="send reveal">R u awake?</p>
        <p className="send reveal">We r home, so u can call me anytime today. Need to know what time I want to fly out of ny on 10/30</p>
        <br/>
        <br/>
        <br/>
        <p className="receive reveal">March 26 - Proverbs 4:23-26</p>
        <p className="receive reveal">linkkkk6</p>
        <p className="receive reveal">Great devotion on "guarding your heart" Luv, mommy &#60;3 &#60;3 </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p className="send reveal">Another attack in China Town in NY... Pls be careful, Steph. Don't go out at night</p>
        <p className="receive reveal">It's so scary</p>
        <br/>
        <br/>
        <br/>
        <p className="send reveal">There's still one seat left on SFO to JFK on Sunday night 10/31. Departing sfo 9:35pm n arriving at 5:55am JFK</p>
        <p className="send reveal">Instead of Monday night 11/1, do u want me to change?</p>
        <p className="send reveal">Unless u can submit your midterm paper om Monday, it will be hard to do your paper when u arrive there on Tuesday morning. Red eye flights are tiring.</p>
        <p className="receive reveal">ok maybe that is better</p>
        <p className="receive reveal">Is it more expensive?</p>
        <p className="receive reveal">Either way I will be ok</p>
        <p className="receive reveal">I have 24 hours and it is open note</p>
        <p className="send reveal">There is also Monday 12:45pm flight, arriving 9:30 Monday night.</p>
        <p className="receive reveal">Whatever is cheaper</p>
        <p className="receive reveal">Either way I will manage</p>
        <p className="send reveal">Is your exam due Tuesday midnight?</p>
        <p className="receive reveal">Not sure they haven't posted yet</p>
        <p className="send reveal">OK then do u want to stay for two nights, Leave on Sunday night? U will have all day Monday to nap n get ready for midterm</p>
        <p className="receive reveal">Yes but if it's more expensive it's fine</p>
        <p className="send reveal">We have enough airline credit. Whatever is best for u.</p>
        <p className="receive reveal">I think Sunday/ Monday would be best</p>
        <p className="send reveal">Ok I will change to Monday afternoon. Daddy thinks two nights is too short. Don't worry about the airfare!</p>
        <br/>
        <br/>
        <p className="receive reveal">Sorry, I can't talk right now. </p>
        <p className="send reveal">I'm in gallatin building </p>
        <p className="send reveal">Ok u can call when u are free</p>
        <p className="receive reveal">I'm going to working in building today can call u in 1 hour</p>
        <p className="send reveal">Ok as long as u are done with paper. U can call in 1 hr</p>
        <br/>
        <br/>
        <p className="send reveal">R u awake?</p>
        <p className="send reveal">We r home, so u can call me anytime today, Need to know what time I want to fly out of ny on 10/30.</p>
        <p className="send reveal">U...</p>
        <p className="receive reveal">Ok I am going to figure out my schedule</p>
        <p className="receive reveal">I will call u later </p>
        <br/>
        <br/>
        <p className="receive reveal"> Gm! Devotion for the day! I like this- Love, mommy </p>
        <br/>
        <div id="img" className={"receive reveal"}><img alt="prayer" height="356px" src={prayer}/></div>
        <br/>
        <br/>
        <p className="receive reveal">Looks like I m a BEE, Michelle is a Cricket, daddy is a BUTTERFLY, Stephanie is probably a butterfly too. Daniel??</p>
        <div id="img" className={"receive reveal"}><img alt="prayer" height="356px" src={beeLadyBug}/></div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p className="send reveal">Picked up Daniel from his apartment last night! Happy to hear that he is enjoying his college life!</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p className="send reveal">Have u started packing?</p>
        <p className="send reveal">I m at Diamond Bar this morning.</p>
        <p className="send reveal">Did u finish your paper well?</p>
        <p className="receive reveal">I finished paper</p>
        <p className="receive reveal">Sharing with a great devotion!! I m touched today bec of this truth!</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p className="send reveal">I'm using the contacts that dr gave me </p>
        <p className="receive reveal">Not the multi focal?</p>
        <p className="send reveal">I forge t </p>
        <p className="send reveal">But my vision is so clear </p>
        <p className="send reveal">I like this the most </p>
        <p className="receive reveal">I know. It's not multifocal. Use this when u don't have to study or read. Use multi focal when u have to read a lot.</p>
        <p className="send reveal">I like this the most </p>
        <p className="send reveal">My vision is the best it's been</p>
        <p className="receive reveal">Yes. It's bec it is a single vision</p>
        <p className="receive reveal">Multifocal has multiple focal points.</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <p className="receive reveal">Hi everyone, we have a family emergency here! Your emo is going into neurosurgery rn at St Jude. Would u pray for her n for God's miraculous healing? We will tell halmoni n hadaboji later</p>
        <br/>
        <br/>
        <br/>
        <p className="receive reveal"> Is everyone available at 9am today? We need to pray for daddy as he is meeting with pain medicine doctor tomorrow. We can FaceTime. LMK pls.</p>
        <br/>
        <br/>
        <br/>
        <p className="receive reveal">Just a remonder-- Daddy has a spine surgery scheduled for tomorrow morning. Can we Facetime together today at 7pm? We pray to for him!!.</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <div id="img" className={"receive reveal"}><img alt="prayer" height="356px" src={simpleFormula}/></div>
        <p className="receive reveal">Sharing with u all! Have a safe happy week!! May God be with u and may God bless u!! Luv, Mommy</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <div id="img" className={"receive reveal"}><img alt="prayer" height="356px" src={respondingToGrace}/></div>
        <p className="receive reveal">Listen to this when u can! Very inspiring! Can I can u now?  let's do family group chat now!</p>
        <br/>
        <br/>
        <br/>
        <div id="img" className={"receive reveal"}><img alt="prayer" height="356px" src={timelyWords}/></div>
        <br/>
        <br/>
        <br/>
        <p className="receive reveal">How did everything go today? R u in your apt?</p>
        <p className="send reveal">Yes</p>
        <p className="send reveal">I had my second class online today</p>
        <p className="send reveal">So I was home</p>
        <br/>
        <p className="receive reveal">How about your first class? Was it online too?</p>
        <p className="send reveal">It was in person</p>
        <p className="send reveal">But it went well</p>
        <p className="send reveal">I usually stay at school after that class to do some work</p>
        <p className="receive reveal">thumbs up heart</p>
        <br/>
        <br/>
        <p className="receive reveal">---------32432Lots of rain today in Sf n NY today! U are not alone &#60;3</p>
        <br/>
        <br/>
        <p className="send reveal">How was class today?</p>
        <p className="receive reveal">I had one class then I went to campus to get tested</p>
        <br/>
        <br/>
        <p className="send reveal">Thanks for the apples svjenpoiaenap</p>
        <p className="receive reveal">Those r envy apples? Couldn't send strawberries. Happy Valentine's Day &#60;3 </p>
        <br/>
        <p className="receive reveal">R u taking omega 3 fish oil? I can send u that too. I still have space.</p>
        <br/>
        <br/>
        <br/>
        <div id="img" className={"receive reveal"}><img alt="prayer" height="356px" src={comfort}/></div>
        <br/>
        <div id="img" className={"receive reveal"}><img alt="prayer" height="356px" src={theCrushedSpirit}/></div>
        <br/>
        <br/>
        <p className="receive reveal">I got a phone call that one pair of trial lenses are here. Do u need your external drive to retrieve info or to store in the future? If it's to store, I can send u a new one from Costco.</p>
        <p className="send reveal">I'm ok w external for now</p>
        <p className="send reveal">But I might need trial lense</p>
        <br/>
        <br/>
        <p className="receive reveal">R u in your apartment now? Was it easy to get ride? </p>
        <p className="send reveal">Yes! I took a taxi</p>
        <br/>
        <p className="receive reveal">See u tomorrow at 10 am for Online worship! Good night</p>
        <br/>
        <br/>
        <br/>
        <p className="receive reveal">Did you sign up for the graduation? I wanted to buy tickets for the flight. All of our flight credits expire this spring.</p>
        <p className="send reveal">Yes I did!</p>
        <p className="send reveal">But not ceremony yet</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p className="receive reveal">Call us back when ur ready </p>
        <p className="receive reveal">Can u talk?</p>
        <p className="send reveal">Yes! I took a taxi</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p className="receive reveal">Did everything go well today?</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p className="receive reveal">What time r u calling me tonight for the interview?</p>
        <p className="send reveal">I just woke up</p>
        <p className="send reveal">I might call u later today about some last questions</p>
        <br/>
        <p className="receive reveal">Don't u need to do the interview?</p>
        <p className="send reveal">I think I'll be ok ! I might call u later today</p>
        <br/>
        <p className="receive reveal">R u back home safely</p>
        <p className="send reveal">yes I fell asleep</p>
        <br/>
        <br/>
        <div id="img" className={"receive reveal"}><img alt="prayer" height="356px" src={blindnessOfPride}/></div>
        <p className="receive reveal">Gm! Here's a great devotion today! Main msg of devotion: Have a strong spirit in the Lord! U will find happiness in God!</p>
        <br/>
        </body>
      </div>
  );
}

export default App;
