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

export const setDate = (date: Date): string => {

    const d = date.toLocaleDateString().split('/').reverse();
    const year = d[0];
    const month = d[1];
    const day = d[2];

    const m = month.length === 1 ? `0${month}` : month;
    const dayTwo = day.length === 1 ? `0${day}` : day;

    return `${year}-${m}-${dayTwo}`;
}