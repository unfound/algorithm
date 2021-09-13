function h(tag, props, children) {
  return {
    tag,
    props,
    children
  }
}

function mount (vnode, container) {
  // container.appendChild(vnode)
  const { tag, props, children } = vnode;
  const el = vnode.el = document.createElement(tag);
  if (props) {
    Object.keys(props).forEach(prop => el.setAttribute(prop, props[prop]))
  }

  if (typeof children === 'string' || typeof children === 'number') {
    el.textContent = children;
  } else {
    // node.appendChild(h('div', null, children))
    children.forEach(child => {
      mount(child, el)
    })
  }

  container.appendChild(el)
}

function patch (oldNode, newNode) {
  if (newNode.tag === oldNode.tag) {
    if (newNode.props) {
      Object.keys(newNode.props).forEach(prop => {
        if (newNode.props[prop] !== oldNode.props[prop]) {
          oldNode.el.setAttribute(prop, newNode.props[prop])
        }
      })
    }

    if (oldNode.children && !newNode.children) {
      if (typeof oldNode.children === 'string' || typeof oldNode.children === 'number') {
        oldNode.el.textContent = ''
      } else {
        oldNode.children.forEach(child => {
          oldNode.el.removeChild(child.el)
        })
      }
    } else if (!oldNode.children && newNode.children) {
      if (typeof newNode.children === 'string' || typeof newNode.children === 'number') {
        oldNode.el.textContent = newNode.children
      } else {
        newNode.children.forEach(child => {
          mount(child, oldNode.el)
        })
      }
    } else if (oldNode.children && newNode.children) {
      if (typeof newNode.children === 'string' || typeof newNode.children === 'number') {
        oldNode.el.textContent = newNode.children
      } else {
        newNode.children.forEach((child, i) => {
          patch(oldNode.children[i], child)
        })
      }
    }
  } else {
    const parentNode = oldNode.el.getParentNode()
    parentNode.removeChild(oldNode)
    mount(newNode, parentNode)
  }
}
