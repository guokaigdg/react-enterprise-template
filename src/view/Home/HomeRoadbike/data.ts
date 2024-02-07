// 下拉列表
const ShimanoOptionList = [
    {label: 'Dura-Ace R9270', value: 'R9270'},
    {label: 'Dura-Ace R9170', value: 'R9170'},
    {label: 'Ultegra R8170', value: 'R8170'},
    {label: 'Ultegra R8070', value: 'R8070'},
    {label: 'Ultegra R8020', value: 'R8020'},
    {label: '105 R7170', value: 'R7170'},
    {label: '105 R7020', value: 'R7020'}
];
const SramOptionList = [
    {label: 'Red eTap AXS HRD', value: 'RedeTapAXSHRD'},
    {label: 'Force eTap AXS HRD', value: 'ForceeTapAXSHRD'},
    {label: 'Rival eTap AXS HRD', value: 'RivaleTapAXSHRD'},
    {label: 'Force AXS HRD', value: 'ForceAXSHRD'}
];

// shimano
import dura_aceDi2 from '@/assets/images/bike/dura_aceDi2.png';
import dura_ace_r9100_y2017 from '@/assets/images/bike/dura_ace_r9100_y2017.png';
import ultegraDi2 from '@/assets/images/bike/ultegraDi2.png';
import ultegra_r8000_y2018 from '@/assets/images/bike/ultegra_r8000_y2018.png';
import R105Di2 from '@/assets/images/bike/105Di2.png';
import R105_R7000_y2019 from '@/assets/images/bike/105_R7000_y2019.png';

// sram

import RedeTapAXSHRD from '@/assets/images/bike/RedeTapAXSHRD.png';
import ForceeTapAXSHRD from '@/assets/images/bike/ForceeTapAXSHRD.png';
import RivaleTapAXSHRD from '@/assets/images/bike/RivaleTapAXSHRD.png';

const ShimanoData: {[key: string]: any} = {
    R9270: {
        img: dura_aceDi2,
        data: [
            {
                name: '手变',
                weight: 372
            },
            {
                name: '夹器',
                weight: 275
            },
            {
                name: '前拨',
                weight: 95
            },
            {
                name: '后拨',
                weight: 217
            },
            {
                name: '曲柄',
                weight: 685
            },
            {
                name: '链条',
                weight: 248
            },
            {
                name: '飞轮',
                weight: 223
            },
            {
                name: '小套总重',
                weight: 1009
            },
            {
                name: '大套总重',
                weight: 2165
            },
            {
                name: '牙盘齿数',
                weight: '50-34T'
            },
            {
                name: '曲柄长度',
                weight: '170mm'
            },
            {
                name: '飞轮齿数',
                weight: '11-30T'
            }
        ]
    },
    R9170: {
        img: dura_ace_r9100_y2017,
        data: [
            {
                name: '手变',
                weight: 320
            },
            {
                name: '夹器',
                weight: 301
            },
            {
                name: '前拨',
                weight: 104
            },
            {
                name: '后拨',
                weight: 197
            },
            {
                name: '曲柄',
                weight: 614
            },
            {
                name: '链条',
                weight: 247
            },
            {
                name: '飞轮',
                weight: 193
            },
            {
                name: '小套总重',
                weight: 972
            },
            {
                name: '大套总重',
                weight: 2026
            },
            {
                name: '牙盘齿数',
                weight: '50-34T'
            },
            {
                name: '曲柄长度',
                weight: '170mm'
            },
            {
                name: '飞轮齿数',
                weight: '11-28T'
            }
        ]
    },
    R8170: {
        img: ultegraDi2,
        data: [
            {
                name: '手变',
                weight: 403
            },
            {
                name: '夹器',
                weight: 327
            },
            {
                name: '前拨',
                weight: 111
            },
            {
                name: '后拨',
                weight: 260
            },
            {
                name: '曲柄',
                weight: 720
            },
            {
                name: '链条',
                weight: 252
            },
            {
                name: '飞轮',
                weight: 294
            },
            {
                name: '小套总重',
                weight: 1151
            },
            {
                name: '大套总重',
                weight: 2417
            },
            {
                name: '牙盘齿数',
                weight: '50-34T'
            },
            {
                name: '曲柄长度',
                weight: '170mm'
            },
            {
                name: '飞轮齿数',
                weight: '11-30T'
            }
        ]
    },
    R8070: {
        img: ultegra_r8000_y2018,
        data: [
            {
                name: '手变',
                weight: 360
            },
            {
                name: '夹器',
                weight: 331
            },
            {
                name: '前拨',
                weight: 132
            },
            {
                name: '后拨',
                weight: 240
            },
            {
                name: '曲柄',
                weight: 674
            },
            {
                name: '链条',
                weight: 257
            },
            {
                name: '飞轮',
                weight: 251
            },
            {
                name: '小套总重',
                weight: 1113
            },
            {
                name: '大套总重',
                weight: 2295
            },
            {
                name: '牙盘齿数',
                weight: '50-34T'
            },
            {
                name: '曲柄长度',
                weight: '170mm'
            },
            {
                name: '飞轮齿数',
                weight: '11-28T'
            }
        ]
    },
    R8020: {
        img: ultegra_r8000_y2018,
        data: [
            {
                name: '手变',
                weight: 99999999
            },
            {
                name: '夹器',
                weight: 99999999
            },
            {
                name: '前拨',
                weight: 99999999
            },
            {
                name: '后拨',
                weight: 99999999
            },
            {
                name: '曲柄',
                weight: 99999999
            },
            {
                name: '链条',
                weight: 99999999
            },
            {
                name: '飞轮',
                weight: 99999999
            },
            {
                name: '小套总重',
                weight: 99999999
            },
            {
                name: '大套总重',
                weight: 99999999
            },
            {
                name: '牙盘齿数',
                weight: '50-34T'
            },
            {
                name: '曲柄长度',
                weight: '170mm'
            },
            {
                name: '飞轮齿数',
                weight: '11-30T'
            }
        ]
    },
    R7170: {
        img: R105Di2,
        data: [
            {
                name: '手变',
                weight: 99999999
            },
            {
                name: '夹器',
                weight: 99999999
            },
            {
                name: '前拨',
                weight: 99999999
            },
            {
                name: '后拨',
                weight: 99999999
            },
            {
                name: '曲柄',
                weight: 99999999
            },
            {
                name: '链条',
                weight: 99999999
            },
            {
                name: '飞轮',
                weight: 99999999
            },
            {
                name: '小套总重',
                weight: 99999999
            },
            {
                name: '大套总重',
                weight: 99999999
            },
            {
                name: '牙盘齿数',
                weight: '50-34T'
            },
            {
                name: '曲柄长度',
                weight: '170mm'
            },
            {
                name: '飞轮齿数',
                weight: '11-30T'
            }
        ]
    },
    R7020: {
        img: R105_R7000_y2019,
        data: [
            {
                name: '手变',
                weight: 99999999
            },
            {
                name: '夹器',
                weight: 99999999
            },
            {
                name: '前拨',
                weight: 99999999
            },
            {
                name: '后拨',
                weight: 99999999
            },
            {
                name: '曲柄',
                weight: 99999999
            },
            {
                name: '链条',
                weight: 99999999
            },
            {
                name: '飞轮',
                weight: 99999999
            },
            {
                name: '小套总重',
                weight: 99999999
            },
            {
                name: '大套总重',
                weight: 99999999
            },
            {
                name: '牙盘齿数',
                weight: '50-34T'
            },
            {
                name: '曲柄长度',
                weight: '170mm'
            },
            {
                name: '飞轮齿数',
                weight: '11-30T'
            }
        ]
    }
};

