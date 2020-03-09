<template>
    <v-content>
      <div style="width: 60%; display: inline-block; ">
        <Feed/>
      </div>
      <div style=" display: inline-block; float: right; width: 40%; ">
        <News/>
      </div>
    </v-content>
</template>
<script>
import Feed from './Feed';
import News from './News';
  export default {
    name: 'Main',

    components: {
      Feed,
      News,
    },
    data: () => ({
    }),
  }
</script>
