// src/views/Home.vue

<template>
  <div class="container">
    <div class="wrapper">

      <img src="images/result1.png" class="mt50" />

      <div class="bearArea">
        <img src="images/cuttieBear.png" class="cuttieBear" />
        <div class="resultBox" :style="{backgroundColor: computerSelectedColor[resultValue+3]}" />
      </div>

      <p class="title">{{ resultTitle[resultValue+3] }}</p>
      <p class="subTitle">{{ resultContext[resultValue+3] }}</p>
      <b class="common">트로스트 팝업에서는 마음에 안정을 주는 그림 그리기 이벤트 중! (6/22~7/4)
        방문하여 무료로 체험해 보세요 :)</b>

      <WebShare text="테스트 결과 공유" background-color="#fd951d" />
      <CreateInvitation />

    </div>
  </div>
</template>

<script>
import WebShare from "../components/WebShare";
import CreateInvitation from "../components/CreateInvitation";
import firebase from "firebase";

const db = firebase.database().ref('table/userCount');


const computerSelectedColor = [
  '#e5167d',
  '#f84c4c',
  '#ff8f65',
  '#fff080',
  '#91f4ac',
  '#16cde5',
  '#9d8eef',
];

const resultTitle = [
  '`자주`는 부드러움을 표현하는 컬러에요.',
  '`빨강`은 사랑을 표현하는 컬러에요.',
  '`주황`은 따뜻함을 표현하는 컬러에요.',
  '`노랑`은 생기를 표현하는 컬러에요.',
  '`초록`은 평온을 표현하는 컬러에요.',
  '`파랑`은 고요를 표현하는 컬러에요.',
  '`보라`는 관용을 표현하는 컬러에요.',
]

const resultContext = [
  '오늘 하루를 마무리하는 나에게 부드러운 말로 위로를 건네보세요.\n내일은 어떤 일이 있더라도 씩씩하게 이겨낼 수 있는 에너지가 생길 거예요!',
  '오늘 하루도 열심히 살아내느라 고생한 나를 사랑으로 보듬어주세요.\n내 안에 안정감이 생겨, 내일은 더 용감하고, 열정적인 내가 될 수 있을 거예요!',
  '오늘 하루도 치열하게 산 나에게 따뜻한 한마디를 남겨보세요.\n내가 나를 인정해준다면, 더욱더 정열적이고 명랑하게 내일 하루를 보낼 수 있을 거예요!',
  '오늘 하루 열심히 사느라 에너지를 다 써버린 당신에게 생기를 불어넣어 보세요.\n내 안에 행복한 마음이 생겨, 내일은 따뜻하고 기쁨이 가득 찬 하루가 될 거예요.',
  '눈을 감고 심호흡을 세 번만 해보세요. 파도처럼 많은 일이 몰아쳤던 오늘은 잊혀지고, 평온한 마음만 남게 될 거예요.\n내일은 좀 더 평안한 하루가 될 수 있길 트로스트가 응원할게요!',
  '오늘 하루 정신없이 보냈다면, 고요한 곳에 앉아 명상해보세요. 온종일 느낀 다양한 감정들이 가라앉고 고요함만 남아요.\n내일은 모든 것이 조화롭고 마음의 평화가 가득한 하루가 될 거예요.',
  '오늘 하루도 많은 사람에게 너그러이 사랑을 베풀어 준 자신을 칭찬해보세요.\n내일도 마음 안의 사랑으로 많은 사람들과 조화롭게 지낼 수 있는 하루가 될 수 있을 거예요.',
]

export default {
  data() {
    return {
      resultValue : 0,
      computerSelectedColor,
      resultTitle,
      resultContext,
    }
  },
  components: {
    WebShare,
    CreateInvitation,
  },
  methods: {
    countFunction() {
      return db.once('value').then((suc) => {
        let data = suc.val();

        data += 1;

        firebase.database().ref('table').update({
          userCount: data,
        });

        return data;
      });
    },
    trackingResultFunction() {
      return firebase.database().ref(`table/userSelected/${this.resultValue}/count`).once('value').then((suc) => {
        let data = suc.val();

        console.log(data);

        data += 1;

        firebase.database().ref(`table/userSelected/${this.resultValue}`).update({
          count: data,
        });

        return data;
      })
    }
  },
  mounted() {
    this.resultValue = Number(window.localStorage.score);
    this.countFunction();
    this.trackingResultFunction();
  }
};
</script>

<style scoped>
p {
  white-space: break-spaces;
}

.mt50 {
  margin-top: 50px;
}

.wrapper {
  text-align: center;
  position: relative;
}

.bearArea {
  position: relative;
  margin-top: 140px;
  margin-bottom: 34px;
}

.cuttieBear {
  width: 125px;
  height: 125px;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  bottom: 98px;
}

.resultBox {
  width: 180px;
  height: 180px;
  border-radius: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  display: inline-block;
}

.title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px !important;
}

.subTitle {
  font-size: 14px;
  margin-bottom: 35px !important;
}

.common {
  font-size: 14px;
  margin-bottom: 35px;
  display: block;
}

</style>
