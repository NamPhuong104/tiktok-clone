import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy offset={[-20, 0]} interactive delay={[1000, 0]} render={renderPreview} placement="bottom-start">
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/218847526571ba01baedfa5ec0bb0c2c~c5_100x100.jpeg?x-expires=1682917200&x-signature=v2A5Uf%2BIUB1kI4cW5FxI3j29CdU%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>hihiPhuongne</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Nguyen Nam Phuong </p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.prototype = {};

export default AccountItem;
