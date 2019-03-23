<template>
  <div style="height:75vh;">
  <tree :data="TreeSource" node-text="name" type='cluster'
    layoutType="euclidean" :duration='100' ref="tree" v-on:clicked="nodeClicked">
  </tree>
</div>
</template>
<script>
import { tree } from 'vued3tree'
import { TreeSource } from '@/assets/master.js'
import { parseToTree } from '@/assets/js/parseToTree.js'

export default {
  name: 'Tree',
  components: {
    tree
  },
  data () {
    return {
      TreeSource: {}
    }
  },
  async created () {
    this.TreeSource = await parseToTree(TreeSource)
  },
  methods: {
    nodeClicked: function (event) {
      console.log(event.data.name)
      this.$refs.tree.collapseAll(event.data)
    }
  }
}
</script>
