import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.footer__hero}>
                Book your vacation
            </div>
            <div className={styles.wrapper}>
                <div className={styles.footer__inputs}>
                <label className={styles.label_img} htmlFor="location"><Image src='/home.svg' width={21} height={21} alt='home'/></label>
                <label className={styles.label_desc}>Accommodation</label>
                    <select name='location' className={styles.input_location} placeholder='6730 Luna Land North Rhiannonmouth'>
                        <option className={styles.option} value="Luna Land">6730 Luna Land North Rhiannonmouth</option>
                        <option className={styles.option} value="Luna Land">6730 Luna Land North Rhiannonmouth</option>
                        <option className={styles.option} value="Luna Land">6730 Luna Land North Rhiannonmouth</option>
                        <option className={styles.option} value="Luna Land">6730 Luna Land North Rhiannonmouth</option>
                    </select>
                    <input className={styles.input_checkin} type="date" name="" id=""  />
                    <input className={styles.input_checkout} type="date" name="" id="" />
                    <label className={styles.label_img} htmlFor="location"><Image src='/person.svg' width={21} height={21} alt='home'/></label>
                    <label className={styles.label_desc}>Guests</label>
                   <select name='location' className={styles.input_guests} placeholder='4 adults'>
                        <option className={styles.option} value="guests">4 adults</option>
                        <option className={styles.option} value="1">1</option>
                        <option className={styles.option} value="2">2</option>
                        <option className={styles.option} value="3">3</option>
                    </select>
                </div>
                <input className={styles.btn} type="button" value="Search" />
            </div>
        </div>
    )
}
