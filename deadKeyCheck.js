import * as R from 'ramda'
const tree = require('./src/assets/treeSource.js')
const componentInfo = require('./src/assets/componentInfo.js')

const getChildrenKeys = (tree) =>
  R.pipe(
    R.pluck('children'),
    R.values,
    R.flatten
  )(tree)

function checkForOrphans (tree) {
  const parents = Object.keys(tree)
  const children = getChildrenKeys(tree)

  if (R.difference(parents, children).length !== 1) {
    throw new Error('Orphan in Tree Source')
  }
}

function checkDeadComponents (tree, componentInfo) {
  const nodes = R.concat(Object.keys(tree), getChildrenKeys(tree))
  const componentInfoList = Object.keys(componentInfo)

  if (R.difference(componentInfoList, nodes).length !== 0) {
    throw new Error('Unused Component in Component Info')
  }
}

checkForOrphans(tree.TreeSource)
checkDeadComponents(tree.TreeSource, componentInfo.componentInfo)
