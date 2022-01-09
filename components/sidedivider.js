const sidedivider = ({ name }) => {
    return (
        <div className="w-full flex">
            <div className="flex justify-center items-center">
                <svg height="10" width="100">
                    <line x1="0" y1="0" x2="200" y2="0" style={{ stroke: "#6b7280", "stroke-width": "2" }} />
                </svg>
            </div>
            <div className="text-gray-500 ml-5">
                {name}
            </div>
        </div>
    );
}

export default sidedivider;