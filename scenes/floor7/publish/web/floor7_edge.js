
(function($,Edge,compId){var _=null,y=true,n=false,qw='swing',e73='${_Man3}',e72='${_Star}',x65='1891px',e26='${_man-fly2}',x38='55px',x4='rgba(255,230,0,1.00)',x90='85px',x163='12px',x136='32px',x99='svg_floor7/man3-1.svg',x58='102px',x5='rgba(204,153,51,1.00)',d='display',x3='2.0.1.268',i='none',x100='man3-1-eyes',e10='${_bg3}',e86='${_man1-2}',x67='Mouth',e13='${_bg2}',x7='rgba(255,230,0,1)',e139='${_monkey1-1}',bt='bottom',x57='1889px',e18='${_monkey_shake_hand}',xc='rgba(0,0,0,1)',x42='ManWalk',e45='${_man_walk2}',x52='2310px',e129='${_mouth2}',c='color',x51='793',x53='Man2',x33='53px',e30='${_man-fly}',x122='30px',x164='40px',e19='${_bang1}',x55='2309px',e71='${_furniture}',x2='2.0.0',x35='man_walk',x50='Man1',x46='furniture',p='px',x105='svg_floor7/man3-1-eyes.svg',e43='${symbolSelector}',x125='33px',x113='38px',x123='mouth3',x165='Monkey_visit',x115='13px',x162='svg_floor7/monkey4.svg',qq='easeInOutQuad',e20='${_bang3}',x152='-3px',x161='119px',qok='easeOutBack',x127='svg_floor7/mouth4.svg',x82='svg_floor7/man1-2.svg',ql='linear',e106='${_man3-1}',e95='${_man2-1}',x153='mouth42',x140='monkey_sit',x78='134px',e158='${_monkey12}',x109='19px',e131='${_mouth4}',x150='monkey12',e157='${_Star3}',e156='${_mouth42}',x155='Monkey_Stand',e24='${_man_stand}',x108='star',e25='${_Monkey_visit}',x36='svg_floor7/man_stand.svg',x160='79px',x91='svg_floor7/man2-1.svg',x41='svg_floor7/man_walk.svg',e76='${_Man1}',e149='${_monkey_sit}',x64='Star',x124='svg_floor7/mouth3.svg',a='Base State',x141='svg_floor7/monkey3.svg',x83='man1-32',x98='136px',x15='hidden',x145='Star2',x80='svg_floor7/man1-1.svg',x144='38',dt='Default Timeline',x132='monkey1-1',x143='33',e28='${_bomb}',qoq='easeOutQuad',x147='MonkeySit',x159='monkey4',x134='-1px',x119='mouth2',e87='${_man1-1}',x137='monkey_shake_hand',e21='${_bang-bg}',lf='left',e27='${_ManWalk}',x135='35px',e138='${_Mouth}',x34='90px',x59='76px',x62='Man3',e29='${_Furniture}',x133='svg_floor7/monkey1-1.svg',e130='${_mouth3}',bg='background-color',e166='${_monkey4}',x11='auto',x116='11px',x126='mouth4',e107='${_man3-1-eyes}',e128='${_mouth1}',e17='${_MonkeyMask}',tp='top',x48='2407px',x1='2.0.1',ov='overflow',x120='svg_floor7/mouth2.svg',x97='man3-1',e96='${_man2-2}',x117='9px',x114='svg_floor7/mouth1.svg',t='transform',x142='Mouth2',e111='${_star}',x66='2315px',x8='rgba(0,0,0,0)',x154='37px',x70='Furniture',x89='156px',g='image',r='deg',x49='svg_floor7/furniture.svg',x102='18px',x39='87px',x47='2332px',x101='80px',x151='Star3',x146='5px',x68='1924',e44='${_man_walk}',x103='2px',x118='1px',x121='4px',x40='3px',x94='svg_floor7/man2-2.svg',m='rect',x32='0px',b='block',h='height',x93='man2-2',qiq='easeInQuad',e31='${_bang2}',x110='svg_floor7/star.svg',x88='man2-1',s='style',e23='${_bang4}',qoc='easeOutCubic',e22='${_Monkey_Stand2}',x60='14px',x104='64px',x6='rgba(153,102,51,1.00)',x77='man1-1',e12='${_bg1}',e85='${_man1-32}',x84='svg_floor7/man1-3.svg',x79='84px',x92='94px',e75='${_Man2}',e74='${_monkey1}',e14='${_Stage}',x9='stage',x81='man1-2',rz='rotateZ',x54='1132',w='width',x69='2348',x56='monkey1',e16='${_BG}',e148='${_Star2}',x63='1462',x61='svg_floor7/monkey1.svg',x112='mouth1',x37='man_walk2';var im='images/';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'BG',t:'group',r:['0px','auto','3000','997','auto','0px'],tf:[],c:[{id:'bg3',t:m,r:['0px','auto','3000px','878px','auto','119px'],f:[x4],s:[0,xc,i]},{id:'bg2',t:m,r:['0px','auto','3000px','23px','auto','96px'],f:[x5],s:[0,xc,i]},{id:'bg1',t:m,r:['0px','auto','3000px','100px','auto','0px'],f:[x6],s:[0,xc,i]}]},{id:'Furniture',t:m,r:['1019','auto','auto','auto','auto','105px']},{id:'MonkeyMask',v:i,t:m,r:['1560px','auto','111px','90px','auto','119px'],f:[x7],s:[0,"rgb(0, 0, 0)",i]},{id:'bang4',v:i,t:g,r:['1438px','auto','258px','258px','auto','-7px'],f:[x8,'svg_floor7/bang4.svg','0px','0px']},{id:'bang-bg',v:i,t:g,r:['1353px','auto','419px','120px','auto','-1px'],f:[x8,'svg_floor7/bang-bg.svg','0px','0px']},{id:'bang3',v:i,t:g,r:['1479px','auto','179px','179px','auto','37px'],f:[x8,'svg_floor7/bang3.svg','0px','0px']},{id:'bang2',v:i,t:g,r:['1430px','auto','274px','274px','auto','-18px'],f:[x8,'svg_floor7/bang2.svg','0px','0px']},{id:'bang1',v:i,t:g,r:['1517px','auto','101px','101px','auto','72px'],f:[x8,'svg_floor7/bang1.svg','0px','0px']},{id:'man-fly',t:g,r:['1459px','auto','82px','89px','auto','1013px'],f:[x8,'svg_floor7/man-fly.svg','0px','0px']},{id:'man-fly2',v:i,t:g,r:['1455px','auto','82px','89px','auto','120px'],f:[x8,'svg_floor7/man-fly.svg','0px','0px']},{id:'man_stand',v:i,t:g,r:['1473px','auto','53px','90px','auto','119px'],f:[x8,'svg_floor7/man_stand.svg','0px','0px']},{id:'ManWalk',v:i,t:m,r:['1473','auto','auto','auto','auto','119px']},{id:'monkey_shake_hand',v:i,t:m,r:['1568px','auto','auto','auto','auto','119px']},{id:'Monkey_Stand2',v:i,t:m,r:['1597','auto','auto','auto','auto','243px']},{id:'Monkey_visit',v:i,t:m,r:['1567','auto','auto','auto','auto','291px']},{id:'bomb',v:i,t:g,r:['1585px','auto','44px','44px','auto','297px'],f:[x8,'svg_floor7/bomb.svg','0px','0px']}],sI:[{id:'Furniture',sN:'Furniture'},{id:'Monkey_Stand2',sN:'Monkey_Stand'},{id:'monkey_shake_hand',sN:'monkey_shake_hand'},{id:'ManWalk',sN:'ManWalk'},{id:'Monkey_visit',sN:'Monkey_visit'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:12000,a:y,l:{"start":0,"part0":512,"part1":2521,"part2":4029,"part3":6028,"part4":8075,"part5":9047,"end":12000},tt:[{id:"eid36",tr:[function(e,d){this.eSA(e,d);},['play','${_ManWalk}',[0]],""],p:523},{id:"eid130",tr:[function(e,d){this.eSA(e,d);},['play','${_monkey_shake_hand}',[0]],""],p:6058}]}}},"ManWalk":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x32,x11,x33,x34,x11,x32],id:x35,t:g,v:i,f:[x8,x36,x32,x32]},{id:x37,t:g,r:[x32,x11,x38,x39,x11,x40],f:[x8,x41,x32,x32]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:500,a:y,tt:[]}}},"Furniture":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x46,t:g,r:[x32,x11,x47,x48,x11,x32],f:[x8,x49,x32,x32]},{id:x50,t:m,r:[x51,x52,x11,x11,x11,x11]},{id:x53,t:m,r:[x54,x55,x11,x11,x11,x11]},{id:x56,t:g,r:[x57,x11,x58,x59,x11,x60],f:[x8,x61,x32,x32]},{id:x62,t:m,r:[x63,x55,x11,x11,x11,x11]},{id:x64,t:m,r:[x65,x66,x11,x11,x11,x11]},{id:x67,t:m,r:[x68,x69,x11,x11,x11,x11]}],sI:[{id:'Man1',sN:'Man1'},{id:'Man2',sN:'Man2'},{id:'Man3',sN:'Man3'},{id:'Star',sN:'Star'},{id:'Mouth',sN:'Mouth'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"Man1":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x77,t:g,r:[x32,x11,x78,x79,x11,x32],f:[x8,x80,x32,x32]},{t:g,v:i,r:[x32,x11,x78,x79,x11,x32],id:x81,f:[x8,x82,x32,x32]},{t:g,v:i,r:[x32,x11,x78,x79,x11,x32],id:x83,f:[x8,x84,x32,x32]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:8000,a:y,l:{"close":7826},tt:[]}}},"Man2":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x88,t:g,r:[x32,x11,x89,x90,x11,x32],f:[x8,x91,x32,x32]},{r:[x32,x11,x89,x90,x11,x92],id:x93,t:g,v:i,f:[x8,x94,x32,x32]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:500,a:y,tt:[]}}},"Man3":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x97,t:g,r:[x32,x11,x98,x90,x11,x32],f:[x8,x99,x32,x32]},{id:x100,t:g,r:[x101,x11,x102,x103,x11,x104],f:[x8,x105,x32,x32]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:903,a:y,tt:[]}}},"Star":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x108,t:g,r:[x32,x11,x109,x109,x11,x32],f:[x8,x110,x32,x32]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:215,a:y,tt:[]}}},"Mouth":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x112,t:g,r:[x32,x11,x113,x60,x11,x32],f:[x8,x114,x32,x32]},{r:[x115,x11,x116,x117,x11,x118],id:x119,t:g,v:i,f:[x8,x120,x32,x32]},{r:[x121,x11,x122,x116,x11,x118],id:x123,t:g,v:i,f:[x8,x124,x32,x32]},{r:[x103,x11,x125,x117,x11,x103],id:x126,t:g,v:i,f:[x8,x127,x32,x32]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:2000,a:y,tt:[]}}},"monkey_shake_hand":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x56,t:g,r:[x32,x11,x58,x59,x11,x32],f:[x8,x61,x32,x32]},{r:[x32,x11,x58,x59,x11,x32],id:x132,t:g,v:i,f:[x8,x133,x32,x32]},{id:x64,t:m,r:[x103,x134,x11,x11,x11,x11]},{id:x67,t:m,r:[x135,x136,x11,x11,x11,x11]}],sI:[{id:'Mouth',sN:'Mouth'},{id:'Star',sN:'Star'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:2000,a:y,tt:[]}}},"MonkeySit":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x140,t:g,r:[x32,x11,x58,x59,x11,x32],f:[x8,x141,x32,x32]},{id:x142,t:m,r:[x143,x144,x11,x11,x11,x11]},{id:x145,t:m,r:[x103,x146,x11,x11,x11,x11]}],sI:[{id:'Mouth2',sN:'Mouth'},{id:'Star2',sN:'Star'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:2000,a:y,tt:[{id:"eid165",tr:[function(e,d){this.eSA(e,d);},['play','${_Star2}',[0]],""],p:0}]}}},"Monkey_Stand":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x150,t:g,r:[x32,x11,x58,x59,x11,x118],f:[x8,x61,x32,x32]},{id:x151,t:m,r:[x103,x152,x11,x11,x11,x11]},{id:x153,t:g,r:[x154,x11,x125,x117,x11,x125],f:[x8,x127,x32,x32]}],sI:[{id:'Star3',sN:'Star'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:2000,a:y,tt:[]}}},"Monkey_visit":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x159,t:g,r:[x32,x11,x160,x161,x11,x32],f:[x8,x162,x32,x32]},{id:x119,t:g,r:[x163,x11,x116,x117,x11,x164],f:[x8,x120,x32,x32]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}}};var S1=symbols[x9];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e10).P(bg,x4,c).P(bt,119).P(h,878).P(lf,0).P(w,3000);A1.A(e12).P(bg,x6,c).P(bt,0).P(h,100).P(lf,0).P(w,3000);A1.A(e13).P(bg,x5,c).P(bt,96).P(h,23).P(lf,0).P(w,3000);A1.A(e14).P(bg,x4,c).P(ov,x15).P(h,100,_,_,"%").P(w,3000,_,_,p);A1.A(e16).P(tp,x11).P(bt,0).P(lf,0).P(rz,0,t,_,r);A1.A(e17).P(lf,1560).P(bt,119).P(d,i).T(0,i).T(6.058,b);A1.A(e18).P(tp,x11).P(lf,1568).P(bt,119).P(d,i).T(0,i).T(6.058,b).T(8.104,i);A1.A(e19).P(lf,1517).P(bt,72).P(d,i).T(0,i).T(10,b).T(11.205,i).P(rz,0,t,_,r).T(10,90,1.205,ql);A1.A(e20).P(lf,1479).P(bt,37).P(d,i).T(0,i).T(10.186,b).T(11.09,i);A1.A(e21).P(lf,1353).P(bt,-1).P(d,i).T(0,i).T(10.25,b);A1.A(e22).P(tp,x11).P(d,i).T(0,i).T(8,b).T(9.5,i).P(lf,1568).T(8.104,1652,0.896,ql).T(9.092,1534,0.408,qq).P(bt,118).T(8.104,243,0.896,qok).T(9.092,300,0.408,qoq);A1.A(e23).P(lf,1438).P(bt,-7).P(d,i).T(0,i).T(10.351,b).T(11.043,i).P(rz,0,t,_,r).T(10.351,15,0.692,ql);A1.A(e24).P(lf,1473).P(bt,119).P(d,i).T(0,i).T(0.5,b).T(0.523,i).T(2.5,b).T(2.547,i).T(4,b).T(4.064,i).T(6,b).T(10.611,i);A1.A(e25).P(tp,x11).P(bt,291).P(d,i).T(0,i).T(9.445,b);A1.A(e26).P(d,i).T(0,i).T(10.611,b).P(lf,1455).T(10.611,1455).T(10.75,1455).P(bt,120).T(10.611,120).T(10.75,-160,1.25,qiq);A1.A(e27).P(tp,x11).P(bt,119).P(d,i).T(0,i).T(0.523,b).T(2.5,i).T(2.547,b).T(4,i).T(4.064,b).T(6,i);A1.A(e28).P(d,i).T(0,i).T(9.5,b).T(10,i).P(bt,296).T(9.5,90,0.5,qoc).P(lf,1579).T(9.5,1545,0.5).P(rz,0,t,_,r).T(9.5,-233,0.5);A1.A(e29).P(tp,x11).P(bt,105).P(lf,1019).T(0.512,469,1.988,qw).T(2.547,129,1.453).T(4.064,-321,1.936);A1.A(e30).P(lf,1459).P(d,b).T(0,b).T(0.5,i).P(bt,1013).T(0,120,0.5,ql);A1.A(e31).P(lf,1430).P(bt,-18).P(d,i).T(0,i).T(10.095,b).T(11.136,i).P(rz,0,t,_,r).T(10.095,-72,1.041,ql);var S2=symbols[x42];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e43).P(h,90).P(w,53);A2.A(e44).P(lf,0).P(bt,0).P(d,i).T(0,i).T(0.25,b).T(0.5,b);A2.A(e45).P(lf,0).P(bt,3).P(d,b).T(0,b).T(0.25,i).T(0.5,b);var S3=symbols[x70];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e71).P(lf,0).P(bt,0);A3.A(e72).P(tp,2315).P(lf,1891);A3.A(e43).P(h,2407).P(w,2332);A3.A(e73).P(tp,2309);A3.A(e74).P(lf,1889).P(bt,14);A3.A(e75).P(tp,2309);A3.A(e76).P(tp,2310);var S4=symbols[x50];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e43).P(h,84).P(w,134);A4.A(e85).P(lf,0).P(bt,0).P(d,i).T(0,i).T(3,b).T(3.199,i).T(7.804,b).T(8,b);A4.A(e86).P(lf,0).P(bt,0).P(d,i).T(0,i).T(3,i).T(3.199,b).T(7.804,i).T(8,i);A4.A(e87).P(lf,0).P(bt,0).P(d,b).T(0,b).T(3,i).T(3.199,i).T(7.804,i).T(8,i);var S5=symbols[x53];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e43).P(h,85).P(w,156);A5.A(e95).P(lf,0).P(bt,0).P(d,b).T(0,b).T(0.25,i).T(0.5,b);A5.A(e96).P(lf,0).P(d,i).T(0,i).T(0.25,b).T(0.5,i).P(bt,0).T(0.25,0);var S6=symbols[x62];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e43).P(h,85).P(w,136);A6.A(e106).P(lf,0).P(bt,0);A6.A(e107).P(bt,64).P(lf,82).T(0,84,0.75,ql).T(0.75,82,0.153);var S7=symbols[x64];var tl6=S7.tl[dt].tt,st7=S7.s[a]={},A7=A(_,tl6,st7);A7.A(e43).P(h,19).P(w,19);A7.A(e111).P(bt,0).P(lf,0).P(rz,0,t,_,r).T(0,0).T(0.107,22,_,_,22).T(0.215,0,_,_,0);var S8=symbols[x67];var tl7=S8.tl[dt].tt,st8=S8.s[a]={},A8=A(_,tl7,st8);A8.A(e43).P(h,14).P(w,38);A8.A(e128).P(lf,0).P(bt,0).P(d,b).T(0,b).T(0.5,i).T(1,i).T(1.5,i).T(2,i);A8.A(e129).P(lf,13).P(bt,1).P(d,i).T(0,i).T(0.5,b).T(1,i).T(1.5,i).T(2,i);A8.A(e130).P(lf,4).P(bt,1).P(d,i).T(0,i).T(0.5,i).T(1,b).T(1.5,i).T(2,i);A8.A(e131).P(lf,2).P(bt,2).P(d,i).T(0,i).T(0.5,i).T(1,i).T(1.5,b).T(2,b);var S9=symbols[x137];var tl8=S9.tl[dt].tt,st9=S9.s[a]={},A9=A(_,tl8,st9);A9.A(e138).P(lf,35).P(tp,32);A9.A(e43).P(h,76).P(w,102);A9.A(e74).P(lf,0).P(bt,0).P(d,b).T(0,b).T(0.5,i).T(1,b).T(1.5,i).T(2,b);A9.A(e139).P(lf,0).P(bt,0).P(d,i).T(0,i).T(0.5,b).T(1,i).T(1.5,b).T(2,i);A9.A(e72).P(tp,-1).T(0,-1).T(0.5,14).T(1,0).T(1.5,14).T(2,-1).P(lf,2).T(0,2).T(0.5,-3).T(1,2).T(1.5,-3).T(2,2);var S10=symbols[x147];var tl9=S10.tl[dt].tt,st10=S10.s[a]={},A10=A(_,tl9,st10);A10.A(e148).P(tp,5).P(lf,2);A10.A(e149).P(lf,0).P(bt,0);A10.A(e43).P(h,76).P(w,102);var S11=symbols[x155];var tl10=S11.tl[dt].tt,st11=S11.s[a]={},A11=A(_,tl10,st11);A11.A(e156).P(lf,37).P(bt,33);A11.A(e157).P(tp,-3).P(lf,2);A11.A(e158).P(lf,0).P(bt,1);A11.A(e43).P(h,76).P(w,102);var S12=symbols[x165];var tl11=S12.tl[dt].tt,st12=S12.s[a]={},A12=A(_,tl11,st12);A12.A(e166).P(lf,0).P(bt,0);A12.A(e129).P(lf,12).P(bt,40);A12.A(e43).P(h,119).P(w,79);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-48847544");