<template>
  <div>

  <v-card class="mb-2">
    <v-card-text>
        <div class="title" v-if="currentNodeName"> {{ currentNodeName }}</div>
        <div class="title" v-if="!currentNodeName"> Select A Component</div>
    </v-card-text>
    <v-card-actions  v-if="currentNodeName" class="justify-center">
      <v-layout row wrap justify-center align-center>
      <v-btn flat v-on:click="expand" color="orange">Expand</v-btn>
      <v-btn flat v-on:click="collapse" color="orange">Collapse</v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>
  <v-card v-if="infoExist" class="mt-2">

    <v-card-text >
      <div  class="mt-3 subheading"> {{checkItem('Sum')}}</div>

      <div v-for="(item, key) in optList">
        <div v-if="checkItem(key)">
          <h3 class="title mt-3">{{item}}</h3>
          <div  class="mt-3 subheading">
            {{checkItem(key)}}
          </div>
      </div>
    </div>

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
      componentInfo: componentInfo,
      optList: { 'Req': 'Requirements', 'In': 'Inputs', 'Out': 'Outputs', 'Pro': 'Process' }
    }
  },
  computed: {
    infoExist: function () {
      if (this.checkItem('Sum') || this.checkItem('Req') || this.checkItem('In') ||
        this.checkItem('Out') || this.checkItem('Pro')
      ) {
        return true
      }
      return false
    }
  },

  methods: {
    expand: function (event) {
      this.$emit('expand')
    },
    collapse: function (event) {
      this.$emit('collapse')
    },
    checkItem: function (item) {
      let node = componentInfo[this.currentNodeName]
      if (node && node[item]) {
        return node[item]
      }
      return undefined
    }
  }
}
</script>
