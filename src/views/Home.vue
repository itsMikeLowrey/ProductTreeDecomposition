<template>
  <v-container grid-list-md text-xs-center fluid>
    <v-layout row wrap justify-center align-center>
      <v-flex  xs3>
        <Sidebar v-bind="currentNode"/>
      </v-flex>
      <v-flex  xs9>
        <Tree v-bind="currentNode" />
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
      currentNode: {}
    }
  }
}
</script>
