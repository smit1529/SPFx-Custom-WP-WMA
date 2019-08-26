import * as React from 'react';
import styles from './CustomWpWma.module.scss';
import { ICustomWpWmaProps } from './ICustomWpWmaProps';
import { Nav } from 'office-ui-fabric-react/lib/Nav';

import Contact from './Contact';
import YourPay from './YourPay';
import Organization from './Organization';
import Benefits from './Benefits';

export interface IDetailstate {
  selectedKey: string;
}

export default class CustomWpWma extends React.Component<ICustomWpWmaProps, IDetailstate> {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: 'Contact'
    }
  }
  public render(): React.ReactElement<ICustomWpWmaProps> {
    return (
      <div className={styles.container}>
        <div className={styles.leftNav}>
          <div className={styles.userDetails}>
            <div className={styles.userImage}>
              <a href="https://aus.delve.office.com/?p=smit.shah@binaryrepublik.com&amp;v=profiledetails" data-interception="off" target="_blank">
                <img src="https://binaryrepublik516.sharepoint.com/sites/SPGuru/_layouts/15/userphoto.aspx?size=S&amp;accountname=smit.shah@binaryrepublik.com" title="Smit Shah" />
              </a>
            </div>
            <div className={styles.userData}>
              <div className={styles.userName}>
                Smit Shah
            </div>
              <div className={styles.userDesignation}>
                Paper Machine Foreman
            </div>
              <div className={styles.userDescription}>
                S-3704-Dir-Sheeters General
              </div>
            </div>
          </div>

          <div className={styles.manageAssets}>
            <Nav
              selectedKey={this.state.selectedKey}
              onLinkClick={this._onLinkClickAssets}
              groups={[
                {
                  // name: 'Configuration Keys',
                  links: [
                    { name: 'Contact', url: '', key: 'Contact', iconProps: { iconName: 'Contact' } },
                    { name: 'Your Pay', url: '', key: 'YourPay', iconProps: { iconName: 'Mail' } },
                    { name: 'Organization', url: '', key: 'Organization', iconProps: { iconName: 'StackIndicator' } },
                    { name: 'Benefits', url: '', key: 'Benefits', iconProps: { iconName: 'Hospital' } }
                  ]
                }
              ]}
            />
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={this.state.selectedKey == 'Contact' ? styles.showDiv : styles.hideen}>
            <Contact></Contact>
          </div>
          <div className={this.state.selectedKey == 'YourPay' ? styles.showDiv : styles.hideen}>
            <YourPay></YourPay>
          </div>
          <div className={this.state.selectedKey == 'Organization' ? styles.showDiv : styles.hideen}>
            <Organization></Organization>
          </div>
          <div className={this.state.selectedKey == 'Benefits' ? styles.showDiv : styles.hideen}>
            <Benefits></Benefits>
          </div>
        </div>
      </div>
    );
  }

  public _onLinkClickAssets = (event, item) => {
    if (item.name == 'Contact') {
      this.setState({ selectedKey: 'Contact' });
    }
    else if (item.name == 'Your Pay') {
      this.setState({ selectedKey: 'YourPay' });
    }
    else if (item.name == 'Organization') {
      this.setState({ selectedKey: 'Organization' });
    }
    else if (item.name == 'Benefits') {
      this.setState({ selectedKey: 'Benefits' });
    }
  }
}