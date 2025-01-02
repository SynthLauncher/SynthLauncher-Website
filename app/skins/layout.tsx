import React from "react";

export default function SkinsLayout({
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