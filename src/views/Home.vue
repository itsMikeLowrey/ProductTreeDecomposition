<template>
  <v-container grid-list-md text-xs-center fluid>
    <v-layout row wrap justify-center align-center>
      <v-flex  xs3>
        <Sidebar v-bind:currentNodeName="currentNodeName" @expand="expandNode"
          @collapse="collapseNode" />
      </v-flex>
      <v-flex  xs9>
        <Tree v-bind="currentNode" @nodeClicked="onClickChild"  ref="foo"/>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import Tree from '@/components/tree.vue'
export default {
  name: 'home',
  components: {
    Tree,
    Sidebar
  },
  data () {
    return {
      currentNode: {},
      currentNodeName: undefined
    }
  },
  methods: {
    onClickChild (value) {
      this.currentNodeName = value.name
      this.currentNode = value // someValue
    },
    expandNode (value) {
      this.$refs.foo.expandNode(this.currentNode)
    },
    collapseNode (value) {
      this.$refs.foo.collapseNode(this.currentNode)
    }
  }

}

</script>
