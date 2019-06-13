const Props = new Proxy({}, {
  get: (target, p, receiver) => {
    return Reflect.get(target, p, receiver)
  },
  set: (target, p, value, receiver) => {
    // if (value === undefined || value === null || typeof value === 'undefined') return
    return Reflect.set(target, p, value, receiver)
  }
})

interface P {
  [key: string]: any
}

function addProps (key: string, value: any) {
  (Props as P)[key] = value
}

export {
  Props,
  addProps
}

