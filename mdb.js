//load m.js before loading this file

/*
network,company,name,card //����,��˾,Ʒ�ƺ�����,������
cardfee,monthly,monthlow,rechargeyear, //����,����,���������(����������ѵ���0),ÿ����Ҫ��ֵ(�󸶷ѿ���-1)
inctelany,inctelcmcc,inctelunicom,inctelfixed, //���⺬ͨ��������(�ɴ��κε绰),(�ƶ��ֻ�),(��ͨ�ֻ�),(�̶��绰)
incsmsany,incsmscmcc,incsmsunicom,incsmsweb,incgprskb, //���������(�����κεط�),(�ƶ��ֻ�),(��ͨ�ֻ�),(��վ)
dialcmcc1,dialcmcc2,dialcmcc3,dialcmcc4, //�������ƶ��ֻ��Ļ���(��1����),(��2����),(��3����),(��3�����Ժ�)
dialunicom1,dialunicom2,dialunicom3,dialunicom4, //��������ͨ�ֻ��Ļ���(��1����),(��2����),(��3����),(��3�����Ժ�)
dialfixed1,dialfixed2,dialfixed3,dialfixed4, //�������̶��绰�Ļ���(��1����),(��2����),(��3����),(��3�����Ժ�)
dialmzone1,dialmzone2,dialmzone3,dialmzone4, //���������еش��Ļ���(��1����),(��2����),(��3����),(��3�����Ժ�)
recvcmcc1,recvcmcc2,recvcmcc3,recvcmcc4, //�����ƶ��ֻ�����Ļ���(��1����),(��2����),(��3����),(��3�����Ժ�)
recvunicom1,recvunicom2,recvunicom3,recvunicom4, //������ͨ�ֻ�����Ļ���(��1����),(��2����),(��3����),(��3�����Ժ�)
recvfixed1,recvfixed2,recvfixed3,recvfixed4, //�����̶��绰����Ļ���(��1����),(��2����),(��3����),(��3�����Ժ�)
recvmzone1,recvmzone2,recvmzone3,recvmzone4, //�������еش�����Ļ���(��1����),(��2����),(��3����),(��3�����Ժ�)
relativecount,relativecmcc,relativeunicom,relativefixed,relativemzone, //�����������Ѻ�����,�ƶ��ֻ������ۿ�,��ͨ�ֻ������ۿ�,�̶��绰�����ۿ�,���еش������ۿ�
smscmcc,smsunicom,smsweb, //���ƶ��ֻ����ż�,����ͨ�ֻ����ż�,����վ���ż�
wap,wapdiscount,gprs,cdma1x, //WAP��(ÿ����),ҹ��WAP��,GPRS��(ÿKB),CDMA1X��(ÿKB) (�粻֧��ĳ��ʽ����,��0)
calleridshow, //Ҫ������ʾ�������(������,��0)
miscinfo //��ע�ı�
*/

mobiles=37;
P=new Array(mobiles);
mname=new Array(mobiles);

