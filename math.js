//devided payment  ���ڸ���
//���ܷ���SԪ����̯��ÿ�·���AԪ����i�µķ����ڹ����װʱ�൱��PiԪ��������R����̯��n���¡�

function dpA(S,n,R) {
A=S*R*Math.pow(1+R,n)/(Math.pow(1+R,n)-1);
return A;
}
