// src/views/Home.vue

<template>
  <div class="container">
    <div class="wrapper">

      <img src="images/result1.png" class="mt50" />

      <div class="bearArea">
        <img src="images/cuttieBear.png" class="cuttieBear" />
        <div class="resultBox" :style="{backgroundColor: computerSelectedColor[resultValue+3]}" />
      </div>

      <p class="title">{{ resultTitle0[resultValue+3] }}</p>

      <div class="contents">
        <p class="title">나의 색은 어떤가요?</p>
        <p class="subTitle">{{ resultContext2[resultValue+3] }}</p>
        <p class="title">저랑은 무슨 관련이 있나요?</p>
        <p class="subTitle">{{ resultContext3[resultValue+3] }}</p>
        <p class="title">나는 어떤 색이 필요할까요?</p>
        <p class="subTitle">{{ resultContext4[resultValue+3] }}</p>
      </div>
      <b class="common">트로스트 팝업에서는 마음에 안정을 주는 그림 그리기 이벤트 중! (06/22~07/04)
        방문하여 무료로 체험해 보세요 :)</b>
      <div class="contents temp-contents" style="display: none">
        <p class="title">나의 색은 통계적으로 어때요?</p>
        <p class="subTitle">{{ resultContext1[resultValue+3] }}</p>
        <p class="title">알고 계셨나요?</p>
        <p class="subTitle">{{ resultContext0[resultValue+3] }}</p>
        <p class="title">참고문헌</p>
        <p class="subTitle">어떠한 개인정보를 저장하거나 영리적인 이득을 취하지 않습니다.</p>
        <p class="subTitle">색체 심리학적 접근을 통한 배색교육에 관한 연구 -색체와 감정반응을 중심으로-, 최윤영, 국민대학교 교육대학원, 2008</p>
        <p class="subTitle">색체 심리학을 브랜딩에 적용하기, 김강령, brunch, 2019 https://brunch.co.kr/@thinkaboutlove/238</p>
        <p class="subTitle">인포그래픽으로 보는 색채 심리학 : 디자이너들을 위한 색상 가이드, 마루, designLog, 2013 https://www.designlog.org/2512445 [디자인로그(DESIGN LOG)]</p>
        <p class="subTitle">색체 심리학, 김선현, 이담 북스, 2013</p>
      </div>

      <div class="temp-button" :style="{color: computerSelectedColor[resultValue+3]}" @click="setHide">더보기</div>
      <CreateInvitation />
      <WebShare text="테스트 공유하기" background-color="#fd951d" />


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

const resultTitle0 = [
  '#e5167d (자주)',
  '#f84c4c (빨강)',
  '#ff8f65 (주황)',
  '#fff080 (노랑)',
  '#91f4ac (초록)',
  '#16cde5 (파랑)',
  '#9d8eef (보라)',
]

const resultContext0 = [
    '',

    '벌은 빨간색을 인식하지 못해요. 빨간 꽃은 보통 새, 나비, 박쥐, 바람에 의해 수정되어요.\n' +
    '풍수지리학에서는 거주자에게 번영함을 가져다 주기 위해서 집의 첫번째 문에 빨간색을 칠하는 것을 권장해요.\n' +
    '소개팅에서 호감을 주는 색상으로 여성분이 빨간색 옷을 입었을 때 선호도가 가장 높았어요! ',

    '네덜란드의 상징색은 오렌지 색이에요. 네덜란드 국부 오라녜 공작 및 나사우 백작 빌럼 1세의 오라녜(Oranje) 작위 때문에 상징색이 되었고, 네덜란드 축구 국가대표팀이 \'오렌지 군단이\'라 불리곤 해요.\n' +
    '1988년부터 119 구조대원 분들의 구조복의 상징색입니다. 2019년부터 납풉되는 소방차도 주황색이에요.\n' +
    '불교에서 주황은 최고의 완벽한 상태를 뜻하는 깨달음의 색이에요. 그래서 불교 승려들은 늘 주황색 법의를 입고 있어요.',

    '첫 데이트에 호감을 주는 옷 색상에서 남녀 공통 비호감 1위로 노란색이 선정되었어요 .. \n' +
    '미국에서 연필의 75%는 노란색이에요. \n' +
    '카트라이더 리그 개인전 1위 시드를 상징하는 색이에요. 금메달의 금색을 연상시키는 컬러 때문이래요 !',

    '인간의 눈이 녹색 음영을 가장 예민하게 식별해요.\n' +
    '동아시아문화권에서는 초록색과 파란색을 잘 구분하지 않아요. 신호등의 파란불은 파란색이 아니라 초록색이잖아요?\n' +
    '빨간색 -> 빨개 / 파란색 -> 파래 / 노란색 -> 노래 / 초록색 -> 초래(x) 가 불가능한 이유는 초록색이 한자어이기 때문이에요.',

    '부엉이는 파란색을 볼 수 있는 유일한 새예요.\n' +
    '사람들은 파란색 방에서 더 생산적이라는 연구결과가 있어요.\n' +
    '바다와 하늘은 실제로 푸른색이 아니며, 자연적인 파란색을 찾는 것은 매우 어려워요. \n' +
    '식욕을 감퇴시키는 색으로 알려져 있어요. 파란색이 상징색인 포카리스웨트를 만든 회사는 본래 제약회사였기 때문에 이러한 사실을 모르고 파란색을 채용하였고, 디자인 실수라고 말하곤 했답니다.',

    ''
]

