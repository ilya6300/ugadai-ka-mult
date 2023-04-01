"use strict";

const beginMenuContainer = document.querySelector("#begin-menu-container");
const selectMenuCartoon = document.querySelector("#select-menu-cartoon");
const gameMenu = document.querySelector("#game-menu");
const startGameBtn = document.querySelector("#start-game-btn");
const selectBtnGuessFrame = document.querySelector("#select-btn-guess-frame");
const arrowPrew = document.querySelector("#arrow-prew");
const arrowNext = document.querySelector("#arrow-next");
const btnShowAnswer = document.querySelector("#btn-show-answer");
const blockAnswer = document.querySelector("#block-answer");
const backgroundAudio = document.querySelector("#background-audio");
const imgContent = document.querySelector("#img-content");
const speaker = document.querySelector('#speaker');
const selectBtnGuessHero = document.querySelector('#select-btn-guess-hero');


import {questionCollectionFragment} from './arrayFragment.js'
import {questionCollectionHeroes} from './arrayHeroes.js'

let arrayCategory;

// window.onload = () => {

// }
backgroundAudio.volume = 0.3;
let statusWindows = "begin";
let contentIndex = 0;

// Отключение звука
speaker.onclick = () => {
  if (backgroundAudio.volume === 0.3) {
    backgroundAudio.volume = 0;
    // speaker.src = './img/icon/play_speaker.png';
    speaker.src = './img/icon/mute_speaker.png';
    
  } else {
    backgroundAudio.volume = 0.3;
    // speaker.src = './img/icon/mute_speaker.png';
    speaker.src = './img/icon/play_speaker.png';
  }
  speaker.classList.toggle('speaker_animation');
}

startGameBtn.onclick = () => {
  beginMenuContainer.style.display = "none";
  selectMenuCartoon.style.display = "block";
  statusWindows = "select";
};

// Стрелки 

const nextCadrF = (array) => {
  if (contentIndex + 1 < array.length) {
    contentIndex++;
  } else {
    contentIndex = 0;
  }
  blockAnswer.innerText = "";
  imgContent.src = array[contentIndex].src;
  blockAnswer.innerText = array[contentIndex].anwer;
  blockAnswer.classList.add("hidden");
  btnShowAnswer.textContent = "Показать ответ";
}

const prewCadrF = (array) => {
  if (contentIndex > 0) {
    contentIndex--;
    imgContent.src = array[contentIndex].src;
    blockAnswer.innerText = array[contentIndex].anwer;
  } else {
    return;
  }
}

arrowNext.onclick = () => {
  nextCadrF(arrayCategory);
};

arrowPrew.onclick = () => {
  prewCadrF(arrayCategory);
};

// Угадай по фрагменту

selectBtnGuessFrame.onclick = () => {
  arrayCategory = questionCollectionFragment;
  statusWindows = "game";
  arrowPrew.style.display = "block";
  arrowNext.style.display = "block";
  selectMenuCartoon.style.display = "none";
  gameMenu.style.display = "block";
  speaker.style.display = "block";
  // Вывод вопросов
  questionCollectionFragment.sort(() => Math.random() - 0.5);
  console.log(questionCollectionFragment);
  imgContent.src = questionCollectionFragment[contentIndex].src;
  blockAnswer.innerText = questionCollectionFragment[contentIndex].anwer;
  // Фоновая музыка
  backgroundAudio.play();
};

// Угадай по герою

selectBtnGuessHero.onclick = () => {
  arrayCategory = questionCollectionHeroes;
  statusWindows = "game";
  arrowPrew.style.display = "block";
  arrowNext.style.display = "block";
  selectMenuCartoon.style.display = "none";
  gameMenu.style.display = "block";
  speaker.style.display = "block";
  // Вывод вопросов
  questionCollectionHeroes.sort(() => Math.random() - 0.5);
  console.log(questionCollectionHeroes);
  imgContent.src = questionCollectionHeroes[contentIndex].src;
  blockAnswer.innerText = questionCollectionHeroes[contentIndex].anwer;
  // Фоновая музыка
  backgroundAudio.play();
};

// 

btnShowAnswer.onclick = () => {
  if (blockAnswer.classList.contains("hidden")) {
    blockAnswer.classList.remove("hidden");
    btnShowAnswer.textContent = "Скрыть ответ";
  } else {
    blockAnswer.classList.add("hidden");
    btnShowAnswer.textContent = "Показать ответ";
  }
};




