const Card = ({ children }: { children: JSX.Element }) => {
    return (
        <div className="flex flex-col bg-[#454545] px-5 py-4 rounded-lg shadow-lg w-80">
            {children}
        </div>
    )
}
export default Card;