const resultContext1 = [
    '',

    '8%의 사람들은 선호하는 색상으로, 1%의 사람들은 선호하지 않는 색상으로 빨간색을 골랐어요.',

    '5%의 사람들은 선호하는 색상으로, 27%의 사람들은 선호하지 않는 색상으로 주황색을 골랐어요. 비선호도가 가장 높은 색이네요 😂',

    '2%의 사람들은 선호하는 색상으로, 13%의 사람들은 선호하지 않는 색상으로 노란색을 골랐어요. TMI) 색상심리테스트 제작하고 있는 저도 노란색을 제일 좋아해요 🌟',

    '14%의 사람들은 선호하는 색상으로, 4%의 사람들은 선호하지 않는 색상으로 초록색을 골랐어요. 파란색 다음으로 인기가 가장 많은 색이네요 ! ',

    '46%의 사람들은 선호하는 색상으로, 0.5%의 사람들은 선호하지 않는 색상으로 파란색을 골랐어요. 선호색상 1위, 비호감색상 꼴찌의 파랑 .. 완벽하군요.',

    ''
]

const resultContext2 = [
    '선생님, 자주색 혹은 보라색 하나로만 통일한 답변을 제출하셨군요?\n' +
    '\n' +
    '저희가 제공하고 있는 색상 풀은 7가지이고, 선택할 수 있는 색상은 6개 입니다.\n' +
    '7개 중 무작위로 6개를 선정하여 출력하고 있습니다.\n' +
    '\n' +
    '결과값 계산은 색상마다 가중치를 부여했습니다.\n' +
    '\n' +
    '자주 -3 \n' +
    '빨강 -2\n' +
    '주황 -1\n' +
    '노랑 0\n' +
    '초록 +1\n' +
    '파랑 +2\n' +
    '보라 +3\n' +
    '\n' +
    '열 번의 설문마다 점수의 평균값에 따른 색상값을 출력합니다.\n' +
    'ex: 제출 답변이 (2 -2 3 -3 2 -2 1 -1 0 0) 일때, 평균값을 구하면 0입니다. 0에 해당하는 노란색이 결과창에 출력됩니다.\n' +
    '\n' +
    '이러한 원리에 의한 보라색 혹은 자주색이 나오기 위해서는 \n' +
    '(-3 * 10) 혹은 (3 * 10) 즉, 모든 문항을 보라색만, 자주색만 선택했을 때 자주색과 보라색의 결과창을 보실 수 있습니다. \n' +
    '\n' +
    '10번의 문항에 항상 자주(or보라)색이 나올 확률은 19% 이고 \n' +
    '100명이 참여한 현재, -3 혹은 +3 이 나온 분들은 1명으로, 1% 입니다\n' +
    '\n' +
    '자신이 추구하는 색상만을 따라가는 당신을 완벽과 이상주의자로서 하얀색의 답변을 드리고 싶습니다\n' +
    '\n' +
    '도화지 같은 흰색은 지닌 당신, 어느 색과도 잘 어울릴 수 있어요.',

    '빨간색은 열정, 강렬, 호전적인 느낌을 주는 컬러예요.\n' +
    '사랑, 자신감, 열정, 화 등 긍정적인 면과 부정적인 면 모두를 상징해요. \n' +
    '빨간색은 즉각적으로 화학적신호가 뇌하수체 선으로부터 부신으로 전달하여 아드레날린이 분비되고, 신진대사가 빨라져요.',

    '주황색은 원기, 악동, 활력, 만족, 유쾌, 적극 등을 상징해요.\n' +
    '태양의 색이라고 불리우며 타인에 대한 사려깊음을 나타내는, 생명력 넘치고 좋은 힘이랍니다.\n' +
    '주황은 강한 긍정 또는 부정을 가지고 있으며, 일반적으로 다른 색보다 더 강렬하게 \'사랑한다\' 혹은 \'싫어한다\' 는 응답을 이끌어낼 수 있어요.\n' +
    '빨강과 비슷한 성격을 가진 주황은 조절 중추를 자극하고 식욕이 왕성해지며 나른함을 유발하여 잠이 들 가능성이 있어요.',

    '노란색은 긍정, 이해력 그리고 행복을 상징해요.\n' +
    '\'태양과 햇빛을, 나는 달리 표현할 수 없어 노란색이라 부른다. 이 얼마나 아름다운 노랑인가!\' - 빈센트 반 고흐 \n' +
    '노란색은 자존감과 자신감을 올려준다고 알려져 있어요. 또한 두뇌 활동을 자극해 창의력과 사고력을 키우는데에도 좋다고 해요.\n' +
    '심리적 안정감을 준다는 점에서 변비 해소에 도움이 된다는 말도 있어요.',

    '주로 자연, 균형, 조화의 색이라고 불리어요.\n' +
    '초록색은 정신적으로, 육체적으로 긴장을 풀어줘요.\n' +
    '특히 우울, 긴장, 근심을 완화하는데 도움을 준다는 연구결과가 있어요. \n' +
    '회복력, 자제력, 그리고 조화를 이루어줍니다. ',

    '파란색은 신뢰할 수 있는, 헌신적인 색으로 알려져 있어요. \n' +
    '안정감 있으며, 상쾌하고 차분한 느낌을 줘요.\n' +
    '미래, 성장의 의미를 지니고 있어요.\n' +
    '파란색의 영향을 받고 있으면 시간은 빠르게, 그리고 물체의 무게는 가볍게 느껴진다는 연구결과가 있어요.',

    '선생님, 자주색 혹은 보라색 하나로만 통일한 답변을 제출하셨군요?\n' +
    '\n' +
    '저희가 제공하고 있는 색상 풀은 7가지이고, 선택할 수 있는 색상은 6개 입니다.\n' +
    '7개 중 무작위로 6개를 선정하여 출력하고 있습니다.\n' +
    '\n' +
    '결과값 계산은 색상마다 가중치를 부여했습니다.\n' +
    '\n' +
    '자주 -3 \n' +
    '빨강 -2\n' +
    '주황 -1\n' +
    '노랑 0\n' +
    '초록 +1\n' +
    '파랑 +2\n' +
    '보라 +3\n' +
    '\n' +
    '열 번의 설문마다 점수의 평균값에 따른 색상값을 출력합니다.\n' +
    'ex: 제출 답변이 (2 -2 3 -3 2 -2 1 -1 0 0) 일때, 평균값을 구하면 0입니다. 0에 해당하는 노란색이 결과창에 출력됩니다.\n' +
    '\n' +
    '이러한 원리에 의한 보라색 혹은 자주색이 나오기 위해서는 \n' +
    '(-3 * 10) 혹은 (3 * 10) 즉, 모든 문항을 보라색만, 자주색만 선택했을 때 자주색과 보라색의 결과창을 보실 수 있습니다. \n' +
    '\n' +
    '10번의 문항에 항상 자주(or보라)색이 나올 확률은 19% 이고 \n' +
    '100명이 참여한 현재, -3 혹은 +3 이 나온 분들은 1명으로, 1% 입니다\n' +
    '\n' +
    '자신이 추구하는 색상만을 따라가는 당신을 완벽과 이상주의자로서 하얀색의 답변을 드리고 싶습니다\n' +
    '\n' +
    '도화지 같은 흰색은 지닌 당신, 어느 색과도 잘 어울릴 수 있어요.',
]

