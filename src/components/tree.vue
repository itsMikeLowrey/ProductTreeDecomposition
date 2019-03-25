<template>
  <div style="height:75vh;">
  <tree :data="TreeSource" node-text="name" type='cluster'
    layoutType="euclidean" :duration='100' ref="tree" v-on:clicked="nodeClicked">
  </tree>
</div>
</template>
<script>
import { tree } from 'vued3tree'
import { TreeSource } from '@/assets/treeSource.js'
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
      this.$emit('nodeClicked', event.data)
    },
    expandNode: function (node) {
      this.$refs.tree.expand(node)
    },
    collapseNode: function (node) {
      this.$refs.tree.collapseAll(node)
    }
  }
}
</script>
