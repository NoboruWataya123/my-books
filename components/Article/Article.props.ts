import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ArticleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    children?: ReactNode;
}