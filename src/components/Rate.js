import React from 'react'

function Rate({Rate}) {
    const ratingArr= [1,2,3,4,5]
    return (
        <div>
            {ratingArr.map((el)=> el<= Rate ? <i class="fas fa-star"></i> : <i class="far fa-star"></i> )}
        </div>
    )
}

export default Rate
