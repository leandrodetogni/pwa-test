<template>
  <q-page class="flex flex-center column">
      <label for="fname">Num 1:</label><br>
      <input v-model="num1" type="number" id="fname" name="fname"><br>
      <label for="lname">Num 2:</label><br>
      <input v-model="num2" type="text" id="lname" name="lname">
      <button @click="teste()"> Somar</button>
      <label> Resultado: <span> {{result}} </span></label>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      result: 0
    }
  },
  methods: {
    teste() {
      const result = parseInt(this.num1,10) + parseInt(this.num2,10);
      console.log(result);
      this.result = result;
    }
  }
})


</script>
