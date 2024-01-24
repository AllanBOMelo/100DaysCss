import React from 'react';
import styles from './Gallery.module.css';
import Day2Frame from '../frames/Day2Frame';

const Gallery: React.FC = () => {
    return (
        <main className={styles.galleryView}>
            <header className={styles.headerContainer}>
                <h1 className={styles.headerText}>Frames</h1>
            </header>
            <section className={styles.galleryContainer}>
                <div className={styles.galleryContainerCell}><Day2Frame /></div>
                <div className={styles.galleryContainerCell}><Day2Frame /></div>
                <div className={styles.galleryContainerCell}><Day2Frame /></div>
                <div className={styles.galleryContainerCell}><Day2Frame /></div>
               
            </section>
        </main>
    );
};

export default Gallery;
