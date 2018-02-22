
'use strict'

import { h, app } from 'hyperapp'

const state = {}

const actions = {}

const view = (...args) =>
  h('div', { class: 'app' }, [
    h('canvas', { id: 'bgCanvas' }, []),
    h('img', { src: 'images/hyperapp.png' }),

    h('script', { src: 'assets/background.js'})
  ])

app(state, actions, view, document.body)
