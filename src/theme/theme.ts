import { ThemeData } from "./interface";

export const themeLight: ThemeData  = {
    primary: "white",
    secondary: "#232229",
    button: '#591DF1',
    buttonDisabled: '#E1E1E1',
    border: '#BABCCB',
    label: '#656E93',
    th: '#F3F6F9',
    thText: '#22285A',
    actions: { edit: '#DFECFF', delete: '#FFDFDF' },
}

export const themeDark: ThemeData  = {
    primary: "#808FC7",
    secondary: "white",
    button: '#5D6BAA',
    buttonDisabled: 'lightgray',
    border: 'white',
    label: 'white',
    th: '#3C3C3C',
    thText: 'white',
    actions: { edit: '#DE8200', delete: '#B84C4B' },
}