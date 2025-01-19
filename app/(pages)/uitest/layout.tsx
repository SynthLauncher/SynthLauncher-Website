import React from "react";

export default function UiTestLayout({
    children,
} : {
    children: React.ReactNode
}) {
    return (
        <section>
            {children}
        </section>
    );
}