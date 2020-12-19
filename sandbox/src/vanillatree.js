// copy of https://github.com/finom/vanillatree without Balalaika for better tree shaking
const $ = require('balalaika');

function create(tagName, props) {
  return $.extend(document.createElement(tagName), props);
}

function Tree(s, options) {
  const [container] = $(s);
  const tree = container.appendChild(create('ul', {
    className: 'vtree',
  }));

  this.tree = tree
  this.container = container
  this.placeholder = options && options.placeholder;
  this.placeholder();
  this.leafs = {};
  tree.addEventListener('click', (evt) => {
    if ($(evt.target).is('.vtree-leaf-label')) {
      this.select(evt.target.parentNode.getAttribute('data-vtree-id'));
    } else if ($(evt.target).is('.vtree-toggle')) {
      this.toggle(evt.target.parentNode.getAttribute('data-vtree-id'));
    }
  });
}

Tree.prototype = {
  constructor: Tree,
  dispatch(name, id) {
    let event;
    try {
      event = new CustomEvent(`vtree-${name}`, {
        bubbles: true,
        cancelable: true,
        detail: {
          id,
        },
      });
    } catch (e) {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(`vtree-${name}`, true, true, { id });
    }
    (this.getLeaf(id, true) || this.tree)
      .dispatchEvent(event);
    return this;
  },
  placeholder() {
    if (!this.tree.children.length && this.placeholder) {
      this.tree.innerHTML = `<li class="vtree-placeholder">${this.placeholder}</li>`
    } else {
      const p = this.tree.querySelector('.vtree-placeholder');
      if (p) this.tree.removeChild(p);
    }
    return this;
  },
  getLeaf(id, notThrow) {
    const leaf = $(`[data-vtree-id="${id}"]`, this.tree)[0];
    if (!notThrow && !leaf) throw Error(`No VanillaTree leaf with id "${id}"`)
    return leaf;
  },
  getChildList(id) {
    let list;
    let parent;
    if (id) {
      parent = this.getLeaf(id);
      [list] = $('ul', parent)
      if (!list) {
        list = parent.appendChild(create('ul', {
          className: 'vtree-subtree',
        }));
      }
    } else {
      list = this.tree;
    }

    return list;
  },
  add(options) {
    let id;
    const leaf = create('li', {
      className: 'vtree-leaf',
    });

    const parentList = this.getChildList(options.parent);

    leaf.setAttribute('data-vtree-id', id = options.id || Math.random());

    leaf.appendChild(create('span', {
      className: 'vtree-toggle',
    }));

    leaf.appendChild(create('a', {
      className: 'vtree-leaf-label',
      innerHTML: options.label,
    }));

    parentList.appendChild(leaf);

    if (parentList !== this.tree) {
      parentList.parentNode.classList.add('vtree-has-children');
    }

    this.leafs[id] = options;

    if (!options.opened) {
      this.close(id);
    }

    if (options.selected) {
      this.select(id);
    }

    return this.placeholder().dispatch('add', id);
  },
  move(id, parentId) {
    const leaf = this.getLeaf(id);
    const oldParent = leaf.parentNode;
    const newParent = this.getLeaf(parentId, true);

    if (newParent) {
      newParent.classList.add('vtree-has-children');
    }

    this.getChildList(parentId).appendChild(leaf);
    oldParent.parentNode.classList.toggle('vtree-has-children', !!oldParent.children.length);

    return this.dispatch('move', id);
  },
  remove(id) {
    const leaf = this.getLeaf(id);
    const oldParent = leaf.parentNode;
    oldParent.removeChild(leaf);
    oldParent.parentNode.classList.toggle('vtree-has-children', !!oldParent.children.length);

    return this.placeholder().dispatch('remove', id);
  },
  open(id) {
    this.getLeaf(id).classList.remove('closed');
    return this.dispatch('open', id);
  },
  close(id) {
    this.getLeaf(id).classList.add('closed');
    return this.dispatch('close', id);
  },
  toggle(id) {
    return this[this.getLeaf(id).classList.contains('closed') ? 'open' : 'close'](id);
  },
  select(id) {
    const leaf = this.getLeaf(id);

    if (!leaf.classList.contains('vtree-selected')) {
      $('li.vtree-leaf', this.tree).forEach((l) => {
        l.classList.remove('vtree-selected');
      });

      leaf.classList.add('vtree-selected');
      this.dispatch('select', id);
    }

    return this;
  },
};

module.exports = Tree;
