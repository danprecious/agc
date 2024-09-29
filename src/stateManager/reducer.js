export const reducer = (state, action) => {
    if (action.type === "OPEN_MOBILE_NAV") {
        return{
            ...state,
            mobileNavOpen: action.payload,
        }
    }
    if (action.type === "CLOSE_MOBILE_NAV") {
        return{
            ...state,
            mobileNavOpen: action.payload,
        }
    }
}