import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatarPreview')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/218847526571ba01baedfa5ec0bb0c2c~c5_100x100.jpeg?x-expires=1682917200&x-signature=v2A5Uf%2BIUB1kI4cW5FxI3j29CdU%3D"
                    alt=""
                />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>hihiPhuongne</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyen Nam Phuong </p>
            </div>
            <div className={cx('analytics')}>
                <strong className={cx('value')}>1M</strong>
                <p className={cx('lable')}>Followers</p>
                <strong className={cx('value')}>1B</strong>
                <p className={cx('lable')}>Likes</p>
            </div>
        </div>
    );
}

AccountPreview.prototype = {};

export default AccountPreview;
