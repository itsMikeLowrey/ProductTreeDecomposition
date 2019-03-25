<template>
  <div>
  <v-card>
    <v-card-text>
        <div class="title" v-if="currentNodeName"> {{ currentNodeName }}</div>
        <div class="title" v-if="!currentNodeName"> Select A Component</div>
    </v-card-text>
    <v-card-actions  v-if="currentNodeName" class="justify-center">
      <v-layout row wrap justify-center align-center>
      <v-btn flat v-on:click="expand" color="orange">Expand</v-btn>
      <v-btn flat v-on:click="collapse" color="orange">Collapse</v-btn>
      <v-btn flat color="orange">Explore</v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>
  <v-card v-if="summary">
    <v-card-title primary-title class="justify-center">
      <div>
        <h3 class="headline">Component Summary</h3>
      </div>
    </v-card-title>
    <v-card-text >
    <div> {{summary}}</div>
    </v-card-text>


  </v-card>
</div>
</template>

<script>
import { componentInfo } from '@/assets/componentInfo.js'
export default {
  name: 'Sidebar',
  props: ['currentNodeName'],
  data () {
    return {
      componentInfo: componentInfo
    }
  },
  computed: {
    summary: function () {
      let node = componentInfo[this.currentNodeName]
      if (node && node['Summary']) {
        return node['Summary']
      }
      return undefined
    }
  },

  methods: {
    expand: function (event) {
      this.$emit('expand')
    },
    collapse: function (event) {
      this.$emit('collapse')
    }
  }
}
</script>
