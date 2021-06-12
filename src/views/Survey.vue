// src/views/Home.vue

<template>
  <div class="container">
    <br />

    <div>
      <p class="progrees-bar-left" @click="gotoLoading">{{ displayValue() }} / 10</p>
    </div>

    <br />

    <b-progress :value="value" :max="max" :variant="variant" show-progress></b-progress>

    <h1>Q{{ displayValue() }}</h1>
    <h2>{{ surveyPool[displayValue()] }}</h2>

    <div class="pallete">
      <div class="computer-choosed-pallete" :style="{backgroundColor: computerSelectedColor[randomChoose()]}" @click="selectColor" />
      <div class="computer-choosed-pallete" :style="{backgroundColor: computerSelectedColor[randomChoose()]}" @click="selectColor" />
      <div class="computer-choosed-pallete" :style="{backgroundColor: computerSelectedColor[randomChoose()]}" @click="selectColor" />
      <div class="computer-choosed-pallete" :style="{backgroundColor: computerSelectedColor[randomChoose()]}" @click="selectColor" />
      <div class="computer-choosed-pallete" :style="{backgroundColor: computerSelectedColor[randomChoose()]}" @click="selectColor" />
      <div class="computer-choosed-pallete" :style="{backgroundColor: computerSelectedColor[randomChoose()]}" @click="selectColor" />
    </div>

    <button class="nextSurveyButton" @click="initPage">다음</button>

  </div>
</template>

<script>
import router from "../router";
let Array = [0,1,2,3,4,5,6];
let userChoseArray = [];

let score = 0;

export default {
  data() {
    return {
      value: 1,
      max: 10,
      variant: 'green',
      surveyPool: [
        'default0',
        '오늘 아침 눈을 떴을 때\n나의 기분을 색으로 골라본다면?',
        '외출 전, 신발장의 신발 중 가장\n눈에 띄는 색은?',
        '현관문을 나섰을 때, 처음 마주하는\n사람이 입은 옷 색은?',
        '하늘에 주인을 잃어버린 풍선이\n날아가고 있다. 풍선의 색은?',
        '길을 걷다 문득\n바라본 하늘의 색은?',
        '오늘 하루의 감정을\n색으로 표현한다면?',
        '최근 일주일 간 나의 기분을\n색으로 표현한다면?',
        '가족, 친구 등 주변 지인들에게 비치는\n나의 모습을 색으로 표현한다면?',
        '시간이 흘러 50대가 되었을 때,\n내 인생을 색으로 표현한다면?',
        '어디로든 갈 수 있는 초능력이 생겼다.\n내가 가고 싶은 나라를 생각하면 떠오르는 색은?',
      ],
      computerSelectedColor: [
          '#e5167d',
          '#f84c4c',
          '#ff8f65',
          '#fff080',
          '#91f4ac',
          '#16cde5',
          '#9d8eef',
      ]
    }
  },
  methods: {
    addValue() {
      if (this.value !== 10) {
        this.value += 1;
      } else {
        window.localStorage.setItem('userChoseArray', userChoseArray);
        window.localStorage.setItem('score', Math.round(score/10));
        router.push('/loading');
      }
    },
    displayValue() {
      return this.value;
    },
    selectColor(e) {
      for (let i = 1; i < e.target.parentElement.children.length+1; i += 1) {
        e.target.parentElement.children[i-1].classList.remove('is-selected-color');
      }
      e.target.classList.add('is-selected-color');
      document.getElementsByClassName('nextSurveyButton')[0].classList.add('is-active-button');
    },
    initPage() {
      if (!document.getElementsByClassName('is-selected-color')[0]) return false;
      Array = [0,1,2,3,4,5,6];
      userChoseArray.push(document.getElementsByClassName('is-selected-color')[0].style.backgroundColor);
      this.setScore(document.getElementsByClassName('is-selected-color')[0].style.backgroundColor);
      document.getElementsByClassName('is-selected-color')[0].classList.remove('is-selected-color');
      document.getElementsByClassName('nextSurveyButton')[0].classList.remove('is-active-button');
      this.addValue();
    },
    randomChoose() {
      const recursive = () => {
        let randomValue = Math.random() * 7;
        let intRandomValue = Math.floor(randomValue);

        if (Array[intRandomValue] !== -1) {
          Array[intRandomValue] = -1;
          return intRandomValue;
        } else {
          return recursive();
        }
      }

      return recursive();
    },
    gotoLoading() {
      userChoseArray = [0,0,0,0,0,0,0,0,0,0];
      router.push('/loading');
    },
    setScore(e) {
      if (e === '#e5167d' || e === 'rgb(229, 22, 125)') score -= 3;
      if (e === '#f84c4c' || e === 'rgb(248, 76, 76)') score -= 2;
      if (e === '#ff8f65' || e === 'rgb(255, 143, 101)') score -= 1;
      if (e === '#fff080' || e === 'rgb(255, 240, 128)') score -= 0;
      if (e === '#91f4ac' || e === 'rgb(145, 244, 172)') score += 1;
      if (e === '#16cde5' || e === 'rgb(22, 205, 229)') score += 2;
      if (e === '#9d8eef' || e === 'rgb(157, 142, 239)') score += 3;

      return score;
    }
  },
};
</script>

<style scoped>
  .container {
    margin-top: 20px;
  }

  .progrees-bar-left {
    float: right;
    right: 0;
    display: block;
    margin: 0;
    font-size: 12px;
    color: #fd951d;
  }

  .pallete {
    width: 100%;
    height: 100%;
    margin-top: 100px;
    display: inline-grid;
    grid-template-columns: 94px 94px 94px;
    justify-content: center;
    gap: 16px;
  }

  .computer-choosed-pallete {
    width: 94px;
    height: 94px;
    border-radius: 5px;
  }

  .is-selected-color {
    background: url('/images/check2.png');
    background-repeat: no-repeat;
    background-position: center;
  }

  .computer-choosed-pallete:hover {
    border: 4px solid white;
  }

  .is-active-button {
    background-color: #fd951d !important;
    color: white !important;
  }

  .nextSurveyButton {
    border: none;
    width: 100%;
    color: black;
    background-color: white;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.17);
    height: 50px;
    border-radius: 30px;
    margin-top: 80px;
  }

</style>