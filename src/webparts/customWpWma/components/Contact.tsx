import * as React from 'react';
import styles from './CustomWpWma.module.scss';

export default class Contact extends React.Component<{}, {}> {
    public render(): React.ReactElement<{}> {
        return (
            <div className={styles.containerMain}>
                <div className={styles.contactCard}>
                    <div className={styles.Title}>Contact Information</div>
                </div>
                <div className={styles.contactCard}>
                    <div className={styles.Title}>Address</div>
                </div>
                <div className={styles.contactCard}>
                    <div className={styles.Title}>Emergency Contact</div>
                </div>
                <div className={styles.contactCard}>
                    <div className={styles.Title}>Dependant Info</div>
                </div>
                <div className={styles.contactCard}>
                    <div className={styles.Title}>Marital Info</div>
                </div>
                <div className={styles.contactCard}>
                    <div className={styles.Title}>Organization Info</div>
                </div>
            </div>
        );
    }
}