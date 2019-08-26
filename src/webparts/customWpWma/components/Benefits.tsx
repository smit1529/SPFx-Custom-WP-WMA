import * as React from 'react';
import styles from './CustomWpWma.module.scss';

export default class Benefits extends React.Component<{}, {}> {
    public render(): React.ReactElement<{}> {
        return (
            <div className={styles.containerMain}>
                <div className={styles.contactCard}>
                    <div className={styles.Title}>WestRock Benefits Center</div>
                </div>
                <div className={styles.contactCard}>
                    <div className={styles.Title}>Benefits Administrators Contact List</div>
                </div>
            </div>
        );
    }
}