interface State {
  name: string,
  menuList: MenuList[],
  clickNum: number
}

interface MenuList {
  path: string,
  text: string,
  desc?: string
}

export const state: State = {
  name: 'xlon',
  menuList: [
    {path: 'item1', text: 'item1', desc: '....'},
    {path: 'item2', text: 'item2'},
    {path: 'item3', text: 'item3'}
  ],
  clickNum: 0
}