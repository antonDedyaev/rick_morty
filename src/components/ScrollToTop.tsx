import { FC, useState } from 'react';
import arrowTop from '../assets/images/arrow-up.svg';

const ScrollToTop: FC = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button className="arrowButton">
            <div onClick={scrollUp} style={{ display: visible ? 'inline' : 'none' }}>
                <img src={arrowTop} alt="Стрелка вверх" />
            </div>
        </button>
    );
};
export default ScrollToTop;
