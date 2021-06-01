import { FC, Fragment } from 'react';
import { MdNavigateNext } from 'react-icons/md';

interface Props {
    length: number;
    index: number;
    next: () => void;
    disabled: boolean;
};

export const Actions: FC<Props> = ({
    length,
    index,
    next,
    disabled,
}) => {
    return (
        <Fragment>
            <div className='actions'>
                <button className='next' disabled={disabled}>
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
                ...
                <span>
                    0{length}
                </span>
            </div>
        </Fragment>
    )
};

