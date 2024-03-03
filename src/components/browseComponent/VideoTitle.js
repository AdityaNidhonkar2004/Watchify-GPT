

const VideoTitle = ({ title, overview }) => {
    return (
        <>
            <div className="w-full aspect-video    sm:bg-gradient-to-r from-black absolute">

                <div className="p-2 absolute top-52 sm:top-1/3 sm:left-6 left-3 ">

                    <div className="sm:text-5xl  text-2xl font-bold font-serif mb-3 text-white">{title}</div>
                    <div className="text-sm hidden sm:block lg:w-1/4 w-3/5  text-white">{overview}</div>
                    <div className="hidden sm:block">
                        <div className="mt-6 flex  ">
                            <button className="px-5 font-bold py-1   bg-white rounded flex hover:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                </svg> Play</button>
                            <button className="px-4 font-bold text-gray-100 ml-4 py-1  flex bg-gray-700  opacity-80 rounded items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-circle-fill mr-2" viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                </svg>
                                More Info</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default VideoTitle