type SectionHeadingProps = {
    title: string
    subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
    return (
        <div className="pb-24 flex flex-col place-items-center gap-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
            <p className="text-lg md:text-2xl font-light">{subtitle}</p>
        </div>
    )
}