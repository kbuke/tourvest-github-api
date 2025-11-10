import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons/faArrowAltCircleLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../index.css"

export function PaginationArrow({
    currentPg, setCurrentPg,
    startIndex, setStartIndex,
    endIndex, setEndIndex,
    instanceNumber, lastPg,
    additionalClassName
}){
    return(
        <>
            <div
                className="arrow-containers"
            >
                {currentPg === 1?
                    null
                    :
                    <FontAwesomeIcon 
                        className={`arrow ${additionalClassName}`}
                        icon={faArrowAltCircleLeft}
                        onClick={() => {
                            setCurrentPg(currentPg - 1)
                            setStartIndex(startIndex - instanceNumber)
                            setEndIndex(endIndex - instanceNumber)
                        }}
                    />
                }

                {currentPg === lastPg?
                    null
                    :
                    <FontAwesomeIcon 
                        className={`arrow ${additionalClassName}`}
                        icon={faArrowAltCircleRight}
                        onClick={() => {
                            setCurrentPg(currentPg + 1)
                            setStartIndex(startIndex + instanceNumber)
                            setEndIndex(endIndex + instanceNumber)
                        }}
                    />
                }
            </div>

            <p
                className="pg-count"
            >
                Page {currentPg} of {lastPg}
            </p>
        </>
    )
}