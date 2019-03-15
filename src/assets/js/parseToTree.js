import _ from 'lodash'

async function parseToTree (flatData) {
  const adoptedFlatArray = addParentKey(flatData)
  const tree = createNestedTree(adoptedFlatArray)
  return tree
}
//  code inspirted from https://stackoverflow.com/questions/31383869/converting-flat-structure-to-hierarchical
//  all is passed by reference
function createNestedTree (adoptedFlatArray) {
  let all = {}
  adoptedFlatArray.forEach(function (item) {
    all[item.name] = item
  })
  Object.keys(all).forEach(function (name) {
    const node = all[name]
    if (node.parent in all) {
      const child = all[node.parent]
      if (!('children' in child)) {
        child.children = []
      }
      child.children.push(node)
    }
  })
  let rootIndex = _.findIndex(adoptedFlatArray, function (node) { return _.isNull(node.parent) })
  let root = adoptedFlatArray[rootIndex]
  return root
}

function addParentKey (flatData) {
  let parentsToFind = []
  for (const child in flatData) {
    parentsToFind = _.concat(parentsToFind, child)
    parentsToFind = _.concat(parentsToFind, flatData[child].children)
  }
  parentsToFind = _.uniq(parentsToFind)
  let adoptedFlatArray = []
  for (const child of parentsToFind) {
    const parent = findParent(child, flatData)
    const pair = { name: child, parent: parent }
    adoptedFlatArray = _.concat(adoptedFlatArray, pair)
  }
  return adoptedFlatArray
}

function findParent (child, flatData) {
  let parent = null
  for (const potentialParent in flatData) {
    const children = flatData[potentialParent].children
    if (children && children.includes(child)) {
      return potentialParent
    }
  }
  return parent
}
export { parseToTree }
