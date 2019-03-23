<template>
  <div>
  <v-card>
    <v-card-text >
        <div class="title"> {{ currentNode }} </div>
    </v-card-text>
    <v-card-actions  class="justify-center">
      <v-layout row wrap justify-center align-center>
      <v-btn flat color="orange">Expand</v-btn>
      <v-btn flat color="orange">Collapse</v-btn>
      <v-btn flat color="orange">Focus</v-btn>
      <v-btn flat color="orange">Explore</v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>
  <v-card>
    <v-card-text >
        <div class="title"> Component Info: </div>
    </v-card-text>

  </v-card>
</div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['currentNode'],
  data () {
    return {
    }
  }
}
</script>
