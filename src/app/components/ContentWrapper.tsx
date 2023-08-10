import React from "react";

export function ContentWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <section>
            <div className={`mx-auto p-3 md:p-24 2xl:px-[20%] w-full ${className}`}>
                {children}
            </div>
        </section>
    )
}