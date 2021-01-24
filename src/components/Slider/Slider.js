import React from 'react'
import {people as data} from '../../data'
import Slide from '../Slide/Slide'
import s from './Slider.module.css'

export default function Slider() {

    const [people, setPeople] = React.useState(data)

    return(
        <div className={s.slider}>
            {
                people.map((item) => {
                    return <Slide item={item} key={item.id} />

                })
            }
        </div>
    )
}