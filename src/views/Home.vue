// src/views/Home.vue

<template>
  <div class="container">
    <img :src="imgSource.index1" alt="" style="width: 282px;" class="mb90 mt30" />
    <img :src="imgSource.index2" alt="" style="width: 282px;" class="mb90" />
    <p class="realtimeCount">현재 총 {{ this.countValue }}명이 참여했어요</p>
    <Button backgroundColor="#fd951d" text="테스트 시작하기" textColor="#ffffff" action="/survey" />
    <div class="forceMargin" />
    <WebShare backgroundColor="#ffffff" text="테스트 공유하기" textColor="#fd951d" />
  </div>
</template>

<script>
import {index1, index2} from "../../public/images/images";
import Button from "../components/Button";
import WebShare from "../components/WebShare";

import firebase from "firebase";
import firebaseConfig from "../firebaseConfig";

firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref('table/jj');

export default {
  data() {
    return {
      imgSource: {
        index1,
        index2,
      },
      countValue : 0,
    }
  },
  components: {
    Button,
    WebShare,
  },
  methods: {
    countFunction() {
      return db.once('value').then((suc) => {
        let data = suc.val();

        firebase.database().ref('table').update({
          jj: data,
        });

        return data;
      });
    }
  },
  async mounted() {
    this.countValue = await this.countFunction();
    window.localStorage.clear();
  }
};
</script>

<style>

.realtimeCount {
  margin-bottom: 8px !important;
  color: #707070;
  font-size: 12px;
}

.forceMargin {
  width: 100%;
  height: 16px;
  display: block;
}

.container > p {
  text-align: center;
  margin: 0;
}

img {
  margin: 0 auto;
  display: block;
  width: 100%;
  height: 100%;
}

.mt30 {
  margin-top: 30px;
}

.mb90 {
  margin-bottom: 90px;
}

.mb15 {
  margin-bottom: 15px;
}

h1  {
  font-size: 40px !important;
  margin-top: 25px !important;
}

h2 {
  font-size: 24px !important;
  margin-top: 16px !important;
  white-space: break-spaces;
}

</style>