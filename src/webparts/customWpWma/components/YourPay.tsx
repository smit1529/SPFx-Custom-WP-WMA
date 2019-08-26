import * as React from 'react';
import styles from './CustomWpWma.module.scss';

import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

export default class YourPay extends React.Component<{}, {}> {
    public render(): React.ReactElement<{}> {
        return (
            <div className={styles.containerMain}>
                <Pivot>
                    <PivotItem headerText='Your Pay' headerButtonProps={{ 'data-order': 1, 'data-title': 'Your Pay' }} >
                        <div className={styles.contactCard}>
                            <div className={styles.Title}>Paycheck Breakdown</div>
                        </div>
                        <div className={styles.contactCard}>
                            <div className={styles.Title}>Paycheck List</div>
                        </div>
                    </PivotItem>
                    <PivotItem headerText='Direct Deposit'>
                        <div className={styles.contactCard}>
                            <div className={styles.Title}>Active Accounts</div>
                        </div>
                    </PivotItem>
                </Pivot>

                <Toggle
                    defaultChecked={true}
                    // label="Show Pay"
                    onText="Show Pay"
                    offText="Show Pay"
                // onFocus={() => console.log('onFocus called')}
                // onBlur={() => console.log('onBlur called')}
                // onChange={this._onChange}
                />
            </div>
        );
    }
}