//load cookie.js and const.js and math.js before loading this file

function mobile(
network,company,name,card, //����,��˾,Ʒ�ƺ�����,������
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
) {
this.network=network;this.company=company;this.name=name;this.card=card;
this.cardfee=cardfee;this.monthly=monthly;this.monthlow=monthlow;this.rechargeyear=rechargeyear;
this.inctelany=inctelany;this.inctelcmcc=inctelcmcc;this.inctelunicom=inctelunicom;this.inctelfixed=inctelfixed;
this.incsmsany=incsmsany;this.incsmscmcc=incsmscmcc;this.incsmsunicom=incsmsunicom;this.incsmsweb=incsmsweb;this.incgprskb=incgprskb;
this.dialcmcc1=dialcmcc1;this.dialcmcc2=dialcmcc2;this.dialcmcc3=dialcmcc3;this.dialcmcc4=dialcmcc4;
this.dialunicom1=dialunicom1;this.dialunicom2=dialunicom2;this.dialunicom3=dialunicom3;this.dialunicom4=dialunicom4;
this.dialfixed1=dialfixed1;this.dialfixed2=dialfixed2;this.dialfixed3=dialfixed3;this.dialfixed4=dialfixed4;
this.dialmzone1=dialmzone1;this.dialmzone2=dialmzone2;this.dialmzone3=dialmzone3;this.dialmzone4=dialmzone4;
this.recvcmcc1=recvcmcc1;this.recvcmcc2=recvcmcc2;this.recvcmcc3=recvcmcc3;this.recvcmcc4=recvcmcc4;
this.recvunicom1=recvunicom1;this.recvunicom2=recvunicom2;this.recvunicom3=recvunicom3;this.recvunicom4=recvunicom4;
this.recvfixed1=recvfixed1;this.recvfixed2=recvfixed2;this.recvfixed3=recvfixed3;this.recvfixed4=recvfixed4;
this.recvmzone1=recvmzone1;this.recvmzone2=recvmzone2;this.recvmzone3=recvmzone3;this.recvmzone4=recvmzone4;
this.relativecount=relativecount;this.relativecmcc=relativecmcc;this.relativeunicom=relativeunicom;this.relativefixed=relativefixed;this.relativemzone=relativemzone;
this.smscmcc=smscmcc;this.smsunicom=smsunicom;this.smsweb=smsweb;
this.wap=wap;this.wapdiscount=wapdiscount;
this.gprs=gprs;this.cdma1x=cdma1x;
this.calleridshow=calleridshow;
this.miscinfo=miscinfo;
}


