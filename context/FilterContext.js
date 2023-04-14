import { useContext, useReducer , useEffect } from "react";
import { creatContext } from "react";
import { useProductContext } from "./ProductContext"
import  reducer from "../reducer/FilterReducer"

const FilterContext = creatContext();

const initialState = {

filter_producs: [],
all_product: [],
grid_view: true,
sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
  }

};


 export const FilterContextProvider  = ({children}) =>{
const { products } = useProductContext();

 // to set the grid view
 const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };


  //to set the list view
 const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

    // sorting function
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue });
      };

const [state, dispatch] = useReducer(reducer, initialState);


useEffect(() => {

dispatch({ type: "LOAD_FILTR_PRODUCTS", payload: products});

},[]);


    return (
    <FilterContext.Provider value={{...state ,setGridView, setListView}}>
        {children}

    </FilterContext.Provider>
    );
};
export const useFilterConext = () =>{
    return useContext(FilterContext);

};


