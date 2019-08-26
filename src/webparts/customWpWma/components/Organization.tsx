import * as React from 'react';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
// import { ContextualMenu } from 'office-ui-fabric-react/lib/ContextualMenu';

import styles from './CustomWpWma.module.scss';

export interface IBasicOrgState {
    showModal: boolean;
    isDraggable: boolean;
}


export default class Organization extends React.Component<{}, IBasicOrgState> {
    public state: IBasicOrgState = {
        showModal: false,
        isDraggable: false
    };

    // private _dragOptions: IDragOptions = {
    //     moveMenuItemText: 'Move',
    //     closeMenuItemText: 'Close',
    //     menu: ContextualMenu
    // };

    private _showModal = (): void => {
        this.setState({ showModal: true });
    };

    private _closeModal = (): void => {
        this.setState({ showModal: false });
    };

    public render(): React.ReactElement<{}> {
        return (
            <div className={styles.containerMain}>
                <div>
                    <div className={styles.orgCard} onClick={this._showModal}>
                        <div className={styles.userImage} onClick={this._showModal}>
                            <img src="https://binaryrepublik516.sharepoint.com/sites/SPGuru/_layouts/15/userphoto.aspx?size=S&accountname=" title="Smit Shah" />
                        </div>
                        <div className={styles.userData}>
                            <div className={styles.userName}>Smit Shah</div>
                            <div className={styles.userDesignation}>CEO</div>
                        </div>
                    </div>
                    <div className={styles.orgCard} onClick={this._showModal}>
                        <div className={styles.userImage}>
                            <img src="https://binaryrepublik516.sharepoint.com/sites/SPGuru/_layouts/15/userphoto.aspx?size=S&amp;accountname=smit.shah@binaryrepublik.com" title="Smit Shah" />
                        </div>
                        <div className={styles.userData}>
                            <div className={styles.userName}>Smit Shah</div>
                            <div className={styles.userDesignation}>COO</div>
                        </div>
                    </div>
                </div>

                <div className={styles.contactCard}>
                    <div className={styles.Title}>Direct Reports:</div>

                    <div className={styles.orgCardContainer}>
                        <div className={styles.orgCard} onClick={this._showModal}>
                            <div className={styles.userImage}>
                                <img src="https://binaryrepublik516.sharepoint.com/sites/SPGuru/_layouts/15/userphoto.aspx?size=S&accountname=" title="Smit Shah" />
                            </div>
                            <div className={styles.userData}>
                                <div className={styles.userName}>Smit Shah</div>
                                <div className={styles.userDesignation}>CEO</div>
                            </div>
                        </div>
                        <div className={styles.orgCard} onClick={this._showModal}>
                            <div className={styles.userImage}>
                                <img src="https://binaryrepublik516.sharepoint.com/sites/SPGuru/_layouts/15/userphoto.aspx?size=S&accountname=" title="Smit Shah" />
                            </div>
                            <div className={styles.userData}>
                                <div className={styles.userName}>Smit Shah</div>
                                <div className={styles.userDesignation}>COO</div>
                            </div>
                        </div>
                        <div className={styles.orgCard} onClick={this._showModal}>
                            <div className={styles.userImage}>
                                <img src="https://binaryrepublik516.sharepoint.com/sites/SPGuru/_layouts/15/userphoto.aspx?size=S&accountname=" title="Smit Shah" />
                            </div>
                            <div className={styles.userData}>
                                <div className={styles.userName}>Smit Shah</div>
                                <div className={styles.userDesignation}>COO</div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal titleAriaId="personDetails" subtitleAriaId="subtitleId" isOpen={this.state.showModal} onDismiss={this._closeModal} isBlocking={false} containerClassName={styles.modalContainer}>
                    <div className={styles.modalMain}>
                        <div className={styles.modalHeader}>
                            <div className={styles.modalClose}>
                                <DefaultButton onClick={this._closeModal} text="Close" />
                            </div>
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
                        </div>
                        <div id="subtitleId" className={styles.modalBody}>
                            <p>
                                Nam id mi justo. Nam vehicula vulputate augue, ac pretium enim rutrum ultricies. Sed aliquet accumsan varius. Quisque ac
                                auctor ligula. Fusce fringilla, odio et dignissim iaculis, est lacus ultrices risus, vitae condimentum enim urna eu nunc. In
                                risus est, mattis non suscipit at, mattis ut ante. Maecenas consectetur urna vel erat maximus, non molestie massa consequat.
                                Duis a feugiat nibh. Sed a hendrerit diam, a mattis est. In augue dolor, faucibus vel metus at, convallis rhoncus dui.
                            </p>
                        </div>
                        <div className={styles.modalFooter}>
                            <DefaultButton onClick={this._closeModal} text="Close" />
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}