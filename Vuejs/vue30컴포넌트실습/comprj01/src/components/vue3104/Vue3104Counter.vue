<style scoped></style>

<template>
  <span
    style="
      display: inline-block;
      font-size: 3em;
      border: 1px dashed blue;
      padding: 10px 20px;
      margin: 5px;
      text-align: center;
    "
  >
    {{ num }}
  </span>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  /* pdtmc^2w */
  props: ['num'],
  //template: ``,
  methods: {},
};
</script>
