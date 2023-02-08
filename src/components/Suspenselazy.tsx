import React, {Suspense, lazy} from 'react';

const Suspenselazy = (props: any) => {
    return <Suspense fallback={<>...</>}>{React.createElement(lazy(props))}</Suspense>;
};

export default Suspenselazy;
