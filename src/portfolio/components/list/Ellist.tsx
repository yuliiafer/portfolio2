import { FC } from 'react';
import { DataModel } from '../../store/reducers/settings.reducer';

interface Props {
    data: DataModel;
}

export const Ellist: FC<Props> = ({data}) => {
    return (
        <div className='portfolioC'>
            <h1>
                {data.title}
            </h1>
            <figure className='portfolioImage'>
                <img src={data.imageUrl} alt='data' />
            </figure>
        </div>
    );
};

