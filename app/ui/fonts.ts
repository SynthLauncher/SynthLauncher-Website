import { Lato, Nunito, Nunito_Sans, Open_Sans } from "next/font/google";

export const lato = Lato({
    variable: "--font-lato", 
    subsets: ["latin"], 
    weight: ["100", "300", "400", "700", "900"]
});

export const nunito = Nunito({
    variable: "--font-nunito",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"]
});

export const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    weight: ["300", "400"]
});

export const nunitoSans = Nunito_Sans({
    variable: "--font-nunito-sans",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"]
});