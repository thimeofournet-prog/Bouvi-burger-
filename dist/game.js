(()=>{var ov=Object.defineProperty;var vf=(r,e)=>{for(var t in e)ov(r,t,{get:e[t],enumerable:!0})};var mm=0,td=1,gm=2;var Gs=1,vm=2,Bn=3,vr=0,si=1,Oi=2,Qt=0,zn=1,no=2,id=3,rd=4,Uc=5;var Fi=100,_m=101,xm=102,ym=103,Mm=104,Hs=200,Sm=201,bm=202,Tm=203,sd=204,nd=205,ao=206,Em=207,oo=208,wm=209,Am=210,Rm=211,Cm=212,Pm=213,Lm=214,Vl=0,Wl=1,jl=2,xn=3,Xl=4,ql=5,Yl=6,Kl=7,Oc=0,Im=1,Nm=2,Bi=0,lo=1,co=2,ho=3,us=4,uo=5,po=6,fo=7,Gu="attached",Dm="detached",ad=300,Vs=301,kn=302,Fc=303,Bc=304,ci=1e3,Di=1001,yn=1002,Dt=1003,zc=1004;var Ws=1005;var Kt=1006,Gn=1007;var zi=1008;var hi=1009,od=1010,ld=1011,Hn=1012,kc=1013,er=1014,Li=1015,Gt=1016,Gc=1017,Hc=1018,Yr=1020,cd=35902,hd=35899,ud=1021,dd=1022,wi=1023,kr=1026,tr=1027,Vc=1028,Wc=1029,ds=1030,jc=1031;var Xc=1033,mo=33776,go=33777,vo=33778,_o=33779,qc=35840,Yc=35841,Kc=35842,Zc=35843,Jc=36196,$c=37492,Qc=37496,eh=37488,th=37489,xo=37490,ih=37491,rh=37808,sh=37809,nh=37810,ah=37811,oh=37812,lh=37813,ch=37814,hh=37815,uh=37816,dh=37817,ph=37818,fh=37819,mh=37820,gh=37821,vh=36492,_h=36494,xh=36495,yh=36283,Mh=36284,yo=36285,Sh=36286,Um=2200,Om=2201,Fm=2202,Is=2300,Ns=2301,Gl=2302,Hu=2303,Cs=2400,Ps=2401,Ta=2402,bh=2500,Bm=2501,pd=0,Mo=1,Vn=2,zm=3200;var Wn=0,km=1,Kr="",Tt="srgb",gi="srgb-linear",Ea="linear",ht="srgb";var Hl=7680;var Gm=519,Hm=512,Vm=513,Wm=514,fd=515,jm=516,Xm=517,md=518,gd=519,vd=35044;var _d="300 es",Ui=2e3,Mn=2001;function lv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function cv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Sn(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qm(){let r=Sn("canvas");return r.style.display="block",r}var _f={},bn=null;function wa(...r){let e="THREE."+r.shift();bn?bn("log",e,...r):console.log(e,...r)}function Ym(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Fe(...r){r=Ym(r);let e="THREE."+r.shift();if(bn)bn("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ye(...r){r=Ym(r);let e="THREE."+r.shift();if(bn)bn("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Ls(...r){let e=r.join(" ");e in _f||(_f[e]=!0,Fe(...r))}function Km(r,e,t){return new Promise(function(i,s){function n(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:i()}}setTimeout(n,t)})}var Zm={[Vl]:Vl,[jl]:Yl,[Xl]:Xl,[xn]:ql,[Wl]:Wl,[Yl]:jl,[Kl]:Kl,[ql]:xn},Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let n=s.indexOf(t);n!==-1&&s.splice(n,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let n=0,a=s.length;n<a;n++)s[n].call(this,e);e.target=null}}},oi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xf=1234567,vn=Math.PI/180,Ds=180/Math.PI;function ir(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(oi[r&255]+oi[r>>8&255]+oi[r>>16&255]+oi[r>>24&255]+"-"+oi[e&255]+oi[e>>8&255]+"-"+oi[e>>16&15|64]+oi[e>>24&255]+"-"+oi[t&63|128]+oi[t>>8&255]+"-"+oi[t>>16&255]+oi[t>>24&255]+oi[i&255]+oi[i>>8&255]+oi[i>>16&255]+oi[i>>24&255]).toLowerCase()}function tt(r,e,t){return Math.max(e,Math.min(t,r))}function xd(r,e){return(r%e+e)%e}function hv(r,e,t,i,s){return i+(r-e)*(s-i)/(t-e)}function uv(r,e,t){return r!==e?(t-r)/(e-r):0}function Ma(r,e,t){return(1-t)*r+t*e}function dv(r,e,t,i){return Ma(r,e,1-Math.exp(-t*i))}function pv(r,e=1){return e-Math.abs(xd(r,e*2)-e)}function fv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function mv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function gv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function vv(r,e){return r+Math.random()*(e-r)}function _v(r){return r*(.5-Math.random())}function xv(r){r!==void 0&&(xf=r);let e=xf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yv(r){return r*vn}function Mv(r){return r*Ds}function Sv(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function bv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function yd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Tv(r,e,t,i,s){let n=Math.cos,a=Math.sin,o=n(t/2),l=a(t/2),c=n((e+i)/2),h=a((e+i)/2),u=n((e-i)/2),p=a((e-i)/2),d=n((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":r.set(o*h,l*u,l*p,o*c);break;case"YZY":r.set(l*p,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*p,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*d,o*c);break;case"YXY":r.set(l*d,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*d,o*h,o*c);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Th(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Md(r,e){if(e.constructor===Float32Array)return r;let t=Th(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function Sd(r,e){if(e.constructor===Float32Array)return r;let t=Th(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var So={DEG2RAD:vn,RAD2DEG:Ds,generateUUID:ir,clamp:tt,euclideanModulo:xd,mapLinear:hv,inverseLerp:uv,lerp:Ma,damp:dv,pingpong:pv,smoothstep:fv,smootherstep:mv,randInt:gv,randFloat:vv,randFloatSpread:_v,seededRandom:xv,degToRad:yv,radToDeg:Mv,isPowerOfTwo:Sv,ceilPowerOfTwo:bv,floorPowerOfTwo:yd,setQuaternionFromProperEuler:Tv,normalize:Sd,denormalize:Md},Rd=class Rd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),n=this.x-e.x,a=this.y-e.y;return this.x=n*i-a*s+e.x,this.y=n*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rd.prototype.isVector2=!0;var ee=Rd,qt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,n,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],p=n[a+0],d=n[a+1],g=n[a+2],M=n[a+3];if(u!==M||l!==p||c!==d||h!==g){let f=l*p+c*d+h*g+u*M;f<0&&(p=-p,d=-d,g=-g,M=-M,f=-f);let m=1-o;if(f<.9995){let _=Math.acos(f),S=Math.sin(_);m=Math.sin(m*_)/S,o=Math.sin(o*_)/S,l=l*m+p*o,c=c*m+d*o,h=h*m+g*o,u=u*m+M*o}else{l=l*m+p*o,c=c*m+d*o,h=h*m+g*o,u=u*m+M*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,n,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=n[a],p=n[a+1],d=n[a+2],g=n[a+3];return e[t]=o*g+h*u+l*d-c*p,e[t+1]=l*g+h*p+c*u-o*d,e[t+2]=c*g+h*d+o*p-l*u,e[t+3]=h*g-o*u-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,n=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(n/2),p=l(i/2),d=l(s/2),g=l(n/2);switch(a){case"XYZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"YXZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"ZXY":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"ZYX":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"YZX":this._x=p*h*u+c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u-p*d*g;break;case"XZY":this._x=p*h*u-c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u+p*d*g;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],n=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=i+o+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(n-c)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(n+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(n-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(n+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,n=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-n*l,this._y=s*h+a*l+n*o-i*c,this._z=n*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-n*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,n=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,n=-n,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+n*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+n*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Cd=class Cd{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*s,this.y=n[1]*t+n[4]*i+n[7]*s,this.z=n[2]*t+n[5]*i+n[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,n=e.elements,a=1/(n[3]*t+n[7]*i+n[11]*s+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*s+n[12])*a,this.y=(n[1]*t+n[5]*i+n[9]*s+n[13])*a,this.z=(n[2]*t+n[6]*i+n[10]*s+n[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,n=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-n*s),u=2*(n*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-n*u,this.z=s+l*u+n*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*s,this.y=n[1]*t+n[5]*i+n[9]*s,this.z=n[2]*t+n[6]*i+n[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,n=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-n*o,this.y=n*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return du.copy(this).projectOnVector(e),this.sub(du)}reflect(e){return this.sub(du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cd.prototype.isVector3=!0;var C=Cd,du=new C,yf=new qt,Pd=class Pd{constructor(e,t,i,s,n,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,n,a,o,l,c)}set(e,t,i,s,n,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=n,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,n=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],p=i[2],d=i[5],g=i[8],M=s[0],f=s[3],m=s[6],_=s[1],S=s[4],x=s[7],b=s[2],E=s[5],v=s[8];return n[0]=a*M+o*_+l*b,n[3]=a*f+o*S+l*E,n[6]=a*m+o*x+l*v,n[1]=c*M+h*_+u*b,n[4]=c*f+h*S+u*E,n[7]=c*m+h*x+u*v,n[2]=p*M+d*_+g*b,n[5]=p*f+d*S+g*E,n[8]=p*m+d*x+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*n*h+i*o*l+s*n*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,p=o*l-h*n,d=c*n-a*l,g=t*u+i*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return e[0]=u*M,e[1]=(s*c-h*i)*M,e[2]=(o*i-s*a)*M,e[3]=p*M,e[4]=(h*t-s*l)*M,e[5]=(s*n-o*t)*M,e[6]=d*M,e[7]=(i*l-c*t)*M,e[8]=(a*t-i*n)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,n,a,o){let l=Math.cos(n),c=Math.sin(n);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pu.makeScale(e,t)),this}rotate(e){return Ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pu.makeRotation(-e)),this}translate(e,t){return Ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pd.prototype.isMatrix3=!0;var Je=Pd,pu=new Je,Mf=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sf=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ev(){let r={enabled:!0,workingColorSpace:gi,spaces:{},convert:function(s,n,a){return this.enabled===!1||n===a||!n||!a||(this.spaces[n].transfer===ht&&(s.r=zr(s.r),s.g=zr(s.g),s.b=zr(s.b)),this.spaces[n].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[n].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(s.r=_n(s.r),s.g=_n(s.g),s.b=_n(s.b))),s},workingToColorSpace:function(s,n){return this.convert(s,this.workingColorSpace,n)},colorSpaceToWorking:function(s,n){return this.convert(s,n,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kr?Ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,n=this.workingColorSpace){return s.fromArray(this.spaces[n].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,n,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[n].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[gi]:{primaries:e,whitePoint:i,transfer:Ea,toXYZ:Mf,fromXYZ:Sf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:Mf,fromXYZ:Sf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),r}var et=Ev();function zr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _n(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var $s,Zl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$s===void 0&&($s=Sn("canvas")),$s.width=e.width,$s.height=e.height;let s=$s.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=$s}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Sn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),n=s.data;for(let a=0;a<n.length;a++)n[a]=zr(n[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zr(t[i]/255)*255):t[i]=zr(t[i]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wv=0,Tn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let n;if(Array.isArray(s)){n=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?n.push(fu(s[a].image)):n.push(fu(s[a]))}else n=fu(s);i.url=n}return t||(e.images[this.uuid]=i),i}};function fu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}var Av=0,mu=new C,Yt=class r extends Ki{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=Di,s=Di,n=Kt,a=zi,o=wi,l=hi,c=r.DEFAULT_ANISOTROPY,h=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=ir(),this.name="",this.source=new Tn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=n,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(mu).x}get height(){return this.source.getSize(mu).y}get depth(){return this.source.getSize(mu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ci:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case yn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ci:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case yn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null,Yt.DEFAULT_MAPPING=ad,Yt.DEFAULT_ANISOTROPY=1;var Ld=class Ld{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,n=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*n,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*n,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*n,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,n,a=e.elements,o=a[0],l=a[4],c=a[8],h=a[1],u=a[5],p=a[9],d=a[2],g=a[6],M=a[10];if(Math.abs(l-h)<.01&&Math.abs(c-d)<.01&&Math.abs(p-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+d)<.1&&Math.abs(p+g)<.1&&Math.abs(o+u+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let m=(o+1)/2,_=(u+1)/2,S=(M+1)/2,x=(l+h)/4,b=(c+d)/4,E=(p+g)/4;return m>_&&m>S?m<.01?(i=0,s=.707106781,n=.707106781):(i=Math.sqrt(m),s=x/i,n=b/i):_>S?_<.01?(i=.707106781,s=0,n=.707106781):(s=Math.sqrt(_),i=x/s,n=E/s):S<.01?(i=.707106781,s=.707106781,n=0):(n=Math.sqrt(S),i=b/n,s=E/n),this.set(i,s,n,t),this}let f=Math.sqrt((g-p)*(g-p)+(c-d)*(c-d)+(h-l)*(h-l));return Math.abs(f)<.001&&(f=1),this.x=(g-p)/f,this.y=(c-d)/f,this.z=(h-l)/f,this.w=Math.acos((o+u+M-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ld.prototype.isVector4=!0;var yt=Ld,Jl=class extends Ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let s=i.count;for(let n=0;n<s;n++)this.textures[n]=new Yt({width:e,height:t,depth:i.depth}),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,n=this.textures.length;s<n;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Tn(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ut=class extends Jl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Aa=class extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $l=class extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Dc=class Dc{constructor(e,t,i,s,n,a,o,l,c,h,u,p,d,g,M,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,n,a,o,l,c,h,u,p,d,g,M,f)}set(e,t,i,s,n,a,o,l,c,h,u,p,d,g,M,f){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=n,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=p,m[3]=d,m[7]=g,m[11]=M,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dc().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Qs.setFromMatrixColumn(e,0).length(),n=1/Qs.setFromMatrixColumn(e,1).length(),a=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,n=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(n),u=Math.sin(n);if(e.order==="XYZ"){let p=a*h,d=a*u,g=o*h,M=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=p-M*c,t[9]=-o*l,t[2]=M-p*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*h,d=l*u,g=c*h,M=c*u;t[0]=p+M*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=M+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*h,d=l*u,g=c*h,M=c*u;t[0]=p-M*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=M-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*h,d=a*u,g=o*h,M=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=p*c+M,t[1]=l*u,t[5]=M*c+p,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,d=a*c,g=o*l,M=o*c;t[0]=l*h,t[4]=M-p*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=p-M*u}else if(e.order==="XZY"){let p=a*l,d=a*c,g=o*l,M=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+M,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=M*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rv,e,Cv)}lookAt(e,t,i){let s=this.elements;return Ri.subVectors(e,t),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),es.crossVectors(i,Ri),es.lengthSq()===0&&(Math.abs(i.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),es.crossVectors(i,Ri)),es.normalize(),ll.crossVectors(Ri,es),s[0]=es.x,s[4]=ll.x,s[8]=Ri.x,s[1]=es.y,s[5]=ll.y,s[9]=Ri.y,s[2]=es.z,s[6]=ll.z,s[10]=Ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,n=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],p=i[9],d=i[13],g=i[2],M=i[6],f=i[10],m=i[14],_=i[3],S=i[7],x=i[11],b=i[15],E=s[0],v=s[4],y=s[8],R=s[12],A=s[1],L=s[5],U=s[9],G=s[13],N=s[2],W=s[6],q=s[10],O=s[14],Y=s[3],B=s[7],H=s[11],J=s[15];return n[0]=a*E+o*A+l*N+c*Y,n[4]=a*v+o*L+l*W+c*B,n[8]=a*y+o*U+l*q+c*H,n[12]=a*R+o*G+l*O+c*J,n[1]=h*E+u*A+p*N+d*Y,n[5]=h*v+u*L+p*W+d*B,n[9]=h*y+u*U+p*q+d*H,n[13]=h*R+u*G+p*O+d*J,n[2]=g*E+M*A+f*N+m*Y,n[6]=g*v+M*L+f*W+m*B,n[10]=g*y+M*U+f*q+m*H,n[14]=g*R+M*G+f*O+m*J,n[3]=_*E+S*A+x*N+b*Y,n[7]=_*v+S*L+x*W+b*B,n[11]=_*y+S*U+x*q+b*H,n[15]=_*R+S*G+x*O+b*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],n=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],d=e[14],g=e[3],M=e[7],f=e[11],m=e[15],_=l*d-c*p,S=o*d-c*u,x=o*p-l*u,b=a*d-c*h,E=a*p-l*h,v=a*u-o*h;return t*(M*_-f*S+m*x)-i*(g*_-f*b+m*E)+s*(g*S-M*b+m*v)-n*(g*x-M*E+f*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],n=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(n*h-o*l)+s*(n*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],d=e[11],g=e[12],M=e[13],f=e[14],m=e[15],_=t*o-i*a,S=t*l-s*a,x=t*c-n*a,b=i*l-s*o,E=i*c-n*o,v=s*c-n*l,y=h*M-u*g,R=h*f-p*g,A=h*m-d*g,L=u*f-p*M,U=u*m-d*M,G=p*m-d*f,N=_*G-S*U+x*L+b*A-E*R+v*y;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/N;return e[0]=(o*G-l*U+c*L)*W,e[1]=(s*U-i*G-n*L)*W,e[2]=(M*v-f*E+m*b)*W,e[3]=(p*E-u*v-d*b)*W,e[4]=(l*A-a*G-c*R)*W,e[5]=(t*G-s*A+n*R)*W,e[6]=(f*x-g*v-m*S)*W,e[7]=(h*v-p*x+d*S)*W,e[8]=(a*U-o*A+c*y)*W,e[9]=(i*A-t*U-n*y)*W,e[10]=(g*E-M*x+m*_)*W,e[11]=(u*x-h*E-d*_)*W,e[12]=(o*R-a*L-l*y)*W,e[13]=(t*L-i*R+s*y)*W,e[14]=(M*S-g*b-f*_)*W,e[15]=(h*b-u*S+p*_)*W,this}scale(e){let t=this.elements,i=e.x,s=e.y,n=e.z;return t[0]*=i,t[4]*=s,t[8]*=n,t[1]*=i,t[5]*=s,t[9]*=n,t[2]*=i,t[6]*=s,t[10]*=n,t[3]*=i,t[7]*=s,t[11]*=n,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),n=1-i,a=e.x,o=e.y,l=e.z,c=n*a,h=n*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,n*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,n,a){return this.set(1,i,n,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,n=t._x,a=t._y,o=t._z,l=t._w,c=n+n,h=a+a,u=o+o,p=n*c,d=n*h,g=n*u,M=a*h,f=a*u,m=o*u,_=l*c,S=l*h,x=l*u,b=i.x,E=i.y,v=i.z;return s[0]=(1-(M+m))*b,s[1]=(d+x)*b,s[2]=(g-S)*b,s[3]=0,s[4]=(d-x)*E,s[5]=(1-(p+m))*E,s[6]=(f+_)*E,s[7]=0,s[8]=(g+S)*v,s[9]=(f-_)*v,s[10]=(1-(p+M))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let n=this.determinantAffine();if(n===0)return i.set(1,1,1),t.identity(),this;let a=Qs.set(s[0],s[1],s[2]).length(),o=Qs.set(s[4],s[5],s[6]).length(),l=Qs.set(s[8],s[9],s[10]).length();n<0&&(a=-a),ji.copy(this);let c=1/a,h=1/o,u=1/l;return ji.elements[0]*=c,ji.elements[1]*=c,ji.elements[2]*=c,ji.elements[4]*=h,ji.elements[5]*=h,ji.elements[6]*=h,ji.elements[8]*=u,ji.elements[9]*=u,ji.elements[10]*=u,t.setFromRotationMatrix(ji),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,n,a,o=Ui,l=!1){let c=this.elements,h=2*n/(t-e),u=2*n/(i-s),p=(t+e)/(t-e),d=(i+s)/(i-s),g,M;if(l)g=n/(a-n),M=a*n/(a-n);else if(o===Ui)g=-(a+n)/(a-n),M=-2*a*n/(a-n);else if(o===Mn)g=-a/(a-n),M=-a*n/(a-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,n,a,o=Ui,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),p=-(t+e)/(t-e),d=-(i+s)/(i-s),g,M;if(l)g=1/(a-n),M=a/(a-n);else if(o===Ui)g=-2/(a-n),M=-(a+n)/(a-n);else if(o===Mn)g=-1/(a-n),M=-n/(a-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Dc.prototype.isMatrix4=!0;var Be=Dc,Qs=new C,ji=new Be,Rv=new C(0,0,0),Cv=new C(1,1,1),es=new C,ll=new C,Ri=new C,bf=new Be,Tf=new qt,cr=class r{constructor(e=0,t=0,i=0,s=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,n=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,n)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(tt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tf.setFromEuler(this),this.setFromQuaternion(Tf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cr.DEFAULT_ORDER="XYZ";var En=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pv=0,Ef=new C,en=new qt,Lr=new Be,cl=new C,la=new C,Lv=new C,Iv=new qt,wf=new C(1,0,0),Af=new C(0,1,0),Rf=new C(0,0,1),Cf={type:"added"},Nv={type:"removed"},tn={type:"childadded",child:null},gu={type:"childremoved",child:null},Et=class r extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new C,t=new cr,i=new qt,s=new C(1,1,1);function n(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new Je}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new En,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return en.setFromAxisAngle(e,t),this.quaternion.multiply(en),this}rotateOnWorldAxis(e,t){return en.setFromAxisAngle(e,t),this.quaternion.premultiply(en),this}rotateX(e){return this.rotateOnAxis(wf,e)}rotateY(e){return this.rotateOnAxis(Af,e)}rotateZ(e){return this.rotateOnAxis(Rf,e)}translateOnAxis(e,t){return Ef.copy(e).applyQuaternion(this.quaternion),this.position.add(Ef.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wf,e)}translateY(e){return this.translateOnAxis(Af,e)}translateZ(e){return this.translateOnAxis(Rf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Lr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?cl.copy(e):cl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Lr.lookAt(la,cl,this.up):Lr.lookAt(cl,la,this.up),this.quaternion.setFromRotationMatrix(Lr),s&&(Lr.extractRotation(s.matrixWorld),en.setFromRotationMatrix(Lr),this.quaternion.premultiply(en.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cf),tn.child=e,this.dispatchEvent(tn),tn.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nv),gu.child=e,this.dispatchEvent(gu),gu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cf),tn.child=e,this.dispatchEvent(tn),tn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let n=0,a=s.length;n<a;n++)s[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,Lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,Iv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,n=this.matrix.elements;n[12]+=t-n[0]*t-n[4]*i-n[8]*s,n[13]+=i-n[1]*t-n[5]*i-n[9]*s,n[14]+=s-n[2]*t-n[6]*i-n[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=n(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];n(e.shapes,u)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(e.materials,this.material[l]));s.material=o}else s.material=n(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(n(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Et.DEFAULT_UP=new C(0,1,0),Et.DEFAULT_MATRIX_AUTO_UPDATE=!0,Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var We=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dv={type:"move"},wn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,n=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let f=t.getJointPose(M,i),m=this._getHandJoint(c,M);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&n!==null&&(s=n),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new We;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},hl={h:0,s:0,l:0};function vu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Ae=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=xd(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{let n=i<=.5?i*(1+t):i+t-i*t,a=2*i-n;this.r=vu(a,n,e+1/3),this.g=vu(a,n,e),this.b=vu(a,n,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function i(n){n!==void 0&&parseFloat(n)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let n,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(100,parseFloat(n[1]))/100,Math.min(100,parseFloat(n[2]))/100,Math.min(100,parseFloat(n[3]))/100,t);break;case"hsl":case"hsla":if(n=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=s[1],a=n.length;if(a===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(n,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let i=Jm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return et.workingToColorSpace(li.copy(this),e),Math.round(tt(li.r*255,0,255))*65536+Math.round(tt(li.g*255,0,255))*256+Math.round(tt(li.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(li.copy(this),t);let i=li.r,s=li.g,n=li.b,a=Math.max(i,s,n),o=Math.min(i,s,n),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-n)/u+(s<n?6:0);break;case s:l=(n-i)/u+2;break;case n:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(li.copy(this),t),e.r=li.r,e.g=li.g,e.b=li.b,e}getStyle(e=Tt){et.workingToColorSpace(li.copy(this),e);let t=li.r,i=li.g,s=li.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(hl);let i=Ma(ts.h,hl.h,t),s=Ma(ts.s,hl.s,t),n=Ma(ts.l,hl.l,t);return this.setHSL(i,s,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*s,this.g=n[1]*t+n[4]*i+n[7]*s,this.b=n[2]*t+n[5]*i+n[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},li=new Ae;Ae.NAMES=Jm;var Us=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cr,this.environmentIntensity=1,this.environmentRotation=new cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xi=new C,Ir=new C,_u=new C,Nr=new C,rn=new C,sn=new C,Pf=new C,xu=new C,yu=new C,Mu=new C,Su=new yt,bu=new yt,Tu=new yt,ar=class r{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Xi.subVectors(e,t),s.cross(Xi);let n=s.lengthSq();return n>0?s.multiplyScalar(1/Math.sqrt(n)):s.set(0,0,0)}static getBarycoord(e,t,i,s,n){Xi.subVectors(s,t),Ir.subVectors(i,t),_u.subVectors(e,t);let a=Xi.dot(Xi),o=Xi.dot(Ir),l=Xi.dot(_u),c=Ir.dot(Ir),h=Ir.dot(_u),u=a*c-o*o;if(u===0)return n.set(0,0,0),null;let p=1/u,d=(c*l-o*h)*p,g=(a*h-o*l)*p;return n.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Nr)===null?!1:Nr.x>=0&&Nr.y>=0&&Nr.x+Nr.y<=1}static getInterpolation(e,t,i,s,n,a,o,l){return this.getBarycoord(e,t,i,s,Nr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Nr.x),l.addScaledVector(a,Nr.y),l.addScaledVector(o,Nr.z),l)}static getInterpolatedAttribute(e,t,i,s,n,a){return Su.setScalar(0),bu.setScalar(0),Tu.setScalar(0),Su.fromBufferAttribute(e,t),bu.fromBufferAttribute(e,i),Tu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Su,n.x),a.addScaledVector(bu,n.y),a.addScaledVector(Tu,n.z),a}static isFrontFacing(e,t,i,s){return Xi.subVectors(i,t),Ir.subVectors(e,t),Xi.cross(Ir).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),Ir.subVectors(this.a,this.b),Xi.cross(Ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,n){return r.getInterpolation(e,this.a,this.b,this.c,t,i,s,n)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,n=this.c,a,o;rn.subVectors(s,i),sn.subVectors(n,i),xu.subVectors(e,i);let l=rn.dot(xu),c=sn.dot(xu);if(l<=0&&c<=0)return t.copy(i);yu.subVectors(e,s);let h=rn.dot(yu),u=sn.dot(yu);if(h>=0&&u<=h)return t.copy(s);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(rn,a);Mu.subVectors(e,n);let d=rn.dot(Mu),g=sn.dot(Mu);if(g>=0&&d<=g)return t.copy(n);let M=d*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(sn,o);let f=h*g-d*u;if(f<=0&&u-h>=0&&d-g>=0)return Pf.subVectors(n,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Pf,o);let m=1/(f+M+p);return a=M*m,o=p*m,t.copy(i).addScaledVector(rn,a).addScaledVector(sn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ii=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=n.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qi):qi.fromBufferAttribute(n,a),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ul.copy(i.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}let s=e.children;for(let n=0,a=s.length;n<a;n++)this.expandByObject(s[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),dl.subVectors(this.max,ca),nn.subVectors(e.a,ca),an.subVectors(e.b,ca),on.subVectors(e.c,ca),is.subVectors(an,nn),rs.subVectors(on,an),Es.subVectors(nn,on);let t=[0,-is.z,is.y,0,-rs.z,rs.y,0,-Es.z,Es.y,is.z,0,-is.x,rs.z,0,-rs.x,Es.z,0,-Es.x,-is.y,is.x,0,-rs.y,rs.x,0,-Es.y,Es.x,0];return!Eu(t,nn,an,on,dl)||(t=[1,0,0,0,1,0,0,0,1],!Eu(t,nn,an,on,dl))?!1:(pl.crossVectors(is,rs),t=[pl.x,pl.y,pl.z],Eu(t,nn,an,on,dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Dr=[new C,new C,new C,new C,new C,new C,new C,new C],qi=new C,ul=new ii,nn=new C,an=new C,on=new C,is=new C,rs=new C,Es=new C,ca=new C,dl=new C,pl=new C,ws=new C;function Eu(r,e,t,i,s){for(let n=0,a=r.length-3;n<=a;n+=3){ws.fromArray(r,n);let o=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=e.dot(ws),c=t.dot(ws),h=i.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Lb=Uv();function Uv(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}let n=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,n[l]=c|h}for(let l=1024;l<2048;++l)n[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:n,exponentTable:a,offsetTable:o}}var jt=new C,fl=new ee,Ov=0,Lt=class extends Ki{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ov++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vd,this.updateRanges=[],this.gpuType=Li,this.version=0,this._normalizationScale=e!==void 0?Th(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,n=this.itemSize;s<n;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fl.fromBufferAttribute(this,t),fl.applyMatrix3(e),this.setXY(t,fl.x,fl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Md(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Sd(e,this.array)}};var Ra=class extends Lt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ca=class extends Lt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ke=class extends Lt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Fv=new ii,ha=new C,wu=new C,vi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Fv.setFromPoints(e).getCenter(i);let s=0;for(let n=0,a=e.length;n<a;n++)s=Math.max(s,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);let t=ha.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ha,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(wu)),this.expandByPoint(ha.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Bv=0,Ni=new Be,Au=new Et,ln=new C,Ci=new ii,ua=new ii,$t=new C,ut=class r extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lv(e)?Ca:Ra)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let n=new Je().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,t,i){return Ni.makeTranslation(e,t,i),this.applyMatrix4(Ni),this}scale(e,t,i){return Ni.makeScale(e,t,i),this.applyMatrix4(Ni),this}lookAt(e){return Au.lookAt(e),Au.updateMatrix(),this.applyMatrix4(Au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ln).negate(),this.translate(ln.x,ln.y,ln.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,n=e.length;s<n;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ke(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let n=e[s];t.setXYZ(s,n.x,n.y,n.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let n=t[i];Ci.setFromBufferAttribute(n),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Ci.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Ci.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Ci.min),this.boundingBox.expandByPoint(Ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(Ci.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){let o=t[n];ua.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Ci.min,ua.min),Ci.expandByPoint($t),$t.addVectors(Ci.max,ua.max),Ci.expandByPoint($t)):(Ci.expandByPoint(ua.min),Ci.expandByPoint(ua.max))}Ci.getCenter(i);let s=0;for(let n=0,a=e.count;n<a;n++)$t.fromBufferAttribute(e,n),s=Math.max(s,i.distanceToSquared($t));if(t)for(let n=0,a=t.length;n<a;n++){let o=t[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$t.fromBufferAttribute(o,c),l&&(ln.fromBufferAttribute(e,c),$t.add(ln)),s=Math.max(s,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,n=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Lt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let R=0;R<i.count;R++)o[R]=new C,l[R]=new C;let h=new C,u=new C,p=new C,d=new ee,g=new ee,M=new ee,f=new C,m=new C;function _(R,A,L){c[R]=c[A]=c[L]=1,h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,A),p.fromBufferAttribute(i,L),d.fromBufferAttribute(n,R),g.fromBufferAttribute(n,A),M.fromBufferAttribute(n,L),u.sub(h),p.sub(h),g.sub(d),M.sub(d);let U=1/(g.x*M.y-M.x*g.y);isFinite(U)&&(f.copy(u).multiplyScalar(M.y).addScaledVector(p,-g.y).multiplyScalar(U),m.copy(p).multiplyScalar(g.x).addScaledVector(u,-M.x).multiplyScalar(U),o[R].add(f),o[A].add(f),o[L].add(f),l[R].add(m),l[A].add(m),l[L].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let R=0,A=S.length;R<A;++R){let L=S[R],U=L.start,G=L.count;for(let N=U,W=U+G;N<W;N+=3)_(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let x=new C,b=new C,E=new C,v=new C;function y(R){E.fromBufferAttribute(s,R),v.copy(E);let A=o[R];x.copy(A),x.sub(E.multiplyScalar(E.dot(A))).normalize(),b.crossVectors(v,A);let L=b.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,L)}for(let R=0,A=i.count;R<A;++R)c[R]&&y(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);let s=new C,n=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let p=0,d=e.count;p<d;p+=3){let g=e.getX(p+0),M=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,g),n.fromBufferAttribute(t,M),a.fromBufferAttribute(t,f),h.subVectors(a,n),u.subVectors(s,n),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,f),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),n.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,n),u.subVectors(s,n),h.cross(u),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h),d=0,g=0;for(let M=0,f=l.length;M<f;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*h;for(let m=0;m<h;m++)p[g++]=c[d++]}return new Lt(p,h,u)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let n=this.morphAttributes;for(let o in n){let l=[],c=n[o];for(let h=0,u=c.length;h<u;h++){let p=c[h],d=e(p,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},n=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,n=!0)}n&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let n=e.morphAttributes;for(let c in n){let h=[],u=n[c];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},as=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vd,this.updateRanges=[],this.version=0,this.uuid=ir()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,n=this.stride;s<n;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Lf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Lf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Lf(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=ir()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}var mi=new C,Gr=class r{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?Th(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)mi.fromBufferAttribute(this,t),mi.applyMatrix4(e),this.setXYZ(t,mi.x,mi.y,mi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mi.fromBufferAttribute(this,t),mi.applyNormalMatrix(e),this.setXYZ(t,mi.x,mi.y,mi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mi.fromBufferAttribute(this,t),mi.transformDirection(e),this.setXYZ(t,mi.x,mi.y,mi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=n,this}clone(e){if(e===void 0){wa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[s+n])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){wa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[s+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Md(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Sd(e,this.data.array)}},Ru=new C,zv=new C,kv=new Je,Yi=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ru.subVectors(i,t).cross(zv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Ru),n=this.normal.dot(s);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/n;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||kv.getNormalMatrix(e),s=this.coplanarPoint(Ru).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Gv=0,ri=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=zn,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=nd,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=xn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hl,this.stencilZFail=Hl,this.stencilZPass=Hl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(n=>n.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(n){let a=[];for(let o in n){let l=n[o];delete l.metadata,a.push(l)}return a}if(t){let n=s(e.textures),a=s(e.images);n.length>0&&(i.textures=n),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ae().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Yi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ee().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ee().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let n=0;n!==s;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zi=class extends ri{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cn,da=new C,hn=new C,un=new C,dn=new ee,pa=new ee,$m=new Be,ml=new C,fa=new C,gl=new C,If=new ee,Cu=new ee,Nf=new ee,hr=class extends Et{constructor(e=new Zi){if(super(),this.isSprite=!0,this.type="Sprite",cn===void 0){cn=new ut;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new as(t,5);cn.setIndex([0,1,2,0,2,3]),cn.setAttribute("position",new Gr(i,3,0,!1)),cn.setAttribute("uv",new Gr(i,2,3,!1))}this.geometry=cn,this.material=e,this.center=new ee(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hn.setFromMatrixScale(this.matrixWorld),$m.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),un.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hn.multiplyScalar(-un.z);let i=this.material.rotation,s,n;i!==0&&(n=Math.cos(i),s=Math.sin(i));let a=this.center;vl(ml.set(-.5,-.5,0),un,a,hn,s,n),vl(fa.set(.5,-.5,0),un,a,hn,s,n),vl(gl.set(.5,.5,0),un,a,hn,s,n),If.set(0,0),Cu.set(1,0),Nf.set(1,1);let o=e.ray.intersectTriangle(ml,fa,gl,!1,da);if(o===null&&(vl(fa.set(-.5,.5,0),un,a,hn,s,n),Cu.set(0,1),o=e.ray.intersectTriangle(ml,gl,fa,!1,da),o===null))return;let l=e.ray.origin.distanceTo(da);l<e.near||l>e.far||t.push({distance:l,point:da.clone(),uv:ar.getInterpolation(da,ml,fa,gl,If,Cu,Nf,new ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function vl(r,e,t,i,s,n){dn.subVectors(r,t).addScalar(.5).multiply(i),s!==void 0?(pa.x=n*dn.x-s*dn.y,pa.y=s*dn.x+n*dn.y):pa.copy(dn),r.copy(e),r.x+=pa.x,r.y+=pa.y,r.applyMatrix4($m)}var Ib=new C,Nb=new C;var Ur=new C,Pu=new C,_l=new C,xl=new C,os=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ur.copy(this.origin).addScaledVector(this.direction,t),Ur.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Pu.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),xl.copy(this.origin).sub(Pu);let n=e.distanceTo(t)*.5,a=-this.direction.dot(_l),o=xl.dot(this.direction),l=-xl.dot(_l),c=xl.lengthSq(),h=Math.abs(1-a*a),u,p,d,g;if(h>0)if(u=a*l-o,p=a*o-l,g=n*h,u>=0)if(p>=-g)if(p<=g){let M=1/h;u*=M,p*=M,d=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=n,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;else p=-n,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-a*n+o)),p=u>0?-n:Math.min(Math.max(-n,-l),n),d=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-n,-l),n),d=p*(p+2*l)+c):(u=Math.max(0,-(a*n+o)),p=u>0?n:Math.min(Math.max(-n,-l),n),d=-u*u+p*(p+2*l)+c);else p=a>0?-n:n,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pu).addScaledVector(_l,p),d}intersectSphere(e,t){if(e.radius<0)return null;Ur.subVectors(e.center,this.origin);let i=Ur.dot(this.direction),s=Ur.dot(Ur)-i*i,n=e.radius*e.radius;if(s>n)return null;let a=Math.sqrt(n-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,n,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(n=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(n=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||n>s||((n>i||isNaN(i))&&(i=n),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ur)!==null}intersectTriangle(e,t,i,s,n){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,p=e.y-a.y,d=e.z-a.z,g=t.x-a.x,M=t.y-a.y,f=t.z-a.z,m=i.x-a.x,_=i.y-a.y,S=i.z-a.z,x=Math.abs(l),b=Math.abs(c),E=Math.abs(h),v,y,R,A,L,U,G,N,W,q,O,Y;if(x>=b&&x>=E?(R=l,U=u,W=g,Y=m,l>=0?(v=c,y=h,A=p,L=d,G=M,N=f,q=_,O=S):(v=h,y=c,A=d,L=p,G=f,N=M,q=S,O=_)):b>=E?(R=c,U=p,W=M,Y=_,c>=0?(v=h,y=l,A=d,L=u,G=f,N=g,q=S,O=m):(v=l,y=h,A=u,L=d,G=g,N=f,q=m,O=S)):(R=h,U=d,W=f,Y=S,h>=0?(v=l,y=c,A=u,L=p,G=g,N=M,q=m,O=_):(v=c,y=l,A=p,L=u,G=M,N=g,q=_,O=m)),R===0)return null;let B=v/R,H=y/R,J=1/R,pe=A-B*U,Te=L-H*U,K=G-B*W,te=N-H*W,oe=q-B*Y,_e=O-H*Y,re=oe*te-_e*K,xe=pe*_e-Te*oe,Xe=K*Te-te*pe;if(s){if(re<0||xe<0||Xe<0)return null}else if((re<0||xe<0||Xe<0)&&(re>0||xe>0||Xe>0))return null;let Ue=re+xe+Xe;if(Ue===0)return null;let je=J*(re*U+xe*W+Xe*Y);return(Ue>0?je<0:je>0)?null:this.at(je/Ue,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_i=class extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Df=new Be,As=new os,yl=new vi,Uf=new C,Ml=new C,Sl=new C,bl=new C,Lu=new C,Tl=new C,Of=new C,El=new C,Qe=class extends Et{constructor(e=new ut,t=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=i.length;s<n;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,n=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(n&&o){Tl.set(0,0,0);for(let l=0,c=n.length;l<c;l++){let h=o[l],u=n[l];h!==0&&(Lu.fromBufferAttribute(u,e),a?Tl.addScaledVector(Lu,h):Tl.addScaledVector(Lu.sub(t),h))}t.add(Tl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,n=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(n),As.copy(e.ray).recast(e.near),!(yl.containsPoint(As.origin)===!1&&(As.intersectSphere(yl,Uf)===null||As.origin.distanceToSquared(Uf)>(e.far-e.near)**2))&&(Df.copy(n).invert(),As.copy(e.ray).applyMatrix4(Df),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,i){let s,n=this.geometry,a=this.material,o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv1,u=n.attributes.normal,p=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=p.length;g<M;g++){let f=p[g],m=a[f.materialIndex],_=Math.max(f.start,d.start),S=Math.min(o.count,Math.min(f.start+f.count,d.start+d.count));for(let x=_,b=S;x<b;x+=3){let E=o.getX(x),v=o.getX(x+1),y=o.getX(x+2);s=wl(this,m,e,i,c,h,u,E,v,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let f=g,m=M;f<m;f+=3){let _=o.getX(f),S=o.getX(f+1),x=o.getX(f+2);s=wl(this,a,e,i,c,h,u,_,S,x),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=p.length;g<M;g++){let f=p[g],m=a[f.materialIndex],_=Math.max(f.start,d.start),S=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let x=_,b=S;x<b;x+=3){let E=x,v=x+1,y=x+2;s=wl(this,m,e,i,c,h,u,E,v,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let f=g,m=M;f<m;f+=3){let _=f,S=f+1,x=f+2;s=wl(this,a,e,i,c,h,u,_,S,x),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function Hv(r,e,t,i,s,n,a,o){let l;if(e.side===si?l=i.intersectTriangle(a,n,s,!0,o):l=i.intersectTriangle(s,n,a,e.side===vr,o),l===null)return null;El.copy(o),El.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(El);return c<t.near||c>t.far?null:{distance:c,point:El.clone(),object:r}}function wl(r,e,t,i,s,n,a,o,l,c){r.getVertexPosition(o,Ml),r.getVertexPosition(l,Sl),r.getVertexPosition(c,bl);let h=Hv(r,e,t,i,Ml,Sl,bl,Of);if(h){let u=new C;ar.getBarycoord(Of,Ml,Sl,bl,u),s&&(h.uv=ar.getInterpolatedAttribute(s,o,l,c,u,new ee)),n&&(h.uv1=ar.getInterpolatedAttribute(n,o,l,c,u,new ee)),a&&(h.normal=ar.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new C,materialIndex:0};ar.getNormal(Ml,Sl,bl,p.normal),h.face=p,h.barycoord=u}return h}var ma=new yt,Ff=new yt,Bf=new yt,Vv=new yt,zf=new Be,Al=new C,Iu=new vi,kf=new Be,Nu=new os,Pa=class extends Qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gu,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ii),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Al),this.boundingBox.expandByPoint(Al)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Al),this.boundingSphere.expandByPoint(Al)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Iu.copy(this.boundingSphere),Iu.applyMatrix4(s),e.ray.intersectsSphere(Iu)!==!1&&(kf.copy(s).invert(),Nu.copy(e.ray).applyMatrix4(kf),!(this.boundingBox!==null&&Nu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Nu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let n=1/e.manhattanLength();n!==1/0?e.multiplyScalar(n):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Ff.fromBufferAttribute(s.attributes.skinIndex,e),Bf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ma.copy(t),t.set(0,0,0,0)):(ma.set(t.x,t.y,t.z,1),t.set(0,0,0)),ma.applyMatrix4(this.bindMatrix);for(let n=0;n<4;n++){let a=Bf.getComponent(n);if(a!==0){let o=Ff.getComponent(n);zf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Vv.copy(ma).applyMatrix4(zf),a)}}return t.isVector4&&(t.w=ma.w),t.applyMatrix4(this.bindMatrixInverse)}},An=class extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}},ur=class extends Yt{constructor(e=null,t=1,i=1,s,n,a,o,l,c=Dt,h=Dt,u,p){super(null,a,o,l,c,h,s,n,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gf=new Be,Wv=new Be,La=class r{constructor(e=[],t=[]){this.uuid=ir(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Be;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let n=0,a=e.length;n<a;n++){let o=e[n]?e[n].matrixWorld:Wv;Gf.multiplyMatrices(o,t[n]),Gf.toArray(i,n*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new ur(t,e,e,wi,Li);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let n=e.bones[i],a=t[n];a===void 0&&(Fe("Skeleton: No bone found with UUID:",n),a=new An),this.bones.push(a),this.boneInverses.push(new Be().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,n=t.length;s<n;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},Ji=class extends Lt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},pn=new Be,Hf=new Be,Rl=[],Vf=new ii,jv=new Be,ga=new Qe,va=new vi,Os=class extends Qe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ji(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,jv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,pn),Vf.copy(e.boundingBox).applyMatrix4(pn),this.boundingBox.union(Vf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,pn),va.copy(e.boundingSphere).applyMatrix4(pn),this.boundingSphere.union(va)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,n=i.length+1,a=e*n+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ga.geometry=this.geometry,ga.material=this.material,ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),va.copy(this.boundingSphere),va.applyMatrix4(i),e.ray.intersectsSphere(va)!==!1))for(let n=0;n<s;n++){this.getMatrixAt(n,pn),Hf.multiplyMatrices(i,pn),ga.matrixWorld=Hf,ga.raycast(e,Rl);for(let a=0,o=Rl.length;a<o;a++){let l=Rl[a];l.instanceId=n,l.object=this,t.push(l)}Rl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ur(new Float32Array(s*this.count),s,this.count,Vc,Li));let n=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return n[l]=o,n.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rs=new vi,Xv=new ee(.5,.5),Cl=new C,Hr=class{constructor(e=new Yi,t=new Yi,i=new Yi,s=new Yi,n=new Yi,a=new Yi){this.planes=[e,t,i,s,n,a]}set(e,t,i,s,n,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(n),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ui,i=!1){let s=this.planes,n=e.elements,a=n[0],o=n[1],l=n[2],c=n[3],h=n[4],u=n[5],p=n[6],d=n[7],g=n[8],M=n[9],f=n[10],m=n[11],_=n[12],S=n[13],x=n[14],b=n[15];if(s[0].setComponents(c-a,d-h,m-g,b-_).normalize(),s[1].setComponents(c+a,d+h,m+g,b+_).normalize(),s[2].setComponents(c+o,d+u,m+M,b+S).normalize(),s[3].setComponents(c-o,d-u,m-M,b-S).normalize(),i)s[4].setComponents(l,p,f,x).normalize(),s[5].setComponents(c-l,d-p,m-f,b-x).normalize();else if(s[4].setComponents(c-l,d-p,m-f,b-x).normalize(),t===Ui)s[5].setComponents(c+l,d+p,m+f,b+x).normalize();else if(t===Mn)s[5].setComponents(l,p,f,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);let t=Xv.distanceTo(e.center);return Rs.radius=.7071067811865476+t,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Cl.x=s.normal.x>0?e.max.x:e.min.x,Cl.y=s.normal.y>0?e.max.y:e.min.y,Cl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Wf=new Be,Ia=class r{constructor(){this.coordinateSystem=Ui,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let n=t[s];Wf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),i[s]===void 0&&(i[s]=new Hr),i[s].setFromProjectionMatrix(Wf,n.coordinateSystem,n.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Hr),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new r().copy(this)}};var Vu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,s){let n=this.pool,a=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1,index:-1});let o=n[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=s}reset(){this.list.length=0,this.index=0}},Db=new Be,Ub=new Ae(1,1,1),Ob=new Hr,Fb=new Ia,Bb=new ii,zb=new vi,kb=new C,Gb=new C,Hb=new C,Vb=new C,Wb=new Vu,jb=new Qe;var Rn=class extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ql=new C,ec=new C,jf=new Be,_a=new os,Pl=new vi,Du=new C,Xf=new C,Fs=class extends Et{constructor(e=new ut,t=new Rn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,n=t.count;s<n;s++)Ql.fromBufferAttribute(t,s-1),ec.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ql.distanceTo(ec);e.setAttribute("lineDistance",new ke(i,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,n=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pl.copy(i.boundingSphere),Pl.applyMatrix4(s),Pl.radius+=n,e.ray.intersectsSphere(Pl)===!1)return;jf.copy(s).invert(),_a.copy(e.ray).applyMatrix4(jf);let o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=p,M=d-1;g<M;g+=c){let f=h.getX(g),m=h.getX(g+1),_=Ll(this,e,_a,l,f,m,g);_&&t.push(_)}if(this.isLineLoop){let g=h.getX(d-1),M=h.getX(p),f=Ll(this,e,_a,l,g,M,d-1);f&&t.push(f)}}else{let p=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=p,M=d-1;g<M;g+=c){let f=Ll(this,e,_a,l,g,g+1,g);f&&t.push(f)}if(this.isLineLoop){let g=Ll(this,e,_a,l,d-1,p,d-1);g&&t.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=i.length;s<n;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ll(r,e,t,i,s,n,a){let o=r.geometry.attributes.position;if(Ql.fromBufferAttribute(o,s),ec.fromBufferAttribute(o,n),t.distanceSqToSegment(Ql,ec,Du,Xf)>i)return;Du.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(Du);if(!(l<e.near||l>e.far))return{distance:l,point:Xf.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var qf=new C,Yf=new C,Na=class extends Fs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,n=t.count;s<n;s+=2)qf.fromBufferAttribute(t,s),Yf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+qf.distanceTo(Yf);e.setAttribute("lineDistance",new ke(i,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Da=class extends Fs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Cn=class extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Kf=new Be,Wu=new os,Il=new vi,Nl=new C,Ua=class extends Et{constructor(e=new ut,t=new Cn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,n=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(s),Il.radius+=n,e.ray.intersectsSphere(Il)===!1)return;Kf.copy(s).invert(),Wu.copy(e.ray).applyMatrix4(Kf);let o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let d=u,g=p;d<g;d++){let M=c.getX(d);Nl.fromBufferAttribute(h,M),Zf(Nl,M,l,s,e,t,this)}}else{let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let d=u,g=p;d<g;d++)Nl.fromBufferAttribute(h,d),Zf(Nl,d,l,s,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=i.length;s<n;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Zf(r,e,t,i,s,n,a){let o=Wu.distanceSqToPoint(r);if(o<t){let l=new C;Wu.closestPointToPoint(r,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;n.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Oa=class extends Yt{constructor(e=[],t=Vs,i,s,n,a,o,l,c,h){super(e,t,i,s,n,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},dr=class extends Yt{constructor(e,t,i,s,n,a,o,l,c){super(e,t,i,s,n,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $i=class extends Yt{constructor(e,t,i=er,s,n,a,o=Dt,l=Dt,c,h=kr,u=1){if(h!==kr&&h!==tr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:u};super(p,s,n,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fa=class extends $i{constructor(e,t=er,i=Vs,s,n,a=Dt,o=Dt,l,c=kr){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,n,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ba=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qi=class r extends ut{constructor(e=1,t=1,i=1,s=1,n=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:n,depthSegments:a};let o=this;s=Math.floor(s),n=Math.floor(n),a=Math.floor(a);let l=[],c=[],h=[],u=[],p=0,d=0;g("z","y","x",-1,-1,i,t,e,a,n,0),g("z","y","x",1,-1,i,t,-e,a,n,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,n,4),g("x","y","z",-1,-1,e,t,-i,s,n,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(u,2));function g(M,f,m,_,S,x,b,E,v,y,R){let A=x/v,L=b/y,U=x/2,G=b/2,N=E/2,W=v+1,q=y+1,O=0,Y=0,B=new C;for(let H=0;H<q;H++){let J=H*L-G;for(let pe=0;pe<W;pe++){let Te=pe*A-U;B[M]=Te*_,B[f]=J*S,B[m]=N,c.push(B.x,B.y,B.z),B[M]=0,B[f]=0,B[m]=E>0?1:-1,h.push(B.x,B.y,B.z),u.push(pe/v),u.push(1-H/y),O+=1}}for(let H=0;H<y;H++)for(let J=0;J<v;J++){let pe=p+J+W*H,Te=p+J+W*(H+1),K=p+(J+1)+W*(H+1),te=p+(J+1)+W*H;l.push(pe,Te,te),l.push(Te,K,te),Y+=6}o.addGroup(d,Y,R),d+=Y,p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},tc=class r extends ut{constructor(e=1,t=1,i=4,s=8,n=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:n},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),n=Math.max(1,Math.floor(n));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,p=t,d=2*u+p,g=i*2+n,M=s+1,f=new C,m=new C;for(let _=0;_<=g;_++){let S=0,x=0,b=0,E=0;if(_<=i){let R=_/i,A=R*Math.PI/2;x=-h-e*Math.cos(A),b=e*Math.sin(A),E=-e*Math.cos(A),S=R*u}else if(_<=i+n){let R=(_-i)/n;x=-h+R*t,b=e,E=0,S=u+R*p}else{let R=(_-i-n)/i,A=R*Math.PI/2;x=h+e*Math.sin(A),b=e*Math.cos(A),E=e*Math.sin(A),S=u+p+R*u}let v=Math.max(0,Math.min(1,S/d)),y=0;_===0?y=.5/s:_===g&&(y=-.5/s);for(let R=0;R<=s;R++){let A=R/s,L=A*Math.PI*2,U=Math.sin(L),G=Math.cos(L);m.x=-b*G,m.y=x,m.z=b*U,o.push(m.x,m.y,m.z),f.set(-b*G,E,b*U),f.normalize(),l.push(f.x,f.y,f.z),c.push(A+y,v)}if(_>0){let R=(_-1)*M;for(let A=0;A<s;A++){let L=R+A,U=R+A+1,G=_*M+A,N=_*M+A+1;a.push(L,U,G),a.push(U,N,G)}}}this.setIndex(a),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ic=class r extends ut{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let n=[],a=[],o=[],l=[],c=new C,h=new ee;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){let d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)n.push(u,u+1,0);this.setIndex(n),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(o,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ls=class r extends ut{constructor(e=1,t=1,i=1,s=32,n=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:n,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),n=Math.floor(n);let h=[],u=[],p=[],d=[],g=0,M=[],f=i/2,m=0;_(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ke(u,3)),this.setAttribute("normal",new ke(p,3)),this.setAttribute("uv",new ke(d,2));function _(){let x=new C,b=new C,E=0,v=(t-e)/i;for(let y=0;y<=n;y++){let R=[],A=y/n,L=A*(t-e)+e;for(let U=0;U<=s;U++){let G=U/s,N=G*l+o,W=Math.sin(N),q=Math.cos(N);b.x=L*W,b.y=-A*i+f,b.z=L*q,u.push(b.x,b.y,b.z),x.set(W,v,q).normalize(),p.push(x.x,x.y,x.z),d.push(G,1-A),R.push(g++)}M.push(R)}for(let y=0;y<s;y++)for(let R=0;R<n;R++){let A=M[R][y],L=M[R+1][y],U=M[R+1][y+1],G=M[R][y+1];(e>0||R!==0)&&(h.push(A,L,G),E+=3),(t>0||R!==n-1)&&(h.push(L,U,G),E+=3)}c.addGroup(m,E,0),m+=E}function S(x){let b=g,E=new ee,v=new C,y=0,R=x===!0?e:t,A=x===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,f*A,0),p.push(0,A,0),d.push(.5,.5),g++;let L=g;for(let U=0;U<=s;U++){let G=U/s*l+o,N=Math.cos(G),W=Math.sin(G);v.x=R*W,v.y=f*A,v.z=R*N,u.push(v.x,v.y,v.z),p.push(0,A,0),E.x=N*.5+.5,E.y=W*.5*A+.5,d.push(E.x,E.y),g++}for(let U=0;U<s;U++){let G=b+U,N=L+U;x===!0?h.push(N,N+1,G):h.push(N+1,N,G),y+=3}c.addGroup(m,y,x===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rc=class r extends ls{constructor(e=1,t=1,i=32,s=1,n=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,n,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:n,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cs=class r extends ut{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let n=[],a=[];o(s),c(i),h(),this.setAttribute("position",new ke(n,3)),this.setAttribute("normal",new ke(n.slice(),3)),this.setAttribute("uv",new ke(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let S=new C,x=new C,b=new C;for(let E=0;E<t.length;E+=3)d(t[E+0],S),d(t[E+1],x),d(t[E+2],b),l(S,x,b,_)}function l(_,S,x,b){let E=b+1,v=[];for(let y=0;y<=E;y++){v[y]=[];let R=_.clone().lerp(x,y/E),A=S.clone().lerp(x,y/E),L=E-y;for(let U=0;U<=L;U++)U===0&&y===E?v[y][U]=R:v[y][U]=R.clone().lerp(A,U/L)}for(let y=0;y<E;y++)for(let R=0;R<2*(E-y)-1;R++){let A=Math.floor(R/2);R%2===0?(p(v[y][A+1]),p(v[y+1][A]),p(v[y][A])):(p(v[y][A+1]),p(v[y+1][A+1]),p(v[y+1][A]))}}function c(_){let S=new C;for(let x=0;x<n.length;x+=3)S.x=n[x+0],S.y=n[x+1],S.z=n[x+2],S.normalize().multiplyScalar(_),n[x+0]=S.x,n[x+1]=S.y,n[x+2]=S.z}function h(){let _=new C;for(let S=0;S<n.length;S+=3){_.x=n[S+0],_.y=n[S+1],_.z=n[S+2];let x=f(_)/2/Math.PI+.5,b=m(_)/Math.PI+.5;a.push(x,1-b)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let S=a[_+0],x=a[_+2],b=a[_+4],E=Math.max(S,x,b),v=Math.min(S,x,b);E>.9&&v<.1&&(S<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),b<.2&&(a[_+4]+=1))}}function p(_){n.push(_.x,_.y,_.z)}function d(_,S){let x=_*3;S.x=e[x+0],S.y=e[x+1],S.z=e[x+2]}function g(){let _=new C,S=new C,x=new C,b=new C,E=new ee,v=new ee,y=new ee;for(let R=0,A=0;R<n.length;R+=9,A+=6){_.set(n[R+0],n[R+1],n[R+2]),S.set(n[R+3],n[R+4],n[R+5]),x.set(n[R+6],n[R+7],n[R+8]),E.set(a[A+0],a[A+1]),v.set(a[A+2],a[A+3]),y.set(a[A+4],a[A+5]),b.copy(_).add(S).add(x).divideScalar(3);let L=f(b);M(E,A+0,_,L),M(v,A+2,S,L),M(y,A+4,x,L)}}function M(_,S,x,b){b<0&&_.x===1&&(a[S]=_.x-1),x.x===0&&x.z===0&&(a[S]=b/2/Math.PI+.5)}function f(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}},sc=class r extends cs{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Dl=new C,Ul=new C,Uu=new C,Ol=new ar,nc=class extends ut{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(vn*t),n=e.getIndex(),a=e.getAttribute("position"),o=n?n.count:a.count,l=[0,0,0],c=["a","b","c"],h=new Array(3),u=new Map,p=[];for(let d=0;d<o;d+=3){n?(l[0]=n.getX(d),l[1]=n.getX(d+1),l[2]=n.getX(d+2)):(l[0]=d,l[1]=d+1,l[2]=d+2);let{a:g,b:M,c:f}=Ol;if(g.fromBufferAttribute(a,l[0]),M.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),Ol.getNormal(Uu),h[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[1]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,h[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){let _=(m+1)%3,S=h[m],x=h[_],b=Ol[c[m]],E=Ol[c[_]],v=`${S}_${x}`,y=`${x}_${S}`,R=u.get(y);R?(Uu.dot(R.normal)<=s&&(p.push(b.x,b.y,b.z),p.push(E.x,E.y,E.z)),u.set(y,null)):u.has(v)||u.set(v,{index0:l[m],index1:l[_],normal:Uu.clone()})}}for(let d of u.values())if(d){let{index0:g,index1:M}=d;Dl.fromBufferAttribute(a,g),Ul.fromBufferAttribute(a,M),p.push(Dl.x,Dl.y,Dl.z),p.push(Ul.x,Ul.y,Ul.z)}this.setAttribute("position",new ke(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Pi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),n=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),n+=i.distanceTo(s),t.push(n),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,n=i.length,a;t?a=t:a=e*i[n-1];let o=0,l=n-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(n-1);let h=i[s],u=i[s+1]-h,p=(a-h)/u;return(s+p)/(n-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let n=this.getPoint(i),a=this.getPoint(s),o=t||(n.isVector2?new ee:new C);return o.copy(a).sub(n).normalize(),o}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,s=[],n=[],a=[],o=new C,l=new Be;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new C)}n[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),p<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),n[0].crossVectors(s[0],o),a[0].crossVectors(s[0],n[0]);for(let d=1;d<=e;d++){if(n[d]=n[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(tt(s[d-1].dot(s[d]),-1,1));n[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],n[d])}if(t===!0){let d=Math.acos(tt(n[0].dot(n[e]),-1,1));d/=e,s[0].dot(o.crossVectors(n[0],n[e]))>0&&(d=-d);for(let g=1;g<=e;g++)n[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],n[g])}return{tangents:s,normals:n,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Pn=class extends Pi{constructor(e=0,t=0,i=1,s=1,n=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=n,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ee){let i=t,s=Math.PI*2,n=this.aEndAngle-this.aStartAngle,a=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=s;for(;n>s;)n-=s;n<Number.EPSILON&&(a?n=0:n=s),this.aClockwise===!0&&!a&&(n===s?n=-s:n=n-s);let o=this.aStartAngle+e*n,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*h-d*u+this.aX,c=p*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ac=class extends Pn{constructor(e,t,i,s,n,a){super(e,t,i,i,s,n,a),this.isArcCurve=!0,this.type="ArcCurve"}};function bd(){let r=0,e=0,t=0,i=0;function s(n,a,o,l){r=n,e=o,t=-3*n+3*a-2*o-l,i=2*n-2*a+o+l}return{initCatmullRom:function(n,a,o,l,c){s(a,o,c*(o-n),c*(l-a))},initNonuniformCatmullRom:function(n,a,o,l,c,h,u){let p=(a-n)/c-(o-n)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;p*=h,d*=h,s(a,o,p,d)},calc:function(n){let a=n*n,o=a*n;return r+e*n+t*a+i*o}}}var Jf=new C,$f=new C,Ou=new bd,Fu=new bd,Bu=new bd,oc=class extends Pi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,n=s.length,a=(n-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/n)+1)*n:l===0&&o===n-1&&(o=n-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%n]:($f.subVectors(s[0],s[1]).add(s[0]),c=$f);let u=s[o%n],p=s[(o+1)%n];if(this.closed||o+2<n?h=s[(o+2)%n]:(Jf.subVectors(s[n-1],s[n-2]).add(s[n-1]),h=Jf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),M=Math.pow(u.distanceToSquared(p),d),f=Math.pow(p.distanceToSquared(h),d);M<1e-4&&(M=1),g<1e-4&&(g=M),f<1e-4&&(f=M),Ou.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,g,M,f),Fu.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,g,M,f),Bu.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,g,M,f)}else this.curveType==="catmullrom"&&(Ou.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),Fu.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),Bu.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return i.set(Ou.calc(l),Fu.calc(l),Bu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Qf(r,e,t,i,s){let n=(i-e)*.5,a=(s-t)*.5,o=r*r,l=r*o;return(2*t-2*i+n+a)*l+(-3*t+3*i-2*n-a)*o+n*r+t}function qv(r,e){let t=1-r;return t*t*e}function Yv(r,e){return 2*(1-r)*r*e}function Kv(r,e){return r*r*e}function Sa(r,e,t,i){return qv(r,e)+Yv(r,t)+Kv(r,i)}function Zv(r,e){let t=1-r;return t*t*t*e}function Jv(r,e){let t=1-r;return 3*t*t*r*e}function $v(r,e){return 3*(1-r)*r*r*e}function Qv(r,e){return r*r*r*e}function ba(r,e,t,i,s){return Zv(r,e)+Jv(r,t)+$v(r,i)+Qv(r,s)}var za=class extends Pi{constructor(e=new ee,t=new ee,i=new ee,s=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ee){let i=t,s=this.v0,n=this.v1,a=this.v2,o=this.v3;return i.set(ba(e,s.x,n.x,a.x,o.x),ba(e,s.y,n.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lc=class extends Pi{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,n=this.v1,a=this.v2,o=this.v3;return i.set(ba(e,s.x,n.x,a.x,o.x),ba(e,s.y,n.y,a.y,o.y),ba(e,s.z,n.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ka=class extends Pi{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cc=class extends Pi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends Pi{constructor(e=new ee,t=new ee,i=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ee){let i=t,s=this.v0,n=this.v1,a=this.v2;return i.set(Sa(e,s.x,n.x,a.x),Sa(e,s.y,n.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends Pi{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,n=this.v1,a=this.v2;return i.set(Sa(e,s.x,n.x,a.x),Sa(e,s.y,n.y,a.y),Sa(e,s.z,n.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends Pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){let i=t,s=this.points,n=(s.length-1)*e,a=Math.floor(n),o=n-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Qf(o,l.x,c.x,h.x,u.x),Qf(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ee().fromArray(s))}return this}},hc=Object.freeze({__proto__:null,ArcCurve:ac,CatmullRomCurve3:oc,CubicBezierCurve:za,CubicBezierCurve3:lc,EllipseCurve:Pn,LineCurve:ka,LineCurve3:cc,QuadraticBezierCurve:Ga,QuadraticBezierCurve3:Ha,SplineCurve:Va}),uc=class extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),n=0;for(;n<s.length;){if(s[n]>=i){let a=s[n]-i,o=this.curves[n],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}n++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,n=this.curves;s<n.length;s++){let a=n[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new hc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Wa=class extends uc{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ka(this.currentPoint.clone(),new ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let n=new Ga(this.currentPoint.clone(),new ee(e,t),new ee(i,s));return this.curves.push(n),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,n,a){let o=new za(this.currentPoint.clone(),new ee(e,t),new ee(i,s),new ee(n,a));return this.curves.push(o),this.currentPoint.set(n,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Va(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,n,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,n,a),this}absarc(e,t,i,s,n,a){return this.absellipse(e,t,i,i,s,n,a),this}ellipse(e,t,i,s,n,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,n,a,o,l),this}absellipse(e,t,i,s,n,a,o,l){let c=new Pn(e,t,i,s,n,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ja=class extends Wa{constructor(e){super(e),this.uuid=ir(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Wa().fromJSON(s))}return this}};function e_(r,e,t=2){let i=e&&e.length,s=i?e[0]*t:r.length,n=Qm(r,0,s,t,!0),a=[];if(!n||n.next===n.prev)return a;let o,l,c;if(i&&(n=n_(r,e,n,t)),r.length>80*t){o=r[0],l=r[1];let h=o,u=l;for(let p=t;p<s;p+=t){let d=r[p],g=r[p+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Xa(n,a,t,o,l,c,0),a}function Qm(r,e,t,i,s){let n;if(s===g_(r,e,t,i)>0)for(let a=e;a<t;a+=i)n=em(a/i|0,r[a],r[a+1],n);else for(let a=t-i;a>=e;a-=i)n=em(a/i|0,r[a],r[a+1],n);return n&&Ln(n,n.next)&&(Ya(n),n=n.next),n}function Bs(r,e){if(!r)return r;e||(e=r);let t=r,i;do if(i=!1,!t.steiner&&(Ln(t,t.next)||Ft(t.prev,t,t.next)===0)){if(Ya(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Xa(r,e,t,i,s,n,a){if(!r)return;!a&&n&&h_(r,i,s,n);let o=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(n?i_(r,i,s,n):t_(r)){e.push(l.i,r.i,c.i),Ya(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=r_(Bs(r),e),Xa(r,e,t,i,s,n,2)):a===2&&s_(r,e,t,i,s,n):Xa(Bs(r),e,t,i,s,n,1);break}}}function t_(r){let e=r.prev,t=r,i=r.next;if(Ft(e,t,i)>=0)return!1;let s=e.x,n=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,n,a),u=Math.min(o,l,c),p=Math.max(s,n,a),d=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=p&&g.y>=u&&g.y<=d&&xa(s,o,n,l,a,c,g.x,g.y)&&Ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function i_(r,e,t,i){let s=r.prev,n=r,a=r.next;if(Ft(s,n,a)>=0)return!1;let o=s.x,l=n.x,c=a.x,h=s.y,u=n.y,p=a.y,d=Math.min(o,l,c),g=Math.min(h,u,p),M=Math.max(o,l,c),f=Math.max(h,u,p),m=ju(d,g,e,t,i),_=ju(M,f,e,t,i),S=r.prevZ,x=r.nextZ;for(;S&&S.z>=m&&x&&x.z<=_;){if(S.x>=d&&S.x<=M&&S.y>=g&&S.y<=f&&S!==s&&S!==a&&xa(o,h,l,u,c,p,S.x,S.y)&&Ft(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=d&&x.x<=M&&x.y>=g&&x.y<=f&&x!==s&&x!==a&&xa(o,h,l,u,c,p,x.x,x.y)&&Ft(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=m;){if(S.x>=d&&S.x<=M&&S.y>=g&&S.y<=f&&S!==s&&S!==a&&xa(o,h,l,u,c,p,S.x,S.y)&&Ft(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=_;){if(x.x>=d&&x.x<=M&&x.y>=g&&x.y<=f&&x!==s&&x!==a&&xa(o,h,l,u,c,p,x.x,x.y)&&Ft(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function r_(r,e){let t=r;do{let i=t.prev,s=t.next.next;!Ln(i,s)&&tg(i,t,t.next,s)&&qa(i,s)&&qa(s,i)&&(e.push(i.i,t.i,s.i),Ya(t),Ya(t.next),t=r=s),t=t.next}while(t!==r);return Bs(t)}function s_(r,e,t,i,s,n){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&p_(a,o)){let l=ig(a,o);a=Bs(a,a.next),l=Bs(l,l.next),Xa(a,e,t,i,s,n,0),Xa(l,e,t,i,s,n,0);return}o=o.next}a=a.next}while(a!==r)}function n_(r,e,t,i){let s=[];for(let n=0,a=e.length;n<a;n++){let o=e[n]*i,l=n<a-1?e[n+1]*i:r.length,c=Qm(r,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(d_(c))}s.sort(a_);for(let n=0;n<s.length;n++)t=o_(s[n],t);return t}function a_(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){let i=(r.next.y-r.y)/(r.next.x-r.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function o_(r,e){let t=l_(r,e);if(!t)return e;let i=ig(t,r);return Bs(i,i.next),Bs(t,t.next)}function l_(r,e){let t=e,i=r.x,s=r.y,n=-1/0,a;if(Ln(r,t))return t;do{if(Ln(r,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>n&&(n=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&eg(s<c?i:n,s,l,c,s<c?n:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);qa(t,r)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&c_(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function c_(r,e){return Ft(r.prev,r,e.prev)<0&&Ft(e.next,r,r.next)<0}function h_(r,e,t,i){let s=r;do s.z===0&&(s.z=ju(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==r);s.prevZ.nextZ=null,s.prevZ=null,u_(s)}function u_(r){let e,t=1;do{let i=r,s;r=null;let n=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),n?n.nextZ=s:r=s,s.prevZ=n,n=s;i=a}n.nextZ=null,t*=2}while(e>1);return r}function ju(r,e,t,i,s){return r=(r-t)*s|0,e=(e-i)*s|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function d_(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function eg(r,e,t,i,s,n,a,o){return(s-a)*(e-o)>=(r-a)*(n-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(n-o)>=(s-a)*(i-o)}function xa(r,e,t,i,s,n,a,o){return!(r===a&&e===o)&&eg(r,e,t,i,s,n,a,o)}function p_(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!f_(r,e)&&(qa(r,e)&&qa(e,r)&&m_(r,e)&&(Ft(r.prev,r,e.prev)||Ft(r,e.prev,e))||Ln(r,e)&&Ft(r.prev,r,r.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ln(r,e){return r.x===e.x&&r.y===e.y}function tg(r,e,t,i){let s=Bl(Ft(r,e,t)),n=Bl(Ft(r,e,i)),a=Bl(Ft(t,i,r)),o=Bl(Ft(t,i,e));return!!(s!==n&&a!==o||s===0&&Fl(r,t,e)||n===0&&Fl(r,i,e)||a===0&&Fl(t,r,i)||o===0&&Fl(t,e,i))}function Fl(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Bl(r){return r>0?1:r<0?-1:0}function f_(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&tg(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function qa(r,e){return Ft(r.prev,r,r.next)<0?Ft(r,e,r.next)>=0&&Ft(r,r.prev,e)>=0:Ft(r,e,r.prev)<0||Ft(r,r.next,e)<0}function m_(r,e){let t=r,i=!1,s=(r.x+e.x)/2,n=(r.y+e.y)/2;do t.y>n!=t.next.y>n&&t.next.y!==t.y&&s<(t.next.x-t.x)*(n-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function ig(r,e){let t=Xu(r.i,r.x,r.y),i=Xu(e.i,e.x,e.y),s=r.next,n=e.prev;return r.next=e,e.prev=r,t.next=s,s.prev=t,i.next=t,t.prev=i,n.next=i,i.prev=n,i}function em(r,e,t,i){let s=Xu(r,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ya(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Xu(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function g_(r,e,t,i){let s=0;for(let n=e,a=t-i;n<t;n+=i)s+=(r[a]-r[n])*(r[n+1]+r[a+1]),a=n;return s}var qu=class{static triangulate(e,t,i=2){return e_(e,t,i)}},or=class r{static area(e){let t=e.length,i=0;for(let s=t-1,n=0;n<t;s=n++)i+=e[s].x*e[n].y-e[n].x*e[s].y;return i*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],s=[],n=[];tm(e),im(i,e);let a=e.length;t.forEach(tm);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,im(i,t[l]);let o=qu.triangulate(i,s);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function tm(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function im(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var dc=class r extends ut{constructor(e=new ja([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],n=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(n,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:v_,S,x=!1,b,E,v,y;if(m){S=m.getSpacedPoints(h),x=!0,p=!1;let se=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(h,se),E=new C,v=new C,y=new C}p||(f=0,d=0,g=0,M=0);let R=o.extractPoints(c),A=R.shape,L=R.holes;if(!or.isClockWise(A)){A=A.reverse();for(let se=0,le=L.length;se<le;se++){let ue=L[se];or.isClockWise(ue)&&(L[se]=ue.reverse())}}function U(se){let le=10000000000000001e-36,ue=se[0];for(let Ee=1;Ee<=se.length;Ee++){let Ce=Ee%se.length,Ie=se[Ce],qe=Ie.x-ue.x,Ze=Ie.y-ue.y,rt=qe*qe+Ze*Ze,at=Math.max(Math.abs(Ie.x),Math.abs(Ie.y),Math.abs(ue.x),Math.abs(ue.y)),xt=le*at*at;if(rt<=xt){se.splice(Ce,1),Ee--;continue}ue=Ie}}U(A),L.forEach(U);let G=L.length,N=A;for(let se=0;se<G;se++){let le=L[se];A=A.concat(le)}function W(se,le,ue){return le||Ye("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(le,ue)}let q=A.length;function O(se,le,ue){let Ee,Ce,Ie,qe=se.x-le.x,Ze=se.y-le.y,rt=ue.x-se.x,at=ue.y-se.y,xt=qe*qe+Ze*Ze,z=qe*at-Ze*rt;if(Math.abs(z)>Number.EPSILON){let ft=Math.sqrt(xt),dt=Math.sqrt(rt*rt+at*at),pt=le.x-Ze/ft,ce=le.y+qe/ft,St=ue.x-at/dt,Oe=ue.y+rt/dt,He=((St-pt)*at-(Oe-ce)*rt)/(qe*at-Ze*rt);Ee=pt+qe*He-se.x,Ce=ce+Ze*He-se.y;let P=Ee*Ee+Ce*Ce;if(P<=2)return new ee(Ee,Ce);Ie=Math.sqrt(P/2)}else{let ft=!1;qe>Number.EPSILON?rt>Number.EPSILON&&(ft=!0):qe<-Number.EPSILON?rt<-Number.EPSILON&&(ft=!0):Math.sign(Ze)===Math.sign(at)&&(ft=!0),ft?(Ee=-Ze,Ce=qe,Ie=Math.sqrt(xt)):(Ee=qe,Ce=Ze,Ie=Math.sqrt(xt/2))}return new ee(Ee/Ie,Ce/Ie)}let Y=[];for(let se=0,le=N.length,ue=le-1,Ee=se+1;se<le;se++,ue++,Ee++)ue===le&&(ue=0),Ee===le&&(Ee=0),Y[se]=O(N[se],N[ue],N[Ee]);let B=[],H,J=Y.concat();for(let se=0,le=G;se<le;se++){let ue=L[se];H=[];for(let Ee=0,Ce=ue.length,Ie=Ce-1,qe=Ee+1;Ee<Ce;Ee++,Ie++,qe++)Ie===Ce&&(Ie=0),qe===Ce&&(qe=0),H[Ee]=O(ue[Ee],ue[Ie],ue[qe]);B.push(H),J=J.concat(H)}let pe;if(f===0)pe=or.triangulateShape(N,L);else{let se=[],le=[];for(let ue=0;ue<f;ue++){let Ee=ue/f,Ce=d*Math.cos(Ee*Math.PI/2),Ie=g*Math.sin(Ee*Math.PI/2)+M;for(let qe=0,Ze=N.length;qe<Ze;qe++){let rt=W(N[qe],Y[qe],Ie);re(rt.x,rt.y,-Ce),Ee===0&&se.push(rt)}for(let qe=0,Ze=G;qe<Ze;qe++){let rt=L[qe];H=B[qe];let at=[];for(let xt=0,z=rt.length;xt<z;xt++){let ft=W(rt[xt],H[xt],Ie);re(ft.x,ft.y,-Ce),Ee===0&&at.push(ft)}Ee===0&&le.push(at)}}pe=or.triangulateShape(se,le)}let Te=pe.length,K=g+M;for(let se=0;se<q;se++){let le=p?W(A[se],J[se],K):A[se];x?(v.copy(b.normals[0]).multiplyScalar(le.x),E.copy(b.binormals[0]).multiplyScalar(le.y),y.copy(S[0]).add(v).add(E),re(y.x,y.y,y.z)):re(le.x,le.y,0)}for(let se=1;se<=h;se++)for(let le=0;le<q;le++){let ue=p?W(A[le],J[le],K):A[le];x?(v.copy(b.normals[se]).multiplyScalar(ue.x),E.copy(b.binormals[se]).multiplyScalar(ue.y),y.copy(S[se]).add(v).add(E),re(y.x,y.y,y.z)):re(ue.x,ue.y,u/h*se)}for(let se=f-1;se>=0;se--){let le=se/f,ue=d*Math.cos(le*Math.PI/2),Ee=g*Math.sin(le*Math.PI/2)+M;for(let Ce=0,Ie=N.length;Ce<Ie;Ce++){let qe=W(N[Ce],Y[Ce],Ee);re(qe.x,qe.y,u+ue)}for(let Ce=0,Ie=L.length;Ce<Ie;Ce++){let qe=L[Ce];H=B[Ce];for(let Ze=0,rt=qe.length;Ze<rt;Ze++){let at=W(qe[Ze],H[Ze],Ee);x?re(at.x,at.y+S[h-1].y,S[h-1].x+ue):re(at.x,at.y,u+ue)}}}te(),oe();function te(){let se=s.length/3;if(p){let le=0,ue=q*le;for(let Ee=0;Ee<Te;Ee++){let Ce=pe[Ee];xe(Ce[2]+ue,Ce[1]+ue,Ce[0]+ue)}le=h+f*2,ue=q*le;for(let Ee=0;Ee<Te;Ee++){let Ce=pe[Ee];xe(Ce[0]+ue,Ce[1]+ue,Ce[2]+ue)}}else{for(let le=0;le<Te;le++){let ue=pe[le];xe(ue[2],ue[1],ue[0])}for(let le=0;le<Te;le++){let ue=pe[le];xe(ue[0]+q*h,ue[1]+q*h,ue[2]+q*h)}}i.addGroup(se,s.length/3-se,0)}function oe(){let se=s.length/3,le=0;_e(N,le),le+=N.length;for(let ue=0,Ee=L.length;ue<Ee;ue++){let Ce=L[ue];_e(Ce,le),le+=Ce.length}i.addGroup(se,s.length/3-se,1)}function _e(se,le){let ue=se.length;for(;--ue>=0;){let Ee=ue,Ce=ue-1;Ce<0&&(Ce=se.length-1);for(let Ie=0,qe=h+f*2;Ie<qe;Ie++){let Ze=q*Ie,rt=q*(Ie+1),at=le+Ee+Ze,xt=le+Ce+Ze,z=le+Ce+rt,ft=le+Ee+rt;Xe(at,xt,z,ft)}}}function re(se,le,ue){l.push(se),l.push(le),l.push(ue)}function xe(se,le,ue){Ue(se),Ue(le),Ue(ue);let Ee=s.length/3,Ce=_.generateTopUV(i,s,Ee-3,Ee-2,Ee-1);je(Ce[0]),je(Ce[1]),je(Ce[2])}function Xe(se,le,ue,Ee){Ue(se),Ue(le),Ue(Ee),Ue(le),Ue(ue),Ue(Ee);let Ce=s.length/3,Ie=_.generateSideWallUV(i,s,Ce-6,Ce-3,Ce-2,Ce-1);je(Ie[0]),je(Ie[1]),je(Ie[3]),je(Ie[1]),je(Ie[2]),je(Ie[3])}function Ue(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function je(se){n.push(se.x),n.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return __(t,i,e)}static fromJSON(e,t){let i=[];for(let n=0,a=e.shapes.length;n<a;n++){let o=t[e.shapes[n]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new hc[s.type]().fromJSON(s)),new r(i,e.options)}},v_={generateTopUV:function(r,e,t,i,s){let n=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ee(n,a),new ee(o,l),new ee(c,h)]},generateSideWallUV:function(r,e,t,i,s,n){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],p=e[s*3],d=e[s*3+1],g=e[s*3+2],M=e[n*3],f=e[n*3+1],m=e[n*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ee(a,1-l),new ee(c,1-u),new ee(p,1-g),new ee(M,1-m)]:[new ee(o,1-l),new ee(h,1-u),new ee(d,1-g),new ee(f,1-m)]}};function __(r,e,t){if(t.shapes=[],Array.isArray(r))for(let i=0,s=r.length;i<s;i++){let n=r[i];t.shapes.push(n.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var pc=class r extends cs{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,n,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},fc=class r extends ut{constructor(e=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=tt(s,0,Math.PI*2);let n=[],a=[],o=[],l=[],c=[],h=1/t,u=new C,p=new ee,d=new C,g=new C,M=new C,f=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:f=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-f,d.z=m*0,M.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:M.normalize(),l.push(M.x,M.y,M.z);break;default:f=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-f,d.z=m*0,g.copy(d),d.x+=M.x,d.y+=M.y,d.z+=M.z,d.normalize(),l.push(d.x,d.y,d.z),M.copy(g)}for(let _=0;_<=t;_++){let S=i+_*h*s,x=Math.sin(S),b=Math.cos(S);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*x,u.y=e[E].y,u.z=e[E].x*b,a.push(u.x,u.y,u.z),p.x=_/t,p.y=E/(e.length-1),o.push(p.x,p.y);let v=l[3*E+0]*x,y=l[3*E+1],R=l[3*E+0]*b;c.push(v,y,R)}}for(let _=0;_<t;_++)for(let S=0;S<e.length-1;S++){let x=S+_*e.length,b=x,E=x+e.length,v=x+e.length+1,y=x+1;n.push(b,E,y),n.push(v,y,E)}this.setIndex(n),this.setAttribute("position",new ke(a,3)),this.setAttribute("uv",new ke(o,2)),this.setAttribute("normal",new ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},mc=class r extends cs{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},xi=class r extends ut{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let n=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,p=t/l,d=[],g=[],M=[],f=[];for(let m=0;m<h;m++){let _=m*p-a;for(let S=0;S<c;S++){let x=S*u-n;g.push(x,-_,0),M.push(0,0,1),f.push(S/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let S=_+c*m,x=_+c*(m+1),b=_+1+c*(m+1),E=_+1+c*m;d.push(S,x,E),d.push(x,b,E)}this.setIndex(d),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(M,3)),this.setAttribute("uv",new ke(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},gc=class r extends ut{constructor(e=.5,t=1,i=32,s=1,n=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:n,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,p=(t-e)/s,d=new C,g=new ee;for(let M=0;M<=s;M++){for(let f=0;f<=i;f++){let m=n+f/i*a;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=p}for(let M=0;M<s;M++){let f=M*(i+1);for(let m=0;m<i;m++){let _=m+f,S=_,x=_+i+1,b=_+i+2,E=_+1;o.push(S,x,E),o.push(x,b,E)}}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},vc=class r extends ut{constructor(e=new ja([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],n=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(n,3)),this.setAttribute("uv",new ke(a,2));function c(h){let u=s.length/3,p=h.extractPoints(t),d=p.shape,g=p.holes;or.isClockWise(d)===!1&&(d=d.reverse());for(let f=0,m=g.length;f<m;f++){let _=g[f];or.isClockWise(_)===!0&&(g[f]=_.reverse())}let M=or.triangulateShape(d,g);for(let f=0,m=g.length;f<m;f++){let _=g[f];d=d.concat(_)}for(let f=0,m=d.length;f<m;f++){let _=d[f];s.push(_.x,_.y,0),n.push(0,0,1),a.push(_.x,_.y)}for(let f=0,m=M.length;f<m;f++){let _=M[f],S=_[0]+u,x=_[1]+u,b=_[2]+u;i.push(S,x,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return x_(t,e)}static fromJSON(e,t){let i=[];for(let s=0,n=e.shapes.length;s<n;s++){let a=t[e.shapes[s]];i.push(a)}return new r(i,e.curveSegments)}};function x_(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,i=r.length;t<i;t++){let s=r[t];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e}var Vr=class r extends ut{constructor(e=1,t=32,i=16,s=0,n=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:n,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,p=new C,d=[],g=[],M=[],f=[];for(let m=0;m<=i;m++){let _=[],S=m/i,x=a+S*o,b=e*Math.cos(x),E=Math.sqrt(e*e-b*b),v=0;m===0&&a===0?v=.5/t:m===i&&l===Math.PI&&(v=-.5/t);for(let y=0;y<=t;y++){let R=y/t,A=s+R*n;u.x=-E*Math.cos(A),u.y=b,u.z=E*Math.sin(A),g.push(u.x,u.y,u.z),p.copy(u).normalize(),M.push(p.x,p.y,p.z),f.push(R+v,1-S),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let S=h[m][_+1],x=h[m][_],b=h[m+1][_],E=h[m+1][_+1];(m!==0||a>0)&&d.push(S,x,E),(m!==i-1||l<Math.PI)&&d.push(x,b,E)}this.setIndex(d),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(M,3)),this.setAttribute("uv",new ke(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},_c=class r extends cs{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},xc=class r extends ut{constructor(e=1,t=.4,i=12,s=48,n=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:n,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],p=new C,d=new C,g=new C;for(let M=0;M<=i;M++){let f=a+M/i*o;for(let m=0;m<=s;m++){let _=m/s*n;d.x=(e+t*Math.cos(f))*Math.cos(_),d.y=(e+t*Math.cos(f))*Math.sin(_),d.z=t*Math.sin(f),c.push(d.x,d.y,d.z),p.x=e*Math.cos(_),p.y=e*Math.sin(_),g.subVectors(d,p).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(M/i)}}for(let M=1;M<=i;M++)for(let f=1;f<=s;f++){let m=(s+1)*M+f-1,_=(s+1)*(M-1)+f-1,S=(s+1)*(M-1)+f,x=(s+1)*M+f;l.push(m,_,x),l.push(_,S,x)}this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},yc=class r extends ut{constructor(e=1,t=.4,i=64,s=8,n=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:n,q:a},i=Math.floor(i),s=Math.floor(s);let o=[],l=[],c=[],h=[],u=new C,p=new C,d=new C,g=new C,M=new C,f=new C,m=new C;for(let S=0;S<=i;++S){let x=S/i*n*Math.PI*2;_(x,n,a,e,d),_(x+.01,n,a,e,g),f.subVectors(g,d),m.addVectors(g,d),M.crossVectors(f,m),m.crossVectors(M,f),M.normalize(),m.normalize();for(let b=0;b<=s;++b){let E=b/s*Math.PI*2,v=-t*Math.cos(E),y=t*Math.sin(E);u.x=d.x+(v*m.x+y*M.x),u.y=d.y+(v*m.y+y*M.y),u.z=d.z+(v*m.z+y*M.z),l.push(u.x,u.y,u.z),p.subVectors(u,d).normalize(),c.push(p.x,p.y,p.z),h.push(S/i),h.push(b/s)}}for(let S=1;S<=i;S++)for(let x=1;x<=s;x++){let b=(s+1)*(S-1)+(x-1),E=(s+1)*S+(x-1),v=(s+1)*S+x,y=(s+1)*(S-1)+x;o.push(b,E,y),o.push(E,v,y)}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(h,2));function _(S,x,b,E,v){let y=Math.cos(S),R=Math.sin(S),A=b/x*S,L=Math.cos(A);v.x=E*(2+L)*.5*y,v.y=E*(2+L)*R*.5,v.z=E*Math.sin(A)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Mc=class r extends ut{constructor(e=new Ha(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,s=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:n};let a=e.computeFrenetFrames(t,n);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new ee,h=new C,u=[],p=[],d=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new ke(u,3)),this.setAttribute("normal",new ke(p,3)),this.setAttribute("uv",new ke(d,2));function M(){for(let S=0;S<t;S++)f(S);f(n===!1?t:0),_(),m()}function f(S){h=e.getPointAt(S/t,h);let x=a.normals[S],b=a.binormals[S];for(let E=0;E<=s;E++){let v=E/s*Math.PI*2,y=Math.sin(v),R=-Math.cos(v);l.x=R*x.x+y*b.x,l.y=R*x.y+y*b.y,l.z=R*x.z+y*b.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let S=1;S<=t;S++)for(let x=1;x<=s;x++){let b=(s+1)*(S-1)+(x-1),E=(s+1)*S+(x-1),v=(s+1)*S+x,y=(s+1)*(S-1)+x;g.push(b,E,y),g.push(E,v,y)}}function _(){for(let S=0;S<=t;S++)for(let x=0;x<=s;x++)c.x=S/t,c.y=x/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new hc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Sc=class extends ut{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new C,n=new C;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],p=u.start,d=u.count;for(let g=p,M=p+d;g<M;g+=3)for(let f=0;f<3;f++){let m=o.getX(g+f),_=o.getX(g+(f+1)%3);s.fromBufferAttribute(a,m),n.fromBufferAttribute(a,_),rm(s,n,i)===!0&&(t.push(s.x,s.y,s.z),t.push(n.x,n.y,n.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),n.fromBufferAttribute(a,u),rm(s,n,i)===!0&&(t.push(s.x,s.y,s.z),t.push(n.x,n.y,n.z))}}this.setAttribute("position",new ke(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function rm(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var Xb=Object.freeze({__proto__:null,BoxGeometry:Qi,CapsuleGeometry:tc,CircleGeometry:ic,ConeGeometry:rc,CylinderGeometry:ls,DodecahedronGeometry:sc,EdgesGeometry:nc,ExtrudeGeometry:dc,IcosahedronGeometry:pc,LatheGeometry:fc,OctahedronGeometry:mc,PlaneGeometry:xi,PolyhedronGeometry:cs,RingGeometry:gc,ShapeGeometry:vc,SphereGeometry:Vr,TetrahedronGeometry:_c,TorusGeometry:xc,TorusKnotGeometry:yc,TubeGeometry:Mc,WireframeGeometry:Sc});function js(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let s=r[t][i];if(sm(s))s.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(sm(s[0])){let n=[];for(let a=0,o=s.length;a<o;a++)n[a]=s[a].clone();e[t][i]=n}else e[t][i]=s.slice();else e[t][i]=s}}return e}function ui(r){let e={};for(let t=0;t<r.length;t++){let i=js(r[t]);for(let s in i)e[s]=i[s]}return e}function sm(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function y_(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Td(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var Mi={clone:js,merge:ui},M_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ot=class extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M_,this.fragmentShader=S_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=y_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let n=this.uniforms[s].value;n&&n.isTexture?t.uniforms[s]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[s]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[s]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[s]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[s]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[s]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[s]={type:"m4",value:n.toArray()}:t.uniforms[s]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ae().setHex(s.value);break;case"v2":this.uniforms[i].value=new ee().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Be().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},In=class extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Bt=class extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wn,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yi=class extends Bt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ls('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ls('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ka=class extends ri{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wn,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Za=class extends ri{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wn,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=Oc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bc=class extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tc=class extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ns(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ya(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function b_(r){function e(s,n){return r[s]-r[n]}let t=r.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function nm(r,e,t){let i=r.length,s=new r.constructor(i);for(let n=0,a=0;a!==i;++n){let o=t[n]*e;for(let l=0;l!==e;++l)s[a++]=r[o+l]}return s}function T_(r,e,t,i){let s=1,n=r[0];for(;n!==void 0&&n[i]===void 0;)n=r[s++];if(n===void 0)return;let a=n[i];if(a!==void 0)if(Array.isArray(a))do a=n[i],a!==void 0&&(e.push(n.time),t.push(...a)),n=r[s++];while(n!==void 0);else if(a.toArray!==void 0)do a=n[i],a!==void 0&&(e.push(n.time),a.toArray(t,t.length)),n=r[s++];while(n!==void 0);else do a=n[i],a!==void 0&&(e.push(n.time),t.push(a)),n=r[s++];while(n!==void 0)}var pr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],n=t[i-1];e:{t:{let a;i:{r:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<n)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(n=s,s=t[++i],e<s)break t}a=t.length;break i}if(!(e>=n)){let o=t[1];e<o&&(i=2,n=o);for(let l=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=n,n=t[--i-1],e>=n)break t}a=i,i=0;break i}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,s)}return this.interpolate_(i,n,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,n=e*s;for(let a=0;a!==s;++a)t[a]=i[n+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ec=class extends pr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cs,endingEnd:Cs}}intervalChanged_(e,t,i){let s=this.parameterPositions,n=e-2,a=e+1,o=s[n],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ps:n=e,o=2*t-i;break;case Ta:n=s.length-2,o=t+s[n]-s[n+1];break;default:n=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ps:a=e,l=2*i-t;break;case Ta:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=n*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),M=g*g,f=M*g,m=-p*f+2*p*M-p*g,_=(1+p)*f+(-1.5-2*p)*M+(-.5+p)*g+1,S=(-1-d)*f+(1.5+d)*M+.5*g,x=d*f-d*M;for(let b=0;b!==o;++b)n[b]=m*a[h+b]+_*a[c+b]+S*a[l+b]+x*a[u+b];return n}},Ja=class extends pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let p=0;p!==o;++p)n[p]=a[c+p]*u+a[l+p]*h;return n}},wc=class extends pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ac=class extends pr{interpolate_(e,t,i,s){let n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-t)/(s-t),M=1-g;for(let f=0;f!==o;++f)n[f]=a[c+f]*M+a[l+f]*g;return n}let p=o*2,d=e-1;for(let g=0;g!==o;++g){let M=a[c+g],f=a[l+g],m=d*p+g*2,_=u[m],S=u[m+1],x=e*p+g*2,b=h[x],E=h[x+1],v=w_(i,t,_,b,s);n[g]=rg(v,M,S,E,f)}return n}};function rg(r,e,t,i,s){let n=1-r;return n*n*n*e+3*n*n*r*t+3*n*r*r*i+r*r*r*s}function E_(r,e,t,i,s){let n=1-r;return 3*n*n*(t-e)+6*n*r*(i-t)+3*r*r*(s-i)}function w_(r,e,t,i,s){let n=(r-e)/(s-e);for(let a=0;a<8;a++){let o=rg(n,e,t,i,s)-r;if(Math.abs(o)<1e-10)break;let l=E_(n,e,t,i,s);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}var Ei=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ns(t,this.TimeBufferType),this.values=ns(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ns(e.times,Array),values:ns(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),ya(e.settings)&&(i.settings={inTangents:ns(e.settings.inTangents,Array),outTangents:ns(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ac(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Is:t=this.InterpolantFactoryMethodDiscrete;break;case Ns:t=this.InterpolantFactoryMethodLinear;break;case Gl:t=this.InterpolantFactoryMethodSmooth;break;case Hu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Fe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return Ns;case this.InterpolantFactoryMethodSmooth:return Gl;case this.InterpolantFactoryMethodBezier:return Hu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;ya(this.settings)&&(am(this.settings.inTangents,e),am(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;ya(this.settings)&&(om(this.settings.inTangents,e),om(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,n=0,a=s-1;for(;n!==s&&i[n]<e;)++n;for(;a!==-1&&i[a]>t;)--a;if(++a,n!==0||a!==s){n>=a&&(a=Math.max(a,1),n=a-1);let o=this.getValueSize();this.times=i.slice(n,a),this.values=this.values.slice(n*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,n=i.length;n===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==n;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ye("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&cv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Gl,n=e.length-1,a=1;for(let o=1;o<n;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,p=u-i,d=u+i;for(let g=0;g!==i;++g){let M=t[u+g];if(M!==t[p+g]||M!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,p=a*i;for(let d=0;d!==i;++d)t[p+d]=t[u+d]}++a}}if(n>0){e[a]=e[n];for(let o=n*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,ya(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function am(r,e){for(let t=0,i=r.length;t!==i;t+=2)r[t]+=e}function om(r,e){for(let t=0,i=r.length;t!==i;t+=2)r[t]*=e}Ei.prototype.ValueTypeName="",Ei.prototype.TimeBufferType=Float32Array,Ei.prototype.ValueBufferType=Float32Array,Ei.prototype.DefaultInterpolation=Ns;var Fr=class extends Ei{constructor(e,t,i){super(e,t,i)}};Fr.prototype.ValueTypeName="bool",Fr.prototype.ValueBufferType=Array,Fr.prototype.DefaultInterpolation=Is,Fr.prototype.InterpolantFactoryMethodLinear=void 0,Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends Ei{constructor(e,t,i,s){super(e,t,i,s)}};$a.prototype.ValueTypeName="color";var Wr=class extends Ei{constructor(e,t,i,s){super(e,t,i,s)}};Wr.prototype.ValueTypeName="number";var Rc=class extends pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)qt.slerpFlat(n,0,a,c-o,a,c,l);return n}},fr=class extends Ei{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Rc(this.times,this.values,this.getValueSize(),e)}};fr.prototype.ValueTypeName="quaternion",fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Br=class extends Ei{constructor(e,t,i){super(e,t,i)}};Br.prototype.ValueTypeName="string",Br.prototype.ValueBufferType=Array,Br.prototype.DefaultInterpolation=Is,Br.prototype.InterpolantFactoryMethodLinear=void 0,Br.prototype.InterpolantFactoryMethodSmooth=void 0;var jr=class extends Ei{constructor(e,t,i,s){super(e,t,i,s)}};jr.prototype.ValueTypeName="vector";var hs=class{constructor(e="",t=-1,i=[],s=bh){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=ir(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(R_(i[a]).scale(s));let n=new this(e.name,e.duration,t,e.blendMode);return n.uuid=e.uuid,n.userData=JSON.parse(e.userData||"{}"),n}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let n=0,a=i.length;n!==a;++n)t.push(Ei.toJSON(i[n]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let n=t.length,a=[];for(let o=0;o<n;o++){let l=[],c=[];l.push((o+n-1)%n,o,(o+1)%n),c.push(0,1,0);let h=b_(l);l=nm(l,1,h),c=nm(c,1,h),!s&&l[0]===0&&(l.push(n),c.push(c[0])),a.push(new Wr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},n=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(n);if(h&&h.length>1){let u=h[1],p=s[u];p||(s[u]=p=[]),p.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let n=this.tracks[i];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function A_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wr;case"vector":case"vector2":case"vector3":case"vector4":return jr;case"color":return $a;case"quaternion":return fr;case"bool":case"boolean":return Fr;case"string":return Br}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function R_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=A_(r.type);if(r.times===void 0){let i=[],s=[];T_(r.keys,i,s,"value"),r.times=i,r.values=s}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),ya(r.settings)&&(t.settings={inTangents:ns(r.settings.inTangents,Float32Array),outTangents:ns(r.settings.outTangents,Float32Array)}),t}var lr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(lm(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!lm(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function lm(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Cc=class{constructor(e,t,i){let s=this,n=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,n===!1&&s.onStart!==void 0&&s.onStart(h,a,o),n=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(n=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},sg=new Cc,mr=class{constructor(e){this.manager=e!==void 0?e:sg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,n){i.load(e,s,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};mr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Or={},Yu=class extends Error{constructor(e,t){super(e),this.response=t}},Nn=class extends mr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let n=lr.get(`file:${e}`);if(n!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(n),this.manager.itemEnd(e)},0);return}if(Or[e]!==void 0){Or[e].push({onLoad:t,onProgress:i,onError:s});return}Or[e]=[],Or[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Or[e],u=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=p?parseInt(p):0,g=d!==0,M=0,f=new ReadableStream({start(m){_();function _(){u.read().then(({done:S,value:x})=>{if(S)m.close();else{M+=x.byteLength;let b=new ProgressEvent("progress",{lengthComputable:g,loaded:M,total:d});for(let E=0,v=h.length;E<v;E++){let y=h[E];y.onProgress&&y.onProgress(b)}m.enqueue(x),_()}},S=>{m.error(S)})}}});return new Response(f)}else throw new Yu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(d=>p.decode(d))}}}).then(c=>{lr.add(`file:${e}`,c);let h=Or[e];delete Or[e];for(let u=0,p=h.length;u<p;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Or[e];if(h===void 0)throw this.manager.itemError(e),c;delete Or[e];for(let u=0,p=h.length;u<p;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var fn=new WeakMap,Pc=class extends mr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let n=this,a=lr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)n.manager.itemStart(e),setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0);else{let u=fn.get(a);u===void 0&&(u=[],fn.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Sn("img");function l(){h(),t&&t(this);let u=fn.get(this)||[];for(let p=0;p<u.length;p++){let d=u[p];d.onLoad&&d.onLoad(this)}fn.delete(this),n.manager.itemEnd(e)}function c(u){h(),s&&s(u),lr.remove(`image:${e}`);let p=fn.get(this)||[];for(let d=0;d<p.length;d++){let g=p[d];g.onError&&g.onError(u)}fn.delete(this),n.manager.itemError(e),n.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),lr.add(`image:${e}`,o),n.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Qa=class extends mr{constructor(e){super(e)}load(e,t,i,s){let n=new Yt,a=new Pc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){n.image=o,n.needsUpdate=!0,t!==void 0&&t(n)},i,s),n}},zs=class extends Et{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},eo=class extends zs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},zu=new Be,cm=new C,hm=new C,Dn=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;cm.setFromMatrixPosition(e.matrixWorld),t.position.copy(cm),hm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){zu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(zu,e.coordinateSystem,e.reversedDepth);let n=this._frameExtents,a=s?s.z/n.x:1,o=s?s.w/n.y:1,l=s?s.x/n.x:0,c=s?s.y/n.y:0;e.coordinateSystem===Mn||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zl=new C,kl=new qt,nr=new C,Un=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zl,kl,nr),nr.x===1&&nr.y===1&&nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,kl,nr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(zl,kl,nr),nr.x===1&&nr.y===1&&nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,kl,nr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ss=new C,um=new ee,dm=new ee,Xt=class extends Un{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(vn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,um,dm),t.subVectors(dm,um)}setViewOffset(e,t,i,s,n,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vn*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,n=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;n+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ku=class extends Dn{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Ds*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,n=e.distance||t.far;(i!==t.fov||s!==t.aspect||n!==t.far)&&(t.fov=i,t.aspect=s,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},to=class extends zs{constructor(e,t,i=0,s=Math.PI/3,n=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=i,this.angle=s,this.penumbra=n,this.decay=a,this.map=null,this.shadow=new Ku}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Zu=class extends Dn{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}},gr=class extends zs{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Zu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Xr=class extends Un{constructor(e=-1,t=1,i=1,s=-1,n=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,n=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,a=n+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(n,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ju=class extends Dn{constructor(){super(new Xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ks=class extends zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Ju}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var qr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ku=new WeakMap,io=class extends mr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let n=this,a=lr.get(`image-bitmap:${e}`);if(a!==void 0){if(n.manager.itemStart(e),a.then){a.then(c=>{ku.has(a)===!0?(s&&s(ku.get(a)),n.manager.itemError(e),n.manager.itemEnd(e)):(t&&t(c),n.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},n.options,{colorSpaceConversion:"none"}))}).then(function(c){return lr.add(`image-bitmap:${e}`,c),t&&t(c),n.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ku.set(l,c),lr.remove(`image-bitmap:${e}`),n.manager.itemError(e),n.manager.itemEnd(e)});lr.add(`image-bitmap:${e}`,l),n.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var qb=new Be,Yb=new Be,Kb=new Be;var mn=-90,gn=1,On=class extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(mn,gn,e,t);s.layers=this.layers,this.add(s);let n=new Xt(mn,gn,e,t);n.layers=this.layers,this.add(n);let a=new Xt(mn,gn,e,t);a.layers=this.layers,this.add(a);let o=new Xt(mn,gn,e,t);o.layers=this.layers,this.add(o);let l=new Xt(mn,gn,e,t);l.layers=this.layers,this.add(l);let c=new Xt(mn,gn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,n,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mn)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[n,a,o,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=M,e.setRenderTarget(i,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Lc=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ro=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=C_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function C_(){this._document.hidden===!1&&this.reset()}var Zb=new C,Jb=new qt,$b=new C,Qb=new C,eT=new C;var tT=new C,iT=new qt,rT=new C,sT=new C;var Ic=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,n,a;switch(t){case"quaternion":s=this._slerp,n=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,n=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,n=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=n,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,s=this.valueSize,n=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[n+o]=i[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(i,n,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,s=e*t+t,n=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,n<1){let l=t*this._origIndex;this._mixBufferRegion(i,s,l,1-n,t)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let n=i,a=s;n!==a;++n)t[n]=t[s+n%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,n){if(s>=.5)for(let a=0;a!==n;++a)e[t+a]=e[i+a]}_slerp(e,t,i,s){qt.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,n){let a=this._workIndex*n;qt.multiplyQuaternionsFlat(e,a,e,t,e,i),qt.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,i,s,n){let a=1-s;for(let o=0;o!==n;++o){let l=t+o;e[l]=e[l]*a+e[i+o]*s}}_lerpAdditive(e,t,i,s,n){for(let a=0;a!==n;++a){let o=t+a;e[o]=e[o]+e[i+a]*s}}},Ed="\\[\\]\\.:\\/",P_=new RegExp("["+Ed+"]","g"),wd="[^"+Ed+"]",L_="[^"+Ed.replace("\\.","")+"]",I_=/((?:WC+[\/:])*)/.source.replace("WC",wd),N_=/(WCOD+)?/.source.replace("WCOD",L_),D_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wd),U_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wd),O_=new RegExp("^"+I_+N_+D_+U_+"$"),F_=["material","materials","bones","map"],$u=class{constructor(e,t,i){let s=i||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,n=i.length;s!==n;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Mt=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(P_,"")}static parseTrackName(e){let t=O_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let n=i.nodeName.substring(s+1);F_.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(n){for(let a=0;a<n.length;a++){let o=n[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,n=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[n]!==void 0&&(n=e.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=n}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=$u,Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray],Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nc=class{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;let n=t.tracks,a=n.length,o=new Array(a),l={endingStart:Cs,endingEnd:Cs};for(let c=0;c!==a;++c){let h=n[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Om,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let s=this._clip.duration,n=e._clip.duration,a=n/s,o=s/n;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let s=this._mixer,n=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=n,l[1]=n+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}let n=this._startTime;if(n!==null){let l=(e-n)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Bm:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case bh:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,s=this.time+e,n=this._loopCount,a=i===Fm;if(e===0)return n===-1?s:a&&(n&1)===1?t-s:s;if(i===Um){n===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(n===-1&&(e>=0?(n=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,n+=Math.abs(o);let l=this.repetitions-n;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=n,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=n,this.time=s;if(a&&(n&1)===1)return t-s}return s}_setEndings(e,t,i){let s=this._interpolantSettings;i?(s.endingStart=Ps,s.endingEnd=Ps):(e?s.endingStart=this.zeroSlopeAtStart?Ps:Cs:s.endingStart=Ta,t?s.endingEnd=this.zeroSlopeAtEnd?Ps:Cs:s.endingEnd=Ta)}_scheduleFading(e,t,i){let s=this._mixer,n=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=n,l[0]=t,o[1]=n+e,l[1]=i,this}},B_=new Float32Array(1),Fn=class extends Ki{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,s=e._clip.tracks,n=s.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==n;++u){let p=s[u],d=p.name,g=h[d];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}let M=t&&t._propertyBindings[u].binding.parsedPath;g=new Ic(Mt.create(i,d,M),p.ValueTypeName,p.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,s=e._clip.uuid,n=this._actionsByClip[s];this._bindAction(e,n&&n.knownActions[0]),this._addInactiveAction(e,s,i)}let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let n=t[i];n.useCount++===0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let n=t[i];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let s=this._actions,n=this._actionsByClip,a=n[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,n[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;let n=e._clip.uuid,a=this._actionsByClip,o=a[n],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,p=(e._localRoot||this._root).uuid;delete u[p],l.length===0&&delete a[n],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let n=t[i];--n.referenceCount===0&&this._removeInactiveBinding(n)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,n=t[s];e._cacheIndex=s,t[s]=e,n._cacheIndex=i,t[i]=n}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,n=t[s];e._cacheIndex=s,t[s]=e,n._cacheIndex=i,t[i]=n}_addInactiveBinding(e,t,i){let s=this._bindingsByRootAndName,n=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[i]=e,e._cacheIndex=n.length,n.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,s=i.rootNode.uuid,n=i.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[n],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,n=t[s];e._cacheIndex=s,t[s]=e,n._cacheIndex=i,t[i]=n}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,n=t[s];e._cacheIndex=s,t[s]=e,n._cacheIndex=i,t[i]=n}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new Ja(new Float32Array(2),new Float32Array(2),1,B_),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,n=t[s];e.__cacheIndex=s,t[s]=e,n.__cacheIndex=i,t[i]=n}clipAction(e,t,i){let s=t||this._root,n=s.uuid,a=typeof e=="string"?hs.findByName(s,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=bh),l!==void 0){let u=l.actionByRoot[n];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Nc(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,n),h}existingAction(e,t){let i=t||this._root,s=i.uuid,n=typeof e=="string"?hs.findByName(i,e):e,a=n?n.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,s=this.time+=e,n=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(s,e,n,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,s=this._actionsByClip,n=s[i];if(n!==void 0){let a=n.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let a in i){let o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,n=s[t];if(n!==void 0)for(let a in n){let o=n[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var pm=new Be,so=class{constructor(e,t,i=0,s=1/0){this.ray=new os(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new En,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pm),this}intersectObject(e,t=!0,i=[]){return Qu(e,this,i,t),i.sort(fm),i}intersectObjects(e,t=!0,i=[]){for(let s=0,n=e.length;s<n;s++)Qu(e[s],this,i,t);return i.sort(fm),i}};function fm(r,e){return r.distance-e.distance}function Qu(r,e,t,i){let s=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let n=r.children;for(let a=0,o=n.length;a<o;a++)Qu(n[a],e,t,!0)}}var Id=class Id{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let n=this.elements;return n[0]=e,n[2]=t,n[1]=i,n[3]=s,this}};Id.prototype.isMatrix2=!0;var ed=Id,nT=new ee;var aT=new C,oT=new C,lT=new C,cT=new C,hT=new C,uT=new C,dT=new C;var pT=new C;var fT=new C,mT=new Be,gT=new Be;var vT=new C,_T=new Ae,xT=new Ae;var yT=new C,MT=new C,ST=new C;var bT=new C,TT=new Un;var ET=new ii;var wT=new C;function Ad(r,e,t,i){let s=z_(i);switch(t){case ud:return r*e;case Vc:return r*e/s.components*s.byteLength;case Wc:return r*e/s.components*s.byteLength;case ds:return r*e*2/s.components*s.byteLength;case jc:return r*e*2/s.components*s.byteLength;case dd:return r*e*3/s.components*s.byteLength;case wi:return r*e*4/s.components*s.byteLength;case Xc:return r*e*4/s.components*s.byteLength;case mo:case go:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vo:case _o:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yc:case Zc:return Math.max(r,16)*Math.max(e,8)/4;case qc:case Kc:return Math.max(r,8)*Math.max(e,8)/2;case Jc:case $c:case eh:case th:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qc:case xo:case ih:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case nh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ah:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case oh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case lh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ch:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case hh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case uh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case dh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ph:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case fh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case mh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case gh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case vh:case _h:case xh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case yh:case Mh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case yo:case Sh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function z_(r){switch(r){case hi:case od:return{byteLength:1,components:1};case Hn:case ld:case Gt:return{byteLength:2,components:1};case Gc:case Hc:return{byteLength:2,components:4};case er:case kc:case Li:return{byteLength:4,components:1};case cd:case hd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}})),typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function wg(){let r=null,e=!1,t=null,i=null;function s(n,a){i=r.requestAnimationFrame(s),t(n,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(s),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){r=n}}}function H_(r){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,p=r.createBuffer();r.bindBuffer(l,p),r.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<u.length;d++){let g=u[p],M=u[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++p,u[p]=M)}u.length=p+1;for(let d=0,g=u.length;d<g;d++){let M=u[d];r.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:n,update:a}}var V_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,j_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Z_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ix=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,px=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_x="gl_FragColor = linearToOutputTexel( gl_FragColor );",xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Dx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ox=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wx=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$x=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ey=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ty=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iy=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,uy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,my=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,My=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,by=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ty=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ay=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ly=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Iy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ny=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Oy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jy=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ky=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_M=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:V_,alphahash_pars_fragment:W_,alphamap_fragment:j_,alphamap_pars_fragment:X_,alphatest_fragment:q_,alphatest_pars_fragment:Y_,aomap_fragment:K_,aomap_pars_fragment:Z_,batching_pars_vertex:J_,batching_vertex:$_,begin_vertex:Q_,beginnormal_vertex:ex,bsdfs:tx,iridescence_fragment:ix,bumpmap_pars_fragment:rx,clipping_planes_fragment:sx,clipping_planes_pars_fragment:nx,clipping_planes_pars_vertex:ax,clipping_planes_vertex:ox,color_fragment:lx,color_pars_fragment:cx,color_pars_vertex:hx,color_vertex:ux,common:dx,defaultnormal_vertex:px,displacementmap_pars_vertex:fx,displacementmap_vertex:mx,emissivemap_fragment:gx,emissivemap_pars_fragment:vx,colorspace_fragment:_x,colorspace_pars_fragment:xx,envmap_fragment:yx,envmap_common_pars_fragment:Mx,envmap_pars_fragment:Sx,envmap_pars_vertex:bx,envmap_physical_pars_fragment:Dx,envmap_vertex:Tx,fog_vertex:Ex,fog_pars_vertex:wx,fog_fragment:Ax,fog_pars_fragment:Rx,gradientmap_pars_fragment:Cx,lightmap_pars_fragment:Px,lights_lambert_fragment:Lx,lights_lambert_pars_fragment:Ix,lights_pars_begin:Nx,lights_toon_fragment:Ux,lights_toon_pars_fragment:Ox,lights_phong_fragment:Fx,lights_phong_pars_fragment:Bx,lights_physical_fragment:zx,lights_physical_pars_fragment:kx,lights_fragment_begin:Gx,lights_fragment_maps:Hx,lights_fragment_end:Vx,lightprobes_pars_fragment:Wx,logdepthbuf_fragment:jx,logdepthbuf_pars_fragment:Xx,logdepthbuf_pars_vertex:qx,logdepthbuf_vertex:Yx,map_fragment:Kx,map_pars_fragment:Zx,map_particle_fragment:Jx,map_particle_pars_fragment:$x,metalnessmap_fragment:Qx,metalnessmap_pars_fragment:ey,morphinstance_vertex:ty,morphcolor_vertex:iy,morphnormal_vertex:ry,morphtarget_pars_vertex:sy,morphtarget_vertex:ny,normal_fragment_begin:ay,normal_fragment_maps:oy,normal_pars_fragment:ly,normal_pars_vertex:cy,normal_vertex:hy,normalmap_pars_fragment:uy,clearcoat_normal_fragment_begin:dy,clearcoat_normal_fragment_maps:py,clearcoat_pars_fragment:fy,iridescence_pars_fragment:my,opaque_fragment:gy,packing:vy,premultiplied_alpha_fragment:_y,project_vertex:xy,dithering_fragment:yy,dithering_pars_fragment:My,roughnessmap_fragment:Sy,roughnessmap_pars_fragment:by,shadowmap_pars_fragment:Ty,shadowmap_pars_vertex:Ey,shadowmap_vertex:wy,shadowmask_pars_fragment:Ay,skinbase_vertex:Ry,skinning_pars_vertex:Cy,skinning_vertex:Py,skinnormal_vertex:Ly,specularmap_fragment:Iy,specularmap_pars_fragment:Ny,tonemapping_fragment:Dy,tonemapping_pars_fragment:Uy,transmission_fragment:Oy,transmission_pars_fragment:Fy,uv_pars_fragment:By,uv_pars_vertex:zy,uv_vertex:ky,worldpos_vertex:Gy,background_vert:Hy,background_frag:Vy,backgroundCube_vert:Wy,backgroundCube_frag:jy,cube_vert:Xy,cube_frag:qy,depth_vert:Yy,depth_frag:Ky,distance_vert:Zy,distance_frag:Jy,equirect_vert:$y,equirect_frag:Qy,linedashed_vert:eM,linedashed_frag:tM,meshbasic_vert:iM,meshbasic_frag:rM,meshlambert_vert:sM,meshlambert_frag:nM,meshmatcap_vert:aM,meshmatcap_frag:oM,meshnormal_vert:lM,meshnormal_frag:cM,meshphong_vert:hM,meshphong_frag:uM,meshphysical_vert:dM,meshphysical_frag:pM,meshtoon_vert:fM,meshtoon_frag:mM,points_vert:gM,points_frag:vM,shadow_vert:_M,shadow_frag:xM,sprite_vert:yM,sprite_frag:MM},Re={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},xr={basic:{uniforms:ui([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:ui([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ae(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:ui([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:ui([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:ui([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ae(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:ui([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:ui([Re.points,Re.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:ui([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:ui([Re.common,Re.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:ui([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:ui([Re.sprite,Re.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:ui([Re.common,Re.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:ui([Re.lights,Re.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};xr.physical={uniforms:ui([xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var Eh={r:0,b:0,g:0},SM=new Be,Ag=new Je;Ag.set(-1,0,0,0,1,0,0,0,1);function bM(r,e,t,i,s,n){let a=new Ae(0),o=s===!0?0:1,l,c,h=null,u=0,p=null;function d(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let x=_.backgroundBlurriness>0;S=e.get(S,x)}return S}function g(_){let S=!1,x=d(_);x===null?f(a,o):x&&x.isColor&&(f(x,1),S=!0);let b=r.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,n):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,n),(r.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(_,S){let x=d(S);x&&x.isCubeTexture?(c===void 0&&(c=new Qe(new Qi(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:js(xr.backgroundCube.uniforms),vertexShader:xr.backgroundCube.vertexShader,fragmentShader:xr.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(SM.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ag),c.material.toneMapped=et.getTransfer(x.colorSpace)!==ht,(h!==x||u!==x.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,p=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Qe(new xi(2,2),new Ot({name:"BackgroundMaterial",uniforms:js(xr.background.uniforms),vertexShader:xr.background.vertexShader,fragmentShader:xr.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=et.getTransfer(x.colorSpace)!==ht,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,p=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function f(_,S){_.getRGB(Eh,Td(r)),t.buffers.color.setClear(Eh.r,Eh.g,Eh.b,S,n)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,S=1){a.set(_),o=S,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,f(a,o)},render:g,addToRenderList:M,dispose:m}}function TM(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},s=p(null),n=s,a=!1;function o(L,U,G,N,W){let q=!1,O=u(L,N,G,U);n!==O&&(n=O,c(n.object)),q=d(L,N,G,W),q&&g(L,N,G,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(L,U,G,N),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function h(L){return r.deleteVertexArray(L)}function u(L,U,G,N){let W=N.wireframe===!0,q=i[U.id];q===void 0&&(q={},i[U.id]=q);let O=L.isInstancedMesh===!0?L.id:0,Y=q[O];Y===void 0&&(Y={},q[O]=Y);let B=Y[G.id];B===void 0&&(B={},Y[G.id]=B);let H=B[W];return H===void 0&&(H=p(l()),B[W]=H),H}function p(L){let U=[],G=[],N=[];for(let W=0;W<t;W++)U[W]=0,G[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:N,object:L,attributes:{},index:null}}function d(L,U,G,N){let W=n.attributes,q=U.attributes,O=0,Y=G.getAttributes();for(let B in Y)if(Y[B].location>=0){let H=W[B],J=q[B];if(J===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),H===void 0||H.attribute!==J||J&&H.data!==J.data)return!0;O++}return n.attributesNum!==O||n.index!==N}function g(L,U,G,N){let W={},q=U.attributes,O=0,Y=G.getAttributes();for(let B in Y)if(Y[B].location>=0){let H=q[B];H===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));let J={};J.attribute=H,H&&H.data&&(J.data=H.data),W[B]=J,O++}n.attributes=W,n.attributesNum=O,n.index=N}function M(){let L=n.newAttributes;for(let U=0,G=L.length;U<G;U++)L[U]=0}function f(L){m(L,0)}function m(L,U){let G=n.newAttributes,N=n.enabledAttributes,W=n.attributeDivisors;G[L]=1,N[L]===0&&(r.enableVertexAttribArray(L),N[L]=1),W[L]!==U&&(r.vertexAttribDivisor(L,U),W[L]=U)}function _(){let L=n.newAttributes,U=n.enabledAttributes;for(let G=0,N=U.length;G<N;G++)U[G]!==L[G]&&(r.disableVertexAttribArray(G),U[G]=0)}function S(L,U,G,N,W,q,O){O===!0?r.vertexAttribIPointer(L,U,G,W,q):r.vertexAttribPointer(L,U,G,N,W,q)}function x(L,U,G,N){M();let W=N.attributes,q=G.getAttributes(),O=U.defaultAttributeValues;for(let Y in q){let B=q[Y];if(B.location>=0){let H=W[Y];if(H===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){let J=H.normalized,pe=H.itemSize,Te=e.get(H);if(Te===void 0)continue;let K=Te.buffer,te=Te.type,oe=Te.bytesPerElement,_e=te===r.INT||te===r.UNSIGNED_INT||H.gpuType===kc;if(H.isInterleavedBufferAttribute){let re=H.data,xe=re.isInterleavedBuffer===!0?re.stride:re.itemSize,Xe=H.offset;if(re.isInstancedInterleavedBuffer||re.isInstancedBufferAttribute){for(let Ue=0;Ue<B.locationSize;Ue++)m(B.location+Ue,re.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ue=0;Ue<B.locationSize;Ue++)f(B.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,K);for(let Ue=0;Ue<B.locationSize;Ue++)S(B.location+Ue,pe/B.locationSize,te,J,xe*oe,(Xe+pe/B.locationSize*Ue)*oe,_e)}else{if(H.isInstancedBufferAttribute){for(let re=0;re<B.locationSize;re++)m(B.location+re,H.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let re=0;re<B.locationSize;re++)f(B.location+re);r.bindBuffer(r.ARRAY_BUFFER,K);for(let re=0;re<B.locationSize;re++)S(B.location+re,pe/B.locationSize,te,J,pe*oe,pe/B.locationSize*re*oe,_e)}}else if(O!==void 0){let J=O[Y];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(B.location,J);break;case 3:r.vertexAttrib3fv(B.location,J);break;case 4:r.vertexAttrib4fv(B.location,J);break;default:r.vertexAttrib1fv(B.location,J)}}}}_()}function b(){R();for(let L in i){let U=i[L];for(let G in U){let N=U[G];for(let W in N){let q=N[W];for(let O in q)h(q[O].object),delete q[O];delete N[W]}}delete i[L]}}function E(L){if(i[L.id]===void 0)return;let U=i[L.id];for(let G in U){let N=U[G];for(let W in N){let q=N[W];for(let O in q)h(q[O].object),delete q[O];delete N[W]}}delete i[L.id]}function v(L){for(let U in i){let G=i[U];for(let N in G){let W=G[N];if(W[L.id]===void 0)continue;let q=W[L.id];for(let O in q)h(q[O].object),delete q[O];delete W[L.id]}}}function y(L){for(let U in i){let G=i[U],N=L.isInstancedMesh===!0?L.id:0,W=G[N];if(W!==void 0){for(let q in W){let O=W[q];for(let Y in O)h(O[Y].object),delete O[Y];delete W[q]}delete G[N],Object.keys(G).length===0&&delete i[U]}}}function R(){A(),a=!0,n!==s&&(n=s,c(n.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:v,initAttributes:M,enableAttribute:f,disableUnusedAttributes:_}}function EM(r,e,t){let i;function s(l){i=l}function n(l,c){r.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,i,1)}this.setMode=s,this.render=n,this.renderInstances=a,this.renderMultiDraw=o}function wM(r,e,t,i){let s;function n(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==wi&&i.convert(v)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let y=v===Gt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==hi&&v!==Li&&!y&&i.convert(v)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Fe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Fe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:x,maxSamples:b,samples:E}}function AM(r){let e=this,t=null,i=0,s=!1,n=!1,a=new Yi,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let d=u.length!==0||p||i!==0||s;return s=p,i=u.length,d},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,d){let g=u.clippingPlanes,M=u.clipIntersection,f=u.clipShadows,m=r.get(u);if(!s||g===null||g.length===0||n&&!f)n?h(null):c();else{let _=n?0:i,S=_*4,x=m.clippingState||null;l.value=x,x=h(g,p,S,d);for(let b=0;b!==S;++b)x[b]=t[b];m.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,p,d,g){let M=u!==null?u.length:0,f=null;if(M!==0){if(f=l.value,g!==!0||f===null){let m=d+M*4,_=p.matrixWorldInverse;o.getNormalMatrix(_),(f===null||f.length<m)&&(f=new Float32Array(m));for(let S=0,x=d;S!==M;++S,x+=4)a.copy(u[S]).applyMatrix4(_,o),a.normal.toArray(f,x),f[x+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,f}}var Eo=class extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Oa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Qi(5,5,5),n=new Ot({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:si,blending:Qt});n.uniforms.tEquirect.value=t;let a=new Qe(s,n),o=t.minFilter;return t.minFilter===zi&&(t.minFilter=Kt),new On(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let n=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(n)}},ng=256,RM=3,CM=20,Rg=256,Cg=16,PM=3,LM=new C,IM=new Ae,Xn=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new On(1,10,null),this._boxMesh=new Qe(new Qi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,n={}){let{size:a=256,position:o=LM}=n,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,p=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(IM));let f=new On(i,s,h);return f.position.copy(o),f.update(l,e),l.autoClear=u,l.autoClearColor=p,l.autoClearDepth=d,l.autoClearStencil=g,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ng,yd(e))}_fromTexture(e,t){e.mapping===Vs||e.mapping===kn?this._setSize(e.image.length===0?ng:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=ag(e,!1,!1),i=Math.log2(e)-RM;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=ag(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,n=this._cubeCamera;s.material=i,n.renderTarget=e,n.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),n.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Vs||e.mapping===kn?(this._cubemapMaterial===null&&(this._cubemapMaterial=lg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=og()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=NM(),this._integrationMaterial=DM());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let n=this._integrationMaterial.uniforms;n.envMap.value=this._sourceTarget.texture,n.sourceLod.value=Math.log2(t/Cg);for(let a=0;a<=i;a++){let o=r.lodToRoughness(a,i);if(a>i-PM)n.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Rg*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=UM());let i=this._blurMaterial,s=i.uniforms,n=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=n.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(n,0,i)}};function ag(r,e,t){return new Eo(r,{minFilter:zi,generateMipmaps:e,type:Gt,colorSpace:gi,depthBuffer:t})}function wo(r,e,t){return new Ot({name:r,uniforms:e,vertexShader:it.cube_vert,fragmentShader:t,side:si,blending:Qt,depthTest:!1,depthWrite:!1})}function NM(){return wo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Rg}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function DM(){return wo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Cg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function UM(){return wo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${CM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function og(){return wo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function lg(){return wo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function OM(r){let e=new WeakMap,t=new WeakMap,i=null;function s(p,d=!1){return p==null?null:d?a(p):n(p)}function n(p){if(p&&p.isTexture){let d=p.mapping;if(d===Fc||d===Bc)if(e.has(p)){let g=e.get(p).texture;return o(g,p.mapping)}else{let g=p.image;if(g&&g.height>0){let M=new Eo(g.height);return M.fromEquirectangularTexture(r,p),e.set(p,M),p.addEventListener("dispose",c),o(M.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture&&p.isPMREMTexture!==!0){let d=p.mapping,g=d===Fc||d===Bc,M=d===Vs||d===kn;if(g||M){let f=t.get(p),m=f!==void 0?f.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==m)return i===null&&(i=new Xn(r)),f=g?i.fromEquirectangular(p,f):i.fromCubemap(p,f),f.texture.pmremVersion=p.pmremVersion,t.set(p,f),f.texture;if(f!==void 0)return f.texture;{let _=p.image;return g&&_&&_.height>0||M&&_&&l(_)?(i===null&&(i=new Xn(r)),f=g?i.fromEquirectangular(p):i.fromCubemap(p),f.texture.pmremVersion=p.pmremVersion,t.set(p,f),p.addEventListener("dispose",h),f.texture):null}}}return p}function o(p,d){return d===Fc?p.mapping=Vs:d===Bc&&(p.mapping=kn),p}function l(p){let d=0,g=6;for(let M=0;M<g;M++)p[M]!==void 0&&d++;return d===g}function c(p){let d=p.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(p){let d=p.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function FM(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=r.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ls("WebGLRenderer: "+i+" extension not supported."),s}}}function BM(r,e,t,i){let s={},n=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let f in g.attributes)e.remove(g.attributes[f]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let M=n.get(g);M&&(e.remove(M),n.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function h(g){let M=g.attributes;for(let f in M)e.update(M[f],r.ARRAY_BUFFER)}function u(g){let M=g.index,f=g.attributes.position,m=0;if(f===void 0)return;let _=M!==null?M.array.length:f.array.length/3-1,S=f.count>=65535?Ca:Ra,x=new S(Math.ceil(_/3)*6,1),b=x.array;if(M!==null){let v=M.array;m=M.version;for(let y=0,R=0;y<_;y+=3){let A=v[y+0],L=v[y+1],U=v[y+2];b[R++]=A,b[R++]=L,b[R++]=L,b[R++]=U,b[R++]=U,b[R++]=A}}else{m=f.version;for(let v=0,y=0;v<_;v+=3){let R=v+0,A=v+1,L=v+2;b[y++]=R,b[y++]=A,b[y++]=A,b[y++]=L,b[y++]=L,b[y++]=R}}x.version=m;let E=n.get(g);E&&e.remove(E),n.set(g,x)}function p(g){let M=n.get(g);if(M){let f=g.index;f!==null&&M.version<f.version&&u(g)}else u(g);return n.get(g)}function d(){for(let g in s){let M=s[g].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:p,dispose:d}}function zM(r,e,t){let i;function s(u){i=u}let n,a;function o(u){n=u.type,a=u.bytesPerElement}function l(u,p){r.drawElements(i,p,n,u*a),t.update(p,i,1)}function c(u,p,d){d!==0&&(r.drawElementsInstanced(i,p,n,u*a,d),t.update(p,i,d))}function h(u,p,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,n,u,0,d);let g=0;for(let M=0;M<d;M++)g+=p[M];t.update(g,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function kM(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(n/3);break;case r.LINES:t.lines+=o*(n/2);break;case r.LINE_STRIP:t.lines+=o*(n-1);break;case r.LINE_LOOP:t.lines+=o*n;break;case r.POINTS:t.points+=o*n;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function GM(r,e,t){let i=new WeakMap,s=new yt;function n(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,p=i.get(o);if(p===void 0||p.count!==u){let d=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",d)};p!==void 0&&p.texture.dispose();let g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],x=0;g===!0&&(x=1),M===!0&&(x=2),f===!0&&(x=3);let b=o.attributes.position.count*x,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let v=new Float32Array(b*E*4*u),y=new Aa(v,b,E,u);y.type=Li,y.needsUpdate=!0;let R=x*4;for(let A=0;A<u;A++){let L=m[A],U=_[A],G=S[A],N=b*E*4*A;for(let W=0;W<L.count;W++){let q=W*R;g===!0&&(s.fromBufferAttribute(L,W),v[N+q+0]=s.x,v[N+q+1]=s.y,v[N+q+2]=s.z,v[N+q+3]=0),M===!0&&(s.fromBufferAttribute(U,W),v[N+q+4]=s.x,v[N+q+5]=s.y,v[N+q+6]=s.z,v[N+q+7]=0),f===!0&&(s.fromBufferAttribute(G,W),v[N+q+8]=s.x,v[N+q+9]=s.y,v[N+q+10]=s.z,v[N+q+11]=G.itemSize===4?s.w:1)}}p={count:u,texture:y,size:new ee(b,E)},i.set(o,p),o.addEventListener("dispose",d)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}return{update:n}}function HM(r,e,t,i,s){let n=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,p=e.get(c,u);if(n.get(p)!==h&&(e.update(p),n.set(p,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),n.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),n.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;n.get(d)!==h&&(d.update(),n.set(d,h))}return p}function o(){n=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var VM={[lo]:"LINEAR_TONE_MAPPING",[co]:"REINHARD_TONE_MAPPING",[ho]:"CINEON_TONE_MAPPING",[us]:"ACES_FILMIC_TONE_MAPPING",[po]:"AGX_TONE_MAPPING",[fo]:"NEUTRAL_TONE_MAPPING",[uo]:"CUSTOM_TONE_MAPPING"};function WM(r,e,t,i,s,n){let a=new Ut(e,t,{type:r,depthBuffer:s,stencilBuffer:n,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new ut;h.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ke([0,2,0,0,2,0],2));let u=new In({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Qe(h,u),d=new Xr(-1,1,1,-1,0,1),g=null,M=null,f=!1,m,_=null,S=[],x=!1;this.setSize=function(b,E){a.setSize(b,E),o!==null&&o.setSize(b,E),l!==null&&l.setSize(b,E);for(let v=0;v<S.length;v++){let y=S[v];y.setSize&&y.setSize(b,E)}},this.setEffects=function(b){S=b,x=S.length>0&&S[0].isRenderPass===!0;let E=a.width,v=a.height;S.length>0&&o===null&&(o=new Ut(E,v,{type:Gt,depthBuffer:!1,stencilBuffer:!1}),l=new Ut(E,v,{type:Gt,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&S.some(R=>R.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new $i(E,v),n===!0&&(c.format=tr,c.type=Yr)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let R=0;R<S.length;R++){let A=S[R];A.setSize&&A.setSize(E,v),y&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,E){if(f||b.toneMapping===Bi&&S.length===0)return!1;if(_=E,E!==null){let v=E.width,y=E.height;(a.width!==v||a.height!==y)&&this.setSize(v,y)}return x===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=Bi,!0},this.hasRenderPass=function(){return x},this.end=function(b,E){b.toneMapping=m,f=!0;let v=a,y=o;for(let R=0;R<S.length;R++){let A=S[R];A.enabled!==!1&&(A.render(b,y,v,E),A.needsSwap!==!1&&(v=y,y=y===o?l:o))}if(g!==b.outputColorSpace||M!==b.toneMapping){g=b.outputColorSpace,M=b.toneMapping,u.defines={},et.getTransfer(g)===ht&&(u.defines.SRGB_TRANSFER="");let R=VM[M];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,b.setRenderTarget(_),b.render(p,d),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Pg=new Yt,Lg=new $i(1,1),Ig=new Fa(1),Ng=new Aa,Dg=new $l,Ug=new Oa,cg=[],hg=[],ug=new Float32Array(16),dg=new Float32Array(9),pg=new Float32Array(4);function qn(r,e,t){let i=r[0];if(i<=0||i>0)return r;let s=e*t,n=cg[s];if(n===void 0&&(n=new Float32Array(s),cg[s]=n),e!==0){i.toArray(n,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(n,o)}return n}function Zt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Jt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Rh(r,e){let t=hg[e];t===void 0&&(t=new Int32Array(e),hg[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function jM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function XM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2fv(this.addr,e),Jt(t,e)}}function qM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;r.uniform3fv(this.addr,e),Jt(t,e)}}function YM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4fv(this.addr,e),Jt(t,e)}}function KM(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;pg.set(i),r.uniformMatrix2fv(this.addr,!1,pg),Jt(t,i)}}function ZM(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;dg.set(i),r.uniformMatrix3fv(this.addr,!1,dg),Jt(t,i)}}function JM(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;ug.set(i),r.uniformMatrix4fv(this.addr,!1,ug),Jt(t,i)}}function $M(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function QM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2iv(this.addr,e),Jt(t,e)}}function eS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3iv(this.addr,e),Jt(t,e)}}function tS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4iv(this.addr,e),Jt(t,e)}}function iS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function rS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2uiv(this.addr,e),Jt(t,e)}}function sS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3uiv(this.addr,e),Jt(t,e)}}function nS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4uiv(this.addr,e),Jt(t,e)}}function Ch(r){return r.version===0&&(r.compareFunction=gd,r.needsUpdate=!0),r}function aS(r,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s);let n;this.type===r.SAMPLER_2D_SHADOW?n=Ch(Lg):n=Pg,t.setTexture2D(e||n,s)}function oS(r,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Dg,s)}function lS(r,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s);let n;this.type===r.SAMPLER_CUBE_SHADOW?n=Ch(Ig):n=Ug,t.setTextureCube(e||n,s)}function cS(r,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ng,s)}function hS(r){switch(r){case 5126:return jM;case 35664:return XM;case 35665:return qM;case 35666:return YM;case 35674:return KM;case 35675:return ZM;case 35676:return JM;case 5124:case 35670:return $M;case 35667:case 35671:return QM;case 35668:case 35672:return eS;case 35669:case 35673:return tS;case 5125:return iS;case 36294:return rS;case 36295:return sS;case 36296:return nS;case 35678:case 36198:case 36298:case 36306:case 35682:return aS;case 35679:case 36299:case 36307:return oS;case 35680:case 36300:case 36308:case 36293:return lS;case 36289:case 36303:case 36311:case 36292:return cS}}function uS(r,e){r.uniform1fv(this.addr,e)}function dS(r,e){let t=qn(e,this.size,2);r.uniform2fv(this.addr,t)}function pS(r,e){let t=qn(e,this.size,3);r.uniform3fv(this.addr,t)}function fS(r,e){let t=qn(e,this.size,4);r.uniform4fv(this.addr,t)}function mS(r,e){let t=qn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function gS(r,e){let t=qn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function vS(r,e){let t=qn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _S(r,e){r.uniform1iv(this.addr,e)}function xS(r,e){r.uniform2iv(this.addr,e)}function yS(r,e){r.uniform3iv(this.addr,e)}function MS(r,e){r.uniform4iv(this.addr,e)}function SS(r,e){r.uniform1uiv(this.addr,e)}function bS(r,e){r.uniform2uiv(this.addr,e)}function TS(r,e){r.uniform3uiv(this.addr,e)}function ES(r,e){r.uniform4uiv(this.addr,e)}function wS(r,e,t){let i=this.cache,s=e.length,n=Rh(t,s);Zt(i,n)||(r.uniform1iv(this.addr,n),Jt(i,n));let a;this.type===r.SAMPLER_2D_SHADOW?a=Ch(Lg):a=Pg;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,n[o])}function AS(r,e,t){let i=this.cache,s=e.length,n=Rh(t,s);Zt(i,n)||(r.uniform1iv(this.addr,n),Jt(i,n));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Dg,n[a])}function RS(r,e,t){let i=this.cache,s=e.length,n=Rh(t,s);Zt(i,n)||(r.uniform1iv(this.addr,n),Jt(i,n));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=Ch(Ig):a=Ug;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,n[o])}function CS(r,e,t){let i=this.cache,s=e.length,n=Rh(t,s);Zt(i,n)||(r.uniform1iv(this.addr,n),Jt(i,n));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ng,n[a])}function PS(r){switch(r){case 5126:return uS;case 35664:return dS;case 35665:return pS;case 35666:return fS;case 35674:return mS;case 35675:return gS;case 35676:return vS;case 5124:case 35670:return _S;case 35667:case 35671:return xS;case 35668:case 35672:return yS;case 35669:case 35673:return MS;case 5125:return SS;case 36294:return bS;case 36295:return TS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return wS;case 35679:case 36299:case 36307:return AS;case 35680:case 36300:case 36308:case 36293:return RS;case 36289:case 36303:case 36311:case 36292:return CS}}var Ud=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hS(t.type)}},Od=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PS(t.type)}},Fd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let n=0,a=s.length;n!==a;++n){let o=s[n];o.setValue(e,t[o.id],i)}}},Nd=/(\w+)(\])?(\[|\.)?/g;function fg(r,e){r.seq.push(e),r.map[e.id]=e}function LS(r,e,t){let i=r.name,s=i.length;for(Nd.lastIndex=0;;){let n=Nd.exec(i),a=Nd.lastIndex,o=n[1],l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fg(t,c===void 0?new Ud(o,r,e):new Od(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Fd(o),fg(t,h)),t=h}}}var jn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);LS(o,l,this)}let s=[],n=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):n.push(a);s.length>0&&(this.seq=s.concat(n))}setValue(e,t,i,s){let n=this.map[t];n!==void 0&&n.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let n=0,a=t.length;n!==a;++n){let o=t[n],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,n=e.length;s!==n;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function mg(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var IS=37297,NS=0;function DS(r,e){let t=r.split(`
`),i=[],s=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let a=s;a<n;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var gg=new Je;function US(r){et._getMatrix(gg,et.workingColorSpace,r);let e=`mat3( ${gg.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(r)){case Ea:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function vg(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let n=/ERROR: 0:(\d+)/.exec(s);if(n){let a=parseInt(n[1]);return t.toUpperCase()+`

`+s+`

`+DS(r.getShaderSource(e),a)}else return s}function OS(r,e){let t=US(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var FS={[lo]:"Linear",[co]:"Reinhard",[ho]:"Cineon",[us]:"ACESFilmic",[po]:"AgX",[fo]:"Neutral",[uo]:"Custom"};function BS(r,e){let t=FS[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wh=new C;function zS(){et.getLuminanceCoefficients(wh);let r=wh.x.toFixed(4),e=wh.y.toFixed(4),t=wh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function GS(r){let e=[];for(let t in r){let i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function HS(r,e){let t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let n=r.getActiveAttrib(e,s),a=n.name,o=1;n.type===r.FLOAT_MAT2&&(o=2),n.type===r.FLOAT_MAT3&&(o=3),n.type===r.FLOAT_MAT4&&(o=4),t[a]={type:n.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function To(r){return r!==""}function _g(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function xg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var VS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(r){return r.replace(VS,WS)}function WS(r,e){let t=it[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Bd(t)}var jS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yg(r){return r.replace(jS,XS)}function XS(r,e,t,i){let s="";for(let n=parseInt(e);n<parseInt(t);n++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return s}function Mg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var qS={[Gs]:"SHADOWMAP_TYPE_PCF",[Bn]:"SHADOWMAP_TYPE_VSM"};function YS(r){return qS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var KS={[kn]:"ENVMAP_MODE_REFRACTION"};function ZS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":KS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var JS={[Oc]:"ENVMAP_BLENDING_MULTIPLY",[Im]:"ENVMAP_BLENDING_MIX",[Nm]:"ENVMAP_BLENDING_ADD"};function $S(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":JS[r.combine]||"ENVMAP_BLENDING_NONE"}function QS(r,e,t,i){let s=r.getContext(),n=t.defines,a=t.vertexShader,o=t.fragmentShader,l=YS(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ZS(t),u=$S(t),p=kS(t),d=GS(n),g=s.createProgram(),M,f,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(To).join(`
`),M.length>0&&(M+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(To).join(`
`),f.length>0&&(f+=`
`)):(M=[Mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),f=[Mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?it.tonemapping_pars_fragment:"",t.toneMapping!==Bi?BS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,OS("linearToOutputTexel",t.outputColorSpace),zS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),a=Bd(a),a=_g(a,t),a=xg(a,t),o=Bd(o),o=_g(o,t),o=xg(o,t),a=yg(a),o=yg(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,M=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,f=["#define varying in",t.glslVersion===_d?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=m+M+a,S=m+f+o,x=mg(s,s.VERTEX_SHADER,_),b=mg(s,s.FRAGMENT_SHADER,S);s.attachShader(g,x),s.attachShader(g,b),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(A){if(r.debug.checkShaderErrors){let L=s.getProgramInfoLog(g)||"",U=s.getShaderInfoLog(x)||"",G=s.getShaderInfoLog(b)||"",N=L.trim(),W=U.trim(),q=G.trim(),O=!0,Y=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,g,x,b);else{let B=vg(s,x,"vertex"),H=vg(s,b,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+B+`
`+H)}else N!==""?Fe("WebGLProgram: Program Info Log:",N):(W===""||q==="")&&(Y=!1);Y&&(A.diagnostics={runnable:O,programLog:N,vertexShader:{log:W,prefix:M},fragmentShader:{log:q,prefix:f}})}s.deleteShader(x),s.deleteShader(b),v=new jn(s,g),y=HS(s,g)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(g,IS)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=x,this.fragmentShader=b,this}var e1=0,zd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new kd(e),t.set(e,i)),i}},kd=class{constructor(e){this.id=e1++,this.code=e,this.usedTimes=0}};function t1(r){return r===ds||r===xo||r===yo}function i1(r,e,t,i,s,n){let a=new En,o=new zd,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,y,R,A,L,U){let G=A.fog,N=L.geometry,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||W,q),Y=p[v.type],B=i.precision;v.precision!==null&&(B=i.getMaxPrecision(v.precision),B!==v.precision&&Fe("WebGLProgram.getParameters:",v.precision,"not supported, using",B,"instead."));let H=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,J=H!==void 0?H.length:0,pe=0;N.morphAttributes.position!==void 0&&(pe=1),N.morphAttributes.normal!==void 0&&(pe=2),N.morphAttributes.color!==void 0&&(pe=3);let Te,K,te,oe;if(Y){let Pe=xr[Y];Te=Pe.vertexShader,K=Pe.fragmentShader}else{Te=v.vertexShader,K=v.fragmentShader;let Pe=o.getVertexShaderStage(v),Ct=o.getFragmentShaderStage(v);o.update(v,Pe,Ct),te=Pe.id,oe=Ct.id}let _e=r.getRenderTarget(),re=r.state.buffers.depth.getReversed(),xe=L.isInstancedMesh===!0,Xe=L.isBatchedMesh===!0,Ue=!!v.map,je=!!v.matcap,se=!!O,le=se&&O.isPMREMTexture===!0,ue=!!v.aoMap,Ee=!!v.lightMap,Ce=!!v.bumpMap&&v.wireframe===!1,Ie=!!v.normalMap,qe=!!v.displacementMap,Ze=!!v.emissiveMap,rt=!!v.metalnessMap,at=!!v.roughnessMap,xt=v.anisotropy>0,z=v.clearcoat>0,ft=v.diffuseRoughness>0,dt=v.dispersion>0,pt=v.retroreflectivity>0,ce=v.iridescence>0,St=v.sheen>0,Oe=v.transmission>0,He=xt&&!!v.anisotropyMap,P=z&&!!v.clearcoatMap,T=z&&!!v.clearcoatNormalMap,j=z&&!!v.clearcoatRoughnessMap,ae=ft&&!!v.diffuseRoughnessMap,Q=ce&&!!v.iridescenceMap,ge=ce&&!!v.iridescenceThicknessMap,fe=St&&!!v.sheenColorMap,k=St&&!!v.sheenRoughnessMap,ie=!!v.specularMap,ye=!!v.specularColorMap,D=!!v.specularIntensityMap,$=Oe&&!!v.transmissionMap,ne=Oe&&!!v.thicknessMap,de=!!v.gradientMap,Me=!!v.alphaMap,ve=v.alphaTest>0,Ge=!!v.alphaHash,Se=!!v.extensions,De=Bi;v.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(De=r.toneMapping);let Ke=le?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,ot={shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:Te,fragmentShader:K,defines:v.defines,customVertexShaderID:te,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:B,batching:Xe,batchingColor:Xe&&L._colorsTexture!==null,instancing:xe,instancingColor:xe&&L.instanceColor!==null,instancingMorph:xe&&L.morphTexture!==null,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ue,matcap:je,envMap:se,envMapMode:se&&O.mapping,envMapPMREM:le,envMapMaxLod:le?Ke.length-1:null,envMapSize:le?Ke[0].width:null,aoMap:ue,lightMap:Ee,bumpMap:Ce,normalMap:Ie,displacementMap:qe,emissiveMap:Ze,normalMapObjectSpace:Ie&&v.normalMapType===km,normalMapTangentSpace:Ie&&v.normalMapType===Wn,packedNormalMap:Ie&&v.normalMapType===Wn&&t1(v.normalMap.format),metalnessMap:rt,roughnessMap:at,anisotropy:xt,anisotropyMap:He,clearcoat:z,clearcoatMap:P,clearcoatNormalMap:T,clearcoatRoughnessMap:j,diffuseRoughness:ft,diffuseRoughnessMap:ae,dispersion:dt,retroreflection:pt,iridescence:ce,iridescenceMap:Q,iridescenceThicknessMap:ge,sheen:St,sheenColorMap:fe,sheenRoughnessMap:k,specularMap:ie,specularColorMap:ye,specularIntensityMap:D,transmission:Oe,transmissionMap:$,thicknessMap:ne,gradientMap:de,opaque:v.transparent===!1&&v.blending===zn&&v.alphaToCoverage===!1,alphaMap:Me,alphaTest:ve,alphaHash:Ge,combine:v.combine,mapUv:Ue&&d(v.map.channel),aoMapUv:ue&&d(v.aoMap.channel),lightMapUv:Ee&&d(v.lightMap.channel),bumpMapUv:Ce&&d(v.bumpMap.channel),normalMapUv:Ie&&d(v.normalMap.channel),displacementMapUv:qe&&d(v.displacementMap.channel),emissiveMapUv:Ze&&d(v.emissiveMap.channel),metalnessMapUv:rt&&d(v.metalnessMap.channel),roughnessMapUv:at&&d(v.roughnessMap.channel),anisotropyMapUv:He&&d(v.anisotropyMap.channel),clearcoatMapUv:P&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&d(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&d(v.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:k&&d(v.sheenRoughnessMap.channel),specularMapUv:ie&&d(v.specularMap.channel),specularColorMapUv:ye&&d(v.specularColorMap.channel),specularIntensityMapUv:D&&d(v.specularIntensityMap.channel),transmissionMapUv:$&&d(v.transmissionMap.channel),thicknessMapUv:ne&&d(v.thicknessMap.channel),alphaMapUv:Me&&d(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ie||xt),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Ue||Me),fog:!!G,useFog:v.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&Ie===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:re,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:pe,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:U.filter(Pe=>Pe.texture!==null).length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:De,decodeVideoTexture:Ue&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===ht,decodeVideoTextureEmissive:Ze&&v.emissiveMap.isVideoTexture===!0&&et.getTransfer(v.emissiveMap.colorSpace)===ht,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Oi,flipSided:v.side===si,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&v.extensions.multiDraw===!0||Xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function M(v){let y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)y.push(R),y.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(f(y,v),m(y,v),y.push(r.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function f(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapPMREM),v.push(y.envMapMaxLod),v.push(y.envMapSize),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.diffuseRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.numSunLights),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numSunLightShadows),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.numLightProbeGrids),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function m(v,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function _(v){let y=p[v.type],R;if(y){let A=xr[y];R=Mi.clone(A.uniforms)}else R=v.uniforms;return R}function S(v,y){let R=h.get(y);return R!==void 0?++R.usedTimes:(R=new QS(r,y,v,s),c.push(R),h.set(y,R)),R}function x(v){if(--v.usedTimes===0){let y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:_,acquireProgram:S,releaseProgram:x,releaseShaderCache:b,programs:c,dispose:E}}function r1(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function s(a,o,l){r.get(a)[o]=l}function n(){r=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:n}}function s1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Sg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function bg(){let r=[],e=0,t=[],i=[],s=[];function n(){e=0,t.length=0,i.length=0,s.length=0}function a(p){let d=0;return p.isInstancedMesh&&(d+=2),p.isSkinnedMesh&&(d+=1),d}function o(p,d,g,M,f,m){let _=r[e];return _===void 0?(_={id:p.id,object:p,geometry:d,material:g,materialVariant:a(p),groupOrder:M,renderOrder:p.renderOrder,z:f,group:m},r[e]=_):(_.id=p.id,_.object=p,_.geometry=d,_.material=g,_.materialVariant=a(p),_.groupOrder=M,_.renderOrder=p.renderOrder,_.z=f,_.group=m),e++,_}function l(p,d,g,M,f,m,_){_.reversedDepth===!0&&(f=-f);let S=o(p,d,g,M,f,m);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):t.push(S)}function c(p,d,g,M,f,m){let _=o(p,d,g,M,f,m);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function h(p,d){t.length>1&&t.sort(p||s1),i.length>1&&i.sort(d||Sg),s.length>1&&s.sort(d||Sg)}function u(){for(let p=e,d=r.length;p<d;p++){let g=r[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:n,push:l,unshift:c,finish:u,sort:h}}function n1(){let r=new WeakMap;function e(i,s){let n=r.get(i),a;return n===void 0?(a=new bg,r.set(i,[a])):s>=n.length?(a=new bg,n.push(a)):a=n[s],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function a1(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new Ae};break;case"SpotLight":t={position:new C,direction:new C,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function o1(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var l1=0;function c1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function h1(r){let e=new a1,t=o1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,n=new Be,a=new Be;function o(c){let h=0,u=0,p=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let d=0,g=0,M=0,f=0,m=0,_=0,S=0,x=0,b=0,E=0,v=0,y=0,R=0,A=0;c.sort(c1);for(let U=0,G=c.length;U<G;U++){let N=c[U],W=N.color,q=N.intensity,O=N.distance,Y=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ds?Y=N.shadow.map.texture:Y=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=W.r*q,u+=W.g*q,p+=W.b*q;else if(N.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(N.sh.coefficients[B],q);A++}else if(N.isSunLight){let B=e.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let H=N.shadow,J=t.get(N);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),i.sunShadow[g]=J,i.sunShadowMap[g]=Y;let pe=H.getViewportCount();for(let Te=0;Te<pe;Te++)i.sunShadowMatrix[M+Te]=H.getMatrix(Te),i.sunShadowCascade[M+Te]=H._cascadeData[Te];M+=pe,g++}i.sun[d]=B,d++}else if(N.isDirectionalLight){let B=e.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let H=N.shadow,J=t.get(N);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,i.directionalShadow[f]=J,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=N.shadow.matrix,b++}i.directional[f]=B,f++}else if(N.isSpotLight){let B=e.get(N);B.position.setFromMatrixPosition(N.matrixWorld),B.color.copy(W).multiplyScalar(q),B.distance=O,B.coneCos=Math.cos(N.angle),B.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),B.decay=N.decay,i.spot[_]=B;let H=N.shadow;if(N.map&&(i.spotLightMap[y]=N.map,y++,H.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[_]=H.matrix,N.castShadow){let J=t.get(N);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,i.spotShadow[_]=J,i.spotShadowMap[_]=Y,v++}_++}else if(N.isRectAreaLight){let B=e.get(N);B.color.copy(W).multiplyScalar(q),B.halfWidth.set(N.width*.5,0,0),B.halfHeight.set(0,N.height*.5,0),i.rectArea[S]=B,S++}else if(N.isPointLight){let B=e.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),B.distance=N.distance,B.decay=N.decay,N.castShadow){let H=N.shadow,J=t.get(N);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=N.shadow.matrix,E++}i.point[m]=B,m++}else if(N.isHemisphereLight){let B=e.get(N);B.skyColor.copy(N.color).multiplyScalar(q),B.groundColor.copy(N.groundColor).multiplyScalar(q),i.hemi[x]=B,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=p;let L=i.hash;(L.sunLength!==d||L.directionalLength!==f||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==S||L.hemiLength!==x||L.numSunShadows!==g||L.numDirectionalShadows!==b||L.numPointShadows!==E||L.numSpotShadows!==v||L.numSpotMaps!==y||L.numLightProbes!==A)&&(i.sun.length=d,i.directional.length=f,i.spot.length=_,i.rectArea.length=S,i.point.length=m,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+y-R,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,L.sunLength=d,L.directionalLength=f,L.pointLength=m,L.spotLength=_,L.rectAreaLength=S,L.hemiLength=x,L.numSunShadows=g,L.numDirectionalShadows=b,L.numPointShadows=E,L.numSpotShadows=v,L.numSpotMaps=y,L.numLightProbes=A,i.version=l1++)}function l(c,h){let u=0,p=0,d=0,g=0,M=0,f=0,m=h.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){let x=c[_];if(x.isSunLight){let b=i.sun[u];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),u++}else if(x.isDirectionalLight){let b=i.directional[p];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(x.isSpotLight){let b=i.spot[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),g++}else if(x.isRectAreaLight){let b=i.rectArea[M];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),a.identity(),n.copy(x.matrixWorld),n.premultiply(m),a.extractRotation(n),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),M++}else if(x.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let b=i.hemi[f];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),f++}}}return{setup:o,setupView:l,state:i}}function Tg(r){let e=new h1(r),t=[],i=[],s=[];function n(u){h.camera=u,t.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){i.push(u)}function l(){e.setup(t),s.sort((u,p)=>u.priority-p.priority||u.id-p.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function u1(r){let e=new WeakMap;function t(s,n=0){let a=e.get(s),o;return a===void 0?(o=new Tg(r),e.set(s,[o])):n>=a.length?(o=new Tg(r),a.push(o)):o=a[n],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var d1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,f1=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],m1=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Eg=new Be,bo=new C,Dd=new C;function g1(r,e,t){let i=new Hr,s=new ee,n=new ee,a=new yt,o=new bc,l=new Tc,c={},h=t.maxTextureSize,u={[vr]:si,[si]:vr,[Oi]:Oi},p=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:d1,fragmentShader:p1}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let g=new ut;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Qe(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gs;let m=this.type;this.render=function(E,v,y){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;this.type===vm&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gs);let R=r.getRenderTarget(),A=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Qt),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=m!==this.type;G&&v.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(W=>W.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,W=E.length;N<W;N++){let q=E[N],O=q.shadow;if(O===void 0){Fe("WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let Y=O.getFrameExtents();s.multiply(Y),n.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(n.x=Math.floor(h/Y.x),s.x=n.x*Y.x,O.mapSize.x=n.x),s.y>h&&(n.y=Math.floor(h/Y.y),s.y=n.y*Y.y,O.mapSize.y=n.y));let B=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=B,O.map===null||G===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Bn){if(q.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ut(s.x,s.y,{format:ds,type:Gt,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),O.map.texture.name=q.name+".shadowMap",O.map.depthTexture=new $i(s.x,s.y,Li),O.map.depthTexture.name=q.name+".shadowMapDepth",O.map.depthTexture.format=kr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Dt,O.map.depthTexture.magFilter=Dt}else q.isPointLight?(O.map=new Eo(s.x),O.map.depthTexture=new Fa(s.x,er)):(O.map=new Ut(s.x,s.y),O.map.depthTexture=new $i(s.x,s.y,er)),O.map.depthTexture.name=q.name+".shadowMap",O.map.depthTexture.format=kr,this.type===Gs?(O.map.depthTexture.compareFunction=B?md:fd,O.map.depthTexture.minFilter=Kt,O.map.depthTexture.magFilter=Kt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Dt,O.map.depthTexture.magFilter=Dt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let H=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();q.isPointLight!==!0&&O.updateMatrices(q,y);let J=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:y.layers;for(let pe=0;pe<H;pe++){let Te=O.getCamera(pe);if(q.isPointLight){let K=O.camera,te=O.matrix,oe=q.distance||K.far;oe!==K.far&&(K.far=oe,K.updateProjectionMatrix()),bo.setFromMatrixPosition(q.matrixWorld),K.position.copy(bo),Dd.copy(K.position),Dd.add(f1[pe]),K.up.copy(m1[pe]),K.lookAt(Dd),K.updateMatrixWorld(),te.makeTranslation(-bo.x,-bo.y,-bo.z),Eg.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Eg,K.coordinateSystem,K.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,pe),r.clear();else{pe===0&&(r.setRenderTarget(O.map),r.clear());let K=O.getViewport(pe);a.set(n.x*K.x,n.y*K.y,n.x*K.z,n.y*K.w),U.viewport(a)}i=O.getFrustum(pe),x(v,y,Te,q,J,this.type)}O.isPointLightShadow!==!0&&this.type===Bn&&_(O,y),O.needsUpdate=!1}m=this.type,f.needsUpdate=!1,r.setRenderTarget(R,A,L)};function _(E,v){let y=e.update(M);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ut(s.x,s.y,{format:ds,type:Gt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),p.uniforms.shadow_pass.value=E.map.depthTexture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(v,null,y,p,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(v,null,y,d,M,null)}function S(E,v,y,R){let A=null,L=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)A=L;else if(A=y.isPointLight===!0?l:o,r.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let U=A.uuid,G=v.uuid,N=c[U];N===void 0&&(N={},c[U]=N);let W=N[G];W===void 0&&(W=A.clone(),N[G]=W,v.addEventListener("dispose",b)),A=W}if(A.visible=v.visible,A.wireframe=v.wireframe,R===Bn?A.side=v.shadowSide!==null?v.shadowSide:v.side:A.side=v.shadowSide!==null?v.shadowSide:u[v.side],A.alphaMap=v.alphaMap,A.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,A.map=v.map,A.clipShadows=v.clipShadows,A.clippingPlanes=v.clippingPlanes,A.clipIntersection=v.clipIntersection,A.displacementMap=v.displacementMap,A.displacementScale=v.displacementScale,A.displacementBias=v.displacementBias,A.wireframeLinewidth=v.wireframeLinewidth,A.linewidth=v.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let U=r.properties.get(A);U.light=y}return A}function x(E,v,y,R,A,L){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Bn)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let G=e.update(E),N=E.material;if(Array.isArray(N)){let W=G.groups;for(let q=0,O=W.length;q<O;q++){let Y=W[q],B=N[Y.materialIndex];if(B&&B.visible){let H=S(E,B,R,L);E.onBeforeShadow(r,E,v,y,G,H,Y),r.renderBufferDirect(y,null,G,H,E,Y),E.onAfterShadow(r,E,v,y,G,H,Y)}}}else if(N.visible){let W=S(E,N,R,L);E.onBeforeShadow(r,E,v,y,G,W,null),r.renderBufferDirect(y,null,G,W,E,null),E.onAfterShadow(r,E,v,y,G,W,null)}}let U=E.children;for(let G=0,N=U.length;G<N;G++)x(U[G],v,y,R,A,L)}function b(E){E.target.removeEventListener("dispose",b);for(let v in c){let y=c[v],R=E.target.uuid;R in y&&(y[R].dispose(),delete y[R])}}}function v1(r,e){function t(){let D=!1,$=new yt,ne=null,de=new yt(0,0,0,0);return{setMask:function(Me){ne!==Me&&!D&&(r.colorMask(Me,Me,Me,Me),ne=Me)},setLocked:function(Me){D=Me},setClear:function(Me,ve,Ge,Se,De){De===!0&&(Me*=Se,ve*=Se,Ge*=Se),$.set(Me,ve,Ge,Se),de.equals($)===!1&&(r.clearColor(Me,ve,Ge,Se),de.copy($))},reset:function(){D=!1,ne=null,de.set(-1,0,0,0)}}}function i(){let D=!1,$=!1,ne=null,de=null,Me=null;return{setReversed:function(ve){if($!==ve){let Ge=e.get("EXT_clip_control");ve?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),$=ve;let Se=Me;Me=null,this.setClear(Se)}},getReversed:function(){return $},setTest:function(ve){ve?re(r.DEPTH_TEST):xe(r.DEPTH_TEST)},setMask:function(ve){ne!==ve&&!D&&(r.depthMask(ve),ne=ve)},setFunc:function(ve){if($&&(ve=Zm[ve]),de!==ve){switch(ve){case Vl:r.depthFunc(r.NEVER);break;case Wl:r.depthFunc(r.ALWAYS);break;case jl:r.depthFunc(r.LESS);break;case xn:r.depthFunc(r.LEQUAL);break;case Xl:r.depthFunc(r.EQUAL);break;case ql:r.depthFunc(r.GEQUAL);break;case Yl:r.depthFunc(r.GREATER);break;case Kl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=ve}},setLocked:function(ve){D=ve},setClear:function(ve){Me!==ve&&(Me=ve,$&&(ve=1-ve),r.clearDepth(ve))},reset:function(){D=!1,ne=null,de=null,Me=null,$=!1}}}function s(){let D=!1,$=null,ne=null,de=null,Me=null,ve=null,Ge=null,Se=null,De=null;return{setTest:function(Ke){D||(Ke?re(r.STENCIL_TEST):xe(r.STENCIL_TEST))},setMask:function(Ke){$!==Ke&&!D&&(r.stencilMask(Ke),$=Ke)},setFunc:function(Ke,ot,Pe){(ne!==Ke||de!==ot||Me!==Pe)&&(r.stencilFunc(Ke,ot,Pe),ne=Ke,de=ot,Me=Pe)},setOp:function(Ke,ot,Pe){(ve!==Ke||Ge!==ot||Se!==Pe)&&(r.stencilOp(Ke,ot,Pe),ve=Ke,Ge=ot,Se=Pe)},setLocked:function(Ke){D=Ke},setClear:function(Ke){De!==Ke&&(r.clearStencil(Ke),De=Ke)},reset:function(){D=!1,$=null,ne=null,de=null,Me=null,ve=null,Ge=null,Se=null,De=null}}}let n=new t,a=new i,o=new s,l={},c=new WeakMap,h={},u={},p={},d=new WeakMap,g=[],M=null,f=!1,m=null,_=null,S=null,x=null,b=null,E=null,v=null,y=new Ae(0,0,0),R=0,A=!1,L=null,U=null,G=null,N=null,W=null,q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Y=0,B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=Y>=2);let H=null,J={},pe=r.getParameter(r.SCISSOR_BOX),Te=r.getParameter(r.VIEWPORT),K=new yt().fromArray(pe),te=new yt().fromArray(Te);function oe(D,$,ne,de){let Me=new Uint8Array(4),ve=r.createTexture();r.bindTexture(D,ve),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ge=0;Ge<ne;Ge++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D($,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D($+Ge,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return ve}let _e={};_e[r.TEXTURE_2D]=oe(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(r.DEPTH_TEST),a.setFunc(xn),Ce(!1),Ie(td),re(r.CULL_FACE),ue(Qt);function re(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function xe(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Xe(D,$){return p[D]!==$?(r.bindFramebuffer(D,$),p[D]=$,D===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=$),D===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=$),!0):!1}function Ue(D,$){let ne=g,de=!1;if(D){ne=d.get($),ne===void 0&&(ne=[],d.set($,ne));let Me=D.textures;if(ne.length!==Me.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let ve=0,Ge=Me.length;ve<Ge;ve++)ne[ve]=r.COLOR_ATTACHMENT0+ve;ne.length=Me.length,de=!0}}else ne[0]!==r.BACK&&(ne[0]=r.BACK,de=!0);de&&r.drawBuffers(ne)}function je(D){return M!==D?(r.useProgram(D),M=D,!0):!1}let se={[Fi]:r.FUNC_ADD,[_m]:r.FUNC_SUBTRACT,[xm]:r.FUNC_REVERSE_SUBTRACT};se[ym]=r.MIN,se[Mm]=r.MAX;let le={[Hs]:r.ZERO,[Sm]:r.ONE,[bm]:r.SRC_COLOR,[sd]:r.SRC_ALPHA,[Am]:r.SRC_ALPHA_SATURATE,[oo]:r.DST_COLOR,[ao]:r.DST_ALPHA,[Tm]:r.ONE_MINUS_SRC_COLOR,[nd]:r.ONE_MINUS_SRC_ALPHA,[wm]:r.ONE_MINUS_DST_COLOR,[Em]:r.ONE_MINUS_DST_ALPHA,[Rm]:r.CONSTANT_COLOR,[Cm]:r.ONE_MINUS_CONSTANT_COLOR,[Pm]:r.CONSTANT_ALPHA,[Lm]:r.ONE_MINUS_CONSTANT_ALPHA};function ue(D,$,ne,de,Me,ve,Ge,Se,De,Ke){if(D===Qt){f===!0&&(xe(r.BLEND),f=!1);return}if(f===!1&&(re(r.BLEND),f=!0),D!==Uc){if(D!==m||Ke!==A){if((_!==Fi||b!==Fi)&&(r.blendEquation(r.FUNC_ADD),_=Fi,b=Fi),Ke)switch(D){case zn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case no:r.blendFunc(r.ONE,r.ONE);break;case id:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ye("WebGLState: Invalid blending: ",D);break}else switch(D){case zn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case no:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case id:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rd:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",D);break}S=null,x=null,E=null,v=null,y.set(0,0,0),R=0,m=D,A=Ke}return}Me=Me||$,ve=ve||ne,Ge=Ge||de,($!==_||Me!==b)&&(r.blendEquationSeparate(se[$],se[Me]),_=$,b=Me),(ne!==S||de!==x||ve!==E||Ge!==v)&&(r.blendFuncSeparate(le[ne],le[de],le[ve],le[Ge]),S=ne,x=de,E=ve,v=Ge),(Se.equals(y)===!1||De!==R)&&(r.blendColor(Se.r,Se.g,Se.b,De),y.copy(Se),R=De),m=D,A=!1}function Ee(D,$){D.side===Oi?xe(r.CULL_FACE):re(r.CULL_FACE);let ne=D.side===si;$&&(ne=!ne),Ce(ne),D.blending===zn&&D.transparent===!1?ue(Qt):ue(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),n.setMask(D.colorWrite);let de=D.stencilWrite;o.setTest(de),de&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ze(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):xe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(D){L!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),L=D)}function Ie(D){D!==mm?(re(r.CULL_FACE),D!==U&&(D===td?r.cullFace(r.BACK):D===gm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xe(r.CULL_FACE),U=D}function qe(D){D!==G&&(O&&r.lineWidth(D),G=D)}function Ze(D,$,ne){D?(re(r.POLYGON_OFFSET_FILL),(N!==$||W!==ne)&&(N=$,W=ne,a.getReversed()&&($=-$,ne=-ne),r.polygonOffset($,ne))):xe(r.POLYGON_OFFSET_FILL)}function rt(D){D?re(r.SCISSOR_TEST):xe(r.SCISSOR_TEST)}function at(D){D===void 0&&(D=r.TEXTURE0+q-1),H!==D&&(r.activeTexture(D),H=D)}function xt(D,$,ne){ne===void 0&&(H===null?ne=r.TEXTURE0+q-1:ne=H);let de=J[ne];de===void 0&&(de={type:void 0,texture:void 0},J[ne]=de),(de.type!==D||de.texture!==$)&&(H!==ne&&(r.activeTexture(ne),H=ne),r.bindTexture(D,$||_e[D]),de.type=D,de.texture=$)}function z(){let D=J[H];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ft(){try{r.compressedTexImage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function dt(){try{r.compressedTexImage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function pt(){try{r.texSubImage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function ce(){try{r.texSubImage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function St(){try{r.compressedTexSubImage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function Oe(){try{r.compressedTexSubImage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function He(){try{r.texStorage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function P(){try{r.texStorage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function T(){try{r.texImage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function j(){try{r.texImage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function ae(D){return u[D]!==void 0?u[D]:r.getParameter(D)}function Q(D,$){u[D]!==$&&(r.pixelStorei(D,$),u[D]=$)}function ge(D){K.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),K.copy(D))}function fe(D){te.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),te.copy(D))}function k(D,$){let ne=c.get($);ne===void 0&&(ne=new WeakMap,c.set($,ne));let de=ne.get(D);de===void 0&&(de=r.getUniformBlockIndex($,D.name),r.uniformBlockBinding($,de,de),ne.set(D,de))}function ie(D,$,ne){let de=c.get($).get(D);l[de]!==ne&&(r.bindBufferBase(r.UNIFORM_BUFFER,de,ne),l[de]=ne)}function ye(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},H=null,J={},p={},l={},d=new WeakMap,g=[],M=null,f=!1,m=null,_=null,S=null,x=null,b=null,E=null,v=null,y=new Ae(0,0,0),R=0,A=!1,L=null,U=null,G=null,N=null,W=null,K.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),n.reset(),a.reset(),o.reset()}return{buffers:{color:n,depth:a,stencil:o},enable:re,disable:xe,bindFramebuffer:Xe,drawBuffers:Ue,useProgram:je,setBlending:ue,setMaterial:Ee,setFlipSided:Ce,setCullFace:Ie,setLineWidth:qe,setPolygonOffset:Ze,setScissorTest:rt,activeTexture:at,bindTexture:xt,unbindTexture:z,compressedTexImage2D:ft,compressedTexImage3D:dt,texImage2D:T,texImage3D:j,pixelStorei:Q,getParameter:ae,updateUBOMapping:k,uniformBlockBinding:ie,texStorage2D:He,texStorage3D:P,texSubImage2D:pt,texSubImage3D:ce,compressedTexSubImage2D:St,compressedTexSubImage3D:Oe,scissor:ge,viewport:fe,reset:ye}}function _1(r,e,t,i,s,n,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap,u=new Set,p,d=new WeakMap,g=new Set,M=new FinalizationRegistry(P=>g.delete(P)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,T){return f?new OffscreenCanvas(P,T):Sn("canvas")}function _(P,T,j){let ae=1,Q=He(P);if((Q.width>j||Q.height>j)&&(ae=j/Math.max(Q.width,Q.height)),ae<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ge=Math.floor(ae*Q.width),fe=Math.floor(ae*Q.height);p===void 0&&(p=m(ge,fe));let k=T?m(ge,fe):p;return k.width=ge,k.height=fe,k.getContext("2d").drawImage(P,0,0,ge,fe),Fe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ge+"x"+fe+")."),k}else return"data"in P&&Fe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function S(P){return P.generateMipmaps}function x(P){r.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(P,T,j,ae,Q,ge=!1){if(P!==null){if(r[P]!==void 0)return r[P];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe;ae&&(fe=e.get("EXT_texture_norm16"),fe||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=T;if(T===r.RED&&(j===r.FLOAT&&(k=r.R32F),j===r.HALF_FLOAT&&(k=r.R16F),j===r.UNSIGNED_BYTE&&(k=r.R8),j===r.UNSIGNED_SHORT&&fe&&(k=fe.R16_EXT),j===r.SHORT&&fe&&(k=fe.R16_SNORM_EXT)),T===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(k=r.R8UI),j===r.UNSIGNED_SHORT&&(k=r.R16UI),j===r.UNSIGNED_INT&&(k=r.R32UI),j===r.BYTE&&(k=r.R8I),j===r.SHORT&&(k=r.R16I),j===r.INT&&(k=r.R32I)),T===r.RG&&(j===r.FLOAT&&(k=r.RG32F),j===r.HALF_FLOAT&&(k=r.RG16F),j===r.UNSIGNED_BYTE&&(k=r.RG8),j===r.UNSIGNED_SHORT&&fe&&(k=fe.RG16_EXT),j===r.SHORT&&fe&&(k=fe.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(k=r.RG8UI),j===r.UNSIGNED_SHORT&&(k=r.RG16UI),j===r.UNSIGNED_INT&&(k=r.RG32UI),j===r.BYTE&&(k=r.RG8I),j===r.SHORT&&(k=r.RG16I),j===r.INT&&(k=r.RG32I)),T===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(k=r.RGB8UI),j===r.UNSIGNED_SHORT&&(k=r.RGB16UI),j===r.UNSIGNED_INT&&(k=r.RGB32UI),j===r.BYTE&&(k=r.RGB8I),j===r.SHORT&&(k=r.RGB16I),j===r.INT&&(k=r.RGB32I)),T===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(k=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(k=r.RGBA16UI),j===r.UNSIGNED_INT&&(k=r.RGBA32UI),j===r.BYTE&&(k=r.RGBA8I),j===r.SHORT&&(k=r.RGBA16I),j===r.INT&&(k=r.RGBA32I)),T===r.RGB&&(j===r.UNSIGNED_SHORT&&fe&&(k=fe.RGB16_EXT),j===r.SHORT&&fe&&(k=fe.RGB16_SNORM_EXT),j===r.UNSIGNED_INT_5_9_9_9_REV&&(k=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(k=r.R11F_G11F_B10F)),T===r.RGBA){let ie=ge?Ea:et.getTransfer(Q);j===r.FLOAT&&(k=r.RGBA32F),j===r.HALF_FLOAT&&(k=r.RGBA16F),j===r.UNSIGNED_BYTE&&(k=ie===ht?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT&&fe&&(k=fe.RGBA16_EXT),j===r.SHORT&&fe&&(k=fe.RGBA16_SNORM_EXT),j===r.UNSIGNED_SHORT_4_4_4_4&&(k=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(k=r.RGB5_A1)}return(k===r.R16F||k===r.R32F||k===r.RG16F||k===r.RG32F||k===r.RGBA16F||k===r.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function v(P,T){let j;return P?T===null||T===er||T===Yr?j=r.DEPTH24_STENCIL8:T===Li?j=r.DEPTH32F_STENCIL8:T===Hn&&(j=r.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===er||T===Yr?j=r.DEPTH_COMPONENT24:T===Li?j=r.DEPTH_COMPONENT32F:T===Hn&&(j=r.DEPTH_COMPONENT16),j}function y(P,T){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==Dt&&P.minFilter!==Kt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function R(P){let T=new WeakRef(P);i.get(P).__ref=T,g.add(T),M.register(P,T,T)}function A(P){let T=i.get(P).__ref;T!==void 0&&(g.delete(T),M.unregister(T))}function L(P){G(P.target)}function U(P){N(P.target)}function G(P){P.removeEventListener("dispose",L),A(P),q(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&u.delete(P)}function N(P){P.removeEventListener("dispose",U),A(P),Y(P)}function W(){for(let P of g){let T=P.deref();T!==void 0&&(T.isRenderTarget===!0?N(T):G(T))}g.clear(),u.clear()}function q(P){let T=i.get(P);if(T.__webglInit===void 0)return;let j=P.source,ae=d.get(j);if(ae){let Q=ae[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&O(P),Object.keys(ae).length===0&&d.delete(j)}i.remove(P)}function O(P){let T=i.get(P);r.deleteTexture(T.__webglTexture);let j=P.source,ae=d.get(j);delete ae[T.__cacheKey],a.memory.textures--}function Y(P){let T=i.get(P);T.__depthDisposeCallback&&T.__depthDisposeCallback();let j=P.depthTexture;if(j&&j.renderTarget===P&&G(j),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let ge=0;ge<T.__webglFramebuffer[Q].length;ge++)r.deleteFramebuffer(T.__webglFramebuffer[Q][ge]);else r.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)r.deleteFramebuffer(T.__webglFramebuffer[Q]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ae=P.textures;for(let Q=0,ge=ae.length;Q<ge;Q++){let fe=i.get(ae[Q]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),a.memory.textures--),i.remove(ae[Q])}i.remove(P)}let B=0;function H(){B=0}function J(){return B}function pe(P){B=P}function Te(){let P=B;return P>=s.maxTextures&&Fe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,P}function K(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.mipmapsAutoUpdate),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function te(P,T){let j=i.get(P);if(P.isVideoTexture&&St(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&j.__version!==P.version){let ae=P.image;if(ae===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(j,P,T);return}}else P.isExternalTexture&&(j.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+T)}function oe(P,T){let j=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){Ee(j,P,T);return}else P.isExternalTexture&&(j.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+T)}function _e(P,T){let j=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){Ee(j,P,T);return}t.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+T)}function re(P,T){let j=i.get(P);if(P.version>0&&j.__version!==P.version){Ce(j,P,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+T)}let xe={[ci]:r.REPEAT,[Di]:r.CLAMP_TO_EDGE,[yn]:r.MIRRORED_REPEAT},Xe={[Dt]:r.NEAREST,[zc]:r.NEAREST_MIPMAP_NEAREST,[Ws]:r.NEAREST_MIPMAP_LINEAR,[Kt]:r.LINEAR,[Gn]:r.LINEAR_MIPMAP_NEAREST,[zi]:r.LINEAR_MIPMAP_LINEAR},Ue={[Hm]:r.NEVER,[gd]:r.ALWAYS,[Vm]:r.LESS,[fd]:r.LEQUAL,[Wm]:r.EQUAL,[md]:r.GEQUAL,[jm]:r.GREATER,[Xm]:r.NOTEQUAL};function je(P,T){if(T.type===Li&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Kt||T.magFilter===Gn||T.magFilter===Ws||T.magFilter===zi||T.minFilter===Kt||T.minFilter===Gn||T.minFilter===Ws||T.minFilter===zi)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,xe[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,xe[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,xe[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Xe[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Xe[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Ue[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Dt||T.minFilter!==Ws&&T.minFilter!==zi||T.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function se(P,T){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",L),R(T));let ae=T.source,Q=d.get(ae);Q===void 0&&(Q={},d.set(ae,Q));let ge=K(T);if(ge!==P.__cacheKey){Q[ge]===void 0&&(Q[ge]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,j=!0),Q[ge].usedTimes++;let fe=Q[P.__cacheKey];fe!==void 0&&(Q[P.__cacheKey].usedTimes--,fe.usedTimes===0&&O(T)),P.__cacheKey=ge,P.__webglTexture=Q[ge].texture}return j}function le(P,T,j){return Math.floor(Math.floor(P/j)/T)}function ue(P,T,j,ae){let Q=P.updateRanges;if(Q.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,j,ae,T.data);else{Q.sort((ye,D)=>ye.start-D.start);let ge=0;for(let ye=1;ye<Q.length;ye++){let D=Q[ge],$=Q[ye],ne=D.start+D.count,de=le($.start,T.width,4),Me=le(D.start,T.width,4);$.start<=ne+1&&de===Me&&le($.start+$.count-1,T.width,4)===de?D.count=Math.max(D.count,$.start+$.count-D.start):(++ge,Q[ge]=$)}Q.length=ge+1;let fe=t.getParameter(r.UNPACK_ROW_LENGTH),k=t.getParameter(r.UNPACK_SKIP_PIXELS),ie=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let ye=0,D=Q.length;ye<D;ye++){let $=Q[ye],ne=Math.floor($.start/4),de=Math.ceil($.count/4),Me=ne%T.width,ve=Math.floor(ne/T.width),Ge=de;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(r.UNPACK_SKIP_ROWS,ve),t.texSubImage2D(r.TEXTURE_2D,0,Me,ve,Ge,1,j,ae,T.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,fe),t.pixelStorei(r.UNPACK_SKIP_PIXELS,k),t.pixelStorei(r.UNPACK_SKIP_ROWS,ie)}}function Ee(P,T,j){let ae=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ae=r.TEXTURE_3D);let Q=se(P,T),ge=T.source;t.bindTexture(ae,P.__webglTexture,r.TEXTURE0+j);let fe=i.get(ge);if(ge.version!==fe.__version||Q===!0){if(t.activeTexture(r.TEXTURE0+j),!(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)){let Se=et.getPrimaries(et.workingColorSpace),De=T.colorSpace===Kr?null:et.getPrimaries(T.colorSpace),Ke=T.colorSpace===Kr||Se===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let k=_(T.image,!1,s.maxTextureSize);k=Oe(T,k);let ie=n.convert(T.format,T.colorSpace),ye=n.convert(T.type),D=E(T.internalFormat,ie,ye,T.normalized,T.colorSpace,T.isVideoTexture);je(ae,T);let $,ne=T.mipmaps,de=T.isVideoTexture!==!0,Me=fe.__version===void 0||Q===!0,ve=ge.dataReady,Ge=y(T,k);if(T.isDepthTexture)D=v(T.format===tr,T.type),Me&&(de?t.texStorage2D(r.TEXTURE_2D,1,D,k.width,k.height):t.texImage2D(r.TEXTURE_2D,0,D,k.width,k.height,0,ie,ye,null));else if(T.isDataTexture)if(ne.length>0){de&&Me&&t.texStorage2D(r.TEXTURE_2D,Ge,D,ne[0].width,ne[0].height);for(let Se=0,De=ne.length;Se<De;Se++)$=ne[Se],de?ve&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,$.width,$.height,ie,ye,$.data):t.texImage2D(r.TEXTURE_2D,Se,D,$.width,$.height,0,ie,ye,$.data);T.generateMipmaps=!1}else de?(Me&&t.texStorage2D(r.TEXTURE_2D,Ge,D,k.width,k.height),ve&&ue(T,k,ie,ye)):t.texImage2D(r.TEXTURE_2D,0,D,k.width,k.height,0,ie,ye,k.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){de&&Me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,D,ne[0].width,ne[0].height,k.depth);for(let Se=0,De=ne.length;Se<De;Se++)if($=ne[Se],T.format!==wi)if(ie!==null)if(de){if(ve)if(T.layerUpdates.size>0){let Ke=Ad($.width,$.height,T.format,T.type);for(let ot of T.layerUpdates){let Pe=$.data.subarray(ot*Ke/$.data.BYTES_PER_ELEMENT,(ot+1)*Ke/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,ot,$.width,$.height,1,ie,Pe)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,$.width,$.height,k.depth,ie,$.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Se,D,$.width,$.height,k.depth,0,$.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?ve&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,$.width,$.height,k.depth,ie,ye,$.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Se,D,$.width,$.height,k.depth,0,ie,ye,$.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{de&&Me&&t.texStorage2D(r.TEXTURE_2D,Ge,D,ne[0].width,ne[0].height);for(let Se=0,De=ne.length;Se<De;Se++)$=ne[Se],T.format!==wi?ie!==null?de?ve&&t.compressedTexSubImage2D(r.TEXTURE_2D,Se,0,0,$.width,$.height,ie,$.data):t.compressedTexImage2D(r.TEXTURE_2D,Se,D,$.width,$.height,0,$.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?ve&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,$.width,$.height,ie,ye,$.data):t.texImage2D(r.TEXTURE_2D,Se,D,$.width,$.height,0,ie,ye,$.data)}else if(T.isDataArrayTexture)if(de){if(Me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,D,k.width,k.height,k.depth),ve)if(T.layerUpdates.size>0){let Se=Ad(k.width,k.height,T.format,T.type);for(let De of T.layerUpdates){let Ke=k.data.subarray(De*Se/k.data.BYTES_PER_ELEMENT,(De+1)*Se/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,De,k.width,k.height,1,ie,ye,Ke)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,ie,ye,k.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,D,k.width,k.height,k.depth,0,ie,ye,k.data);else if(T.isData3DTexture)de?(Me&&t.texStorage3D(r.TEXTURE_3D,Ge,D,k.width,k.height,k.depth),ve&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,ie,ye,k.data)):t.texImage3D(r.TEXTURE_3D,0,D,k.width,k.height,k.depth,0,ie,ye,k.data);else if(T.isFramebufferTexture){if(Me)if(de)t.texStorage2D(r.TEXTURE_2D,Ge,D,k.width,k.height);else{let Se=k.width,De=k.height;for(let Ke=0;Ke<Ge;Ke++)t.texImage2D(r.TEXTURE_2D,Ke,D,Se,De,0,ie,ye,null),Se>>=1,De>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){let Se=r.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),k.parentNode!==Se){Se.appendChild(k),u.add(T),Se.onpaint=De=>{let Ke=De.changedElements;for(let ot of u)Ke.includes(ot.image)&&(ot.needsUpdate=!0)},Se.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,k);else{let De=r.RGBA,Ke=r.RGBA,ot=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,De,Ke,ot,k)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ne.length>0){if(de&&Me){let Se=He(ne[0]);t.texStorage2D(r.TEXTURE_2D,Ge,D,Se.width,Se.height)}for(let Se=0,De=ne.length;Se<De;Se++)$=ne[Se],de?ve&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,ie,ye,$):t.texImage2D(r.TEXTURE_2D,Se,D,ie,ye,$);T.generateMipmaps=!1}else if(de){if(Me){let Se=He(k);t.texStorage2D(r.TEXTURE_2D,Ge,D,Se.width,Se.height)}ve&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie,ye,k)}else t.texImage2D(r.TEXTURE_2D,0,D,ie,ye,k);S(T)&&T.mipmapsAutoUpdate===!0&&x(ae),fe.__version=ge.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ce(P,T,j){if(T.image.length!==6)return;let ae=se(P,T),Q=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+j);let ge=i.get(Q);if(Q.version!==ge.__version||ae===!0){t.activeTexture(r.TEXTURE0+j);let fe=et.getPrimaries(et.workingColorSpace),k=T.colorSpace===Kr?null:et.getPrimaries(T.colorSpace),ie=T.colorSpace===Kr||fe===k?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ye=T.isCompressedTexture||T.image[0].isCompressedTexture,D=T.image[0]&&T.image[0].isDataTexture,$=[];for(let Pe=0;Pe<6;Pe++)!ye&&!D?$[Pe]=_(T.image[Pe],!0,s.maxCubemapSize):$[Pe]=D?T.image[Pe].image:T.image[Pe],$[Pe]=Oe(T,$[Pe]);let ne=$[0],de=n.convert(T.format,T.colorSpace),Me=n.convert(T.type),ve=E(T.internalFormat,de,Me,T.normalized,T.colorSpace),Ge=T.isVideoTexture!==!0,Se=ge.__version===void 0||ae===!0,De=Q.dataReady,Ke=y(T,ne);je(r.TEXTURE_CUBE_MAP,T);let ot;if(T.isDepthTexture){if(ve=v(T.format===tr,T.type),Se)if(Ge)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,ve,ne.width,ne.height);else for(let Pe=0;Pe<6;Pe++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ve,ne.width,ne.height,0,de,Me,null)}else if(ye){Ge&&Se&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ke,ve,ne.width,ne.height);for(let Pe=0;Pe<6;Pe++){ot=$[Pe].mipmaps;for(let Ct=0;Ct<ot.length;Ct++){let Nt=ot[Ct];T.format!==wi?de!==null?Ge?De&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ct,0,0,Nt.width,Nt.height,de,Nt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ct,ve,Nt.width,Nt.height,0,Nt.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?De&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ct,0,0,Nt.width,Nt.height,de,Me,Nt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ct,ve,Nt.width,Nt.height,0,de,Me,Nt.data)}}}else{if(ot=T.mipmaps,Ge&&Se){ot.length>0&&Ke++;let Pe=He($[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ke,ve,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(D){Ge?De&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,$[Pe].width,$[Pe].height,de,Me,$[Pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ve,$[Pe].width,$[Pe].height,0,de,Me,$[Pe].data);for(let Ct=0;Ct<ot.length;Ct++){let Nt=ot[Ct].image[Pe].image;Ge?De&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ct+1,0,0,Nt.width,Nt.height,de,Me,Nt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ct+1,ve,Nt.width,Nt.height,0,de,Me,Nt.data)}}else{Ge?De&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,de,Me,$[Pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ve,de,Me,$[Pe]);for(let Ct=0;Ct<ot.length;Ct++){let Nt=ot[Ct];Ge?De&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ct+1,0,0,de,Me,Nt.image[Pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ct+1,ve,de,Me,Nt.image[Pe])}}}S(T)&&T.mipmapsAutoUpdate===!0&&x(r.TEXTURE_CUBE_MAP),ge.__version=Q.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ie(P,T,j,ae,Q,ge){let fe=n.convert(j.format,j.colorSpace),k=n.convert(j.type),ie=E(j.internalFormat,fe,k,j.normalized,j.colorSpace),ye=i.get(T),D=i.get(j);if(D.__renderTarget=T,!ye.__hasExternalTextures){let $=Math.max(1,T.width>>ge),ne=Math.max(1,T.height>>ge);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,ge,ie,$,ne,T.depth,0,fe,k,null):t.texImage2D(Q,ge,ie,$,ne,0,fe,k,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),ce(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,Q,D.__webglTexture,0,pt(T)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,Q,D.__webglTexture,ge),t.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(P,T,j){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){let ae=T.depthTexture,Q=ae&&ae.isDepthTexture?ae.type:null,ge=v(T.stencilBuffer,Q),fe=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ce(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pt(T),ge,T.width,T.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,pt(T),ge,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ge,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,P)}else{let ae=T.textures;for(let Q=0;Q<ae.length;Q++){let ge=ae[Q],fe=n.convert(ge.format,ge.colorSpace),k=n.convert(ge.type),ie=E(ge.internalFormat,fe,k,ge.normalized,ge.colorSpace);ce(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pt(T),ie,T.width,T.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,pt(T),ie,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ie,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ze(P,T,j){let ae=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(T.depthTexture);Q.__renderTarget=T;let ge=ae?T.depthTexture.image[0]:T.depthTexture.image;(!Q.__webglTexture||ge.width!==T.width||ge.height!==T.height)&&(ge.width=T.width,ge.height=T.height,T.depthTexture.needsUpdate=!0),ae?re(T.depthTexture,0):te(T.depthTexture,0);let fe=Q.__webglTexture,k=pt(T),ie=ae?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,ye=T.depthTexture.format===tr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===kr)ce(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,ie,fe,0,k):r.framebufferTexture2D(r.FRAMEBUFFER,ye,ie,fe,0);else if(T.depthTexture.format===tr)ce(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,ie,fe,0,k):r.framebufferTexture2D(r.FRAMEBUFFER,ye,ie,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(P){let T=i.get(P),j=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let ae=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ae){let Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ae.removeEventListener("dispose",Q)};ae.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=ae}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(j)for(let ae=0;ae<6;ae++)Ze(T.__webglFramebuffer[ae],P,ae);else P.texture.mipmaps.length>0?Ze(T.__webglFramebuffer[0],P,0):Ze(T.__webglFramebuffer,P,0);else if(j){T.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ae]),T.__webglDepthbuffer[ae]===void 0)T.__webglDepthbuffer[ae]=r.createRenderbuffer(),qe(T.__webglDepthbuffer[ae],P,!1);else{let Q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,ge),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,ge)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),qe(T.__webglDepthbuffer,P,!1);else{let ae=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,Q)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function at(P,T,j){let ae=i.get(P);T!==void 0&&Ie(ae.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&rt(P)}function xt(P){let T=P.texture,j=i.get(P),ae=i.get(T);P.addEventListener("dispose",U),R(P);let Q=P.textures,ge=P.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=T.version,a.memory.textures++),ge){j.__webglFramebuffer=[];for(let k=0;k<6;k++)if(T.mipmaps.length>0){j.__webglFramebuffer[k]=[];for(let ie=0;ie<T.mipmaps.length;ie++)j.__webglFramebuffer[k][ie]=r.createFramebuffer()}else j.__webglFramebuffer[k]=r.createFramebuffer()}else{if(T.mipmaps.length>0){j.__webglFramebuffer=[];for(let k=0;k<T.mipmaps.length;k++)j.__webglFramebuffer[k]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(fe)for(let k=0,ie=Q.length;k<ie;k++){let ye=i.get(Q[k]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&ce(P)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let k=0;k<Q.length;k++){let ie=Q[k];j.__webglColorRenderbuffer[k]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[k]);let ye=n.convert(ie.format,ie.colorSpace),D=n.convert(ie.type),$=E(ie.internalFormat,ye,D,ie.normalized,ie.colorSpace,P.isXRRenderTarget===!0),ne=pt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,$,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.RENDERBUFFER,j.__webglColorRenderbuffer[k])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),qe(j.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ge){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),je(r.TEXTURE_CUBE_MAP,T);for(let k=0;k<6;k++)if(T.mipmaps.length>0)for(let ie=0;ie<T.mipmaps.length;ie++)Ie(j.__webglFramebuffer[k][ie],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+k,ie);else Ie(j.__webglFramebuffer[k],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);S(T)?x(r.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let k=0,ie=Q.length;k<ie;k++){let ye=Q[k],D=i.get(ye),$=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&($=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture($,D.__webglTexture),je($,ye),Ie(j.__webglFramebuffer,P,ye,r.COLOR_ATTACHMENT0+k,$,0),S(ye)&&x($)}t.unbindTexture()}else{let k=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(k=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(k,ae.__webglTexture),je(k,T),T.mipmaps.length>0)for(let ie=0;ie<T.mipmaps.length;ie++)Ie(j.__webglFramebuffer[ie],P,T,r.COLOR_ATTACHMENT0,k,ie);else Ie(j.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,k,0);S(T)?x(k):T.mipmaps.length>0&&r.texParameteri(k,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&rt(P)}function z(P){let T=P.textures;for(let j=0,ae=T.length;j<ae;j++){let Q=T[j];if(S(Q)&&Q.mipmapsAutoUpdate===!0){let ge=b(P),fe=i.get(Q).__webglTexture;t.bindTexture(ge,fe),x(ge),t.unbindTexture()}}}let ft=[];function dt(P){if(P.samples>0){if(ce(P)===!1){let T=P.textures,j=P.width,ae=P.height,Q=r.COLOR_BUFFER_BIT,ge=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=i.get(P),k=T.length>1;if(k)for(let ie=0;ie<T.length;ie++)t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ie=0;ie<T.length;ie++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),k){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,fe.__webglColorRenderbuffer[ie]);let ye=i.get(T[ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ye,0)}r.blitFramebuffer(0,0,j,ae,0,0,j,ae,Q,r.NEAREST),l===!0&&(ft.length=0,ft.push(r.COLOR_ATTACHMENT0+ie),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&ft.push(ge),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),k)for(let ie=0;ie<T.length;ie++){t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,fe.__webglColorRenderbuffer[ie]);let ye=i.get(T[ie]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,ye,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function pt(P){return Math.min(s.maxSamples,P.samples)}function ce(P){let T=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function St(P){let T=a.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function Oe(P,T){let j=P.colorSpace,ae=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==gi&&j!==Kr&&(et.getTransfer(j)===ht?(ae!==wi||Q!==hi)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",j)),T}function He(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Te,this.resetTextureUnits=H,this.getTextureUnits=J,this.setTextureUnits=pe,this.setTexture2D=te,this.setTexture2DArray=oe,this.setTexture3D=_e,this.setTextureCube=re,this.rebindTextures=at,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=ce,this.dispose=W}function x1(r,e){function t(i,s=Kr){let n,a=et.getTransfer(s);if(i===hi)return r.UNSIGNED_BYTE;if(i===Gc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Hc)return r.UNSIGNED_SHORT_5_5_5_1;if(i===cd)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===hd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===od)return r.BYTE;if(i===ld)return r.SHORT;if(i===Hn)return r.UNSIGNED_SHORT;if(i===kc)return r.INT;if(i===er)return r.UNSIGNED_INT;if(i===Li)return r.FLOAT;if(i===Gt)return r.HALF_FLOAT;if(i===ud)return r.ALPHA;if(i===dd)return r.RGB;if(i===wi)return r.RGBA;if(i===kr)return r.DEPTH_COMPONENT;if(i===tr)return r.DEPTH_STENCIL;if(i===Vc)return r.RED;if(i===Wc)return r.RED_INTEGER;if(i===ds)return r.RG;if(i===jc)return r.RG_INTEGER;if(i===Xc)return r.RGBA_INTEGER;if(i===mo||i===go||i===vo||i===_o)if(a===ht)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===mo)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===go)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vo)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_o)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===mo)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===go)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vo)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_o)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qc||i===Yc||i===Kc||i===Zc)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===qc)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yc)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kc)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zc)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jc||i===$c||i===Qc||i===eh||i===th||i===xo||i===ih)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(i===Jc||i===$c)return a===ht?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===Qc)return a===ht?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(i===eh)return n.COMPRESSED_R11_EAC;if(i===th)return n.COMPRESSED_SIGNED_R11_EAC;if(i===xo)return n.COMPRESSED_RG11_EAC;if(i===ih)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rh||i===sh||i===nh||i===ah||i===oh||i===lh||i===ch||i===hh||i===uh||i===dh||i===ph||i===fh||i===mh||i===gh)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(i===rh)return a===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sh)return a===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nh)return a===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ah)return a===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oh)return a===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lh)return a===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ch)return a===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hh)return a===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uh)return a===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dh)return a===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ph)return a===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fh)return a===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mh)return a===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gh)return a===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vh||i===_h||i===xh)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(i===vh)return a===ht?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_h)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xh)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yh||i===Mh||i===yo||i===Sh)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(i===yh)return n.COMPRESSED_RED_RGTC1_EXT;if(i===Mh)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yo)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sh)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yr?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}var y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ba(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ot({vertexShader:y1,fragmentShader:M1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new xi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hd=class extends Ki{constructor(e,t){super();let i=this,s=null,n=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,d=null,g=null,M=typeof XRWebGLBinding<"u",f=new Gd,m={},_=t.getContextAttributes(),S=null,x=null,b=[],E=[],v=new ee,y=null,R=null,A=new Xt;A.viewport=new yt;let L=new Xt;L.viewport=new yt;let U=[A,L],G=new Lc,N=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=b[K];return te===void 0&&(te=new wn,b[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=b[K];return te===void 0&&(te=new wn,b[K]=te),te.getGripSpace()},this.getHand=function(K){let te=b[K];return te===void 0&&(te=new wn,b[K]=te),te.getHandSpace()};function q(K){let te=E.indexOf(K.inputSource);if(te===-1)return;let oe=b[te];oe!==void 0&&(oe.update(K.inputSource,K.frame,c||a),oe.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",Y);for(let K=0;K<b.length;K++){let te=E[K];te!==null&&(E[K]=null,b[K].disconnect(te))}N=null,W=null,f.reset();for(let K in m)delete m[K];if(e.setRenderTarget(S),d=null,p=null,u=null,s=null,x=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(v.width,v.height,!1),R!==null){let K=R.camera;K.fov=R.fov,K.zoom=R.zoom,K.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){n=K,i.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",O),s.addEventListener("inputsourceschange",Y),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(v),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,oe=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=_.stencil?tr:kr,oe=_.stencil?Yr:er);let re={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:n};u=this.getBinding(),p=u.createProjectionLayer(re),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new Ut(p.textureWidth,p.textureHeight,{format:wi,type:hi,depthTexture:new $i(p.textureWidth,p.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let te={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:n};d=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ut(d.framebufferWidth,d.framebufferHeight,{format:wi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Te.setContext(s),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function Y(K){for(let te=0;te<K.removed.length;te++){let oe=K.removed[te],_e=E.indexOf(oe);_e>=0&&(E[_e]=null,b[_e].disconnect(oe))}for(let te=0;te<K.added.length;te++){let oe=K.added[te],_e=E.indexOf(oe);if(_e===-1){for(let xe=0;xe<b.length;xe++)if(xe>=E.length){E.push(oe),_e=xe;break}else if(E[xe]===null){E[xe]=oe,_e=xe;break}if(_e===-1)break}let re=b[_e];re&&re.connect(oe)}}function B(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let te=K.near,oe=K.far;f.texture!==null&&(f.depthNear>0&&(te=f.depthNear),f.depthFar>0&&(oe=f.depthFar)),G.near=L.near=A.near=te,G.far=L.far=A.far=oe,(N!==G.near||W!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),N=G.near,W=G.far),G.layers.mask=K.layers.mask|6,A.layers.mask=G.layers.mask&-5,L.layers.mask=G.layers.mask&-3;let _e=K.parent,re=G.cameras;B(G,_e);for(let xe=0;xe<re.length;xe++)B(re[xe],_e);G.projectionMatrix.copy(A.projectionMatrix),G.projectionMatrixInverse.copy(A.projectionMatrixInverse),R===null&&K.isPerspectiveCamera&&(R={camera:K,fov:K.fov,zoom:K.zoom}),H(K,G,_e)};function H(K,te,oe){oe===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(oe.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ds*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(K){l=K,p!==null&&(p.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(G)},this.getCameraTexture=function(K){return m[K]};let J=null;function pe(K,te){if(h=te.getViewerPose(c||a),g=te,h!==null){let oe=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let _e=!1;oe.length!==G.cameras.length&&(G.cameras.length=0,_e=!0);for(let xe=0;xe<oe.length;xe++){let Xe=oe[xe],Ue=null;if(d!==null)Ue=d.getViewport(Xe);else{let se=u.getViewSubImage(p,Xe);Ue=se.viewport,xe===0&&(e.setRenderTargetTextures(x,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(x))}let je=U[xe];je===void 0&&(je=new Xt,je.layers.enable(xe),je.viewport=new yt,U[xe]=je),je.matrix.fromArray(Xe.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Xe.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),xe===0&&(G.matrix.copy(je.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),_e===!0&&G.cameras.push(je)}let re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=i.getBinding();let xe=u.getDepthInformation(oe[0]);xe&&xe.isValid&&xe.texture&&f.init(xe,s.renderState)}if(re&&re.includes("camera-access")&&M){e.state.unbindTexture(),u=i.getBinding();for(let xe=0;xe<oe.length;xe++){let Xe=oe[xe].camera;if(Xe){let Ue=m[Xe];Ue||(Ue=new Ba,m[Xe]=Ue);let je=u.getCameraImage(Xe);Ue.sourceTexture=je}}}}for(let oe=0;oe<b.length;oe++){let _e=E[oe],re=b[oe];_e!==null&&re!==void 0&&re.update(_e,te,c||a)}J&&J(K,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let Te=new wg;Te.setAnimationLoop(pe),this.setAnimationLoop=function(K){J=K},this.dispose=function(){}}},S1=new Be,Og=new Je;Og.set(-1,0,0,0,1,0,0,0,1);function b1(r,e){function t(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function i(f,m){m.color.getRGB(f.fogColor.value,Td(r)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,_,S,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?n(f,m):m.isMeshLambertMaterial?(n(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(n(f,m),u(f,m)):m.isMeshPhongMaterial?(n(f,m),h(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(n(f,m),p(f,m),m.isMeshPhysicalMaterial&&d(f,m,x)):m.isMeshMatcapMaterial?(n(f,m),g(f,m)):m.isMeshDepthMaterial?n(f,m):m.isMeshDistanceMaterial?(n(f,m),M(f,m)):m.isMeshNormalMaterial?n(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,_,S):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,t(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===si&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,t(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===si&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,t(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,t(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let _=e.get(m),S=_.envMap,x=_.envMapRotation;S&&(f.envMap.value=S,f.envMapRotation.value.setFromMatrix4(S1.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Og),f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,_,S){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*_,f.scale.value=S*.5,m.map&&(f.map.value=m.map,t(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function p(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function d(f,m,_){f.ior.value=m.ior,m.diffuseRoughness>0&&(f.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===si&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.retroreflectivity>0&&(f.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function M(f,m){let _=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function T1(r,e,t,i){let s={},n={};function a(_,S){let x=S.program;i.uniformBlockBinding(_,x,s[_.id])}function o(_,S){let x=s[_.id];x===void 0&&(g(_),x=l(_),s[_.id]=x,_.addEventListener("dispose",f));let b=S.program;i.updateUBOMapping(_,b);let E=e.render.frame;n[_.id]!==E&&(c(_),n[_.id]=E)}function l(_){let S=r.createBuffer(),x=_.__size,b=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,x,b),r.bindBuffer(r.UNIFORM_BUFFER,null),S}function c(_){let S=s[_.id],x=_.uniforms,b=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let E=0,v=x.length;E<v;E++){let y=x[E];if(Array.isArray(y))for(let R=0,A=y.length;R<A;R++)h(y[R],E,R,b);else h(y,E,0,b)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(_,S,x,b){if(p(_,S,x,b)===!0){let E=_.__offset,v=_.value;if(Array.isArray(v)){let y=0;for(let R=0;R<v.length;R++){let A=v[R],L=M(A,!0);u(A,_.__data,y),y+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,_.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,_.__data)}}function u(_,S,x){typeof _=="number"||typeof _=="boolean"?S[x]=_:_.isMatrix3?(S[x]=_.elements[0],S[x+1]=_.elements[1],S[x+2]=_.elements[2],S[x+3]=0,S[x+4]=_.elements[3],S[x+5]=_.elements[4],S[x+6]=_.elements[5],S[x+7]=0,S[x+8]=_.elements[6],S[x+9]=_.elements[7],S[x+10]=_.elements[8],S[x+11]=0):ArrayBuffer.isView(_)?S.set(_.subarray(0,S.length-x),x):_.toArray(S,x)}function p(_,S,x,b){let E=_.value,v=S+"_"+x;if(Array.isArray(E)){b[v]===void 0&&(b[v]=[]);let y=b[v],R=!1;for(let A=0;A<E.length;A++)d(E[A],y,A)===!0&&(R=!0);return R}return d(E,b,v)}function d(_,S,x){if(S[x]===void 0)return typeof _=="number"||typeof _=="boolean"?S[x]=_:ArrayBuffer.isView(_)?S[x]=_.slice():S[x]=_.clone(),!0;{let b=S[x];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return S[x]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function g(_){let S=_.uniforms,x=0,b=16;for(let v=0,y=S.length;v<y;v++){let R=Array.isArray(S[v])?S[v]:[S[v]];for(let A=0,L=R.length;A<L;A++){let U=R[A],G=Array.isArray(U.value)?U.value:[U.value],N=Array.isArray(S[v])||Array.isArray(U.value),W=x;for(let O=0,Y=G.length;O<Y;O++){let B=G[O],H=M(B,N),J=x%b,pe=J%H.boundary,Te=J+pe;x+=pe,Te!==0&&b-Te<H.storage&&(x+=b-Te),O===0&&(W=x),x+=H.storage}let q=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new q((x-W)/Float32Array.BYTES_PER_ELEMENT),U.__offset=W}}let E=x%b;return E>0&&(x+=b-E),_.__size=x,_.__cache={},this}function M(_,S){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=16,x.storage=48):_.isMatrix4?(x.boundary=16,x.storage=64):_.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(x.boundary=16,x.storage=_.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",_),S===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function f(_){let S=_.target;S.removeEventListener("dispose",f),r.deleteBuffer(s[S.id]),delete s[S.id],delete n[S.id]}function m(){for(let _ in s)r.deleteBuffer(s[_]);s={},n={}}return{bind:a,update:o,dispose:m}}var E1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_r=null;function w1(){return _r===null&&(_r=new ur(E1,16,16,ds,Gt),_r.name="DFG_LUT",_r.minFilter=Kt,_r.magFilter=Kt,_r.wrapS=Di,_r.wrapT=Di,_r.generateMipmaps=!1,_r.needsUpdate=!0),_r}var Ah=class{constructor(e={}){let{canvas:t=qm(),context:i=null,depth:s=!0,stencil:n=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1,outputBufferType:d=hi}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let M=d,f=new Set([Xc,jc,Wc]),m=new Set([hi,er,Hn,Yr,Gc,Hc]),_=new Uint32Array(4),S=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},b=null,E=null,v=[],y=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,U=null,G=null,N=null,W=null;this._outputColorSpace=Tt;let q=0,O=0,Y=null,B=-1,H=null,J=new yt,pe=new yt,Te=null,K=new Ae(0),te=0,oe=t.width,_e=t.height,re=1,xe=null,Xe=null,Ue=new yt(0,0,oe,_e),je=new yt(0,0,oe,_e),se=!1,le=new Hr,ue=new Ia,Ee=!1,Ce=!1,Ie=new Be,qe=new C,Ze=new yt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function xt(){return Y===null?re:1}let z=i;function ft(w,F){return t.getContext(w,F)}let dt,pt,ce,St,Oe,He,P,T,j,ae,Q,ge,fe,k,ie,ye,D,$,ne,de,Me,ve,Ge;try{let w={alpha:!0,depth:s,stencil:n,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),z===null){let F="webgl2";if(z=ft(F,w),z===null)throw ft(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Se()}catch(w){throw t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Ye("WebGLRenderer: "+w.message),w}function Se(){dt=new FM(z),dt.init(),Me=new x1(z,dt),pt=new wM(z,dt,e,Me),ce=new v1(z,dt),pt.reversedDepthBuffer&&p&&ce.buffers.depth.setReversed(!0),G=z.createFramebuffer(),N=z.createFramebuffer(),W=z.createFramebuffer(),St=new kM(z),Oe=new r1,He=new _1(z,dt,ce,Oe,pt,Me,St),P=new OM(A),T=new H_(z),ve=new TM(z,T),j=new BM(z,T,St,ve),ae=new HM(z,j,T,ve,St),$=new GM(z,pt,He),ie=new AM(Oe),Q=new i1(A,P,dt,pt,ve,ie),ge=new b1(A,Oe),fe=new n1,k=new u1(dt),D=new bM(A,P,ce,ae,g,l),ye=new g1(A,ae,pt),Ge=new T1(z,St,pt,ce),ne=new EM(z,dt,St),de=new zM(z,dt,St),St.programs=Q.programs,A.capabilities=pt,A.extensions=dt,A.properties=Oe,A.renderLists=fe,A.shadowMap=ye,A.state=ce,A.info=St}M!==hi&&(R=new WM(M,t.width,t.height,o,s,n));let De=new Hd(A,z);this.xr=De,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=dt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=dt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(w){w!==void 0&&(re=w,this.setSize(oe,_e,!1))},this.getSize=function(w){return w.set(oe,_e)},this.setSize=function(w,F,Z=!0){if(De.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=w,_e=F,t.width=Math.floor(w*re),t.height=Math.floor(F*re),Z===!0&&(t.style.width=w+"px",t.style.height=F+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(oe*re,_e*re).floor()},this.setDrawingBufferSize=function(w,F,Z){oe=w,_e=F,re=Z,t.width=Math.floor(w*Z),t.height=Math.floor(F*Z),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(M===hi){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(J)},this.getViewport=function(w){return w.copy(Ue)},this.setViewport=function(w,F,Z,X){w.isVector4?Ue.set(w.x,w.y,w.z,w.w):Ue.set(w,F,Z,X),ce.viewport(J.copy(Ue).multiplyScalar(xt()).round())},this.getScissor=function(w){return w.copy(je)},this.setScissor=function(w,F,Z,X){w.isVector4?je.set(w.x,w.y,w.z,w.w):je.set(w,F,Z,X),ce.scissor(pe.copy(je).multiplyScalar(xt()).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(w){ce.setScissorTest(se=w)},this.setOpaqueSort=function(w){xe=w},this.setTransparentSort=function(w){Xe=w},this.getClearColor=function(w){return w.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,Z=!0){let X=0;if(w){let V=!1;if(Y!==null){let he=Y.texture.format;V=f.has(he)}if(V){let he=Y.texture.type,we=m.has(he),be=D.getClearColor(),Le=D.getClearAlpha(),Ve=be.r,nt=be.g,lt=be.b;we?(_[0]=Ve,_[1]=nt,_[2]=lt,_[3]=Le,z.clearBufferuiv(z.COLOR,0,_)):(S[0]=Ve,S[1]=nt,S[2]=lt,S[3]=Le,z.clearBufferiv(z.COLOR,0,S))}else X|=z.COLOR_BUFFER_BIT}F&&(X|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),U=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),D.dispose(),fe.dispose(),k.dispose(),He.dispose(),Oe.dispose(),P.dispose(),ae.dispose(),j.dispose(),ve.dispose(),Ge.dispose(),Q.dispose(),De.dispose(),De.removeEventListener("sessionstart",of),De.removeEventListener("sessionend",lf),Ms.stop()};function Ke(w){w.preventDefault(),wa("WebGLRenderer: Context Lost."),L=!0}function ot(){wa("WebGLRenderer: Context Restored."),L=!1;let w=St.autoReset,F=ye.enabled,Z=ye.autoUpdate,X=ye.needsUpdate,V=ye.type;Se(),St.autoReset=w,ye.enabled=F,ye.autoUpdate=Z,ye.needsUpdate=X,ye.type=V}function Pe(w){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ct(w){let F=w.target;F.removeEventListener("dispose",Ct),Nt(F)}function Nt(w){tv(w),Oe.remove(w)}function tv(w){let F=Oe.get(w).programs;F!==void 0&&(F.forEach(function(Z){Q.releaseProgram(Z)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,Z,X,V,he){F===null&&(F=rt);let we=V.isMesh&&V.matrixWorld.determinantAffine()<0,be=sv(w,F,Z,X,V);ce.setMaterial(X,we);let Le=Z.index,Ve=1;if(X.wireframe===!0){if(Le=j.getWireframeAttribute(Z),Le===void 0)return;Ve=2}let nt=Z.drawRange,lt=Z.attributes.position,Ne=nt.start*Ve,mt=(nt.start+nt.count)*Ve;he!==null&&(Ne=Math.max(Ne,he.start*Ve),mt=Math.min(mt,(he.start+he.count)*Ve)),Le!==null?(Ne=Math.max(Ne,0),mt=Math.min(mt,Le.count)):lt!=null&&(Ne=Math.max(Ne,0),mt=Math.min(mt,lt.count));let Wt=mt-Ne;if(Wt<0||Wt===1/0)return;ve.setup(V,X,be,Z,Le);let bt,At=ne;if(Le!==null&&(bt=T.get(Le),At=de,At.setIndex(bt)),V.isMesh)X.wireframe===!0?(ce.setLineWidth(X.wireframeLinewidth*xt()),At.setMode(z.LINES)):At.setMode(z.TRIANGLES);else if(V.isLine){let kt=X.linewidth;kt===void 0&&(kt=1),ce.setLineWidth(kt*xt()),V.isLineSegments?At.setMode(z.LINES):V.isLineLoop?At.setMode(z.LINE_LOOP):At.setMode(z.LINE_STRIP)}else V.isPoints?At.setMode(z.POINTS):V.isSprite&&At.setMode(z.TRIANGLES);if(V.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))At.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let kt=V._multiDrawStarts,ze=V._multiDrawCounts,pi=V._multiDrawCount,Ss=Le?T.get(Le).bytesPerElement:1,bs=Oe.get(X).currentProgram.getUniforms();for(let ai=0;ai<pi;ai++)bs.setValue(z,"_gl_DrawID",ai),At.render(kt[ai]/Ss,ze[ai])}else if(V.isInstancedMesh)At.renderInstances(Ne,Wt,V.count);else if(Z.isInstancedBufferGeometry){let kt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ze=Math.min(Z.instanceCount,kt);At.renderInstances(Ne,Wt,ze)}else At.render(Ne,Wt)};function af(w,F,Z,X){U!==null&&w.isNodeMaterial&&U.setObject(X,w),Ee===!0&&ie.setState(w,Z,!1),w.transparent===!0&&w.side===Oi&&w.forceSinglePass===!1?(w.side=si,w.needsUpdate=!0,oa(w,F,X),w.side=vr,w.needsUpdate=!0,oa(w,F,X),w.side=Oi):oa(w,F,X)}this.compile=function(w,F,Z=null){Z===null&&(Z=w),U!==null&&U.renderStart(w,F,Z),E=k.get(Z),E.init(F),y.push(E),Z.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),w!==Z&&w.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),Ce=this.localClippingEnabled,Ee=ie.init(this.clippingPlanes,Ce),Ee===!0&&ie.setGlobalState(this.clippingPlanes,F),U!==null&&ye.render(E.state.shadowsArray,Z,F);let X=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let he=V.material;if(he)if(Array.isArray(he))for(let we=0;we<he.length;we++){let be=he[we];af(be,Z,F,V),X.add(be)}else af(he,Z,F,V),X.add(he)}),E=y.pop(),U!==null&&U.renderEnd(),X},this.compileAsync=function(w,F,Z=null){let X=this.compile(w,F,Z);return new Promise(V=>{function he(){if(X.forEach(function(we){let be=Oe.get(we).currentProgram;(be===void 0||be.isReady())&&X.delete(we)}),X.size===0){V(w);return}setTimeout(he,10)}dt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let hu=null;function iv(w){hu&&hu(w)}function of(){Ms.stop()}function lf(){Ms.start()}let Ms=new wg;Ms.setAnimationLoop(iv),typeof self<"u"&&Ms.setContext(self),this.setAnimationLoop=function(w){hu=w,De.setAnimationLoop(w),w===null?Ms.stop():Ms.start()},De.addEventListener("sessionstart",of),De.addEventListener("sessionend",lf),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(w,F);let Z=De.enabled===!0&&De.isPresenting===!0,X=R!==null&&(Y===null||Z)&&R.begin(A,Y);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(F),F=De.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,F,Y),E=k.get(w,y.length),E.init(F),E.state.textureUnits=He.getTextureUnits(),y.push(E),Ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?ue.setFromArrayCamera(F):le.setFromProjectionMatrix(Ie,Ui,F.reversedDepth),Ce=this.localClippingEnabled,Ee=ie.init(this.clippingPlanes,Ce),b=fe.get(w,v.length),b.init(),v.push(b),this.info.render.frame++,De.enabled===!0&&De.isPresenting===!0){let he=A.xr.getDepthSensingMesh();he!==null&&uu(he,F,-1/0,A.sortObjects)}uu(w,F,0,A.sortObjects),b.finish(),U!==null&&U.updateLights(E.state.lightsArray),A.sortObjects===!0&&b.sort(xe,Xe),at=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,at&&D.addToRenderList(b,w),this.info.autoReset===!0&&this.info.reset(),Ee===!0&&ie.beginShadows();let V=E.state.shadowsArray;if(ye.render(V,w,F),Ee===!0&&ie.endShadows(),(X&&R.hasRenderPass())===!1){let he=b.opaque,we=b.transmissive;if(E.setupLights(),F.isArrayCamera){let be=F.cameras;if(we.length>0)for(let Le=0,Ve=be.length;Le<Ve;Le++){let nt=be[Le];hf(he,we,w,nt)}at&&D.render(w);for(let Le=0,Ve=be.length;Le<Ve;Le++){let nt=be[Le];cf(b,w,nt,nt.viewport)}}else we.length>0&&hf(he,we,w,F),at&&D.render(w),cf(b,w,F)}Y!==null&&O===0&&(He.updateMultisampleRenderTarget(Y),He.updateRenderTargetMipmap(Y)),X&&R.end(A),w.isScene===!0&&w.onAfterRender(A,w,F),ve.resetDefaultState(),B=-1,H=null,y.pop(),y.length>0?(E=y[y.length-1],He.setTextureUnits(E.state.textureUnits),Ee===!0&&ie.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,v.pop(),v.length>0?b=v[v.length-1]:b=null,U!==null&&U.renderEnd()};function uu(w,F,Z,X){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let he=F.isArrayCamera?ue:le;if(!w.frustumCulled||w.intersectsFrustum(he)){X&&Ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ie);let we=ae.update(w),be=w.material;be.visible&&b.push(w,we,be,Z,Ze.z,null,F)}}else if(w.isMesh||w.isLine||w.isPoints){let he=F.isArrayCamera?ue:le;if(!w.frustumCulled||w.intersectsFrustum(he)){let we=ae.update(w),be=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ze.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ze.copy(we.boundingSphere.center)),Ze.applyMatrix4(w.matrixWorld).applyMatrix4(Ie)),Array.isArray(be)){let Le=we.groups;for(let Ve=0,nt=Le.length;Ve<nt;Ve++){let lt=Le[Ve],Ne=be[lt.materialIndex];Ne&&Ne.visible&&b.push(w,we,Ne,Z,Ze.z,lt,F)}}else be.visible&&b.push(w,we,be,Z,Ze.z,null,F)}}}let V=w.children;for(let he=0,we=V.length;he<we;he++)uu(V[he],F,Z,X)}function cf(w,F,Z,X){let{opaque:V,transmissive:he,transparent:we}=w;E.setupLightsView(Z),Ee===!0&&ie.setGlobalState(A.clippingPlanes,Z),X&&ce.viewport(J.copy(X)),V.length>0&&al(V,F,Z),he.length>0&&al(he,F,Z),we.length>0&&al(we,F,Z),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function hf(w,F,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){let lt=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new Ut(1,1,{generateMipmaps:!0,type:lt?Gt:hi,minFilter:zi,samples:Math.max(4,pt.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}let V=E.state.transmissionRenderTarget[X.id],he=X.viewport||J;V.setSize(he.z*A.transmissionResolutionScale,he.w*A.transmissionResolutionScale);let we=A.getRenderTarget(),be=A.getActiveCubeFace(),Le=A.getActiveMipmapLevel();A.setRenderTarget(V),A.getClearColor(K),te=A.getClearAlpha(),te<1&&A.setClearColor(16777215,.5),A.clear(),at&&D.render(Z);let Ve=A.toneMapping;A.toneMapping=Bi;let nt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),Ee===!0&&ie.setGlobalState(A.clippingPlanes,X),al(w,Z,X),He.updateMultisampleRenderTarget(V),He.updateRenderTargetMipmap(V),dt.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Ne=0,mt=F.length;Ne<mt;Ne++){let Wt=F[Ne],{object:bt,geometry:At,material:kt,group:ze}=Wt;if(kt.side===Oi&&bt.layers.test(X.layers)){let pi=kt.side;kt.side=si,kt.needsUpdate=!0,uf(bt,Z,X,At,kt,ze),kt.side=pi,kt.needsUpdate=!0,lt=!0}}lt===!0&&(He.updateMultisampleRenderTarget(V),He.updateRenderTargetMipmap(V))}A.setRenderTarget(we,be,Le),A.setClearColor(K,te),nt!==void 0&&(X.viewport=nt),A.toneMapping=Ve}function al(w,F,Z){let X=F.isScene===!0?F.overrideMaterial:null;for(let V=0,he=w.length;V<he;V++){let we=w[V],{object:be,geometry:Le,group:Ve}=we,nt=we.material;nt.allowOverride===!0&&X!==null&&(nt=X),be.layers.test(Z.layers)&&uf(be,F,Z,Le,nt,Ve)}}function uf(w,F,Z,X,V,he){U!==null&&V.isNodeMaterial&&U.setObject(w,V),w.onBeforeRender(A,F,Z,X,V,he),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(A,F,Z,X,w,he),V.transparent===!0&&V.side===Oi&&V.forceSinglePass===!1?(V.side=si,V.needsUpdate=!0,A.renderBufferDirect(Z,F,X,V,w,he),V.side=vr,V.needsUpdate=!0,A.renderBufferDirect(Z,F,X,V,w,he),V.side=Oi):A.renderBufferDirect(Z,F,X,V,w,he),w.onAfterRender(A,F,Z,X,V,he)}function df(w){let F=0;for(let Z of w)Z.texture!==null&&F++;return F}function oa(w,F,Z){F.isScene!==!0&&(F=rt);let X=Oe.get(w),V=E.state.lights,he=E.state.shadowsArray,we=V.state.version,be=Q.getParameters(w,V.state,he,F,Z,E.state.lightProbeGridArray),Le=Q.getProgramCacheKey(be),Ve=X.programs;X.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;let nt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;X.envMap=P.get(w.envMap||X.environment,nt),X.envMapRotation=X.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Ve===void 0&&(w.addEventListener("dispose",Ct),Ve=new Map,X.programs=Ve,X.programVariants=new Map);let lt=Ve.get(Le);if(lt!==void 0){if(X.currentProgram===lt&&X.lightsStateVersion===we)return ff(w,be),lt}else be.uniforms=Q.getUniforms(w),U!==null&&w.isNodeMaterial&&U.build(w,Z,be),w.onBeforeCompile(be,A),lt=Q.acquireProgram(be,Le),Ve.set(Le,lt),X.uniforms=be.uniforms;let Ne=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ne.clippingPlanes=ie.uniform),ff(w,be),X.needsLights=av(w),X.lightsStateVersion=we,X.needsLights&&(Ne.ambientLightColor.value=V.state.ambient,Ne.lightProbe.value=V.state.probe,Ne.sunLights.value=V.state.sun,Ne.sunLightShadows.value=V.state.sunShadow,Ne.directionalLights.value=V.state.directional,Ne.directionalLightShadows.value=V.state.directionalShadow,Ne.spotLights.value=V.state.spot,Ne.spotLightShadows.value=V.state.spotShadow,Ne.rectAreaLights.value=V.state.rectArea,Ne.ltc_1.value=V.state.rectAreaLTC1,Ne.ltc_2.value=V.state.rectAreaLTC2,Ne.pointLights.value=V.state.point,Ne.pointLightShadows.value=V.state.pointShadow,Ne.hemisphereLights.value=V.state.hemi,Ne.sunShadowMatrix.value=V.state.sunShadowMatrix,Ne.sunShadowCascade.value=V.state.sunShadowCascade,Ne.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ne.spotLightMatrix.value=V.state.spotLightMatrix,Ne.spotLightMap.value=V.state.spotLightMap,Ne.pointShadowMatrix.value=V.state.pointShadowMatrix),X.numLightProbeGrids=df(E.state.lightProbeGridArray),X.currentProgram=lt,X.uniformsList=null,lt}function rv(w,F,Z,X,V){let he=Oe.get(w),we=he.currentProgram.id+","+X+","+V,be=he.programVariants.get(we);return be===void 0?(be=oa(w,F,Z),he.programVariants.set(we,be)):(he.currentProgram=be,he.uniformsList=null,he.outputColorSpace=X,he.toneMapping=V),be}function pf(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=jn.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function ff(w,F){let Z=Oe.get(w);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function sv(w,F,Z,X,V){F.isScene!==!0&&(F=rt),He.resetTextureUnits();let he=F.fog,we=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,be=Y===null?A.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:et.workingColorSpace,Le=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ve=P.get(X.envMap||we,Le),nt=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,lt=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ne=!!Z.morphAttributes.position,mt=!!Z.morphAttributes.normal,Wt=!!Z.morphAttributes.color,bt=Bi;X.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(bt=A.toneMapping);let At=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,kt=At!==void 0?At.length:0,ze=Oe.get(X),pi=E.state.lights;if(Ee===!0&&(Ce===!0||w!==H)){let Pt=w===H&&X.id===B;ie.setState(X,w,Pt)}let Ss=!1,bs=!1;X.version===ze.__version?ze.needsLights&&ze.lightsStateVersion!==pi.state.version||V.isBatchedMesh&&ze.batching===!1||!V.isBatchedMesh&&ze.batching===!0||V.isBatchedMesh&&ze.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&ze.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&ze.instancing===!1||!V.isInstancedMesh&&ze.instancing===!0||V.isSkinnedMesh&&ze.skinning===!1||!V.isSkinnedMesh&&ze.skinning===!0||V.isInstancedMesh&&ze.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ze.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ze.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ze.instancingMorph===!1&&V.morphTexture!==null||ze.envMap!==Ve||X.fog===!0&&ze.fog!==he||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ie.numPlanes||ze.numIntersection!==ie.numIntersection)||ze.vertexAlphas!==nt||ze.vertexTangents!==lt||ze.morphTargets!==Ne||ze.morphNormals!==mt||ze.morphColors!==Wt||ze.morphTargetsCount!==kt||ze.numLightProbeGrids!==df(E.state.lightProbeGridArray)?Ss=!0:(ze.outputColorSpace!==be||ze.toneMapping!==bt)&&(bs=!0):(Ss=!0,ze.__version=X.version);let ai=ze.currentProgram;(Ss===!0||bs===!0)&&(ai=bs===!0?rv(X,F,V,be,bt):oa(X,F,V),U&&X.isNodeMaterial&&U.onUpdateProgram(X,ai,ze));let ol=!1,Qr=!1,Ts=!1,ct=ai.getUniforms(),ti=ze.uniforms;if(ce.useProgram(ai.program)&&(ol=!0,Qr=!0,Ts=!0),X.id!==B&&(B=X.id,Qr=!0),ol||H!==w){ce.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ct.setValue(z,"projectionMatrix",w.projectionMatrix),ct.setValue(z,"viewMatrix",w.matrixWorldInverse);let Pt=ct.map.cameraPosition;Pt!==void 0&&Pt.setValue(z,qe.setFromMatrixPosition(w.matrixWorld)),pt.logarithmicDepthBuffer&&ct.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ct.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),H!==w&&(H=w,Qr=!0,Ts=!0)}if(ze.needsLights&&(pi.state.sunShadowMap.length>0&&ct.setValue(z,"sunShadowMap",pi.state.sunShadowMap,He),pi.state.directionalShadowMap.length>0&&ct.setValue(z,"directionalShadowMap",pi.state.directionalShadowMap,He),pi.state.spotShadowMap.length>0&&ct.setValue(z,"spotShadowMap",pi.state.spotShadowMap,He),pi.state.pointShadowMap.length>0&&ct.setValue(z,"pointShadowMap",pi.state.pointShadowMap,He)),V.isSkinnedMesh){ct.setOptional(z,V,"bindMatrix"),ct.setOptional(z,V,"bindMatrixInverse");let Pt=V.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ct.setValue(z,"boneTexture",Pt.boneTexture,He))}V.isBatchedMesh&&(ct.setOptional(z,V,"batchingTexture"),ct.setValue(z,"batchingTexture",V._matricesTexture,He),ct.setOptional(z,V,"batchingIdTexture"),ct.setValue(z,"batchingIdTexture",V._indirectTexture,He),ct.setOptional(z,V,"batchingColorTexture"),V._colorsTexture!==null&&ct.setValue(z,"batchingColorTexture",V._colorsTexture,He));let Wi=Z.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&$.update(V,Z,ai),(Qr||ze.receiveShadow!==V.receiveShadow)&&(ze.receiveShadow=V.receiveShadow,ct.setValue(z,"receiveShadow",V.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(ti.envMapIntensity.value=F.environmentIntensity),ti.dfgLUT!==void 0&&(ti.dfgLUT.value=w1()),Qr){if(ct.setValue(z,"toneMappingExposure",A.toneMappingExposure),ze.needsLights&&nv(ti,Ts),he&&X.fog===!0&&ge.refreshFogUniforms(ti,he),ge.refreshMaterialUniforms(ti,X,re,_e,E.state.transmissionRenderTarget[w.id]),ze.needsLights&&ze.numLightProbeGrids>0){let Pt=x,fi=0;for(let Pr of E.state.lightProbeGridArray)Pr.texture!==null&&(Pt.textures[fi]=Pr.texture,Pt.min[fi]=Pr.boundingBox.min,Pt.max[fi]=Pr.boundingBox.max,Pt.resolution[fi]=Pr.resolution,fi++);for(let Pr in Pt)Pt[Pr].length=fi;ti.probesSH.value=Pt.textures,ti.probesMin.value=Pt.min,ti.probesMax.value=Pt.max,ti.probesResolution.value=Pt.resolution}jn.upload(z,pf(ze),ti,He)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(jn.upload(z,pf(ze),ti,He),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ct.setValue(z,"center",V.center),ct.setValue(z,"modelViewMatrix",V.modelViewMatrix),ct.setValue(z,"normalMatrix",V.normalMatrix),ct.setValue(z,"modelMatrix",V.matrixWorld),X.uniformsGroups!==void 0){let Pt=X.uniformsGroups;for(let fi=0,Pr=Pt.length;fi<Pr;fi++){let gf=Pt[fi];Ge.update(gf,ai),Ge.bind(gf,ai)}}return ai}function nv(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function av(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(w,F,Z){let X=Oe.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Oe.get(w.texture).__webglTexture=F,Oe.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Z,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let Z=Oe.get(w);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,Z=0){Y=w,q=F,O=Z;let X=null,V=!1,he=!1;if(w){let we=Oe.get(w);if(we.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(z.FRAMEBUFFER,we.__webglFramebuffer),J.copy(w.viewport),pe.copy(w.scissor),Te=w.scissorTest,ce.viewport(J),ce.scissor(pe),ce.setScissorTest(Te),B=-1;return}else if(we.__webglFramebuffer===void 0)He.setupRenderTarget(w);else if(we.__hasExternalTextures)He.rebindTextures(w,Oe.get(w.texture).__webglTexture,Oe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ve=w.depthTexture;if(we.__boundDepthTexture!==Ve){if(Ve!==null&&Oe.has(Ve)&&(w.width!==Ve.image.width||w.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(w)}}let be=w.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(he=!0);let Le=Oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?X=Le[F][Z]:X=Le[F],V=!0):w.samples>0&&He.useMultisampledRTT(w)===!1?X=Oe.get(w).__webglMultisampledFramebuffer:Array.isArray(Le)?X=Le[Z]:X=Le,J.copy(w.viewport),pe.copy(w.scissor),Te=w.scissorTest}else J.copy(Ue).multiplyScalar(re).floor(),pe.copy(je).multiplyScalar(re).floor(),Te=se;if(Z!==0&&(X=G),ce.bindFramebuffer(z.FRAMEBUFFER,X)&&ce.drawBuffers(w,X),ce.viewport(J),ce.scissor(pe),ce.setScissorTest(Te),V){let we=Oe.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,Z)}else if(he){let we=F;for(let be=0;be<w.textures.length;be++){let Le=Oe.get(w.textures[be]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+be,Le.__webglTexture,Z,we)}}else if(w!==null&&Z!==0){let we=Oe.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,we.__webglTexture,Z)}B=-1};function mf(w){let F=Oe.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=pt.textureFormatReadable(w.format),F.__typeReadable=pt.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,Z,X,V,he,we,be=0){if(!(w&&w.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we],Array.isArray(Le)&&(Le=Le[0])),Le){ce.bindFramebuffer(z.FRAMEBUFFER,Le);try{let Ve=w.textures[be],nt=Ve.format,lt=Ve.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be);let Ne=mf(Ve);if(Ne.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-X&&Z>=0&&Z<=w.height-V&&z.readPixels(F,Z,X,V,Me.convert(nt),Me.convert(lt),he)}finally{let Ve=Y!==null?Oe.get(Y).__webglFramebuffer:null;ce.bindFramebuffer(z.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(w,F,Z,X,V,he,we,be=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we],Array.isArray(Le)&&(Le=Le[0])),Le)if(F>=0&&F<=w.width-X&&Z>=0&&Z<=w.height-V){ce.bindFramebuffer(z.FRAMEBUFFER,Le);let Ve=w.textures[be],nt=Ve.format,lt=Ve.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be);let Ne=mf(Ve);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,mt),z.bufferData(z.PIXEL_PACK_BUFFER,he.byteLength,z.STREAM_READ),z.readPixels(F,Z,X,V,Me.convert(nt),Me.convert(lt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Wt=Y!==null?Oe.get(Y).__webglFramebuffer:null;ce.bindFramebuffer(z.FRAMEBUFFER,Wt);let bt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Km(z,bt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,mt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,he),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(mt),z.deleteSync(bt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,Z=0){let X=Math.pow(2,-Z),V=Math.floor(w.image.width*X),he=Math.floor(w.image.height*X),we=F!==null?F.x:0,be=F!==null?F.y:0;He.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,Z,0,0,we,be,V,he),ce.unbindTexture()},this.copyTextureToTexture=function(w,F,Z=null,X=null,V=0,he=0){let we,be,Le,Ve,nt,lt,Ne,mt,Wt,bt=w.isCompressedTexture?w.mipmaps[he]:w.image;if(Z!==null)we=Z.max.x-Z.min.x,be=Z.max.y-Z.min.y,Le=Z.isBox3?Z.max.z-Z.min.z:1,Ve=Z.min.x,nt=Z.min.y,lt=Z.isBox3?Z.min.z:0;else{let ct=Math.pow(2,-V);we=Math.floor(bt.width*ct),be=Math.floor(bt.height*ct),w.isDataArrayTexture?Le=bt.depth:w.isData3DTexture?Le=Math.floor(bt.depth*ct):Le=1,Ve=0,nt=0,lt=0}X!==null?(Ne=X.x,mt=X.y,Wt=X.z):(Ne=0,mt=0,Wt=0);let At=Me.convert(F.format),kt=Me.convert(F.type),ze;F.isData3DTexture?(He.setTexture3D(F,0),ze=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(He.setTexture2DArray(F,0),ze=z.TEXTURE_2D_ARRAY):(He.setTexture2D(F,0),ze=z.TEXTURE_2D),ce.activeTexture(z.TEXTURE0),ce.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),ce.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ce.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);let pi=ce.getParameter(z.UNPACK_ROW_LENGTH),Ss=ce.getParameter(z.UNPACK_IMAGE_HEIGHT),bs=ce.getParameter(z.UNPACK_SKIP_PIXELS),ai=ce.getParameter(z.UNPACK_SKIP_ROWS),ol=ce.getParameter(z.UNPACK_SKIP_IMAGES);ce.pixelStorei(z.UNPACK_ROW_LENGTH,bt.width),ce.pixelStorei(z.UNPACK_IMAGE_HEIGHT,bt.height),ce.pixelStorei(z.UNPACK_SKIP_PIXELS,Ve),ce.pixelStorei(z.UNPACK_SKIP_ROWS,nt),ce.pixelStorei(z.UNPACK_SKIP_IMAGES,lt);let Qr=w.isDataArrayTexture||w.isData3DTexture,Ts=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let ct=Oe.get(w),ti=Oe.get(F),Wi=Oe.get(ct.__renderTarget),Pt=Oe.get(ti.__renderTarget);ce.bindFramebuffer(z.READ_FRAMEBUFFER,Wi.__webglFramebuffer),ce.bindFramebuffer(z.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let fi=0;fi<Le;fi++)Qr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Oe.get(w).__webglTexture,V,lt+fi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Oe.get(F).__webglTexture,he,Wt+fi)),z.blitFramebuffer(Ve,nt,Ve+we,nt+be,Ne,mt,Ne+we,mt+be,z.DEPTH_BUFFER_BIT,z.NEAREST);ce.bindFramebuffer(z.READ_FRAMEBUFFER,null),ce.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||Oe.has(w)){let ct=Oe.get(w),ti=Oe.get(F);ce.bindFramebuffer(z.READ_FRAMEBUFFER,N),ce.bindFramebuffer(z.DRAW_FRAMEBUFFER,W);for(let Wi=0;Wi<Le;Wi++)Qr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ct.__webglTexture,V,lt+Wi):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ct.__webglTexture,V),Ts?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ti.__webglTexture,he,Wt+Wi):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ti.__webglTexture,he),V!==0?z.blitFramebuffer(Ve,nt,Ve+we,nt+be,Ne,mt,Ne+we,mt+be,z.COLOR_BUFFER_BIT,z.NEAREST):Ts?z.copyTexSubImage3D(ze,he,Ne,mt,Wt+Wi,Ve,nt,we,be):z.copyTexSubImage2D(ze,he,Ne,mt,Ve,nt,we,be);ce.bindFramebuffer(z.READ_FRAMEBUFFER,null),ce.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ts?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(ze,he,Ne,mt,Wt,we,be,Le,At,kt,bt.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(ze,he,Ne,mt,Wt,we,be,Le,At,bt.data):z.texSubImage3D(ze,he,Ne,mt,Wt,we,be,Le,At,kt,bt):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,he,Ne,mt,we,be,At,kt,bt.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,he,Ne,mt,bt.width,bt.height,At,bt.data):z.texSubImage2D(z.TEXTURE_2D,he,Ne,mt,we,be,At,kt,bt);ce.pixelStorei(z.UNPACK_ROW_LENGTH,pi),ce.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ss),ce.pixelStorei(z.UNPACK_SKIP_PIXELS,bs),ce.pixelStorei(z.UNPACK_SKIP_ROWS,ai),ce.pixelStorei(z.UNPACK_SKIP_IMAGES,ol),he===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&z.generateMipmap(ze),ce.unbindTexture()},this.initRenderTarget=function(w){Oe.get(w).__webglFramebuffer===void 0&&He.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?He.setTextureCube(w,0):w.isData3DTexture?He.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?He.setTexture2DArray(w,0):He.setTexture2D(w,0),ce.unbindTexture()},this.resetState=function(){q=0,O=0,Y=null,ce.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var yr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Si=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},A1=new Xr(-1,1,1,-1,0,1),Vd=class extends ut{constructor(){super(),this.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ke([0,2,0,0,2,0],2))}},R1=new Vd,Mr=class{constructor(e){this._mesh=new Qe(R1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,A1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ph=class extends Si{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Mi.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Mr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ro=class extends Si{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),n.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),n.buffers.stencil.setClear(o),n.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(s.EQUAL,1,4294967295),n.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),n.buffers.stencil.setLocked(!0)}},Lh=class extends Si{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ih=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ee);this._width=i.width,this._height=i.height,t=new Ut(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ph(yr),this.copyPass.material.blending=Qt,this.timer=new ro}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,n=this.passes.length;s<n;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ro!==void 0&&(a instanceof Ro?i=!0:a instanceof Lh&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Nh=class extends Si{constructor(e,t,i=null,s=null,n=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ae}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let n,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(n=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(n),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Fg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Yn=class r extends Si{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ee(e.x,e.y):new ee(256,256),this.clearColor=new Ae(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ut(n,a,{type:Gt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ut(n,a,{type:Gt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let p=new Ut(n,a,{type:Gt,depthBuffer:!1});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),n=Math.round(n/2),a=Math.round(a/2)}let o=Fg;this.highPassUniforms=Mi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];n=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ee(1/n,1/a),n=Math.round(n/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Mi.clone(yr.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:yr.vertexShader,fragmentShader:yr.fragmentShader,premultipliedAlpha:!0,blending:no,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ae,this._oldClearAlpha=1,this._basic=new _i,this._fsQuad=new Mr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(i,s),this.renderTargetsVertical[n].setSize(i,s),this.separableBlurMaterials[n].uniforms.invSize.value=new ee(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,n){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),n&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],n=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),n.push(c)}return new Ot({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ee(.5,.5)},direction:{value:new ee(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:n}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Yn.BlurDirectionX=new ee(1,0);Yn.BlurDirectionY=new ee(0,1);var Co={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ee},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Be},cameraProjectionMatrixInverse:{value:new Be},cameraWorldMatrix:{value:new Be},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new C(-1,-1,-1)},sceneBoxMax:{value:new C(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Po={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Dh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Bg(r=5){let e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=C1(e),i=t.length,s=new Uint8Array(i*4);for(let a=0;a<i;++a){let o=t[a],l=2*Math.PI*o/i,c=new C(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let n=new ur(s,e,e);return n.wrapS=ci,n.wrapT=ci,n.needsUpdate=!0,n}function C1(r){let e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),n=e-1;for(let a=1;a<=t;){if(s===-1&&n===e?(n=e-2,s=0):(n===e&&(n=0),s<0&&(s=e-1)),i[s*e+n]!==0){n-=2,s++;continue}else i[s*e+n]=a++;n++,s--}return i}var Lo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Wd(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ee},cameraProjectionMatrixInverse:{value:new Be},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Wd(r,e,t){let i=P1(r,e,t),s="vec3[SAMPLES](";for(let n=0;n<r;n++){let a=i[n];s+=`vec3(${a.x}, ${a.y}, ${a.z})${n<r-1?",":")"}`}return s}function P1(r,e,t){let i=[];for(let s=0;s<r;s++){let n=2*Math.PI*e*s/r,a=Math.pow(s/(r-1),t);i.push(new C(Math.cos(n),Math.sin(n),a))}return i}var Uh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,s,n,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,p=l-u,d=c-u,g=e-p,M=t-d,f,m;g>M?(f=1,m=0):(f=0,m=1);let _=g-f+h,S=M-m+h,x=g-1+2*h,b=M-1+2*h,E=l&255,v=c&255,y=this.perm[E+this.perm[v]]%12,R=this.perm[E+f+this.perm[v+m]]%12,A=this.perm[E+1+this.perm[v+1]]%12,L=.5-g*g-M*M;L<0?i=0:(L*=L,i=L*L*this._dot(this.grad3[y],g,M));let U=.5-_*_-S*S;U<0?s=0:(U*=U,s=U*U*this._dot(this.grad3[R],_,S));let G=.5-x*x-b*b;return G<0?n=0:(G*=G,n=G*G*this._dot(this.grad3[A],x,b)),70*(i+s+n)}noise3d(e,t,i){let s,n,a,o,c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),p=Math.floor(i+c),d=1/6,g=(h+u+p)*d,M=h-g,f=u-g,m=p-g,_=e-M,S=t-f,x=i-m,b,E,v,y,R,A;_>=S?S>=x?(b=1,E=0,v=0,y=1,R=1,A=0):_>=x?(b=1,E=0,v=0,y=1,R=0,A=1):(b=0,E=0,v=1,y=1,R=0,A=1):S<x?(b=0,E=0,v=1,y=0,R=1,A=1):_<x?(b=0,E=1,v=0,y=0,R=1,A=1):(b=0,E=1,v=0,y=1,R=1,A=0);let L=_-b+d,U=S-E+d,G=x-v+d,N=_-y+2*d,W=S-R+2*d,q=x-A+2*d,O=_-1+3*d,Y=S-1+3*d,B=x-1+3*d,H=h&255,J=u&255,pe=p&255,Te=this.perm[H+this.perm[J+this.perm[pe]]]%12,K=this.perm[H+b+this.perm[J+E+this.perm[pe+v]]]%12,te=this.perm[H+y+this.perm[J+R+this.perm[pe+A]]]%12,oe=this.perm[H+1+this.perm[J+1+this.perm[pe+1]]]%12,_e=.6-_*_-S*S-x*x;_e<0?s=0:(_e*=_e,s=_e*_e*this._dot3(this.grad3[Te],_,S,x));let re=.6-L*L-U*U-G*G;re<0?n=0:(re*=re,n=re*re*this._dot3(this.grad3[K],L,U,G));let xe=.6-N*N-W*W-q*q;xe<0?a=0:(xe*=xe,a=xe*xe*this._dot3(this.grad3[te],N,W,q));let Xe=.6-O*O-Y*Y-B*B;return Xe<0?o=0:(Xe*=Xe,o=Xe*Xe*this._dot3(this.grad3[oe],O,Y,B)),32*(s+n+a+o)}noise4d(e,t,i,s){let n=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,p,d,g,M=(e+t+i+s)*l,f=Math.floor(e+M),m=Math.floor(t+M),_=Math.floor(i+M),S=Math.floor(s+M),x=(f+m+_+S)*c,b=f-x,E=m-x,v=_-x,y=S-x,R=e-b,A=t-E,L=i-v,U=s-y,G=R>A?32:0,N=R>L?16:0,W=A>L?8:0,q=R>U?4:0,O=A>U?2:0,Y=L>U?1:0,B=G+N+W+q+O+Y,H=a[B][0]>=3?1:0,J=a[B][1]>=3?1:0,pe=a[B][2]>=3?1:0,Te=a[B][3]>=3?1:0,K=a[B][0]>=2?1:0,te=a[B][1]>=2?1:0,oe=a[B][2]>=2?1:0,_e=a[B][3]>=2?1:0,re=a[B][0]>=1?1:0,xe=a[B][1]>=1?1:0,Xe=a[B][2]>=1?1:0,Ue=a[B][3]>=1?1:0,je=R-H+c,se=A-J+c,le=L-pe+c,ue=U-Te+c,Ee=R-K+2*c,Ce=A-te+2*c,Ie=L-oe+2*c,qe=U-_e+2*c,Ze=R-re+3*c,rt=A-xe+3*c,at=L-Xe+3*c,xt=U-Ue+3*c,z=R-1+4*c,ft=A-1+4*c,dt=L-1+4*c,pt=U-1+4*c,ce=f&255,St=m&255,Oe=_&255,He=S&255,P=o[ce+o[St+o[Oe+o[He]]]]%32,T=o[ce+H+o[St+J+o[Oe+pe+o[He+Te]]]]%32,j=o[ce+K+o[St+te+o[Oe+oe+o[He+_e]]]]%32,ae=o[ce+re+o[St+xe+o[Oe+Xe+o[He+Ue]]]]%32,Q=o[ce+1+o[St+1+o[Oe+1+o[He+1]]]]%32,ge=.6-R*R-A*A-L*L-U*U;ge<0?h=0:(ge*=ge,h=ge*ge*this._dot4(n[P],R,A,L,U));let fe=.6-je*je-se*se-le*le-ue*ue;fe<0?u=0:(fe*=fe,u=fe*fe*this._dot4(n[T],je,se,le,ue));let k=.6-Ee*Ee-Ce*Ce-Ie*Ie-qe*qe;k<0?p=0:(k*=k,p=k*k*this._dot4(n[j],Ee,Ce,Ie,qe));let ie=.6-Ze*Ze-rt*rt-at*at-xt*xt;ie<0?d=0:(ie*=ie,d=ie*ie*this._dot4(n[ae],Ze,rt,at,xt));let ye=.6-z*z-ft*ft-dt*dt-pt*pt;return ye<0?g=0:(ye*=ye,g=ye*ye*this._dot4(n[Q],z,ft,dt,pt)),27*(h+u+p+d+g)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}_dot4(e,t,i,s,n){return e[0]*t+e[1]*i+e[2]*s+e[3]*n}};var Kn=class r extends Si{constructor(e,t,i=512,s=512,n,a,o){super(),this.width=i,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Bg(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ut(this.width,this.height,{type:Gt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ot({defines:Object.assign({},Co.defines),uniforms:Mi.clone(Co.uniforms),vertexShader:Co.vertexShader,fragmentShader:Co.fragmentShader,blending:Qt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ka,this.normalMaterial.blending=Qt,this.pdMaterial=new Ot({defines:Object.assign({},Lo.defines),uniforms:Mi.clone(Lo.uniforms),vertexShader:Lo.vertexShader,fragmentShader:Lo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ot({defines:Object.assign({},Po.defines),uniforms:Mi.clone(Po.uniforms),vertexShader:Po.vertexShader,fragmentShader:Po.fragmentShader,blending:Qt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ot({uniforms:Mi.clone(yr.uniforms),vertexShader:yr.vertexShader,fragmentShader:yr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:oo,blendDst:Hs,blendEquation:Fi,blendSrcAlpha:ao,blendDstAlpha:Hs,blendEquationAlpha:Fi}),this.blendMaterial=new Ot({uniforms:Mi.clone(Dh.uniforms),vertexShader:Dh.vertexShader,fragmentShader:Dh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Uc,blendSrc:oo,blendDst:Hs,blendEquation:Fi,blendSrcAlpha:ao,blendDstAlpha:Hs,blendEquationAlpha:Fi}),this._fsQuad=new Mr(null),this._originalClearColor=new Ae,this.setGBuffer(n?n.depthTexture:void 0,n?n.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new $i;s.format=tr,s.type=Yr,this.normalRenderTarget=new Ut(this.width,this.height,{minFilter:Dt,magFilter:Dt,type:Gt,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let i=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Wd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case r.OUTPUT.Off:break;case r.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=Qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,i,s,n){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(n||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,i,s,n){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,n=t.clearAlpha||n,s!=null&&(e.setClearColor(s),e.setClearAlpha(n||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){(i.isPoints||i.isLine||i.isLine2)&&i.visible&&(i.visible=!1,t.push(i))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Uh,i=e*e*4,s=new Uint8Array(i);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let n=new ur(s,e,e,wi,hi);return n.wrapS=ci,n.wrapT=ci,n.needsUpdate=!0,n}};Kn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Io={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Oh=class extends Si{constructor(){super(),this.isOutputPass=!0,this.uniforms=Mi.clone(Io.uniforms),this.material=new In({name:Io.name,uniforms:this.uniforms,vertexShader:Io.vertexShader,fragmentShader:Io.fragmentShader}),this._fsQuad=new Mr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===lo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===co?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ho?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===us?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===po?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===uo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Fh=class extends Us{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Qi;e.deleteAttribute("uv");let t=new Bt({side:si}),i=new Bt,s=new gr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let n=new Qe(e,t);n.position.set(-.757,13.219,.717),n.scale.set(31.713,28.305,28.591),this.add(n);let a=new Os(e,i,6),o=new Et;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Qe(e,Zn(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Qe(e,Zn(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Qe(e,Zn(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Qe(e,Zn(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let p=new Qe(e,Zn(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let d=new Qe(e,Zn(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Zn(r){return new Za({color:0,emissive:16777215,emissiveIntensity:r})}var ki=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window,me={renderer:null,scene:null,camera:null,composer:null,tier:"medium",key:null,gtao:null,bloom:null,stage:null},Bh=["high","medium","low"],Jn={quality:"auto",bloom:!0},zh=0,No=0,zg=!1;function kg(r,e){Jn=e,me.stage=r;let t=new Ah({antialias:!1,powerPreference:"high-performance",stencil:!1});t.shadowMap.enabled=!0,t.shadowMap.type=Gs,t.toneMapping=us,t.toneMappingExposure=.95,t.outputColorSpace=Tt,r.prepend(t.domElement),me.renderer=t,me.scene=new Us,me.scene.background=new Ae("#1a1a1a"),me.camera=new Xt(70,1.6,.05,60),me.camera.layers.enable(1),me.scene.add(me.camera);let i=new Xn(t);me.scene.environment=i.fromScene(new Fh,.04).texture,me.scene.environmentIntensity=.3,i.dispose();let s=(()=>{try{return localStorage.getItem("bb6_tier")}catch{return null}})();return Xd(Jn.quality!=="auto"?Jn.quality:s&&Bh.includes(s)?s:ki?"medium":"high"),jd(),addEventListener("resize",jd),me}function Gg(r){Jn=r,Xd(r.quality!=="auto"?r.quality:me.tier)}function Xd(r){me.tier=r,zg=Jn.quality!=="auto",zh=0,No=0;let e=me.renderer;if(me.composer&&(me.composer.dispose(),me.composer=null,me.gtao=null,me.bloom=null),e.shadowMap.enabled=!0,me.key){let i=r==="high"?2048:1024;me.key.shadow.mapSize.x!==i&&(me.key.shadow.mapSize.set(i,i),me.key.shadow.map&&(me.key.shadow.map.dispose(),me.key.shadow.map=null))}e.setPixelRatio(Hg());let t=e.extensions.has("EXT_color_buffer_float")||e.extensions.has("EXT_color_buffer_half_float");if(r!=="low"&&!t&&(r=me.tier="low"),r!=="low")try{let i=me.stage.clientWidth||800,s=me.stage.clientHeight||500,n=e.getPixelRatio(),a=new Ut(i*n,s*n,{type:Gt,samples:r==="high"?4:2}),o=new Ih(e,a);if(o.setPixelRatio(n),o.setSize(i,s),o.addPass(new Nh(me.scene,me.camera)),r==="high"){let l=new Kn(me.scene,me.camera,i,s);l.output=Kn.OUTPUT.Default,l.updateGtaoMaterial({radius:.45,distanceExponent:1.2,thickness:1,scale:1,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),l.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:4,radiusExponent:1,rings:2,samples:12}),l.blendIntensity=.9;let c=l.render.bind(l);l.render=(...h)=>{me.camera.layers.disable(1),c(...h),me.camera.layers.enable(1)},o.addPass(l),me.gtao=l}if(Jn.bloom!==!1){let l=new Yn(new ee(Math.round(i/2),Math.round(s/2)),.32,.55,.88);o.addPass(l),me.bloom=l}o.addPass(new Oh),me.composer=o}catch(i){console.warn("post-traitement indisponible",i),me.composer=null,me.tier="low"}e.toneMapping=me.composer?Bi:us,jd()}function Hg(){let r=devicePixelRatio||1;return me.tier==="high"?Math.min(r,2):me.tier==="medium"?Math.min(r,ki?1.5:1.75):Math.min(r,1.25)}function jd(){let r=me.stage;if(!r||!me.renderer)return;let e=r.clientWidth,t=r.clientHeight;!e||!t||(me.renderer.setPixelRatio(Hg()),me.renderer.setSize(e,t),me.composer&&(me.composer.setPixelRatio(me.renderer.getPixelRatio()),me.composer.setSize(e,t)),me.camera.aspect=e/t,me.camera.fov=e<t?80:68,me.camera.updateProjectionMatrix())}function Vg(r){if(me.composer?me.composer.render(r):me.renderer.render(me.scene,me.camera),!zg&&r<.5&&(zh+=r,No++,No>=150)){let e=zh/No;if(zh=0,No=0,e>1/36){let t=Bh.indexOf(me.tier);if(t<Bh.length-1){Xd(Bh[t+1]);try{localStorage.setItem("bb6_tier",me.tier)}catch{}}}}}var Kd={};vf(Kd,{computeMikkTSpaceTangents:()=>L1,computeMorphedAttributes:()=>B1,deepCloneAttribute:()=>N1,deinterleaveAttribute:()=>kh,deinterleaveGeometry:()=>U1,estimateBytesUsed:()=>O1,interleaveAttributes:()=>D1,mergeAttributes:()=>qd,mergeGeometries:()=>I1,mergeGroups:()=>z1,mergeVertices:()=>F1,remapAttribute:()=>Yd,toCreasedNormals:()=>k1,toTrianglesDrawMode:()=>Gh});function L1(r,e,t=!0){if(!e||!e.isReady)throw new Error("THREE.BufferGeometryUtils: Initialized MikkTSpace library required.");if(!r.hasAttribute("position")||!r.hasAttribute("normal")||!r.hasAttribute("uv"))throw new Error('THREE.BufferGeometryUtils: Tangents require "position", "normal", and "uv" attributes.');function i(l){if(l.normalized||l.isInterleavedBufferAttribute){let c=new Float32Array(l.count*l.itemSize);for(let h=0,u=0;h<l.count;h++)c[u++]=l.getX(h),c[u++]=l.getY(h),l.itemSize>2&&(c[u++]=l.getZ(h));return c}return l.array instanceof Float32Array?l.array:new Float32Array(l.array)}let s=r.index?r.toNonIndexed():r,n=e.generateTangents(i(s.attributes.position),i(s.attributes.normal),i(s.attributes.uv));if(t)for(let l=3;l<n.length;l+=4)n[l]*=-1;let a=s.attributes.normal,o=a.array;if(a.normalized&&(o instanceof Int8Array||o instanceof Int16Array)){let l=new o.constructor(n.length);for(let c=0;c<n.length;c++)l[c]=So.normalize(n[c],l);s.setAttribute("tangent",new Lt(l,4,!0))}else s.setAttribute("tangent",new Lt(n,4));return r!==s&&r.copy(s),r}function I1(r,e=!1){let t=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),s=new Set(Object.keys(r[0].morphAttributes)),n={},a={},o=r[0].morphTargetsRelative,l=new ut;l.morphTargetsRelative=o;let c=0;for(let h=0;h<r.length;++h){let u=r[h],p=0,d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in u.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;n[g]===void 0&&(n[g]=[]),n[g].push(u.attributes[g]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in u.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[g].length!==r[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(u.morphAttributes[g]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(t){let h=0,u=[];for(let p=0;p<r.length;++p){let d=r[p].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=r[p].attributes.position.count}l.setIndex(u)}for(let h in n){let u=qd(n[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<u;++p){let d=[];for(let M=0;M<a[h].length;++M)d.push(a[h][M][p]);let g=qd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function qd(r){let e,t,i,s=-1,n=0;for(let c=0;c<r.length;++c){let h=r[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=h.count*t}let a=new e(n),o=new Lt(a,t,i),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let p=0,d=h.count;p<d;p++)for(let g=0;g<t;g++){let M=h.getComponent(p,g);o.setComponent(p+u,g,M)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function N1(r){return r.isInstancedInterleavedBufferAttribute||r.isInterleavedBufferAttribute?kh(r):r.isInstancedBufferAttribute?new Ji().copy(r):new Lt().copy(r)}function D1(r){let e,t=0,i=0;for(let c=0,h=r.length;c<h;++c){let u=r[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("AttributeBuffers of different types cannot be interleaved"),null;t+=u.array.length,i+=u.itemSize}let s=new as(new e(t),i),n=0,a=[],o=["getX","getY","getZ","getW"],l=["setX","setY","setZ","setW"];for(let c=0,h=r.length;c<h;c++){let u=r[c],p=u.itemSize,d=u.count,g=new Gr(s,p,n,u.normalized);a.push(g),n+=p;for(let M=0;M<d;M++)for(let f=0;f<p;f++)g[l[f]](M,u[o[f]](M))}return a}function kh(r){let e=r.data.array.constructor,t=r.count,i=r.itemSize,s=r.normalized,n=new e(t*i),a;r.isInstancedInterleavedBufferAttribute?a=new Ji(n,i,s,r.meshPerAttribute):a=new Lt(n,i,s);for(let o=0;o<t;o++)a.setX(o,r.getX(o)),i>=2&&a.setY(o,r.getY(o)),i>=3&&a.setZ(o,r.getZ(o)),i>=4&&a.setW(o,r.getW(o));return a}function U1(r){let e=r.attributes,t=r.morphAttributes,i=new Map;for(let s in e){let n=e[s];n.isInterleavedBufferAttribute&&(i.has(n)||i.set(n,kh(n)),e[s]=i.get(n))}for(let s in t){let n=t[s];for(let a=0,o=n.length;a<o;a++){let l=n[a];l.isInterleavedBufferAttribute&&(i.has(l)||i.set(l,kh(l)),n[a]=i.get(l))}}}function O1(r){let e=0;for(let i in r.attributes){let s=r.getAttribute(i);e+=s.count*s.itemSize*s.array.BYTES_PER_ELEMENT}let t=r.getIndex();return e+=t?t.count*t.itemSize*t.array.BYTES_PER_ELEMENT:0,e}function F1(r,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},i=r.getIndex(),s=r.getAttribute("position"),n=i?i.count:s.count,a=0,o=Object.keys(r.attributes),l=[],c=new Map,h=[],u=["getX","getY","getZ","getW"],p=e*.5,d=Math.log10(1/e),g=Math.pow(10,d),M=p*g;for(let m=0;m<n;m++){let _=i?i.getX(m):m,S="";for(let x=0,b=o.length;x<b;x++){let E=o[x],v=r.getAttribute(E),y=v.itemSize;for(let R=0;R<y;R++)S+=`${Math.trunc(v[u[R]](_)*g+M)},`}S in t?h.push(t[S]):(l.push(_),t[S]=a,h.push(a),a++)}let f=r.clone();for(let m in r.attributes)f.setAttribute(m,Yd(r.attributes[m],l,c));for(let m in r.morphAttributes)f.morphAttributes[m]=r.morphAttributes[m].map(_=>Yd(_,l,c));return f.setIndex(h),f}function Gh(r,e){if(e===pd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Vn||e===Mo){let t=r.getIndex();if(t===null){let n=[],a=r.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)n.push(o);r.setIndex(n),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let i=t.count-2,s=[];if(e===Vn)for(let n=1;n<=i;n++)s.push(t.getX(0)),s.push(t.getX(n)),s.push(t.getX(n+1));else for(let n=0;n<i;n++)n%2===0?(s.push(t.getX(n)),s.push(t.getX(n+1)),s.push(t.getX(n+2))):(s.push(t.getX(n+2)),s.push(t.getX(n+1)),s.push(t.getX(n)));return s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function B1(r){let e=new C,t=new C,i=new C,s=new C,n=new C,a=new C,o=new C,l=new C,c=new C;function h(B,H,J,pe,Te,K,te,oe){e.fromBufferAttribute(H,Te),t.fromBufferAttribute(H,K),i.fromBufferAttribute(H,te);let _e=B.morphTargetInfluences;if(J&&_e){o.set(0,0,0),l.set(0,0,0),c.set(0,0,0);for(let re=0,xe=J.length;re<xe;re++){let Xe=_e[re],Ue=J[re];Xe!==0&&(s.fromBufferAttribute(Ue,Te),n.fromBufferAttribute(Ue,K),a.fromBufferAttribute(Ue,te),pe?(o.addScaledVector(s,Xe),l.addScaledVector(n,Xe),c.addScaledVector(a,Xe)):(o.addScaledVector(s.sub(e),Xe),l.addScaledVector(n.sub(t),Xe),c.addScaledVector(a.sub(i),Xe)))}e.add(o),t.add(l),i.add(c)}B.isSkinnedMesh&&(B.applyBoneTransform(Te,e),B.applyBoneTransform(K,t),B.applyBoneTransform(te,i)),oe[Te*3+0]=e.x,oe[Te*3+1]=e.y,oe[Te*3+2]=e.z,oe[K*3+0]=t.x,oe[K*3+1]=t.y,oe[K*3+2]=t.z,oe[te*3+0]=i.x,oe[te*3+1]=i.y,oe[te*3+2]=i.z}let u=r.geometry,p=r.material,d,g,M,f=u.index,m=u.attributes.position,_=u.morphAttributes.position,S=u.morphTargetsRelative,x=u.attributes.normal,b=u.morphAttributes.normal,E=u.groups,v=u.drawRange,y,R,A,L,U,G,N,W=new Float32Array(m.count*m.itemSize),q=new Float32Array(x.count*x.itemSize);if(f!==null)if(Array.isArray(p))for(y=0,A=E.length;y<A;y++)for(U=E[y],G=Math.max(U.start,v.start),N=Math.min(U.start+U.count,v.start+v.count),R=G,L=N;R<L;R+=3)d=f.getX(R),g=f.getX(R+1),M=f.getX(R+2),h(r,m,_,S,d,g,M,W),h(r,x,b,S,d,g,M,q);else for(G=Math.max(0,v.start),N=Math.min(f.count,v.start+v.count),y=G,A=N;y<A;y+=3)d=f.getX(y),g=f.getX(y+1),M=f.getX(y+2),h(r,m,_,S,d,g,M,W),h(r,x,b,S,d,g,M,q);else if(Array.isArray(p))for(y=0,A=E.length;y<A;y++)for(U=E[y],G=Math.max(U.start,v.start),N=Math.min(U.start+U.count,v.start+v.count),R=G,L=N;R<L;R+=3)d=R,g=R+1,M=R+2,h(r,m,_,S,d,g,M,W),h(r,x,b,S,d,g,M,q);else for(G=Math.max(0,v.start),N=Math.min(m.count,v.start+v.count),y=G,A=N;y<A;y+=3)d=y,g=y+1,M=y+2,h(r,m,_,S,d,g,M,W),h(r,x,b,S,d,g,M,q);let O=new ke(W,3),Y=new ke(q,3);return{positionAttribute:m,normalAttribute:x,morphedPositionAttribute:O,morphedNormalAttribute:Y}}function z1(r){if(r.groups.length===0)return console.warn("THREE.BufferGeometryUtils.mergeGroups(): No groups are defined. Nothing to merge."),r;let e=r.groups;if(e=e.sort((a,o)=>a.materialIndex!==o.materialIndex?a.materialIndex-o.materialIndex:a.start-o.start),r.getIndex()===null){let a=r.getAttribute("position"),o=[];for(let l=0;l<a.count;l+=3)o.push(l,l+1,l+2);r.setIndex(o)}let t=r.getIndex(),i=[];for(let a=0;a<e.length;a++){let o=e[a];o.count===1/0&&(o.count=t.count-o.start);let l=o.start,c=l+o.count;for(let h=l;h<c;h++)i.push(t.getX(h))}r.dispose(),r.setIndex(i);let s=0;for(let a=0;a<e.length;a++){let o=e[a];o.start=s,s+=o.count}let n=e[0];r.groups=[n];for(let a=1;a<e.length;a++){let o=e[a];n.materialIndex===o.materialIndex?n.count+=o.count:(n=o,r.groups.push(n))}return r}function k1(r,e=Math.PI/3){let t=r.index?r.toNonIndexed():r,i=t.attributes.position,s=i.count,n;if(i.isBufferAttribute===!0&&i.itemSize===3&&i.normalized===!1)n=i.array;else{n=new Float64Array(s*3);for(let x=0;x<s;x++)n[3*x+0]=i.getX(x),n[3*x+1]=i.getY(x),n[3*x+2]=i.getZ(x)}let a=Math.cos(e),o=(1+1e-10)*100,l=s/3,c=new Float64Array(l*3);for(let x=0;x<l;x++){let b=9*x,E=n[b+0],v=n[b+1],y=n[b+2],R=n[b+3],A=n[b+4],L=n[b+5],U=n[b+6],G=n[b+7],N=n[b+8],W=U-R,q=G-A,O=N-L,Y=E-R,B=v-A,H=y-L,J=q*H-O*B,pe=O*Y-W*H,Te=W*B-q*Y,K=1/(Math.sqrt(J*J+pe*pe+Te*Te)||1);c[3*x+0]=J*K,c[3*x+1]=pe*K,c[3*x+2]=Te*K}let h=new Int32Array(s),u=new Float64Array(s*3),p=1;for(;p<s*2;)p<<=1;let d=p-1,g=new Int32Array(p),M=0;for(let x=0;x<s;x++){let b=3*x,E=Math.trunc(n[b+0]*o),v=Math.trunc(n[b+1]*o),y=Math.trunc(n[b+2]*o),R=(Math.imul(E,73856093)^Math.imul(v,19349663)^Math.imul(y,83492791))&d;for(;;){let A=g[R];if(A===0){let U=3*M;u[U+0]=E,u[U+1]=v,u[U+2]=y,g[R]=M+1,h[x]=M++;break}let L=3*(A-1);if(u[L+0]===E&&u[L+1]===v&&u[L+2]===y){h[x]=A-1;break}R=R+1&d}}let f=new Int32Array(M+1);for(let x=0;x<s;x++)f[h[x]+1]++;for(let x=0;x<M;x++)f[x+1]+=f[x];let m=new Int32Array(s),_=f.slice(0,M);for(let x=0;x<l;x++){let b=3*x;m[_[h[b+0]]++]=x,m[_[h[b+1]]++]=x,m[_[h[b+2]]++]=x}let S=new Float32Array(s*3);for(let x=0;x<l;x++){let b=3*x,E=c[b+0],v=c[b+1],y=c[b+2];for(let R=0;R<3;R++){let A=b+R,L=h[A],U=0,G=0,N=0;for(let q=f[L],O=f[L+1];q<O;q++){let Y=3*m[q],B=c[Y+0],H=c[Y+1],J=c[Y+2];E*B+v*H+y*J>a&&(U+=B,G+=H,N+=J)}let W=1/(Math.sqrt(U*U+G*G+N*N)||1);S[3*A+0]=U*W,S[3*A+1]=G*W,S[3*A+2]=N*W}}return t.setAttribute("normal",new Lt(S,3,!1)),t}function Yd(r,e,t=new Map){let i=r.isInterleavedBufferAttribute,s=i?r.data:r,n=i?s.stride:r.itemSize,a=i?t.get(s):void 0;if(a===void 0){let l=new s.array.constructor(e.length*n);for(let c=0;c<e.length;c++)for(let h=0;h<n;h++)l[c*n+h]=s.array[e[c]*n+h];a=i?new s.constructor(l,n,s.meshPerAttribute):new r.constructor(l,r.itemSize,r.normalized,r.meshPerAttribute),a.setUsage(s.usage),i&&t.set(s,a)}let o=i?new r.constructor(a,r.itemSize,r.offset,r.normalized):a;return o.name=r.name,i||(o.gpuType=r.gpuType),o}function Hh(r){let e=new Map,t=new Map,i=r.clone();return Wg(r,i,function(s,n){e.set(n,s),t.set(s,n)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let n=s,a=e.get(s),o=a.skeleton.bones;n.skeleton=a.skeleton.clone(),n.bindMatrix.copy(a.bindMatrix),n.skeleton.bones=o.map(function(l){return t.get(l)}),n.bind(n.skeleton,n.bindMatrix)}),i}function Wg(r,e,t){t(r,e);for(let i=0;i<r.children.length;i++)Wg(r.children[i],e.children[i],t)}var Vh=class extends mr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ip(t)}),this.register(function(t){return new rp(t)}),this.register(function(t){return new sp(t)}),this.register(function(t){return new pp(t)}),this.register(function(t){return new fp(t)}),this.register(function(t){return new mp(t)}),this.register(function(t){return new ap(t)}),this.register(function(t){return new op(t)}),this.register(function(t){return new lp(t)}),this.register(function(t){return new cp(t)}),this.register(function(t){return new tp(t)}),this.register(function(t){return new hp(t)}),this.register(function(t){return new np(t)}),this.register(function(t){return new dp(t)}),this.register(function(t){return new up(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new Wh(t,st.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wh(t,st.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new gp(t)})}load(e,t,i,s){let n=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=qr.extractUrlBase(e);a=qr.resolveURL(c,this.path)}else a=qr.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),n.manager.itemError(e),n.manager.itemEnd(e)},l=new Nn(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{n.parse(c,a,function(h){t(h),n.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let n,a={},o={},l=new TextDecoder;if(typeof e=="string")n=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Kg){try{a[st.KHR_BINARY_GLTF]=new vp(e)}catch(u){s&&s(u);return}n=JSON.parse(a[st.KHR_BINARY_GLTF].content)}else n=JSON.parse(l.decode(e));else n=e;if(n.asset===void 0||n.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Tp(n,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(n.extensionsUsed)for(let h=0;h<n.extensionsUsed.length;++h){let u=n.extensionsUsed[h],p=n.extensionsRequired||[];switch(u){case st.KHR_MATERIALS_UNLIT:a[u]=new ep;break;case st.KHR_DRACO_MESH_COMPRESSION:a[u]=new _p(n,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:a[u]=new xp;break;case st.KHR_MESH_QUANTIZATION:a[u]=new yp;break;default:p.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,n){i.parse(e,t,s,n)})}};function G1(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function zt(r,e,t){let i=r.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Qd=class{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let n=t[i];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let n=t.json,l=((n.extensions&&n.extensions[this.name]||{}).lights||[])[e],c,h=new Ae(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],gi);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ks(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new gr(h),c.distance=u;break;case"spot":c=new to(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Sr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,n=i.json.nodes[e],o=(n.extensions&&n.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},ep=class{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return _i}extendParams(e,t,i){let s=[];e.color=new Ae(1,1,1),e.opacity=1;let n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){let a=n.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],gi),e.opacity=a[3]}n.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",n.baseColorTexture,Tt))}return Promise.all(s)}},tp=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},ip=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return zt(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let n=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ee(n,n)}return Promise.all(s)}},rp=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return zt(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(s)}},sp=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){return zt(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},np=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return zt(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},ap=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){return zt(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let n=i.sheenColorFactor;t.sheenColor.setRGB(n[0],n[1],n[2],gi)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Tt)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},op=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return zt(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},lp=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){return zt(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let n=i.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(n[0],n[1],n[2],gi),Promise.all(s)}},cp=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){return zt(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},hp=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){return zt(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let n=i.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(n[0],n[1],n[2],gi),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Tt)),Promise.all(s)}},up=class{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){return zt(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}},dp=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return zt(this.parser,e,this.name)!==null?yi:null}extendMaterialParams(e,t){let i=zt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},pp=class{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let n=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,n.source,a)}},fp=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,n=s.textures[e];if(!n.extensions||!n.extensions[t])return null;let a=n.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},mp=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,n=s.textures[e];if(!n.extensions||!n.extensions[t])return null;let a=n.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},Wh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],n=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return n.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,p=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,p,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,p,s.mode,s.filter),d})})}else return null}},gp=class{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==Gi.TRIANGLES&&c.mode!==Gi.TRIANGLE_STRIP&&c.mode!==Gi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],p=c[0].count,d=[];for(let g of u){let M=new Be,f=new C,m=new qt,_=new C(1,1,1),S=new Os(g.geometry,g.material,p);for(let b=0;b<p;b++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,b),l.SCALE&&_.fromBufferAttribute(l.SCALE,b),S.setMatrixAt(b,M.compose(f,m,_));let x=null;for(let b in l)if(b==="_COLOR_0"){let E=l[b];S.instanceColor=new Ji(E.array,E.itemSize,E.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(x===null){let v=S.geometry;x=new ut,x.name=v.name;for(let y in v.attributes)x.setAttribute(y,v.attributes[y]);for(let y in v.morphAttributes)x.morphAttributes[y]=v.morphAttributes[y];v.index!==null&&x.setIndex(v.index),x.morphTargetsRelative=v.morphTargetsRelative;for(let y of v.groups)x.addGroup(y.start,y.count,y.materialIndex);v.boundingBox!==null&&(x.boundingBox=v.boundingBox.clone()),v.boundingSphere!==null&&(x.boundingSphere=v.boundingSphere.clone()),x.drawRange.start=v.drawRange.start,x.drawRange.count=v.drawRange.count,x.userData=Object.assign({},v.userData),S.geometry=x}let E=l[b];x.setAttribute(b,new Ji(E.array,E.itemSize,E.normalized))}Et.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),d.push(S)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Kg="glTF",Do=12,jg={JSON:1313821514,BIN:5130562},vp=class{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Do),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Kg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Do,n=new DataView(e,Do),a=0;for(;a<s;){let o=n.getUint32(a,!0);a+=4;let l=n.getUint32(a,!0);if(a+=4,l===jg.JSON){let c=new Uint8Array(e,Do+a,o);this.content=i.decode(c)}else if(l===jg.BIN){let c=Do+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},_p=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,n=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Sp[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Sp[h]||h.toLowerCase();if(a[h]!==void 0){let p=i.accessors[e.attributes[h]],d=$n[p.componentType];c[u]=d.name,l[u]=p.normalized===!0}}return t.getDependency("bufferView",n).then(function(h){return new Promise(function(u,p){s.decodeDracoFile(h,function(d){for(let g in d.attributes){let M=d.attributes[g],f=l[g];f!==void 0&&(M.normalized=f)}u(d)},o,c,gi,p)})})}},xp=class{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},yp=class{constructor(){this.name=st.KHR_MESH_QUANTIZATION}},jh=class extends pr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,n=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[n+a];return t}interpolate_(e,t,i,s){let n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(i-t)/h,p=u*u,d=p*u,g=e*c,M=g-c,f=-2*d+3*p,m=d-p,_=1-f,S=m-p+u;for(let x=0;x!==o;x++){let b=a[M+x+o],E=a[M+x+l]*h,v=a[g+x+o],y=a[g+x]*h;n[x]=_*b+S*E+f*v+m*y}return n}},H1=new qt,Mp=class extends jh{interpolate_(e,t,i,s){let n=super.interpolate_(e,t,i,s);return H1.fromArray(n).normalize().toArray(n),n}},Gi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$n={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xg={9728:Dt,9729:Kt,9984:zc,9985:Gn,9986:Ws,9987:zi},qg={33071:Di,33648:yn,10497:ci},Zd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},V1={CUBICSPLINE:void 0,LINEAR:Ns,STEP:Is},Jd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function W1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Bt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vr})),r.DefaultMaterial}function Xs(r,e,t){for(let i in t.extensions)r[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Sr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function j1(r,e,t){let i=!1,s=!1,n=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(n=!0),i&&s&&n)break}if(!i&&!s&&!n)return Promise.resolve(r);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let p=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(p)}if(s){let p=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(p)}if(n){let p=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(p)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],p=c[2];return i&&(r.morphAttributes.position=h),s&&(r.morphAttributes.normal=u),n&&(r.morphAttributes.color=p),r.morphTargetsRelative=!0,r})}function X1(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)r.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function q1(r){let e,t=r.extensions&&r.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$d(t.attributes):e=r.indices+":"+$d(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,s=r.targets.length;i<s;i++)e+=":"+$d(r.targets[i]);return e}function $d(r){let e="",t=Object.keys(r).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+r[t[i]]+";";return e}function bp(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Y1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var K1=new Be,Tp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new G1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,n=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,n=o.indexOf("Firefox")>-1,a=n?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||i&&s<17||n&&a<98?(this.textureLoader=new Qa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new io(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nn(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,n=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return Xs(n,o,s),Sr(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,n=t.length;s<n;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,n=e.length;s<n;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),n=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())n(h,o.children[c])};return n(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let n=e(t[s]);n&&i.push(n)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(n){return n.loadNode&&n.loadNode(t)});break;case"mesh":s=this._invokeOne(function(n){return n.loadMesh&&n.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(n){return n.loadBufferView&&n.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(n){return n.loadMaterial&&n.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(n){return n.loadTexture&&n.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(n){return n.loadAnimation&&n.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(n,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(n,a){i.load(qr.resolveURL(t.uri,s.path),n,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,n=t.byteOffset||0;return i.slice(n,n+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Zd[s.type],o=$n[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Lt(c,a,l))}let n=[];return s.bufferView!==void 0?n.push(this.getDependency("bufferView",s.bufferView)):n.push(null),s.sparse!==void 0&&(n.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(n).then(function(a){let o=a[0],l=Zd[s.type],c=$n[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,p=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,M,f;if(d&&d!==u){let m=Math.floor(p/d),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,S=t.cache.get(_);S||(M=new c(o,m*d,s.count*d/h),S=new as(M,d/h),t.cache.add(_,S)),f=new Gr(S,l,p%d/h,g)}else o===null?M=new c(s.count*l):M=new c(o,p,s.count*l),f=new Lt(M,l,g);if(s.sparse!==void 0){let m=Zd.SCALAR,_=$n[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,b=new _(a[1],S,s.sparse.count*m),E=new c(a[2],x,s.sparse.count*l);o!==null&&(f=new Lt(f.array.slice(),f.itemSize,f.normalized)),f.normalized=!1;for(let v=0,y=b.length;v<y;v++){let R=b[v];if(f.setX(R,E[v*l]),l>=2&&f.setY(R,E[v*l+1]),l>=3&&f.setZ(R,E[v*l+2]),l>=4&&f.setW(R,E[v*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}f.normalized=g}return f})}loadTexture(e){let t=this.json,i=this.options,n=t.textures[e].source,a=t.images[n],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,n,o)}loadTextureImage(e,t,i){let s=this,n=this.json,a=n.textures[e],o=n.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let p=(n.samplers||{})[a.sampler]||{};return h.magFilter=Xg[p.magFilter]||Kt,h.minFilter=Xg[p.minFilter]||zi,h.wrapS=qg[p.wrapS]||ci,h.wrapT=qg[p.wrapT]||ci,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Dt&&h.minFilter!==Kt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,n=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(p=>p.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=i.getDependency("bufferView",a.bufferView).then(function(p){return new Promise(function(d,g){t.parse(p,d,g)})});else{if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(p){c=!0;let d=new Blob([p],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(p){return new Promise(function(d,g){let M=d;t.isImageBitmapLoader===!0&&(M=function(f){let m=new Yt(f);m.needsUpdate=!0,d(m)}),t.load(qr.resolveURL(p,n.path),M,void 0,g)})})}let u=h.then(function(p){return c===!0&&o.revokeObjectURL(l),Sr(p,a),p.userData.mimeType=a.mimeType||Y1(a.uri),p}).catch(function(p){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),p});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let n=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),n.extensions[st.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=n.associations.get(a);a=n.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),n.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,n=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Cn,ri.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Rn,ri.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||n||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),n&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),n&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Bt}loadMaterial(e){let t=this,i=this.json,s=this.extensions,n=i.materials[e],a,o={},l=n.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){let u=s[st.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,n,t))}else{let u=n.pbrMetallicRoughness||{};if(o.color=new Ae(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let p=u.baseColorFactor;o.color.setRGB(p[0],p[1],p[2],gi),o.opacity=p[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,o)})))}n.doubleSided===!0&&(o.side=Oi);let h=n.alphaMode||Jd.OPAQUE;if(h===Jd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Jd.MASK&&(o.alphaTest=n.alphaCutoff!==void 0?n.alphaCutoff:.5)),n.normalTexture!==void 0&&a!==_i&&(c.push(t.assignTexture(o,"normalMap",n.normalTexture)),o.normalScale=new ee(1,1),n.normalTexture.scale!==void 0)){let u=n.normalTexture.scale;o.normalScale.set(u,u)}if(n.occlusionTexture!==void 0&&a!==_i&&(c.push(t.assignTexture(o,"aoMap",n.occlusionTexture)),n.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=n.occlusionTexture.strength)),n.emissiveFactor!==void 0&&a!==_i){let u=n.emissiveFactor;o.emissive=new Ae().setRGB(u[0],u[1],u[2],gi)}return n.emissiveTexture!==void 0&&a!==_i&&c.push(t.assignTexture(o,"emissiveMap",n.emissiveTexture,Tt)),Promise.all(c).then(function(){let u=new a(o);return n.name&&(u.name=n.name),Sr(u,n),t.associations.set(u,{materials:e}),n.extensions&&Xs(s,u,n),u})}createUniqueName(e){let t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function n(o){return i[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Yg(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=q1(c),u=s[h];if(u)a.push(u.promise);else{let p;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?p=n(c):p=Yg(new ut,c,t),c.mode===Gi.TRIANGLE_STRIP?p=p.then(d=>Gh(d,Mo)):c.mode===Gi.TRIANGLE_FAN&&(p=p.then(d=>Gh(d,Vn))),s[h]={primitive:c,promise:p},a.push(p)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,n=i.meshes[e],a=n.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?W1(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let M=h[d],f=a[d],m,_=c[d];if(f.mode===Gi.TRIANGLES||f.mode===Gi.TRIANGLE_STRIP||f.mode===Gi.TRIANGLE_FAN||f.mode===void 0){let S=n.isSkinnedMesh===!0,x=M.hasAttribute("skinIndex")&&M.hasAttribute("skinWeight");S&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=S&&x?new Pa(M,_):new Qe(M,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(f.mode===Gi.LINES)m=new Na(M,_);else if(f.mode===Gi.LINE_STRIP)m=new Fs(M,_);else if(f.mode===Gi.LINE_LOOP)m=new Da(M,_);else if(f.mode===Gi.POINTS)m=new Ua(M,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(m.geometry.morphAttributes).length>0&&X1(m,n),m.name=t.createUniqueName(n.name||"mesh_"+e),Sr(m,n),f.extensions&&Xs(s,m,f),t.assignFinalMaterial(m),u.push(m)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return n.extensions&&Xs(s,u[0],n),u[0];let p=new We;n.extensions&&Xs(s,p,n),t.associations.set(p,{meshes:e});for(let d=0,g=u.length;d<g;d++)p.add(u[d]);return p})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Xt(So.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Xr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Sr(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,n=t.joints.length;s<n;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let n=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let p=new Be;n!==null&&p.fromArray(n.array,c*16),l.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new La(o,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],n=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,p=s.channels.length;u<p;u++){let d=s.channels[u],g=s.samplers[d.sampler],M=d.target,f=M.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;M.node!==void 0&&(a.push(this.getDependency("node",f)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",_)),c.push(g),h.push(M))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let p=u[0],d=u[1],g=u[2],M=u[3],f=u[4],m=[];for(let S=0,x=p.length;S<x;S++){let b=p[S],E=d[S],v=g[S],y=M[S],R=f[S];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let A=i._createAnimationTracks(b,E,v,y,R);if(A)for(let L=0;L<A.length;L++)m.push(A[L])}let _=new hs(n,void 0,m);return Sr(_,s),_})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(n){let a=i._getNodeRef(i.meshCache,s.mesh,n);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],n=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([n,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],p=c[2];p!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(p,K1)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,g=u[0];h.pivot=new C().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let n=t.nodes[e],a=n.name?s.createUniqueName(n.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),n.camera!==void 0&&o.push(s.getDependency("camera",n.camera).then(function(c){return s._getNodeRef(s.cameraCache,n.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(n.isBone===!0?h=new An:c.length>1?h=new We:c.length===1?h=c[0]:h=new Et,h!==c[0])for(let u=0,p=c.length;u<p;u++)h.add(c[u]);if(n.name&&(h.userData.name=n.name,h.name=a),Sr(h,n),n.extensions&&Xs(i,h,n),n.matrix!==void 0){let u=new Be;u.fromArray(n.matrix),h.applyMatrix4(u)}else n.translation!==void 0&&h.position.fromArray(n.translation),n.rotation!==void 0&&h.quaternion.fromArray(n.rotation),n.scale!==void 0&&h.scale.fromArray(n.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(n.mesh!==void 0&&s.meshCache.refs[n.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,n=new We;i.name&&(n.name=s.createUniqueName(i.name)),Sr(n,i),i.extensions&&Xs(t,n,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let p=l[h];p.parent!==null?n.add(Hh(p)):n.add(p)}let c=h=>{let u=new Map;for(let[p,d]of s.associations)(p instanceof ri||p instanceof Yt)&&u.set(p,d);return h.traverse(p=>{let d=s.associations.get(p);d!=null&&u.set(p,d)}),u};return s.associations=c(n),n})}_createAnimationTracks(e,t,i,s,n){let a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}ps[n.path]===ps.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(ps[n.path]){case ps.weights:h=Wr;break;case ps.rotation:h=fr;break;case ps.translation:case ps.scale:h=jr;break;default:i.itemSize===1?h=Wr:h=jr;break}let u=s.interpolation!==void 0?V1[s.interpolation]:Ns,p=this._getArrayFromAccessor(i);for(let d=0,g=l.length;d<g;d++){let M=new h(l[d]+"."+ps[n.path],t.array,p,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),a.push(M)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=bp(t.constructor),s=new Float32Array(t.length);for(let n=0,a=t.length;n<a;n++)s[n]=t[n]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof fr?Mp:jh;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Z1(r,e,t){let i=e.attributes,s=new ii;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),o.normalized){let h=bp($n[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let n=e.targets;if(n!==void 0){let o=new C,l=new C;for(let c=0,h=n.length;c<h;c++){let u=n[c];if(u.POSITION!==void 0){let p=t.json.accessors[u.POSITION],d=p.min,g=p.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),p.normalized){let M=bp($n[p.componentType]);l.multiplyScalar(M)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}r.boundingBox=s;let a=new vi;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,r.boundingSphere=a}function Yg(r,e,t){let i=e.attributes,s=[];function n(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(let a in i){let o=Sp[a]||a.toLowerCase();o in r.attributes||s.push(n(i[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});s.push(a)}return et.workingColorSpace!==gi&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Sr(r,e),Z1(r,e,t),Promise.all(s).then(function(){return e.targets!==void 0?j1(r,e.targets,t):r})}var J1=new Vh,Ep={},Uo={},$g={},Zg=new Map,Oo=["male-a","male-b","male-c","male-d","male-e","male-f","female-a","female-b","female-c","female-d","female-e","female-f"],Jg=r=>new Promise((e,t)=>J1.load(r,e,void 0,t));async function Qg(r){let e=new URL("assets/models/",document.baseURI).href,t=window.BB_MODEL_EXT||".glb",i=await Jg(e+"props"+t);i.scene.updateMatrixWorld(!0);for(let n of[...i.scene.children]){n.removeFromParent(),n.position.set(0,0,0);let a=new ii().setFromObject(n),o=a.getSize(new C);Uo[n.name]={w:o.x,h:o.y,d:o.z,minY:a.min.y,cx:(a.min.x+a.max.x)/2,cz:(a.min.z+a.max.z)/2},n.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0)}),Ep[n.name]=n}r&&r(.6);let s=0;await Promise.all(Oo.map(async n=>{let a=await Jg(e+"char-"+n+t);a.scene.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.frustumCulled=!1)}),$g[n]={scene:a.scene,clips:a.animations},s++,r&&r(.6+.4*s/Oo.length)}))}var Rt=r=>Uo[r];function gt(r){let e=Ep[r];if(!e)return console.warn("mod\xE8le manquant",r),new We;let t=e.clone();return t.name=r,t}function wt(r,e,t={}){var n,a,o,l;let i=gt(e),s=t.s!=null?t.s:t.w?t.w/Math.max(Uo[e].w,Uo[e].d):1;return i.scale.set((n=t.sx)!=null?n:s,(a=t.sy)!=null?a:s,(o=t.sz)!=null?o:s),i.position.set(t.x||0,t.base!==void 0?t.base-Uo[e].minY*((l=t.sy)!=null?l:s):t.y||0,t.z||0),t.ry&&(i.rotation.y=t.ry),t.rx&&(i.rotation.x=t.rx),t.static&&(i.userData.static=!0),r.add(i),i}function Hi(r,e,t){let i=r+"|"+(t||e),s=Zg.get(i);if(!s){s=Ep[r].clone();let a=new Ae(e),o=new Map;s.traverse(l=>{if(l.isMesh){let c=l.material;if(!o.has(c)){let h=c.clone();h.color.multiply(a),o.set(c,h)}l.material=o.get(c)}}),Zg.set(i,s)}let n=s.clone();return n.name=r,n}function e0(r){let e=[],t=new Map;return r.traverse(i=>{if(i.isMesh){let s=i.material;if(!t.has(s)){let n=s.clone();t.set(s,n),e.push(n)}i.material=t.get(s)}}),e}function wp(r,e=1.62){let t=$g[r],i=Hh(t.scene),s=new We;i.scale.setScalar(e/.72),s.add(i);let n=new Fn(i),a={};for(let c of t.clips)a[c.name]=n.clipAction(c);let o=null,l={g:s,mixer:n,actions:a,play(c,h=.2,u=1){let p=a[c];if(!p||o===p){p&&(p.timeScale=u);return}p.reset().setEffectiveTimeScale(u).setEffectiveWeight(1).play(),o&&o.crossFadeTo(p,h,!1),o=p}};return n.update(Math.random()*2),l}function t0(r,e){let t=new Map;r.updateMatrixWorld(!0);let i=[];r.traverse(n=>{if(!n.isMesh||n.userData.noMerge)return;let a=n,o=!0;for(;a&&a!==r;){if(a.userData.dynamic||a.userData.id){o=!1;break}a=a.parent}if(!o)return;let l=n.material.uuid+(n.castShadow?"c":"")+(n.receiveShadow?"r":""),c=n.geometry.clone();c.applyMatrix4(n.matrixWorld);for(let h of Object.keys(c.attributes))["position","normal","uv"].includes(h)||c.deleteAttribute(h);c.attributes.uv||c.setAttribute("uv",new Lt(new Float32Array(c.attributes.position.count*2),2)),c.attributes.normal||c.computeVertexNormals(),c=c.index?c.toNonIndexed():c,t.has(l)||t.set(l,{mat:n.material,cast:n.castShadow,recv:n.receiveShadow,geos:[]}),t.get(l).geos.push(c),i.push(n)}),i.forEach(n=>n.removeFromParent());let s=new We;for(let n of t.values()){let a=e.mergeGeometries(n.geos,!1);if(!a)continue;let o=new Qe(a,n.mat);o.castShadow=n.cast,o.receiveShadow=n.recv,o.matrixAutoUpdate=!1,s.add(o)}return r.add(s),s}var Qn=(r,e,t)=>{let i=Rt(e),s=t/Math.max(i.w,i.d);return r.scale.setScalar(s),r.position.y=-i.minY*s,s},$1=r=>{let e=new We;return e.add(r),e},i0={},Q1=r=>i0[r]||(i0[r]=new Bt({color:r,roughness:.2})),eb=new Vr(1,10,8),tb={bun:{m:"food_ingredient_bun_bottom",w:.2,h:.05},top:{m:"food_ingredient_bun_top",w:.2,h:.075},patty:{m:"food_ingredient_burger_cooked",w:.18,h:.04},cheese:{m:"food_ingredient_cheese_slice",w:.22,h:.012},maroilles:{m:"food_ingredient_cheese_slice",w:.21,h:.014,tint:"#ff9a3c"},lettuce:{m:"food_ingredient_lettuce_slice",w:.23,h:.012},tomato:{m:"food_ingredient_tomato_slice",w:.17,h:.014},onion:{m:"food_ingredient_onion_rings",w:.17,h:.012}};function r0(r,e){if(r==="bacon"){let n=new We;return[-.05,0,.05].forEach((a,o)=>{let l=gt("f_bacon"),c=.2/Rt("f_bacon").d;l.scale.setScalar(c),l.position.set(a,-Rt("f_bacon").minY*c,0),l.rotation.y=(o-1)*.12,n.add(l)}),n.rotation.y=e*1.3,[n,.012]}if(["ketchup","mayo","mustard"].includes(r)){let n={ketchup:"#b5170e",mayo:"#f7efcf",mustard:"#e9b80d"}[r],a=new We;for(let o=0;o<6;o++){let l=o/6*Math.PI*2+e,c=.02+(o*37+e*11)%10/10*.05,h=new Qe(eb,Q1(n));h.scale.set(.016,.005,.016),h.position.set(Math.cos(l)*c,.003,Math.sin(l)*c),a.add(h)}return[a,.006]}let t=tb[r];if(!t)return[new We,0];let i=t.tint?Hi(t.m,t.tint):gt(t.m);Qn(i,t.m,t.w);let s=$1(i);return s.rotation.y=e*1.7,[s,t.h]}function Ap(r){let e=new We,t=0,i=0;return r.forEach(s=>{let n=s==="top"?"top":s,[a,o]=r0(n,++i);a.position.y+=t,e.add(a),t+=o}),e}function ib(r){let e=new We;return[[-.03,0,.1],[.03,.01,.05],[0,-.03,.14],[0,.025,.2],[-.04,.03,.2]].forEach(([t,i,s],n)=>{let a=r?Hi("food_ingredient_potato_mashed",r):gt("food_ingredient_potato_mashed"),o=.055/Rt("food_ingredient_potato_mashed").w;a.scale.setScalar(o),a.position.set(t,.09+(n>2?.045:0),i),a.rotation.y=n*1.3,e.add(a)}),e}function Rp(r){let e=new We;if(r==="mayo"){let n=gt("jar_A_small");return Qn(n,"jar_A_small",.075),e.add(n),e}let t=r==="ketchup"?"ketchup":"mustard",i=gt(t),s=.18/Rt(t).h;return i.scale.setScalar(s),e.add(i),e}function Cp(r,e){let t=new We;switch(r){case"bun":{let i=gt("food_ingredient_bun");Qn(i,"food_ingredient_bun",.2),t.add(i);break}case"raw":{let i=gt("food_ingredient_burger_uncooked");Qn(i,"food_ingredient_burger_uncooked",.18),t.add(i);break}case"patty":{let i=gt("food_ingredient_burger_cooked");Qn(i,"food_ingredient_burger_cooked",.18),t.add(i);break}case"burnt":{let i=gt("food_ingredient_burger_trash");Qn(i,"food_ingredient_burger_trash",.18),t.add(i);break}case"rawbacon":case"bacon":case"burntbacon":{[-.045,0,.045].forEach((i,s)=>{let n=r==="rawbacon"?gt("f_bacon-raw"):r==="bacon"?gt("f_bacon"):Hi("f_bacon","#3a2a22"),a=.2/Rt("f_bacon").d;n.scale.setScalar(a),n.position.set(i,-Rt("f_bacon").minY*a,0),n.rotation.y=(s-1)*.1,t.add(n)});break}case"lettuce":case"tomato":case"cheese":case"onion":case"maroilles":{let[i]=r0(r,1);t.add(i);break}case"frozen":{let i=Hi("f_bag","#a8cdf5","frozen"),s=.22/Rt("f_bag").h;i.scale.setScalar(s),t.add(i);break}case"nugfrozen":{let i=Hi("f_bag","#ffcf8a","nugfrozen"),s=.22/Rt("f_bag").h;i.scale.setScalar(s),t.add(i);break}case"fries":{let i=gt("f_fries"),s=.2/Rt("f_fries").h;i.scale.setScalar(s),t.add(i);break}case"charred":{let i=Hi("f_fries","#4a3a2a","charred"),s=.2/Rt("f_fries").h;i.scale.setScalar(s),t.add(i);break}case"nuggets":case"charnug":{let i=gt("f_fries-empty"),s=.13/Rt("f_fries-empty").h;i.scale.setScalar(s),t.add(i),t.add(ib(r==="charnug"?"#5a4030":null));break}case"cup":{let i=gt("f_cup"),s=.14/Rt("f_cup").h;i.scale.setScalar(s),t.add(i);break}case"soda":{let i=gt("f_soda"),s=.22/Rt("f_soda").h;i.scale.setScalar(s),t.add(i);break}case"shake":{let i=gt("f_frappe"),s=.25/Rt("f_frappe").h;i.scale.setScalar(s),t.add(i);break}case"sauce":t.add(Rp(e.k));break;case"burger":t.add(Ap(e.c));break}return t}var Pp=r=>r?r.t==="burger"?"B"+r.c.join("."):r.t==="sauce"?"S"+r.k:r.t:"",Fo=Pp,Lp=r=>r?r[0]==="B"?{t:"burger",c:r.slice(1).split(".")}:r[0]==="S"?{t:"sauce",k:r.slice(1)}:{t:r}:null;function Ip(r,e,t,i,s,n,a){r.beginPath(),r.arc(e,t,i,0,7),s&&(r.fillStyle=s,r.fill()),n&&(r.strokeStyle=n,r.lineWidth=a,r.stroke())}function Np(r,e,t,i,s){r.save(),r.translate(t,i),r.scale(s/26,s/26),r.lineWidth=2.5,r.strokeStyle="rgba(0,0,0,.55)";let n=o=>{r.fillStyle=o,r.beginPath(),r.moveTo(-8,-6),r.lineTo(8,-6),r.lineTo(9,18),r.lineTo(-9,18),r.closePath(),r.fill(),r.stroke(),r.beginPath(),r.moveTo(-5,-6),r.lineTo(0,-20),r.lineTo(5,-6),r.closePath(),r.fillStyle="#f4f4f4",r.fill(),r.stroke()},a=(o,l)=>{r.fillStyle="#ffffff",r.beginPath(),r.moveTo(-12,-12),r.lineTo(12,-12),r.lineTo(9,20),r.lineTo(-9,20),r.closePath(),r.fill(),r.stroke(),r.fillStyle=o,r.fillRect(-11,0,22,8),r.fillStyle="#ddd",r.fillRect(-13,-16,26,5),r.strokeRect(-13,-16,26,5),r.strokeStyle=o,r.lineWidth=3,r.beginPath(),r.moveTo(3,-16),r.lineTo(8,-25),r.stroke()};switch(e){case"bun":r.fillStyle="#e7a24c",r.beginPath(),r.ellipse(0,2,20,15,0,Math.PI,0),r.fill(),r.stroke(),r.fillRect(-20,2,40,7),r.strokeRect(-20,2,40,7),r.fillStyle="#fff6dc",[[-9,-5],[0,-9],[8,-4],[-3,-1]].forEach(([o,l])=>{r.beginPath(),r.ellipse(o,l,1.8,3,o,0,7),r.fill()});break;case"patty":Ip(r,0,0,18,"#6a3a1f","rgba(0,0,0,.55)",2.5),r.strokeStyle="#3a1a0a",r.lineWidth=3;for(let o=-1;o<=1;o++)r.beginPath(),r.moveTo(-11,o*7-3),r.lineTo(11,o*7+3),r.stroke();break;case"cheese":r.rotate(.25),r.fillStyle="#ffb52e",r.fillRect(-15,-15,30,30),r.strokeRect(-15,-15,30,30);break;case"maroilles":r.rotate(.15),r.fillStyle="#e8873a",r.fillRect(-15,-15,30,30),r.strokeRect(-15,-15,30,30),r.fillStyle="rgba(255,255,255,.3)",r.fillRect(-15,-15,30,8);break;case"lettuce":r.fillStyle="#6cc24a",r.beginPath();for(let o=0;o<=24;o++){let l=o/24*Math.PI*2,c=o%2?14:19;r.lineTo(Math.cos(l)*c,Math.sin(l)*c)}r.fill(),r.stroke();break;case"tomato":Ip(r,0,0,18,"#e23a2a","rgba(0,0,0,.55)",2.5),Ip(r,0,0,11,"#ff7b5c"),r.fillStyle="#ffe2a0";for(let o=0;o<5;o++){let l=o/5*6.28;r.beginPath(),r.ellipse(Math.cos(l)*6,Math.sin(l)*6,1.8,3,l,0,7),r.fill()}break;case"onion":r.lineWidth=4,r.strokeStyle="#c6a0c9",r.beginPath(),r.arc(-5,0,10,0,7),r.stroke(),r.beginPath(),r.arc(6,2,8,0,7),r.stroke();break;case"bacon":r.rotate(-.4),r.fillStyle="#d9603f",r.beginPath(),r.moveTo(-20,-6),r.quadraticCurveTo(-10,-12,0,-6),r.quadraticCurveTo(10,0,20,-6),r.lineTo(20,6),r.quadraticCurveTo(10,12,0,6),r.quadraticCurveTo(-10,0,-20,6),r.closePath(),r.fill(),r.stroke(),r.fillStyle="#f2b89c",r.fillRect(-18,-1,36,3);break;case"ketchup":n("#d62a1e");break;case"mayo":n("#f6ebc2");break;case"mustard":n("#f2c21b");break;case"fries":r.fillStyle="#ffd23a";for(let o=0;o<5;o++)r.fillRect(-11+o*4.5,-20,4,18),r.strokeRect(-11+o*4.5,-20,4,18);r.fillStyle="#e2372b",r.beginPath(),r.moveTo(-14,-5),r.lineTo(14,-5),r.lineTo(10,18),r.lineTo(-10,18),r.closePath(),r.fill(),r.stroke();break;case"nuggets":r.fillStyle="#e2372b",r.beginPath(),r.moveTo(-14,2),r.lineTo(14,2),r.lineTo(10,18),r.lineTo(-10,18),r.closePath(),r.fill(),r.stroke(),[[-7,-4],[5,-6],[-1,-12],[9,0]].forEach(([o,l])=>{r.fillStyle="#d9962f",r.beginPath(),r.ellipse(o,l,8,6,o,0,7),r.fill(),r.stroke()});break;case"soda":a("#e2372b");break;case"shake":a("#8a4a2a"),r.fillStyle="#fff",r.beginPath(),r.arc(0,-17,8,Math.PI,0),r.fill(),r.strokeStyle="rgba(0,0,0,.5)",r.lineWidth=2,r.stroke();break}r.restore()}var Bo={};["bun","patty","cheese","maroilles","lettuce","tomato","onion","bacon","ketchup","mayo","mustard","fries","nuggets","soda","shake"].forEach(r=>{let e=document.createElement("canvas");e.width=e.height=52,Np(e.getContext("2d"),r,26,26,22),Bo[r]=e.toDataURL()});var Ht=r=>r.toFixed(2).replace(".",",")+" \u20AC",br={bun:"Pain",raw:"Steak cru",patty:"Steak cuit",burnt:"Steak br\xFBl\xE9",lettuce:"Salade",tomato:"Tomate",cheese:"Cheddar",onion:"Oignons",maroilles:"Maroilles",rawbacon:"Bacon cru",bacon:"Bacon",burntbacon:"Bacon br\xFBl\xE9",ketchup:"Ketchup",mayo:"Mayo",mustard:"Moutarde",frozen:"Frites surgel\xE9es",fries:"Frites",charred:"Frites br\xFBl\xE9es",nugfrozen:"Nuggets surgel\xE9s",nuggets:"Nuggets",charnug:"Nuggets br\xFBl\xE9s",cup:"Gobelet vide",soda:"Soda",shake:"Milkshake",burger:"Burger",sauce:"Sauce",shakemix:"Mix milkshake"},s0=["patty","lettuce","tomato","cheese","onion","bacon","maroilles"];var qs=[{id:"classique",n:"Le Classique",f:["patty","lettuce","tomato","ketchup"],p:6.5,lvl:1},{id:"cheese",n:"Le Cheese",f:["patty","cheese","ketchup","mustard"],p:6.9,lvl:1},{id:"double",n:"Le Double",f:["patty","patty","cheese","cheese","ketchup"],p:8.9,lvl:1},{id:"chti",n:"Le Ch'ti",f:["patty","cheese","onion","mustard"],p:7.5,lvl:2},{id:"bouvines",n:"Le Bouvines",f:["patty","lettuce","tomato","onion","mayo"],p:7.9,lvl:2},{id:"bacon",n:"Le Bacon",f:["patty","cheese","bacon","ketchup"],p:8.4,lvl:3},{id:"maroilles",n:"Le Maroilles",f:["patty","maroilles","onion","mayo"],p:9.5,lvl:6}],Tr={fries:2.5,soda:2,nuggets:3.5,shake:3.5},Dp=[{id:"bun",n:"Pains",pack:12,cost:5,lvl:1,icon:"bun"},{id:"raw",n:"Steaks",pack:10,cost:11,lvl:1,icon:"patty"},{id:"lettuce",n:"Salade",pack:10,cost:4,lvl:1,icon:"lettuce"},{id:"tomato",n:"Tomates",pack:10,cost:4.5,lvl:1,icon:"tomato"},{id:"cheese",n:"Cheddar",pack:12,cost:6,lvl:1,icon:"cheese"},{id:"ketchup",n:"Ketchup",pack:20,cost:3,lvl:1,icon:"ketchup",unit:"doses"},{id:"mustard",n:"Moutarde",pack:20,cost:3,lvl:1,icon:"mustard",unit:"doses"},{id:"frozen",n:"Frites surgel\xE9es",pack:6,cost:7,lvl:1,icon:"fries",unit:"sachets"},{id:"cup",n:"Gobelets",pack:12,cost:4,lvl:1,icon:"soda"},{id:"onion",n:"Oignons",pack:10,cost:3.5,lvl:2,icon:"onion"},{id:"mayo",n:"Mayo",pack:20,cost:3,lvl:2,icon:"mayo",unit:"doses"},{id:"rawbacon",n:"Bacon",pack:10,cost:9,lvl:3,icon:"bacon"},{id:"nugfrozen",n:"Nuggets surgel\xE9s",pack:6,cost:8,lvl:4,icon:"nuggets",unit:"sachets"},{id:"shakemix",n:"Mix milkshake",pack:8,cost:8,lvl:5,icon:"shake",unit:"doses"},{id:"maroilles",n:"Maroilles",pack:8,cost:13,lvl:6,icon:"maroilles"}],Zr=Object.fromEntries(Dp.map(r=>[r.id,r])),n0={bun:24,raw:18,lettuce:14,tomato:14,cheese:14,ketchup:30,mustard:30,frozen:10,cup:16},Xh=8,fs=[0,90,230,430,690,1010,1400,1880,2460,3150],Up=fs.length,qh={2:{t:"Oignons et mayo",d:"Nouveaux burgers : Le Ch\u2019ti et Le Bouvines."},3:{t:"Bacon sur la plancha",d:"Nouveau burger : Le Bacon."},4:{t:"Nuggets \xE0 la friteuse",d:"Les clients commandent aussi des nuggets."},5:{t:"Machine \xE0 milkshake",d:"Les clients peuvent prendre un milkshake."},6:{t:"Burger au Maroilles",d:"Le Maroilles, la fiert\xE9 du Nord."},7:{t:"Rush du midi",d:"Plus de clients : la pub fait son effet."},8:{t:"Clients exigeants",d:"Les commandes se complexifient."},9:{t:"R\xE9putation locale",d:"Les pourboires augmentent."},10:{t:"Ma\xEEtre burger",d:"Vous \xEAtes une l\xE9gende de Bouvines !"}},Er=r=>{let e=1;for(let t=0;t<fs.length;t++)r>=fs[t]&&(e=t+1);return e},Op=[{id:"grill",n:"Plancha plus grande",d:r=>r===0?"4 steaks \xE0 la fois \u2192 6":"6 steaks \xE0 la fois \u2192 8",costs:[70,150],icon:"patty"},{id:"fryer",n:"Troisi\xE8me panier",d:()=>"Une 3e cuve \xE0 la friteuse",costs:[90],icon:"fries"},{id:"machine",n:"Machines plus rapides",d:r=>"Soda et milkshake "+(r===0?"\u221225 %":"\u221245 %")+" de temps",costs:[50,120],icon:"soda"},{id:"deco",n:"Belle d\xE9co",d:r=>"Clients plus patients (+"+(r+1)*12+" %)",costs:[40,90,160],icon:"tomato"},{id:"ad",n:"Publicit\xE9",d:r=>"Plus de clients (+"+(r+1)*15+" %)",costs:[60,120,220],icon:"cheese"}],zo=10,ko=32,Ii=9,Jr=34,Go=3,Ho=5,a0=360,rr={x:2.5,z:7.3},ms={x:-2.6,z:2.5},gs={x:1,z:2.5},Yh=[{x:1,z:3.4},{x:2,z:3.8},{x:3,z:3.4},{x:3.9,z:3.9},{x:1.6,z:4.6}],Fp=[{x:-.8,z:-.6},{x:.8,z:-.6}];CanvasRenderingContext2D.prototype.roundRect||(CanvasRenderingContext2D.prototype.roundRect=function(r,e,t,i){this.rect(r,e,t,i)});var $e={inter:[],grill:[],fry:[],soda:[],shake:[],boards:[],tray:null,labels:{},gated:[],custLayer:null,tablet:null,deliveryBox:null,key:null,fryerG:null,grillG:null,hood:null},di=(r,e)=>(r.userData.id=e,$e.inter.push(r),r);function ea(r,e,t,i,s){let n=document.createElement("canvas");n.width=r,n.height=e,t(n.getContext("2d"),r,e);let a=new dr(n);return a.colorSpace=Tt,a.anisotropy=4,i&&(a.wrapS=a.wrapT=ci,a.repeat.set(i,s||i)),a}function rb(r,e,t,i,s,n){for(let a=0;a<i;a++)r.fillStyle=s[a%s.length],r.globalAlpha=Math.random()*n,r.fillRect(Math.random()*e,Math.random()*t,1+Math.random()*2,1+Math.random()*2);r.globalAlpha=1}function sb(){return ea(1024,740,(r,e,t)=>{r.fillStyle="#1f2f2a",r.fillRect(0,0,e,t),r.strokeStyle="#8a5530",r.lineWidth=28,r.strokeRect(0,0,e,t),rb(r,e,t,3e3,["#fff"],.06),r.fillStyle="#ffc72c",r.font="bold 54px Bungee,Impact,sans-serif",r.textAlign="center",r.fillText("RECETTES",e/2,82),r.textAlign="left",qs.slice(0,7).forEach((s,n)=>{let a=140+n*76;r.fillStyle="#fffaf0",r.font="bold 34px Rubik,Arial,sans-serif",r.fillText(s.n,44,a+12),["bun",...s.f.map(o=>o),"bun"].forEach((o,l)=>Np(r,o,380+l*58,a,24))}),r.fillStyle="rgba(255,255,255,.6)",r.font="24px Rubik,Arial,sans-serif",r.fillText("Pain \u2192 garnitures \u2192 sauces \u2192 pain. Frites, nuggets et boissons \xE0 part.",44,t-30)})}function o0(){return ea(1024,740,(r,e,t)=>{r.fillStyle="#141a1a",r.fillRect(0,0,e,t),r.fillStyle="#e2372b",r.fillRect(0,0,e,110),r.fillStyle="#fff",r.font="bold 58px Bungee,Impact,sans-serif",r.textAlign="center",r.fillText("MENU",e/2,78),r.textAlign="left",qs.forEach((i,s)=>{let n=170+s*64;r.fillStyle="#fffaf0",r.font="bold 36px Rubik,Arial,sans-serif",r.fillText(i.n,60,n),r.textAlign="right",r.fillStyle="#ffc72c",r.fillText(Ht(i.p),e-60,n),r.textAlign="left"}),r.fillStyle="#bbb",r.font="28px Rubik,Arial,sans-serif",r.fillText("Frites "+Ht(Tr.fries)+" \xB7 Nuggets "+Ht(Tr.nuggets),60,t-70),r.fillText("Soda "+Ht(Tr.soda)+" \xB7 Milkshake "+Ht(Tr.shake),60,t-30)})}function nb(){return ea(1024,256,(r,e,t)=>{r.clearRect(0,0,e,t),r.font="bold 120px Bungee,Impact,sans-serif",r.textAlign="center",r.textBaseline="middle",r.shadowColor="#ff3a2a",r.shadowBlur=40,r.fillStyle="#ff6a55",r.fillText("BOUVI'BURGER",e/2,t/2),r.shadowBlur=10,r.fillStyle="#ffe0d8",r.fillText("BOUVI'BURGER",e/2,t/2)})}function ab(){return ea(512,256,r=>{let e=r.createLinearGradient(0,0,0,256);e.addColorStop(0,"#a9d8f0"),e.addColorStop(.6,"#e8f4f2"),e.addColorStop(.62,"#7aa071"),e.addColorStop(1,"#5f8458"),r.fillStyle=e,r.fillRect(0,0,512,256),r.fillStyle="rgba(255,255,255,.7)",[[60,50],[200,30],[330,70],[450,40]].forEach(([t,i])=>{r.beginPath(),r.ellipse(t,i,40,12,0,0,7),r.fill()}),r.fillStyle="#4d6e48";for(let t=0;t<14;t++)r.beginPath(),r.arc(t*38+10,158,24,0,7),r.fill()})}function l0(r){return ea(256,192,r)}function c0(r,e,t,i){let s=ea(e,t,r),n=new hr(new Zi({map:s,transparent:!0,depthWrite:!1}));return n.scale.set(i,i*t/e,1),n.renderOrder=10,n.layers.set(1),n}function wr(r,e,t,i,s,n){let a=c0((o,l,c)=>{o.fillStyle="rgba(15,20,20,.82)",o.beginPath(),o.roundRect(4,4,l-8,c-8,24),o.fill(),o.fillStyle="#fffaf0",o.font="bold 52px Rubik,Arial,sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(e,l/2,c/2+2)},512,96,(t||.5)*.62);return a.position.set(i,s,n),r.add(a),a}function Vo(r,e,t,i,s,n,a=.5){let o=document.createElement("canvas");o.width=512,o.height=128;let l=new dr(o);l.colorSpace=Tt;let c=new hr(new Zi({map:l,transparent:!0,depthWrite:!1,toneMapped:!1}));return c.scale.set(a*.8,a*.2,1),c.position.set(i,s,n),c.renderOrder=10,c.layers.set(1),c.userData={c:o,t:l,name:t,last:null},r.add(c),$e.labels[e]=c,c}function h0(r,e){let t=$e.labels[r];if(!t||t.userData.last===e)return;t.userData.last=e;let i=t.userData.c.getContext("2d"),s=512,n=128;i.clearRect(0,0,s,n);let a=e<=0?"#e2372b":e<=3?"#f2a51c":"#3fb35f";i.fillStyle="rgba(15,20,20,.85)",i.beginPath(),i.roundRect(4,4,s-8,n-8,28),i.fill(),i.fillStyle=a,i.beginPath(),i.roundRect(s-150,14,132,n-28,20),i.fill(),i.fillStyle="#fffaf0",i.font="bold 44px Rubik,Arial,sans-serif",i.textAlign="left",i.textBaseline="middle",i.fillText(t.userData.name,24,n/2+2),i.fillStyle="#10201c",i.font="bold 58px Bungee,Impact,sans-serif",i.textAlign="center",i.fillText(e<=0?"0":"\xD7"+e,s-84,n/2+4),t.userData.t.needsUpdate=!0}function ob(r,e,t,i,s){let n=c0((a,o,l)=>{a.fillStyle="rgba(30,20,20,.88)",a.beginPath(),a.roundRect(4,4,o-8,l-8,24),a.fill(),a.fillStyle="#ffc72c",a.font="bold 44px Rubik,Arial,sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText("\u{1F512} "+e,o/2,l/2+2)},512,96,.5);return n.position.set(t,i,s),r.add(n),n}function Ys(r,e,t,i,s){let n=ob(s||me.scene,t,i[0],i[1],i[2]);$e.gated.push({lvl:r,objs:[].concat(e),ls:n})}function Wo(r,e,t,i,s,n,a,o){return wt(r,e,{x:t,y:0,z:i,sx:s,sy:a,sz:n,ry:o||0,static:!0})}function lb(r){for(let c=0;c<6;c++){for(let h=0;h<3;h++)wt(r,"floor_kitchen_styleB",{s:.5,x:-5+c*2,y:0,z:-3.85+h*2,static:!0});for(let h=0;h<3;h++)wt(r,"floor_kitchen",{s:.5,x:-5+c*2,y:0,z:2.15+h*2,static:!0})}[-4.5,-1.5,1.5,4.5].forEach(c=>wt(r,"wall",{s:.75,x:c,y:0,z:-4.85-.19,static:!0})),[-3.35,-.35,2.65,5.65].forEach(c=>{wt(r,"wall",{s:.75,x:-5.95-.19,y:0,z:c,ry:Math.PI/2,static:!0}),wt(r,"wall",{s:.75,x:5.95+.19,y:0,z:c,ry:-Math.PI/2,static:!0})});let e=7.05+.19;wt(r,"wall_window_closed",{sx:.75,sy:.75,sz:.75,x:-4.5,y:0,z:e,ry:Math.PI,static:!0}),wt(r,"wall_window_closed_curtains_red",{sx:1,sy:.75,sz:.75,x:-1,y:0,z:e,ry:Math.PI,static:!0}),wt(r,"wall_doorway",{s:.75,x:2.5,y:0,z:e,ry:Math.PI,static:!0}),wt(r,"wall_window_closed",{sx:.5,sy:.75,sz:.75,x:5,y:0,z:e,ry:Math.PI,static:!0});let t=new Qe(new xi(12.4,12.4),new Bt({color:"#ece6da",roughness:.95}));t.rotation.x=Math.PI/2,t.position.set(0,3,1.1),t.receiveShadow=!1,r.add(t),t.userData.noMerge=!0;let i=new Qe(new xi(40,10),new _i({map:ab(),toneMapped:!1}));i.position.set(0,3.2,14),i.rotation.y=Math.PI,i.userData.noMerge=!0,me.scene.add(i);let s=new Bt({color:"#ffffff",emissive:"#fff1d8",emissiveIntensity:1.5});[[-3.2,-2.4],[0,-2.4],[3.2,-2.4],[-3.2,4],[0,4],[3.2,4]].forEach(([c,h])=>{let u=new Qe(new xi(1.3,.5),s);u.rotation.x=Math.PI/2,u.position.set(c,2.99,h),u.userData.noMerge=!0,me.scene.add(u)});let n=new Qe(new xi(4,1),new _i({map:nb(),transparent:!0,toneMapped:!1}));n.position.set(-1.6,2.55,6.95),n.rotation.y=Math.PI,n.material.color.setScalar(1.6),me.scene.add(n);let a=new gr("#ff4a35",2.2,6,1.6);a.position.set(-1.6,2.2,6.2),me.scene.add(a);let o=new Qe(new xi(2.4,1.73),new Bt({map:o0(),emissive:"#fff",emissiveMap:o0(),emissiveIntensity:.35,roughness:.4}));o.position.set(5.74,1.95,4.2),o.rotation.y=-Math.PI/2,me.scene.add(o);let l=new Qe(new xi(2.7,1.95),new Bt({map:sb(),roughness:.8}));l.position.set(2.2,1.95,-4.82),me.scene.add(l),wt(r,"shelf_papertowel_decorated",{s:.45,x:-4.5,base:1.7,z:-4.62,static:!0}),wt(r,"dishrack_plates",{s:.5,x:-5.5,base:.92,z:-4.3}),[[-4.6,5.4],[4.5,5.6],[-4.6,3.6]].forEach(([c,h],u)=>{wt(r,u===1?"table_round_B_tablecloth_green":"table_round_B_tablecloth_red",{sx:.3,sy:.75,sz:.3,x:c,y:0,z:h,static:!0}),[[-.75,0,Math.PI/2],[.75,0,-Math.PI/2]].forEach(([p,d,g])=>wt(r,"chair_A",{s:.62,x:c+p,y:0,z:h+d,ry:g,static:!0}))}),[[-5.5,6.5],[5.5,6.5]].forEach(([c,h])=>wt(r,"n_pottedPlant",{s:2.4,x:c,y:0,z:h,static:!0})),wt(r,"n_rugDoormat",{s:2.8,x:2.5,y:0,z:6.6,static:!0}),wt(r,"n_lampRoundFloor",{s:1.7,x:5.5,y:0,z:3.1,static:!0})}function cb(r){let e=me.scene,t=.92,i=[-2.75,-1.85];for(let O=0;O<12;O++){let Y=-5.5+O;i.some(B=>Math.abs(B-Y)<.6)||Wo(r,"kitchencounter_straight_A",Y,-4.25,.5,.49,t)}for(let O=0;O<7;O++)Wo(r,"kitchencounter_straight_B",-2.6+O,-2.2,.5,.44,t);for(let O=0;O<11;O++)Wo(r,"kitchencounter_straight_B",-5.46+O*1.08,1.6,.54,.375,1);Wo(r,"kitchencounter_straight_A",5.5,-.8,.55,.45,t,-Math.PI/2),Wo(r,"kitchencounter_straight_A",5.5,.3,.55,.45,t,-Math.PI/2);let s=new We;s.position.set(-4.45,t,-4.25),e.add(s),$e.fryerG=s,[-.75,0,.75].forEach((O,Y)=>{let B=new We;B.position.set(O,0,0),s.add(B),wt(B,"pot_B",{s:.5,x:0,y:0,z:0});let H=new Qe(new ls(.205,.205,.006,24),new Bt({color:"#d99a2b",roughness:.08,metalness:.2,emissive:"#5a3300",emissiveIntensity:.45}));H.position.set(0,.2,0),B.add(H);let J=new We;J.position.set(0,.2,0),J.visible=!1,B.add(J);let pe=new We,Te=new Bt({color:"#f2e2b0",roughness:.55});for(let _e=0;_e<24;_e++){let re=new Qe(new Qi(.014,.1,.014),Te);re.position.set((Math.random()-.5)*.26,.02,(Math.random()-.5)*.22),re.rotation.set(Math.random()*1.4,Math.random()*3,0),re.castShadow=!0,pe.add(re)}let K=new We,te=[];for(let _e=0;_e<7;_e++){let re=gt("food_ingredient_potato_mashed"),xe=.075/Rt("food_ingredient_potato_mashed").w;re.scale.setScalar(xe),re.position.set((Math.random()-.5)*.25,.01+(_e>3?.04:0),(Math.random()-.5)*.2),re.rotation.y=_e*1.3,K.add(re)}let oe=e0(K);J.add(pe,K),$e.fry.push({v:B,basket:J,fries:pe,nug:K,fm:Te,nm:oe,i:Y})}),di(s,"fryer"),wr(s,"Friteuse",.5,0,.55,.3),Ys(99,[$e.fry[2].v],"3e panier : boutique",[-3.7,1.35,-4]);let n=new We;n.position.set(-2.75,0,-4.25),e.add(n),wt(n,"fridge_B",{s:.42}),di(n,"crate:frozen"),Vo(n,"frozen","Frites",0,1.4,.1);let a=new We;a.position.set(-1.85,0,-4.25),e.add(a),wt(a,"fridge_A",{s:.42}),di(a,"crate:nugfrozen"),Vo(a,"nugfrozen","Nuggets",0,1.4,.1),Ys(4,a,"Nuggets : niv. 4",[-1.85,1.2,-3.9]);let o=new We;o.position.set(-.15,t,-4.25),e.add(o),$e.grillG=o,[-.5,.5].forEach(O=>wt(o,"stove_multi_countertop",{s:.58,x:O,base:-.02,z:0}));let l=[-.75,-.25,.25,.75];[[0,1],[1,1],[2,1],[3,1],[1,0],[2,0],[0,0],[3,0]].forEach(([O,Y],B)=>{let H=new We;H.position.set(l[O],.17,Y?-.2:.2),o.add(H);let J=(te,oe)=>oe?Hi(te,oe):gt(te),pe=(te,oe,_e)=>{let re=_e/Math.max(Rt(oe).w,Rt(oe).d);return te.scale.setScalar(re),te.position.y=-Rt(oe).minY*re,te},Te={raw:pe(J("food_ingredient_burger_uncooked"),"food_ingredient_burger_uncooked",.17),patty:pe(J("food_ingredient_burger_cooked"),"food_ingredient_burger_cooked",.17),burnt:pe(J("food_ingredient_burger_trash"),"food_ingredient_burger_trash",.17)},K=(te,oe)=>{let _e=new We;return[-.04,0,.04].forEach(re=>{let xe=oe?Hi(te,oe):gt(te),Xe=.17/Rt(te).d;xe.scale.setScalar(Xe),xe.position.set(re,-Rt(te).minY*Xe,0),_e.add(xe)}),_e};Te.rawbacon=K("f_bacon-raw"),Te.bacon=K("f_bacon"),Te.burntbacon=K("f_bacon","#2a1c16"),Object.values(Te).forEach(te=>{te.visible=!1,H.add(te)}),H.visible=!1,$e.grill.push({p:H,variants:Te,idx:B,cur:null})}),di(o,"grill"),wr(o,"Plancha",.45,0,.6,.35),wt(o,"f_cooking-spatula",{s:.5,x:1.15,base:-.02,z:.15,ry:.3});let h=gt("extractorhood");h.scale.set(1,.3,.5),h.position.set(-.15,2-2*.3+.1,-4.45),h.userData.static=!0,r.add(h);let u=(O,Y,B,H,J,pe,Te=t,K)=>{let te=new We;te.position.set(B,Te,H),e.add(te);let oe=K?Hi(Y,K):gt(Y);return oe.scale.setScalar(pe),te.add(oe),di(te,"crate:"+O),Vo(te,O,J,0,.5,.12),te};u("raw","crate_steak",1.45,-4.25,"Steaks",.38),u("bun","crate_buns",2.35,-4.25,"Pains",.38);let p=u("rawbacon","crate_ham",3.25,-4.25,"Bacon",.38);Ys(3,p,"Bacon : niv. 3",[3.25,1.2,-4]);let d=new We;d.position.set(4.2,t,-4.3),e.add(d),wt(d,"icecream_machine",{s:.36}),di(d,"shake"),wr(d,"Milkshake",.5,0,1.2,.3),[-.17,.17].forEach(O=>{let Y=gt("f_frappe"),B=.22/Rt("f_frappe").h;Y.scale.setScalar(B),Y.position.set(O,-.02,.3),Y.visible=!1,d.add(Y),$e.shake.push({c:Y})}),Ys(5,d,"Milkshake : niv. 5",[4.2,1.4,-4]);let g=new We;g.position.set(5.1,t,-4.3),e.add(g),wt(g,"menu",{s:.85,x:0,y:0,z:0});let M=new Qe(new xi(.31,.4),new Bt({map:hb(0),emissive:"#fff",emissiveIntensity:1.1}));M.material.emissiveMap=M.material.map,M.position.set(0,.4,.075),M.rotation.x=-.08,g.add(M),$e.tablet=M,di(g,"tablet"),wr(g,"Commandes",.5,0,.95,.15);let f=new We;f.position.set(5.65,t,-4.3),e.add(f),wt(f,"pizzabox_stacked",{s:.22}),f.visible=!1,$e.deliveryBox=f,[["ketchup",-2.8],["mayo",-2.5],["mustard",-2.2]].forEach(([O,Y])=>{let B=new We;B.position.set(Y,t,-2.2),e.add(B);let H=Rp(O);B.add(H),di(B,"sauce:"+O),Vo(B,O,{ketchup:"Ketchup",mayo:"Mayo",mustard:"Moutarde"}[O],0,.5,0,.42),O==="mayo"&&Ys(2,B,"Mayo : niv. 2",[Y,.75+t,-2.2])}),[-1.4,-.35].forEach((O,Y)=>{let B=new We;B.position.set(O,t,-2.2),e.add(B);let H=gt("cuttingboard");H.scale.set(.3,.3,.3),B.add(H);let J=new We;J.position.y=.05,B.add(J),$e.boards.push(J),di(B,"board:"+Y),wr(B,"Planche "+(Y+1),.45,0,.5,.15)}),[["lettuce","crate_lettuce",.75,"Salade"],["tomato","crate_tomatoes",1.37,"Tomates"],["cheese","crate_cheese",1.99,"Cheddar"],["onion","crate_onions",2.61,"Oignons"],["maroilles","crate_cheese",3.23,"Maroilles"]].forEach(([O,Y,B,H])=>{let J=u(O,Y,B,-2.2,H,.3,t,O==="maroilles"?"#ff8f3a":null);J.children.forEach(pe=>{pe.isSprite&&(pe.position.y=.42)}),O==="onion"&&Ys(2,J,"Oignons : niv. 2",[B,1.2,-2.2]),O==="maroilles"&&Ys(6,J,"Maroilles : niv. 6",[B,1.2,-2.2])});let m=new We;m.position.set(-3.65,0,-1.15),e.add(m),wt(m,"n_trashcan",{s:2}),di(m,"trash"),wr(m,"Poubelle",.42,0,1.15,0);let _=new We;_.position.set(5.62,t,-.55),e.add(_);let S=Hi("n_kitchenFridgeSmall","#ff5a48");S.scale.setScalar(1.7),S.rotation.y=-Math.PI/2,S.position.set(.08,-.01,0),_.add(S),[-.18,.18].forEach(O=>{let Y=gt("f_soda"),B=.2/Rt("f_soda").h;Y.scale.setScalar(B),Y.position.set(-.3,-.02,O),Y.visible=!1,_.add(Y),$e.soda.push({c:Y})}),di(_,"soda"),wr(_,"Machine \xE0 soda",.6,-.3,.85,0);let x=new We;x.position.set(5.45,t,.55),e.add(x);for(let O=0;O<6;O++){let Y=gt("f_cup"),B=.14/Rt("f_cup").h;Y.scale.setScalar(B),Y.position.y=O*.03,x.add(Y)}di(x,"cups"),Vo(x,"cup","Gobelets",0,.55,0,.5);let b=new We;b.position.set(ms.x,1,1.55),e.add(b);let E=gt("n_kitchenMicrowave");E.scale.setScalar(1),E.position.y=0,b.add(E);let v=new Qe(new xi(.2,.12),new Bt({map:l0((O,Y,B)=>{O.fillStyle="#0f2a3a",O.fillRect(0,0,Y,B),O.fillStyle="#18a58f",O.fillRect(8,8,Y-16,34),O.fillStyle="#fff",O.font="bold 22px Rubik,Arial",O.fillText("CAISSE",18,34);for(let H=0;H<3;H++)for(let J=0;J<4;J++)O.fillStyle=["#e2372b","#ffc72c","#3fb35f","#6a7bd1"][J],O.fillRect(12+J*58,56+H*40,50,32)}),emissive:"#fff",emissiveIntensity:.8}));v.material.emissiveMap=v.material.map,v.position.set(0,.22,.18),v.rotation.x=-.35,b.add(v),wr(b,"Caisse",.4,0,.55,0);let y=new We;y.position.set(gs.x,1,1.55),e.add(y);let R=gt("cuttingboard");R.scale.set(.33,.12,.33),y.add(R);let A=new We;A.position.y=.03,y.add(A),y.userData.items=A,$e.tray=A,di(y,"tray"),wr(y,"Plateau",.4,0,.5,0);let L=new We;L.position.set(gs.x+.55,1,1.55),e.add(L);let U=new Bt({color:"#e8b84a",metalness:1,roughness:.2}),G=new Bt({color:"#3a3f43",metalness:.8,roughness:.35}),N=new Qe(new ls(.045,.05,.012,20),G);N.position.y=.006;let W=new Qe(new Vr(.045,20,10,0,Math.PI*2,0,Math.PI/2),U);W.position.y=.012;let q=new Qe(new Vr(.008,8,6),G);q.position.y=.06,[N,W,q].forEach(O=>{O.castShadow=!0,L.add(O)}),di(L,"bell"),wr(L,"Sonnette : servir",.6,0,.35,0)}function hb(r){return l0((e,t,i)=>{e.fillStyle="#0f2a3a",e.fillRect(0,0,t,i),e.fillStyle="#18a58f",e.fillRect(8,8,t-16,36),e.fillStyle="#fff",e.font="bold 22px Rubik,Arial",e.fillText("COMMANDES",18,35);for(let s=0;s<4;s++)e.fillStyle="rgba(255,255,255,.18)",e.fillRect(14,58+s*32,t-28,24)})}function ub(){let r=me.scene;r.add(new eo("#fffaf0","#7a6558",.35));let e=new ks("#fff3e0",1.25);e.position.set(2.5,8,4),e.target.position.set(0,0,-1),r.add(e.target),e.castShadow=!0,e.shadow.mapSize.set(ki?1024:2048,ki?1024:2048),Object.assign(e.shadow.camera,{left:-7.5,right:7.5,top:8,bottom:-8,near:1,far:20}),e.shadow.bias=-4e-4,e.shadow.normalBias=.03,e.shadow.radius=3,r.add(e),me.key=e,$e.key=e,[[0,2.7,-2.4,1.6],[0,2.7,4.2,1.2]].forEach(([t,i,s,n])=>{let a=new gr("#ffe9cc",n,12,1.5);a.position.set(t,i,s),r.add(a)})}function u0(){$e.inter.length=0,$e.grill.length=0,$e.fry.length=0,$e.soda.length=0,$e.shake.length=0,$e.boards.length=0,$e.gated.length=0;let r=me.scene;ub();let e=new We;r.add(e),lb(e),cb(e),e.traverse(t=>{t.isMesh&&(t.castShadow=t.castShadow!==!1,t.receiveShadow=!0)});try{t0(e,Kd)}catch(t){console.warn("fusion statique impossible",t)}$e.custLayer=new We,r.add($e.custLayer)}function jo(r,e){$e.gated.forEach(i=>{let s=i.lvl<=r;i.objs.forEach(n=>{n.visible=s}),i.ls.visible=!s&&i.lvl<90});let t=$e.gated.find(i=>i.lvl===99);if(t){let i=e.fryer>0;t.objs.forEach(s=>{s.visible=i}),t.ls.visible=!i}}var kp={};vf(kp,{G:()=>I,H:()=>ni,dayResult:()=>zp,freshDay:()=>Ko,fslots:()=>Yo,gslots:()=>qo,interact:()=>Zo,machineT:()=>vs,newCustomer:()=>p0,orderOf:()=>Ks,orderStock:()=>Jh,setG:()=>Ar,simulate:()=>Bp,trayDiff:()=>g0,trayMatch:()=>m0,unlocked:()=>Zh});var ni={say:()=>{},feedback:()=>{},broadcast:()=>{},openTablet:()=>{},ended:()=>{},mode:()=>"solo",li:()=>0},I=null,Ar=r=>{I=r},qo=r=>[4,6,8][r.grill]||4,Yo=r=>[2,3][r.fryer]||2,vs=(r,e)=>r*(1-([0,.25,.45][e.machine]||0));function Ko(r,e){let t={...r.ups};return{time:a0,money:r.money,money0:r.money,sales:0,spent:0,xpGain:0,level:Er(r.xp),day:r.day,xp:r.xp,ups:t,served:0,angry:0,ph:"play",g:1,cid:0,next:3,paused:!1,grill:Array(8).fill(null),fry:Array(3).fill(null),soda:[-1,-1],shake:[-1,-1],boards:[[],[]],tray:[],cust:[],stock:{...r.stock},deliveries:(r.pending||[]).map(i=>({...i,t:Math.min(i.t,4)})),msg2:{n:0,t:"",p:"",s:""},players:[0,1].map(i=>({x:Fp[i].x,z:Fp[i].z,yaw:0,pitch:-.25,h:null,on:i===0||e===2,walk:0}))}}var Zh=r=>{let e=Zr[r];return!e||e.lvl<=I.level},d0=r=>r.slice().sort().join();function Ks(r){let e=qs.find(t=>t.id===r.rid)||qs[0];return{n:e.n,f:e.f,fr:r.fr,nu:r.nu||0,dr:r.dr,sh:r.sh||0,price:e.p+r.fr*Tr.fries+(r.nu||0)*Tr.nuggets+r.dr*Tr.soda+(r.sh||0)*Tr.shake}}function p0(){let r=++I.cid,e=I.day===1&&I.served<2,t=qs.filter(n=>n.lvl<=I.level),i=e?t[Math.floor(Math.random()*2)]:t[Math.floor(Math.random()*t.length)],s=I.level>=5&&Math.random()<.35?1:0;I.cust.push({id:r,st:"in",x:rr.x,z:rr.z,tx:rr.x,tz:rr.z,rid:i.id,fr:Math.random()<.55?1:0,nu:I.level>=4&&Math.random()<.35?1:0,dr:!s&&Math.random()<.6?1:0,sh:s,pat:0,max:1,slot:-1})}var f0=(r,e)=>r[0]==="bun"&&r[r.length-1]==="top"&&d0(r.slice(1,-1))===d0(e),Xo=(r,e)=>r.filter(t=>t.t===e).length;function m0(r,e){let t=Ks(e),i=r.filter(s=>s.t==="burger");return i.length===1&&f0(i[0].c,t.f)&&Xo(r,"fries")===t.fr&&Xo(r,"nuggets")===t.nu&&Xo(r,"soda")===t.dr&&Xo(r,"shake")===t.sh&&r.length===1+t.fr+t.nu+t.dr+t.sh}function g0(r,e){let t=Ks(e),i=[],s=r.filter(n=>n.t==="burger");return s.length?s.length>1?i.push("un burger de trop"):f0(s[0].c,t.f)||i.push("le burger n\u2019est pas un \xAB "+t.n+" \xBB"):i.push("il manque le burger"),[["fries","fr","les frites"],["nuggets","nu","les nuggets"],["soda","dr","le soda"],["shake","sh","le milkshake"]].forEach(([n,a,o])=>{let l=Xo(r,n);l<t[a]&&i.push("il manque "+o),l>t[a]&&i.push(o.replace("les ","").replace("le ","")+" en trop")}),r.some(n=>!["burger","fries","soda","nuggets","shake"].includes(n.t))&&i.push("un produit n\u2019a rien \xE0 faire l\xE0"),i}var Kh=r=>"Rupture de stock : "+Zr[r].n.toLowerCase()+". Commandez \xE0 la tablette";function Jh(r,e=1){let t=Zr[r];if(!t||!Zh(r))return{ok:!1,msg:"Produit indisponible"};let i=t.cost*e;return I.money<i-1e-9?{ok:!1,msg:"Pas assez d\u2019argent en caisse"}:(I.money-=i,I.spent+=i,I.deliveries.push({id:++I.cid+1e3,t:Xh,items:{[r]:t.pack*e}}),{ok:!0,msg:t.pack*e+" \xD7 "+t.n+" en route\u2026"})}function Zo(r,e){if(!I||I.ph!=="play"||!e)return;let{say:t,feedback:i}=ni,s=I.players[r],n=s.h,[a,o]=e.split(":");if(a==="crate")return Zh(o)?n?n.t===o?(I.stock[o]++,s.h=null,i(r,"drop")):t(r,"Vous avez d\xE9j\xE0 les mains prises"):(I.stock[o]||0)<=0?t(r,Kh(o)):(I.stock[o]--,s.h={t:o},i(r,"pick")):t(r,"Pas encore d\xE9bloqu\xE9 (niveau "+Zr[o].lvl+")");if(a==="sauce")return Zh(o)?n?n.t==="sauce"?(s.h=null,i(r,"drop")):t(r,"Vous avez d\xE9j\xE0 les mains prises"):(s.h={t:"sauce",k:o},i(r,"pick")):t(r,"Pas encore d\xE9bloqu\xE9 (niveau "+Zr[o].lvl+")");if(a==="board"){let l=+o,c=I.boards[l],h=c[c.length-1]==="top";return n?n.t==="burger"?c.length?t(r,"La planche est occup\xE9e"):(I.boards[l]=n.c,s.h=null,i(r,"drop")):n.t==="bun"?c.length?h?t(r,"Ce burger est d\xE9j\xE0 ferm\xE9"):c.length<2?t(r,"Ajoutez d\u2019abord une garniture"):(c.push("top"),s.h=null,i(r,"cook")):(c.push("bun"),s.h=null,i(r,"drop")):s0.includes(n.t)?c.length?h?t(r,"Ce burger est d\xE9j\xE0 ferm\xE9"):c.length>=11?t(r,"Le burger est trop haut"):(c.push(n.t),s.h=null,i(r,"drop")):t(r,"Commencez par poser un pain"):n.t==="sauce"?c.length?h?t(r,"Ce burger est d\xE9j\xE0 ferm\xE9"):c.includes(n.k)?t(r,"Il y a d\xE9j\xE0 de la sauce "+br[n.k].toLowerCase()):(I.stock[n.k]||0)<=0?t(r,Kh(n.k)):(I.stock[n.k]--,c.push(n.k),i(r,"squirt")):t(r,"Commencez par poser un pain"):n.t==="raw"||n.t==="rawbacon"?t(r,"C\u2019est cru : passez-le sur la plancha"):t(r,"\xC7a ne va pas dans un burger"):c.length?(s.h={t:"burger",c:c.slice()},I.boards[l]=[],i(r,"pick")):t(r,"La planche est vide")}if(a==="grill"){let l=qo(I.ups);if(n&&(n.t==="raw"||n.t==="rawbacon")){let c=-1;for(let h=0;h<l;h++)if(!I.grill[h]){c=h;break}return c<0?t(r,"La plancha est pleine"):(I.grill[c]={k:n.t,a:0},s.h=null,i(r,"squirt"))}if(!n){let c=-1,h=-1;for(let d=0;d<l;d++){let g=I.grill[d];g&&g.a>=zo&&g.a>h&&(h=g.a,c=d)}if(c<0)return t(r,I.grill.slice(0,l).some(d=>d)?"Pas encore cuit\u2026":"La plancha est vide");let u=I.grill[c],p=u.a>=ko;return s.h={t:u.k==="raw"?p?"burnt":"patty":p?"burntbacon":"bacon"},I.grill[c]=null,i(r,"pick")}return t(r,"Posez des steaks ou du bacon crus sur la plancha")}if(a==="fryer"){let l=Yo(I.ups);if(n&&(n.t==="frozen"||n.t==="nugfrozen")){let c=-1;for(let h=0;h<l;h++)if(!I.fry[h]){c=h;break}return c<0?t(r,"Les paniers sont pris"):(I.fry[c]={k:n.t,a:0},s.h=null,i(r,"squirt"))}if(!n){let c=-1,h=-1;for(let d=0;d<l;d++){let g=I.fry[d];g&&g.a>=Ii&&g.a>h&&(h=g.a,c=d)}if(c<0)return t(r,I.fry.slice(0,l).some(d=>d)?"\xC7a cuit encore\u2026":"La friteuse est vide");let u=I.fry[c],p=u.a>=Jr;return s.h={t:u.k==="frozen"?p?"charred":"fries":p?"charnug":"nuggets"},I.fry[c]=null,i(r,"pick")}return t(r,"Mettez des frites ou des nuggets surgel\xE9s dans la friteuse")}if(a==="cups")return n?n.t==="cup"?(I.stock.cup++,s.h=null,i(r,"drop")):t(r,"Vous avez d\xE9j\xE0 les mains prises"):(I.stock.cup||0)<=0?t(r,Kh("cup")):(I.stock.cup--,s.h={t:"cup"},i(r,"pick"));if(a==="soda"){let l=vs(Go,I.ups);if(n&&n.t==="cup"){let c=I.soda.indexOf(-1);return c<0?t(r,"Les deux becs sont pris"):(I.soda[c]=0,s.h=null,i(r,"drop"))}if(!n){let c=I.soda.findIndex(h=>h>=l);return c<0?t(r,I.soda.some(h=>h>=0)?"\xC7a se remplit\u2026":"Posez d\u2019abord un gobelet"):(s.h={t:"soda"},I.soda[c]=-1,i(r,"pick"))}return t(r,"Il faut un gobelet vide")}if(a==="shake"){if(I.level<5)return t(r,"Pas encore d\xE9bloqu\xE9 (niveau 5)");let l=vs(Ho,I.ups);if(n&&n.t==="cup"){let c=I.shake.indexOf(-1);return c<0?t(r,"Les deux becs sont pris"):(I.stock.shakemix||0)<=0?t(r,Kh("shakemix")):(I.stock.shakemix--,I.shake[c]=0,s.h=null,i(r,"drop"))}if(!n){let c=I.shake.findIndex(h=>h>=l);return c<0?t(r,I.shake.some(h=>h>=0)?"\xC7a mixe\u2026":"Posez d\u2019abord un gobelet"):(s.h={t:"shake"},I.shake[c]=-1,i(r,"pick"))}return t(r,"Il faut un gobelet vide")}if(a==="tray")return n?n.t==="burger"&&n.c[n.c.length-1]!=="top"?t(r,"Fermez le burger avec un pain avant de le servir"):["burger","fries","soda","nuggets","shake"].includes(n.t)?I.tray.length>=6?t(r,"Le plateau est plein"):(I.tray.push(n),s.h=null,i(r,"drop")):t(r,"Seuls burgers, frites, nuggets et boissons vont sur le plateau"):I.tray.length?(s.h=I.tray.pop(),i(r,"pick")):t(r,"Le plateau est vide");if(a==="bell"){i(r,"bell");let l=I.cust.filter(d=>d.st==="wait").sort((d,g)=>d.id-g.id);if(!I.tray.length)return t(r,"Le plateau est vide");if(!l.length)return t(r,"Aucune commande en attente : prenez d\u2019abord la commande \xE0 la caisse");let c=l.find(d=>m0(I.tray,d));if(!c)return t(r,"\xC7a ne correspond pas : "+g0(I.tray,l[0]).join(", "));let h=Ks(c),u=Math.round(c.pat/c.max*30*(1+(I.level>=9?.25:0)))/10,p=h.price+u;return I.money+=p,I.sales+=p,I.served++,I.tray=[],c.st="pick",c.slot=-1,I.xpGain+=Math.round(p*2.2+(c.pat/c.max>.6?6:0)),t(r,u>=2?"Client ravi, pourboire de "+Ht(u)+" !":"Commande n\xB0"+c.id+" servie","+"+Ht(p))}if(a==="trash")return n?n.t==="sauce"?t(r,"Reposez la sauce sur son support"):(s.h=null,i(r,"drop")):void 0;if(a==="tablet")return ni.openTablet(r);if(a==="cust"){let l=I.cust.find(c=>c.id===+o);if(!l)return;if(l.st==="order"){let c=I.cust.filter(d=>d.st==="wait").map(d=>d.slot),h=Yh.findIndex((d,g)=>!c.includes(g)),u=(ni.mode()==="solo"?150:130)*(1+.12*I.ups.deco)*Math.max(.7,1-(I.day-1)*.02);l.st="wait",l.slot=h<0?0:h,l.max=l.pat=u;let p=Ks(l);return t(r,"Commande n\xB0"+l.id+" : "+p.n+(l.fr?" + frites":"")+(l.nu?" + nuggets":"")+(l.dr?" + soda":"")+(l.sh?" + milkshake":""),"","order")}if(l.st==="wait")return t(r,"Ce client attend sa commande n\xB0"+l.id);if(l.st==="in")return t(r,"Ce client fait la queue")}}function Bp(r){if(I.paused)return;let e=ni.mode();I.time-=r;let t=qo(I.ups),i=Yo(I.ups);I.grill.forEach(o=>{o&&(o.a+=r)}),I.fry.forEach(o=>{o&&(o.a+=r)});let s=vs(Go,I.ups),n=vs(Ho,I.ups);I.soda=I.soda.map(o=>o<0||o>=s?o:o+r),I.shake=I.shake.map(o=>o<0||o>=n?o:o+r);for(let o=I.deliveries.length-1;o>=0;o--){let l=I.deliveries[o];l.t-=r,l.t<=0&&(Object.entries(l.items).forEach(([c,h])=>{I.stock[c]=(I.stock[c]||0)+h}),I.deliveries.splice(o,1),ni.broadcast("Livraison arriv\xE9e : "+Object.entries(l.items).map(([c,h])=>h+" \xD7 "+Zr[c].n).join(", "),"deliver"))}if(I.next-=r,I.next<=0){I.cust.length<6&&I.time>25&&p0();let o=(e==="solo"?24:17)/(1+.15*I.ups.ad)*Math.max(.6,1-(I.day-1)*.03)*(I.level>=7?.88:1);I.next=o*(.75+Math.random()*.5)*(I.time<90?.8:1)}I.cust.filter(o=>o.st==="in"||o.st==="order").sort((o,l)=>o.id-l.id).forEach((o,l)=>{let c=l===0?ms:{x:ms.x,z:ms.z+.85*l};l>3&&(c={x:rr.x-1,z:rr.z-.6}),o.tx=c.x,o.tz=c.z,l===0&&o.st==="in"&&Math.hypot(o.x-ms.x,o.z-ms.z)<.08&&(o.st="order",o.max=o.pat=50,ni.broadcast("Un client attend \xE0 la caisse","order"))}),I.cust.forEach(o=>{if(o.st==="wait"){let p=Yh[o.slot]||Yh[0];o.tx=p.x,o.tz=p.z}o.st==="pick"&&(o.tx=gs.x,o.tz=gs.z,Math.hypot(o.x-gs.x,o.z-gs.z)<.08&&(o.st="out")),(o.st==="out"||o.st==="angry")&&(o.tx=rr.x,o.tz=rr.z+.3);let l=o.tx-o.x,c=o.tz-o.z,h=Math.hypot(l,c),u=1.25*r;h>u?(o.x+=l/h*u,o.z+=c/h*u):(o.x=o.tx,o.z=o.tz),(o.st==="order"||o.st==="wait")&&(o.pat-=r,o.pat<=0&&(o.st="angry",I.angry++,ni.broadcast("Le client n\xB0"+o.id+" est parti, furieux","bad")))}),I.cust=I.cust.filter(o=>!((o.st==="out"||o.st==="angry")&&Math.hypot(o.x-rr.x,o.z-rr.z-.3)<.1)),I.time<=0&&(I.time=0,I.ph="end",ni.ended())}function zp(r){let e=[40,90,150].map(u=>u*(1+.2*(I.day-1))),t=e.filter(u=>I.sales>=u).length,i=t*15+Math.round(I.served*2),s=r.xp,n=Er(s),a=s+I.xpGain+i,o=Er(a),l={...I.stock},c=[];return I.deliveries.forEach(u=>Object.entries(u.items).forEach(([p,d])=>{l[p]=(l[p]||0)+d})),{next:{...r,day:r.day+1,xp:a,money:Math.round(I.money*100)/100,stock:l,pending:c,best:Math.max(r.best||0,I.sales),played:(r.played||0)+1},st:t,goal:e,bonus:i,xpGain:I.xpGain,lvl0:n,lvl1:o,sales:I.sales,spent:I.spent,served:I.served,angry:I.angry,rec:I.sales>(r.best||0)}}var vt={sens:1,li:0,target:null,onAction:()=>{},onPause:()=>{},canPlay:()=>!0,locked:!1,moving:!1},$h=new Set,Rr={x:0,y:0,id:null},Gp=!1,Vi=null,db=()=>document.getElementById("lockHint");function Hp(r,e,t){if(!I||I.ph!=="play"||!vt.canPlay())return;let i=I.players[vt.li],s=t*vt.sens;i.yaw-=r*s,i.pitch=Math.max(-1.25,Math.min(1,i.pitch-e*s))}function Jo(){!I||I.ph!=="play"||!vt.canPlay()||!vt.target||vt.onAction(vt.target)}function _0(){addEventListener("keydown",l=>{l.target.tagName==="INPUT"||l.target.tagName==="SELECT"||((l.code.startsWith("Arrow")||l.code==="Space")&&l.preventDefault(),!l.repeat&&($h.add(l.code),["Space","KeyE","Enter"].includes(l.code)&&Jo(),l.code==="KeyP"&&vt.onPause()))}),addEventListener("keyup",l=>$h.delete(l.code)),addEventListener("blur",()=>$h.clear()),document.addEventListener("pointerlockchange",()=>{vt.locked=!!me.renderer&&document.pointerLockElement===me.renderer.domElement,vt.locked||(Gp=!1),Qh()}),document.addEventListener("mousemove",l=>{vt.locked&&Hp(l.movementX,l.movementY,.0022)});let r=me.renderer.domElement;r.addEventListener("pointerdown",l=>{if(l.pointerType!=="touch"){if(vt.locked){l.button===0&&Jo();return}Vi={x:l.clientX,y:l.clientY,moved:0,id:l.pointerId};try{r.setPointerCapture(l.pointerId)}catch{}}}),r.addEventListener("pointermove",l=>{if(!Vi||l.pointerId!==Vi.id)return;let c=l.clientX-Vi.x,h=l.clientY-Vi.y;Vi.moved+=Math.abs(c)+Math.abs(h),Vi.x=l.clientX,Vi.y=l.clientY,Hp(c,h,.005)}),r.addEventListener("pointerup",l=>{if(!Vi||l.pointerId!==Vi.id)return;let c=Vi.moved;if(Vi=null,c<6&&I&&I.ph==="play"&&vt.canPlay())if(Gp)Jo();else{Gp=!0;try{let h=r.requestPointerLock&&r.requestPointerLock();h&&h.catch&&h.catch(()=>{})}catch{}}});let e=document.getElementById("joy"),t=e.querySelector("i"),i=l=>{let c=e.getBoundingClientRect(),h=l.clientX-(c.left+c.width/2),u=l.clientY-(c.top+c.height/2),p=c.width/2-10,d=Math.hypot(h,u);d>p&&(h*=p/d,u*=p/d),Rr.x=h/p,Rr.y=u/p,t.style.transform=`translate(${h}px,${u}px)`};e.addEventListener("pointerdown",l=>{Rr.id=l.pointerId,e.setPointerCapture(l.pointerId),i(l),l.preventDefault()}),e.addEventListener("pointermove",l=>{l.pointerId===Rr.id&&i(l)});let s=l=>{l.pointerId===Rr.id&&(Rr.id=null,Rr.x=Rr.y=0,t.style.transform="")};e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s),document.getElementById("act").addEventListener("pointerdown",l=>{l.preventDefault(),Jo()});let n=document.getElementById("look"),a=null;n.addEventListener("pointerdown",l=>{a={id:l.pointerId,x:l.clientX,y:l.clientY,m:0,t:performance.now()},n.setPointerCapture(l.pointerId)}),n.addEventListener("pointermove",l=>{if(!a||l.pointerId!==a.id)return;let c=l.clientX-a.x,h=l.clientY-a.y;a.m+=Math.abs(c)+Math.abs(h),a.x=l.clientX,a.y=l.clientY,Hp(c,h,.0055)});let o=l=>{!a||l.pointerId!==a.id||(a.m<8&&performance.now()-a.t<300&&Jo(),a=null)};n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o)}var pb=[[-6,-4.75,6,-3.72],[-3.12,-2.67,3.92,-1.73],[-6,1.22,6,2],[5.05,-1.37,6,.87],[-3.95,-1.45,-3.35,-.85]],ta=.28;function v0(r,e){return r<-5.9+ta||r>5.9-ta||e<-4.7||e>1.25?!1:!pb.some(([t,i,s,n])=>r>t-ta&&r<s+ta&&e>i-ta&&e<n+ta)}function x0(r){let e=I.players[vt.li],t=u=>$h.has(u)?1:0,i=t("KeyW")+t("ArrowUp")-t("KeyS")-t("ArrowDown"),s=t("KeyD")+t("ArrowRight")-t("KeyA")-t("ArrowLeft");i-=Rr.y,s+=Rr.x;let n=Math.hypot(i,s);n>1&&(i/=n,s/=n);let a=3*r,o=Math.sin(e.yaw),l=Math.cos(e.yaw),c=(-o*i+l*s)*a,h=(-l*i-o*s)*a;v0(e.x+c,e.z)&&(e.x+=c),v0(e.x,e.z+h)&&(e.z+=h),e.moving=n>.1,e.moving&&(e.walk+=r*9)}function Qh(r){let e=db();if(!e)return;let t=document.getElementById("overlay");e.hidden=ki||!I||I.ph!=="play"||!t.hidden,e.textContent=vt.locked?"Clic : action \xB7 Z Q S D : marcher \xB7 P : r\xE9glages \xB7 \xC9chap : lib\xE9rer la souris":"Cliquez pour viser \xE0 la souris (ou glissez pour regarder) \xB7 Z Q S D pour marcher \xB7 E pour agir \xB7 P : r\xE9glages"}function y0(){try{document.pointerLockElement&&document.exitPointerLock()}catch{}}var ia,T0,$r,Qo,$o,el={},ra={},M0={},E0=[],sa=[],Wp={promptFor:()=>""};function w0(){ia=new so,ia.far=2.6,ia.layers.enable(1),T0=new ee(0,0),$r=new C,$o=new Ae,Qo=new We,me.camera.add(Qo);for(let e=0;e<48;e++){let t=new hr(new Zi({map:fb(),transparent:!0,depthWrite:!1,opacity:0}));t.visible=!1,t.renderOrder=5,t.layers.set(1),me.scene.add(t),E0.push(t)}let r=(e,t,i,s)=>{let n=document.createElement("canvas");n.width=64,n.height=10;let a=new dr(n);a.colorSpace=Tt;let o=new hr(new Zi({map:a,transparent:!0,depthTest:!1,depthWrite:!1}));return o.scale.set(.22,.034,1),o.position.set(t,i,s),o.renderOrder=15,o.userData={c:n,t:a,k:""},o.visible=!1,o.layers.set(1),e.add(o),o};$e.grill.forEach(e=>{e.bar=r(e.p,0,.12,0)}),$e.fry.forEach(e=>{e.bar=r(e.v,0,.45,0)}),$e.soda.forEach(e=>{e.bar=r(e.c.parent,e.c.position.x,e.c.position.y+.3,e.c.position.z)}),$e.shake.forEach(e=>{e.bar=r(e.c.parent,e.c.position.x,e.c.position.y+.32,e.c.position.z)})}function fb(){let r=document.createElement("canvas");r.width=r.height=32;let e=r.getContext("2d"),t=e.createRadialGradient(16,16,1,16,16,15);return t.addColorStop(0,"rgba(255,255,255,.9)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32),new dr(r)}function S0(r,e,t,i){let s=E0.find(n=>!n.visible);s&&(s.visible=!0,s.position.set(r,e,t),s.userData.l=1,s.material.color.set(i?"#222":"#fff"),s.scale.setScalar(.08),sa.push(s))}function eu(r,e,t){let i=Math.round(e*32)+t;if(r.userData.k===i)return;r.userData.k=i;let s=r.userData.c.getContext("2d");s.clearRect(0,0,64,10),s.fillStyle="rgba(10,14,14,.85)",s.fillRect(0,0,64,10),s.fillStyle=t,s.fillRect(2,2,60*Math.min(1,e),6),r.userData.t.needsUpdate=!0}function Vp(r,e,t,i){let s=el[r]||(el[r]={s:null,obj:null});return s.s===i||(s.obj&&e.remove(s.obj),s.s=i,s.obj=i?t():null,s.obj&&e.add(s.obj)),s}function tl(){Object.keys(ra).forEach(A0),Object.keys(el).forEach(r=>{let e=el[r];e.obj&&e.obj.parent&&e.obj.parent.remove(e.obj),delete el[r]}),sa.forEach(r=>{r.visible=!1}),sa=[]}function A0(r){let e=ra[r];if(!e)return;$e.custLayer.remove(e.g);let t=$e.inter.indexOf(e.g);t>=0&&$e.inter.splice(t,1),e.bub.material.map.dispose(),delete ra[r]}function mb(){let r=document.createElement("canvas");r.width=128,r.height=160;let e=new dr(r);e.colorSpace=Tt;let t=new hr(new Zi({map:e,transparent:!0,depthTest:!1}));return t.renderOrder=20,t.layers.set(1),t.scale.set(.32,.4,1),t.position.y=2,t.userData={c:r,t:e,key:""},t}function tu(r,e,t){if(r.userData.key===e)return;r.userData.key=e;let i=r.userData.c.getContext("2d");i.clearRect(0,0,128,160),t(i),r.userData.t.needsUpdate=!0}var b0=r=>{for(let e=r;e;e=e.parent)if(e.visible===!1)return!1;return!0},iu={raw:"#e2a0a0",cook:"#3fb35f",burn:"#e2372b"};function R0(r,e,t,i){let{camera:s}=me;if(!I){s.position.set(-1.2,1.7,.9),s.rotation.set(-.18,-.3+Math.sin(r/4e3)*.3,0,"YXZ");return}let n=I.players[t],a=n.moving?Math.sin(n.walk*2)*.025:0;s.position.set(n.x,1.62+a,n.z),s.rotation.set(n.pitch,n.yaw,0,"YXZ"),Vp("hand",Qo,()=>{let f=Cp(n.h.t,n.h);return f.scale.setScalar(n.h.t==="burger"?1.35:n.h.t==="sauce"?1:1.45),f},Pp(n.h)),Qo.position.set(.27,-.3+(n.moving?Math.sin(n.walk*2)*.01:0),-.62),Qo.rotation.set(.25,-.3,0);let o=qo(I.ups);$e.grill.forEach((f,m)=>{let _=I.grill[m],S=m<o&&!!_;if(f.p.visible=S,!S){f.bar.visible=!1;return}let x=_.a>=ko,b=_.a>=zo,E=_.k==="raw"?x?"burnt":b?"patty":"raw":x?"burntbacon":b?"bacon":"rawbacon";f.cur!==E&&(Object.entries(f.variants).forEach(([y,R])=>{R.visible=y===E}),f.cur=E);let v=Math.min(1,_.a/zo);f.bar.visible=!x,x||eu(f.bar,b?1:v,b?_.a>ko-8?"#f2a51c":iu.cook:iu.raw),Math.random()<e*(x?6:4)&&(f.p.getWorldPosition($r),S0($r.x+(Math.random()-.5)*.1,$r.y+.06,$r.z,x))});let l=Yo(I.ups);$e.fry.forEach((f,m)=>{let _=I.fry[m],S=m<l&&!!_;if(f.basket.visible=S,!S){f.bar.visible=!1;return}let x=_.k==="nugfrozen";f.fries.visible=!x,f.nug.visible=x,f.basket.position.y=.17;let b=_.a;b<Ii?$o.set("#f2e2b0").lerp(new Ae("#f0b93a"),b/Ii):b<Jr?$o.set("#f0b93a").lerp(new Ae("#3a2a18"),Math.max(0,(b-Ii-15)/(Jr-Ii-15))):$o.set("#3a2a18"),f.fm.color.copy($o),f.nm.forEach(y=>{b<Ii?y.color.set("#ffffff").lerp(new Ae("#ffd28a"),b/Ii):b<Jr?y.color.set("#ffd28a").lerp(new Ae("#3a2a18"),Math.max(0,(b-Ii-15)/(Jr-Ii-15))):y.color.set("#3a2a18")});let E=b>=Ii,v=b>=Jr;f.bar.visible=!v,v||eu(f.bar,E?1:b/Ii,E?b>Jr-8?"#f2a51c":iu.cook:iu.raw),Math.random()<e*5&&(f.v.getWorldPosition($r),S0($r.x+(Math.random()-.5)*.25,$r.y+.3,$r.z+(Math.random()-.5)*.2,v))});let c=vs(Go,I.ups),h=vs(Ho,I.ups);$e.soda.forEach((f,m)=>{let _=I.soda[m];f.c.visible=_>=0,f.bar.visible=_>=0&&_<c,_>=0&&_<c&&eu(f.bar,_/c,"#4aa3ff")}),$e.shake.forEach((f,m)=>{let _=I.shake[m];f.c.visible=_>=0&&I.level>=5,f.bar.visible=_>=0&&_<h,_>=0&&_<h&&eu(f.bar,_/h,"#e9a8c4")}),I.boards.forEach((f,m)=>Vp("board"+m,$e.boards[m],()=>Ap(f),f.join("."))),Vp("tray",$e.tray,()=>{let f=new We;return I.tray.forEach((m,_)=>{let S=Cp(m.t,m);S.position.set(-.18+_*.1,0,_%2*.08-.04),f.add(S)}),f},I.tray.map(Fo).join(",")),Object.keys($e.labels).forEach(f=>h0(f,I.stock[f]||0)),$e.deliveryBox&&($e.deliveryBox.visible=I.deliveries.length>0),[0,1].forEach(f=>{if(f===t)return;let m=I.players[f],_=M0[f];if(!m.on){_&&(_.p.g.visible=!1);return}if(!_){let S=wp(f?"female-e":"male-e",1.62);_=M0[f]={p:S,held:{s:null,obj:null}},me.scene.add(S.g)}if(_.p.g.visible=!0,m.tx!==void 0){let S=m.x,x=m.z,b=Math.min(1,e*12);m.x+=(m.tx-m.x)*b,m.z+=(m.tz-m.z)*b,m.moving=Math.hypot(m.x-S,m.z-x)>.002}_.p.g.position.set(m.x,0,m.z),_.p.g.rotation.y=m.yaw+Math.PI,_.p.play(m.moving?"walk":"idle",.2),_.p.mixer.update(e)});let u=new Set;I.cust.forEach(f=>{u.add(f.id);let m=ra[f.id];if(!m){let y=wp(Oo[(f.id*5+3+I.day)%Oo.length],1.4+f.id*13%5*.04),R=mb();R.position.y=2.05/1,y.g.add(R),m=ra[f.id]={p:y,g:y.g,bub:R},di(y.g,"cust:"+f.id),$e.custLayer.add(y.g),y.g.position.set(f.x,0,f.z)}if(i==="guest"&&f.tx!==void 0){let y=Math.min(1,e*8);f.x+=(f.tx-f.x)*y,f.z+=(f.tz-f.z)*y}let _=m.g.position.x,S=m.g.position.z;m.g.position.set(f.x,0,f.z);let x=Math.hypot(f.x-_,f.z-S)/Math.max(e,.001);if(x>.15)m.g.rotation.y=Math.atan2(f.x-_,f.z-S),m.p.play("walk",.15,Math.min(1.6,x/1.2));else{let R=Math.atan2(n.x-f.x,n.z-f.z)-m.g.rotation.y;R=Math.atan2(Math.sin(R),Math.cos(R)),m.g.rotation.y+=R*Math.min(1,e*3),m.p.play(f.st==="pick"?"interact-right":"idle",.2)}m.p.mixer.update(e);let b=f.max?f.pat/f.max:1,E=b>.5?"#3fb35f":b>.25?"#f2a51c":"#e2372b",v=(y,R)=>{y.fillStyle="#fff",y.strokeStyle=E,y.lineWidth=10,y.beginPath(),y.arc(64,64,52,0,7),y.fill(),y.stroke(),y.beginPath(),y.moveTo(50,112),y.lineTo(64,140),y.lineTo(78,112),y.fill(),R()};f.st==="order"?tu(m.bub,"o"+E,y=>v(y,()=>{y.fillStyle="#e2372b",y.font="bold 76px Bungee,Impact",y.textAlign="center",y.textBaseline="middle",y.fillText("!",64,66)})):f.st==="wait"?tu(m.bub,"w"+f.id+E,y=>v(y,()=>{y.fillStyle="#182221",y.font="bold 44px Bungee,Impact",y.textAlign="center",y.textBaseline="middle",y.fillText("#"+f.id,64,66)})):f.st==="angry"?tu(m.bub,"a",y=>{y.fillStyle="#e2372b",y.beginPath(),y.arc(64,64,52,0,7),y.fill(),y.fillStyle="#fff",y.font="bold 60px Rubik,Arial",y.textAlign="center",y.textBaseline="middle",y.fillText(">:(",64,66)}):(f.st==="pick"||f.st==="out")&&tu(m.bub,"h",y=>{y.fillStyle="#3fb35f",y.beginPath(),y.arc(64,64,52,0,7),y.fill(),y.fillStyle="#fff",y.font="bold 60px Rubik,Arial",y.textAlign="center",y.textBaseline="middle",y.fillText(":)",64,66)}),m.bub.visible=f.st!=="in"}),Object.keys(ra).forEach(f=>{u.has(+f)||A0(f)});for(let f=sa.length-1;f>=0;f--){let m=sa[f];m.userData.l-=e*.7,m.position.y+=e*.35,m.scale.setScalar(.08+(1-m.userData.l)*.32),m.material.opacity=Math.max(0,m.userData.l*.35),m.userData.l<=0&&(m.visible=!1,sa.splice(f,1))}let p=null;if(I.ph==="play"){ia.setFromCamera(T0,s),ia.camera=s;let f=ia.intersectObjects($e.inter.filter(b0),!0);for(let m of f){if(m.object.isSprite&&m.object.parent&&m.object.material.depthTest===!1)continue;let _=m.object;for(;_&&!_.userData.id;)_=_.parent;if(_&&_.userData.id&&b0(_)){p=_.userData.id;break}}}vt.target=p;let d=document.getElementById("prompt"),g=document.getElementById("cross"),M=p?Wp.promptFor(p,n.h):"";d.innerHTML=M,d.classList.toggle("on",!!M),g.classList.toggle("on",!!p)}var jp="bb6_save",P0="bb6_settings",Xp={},L0=r=>{try{return localStorage.getItem(r)}catch{return Xp[r]||null}},I0=(r,e)=>{try{localStorage.setItem(r,e)}catch{Xp[r]=e}},gb=r=>{try{localStorage.removeItem(r)}catch{delete Xp[r]}};function ru(){return{v:1,day:1,xp:0,money:40,stock:{...n0},ups:{grill:0,fryer:0,machine:0,deco:0,ad:0},best:0,pending:[],played:0}}function N0(){try{let r=JSON.parse(L0(jp));if(r&&r.v===1){let e=ru();return{...e,...r,stock:{...e.stock,...r.stock},ups:{...e.ups,...r.ups}}}}catch{}return ru()}function il(r){I0(jp,JSON.stringify(r))}function D0(){gb(jp)}var C0={sens:1,vol:.7,quality:"auto",bloom:!0};function U0(){try{return{...C0,...JSON.parse(L0(P0))}}catch{return{...C0}}}function O0(r){I0(P0,JSON.stringify(r))}var _s=null,qp=.7,F0=r=>{qp=Math.max(0,Math.min(1,r))};function bi(r){if(!(qp<=.001))try{_s=_s||new(window.AudioContext||window.webkitAudioContext),_s.state==="suspended"&&_s.resume();let e={pick:[[600,.05]],drop:[[360,.06]],serve:[[523,.08],[659,.08],[784,.08],[1046,.16]],bad:[[150,.2]],bell:[[1568,.35]],order:[[880,.07],[1175,.12]],cook:[[740,.05],[990,.07]],squirt:[[220,.08]],level:[[523,.1],[659,.1],[784,.1],[1046,.1],[1318,.25]],buy:[[880,.06],[1320,.1]],deliver:[[440,.08],[554,.08],[659,.14]]}[r]||[],t=_s.currentTime;e.forEach(([i,s])=>{let n=_s.createOscillator(),a=_s.createGain();n.type=r==="bad"?"sawtooth":r==="bell"?"sine":"triangle",n.frequency.value=i;let o=(r==="bell"?.18:.1)*qp*1.4;a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(Math.max(2e-4,o),t+.01),a.gain.exponentialRampToValueAtTime(1e-4,t+s),n.connect(a).connect(_s.destination),n.start(t),n.stop(t+s+.02),t+=s*.8})}catch{}}var Ti=r=>document.getElementById(r),B0,Yp="",rl=()=>{Yp=""};function xs(r){let e=Ti("toast");e.textContent=r,e.classList.add("on"),clearTimeout(B0),B0=setTimeout(()=>e.classList.remove("on"),2200)}function Kp(r){let e=document.createElement("div");e.className="pop",e.textContent=r,Ti("stage").appendChild(e),setTimeout(()=>e.remove(),1400)}var vb=r=>r?r.t==="sauce"?br[r.k]:r.t==="burger"?r.c[r.c.length-1]==="top"?"Burger ferm\xE9":"Burger ouvert":br[r.t]:"";Wp.promptFor=(r,e)=>{let[t,i]=r.split(":"),s=e?e.t==="sauce"?br[e.k]:e.t==="burger"?e.c[e.c.length-1]==="top"?"le burger":"le burger ouvert":br[e.t]:"";switch(t){case"crate":{let n=I.stock[i]||0;return e&&e.t===i?"Reposer":e?"":"Prendre : <b>"+br[i]+"</b> <small>(stock "+n+")</small>"}case"sauce":return e&&e.t==="sauce"?"Reposer la sauce":e?"":"Prendre : <b>"+br[i]+"</b>";case"board":return e?e.t==="sauce"?"Ajouter : <b>"+s+"</b>":"Poser : <b>"+s+"</b>":"Prendre ce qu\u2019il y a sur la planche";case"grill":return e&&(e.t==="raw"||e.t==="rawbacon")?"Poser sur la plancha : <b>"+s+"</b>":e?"":"Prendre ce qui est cuit";case"fryer":return e&&(e.t==="frozen"||e.t==="nugfrozen")?"Plonger : <b>"+s+"</b>":e?"":"Prendre ce qui est cuit";case"cups":return e?e.t==="cup"?"Reposer":"":"Prendre un <b>gobelet</b>";case"soda":return e&&e.t==="cup"?"Remplir le gobelet":e?"":"Prendre le soda";case"shake":return e&&e.t==="cup"?"Pr\xE9parer un milkshake":e?"":"Prendre le milkshake";case"tray":return e?"Poser sur le plateau : <b>"+s+"</b>":"Reprendre du plateau";case"bell":return"Sonner : <b>servir le plateau</b>";case"trash":return e?"Jeter : <b>"+s+"</b>":"";case"tablet":return"<b>Commander des produits</b>";case"cust":{let n=I.cust.find(a=>a.id===+i);return n&&n.st==="order"?"<b>Prendre la commande</b>":n&&n.st==="wait"?"Commande n\xB0"+n.id+" en attente":"Client"}}return""};function Zp(){var p;let r=Ti("tickets"),e=I?I.cust.filter(d=>d.st==="wait").sort((d,g)=>d.id-g.id):[],t=e.map(d=>d.id).join(",");if(t!==Yp&&(Yp=t,r.innerHTML="",e.forEach(d=>{let g=Ks(d),M=document.createElement("div");M.className="ticket",M.dataset.id=d.id;let f=["bun",...g.f].concat(g.fr?["fries"]:[],g.nu?["nuggets"]:[],g.dr?["soda"]:[],g.sh?["shake"]:[]);M.innerHTML=`<div class="tn"><span>#${d.id}</span><span></span></div><div class="icons">${f.map(m=>`<img src="${Bo[m]}" alt="${br[m]||m}">`).join("")}</div><div class="pat"><i></i></div>`,M.querySelector(".tn span:last-child").textContent=g.n,r.appendChild(M)})),!I)return;r.querySelectorAll(".ticket").forEach(d=>{let g=I.cust.find(m=>m.id==d.dataset.id);if(!g)return;let M=Math.max(0,g.pat/g.max),f=d.querySelector(".pat i");f.style.width=M*100+"%",f.style.background=M>.5?"var(--ok)":M>.25?"var(--warn)":"var(--bad)",d.classList.toggle("hurry",M<.2)});let i=Math.max(0,Math.ceil(I.time)),s=Ti("timer");s.textContent=Math.floor(i/60)+":"+String(i%60).padStart(2,"0"),s.classList.toggle("low",i<=30&&I.ph==="play"),Ti("money").textContent=Ht(I.money);let n=Er(I.xp+I.xpGain),a=fs[n-1],o=(p=fs[n])!=null?p:a+1,l=n>=Up?1:(I.xp+I.xpGain-a)/(o-a);Ti("lvl").firstElementChild.textContent="Jour "+I.day+" \xB7 Niv. "+I.level,Ti("lvl").lastElementChild.firstElementChild.style.width=Math.min(100,l*100)+"%";let c=I.deliveries.length,h=Ti("deliv");h.hidden=!c,c&&(h.textContent="\u{1F4E6} Livraison dans "+Math.ceil(Math.min(...I.deliveries.map(d=>d.t)))+" s");let u=I.players[vt.li].h;Ti("held").innerHTML=u?"En main : <b>"+vb(u)+"</b>":"Mains vides"}function Ai(r,e,t){y0(),Ti("pads").hidden=!0,Ti("look").hidden=!0;let i=Ti("overlay");i.hidden=!1,i.innerHTML='<div class="card">'+r+'<div class="row"></div></div>';let s=i.querySelector(".row");(e||[]).forEach(([n,a,o,l])=>{let c=document.createElement("button");c.className="btn "+o,c.textContent=n,c.disabled=!!l,c.onclick=()=>{bi("drop"),a()},s.appendChild(c)}),t&&t(i),Qh()}function na(){Ti("overlay").hidden=!0,Ti("pads").hidden=!ki,Ti("look").hidden=!ki,Qh()}function z0(r,e){let t=(i,s,n,a,o)=>`<input type="range" id="${i}" min="${s}" max="${n}" step="${a}" value="${o}">`;Ai(`<h2>R\xE9glages</h2>
    <label class="set"><span>Sensibilit\xE9 de la cam\xE9ra <b id="sensV">${r.sens.toFixed(1)}\xD7</b></span>${t("sens",.3,3,.1,r.sens)}</label>
    <label class="set"><span>Son <b id="volV">${Math.round(r.vol*100)} %</b></span>${t("vol",0,1,.05,r.vol)}</label>
    <label class="set"><span>Qualit\xE9 graphique</span><select id="qual"><option value="auto">Automatique (recommand\xE9)</option><option value="high">\xC9lev\xE9e (ombres douces, occlusion, \xE9clat)</option><option value="medium">Moyenne (\xE9clat, sans occlusion)</option><option value="low">Basse (t\xE9l\xE9phones lents)</option></select></label>
    <label class="set chk"><input type="checkbox" id="bloom" ${r.bloom?"checked":""}><span>Effet d\u2019\xE9clat lumineux (bloom)</span></label>
    <div class="danger"><p class="note">Remise \xE0 z\xE9ro : efface votre progression (niveau, argent, stocks, am\xE9liorations).</p><button class="btn b" id="resetBtn">Remettre la progression \xE0 z\xE9ro</button></div>`,[["Retour",()=>e.back(),"a"],...e.quit?[["Quitter la journ\xE9e",()=>e.quit(),"c"]]:[]],i=>{let s=i.querySelector("#qual");s.value=r.quality;let n=()=>{r.sens=+i.querySelector("#sens").value,r.vol=+i.querySelector("#vol").value,r.quality=s.value,r.bloom=i.querySelector("#bloom").checked,i.querySelector("#sensV").textContent=r.sens.toFixed(1)+"\xD7",i.querySelector("#volV").textContent=Math.round(r.vol*100)+" %",e.save(r)};i.querySelector("#sens").oninput=n,i.querySelector("#vol").oninput=()=>{n(),bi("pick")},s.onchange=n,i.querySelector("#bloom").onchange=n;let a=i.querySelector("#resetBtn");a.onclick=()=>{if(a.dataset.sure){e.reset();return}a.dataset.sure=1,a.textContent="Confirmer : tout effacer ?",a.classList.add("sure"),setTimeout(()=>{a.isConnected&&(delete a.dataset.sure,a.textContent="Remettre la progression \xE0 z\xE9ro",a.classList.remove("sure"))},4e3)}})}function k0(r,e){let t=()=>Dp.map(n=>{let a=n.lvl>I.level,o=I.stock[n.id]||0,l=!a&&I.money+1e-9>=n.cost;return`<div class="prow ${a?"lock":""}"><img src="${Bo[n.icon]}" alt=""><div class="pn"><b>${n.n}</b><small>${a?"\u{1F512} niveau "+n.lvl:"Lot de "+n.pack+(n.unit?" "+n.unit:"")}</small></div><div class="pst ${o<=0?"z":o<=3?"l":""}">${o}</div><button data-id="${n.id}" ${l?"":"disabled"}>${a?"\u2014":Ht(n.cost)}</button></div>`}).join(""),i=()=>I.deliveries.length?I.deliveries.map(n=>"\u{1F4E6} "+Object.entries(n.items).map(([a,o])=>o+" \xD7 "+Zr[a].n).join(", ")+" \u2014 "+Math.max(0,Math.ceil(n.t))+" s").join("<br>"):"Aucune livraison en cours.",s=()=>{Ai(`<h2>Commandes fournisseur</h2><div class="bank">En caisse <b>${Ht(I.money)}</b></div><div class="plist">${t()}</div><p class="note" id="pend">${i()}</p><p class="note">Livraison en ${Xh} secondes environ.</p>`,[["Fermer",e,"a"]],n=>{n.querySelectorAll(".prow button").forEach(a=>{a.onclick=()=>{r(a.dataset.id,s)}})})};return s}function Jp(r,e,t){var c;let i=r.lvl1>r.lvl0,s="";for(let h=r.lvl0+1;h<=r.lvl1;h++)qh[h]&&(s+=`<div class="unlock"><b>Niveau ${h} : ${qh[h].t}</b><span>${qh[h].d}</span></div>`);let n=r.lvl1,a=fs[n-1],o=(c=fs[n])!=null?c:a+1,l=n>=Up?1:(e.xp-a)/(o-a);Ai(`<h2>Fin du jour ${e.day-1}</h2>${t.next?"":'<p class="note">L\u2019h\xF4te peut lancer le jour suivant.</p>'}<div class="stars">${[0,1,2].map(h=>`<span class="${h<r.st?"":"off"}">\u2605</span>`).join("")}</div>
    <div class="recap"><span>Ventes</span><b>${Ht(r.sales)}${r.rec&&r.sales>0?" (record !)":""}</b><span>D\xE9penses en stock</span><b>${Ht(r.spent)}</b><span>Clients servis</span><b>${r.served}</b><span>Clients furieux</span><b>${r.angry}</b><span>En caisse</span><b>${Ht(e.money)}</b><span>\xC9toiles \xE0</span><b>${r.goal.map(h=>Math.round(h)+" \u20AC").join(" / ")}</b></div>
    <div class="xpbox"><div class="xpt"><span>Niveau ${n}</span><b>+${r.xpGain+r.bonus} XP</b></div><div class="xpbar"><i style="width:${Math.min(100,l*100)}%"></i></div></div>
    ${i?`<div class="levelup">Niveau ${r.lvl1} atteint !</div>${s}`:""}`,[...t.shop?[["Boutique",t.shop,"b"]]:[],...t.next?[["Jour suivant",t.next,"a"]]:[],["Menu",t.menu,"c"]].concat(t.next?[]:[])),i&&bi("level")}function G0(r,e){let t=()=>{let i=Op.map(s=>{let n=r.ups[s.id],a=s.costs.length,o=n>=a,l=s.costs[n];return`<div class="prow"><img src="${Bo[s.icon]}" alt=""><div class="pn"><b>${s.n}${a>1?" <small>("+n+"/"+a+")</small>":""}</b><small>${o?"Au maximum":s.d(n)}</small></div><button data-id="${s.id}" ${o||r.money<l?"disabled":""}>${o?"\u2714":Ht(l)}</button></div>`}).join("");Ai(`<h2>Boutique</h2><div class="bank">En caisse <b>${Ht(r.money)}</b></div><div class="plist">${i}</div><p class="note">Les am\xE9liorations sont d\xE9finitives. L\u2019argent sert aussi \xE0 commander du stock.</p>`,[["Jour suivant",e.next,"a"],["Menu",e.menu,"c"]],s=>s.querySelectorAll(".prow button").forEach(n=>{n.onclick=()=>{let a=Op.find(l=>l.id===n.dataset.id),o=a.costs[r.ups[a.id]];r.money<o||(r.money=Math.round((r.money-o)*100)/100,r.ups[a.id]++,e.bought(),bi("buy"),t())}}))};t()}var _b=new URLSearchParams(location.search).get("relay"),su={relayUrl:_b||"",get enabled(){return!!this.relayUrl}};var nu=class{constructor(e){this.code=e,this.ws=null,this.peers=0,this.onmsg=()=>{},this.onpeers=()=>{},this.onclose=()=>{}}open(){return new Promise((e,t)=>{let i;try{i=new WebSocket(su.relayUrl.replace(/\/$/,"")+"/room/"+this.code)}catch(n){return t(n)}this.ws=i;let s=setTimeout(()=>{try{i.close()}catch{}t(new Error("d\xE9lai d\xE9pass\xE9"))},8e3);i.onopen=()=>{clearTimeout(s),e(this)},i.onerror=()=>{clearTimeout(s),t(new Error("connexion impossible"))},i.onmessage=n=>{let a;try{a=JSON.parse(n.data)}catch{return}a.t==="peers"?(this.peers=a.n,this.onpeers(a.n)):this.onmsg(a)},i.onclose=()=>{this.onclose()}})}send(e){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(e))}close(){try{this.ws&&this.ws.close()}catch{}this.ws=null}},H0=()=>{let r="ABCDEFGHJKLMNPQRSTUVWXYZ";return Array.from({length:4},()=>r[Math.floor(Math.random()*r.length)]).join("")},sl=r=>Math.round(r*10)/10;function V0(r){return{g:r.g,ph:r.ph,t:Math.round(r.time),mo:Math.round(r.money*100),day:r.day,lv:r.level,xp:r.xp,xg:r.xpGain,up:r.ups,sv:r.served,an:r.angry,sa:Math.round(r.sales*100),gr:r.grill.map(e=>e?[e.k==="raw"?0:1,sl(e.a)]:0),fr:r.fry.map(e=>e?[e.k==="frozen"?0:1,sl(e.a)]:0),so:r.soda.map(sl),sh:r.shake.map(sl),b:r.boards.map(e=>e.join(".")),tr:r.tray.map(Fo),h:r.players.map(e=>Fo(e.h)),st:r.stock,dl:r.deliveries.map(e=>[e.id,sl(e.t),e.items]),cu:r.cust.map(e=>[e.id,e.st,+e.x.toFixed(2),+e.z.toFixed(2),Math.round(e.pat),e.max,e.rid,e.fr,e.nu,e.dr,e.sh,e.slot]),m:[r.msg2.n,r.msg2.t,r.msg2.p,r.msg2.s]}}function $p(r,e,t){r.ph=e.ph,r.time=e.t,r.money=e.mo/100,r.day=e.day,r.level=e.lv,r.xp=e.xp,r.xpGain=e.xg,r.ups=e.up,r.served=e.sv,r.angry=e.an,r.sales=e.sa/100,r.grill=e.gr.map(s=>s?{k:s[0]?"rawbacon":"raw",a:s[1]}:null),r.fry=e.fr.map(s=>s?{k:s[0]?"nugfrozen":"frozen",a:s[1]}:null),r.soda=e.so,r.shake=e.sh,r.boards=e.b.map(s=>s?s.split("."):[]),r.tray=(e.tr||[]).map(Lp),r.stock=e.st,r.deliveries=e.dl.map(([s,n,a])=>({id:s,t:n,items:a})),(e.h||[]).forEach((s,n)=>{r.players[n]&&(r.players[n].h=Lp(s))});let i={};r.cust.forEach(s=>i[s.id]=s),r.cust=(e.cu||[]).map(([s,n,a,o,l,c,h,u,p,d,g,M])=>{let f=i[s];return{id:s,st:n,tx:a,tz:o,x:f?f.x:a,z:f?f.z:o,pat:l,max:c,rid:h,fr:u,nu:p,dr:d,sh:g,slot:M}}),e.m&&t&&t(e.m)}var ei=r=>document.getElementById(r),_t=N0(),Zs=U0(),It="solo",sr=0,W0=performance.now(),xb=!1;ni.say=(r,e,t,i)=>{r===sr?(e&&xs(e),t&&Kp(t),bi(i||(t?"serve":"bad"))):It==="host"&&(I.msg2={n:I.msg2.n+1,t:e||"",p:t||"",s:i||""})};ni.feedback=(r,e)=>{r===sr&&bi(e)};ni.broadcast=(r,e)=>{xs(r),bi(e),It==="host"&&(I.msg2={n:I.msg2.n+1,t:r,p:"",s:e})};ni.mode=()=>It;ni.li=()=>sr;ni.openTablet=r=>{r===sr&&Z0()};ni.ended=()=>Mb();var j0=0;vt.onAction=r=>{if(It==="guest"){if(r==="tablet")return Z0();j0++,Vt&&Vt.send({t:"act",n:j0,id:r}),bi("pick");return}Zo(sr,r)};vt.onPause=()=>{I&&I.ph==="play"&&ei("overlay").hidden&&au(!0)};vt.canPlay=()=>ei("overlay").hidden;function K0(){F0(Zs.vol),vt.sens=Zs.sens,Gg(Zs)}function yb(r){Zs=r,O0(Zs),K0()}function aa(){Ar(null),tl(),ei("gear").hidden=!0,rl(),Zp();let r=Er(_t.xp),e=_t.played>0;Ai(`<h1>Bouvi'Burger</h1>
    <p>Vous tenez le seul fast-food de Bouvines. Servez les clients, g\xE9rez vos stocks, montez en niveau !</p>
    ${e?`<div class="menuLine"><span>Jour <b>${_t.day}</b> \xB7 Niveau <b>${r}</b></span><span>Caisse <b>${Ht(_t.money)}</b></span></div>`:""}
    <details class="how" ${innerHeight>640?"open":""}><summary>Comment jouer ?</summary><ol>
      <li>Au <b>comptoir</b>, prenez la commande du client qui attend avec un \xAB ! \xBB.</li>
      <li>Steak cru sur la <b>plancha</b>, frites surgel\xE9es dans la <b>friteuse</b>, gobelet sous la <b>machine \xE0 soda</b>.</li>
      <li>Sur une <b>planche</b> : pain, garnitures, sauces, puis pain du dessus (voir le tableau des recettes).</li>
      <li>Posez tout sur le <b>plateau</b> et appuyez sur la <b>sonnette</b>.</li>
      <li>Plus de stock ? La <b>tablette</b> au fond de la cuisine commande les produits avec l\u2019argent de la caisse.</li>
    </ol></details>
    <div class="ctl">${ki?"Manette \xE0 gauche pour marcher, glissez \xE0 droite pour regarder. Visez un objet avec le point au centre, puis touchez Action.":"Z Q S D pour marcher, souris pour regarder (cliquez dans le restaurant). Visez un objet avec le point central et cliquez, ou appuyez sur E."}</div>
    ${_t.best?`<p class="note">Meilleure journ\xE9e : ${Ht(_t.best)}</p>`:""}`,[[e?"Continuer \u2014 jour "+_t.day:"Jouer",ou,"a"],["R\xE9glages",()=>au(!1),"c"],...su.enabled?[["Jouer \xE0 deux",nf,"b"]]:[]])}function au(r){r&&It==="solo"&&I&&(I.paused=!0),z0({...Zs},{save:yb,back:()=>{r?(I&&(I.paused=!1),na()):aa()},quit:r?()=>{ys()}:null,reset:()=>{D0(),_t=ru(),bi("bad"),Ar(null),aa(),xs("Progression remise \xE0 z\xE9ro")}})}function Z0(){It==="solo"&&(I.paused=!0);let r=()=>{I&&(I.paused=!1),na()},e;e=k0((i,s)=>{if(It==="guest"){Vt&&Vt.send({t:"order",n:++bb,id:i}),bi("buy"),setTimeout(()=>{!ei("overlay").hidden&&ei("pend")&&s()},700);return}let n=Jh(i,1);bi(n.ok?"buy":"bad"),s();let a=ei("pend");a&&(a.innerHTML=(n.ok?"\u2705 ":"\u26A0\uFE0F ")+n.msg+"<br>"+a.innerHTML)},r),e()}function ou(){if(_t.money<15){let r=20-_t.money;_t.money=20,il(_t),setTimeout(()=>xs("Pr\xEAt du boulanger : +"+Ht(r)+" pour red\xE9marrer"),600)}if(Vt&&It!=="solo"&&It==="host")return Q0();It="solo",sr=0,vt.li=0,sf(),tl(),Ar(Ko(_t,1)),jo(I.level,I.ups),rl(),na(),ei("gear").hidden=!1,lu(""),I.level>1&&setTimeout(()=>{I&&I.ph==="play"&&xs("Jour "+I.day+" \xB7 Niveau "+I.level)},400)}var nl=null;function Mb(){ei("gear").hidden=!0,It!=="guest"&&(nl=zp(_t),_t=nl.next,il(_t),bi(nl.st?"serve":"bad"),It==="host"&&Vt&&Vt.send({t:"end",res:{...nl,next:void 0},sv:{day:_t.day,xp:_t.xp,money:_t.money}}),Sb())}function Sb(){Jp(nl,_t,{shop:()=>G0(_t,{next:ou,menu:ys,bought:()=>il(_t)}),next:ou,menu:ys})}var X0=-1,Vt=null,Qp="",Cr=!1,bb=0,ef=0,tf=0,rf=0,q0=0,Y0=0,Js=!1,lu=(r,e)=>{let t=ei("net");t.hidden=!r,t.textContent=r||"",t.classList.toggle("on",!!e)};function sf(){Vt&&(Vt.onclose=()=>{},Vt.close(),Vt=null),Cr=!1,Js=!1,lu("")}function ys(){sf(),It="solo",Ar(null),aa()}function nf(){Ai("<h2>Jouer \xE0 deux</h2><p>Chacun sur son \xE9cran, dans le m\xEAme restaurant. L\u2019un cr\xE9e la partie et donne le code, l\u2019autre le saisit.</p>",[["Cr\xE9er une partie",Tb,"a"],["Rejoindre",$0,"b"],["Retour",aa,"c"]])}async function J0(r,e){sf(),Qp=r,Vt=new nu(r),Vt.onpeers=t=>wb(t,e),Vt.onmsg=t=>Ab(t,e),Vt.onclose=()=>{Vt&&(lu("Connexion perdue"),I&&I.ph==="play"&&(I.ph="end",Ai("<h2>Partie interrompue</h2><p>La connexion avec l\u2019autre joueur est perdue.</p>",[["Retour au menu",ys,"c"]])))},await Vt.open()}async function Tb(){try{await J0(H0(),"host")}catch{return Ai("<h2>Connexion impossible</h2><p>Le serveur de jeu \xE0 deux ne r\xE9pond pas. R\xE9essayez dans un instant.</p>",[["Retour",nf,"c"]])}It="host",Ar(null),cu()}function $0(){Ai('<h2>Rejoindre une partie</h2><p>Entrez le code \xE0 4 lettres affich\xE9 chez l\u2019autre joueur.</p><input id="codeIn" maxlength="4" autocomplete="off" placeholder="ABCD">',[["Rejoindre",async()=>{let r=(ei("codeIn").value||"").toUpperCase().replace(/[^A-Z]/g,"");if(r.length!==4)return xs("Le code fait 4 lettres");try{await J0(r,"guest")}catch{return Ai("<h2>Connexion impossible</h2><p>V\xE9rifiez le code et r\xE9essayez.</p>",[["Retour",$0,"c"]])}It="guest",Ar(null),sr=1,vt.li=1,cu(),Vt.send({t:"hello"})},"b"],["Retour",nf,"c"]],r=>{let e=r.querySelector("#codeIn");e.focus(),e.addEventListener("keydown",t=>{t.key==="Enter"&&r.querySelector(".btn.b").click()})})}function cu(){Js=!0,It==="host"?Ai(`<h2>Partie \xE0 deux</h2><p>Donnez ce code \xE0 l\u2019autre joueur :</p><div class="code">${Qp}</div><p>${Cr?"Le 2e joueur est l\xE0 ! Ouvrez le restaurant.":"En attente du 2e joueur\u2026"}</p>`,[["Ouvrir le restaurant",Q0,"b",!Cr],["Annuler",ys,"c"]]):Ai(`<h2>Partie ${Qp}</h2><p>${Cr?"Connect\xE9 ! En attente que l\u2019h\xF4te ouvre le restaurant\u2026":"Personne n\u2019a encore cr\xE9\xE9 de partie avec ce code."}</p>`,[["Quitter",ys,"c"]]),Js=!0}function Q0(){_t.money<15&&(_t.money=20,il(_t));let r=I?I.g:0;It="host",sr=0,vt.li=0,tl(),Ar(Ko(_t,2)),I.g=r+1,I.players[1].on=Cr,jo(I.level,I.ups),rl(),ef=0,tf=0,na(),Js=!1,ei("gear").hidden=!1}function Eb(r){It="guest",sr=1,vt.li=1,tl(),Ar(Ko(_t,2)),I.g=r.g,I.players[0].on=!0,rf=r.m?r.m[0]:0,rl(),$p(I,r),jo(I.level,I.ups),na(),Js=!1,ei("gear").hidden=!1}function wb(r,e){Cr=r>=2,lu(Cr?"2 joueurs":e==="host"?"Seul en ligne":"H\xF4te introuvable",Cr),I&&It==="host"&&(I.players[1].on=Cr),Js&&cu(),e==="guest"&&!Cr&&I&&I.ph==="play"&&(I.ph="end",Ai("<h2>Partie interrompue</h2><p>L\u2019h\xF4te a quitt\xE9 la partie.</p>",[["Retour au menu",ys,"c"]]))}function Ab(r,e){if(e==="host")if(r.t==="pos"&&I&&I.players[1])Object.assign(I.players[1],{tx:r.x,tz:r.z,yaw:r.y,pitch:r.p});else if(r.t==="act"&&I&&r.n>ef)ef=r.n,Zo(1,r.id);else if(r.t==="order"&&I&&r.n>tf){tf=r.n;let t=Jh(r.id,1);I.msg2={n:I.msg2.n+1,t:t.msg,p:"",s:t.ok?"buy":"bad"}}else r.t==="hello"&&Js&&cu();else if(r.t==="world"){let t=r.w;t.ph==="play"&&(It!=="guest"||!I||I.g!==t.g)?Eb(t):It==="guest"&&I&&t.g===I.g&&I.ph!=="end"&&$p(I,t,i=>{i[0]>rf&&(rf=i[0],i[1]&&xs(i[1]),i[2]&&Kp(i[2]),bi(i[3]||(i[2]?"serve":"bad")))})}else r.t==="pos"&&I&&I.players[0]?Object.assign(I.players[0],{tx:r.x,tz:r.z,yaw:r.y,pitch:r.p}):r.t==="end"&&I&&X0!==I.g&&(X0=I.g,I.ph="end",ei("gear").hidden=!0,Jp(r.res,r.sv,{shop:null,next:null,menu:ys}))}function Rb(r){if(!Vt||!I||It==="solo")return;let e=I.players[sr];r-q0>50&&(q0=r,Vt.send({t:"pos",x:+e.x.toFixed(2),z:+e.z.toFixed(2),y:+e.yaw.toFixed(2),p:+e.pitch.toFixed(2)})),It==="host"&&r-Y0>100&&(Y0=r,Vt.send({t:"world",w:V0(I)}))}function ev(r){let e=Math.min(.05,(r-W0)/1e3);W0=r;try{I&&(I.ph==="play"&&vt.canPlay()&&x0(e),I.ph==="play"&&Bp(e),Zp()),Rb(r),R0(r,e,sr,It),Vg(e)}catch(t){console.error(t)}requestAnimationFrame(ev)}async function Cb(){let r=ei("loadbar");try{await Promise.all([document.fonts.load("bold 20px Bungee"),document.fonts.load("600 20px Rubik"),document.fonts.load("800 20px Rubik")])}catch{}kg(ei("stage"),Zs),K0();try{await Qg(e=>{r.style.width=Math.round(e*100)+"%"})}catch(e){console.error(e),ei("loading").textContent="Impossible de charger les mod\xE8les 3D.";return}u0(),w0(),_0(),jo(Er(_t.xp),_t.ups),ei("gear").addEventListener("click",()=>{I&&I.ph==="play"&&au(!0)}),ei("loading").remove(),xb=!0,aa(),requestAnimationFrame(ev),"serviceWorker"in navigator&&location.protocol!=="file:"&&!new URLSearchParams(location.search).has("nosw")&&navigator.serviceWorker.register("./sw.js").catch(()=>{}),new URLSearchParams(location.search).has("debug")&&(window.__bb={menu:aa,act:e=>vt.onAction(e),get mode(){return It},get G(){return I},SAVE:()=>_t,startDay:ou,interact:Zo,R:me,rules:kp,openSettings:au})}Cb();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
