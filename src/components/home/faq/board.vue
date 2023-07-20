<template>
  <div>
    <form action="" v-for="inpt in inpts" @submit.prevent="onSubmit(inpt.num)" v-bind:class="{isAsked: inpt.isAsked}">
      <input type="text" :placeholder="inpt.placeholder" v-model="inpt.question" v-if="!inpt.isAsked">
      <button type="submit" v-if="!inpt.isAsked">
        <span>+</span>
      </button>
      <p v-else>{{ inpt.p }}</p>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        inpts: [
          { num: "1", isAsked: false, placeholder: "Lorem ipsum ipsum ?", question: "", p: "", },
          { num: "2", isAsked: false, placeholder: "Lorem ipsum ipsum ?", question: "", p: "", },
          { num: "3", isAsked: false, placeholder: "Lorem ipsum ipsum ?", question: "", p: "", },
          { num: "4", isAsked: false, placeholder: "Lorem ipsum ipsum ?", question: "", p: "", },
          { num: "5", isAsked: false, placeholder: "Lorem ipsum ipsum ?", question: "", p: "", },
          { num: "6", isAsked: false, placeholder: "Lorem ipsum ipsum ?", question: "", p: "", },
        ],
      }
    },
    methods: {
      onSubmit(num) {
        let quest = this.inpts[num-1].question
        console.log(this.inpts[num-1].question)
        if (quest.trim()) {
          this.inpts[num-1].isAsked = true;
          this.inpts[num-1].p = this.inpts[num-1].question
        }
      }
    }
  }
</script>

<style scoped>
  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: calc(100vw / 96);
    width: 100%;
    height: calc(100vw / 5.76);
  }

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5)
  }

  .isAsked {
    border-bottom: 1px solid rgba(255, 255, 255, 1)
  }

  input {
    width: 100%;
    height: calc(100vw / 28.8);
    background: none;
    border: none;
    outline: none;
    font-size: 1rem;
    color: #ffffff
  }

  input::placeholder {
    font-size: 1rem;
    font-weight: 500;
  }

  button {
    display: flex;
    align-self: center;
    justify-content: space-around;
    width: 3%;
    background: none;
    border: none;
  }

  button > span {
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
    opacity: 0.5;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
    margin: 0;
  }
</style>