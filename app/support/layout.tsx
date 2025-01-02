import React from "react";

export default function SupportLayout({
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