const resultContext3 = [
    '',

    '+ 사람들에게 열정적이고 활기를 불러일으켜주는 역할을 맡고 있을 확률이 상당히 높아요.\n' +
    '+ 훌륭한 지도자, 지휘자의 성격을 지닌 사람일 수 있어요.\n' +
    '- 빨간색을 좋아하지만 표면적으로 차분한 사람들은 내면 깊은 곳에 격한 감정과 욕망이 억제되어 있을 수 있어요. 혹시 스트레스를 받고 있는 상태라면 스트레스를 해소할만 한 대체재를 꼭 찾길 바래요. \n' +
    '- 감정기복을 자주 느낄 수 있어요. 본인의 감정을 잘 제어하는 능력을 기르는 것이 필요할 수도 있어요.',

    '+ 주황색을 좋아하는 사람은 활동적이고 건강하며 낯가림이 적고 개방적이에요.\n' +
    '+ 경쟁심이 강해, 지는 것을 싫어하는 성격을 갖고 있을 확률이 높아요.\n' +
    '- 개인적 성공보다 단체 안에서의 성취감을 뿌듯해하지만, 열등감이 많아 고생할 수 있어요. 가끔은 차분하게 생각하는 것도 좋을 것 같아요.\n' +
    '- 세상의 주목을 즐겨 다소 오바하는 경향이 있을 수 있어요. 아무렴 어때요 자신만 잘 즐기면 된다고 생각해요.',

    '+ 보여지는 느낌 그대로 밝고 명랑하며 솔직한 성격을 지니고 있어요.\n' +
    '+ 유연한 사고를 통한 아이디어 뱅크로 뚜렷한 개성을 지닌 사람이 많아요.\n' +
    '- 대개는 명랑하고 자발적으로 행동하지만 화가 나면 독설을 잘 내뿜을 수 있어요. 화가 나도 슬기롭게 대처하기를 바래요.\n' +
    '- 새로운 일에 관심이 많은 반면에 인내심이 부족할 수 있어요. ',

    '+ 초록색을 지닌 사람은 대게 성실하고 예의가 바르며 참을성이 많고, 사려 깊어 편견이 없는 편이에요. \n' +
    '+ 임기응변과 외교적 수완이 좋아 주변 사람들로부터 칭찬과 인정을 받아요.\n' +
    '+ 초록색을 좋아하는 사람은 사업에서 성공하는 경우가 많으나, 동시에 베푸는 것을 좋아하는 관대함을 지녔어요.\n' +
    '- 녹색을 지나치게 좋아하면 심리적 불안상태를 나타낼 수 있어요.',

    '+ 결정적 순간에도 차분함과 평정심을 잘 유지하여 좋은 결과를 만들어낼 확률이 높아요.\n' +
    '+ 참을성과 노력으로 일처리가 깔끔하여 야무지다는 소리를 만들어 들을거예요.\n' +
    '- 뛰어난 지능과 진실한 영혼의 소유자로 생각이 깊어 행동으로 쉽게 옮기지 못할 때가 있어요.\n' +
    '- 지나치게 선명한 파란색을 좋아하면 심리적으로 긴장되어 있을 수 있어요.',

    ''
]

