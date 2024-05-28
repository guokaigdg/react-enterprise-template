import React, {useState, useEffect} from 'react';
import {useStores} from '@/store';
import {Button} from '@/components';
import {observer} from 'mobx-react-lite';
import './index.less';

const HomeTwo = () => {
    const {globalStore} = useStores();
    const {loading, data, getFetchGetTest} = globalStore;
    const [offset, setOffset] = useState<number>(20);
    // 查询
    const handleClick = () => {
        getFetchGetTest({
            limit: 500
        });
    };
    // 查询更多
    const handleGetMorePokemon = async () => {
        await getFetchGetTest({
            limit: 20,
            offset: offset
        });
        setOffset(offset + 20);
    };

    useEffect(() => {
        getFetchGetTest({
            limit: 20,
            offset: 0
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

            <div className='list-root'>
                {data.map((item: any) => (
                    <div key={item.name} className='pokemon-item' onClick={handleGetMorePokemon}>
                        <img alt='' className='img' src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`} />
                        <span>{item.name}</span>
                    </div>
                ))}
                <div className='pokemon-item-bottom'>
                    {loading ? <Button>loading</Button> : <Button onClick={handleGetMorePokemon}>查看更多</Button>}
                </div>
            </div>
        </div>
    );
};

export default observer(HomeTwo);
