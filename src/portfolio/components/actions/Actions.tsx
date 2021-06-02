import { FC, Fragment } from 'react';
import { MdNavigateNext } from 'react-icons/md';

interface Props {
    length: number;
    currIndex: number;
    next: () => void;
    disabled: boolean;
};

export const Actions: FC<Props> = ({
    length,
    currIndex,
    next,
    disabled,
}) => {

    const actIndicators = () => {
        let elem: JSX.Element[] = []
        for (let i = 0; i < length; i ++) {
            elem = [
                ...elem,
                <div key={i}
                className={`line line--${i + i} 
                ${currIndex === i ? 'active' : '' 
                }`}>
                </div>,
            ];
        }
        return elem;
    }
    return (
        <Fragment>
            <div className='actionsFragm'>
                <button className='btn next' onClick={next} disabled={disabled}>
                    <MdNavigateNext />
                </button>
            </div>
            <div className='more'>
                More...
            </div>
            <div className='indicators'>
                <span>
                    01
                </span>
                    {actIndicators()}
                <span>
                    0{length}
                </span>
            </div>
        </Fragment>
    )
};

