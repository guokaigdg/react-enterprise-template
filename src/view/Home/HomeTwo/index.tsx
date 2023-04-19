import React, {useEffect} from 'react';
import {useStores} from '@/store';
import {Button} from '@/components';
import {observer} from 'mobx-react-lite';
import './index.less';

const HomeTwo = () => {
    const {globalStore} = useStores();
    const {loading, data, getFetchGetTest} = globalStore;
    // 查询
    const handleClick = () => {
        getFetchGetTest({
            limit: 500
        });
    };

    useEffect(() => {
        getFetchGetTest({
            limit: 500
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='home-two-root'>
            <div className='search-wrap'>
                <input className='input' type='search' placeholder='输入宝可梦名称'></input>
                <Button className='search-btn' onClick={handleClick}>
                    查询
                </Button>
            </div>

            {!loading && (
                <div className='list-root'>
                    {data.map((item: any) => (
                        <div key={item.name} className='pokemon-item'>
                            <img
                                alt=''
                                className='img'
                                src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
                            />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default observer(HomeTwo);
