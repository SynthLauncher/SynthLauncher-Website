import React from "react";

export default function CapesLayout({
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