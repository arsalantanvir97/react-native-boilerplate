const initState = {
    snackbarState: false,
    snackbarMessage: "",
  };
  
  const LayoutReducer = (state = initState, action) => {
    switch (action.type) {
      case "onSnackbarOpen":
        return {
          ...state,
          snackbarMessage: action.payload.message,
          snackbarState: action.payload.open,
        };
      case "onHandleSnackbarClose":
        return {
          ...state,
          snackbarState: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default LayoutReducer;
  