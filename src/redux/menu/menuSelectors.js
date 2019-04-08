
const getCategories = state => state.categories

const getMenuItems = state => state.menu.items

const getFilter = state => state.filter

const getVisibleMenu = state =>{
    const items = getMenuItems(state)
    const filter = getFilter(state).toLowerCase();
    return items.filter(item=>item.name.toLowerCase().includes(filter))
}

const getMenuItem = state =>state.item

const getIsLoading = state=> state.menu.isLoading

const getError = state => state.menu.error


export {getFilter,getMenuItems,getVisibleMenu,getCategories,getMenuItem,getIsLoading,getError}


