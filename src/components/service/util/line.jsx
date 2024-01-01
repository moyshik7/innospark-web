"use client"


export const LineText = ({ text }) => {
    return(<>
        <div className="w-full pt-16 pb-16 flex justify-center items-center bg-red-400 dark:bg-red-500 text-yellow-100 dark:text-white">
            <h3 className="text-3xl lg:text-5xl text-center">
                {text}
            </h3>
        </div>
    </>)
}