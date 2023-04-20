import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { setIsActiveAlert, setIsAlertSuccess, setIsAlertWarning, setMessageAlert } from '../redux/reducers/reducerAlert';

interface Alert {
    dispatch: Dispatch<AnyAction>;
    isAlertSuccess: boolean;
    isAlertWarning?: boolean;
    message: string;
}

export const alert = ({ dispatch, isAlertSuccess, message, isAlertWarning=false }: Alert): void => {

    dispatch(setIsActiveAlert(true));
    dispatch(setIsAlertSuccess(isAlertSuccess));
    dispatch(setIsAlertWarning(isAlertWarning));
    dispatch(setMessageAlert(message));
}