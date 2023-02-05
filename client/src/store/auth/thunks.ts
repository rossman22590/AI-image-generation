import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import {login} from './authSlice';



export const startLoginWithGoogle = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch('http://localhost:8000/api/v1/auth/login/success',{ credentials: 'include'});
            const data = await response.json();

            dispatch( login(data.user) )
      
          } catch (error) {
            console.log(error)
          }
    }
}

export const startLogout = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {


    }
}