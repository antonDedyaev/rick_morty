import { ReactNode } from 'react';

interface IPopupProps {
    isActive: boolean;
    setIsActive: (state: boolean) => void;
    children: ReactNode;
}

const Popup = ({ isActive, setIsActive, children }: IPopupProps) => {
    return (
        <div
            className={isActive ? 'popupWrapper popupWrapper_active' : 'popupWrapper'}
            onClick={() => setIsActive(false)}
        >
            <div
                className={isActive ? 'popupWrapper__content popupWrapper__content_active' : 'popupWrapper__content'}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};
export default Popup;
