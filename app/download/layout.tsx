import React from "react";

export default function DownloadLayout({
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