const resultContext4 = [
    '',

    '1. 보색에 의한 배색 - #91f4ac (초록)\n' +
    '열정적으로 살다보면 지치는 순간이 금세 올 수 있어요. \n' +
    '당신의 열정에 응원과 격려를 보내며 진정색 중 하나인 초록색을 추천하고 싶어요.\n' +
    '휴식이 있는 열정은 그 누구도 따라잡을 수 없을거예요.\n' +
    '\n' +
    '2. 유사색조배색 - #ff8f65 (주황)\n' +
    '유사한 성질을 갖고 있는 주황색과 어울리면 즐거움과 귀여움이 묻어나올거예요.\n' +
    '주황색을 만나 단순명료하게 놀면 그렇게 행복할 수 있다네요.',

    '1. 보색에 의한 배색 - #16cde5 (파랑)\n' +
    '주황은 대표적인 난색(warm color) 중 하나예요. 즐거움과 활발함을 지닌 주황색에게는 성숙함의 파란색과 서로 의지한다면 최고의 잠재성을 터뜨릴 수 있어요 !\n' +
    '\n' +
    '2. 유사 색조에 의한 배색 - #fff080 (노랑)\n' +
    '활발한 주황색은 발랄한 노란색과 함께 있을 때 친밀감을 느끼고, 심적 안정감을 받을 수 있는 상태일거예요 !',

    '1. 보색에 의한 배색 #9d8eef (보라)\n' +
    '노란색처럼 밝고 명랑한 당신, 가끔은 고상하고 섬세한 느낌을 필요로 한 적이 있지 않나요? 인생이 한없이 밝을 수 만은 없으니 가끔은 보라색에게 고민을 털어놓아보아요.\n' +
    '\n' +
    '2. 이미지에 의한 배색 #91f4ac (초록)\n' +
    '초록과 노랑이 배색되면 사랑스럽고 다정하며 상쾌한 이미지가 생성되어요. 초록의 푸르른 들판과 노랑의 따스한 햇살이 떠오르지 않나요? 초록색과 노란색은 서로에게 봄 같은 존재가 되어줄거예요.\n',

    '1. 대조색조에 의한 배색 - #f84c4c (빨강)\n' +
    '초록색처럼 안정을 추구하는 당신, 가끔은 안정적인 생활이 지루하다고 느낄 수 있어요. 흥분되고 스릴 넘치는 빨간색과 색다른 방식으로 놀아보는건 어떨까요?\n' +
    '\n' +
    '2. 이미지에 의한 배색 - #16cde5 (파랑)\n' +
    '초록과 파랑이 배색되면 차분한 느낌과 시원함을 동시에 느낄 수 있어요. 초록의 푸르른 들판과 파랑의 시원한 파도가 떠오르지 않나요? 초록과 파랑은 서로 시원한 여름 휴가같은 존재가 되어줄거예요.',

    '1. 대조색조에 의한 배색 - #ff8f65 (주황)\n' +
    '생각이 깊은 것은 대게 좋지만 때때로 힘들게 하는 순간이 있을거예요. 즐거움과 활발함을 지닌 주황색과 가끔은 어울려보며 새로운 경험을 해보는 것은 어떨까요?\n' +
    '\n' +
    '2. 유사색상에 의한 배색 - #ffffff (하양)\n' +
    '유명기업들 (전자 S기업, 건설 D기업, 금융 I기업/W기업/S기업) 들은 파란 배경에 흰색의 글씨를 활용한 로고를 지니고 있어요. 이상적이고 완벽을 추구하는 흰색과 함께라면 세계 경제를 뒤집어 놓을 수 있어요.',

    ''
]

export default {
  data() {
    return {
      resultValue : 0,
      computerSelectedColor,
      resultTitle0,
      resultContext0,
      resultContext1,
      resultContext2,
      resultContext3,
      resultContext4,
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
    },
    setHide() {
      document.getElementsByClassName('temp-button')[0].classList.add('disappear');
      document.getElementsByClassName('temp-contents')[0].classList.add('appear');
    },
  },
  mounted() {
    this.resultValue = Number(window.localStorage.score);
    this.countFunction();
    this.trackingResultFunction();
  }
};
</script>

<style scoped>
.temp-button {
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.17);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  height: 50px;
  background-color: white;
  margin-top: 17px;
  margin-bottom: 30px;
  font-weight: bold;
}

.appear {
  animation: fade-in 1s;
  animation-fill-mode: forwards;
  display: block !important;
}

.disappear {
  animation: fade-out 1s;
  animation-fill-mode: forwards;
  display: none !important;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;

  }
  to {
    opacity: 0;
  }
}

.contents {
  text-align: start;
}

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
