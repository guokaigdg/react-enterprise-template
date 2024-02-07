import React, {useEffect, useState} from 'react';
import {Select, Button} from '@/components';
import {ShimanoOptionList, SramOptionList, ShimanoData, SramData} from './data';
import CX from 'classnames';
import './index.less';

type eventType = React.ChangeEvent<HTMLSelectElement>;

interface weigntType {
    name: string;
    weight: number;
}
interface ChooseItemType {
    img: string;
    data: weigntType[];
}

const HomeOne = () => {
    const [shimanoChooseItem, setShimanoChooseItem] = useState<ChooseItemType>();
    const [sramChooseItem, setSramChooseItem] = useState<ChooseItemType>();
    const [isShowWinWeight, setIsShowWinWeight] = useState<boolean>(true);
    const [isDifference, setIsDifference] = useState<boolean>(true);

    const handleChangeShimano = (e: eventType) => {
        const neme = e.target.value;
        if (neme) {
            const res = ShimanoData[neme];
            setShimanoChooseItem(res);
        }
    };
    const handleChangeSram = (e: eventType) => {
        const neme = e.target.value;
        if (neme) {
            const res = SramData[neme];
            setSramChooseItem(res);
        }
    };

    const handleChangeIsShowWeight = () => {
        setIsShowWinWeight(!isShowWinWeight);
    };

    const handleChangeIsDifference = () => {
        setIsDifference(!isDifference);
    };

    useEffect(() => {
        setShimanoChooseItem(ShimanoData.R9270);
        setSramChooseItem(SramData.RedeTapAXSHRD);
    }, []);

    return (
        <div className='home-bike'>
            <span className='order-title'>套件重量查询</span>
            <div className='control-content'>
                功能区
                <Button onClick={handleChangeIsShowWeight} active>
                    {!isShowWinWeight ? '开启' : '关闭'}
                    对比
                </Button>
                <Button onClick={handleChangeIsDifference} active>
                    {!isDifference ? '显示' : '关闭'}
                    差值
                </Button>
            </div>
            {/* <div className='logo-root'>
                <img
                    className='logo-shimano'
                    alt=''
                    src='https://trademark.zbjimg.com/pattern-prod/2018/image_54/33034467.jpg'
                />
                <img
                    className='logo-shimano'
                    alt=''
                    src='https://trademark.zbjimg.com/pattern-prod/2018/image_54/33034467.jpg'
                />
            </div> */}
            <div className='search-wrap'>
                <div>
                    {/* <div className='logo-root'>Shimano</div> */}
                    <div className='select-wrap'>
                        <Select defaultValue='R9270' data={ShimanoOptionList} onChange={handleChangeShimano} />
                    </div>
                    <div className='img-root'>
                        {shimanoChooseItem && <img alt='' className='img-icon' src={shimanoChooseItem.img} />}
                    </div>
                    <div className='bike-table'>
                        {shimanoChooseItem &&
                            sramChooseItem &&
                            shimanoChooseItem.data.map((item: weigntType, index: number) => (
                                <div
                                    className={CX('bike-item', {
                                        'win-weight': isShowWinWeight && item.weight < sramChooseItem.data[index].weight
                                    })}
                                    key={item.name}
                                >
                                    <span className='name'> {item.name}：</span>
                                    <span className='weight'>
                                        {item.weight}
                                        {!['牙盘齿数', '曲柄长度', '飞轮齿数'].includes(item.name) && <>g</>}
                                    </span>
                                </div>
                            ))}
                    </div>
                </div>
                <div>
                    <div className='select-wrap'>
                        <Select defaultValue='Red' data={SramOptionList} onChange={handleChangeSram} />
                    </div>
                    <div className='img-root'>
                        {sramChooseItem && <img alt='' className='img-icon img-icon-sram' src={sramChooseItem.img} />}
                    </div>
                    <div className='bike-table'>
                        {sramChooseItem &&
                            shimanoChooseItem &&
                            sramChooseItem.data.map((item: weigntType, index: number) => (
                                <div
                                    className={CX('bike-item', {
                                        'win-weight':
                                            isShowWinWeight && item.weight < shimanoChooseItem.data[index].weight
                                    })}
                                    key={item.name}
                                >
                                    <span className='weight'>
                                        {item.weight}
                                        {!['牙盘齿数', '曲柄长度', '飞轮齿数'].includes(item.name) && <>g</>}
                                    </span>
                                    {isDifference && !['牙盘齿数', '曲柄长度', '飞轮齿数'].includes(item.name) && (
                                        <span className='difference'>
                                            {item.weight - shimanoChooseItem.data[index].weight}g
                                        </span>
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeOne;
