
interface store {
  dispatch?: any,
  commit?: any,
  num?: number,
  alert?: any
}

export function users ({dispatch, commit}: store, name: string): Promise<any> {
  commit('updateClickNum')
  return dispatch('filterName', name)
}

export function filterName ({num, alert}: store, nm: string): Promise<any> {
  return new Promise((resolve, reject) => {
    if (nm) {
      alert({msg: `Hello ${nm}`, autoClose: true})
      resolve(`Hello ${nm} ${num}`)
    } else {
      reject('Error not find name')
    }
  })
}