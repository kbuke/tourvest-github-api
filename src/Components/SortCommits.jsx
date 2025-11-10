export function SortCommits({
    array,
    sortDates
}){
    return(
        array.sort((a, b) => {
            const firstDate = new Date(a?.commit?.author?.date)
            const secondDate = new Date(b?.commit?.author?.date)

            if(sortDates === "Latest"){
                return secondDate - firstDate
            } else {
                return firstDate - secondDate
            }
        })
    )
}