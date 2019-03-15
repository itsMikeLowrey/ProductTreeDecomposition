<template>
  <div style="height:75vh;">
  <tree :data="TreeSource" node-text="name" type='cluster' layoutType="euclidean" zoomable :duration='0'>
  </tree>
</div>
</template>
<script>
import { tree } from 'vued3tree'
import { TreeSource } from '@/assets/master.js'
import { parseToTree } from '@/assets/js/parseToTree.js'

export default {
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
  }
}
</script>
