
interface store {
  dispatch: any,
  commit: any,
}

export function users (store: store, name: string): Promise<any> {
  store.commit('updateClickNum')
  return store.dispatch('filterName', name)
}

export function filterName ({}, nm: string): Promise<any> {
  return new Promise((resolve, reject) => {
    if (nm) {
      resolve(`Hello ${nm}`)
    } else {
      reject('Error not find name')
    }
  })
}