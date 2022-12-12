import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import styled from '@emotion/styled'

export const useTime = (interval) => {
    const [time, updateTime] = useState(Date.now())

    useEffect(() => {
        const timeoutId = setTimeout(() => updateTime(Date.now()), interval)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [time]) // eslint-disable-line react-hooks/exhaustive-deps

    return time
}




export const DigitalClock = ({ time }) => {
    return <div>{dayjs(time).format('HH:mm:ss')}</div>
}


export default DigitalClock