function price(mm) {

//��̯�ֻ��۸�
gotphone=(getCookie('havephone').indexOf(mm.network)!=-1);
if (gotphone) { //����Ѿ�ӵ�з���Ҫ����ֻ����ǾͲ������ֻ��۸�
phone=0;
} else {
switch (mm.network) { //�����û�з���Ҫ����ֻ����ͽ��ֻ��۸��̯��ÿ���¡�
case 'g':phone=dpA(phonegsm,phonelife,minterest);break;
case 'c':phone=dpA(phonecdma,phonelife,minterest);break;
case 'p':phone=dpA(phonephs,phonelife,minterest);break;
}
}

//��̯SIM��/UIM�����úͻ�����ʧ
gotcard=(getCookie('havecard')==mm.card);
chgloss=Number(getCookie('chgloss'));
if (gotcard) { //���ԭ��ӵ�еĿ��ſ���ֱ��ת�����µ��ײͣ��Ͳ���Ҫ�����¿���
card=0;
} else { //�����������̯��ÿ���¡�
card=dpA(mm.cardfee+chgloss,cardlife,minterest);
}

//�����
monthly=mm.monthly;

//�绰��
//ͨ����1,2,3,3���Ϸ��ӵ�ʱ��ٷֱ�
minute=getCookie('minute').split(',');
minute1=Number(minute[1])/100;
minute2=Number(minute[2])/100;
minute3=Number(minute[3])/100;
minute4=1-minute1-minute2-minute3;

//�͸���˾�û�ͨ�����İٷֱ�
contacts=getCookie('contacts').split(',');
contactcmcc=Number(contacts[1])/100;
contactunicom=Number(contacts[2])/100;
contactfixed=Number(contacts[3])/100;
contactmzone=Number(getCookie('contactmzone'))/100*contactcmcc;
contactcmcc1=contactcmcc-contactmzone;//��ʾ�����еش�����ƶ��ͻ�
totaldial=Number(getCookie('totaldial'));
totalrecv=Number(getCookie('totalrecv'));

//�������·�������ͨ��ʱ��
exceeddial=totaldial-mm.inctelany*totaldial/(totaldial+totalrecv);if (exceeddial<0) {exceeddial=0};//�������ܺ���ʱ��=���ֵ(�ܺ���ʱ��-���²�������ͨ��ʱ��*����ʱ��ռͨ��ʱ���ֵ,0)
exceedrecv=totalrecv-mm.inctelany*totalrecv/(totaldial+totalrecv);if (exceedrecv<0) {exceedrecv=0};//�������ܽ���ʱ��=���ֵ(�ܺ���ʱ��-���²�������ͨ��ʱ��*����ʱ��ռͨ��ʱ���ֵ,0)
exceeddialcmcc=exceeddial*contactcmcc-mm.inctelcmcc*totaldial/(totaldial+totalrecv);if (exceeddialcmcc<0) {exceeddialcmcc=0};//�������ƶ�����ʱ��=���ֵ(�������ܺ���ʱ��*��ϵ�ƶ��ٷֱ�-�����ƶ���ͨ��ʱ��*����ʱ��ռͨ��ʱ���ֵ,0)
exceedrecvcmcc=exceedrecv*contactcmcc-mm.inctelcmcc*totalrecv/(totaldial+totalrecv);if (exceeddialcmcc<0) {exceeddialcmcc=0};//�ƶ�����
exceeddialunicom=exceeddial*contactunicom-mm.inctelunicom*totaldial/(totaldial+totalrecv);if (exceeddialunicom<0) {exceeddialunicom=0};//��ͨ
exceedrecvunicom=exceedrecv*contactunicom-mm.inctelunicom*totalrecv/(totaldial+totalrecv);if (exceeddialunicom<0) {exceeddialunicom=0};
exceeddialfixed=exceeddial*contactfixed-mm.inctelfixed*totaldial/(totaldial+totalrecv);if (exceeddialfixed<0) {exceeddialfixed=0};//�̶���С��ͨ
exceedrecvfixed=exceedrecv*contactfixed-mm.inctelfixed*totalrecv/(totaldial+totalrecv);if (exceeddialfixed<0) {exceeddialfixed=0};
exceeddialmzone=exceeddialcmcc*contactmzone/contactcmcc;//�����Ķ��еش�����ʱ��=�������ƶ�����ʱ��*���еش�ռ�ƶ���ֵ
exceedrecvmzone=exceedrecvcmcc*contactmzone/contactcmcc;
exceeddialcmcc1=exceeddialcmcc*contactcmcc1/contactcmcc;//�����ķǶ��еش����ƶ��ͻ�����ʱ��=�������ƶ�����ʱ��*�Ƕ��еش�ռ�ƶ���ֵ
exceedrecvcmcc1=exceedrecvcmcc*contactcmcc1/contactcmcc;

//����Ը�ͨ�Ź�˾�û��ĺ������������ã��ݲ�����ͨ���Ż�
cmccdial=mm.dialcmcc1*exceeddialcmcc1*minute1
+mm.dialcmcc2*exceeddialcmcc1*minute2
+mm.dialcmcc3*exceeddialcmcc1*minute3
+mm.dialcmcc4*exceeddialcmcc1*minute4;
//�Ƕ��еش����ƶ��ͻ���������=�Ƕ��еش����ƶ��ͻ�������1�����ʷ�*�����ķǶ��еش����ƶ��ͻ�����ʱ��*��1����ռͨ���������ı�ֵ+�Ƕ��еش����ƶ��ͻ�������2�����ʷ�*�����ķǶ��еش����ƶ��ͻ�����ʱ��*��2����ռͨ���������ı�ֵ+�Ƕ��еش����ƶ��ͻ�������3�����ʷ�*�����ķǶ��еش����ƶ��ͻ�����ʱ��*��3����ռͨ���������ı�ֵ+�Ƕ��еش����ƶ��ͻ�������3���������ʷ�*�����ķǶ��еش����ƶ��ͻ�����ʱ��*��3��������ռͨ���������ı�ֵ
unicomdial=mm.dialunicom1*exceeddialunicom*minute1
+mm.dialunicom2*exceeddialunicom*minute2
+mm.dialunicom3*exceeddialunicom*minute3
+mm.dialunicom4*exceeddialunicom*minute4;
fixeddial=mm.dialfixed1*exceeddialfixed*minute1
+mm.dialfixed2*exceeddialfixed*minute2
+mm.dialfixed3*exceeddialfixed*minute3
+mm.dialfixed4*exceeddialfixed*minute4;
mzonedial=mm.dialmzone1*exceeddialmzone*minute1
+mm.dialmzone2*exceeddialmzone*minute2
+mm.dialmzone3*exceeddialmzone*minute3
+mm.dialmzone4*exceeddialmzone*minute4;
cmccrecv=mm.recvcmcc1*exceedrecvcmcc1*minute1
+mm.recvcmcc2*exceedrecvcmcc1*minute2
+mm.recvcmcc3*exceedrecvcmcc1*minute3
+mm.recvcmcc4*exceedrecvcmcc1*minute4;
unicomrecv=mm.recvunicom1*exceedrecvunicom*minute1
+mm.recvunicom2*exceedrecvunicom*minute2
+mm.recvunicom3*exceedrecvunicom*minute3
+mm.recvunicom4*exceedrecvunicom*minute4;
fixedrecv=mm.recvfixed1*exceedrecvfixed*minute1
+mm.recvfixed2*exceedrecvfixed*minute2
+mm.recvfixed3*exceedrecvfixed*minute3
+mm.recvfixed4*exceedrecvfixed*minute4;
mzonerecv=mm.recvmzone1*exceedrecvmzone*minute1
+mm.recvmzone2*exceedrecvmzone*minute2
+mm.recvmzone3*exceedrecvmzone*minute3
+mm.recvmzone4*exceedrecvmzone*minute4;

//����ͨѶ�Żݣ���ԭ�Ѽ���ļ۸�������¸�
relative1=Number(getCookie('relative1'))/100;
relative5=Number(getCookie('relative5'))/100;
relative=0;
if (mm.relativecount>=1) {relative=relative1};
if (mm.relativecount>=5) {relative=relative5};
//��ԭ�۸���p������ͨ����ռr%���ۿ���Ϊa%�����¼۸���P=p(1-r%)+p*r%*a%����ͨѶ��˾��ֿ�����
telephone=(cmccdial+cmccrecv)*((1-relative)+relative*mm.relativecmcc)
+(unicomdial+unicomrecv)*((1-relative)+relative*mm.relativeunicom)
+(fixeddial+fixedrecv)*((1-relative)+relative*mm.relativefixed)
+(mzonedial+mzonerecv)*((1-relative)+relative*mm.relativemzone);//�����ܵ绰����

//������
smsa=getCookie('sms').split(',');
smscmcc=Number(smsa[1]);
smsunicom=Number(smsa[2]);
smsweb=Number(smsa[3]);
//�������¶������Ķ�������
exceedsmscmcc=smscmcc-mm.incsmscmcc-mm.incsmsany*contactcmcc/(contactcmcc+contactunicom);if (exceedsmscmcc<0) {exceedsmscmcc=0};//���ƶ��ֻ��İ������������=���ֵ(���ƶ���������-�����ƶ�������-���²������������*�ƶ��ͻ��������еش�����ϵ���ٷֱ�,0)
exceedsmsunicom=smsunicom-mm.incsmsunicom-mm.incsmsany*contactunicom/(contactcmcc+contactunicom);if (exceedsmsunicom<0) {exceedsmsunicom=0};//��ͨ��ͬ��
exceedsmsweb=smsweb-mm.incsmsweb;if (exceedsmsweb<0) {exceedsmsweb=0};//����վ�İ������������=���ֵ(����վ��������-������վ������,0)
//���ն��ŷ���
sms=mm.smscmcc*exceedsmscmcc+mm.smsunicom*exceedsmsunicom+mm.smsweb*exceedsmsweb;

//������
nettype=getCookie('nettype');
if (nettype!='n') {
nettimeday=Number(getCookie('nettimeday'));
nettimenight=Number(getCookie('nettimenight'));
netkbs=Number(getCookie('netkbs'));
}
switch (nettype) {
case 'n':internet=0;break; //����������Ȼ��ҪǮ
case 'w':internet=mm.wap*nettimeday+mm.wapdiscount*nettimenight;break; //�������Żݣ���ֿ�����
case 'g':internet=mm.gprs*netkbs;break;
case 'c':internet=mm.cdma1x*netkbs;break;
}

if (getCookie('callerid')=='1') {calleridshow=mm.calleridshow} else {calleridshow=0}; //��Ҫ������ʾ����û������ṩ�ģ������Ӽ۸�

altogether=Math.max(mm.monthlow,mm.rechargeyear/12,phone+card+monthly+telephone+sms+internet+calleridshow);//monthlylow�������
return altogether;
}
