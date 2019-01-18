

function init (): Object {

  let PM: object = {}

  const PROMISE = () => {
    new Promise((resolve, reject) => {
      PM = { resolve, reject}
    })
  }

  PROMISE()

  return PM
}

export {
  init
}

