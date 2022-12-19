import React from 'react'
import useFetch from './getdata';
import './Card.css'


const Card = () => {
    const { data, isLoading, isError } = useFetch("https://syokudo-prod.azurewebsites.net/card");

    if (isLoading) {
        return <p>...loading</p>
    }

    if (isError) {
        return <p>Error!</p>
    }

    return (
            <div className='cardview'>
                {data.map((d, index) => (
                    <div key={index}>
                        <p>{d.Name}</p>
                        <p>{d.CardId}</p>
                    </div>
                ))}
            </div>

            
    )
}

export default Card