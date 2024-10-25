interface CenterContainerProps {
    children: React.ReactNode
}

export const CenterContainer = ({children} : CenterContainerProps) => {
    return <div className="flex flex-col max-w-[1000px] m-auto w-[100%]">{children}</div>
}