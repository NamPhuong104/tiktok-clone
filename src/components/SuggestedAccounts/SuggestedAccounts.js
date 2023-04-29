import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
function SuggestedAccount({ lable }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccount.prototype = {
    lable: PropTypes.string.isRequired,
};

export default SuggestedAccount;