function calcall(signal,hidename,needwap,needgprs,needcdma1x) {
var i=1;

mm=new mobile('g','�ƶ�','ȫ��ͨ����','gotone',   60,50,0,-1,    0,0,0,0,        0,0,0,0,0,
0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   
0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,
0,0,0,0,0,    0.1,0.15,0.15,   0.15,0.15,0.03,0,    10,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','88�ײ�88Ԫ','gotone',   60,88,0,-1,    380,0,0,0,        0,0,0,0,0,
0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   
0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,
0,0,0,0,0,    0.1,0.15,0.15,   0.15,0.15,0.03,0,    10,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','88�ײ�188Ԫ','gotone',    60,188,0,-1,    900,0,0,0,        0,0,0,0,0,
0.35,0.35,0.35,0.35,    0.35,0.35,0.35,0.35,    0.35,0.35,0.35,0.35,    0.35,0.35,0.35,0.35,    0.35,0.35,0.35,0.35,    
0.35,0.35,0.35,0.35,    0.35,0.35,0.35,0.35,    0.35,0.35,0.35,0.35,    0.35,0.35,0.35,0.35,    0.35,0.35,0.35,0.35,    
0,0,0,0,0,    0.1,0.15,0.15,   0.15,0.15,0.03,0,    10,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','88�ײ�288Ԫ','gotone',    60,288,0,-1,    1540,0,0,0,        0,0,0,0,0,
0.3,0.3,0.3,0.3,   0.3,0.3,0.3,0.3,   0.3,0.3,0.3,0.3,   0.3,0.3,0.3,0.3,   
0.3,0.3,0.3,0.3,   0.3,0.3,0.3,0.3,   0.3,0.3,0.3,0.3,   0.3,0.3,0.3,0.3,   
0,0,0,0,0,    0.1,0.15,0.15,   0.15,0.15,0.03,0,    10,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','88�ײ�388Ԫ','gotone',    60,388,0,-1,    2400,0,0,0,        0,0,0,0,0,
0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    
0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    
0,0,0,0,0,    0.1,0.15,0.15,   0.15,0.15,0.03,0,    10,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','88�ײ�488Ԫ','gotone',    60,488,0,-1,    3600,0,0,0,        0,0,0,0,0,
0.15,0.15,0.15,0.15,    0.15,0.15,0.15,0.15,    0.15,0.15,0.15,0.15,    0.15,0.15,0.15,0.15,    
0.15,0.15,0.15,0.15,    0.15,0.15,0.15,0.15,    0.15,0.15,0.15,0.15,    0.15,0.15,0.15,0.15,    
0,0,0,0,0,    0.1,0.15,0.15,   0.15,0.15,0.03,0,    10,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','88�ײ�588Ԫ','gotone',    60,588,0,-1,    5000,0,0,0,        0,0,0,0,0,
0.1,0.1,0.1,0.1,   0.1,0.1,0.1,0.1,   0.1,0.1,0.1,0.1,   0.1,0.1,0.1,0.1,   
0.1,0.1,0.1,0.1,   0.1,0.1,0.1,0.1,   0.1,0.1,0.1,0.1,   0.1,0.1,0.1,0.1,   
0,0,0,0,0,    0.1,0.15,0.15,   0.15,0.15,0.03,0,    10,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','��ͨ��', 'gotone',  60,0,0,200,    0,0,0,0,        0,0,0,0,0,
0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   
0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   
0,0,0,0,0,    0.1,0.15,0.15,   0.15,0.15,0.03,0,    0,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','������','szx',   60,0,0,200,    0,0,0,0,        0,0,0,0,0,
0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   
0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   
0,0,0,0,0,    0.15,0.2,0.2,   0,0,0,0,    0,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','���еش�10Ԫ����','mzone',   60,10,0,200,    0,20,0,0,        0,40,0,0,0,
0.3,0.3,0.3,0.3,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.2,0.2,0.2,0.2,   
0.3,0.3,0.3,0.3,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.2,0.2,0.2,0.2,   
1,1,1,1,0.5,    0.1,0.15,0.1,   0.15,0.15,0.03,0,    0,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','���еش�20Ԫ����','mzone',   60,20,0,200,    0,20,0,0,        0,150,0,0,0,
0.3,0.3,0.3,0.3,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.2,0.2,0.2,0.2,   
0.3,0.3,0.3,0.3,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.2,0.2,0.2,0.2,   
1,1,1,1,0.5,    0.1,0.15,0.1,   0.15,0.15,0.03,0,    0,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','���еش�20Ԫ����','mzone',   60,20,0,200,    0,0,0,0,        0,260,0,0,0,
0.3,0.3,0.3,0.3,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.2,0.2,0.2,0.2,   
0.3,0.3,0.3,0.3,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.2,0.2,0.2,0.2,   
1,1,1,1,0.5,    0.1,0.15,0.1,   0.15,0.15,0.03,0,    0,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','���еش�20ԪGPRS','mzone',   60,20,0,200,    0,0,0,0,        0,100,0,0,5000,
0.3,0.3,0.3,0.3,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.2,0.2,0.2,0.2,   
0.3,0.3,0.3,0.3,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.2,0.2,0.2,0.2,   
1,1,1,1,0.5,    0.1,0.15,0.1,   0.15,0.15,0.03,0,    0,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','���еش�30Ԫ����','mzone',   60,30,0,200,    0,0,0,0,        0,420,0,0,0,
0.3,0.3,0.3,0.3,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.2,0.2,0.2,0.2,   
0.3,0.3,0.3,0.3,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.2,0.2,0.2,0.2,   
1,1,1,1,0.5,    0.1,0.15,0.1,   0.15,0.15,0.03,0,    0,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','���еش�40Ԫ����','mzone',   60,20,0,200,    0,0,0,0,        0,620,0,0,0,
0.3,0.3,0.3,0.3,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.2,0.2,0.2,0.2,   
0.3,0.3,0.3,0.3,   0.6,0.6,0.6,0.6,   0.6,0.6,0.6,0.6,   0.2,0.2,0.2,0.2,   
1,1,1,1,0.5,    0.1,0.15,0.1,   0.15,0.15,0.03,0,    0,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','�����мӼӿ���˵��','szxjj',   60,0,50,200,    0,0,0,0,        0,0,0,0,0,
0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   
0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   
0,0,0,0,0,    0.1,0.15,0.15,   0.15,0.15,0.03,0,    0,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','�����мӼӿ��Ӽ��ײ�28','szxjj',   60,28,0,200,    80,0,0,0,        0,0,0,0,0,
0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   
0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   
0,0,0,0,0,    0.1,0.15,0.15,   0.15,0.15,0.03,0,    0,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','�����мӼӿ��Ӽ��ײ�35','szxjj',   60,35,0,200,    100,0,0,0,        0,0,0,0,0,
0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   
0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   
0,0,0,0,0,    0.1,0.15,0.15,   0.15,0.15,0.03,0,    0,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','�����мӼӿ��Ӽ��ײ�50','szxjj',   60,50,0,200,    150,0,0,0,        0,0,0,0,0,
0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   
0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   
0,0,0,0,0,    0.1,0.15,0.15,   0.15,0.15,0.03,0,    0,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','�ƶ�','�����д��ڿ�','szxdz',   60,10,0,200,    0,0,0,0,        0,0,0,0,0,
0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   
0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   0.6,0.4,0.2,0.2,   
0,0,0,0,0,    0.15,0.2,0.2,   0.15,0.15,0.03,0,    0,
'��ѯ�绰1860');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','��ͨ','����ͨ','ryt',   30,0,0,200,    0,0,0,0,        0,0,0,0,0,
0.54,0.54,0.54,0.54,    0.54,0.54,0.54,0.54,    0.54,0.54,0.54,0.54,    0.54,0.54,0.54,0.54,    
0.54,0.54,0.54,0.54,    0.54,0.54,0.54,0.54,    0.54,0.54,0.54,0.54,    0.54,0.54,0.54,0.54,    
5,0.52,0.52,0.52,0.52,    0.1,0.1,0.1,   0.1,0.05,0,0,    0,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','��ͨ','����ͨ+���˸���','ryt',   30,9,0,200,    0,0,0,0,        0,0,0,0,0,
0.54,0.3,0.3,0.3,    0.54,0.3,0.3,0.3,    0.54,0.3,0.3,0.3,    0.54,0.3,0.3,0.3,    
0.54,0.3,0.3,0.3,    0.54,0.3,0.3,0.3,    0.54,0.3,0.3,0.3,    0.54,0.3,0.3,0.3,    
0,0,0,0,0,    0.1,0.1,0.1,   0.1,0.05,0,0,    0,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','��ͨ','����ͨ+��������','ryt',   30,26,0,200,    0,0,0,0,        0,0,0,0,0,
0.54,0.54,0.54,0.54,    0.54,0.54,0.54,0.54,    0.54,0.54,0.54,0.54,    0.54,0.54,0.54,0.54,    
0,0,0,0,       0,0,0,0,       0.54,0.54,0.54,0.54,       0,0,0,0,       
5,0.52,0.52,0.52,0.52,    0.1,0.1,0.1,   0.1,0.05,0,0,    0,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','��ͨ','����ͨ���ڿ�','ryt',   30,12,0,200,    0,0,0,0,        0,0,0,0,0,
0.15,0.15,0.15,0.15,   0.15,0.15,0.15,0.15,   0.54,0.54,0.54,0.54,     0.15,0.15,0.15,0.15,   
0.15,0.15,0.15,0.15,   0.15,0.15,0.15,0.15,   0.54,0.54,0.54,0.54,     0.15,0.15,0.15,0.15,   
0,0,0,0,0,    0.1,0.1,0.1,   0.1,0.05,0,0,    0,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','��ͨ','����ͨ','sjt',   50,50,0,600,    0,0,0,0,        0,0,0,0,0,
0.36,0.36,0.36,0.36,    0.36,0.36,0.36,0.36,    0.36,0.36,0.36,0.36,    0.36,0.36,0.36,0.36,    
0.36,0.36,0.36,0.36,    0.36,0.36,0.36,0.36,    0.36,0.36,0.36,0.36,    0.36,0.36,0.36,0.36,    
0,0,0,0,0,    0.1,0.1,0.1,   0.1,0.05,0,0,    0,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','��ͨ','������ͨ������','xsjt',   50,0,0,600,    0,0,0,0,        0,0,0,0,0,
0.54,0.54,0.54,0.54,    0.54,0.54,0.54,0.54,    0.54,0.54,0.54,0.54,    0.54,0.54,0.54,0.54,    
0.54,0.54,0.54,0.54,    0.54,0.54,0.54,0.54,    0.54,0.54,0.54,0.54,    0.54,0.54,0.54,0.54,    
5,0.89,0.89,0.89,0.89,    0.1,0.1,0.1,   0.1,0.05,0,0,    0,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','��ͨ','������ͨ��ֵר��','xsjt',   50,50,0,600,    200,0,0,0,        0,0,0,0,0,
0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   
0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   
5,0.89,0.89,0.89,0.89,    0.1,0.1,0.1,   0.1,0.05,0,0,    0,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','��ͨ','������ͨ����ר��','xsjt',   50,100,0,600,    500,0,0,0,        0,0,0,0,0,
0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   
0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   
5,0.89,0.89,0.89,0.89,    0.1,0.1,0.1,   0.1,0.05,0,0,    0,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','��ͨ','������ͨ����ר��','xsjt',   50,200,0,600,    1000,0,0,0,        0,0,0,0,0,
0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   
0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   
5,0.89,0.89,0.89,0.89,    0.1,0.1,0.1,   0.1,0.05,0,0,    0,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','��ͨ','������ͨVIPר��','xsjt',   50,300,0,600,    2500,0,0,0,        0,0,0,0,0,
0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   
0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   
5,0.89,0.89,0.89,0.89,    0.1,0.1,0.1,   0.1,0.05,0,0,    0,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','��ͨ','100��','cu100200',   50,100,0,0,    500,0,0,0,        0,0,0,0,0,
0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   
0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   
5,0.89,0.89,0.89,0.89,    0.1,0.1,0.1,   0.1,0.05,0,0,    10,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','��ͨ','200��','cu100200',   50,200,0,0,    1000,0,0,0,        0,0,0,0,0,
0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   
0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   0.28,0.28,0.28,0.28,   
5,0.89,0.89,0.89,0.89,    0.1,0.1,0.1,   0.1,0.05,0,0,    10,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','��ͨ','58ϵ��58Ԫ','cu58',   50,58,0,0,    145,0,0,0,        0,0,0,0,0,
0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   
0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   
0,0,0,0,0,    0.1,0.1,0.1,   0.1,0.05,0,0,    10,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','��ͨ','58ϵ��158Ԫ','cu58',   50,158,0,0,    270,0,0,0,        0,0,0,0,0,
0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    
0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    
0,0,0,0,0,    0.1,0.1,0.1,   0.1,0.05,0,0,    10,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('g','��ͨ','58ϵ��258Ԫ','cu58',   50,258,0,0,    520,0,0,0,        0,0,0,0,0,
0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    
0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    
0,0,0,0,0,    0.1,0.1,0.1,   0.1,0.05,0,0,    10,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('c','��ͨ','����133������','ry133',   100,0,0,800,    0,0,0,0,        0,0,0,0,0,
0.36,0.36,0.36,0.36,     0.18,0.18,0.18,0.18,    0.54,0.54,0.54,0.54,     0.36,0.36,0.36,0.36,   
0.36,0.36,0.36,0.36,     0.18,0.18,0.18,0.18,    0.54,0.54,0.54,0.54,     0.36,0.36,0.36,0.36,   
5,0.78,0.83,0.80,0.78,    0.1,0.1,0.1,   0.1,0.05,0,0,    0,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('c','��ͨ','����133���ſ�','ry133',   100,0,0,800,    0,0,0,0,        250,0,0,0,0,
0.36,0.36,0.36,0.36,     0.18,0.18,0.18,0.18,    0.54,0.54,0.54,0.54,     0.36,0.36,0.36,0.36,   
0,0,0,0,       0,0,0,0,       0,0,0,0,       0,0,0,0,       
5,0.78,0.83,0.80,0.78,    0.1,0.1,0.1,   0.1,0.05,0,0,    0,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('c','��ͨ','������133�����ײ�','xsj133',   100,0,0,300,    0,0,0,0,        0,0,0,0,0,
0.36,0.36,0.36,0.36,     0.18,0.18,0.18,0.18,    0.54,0.54,0.54,0.54,     0.36,0.36,0.36,0.36,   
0.36,0.36,0.36,0.36,     0.18,0.18,0.18,0.18,    0.54,0.54,0.54,0.54,     0.36,0.36,0.36,0.36,   
0,0,0,0,0,    0.1,0.1,0.1,   0.1,0.05,0,0,    0,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('c','��ͨ','������133���¿�','xsj133',   100,30,0,300,    110,0,0,0,        0,0,0,0,0,
0.36,0.36,0.36,0.36,     0.18,0.18,0.18,0.18,    0.54,0.54,0.54,0.54,     0.36,0.36,0.36,0.36,   
0.36,0.36,0.36,0.36,     0.18,0.18,0.18,0.18,    0.54,0.54,0.54,0.54,     0.36,0.36,0.36,0.36,   
0,0,0,0,0,    0.1,0.1,0.1,   0.1,0.05,0,0,    0,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('c','��ͨ','����ͨ','xyt',   100,39.6,0,300,    99,0,0,0,        0,0,0,0,0,
0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   
0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   0.4,0.4,0.4,0.4,   
0,0,0,0,0,    0.1,0.1,0.1,   0.1,0.05,0,0,    0,
'��ѯ�绰1001');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('p','����','С��ͨԤ����','xlt',   0,9,0,100,    0,0,0,0,        0,0,0,0,0,
0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    0.2,0.2,0.2,0.2,    
0,0,0,0,   0,0,0,0,   0,0,0,0,   0,0,0,0,   
0,0,0,0,0,    0.08,0.08,0.08,   0,0,0,0,    0,
'��ѯ�绰10000');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

mm=new mobile('p','����','С��ͨ�󸶷�','xlt',   0,30,0,0,    0,0,0,0,        0,0,0,0,0,
0.22,0,0,0.11,     0.22,0,0,0.11,     0.22,0,0,0.11,     0.22,0,0,0.11,     
0,0,0,0,   0,0,0,0,   0,0,0,0,   0,0,0,0,   
0,0,0,0,0,    0.08,0.08,0.08,   0,0,0,0,    0,
'��ѯ�绰10000');
if ( (signal && (mm.network=='p')) || 
(hidename && (mm.rechargeyear==-1)) || 
(needwap && (mm.wap==0)) || 
(needgprs && (mm.gprs==0)) || 
(needcdma1x && (mm.cdma1x==0)) ) {
P[i]=Number.MAX_VALUE//һƱ���
} else {
P[i]=price(mm);mname[i++]=(mm.company+'&nbsp;'+mm.name+'&nbsp;'+mm.miscinfo);
}

}//end function calcall