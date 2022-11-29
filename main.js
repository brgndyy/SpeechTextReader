const toggleBtn = document.getElementById("toggleBtn");
const textBox = document.getElementById("text-box");
const closeBtn = document.getElementById("closeBtn");
const mainBox = document.getElementById("mainBox");
const voicesEl = document.getElementById('voicesEl');
const message = new SpeechSynthesisUtterance();


const data = [
  {
    image: "./img/drink.jpg",
    text: "I'm Thirsty",
  },
  {
    image: "./img/food.jpg",
    text: "I'm Hungry",
  },
  {
    image: "./img/tired.jpg",
    text: "I'm Tired",
  },
  {
    image: "./img/hurt.jpg",
    text: "I'm Hurt",
  },
  {
    image: "./img/happy.jpg",
    text: "I'm Happy",
  },
  {
    image: "./img/angry.jpg",
    text: "I'm Angry",
  },
  {
    image: "./img/sad.jpg",
    text: "I'm Sad",
  },
  {
    image: "./img/scared.jpg",
    text: "I'm Scared",
  },
  {
    image: "./img/outside.jpg",
    text: "I Want To Go Outside",
  },
  {
    image: "./img/home.jpg",
    text: "I Want To Go Home",
  },
  {
    image: "./img/school.jpg",
    text: "I Want To Go To School",
  },
  {
    image: "./img/grandma.jpg",
    text: "I Want To Go To Grandmas",
  },
];

const setTextMsg = (text) => {
  message.text = text;
}

const speakText = () =>{
  console.log(message);
  speechSynthesis.speak(message);
}


const createMainBoxes = () => {
  data.forEach((item) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.innerHTML = `<img src="${item.image}" alt="${item.text}">
    <p>${item.text}</p>`;
    mainBox.append(newDiv);
    newDiv.addEventListener('click', () => {

      setTextMsg(item.text);
      speakText();

      newDiv.classList.add('clicked');
      setTimeout(() => {
        newDiv.classList.remove('clicked');
      }, 500);
    })
  });
};



// 언어 선택
const getVoices = () =>{
  let voices = speechSynthesis.getVoices();

  console.log(voices); // length가 0임

  voices.forEach(voice => {
    const option = document.createElement('option');

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesEl.append(option);
  })
}



const showModal = () => {
  textBox.classList.toggle("show");
};

toggleBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", showModal);
// speechSynthesis.addEventListener('voiceschanged', getVoices); // 꼭 addEventListner를 걸어주어야지 다른 언어들이 나옴! 

createMainBoxes();
getVoices();