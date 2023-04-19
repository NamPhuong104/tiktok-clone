import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                alt="Phuong"
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4c561f1baceeafad793506f5da4e6bc9~c5_100x100.jpeg?x-expires=1681891200&x-signature=8gW9jZLk4PuJ8aEliv2eRQQr5XY%3D"
            />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Nam Phuong</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyennamphuong</span>
            </div>
        </div>
    );
}

export default AccountItem;
