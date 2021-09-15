import React from 'react'
import Image from 'next/image'
import styles from './Article.module.css'

export default function Article(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1 className={styles.heading__header}>
                    Beautiful Places of England
                </h1>
                <p className={styles.heading__paragraph}>Plan your vacation on the most beatiful 
                    places of England
                </p>
            </div>
            <div className={styles.book}>
                <div className={styles.book__left_side}>
                    <div className={styles.book_menu}>
                        Up next
                    </div>
                    <div className={styles.book_title}>
                        Aerial View 
                        of Rock 
                        Cliffs
                    </div>
                    <div className={styles.book_arrow}>
                        <Image src="/arrow.svg" alt="arrow" width={43} height={14} />
                    </div>
                </div>
                <div className={styles.book__right_side}>
                    <Image 
                    src = '/book.jpg'
                    className={styles.book__image}
                    width = {300}
                    height = {400}
                    alt = "book"
                    />
                </div>
            </div>
        </div>
    )
}
