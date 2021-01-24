import React from 'react'
import s from './Slide.module.css'

export default function Slide( {item} ) {
    return (
        <div className={s.item}>
            <img className={s.photo} src={item.image} alt="photo" />
            <h2 className={s.name}>{item.name}</h2>
            <p className={s.title}>{item.title}</p>
            <p className={s.description}>{item.desc}</p>
        </div>
    )
}