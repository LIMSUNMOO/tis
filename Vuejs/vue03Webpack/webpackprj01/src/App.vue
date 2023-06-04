<style scoped>
header {
  text-align: center;
  height: 60px;
}

section {
  text-align: center;
  height: 150px;
}

footer {
  text-align: center;
  height: 60px;
}

/* step2. 배경색 지정*/
header {
  background-color: #efb14e;
}

section {
  background-color: #95db5e;
}

footer {
  background-color: #78d0d1;
}

/* step3. 여백 주기 - margin , padding */
header {
  margin: 0 0 20px 0;
}

section {
  margin: 40px 20px;
}

div {
  margin: 40px 20px;
}
</style>

<template>
  <div>
    <header-comp></header-comp>
    <section id="page1" data-role="page">
      <div class="content" data-role="content">컨텐츠</div>
    </section>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import HeaderComp from '../../HeaderComp.vue';
import FooterComp from '../../FooterComp.vue';
export default {
  components: {
    'header-comp': HeaderCompVue,
    'footer-comp': FooterCompVue,
  },
  computed: {
    /* 자동처리 + 동기식. 메서드로 작성. return 필수. data 와 공존 불가 */
    /* vuex 를 사용하는 경우
      mapGetters 는 store의 getters 를 가져오는 헬퍼메서드입니다.
      namespaced: true를 설정한 경우 네임스페이스를 사용하기 때문에 store의 모듈 명을 적어주어야 합니다.
      store 모듈에서 getters 를 가져오는 2가지 방식
      1) store.모듈명.getters 이름 바꾸어 사용하기
         ...mapGetters('모듈명', { get게터명1: '게터명1', get게터명2: '게터명2' }),
      2) store.모듈명.getters 이름 그대로 사용하기(추천방식)
         ...mapGetters('모듈명', ['게터명1', '게터명2']),
      */
  },
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
