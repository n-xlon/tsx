interface stateList {
  name: string,
  menuList: any[],
  clickNum: number
}

export function changeName (state: stateList) {
  if (state.name) {
    console.log(state.name)
  }
}

export function updateClickNum (state: stateList) {
  state.clickNum += 1
}