<style scoped></style>

<template>
  <div class="component-child">
    Child counter : {{ num }} <br />
    <button name="child" v-on:click="addCounter">+</button>
    <button name="child" v-on:click="subCounter">-</button>
  </div>
</template>

<script>
export default {
  /* pdtmc^2w */
  props: ['num'],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      // num: null,
    };
  },
  //template: ``,
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    addCounter(e) {
      console.log(e.target);
      debugger;
      this.$emit('addCounter', +1);
    },
    subCounter(e) {
      console.log(e.target);
      debugger;
      this.$emit('subCounter', -1);
    },
  },
};
</script>
