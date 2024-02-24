const BestPlacesToEarCards = ({ places }) => {
    const { text } = places;
    return (
        <div className="mt-5">
            <div className="flex-shrink-0 h-[56px] w-60 rounded-lg border-2 text-center shadow-md border-gray-200 cursor-pointer m-2">
                <span className="flex justify-center mt-2"> {text}</span>
            </div>
        </div>
    )
}

export default BestPlacesToEarCards