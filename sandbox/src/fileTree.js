const VanillaTree = require('./vanillatree');

function FileTree({FS}) {
  const treeElement = document.getElementById('file-list')
  const tree = new VanillaTree(treeElement)
  const treeRef = {}

  function buildFsTree(root, parent) {
    const files = FS.readdir(root)

    files.forEach((file) => {
      if (file === '.' || file === '..' || file === 'index.php') return
      const path = `${root}/${file}`
      const stat = FS.stat(path)
      if (FS.isDir(stat.mode)) {
        tree.add({
          label: file, id: path, opened: true, parent,
        })
        buildFsTree(path, path)
        return
      }

      const id = `file-${file}`
      tree.add({label: file, id, parent})
      treeRef[id] = path;
    })
  }

  function resetFsTree() {
    Object.keys(tree.leafs).forEach((id) => {
      if (tree.getLeaf(id, true)) {
        tree.remove(id)
      }
    })
  }

  return {
    buildFsTree, tree, treeElement, treeRef, resetFsTree,
  }
}

module.exports = FileTree
