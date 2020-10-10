const GTM_ID = process.env.GTM_ID;

// IDが取得できない場合を想定する
export const existsGaId = GTM_ID !== '';

export const GTM_TRACKING_ID = GTM_ID ? GTM_ID : '';
