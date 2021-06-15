// src/views/Home.vue

<template>
  <div>
    <div class="button-container" @click="setHide">
      <b>오프라인 초대권 받기</b>
    </div>
    <a href="images/invitation.png" download>
      <img src="images/invitation.png" alt="초대권 받기" style="display: none" class="invitaion-container" />
    </a>
    <a href="https://trost.co.kr/">
      <img src="images/footer.png" alt="푸터" style="display: none" class="footer-container" />
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    setHide() {
      document.getElementsByClassName('button-container')[0].classList.add('disappear');
      document.getElementsByClassName('invitaion-container')[0].classList.add('appear');
      document.getElementsByClassName('footer-container')[0].classList.add('appear');
    }
  }
};
</script>

<style scoped>
.button-container {
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.17);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  height: 50px;
  background-color: white;
  color: #fd951d;
  margin-top: 17px;
  margin-bottom: 30px;
}

.invitaion-container {
  margin-top: 30px;
}

.footer-container {
  width: calc(100% + 24px);
  margin: 0 0 0 -12px;
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

</style>