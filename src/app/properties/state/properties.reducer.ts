import {createAction, createReducer, on} from "@ngrx/store";

export const propertiesReducer = createReducer({data: []},
  on(createAction('[Property] FETCH PROPERTIES LIST'), state => {
    console.log('Original State', JSON.stringify(state));
      return {...state};
  })
)
