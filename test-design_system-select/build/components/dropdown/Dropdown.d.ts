import React from "react";
export declare enum DropdownType {
    DEFAULT = "default",
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
interface DropdownOptions {
    label: string;
    value: string | number;
}
export interface DropdownProps {
    children: React.ReactNode;
    options: DropdownOptions[];
    theme?: DropdownType;
}
declare const Dropdown: ({ children, theme, }: DropdownProps) => React.JSX.Element;
export default Dropdown;
