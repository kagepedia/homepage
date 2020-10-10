const AD_CLIENT_ID = process.env.AD_CLIENT_ID;

// IDが取得できない場合を想定する
export const existsAdClientId = AD_CLIENT_ID !== '';

export const GAD_CLIENT_ID = AD_CLIENT_ID ? AD_CLIENT_ID : '';
