import * as R from 'ramda'

async function parseToTree (flatData) {
  const adoptedFlatArray = addParentKey(flatData)
  const tree = createNestedTree(adoptedFlatArray)
  return tree
}
//  code inspirted from https://stackoverflow.com/questions/31383869/converting-flat-structure-to-hierarchical
//  all is passed by reference
function createNestedTree (adoptedFlatArray) {
  let all = {}
  let root
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
    } else {
      root = all[name]
    }
  })
  return root
}

function addParentKey (flatData) {
  let parentsToFind = []
  for (const child in flatData) {
    parentsToFind = R.concat(parentsToFind, [child])
    parentsToFind = R.concat(parentsToFind, flatData[child].children)
  }
  parentsToFind = R.uniq(parentsToFind)
  let adoptedFlatArray = []
  for (const child of parentsToFind) {
    const parent = findParent(child, flatData)
    const pair = { name: child, parent: parent }
    adoptedFlatArray = R.concat(adoptedFlatArray, [pair])
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
