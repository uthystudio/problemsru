<template>
  <v-container>
      <v-hover
        v-slot:default="{ hover }"
        v-for="item in TasksList"
        :key="item.number"
      >
        <v-card
          :elevation="hover ? 20: 2"
          class="card"
          style="width: 100%"
          show="true"
        >
        <v-btn style="float: right; margin: 10px;" icon color="primary" @click="item.showDecision = !item.showDecision">
          <v-icon v-if="item.showDecision">visibility_off</v-icon><v-icon v-if="!item.showDecision">visibility</v-icon>
        </v-btn>
        <v-card-title>Задача №{{item.number}}</v-card-title>
        <v-card-text>
            <span v-html="item.content">
            </span>
          <span v-if="item.showDecision">
            <br>
            <strong>Решение</strong>
            <br>
            <span v-html="item.decision">
            </span>
          </span>
        </v-card-text>
        
        </v-card>
      </v-hover>
  </v-container>
</template>
<style>
  .card { width: 100%; display: block; margin: 20px;}

@media (max-width: 700px) {
  .card { margin-left: 0; margin-right: 0}
}
</style>
<script>
  export default {
    name: 'feed',

    data: () => ({
      TasksList: [
        { number: 87972, content: 'Докажите, что в любом графе<br>а) сумма степеней всех вершин равна удвоенному числу рёбер (и следовательно, чётна);<br>б) число вершин нечётной степени чётно.', decision: 'а) При сложении степеней вершин каждое ребро учитывается дважды: по разу для каждой из вершин, которые оно соединяет.<br>б) Сразу следует из а) и того очевидного факта, что сумма нечётного числа нечётных чисел нечётна.', showDecision: false  },
        { number: 87972, content: 'Докажите, что в любом графе<br>а) сумма степеней всех вершин равна удвоенному числу рёбер (и следовательно, чётна);<br>б) число вершин нечётной степени чётно.', decision: 'а) При сложении степеней вершин каждое ребро учитывается дважды: по разу для каждой из вершин, которые оно соединяет.<br>б) Сразу следует из а) и того очевидного факта, что сумма нечётного числа нечётных чисел нечётна.', showDecision: false  },
      ]
    }),
  }
</script>
