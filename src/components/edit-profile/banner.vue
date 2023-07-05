<template>
  <section>
    <img src="@/assets/jpg/edit-bg.jpg" alt="" class="bg">
    <button class="editBg">
      <img src="@/assets/svg/edit.svg" alt="">
    </button>
    <div>
      <img src="@/assets/jpg/edit-prof.jpg" alt="" class="profImg">
      <button class="editProf">
        <img src="@/assets/svg/edit.svg" alt="">
        <span>Edit Profile</span>
      </button>
      <h3>Farhan Khan</h3>
      <p class="nick">@farhan</p>
      <p class="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, consectetur purus amet, accumsan nulla. Ut urna placerat morbi cursus pulvinar nunc adipiscing. Tortor, consectetur purus amet, accumsan nulla. Ut urna placerat morbi cursus pulvinar nunc adipiscing.</p>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  section {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vw / 2.66);
  }

  .bg {
    width: 100%;
    height: auto;
    border-radius: calc(100vw / 288);
  }

  section > div {
    position: absolute;
    top: 52.58%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .editBg {
    position: absolute;
    top: 52.95%;
    left: 93.36%;
    width: calc(100vw / 28.8);
    height: calc(100vw / 28.8);
    border: none;
    border-radius: 50%;
    background-color: #6c5dd3;
  }

  .profImg {
    width: 11.53%;
    height: auto;
    border-radius: 50%;
  }

  .editProf {
    position: absolute;
    top: 35.8%;
    right: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15.77%;
    height: calc(100vw / 32);
    background-color: #6c5dd3;
    border: none;
    border-radius: calc(100vw / 9.6);
  }

  .editProf > span {
    margin-left: calc(100vw / 144);
    font-size: 0.8rem;
    font-weight: 600;
    color: #ffffff
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    margin: calc(100vw / 80) auto 0px auto;
  }

  .nick {
    font-size: 0.9rem;
    font-weight: 400;
    margin: 0px auto;
    opacity: 0.4;
  }

  .descr {
    width: 86.15%;
    font-size: 0.8rem;
    font-weight: 400;
    margin: calc(100vw / 144) auto 0px auto;
    opacity: 0.8;
  }
</style>