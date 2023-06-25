<style scoped>
span {
  border: 1px dashed blue;
  background-color: lightgray;
  padding: 5px;
}
</style>

<template>
  <div>
    파일 컴포넌트가 등록되었습니다!
    <span v-on:click="lclick">
      {{ localmsg }}
    </span>
  </div>
</template>

<script>
export default {
  /* pdtmc^2w */
  props: ['localmsg'],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      //localmsg: null,
    };
  },
  //template: ``,
  methods: {
    lclick(e) {
      console.log(e.target);
    },
  },
  components: {},
  computed: {},
  watch: {
    /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
    /* store의 actions 호출 */
    // this.$store.dispatch('액션명', payload);
  },
  updated() {
    console.log('updated');
  },
};
</script>