const SramData: {[key: string]: any} = {
    RedeTapAXSHRD: {
        img: RedeTapAXSHRD,
        data: [
            {
                name: '手变',
                weight: 467
            },
            {
                name: '夹器',
                weight: 303
            },
            {
                name: '前拨',
                weight: 167
            },
            {
                name: '后拨',
                weight: 299
            },
            {
                name: '曲柄',
                weight: 577
            },
            {
                name: '链条',
                weight: 249
            },
            {
                name: '飞轮',
                weight: 183
            },
            {
                name: '小套总重',
                weight: 1246
            },
            {
                name: '大套总重',
                weight: 2255
            },
            {
                name: '牙盘齿数',
                weight: '48-35T'
            },
            {
                name: '曲柄长度',
                weight: '170mm'
            },
            {
                name: '飞轮齿数',
                weight: '10-28T'
            }
        ]
    },
    ForceeTapAXSHRD: {
        img: ForceeTapAXSHRD,
        data: [
            {
                name: '手变',
                weight: 476
            },
            {
                name: '夹器',
                weight: 346
            },
            {
                name: '前拨',
                weight: 176
            },
            {
                name: '后拨',
                weight: 301
            },
            {
                name: '曲柄',
                weight: 740
            },
            {
                name: '链条',
                weight: 259
            },
            {
                name: '飞轮',
                weight: 236
            },
            {
                name: '小套总重',
                weight: 1304
            },
            {
                name: '大套总重',
                weight: 2539
            },
            {
                name: '牙盘齿数',
                weight: '48-35T'
            },
            {
                name: '曲柄长度',
                weight: '170mm'
            },
            {
                name: '飞轮齿数',
                weight: '11-28T'
            }
        ]
    },
    RivaleTapAXSHRD: {
        img: RivaleTapAXSHRD,
        data: [
            {
                name: '手变',
                weight: 99999999
            },
            {
                name: '夹器',
                weight: 99999999
            },
            {
                name: '前拨',
                weight: 151
            },
            {
                name: '后拨',
                weight: 342
            },
            {
                name: '曲柄',
                weight: 865
            },
            {
                name: '链条',
                weight: 266
            },
            {
                name: '飞轮',
                weight: 283
            },
            {
                name: '小套总重',
                weight: 1303
            },
            {
                name: '大套总重',
                weight: 2717
            },
            {
                name: '牙盘齿数',
                weight: '48-35T'
            },
            {
                name: '曲柄长度',
                weight: '170mm'
            },
            {
                name: '飞轮齿数',
                weight: '11-30T'
            }
        ]
    },
    ForceAXSHRD: {
        img: R105_R7000_y2019,
        data: [
            {
                name: '手变',
                weight: 99999999
            },
            {
                name: '夹器',
                weight: 99999999
            },
            {
                name: '前拨',
                weight: 99999999
            },
            {
                name: '后拨',
                weight: 99999999
            },
            {
                name: '曲柄',
                weight: 99999999
            },
            {
                name: '链条',
                weight: 99999999
            },
            {
                name: '飞轮',
                weight: 99999999
            },
            {
                name: '小套总重',
                weight: 99999999
            },
            {
                name: '大套总重',
                weight: 99999999
            },
            {
                name: '牙盘齿数',
                weight: '50-34T'
            },
            {
                name: '曲柄长度',
                weight: '170mm'
            },
            {
                name: '飞轮齿数',
                weight: '11-30T'
            }
        ]
    }
};

export {ShimanoOptionList, SramOptionList, ShimanoData, SramData};
