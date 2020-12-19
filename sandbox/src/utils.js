function iframeLoaded(iframe) {
  return new Promise((resolve) => {
    const document = iframe.contentDocument || iframe.contentWindow.document

    if (document.readyState === 'complete') {
      resolve(iframe)
    }

    iframe.addEventListener('load', () => {
      resolve(iframe)
    })
  })
}

/**
 * [data-toggle]="id" on click toggles the `hide` class and replaces Show/Hide
 */
function registerToggleButtons() {
  const storage = window.sessionStorage
  const onclick = (event) => {
    event.preventDefault();
    const cur = event.currentTarget
    const targetId = cur.getAttribute('data-toggle')
    const el = document.getElementById(targetId)
    if (el.classList.contains('hide')) {
      el.classList.remove('hide')
      cur.innerHTML = cur.innerHTML.replace('Show', 'Hide')
      storage.setItem(`hide-${targetId}`, false)
      return
    }

    el.classList.add('hide')
    cur.innerHTML = cur.innerHTML.replace('Hide', 'Show')
    storage.setItem(`hide-${targetId}`, true)
  }

  const togglers = [].slice.call(document.querySelectorAll('[data-toggle]'))
  togglers.forEach((toggler) => {
    toggler.addEventListener('click', onclick)
    const targetId = toggler.getAttribute('data-toggle')
    const hidden = storage.getItem(`hide-${targetId}`)
    if (hidden) {
      document.getElementById(targetId).classList.add('hide')
      toggler.innerHTML = toggler.innerHTML.replace('Hide', 'Show')
    }
  })
}

module.exports = {iframeLoaded, registerToggleButtons}
