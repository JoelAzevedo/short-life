(()=>{var uh="170";var Kf=0,pu=1,jf=2;var Cd=1,dh=2,ti=3,Cn=0,an=1,Te=2,zn=0,Rs=1,yn=2,mu=3,gu=4,Qf=5,Yi=100,tp=101,ep=102,np=103,ip=104,sp=200,rp=201,op=202,ap=203,Nl=204,Fl=205,lp=206,cp=207,hp=208,up=209,dp=210,fp=211,pp=212,mp=213,gp=214,Ol=0,Bl=1,zl=2,Ls=3,Hl=4,Vl=5,Gl=6,Wl=7,Pd=0,xp=1,yp=2,wi=0,fh=1,ph=2,mh=3,gh=4,vp=5,xh=6,Nr=7;var Id=300,Ds=301,ks=302,Xl=303,ql=304,ma=306,Yl=1e3,$i=1001,Zl=1002,fn=1003,_p=1004;var eo=1005;var On=1006,nl=1007;var Ji=1008;var ii=1009,Ld=1010,Dd=1011,Mr=1012,yh=1013,Ki=1014,Bn=1015,In=1016,vh=1017,_h=1018,Us=1020,kd=35902,Ud=1021,Nd=1022,Rn=1023,Fd=1024,Od=1025,Cs=1026,Ns=1027,wh=1028,bh=1029,Bd=1030,Mh=1031;var Sh=1033,Do=33776,ko=33777,Uo=33778,No=33779,$l=35840,Jl=35841,Kl=35842,jl=35843,Ql=36196,tc=37492,ec=37496,nc=37808,ic=37809,sc=37810,rc=37811,oc=37812,ac=37813,lc=37814,cc=37815,hc=37816,uc=37817,dc=37818,fc=37819,pc=37820,mc=37821,Fo=36492,gc=36494,xc=36495,zd=36283,yc=36284,vc=36285,_c=36286;var Oo=2300,wc=2301,il=2302,xu=2400,yu=2401,vu=2402;var wp=3200,bp=3201;var Hd=0,Mp=1,vi="",Be="srgb",Gs="srgb-linear",ga="linear",ue="srgb";var as=7680;var _u=519,Sp=512,Tp=513,Ep=514,Vd=515,Ap=516,Rp=517,Cp=518,Pp=519,bc=35044;var wu="300 es",ei=2e3,Bo=2001,bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bu=1234567,xr=Math.PI/180,Sr=180/Math.PI;function Hn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function Th(i,t){return(i%t+t)%t}function Ip(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Lp(i,t,e){return i!==t?(e-i)/(t-i):0}function yr(i,t,e){return(1-e)*i+e*t}function Dp(i,t,e,n){return yr(i,t,1-Math.exp(-e*n))}function kp(i,t=1){return t-Math.abs(Th(i,t*2)-t)}function Up(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Np(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Fp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Op(i,t){return i+Math.random()*(t-i)}function Bp(i){return i*(.5-Math.random())}function zp(i){i!==void 0&&(bu=i);let t=bu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hp(i){return i*xr}function Vp(i){return i*Sr}function Gp(i){return(i&i-1)===0&&i!==0}function Wp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function An(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ws={DEG2RAD:xr,RAD2DEG:Sr,generateUUID:Hn,clamp:ze,euclideanModulo:Th,mapLinear:Ip,inverseLerp:Lp,lerp:yr,damp:Dp,pingpong:kp,smoothstep:Up,smootherstep:Np,randInt:Fp,randFloat:Op,randFloatSpread:Bp,seededRandom:zp,degToRad:Hp,radToDeg:Vp,isPowerOfTwo:Gp,ceilPowerOfTwo:Wp,floorPowerOfTwo:Xp,setQuaternionFromProperEuler:qp,normalize:fe,denormalize:An},tt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],_=s[1],y=s[4],v=s[7],D=s[2],E=s[5],A=s[8];return r[0]=o*x+a*_+l*D,r[3]=o*g+a*y+l*E,r[6]=o*p+a*v+l*A,r[1]=c*x+h*_+u*D,r[4]=c*g+h*y+u*E,r[7]=c*p+h*v+u*A,r[2]=d*x+f*_+m*D,r[5]=d*g+f*y+m*E,r[8]=d*p+f*v+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(sl.makeScale(t,e)),this}rotate(t){return this.premultiply(sl.makeRotation(-t)),this}translate(t,e){return this.premultiply(sl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},sl=new $t;function Gd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yp(){let i=zo("canvas");return i.style.display="block",i}var Mu={};function mr(i){i in Mu||(Mu[i]=!0,console.warn(i))}function Zp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function $p(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Jp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ne={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(i.r=ni(i.r),i.g=ni(i.g),i.b=ni(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(i.r=Ps(i.r),i.g=Ps(i.g),i.b=Ps(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?ga:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Su=[.64,.33,.3,.6,.15,.06],Tu=[.2126,.7152,.0722],Eu=[.3127,.329],Au=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ru=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[Gs]:{primaries:Su,whitePoint:Eu,transfer:ga,toXYZ:Au,fromXYZ:Ru,luminanceCoefficients:Tu,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:Su,whitePoint:Eu,transfer:ue,toXYZ:Au,fromXYZ:Ru,luminanceCoefficients:Tu,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});var ls,Mc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ls===void 0&&(ls=zo("canvas")),ls.width=t.width,ls.height=t.height;let n=ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ni(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Kp=0,Ho=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Hn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rl(s[o].image)):r.push(rl(s[o]))}else r=rl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function rl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jp=0,ln=class i extends bi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$i,s=$i,r=On,o=Ji,a=Rn,l=ii,c=i.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Hn(),this.name="",this.source=new Ho(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Id)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yl:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case Zl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yl:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case Zl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Id;ln.DEFAULT_ANISOTROPY=1;var me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(f+1)/2,D=(p+1)/2,E=(h+d)/4,A=(u+x)/4,L=(m+g)/4;return y>v&&y>D?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=A/n):v>D?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=L/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=A/r,s=L/r),this.set(n,s,r,e),this}let _=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sc=class extends bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ho(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends Sc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Vo=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tc=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let g=1-a,p=l*d+c*f+h*m+u*x,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let D=Math.sqrt(y),E=Math.atan2(D,p*_);g=Math.sin(g*E)/D,a=Math.sin(a*E)/D}let v=a*_;if(l=l*g+d*v,c=c*g+f*v,h=h*g+m*v,u=u*g+x*v,g===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ol.copy(this).projectOnVector(t),this.sub(ol)}reflect(t){return this.sub(ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ol=new C,Cu=new Mi,si=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),no.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),no.copy(n.boundingBox)),no.applyMatrix4(t.matrixWorld),this.union(no)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),io.subVectors(this.max,rr),cs.subVectors(t.a,rr),hs.subVectors(t.b,rr),us.subVectors(t.c,rr),fi.subVectors(hs,cs),pi.subVectors(us,hs),zi.subVectors(cs,us);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-zi.z,zi.y,fi.z,0,-fi.x,pi.z,0,-pi.x,zi.z,0,-zi.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-zi.y,zi.x,0];return!al(e,cs,hs,us,io)||(e=[1,0,0,0,1,0,0,0,1],!al(e,cs,hs,us,io))?!1:(so.crossVectors(fi,pi),e=[so.x,so.y,so.z],al(e,cs,hs,us,io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},$n=[new C,new C,new C,new C,new C,new C,new C,new C],Mn=new C,no=new si,cs=new C,hs=new C,us=new C,fi=new C,pi=new C,zi=new C,rr=new C,io=new C,so=new C,Hi=new C;function al(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hi.fromArray(i,r);let a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Qp=new si,or=new C,ll=new C,Si=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Qp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);let e=or.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(ll)),this.expandByPoint(or.copy(t.center).sub(ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Jn=new C,cl=new C,ro=new C,mi=new C,hl=new C,oo=new C,ul=new C,Tr=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){cl.copy(t).add(e).multiplyScalar(.5),ro.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(cl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ro),a=mi.dot(this.direction),l=-mi.dot(ro),c=mi.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(cl).addScaledVector(ro,d),f}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);let n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){hl.subVectors(e,t),oo.subVectors(n,t),ul.crossVectors(hl,oo);let o=this.direction.dot(ul),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,t);let l=a*this.direction.dot(oo.crossVectors(mi,oo));if(l<0)return null;let c=a*this.direction.dot(hl.cross(mi));if(c<0||l+c>o)return null;let h=-a*mi.dot(ul);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pe=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,m,x,g)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),o=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tm,t,em)}lookAt(t,e,n){let s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),gi.crossVectors(n,un),gi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),gi.crossVectors(n,un)),gi.normalize(),ao.crossVectors(un,gi),s[0]=gi.x,s[4]=ao.x,s[8]=un.x,s[1]=gi.y,s[5]=ao.y,s[9]=un.y,s[2]=gi.z,s[6]=ao.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],_=n[3],y=n[7],v=n[11],D=n[15],E=s[0],A=s[4],L=s[8],S=s[12],w=s[1],P=s[5],H=s[9],N=s[13],U=s[2],Y=s[6],W=s[10],it=s[14],X=s[3],ut=s[7],yt=s[11],Rt=s[15];return r[0]=o*E+a*w+l*U+c*X,r[4]=o*A+a*P+l*Y+c*ut,r[8]=o*L+a*H+l*W+c*yt,r[12]=o*S+a*N+l*it+c*Rt,r[1]=h*E+u*w+d*U+f*X,r[5]=h*A+u*P+d*Y+f*ut,r[9]=h*L+u*H+d*W+f*yt,r[13]=h*S+u*N+d*it+f*Rt,r[2]=m*E+x*w+g*U+p*X,r[6]=m*A+x*P+g*Y+p*ut,r[10]=m*L+x*H+g*W+p*yt,r[14]=m*S+x*N+g*it+p*Rt,r[3]=_*E+y*w+v*U+D*X,r[7]=_*A+y*P+v*Y+D*ut,r[11]=_*L+y*H+v*W+D*yt,r[15]=_*S+y*N+v*it+D*Rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],_=u*g*c-x*d*c+x*l*f-a*g*f-u*l*p+a*d*p,y=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,v=h*x*c-m*u*c+m*a*f-o*x*f-h*a*p+o*u*p,D=m*u*l-h*x*l-m*a*d+o*x*d+h*a*g-o*u*g,E=e*_+n*y+s*v+r*D;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return t[0]=_*A,t[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*p-n*d*p)*A,t[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*p+n*l*p)*A,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*A,t[4]=y*A,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*A,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*A,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*A,t[8]=v*A,t[9]=(m*u*r-h*x*r-m*n*f+e*x*f+h*n*p-e*u*p)*A,t[10]=(o*x*r-m*a*r+m*n*c-e*x*c-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*A,t[12]=D*A,t[13]=(h*x*s-m*u*s+m*n*d-e*x*d-h*n*g+e*u*g)*A,t[14]=(m*a*s-o*x*s-m*n*l+e*x*l+o*n*g-e*a*g)*A,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,_=l*c,y=l*h,v=l*u,D=n.x,E=n.y,A=n.z;return s[0]=(1-(x+p))*D,s[1]=(f+v)*D,s[2]=(m-y)*D,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(d+p))*E,s[6]=(g+_)*E,s[7]=0,s[8]=(m+y)*A,s[9]=(g-_)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ds.set(s[0],s[1],s[2]).length(),o=ds.set(s[4],s[5],s[6]).length(),a=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Sn.copy(this);let c=1/r,h=1/o,u=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ei){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,m;if(a===ei)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Bo)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ei){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h,m,x;if(a===ei)m=(o+r)*u,x=-2*u;else if(a===Bo)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ds=new C,Sn=new pe,tm=new C(0,0,0),em=new C(1,1,1),gi=new C,ao=new C,un=new C,Pu=new pe,Iu=new Mi,Vn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var Er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nm=0,Lu=new C,fs=new Mi,Kn=new pe,lo=new C,ar=new C,im=new C,sm=new Mi,Du=new C(1,0,0),ku=new C(0,1,0),Uu=new C(0,0,1),Nu={type:"added"},rm={type:"removed"},ps={type:"childadded",child:null},dl={type:"childremoved",child:null},Le=class i extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new Vn,n=new Mi,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new $t}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(Du,t)}rotateY(t){return this.rotateOnAxis(ku,t)}rotateZ(t){return this.rotateOnAxis(Uu,t)}translateOnAxis(t,e){return Lu.copy(t).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Du,t)}translateY(t){return this.translateOnAxis(ku,t)}translateZ(t){return this.translateOnAxis(Uu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lo.copy(t):lo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(ar,lo,this.up):Kn.lookAt(lo,ar,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(Kn),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nu),ps.child=t,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rm),dl.child=t,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nu),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,im),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,sm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Le.DEFAULT_UP=new C(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new C,jn=new C,fl=new C,Qn=new C,ms=new C,gs=new C,Fu=new C,pl=new C,ml=new C,gl=new C,xl=new me,yl=new me,vl=new me,_i=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),jn.subVectors(n,e),fl.subVectors(t,e);let o=Tn.dot(Tn),a=Tn.dot(jn),l=Tn.dot(fl),c=jn.dot(jn),h=jn.dot(fl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return xl.setScalar(0),yl.setScalar(0),vl.setScalar(0),xl.fromBufferAttribute(t,e),yl.fromBufferAttribute(t,n),vl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(xl,r.x),o.addScaledVector(yl,r.y),o.addScaledVector(vl,r.z),o}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),jn.subVectors(t,e),Tn.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Tn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ms.subVectors(s,n),gs.subVectors(r,n),pl.subVectors(t,n);let l=ms.dot(pl),c=gs.dot(pl);if(l<=0&&c<=0)return e.copy(n);ml.subVectors(t,s);let h=ms.dot(ml),u=gs.dot(ml);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ms,o);gl.subVectors(t,r);let f=ms.dot(gl),m=gs.dot(gl);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(gs,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Fu.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Fu,a);let p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(ms,o).addScaledVector(gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},co={h:0,s:0,l:0};function _l(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ct=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Th(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=_l(o,r,t+1/3),this.g=_l(o,r,t),this.b=_l(o,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let n=Wd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return ne.fromWorkingColorSpace(qe.copy(this),t),Math.round(ze(qe.r*255,0,255))*65536+Math.round(ze(qe.g*255,0,255))*256+Math.round(ze(qe.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(qe.copy(this),e);let n=qe.r,s=qe.g,r=qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Be){ne.fromWorkingColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,s=qe.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(co);let n=yr(xi.h,co.h,e),s=yr(xi.s,co.s,e),r=yr(xi.l,co.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Ct;Ct.NAMES=Wd;var om=0,ri=class extends bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Hn(),this.name="",this.blending=Rs,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Fl,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nl&&(n.blendSrc=this.blendSrc),this.blendDst!==Fl&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_u&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ye=class extends ri{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new C,ho=new tt,Fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bc,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ho.fromBufferAttribute(this,e),ho.applyMatrix3(t),this.setXY(e,ho.x,ho.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bc&&(t.usage=this.usage),t}};var Go=class extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Wo=class extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}},am=0,xn=new pe,wl=new Le,xs=new C,dn=new si,lr=new si,Ne=new C,Re=class i extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gd(t)?Wo:Go)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return wl.lookAt(t),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];lr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(dn.min,lr.min),dn.expandByPoint(Ne),Ne.addVectors(dn.max,lr.max),dn.expandByPoint(Ne)):(dn.expandByPoint(lr.min),dn.expandByPoint(lr.max))}dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ne.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(t,c),Ne.add(xs)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new C,l[L]=new C;let c=new C,h=new C,u=new C,d=new tt,f=new tt,m=new tt,x=new C,g=new C;function p(L,S,w){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,w),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,w),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[L].add(x),a[S].add(x),a[w].add(x),l[L].add(g),l[S].add(g),l[w].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let L=0,S=_.length;L<S;++L){let w=_[L],P=w.start,H=w.count;for(let N=P,U=P+H;N<U;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let y=new C,v=new C,D=new C,E=new C;function A(L){D.fromBufferAttribute(s,L),E.copy(D);let S=a[L];y.copy(S),y.sub(D.multiplyScalar(D.dot(S))).normalize(),v.crossVectors(E,S);let P=v.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,P)}for(let L=0,S=_.length;L<S;++L){let w=_[L],P=w.start,H=w.count;for(let N=P,U=P+H;N<U;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Fe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ou=new pe,Vi=new Tr,uo=new Si,Bu=new C,fo=new C,po=new C,mo=new C,bl=new C,go=new C,zu=new C,xo=new C,Mt=class extends Le{constructor(t=new Re,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){go.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(bl.fromBufferAttribute(u,t),o?go.addScaledVector(bl,h):go.addScaledVector(bl.sub(e),h))}e.add(go)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(uo.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(uo,Bu)===null||Vi.origin.distanceToSquared(Bu)>(t.far-t.near)**2))&&(Ou.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],_=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,D=y;v<D;v+=3){let E=a.getX(v),A=a.getX(v+1),L=a.getX(v+2);s=yo(this,p,t,n,c,h,u,E,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let _=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);s=yo(this,o,t,n,c,h,u,_,y,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],_=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,D=y;v<D;v+=3){let E=v,A=v+1,L=v+2;s=yo(this,p,t,n,c,h,u,E,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let _=g,y=g+1,v=g+2;s=yo(this,o,t,n,c,h,u,_,y,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function lm(i,t,e,n,s,r,o,a){let l;if(t.side===an?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Cn,a),l===null)return null;xo.copy(a),xo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(xo);return c<e.near||c>e.far?null:{distance:c,point:xo.clone(),object:i}}function yo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,fo),i.getVertexPosition(l,po),i.getVertexPosition(c,mo);let h=lm(i,t,e,n,fo,po,mo,zu);if(h){let u=new C;_i.getBarycoord(zu,fo,po,mo,u),s&&(h.uv=_i.getInterpolatedAttribute(s,a,l,c,u,new tt)),r&&(h.uv1=_i.getInterpolatedAttribute(r,a,l,c,u,new tt)),o&&(h.normal=_i.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new C,materialIndex:0};_i.getNormal(fo,po,mo,d.normal),h.face=d,h.barycoord=u}return h}var Ze=class i extends Re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function m(x,g,p,_,y,v,D,E,A,L,S){let w=v/A,P=D/L,H=v/2,N=D/2,U=E/2,Y=A+1,W=L+1,it=0,X=0,ut=new C;for(let yt=0;yt<W;yt++){let Rt=yt*P-N;for(let qt=0;qt<Y;qt++){let le=qt*w-H;ut[x]=le*_,ut[g]=Rt*y,ut[p]=U,c.push(ut.x,ut.y,ut.z),ut[x]=0,ut[g]=0,ut[p]=E>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(qt/A),u.push(1-yt/L),it+=1}}for(let yt=0;yt<L;yt++)for(let Rt=0;Rt<A;Rt++){let qt=d+Rt+Y*yt,le=d+Rt+Y*(yt+1),J=d+(Rt+1)+Y*(yt+1),at=d+(Rt+1)+Y*yt;l.push(qt,le,at),l.push(le,J,at),X+=6}a.addGroup(f,X,S),f+=X,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function je(i){let t={};for(let e=0;e<i.length;e++){let n=Fs(i[e]);for(let s in n)t[s]=n[s]}return t}function cm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var Ri={clone:Fs,merge:je},hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,De=class extends ri{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=cm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Xo=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yi=new C,Hu=new tt,Vu=new tt,on=class extends Xo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,Hu,Vu),e.subVectors(Vu,Hu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ys=-90,vs=1,Ec=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(ys,vs,t,e);s.layers=this.layers,this.add(s);let r=new on(ys,vs,t,e);r.layers=this.layers,this.add(r);let o=new on(ys,vs,t,e);o.layers=this.layers,this.add(o);let a=new on(ys,vs,t,e);a.layers=this.layers,this.add(a);let l=new on(ys,vs,t,e);l.layers=this.layers,this.add(l);let c=new on(ys,vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},qo=class extends ln{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ds,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ac=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:On}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ze(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:zn});r.uniforms.tEquirect.value=e;let o=new Mt(s,r),a=e.minFilter;return e.minFilter===Ji&&(e.minFilter=On),new Ec(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ml=new C,dm=new C,fm=new $t,En=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ml.subVectors(n,e).cross(dm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ml),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fm.getNormalMatrix(t),s=this.coplanarPoint(Ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gi=new Si,vo=new C,Ar=class{constructor(t=new En,e=new En,n=new En,s=new En,r=new En,o=new En){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],_=s[13],y=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,g-f,v-p).normalize(),n[1].setComponents(l+r,d+c,g+f,v+p).normalize(),n[2].setComponents(l+o,d+h,g+m,v+_).normalize(),n[3].setComponents(l-o,d-h,g-m,v-_).normalize(),n[4].setComponents(l-a,d-u,g-x,v-y).normalize(),e===ei)n[5].setComponents(l+a,d+u,g+x,v+y).normalize();else if(e===Bo)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(vo.x=s.normal.x>0?t.max.x:t.min.x,vo.y=s.normal.y>0?t.max.y:t.min.y,vo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function pm(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var He=class i extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let _=p*d-o;for(let y=0;y<c;y++){let v=y*u-r;m.push(v,-_,0),x.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let y=_+c*p,v=_+c*(p+1),D=_+1+c*(p+1),E=_+1+c*p;f.push(y,v,E),f.push(v,D,E)}this.setIndex(f),this.setAttribute("position",new oe(m,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gm=`#ifdef USE_ALPHAHASH
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
#endif`,xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wm=`#ifdef USE_AOMAP
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
#endif`,bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mm=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Am=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rm=`#ifdef USE_IRIDESCENCE
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
#endif`,Cm=`#ifdef USE_BUMPMAP
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
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Om=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Bm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zm=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ym=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n0=`#ifdef USE_GRADIENTMAP
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
}`,i0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o0=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,a0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,l0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,f0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,g0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S0=`#if defined( USE_POINTS_UV )
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
#endif`,T0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
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
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,D0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F0=`#ifdef USE_NORMALMAP
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
#endif`,O0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,W0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,j0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eg=`#ifdef USE_SKINNING
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
#endif`,ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lg=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mg=`uniform sampler2D t2D;
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`#include <common>
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
}`,wg=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bg=`#define DISTANCE
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
}`,Mg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`uniform float scale;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Pg=`#define LAMBERT
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
}`,Ig=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Lg=`#define MATCAP
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
}`,Dg=`#define MATCAP
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
}`,kg=`#define NORMAL
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
}`,Ug=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ng=`#define PHONG
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
}`,Fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Og=`#define STANDARD
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
}`,Bg=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,zg=`#define TOON
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
}`,Hg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Vg=`uniform float size;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,Xg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,qg=`uniform float rotation;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:mm,alphahash_pars_fragment:gm,alphamap_fragment:xm,alphamap_pars_fragment:ym,alphatest_fragment:vm,alphatest_pars_fragment:_m,aomap_fragment:wm,aomap_pars_fragment:bm,batching_pars_vertex:Mm,batching_vertex:Sm,begin_vertex:Tm,beginnormal_vertex:Em,bsdfs:Am,iridescence_fragment:Rm,bumpmap_pars_fragment:Cm,clipping_planes_fragment:Pm,clipping_planes_pars_fragment:Im,clipping_planes_pars_vertex:Lm,clipping_planes_vertex:Dm,color_fragment:km,color_pars_fragment:Um,color_pars_vertex:Nm,color_vertex:Fm,common:Om,cube_uv_reflection_fragment:Bm,defaultnormal_vertex:zm,displacementmap_pars_vertex:Hm,displacementmap_vertex:Vm,emissivemap_fragment:Gm,emissivemap_pars_fragment:Wm,colorspace_fragment:Xm,colorspace_pars_fragment:qm,envmap_fragment:Ym,envmap_common_pars_fragment:Zm,envmap_pars_fragment:$m,envmap_pars_vertex:Jm,envmap_physical_pars_fragment:a0,envmap_vertex:Km,fog_vertex:jm,fog_pars_vertex:Qm,fog_fragment:t0,fog_pars_fragment:e0,gradientmap_pars_fragment:n0,lightmap_pars_fragment:i0,lights_lambert_fragment:s0,lights_lambert_pars_fragment:r0,lights_pars_begin:o0,lights_toon_fragment:l0,lights_toon_pars_fragment:c0,lights_phong_fragment:h0,lights_phong_pars_fragment:u0,lights_physical_fragment:d0,lights_physical_pars_fragment:f0,lights_fragment_begin:p0,lights_fragment_maps:m0,lights_fragment_end:g0,logdepthbuf_fragment:x0,logdepthbuf_pars_fragment:y0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:_0,map_fragment:w0,map_pars_fragment:b0,map_particle_fragment:M0,map_particle_pars_fragment:S0,metalnessmap_fragment:T0,metalnessmap_pars_fragment:E0,morphinstance_vertex:A0,morphcolor_vertex:R0,morphnormal_vertex:C0,morphtarget_pars_vertex:P0,morphtarget_vertex:I0,normal_fragment_begin:L0,normal_fragment_maps:D0,normal_pars_fragment:k0,normal_pars_vertex:U0,normal_vertex:N0,normalmap_pars_fragment:F0,clearcoat_normal_fragment_begin:O0,clearcoat_normal_fragment_maps:B0,clearcoat_pars_fragment:z0,iridescence_pars_fragment:H0,opaque_fragment:V0,packing:G0,premultiplied_alpha_fragment:W0,project_vertex:X0,dithering_fragment:q0,dithering_pars_fragment:Y0,roughnessmap_fragment:Z0,roughnessmap_pars_fragment:$0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:K0,shadowmap_vertex:j0,shadowmask_pars_fragment:Q0,skinbase_vertex:tg,skinning_pars_vertex:eg,skinning_vertex:ng,skinnormal_vertex:ig,specularmap_fragment:sg,specularmap_pars_fragment:rg,tonemapping_fragment:og,tonemapping_pars_fragment:ag,transmission_fragment:lg,transmission_pars_fragment:cg,uv_pars_fragment:hg,uv_pars_vertex:ug,uv_vertex:dg,worldpos_vertex:fg,background_vert:pg,background_frag:mg,backgroundCube_vert:gg,backgroundCube_frag:xg,cube_vert:yg,cube_frag:vg,depth_vert:_g,depth_frag:wg,distanceRGBA_vert:bg,distanceRGBA_frag:Mg,equirect_vert:Sg,equirect_frag:Tg,linedashed_vert:Eg,linedashed_frag:Ag,meshbasic_vert:Rg,meshbasic_frag:Cg,meshlambert_vert:Pg,meshlambert_frag:Ig,meshmatcap_vert:Lg,meshmatcap_frag:Dg,meshnormal_vert:kg,meshnormal_frag:Ug,meshphong_vert:Ng,meshphong_frag:Fg,meshphysical_vert:Og,meshphysical_frag:Bg,meshtoon_vert:zg,meshtoon_frag:Hg,points_vert:Vg,points_frag:Gg,shadow_vert:Wg,shadow_frag:Xg,sprite_vert:qg,sprite_frag:Yg},dt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Fn={basic:{uniforms:je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:je([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:je([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:je([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:je([dt.points,dt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:je([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:je([dt.common,dt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:je([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:je([dt.sprite,dt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:je([dt.common,dt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:je([dt.lights,dt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Fn.physical={uniforms:je([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var _o={r:0,b:0,g:0},Wi=new Vn,Zg=new pe;function $g(i,t,e,n,s,r,o){let a=new Ct(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function x(_){let y=!1,v=m(_);v===null?p(a,l):v&&v.isColor&&(p(v,1),y=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,y){let v=m(y);v&&(v.isCubeTexture||v.mapping===ma)?(h===void 0&&(h=new Mt(new Ze(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:Fs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Wi.copy(y.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(Wi)),h.material.toneMapped=ne.getTransfer(v.colorSpace)!==ue,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Mt(new He(2,2),new De({name:"BackgroundMaterial",uniforms:Fs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ne.getTransfer(v.colorSpace)!==ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(_o,Xd(i)),n.buffers.color.setClear(_o.r,_o.g,_o.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:g}}function Jg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(w,P,H,N,U){let Y=!1,W=u(N,H,P);r!==W&&(r=W,c(r.object)),Y=f(w,N,H,U),Y&&m(w,N,H,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(w,P,H,N),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,P,H){let N=H.wireframe===!0,U=n[w.id];U===void 0&&(U={},n[w.id]=U);let Y=U[P.id];Y===void 0&&(Y={},U[P.id]=Y);let W=Y[N];return W===void 0&&(W=d(l()),Y[N]=W),W}function d(w){let P=[],H=[],N=[];for(let U=0;U<e;U++)P[U]=0,H[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:N,object:w,attributes:{},index:null}}function f(w,P,H,N){let U=r.attributes,Y=P.attributes,W=0,it=H.getAttributes();for(let X in it)if(it[X].location>=0){let yt=U[X],Rt=Y[X];if(Rt===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(Rt=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(Rt=w.instanceColor)),yt===void 0||yt.attribute!==Rt||Rt&&yt.data!==Rt.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function m(w,P,H,N){let U={},Y=P.attributes,W=0,it=H.getAttributes();for(let X in it)if(it[X].location>=0){let yt=Y[X];yt===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor));let Rt={};Rt.attribute=yt,yt&&yt.data&&(Rt.data=yt.data),U[X]=Rt,W++}r.attributes=U,r.attributesNum=W,r.index=N}function x(){let w=r.newAttributes;for(let P=0,H=w.length;P<H;P++)w[P]=0}function g(w){p(w,0)}function p(w,P){let H=r.newAttributes,N=r.enabledAttributes,U=r.attributeDivisors;H[w]=1,N[w]===0&&(i.enableVertexAttribArray(w),N[w]=1),U[w]!==P&&(i.vertexAttribDivisor(w,P),U[w]=P)}function _(){let w=r.newAttributes,P=r.enabledAttributes;for(let H=0,N=P.length;H<N;H++)P[H]!==w[H]&&(i.disableVertexAttribArray(H),P[H]=0)}function y(w,P,H,N,U,Y,W){W===!0?i.vertexAttribIPointer(w,P,H,U,Y):i.vertexAttribPointer(w,P,H,N,U,Y)}function v(w,P,H,N){x();let U=N.attributes,Y=H.getAttributes(),W=P.defaultAttributeValues;for(let it in Y){let X=Y[it];if(X.location>=0){let ut=U[it];if(ut===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(ut=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(ut=w.instanceColor)),ut!==void 0){let yt=ut.normalized,Rt=ut.itemSize,qt=t.get(ut);if(qt===void 0)continue;let le=qt.buffer,J=qt.type,at=qt.bytesPerElement,It=J===i.INT||J===i.UNSIGNED_INT||ut.gpuType===yh;if(ut.isInterleavedBufferAttribute){let ct=ut.data,Ot=ct.stride,Wt=ut.offset;if(ct.isInstancedInterleavedBuffer){for(let Vt=0;Vt<X.locationSize;Vt++)p(X.location+Vt,ct.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Vt=0;Vt<X.locationSize;Vt++)g(X.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Vt=0;Vt<X.locationSize;Vt++)y(X.location+Vt,Rt/X.locationSize,J,yt,Ot*at,(Wt+Rt/X.locationSize*Vt)*at,It)}else{if(ut.isInstancedBufferAttribute){for(let ct=0;ct<X.locationSize;ct++)p(X.location+ct,ut.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ct=0;ct<X.locationSize;ct++)g(X.location+ct);i.bindBuffer(i.ARRAY_BUFFER,le);for(let ct=0;ct<X.locationSize;ct++)y(X.location+ct,Rt/X.locationSize,J,yt,Rt*at,Rt/X.locationSize*ct*at,It)}}else if(W!==void 0){let yt=W[it];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(X.location,yt);break;case 3:i.vertexAttrib3fv(X.location,yt);break;case 4:i.vertexAttrib4fv(X.location,yt);break;default:i.vertexAttrib1fv(X.location,yt)}}}}_()}function D(){L();for(let w in n){let P=n[w];for(let H in P){let N=P[H];for(let U in N)h(N[U].object),delete N[U];delete P[H]}delete n[w]}}function E(w){if(n[w.id]===void 0)return;let P=n[w.id];for(let H in P){let N=P[H];for(let U in N)h(N[U].object),delete N[U];delete P[H]}delete n[w.id]}function A(w){for(let P in n){let H=n[P];if(H[w.id]===void 0)continue;let N=H[w.id];for(let U in N)h(N[U].object),delete N[U];delete H[w.id]}}function L(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function Kg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let L=A===In&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ii&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Bn&&!L)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:D,maxSamples:E}}function Qg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new En,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,y=_*4,v=p.clippingState||null;l.value=v,v=h(m,d,y,f);for(let D=0;D!==y;++D)v[D]=e[D];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=f;y!==x;++y,v+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function tx(i){let t=new WeakMap;function e(o,a){return a===Xl?o.mapping=Ds:a===ql&&(o.mapping=ks),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xl||a===ql)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ac(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ti=class extends Xo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Es=4,Gu=[.125,.215,.35,.446,.526,.582],Zi=20,Sl=new Ti,Wu=new Ct,Tl=null,El=0,Al=0,Rl=!1,qi=(1+Math.sqrt(5))/2,_s=1/qi,Xu=[new C(-qi,_s,0),new C(qi,_s,0),new C(-_s,0,qi),new C(_s,0,qi),new C(0,qi,-_s),new C(0,qi,_s),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Yo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Tl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Tl,El,Al),this._renderer.xr.enabled=Rl,t.scissorTest=!1,wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ds||t.mapping===ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:In,format:Rn,colorSpace:Gs,depthBuffer:!1},s=qu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ex(r)),this._blurMaterial=nx(r,t,e)}return s}_compileMaterial(t){let e=new Mt(this._lodPlanes[0],t);this._renderer.compile(e,Sl)}_sceneToCubeUV(t,e,n,s){let a=new on(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Wu),h.toneMapping=wi,h.autoClear=!1;let f=new Ye({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),m=new Mt(new Ze,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(Wu),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;wo(s,_*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ds||t.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;wo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Sl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xu[(s-r-1)%Xu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Mt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Zi-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Zi;g>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zi}`);let p=[],_=0;for(let A=0;A<Zi;++A){let L=A/x,S=Math.exp(-L*L/2);p.push(S),A===0?_+=S:A<g&&(_+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;let v=this._sizeLods[s],D=3*v*(s>y-Es?s-y+Es:0),E=4*(this._cubeSize-v);wo(e,D,E,3*v,2*v),l.setRenderTarget(e),l.render(u,Sl)}};function ex(i){let t=[],e=[],n=[],s=i,r=i-Es+1+Gu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Es?l=Gu[o-i+Es-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,_=new Float32Array(x*m*f),y=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let E=0;E<f;E++){let A=E%3*2/3-1,L=E>2?0:-1,S=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];_.set(S,x*m*E),y.set(d,g*m*E);let w=[E,E,E,E,E,E];v.set(w,p*m*E)}let D=new Re;D.setAttribute("position",new Fe(_,x)),D.setAttribute("uv",new Fe(y,g)),D.setAttribute("faceIndex",new Fe(v,p)),t.push(D),s>Es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qu(i,t,e){let n=new Qe(i,t,e);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function nx(i,t,e){let n=new Float32Array(Zi),s=new C(0,1,0);return new De({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Yu(){return new De({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Zu(){return new De({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Eh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ix(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Xl||l===ql,h=l===Ds||l===ks;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Yo(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Yo(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function sx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rx(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let y=0,v=_.length;y<v;y+=3){let D=_[y+0],E=_[y+1],A=_[y+2];d.push(D,E,E,A,A,D)}}else if(m!==void 0){let _=m.array;x=m.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let D=y+0,E=y+1,A=y+2;d.push(D,E,E,A,A,D)}}else return;let g=new(Gd(d)?Wo:Go)(d,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ox(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let _=0;_<m;_++)p+=f[_]*x[_];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ax(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lx(i,t,e){let n=new WeakMap,s=new me;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,D=1;v>t.maxTextureSize&&(D=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*D*4*u),A=new Vo(E,v,D,u);A.type=Bn,A.needsUpdate=!0;let L=y*4;for(let w=0;w<u;w++){let P=g[w],H=p[w],N=_[w],U=v*D*4*w;for(let Y=0;Y<P.count;Y++){let W=Y*L;f===!0&&(s.fromBufferAttribute(P,Y),E[U+W+0]=s.x,E[U+W+1]=s.y,E[U+W+2]=s.z,E[U+W+3]=0),m===!0&&(s.fromBufferAttribute(H,Y),E[U+W+4]=s.x,E[U+W+5]=s.y,E[U+W+6]=s.z,E[U+W+7]=0),x===!0&&(s.fromBufferAttribute(N,Y),E[U+W+8]=s.x,E[U+W+9]=s.y,E[U+W+10]=s.z,E[U+W+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new tt(v,D)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function cx(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Zo=class extends ln{constructor(t,e,n,s,r,o,a,l,c,h=Cs){if(h!==Cs&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Cs&&(n=Ki),n===void 0&&h===Ns&&(n=Us),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Yd=new ln,$u=new Zo(1,1),Zd=new Vo,$d=new Tc,Jd=new qo,Ju=[],Ku=[],ju=new Float32Array(16),Qu=new Float32Array(9),td=new Float32Array(4);function Xs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ju[s];if(r===void 0&&(r=new Float32Array(s),Ju[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xa(i,t){let e=Ku[t];e===void 0&&(e=new Int32Array(t),Ku[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function px(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(ke(e,n))return;td.set(n),i.uniformMatrix2fv(this.addr,!1,td),Ue(e,n)}}function mx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(ke(e,n))return;Qu.set(n),i.uniformMatrix3fv(this.addr,!1,Qu),Ue(e,n)}}function gx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(ke(e,n))return;ju.set(n),i.uniformMatrix4fv(this.addr,!1,ju),Ue(e,n)}}function xx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function _x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function wx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($u.compareFunction=Vd,r=$u):r=Yd,e.setTexture2D(t||r,s)}function Ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$d,s)}function Ax(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jd,s)}function Rx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zd,s)}function Cx(i){switch(i){case 5126:return hx;case 35664:return ux;case 35665:return dx;case 35666:return fx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return xx;case 35667:case 35671:return yx;case 35668:case 35672:return vx;case 35669:case 35673:return _x;case 5125:return wx;case 36294:return bx;case 36295:return Mx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Rx}}function Px(i,t){i.uniform1fv(this.addr,t)}function Ix(i,t){let e=Xs(t,this.size,2);i.uniform2fv(this.addr,e)}function Lx(i,t){let e=Xs(t,this.size,3);i.uniform3fv(this.addr,e)}function Dx(i,t){let e=Xs(t,this.size,4);i.uniform4fv(this.addr,e)}function kx(i,t){let e=Xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ux(i,t){let e=Xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nx(i,t){let e=Xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fx(i,t){i.uniform1iv(this.addr,t)}function Ox(i,t){i.uniform2iv(this.addr,t)}function Bx(i,t){i.uniform3iv(this.addr,t)}function zx(i,t){i.uniform4iv(this.addr,t)}function Hx(i,t){i.uniform1uiv(this.addr,t)}function Vx(i,t){i.uniform2uiv(this.addr,t)}function Gx(i,t){i.uniform3uiv(this.addr,t)}function Wx(i,t){i.uniform4uiv(this.addr,t)}function Xx(i,t,e){let n=this.cache,s=t.length,r=xa(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Yd,r[o])}function qx(i,t,e){let n=this.cache,s=t.length,r=xa(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||$d,r[o])}function Yx(i,t,e){let n=this.cache,s=t.length,r=xa(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Jd,r[o])}function Zx(i,t,e){let n=this.cache,s=t.length,r=xa(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Zd,r[o])}function $x(i){switch(i){case 5126:return Px;case 35664:return Ix;case 35665:return Lx;case 35666:return Dx;case 35674:return kx;case 35675:return Ux;case 35676:return Nx;case 5124:case 35670:return Fx;case 35667:case 35671:return Ox;case 35668:case 35672:return Bx;case 35669:case 35673:return zx;case 5125:return Hx;case 36294:return Vx;case 36295:return Gx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return Zx}}var Rc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cx(e.type)}},Cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$x(e.type)}},Pc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Cl=/(\w+)(\])?(\[|\.)?/g;function ed(i,t){i.seq.push(t),i.map[t.id]=t}function Jx(i,t,e){let n=i.name,s=n.length;for(Cl.lastIndex=0;;){let r=Cl.exec(n),o=Cl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ed(e,c===void 0?new Rc(a,i,t):new Cc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Pc(a),ed(e,u)),e=u}}}var Is=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Jx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function nd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Kx=37297,jx=0;function Qx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var id=new $t;function ty(i){ne._getMatrix(id,ne.workingColorSpace,i);let t=`mat3( ${id.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case ga:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Qx(i.getShaderSource(t),o)}else return s}function ey(i,t){let e=ty(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ny(i,t){let e;switch(t){case fh:e="Linear";break;case ph:e="Reinhard";break;case mh:e="Cineon";break;case gh:e="ACESFilmic";break;case xh:e="AgX";break;case Nr:e="Neutral";break;case vp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var bo=new C;function iy(){ne.getLuminanceCoefficients(bo);let i=bo.x.toFixed(4),t=bo.y.toFixed(4),e=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function ry(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function oy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function gr(i){return i!==""}function rd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function od(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(i){return i.replace(ay,cy)}var ly=new Map;function cy(i,t){let e=Kt[t];if(e===void 0){let n=ly.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ic(e)}var hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ad(i){return i.replace(hy,uy)}function uy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ld(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===dh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function fy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ds:case ks:t="ENVMAP_TYPE_CUBE";break;case ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function py(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ks:t="ENVMAP_MODE_REFRACTION";break}return t}function my(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pd:t="ENVMAP_BLENDING_MULTIPLY";break;case xp:t="ENVMAP_BLENDING_MIX";break;case yp:t="ENVMAP_BLENDING_ADD";break}return t}function gy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xy(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=dy(e),c=fy(e),h=py(e),u=my(e),d=gy(e),f=sy(e),m=ry(r),x=s.createProgram(),g,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gr).join(`
`),p.length>0&&(p+=`
`)):(g=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),p=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==wi?ny("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,ey("linearToOutputTexel",e.outputColorSpace),iy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),o=Ic(o),o=rd(o,e),o=od(o,e),a=Ic(a),a=rd(a,e),a=od(a,e),o=ad(o),a=ad(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=_+g+o,v=_+p+a,D=nd(s,s.VERTEX_SHADER,y),E=nd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,D),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(D).trim(),U=s.getShaderInfoLog(E).trim(),Y=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,E);else{let it=sd(s,D,"vertex"),X=sd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+it+`
`+X)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(N===""||U==="")&&(W=!1);W&&(P.diagnostics={runnable:Y,programLog:H,vertexShader:{log:N,prefix:g},fragmentShader:{log:U,prefix:p}})}s.deleteShader(D),s.deleteShader(E),L=new Is(s,x),S=oy(s,x)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,Kx)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=E,this}var yy=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Dc(t),e.set(t,n)),n}},Dc=class{constructor(t){this.id=yy++,this.code=t,this.usedTimes=0}};function vy(i,t,e,n,s,r,o){let a=new Er,l=new Lc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,w,P,H,N){let U=H.fog,Y=N.geometry,W=S.isMeshStandardMaterial?H.environment:null,it=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),X=it&&it.mapping===ma?it.image.height:null,ut=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let yt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Rt=yt!==void 0?yt.length:0,qt=0;Y.morphAttributes.position!==void 0&&(qt=1),Y.morphAttributes.normal!==void 0&&(qt=2),Y.morphAttributes.color!==void 0&&(qt=3);let le,J,at,It;if(ut){let de=Fn[ut];le=de.vertexShader,J=de.fragmentShader}else le=S.vertexShader,J=S.fragmentShader,l.update(S),at=l.getVertexShaderID(S),It=l.getFragmentShaderID(S);let ct=i.getRenderTarget(),Ot=i.state.buffers.depth.getReversed(),Wt=N.isInstancedMesh===!0,Vt=N.isBatchedMesh===!0,re=!!S.map,Q=!!S.matcap,ot=!!it,I=!!S.aoMap,Nt=!!S.lightMap,nt=!!S.bumpMap,bt=!!S.normalMap,ht=!!S.displacementMap,Bt=!!S.emissiveMap,_t=!!S.metalnessMap,R=!!S.roughnessMap,b=S.anisotropy>0,z=S.clearcoat>0,Z=S.dispersion>0,et=S.iridescence>0,$=S.sheen>0,Lt=S.transmission>0,ft=b&&!!S.anisotropyMap,wt=z&&!!S.clearcoatMap,te=z&&!!S.clearcoatNormalMap,st=z&&!!S.clearcoatRoughnessMap,Et=et&&!!S.iridescenceMap,zt=et&&!!S.iridescenceThicknessMap,Gt=$&&!!S.sheenColorMap,At=$&&!!S.sheenRoughnessMap,se=!!S.specularMap,Jt=!!S.specularColorMap,ye=!!S.specularIntensityMap,F=Lt&&!!S.transmissionMap,pt=Lt&&!!S.thicknessMap,q=!!S.gradientMap,j=!!S.alphaMap,xt=S.alphaTest>0,mt=!!S.alphaHash,Yt=!!S.extensions,Ae=wi;S.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Ae=i.toneMapping);let We={shaderID:ut,shaderType:S.type,shaderName:S.name,vertexShader:le,fragmentShader:J,defines:S.defines,customVertexShaderID:at,customFragmentShaderID:It,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Vt,batchingColor:Vt&&N._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&N.instanceColor!==null,instancingMorph:Wt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Gs,alphaToCoverage:!!S.alphaToCoverage,map:re,matcap:Q,envMap:ot,envMapMode:ot&&it.mapping,envMapCubeUVHeight:X,aoMap:I,lightMap:Nt,bumpMap:nt,normalMap:bt,displacementMap:d&&ht,emissiveMap:Bt,normalMapObjectSpace:bt&&S.normalMapType===Mp,normalMapTangentSpace:bt&&S.normalMapType===Hd,metalnessMap:_t,roughnessMap:R,anisotropy:b,anisotropyMap:ft,clearcoat:z,clearcoatMap:wt,clearcoatNormalMap:te,clearcoatRoughnessMap:st,dispersion:Z,iridescence:et,iridescenceMap:Et,iridescenceThicknessMap:zt,sheen:$,sheenColorMap:Gt,sheenRoughnessMap:At,specularMap:se,specularColorMap:Jt,specularIntensityMap:ye,transmission:Lt,transmissionMap:F,thicknessMap:pt,gradientMap:q,opaque:S.transparent===!1&&S.blending===Rs&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:xt,alphaHash:mt,combine:S.combine,mapUv:re&&x(S.map.channel),aoMapUv:I&&x(S.aoMap.channel),lightMapUv:Nt&&x(S.lightMap.channel),bumpMapUv:nt&&x(S.bumpMap.channel),normalMapUv:bt&&x(S.normalMap.channel),displacementMapUv:ht&&x(S.displacementMap.channel),emissiveMapUv:Bt&&x(S.emissiveMap.channel),metalnessMapUv:_t&&x(S.metalnessMap.channel),roughnessMapUv:R&&x(S.roughnessMap.channel),anisotropyMapUv:ft&&x(S.anisotropyMap.channel),clearcoatMapUv:wt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:te&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:At&&x(S.sheenRoughnessMap.channel),specularMapUv:se&&x(S.specularMap.channel),specularColorMapUv:Jt&&x(S.specularColorMap.channel),specularIntensityMapUv:ye&&x(S.specularIntensityMap.channel),transmissionMapUv:F&&x(S.transmissionMap.channel),thicknessMapUv:pt&&x(S.thicknessMap.channel),alphaMapUv:j&&x(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(bt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Y.attributes.uv&&(re||j),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ot,skinning:N.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:qt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:re&&S.map.isVideoTexture===!0&&ne.getTransfer(S.map.colorSpace)===ue,decodeVideoTextureEmissive:Bt&&S.emissiveMap.isVideoTexture===!0&&ne.getTransfer(S.emissiveMap.colorSpace)===ue,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Te,flipSided:S.side===an,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Yt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&S.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function p(S){let w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)w.push(P),w.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(_(w,S),y(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function _(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function y(S,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let w=m[S.type],P;if(w){let H=Fn[w];P=Ri.clone(H.uniforms)}else P=S.uniforms;return P}function D(S,w){let P;for(let H=0,N=h.length;H<N;H++){let U=h[H];if(U.cacheKey===w){P=U,++P.usedTimes;break}}return P===void 0&&(P=new xy(i,w,S,r),h.push(P)),P}function E(S){if(--S.usedTimes===0){let w=h.indexOf(S);h[w]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:D,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:L}}function _y(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function wy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function cd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,x,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||wy),n.length>1&&n.sort(d||cd),s.length>1&&s.sort(d||cd)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function by(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new hd,i.set(n,[o])):s>=r.length?(o=new hd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function My(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ct};break;case"SpotLight":e={position:new C,direction:new C,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Sy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ty=0;function Ey(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ay(i){let t=new My,e=Sy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new pe,o=new pe;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,_=0,y=0,v=0,D=0,E=0,A=0;c.sort(Ey);for(let S=0,w=c.length;S<w;S++){let P=c[S],H=P.color,N=P.intensity,U=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*N,u+=H.g*N,d+=H.b*N;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],N);A++}else if(P.isDirectionalLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let it=P.shadow,X=e.get(P);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=P.shadow.matrix,_++}n.directional[f]=W,f++}else if(P.isSpotLight){let W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(H).multiplyScalar(N),W.distance=U,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[x]=W;let it=P.shadow;if(P.map&&(n.spotLightMap[D]=P.map,D++,it.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[x]=it.matrix,P.castShadow){let X=e.get(P);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=Y,v++}x++}else if(P.isRectAreaLight){let W=t.get(P);W.color.copy(H).multiplyScalar(N),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=W,g++}else if(P.isPointLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let it=P.shadow,X=e.get(P);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,X.shadowCameraNear=it.camera.near,X.shadowCameraFar=it.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=P.shadow.matrix,y++}n.point[m]=W,m++}else if(P.isHemisphereLight){let W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(N),W.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=W,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==_||L.numPointShadows!==y||L.numSpotShadows!==v||L.numSpotMaps!==D||L.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+D-E,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,L.directionalLength=f,L.pointLength=m,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=_,L.numPointShadows=y,L.numSpotShadows=v,L.numSpotMaps=D,L.numLightProbes=A,n.version=Ty++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let y=c[p];if(y.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(y.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function ud(i){let t=new Ay(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ry(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ud(i),t.set(s,[a])):r>=o.length?(a=new ud(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var kc=class extends ri{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Uc=class extends ri{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Py=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Iy(i,t,e){let n=new Ar,s=new tt,r=new tt,o=new me,a=new kc({depthPacking:bp}),l=new Uc,c={},h=e.maxTextureSize,u={[Cn]:an,[an]:Cn,[Te]:Te},d=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Cy,fragmentShader:Py}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Re;m.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Mt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cd;let p=this.type;this.render=function(E,A,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let S=i.getRenderTarget(),w=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),H=i.state;H.setBlending(zn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let N=p!==ti&&this.type===ti,U=p===ti&&this.type!==ti;for(let Y=0,W=E.length;Y<W;Y++){let it=E[Y],X=it.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ut=X.getFrameExtents();if(s.multiply(ut),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,X.mapSize.y=r.y)),X.map===null||N===!0||U===!0){let Rt=this.type!==ti?{minFilter:fn,magFilter:fn}:{};X.map!==null&&X.map.dispose(),X.map=new Qe(s.x,s.y,Rt),X.map.texture.name=it.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let yt=X.getViewportCount();for(let Rt=0;Rt<yt;Rt++){let qt=X.getViewport(Rt);o.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),H.viewport(o),X.updateMatrices(it,Rt),n=X.getFrustum(),v(A,L,X.camera,it,this.type)}X.isPointLightShadow!==!0&&this.type===ti&&_(X,L),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,w,P)};function _(E,A){let L=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Qe(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,L,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,L,f,x,null)}function y(E,A,L,S){let w=null,P=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)w=P;else if(w=L.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=w.uuid,N=A.uuid,U=c[H];U===void 0&&(U={},c[H]=U);let Y=U[N];Y===void 0&&(Y=w.clone(),U[N]=Y,A.addEventListener("dispose",D)),w=Y}if(w.visible=A.visible,w.wireframe=A.wireframe,S===ti?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,L.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let H=i.properties.get(w);H.light=L}return w}function v(E,A,L,S,w){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===ti)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);let N=t.update(E),U=E.material;if(Array.isArray(U)){let Y=N.groups;for(let W=0,it=Y.length;W<it;W++){let X=Y[W],ut=U[X.materialIndex];if(ut&&ut.visible){let yt=y(E,ut,S,w);E.onBeforeShadow(i,E,A,L,N,yt,X),i.renderBufferDirect(L,null,N,yt,E,X),E.onAfterShadow(i,E,A,L,N,yt,X)}}}else if(U.visible){let Y=y(E,U,S,w);E.onBeforeShadow(i,E,A,L,N,Y,null),i.renderBufferDirect(L,null,N,Y,E,null),E.onAfterShadow(i,E,A,L,N,Y,null)}}let H=E.children;for(let N=0,U=H.length;N<U;N++)v(H[N],A,L,S,w)}function D(E){E.target.removeEventListener("dispose",D);for(let L in c){let S=c[L],w=E.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}var Ly={[Ol]:Bl,[zl]:Gl,[Hl]:Wl,[Ls]:Vl,[Bl]:Ol,[Gl]:zl,[Wl]:Hl,[Vl]:Ls};function Dy(i,t){function e(){let F=!1,pt=new me,q=null,j=new me(0,0,0,0);return{setMask:function(xt){q!==xt&&!F&&(i.colorMask(xt,xt,xt,xt),q=xt)},setLocked:function(xt){F=xt},setClear:function(xt,mt,Yt,Ae,We){We===!0&&(xt*=Ae,mt*=Ae,Yt*=Ae),pt.set(xt,mt,Yt,Ae),j.equals(pt)===!1&&(i.clearColor(xt,mt,Yt,Ae),j.copy(pt))},reset:function(){F=!1,q=null,j.set(-1,0,0,0)}}}function n(){let F=!1,pt=!1,q=null,j=null,xt=null;return{setReversed:function(mt){if(pt!==mt){let Yt=t.get("EXT_clip_control");pt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);let Ae=xt;xt=null,this.setClear(Ae)}pt=mt},getReversed:function(){return pt},setTest:function(mt){mt?ct(i.DEPTH_TEST):Ot(i.DEPTH_TEST)},setMask:function(mt){q!==mt&&!F&&(i.depthMask(mt),q=mt)},setFunc:function(mt){if(pt&&(mt=Ly[mt]),j!==mt){switch(mt){case Ol:i.depthFunc(i.NEVER);break;case Bl:i.depthFunc(i.ALWAYS);break;case zl:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case Hl:i.depthFunc(i.EQUAL);break;case Vl:i.depthFunc(i.GEQUAL);break;case Gl:i.depthFunc(i.GREATER);break;case Wl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=mt}},setLocked:function(mt){F=mt},setClear:function(mt){xt!==mt&&(pt&&(mt=1-mt),i.clearDepth(mt),xt=mt)},reset:function(){F=!1,q=null,j=null,xt=null,pt=!1}}}function s(){let F=!1,pt=null,q=null,j=null,xt=null,mt=null,Yt=null,Ae=null,We=null;return{setTest:function(de){F||(de?ct(i.STENCIL_TEST):Ot(i.STENCIL_TEST))},setMask:function(de){pt!==de&&!F&&(i.stencilMask(de),pt=de)},setFunc:function(de,wn,Yn){(q!==de||j!==wn||xt!==Yn)&&(i.stencilFunc(de,wn,Yn),q=de,j=wn,xt=Yn)},setOp:function(de,wn,Yn){(mt!==de||Yt!==wn||Ae!==Yn)&&(i.stencilOp(de,wn,Yn),mt=de,Yt=wn,Ae=Yn)},setLocked:function(de){F=de},setClear:function(de){We!==de&&(i.clearStencil(de),We=de)},reset:function(){F=!1,pt=null,q=null,j=null,xt=null,mt=null,Yt=null,Ae=null,We=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,_=null,y=null,v=null,D=null,E=null,A=new Ct(0,0,0),L=0,S=!1,w=null,P=null,H=null,N=null,U=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,it=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=it>=1):X.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=it>=2);let ut=null,yt={},Rt=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),le=new me().fromArray(Rt),J=new me().fromArray(qt);function at(F,pt,q,j){let xt=new Uint8Array(4),mt=i.createTexture();i.bindTexture(F,mt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<q;Yt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(pt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return mt}let It={};It[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),It[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),It[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),It[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(Ls),nt(!1),bt(pu),ct(i.CULL_FACE),I(zn);function ct(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Ot(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Wt(F,pt){return u[F]!==pt?(i.bindFramebuffer(F,pt),u[F]=pt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Vt(F,pt){let q=f,j=!1;if(F){q=d.get(pt),q===void 0&&(q=[],d.set(pt,q));let xt=F.textures;if(q.length!==xt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Yt=xt.length;mt<Yt;mt++)q[mt]=i.COLOR_ATTACHMENT0+mt;q.length=xt.length,j=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,j=!0);j&&i.drawBuffers(q)}function re(F){return m!==F?(i.useProgram(F),m=F,!0):!1}let Q={[Yi]:i.FUNC_ADD,[tp]:i.FUNC_SUBTRACT,[ep]:i.FUNC_REVERSE_SUBTRACT};Q[np]=i.MIN,Q[ip]=i.MAX;let ot={[sp]:i.ZERO,[rp]:i.ONE,[op]:i.SRC_COLOR,[Nl]:i.SRC_ALPHA,[dp]:i.SRC_ALPHA_SATURATE,[hp]:i.DST_COLOR,[lp]:i.DST_ALPHA,[ap]:i.ONE_MINUS_SRC_COLOR,[Fl]:i.ONE_MINUS_SRC_ALPHA,[up]:i.ONE_MINUS_DST_COLOR,[cp]:i.ONE_MINUS_DST_ALPHA,[fp]:i.CONSTANT_COLOR,[pp]:i.ONE_MINUS_CONSTANT_COLOR,[mp]:i.CONSTANT_ALPHA,[gp]:i.ONE_MINUS_CONSTANT_ALPHA};function I(F,pt,q,j,xt,mt,Yt,Ae,We,de){if(F===zn){x===!0&&(Ot(i.BLEND),x=!1);return}if(x===!1&&(ct(i.BLEND),x=!0),F!==Qf){if(F!==g||de!==S){if((p!==Yi||v!==Yi)&&(i.blendEquation(i.FUNC_ADD),p=Yi,v=Yi),de)switch(F){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yn:i.blendFunc(i.ONE,i.ONE);break;case mu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,y=null,D=null,E=null,A.set(0,0,0),L=0,g=F,S=de}return}xt=xt||pt,mt=mt||q,Yt=Yt||j,(pt!==p||xt!==v)&&(i.blendEquationSeparate(Q[pt],Q[xt]),p=pt,v=xt),(q!==_||j!==y||mt!==D||Yt!==E)&&(i.blendFuncSeparate(ot[q],ot[j],ot[mt],ot[Yt]),_=q,y=j,D=mt,E=Yt),(Ae.equals(A)===!1||We!==L)&&(i.blendColor(Ae.r,Ae.g,Ae.b,We),A.copy(Ae),L=We),g=F,S=!1}function Nt(F,pt){F.side===Te?Ot(i.CULL_FACE):ct(i.CULL_FACE);let q=F.side===an;pt&&(q=!q),nt(q),F.blending===Rs&&F.transparent===!1?I(zn):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let j=F.stencilWrite;a.setTest(j),j&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Bt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(F){w!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),w=F)}function bt(F){F!==Kf?(ct(i.CULL_FACE),F!==P&&(F===pu?i.cullFace(i.BACK):F===jf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ot(i.CULL_FACE),P=F}function ht(F){F!==H&&(W&&i.lineWidth(F),H=F)}function Bt(F,pt,q){F?(ct(i.POLYGON_OFFSET_FILL),(N!==pt||U!==q)&&(i.polygonOffset(pt,q),N=pt,U=q)):Ot(i.POLYGON_OFFSET_FILL)}function _t(F){F?ct(i.SCISSOR_TEST):Ot(i.SCISSOR_TEST)}function R(F){F===void 0&&(F=i.TEXTURE0+Y-1),ut!==F&&(i.activeTexture(F),ut=F)}function b(F,pt,q){q===void 0&&(ut===null?q=i.TEXTURE0+Y-1:q=ut);let j=yt[q];j===void 0&&(j={type:void 0,texture:void 0},yt[q]=j),(j.type!==F||j.texture!==pt)&&(ut!==q&&(i.activeTexture(q),ut=q),i.bindTexture(F,pt||It[F]),j.type=F,j.texture=pt)}function z(){let F=yt[ut];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Gt(F){le.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),le.copy(F))}function At(F){J.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),J.copy(F))}function se(F,pt){let q=c.get(pt);q===void 0&&(q=new WeakMap,c.set(pt,q));let j=q.get(F);j===void 0&&(j=i.getUniformBlockIndex(pt,F.name),q.set(F,j))}function Jt(F,pt){let j=c.get(pt).get(F);l.get(pt)!==j&&(i.uniformBlockBinding(pt,j,F.__bindingPointIndex),l.set(pt,j))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ut=null,yt={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,_=null,y=null,v=null,D=null,E=null,A=new Ct(0,0,0),L=0,S=!1,w=null,P=null,H=null,N=null,U=null,le.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:Ot,bindFramebuffer:Wt,drawBuffers:Vt,useProgram:re,setBlending:I,setMaterial:Nt,setFlipSided:nt,setCullFace:bt,setLineWidth:ht,setPolygonOffset:Bt,setScissorTest:_t,activeTexture:R,bindTexture:b,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:et,texImage2D:Et,texImage3D:zt,updateUBOMapping:se,uniformBlockBinding:Jt,texStorage2D:te,texStorage3D:st,texSubImage2D:$,texSubImage3D:Lt,compressedTexSubImage2D:ft,compressedTexSubImage3D:wt,scissor:Gt,viewport:At,reset:ye}}function dd(i,t,e,n){let s=ky(n);switch(e){case Ud:return i*t;case Fd:return i*t;case Od:return i*t*2;case wh:return i*t/s.components*s.byteLength;case bh:return i*t/s.components*s.byteLength;case Bd:return i*t*2/s.components*s.byteLength;case Mh:return i*t*2/s.components*s.byteLength;case Nd:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case Sh:return i*t*4/s.components*s.byteLength;case Do:case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Uo:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jl:case jl:return Math.max(i,16)*Math.max(t,8)/4;case $l:case Kl:return Math.max(i,8)*Math.max(t,8)/2;case Ql:case tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fo:case gc:case xc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zd:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case vc:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ky(i){switch(i){case ii:case Ld:return{byteLength:1,components:1};case Mr:case Dd:case In:return{byteLength:2,components:1};case vh:case _h:return{byteLength:2,components:4};case Ki:case yh:case Bn:return{byteLength:4,components:1};case kd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Uy(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return f?new OffscreenCanvas(R,b):zo("canvas")}function x(R,b,z){let Z=1,et=_t(R);if((et.width>z||et.height>z)&&(Z=z/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let $=Math.floor(Z*et.width),Lt=Math.floor(Z*et.height);u===void 0&&(u=m($,Lt));let ft=b?m($,Lt):u;return ft.width=$,ft.height=Lt,ft.getContext("2d").drawImage(R,0,0,$,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+$+"x"+Lt+")."),ft}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,b,z,Z,et=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=b;if(b===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),b===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),b===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),b===i.RGBA){let Lt=et?ga:ne.getTransfer(Z);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=Lt===ue?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(R,b){let z;return R?b===null||b===Ki||b===Us?z=i.DEPTH24_STENCIL8:b===Bn?z=i.DEPTH32F_STENCIL8:b===Mr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ki||b===Us?z=i.DEPTH_COMPONENT24:b===Bn?z=i.DEPTH_COMPONENT32F:b===Mr&&(z=i.DEPTH_COMPONENT16),z}function D(R,b){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==fn&&R.minFilter!==On?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function E(R){let b=R.target;b.removeEventListener("dispose",E),L(b),b.isVideoTexture&&h.delete(b)}function A(R){let b=R.target;b.removeEventListener("dispose",A),w(b)}function L(R){let b=n.get(R);if(b.__webglInit===void 0)return;let z=R.source,Z=d.get(z);if(Z){let et=Z[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(R),Object.keys(Z).length===0&&d.delete(z)}n.remove(R)}function S(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let z=R.source,Z=d.get(z);delete Z[b.__cacheKey],o.memory.textures--}function w(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let et=0;et<b.__webglFramebuffer[Z].length;et++)i.deleteFramebuffer(b.__webglFramebuffer[Z][et]);else i.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[Z]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let z=R.textures;for(let Z=0,et=z.length;Z<et;Z++){let $=n.get(z[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(R)}let P=0;function H(){P=0}function N(){let R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function U(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function Y(R,b){let z=n.get(R);if(R.isVideoTexture&&ht(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){let Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(z,R,b);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function W(R,b){let z=n.get(R);if(R.version>0&&z.__version!==R.version){J(z,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function it(R,b){let z=n.get(R);if(R.version>0&&z.__version!==R.version){J(z,R,b);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function X(R,b){let z=n.get(R);if(R.version>0&&z.__version!==R.version){at(z,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}let ut={[Yl]:i.REPEAT,[$i]:i.CLAMP_TO_EDGE,[Zl]:i.MIRRORED_REPEAT},yt={[fn]:i.NEAREST,[_p]:i.NEAREST_MIPMAP_NEAREST,[eo]:i.NEAREST_MIPMAP_LINEAR,[On]:i.LINEAR,[nl]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},Rt={[Sp]:i.NEVER,[Pp]:i.ALWAYS,[Tp]:i.LESS,[Vd]:i.LEQUAL,[Ep]:i.EQUAL,[Cp]:i.GEQUAL,[Ap]:i.GREATER,[Rp]:i.NOTEQUAL};function qt(R,b){if(b.type===Bn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===On||b.magFilter===nl||b.magFilter===eo||b.magFilter===Ji||b.minFilter===On||b.minFilter===nl||b.minFilter===eo||b.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ut[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ut[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ut[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,yt[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,yt[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Rt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===fn||b.minFilter!==eo&&b.minFilter!==Ji||b.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function le(R,b){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",E));let Z=b.source,et=d.get(Z);et===void 0&&(et={},d.set(Z,et));let $=U(b);if($!==R.__cacheKey){et[$]===void 0&&(et[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),et[$].usedTimes++;let Lt=et[R.__cacheKey];Lt!==void 0&&(et[R.__cacheKey].usedTimes--,Lt.usedTimes===0&&S(b)),R.__cacheKey=$,R.__webglTexture=et[$].texture}return z}function J(R,b,z){let Z=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=i.TEXTURE_3D);let et=le(R,b),$=b.source;e.bindTexture(Z,R.__webglTexture,i.TEXTURE0+z);let Lt=n.get($);if($.version!==Lt.__version||et===!0){e.activeTexture(i.TEXTURE0+z);let ft=ne.getPrimaries(ne.workingColorSpace),wt=b.colorSpace===vi?null:ne.getPrimaries(b.colorSpace),te=b.colorSpace===vi||ft===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let st=x(b.image,!1,s.maxTextureSize);st=Bt(b,st);let Et=r.convert(b.format,b.colorSpace),zt=r.convert(b.type),Gt=y(b.internalFormat,Et,zt,b.colorSpace,b.isVideoTexture);qt(Z,b);let At,se=b.mipmaps,Jt=b.isVideoTexture!==!0,ye=Lt.__version===void 0||et===!0,F=$.dataReady,pt=D(b,st);if(b.isDepthTexture)Gt=v(b.format===Ns,b.type),ye&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,Gt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Gt,st.width,st.height,0,Et,zt,null));else if(b.isDataTexture)if(se.length>0){Jt&&ye&&e.texStorage2D(i.TEXTURE_2D,pt,Gt,se[0].width,se[0].height);for(let q=0,j=se.length;q<j;q++)At=se[q],Jt?F&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,At.width,At.height,Et,zt,At.data):e.texImage2D(i.TEXTURE_2D,q,Gt,At.width,At.height,0,Et,zt,At.data);b.generateMipmaps=!1}else Jt?(ye&&e.texStorage2D(i.TEXTURE_2D,pt,Gt,st.width,st.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,Et,zt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,st.width,st.height,0,Et,zt,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Jt&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Gt,se[0].width,se[0].height,st.depth);for(let q=0,j=se.length;q<j;q++)if(At=se[q],b.format!==Rn)if(Et!==null)if(Jt){if(F)if(b.layerUpdates.size>0){let xt=dd(At.width,At.height,b.format,b.type);for(let mt of b.layerUpdates){let Yt=At.data.subarray(mt*xt/At.data.BYTES_PER_ELEMENT,(mt+1)*xt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,mt,At.width,At.height,1,Et,Yt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,At.width,At.height,st.depth,Et,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Gt,At.width,At.height,st.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,At.width,At.height,st.depth,Et,zt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Gt,At.width,At.height,st.depth,0,Et,zt,At.data)}else{Jt&&ye&&e.texStorage2D(i.TEXTURE_2D,pt,Gt,se[0].width,se[0].height);for(let q=0,j=se.length;q<j;q++)At=se[q],b.format!==Rn?Et!==null?Jt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Gt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?F&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,At.width,At.height,Et,zt,At.data):e.texImage2D(i.TEXTURE_2D,q,Gt,At.width,At.height,0,Et,zt,At.data)}else if(b.isDataArrayTexture)if(Jt){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Gt,st.width,st.height,st.depth),F)if(b.layerUpdates.size>0){let q=dd(st.width,st.height,b.format,b.type);for(let j of b.layerUpdates){let xt=st.data.subarray(j*q/st.data.BYTES_PER_ELEMENT,(j+1)*q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,st.width,st.height,1,Et,zt,xt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Et,zt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,st.width,st.height,st.depth,0,Et,zt,st.data);else if(b.isData3DTexture)Jt?(ye&&e.texStorage3D(i.TEXTURE_3D,pt,Gt,st.width,st.height,st.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Et,zt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,st.width,st.height,st.depth,0,Et,zt,st.data);else if(b.isFramebufferTexture){if(ye)if(Jt)e.texStorage2D(i.TEXTURE_2D,pt,Gt,st.width,st.height);else{let q=st.width,j=st.height;for(let xt=0;xt<pt;xt++)e.texImage2D(i.TEXTURE_2D,xt,Gt,q,j,0,Et,zt,null),q>>=1,j>>=1}}else if(se.length>0){if(Jt&&ye){let q=_t(se[0]);e.texStorage2D(i.TEXTURE_2D,pt,Gt,q.width,q.height)}for(let q=0,j=se.length;q<j;q++)At=se[q],Jt?F&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Et,zt,At):e.texImage2D(i.TEXTURE_2D,q,Gt,Et,zt,At);b.generateMipmaps=!1}else if(Jt){if(ye){let q=_t(st);e.texStorage2D(i.TEXTURE_2D,pt,Gt,q.width,q.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,zt,st)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Et,zt,st);g(b)&&p(Z),Lt.__version=$.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function at(R,b,z){if(b.image.length!==6)return;let Z=le(R,b),et=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);let $=n.get(et);if(et.version!==$.__version||Z===!0){e.activeTexture(i.TEXTURE0+z);let Lt=ne.getPrimaries(ne.workingColorSpace),ft=b.colorSpace===vi?null:ne.getPrimaries(b.colorSpace),wt=b.colorSpace===vi||Lt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let te=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,Et=[];for(let j=0;j<6;j++)!te&&!st?Et[j]=x(b.image[j],!0,s.maxCubemapSize):Et[j]=st?b.image[j].image:b.image[j],Et[j]=Bt(b,Et[j]);let zt=Et[0],Gt=r.convert(b.format,b.colorSpace),At=r.convert(b.type),se=y(b.internalFormat,Gt,At,b.colorSpace),Jt=b.isVideoTexture!==!0,ye=$.__version===void 0||Z===!0,F=et.dataReady,pt=D(b,zt);qt(i.TEXTURE_CUBE_MAP,b);let q;if(te){Jt&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,se,zt.width,zt.height);for(let j=0;j<6;j++){q=Et[j].mipmaps;for(let xt=0;xt<q.length;xt++){let mt=q[xt];b.format!==Rn?Gt!==null?Jt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt,0,0,mt.width,mt.height,Gt,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt,se,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt,0,0,mt.width,mt.height,Gt,At,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt,se,mt.width,mt.height,0,Gt,At,mt.data)}}}else{if(q=b.mipmaps,Jt&&ye){q.length>0&&pt++;let j=_t(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,se,j.width,j.height)}for(let j=0;j<6;j++)if(st){Jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Et[j].width,Et[j].height,Gt,At,Et[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,se,Et[j].width,Et[j].height,0,Gt,At,Et[j].data);for(let xt=0;xt<q.length;xt++){let Yt=q[xt].image[j].image;Jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt+1,0,0,Yt.width,Yt.height,Gt,At,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt+1,se,Yt.width,Yt.height,0,Gt,At,Yt.data)}}else{Jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Gt,At,Et[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,se,Gt,At,Et[j]);for(let xt=0;xt<q.length;xt++){let mt=q[xt];Jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt+1,0,0,Gt,At,mt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt+1,se,Gt,At,mt.image[j])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),$.__version=et.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function It(R,b,z,Z,et,$){let Lt=r.convert(z.format,z.colorSpace),ft=r.convert(z.type),wt=y(z.internalFormat,Lt,ft,z.colorSpace),te=n.get(b),st=n.get(z);if(st.__renderTarget=b,!te.__hasExternalTextures){let Et=Math.max(1,b.width>>$),zt=Math.max(1,b.height>>$);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,$,wt,Et,zt,b.depth,0,Lt,ft,null):e.texImage2D(et,$,wt,Et,zt,0,Lt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),bt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,et,st.__webglTexture,0,nt(b)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,et,st.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(R,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let Z=b.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,$=v(b.stencilBuffer,et),Lt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=nt(b);bt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,$,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,$,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,$,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,R)}else{let Z=b.textures;for(let et=0;et<Z.length;et++){let $=Z[et],Lt=r.convert($.format,$.colorSpace),ft=r.convert($.type),wt=y($.internalFormat,Lt,ft,$.colorSpace),te=nt(b);z&&bt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,wt,b.width,b.height):bt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,wt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,wt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);let et=Z.__webglTexture,$=nt(b);if(b.depthTexture.format===Cs)bt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(b.depthTexture.format===Ns)bt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Wt(R){let b=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let Z=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){let et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=Z}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ot(b.__webglFramebuffer,R)}else if(z){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=i.createRenderbuffer(),ct(b.__webglDepthbuffer[Z],R,!1);else{let et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ct(b.__webglDepthbuffer,R,!1);else{let Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(R,b,z){let Z=n.get(R);b!==void 0&&It(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Wt(R)}function re(R){let b=R.texture,z=n.get(R),Z=n.get(b);R.addEventListener("dispose",A);let et=R.textures,$=R.isWebGLCubeRenderTarget===!0,Lt=et.length>1;if(Lt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=b.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ft]=[];for(let wt=0;wt<b.mipmaps.length;wt++)z.__webglFramebuffer[ft][wt]=i.createFramebuffer()}else z.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ft=0;ft<b.mipmaps.length;ft++)z.__webglFramebuffer[ft]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let ft=0,wt=et.length;ft<wt;ft++){let te=n.get(et[ft]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&bt(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ft=0;ft<et.length;ft++){let wt=et[ft];z.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ft]);let te=r.convert(wt.format,wt.colorSpace),st=r.convert(wt.type),Et=y(wt.internalFormat,te,st,wt.colorSpace,R.isXRRenderTarget===!0),zt=nt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Et,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,z.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),qt(i.TEXTURE_CUBE_MAP,b);for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0)for(let wt=0;wt<b.mipmaps.length;wt++)It(z.__webglFramebuffer[ft][wt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt);else It(z.__webglFramebuffer[ft],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let ft=0,wt=et.length;ft<wt;ft++){let te=et[ft],st=n.get(te);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),qt(i.TEXTURE_2D,te),It(z.__webglFramebuffer,R,te,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),g(te)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Z.__webglTexture),qt(ft,b),b.mipmaps&&b.mipmaps.length>0)for(let wt=0;wt<b.mipmaps.length;wt++)It(z.__webglFramebuffer[wt],R,b,i.COLOR_ATTACHMENT0,ft,wt);else It(z.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,ft,0);g(b)&&p(ft),e.unbindTexture()}R.depthBuffer&&Wt(R)}function Q(R){let b=R.textures;for(let z=0,Z=b.length;z<Z;z++){let et=b[z];if(g(et)){let $=_(R),Lt=n.get(et).__webglTexture;e.bindTexture($,Lt),p($),e.unbindTexture()}}}let ot=[],I=[];function Nt(R){if(R.samples>0){if(bt(R)===!1){let b=R.textures,z=R.width,Z=R.height,et=i.COLOR_BUFFER_BIT,$=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(R),ft=b.length>1;if(ft)for(let wt=0;wt<b.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let wt=0;wt<b.length;wt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[wt]);let te=n.get(b[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,et,i.NEAREST),l===!0&&(ot.length=0,I.length=0,ot.push(i.COLOR_ATTACHMENT0+wt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ot.push($),I.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let wt=0;wt<b.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[wt]);let te=n.get(b[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function nt(R){return Math.min(s.maxSamples,R.samples)}function bt(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ht(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Bt(R,b){let z=R.colorSpace,Z=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Gs&&z!==vi&&(ne.getTransfer(z)===ue?(Z!==Rn||et!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function _t(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=it,this.setTextureCube=X,this.rebindTextures=Vt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=bt}function Ny(i,t){function e(n,s=vi){let r,o=ne.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===vh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_h)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ld)return i.BYTE;if(n===Dd)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===yh)return i.INT;if(n===Ki)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===In)return i.HALF_FLOAT;if(n===Ud)return i.ALPHA;if(n===Nd)return i.RGB;if(n===Rn)return i.RGBA;if(n===Fd)return i.LUMINANCE;if(n===Od)return i.LUMINANCE_ALPHA;if(n===Cs)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===wh)return i.RED;if(n===bh)return i.RED_INTEGER;if(n===Bd)return i.RG;if(n===Mh)return i.RG_INTEGER;if(n===Sh)return i.RGBA_INTEGER;if(n===Do||n===ko||n===Uo||n===No)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Do)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$l||n===Jl||n===Kl||n===jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ql||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ql||n===tc)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ec)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ac)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fo||n===gc||n===xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fo)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zd||n===yc||n===vc||n===_c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Nc=class extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},rt=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fy={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Oy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,By=`
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

}`,Fc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new ln,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new De({vertexShader:Oy,fragmentShader:By,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mt(new He(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oc=class extends bi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=new Fc,g=e.getContextAttributes(),p=null,_=null,y=[],v=[],D=new tt,E=null,A=new on;A.viewport=new me;let L=new on;L.viewport=new me;let S=[A,L],w=new Nc,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=y[J];return at===void 0&&(at=new vr,y[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=y[J];return at===void 0&&(at=new vr,y[J]=at),at.getGripSpace()},this.getHand=function(J){let at=y[J];return at===void 0&&(at=new vr,y[J]=at),at.getHandSpace()};function N(J){let at=v.indexOf(J.inputSource);if(at===-1)return;let It=y[at];It!==void 0&&(It.update(J.inputSource,J.frame,c||o),It.dispatchEvent({type:J.type,data:J.inputSource}))}function U(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",Y);for(let J=0;J<y.length;J++){let at=v[J];at!==null&&(v[J]=null,y[J].disconnect(at))}P=null,H=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,_=null,le.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",U),s.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let at={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Qe(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let at=null,It=null,ct=null;g.depth&&(ct=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=g.stencil?Ns:Cs,It=g.stencil?Us:Ki);let Ot={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Qe(d.textureWidth,d.textureHeight,{format:Rn,type:ii,depthTexture:new Zo(d.textureWidth,d.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(J){for(let at=0;at<J.removed.length;at++){let It=J.removed[at],ct=v.indexOf(It);ct>=0&&(v[ct]=null,y[ct].disconnect(It))}for(let at=0;at<J.added.length;at++){let It=J.added[at],ct=v.indexOf(It);if(ct===-1){for(let Wt=0;Wt<y.length;Wt++)if(Wt>=v.length){v.push(It),ct=Wt;break}else if(v[Wt]===null){v[Wt]=It,ct=Wt;break}if(ct===-1)break}let Ot=y[ct];Ot&&Ot.connect(It)}}let W=new C,it=new C;function X(J,at,It){W.setFromMatrixPosition(at.matrixWorld),it.setFromMatrixPosition(It.matrixWorld);let ct=W.distanceTo(it),Ot=at.projectionMatrix.elements,Wt=It.projectionMatrix.elements,Vt=Ot[14]/(Ot[10]-1),re=Ot[14]/(Ot[10]+1),Q=(Ot[9]+1)/Ot[5],ot=(Ot[9]-1)/Ot[5],I=(Ot[8]-1)/Ot[0],Nt=(Wt[8]+1)/Wt[0],nt=Vt*I,bt=Vt*Nt,ht=ct/(-I+Nt),Bt=ht*-I;if(at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Bt),J.translateZ(ht),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ot[10]===-1)J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let _t=Vt+ht,R=re+ht,b=nt-Bt,z=bt+(ct-Bt),Z=Q*re/R*_t,et=ot*re/R*_t;J.projectionMatrix.makePerspective(b,z,Z,et,_t,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ut(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let at=J.near,It=J.far;x.texture!==null&&(x.depthNear>0&&(at=x.depthNear),x.depthFar>0&&(It=x.depthFar)),w.near=L.near=A.near=at,w.far=L.far=A.far=It,(P!==w.near||H!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),P=w.near,H=w.far),A.layers.mask=J.layers.mask|2,L.layers.mask=J.layers.mask|4,w.layers.mask=A.layers.mask|L.layers.mask;let ct=J.parent,Ot=w.cameras;ut(w,ct);for(let Wt=0;Wt<Ot.length;Wt++)ut(Ot[Wt],ct);Ot.length===2?X(w,A,L):w.projectionMatrix.copy(A.projectionMatrix),yt(J,w,ct)};function yt(J,at,It){It===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(It.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Sr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let Rt=null;function qt(J,at){if(h=at.getViewerPose(c||o),m=at,h!==null){let It=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let ct=!1;It.length!==w.cameras.length&&(w.cameras.length=0,ct=!0);for(let Wt=0;Wt<It.length;Wt++){let Vt=It[Wt],re=null;if(f!==null)re=f.getViewport(Vt);else{let ot=u.getViewSubImage(d,Vt);re=ot.viewport,Wt===0&&(t.setRenderTargetTextures(_,ot.colorTexture,d.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(_))}let Q=S[Wt];Q===void 0&&(Q=new on,Q.layers.enable(Wt),Q.viewport=new me,S[Wt]=Q),Q.matrix.fromArray(Vt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Vt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(re.x,re.y,re.width,re.height),Wt===0&&(w.matrix.copy(Q.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ct===!0&&w.cameras.push(Q)}let Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){let Wt=u.getDepthInformation(It[0]);Wt&&Wt.isValid&&Wt.texture&&x.init(t,Wt,s.renderState)}}for(let It=0;It<y.length;It++){let ct=v[It],Ot=y[It];ct!==null&&Ot!==void 0&&Ot.update(ct,at,c||o)}Rt&&Rt(J,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),m=null}let le=new qd;le.setAnimationLoop(qt),this.setAnimationLoop=function(J){Rt=J},this.dispose=function(){}}},Xi=new Vn,zy=new pe;function Hy(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Xd(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,_,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,_,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===an&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===an&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=t.get(p),y=_.envMap,v=_.envMapRotation;y&&(g.envMap.value=y,Xi.copy(v),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),g.envMapRotation.value.setFromMatrix4(zy.makeRotationFromEuler(Xi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let _=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){let v=y.program;n.uniformBlockBinding(_,v)}function c(_,y){let v=s[_.id];v===void 0&&(m(_),v=h(_),s[_.id]=v,_.addEventListener("dispose",g));let D=y.program;n.updateUBOMapping(_,D);let E=t.render.frame;r[_.id]!==E&&(d(_),r[_.id]=E)}function h(_){let y=u();_.__bindingPointIndex=y;let v=i.createBuffer(),D=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,D,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let y=s[_.id],v=_.uniforms,D=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,A=v.length;E<A;E++){let L=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,w=L.length;S<w;S++){let P=L[S];if(f(P,E,S,D)===!0){let H=P.__offset,N=Array.isArray(P.value)?P.value:[P.value],U=0;for(let Y=0;Y<N.length;Y++){let W=N[Y],it=x(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+U,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,U),U+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,v,D){let E=_.value,A=y+"_"+v;if(D[A]===void 0)return typeof E=="number"||typeof E=="boolean"?D[A]=E:D[A]=E.clone(),!0;{let L=D[A];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return D[A]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function m(_){let y=_.uniforms,v=0,D=16;for(let A=0,L=y.length;A<L;A++){let S=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,P=S.length;w<P;w++){let H=S[w],N=Array.isArray(H.value)?H.value:[H.value];for(let U=0,Y=N.length;U<Y;U++){let W=N[U],it=x(W),X=v%D,ut=X%it.boundary,yt=X+ut;v+=ut,yt!==0&&D-yt<it.storage&&(v+=D-yt),H.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=it.storage}}}let E=v%D;return E>0&&(v+=D-E),_.__size=v,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function g(_){let y=_.target;y.removeEventListener("dispose",g);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var $o=class{constructor(t={}){let{canvas:e=Yp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,_=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=wi,this.toneMappingExposure=1;let v=this,D=!1,E=0,A=0,L=null,S=-1,w=null,P=new me,H=new me,N=null,U=new Ct(0),Y=0,W=e.width,it=e.height,X=1,ut=null,yt=null,Rt=new me(0,0,W,it),qt=new me(0,0,W,it),le=!1,J=new Ar,at=!1,It=!1,ct=new pe,Ot=new pe,Wt=new C,Vt=new me,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function ot(){return L===null?X:1}let I=n;function Nt(T,O){return e.getContext(T,O)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uh}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),I===null){let O="webgl2";if(I=Nt(O,T),I===null)throw Nt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let nt,bt,ht,Bt,_t,R,b,z,Z,et,$,Lt,ft,wt,te,st,Et,zt,Gt,At,se,Jt,ye,F;function pt(){nt=new sx(I),nt.init(),Jt=new Ny(I,nt),bt=new jg(I,nt,t,Jt),ht=new Dy(I,nt),bt.reverseDepthBuffer&&d&&ht.buffers.depth.setReversed(!0),Bt=new ax(I),_t=new _y,R=new Uy(I,nt,ht,_t,bt,Jt,Bt),b=new tx(v),z=new ix(v),Z=new pm(I),ye=new Jg(I,Z),et=new rx(I,Z,Bt,ye),$=new cx(I,et,Z,Bt),Gt=new lx(I,bt,R),st=new Qg(_t),Lt=new vy(v,b,z,nt,bt,ye,st),ft=new Hy(v,_t),wt=new by,te=new Ry(nt),zt=new $g(v,b,z,ht,$,f,l),Et=new Iy(v,$,bt),F=new Vy(I,Bt,bt,ht),At=new Kg(I,nt,Bt),se=new ox(I,nt,Bt),Bt.programs=Lt.programs,v.capabilities=bt,v.extensions=nt,v.properties=_t,v.renderLists=wt,v.shadowMap=Et,v.state=ht,v.info=Bt}pt();let q=new Oc(v,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(W,it,!1))},this.getSize=function(T){return T.set(W,it)},this.setSize=function(T,O,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,it=O,e.width=Math.floor(T*X),e.height=Math.floor(O*X),V===!0&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(W*X,it*X).floor()},this.setDrawingBufferSize=function(T,O,V){W=T,it=O,X=V,e.width=Math.floor(T*V),e.height=Math.floor(O*V),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(Rt)},this.setViewport=function(T,O,V,G){T.isVector4?Rt.set(T.x,T.y,T.z,T.w):Rt.set(T,O,V,G),ht.viewport(P.copy(Rt).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(qt)},this.setScissor=function(T,O,V,G){T.isVector4?qt.set(T.x,T.y,T.z,T.w):qt.set(T,O,V,G),ht.scissor(H.copy(qt).multiplyScalar(X).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(T){ht.setScissorTest(le=T)},this.setOpaqueSort=function(T){ut=T},this.setTransparentSort=function(T){yt=T},this.getClearColor=function(T){return T.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(T=!0,O=!0,V=!0){let G=0;if(T){let B=!1;if(L!==null){let lt=L.texture.format;B=lt===Sh||lt===Mh||lt===bh}if(B){let lt=L.texture.type,gt=lt===ii||lt===Ki||lt===Mr||lt===Us||lt===vh||lt===_h,Dt=zt.getClearColor(),kt=zt.getClearAlpha(),Xt=Dt.r,Zt=Dt.g,Ut=Dt.b;gt?(m[0]=Xt,m[1]=Zt,m[2]=Ut,m[3]=kt,I.clearBufferuiv(I.COLOR,0,m)):(x[0]=Xt,x[1]=Zt,x[2]=Ut,x[3]=kt,I.clearBufferiv(I.COLOR,0,x))}else G|=I.COLOR_BUFFER_BIT}O&&(G|=I.DEPTH_BUFFER_BIT),V&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),wt.dispose(),te.dispose(),_t.dispose(),b.dispose(),z.dispose(),$.dispose(),ye.dispose(),F.dispose(),Lt.dispose(),q.dispose(),q.removeEventListener("sessionstart",ou),q.removeEventListener("sessionend",au),Bi.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let T=Bt.autoReset,O=Et.enabled,V=Et.autoUpdate,G=Et.needsUpdate,B=Et.type;pt(),Bt.autoReset=T,Et.enabled=O,Et.autoUpdate=V,Et.needsUpdate=G,Et.type=B}function mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Yt(T){let O=T.target;O.removeEventListener("dispose",Yt),Ae(O)}function Ae(T){We(T),_t.remove(T)}function We(T){let O=_t.get(T).programs;O!==void 0&&(O.forEach(function(V){Lt.releaseProgram(V)}),T.isShaderMaterial&&Lt.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,V,G,B,lt){O===null&&(O=re);let gt=B.isMesh&&B.matrixWorld.determinant()<0,Dt=Zf(T,O,V,G,B);ht.setMaterial(G,gt);let kt=V.index,Xt=1;if(G.wireframe===!0){if(kt=et.getWireframeAttribute(V),kt===void 0)return;Xt=2}let Zt=V.drawRange,Ut=V.attributes.position,ae=Zt.start*Xt,ve=(Zt.start+Zt.count)*Xt;lt!==null&&(ae=Math.max(ae,lt.start*Xt),ve=Math.min(ve,(lt.start+lt.count)*Xt)),kt!==null?(ae=Math.max(ae,0),ve=Math.min(ve,kt.count)):Ut!=null&&(ae=Math.max(ae,0),ve=Math.min(ve,Ut.count));let we=ve-ae;if(we<0||we===1/0)return;ye.setup(B,G,Dt,V,kt);let rn,ce=At;if(kt!==null&&(rn=Z.get(kt),ce=se,ce.setIndex(rn)),B.isMesh)G.wireframe===!0?(ht.setLineWidth(G.wireframeLinewidth*ot()),ce.setMode(I.LINES)):ce.setMode(I.TRIANGLES);else if(B.isLine){let Ft=G.linewidth;Ft===void 0&&(Ft=1),ht.setLineWidth(Ft*ot()),B.isLineSegments?ce.setMode(I.LINES):B.isLineLoop?ce.setMode(I.LINE_LOOP):ce.setMode(I.LINE_STRIP)}else B.isPoints?ce.setMode(I.POINTS):B.isSprite&&ce.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ce.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ce.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ft=B._multiDrawStarts,Zn=B._multiDrawCounts,he=B._multiDrawCount,bn=kt?Z.get(kt).bytesPerElement:1,os=_t.get(G).currentProgram.getUniforms();for(let hn=0;hn<he;hn++)os.setValue(I,"_gl_DrawID",hn),ce.render(Ft[hn]/bn,Zn[hn])}else if(B.isInstancedMesh)ce.renderInstances(ae,we,B.count);else if(V.isInstancedBufferGeometry){let Ft=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Zn=Math.min(V.instanceCount,Ft);ce.renderInstances(ae,we,Zn)}else ce.render(ae,we)};function de(T,O,V){T.transparent===!0&&T.side===Te&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,to(T,O,V),T.side=Cn,T.needsUpdate=!0,to(T,O,V),T.side=Te):to(T,O,V)}this.compile=function(T,O,V=null){V===null&&(V=T),p=te.get(V),p.init(O),y.push(p),V.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==V&&T.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let G=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let lt=B.material;if(lt)if(Array.isArray(lt))for(let gt=0;gt<lt.length;gt++){let Dt=lt[gt];de(Dt,V,B),G.add(Dt)}else de(lt,V,B),G.add(lt)}),y.pop(),p=null,G},this.compileAsync=function(T,O,V=null){let G=this.compile(T,O,V);return new Promise(B=>{function lt(){if(G.forEach(function(gt){_t.get(gt).currentProgram.isReady()&&G.delete(gt)}),G.size===0){B(T);return}setTimeout(lt,10)}nt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let wn=null;function Yn(T){wn&&wn(T)}function ou(){Bi.stop()}function au(){Bi.start()}let Bi=new qd;Bi.setAnimationLoop(Yn),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(T){wn=T,q.setAnimationLoop(T),T===null?Bi.stop():Bi.start()},q.addEventListener("sessionstart",ou),q.addEventListener("sessionend",au),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,L),p=te.get(T,y.length),p.init(O),y.push(p),Ot.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),J.setFromProjectionMatrix(Ot),It=this.localClippingEnabled,at=st.init(this.clippingPlanes,It),g=wt.get(T,_.length),g.init(),_.push(g),q.enabled===!0&&q.isPresenting===!0){let lt=v.xr.getDepthSensingMesh();lt!==null&&el(lt,O,-1/0,v.sortObjects)}el(T,O,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ut,yt),Q=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Q&&zt.addToRenderList(g,T),this.info.render.frame++,at===!0&&st.beginShadows();let V=p.state.shadowsArray;Et.render(V,T,O),at===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=g.opaque,B=g.transmissive;if(p.setupLights(),O.isArrayCamera){let lt=O.cameras;if(B.length>0)for(let gt=0,Dt=lt.length;gt<Dt;gt++){let kt=lt[gt];cu(G,B,T,kt)}Q&&zt.render(T);for(let gt=0,Dt=lt.length;gt<Dt;gt++){let kt=lt[gt];lu(g,T,kt,kt.viewport)}}else B.length>0&&cu(G,B,T,O),Q&&zt.render(T),lu(g,T,O);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(v,T,O),ye.resetDefaultState(),S=-1,w=null,y.pop(),y.length>0?(p=y[y.length-1],at===!0&&st.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function el(T,O,V,G){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){G&&Vt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ot);let gt=$.update(T),Dt=T.material;Dt.visible&&g.push(T,gt,Dt,V,Vt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){let gt=$.update(T),Dt=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Vt.copy(T.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Vt.copy(gt.boundingSphere.center)),Vt.applyMatrix4(T.matrixWorld).applyMatrix4(Ot)),Array.isArray(Dt)){let kt=gt.groups;for(let Xt=0,Zt=kt.length;Xt<Zt;Xt++){let Ut=kt[Xt],ae=Dt[Ut.materialIndex];ae&&ae.visible&&g.push(T,gt,ae,V,Vt.z,Ut)}}else Dt.visible&&g.push(T,gt,Dt,V,Vt.z,null)}}let lt=T.children;for(let gt=0,Dt=lt.length;gt<Dt;gt++)el(lt[gt],O,V,G)}function lu(T,O,V,G){let B=T.opaque,lt=T.transmissive,gt=T.transparent;p.setupLightsView(V),at===!0&&st.setGlobalState(v.clippingPlanes,V),G&&ht.viewport(P.copy(G)),B.length>0&&Qr(B,O,V),lt.length>0&&Qr(lt,O,V),gt.length>0&&Qr(gt,O,V),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function cu(T,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Qe(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?In:ii,minFilter:Ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));let lt=p.state.transmissionRenderTarget[G.id],gt=G.viewport||P;lt.setSize(gt.z,gt.w);let Dt=v.getRenderTarget();v.setRenderTarget(lt),v.getClearColor(U),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),Q&&zt.render(V);let kt=v.toneMapping;v.toneMapping=wi;let Xt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),at===!0&&st.setGlobalState(v.clippingPlanes,G),Qr(T,V,G),R.updateMultisampleRenderTarget(lt),R.updateRenderTargetMipmap(lt),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ut=0,ae=O.length;Ut<ae;Ut++){let ve=O[Ut],we=ve.object,rn=ve.geometry,ce=ve.material,Ft=ve.group;if(ce.side===Te&&we.layers.test(G.layers)){let Zn=ce.side;ce.side=an,ce.needsUpdate=!0,hu(we,V,G,rn,ce,Ft),ce.side=Zn,ce.needsUpdate=!0,Zt=!0}}Zt===!0&&(R.updateMultisampleRenderTarget(lt),R.updateRenderTargetMipmap(lt))}v.setRenderTarget(Dt),v.setClearColor(U,Y),Xt!==void 0&&(G.viewport=Xt),v.toneMapping=kt}function Qr(T,O,V){let G=O.isScene===!0?O.overrideMaterial:null;for(let B=0,lt=T.length;B<lt;B++){let gt=T[B],Dt=gt.object,kt=gt.geometry,Xt=G===null?gt.material:G,Zt=gt.group;Dt.layers.test(V.layers)&&hu(Dt,O,V,kt,Xt,Zt)}}function hu(T,O,V,G,B,lt){T.onBeforeRender(v,O,V,G,B,lt),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(v,O,V,G,T,lt),B.transparent===!0&&B.side===Te&&B.forceSinglePass===!1?(B.side=an,B.needsUpdate=!0,v.renderBufferDirect(V,O,G,B,T,lt),B.side=Cn,B.needsUpdate=!0,v.renderBufferDirect(V,O,G,B,T,lt),B.side=Te):v.renderBufferDirect(V,O,G,B,T,lt),T.onAfterRender(v,O,V,G,B,lt)}function to(T,O,V){O.isScene!==!0&&(O=re);let G=_t.get(T),B=p.state.lights,lt=p.state.shadowsArray,gt=B.state.version,Dt=Lt.getParameters(T,B.state,lt,O,V),kt=Lt.getProgramCacheKey(Dt),Xt=G.programs;G.environment=T.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(T.isMeshStandardMaterial?z:b).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Xt===void 0&&(T.addEventListener("dispose",Yt),Xt=new Map,G.programs=Xt);let Zt=Xt.get(kt);if(Zt!==void 0){if(G.currentProgram===Zt&&G.lightsStateVersion===gt)return du(T,Dt),Zt}else Dt.uniforms=Lt.getUniforms(T),T.onBeforeCompile(Dt,v),Zt=Lt.acquireProgram(Dt,kt),Xt.set(kt,Zt),G.uniforms=Dt.uniforms;let Ut=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ut.clippingPlanes=st.uniform),du(T,Dt),G.needsLights=Jf(T),G.lightsStateVersion=gt,G.needsLights&&(Ut.ambientLightColor.value=B.state.ambient,Ut.lightProbe.value=B.state.probe,Ut.directionalLights.value=B.state.directional,Ut.directionalLightShadows.value=B.state.directionalShadow,Ut.spotLights.value=B.state.spot,Ut.spotLightShadows.value=B.state.spotShadow,Ut.rectAreaLights.value=B.state.rectArea,Ut.ltc_1.value=B.state.rectAreaLTC1,Ut.ltc_2.value=B.state.rectAreaLTC2,Ut.pointLights.value=B.state.point,Ut.pointLightShadows.value=B.state.pointShadow,Ut.hemisphereLights.value=B.state.hemi,Ut.directionalShadowMap.value=B.state.directionalShadowMap,Ut.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ut.spotShadowMap.value=B.state.spotShadowMap,Ut.spotLightMatrix.value=B.state.spotLightMatrix,Ut.spotLightMap.value=B.state.spotLightMap,Ut.pointShadowMap.value=B.state.pointShadowMap,Ut.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Zt,G.uniformsList=null,Zt}function uu(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=Is.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function du(T,O){let V=_t.get(T);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Zf(T,O,V,G,B){O.isScene!==!0&&(O=re),R.resetTextureUnits();let lt=O.fog,gt=G.isMeshStandardMaterial?O.environment:null,Dt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Gs,kt=(G.isMeshStandardMaterial?z:b).get(G.envMap||gt),Xt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Zt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ut=!!V.morphAttributes.position,ae=!!V.morphAttributes.normal,ve=!!V.morphAttributes.color,we=wi;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(we=v.toneMapping);let rn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ce=rn!==void 0?rn.length:0,Ft=_t.get(G),Zn=p.state.lights;if(at===!0&&(It===!0||T!==w)){let gn=T===w&&G.id===S;st.setState(G,T,gn)}let he=!1;G.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Zn.state.version||Ft.outputColorSpace!==Dt||B.isBatchedMesh&&Ft.batching===!1||!B.isBatchedMesh&&Ft.batching===!0||B.isBatchedMesh&&Ft.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ft.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ft.instancing===!1||!B.isInstancedMesh&&Ft.instancing===!0||B.isSkinnedMesh&&Ft.skinning===!1||!B.isSkinnedMesh&&Ft.skinning===!0||B.isInstancedMesh&&Ft.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ft.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ft.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ft.instancingMorph===!1&&B.morphTexture!==null||Ft.envMap!==kt||G.fog===!0&&Ft.fog!==lt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==st.numPlanes||Ft.numIntersection!==st.numIntersection)||Ft.vertexAlphas!==Xt||Ft.vertexTangents!==Zt||Ft.morphTargets!==Ut||Ft.morphNormals!==ae||Ft.morphColors!==ve||Ft.toneMapping!==we||Ft.morphTargetsCount!==ce)&&(he=!0):(he=!0,Ft.__version=G.version);let bn=Ft.currentProgram;he===!0&&(bn=to(G,O,B));let os=!1,hn=!1,ir=!1,be=bn.getUniforms(),Nn=Ft.uniforms;if(ht.useProgram(bn.program)&&(os=!0,hn=!0,ir=!0),G.id!==S&&(S=G.id,hn=!0),os||w!==T){ht.buffers.depth.getReversed()?(ct.copy(T.projectionMatrix),$p(ct),Jp(ct),be.setValue(I,"projectionMatrix",ct)):be.setValue(I,"projectionMatrix",T.projectionMatrix),be.setValue(I,"viewMatrix",T.matrixWorldInverse);let ui=be.map.cameraPosition;ui!==void 0&&ui.setValue(I,Wt.setFromMatrixPosition(T.matrixWorld)),bt.logarithmicDepthBuffer&&be.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&be.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,hn=!0,ir=!0)}if(B.isSkinnedMesh){be.setOptional(I,B,"bindMatrix"),be.setOptional(I,B,"bindMatrixInverse");let gn=B.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),be.setValue(I,"boneTexture",gn.boneTexture,R))}B.isBatchedMesh&&(be.setOptional(I,B,"batchingTexture"),be.setValue(I,"batchingTexture",B._matricesTexture,R),be.setOptional(I,B,"batchingIdTexture"),be.setValue(I,"batchingIdTexture",B._indirectTexture,R),be.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&be.setValue(I,"batchingColorTexture",B._colorsTexture,R));let sr=V.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&Gt.update(B,V,bn),(hn||Ft.receiveShadow!==B.receiveShadow)&&(Ft.receiveShadow=B.receiveShadow,be.setValue(I,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Nn.envMap.value=kt,Nn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(Nn.envMapIntensity.value=O.environmentIntensity),hn&&(be.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&$f(Nn,ir),lt&&G.fog===!0&&ft.refreshFogUniforms(Nn,lt),ft.refreshMaterialUniforms(Nn,G,X,it,p.state.transmissionRenderTarget[T.id]),Is.upload(I,uu(Ft),Nn,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Is.upload(I,uu(Ft),Nn,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&be.setValue(I,"center",B.center),be.setValue(I,"modelViewMatrix",B.modelViewMatrix),be.setValue(I,"normalMatrix",B.normalMatrix),be.setValue(I,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let gn=G.uniformsGroups;for(let ui=0,di=gn.length;ui<di;ui++){let fu=gn[ui];F.update(fu,bn),F.bind(fu,bn)}}return bn}function $f(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Jf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,O,V){_t.get(T.texture).__webglTexture=O,_t.get(T.depthTexture).__webglTexture=V;let G=_t.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){let V=_t.get(T);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,V=0){L=T,E=O,A=V;let G=!0,B=null,lt=!1,gt=!1;if(T){let kt=_t.get(T);if(kt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(kt.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(kt.__hasExternalTextures)R.rebindTextures(T,_t.get(T.texture).__webglTexture,_t.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ut=T.depthTexture;if(kt.__boundDepthTexture!==Ut){if(Ut!==null&&_t.has(Ut)&&(T.width!==Ut.image.width||T.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}let Xt=T.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(gt=!0);let Zt=_t.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Zt[O])?B=Zt[O][V]:B=Zt[O],lt=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?B=_t.get(T).__webglMultisampledFramebuffer:Array.isArray(Zt)?B=Zt[V]:B=Zt,P.copy(T.viewport),H.copy(T.scissor),N=T.scissorTest}else P.copy(Rt).multiplyScalar(X).floor(),H.copy(qt).multiplyScalar(X).floor(),N=le;if(ht.bindFramebuffer(I.FRAMEBUFFER,B)&&G&&ht.drawBuffers(T,B),ht.viewport(P),ht.scissor(H),ht.setScissorTest(N),lt){let kt=_t.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,kt.__webglTexture,V)}else if(gt){let kt=_t.get(T.texture),Xt=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,kt.__webglTexture,V||0,Xt)}S=-1},this.readRenderTargetPixels=function(T,O,V,G,B,lt,gt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=_t.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&gt!==void 0&&(Dt=Dt[gt]),Dt){ht.bindFramebuffer(I.FRAMEBUFFER,Dt);try{let kt=T.texture,Xt=kt.format,Zt=kt.type;if(!bt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-G&&V>=0&&V<=T.height-B&&I.readPixels(O,V,G,B,Jt.convert(Xt),Jt.convert(Zt),lt)}finally{let kt=L!==null?_t.get(L).__webglFramebuffer:null;ht.bindFramebuffer(I.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(T,O,V,G,B,lt,gt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=_t.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&gt!==void 0&&(Dt=Dt[gt]),Dt){let kt=T.texture,Xt=kt.format,Zt=kt.type;if(!bt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=T.width-G&&V>=0&&V<=T.height-B){ht.bindFramebuffer(I.FRAMEBUFFER,Dt);let Ut=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ut),I.bufferData(I.PIXEL_PACK_BUFFER,lt.byteLength,I.STREAM_READ),I.readPixels(O,V,G,B,Jt.convert(Xt),Jt.convert(Zt),0);let ae=L!==null?_t.get(L).__webglFramebuffer:null;ht.bindFramebuffer(I.FRAMEBUFFER,ae);let ve=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Zp(I,ve,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ut),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,lt),I.deleteBuffer(Ut),I.deleteSync(ve),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,O=null,V=0){T.isTexture!==!0&&(mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1]);let G=Math.pow(2,-V),B=Math.floor(T.image.width*G),lt=Math.floor(T.image.height*G),gt=O!==null?O.x:0,Dt=O!==null?O.y:0;R.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,gt,Dt,B,lt),ht.unbindTexture()},this.copyTextureToTexture=function(T,O,V=null,G=null,B=0){T.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],O=arguments[2],B=arguments[3]||0,V=null);let lt,gt,Dt,kt,Xt,Zt,Ut,ae,ve,we=T.isCompressedTexture?T.mipmaps[B]:T.image;V!==null?(lt=V.max.x-V.min.x,gt=V.max.y-V.min.y,Dt=V.isBox3?V.max.z-V.min.z:1,kt=V.min.x,Xt=V.min.y,Zt=V.isBox3?V.min.z:0):(lt=we.width,gt=we.height,Dt=we.depth||1,kt=0,Xt=0,Zt=0),G!==null?(Ut=G.x,ae=G.y,ve=G.z):(Ut=0,ae=0,ve=0);let rn=Jt.convert(O.format),ce=Jt.convert(O.type),Ft;O.isData3DTexture?(R.setTexture3D(O,0),Ft=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(R.setTexture2DArray(O,0),Ft=I.TEXTURE_2D_ARRAY):(R.setTexture2D(O,0),Ft=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);let Zn=I.getParameter(I.UNPACK_ROW_LENGTH),he=I.getParameter(I.UNPACK_IMAGE_HEIGHT),bn=I.getParameter(I.UNPACK_SKIP_PIXELS),os=I.getParameter(I.UNPACK_SKIP_ROWS),hn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,we.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,we.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,kt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zt);let ir=T.isDataArrayTexture||T.isData3DTexture,be=O.isDataArrayTexture||O.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Nn=_t.get(T),sr=_t.get(O),gn=_t.get(Nn.__renderTarget),ui=_t.get(sr.__renderTarget);ht.bindFramebuffer(I.READ_FRAMEBUFFER,gn.__webglFramebuffer),ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let di=0;di<Dt;di++)ir&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(T).__webglTexture,B,Zt+di),T.isDepthTexture?(be&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(O).__webglTexture,B,ve+di),I.blitFramebuffer(kt,Xt,lt,gt,Ut,ae,lt,gt,I.DEPTH_BUFFER_BIT,I.NEAREST)):be?I.copyTexSubImage3D(Ft,B,Ut,ae,ve+di,kt,Xt,lt,gt):I.copyTexSubImage2D(Ft,B,Ut,ae,ve+di,kt,Xt,lt,gt);ht.bindFramebuffer(I.READ_FRAMEBUFFER,null),ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else be?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Ft,B,Ut,ae,ve,lt,gt,Dt,rn,ce,we.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Ft,B,Ut,ae,ve,lt,gt,Dt,rn,we.data):I.texSubImage3D(Ft,B,Ut,ae,ve,lt,gt,Dt,rn,ce,we):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,Ut,ae,lt,gt,rn,ce,we.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,Ut,ae,we.width,we.height,rn,we.data):I.texSubImage2D(I.TEXTURE_2D,B,Ut,ae,lt,gt,rn,ce,we);I.pixelStorei(I.UNPACK_ROW_LENGTH,Zn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,he),I.pixelStorei(I.UNPACK_SKIP_PIXELS,bn),I.pixelStorei(I.UNPACK_SKIP_ROWS,os),I.pixelStorei(I.UNPACK_SKIP_IMAGES,hn),B===0&&O.generateMipmaps&&I.generateMipmap(Ft),ht.unbindTexture()},this.copyTextureToTexture3D=function(T,O,V=null,G=null,B=0){return T.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,T=arguments[2],O=arguments[3],B=arguments[4]||0),mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,O,V,G,B)},this.initRenderTarget=function(T){_t.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ht.unbindTexture()},this.resetState=function(){E=0,A=0,L=null,ht.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var Jo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ko=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bc,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ke=new C,jo=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=An(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=An(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=An(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=An(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Rr=class extends ri{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ws,cr=new C,bs=new C,Ms=new C,Ss=new tt,hr=new tt,Kd=new pe,Mo=new C,ur=new C,So=new C,fd=new tt,Pl=new tt,pd=new tt,Qo=class extends Le{constructor(t=new Rr){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new Re;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Bc(e,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new jo(n,3,0,!1)),ws.setAttribute("uv",new jo(n,2,3,!1))}this.geometry=ws,this.material=t,this.center=new tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),Kd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-Ms.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;To(Mo.set(-.5,-.5,0),Ms,o,bs,s,r),To(ur.set(.5,-.5,0),Ms,o,bs,s,r),To(So.set(.5,.5,0),Ms,o,bs,s,r),fd.set(0,0),Pl.set(1,0),pd.set(1,1);let a=t.ray.intersectTriangle(Mo,ur,So,!1,cr);if(a===null&&(To(ur.set(-.5,.5,0),Ms,o,bs,s,r),Pl.set(0,1),a=t.ray.intersectTriangle(Mo,So,ur,!1,cr),a===null))return;let l=t.ray.origin.distanceTo(cr);l<t.near||l>t.far||e.push({distance:l,point:cr.clone(),uv:_i.getInterpolation(cr,Mo,ur,So,fd,Pl,pd,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function To(i,t,e,n,s,r){Ss.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(hr.x=r*Ss.x-s*Ss.y,hr.y=s*Ss.x+r*Ss.y):hr.copy(Ss),i.copy(t),i.x+=hr.x,i.y+=hr.y,i.applyMatrix4(Kd)}var zc=class extends ln{constructor(t=null,e=1,n=1,s,r,o,a,l,c=fn,h=fn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ta=class extends Fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ts=new pe,md=new pe,Eo=[],gd=new si,Gy=new pe,dr=new Mt,fr=new Si,ea=class extends Mt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ta(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Gy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),gd.copy(t.boundingBox).applyMatrix4(Ts),this.boundingBox.union(gd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),fr.copy(t.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(fr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(n),t.ray.intersectsSphere(fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),md.multiplyMatrices(n,Ts),dr.matrixWorld=md,dr.raycast(t,Eo);for(let o=0,a=Eo.length;o<a;o++){let l=Eo[o];l.instanceId=r,l.object=this,e.push(l)}Eo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ta(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zc(new Float32Array(s*this.count),s,this.count,wh,Bn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Os=class extends ri{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xd=new pe,Hc=new Tr,Ao=new Si,Ro=new C,Cr=class extends Le{constructor(t=new Re,e=new Os){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=r,t.ray.intersectsSphere(Ao)===!1)return;xd.copy(s).invert(),Hc.copy(t.ray).applyMatrix4(xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let g=c.getX(m);Ro.fromBufferAttribute(u,g),yd(Ro,g,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)Ro.fromBufferAttribute(u,m),yd(Ro,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yd(i,t,e,n,s,r,o){let a=Hc.distanceSqToPoint(i);if(a<e){let l=new C;Hc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Bs=class extends ln{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new tt:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],o=[],a=new C,l=new pe;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ze(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Pr=class extends vn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new tt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Vc=class extends Pr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ah(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Co=new C,Il=new Ah,Ll=new Ah,Dl=new Ah,Gc=class extends vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Co.subVectors(s[0],s[1]).add(s[0]),c=Co);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Co.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Co),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Il.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,g),Ll.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,g),Dl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Il.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ll.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Dl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Il.calc(l),Ll.calc(l),Dl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Wy(i,t){let e=1-i;return e*e*t}function Xy(i,t){return 2*(1-i)*i*t}function qy(i,t){return i*i*t}function _r(i,t,e,n){return Wy(i,t)+Xy(i,e)+qy(i,n)}function Yy(i,t){let e=1-i;return e*e*e*t}function Zy(i,t){let e=1-i;return 3*e*e*i*t}function $y(i,t){return 3*(1-i)*i*i*t}function Jy(i,t){return i*i*i*t}function wr(i,t,e,n,s){return Yy(i,t)+Zy(i,e)+$y(i,n)+Jy(i,s)}var na=class extends vn{constructor(t=new tt,e=new tt,n=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wr(t,s.x,r.x,o.x,a.x),wr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wc=class extends vn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wr(t,s.x,r.x,o.x,a.x),wr(t,s.y,r.y,o.y,a.y),wr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ia=class extends vn{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xc=class extends vn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sa=class extends vn{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qc=class extends vn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y),_r(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ra=class extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(vd(a,l.x,c.x,h.x,u.x),vd(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new tt().fromArray(s))}return this}},Yc=Object.freeze({__proto__:null,ArcCurve:Vc,CatmullRomCurve3:Gc,CubicBezierCurve:na,CubicBezierCurve3:Wc,EllipseCurve:Pr,LineCurve:ia,LineCurve3:Xc,QuadraticBezierCurve:sa,QuadraticBezierCurve3:qc,SplineCurve:ra}),Zc=class extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Yc[s.type]().fromJSON(s))}return this}},oa=class extends Zc{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ia(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new sa(this.currentPoint.clone(),new tt(t,e),new tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new na(this.currentPoint.clone(),new tt(t,e),new tt(n,s),new tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ra(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Pr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var zs=class i extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new C,h=new tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},cn=class i extends Re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function _(){let v=new C,D=new C,E=0,A=(e-t)/n;for(let L=0;L<=r;L++){let S=[],w=L/r,P=w*(e-t)+t;for(let H=0;H<=s;H++){let N=H/s,U=N*l+a,Y=Math.sin(U),W=Math.cos(U);D.x=P*Y,D.y=-w*n+g,D.z=P*W,u.push(D.x,D.y,D.z),v.set(Y,A,W).normalize(),d.push(v.x,v.y,v.z),f.push(N,1-w),S.push(m++)}x.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){let w=x[S][L],P=x[S+1][L],H=x[S+1][L+1],N=x[S][L+1];(t>0||S!==0)&&(h.push(w,P,N),E+=3),(e>0||S!==r-1)&&(h.push(P,H,N),E+=3)}c.addGroup(p,E,0),p+=E}function y(v){let D=m,E=new tt,A=new C,L=0,S=v===!0?t:e,w=v===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),m++;let P=m;for(let H=0;H<=s;H++){let U=H/s*l+a,Y=Math.cos(U),W=Math.sin(U);A.x=S*W,A.y=g*w,A.z=S*Y,u.push(A.x,A.y,A.z),d.push(0,w,0),E.x=Y*.5+.5,E.y=W*.5*w+.5,f.push(E.x,E.y),m++}for(let H=0;H<s;H++){let N=D+H,U=P+H;v===!0?h.push(U,U+1,N):h.push(U+1,U,N),L+=3}c.addGroup(p,L,v===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ei=class i extends cn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$c=class i extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new C,v=new C,D=new C;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],v),f(e[E+2],D),l(y,v,D,_)}function l(_,y,v,D){let E=D+1,A=[];for(let L=0;L<=E;L++){A[L]=[];let S=_.clone().lerp(v,L/E),w=y.clone().lerp(v,L/E),P=E-L;for(let H=0;H<=P;H++)H===0&&L===E?A[L][H]=S:A[L][H]=S.clone().lerp(w,H/P)}for(let L=0;L<E;L++)for(let S=0;S<2*(E-L)-1;S++){let w=Math.floor(S/2);S%2===0?(d(A[L][w+1]),d(A[L+1][w]),d(A[L][w])):(d(A[L][w+1]),d(A[L+1][w+1]),d(A[L+1][w]))}}function c(_){let y=new C;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(_),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let _=new C;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let v=g(_)/2/Math.PI+.5,D=p(_)/Math.PI+.5;o.push(v,1-D)}m(),u()}function u(){for(let _=0;_<o.length;_+=6){let y=o[_+0],v=o[_+2],D=o[_+4],E=Math.max(y,v,D),A=Math.min(y,v,D);E>.9&&A<.1&&(y<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),D<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,y){let v=_*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function m(){let _=new C,y=new C,v=new C,D=new C,E=new tt,A=new tt,L=new tt;for(let S=0,w=0;S<r.length;S+=9,w+=6){_.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),E.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),L.set(o[w+4],o[w+5]),D.copy(_).add(y).add(v).divideScalar(3);let P=g(D);x(E,w+0,_,P),x(A,w+2,y,P),x(L,w+4,v,P)}}function x(_,y,v,D){D<0&&_.x===1&&(o[y]=_.x-1),v.x===0&&v.z===0&&(o[y]=D/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Hs=class extends oa{constructor(t){super(t),this.uuid=Hn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new oa().fromJSON(s))}return this}},Ky={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=jd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=nv(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Ir(r,o,e,a,l,f,0),o}};function jd(i,t,e,n,s){let r,o;if(s===fv(i,t,e,n)>0)for(r=t;r<e;r+=n)o=_d(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=_d(r,i[r],i[r+1],o);return o&&ya(o,o.next)&&(Dr(o),o=o.next),o}function ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ya(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ir(i,t,e,n,s,r,o){if(!i)return;!o&&r&&av(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Qy(i,n,s,r):jy(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Dr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=tv(ji(i),t,e),Ir(i,t,e,n,s,r,2)):o===2&&ev(i,t,e,n,s,r):Ir(ji(i),t,e,n,s,r,1);break}}}function jy(i){let t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&As(s,a,r,l,o,c,m.x,m.y)&&Ee(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Qy(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ee(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,p=Jc(f,m,t,e,n),_=Jc(x,g,t,e,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&As(a,h,l,u,c,d,y.x,y.y)&&Ee(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&As(a,h,l,u,c,d,v.x,v.y)&&Ee(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&As(a,h,l,u,c,d,y.x,y.y)&&Ee(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&As(a,h,l,u,c,d,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function tv(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ya(s,r)&&Qd(s,n,n.next,r)&&Lr(s,r)&&Lr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Dr(n),Dr(n.next),n=i=r),n=n.next}while(n!==i);return ji(n)}function ev(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hv(o,a)){let l=tf(o,a);o=ji(o,o.next),l=ji(l,l.next),Ir(o,t,e,n,s,r,0),Ir(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function nv(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=jd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(cv(c));for(s.sort(iv),r=0;r<s.length;r++)e=sv(s[r],e);return e}function iv(i,t){return i.x-t.x}function sv(i,t){let e=rv(i,t);if(!e)return t;let n=tf(e,i);return ji(n,n.next),ji(e,e.next)}function rv(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&As(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Lr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&ov(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function ov(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function av(i,t,e,n){let s=i;do s.z===0&&(s.z=Jc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lv(s)}function lv(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Jc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function cv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function As(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function hv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!uv(i,t)&&(Lr(i,t)&&Lr(t,i)&&dv(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||ya(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ya(i,t){return i.x===t.x&&i.y===t.y}function Qd(i,t,e,n){let s=Io(Ee(i,t,e)),r=Io(Ee(i,t,n)),o=Io(Ee(e,n,i)),a=Io(Ee(e,n,t));return!!(s!==r&&o!==a||s===0&&Po(i,e,t)||r===0&&Po(i,n,t)||o===0&&Po(e,i,n)||a===0&&Po(e,t,n))}function Po(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Io(i){return i>0?1:i<0?-1:0}function uv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Qd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Lr(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function dv(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function tf(i,t){let e=new Kc(i.i,i.x,i.y),n=new Kc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function _d(i,t,e,n){let s=new Kc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var br=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];wd(t),bd(n,t);let o=t.length;e.forEach(wd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,bd(n,e[l]);let a=Ky.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function wd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function bd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var kr=class i extends Re{constructor(t=new Hs([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:pv,y,v=!1,D,E,A,L;p&&(y=p.getSpacedPoints(h),v=!0,d=!1,D=p.computeFrenetFrames(h,!1),E=new C,A=new C,L=new C),d||(g=0,f=0,m=0,x=0);let S=a.extractPoints(c),w=S.shape,P=S.holes;if(!br.isClockWise(w)){w=w.reverse();for(let Q=0,ot=P.length;Q<ot;Q++){let I=P[Q];br.isClockWise(I)&&(P[Q]=I.reverse())}}let N=br.triangulateShape(w,P),U=w;for(let Q=0,ot=P.length;Q<ot;Q++){let I=P[Q];w=w.concat(I)}function Y(Q,ot,I){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ot,I)}let W=w.length,it=N.length;function X(Q,ot,I){let Nt,nt,bt,ht=Q.x-ot.x,Bt=Q.y-ot.y,_t=I.x-Q.x,R=I.y-Q.y,b=ht*ht+Bt*Bt,z=ht*R-Bt*_t;if(Math.abs(z)>Number.EPSILON){let Z=Math.sqrt(b),et=Math.sqrt(_t*_t+R*R),$=ot.x-Bt/Z,Lt=ot.y+ht/Z,ft=I.x-R/et,wt=I.y+_t/et,te=((ft-$)*R-(wt-Lt)*_t)/(ht*R-Bt*_t);Nt=$+ht*te-Q.x,nt=Lt+Bt*te-Q.y;let st=Nt*Nt+nt*nt;if(st<=2)return new tt(Nt,nt);bt=Math.sqrt(st/2)}else{let Z=!1;ht>Number.EPSILON?_t>Number.EPSILON&&(Z=!0):ht<-Number.EPSILON?_t<-Number.EPSILON&&(Z=!0):Math.sign(Bt)===Math.sign(R)&&(Z=!0),Z?(Nt=-Bt,nt=ht,bt=Math.sqrt(b)):(Nt=ht,nt=Bt,bt=Math.sqrt(b/2))}return new tt(Nt/bt,nt/bt)}let ut=[];for(let Q=0,ot=U.length,I=ot-1,Nt=Q+1;Q<ot;Q++,I++,Nt++)I===ot&&(I=0),Nt===ot&&(Nt=0),ut[Q]=X(U[Q],U[I],U[Nt]);let yt=[],Rt,qt=ut.concat();for(let Q=0,ot=P.length;Q<ot;Q++){let I=P[Q];Rt=[];for(let Nt=0,nt=I.length,bt=nt-1,ht=Nt+1;Nt<nt;Nt++,bt++,ht++)bt===nt&&(bt=0),ht===nt&&(ht=0),Rt[Nt]=X(I[Nt],I[bt],I[ht]);yt.push(Rt),qt=qt.concat(Rt)}for(let Q=0;Q<g;Q++){let ot=Q/g,I=f*Math.cos(ot*Math.PI/2),Nt=m*Math.sin(ot*Math.PI/2)+x;for(let nt=0,bt=U.length;nt<bt;nt++){let ht=Y(U[nt],ut[nt],Nt);ct(ht.x,ht.y,-I)}for(let nt=0,bt=P.length;nt<bt;nt++){let ht=P[nt];Rt=yt[nt];for(let Bt=0,_t=ht.length;Bt<_t;Bt++){let R=Y(ht[Bt],Rt[Bt],Nt);ct(R.x,R.y,-I)}}}let le=m+x;for(let Q=0;Q<W;Q++){let ot=d?Y(w[Q],qt[Q],le):w[Q];v?(A.copy(D.normals[0]).multiplyScalar(ot.x),E.copy(D.binormals[0]).multiplyScalar(ot.y),L.copy(y[0]).add(A).add(E),ct(L.x,L.y,L.z)):ct(ot.x,ot.y,0)}for(let Q=1;Q<=h;Q++)for(let ot=0;ot<W;ot++){let I=d?Y(w[ot],qt[ot],le):w[ot];v?(A.copy(D.normals[Q]).multiplyScalar(I.x),E.copy(D.binormals[Q]).multiplyScalar(I.y),L.copy(y[Q]).add(A).add(E),ct(L.x,L.y,L.z)):ct(I.x,I.y,u/h*Q)}for(let Q=g-1;Q>=0;Q--){let ot=Q/g,I=f*Math.cos(ot*Math.PI/2),Nt=m*Math.sin(ot*Math.PI/2)+x;for(let nt=0,bt=U.length;nt<bt;nt++){let ht=Y(U[nt],ut[nt],Nt);ct(ht.x,ht.y,u+I)}for(let nt=0,bt=P.length;nt<bt;nt++){let ht=P[nt];Rt=yt[nt];for(let Bt=0,_t=ht.length;Bt<_t;Bt++){let R=Y(ht[Bt],Rt[Bt],Nt);v?ct(R.x,R.y+y[h-1].y,y[h-1].x+I):ct(R.x,R.y,u+I)}}}J(),at();function J(){let Q=s.length/3;if(d){let ot=0,I=W*ot;for(let Nt=0;Nt<it;Nt++){let nt=N[Nt];Ot(nt[2]+I,nt[1]+I,nt[0]+I)}ot=h+g*2,I=W*ot;for(let Nt=0;Nt<it;Nt++){let nt=N[Nt];Ot(nt[0]+I,nt[1]+I,nt[2]+I)}}else{for(let ot=0;ot<it;ot++){let I=N[ot];Ot(I[2],I[1],I[0])}for(let ot=0;ot<it;ot++){let I=N[ot];Ot(I[0]+W*h,I[1]+W*h,I[2]+W*h)}}n.addGroup(Q,s.length/3-Q,0)}function at(){let Q=s.length/3,ot=0;It(U,ot),ot+=U.length;for(let I=0,Nt=P.length;I<Nt;I++){let nt=P[I];It(nt,ot),ot+=nt.length}n.addGroup(Q,s.length/3-Q,1)}function It(Q,ot){let I=Q.length;for(;--I>=0;){let Nt=I,nt=I-1;nt<0&&(nt=Q.length-1);for(let bt=0,ht=h+g*2;bt<ht;bt++){let Bt=W*bt,_t=W*(bt+1),R=ot+Nt+Bt,b=ot+nt+Bt,z=ot+nt+_t,Z=ot+Nt+_t;Wt(R,b,z,Z)}}}function ct(Q,ot,I){l.push(Q),l.push(ot),l.push(I)}function Ot(Q,ot,I){Vt(Q),Vt(ot),Vt(I);let Nt=s.length/3,nt=_.generateTopUV(n,s,Nt-3,Nt-2,Nt-1);re(nt[0]),re(nt[1]),re(nt[2])}function Wt(Q,ot,I,Nt){Vt(Q),Vt(ot),Vt(Nt),Vt(ot),Vt(I),Vt(Nt);let nt=s.length/3,bt=_.generateSideWallUV(n,s,nt-6,nt-3,nt-2,nt-1);re(bt[0]),re(bt[1]),re(bt[3]),re(bt[1]),re(bt[2]),re(bt[3])}function Vt(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function re(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return mv(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Yc[s.type]().fromJSON(s)),new i(n,t.options)}},pv={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new tt(r,o),new tt(a,l),new tt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new tt(o,1-l),new tt(c,1-u),new tt(d,1-m),new tt(x,1-p)]:[new tt(a,1-l),new tt(h,1-u),new tt(f,1-m),new tt(g,1-p)]}};function mv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ve=class i extends $c{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var aa=class i extends Re{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new C,m=new tt;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let _=p+g,y=_,v=_+n+1,D=_+n+2,E=_+1;a.push(y,v,E),a.push(v,D,E)}}this.setIndex(a),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var oi=class i extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,d=new C,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let _=[],y=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){let E=D/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(E+v,1-y),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let y=h[p][_+1],v=h[p][_],D=h[p+1][_],E=h[p+1][_+1];(p!==0||o>0)&&f.push(y,v,E),(p!==n-1||l<Math.PI)&&f.push(v,D,E)}this.setIndex(f),this.setAttribute("position",new oe(m,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ai=class i extends Re{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,_=(s+1)*f+m;o.push(x,g,_),o.push(g,p,_)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var la=class extends De{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Qi=class extends ri{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hd,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Lo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function gv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Vs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jc=class extends Vs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xu,endingEnd:xu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case yu:r=t,a=2*e-n;break;case vu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yu:o=t,l=2*n-e;break;case vu:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,_=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*x+.5*m,v=f*g-f*x;for(let D=0;D!==a;++D)r[D]=p*o[h+D]+_*o[c+D]+y*o[l+D]+v*o[u+D];return r}},Qc=class extends Vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},th=class extends Vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Lo(e,this.TimeBufferType),this.values=Lo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Lo(t.times,Array),values:Lo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new th(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Oo:e=this.InterpolantFactoryMethodDiscrete;break;case wc:e=this.InterpolantFactoryMethodLinear;break;case il:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oo;case this.InterpolantFactoryMethodLinear:return wc;case this.InterpolantFactoryMethodSmooth:return il}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&gv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===il,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=wc;var ts=class extends Pn{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Oo;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var eh=class extends Pn{};eh.prototype.ValueTypeName="color";var nh=class extends Pn{};nh.prototype.ValueTypeName="number";var ih=class extends Vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Mi.slerpFlat(r,0,o,c-a,o,c,l);return r}},ca=class extends Pn{InterpolantFactoryMethodLinear(t){return new ih(this.times,this.values,this.getValueSize(),t)}};ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Pn{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Oo;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var sh=class extends Pn{};sh.prototype.ValueTypeName="vector";var rh=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},xv=new rh,oh=class{constructor(t){this.manager=t!==void 0?t:xv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};oh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ur=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ha=class extends Ur{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},kl=new pe,Md=new C,Sd=new C,ua=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Md.setFromMatrixPosition(t.matrixWorld),e.position.copy(Md),Sd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sd),e.updateMatrixWorld(),kl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Td=new pe,pr=new C,Ul=new C,ah=class extends ua{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),pr.setFromMatrixPosition(t.matrixWorld),n.position.copy(pr),Ul.copy(n.position),Ul.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ul),n.updateMatrixWorld(),s.makeTranslation(-pr.x,-pr.y,-pr.z),Td.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Td)}},ns=class extends Ur{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ah}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},lh=class extends ua{constructor(){super(new Ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},da=class extends Ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new lh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var fa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ed(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Ed();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Ed(){return performance.now()}var Rh="\\[\\]\\.:\\/",yv=new RegExp("["+Rh+"]","g"),Ch="[^"+Rh+"]",vv="[^"+Rh.replace("\\.","")+"]",_v=/((?:WC+[\/:])*)/.source.replace("WC",Ch),wv=/(WCOD+)?/.source.replace("WCOD",vv),bv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),Mv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),Sv=new RegExp("^"+_v+wv+bv+Mv+"$"),Tv=["material","materials","bones","map"],ch=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yv,"")}static parseTrackName(t){let e=Sv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Tv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=ch;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kv=new Float32Array(1);var Ad=new pe,pa=class{constructor(t,e,n=0,s=1/0){this.ray=new Tr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ad.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ad),this}intersectObject(t,e=!0,n=[]){return hh(t,this,n,e),n.sort(Rd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)hh(t[s],this,n,e);return n.sort(Rd),n}};function Rd(i,t){return i.distance-t.distance}function hh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)hh(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uh);var M={time:0,realTime:0,dt:0,timeScale:1,paused:!1,debug:!1,renderer:null,scene:null,camera:null,world:null,player:null,ui:null,audio:null,input:null,album:null,director:null,state:{identity:"mother",childName:"Lily",childKind:"daughter",flags:{},stats:{emails:0,workCalls:0}},updaters:new Set,realUpdaters:new Set};function Ev(){return M.state.identity==="father"?"Dad":"Mom"}function Av(){return M.state.identity==="father"?"Grandpa":"Grandma"}function qs(){return M.state.childName||"Lily"}function ef(){return M.state.childKind==="son"?"he":"she"}function Rv(){return M.state.childKind==="son"?"him":"her"}function nf(){return M.state.childKind==="son"?"his":"her"}function Cv(){let i=ef();return i[0].toUpperCase()+i.slice(1)}function Pv(){let i=nf();return i[0].toUpperCase()+i.slice(1)}function Pe(i){return i.replace(/\{me\}/g,Ev()).replace(/\{grandme\}/g,Av()).replace(/\{child\}/g,qs()).replace(/\{they\}/g,ef()).replace(/\{They\}/g,Cv()).replace(/\{them\}/g,Rv()).replace(/\{their\}/g,nf()).replace(/\{Their\}/g,Pv())}var jt=(i,t,e)=>i<t?t:i>e?e:i,tn=(i,t,e)=>i+(t-i)*e;var Iv=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2;var ai=(i,t,e,n)=>tn(i,t,1-Math.exp(-e*n));function Ph(i,t,e){let n=(t-i+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),i+n*e}function _e(i=1){let t=i>>>0||1,e=()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,(t>>>0)/4294967296);return e.range=(n,s)=>n+(s-n)*e(),e.int=(n,s)=>Math.floor(n+(s-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e}var jv=_e(12345);function Ht(i){return new Promise(t=>{let e=0,n=s=>{e+=s,e>=i&&(M.updaters.delete(n),t())};M.updaters.add(n)})}function $e(i,t,e=Iv){return new Promise(n=>{let s=0;if(i<=0)return t(1),n();let r=o=>{s+=o;let a=jt(s/i,0,1);t(e(a)),a>=1&&(M.updaters.delete(r),n())};M.updaters.add(r)})}function en(i){return new Promise(t=>{let e=n=>{i(n)&&(M.updaters.delete(e),t())};M.updaters.add(e)})}function Fr(i,t,e,n){let s=i-e,r=t-n;return Math.sqrt(s*s+r*r)}var va={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Lv=new Ti(-1,1,1,-1,0,1),Ih=class extends Re{constructor(){super(),this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}},Dv=new Ih,Ci=class{constructor(t){this._mesh=new Mt(Dv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Lv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ys=class extends pn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof De?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ri.clone(t.uniforms),this.material=new De({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ci(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Or=class extends pn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},_a=class extends pn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var wa=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new tt);this._width=n.width,this._height=n.height,e=new Qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:In}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ys(va),this.copyPass.material.blending=zn,this.clock=new fa}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Or!==void 0&&(o instanceof Or?n=!0:o instanceof _a&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ba=class extends pn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ct}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var sf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ct(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Zs=class i extends pn{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new tt(t.x,t.y):new tt(256,256),this.clearColor=new Ct(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Qe(r,o,{type:In}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Qe(r,o,{type:In});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Qe(r,o,{type:In});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=sf;this.highPassUniforms=Ri.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new De({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new tt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=va;this.copyUniforms=Ri.clone(h.uniforms),this.blendMaterial=new De({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:yn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ct,this.oldClearAlpha=1,this.basic=new Ye,this.fsQuad=new Ci(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new tt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new De({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new De({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Zs.BlurDirectionX=new tt(1,0);Zs.BlurDirectionY=new tt(0,1);var rf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ma=class extends pn{constructor(){super();let t=rf;this.uniforms=Ri.clone(t.uniforms),this.material=new la({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ci(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ne.getTransfer(this._outputColorSpace)===ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ph?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===mh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Nr&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Lh={skyTop:12572912,skyBottom:16246488,fog:15917782,fogNear:6,fogFar:46,sun:16773596,sunIntensity:2.6,sunAz:210,sunEl:52,hemiSky:14674431,hemiGround:11901574,hemiIntensity:1.25,exposure:1,saturation:1,contrast:1,brightness:0,warmth:0,tint:16777215,tintAmt:0,vignette:.35,grain:.035,bloom:.28,tilt:.6,focusX:.5,focusY:.5,focusRadius:2,focusDesat:0,dream:0},Dh={dawnNursery:{skyTop:16041923,skyBottom:16508628,fog:16243919,sun:16765616,sunIntensity:2.4,sunAz:235,sunEl:28,hemiSky:16769254,hemiGround:12884620,hemiIntensity:1.35,saturation:.95,warmth:.35,vignette:.45,bloom:.42,tilt:.9,dream:.25},springMorning:{skyTop:11129842,skyBottom:16510688,fog:16116964,sun:16773334,sunIntensity:2.8,sunAz:220,sunEl:48,hemiSky:14938111,hemiGround:10466442,hemiIntensity:1.3,saturation:1.05,warmth:.15,vignette:.32,bloom:.32,tilt:.75,dream:.12},summerDay:{skyTop:8373488,skyBottom:15135999,fog:14675706,sun:16774880,sunIntensity:3.1,sunAz:205,sunEl:58,hemiSky:15332607,hemiGround:9416302,hemiIntensity:1.25,saturation:1.18,contrast:1.04,warmth:.1,vignette:.28,bloom:.26,tilt:.6},summerDusk:{skyTop:5988254,skyBottom:16169354,fog:15247754,sun:16757370,sunIntensity:2.1,sunAz:250,sunEl:14,hemiSky:10260432,hemiGround:9136730,hemiIntensity:1.1,saturation:1.1,warmth:.45,vignette:.42,bloom:.45,tilt:.75},summerNight:{skyTop:1317434,skyBottom:3817330,fog:2896483,sun:10466559,sunIntensity:.9,sunAz:140,sunEl:40,hemiSky:5924528,hemiGround:2761792,hemiIntensity:.9,saturation:.95,warmth:-.1,vignette:.55,bloom:.7,tilt:.8},goldenAfternoon:{skyTop:9418982,skyBottom:16768174,fog:16308660,sun:16764812,sunIntensity:3,sunAz:240,sunEl:30,hemiSky:16638912,hemiGround:10518624,hemiIntensity:1.2,saturation:1.12,contrast:1.05,warmth:.4,vignette:.35,bloom:.35,tilt:.65},rainyGrey:{skyTop:8161172,skyBottom:12174024,fog:11187130,sun:14213868,sunIntensity:1.1,sunAz:200,sunEl:60,hemiSky:13095644,hemiGround:6975344,hemiIntensity:1.35,saturation:.55,contrast:.95,warmth:-.25,vignette:.5,bloom:.15,tilt:.7},autumnEvening:{skyTop:4012651,skyBottom:15964779,fog:14255978,sun:16752490,sunIntensity:1.9,sunAz:255,sunEl:12,hemiSky:9403584,hemiGround:8015936,hemiIntensity:1.05,saturation:1.15,warmth:.5,vignette:.45,bloom:.6,tilt:.7},festivalNight:{skyTop:1053750,skyBottom:3878236,fog:3024464,sun:10725631,sunIntensity:.7,sunAz:130,sunEl:45,hemiSky:6970024,hemiGround:3811898,hemiIntensity:.95,saturation:1.1,warmth:.2,vignette:.5,bloom:.85,tilt:.75},weddingDay:{skyTop:10473458,skyBottom:16773602,fog:16510948,sun:16774108,sunIntensity:3,sunAz:215,sunEl:50,hemiSky:15856895,hemiGround:10926218,hemiIntensity:1.35,saturation:1.08,warmth:.25,vignette:.3,bloom:.45,tilt:.7,dream:.15},nurseryNight:{skyTop:1909832,skyBottom:4016762,fog:3029094,sun:9348863,sunIntensity:.55,sunAz:140,sunEl:40,hemiSky:6320312,hemiGround:3813448,hemiIntensity:.75,saturation:.95,warmth:.15,vignette:.55,bloom:.8,tilt:.9},homeMorning:{skyTop:11851506,skyBottom:16641757,fog:16313052,sun:16772300,sunIntensity:2.7,sunAz:225,sunEl:40,hemiSky:15790335,hemiGround:11770496,hemiIntensity:1.4,saturation:1.05,warmth:.28,vignette:.32,bloom:.35,tilt:.7},fastForward:{skyTop:10137291,skyBottom:15260879,fog:14603208,sun:16773344,sunIntensity:2.4,sunAz:210,sunEl:45,hemiSky:14739184,hemiGround:10129536,hemiIntensity:1.3,saturation:.85,contrast:1.08,warmth:0,vignette:.5,bloom:.3,tilt:.95},emptyHouse:{skyTop:10134445,skyBottom:14078668,fog:13617860,sun:15788254,sunIntensity:1.8,sunAz:230,sunEl:26,hemiSky:14212580,hemiGround:9076854,hemiIntensity:1.25,saturation:.45,contrast:.96,warmth:-.05,vignette:.55,bloom:.2,tilt:.8},winterMorning:{skyTop:12043992,skyBottom:15659508,fog:15133423,sun:15987455,sunIntensity:2.2,sunAz:205,sunEl:22,hemiSky:15660031,hemiGround:12107980,hemiIntensity:1.5,saturation:.35,contrast:.98,warmth:-.2,vignette:.45,bloom:.3,tilt:.8},winterDusk:{skyTop:3620970,skyBottom:14264480,fog:12560042,sun:16761504,sunIntensity:1.6,sunAz:250,sunEl:10,hemiSky:10134736,hemiGround:9474208,hemiIntensity:1.2,saturation:.7,warmth:.3,vignette:.5,bloom:.6,tilt:.8},dream:{skyTop:16177126,skyBottom:16774888,fog:16773610,sun:16774374,sunIntensity:2.6,sunAz:220,sunEl:40,hemiSky:16773366,hemiGround:15126464,hemiIntensity:1.6,saturation:1,warmth:.3,vignette:.25,bloom:.75,tilt:.9,dream:.6,fogNear:2,fogFar:34},kitchenNight:{skyTop:1448496,skyBottom:2961744,fog:2501189,sun:11056383,sunIntensity:.5,sunAz:140,sunEl:40,hemiSky:5922704,hemiGround:3813424,hemiIntensity:.6,saturation:.75,warmth:.35,vignette:.6,bloom:.75,tilt:.9},black:{skyTop:328968,skyBottom:657936,fog:526348,sunIntensity:0,hemiIntensity:.1}};var kv={uniforms:{tDiffuse:{value:null},resolution:{value:new tt(1,1)},time:{value:0},saturation:{value:1},contrast:{value:1},brightness:{value:0},warmth:{value:0},tint:{value:new Ct(1,1,1)},tintAmt:{value:0},vignette:{value:.3},grain:{value:.03},tilt:{value:.5},dream:{value:0},focus:{value:new tt(.5,.5)},focusRadius:{value:2},focusDesat:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 resolution; uniform float time;
    uniform float saturation, contrast, brightness, warmth, tintAmt, vignette, grain, tilt, dream;
    uniform vec3 tint; uniform vec2 focus; uniform float focusRadius, focusDesat;
    varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    vec3 blurred(vec2 uv, float amt){
      vec2 px = amt / resolution;
      vec3 c = vec3(0.0); float w = 0.0;
      for(int i=-2;i<=2;i++){ for(int j=-2;j<=2;j++){
        vec2 o = vec2(float(i), float(j)) * px;
        float k = 1.0 / (1.0 + float(i*i + j*j));
        c += texture2D(tDiffuse, uv + o).rgb * k; w += k;
      }}
      return c / w;
    }
    void main(){
      vec2 uv = vUv;
      vec3 col = texture2D(tDiffuse, uv).rgb;
      // tilt-shift: blur top and bottom of the frame, like a miniature
      float d = abs(uv.y - 0.5) * 2.0;
      float b = smoothstep(0.45, 1.0, d) * tilt;
      if (b > 0.01) col = mix(col, blurred(uv, b * 3.0), clamp(b * 1.4, 0.0, 1.0));
      // dream glow: soft halation for memories
      if (dream > 0.01) {
        vec3 soft = blurred(uv, 4.0 + dream * 4.0);
        col = mix(col, max(col, soft), dream * 0.65);
        col += soft * dream * 0.12;
      }
      col += brightness;
      col = (col - 0.5) * contrast + 0.5;
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(vec3(l), col, saturation);
      // selective colour: outside the focus circle we drain colour
      if (focusDesat > 0.001) {
        vec2 a = vec2(resolution.x / resolution.y, 1.0);
        float fd = length((uv - focus) * a);
        float m = smoothstep(focusRadius * 0.55, focusRadius, fd);
        float l2 = dot(col, vec3(0.299, 0.587, 0.114));
        col = mix(col, mix(vec3(l2), col, 0.12) * vec3(0.96, 0.98, 1.04), m * focusDesat);
      }
      col.r += warmth * 0.05; col.g += warmth * 0.012; col.b -= warmth * 0.05;
      col = mix(col, col * tint, tintAmt);
      vec2 vc = uv - 0.5; vc.x *= resolution.x / resolution.y;
      float v = smoothstep(0.35, 1.05, length(vc) * 1.15);
      col *= 1.0 - v * vignette;
      col += (hash(uv * resolution + fract(time) * 100.0) - 0.5) * grain;
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }
  `},Sa=class i{constructor(t){this.container=t;let e=new $o({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=dh,e.toneMapping=Nr,e.toneMappingExposure=1,e.outputColorSpace=Be,t.appendChild(e.domElement),this.r=e,this.scene=new Ko,this.skyCanvas=document.createElement("canvas"),this.skyCanvas.width=2,this.skyCanvas.height=128,this.skyTex=new Bs(this.skyCanvas),this.skyTex.colorSpace=Be,this.scene.background=this.skyTex,this.scene.fog=new Jo(16777215,50,120),this.viewSize=14;let n=window.innerWidth/window.innerHeight;this.camera=new Ti(-n*7,n*7,7,-7,.1,300),this.camAz=45,this.camEl=33,this.camDist=70,this.camTarget=new C,this.camGoal=new C,this.zoomGoal=14,this.followSpeed=3,this.follow=null,this.followOffset=new C,this.shake=0,this.camBounds=null,this.hemi=new ha(16777215,8947848,1.2),this.scene.add(this.hemi),this.sun=new da(16777215,2.5),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,this.sun.shadow.radius=3;let s=this.sun.shadow.camera;s.left=-22,s.right=22,s.top=22,s.bottom=-22,s.near=1,s.far=120,this.scene.add(this.sun),this.scene.add(this.sun.target);let r=new wa(e);r.addPass(new ba(this.scene,this.camera)),this.bloom=new Zs(new tt(window.innerWidth/2,window.innerHeight/2),.3,.55,.82),r.addPass(this.bloom),r.addPass(new Ma),this.grade=new Ys(kv),r.addPass(this.grade),this.composer=r,this.mood=this._expand(Lh),this.moodFrom=this._clone(this.mood),this.moodTo=this._clone(this.mood),this.moodT=1,this.moodDur=0,this.overrides={},this._applyMood(),window.addEventListener("resize",()=>this.resize()),this.resize()}_expand(t){let e={};for(let n in t)e[n]=i.isColorKey(n)?new Ct(t[n]):t[n];return e}_clone(t){let e={};for(let n in t)e[n]=t[n]instanceof Ct?t[n].clone():t[n];return e}static isColorKey(t){return["skyTop","skyBottom","fog","sun","hemiSky","hemiGround","tint"].includes(t)}setMood(t,e=2,n=null){let s=typeof t=="string"?{...Lh,...Dh[t]}:{...this._flat(this.moodTo),...t};typeof t=="string"&&!Dh[t]&&console.warn("unknown mood",t),n&&(s={...s,...n}),this.moodFrom=this._clone(this.mood);let r={};for(let o in s)r[o]=i.isColorKey(o)?new Ct(s[o]):s[o];this.moodTo=r,this.moodT=0,this.moodDur=Math.max(1e-4,e),e<=0&&(this.moodT=1,this.mood=this._clone(r),this._applyMood())}_flat(t){let e={};for(let n in t)e[n]=t[n]instanceof Ct?t[n].getHex():t[n];return e}moodTarget(){return this._flat(this.moodTo)}_updateMood(t){if(this.moodT<1){this.moodT=Math.min(1,this.moodT+t/this.moodDur);let e=this.moodT*this.moodT*(3-2*this.moodT);for(let n in this.moodTo){let s=this.moodFrom[n],r=this.moodTo[n];r instanceof Ct?(this.mood[n]instanceof Ct||(this.mood[n]=new Ct),this.mood[n].copy(s instanceof Ct?s:r).lerp(r,e)):typeof r=="number"&&(this.mood[n]=tn(s??r,r,e))}this._applyMood()}else this._applyMood(!0)}_applyMood(t=!1){let e=this.mood,n=this.overrides;if(!t){let o=this.skyCanvas.getContext("2d"),a=o.createLinearGradient(0,0,0,128);a.addColorStop(0,"#"+e.skyTop.getHexString()),a.addColorStop(1,"#"+e.skyBottom.getHexString()),o.fillStyle=a,o.fillRect(0,0,2,128),this.skyTex.needsUpdate=!0,this.scene.fog.color.copy(e.fog),this.sun.color.copy(e.sun),this.hemi.color.copy(e.hemiSky),this.hemi.groundColor.copy(e.hemiGround)}let s=Math.max(.8,this.viewSize/14);this.scene.fog.near=this.camDist+e.fogNear*s,this.scene.fog.far=this.camDist+e.fogFar*s,this.sun.intensity=e.sunIntensity*(n.light??1),this.hemi.intensity=e.hemiIntensity*(n.light??1),this.r.toneMappingExposure=e.exposure;let r=this.grade.uniforms;r.saturation.value=e.saturation*(n.saturation??1),r.contrast.value=e.contrast,r.brightness.value=e.brightness+(n.brightness??0),r.warmth.value=e.warmth+(n.warmth??0),r.tint.value.copy(e.tint),r.tintAmt.value=e.tintAmt,r.vignette.value=e.vignette+(n.vignette??0),r.grain.value=e.grain,r.tilt.value=e.tilt,r.dream.value=jt(e.dream+(n.dream??0),0,1.2),r.focus.value.set(n.focusX??e.focusX,n.focusY??e.focusY),r.focusRadius.value=n.focusRadius??e.focusRadius,r.focusDesat.value=n.focusDesat??e.focusDesat,this.bloom.strength=e.bloom+(n.bloom??0)}pulse(t,e,n=1){let s=this.overrides[t]??(t==="saturation"||t==="light"?1:0);return $e(n,r=>{this.overrides[t]=tn(s,e,r)})}resize(){let t=window.innerWidth,e=window.innerHeight;this.r.setSize(t,e),this.composer.setSize(t,e);let n=this.r.getPixelRatio();this.grade.uniforms.resolution.value.set(t*n,e*n),this._updateProjection()}_updateProjection(){let t=window.innerWidth,e=window.innerHeight,n=t/e,s=this.viewSize*(n<1?1.25:1);this.camera.left=-s*n/2,this.camera.right=s*n/2,this.camera.top=s/2,this.camera.bottom=-s/2,this.camera.updateProjectionMatrix()}camOffset(){let t=Ws.degToRad(this.camAz),e=Ws.degToRad(this.camEl);return new C(Math.sin(t)*Math.cos(e),Math.sin(e),Math.cos(t)*Math.cos(e)).multiplyScalar(this.camDist)}groundBasis(){let t=Ws.degToRad(this.camAz),e=new C(-Math.sin(t),0,-Math.cos(t)),n=new C(Math.cos(t),0,-Math.sin(t));return{fwd:e,right:n}}setFollow(t,e=null){this.follow=t,e?this.followOffset.copy(e):this.followOffset.set(0,0,0)}snapCamera(){this.follow&&this.camGoal.copy(this.follow.position).add(this.followOffset),this.camTarget.copy(this.camGoal),this.viewSize=this.zoomGoal,this._updateProjection()}async cameraTo(t,e=null,n=2){this.follow=null;let s=this.camTarget.clone(),r=this.viewSize,o=new C(t.x,t.y??0,t.z);await $e(n,a=>{this.camGoal.copy(s).lerp(o,a),this.camTarget.copy(this.camGoal),e&&(this.zoomGoal=tn(r,e,a),this.viewSize=this.zoomGoal,this._updateProjection())})}zoomTo(t,e=2){let n=this.zoomGoal;return $e(e,s=>{this.zoomGoal=tn(n,t,s)})}update(t){if(this._updateMood(t),this.follow&&(this.camGoal.copy(this.follow.position).add(this.followOffset),this.camGoal.y=Math.max(0,this.camGoal.y*.5)),this.camBounds&&this.follow){let u=this.camBounds;this.camGoal.x=jt(this.camGoal.x,u.minX,u.maxX),this.camGoal.z=jt(this.camGoal.z,u.minZ,u.maxZ)}let e=this.followSpeed;this.camTarget.x=ai(this.camTarget.x,this.camGoal.x,e,t),this.camTarget.y=ai(this.camTarget.y,this.camGoal.y,e,t),this.camTarget.z=ai(this.camTarget.z,this.camGoal.z,e,t);let n=ai(this.viewSize,this.zoomGoal,2.5,t);Math.abs(n-this.viewSize)>1e-4&&(this.viewSize=n,this._updateProjection());let s=this.camOffset();this.camera.position.copy(this.camTarget).add(s),this.shake>0&&(this.camera.position.x+=(Math.random()-.5)*this.shake,this.camera.position.y+=(Math.random()-.5)*this.shake,this.shake=Math.max(0,this.shake-t*2)),this.camera.lookAt(this.camTarget);let r=this.mood,o=Ws.degToRad(r.sunAz),a=Ws.degToRad(r.sunEl),l=new C(Math.sin(o)*Math.cos(a),Math.sin(a),Math.cos(o)*Math.cos(a));this.sun.position.copy(this.camTarget).addScaledVector(l,50),this.sun.target.position.copy(this.camTarget);let c=Math.max(14,this.viewSize*1.25),h=this.sun.shadow.camera;Math.abs(h.right-c)>.5&&(h.left=-c,h.right=c,h.top=c,h.bottom=-c,h.updateProjectionMatrix()),this.grade.uniforms.time.value=M.realTime}render(){this.composer.render()}snapshot(t=320,e=240){let n=this.r.domElement,s=document.createElement("canvas");s.width=t,s.height=e;let r=s.getContext("2d"),o=n.width/n.height,a=t/e,l=n.width,c=n.height,h=0,u=0;o>a?(l=c*a,h=(n.width-l)/2):(c=l/a,u=(n.height-c)/2);let d=.82,f=l*d,m=c*d;h+=(l-f)/2,u+=(c-m)/2,r.drawImage(n,h,u,f,m,0,0,t,e);try{return s.toDataURL("image/jpeg",.72)}catch{return null}}project(t){let e=t.clone().project(this.camera);return{x:(e.x+1)/2*window.innerWidth,y:(1-e.y)/2*window.innerHeight,visible:e.z<1}}unproject(t,e,n=0){let s=new tt(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1),r=new pa;r.setFromCamera(s,this.camera);let o=new En(new C(0,1,0),-n),a=new C;return r.ray.intersectPlane(o,a)?a:null}};var of={ArrowUp:"up",KeyW:"up",ArrowDown:"down",KeyS:"down",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",Space:"act",Enter:"act",KeyE:"act",NumpadEnter:"act",Escape:"pause",KeyP:"pause",KeyJ:"album",Tab:"album",Digit1:"n1",Digit2:"n2",Digit3:"n3",Digit4:"n4"},Ta=class{constructor(t){this.el=t,this.held=new Set,this.pressedSet=new Set,this.releasedSet=new Set,this.pointer={x:0,y:0,down:!1,downT:0,moved:!1,startX:0,startY:0},this.clicks=[],this.anyPress=!1,this.lastDevice="keyboard",window.addEventListener("keydown",e=>{if(e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA"))return;let n=of[e.code];n&&(e.preventDefault(),this.held.has(n)||this.pressedSet.add(n),this.held.add(n)),e.repeat||(this.anyPress=!0),this.lastDevice="keyboard",M.audio?.init()}),window.addEventListener("keyup",e=>{let n=of[e.code];n&&(this.held.delete(n),this.releasedSet.add(n))}),window.addEventListener("blur",()=>{this.held.clear(),this.pointer.down=!1}),t.addEventListener("pointerdown",e=>{this.pointer.down=!0,this.pointer.downT=performance.now(),this.pointer.moved=!1,this.pointer.x=this.pointer.startX=e.clientX,this.pointer.y=this.pointer.startY=e.clientY,this.pressedSet.add("pointer"),this.anyPress=!0,this.lastDevice=e.pointerType==="touch"?"touch":"mouse",M.audio?.init()}),window.addEventListener("pointermove",e=>{this.pointer.x=e.clientX,this.pointer.y=e.clientY,this.pointer.down&&Math.hypot(e.clientX-this.pointer.startX,e.clientY-this.pointer.startY)>12&&(this.pointer.moved=!0)}),window.addEventListener("pointerup",e=>{if(this.pointer.down&&e.target===t){let n=performance.now()-this.pointer.downT;!this.pointer.moved&&n<450&&this.clicks.push({x:e.clientX,y:e.clientY})}this.pointer.down=!1,this.releasedSet.add("pointer")}),t.addEventListener("contextmenu",e=>e.preventDefault())}isDown(t){return this.held.has(t)}pressed(t){return this.pressedSet.has(t)}released(t){return this.releasedSet.has(t)}consume(t){this.pressedSet.delete(t)}holding(){return this.held.has("act")||this.pointer.down}axis(){let t=0,e=0;return this.held.has("left")&&(t-=1),this.held.has("right")&&(t+=1),this.held.has("up")&&(e+=1),this.held.has("down")&&(e-=1),{x:t,y:e}}endFrame(){this.pressedSet.clear(),this.releasedSet.clear(),this.clicks.length=0,this.anyPress=!1}};var nn=i=>document.querySelector(i),Tt=(i,t,e)=>{let n=document.createElement(i);return t&&(n.className=t),e!==void 0&&(n.innerHTML=e),n},af=i=>new Promise(t=>setTimeout(t,i)),Ea=class{constructor(){this.fadeEl=nn("#fade"),this.flashEl=nn("#flash"),this.narrEl=nn("#narr"),this.lowerEl=nn("#lower"),this.bubblesEl=nn("#bubbles"),this.choicesEl=nn("#choices"),this.promptEl=nn("#prompt"),this.keepEl=nn("#keep"),this.mgEl=nn("#mg"),this.cardEl=nn("#card"),this.hintEl=nn("#hint"),this.flyerEl=nn("#flyer"),this.clockEl=nn("#clock"),this.albumBtn=nn("#albumBtn"),this.menuBtn=nn("#menuBtn"),this.bubbles=[],this.settings={auto:!0,textSpeed:1};try{Object.assign(this.settings,JSON.parse(localStorage.getItem("lm.settings")||"{}"))}catch{}this.promptTarget=null,this.fadeValue=1,this.promptEl.addEventListener("pointerdown",t=>{t.stopPropagation(),this.promptClicked=!0})}saveSettings(){try{localStorage.setItem("lm.settings",JSON.stringify(this.settings))}catch{}}fade(t,e=1.5,n="#000"){let s=this.fadeEl;return s.style.background=n,s.style.transition=`opacity ${e}s ease`,s.offsetWidth,s.style.opacity=t,this.fadeValue=t,af(e*1e3)}fadeOut(t=1.5,e="#000"){return this.fade(1,t,e)}fadeIn(t=1.5){return this.fade(0,t,this.fadeEl.style.background||"#000")}flash(t=.8,e=.85){let n=this.flashEl;n.style.transition="none",n.style.opacity=e,n.offsetWidth,n.style.transition=`opacity ${t}s ease`,n.style.opacity=0}_advance(){let t=M.input,e=t.pressed("act")||t.clicks.length>0||t.pressed("pointer");return e&&(t.consume("act"),t.consume("pointer"),t.clicks.length=0),e}_readTime(t){return M.auto?.25:(2+t.length*.055)/this.settings.textSpeed}async narrate(t,{stack:e=!1,auto:n=null,small:s=!1,dark:r=!1,hold:o=null,minTime:a=.9}={}){Array.isArray(t)||(t=[t]);let l=n??this.settings.auto;for(let c=0;c<t.length;c++){let h=Pe(t[c]);e||this._clearNarr();let u=Tt("div","line"+(s?" small":"")+(r?" dark":""));u.innerHTML=h+'<span class="advance"></span>',this.narrEl.appendChild(u),u.offsetWidth,u.classList.add("show"),await Ht(M.auto?.1:a),u.classList.add("ready");let d=o??(l?this._readTime(h):1/0),f=a;await en(m=>(f+=m,this._advance()||f>=d))}}_clearNarr(){for(let t of[...this.narrEl.children])t.classList.remove("show"),t.classList.add("out"),setTimeout(()=>t.remove(),1100)}clearNarration(){this._clearNarr()}async lower(t,{auto:e=null,hold:n=null,block:s=!0}={}){t=Pe(t);for(let c of[...this.lowerEl.children])c.classList.remove("show"),setTimeout(()=>c.remove(),1100);let r=Tt("div","line");r.innerHTML=t+'<span class="advance"></span>',this.lowerEl.appendChild(r),r.offsetWidth,r.classList.add("show");let o=e??this.settings.auto,a=n??(o?this._readTime(t):1/0);if(!s){Ht(a).then(()=>{r.classList.remove("show"),setTimeout(()=>r.remove(),1200)});return}await Ht(.6),r.classList.add("ready");let l=.6;await en(c=>(l+=c,this._advance()||l>=a)),r.classList.remove("show"),setTimeout(()=>r.remove(),1200)}async say(t,e,{thought:n=!1,auto:s=null,hold:r=null,small:o=!1,name:a=null,passive:l=!1}={}){e=Pe(e);let c=Tt("div","bubble"+(n?" thought":"")+(o?" small":"")),h=a??t?.name??"";c.innerHTML=(h&&!n?`<span class="who">${Pe(h)}</span>`:"")+'<span class="t"></span><span class="advance"></span>',this.bubblesEl.appendChild(c);let u={el:c,speaker:t};this.bubbles.push(u),this._positionBubble(u),c.offsetWidth,c.classList.add("show");let d=c.querySelector(".t"),f=0,m=!0,x=48*this.settings.textSpeed,g=0,p=0,_=l?()=>!1:()=>this._advance();await en(E=>{if(_())return m=!1,!0;g+=E*x;let A=Math.min(e.length,Math.floor(g));return A>f&&(f=A,d.textContent=e.slice(0,A),p++,p%3===0&&!n&&M.audio?.sfx("tap",{vol:.25})),A>=e.length}),d.textContent=e,c.classList.add("ready");let y=s??this.settings.auto,v=r??(y||l?this._readTime(e)*.85:1/0),D=0;await Ht(.25),await en(E=>(D+=E,_()||D>=v)),c.classList.remove("show"),setTimeout(()=>{c.remove(),this.bubbles=this.bubbles.filter(E=>E!==u)},350)}_positionBubble(t){let e=t.speaker,n=window.innerWidth/2,s=window.innerHeight*.7;if(e&&(e.headWorld||e.isVector3||e.position)){let r=e.headWorld?e.headWorld():e.isVector3?e.clone():e.position.clone(),o=M.renderer.project(r);n=jt(o.x,140,window.innerWidth-140),s=jt(o.y-14,90,window.innerHeight-40)}t.el.style.left=n+"px",t.el.style.top=s+"px"}choose(t,e){return M.auto?(M.log?.push("choose: "+t),Ht(.2).then(()=>(M.autoChoice??0)%e.length)):new Promise(n=>{let s=this.choicesEl;s.innerHTML="",s.classList.remove("hidden"),t&&s.appendChild(Tt("div","q",Pe(t)));let r=-1,o=e.map((u,d)=>{let f=Tt("button","",`<span class="n">${d+1}</span><span>${Pe(u)}</span>`);return f.style.animationDelay=.15+d*.12+"s",f.addEventListener("pointerdown",m=>{m.stopPropagation(),c(d)}),f.addEventListener("mouseenter",()=>{r=d,a()}),s.appendChild(f),f}),a=()=>o.forEach((u,d)=>u.classList.toggle("sel",d===r)),l=!1,c=u=>{l||(l=!0,M.audio?.sfx("soft",{deg:5}),s.classList.add("hidden"),s.innerHTML="",M.updaters.delete(h),n(u))},h=()=>{let u=M.input;for(let d=0;d<e.length&&d<4;d++)if(u.pressed("n"+(d+1)))return c(d);(u.pressed("down")||u.pressed("right"))&&(r=(r+1)%e.length,a()),(u.pressed("up")||u.pressed("left"))&&(r=(r-1+e.length)%e.length,a()),u.pressed("act")&&r>=0&&(u.consume("act"),c(r))};M.updaters.add(h)})}askText(t,e=""){return M.auto?Ht(.2).then(()=>e):new Promise(n=>{let s=this.choicesEl;s.innerHTML="",s.classList.remove("hidden"),s.appendChild(Tt("div","q",Pe(t)));let r=Tt("input");r.type="text",r.maxLength=14,r.value=e,r.placeholder=e,s.appendChild(r);let o=Tt("button","",`<span class="n">\u2713</span><span>That's the one</span>`);s.appendChild(o),setTimeout(()=>{r.focus(),r.select()},50);let a=()=>{let l=r.value.trim().replace(/[<>&"]/g,"");l||(l=e),l=l.charAt(0).toUpperCase()+l.slice(1),s.classList.add("hidden"),s.innerHTML="",r.blur(),n(l)};r.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),a()),l.stopPropagation()}),o.addEventListener("pointerdown",l=>{l.stopPropagation(),a()})})}setPrompt(t){if(this.promptTarget=t,!t){this.promptEl.classList.add("hidden");return}this.promptEl.classList.remove("hidden"),this.promptEl.className=t.kind==="work"?"work":t.kind==="story"?"story":"";let e=M.input.lastDevice==="touch"?"Tap":"Space";this.promptEl.querySelector(".key").textContent=e,this.promptEl.querySelector(".txt").textContent=Pe(t.label)}showHud(t=!0){this.albumBtn.classList.toggle("hidden",!t),this.menuBtn.classList.toggle("hidden",!t)}clock(t){this.clockEl.classList.toggle("hidden",!t)}setClock(t,e,n=!1){let s=jt(t,0,1);this.clockEl.querySelector(".fill").style.strokeDashoffset=264*(1-s),this.clockEl.querySelector(".sun").style.transform=`rotate(${s*360}deg)`,this.clockEl.querySelector(".num").textContent=e,this.clockEl.classList.toggle("urgent",n)}setAlbumCount(t,e=!1){this.albumBtn.querySelector(".count").textContent=t,e&&(this.albumBtn.classList.remove("bump"),this.albumBtn.offsetWidth,this.albumBtn.classList.add("bump"))}hint(t,e=6){this.hintEl.innerHTML=t,this.hintEl.classList.add("show"),clearTimeout(this._hintT),e&&(this._hintT=setTimeout(()=>this.hintEl.classList.remove("show"),e*1e3))}hideHint(){this.hintEl.classList.remove("show")}async chapterCard({num:t="",title:e="",ages:n="",quote:s=""},r=4.5){let o=this.cardEl;o.querySelector(".num").textContent=t,o.querySelector(".title").textContent=e,o.querySelector(".ages").textContent=n,o.querySelector(".quote").textContent=Pe(s),o.classList.remove("hidden","out","show"),o.offsetWidth,o.classList.add("show");let a=0;await en(l=>(a+=l,a>2.5&&this._advance()||a>r+2||M.auto&&a>.5)),o.classList.add("out"),await af(1200),o.classList.add("hidden"),o.classList.remove("show","out")}flyPolaroid(t,e){let n=Tt("div","polaroid"),s=Math.min(320,window.innerWidth*.35);n.style.width=s+"px",n.innerHTML=`<img src="${t||""}"><div class="cap">${Pe(e)}</div>`,n.style.left=window.innerWidth/2-s/2+"px",n.style.top=window.innerHeight/2-s*.45+"px",n.style.transform="rotate(-3deg) scale(0.9)",n.style.opacity="0",n.style.transition="opacity 0.5s ease, transform 0.6s ease",this.flyerEl.appendChild(n),requestAnimationFrame(()=>{n.style.opacity="1",n.style.transform="rotate(-2deg) scale(1)"}),setTimeout(()=>{let r=this.albumBtn.getBoundingClientRect(),o=r.left+r.width/2-window.innerWidth/2,a=r.top+r.height/2-window.innerHeight/2;n.style.transition="transform 1.1s cubic-bezier(.6,.0,.3,1), opacity 1.1s ease",n.style.transform=`translate(${o}px, ${a}px) rotate(12deg) scale(0.08)`,n.style.opacity="0.2"},2300),setTimeout(()=>{n.remove(),this.setAlbumCount(M.album.count(),!0)},3500)}update(){for(let t of this.bubbles)this._positionBubble(t);if(this.promptTarget){let t=this.promptTarget,e=t.position.clone();e.y=(t.def.height??(t.anchor?.height?t.anchor.height+.25:1))+.55;let n=M.renderer.project(e);this.promptEl.style.left=n.x+"px",this.promptEl.style.top=n.y-6+"px"}}};var kh={C:60,"C#":61,Db:61,D:62,Eb:63,E:64,F:65,"F#":66,G:67,Ab:68,A:69,Bb:70,B:71},Aa={major:[0,2,4,5,7,9,11],minor:[0,2,3,5,7,8,10],harmonic:[0,2,3,5,7,8,11],dorian:[0,2,3,5,7,9,10]},Uv={i:0,ii:1,iii:2,iv:3,v:4,vi:5,vii:6};function Uh(i,t=!1){let e=i,n=0;e[0]==="b"?(n=-1,e=e.slice(1)):e[0]==="#"&&(n=1,e=e.slice(1));let s=e.match(/^(VII|VI|IV|V|III|II|I|vii|vi|iv|v|iii|ii|i)(.*)$/);if(!s)return{root:0,iv:[0,4,7]};let r=s[1],o=s[2],a=r===r.toUpperCase(),l=Uv[r.toLowerCase()],c=Aa.major[l]+n+(t&&["iii","vi","vii"].includes(r.toLowerCase())?-1:0),h=a?[0,4,7]:[0,3,7];return(o.includes("\xB0")||o.includes("dim"))&&(h=[0,3,6]),o.includes("sus4")&&(h=[0,5,7]),o.includes("sus2")&&(h=[0,2,7]),o.includes("maj7")?h=[...h,11]:o.includes("7")&&(h=[...h,10]),o.includes("add9")&&(h=[...h,14]),o.includes("6")&&(h=[...h,9]),{root:c,iv:h}}function Br(i,t){let e=Math.floor((i-1)/7),n=((i-1)%7+7)%7;return t[n]+e*12}var mn=[{c:"I",n:[[3,2],[5,1]]},{c:"IV",n:[[6,2],[5,1]]},{c:"I",n:[[3,1],[2,1],[1,1]]},{c:"V",n:[[2,3]]},{c:"I",n:[[3,2],[5,1]]},{c:"vi",n:[[8,2],[7,1]]},{c:"IVmaj7",n:[[6,1],[5,1],[3,1]]},{c:"V",n:[[5,3]]},{c:"IVadd9",n:[[6,2],[5,1]]},{c:"ii",n:[[4,2],[3,1]]},{c:"V7",n:[[2,1],[3,1],[4,1]]},{c:"I",n:[[3,3]]},{c:"vi",n:[[3,2],[2,1]]},{c:"IV",n:[[1,2],[-1,1]]},{c:"V",n:[[0,1],[2,1],[0,1]]},{c:"I",n:[[1,3]]}],Nv=mn.map(i=>({...i,c:{I:"i",IV:"iv",V:"V",vi:"VI",IVmaj7:"iv7",IVadd9:"iv",ii:"ii\xB0",V7:"V7"}[i.c]??i.c})),Fv=[{c:"I",n:[[3,1],[3,.5],[5,.5],[6,1],[5,1]]},{c:"IV",n:[[6,1],[8,1],[6,1],[5,1]]},{c:"I",n:[[3,1],[2,.5],[1,.5],[2,1],[3,1]]},{c:"V",n:[[2,2],[5,1],[0,1]]},{c:"I",n:[[3,1],[3,.5],[5,.5],[8,1],[7,1]]},{c:"vi",n:[[6,1],[5,1],[3,1],[5,1]]},{c:"IV",n:[[4,1],[3,1],[2,1],[4,1]]},{c:"V",n:[[2,1],[3,1],[1,2]]}],lf={silence:{key:"F",bpm:60,beats:4,prog:[["I",4]],layers:[]},title:{key:"F",bpm:62,beats:3,prog:[["I",3],["vi",3],["IVmaj7",3],["Vsus4",3]],layers:[{t:"chord",inst:"pad",gain:.16,oct:-1,every:6},{t:"sparkle",inst:"musicbox",gain:.22,oct:1,density:.35},{t:"song",inst:"musicbox",gain:.3,oct:1,song:mn,min:.5}]},tiny:{key:"F",bpm:64,beats:3,song:mn,layers:[{t:"song",inst:"musicbox",gain:.34,oct:1},{t:"chord",inst:"pad",gain:.12,oct:-1,every:3,min:.25},{t:"bass",inst:"softbass",gain:.16,oct:-2,min:.5},{t:"sparkle",inst:"bell",gain:.08,oct:2,density:.15,min:.6}]},tinyHum:{key:"F",bpm:60,beats:3,song:mn,layers:[{t:"song",inst:"hum",gain:.22,oct:0},{t:"song",inst:"musicbox",gain:.16,oct:1,min:.3},{t:"chord",inst:"pad",gain:.12,oct:-1,every:3},{t:"bass",inst:"softbass",gain:.14,oct:-2}]},whistle:{key:"F",bpm:66,beats:3,song:mn,layers:[{t:"song",inst:"whistle",gain:.16,oct:1},{t:"arp",inst:"pluck",gain:.12,oct:0,pattern:[0,1,2],div:1},{t:"bass",inst:"softbass",gain:.14,oct:-2}]},wonder:{key:"C",bpm:104,beats:4,prog:[["I",4],["V",4],["vi",4],["IV",4],["I",4],["IV",4],["ii7",4],["V",4]],layers:[{t:"arp",inst:"marimba",gain:.2,oct:0,pattern:[0,2,1,2,0,2,1,3],div:2},{t:"bass",inst:"softbass",gain:.2,oct:-2,fifth:!0},{t:"gen",inst:"flute",gain:.13,oct:1,seed:11,min:.35},{t:"perc",gain:.12,pat:{shaker:"..x...x...x...x.",kick:"x.......x......."},min:.5},{t:"sparkle",inst:"musicbox",gain:.1,oct:2,density:.25,min:.7}]},summerNight:{key:"G",bpm:72,beats:3,prog:[["I",3],["iii",3],["IV",3],["I",3],["vi",3],["ii",3],["IV",3],["V",3]],layers:[{t:"arp",inst:"musicbox",gain:.16,oct:1,pattern:[0,1,2,3,2,1],div:2},{t:"chord",inst:"pad",gain:.13,oct:-1,every:3},{t:"gen",inst:"piano",gain:.16,oct:0,seed:23,min:.4},{t:"bass",inst:"softbass",gain:.12,oct:-2,min:.3}]},bedtime:{key:"G",bpm:60,beats:3,song:mn,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.12,oct:1,min:.5}]},running:{key:"D",bpm:112,beats:4,prog:[["vi",4],["IV",4],["I",4],["V",4]],layers:[{t:"strum",inst:"guitar",gain:.12,oct:0,rhythm:[0,3,6,8,10,12,14]},{t:"bass",inst:"softbass",gain:.2,oct:-2,fifth:!0},{t:"perc",gain:.13,pat:{kick:"x.......x.x.....",hat:"..x...x...x...x.",brush:"....x.......x..."},min:.3},{t:"gen",inst:"piano",gain:.14,oct:1,seed:37,min:.5},{t:"chord",inst:"strings",gain:.06,oct:0,every:8,min:.75}]},loss:{key:"D",bpm:56,beats:3,scale:"harmonic",song:Nv,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"strings",gain:.1,oct:-1,every:3},{t:"bass",inst:"softbass",gain:.12,oct:-2,min:.4}]},rainHope:{key:"D",bpm:60,beats:3,song:mn,layers:[{t:"song",inst:"piano",gain:.18,oct:0},{t:"chord",inst:"strings",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.12,oct:1,min:.5}]},together:{key:"A",bpm:138,beats:3,prog:[["I",3],["I",3],["iii",3],["iii",3],["IV",3],["iv",3],["I",3],["V7",3]],layers:[{t:"waltz",inst:"piano",gain:.16,oct:-1},{t:"gen",inst:"piano",gain:.15,oct:1,seed:51,long:!0,min:.2},{t:"chord",inst:"strings",gain:.07,oct:0,every:6,min:.55},{t:"sparkle",inst:"musicbox",gain:.08,oct:2,density:.18,min:.7}]},wedding:{key:"A",bpm:66,beats:3,song:mn,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"strings",gain:.1,oct:-1,every:3},{t:"bass",inst:"softbass",gain:.12,oct:-2},{t:"song",inst:"strings",gain:.08,oct:1,min:.6}]},little:{key:"F",bpm:66,beats:3,song:mn,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.13,oct:1,min:.35},{t:"chord",inst:"strings",gain:.07,oct:0,every:3,min:.6},{t:"bass",inst:"softbass",gain:.12,oct:-2,min:.5}]},littleHum:{key:"F",bpm:60,beats:3,song:mn,layers:[{t:"song",inst:"hum",gain:.2,oct:-1},{t:"song",inst:"musicbox",gain:.12,oct:1},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3}]},play:{key:"F",bpm:100,beats:4,song:Fv,layers:[{t:"song",inst:"marimba",gain:.18,oct:1},{t:"arp",inst:"pluck",gain:.12,oct:0,pattern:[0,1,2,1],div:2},{t:"bass",inst:"softbass",gain:.18,oct:-2,fifth:!0},{t:"perc",gain:.1,pat:{shaker:"..x...x...x...x.",kick:"x.......x......."},min:.4},{t:"gen",inst:"flute",gain:.1,oct:1,seed:71,min:.7}]},sofast:{key:"A",bpm:96,beats:4,scale:"minor",prog:[["i",4],["VI",4],["III",4],["VII",4]],layers:[{t:"arp",inst:"piano",gain:.15,oct:0,pattern:[0,1,2,1,3,1,2,1],div:4},{t:"tick",gain:.12},{t:"bass",inst:"softbass",gain:.18,oct:-2,min:.2},{t:"chord",inst:"strings",gain:.09,oct:0,every:4,min:.35},{t:"perc",gain:.12,pat:{kick:"x...x...x...x...",hat:"..x...x...x...x."},min:.55},{t:"gen",inst:"strings",gain:.07,oct:1,seed:91,long:!0,min:.75}]},quiet:{key:"A",bpm:50,beats:4,prog:[["I",8],["IVmaj7",8]],layers:[{t:"chord",inst:"pad",gain:.09,oct:-1,every:8},{t:"sparkle",inst:"piano",gain:.12,oct:0,density:.12}]},winter:{key:"D",bpm:54,beats:3,scale:"minor",prog:[["i",3],["iv",3],["VI",3],["V",3]],layers:[{t:"gen",inst:"piano",gain:.17,oct:0,seed:101,long:!0,sparse:!0},{t:"chord",inst:"pad",gain:.1,oct:-1,every:6},{t:"bass",inst:"softbass",gain:.09,oct:-2,min:.5}]},winterWarm:{key:"D",bpm:62,beats:3,song:mn,layers:[{t:"song",inst:"musicbox",gain:.2,oct:1},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"piano",gain:.14,oct:0,min:.35},{t:"chord",inst:"strings",gain:.07,oct:0,every:3,min:.6}]},pipHum:{key:"D",bpm:60,beats:3,song:mn,layers:[{t:"song",inst:"hum",gain:.18,oct:1},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.1,oct:1,min:.5}]},epilogue:{key:"F",bpm:64,beats:3,song:mn,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.13,oct:1,min:.25},{t:"chord",inst:"strings",gain:.09,oct:0,every:3,min:.45},{t:"bass",inst:"softbass",gain:.13,oct:-2,min:.55},{t:"song",inst:"hum",gain:.1,oct:-1,min:.7},{t:"song",inst:"strings",gain:.08,oct:1,min:.85}]}};var Ov=i=>440*Math.pow(2,(i-69)/12),Ra=class{constructor(){this.ready=!1,this.vol={master:.85,music:.8,sfx:.85,amb:.7},this.voices=[],this.intensity=.4,this.intensityTarget=.4,this.amb={},this.beatLog=[],this.tempoMul=1,this.listeners=new Set;try{let t=JSON.parse(localStorage.getItem("lm.vol")||"null");t&&Object.assign(this.vol,t)}catch{}}init(){if(this.ready){this.ctx.resume?.();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.vol.master;let n=e.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=3,n.attack.value=.01,n.release.value=.3,this.master.connect(n),n.connect(e.destination),this.musicBus=e.createGain(),this.musicBus.gain.value=this.vol.music,this.musicFilter=e.createBiquadFilter(),this.musicFilter.type="lowpass",this.musicFilter.frequency.value=18e3,this.musicBus.connect(this.musicFilter),this.musicFilter.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.vol.sfx,this.sfxBus.connect(this.master),this.ambBus=e.createGain(),this.ambBus.gain.value=this.vol.amb,this.ambBus.connect(this.master),this.reverb=e.createConvolver(),this.reverb.buffer=this._impulse(3.2,2.6),this.revIn=e.createGain(),this.revIn.gain.value=1;let s=e.createGain();s.gain.value=.55,this.revIn.connect(this.reverb),this.reverb.connect(s),s.connect(this.musicFilter),this.sfxRev=e.createGain(),this.sfxRev.gain.value=.6,this.sfxRev.connect(this.revIn),this.noise=this._noiseBuffer(2,"white"),this.pink=this._noiseBuffer(4,"pink"),this.brown=this._noiseBuffer(4,"brown"),this.ready=!0,this.nextBeatClock=e.currentTime+.1,this.timer=setInterval(()=>this._schedule(),25),this._ambInit()}setVolume(t,e){this.vol[t]=e;try{localStorage.setItem("lm.vol",JSON.stringify(this.vol))}catch{}if(!this.ready)return;({master:this.master,music:this.musicBus,sfx:this.sfxBus,amb:this.ambBus})[t].gain.setTargetAtTime(e,this.ctx.currentTime,.1)}get now(){return this.ready?this.ctx.currentTime:performance.now()/1e3}_impulse(t,e){let n=this.ctx,s=n.sampleRate,r=Math.floor(s*t),o=n.createBuffer(2,r,s);for(let a=0;a<2;a++){let l=o.getChannelData(a);for(let c=0;c<r;c++)l[c]=(Math.random()*2-1)*Math.pow(1-c/r,e)*(c<s*.01?c/(s*.01):1)}return o}_noiseBuffer(t,e){let n=this.ctx,s=Math.floor(n.sampleRate*t),r=n.createBuffer(1,s,n.sampleRate),o=r.getChannelData(0),a=0,l=0,c=0,h=0;for(let u=0;u<s;u++){let d=Math.random()*2-1;e==="white"?o[u]=d:e==="brown"?(a=(a+.02*d)/1.02,o[u]=a*3.5):(l=.99765*l+d*.099046,c=.963*c+d*.2965164,h=.57*h+d*1.0526913,o[u]=(l+c+h+d*.1848)*.18)}return r}note(t,e,n,s,r=.8,o=null){if(!this.ready)return;let a=this.ctx,l=o??this.musicBus,c=Ov(e),h=(f,m,x,g,p,_,y)=>{f.gain.setValueAtTime(1e-4,n),f.gain.linearRampToValueAtTime(x,n+m),f.gain.setTargetAtTime(p,n+m,g),f.gain.setTargetAtTime(1e-4,y,_)},u=(f,m,x=0)=>{let g=a.createOscillator();return g.type=f,g.frequency.value=Math.min(m,19e3),g.detune.value=x,g},d=(f,m)=>f.forEach(x=>{x.start(n),x.stop(m)});switch(t){case"musicbox":{let f=a.createGain();f.connect(l);let m=n+Math.max(1.6,s+1.2),x=u("sine",c),g=u("sine",c*4.01),p=u("sine",c*2),_=a.createGain(),y=a.createGain(),v=a.createGain();_.gain.setValueAtTime(1e-4,n),_.gain.exponentialRampToValueAtTime(.45*r,n+.004),_.gain.exponentialRampToValueAtTime(1e-4,m),y.gain.setValueAtTime(1e-4,n),y.gain.exponentialRampToValueAtTime(.09*r,n+.002),y.gain.exponentialRampToValueAtTime(1e-4,n+.18),v.gain.setValueAtTime(1e-4,n),v.gain.exponentialRampToValueAtTime(.1*r,n+.003),v.gain.exponentialRampToValueAtTime(1e-4,n+.7),x.connect(_),g.connect(y),p.connect(v),_.connect(f),y.connect(f),v.connect(f),d([x,g,p],m+.05);break}case"bell":{let f=n+3.5;[[1,.35,3.2],[2.76,.16,1.8],[5.4,.08,.9],[8.93,.04,.45]].forEach(([m,x,g])=>{let p=u("sine",c*m),_=a.createGain();_.gain.setValueAtTime(1e-4,n),_.gain.exponentialRampToValueAtTime(x*r,n+.003),_.gain.exponentialRampToValueAtTime(1e-4,n+g),p.connect(_),_.connect(l),d([p],f)});break}case"piano":{let f=n+s+1.6,m=a.createBiquadFilter();m.type="lowpass",m.frequency.setValueAtTime(900+r*3800,n),m.frequency.setTargetAtTime(500+c*1.2,n+.01,.5);let x=a.createGain();x.gain.setValueAtTime(1e-4,n),x.gain.linearRampToValueAtTime(.32*r,n+.005),x.gain.setTargetAtTime(.12*r,n+.005,.35),x.gain.setTargetAtTime(1e-4,n+s,.35);let g=u("triangle",c),p=u("sine",c*2,3),_=u("triangle",c,-6),y=a.createGain();y.gain.value=.25,g.connect(m),_.connect(m),p.connect(y),y.connect(m),m.connect(x),x.connect(l),d([g,p,_],f);break}case"pad":{let f=n+s+2.5,m=a.createBiquadFilter();m.type="lowpass",m.frequency.value=650+r*500,m.Q.value=.5;let x=a.createGain();h(x,Math.min(1.2,s*.4),.09*r,.8,.07*r,.9,n+s);let g=[u("sawtooth",c,-9),u("sawtooth",c,9),u("triangle",c/2)];g.forEach(p=>p.connect(m)),m.connect(x),x.connect(l),d(g,f);break}case"strings":{let f=n+s+1.8,m=a.createBiquadFilter();m.type="lowpass",m.frequency.value=1400+r*800,m.Q.value=.4;let x=a.createGain();h(x,Math.min(.45,s*.4),.075*r,.5,.06*r,.5,n+s);let g=u("sine",5.2),p=a.createGain();p.gain.value=7,g.connect(p);let _=[u("sawtooth",c,-7),u("sawtooth",c,6),u("sawtooth",c*2,2)];_.forEach(y=>{p.connect(y.detune),y.connect(m)}),m.connect(x),x.connect(l),d([..._,g],f);break}case"marimba":{let f=n+1;[[1,.42,.55],[4,.1,.08],[9.9,.03,.03]].forEach(([m,x,g])=>{let p=u("sine",c*m),_=a.createGain();_.gain.setValueAtTime(1e-4,n),_.gain.exponentialRampToValueAtTime(x*r,n+.003),_.gain.exponentialRampToValueAtTime(1e-4,n+g),p.connect(_),_.connect(l),d([p],f)});break}case"pluck":case"guitar":{let f=n+1.6,m=a.createBiquadFilter();m.type="lowpass",m.Q.value=t==="guitar"?2:1,m.frequency.setValueAtTime(t==="guitar"?3200:2400,n),m.frequency.exponentialRampToValueAtTime(400,n+.35);let x=a.createGain();x.gain.setValueAtTime(1e-4,n),x.gain.exponentialRampToValueAtTime(.26*r,n+.004),x.gain.exponentialRampToValueAtTime(1e-4,n+(t==="guitar"?1.4:.7));let g=[u("sawtooth",c),u("triangle",c*2,4)];g.forEach(p=>p.connect(m)),m.connect(x),x.connect(l),d(g,f);break}case"softbass":{let f=n+s+.6,m=a.createBiquadFilter();m.type="lowpass",m.frequency.value=380;let x=a.createGain();h(x,.02,.45*r,.3,.25*r,.15,n+s*.9);let g=[u("sine",c),u("triangle",c,4)];g.forEach(p=>p.connect(m)),m.connect(x),x.connect(l),d(g,f);break}case"flute":{let f=n+s+.6,m=a.createGain();h(m,.06,.16*r,.2,.12*r,.12,n+s*.95);let x=u("sine",c),g=u("triangle",c*2),p=a.createGain();p.gain.value=.08;let _=u("sine",5),y=a.createGain();y.gain.setValueAtTime(0,n),y.gain.linearRampToValueAtTime(9,n+.4),_.connect(y),y.connect(x.detune),y.connect(g.detune),x.connect(m),g.connect(p),p.connect(m),m.connect(l),d([x,g,_],f);break}case"whistle":{let f=n+s+.5,m=a.createGain();h(m,.05,.14*r,.2,.11*r,.1,n+s*.9);let x=u("sine",c*2);x.frequency.setValueAtTime(c*2*.97,n),x.frequency.exponentialRampToValueAtTime(c*2,n+.06);let g=u("sine",6),p=a.createGain();p.gain.value=14,g.connect(p),p.connect(x.detune);let _=a.createBufferSource();_.buffer=this.noise;let y=a.createBiquadFilter();y.type="bandpass",y.frequency.value=c*2,y.Q.value=12;let v=a.createGain();v.gain.value=.25*r,_.connect(y),y.connect(v),v.connect(m),x.connect(m),m.connect(l),d([x,g,_],f);break}case"hum":{let f=n+s+.9,m=[u("sawtooth",c,-4),u("sawtooth",c,5)],x=u("sine",4.8),g=a.createGain();g.gain.setValueAtTime(0,n),g.gain.linearRampToValueAtTime(12,n+.5),x.connect(g);let p=a.createGain();p.gain.value=.5,m.forEach(A=>{g.connect(A.detune),A.connect(p)});let _=a.createBiquadFilter();_.type="bandpass",_.frequency.value=320,_.Q.value=3;let y=a.createBiquadFilter();y.type="bandpass",y.frequency.value=800,y.Q.value=5;let v=a.createBiquadFilter();v.type="lowpass",v.frequency.value=1400;let D=a.createGain();D.gain.value=.35,p.connect(_),p.connect(y),y.connect(D);let E=a.createGain();h(E,.18,.55*r,.4,.45*r,.25,n+s*.95),_.connect(v),D.connect(v),v.connect(E),E.connect(l),d([...m,x],f);break}default:break}}drum(t,e,n=1,s=null){if(!this.ready)return;let r=this.ctx,o=s??this.musicBus,a=(l,c,h,u,d,f)=>{let m=r.createBufferSource();m.buffer=this.noise;let x=r.createBiquadFilter();x.type=l,x.frequency.value=c,x.Q.value=h;let g=r.createGain();g.gain.setValueAtTime(1e-4,e),g.gain.exponentialRampToValueAtTime(f*n,e+u),g.gain.exponentialRampToValueAtTime(1e-4,e+u+d),m.connect(x),x.connect(g),g.connect(o),m.start(e,Math.random()*1.5),m.stop(e+u+d+.05)};switch(t){case"kick":{let l=r.createOscillator();l.frequency.setValueAtTime(130,e),l.frequency.exponentialRampToValueAtTime(42,e+.14);let c=r.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(.7*n,e+.004),c.gain.exponentialRampToValueAtTime(1e-4,e+.3),l.connect(c),c.connect(o),l.start(e),l.stop(e+.35);break}case"hat":a("highpass",7500,.7,.002,.045,.18);break;case"shaker":a("bandpass",5200,1.2,.012,.07,.22);break;case"brush":a("bandpass",2400,.6,.006,.16,.16);break;case"clap":for(let l=0;l<3;l++)a("bandpass",1500,.8,.002,.05,.25*(1-l*.2));break;case"tick":{let l=r.createOscillator();l.type="square",l.frequency.value=2600;let c=r.createBiquadFilter();c.type="bandpass",c.frequency.value=3e3,c.Q.value=4;let h=r.createGain();h.gain.setValueAtTime(1e-4,e),h.gain.exponentialRampToValueAtTime(.12*n,e+.001),h.gain.exponentialRampToValueAtTime(1e-4,e+.025),l.connect(c),c.connect(h),h.connect(o),l.start(e),l.stop(e+.04);break}case"tock":{let l=r.createOscillator();l.type="square",l.frequency.value=1700;let c=r.createBiquadFilter();c.type="bandpass",c.frequency.value=1900,c.Q.value=4;let h=r.createGain();h.gain.setValueAtTime(1e-4,e),h.gain.exponentialRampToValueAtTime(.12*n,e+.001),h.gain.exponentialRampToValueAtTime(1e-4,e+.03),l.connect(c),c.connect(h),h.connect(o),l.start(e),l.stop(e+.05);break}default:break}}music(t,{fade:e=3,intensity:n=null,immediate:s=!1}={}){if(n!==null&&this.setIntensity(n,.01),!this.ready){this.pendingProfile=t;return}let r=this.voices[this.voices.length-1];if(r&&r.name===t&&!r.stopping)return;let o=lf[t];if(!o){console.warn("no profile",t);return}let a=this.ctx.currentTime,l=a+.08;r&&!r.stopping&&!s&&(l=Math.min(r.nextBarTime(),a+2.5));for(let h of this.voices)h.stopping||h.stop(l,e);let c=new Nh(this,t,o,l);this.voices.push(c)}stopMusic(t=3){if(!this.ready)return;let e=this.ctx.currentTime;for(let n of this.voices)n.stopping||n.stop(e,t)}setIntensity(t,e=2){this.intensityTarget=jt(t,0,1),this.intensityRate=1/Math.max(.01,e)}setTempo(t,e=2){this.tempoTarget=t,this.tempoRate=1/Math.max(.01,e)}muffle(t=1,e=1.5){if(!this.ready)return;let n=18e3*Math.pow(400/18e3,jt(t,0,1));this.musicFilter.frequency.setTargetAtTime(n,this.ctx.currentTime,e/3)}duck(t=.5,e=.5){this.ready&&this.musicBus.gain.setTargetAtTime(this.vol.music*t,this.ctx.currentTime,e/3)}currentVoice(){return this.voices.filter(t=>!t.stopping).slice(-1)[0]??null}currentKey(){let t=this.currentVoice();return t?{tonic:t.tonic,scale:t.scale}:{tonic:kh.F,scale:Aa.major}}beatInfo(){let t=this.now,e=this.currentVoice();if(!this.ready||!e){let a=.8571428571428571,l=t/a;return{dur:a,phase:l%1,beat:Math.floor(l),barBeat:Math.floor(l)%3,beats:3,nextTime:(Math.floor(l)+1)*a,lastTime:Math.floor(l)*a,now:t}}let n=e.beatLog,s=null,r=null;for(let a=n.length-1;a>=0;a--)if(n[a].time<=t){s=n[a],r=n[a+1]??null;break}if(!s){let a=e.beatDur();return{dur:a,phase:0,beat:0,barBeat:0,beats:e.p.beats,nextTime:n[0]?.time??t+a,lastTime:t-a,now:t}}let o=r?r.time-s.time:e.beatDur();return{dur:o,phase:jt((t-s.time)/o,0,1),beat:s.n,barBeat:s.beat,beats:e.p.beats,nextTime:r?r.time:s.time+o,lastTime:s.time,now:t}}onBeat(t){return this.listeners.add(t),()=>this.listeners.delete(t)}_schedule(){if(!this.ready)return;let t=this.ctx,e=t.currentTime,n=.15,s=.025;if(this.intensity!==this.intensityTarget){let o=this.intensityTarget-this.intensity,a=(this.intensityRate??.5)*s;this.intensity=Math.abs(o)<a?this.intensityTarget:this.intensity+Math.sign(o)*a}if(this.tempoTarget!==void 0&&this.tempoMul!==this.tempoTarget){let o=this.tempoTarget-this.tempoMul,a=(this.tempoRate??.5)*s;this.tempoMul=Math.abs(o)<a?this.tempoTarget:this.tempoMul+Math.sign(o)*a}for(let o of this.voices)o.schedule(e,n);this.voices=this.voices.filter(o=>!(o.stopping&&e>o.stopEnd+.5));let r=this.currentVoice();if(r){for(;r.beatLog.length&&r.beatLog[0].time<e-8;)r.beatLog.shift();for(let o of r.beatLog)!o.fired&&o.time<=e&&(o.fired=!0,this.listeners.forEach(a=>a(o)))}this._ambTick(e)}_ambInit(){let t=this.ctx,e=(n,s,r,o)=>{let a=t.createBufferSource();a.buffer=n,a.loop=!0;let l=t.createBiquadFilter();l.type=s,l.frequency.value=r,l.Q.value=o;let c=t.createGain();return c.gain.value=0,a.connect(l),l.connect(c),c.connect(this.ambBus),a.start(),{s:a,f:l,g:c}};this.ambNodes={wind:e(this.brown,"bandpass",500,.6),rain:e(this.pink,"highpass",900,.3),waves:e(this.brown,"lowpass",700,.5),room:e(this.brown,"lowpass",220,.5),fire:e(this.brown,"lowpass",400,.7),city:e(this.brown,"lowpass",300,.4)},this.ambLevels={wind:0,rain:0,waves:0,room:0,fire:0,city:0,birds:0,crickets:0,heartbeat:0,crowd:0,clock:0},this.nextBird=0,this.nextCrackle=0,this.nextHeart=0,this.nextCricket=0,this.nextCrowd=0,this.nextClock=0}ambience(t={},e=3){if(this.ambTarget={wind:0,rain:0,waves:0,room:0,fire:0,city:0,birds:0,crickets:0,heartbeat:0,crowd:0,clock:0,...t},!this.ready)return;let n=this.ctx.currentTime;for(let s in this.ambNodes){let r={wind:.35,rain:.22,waves:.4,room:.25,fire:.3,city:.25}[s];this.ambNodes[s].g.gain.setTargetAtTime((this.ambTarget[s]||0)*r,n,e/3)}Object.assign(this.ambLevels,this.ambTarget)}_ambTick(t){if(!this.ambLevels)return;let e=this.ambLevels;this.ambTarget&&!this._ambApplied&&(this._ambApplied=!0,this.ambience(this.ambTarget,2)),e.wind>0&&this.ambNodes.wind.f.frequency.setTargetAtTime(400+Math.sin(t*.3)*200+Math.sin(t*.71)*120,t,.5),e.waves>0&&this.ambNodes.waves.g.gain.setTargetAtTime(e.waves*.4*(.55+.45*Math.sin(t*.55)),t,.4),e.birds>0&&t>this.nextBird&&(this._bird(t+.05,e.birds),this.nextBird=t+.6+Math.random()*3.5/e.birds),e.fire>0&&t>this.nextCrackle&&(this._crackle(t+.02,e.fire),this.nextCrackle=t+.05+Math.random()*.4),e.crickets>0&&t>this.nextCricket&&(this._cricket(t+.05,e.crickets),this.nextCricket=t+.35+Math.random()*.9),e.heartbeat>0&&t>this.nextHeart&&(this._heart(t+.05,e.heartbeat),this.nextHeart=t+.95),e.crowd>0&&t>this.nextCrowd&&(this._murmur(t+.05,e.crowd),this.nextCrowd=t+.15+Math.random()*.4),e.clock>0&&t>this.nextClock&&(this.drum(this._tk=this._tk?"tock":"tick",t+.05,e.clock,this.ambBus),this.nextClock=t+1)}_bird(t,e){let n=this.ctx,s=2+Math.floor(Math.random()*4),r=2200+Math.random()*1800,o=n.createStereoPanner?n.createStereoPanner():null;o&&(o.pan.value=Math.random()*1.6-.8,o.connect(this.ambBus));for(let a=0;a<s;a++){let l=n.createOscillator();l.type="sine";let c=n.createGain(),h=t+a*(.09+Math.random()*.06);l.frequency.setValueAtTime(r*(.9+Math.random()*.3),h),l.frequency.exponentialRampToValueAtTime(r*(1.1+Math.random()*.5),h+.06),c.gain.setValueAtTime(1e-4,h),c.gain.exponentialRampToValueAtTime(.03*e,h+.01),c.gain.exponentialRampToValueAtTime(1e-4,h+.08),l.connect(c),c.connect(o??this.ambBus),l.start(h),l.stop(h+.1)}}_crackle(t,e){let n=this.ctx,s=n.createBufferSource();s.buffer=this.noise;let r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=1500+Math.random()*2500,r.Q.value=2;let o=n.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.12*e*Math.random(),t+.002),o.gain.exponentialRampToValueAtTime(1e-4,t+.02),s.connect(r),r.connect(o),o.connect(this.ambBus),s.start(t,Math.random()),s.stop(t+.03)}_cricket(t,e){let n=this.ctx,s=4300+Math.random()*600;for(let r=0;r<3;r++){let o=n.createOscillator();o.frequency.value=s;let a=n.createGain(),l=t+r*.045;a.gain.setValueAtTime(1e-4,l),a.gain.exponentialRampToValueAtTime(.012*e,l+.006),a.gain.exponentialRampToValueAtTime(1e-4,l+.03),o.connect(a),a.connect(this.ambBus),o.start(l),o.stop(l+.04)}}_heart(t,e){let n=this.ctx;for(let[s,r]of[[0,1],[.24,.7]]){let o=n.createOscillator();o.frequency.setValueAtTime(70,t+s),o.frequency.exponentialRampToValueAtTime(38,t+s+.12);let a=n.createGain();a.gain.setValueAtTime(1e-4,t+s),a.gain.exponentialRampToValueAtTime(.35*e*r,t+s+.01),a.gain.exponentialRampToValueAtTime(1e-4,t+s+.2),o.connect(a),a.connect(this.ambBus),o.start(t+s),o.stop(t+s+.25)}}_murmur(t,e){let n=this.ctx,s=n.createOscillator();s.type="sawtooth";let r=140+Math.random()*120;s.frequency.setValueAtTime(r,t),s.frequency.linearRampToValueAtTime(r*(.85+Math.random()*.3),t+.25);let o=n.createBiquadFilter();o.type="bandpass",o.frequency.value=500+Math.random()*600,o.Q.value=3;let a=n.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.01*e,t+.05),a.gain.exponentialRampToValueAtTime(1e-4,t+.3),s.connect(o),o.connect(a),a.connect(this.ambBus),s.start(t),s.stop(t+.35)}sfx(t,e={}){if(!this.ready)return;let n=this.ctx,s=n.currentTime+(e.delay??0),r=this.sfxBus,o=e.vol??1,a=(u,d,f,m,x,g,p,_=r)=>{let y=n.createBufferSource();y.buffer=this.noise;let v=n.createBiquadFilter();v.type=u,v.Q.value=m,v.frequency.setValueAtTime(d,s),f&&v.frequency.exponentialRampToValueAtTime(f,s+x+g);let D=n.createGain();return D.gain.setValueAtTime(1e-4,s),D.gain.exponentialRampToValueAtTime(p*o,s+x),D.gain.exponentialRampToValueAtTime(1e-4,s+x+g),y.connect(v),v.connect(D),D.connect(_),y.start(s,Math.random()),y.stop(s+x+g+.05),D},l=(u,d,f,m,x,g,p=s,_=r)=>{let y=n.createOscillator();y.type=u,y.frequency.setValueAtTime(d,p),f&&y.frequency.exponentialRampToValueAtTime(f,p+m+x);let v=n.createGain();v.gain.setValueAtTime(1e-4,p),v.gain.exponentialRampToValueAtTime(g*o,p+m),v.gain.exponentialRampToValueAtTime(1e-4,p+m+x),y.connect(v),v.connect(_),y.start(p),y.stop(p+m+x+.05)},c=this.currentKey(),h=(u,d=0)=>c.tonic+Br(u,c.scale)+d*12;switch(t){case"step":{let u=e.surface??"grass";u==="wood"?a("bandpass",900,null,1.5,.003,.05,.05):u==="snow"?a("highpass",2500,null,.5,.01,.09,.05):u==="stone"?a("bandpass",2200,null,1,.002,.03,.04):a("lowpass",1400,null,.7,.008,.07,.035);break}case"chime":[1,3,5].forEach((u,d)=>this.note("bell",h(u,2),s+d*.09,.5,.5*o,this.sfxBus));break;case"keep":[1,3,5,8,10].forEach((u,d)=>this.note("musicbox",h(u,1),s+d*.11,.6,.7*o,this.sfxRev)),this.note("bell",h(1,1),s,1,.4*o,this.sfxRev);break;case"lost":[5,3,2].forEach((u,d)=>this.note("musicbox",h(u,1),s+d*.25,.8,.35*o,this.sfxRev));break;case"shutter":a("highpass",3e3,null,.5,.001,.02,.3),a("bandpass",1200,null,1,.001,.04,.2);break;case"pop":l("sine",500,1100,.005,.08,.15);break;case"tap":l("sine",900+Math.random()*200,null,.003,.06,.08);break;case"good":this.note("musicbox",h(e.deg??5,1),s,.4,.6*o,this.sfxBus);break;case"soft":this.note("bell",h(e.deg??1,1),s,.6,.35*o,this.sfxRev);break;case"miss":l("sine",300,240,.01,.12,.05);break;case"giggle":{let u=4+Math.floor(Math.random()*3),d=(e.pitch??1)*(520+Math.random()*120);for(let f=0;f<u;f++){let m=s+f*.11;l("triangle",d*(1.3-f*.05),d*(1.1-f*.05),.01,.07,.08,m),l("sine",d*2.6,d*2.2,.01,.05,.03,m)}break}case"coo":case"babble":{let u=t==="coo"?2:3+Math.floor(Math.random()*3);for(let d=0;d<u;d++){let f=s+d*.2,m=(e.pitch??1)*(380+Math.random()*140),x=n.createOscillator();x.type="sawtooth",x.frequency.setValueAtTime(m,f),x.frequency.linearRampToValueAtTime(m*(t==="coo"?1.25:.9),f+.16);let g=n.createBiquadFilter();g.type="bandpass",g.frequency.value=t==="coo"?450:800,g.Q.value=4;let p=n.createGain();p.gain.setValueAtTime(1e-4,f),p.gain.exponentialRampToValueAtTime(.12*o,f+.03),p.gain.exponentialRampToValueAtTime(1e-4,f+.18),x.connect(g),g.connect(p),p.connect(r),x.start(f),x.stop(f+.2)}break}case"cry":{for(let u=0;u<3;u++){let d=s+u*.55,f=n.createOscillator();f.type="sawtooth",f.frequency.setValueAtTime(420,d),f.frequency.linearRampToValueAtTime(520,d+.15),f.frequency.linearRampToValueAtTime(380,d+.45);let m=n.createBiquadFilter();m.type="bandpass",m.frequency.value=1100,m.Q.value=3;let x=n.createGain();x.gain.setValueAtTime(1e-4,d),x.gain.exponentialRampToValueAtTime(.09*o,d+.05),x.gain.exponentialRampToValueAtTime(1e-4,d+.48),f.connect(m),m.connect(x),x.connect(r),f.start(d),f.stop(d+.5)}break}case"woof":{for(let u=0;u<(e.n??1);u++){let d=s+u*.25;l("sawtooth",320,170,.01,.13,.12,d)}a("bandpass",700,400,2,.01,.12,.1);break}case"splash":a("lowpass",3500,400,.6,.02,.5,.35);break;case"whoosh":a("bandpass",300,1800,1.2,.25,.5,.2);break;case"blow":a("lowpass",1500,600,.5,.15,.6,.15);break;case"rustle":a("bandpass",3e3,1500,.8,.05,.25,.08);break;case"thud":l("sine",120,50,.005,.2,.3),a("lowpass",500,null,1,.003,.1,.15);break;case"door":l("sine",90,60,.01,.25,.25),a("lowpass",800,null,1,.01,.15,.08);break;case"ping":l("sine",1320,null,.005,.12,.12),l("sine",1760,null,.005,.2,.1,s+.1);break;case"phone":for(let u=0;u<2;u++){let d=s+u*.5;l("sine",440,null,.01,.38,.06,d),l("sine",480,null,.01,.38,.06,d)}break;case"bikebell":for(let u=0;u<2;u++){let d=s+u*.16;l("sine",3100,null,.002,.4,.08,d),l("sine",4250,null,.002,.25,.05,d)}break;case"heart":this._heart(s,o);break;case"kiss":l("sine",1600,800,.003,.05,.05);break;case"creak":{let u=n.createOscillator();u.type="sawtooth",u.frequency.setValueAtTime(110,s),u.frequency.linearRampToValueAtTime(140,s+.35);let d=n.createBiquadFilter();d.type="bandpass",d.frequency.value=900,d.Q.value=8;let f=n.createGain();f.gain.setValueAtTime(1e-4,s),f.gain.exponentialRampToValueAtTime(.03*o,s+.1),f.gain.exponentialRampToValueAtTime(1e-4,s+.4),u.connect(d),d.connect(f),f.connect(r),u.start(s),u.stop(s+.45);break}case"applause":for(let u=0;u<40;u++){let d=n.createGain(),f=s+Math.random()*2.5,m=n.createBufferSource();m.buffer=this.noise;let x=n.createBiquadFilter();x.type="bandpass",x.frequency.value=1200+Math.random()*1500,x.Q.value=1,d.gain.setValueAtTime(1e-4,f),d.gain.exponentialRampToValueAtTime(.06*o,f+.003),d.gain.exponentialRampToValueAtTime(1e-4,f+.05),m.connect(x),x.connect(d),d.connect(r),m.start(f,Math.random()),m.stop(f+.06)}break;case"engine":{let u=n.createOscillator();u.type="sawtooth",u.frequency.setValueAtTime(45,s),u.frequency.linearRampToValueAtTime(70,s+1.5),u.frequency.linearRampToValueAtTime(55,s+3.5);let d=n.createBiquadFilter();d.type="lowpass",d.frequency.value=300;let f=n.createGain();f.gain.setValueAtTime(1e-4,s),f.gain.exponentialRampToValueAtTime(.12*o,s+.3),f.gain.setTargetAtTime(1e-4,s+2.5,.8),u.connect(d),d.connect(f),f.connect(r),u.start(s),u.stop(s+5);break}case"yay":{let u=n.createOscillator();u.type="sawtooth",u.frequency.setValueAtTime(380*(e.pitch??1),s),u.frequency.linearRampToValueAtTime(620*(e.pitch??1),s+.25);let d=n.createBiquadFilter();d.type="bandpass",d.frequency.value=900,d.Q.value=3;let f=n.createGain();f.gain.setValueAtTime(1e-4,s),f.gain.exponentialRampToValueAtTime(.1*o,s+.04),f.gain.exponentialRampToValueAtTime(1e-4,s+.45),u.connect(d),d.connect(f),f.connect(r),u.start(s),u.stop(s+.5);break}case"sparkle":for(let u=0;u<6;u++)this.note("musicbox",h([1,3,5,8,10,12][Math.floor(Math.random()*6)],2),s+u*.07+Math.random()*.05,.3,.3*o,this.sfxRev);break;case"tick":this.drum("tick",s,o,r);break;case"tock":this.drum("tock",s,o,r);break;case"bloop":l("sine",300,600,.01,.12,.08);break;case"fwip":a("bandpass",2e3,4e3,2,.01,.08,.1);break;case"lantern":a("bandpass",400,900,1,.3,1.2,.08),this.note("bell",h(5,1),s+.2,1,.25*o,this.sfxRev);break;case"note":this.note(e.inst??"musicbox",h(e.deg??1,e.oct??1),s,e.dur??.5,(e.vel??.7)*o,this.sfxRev);break;case"thunder":a("lowpass",300,60,.6,.1,2.5,.4);break;default:break}}},Nh=class{constructor(t,e,n,s){this.e=t,this.name=e,this.p=n;let r=t.ctx;this.out=r.createGain(),this.out.gain.setValueAtTime(1e-4,r.currentTime),this.out.gain.setTargetAtTime(1,s,.4),this.out.connect(t.musicBus),this.send=r.createGain(),this.send.gain.value=.55,this.out.connect(this.send),this.send.connect(t.revIn),this.tonic=kh[n.key]??65,this.minor=n.scale==="minor"||n.scale==="harmonic",this.scale=Aa[n.scale??"major"],this.prog=n.song?n.song.map(o=>[o.c,n.beats]):n.prog,this.stepTime=s,this.step=0,this.bar=0,this.beatLog=[],this.beatN=0,this.layers=n.layers.map((o,a)=>{let l=r.createGain();return l.gain.value=this._layerLevel(o),l.connect(this.out),{...o,g:l,rng:_e((o.seed??3)+a*17),cur:[]}}),this.stopping=!1}beatDur(){return 60/(this.p.bpm*this.e.tempoMul)}stepDur(){return this.beatDur()/4}nextBarTime(){let t=this.p.beats*4,e=this.step%t;return this.stepTime+(t-e)%t*this.stepDur()}stop(t,e){this.stopping=!0,this.stopEnd=t+e;let n=this.out.gain;n.cancelScheduledValues(t),n.setTargetAtTime(1e-4,t,e/3)}_layerLevel(t){let e=this.e.intensity,n=t.min??0,s=t.max??1.01,r=jt((e-n)/.15+0,0,1)*jt((s-e)/.15,0,1);return(t.gain??.2)*r}chordAt(t){let e=0;for(let[,r]of this.prog)e+=r;let n=t*this.p.beats%e,s=0;for(let[r,o]of this.prog){if(n<s+o)return Uh(r,this.minor);s+=o}return Uh(this.prog[0][0],this.minor)}chordTones(t,e,n=4){let s=this.tonic+t.root+e*12,r=[];for(let o=0;r.length<n;o++)r.push(s+t.iv[o%t.iv.length]+Math.floor(o/t.iv.length)*12);return r}schedule(t,e){if(!(this.stopping&&t>this.stopEnd)){for(let n of this.layers)n.g.gain.setTargetAtTime(this._layerLevel(n),t,.4);for(;this.stepTime<t+e;)this._playStep(this.stepTime),this.stepTime+=this.stepDur(),this.step++}}_playStep(t){let e=this.p,n=e.beats*4,s=this.step%n,r=Math.floor(this.step/n);s%4===0&&this.beatLog.push({time:t,beat:s/4,bar:r,n:this.beatN++});let o=this.chordAt(r),a=this.beatDur();for(let l of this.layers){if(l.g.gain.value<5e-4&&this._layerLevel(l)<5e-4)continue;let c=l.oct??0;switch(l.t){case"song":{let h=e.song??l.song;if(!h)break;let u=h[r%h.length],d=0;for(let[f,m]of u.n){if(Math.round(d*4)===s){let x=this.tonic+Br(f,this.scale)+12*c;this.e.note(l.inst,x,t,m*a*.95,.75+.15*Math.random(),l.g)}d+=m}break}case"chord":{let h=(l.every??e.beats)*4;this.step%h===0&&this.chordTones(o,c,o.iv.length).forEach(u=>this.e.note(l.inst,u,t,h/4*a,.7,l.g));break}case"arp":{let h=l.div??2,u=4/h;if(s%u===0){let d=Math.floor(s/u)%l.pattern.length,f=this.chordTones(o,c,6);this.e.note(l.inst,f[l.pattern[d]],t,a/h*1.5,.55+(d===0?.2:0),l.g)}break}case"bass":{let h=this.tonic+o.root+12*c;s===0&&this.e.note(l.inst,h,t,a*(l.fifth?e.beats/2:e.beats)*.9,.8,l.g),l.fifth&&s===n/2&&this.e.note(l.inst,h+7,t,a*e.beats/2*.9,.65,l.g);break}case"waltz":{let h=this.tonic+o.root+12*c;s===0&&this.e.note(l.inst,h-12,t,a*.9,.75,l.g),(s===4||s===8)&&this.chordTones(o,c+1,3).forEach(u=>this.e.note(l.inst,u,t,a*.5,.45,l.g));break}case"strum":{if(l.rhythm.includes(s)){let h=this.chordTones(o,c,5),u=s/2%2===0;h.forEach((d,f)=>this.e.note(l.inst,d,t+(u?f:h.length-f)*.012,a*.6,(s===0?.8:.5)*(.85+.15*Math.random()),l.g))}break}case"gen":{s===0&&(l.cur=this._genBar(l,r,o));for(let h of l.cur)h.s===s&&this.e.note(l.inst,h.m,t,h.d*a/4,h.v,l.g);break}case"perc":{let h=l.pat,u=this.step%16;for(let d in h)h[d][u%h[d].length]==="x"&&this.e.drum(d,t,(l.gain??.15)*5,l.g);break}case"tick":s%4===0&&this.e.drum(s/4%2?"tock":"tick",t,1,l.g);break;case"sparkle":{if(s%2===0&&l.rng()<(l.density??.2)*.5){let h=this.chordTones(o,c,6);this.e.note(l.inst,h[Math.floor(l.rng()*h.length)],t,a,.4+l.rng()*.3,l.g)}break}default:break}}}_genBar(t,e,n){let s=this.p,r=s.beats*4,o=Math.floor(e/4),a=e%4,l=a===3?e:a+o%2*4,c=_e((t.seed??1)*1e3+l*31+7),h=t.long?[[4,4,8],[8,8],[6,2,8],[4,4,4,4],[12,4]]:[[4,4,4,4],[6,2,4,4],[8,4,4],[4,4,8],[2,2,4,8],[12,4],[4,2,2,8]],u=t.long?[[8,4],[12],[4,8],[6,6]]:[[4,4,4],[8,4],[4,8],[6,2,4],[12]],d=c.pick(s.beats===3?u:h);t.sparse&&c()<.35&&(d=[r]);let f=[],m=0,x=this.tonic+12*(t.oct??0),g=n.iv.map(_=>(n.root+_)%12),p=3+Math.floor(c()*4);for(let _=0;_<d.length;_++){if(t.sparse&&_>0&&c()<.4){m+=d[_];continue}if(_===0||c()<.4){let y=p,v=99;for(let D=p-3;D<=p+3;D++){let E=(Br(D,this.scale)%12+12)%12;g.includes(E)&&Math.abs(D-p)<v&&(v=Math.abs(D-p),y=D)}p=y}else p+=c.pick([-1,1,-1,1,2,-2]);p=jt(p,1,10),f.push({s:m,m:x+Br(p,this.scale),d:d[_]*.95,v:.6+c()*.25}),m+=d[_]}return f}};var Fh="lm.save.v1",Ca="lm.img.",Oh=["Prologue","I \xB7 Tiny","II \xB7 Wonder","III \xB7 Running","IV \xB7 Together","V \xB7 Little Ones","VI \xB7 So Fast","VII \xB7 Winter","VIII \xB7 Little Moments"],zr=class{constructor(){this.registry=new Map,this.kept=new Map,this.lost=new Set,this.el=document.querySelector("#album"),this.open=!1,this.tab=1}register(t,e,n,s){this.registry.has(t)||this.registry.set(t,{id:t,chapter:e,caption:n,scene:s})}count(){return this.kept.size}has(t){return this.kept.has(t)}keep(t,e,n,s){this.kept.set(t,{caption:e,chapter:n,img:s}),this.lost.delete(t);try{s&&localStorage.setItem(Ca+t,s)}catch{}}lose(t){this.kept.has(t)||this.lost.add(t)}keptIn(t){return[...this.kept.entries()].filter(([,e])=>e.chapter===t)}save(t){let e={v:1,sceneIndex:t,date:Date.now(),state:M.state,kept:Object.fromEntries([...this.kept.entries()].map(([n,s])=>[n,{caption:s.caption,chapter:s.chapter}])),lost:[...this.lost]};try{localStorage.setItem(Fh,JSON.stringify(e))}catch(n){console.warn("save failed",n)}}static readSave(){try{return JSON.parse(localStorage.getItem(Fh)||"null")}catch{return null}}load(t){this.kept.clear(),this.lost.clear();for(let[e,n]of Object.entries(t.kept||{})){let s=null;try{s=localStorage.getItem(Ca+e)}catch{}this.kept.set(e,{...n,img:s})}(t.lost||[]).forEach(e=>this.lost.add(e)),Object.assign(M.state,t.state||{})}forgetFrom(t){for(let[e,n]of this.registry)if(t.includes(n.scene)){this.kept.delete(e),this.lost.delete(e);try{localStorage.removeItem(Ca+e)}catch{}}}wipe(){try{let t=[];for(let e=0;e<localStorage.length;e++){let n=localStorage.key(e);n&&(n.startsWith(Ca)||n===Fh)&&t.push(n)}t.forEach(e=>localStorage.removeItem(e))}catch{}this.kept.clear(),this.lost.clear()}show(t=null,{reachedChapter:e=8,onClose:n=null}={}){this.open=!0,this.onClose=n,t!==null&&(this.tab=t),this.reached=e,this.render(),this.el.classList.remove("hidden")}hide(){this.open=!1,this.el.classList.add("hidden"),this.el.innerHTML="",this.onClose&&this.onClose()}render(){let t=this.el;t.innerHTML="";let e=Tt("div","book"),n=Tt("div","head");n.appendChild(Tt("h2","","Little Moments"));let s=Tt("button","close","Close \u2715");s.addEventListener("click",()=>this.hide()),n.appendChild(s),e.appendChild(n);let r=Tt("div","tabs");for(let h=1;h<=Math.min(8,this.reached);h++){let u=this.keptIn(h).length,d=Tt("button",h===this.tab?"on":"",`${Oh[h]} <small>(${u})</small>`);d.addEventListener("click",()=>{this.tab=h,this.render()}),r.appendChild(d)}e.appendChild(r);let o=Tt("div","page"),a=[...this.registry.values()].filter(h=>h.chapter===this.tab),l=new Set(a.map(h=>h.id));for(let[h,u]of this.kept)u.chapter===this.tab&&!l.has(h)&&a.push({id:h,chapter:u.chapter,caption:u.caption});let c=0;for(let h of a){let u=this.kept.get(h.id),d=Tt("div","polaroid"+(u?"":" empty"));d.style.setProperty("--r",(c++*37%9-4)*.8+"deg"),u?d.innerHTML=(u.img?`<img class="ph" src="${u.img}">`:'<div class="ph"></div>')+`<div class="cap">${Pe(u.caption)}</div>`:d.innerHTML=`<div class="ph"></div><div class="cap">${this.lost.has(h.id)?"a moment that passed":"not yet lived"}</div>`,o.appendChild(d)}a.length||o.appendChild(Tt("div","note","Nothing here yet.")),e.appendChild(o),t.appendChild(e)}};var k={grass:10735474,grassSpring:11655562,grassDark:8631130,grassAutumn:13153378,grassDry:13482874,snow:15988474,snowShade:14673647,ice:13624562,dirt:10253399,dirtDark:7361088,rock:9604496,rockDark:7301744,sand:15587496,wood:12290911,woodDark:8871999,woodLight:14465164,trunk:8215107,birch:15657182,cream:16050390,white:16513266,pink:15911364,peach:16238243,blue:11126502,navy:4018042,red:14243914,terracotta:13199692,yellow:15979371,green:7319146,teal:6271912,lilac:12297949,slate:7306636,stone:13616827,asphalt:7106424,sidewalk:14209736,water:7321561,leafSummer:8372058,leafSpring:10474606,blossom:16169160,blossomLight:16503774,leafAutumn:14916155,leafAutumn2:13787198,leafAutumn3:15646794,pine:5214050,skin:[16176056,15317140,13209190,10118980,7227956]},Bh=new Map;function ge(i,t={}){let e=i+JSON.stringify(t);if(Bh.has(e))return Bh.get(e);let n=new Qi({color:i,flatShading:!0,roughness:t.roughness??.92,metalness:t.metalness??0,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,transparent:!!t.transparent,opacity:t.opacity??1,side:t.side??Cn,depthWrite:t.depthWrite??!0});return Bh.set(e,n),n}function is(i,t={}){return new Qi({color:i,flatShading:!0,roughness:t.roughness??.92,metalness:0,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,transparent:!!t.transparent,opacity:t.opacity??1,side:t.side??Cn,depthWrite:t.depthWrite??!0})}var zh=new Map;function ci(i,t){return zh.has(i)||zh.set(i,t()),zh.get(i)}function Hh(i,t=.05,e=1,n=!0){let s=i.attributes.position,r=1/0;for(let o=0;o<s.count;o++)r=Math.min(r,s.getY(o));for(let o=0;o<s.count;o++){let a=s.getX(o),l=s.getY(o),c=s.getZ(o);if(n&&Math.abs(l-r)<1e-4)continue;let h=Math.sin(Math.round(a*100)*12.9898+Math.round(l*100)*78.233+Math.round(c*100)*37.719+e*11.13)*43758.5453,u=h-Math.floor(h)-.5,d=Math.sin(h*1.37+3.1)*9631.17,f=d-Math.floor(d)-.5,m=Math.sin(h*.71+7.7)*7211.31,x=m-Math.floor(m)-.5;s.setXYZ(o,a+u*t,l+f*t,c+x*t)}return s.needsUpdate=!0,i.computeVertexNormals(),i}function ee(i,t=!0,e=!0){return i.traverse(n=>{n.isMesh&&(n.castShadow=t,n.receiveShadow=e)}),i}function ss(i,t,e){let n=new Mt(i,typeof t=="number"?ge(t,e):t);return n.castShadow=!0,n.receiveShadow=!0,n}function K(i,t,e,n,s){let r=ci(`box${i},${t},${e}`,()=>{let o=new Ze(i,t,e);return o.translate(0,t/2,0),o});return ss(r,n,s)}function Pi(i,t,e,n,s){let r=ci(`boxc${i},${t},${e}`,()=>new Ze(i,t,e));return ss(r,n,s)}function Ie(i,t,e,n,s,r){let o=ci(`cyl${i},${t},${e},${n}`,()=>{let a=new cn(i,t,e,n);return a.translate(0,e/2,0),a});return ss(o,s,r)}function li(i,t,e,n,s){let r=ci(`cone${i},${t},${e}`,()=>{let o=new Ei(i,t,e);return o.translate(0,t/2,0),o});return ss(r,n,s)}function Me(i,t,e,n=0,s=1,r){let o=ci(`ico${i},${t},${n},${s}`,()=>Hh(new Ve(i,t),n,s,!1));return ss(o,e,r)}function $s(i,t,e,n,s){let r=ci(`sph${i},${t},${e}`,()=>new oi(i,t,e));return ss(r,n,s)}function Ia(i,t,e,n,s,r=Math.PI*2,o){let a=ci(`tor${i},${t},${e},${n},${r}`,()=>new Ai(i,t,e,n,r));return ss(a,s,o)}function Bv(...i){let t=new rt;return i.forEach(e=>e&&t.add(e)),t}function Vh(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new Bs(n);return s.colorSpace=Be,s.anisotropy=4,s}var Pa=null;function La(){return Pa||(Pa=Vh(128,128,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.55)"),e.addColorStop(.6,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)}),Pa)}function Ln(i=16777215,t=1,e=1){let n=new Qo(new Rr({map:La(),color:i,transparent:!0,opacity:e,blending:yn,depthWrite:!1,fog:!1}));return n.scale.setScalar(t),n}function Da({w:i=20,d:t=20,h:e=1.2,top:n=k.grass,side:s=k.dirt,under:r=k.dirtDark,seed:o=3,rocks:a=!0,edge:l=null}={}){let c=new rt,h=K(i,.35,t,n);if(h.position.y=-.35,h.castShadow=!1,c.add(h),l){let d=K(i+.06,.12,t+.06,l);d.position.y=-.47,d.castShadow=!1,c.add(d)}let u=K(i-.1,e,t-.1,s);if(u.position.y=-.35-e,u.castShadow=!1,c.add(u),a){let d=_e(o),f=Math.max(4,Math.round(i*t/30));for(let x=0;x<f;x++){let g=d.range(1.8,4.2),p=d.range(2.5,7.5),_=Hh(new Ei(g,p,5),.35,o+x,!1),y=new Mt(_,ge(x%3===0?k.rockDark:r));y.rotation.x=Math.PI,y.position.set(d.range(-i/2+g*.8,i/2-g*.8),-.35-e-p/2+.2,d.range(-t/2+g*.8,t/2-g*.8)),c.add(y)}let m=new Mt(Hh(new Ei(Math.min(i,t)*.62,Math.min(i,t)*.55,6),.5,o+99,!1),ge(r));m.rotation.x=Math.PI,m.rotation.y=.4,m.scale.set(i/Math.min(i,t),1,t/Math.min(i,t)),m.position.y=-.35-e-Math.min(i,t)*.27+.1,c.add(m)}return c.userData.ground=h,c}function _n(i,t,e,n=.005,s){let r=new Mt(ci(`patch${i},${t}`,()=>{let o=new He(i,t);return o.rotateX(-Math.PI/2),o}),ge(e,s));return r.position.y=n,r.receiveShadow=!0,r}function Ii(i,t,e=10,n=.006){let s=new Mt(ci(`disc${i},${e}`,()=>{let r=new zs(i,e);return r.rotateX(-Math.PI/2),r}),ge(t));return s.position.y=n,s.receiveShadow=!0,s}var cf={spring:[k.leafSpring,9423459,11918980],summer:[k.leafSummer,6989903,9488482],autumn:[k.leafAutumn,k.leafAutumn2,k.leafAutumn3],winter:[15330803,14673390,16054010],blossom:[k.blossom,k.blossomLight,15836859]};function Js({kind:i="round",season:t="summer",size:e=1,seed:n=1}={}){let s=_e(n*7+3),r=new rt,o=(i==="pine"?.9:1.4)*e,a=i==="birch"?k.birch:k.trunk,l=Ie(.12*e,.2*e,o,5,a);r.add(l);let c=new rt;c.position.y=o,r.add(c);let h=cf[i==="blossom"&&t!=="winter"&&t!=="autumn"?"blossom":t];if(i==="pine"){let u=t==="winter"?[k.pine,6134384]:[k.pine,6003307];for(let d=0;d<3;d++){let f=li((1-d*.25)*e,1.3*e,6,u[d%2]);if(f.position.y=d*.65*e-.2,c.add(f),t==="winter"){let m=li((.55-d*.14)*e,.5*e,6,k.snow);m.position.y=d*.65*e+.75*e,c.add(m)}}}else if(t==="winter"&&i!=="pine"){for(let d=0;d<5;d++){let f=Ie(.03*e,.07*e,.9*e,4,a);f.rotation.z=s.range(.5,.9)*(d%2?1:-1),f.rotation.y=d*1.3,f.position.y=s.range(-.2,.3)*e,c.add(f)}let u=Me(.35*e,0,k.snow,.05,n);u.position.y=.6*e,u.scale.y=.5,c.add(u)}else{let u=i==="birch"?3:4;for(let f=0;f<u;f++){let m=s.range(.55,.85)*e,x=Me(m,0,h[f%h.length],.12,n+f),g=f/u*Math.PI*2+s.range(0,1);x.position.set(Math.cos(g)*.45*e,s.range(.35,.9)*e,Math.sin(g)*.45*e),c.add(x)}let d=Me(.7*e,0,h[0],.12,n+9);d.position.y=1.15*e,c.add(d)}return ee(r),r.userData.canopy=c,r.userData.sway=s.range(0,6),r.userData.update=(u,d)=>{c.rotation.z=Math.sin(d*.8+r.userData.sway)*.02,c.rotation.x=Math.cos(d*.6+r.userData.sway)*.015},r}function ka({stage:i=1,season:t="summer",swing:e=!1,seed:n=42}={}){let s=new rt,r=[.28,.6,1.25,1.9,2.4][i]??1,o=1.5*r,a=Ie(.1*r+.03,.22*r+.05,o,6,k.trunk);s.add(a);let l=new rt;if(l.position.y=o,s.add(l),i>=2)for(let h=0;h<3;h++){let u=Ie(.04*r,.09*r,.9*r,5,k.trunk);u.rotation.z=(h-1)*.7,u.rotation.y=h*2.1,u.position.y=-.2*r,l.add(u)}let c=cf[t];if(t==="winter"){for(let u=0;u<7;u++){let d=Ie(.025*r,.06*r,1.1*r,4,k.trunk);d.rotation.z=.6+u%3*.15,d.rotation.y=u*.9,d.position.y=.1*r,l.add(d)}let h=Me(.5*r,0,k.snow,.06,n);h.scale.y=.35,h.position.y=.75*r,l.add(h)}else{let h=_e(n),u=i===0?2:6;for(let f=0;f<u;f++){let m=Me(h.range(.5,.75)*r,i>=3?1:0,c[f%3],.1*r,n+f),x=f/u*Math.PI*2;m.position.set(Math.cos(x)*.6*r,h.range(.3,.8)*r,Math.sin(x)*.6*r),l.add(m)}let d=Me(.8*r,i>=3?1:0,c[0],.1*r,n+77);d.position.y=1.1*r,l.add(d)}if(e&&i>=2){let h=new rt,u=K(.025,1.3*r*.75,.025,15260872);u.position.set(-.25,-1.3*r*.75,0),h.add(u);let d=K(.025,1.3*r*.75,.025,15260872);d.position.set(.25,-1.3*r*.75,0),h.add(d);let f=K(.65,.06,.25,k.woodDark);f.position.y=-1.3*r*.75,h.add(f),h.position.set(.9*r,o+.15*r-.35,.2),s.add(h),s.userData.swing=h,s.userData.swingLen=1.3*r*.75}return ee(s),s.userData.canopy=l,s.userData.update=(h,u)=>{l.rotation.z=Math.sin(u*.7)*.015},s}function hf(i=7910486,t=1,e=1){let n=new rt,s=_e(e);for(let r=0;r<3;r++){let o=Me(s.range(.28,.42)*t,0,r===1?i:Wn(i,.92),.06,e+r);o.position.set((r-1)*.3*t,.25*t,s.range(-.1,.1)),n.add(o)}return ee(n)}function Hr(i=1,t=1,e=k.rock){let n=Me(.4*i,0,e,.12*i,t);return n.scale.y=.6,n.position.y=.12*i,Bv(n)}function Vr(i=k.pink,t=1){let e=new rt,n=K(.025,.22,.025,6068806);e.add(n);let s=Me(.07,0,i,0);s.position.y=.24,e.add(s);let r=Me(.035,0,k.yellow);return r.position.y=.27,e.add(r),e.rotation.y=t,ee(e,!1,!1)}function Ua(i=k.grassDark,t=1){let e=new rt;for(let n=0;n<3;n++){let s=li(.04,.22+n%2*.08,3,i);s.position.set((n-1)*.05,0,n%2*.04),s.rotation.z=(n-1)*.3,e.add(s)}return e.rotation.y=t,ee(e,!1,!1)}function Na(i=1,t=1){let e=new rt,n=_e(i);for(let s=0;s<4;s++){let r=Me(n.range(.6,1.1)*t,0,16777215,.15,i+s,{emissive:16777215,emissiveIntensity:.25});r.position.set((s-1.5)*.8*t,n.range(-.2,.3),n.range(-.3,.3)),r.scale.y=.7,e.add(r)}return e.userData.drift=n.range(.1,.25),e.traverse(s=>{s.isMesh&&(s.castShadow=!1,s.receiveShadow=!1)}),e}function Wn(i,t){let e=new Ct(i);return e.multiplyScalar(t),e.getHex()}function Fa({w:i=8,d:t=8,h:e=3.2,floor:n=k.woodLight,wall:s=k.cream,wall2:r=null,trim:o=k.white,base:a=k.dirtDark,windows:l=[]}={}){let c=new rt,h=K(i,.25,t,n);h.position.y=-.25,h.castShadow=!1,c.add(h);let u=K(i+.3,.6,t+.3,a);u.position.y=-.85,u.castShadow=!1,c.add(u);for(let g=1;g<Math.floor(i/.8);g++){let p=_n(.02,t,Wn(n,.9),.003);p.position.x=-i/2+g*.8,c.add(p)}let d=K(.25,e,t+.25,s);d.position.set(-i/2-.125,-.25,-.125),c.add(d);let f=K(i,e,.25,r??s);f.position.set(0,-.25,-t/2-.125),c.add(f);let m=K(.06,.18,t,o);m.position.set(-i/2+.03,0,0),c.add(m);let x=K(i,.18,.06,o);x.position.set(0,0,-t/2+.03),c.add(x);for(let g of l)c.add(zv(g));return ee(c),c.userData.walls=[d,f],c}function zv({wall:i="back",at:t=0,y:e=1.1,w:n=1.4,h:s=1.3,glow:r=16773848,roomW:o=8,roomD:a=8}={}){let l=new rt,c=K(n,s,.05,r,{emissive:r,emissiveIntensity:.9});c.castShadow=!1,l.add(c);let h=K(n+.16,.1,.14,k.white);h.position.y=-.05,l.add(h);let u=K(n+.16,.1,.14,k.white);u.position.y=s,l.add(u);let d=K(.08,s,.12,k.white);d.position.x=0,l.add(d);let f=K(.1,s,.14,k.white);f.position.x=-n/2,l.add(f);let m=K(.1,s,.14,k.white);m.position.x=n/2,l.add(m);let x=K(n+.3,.07,.3,k.white);return x.position.set(0,-.08,.12),l.add(x),i==="back"?l.position.set(t,e,-a/2+.03):(l.position.set(-o/2+.03,e,t),l.rotation.y=Math.PI/2),l.userData.pane=c,l}function Gh({w:i=5,d:t=4,h:e=2.6,wall:n=k.cream,roof:s=k.terracotta,door:r=k.navy,trim:o=k.white,chimney:a=!0,porch:l=!1,lit:c=!1,seed:h=1}={}){let u=new rt,d=K(i,e,t,n);u.add(d);let f=new Hs,m=.35;f.moveTo(-i/2-m,0),f.lineTo(i/2+m,0),f.lineTo(0,e*.6),f.lineTo(-i/2-m,0);let x=new kr(f,{depth:t+m*2,bevelEnabled:!1});x.translate(0,0,-(t+m*2)/2);let g=new Mt(x,ge(s));g.position.y=e,g.castShadow=!0,g.receiveShadow=!0,u.add(g);let p=new Hs;p.moveTo(-i/2,0),p.lineTo(i/2,0),p.lineTo(0,e*.52),p.lineTo(-i/2,0);let _=new kr(p,{depth:t-.02,bevelEnabled:!1});_.translate(0,0,-(t-.02)/2);let y=new Mt(_,ge(n));if(y.position.y=e-.01,u.add(y),a){let S=K(.45,1.2,.45,k.terracotta===s?11097919:Wn(s,.8));S.position.set(i*.25,e+.3,-t*.15),u.add(S)}let v=K(.75,1.45,.08,r);v.position.set(0,0,t/2+.02),u.add(v);let D=$s(.04,6,4,k.yellow);D.position.set(.25,.72,t/2+.08),u.add(D);let E=c?16769184:13624046,A=c?{emissive:16765578,emissiveIntensity:1.2}:{};for(let S of[-1,1]){let w=K(.75,.7,.06,E,A);w.position.set(S*i*.3,1.1,t/2+.02),u.add(w);let P=K(.9,.08,.1,o);P.position.set(S*i*.3,1.06,t/2+.05),u.add(P);let H=K(.06,.7,.75,E,A);H.position.set(i/2+.02,1.1,S*t*.22),u.add(H)}let L=K(1.1,.12,.5,k.stone);if(L.position.set(0,0,t/2+.25),u.add(L),l){let S=K(i*.8,.15,1.4,k.woodLight);S.position.set(0,0,t/2+.7),u.add(S);for(let P of[-1,1]){let H=Ie(.06,.06,1.9,5,o);H.position.set(P*i*.38,.15,t/2+1.3),u.add(H)}let w=K(i*.85,.1,1.6,s);w.position.set(0,2.05,t/2+.75),w.rotation.x=.12,u.add(w)}return ee(u)}function Oa(i=4,t=k.white,e=.6){let n=new rt,s=Math.max(2,Math.round(i/.5));for(let r=0;r<=s;r++){let o=K(.08,e,.08,t);o.position.x=-i/2+r/s*i,n.add(o)}for(let r of[e*.35,e*.75]){let o=K(i,.06,.05,t);o.position.y=r,n.add(o)}return ee(n)}function uf(i,t=3,e=!0){let n=new rt,s=_n(e?i:t,e?t:i,k.asphalt,.01);n.add(s);let r=Math.floor(i/1.4);for(let o=0;o<r;o++){let a=_n(e?.6:.1,e?.1:.6,15855590,.015),l=-i/2+.7+o*1.4;e?a.position.x=l:a.position.z=l,n.add(a)}return n}function Ba(i=k.woodDark){let t=new rt,e=K(1.6,.08,.45,i);e.position.y=.42,t.add(e);let n=K(1.6,.4,.06,i);n.position.set(0,.6,-.2),n.rotation.x=-.12,t.add(n);for(let s of[-.7,.7])for(let r of[-.18,.18]){let o=K(.07,.42,.07,4869980);o.position.set(s,0,r),t.add(o)}return ee(t)}function df(){let i=new rt;for(let[e,n,s,r]of[[0,-1,2.2,.15],[0,1,2.2,.15],[-1.05,0,.15,2],[1.05,0,.15,2]]){let o=K(s,.25,r,k.wood);o.position.set(e,0,n),i.add(o)}let t=K(2,.15,1.85,k.sand);return i.add(t),ee(i)}function ff(){let i=new rt;i.add(K(.07,.8,.07,k.woodDark));let t=K(.25,.22,.4,k.navy);t.position.y=.8,i.add(t);let e=K(.02,.15,.06,k.red);return e.position.set(.14,.9,.1),i.add(e),ee(i)}function za(i=k.red){let t=new rt;t.add(_n(2.2,1.8,i,.02));for(let e=0;e<5;e++){let n=_n(.18,1.8,k.white,.025);n.position.x=-.88+e*.44,t.add(n)}for(let e=0;e<4;e++){let n=_n(2.2,.18,k.white,.026);n.position.z=-.66+e*.44,t.add(n)}return t}function Wh(i=k.red,t=1){let e=new rt;for(let l of[-.45,.45]){let c=Ia(.3,.035,4,12,3355443);c.position.set(l,.3,0),e.add(c)}let n=Pi(.7,.05,.05,i);n.position.set(0,.52,0),e.add(n);let s=Pi(.05,.4,.05,i);s.position.set(-.12,.42,0),s.rotation.z=.3,e.add(s);let r=Pi(.2,.05,.12,3355443);r.position.set(-.18,.68,0),e.add(r);let o=Pi(.05,.05,.4,6710886);o.position.set(.4,.75,0),e.add(o);let a=Pi(.04,.45,.04,i);return a.position.set(.42,.52,0),a.rotation.z=-.15,e.add(a),e.scale.setScalar(t),ee(e)}function pf(){let i=new rt,t=K(1.5,.12,.85,k.white);t.position.y=.45,i.add(t);let e=K(1.4,.12,.75,14674677);e.position.y=.57,i.add(e);for(let s of[-.72,.72])for(let r of[-.4,.4]){let o=K(.07,1.1,.07,k.white);o.position.set(s,0,r),i.add(o)}for(let s=0;s<9;s++)for(let r of[-.4,.4]){let o=K(.03,.5,.03,k.white);o.position.set(-.6+s*.15,.57,r),i.add(o)}for(let s of[-.4,.4]){let r=K(1.5,.05,.05,k.white);r.position.set(0,1.07,s),i.add(r)}let n=K(.6,.06,.7,k.pink);return n.position.set(.35,.65,0),i.add(n),ee(i)}function Xh(){let i=new rt,t=K(.03,.9,.03,k.white);i.add(t);let e=K(.6,.02,.02,k.white);e.position.y=.9,i.add(e);let n=new rt;n.position.y=.88,i.add(n);let s=[k.yellow,12114162,k.pink,13166281,16179624];for(let r=0;r<5;r++){let o=r/5*Math.PI*2,a=K(.008,.25,.008,14540253);a.position.set(Math.cos(o)*.3,-.25,Math.sin(o)*.3),n.add(a);let l=Me(.07,0,s[r],0,1,{emissive:s[r],emissiveIntensity:.6});l.position.set(Math.cos(o)*.3,-.3,Math.sin(o)*.3),n.add(l)}return i.userData.spin=n,i.userData.speed=.25,i.userData.update=r=>{n.rotation.y+=r*i.userData.speed},i}function mf({w:i=1.1,d:t=2,color:e=k.blue,frame:n=k.wood}={}){let s=new rt,r=K(i,.35,t,n);s.add(r);let o=K(i-.1,.18,t-.1,k.white);o.position.y=.35,s.add(o);let a=K(i-.05,.1,t*.6,e);a.position.set(0,.5,t*.18),s.add(a);let l=K(i*.6,.12,.35,k.white);l.position.set(0,.53,-t/2+.3),s.add(l);let c=K(i,.9,.08,n);return c.position.set(0,0,-t/2),s.add(c),ee(s)}function rs({w:i=1.4,d:t=.9,h:e=.75,color:n=k.wood,round:s=!1}={}){let r=new rt,o=s?Ie(i/2,i/2,.08,10,n):K(i,.08,t,n);if(o.position.y=e-.08,r.add(o),s){r.add(Ie(.06,.08,e-.08,5,Wn(n,.85)));let a=Ie(.3,.32,.04,8,Wn(n,.85));r.add(a)}else for(let a of[-1,1])for(let l of[-1,1]){let c=K(.07,e-.08,.07,Wn(n,.85));c.position.set(a*(i/2-.08),0,l*(t/2-.08)),r.add(c)}return ee(r)}function gf(i=k.wood){let t=new rt,e=K(.45,.06,.45,i);e.position.y=.44,t.add(e);let n=K(.45,.5,.06,i);n.position.set(0,.5,-.2),t.add(n);for(let s of[-.19,.19])for(let r of[-.19,.19]){let o=K(.05,.44,.05,Wn(i,.85));o.position.set(s,0,r),t.add(o)}return ee(t)}function xf(i=k.woodDark){let t=new rt,e=new rt;t.add(e);for(let o of[-.28,.28]){let a=Ia(.9,.035,3,12,i,.9);a.rotation.z=Math.PI+1.12,a.position.set(0,.92,o),e.add(a)}let n=K(.6,.07,.6,i);n.position.y=.45,e.add(n);let s=K(.52,.08,.52,k.pink);s.position.y=.52,e.add(s);let r=K(.6,.75,.06,i);r.position.set(0,.55,-.28),r.rotation.x=-.18,e.add(r);for(let o of[-.27,.27])for(let a of[-.25,.25]){let l=K(.05,.38,.05,i);l.position.set(o,.08,a),e.add(l)}return t.userData.rock=e,ee(t)}function qh(i=9414856){let t=new rt,e=K(2,.45,.85,i);e.position.y=.05,t.add(e);let n=K(2,.55,.22,Wn(i,.92));n.position.set(0,.45,-.32),t.add(n);for(let s of[-.92,.92]){let r=K(.18,.3,.85,Wn(i,.92));r.position.set(s,.45,0),t.add(r)}for(let s of[-.45,.45]){let r=K(.85,.12,.6,Wn(i,1.06));r.position.set(s,.5,.08),t.add(r)}return ee(t)}function Ha(i=2.4,t=1.8,e=k.pink,n=k.cream,s=!1){let r=new rt;if(s){r.add(Ii(i/2,n,14,.008));let o=Ii(i/2-.15,e,14,.012);r.add(o)}else r.add(_n(i,t,n,.008)),r.add(_n(i-.25,t-.25,e,.012));return r}function Yh(i=1.2,t=1.8){let e=new rt,n=K(i,t,.35,k.woodDark);e.add(n);let s=_e(Math.round(i*100+t*10)),r=[k.red,k.navy,k.yellow,k.green,k.pink,k.teal,k.cream];for(let o=0;o<3;o++){let a=.15+o*(t/3),l=K(i-.06,.04,.33,k.wood);l.position.set(0,a-.04,.02),e.add(l);let c=-i/2+.08;for(;c<i/2-.15;){let h=s.range(.06,.12),u=s.range(.25,.42),d=K(h,u,.25,s.pick(r));d.position.set(c+h/2,a,.06),d.rotation.z=s()<.1?.15:0,e.add(d),c+=h+.01}}return ee(e)}function Va({h:i=1.5,shade:t=16508868,lit:e=!0,table:n=!1}={}){let s=new rt,r=n?.45:i;s.add(Ie(.12,.15,.04,8,9076596)),s.add(Ie(.02,.02,r,4,9076596));let o=Ie(.14,.24,.3,8,t,e?{emissive:16767392,emissiveIntensity:1.1}:{});if(o.position.y=r-.1,s.add(o),e){let a=Ln(16766880,n?1.4:2.2,.5);a.position.y=r,s.add(a)}return ee(s)}function yf(i=3){let t=new rt,e=[k.red,k.yellow,k.blue,k.green,k.pink];for(let n=0;n<i;n++){let s=K(.22,.22,.22,e[n%e.length]);s.position.set(n*.3-.3,0,n%2*.15),s.rotation.y=n*.4,t.add(s)}return ee(t)}function Gr(i=13081198){let t=new rt,e=Me(.15,0,i,.02);e.position.y=.15,e.scale.y=1.1,t.add(e);let n=Me(.11,0,i,.02);n.position.y=.36,t.add(n);for(let r of[-.08,.08]){let o=Me(.045,0,i);o.position.set(r,.45,0),t.add(o)}let s=Me(.04,0,15257520);return s.position.set(0,.34,.1),t.add(s),ee(t)}function vf(i=k.yellow){let t=new rt,e=Me(.12,0,i);e.scale.set(1.3,.8,1),e.position.y=.08,t.add(e);let n=Me(.07,0,i);n.position.set(.1,.18,0),t.add(n);let s=li(.03,.07,4,15764538);return s.rotation.z=-Math.PI/2,s.position.set(.18,.17,0),t.add(s),ee(t)}function Zh(i=!0,t=!0){let e=new rt;e.add(K(.5,.025,.35,10133672));let n=new rt;n.position.set(0,.025,-.17),e.add(n);let s=K(.5,.34,.02,10133672);n.add(s);let r=K(.45,.29,.01,13625087,{emissive:12573951,emissiveIntensity:1.4});return r.position.set(0,.025,.012),n.add(r),n.rotation.x=i?-.25:-Math.PI/2,ee(e)}function $h(){let i=new rt,t=K(.12,.02,.22,2829107);i.add(t);let e=K(.1,.005,.19,13625087,{emissive:12573951,emissiveIntensity:1.5});return e.position.y=.02,i.add(e),i}function _f(){let i=new rt,t=K(1.6,1.3,.5,12101786);i.add(t);let e=K(.9,.7,.1,2760736);e.position.set(0,.1,.22),i.add(e);let n=K(1.8,.1,.6,k.woodDark);n.position.y=1.3,i.add(n);let s=new rt;s.position.set(0,.12,.3);for(let o=0;o<3;o++){let a=li(.12-o*.02,.35-o*.05,5,[16751162,16760906,16742954][o],{emissive:[16742944,16756784,16734736][o],emissiveIntensity:2.5});a.position.x=(o-1)*.15,a.castShadow=!1,s.add(a)}let r=Ln(16751184,2.2,.7);return r.position.y=.2,s.add(r),i.add(s),i.userData.fire=s,i.userData.update=(o,a)=>{s.children.forEach((l,c)=>{l.isMesh&&(l.scale.y=.85+Math.sin(a*9+c*2)*.15)})},ee(i)}function wf(i=2.4){let t=new rt,e=K(i,.85,.6,k.white);t.add(e);let n=K(i+.05,.06,.65,14208964);n.position.y=.85,t.add(n);for(let s=0;s<Math.floor(i/.6);s++){let r=K(.1,.03,.03,10066329);r.position.set(-i/2+.3+s*.6,.65,.31),t.add(r)}return ee(t)}function bf(){let i=new rt;i.add(K(.7,.85,.6,15262942));let t=K(.72,.04,.62,4473924);t.position.y=.85,i.add(t);let e=Ie(.17,.15,.05,10,3355443);e.position.set(.12,.9,.05),i.add(e);let n=K(.25,.03,.04,3355443);return n.position.set(.4,.92,.05),i.add(n),ee(i)}function Mf(){let i=new rt;i.add(K(.75,1.8,.65,15921386));let t=K(.73,.02,.02,12303291);t.position.set(0,1.15,.33),i.add(t);let e=K(.03,.4,.04,11184810);return e.position.set(.3,1.35,.34),i.add(e),ee(i)}function Ga(i=1){let t=new rt;t.add(Ie(.16*i,.12*i,.28*i,7,k.terracotta));for(let e=0;e<5;e++){let n=li(.07*i,.5*i,3,k.green);n.position.y=.25*i,n.rotation.z=(e-2)*.35,n.rotation.y=e*1.2,t.add(n)}return ee(t)}function Wa(i=k.wood,t=null,e=.5,n=.4){let s=new rt;s.add(Pi(e,n,.04,i));let r=new Mt(new He(e*.8,n*.8),t?new Ye({map:t}):ge(15787736));return r.position.z=.025,s.add(r),s}function Jh(i=.6){let t=new rt;t.add(K(i,i*.8,i,13214323));let e=K(i*.12,.01,i+.01,14205850);return e.position.y=i*.8,t.add(e),ee(t)}function Sf(i=3){let t=new rt;if(i>=1){let e=Me(.42,1,k.snow,.03);e.position.y=.36,t.add(e)}if(i>=2){let e=Me(.3,1,k.snow,.03);e.position.y=.95,t.add(e)}if(i>=3){let e=Me(.21,1,k.snow,.02);e.position.y=1.38,t.add(e)}if(i>=4){let e=li(.04,.22,5,15764538);e.rotation.x=Math.PI/2,e.position.set(0,1.38,.2),t.add(e);for(let n of[-.07,.07]){let s=$s(.025,5,4,2236962);s.position.set(n,1.45,.18),t.add(s)}for(let n=0;n<3;n++){let s=$s(.03,5,4,2236962);s.position.set(0,.85+n*.13,.29-Math.abs(n-1)*.02),t.add(s)}}if(i>=5){let e=Ia(.22,.05,4,10,k.red);e.rotation.x=Math.PI/2,e.position.y=1.2,t.add(e);let n=Ie(.15,.15,.22,8,3355443);n.position.y=1.55,t.add(n);let s=Ie(.24,.24,.03,10,3355443);s.position.y=1.55,t.add(s);for(let r of[-1,1]){let o=Ie(.015,.02,.5,3,k.trunk);o.rotation.z=r*1.1,o.position.set(r*.28,1,0),t.add(o)}}return ee(t)}function Tf(i=k.red,t=k.yellow,e=.4){let n=new rt;n.add(K(e,e*.8,e,i));let s=K(e+.01,e*.8+.01,e*.15,t);n.add(s);let r=K(e*.15,e*.8+.01,e+.01,t);return n.add(r),ee(n)}function Ef(i=10115658){let t=new rt;t.add(K(.5,.08,.38,i));let e=K(.47,.06,.35,k.white);return e.position.set(.01,.01,0),t.add(e),ee(t)}function Af(i=k.white){let t=new rt;t.add(Ie(.06,.055,.12,8,i));let e=Ia(.035,.012,4,8,i);return e.position.set(.065,.06,0),t.add(e),t}function Xa(){let i=new rt,t=K(1.4,.75,.6,k.woodLight);i.add(t);let e=K(1.2,.35,.04,k.yellow);e.position.set(0,1.5,.25),i.add(e);for(let s of[-.65,.65]){let r=K(.06,1.7,.06,k.wood);r.position.set(s,0,.25),i.add(r)}let n=Ie(.12,.12,.3,8,16774048,{transparent:!0,opacity:.85});n.position.set(-.3,.75,0),i.add(n);for(let s=0;s<3;s++){let r=Ie(.05,.04,.12,6,k.white);r.position.set(.1+s*.15,.75,.05),i.add(r)}return ee(i)}function Kh(i){let t=new rt,e=new Mt(new He(.6,.45),new Ye({map:i,side:Te}));return t.add(e),t}var Hv={petals:{color:[16236751,16505058,15968445],size:.09,fall:.35,drift:.6,spin:2,shape:"flake",count:120},leaves:{color:[14916155,13787198,15646794,13072938],size:.12,fall:.6,drift:.8,spin:3,shape:"flake",count:110},snow:{color:[16777215,15922943],size:.06,fall:.55,drift:.35,spin:1,shape:"flake",count:260},rain:{color:[12374246],size:.02,fall:9,drift:.05,spin:0,shape:"streak",count:420},fireflies:{color:[16187290,14679930],size:.35,fall:0,drift:.35,spin:0,shape:"glow",count:40},motes:{color:[16774360],size:.14,fall:-.02,drift:.12,spin:0,shape:"glow",count:60},stars:{color:[16777215,16774352,14214399],size:.3,fall:0,drift:0,spin:0,shape:"glow",count:120},bubbles:{color:[14676735,16179455],size:.28,fall:-.4,drift:.5,spin:0,shape:"glow",count:25},memories:{color:[16771e3,16765152,14215935],size:.5,fall:-.25,drift:.3,spin:0,shape:"glow",count:50}},qa=class{constructor(t,e={}){let n={...Hv[t],...e};this.k=n,this.kind=t,this.area=e.area??{w:30,h:12,d:30},this.center=e.center??null,this.y0=e.y0??0;let s=n.count;this.n=s;let r=_e(e.seed??7);this.p=new Float32Array(s*3),this.v=new Float32Array(s*3),this.ph=new Float32Array(s);for(let o=0;o<s;o++)this.p[o*3]=r.range(-.5,.5)*this.area.w,this.p[o*3+1]=this.y0+r.range(0,1)*this.area.h,this.p[o*3+2]=r.range(-.5,.5)*this.area.d,this.ph[o]=r.range(0,Math.PI*2);if(this.opacity=e.opacity??1,this.target=1,this.fade=1,n.shape==="glow"){let o=new Re;o.setAttribute("position",new Fe(this.p.slice(),3));let a=new Float32Array(s*3),l=new Ct;for(let c=0;c<s;c++)l.setHex(n.color[c%n.color.length]),a.set([l.r,l.g,l.b],c*3);o.setAttribute("color",new Fe(a,3)),this.mat=new Os({size:n.size,map:La(),vertexColors:!0,transparent:!0,opacity:this.opacity,depthWrite:!1,blending:yn,sizeAttenuation:!0,fog:!1}),this.obj=new Cr(o,this.mat),this.geo=o}else{let o=n.shape==="streak"?new Ze(.012,.35,.012):new He(n.size,n.size*.7);this.mat=new Qi({side:Te,flatShading:!0,transparent:!0,opacity:this.opacity,roughness:1,depthWrite:n.shape!=="streak"}),this.obj=new ea(o,this.mat,s);let a=new Ct;for(let l=0;l<s;l++)a.setHex(n.color[l%n.color.length]),this.obj.setColorAt(l,a);this.dummy=new Le}this.obj.frustumCulled=!1,this.obj.renderOrder=5}setOpacity(t){this.target=t}update(t,e){let n=this.k,s=this.n;this.fade+=(this.target-this.fade)*Math.min(1,t*1.5),this.mat.opacity=this.opacity*this.fade,this.obj.visible=this.mat.opacity>.01;let r=this.center??M.renderer.camTarget,o=this.area;for(let a=0;a<s;a++){let l=a*3,c=this.ph[a];this.p[l]+=Math.sin(e*.7+c)*n.drift*t+(n.wind??0)*t,this.p[l+1]-=n.fall*t*(.7+.6*Math.sin(c)),this.p[l+2]+=Math.cos(e*.6+c*1.3)*n.drift*t,(this.kind==="fireflies"||this.kind==="motes"||this.kind==="memories")&&(this.p[l+1]+=Math.sin(e*1.3+c)*.15*t),this.p[l+1]<this.y0&&(this.p[l+1]+=o.h),this.p[l+1]>this.y0+o.h&&(this.p[l+1]-=o.h);let h=this.p[l],u=this.p[l+2];h<-o.w/2&&(this.p[l]+=o.w),h>o.w/2&&(this.p[l]-=o.w),u<-o.d/2&&(this.p[l+2]+=o.d),u>o.d/2&&(this.p[l+2]-=o.d)}if(this.geo){let a=this.geo.attributes.position;for(let l=0;l<s;l++){let c=1;(this.kind==="fireflies"||this.kind==="stars")&&(c=.5+.5*Math.sin(e*(this.kind==="stars"?1.2:2.5)+this.ph[l]*3)),a.setXYZ(l,r.x+this.p[l*3],this.p[l*3+1]-(1-c)*0,r.z+this.p[l*3+2])}a.needsUpdate=!0,(this.kind==="fireflies"||this.kind==="stars")&&(this.mat.size=n.size*(.85+.15*Math.sin(e*3)))}else{let a=this.dummy;for(let l=0;l<s;l++)a.position.set(r.x+this.p[l*3],this.p[l*3+1],r.z+this.p[l*3+2]),n.spin?a.rotation.set(e*n.spin*.5+this.ph[l],e*n.spin*.3+this.ph[l]*2,this.ph[l]):a.rotation.set(0,0,.12),a.updateMatrix(),this.obj.setMatrixAt(l,a.matrix);this.obj.instanceMatrix.needsUpdate=!0}}dispose(){this.obj.geometry.dispose(),this.mat.dispose()}},Ya=class{constructor(t,{color:e=16773312,count:n=40,speed:s=2,life:r=1.6,size:o=.3}={}){this.life=r,this.t=0,this.n=n;let a=new Re;this.p=new Float32Array(n*3),this.v=new Float32Array(n*3);for(let l=0;l<n;l++){this.p.set([t.x,t.y,t.z],l*3);let c=Math.random()*Math.PI*2,h=Math.random()*Math.PI-Math.PI/4,u=s*(.4+Math.random());this.v.set([Math.cos(c)*Math.cos(h)*u,Math.abs(Math.sin(h))*u+.5,Math.sin(c)*Math.cos(h)*u],l*3)}a.setAttribute("position",new Fe(this.p,3)),this.mat=new Os({size:o,color:e,map:La(),transparent:!0,depthWrite:!1,blending:yn,fog:!1}),this.obj=new Cr(a,this.mat),this.obj.frustumCulled=!1,this.geo=a}update(t){this.t+=t;for(let e=0;e<this.n;e++){let n=e*3;this.v[n+1]-=t*.8,this.v[n]*=.985,this.v[n+2]*=.985,this.p[n]+=this.v[n]*t,this.p[n+1]+=this.v[n+1]*t,this.p[n+2]+=this.v[n+2]*t}return this.geo.attributes.position.needsUpdate=!0,this.mat.opacity=Math.max(0,1-this.t/this.life),this.t>=this.life}dispose(){this.geo.dispose(),this.mat.dispose()}};var Ks=class{constructor({bounds:t={minX:-9,maxX:9,minZ:-9,maxZ:9},name:e=""}={}){this.name=e,this.root=new rt,this.bounds=t,this.colliders=[],this.characters=new Set,this.hotspots=[],this.updatables=[],this.particles=[],this.bursts=[],this.creatures=[],this.disposed=!1,M.scene.add(this.root)}add(t,e=0,n=0,{ry:s=0,s:r=1,y:o=0,collide:a=!1,parent:l=null}={}){if(t.position.set(e,o,n),t.rotation.y=s,r!==1&&t.scale.setScalar(r),(l??this.root).add(t),a!==!1&&a!==void 0)if(typeof a=="number")this.addCollider({x:e,z:n,r:a*(r||1),obj:t});else{let c=Math.round(s/(Math.PI/2))%2!==0,h=(c?a.d:a.w)*r,u=(c?a.w:a.d)*r;this.addCollider({minX:e-h/2+(a.ox??0),maxX:e+h/2+(a.ox??0),minZ:n-u/2+(a.oz??0),maxZ:n+u/2+(a.oz??0),obj:t})}return this.track(t),t}track(t){t.traverse(e=>{e.userData&&typeof e.userData.update=="function"&&!this.updatables.includes(e)&&this.updatables.push(e)})}addCollider(t){return this.colliders.push(t),t}removeCollider(t){let e=this.colliders.indexOf(t);e>=0&&this.colliders.splice(e,1)}removeCollidersOf(t){this.colliders=this.colliders.filter(e=>e.obj!==t)}remove(t){this.removeCollidersOf(t),t.parent?.remove(t),this.updatables=this.updatables.filter(e=>{let n=e;for(;n;){if(n===t)return!1;n=n.parent}return!0})}addCharacter(t){this.characters.add(t),this.root.add(t.root)}removeCharacter(t){this.characters.delete(t)}particlesOf(t,e){let n=new qa(t,e);return this.particles.push(n),this.root.add(n.obj),n}removeParticles(t){let e=this.particles.indexOf(t);e>=0&&this.particles.splice(e,1),t.obj.parent?.remove(t.obj),t.dispose()}burst(t,e){let n=new Ya(t,e);return this.bursts.push(n),this.root.add(n.obj),n}hotspot(t){let e=new jh(this,t);return this.hotspots.push(e),e}getHotspot(t){return this.hotspots.find(e=>e.id===t)}butterflies(t=3,e={x:0,z:0,r:6},n=1){let s=_e(n);for(let r=0;r<t;r++){let o=new Qh(s.pick([16172101,15921906,10143984,15964848]),e,n+r);this.creatures.push(o),this.root.add(o.obj)}}birds(t=5,e=1){let n=new tu(t,e);return this.creatures.push(n),this.root.add(n.obj),n}resolve(t,e,n=.3){let s=this.bounds;for(let r=0;r<3;r++)for(let o of this.colliders)if(!o.disabled)if(o.r!==void 0){let a=t-o.x,l=e-o.z,c=Math.hypot(a,l),h=o.r+n;c<h&&c>1e-5&&(t=o.x+a/c*h,e=o.z+l/c*h)}else{let a=jt(t,o.minX,o.maxX),l=jt(e,o.minZ,o.maxZ),c=t-a,h=e-l,u=Math.hypot(c,h);if(u<n)if(u>1e-5)t=a+c/u*n,e=l+h/u*n;else{let d=t-o.minX,f=o.maxX-t,m=e-o.minZ,x=o.maxZ-e,g=Math.min(d,f,m,x);g===d?t=o.minX-n:g===f?t=o.maxX+n:g===m?e=o.minZ-n:e=o.maxZ+n}}return t=jt(t,s.minX+n,s.maxX-n),e=jt(e,s.minZ+n,s.maxZ-n),{x:t,z:e}}update(t,e){for(let n of this.characters)n.update(t,e);for(let n of this.updatables)n.userData.update(t,e);for(let n of this.particles)n.update(t,e);for(let n of this.hotspots)n.update(t,e);for(let n of this.creatures)n.update(t,e);this.bursts=this.bursts.filter(n=>{let s=n.update(t);return s&&(n.obj.parent?.remove(n.obj),n.dispose()),!s})}dispose(){this.disposed=!0;for(let t of this.hotspots)t.destroy();for(let t of this.particles)t.dispose();M.scene.remove(this.root),this.root.traverse(t=>{t.geometry&&!t.geometry.parameters&&t.geometry.dispose?.()})}},Rf={little:16773842,story:16763243,work:9422079,exit:16777215,quiet:14214911},jh=class{constructor(t,e){this.world=t,Object.assign(this,{id:e.id,label:e.label??"",kind:e.kind??"little",radius:e.radius??1.1,enabled:e.enabled??!0,done:!1,def:e}),this.anchor=e.anchor??null,this.offset=new C(...e.offset??[0,0,0]),this.pos=new C(e.x??0,e.y??0,e.z??0),this.obj=new rt;let n=Rf[this.kind]??Rf.little;this.glow=Ln(n,this.kind==="story"?1.5:1.15,.85),this.core=Ln(16777215,.35,.9),this.obj.add(this.glow,this.core),this.sparks=[];for(let s=0;s<5;s++){let r=Ln(n,.16,.8);this.obj.add(r),this.sparks.push({s:r,ph:s/5})}this.ring=new Mt(new aa(.42,.48,24),new Ye({color:n,transparent:!0,opacity:0,depthWrite:!1,fog:!1})),this.ring.rotation.x=-Math.PI/2,t.root.add(this.obj),t.root.add(this.ring),this.alpha=this.enabled?1:0,this.t=Math.random()*10,this.near=!1}get position(){if(this.anchor){let t=this.anchor.position??this.anchor;return new C(t.x,0,t.z).add(this.offset)}return this.pos}setEnabled(t){this.enabled=t}complete(){this.done=!0,this.enabled=!1}update(t,e){this.t+=t;let n=this.enabled&&!this.done?1:0;this.alpha+=(n-this.alpha)*Math.min(1,t*3);let s=this.position,r=this.def.height??(this.anchor?.height?this.anchor.height+.25:1);this.obj.position.set(s.x,r+Math.sin(this.t*2)*.08,s.z);let o=this.kind==="work"?.75+.25*Math.sign(Math.sin(this.t*6)):.85+Math.sin(this.t*2.5)*.15;this.glow.material.opacity=this.alpha*.85*o*(this.near?1.25:1),this.glow.scale.setScalar((this.kind==="story"?1.5:1.15)*(this.near?1.25:1)*(.95+.05*Math.sin(this.t*3))),this.core.material.opacity=this.alpha*.9;for(let a of this.sparks){let l=(this.t*.35+a.ph)%1,c=a.ph*Math.PI*2+this.t*.5;a.s.position.set(Math.cos(c)*.35,-.6+l*1.3,Math.sin(c)*.35),a.s.material.opacity=this.alpha*Math.sin(l*Math.PI)*.8}this.ring.position.set(s.x,.03,s.z),this.ring.material.opacity=this.alpha*(this.near?.55:.18),this.ring.scale.setScalar(1+(this.near?.15*Math.sin(this.t*4):0)),this.obj.visible=this.alpha>.01,this.ring.visible=this.obj.visible}destroy(){this.obj.parent?.remove(this.obj),this.ring.parent?.remove(this.ring)}},Qh=class{constructor(t,e,n){let s=_e(n*13);this.obj=new rt;let r=new He(.16,.12);r.translate(.08,0,0);let o=ge(t,{side:Te,emissive:t,emissiveIntensity:.2});this.l=new Mt(r,o),this.r=new Mt(r,o),this.r.scale.x=-1,this.l.rotation.x=this.r.rotation.x=-Math.PI/2;let a=new rt;a.add(this.l);let l=new rt;l.add(this.r),this.wl=a,this.wr=l,this.obj.add(a,l),this.area=e,this.ph=s.range(0,10),this.sp=s.range(.25,.45),this.obj.scale.setScalar(1.3)}update(t,e){let n=this.area,s=e*this.sp+this.ph,r=n.x+Math.sin(s)*n.r*.8+Math.sin(s*2.3)*.8,o=n.z+Math.cos(s*.8)*n.r*.8+Math.cos(s*1.7)*.8,a=.8+Math.sin(s*3.1)*.35,l=r-this.obj.position.x,c=o-this.obj.position.z;this.obj.position.set(r,a,o),this.obj.rotation.y=Math.atan2(l,c)-Math.PI/2;let h=Math.sin(e*18+this.ph)*1.1;this.wl.rotation.z=h,this.wr.rotation.z=-h}get position(){return this.obj.position}},tu=class{constructor(t,e){this.obj=new rt,this.birds=[];let n=_e(e);for(let s=0;s<t;s++){let r=new rt,o=new He(.3,.1);o.translate(.15,0,0);let a=ge(3816008,{side:Te}),l=new Mt(o,a),c=new Mt(o,a);c.scale.x=-1,l.rotation.x=c.rotation.x=-Math.PI/2;let h=new rt;h.add(l);let u=new rt;u.add(c),r.add(h,u),this.obj.add(r),this.birds.push({b:r,gl:h,gr:u,off:new C(n.range(-2,2),n.range(-.6,.6),n.range(-2,2)),ph:n.range(0,6)})}this.t=n.range(0,30),this.period=26}update(t,e){this.t+=t;let n=this.t%this.period/this.period,s=M.renderer.camTarget,r=s.x-30+n*60,o=s.z+12-n*24,a=7+Math.sin(n*6)*.5;for(let l of this.birds){l.b.position.set(r+l.off.x,a+l.off.y,o+l.off.z),l.b.rotation.y=-Math.PI/4-Math.PI/2+Math.PI;let c=Math.sin(this.t*10+l.ph)*.8;l.gl.rotation.z=c,l.gr.rotation.z=-c}}};var Vv=[8,9,8,7,7,6.5,3.5,6.5,9],Za=class{constructor(t){this.scenes=t,this.index=0,this.current=null,this.ctx=null,this.control=!1,this.inMoment=!1,this.moveTarget=null,this.pendingHotspot=null,this.stepT=0,this.clock=null,this.menuOpen=!1,this.reachedChapter=1}keepWindow(){return this.current?.keepWindow??Vv[this.current?.chapter??0]??7}setControl(t){this.control=t,t||(this.moveTarget=null,M.ui.setPrompt(null),M.player&&(M.player._playerMoving=!1))}renderNow(){M.renderer.render()}async start(t=0){this.index=t,this.runToken=(this.runToken||0)+1;let e=this.runToken;for(;this.index<this.scenes.length&&e===this.runToken;){let n=this.scenes[this.index];this.reachedChapter=Math.max(this.reachedChapter,n.chapter),M.album.forgetFrom(this.scenes.slice(this.index).map(s=>s.id)),M.album.save(this.index);try{localStorage.setItem("lm.reached",String(this.reachedChapter))}catch{}if(await this.runScene(n,e),e!==this.runToken)return;this.index++}}async runScene(t,e){let n=M.ui;this.setControl(!1),M.world&&M.world.dispose(),M.renderer.overrides={},M.timeScale=1;let s=new Ks({bounds:t.bounds??{minX:-9,maxX:9,minZ:-9,maxZ:9},name:t.id});M.world=s,M.player=null,this.current=t;let r={def:t,world:s,flags:M.state.flags,director:this};this.ctx=r,r.passTime=a=>this.passTime(a),r.hotspot=a=>s.getHotspot(a),r.done=a=>!!s.getHotspot(a)?.done,r.end=()=>{this.sceneOver=!0},this.sceneOver=!1,t.build(r);let o=M.renderer;o.camBounds=t.camBounds??null,o.zoomGoal=t.zoom??14,M.player?o.setFollow(M.player):o.setFollow(null),t.camAt&&(o.follow=null,o.camGoal.set(t.camAt[0],0,t.camAt[1])),o.snapCamera(),t.mood&&o.setMood(t.mood,0);for(let a of t.moments??[]){a.caption&&M.album.register(a.caption.id??a.id,t.chapter,Pe(a.caption.text??a.caption),t.id);let l=a.anchor?a.anchor(r):null,c=s.hotspot({id:a.id,label:a.label,kind:a.kind??"little",x:a.at?.[0],z:a.at?.[1],radius:a.radius??1.2,anchor:l,height:a.height,offset:a.offset,enabled:!1});c.m=a}if(this.refreshHotspots(),this.clock=t.clock?{seconds:t.clock.seconds,t:0,over:!1,ages:t.ages??[0,1]}:null,n.clock(!!this.clock),t.ages&&n.setClock(0,Math.floor(t.ages[0])),n.showHud(!0),t.music&&M.audio.music(t.music,{intensity:t.intensity??.4}),t.ambience&&M.audio.ambience(t.ambience),t.card&&(await n.fade(1,1.2,"#16121a"),await n.chapterCard(t.card)),t.intro?await this.safe(()=>t.intro(r)):await n.fadeIn(1.5),e===this.runToken&&!((t.moments?.length||t.freeRoam)&&(this.setControl(!0),t.hint&&!this.hintShown?.[t.id]&&n.hint(t.hint,9),await new Promise(a=>{this.sceneResolve=a}),e!==this.runToken))){this.setControl(!1);for(let a of s.hotspots)!a.done&&a.m?.caption&&M.album.lose(a.m.caption.id??a.m.id);t.outro&&await this.safe(()=>t.outro(r)),e===this.runToken&&n.clock(!1)}}async safe(t){try{await t()}catch(e){console.error("[scene error]",e)}}refreshHotspots(){let t=M.world;if(t)for(let e of t.hotspots){if(e.done)continue;let n=e.m;if(!n)continue;let s=!0;n.requires&&(s=n.requires.every(r=>t.getHotspot(r)?.done)),s&&n.when&&(s=!!n.when(this.ctx)),this.clock?.over&&(n.kind??"little")==="little"&&(s=!1),s&&!e.enabled?(e.setEnabled(!0),this.control&&M.audio.sfx("chime",{vol:.35})):!s&&e.enabled&&e.setEnabled(!1)}}async runMoment(t){if(this.inMoment)return;let e=this.current,n=this.ctx;this.inMoment=!0,this.setControl(!1),M.ui.hideHint(),t.near=!1;let s=t.m;s.once!==!1&&t.complete();try{await s.run(n,t)}catch(o){console.error("[moment error]",s.id,o)}if(s.once===!1&&t.setEnabled(!0),t.done=s.once!==!1,this.inMoment=!1,M.world!==n.world)return;if(this.refreshHotspots(),(e.final?n.world.getHotspot(e.final)?.done:!1)||this.sceneOver||e.exitWhen&&e.exitWhen(n)){this.finishFreeRoam();return}this.setControl(!0)}finishFreeRoam(){let t=this.sceneResolve;this.sceneResolve=null,t&&t()}passTime(t){this.clock&&(this.clock.t=Math.min(this.clock.seconds,this.clock.t+t))}async timeUp(){let t=this.current,e=this.ctx;this.clock.over=!0,this.inMoment=!0,this.setControl(!1);for(let s of M.world.hotspots)!s.done&&(s.m?.kind??"little")==="little"&&(s.setEnabled(!1),s.done=!0,s.m?.caption&&M.album.lose(s.m.caption.id??s.m.id));M.audio.sfx("lost",{vol:.6});try{t.onTimeUp?await t.onTimeUp(e):await M.ui.lower(t.timeUpText??"And just like that, the day was gone.")}catch(s){console.error(s)}if(this.inMoment=!1,this.refreshHotspots(),!M.world.hotspots.some(s=>!s.done&&s.enabled)||this.sceneOver){this.finishFreeRoam();return}this.setControl(!0)}update(t,e){let n=M.player,s=M.input,r=M.renderer;if(!M.world)return;if(this.clock&&!this.clock.over){this.control&&!this.inMoment&&(this.clock.t+=e);let d=jt(this.clock.t/this.clock.seconds,0,1),f=this.clock.ages,m=tn(f[0],f[1],d);M.ui.setClock(d,Math.floor(m),d>.85),d>=1&&!this.inMoment&&this.control&&this.timeUp()}if(!n)return;let o=null,a=1/0;if(this.control&&!this.inMoment){for(let d of M.world.hotspots){if(!d.enabled||d.done){d.near=!1;continue}let f=d.position,m=Fr(f.x,f.z,n.position.x,n.position.z);d.near=!1,m<d.radius&&m<a&&(a=m,o=d)}o&&(o.near=!0)}if(M.ui.promptTarget!==o&&M.ui.setPrompt(o),!this.control)return;if(M.auto&&!this.inMoment){let f=M.world.hotspots.find(m=>m.enabled&&!m.done&&(M.autoSkip?m.kind!=="little":!0)&&m.kind!=="work")??M.world.hotspots.find(m=>m.enabled&&!m.done);if(f){let m=f.position,x=M.world.resolve(m.x+.3,m.z+.3,n.radius);n.position.x=x.x,n.position.z=x.z,M.log?.push("moment: "+f.id),this.runMoment(f)}return}if(!this.inMoment&&o&&(s.pressed("act")||M.ui.promptClicked)){s.consume("act"),M.ui.promptClicked=!1,this.runMoment(o);return}if(M.ui.promptClicked=!1,this.pendingHotspot&&this.pendingHotspot===o){this.pendingHotspot=null,this.moveTarget=null,this.runMoment(o);return}for(let d of s.clicks){let f=null;for(let m of M.world.hotspots){if(!m.enabled||m.done)continue;let x=m.position.clone();x.y=m.def.height??1;let g=r.project(x);Math.hypot(g.x-d.x,g.y-d.y)<46&&(f=m)}if(f){this.pendingHotspot=f;let m=f.position;this.moveTarget=new C(m.x,0,m.z)}else{let m=r.unproject(d.x,d.y,0);m&&(this.moveTarget=m,this.pendingHotspot=null)}}if(s.pointer.down&&s.pointer.moved){let d=r.unproject(s.pointer.x,s.pointer.y,0);d&&(this.moveTarget=d,this.pendingHotspot=null)}let l=s.axis(),c=n.walkSpeed*(this.current.speedMul??1),h=0,u=0;if(l.x||l.y){let{fwd:d,right:f}=r.groundBasis();h=f.x*l.x+d.x*l.y,u=f.z*l.x+d.z*l.y;let m=Math.hypot(h,u);h/=m,u/=m,this.moveTarget=null,this.pendingHotspot=null}else if(this.moveTarget){let d=this.moveTarget.x-n.position.x,f=this.moveTarget.z-n.position.z,m=Math.hypot(d,f),x=this.pendingHotspot?Math.max(.2,this.pendingHotspot.radius*.6):.12;m<x?this.moveTarget=null:(h=d/m,u=f/m)}if(h||u){let d=n.position.x+h*c*t,f=n.position.z+u*c*t,m=M.world.resolve(d,f,n.radius),x=Math.hypot(m.x-n.position.x,m.z-n.position.z);this.moveTarget&&x<c*t*.1?(this.stuck=(this.stuck||0)+t,this.stuck>.4&&(this.moveTarget=null,this.stuck=0)):this.stuck=0,n.position.x=m.x,n.position.z=m.z,n.targetHeading=Math.atan2(h,u),n.speed=c,n._playerMoving=!0,this.stepT-=t*c,this.stepT<=0&&(this.stepT=n.age<1.3?.5:.62,M.audio.sfx("step",{surface:this.current.surface??"grass",vol:n.age<3?.5:1}))}else n._playerMoving=!1}toggleMenu(){if(M.album.open){M.album.hide();return}if(this.menuOpen)return this.closeMenu();if(!this.current)return;this.menuOpen=!0,M.paused=!0,M.audio.duck(.45);let t=document.querySelector("#menu");t.innerHTML="",t.classList.remove("hidden");let e=Tt("div","panel");e.appendChild(Tt("h2","","Paused"));let n=(a,l)=>{let c=Tt("button","",a);return c.addEventListener("click",l),e.appendChild(c),c};n("Continue",()=>this.closeMenu()),n("Album",()=>{this.closeMenu(),this.openAlbum()});let s=(a,l)=>{let c=Tt("label","",`<span>${a}</span>`),h=Tt("input");h.type="range",h.min=0,h.max=1,h.step=.05,h.value=M.audio.vol[l],h.addEventListener("input",()=>M.audio.setVolume(l,parseFloat(h.value))),c.appendChild(h),e.appendChild(c)};s("Music","music"),s("Sound","sfx"),s("Ambience","amb");let r=Tt("label","","<span>Auto-advance text</span>"),o=Tt("input");o.type="checkbox",o.checked=M.ui.settings.auto,o.addEventListener("change",()=>{M.ui.settings.auto=o.checked,M.ui.saveSettings()}),r.appendChild(o),e.appendChild(r),n("Replay this scene",()=>{this.closeMenu(),this.restartScene()}),n("Return to title",()=>{this.closeMenu(),this.onTitle&&this.onTitle()}),e.appendChild(Tt("div","small",`${Oh[this.current.chapter]??""}<br>Move: WASD / arrows / click \xB7 Interact: Space / click \xB7 Keep: hold Space`)),t.appendChild(e)}closeMenu(){this.menuOpen=!1,M.paused=!1,M.audio.duck(1),document.querySelector("#menu").classList.add("hidden")}openAlbum(){M.paused=!0,M.album.show(this.current?.chapter??1,{reachedChapter:this.reachedChapter,onClose:()=>{this.menuOpen||(M.paused=!1)}})}restartScene(){this.abort(),this.start(this.index)}abort(){this.runToken=(this.runToken||0)+1,this.sceneResolve=null,this.inMoment=!1,M.updaters.clear(),M.realUpdaters.clear(),M.ui.mgEl.innerHTML="",M.ui.bubblesEl.innerHTML="",M.ui.bubbles=[],M.ui.narrEl.innerHTML="",M.ui.lowerEl.innerHTML="",M.ui.choicesEl.classList.add("hidden"),M.ui.keepEl.classList.add("hidden"),M.ui.setPrompt(null),document.querySelector("#card").classList.add("hidden"),M.timeScale=1}};var Li=(i,t)=>M.ui.narrate(i,t),vt=(i,t)=>M.ui.lower(i,t),St=(i,t,e)=>M.ui.say(i,t,e),Di=(i,t)=>M.ui.say(M.player,i,{thought:!0,...t}),hi=(i,t)=>M.ui.choose(i,t),Cf=(i,t)=>M.ui.askText(i,t),Dn=(i=1.5,t="#000")=>M.ui.fadeOut(i,t),kn=(i=1.5)=>M.ui.fadeIn(i);var Oe=(i,t=2,e=null)=>M.renderer.setMood(i,t,e),Un=(i,t)=>M.audio.music(i,t),Xr=(i,t=2)=>M.audio.setIntensity(i,t),Xn=(i,t=3)=>M.audio.ambience(i,t),Pt=(i,t)=>M.audio.sfx(i,t);function ie(i,t,e=null,n=2){return M.renderer.cameraTo({x:i,y:0,z:t},e,n)}function xe(i=M.player,t=null,e=1.5){return M.renderer.setFollow(i),t?M.renderer.zoomTo(t,e):Promise.resolve()}function ki(i,t=2){return M.renderer.zoomTo(i,t)}function Pf(i){return new Promise(t=>{let e=n=>{i(n)&&(M.realUpdaters.delete(e),t())};M.realUpdaters.add(e)})}function eu(i){let t=0;return Pf(e=>(t+=e)>=i)}async function Qt(i,t,{window:e=null,chapter:n=null,focus:s=null,holdTime:r=1.5}={}){let o=M.album,a=n??M.director.current?.chapter??0;if(t=Pe(t),o.register(i,a,t,M.director.current?.id),o.has(i))return!0;let l=e??M.director.keepWindow(),c=M.ui,h=M.renderer,u=c.keepEl,d=u.querySelector(".fill"),f=u.querySelector(".timer div"),m=u.querySelector(".msg");m.innerHTML=M.input.lastDevice==="touch"?"Hold the screen to keep this moment":"Hold <b>Space</b> to keep this moment",u.classList.remove("hidden","lost","show"),u.offsetWidth,u.classList.add("show"),d.style.strokeDashoffset=251.3,Pt("chime");let x=M.timeScale;$e(.6,v=>{M.timeScale=tn(x,.3,v)}),h.pulse("saturation",1.22,.8),h.pulse("dream",.35,.8),h.pulse("vignette",-.12,.8),h.pulse("warmth",.15,.8);let g=M.audio.intensityTarget;M.audio.setIntensity(Math.min(1,g+.3),1.2),s&&(h.overrides.focusX=s.x,h.overrides.focusY=s.y);let p=0,_=l,y=!1;if(M.input.endFrame(),await Pf(v=>M.auto?(y=M.autoKeep!==!1,!0):(M.input.holding()?p+=v/r:p=Math.max(0,p-v*.6),p<=.001&&(_-=v),d.style.strokeDashoffset=251.3*(1-jt(p,0,1)),f.style.transform=`scaleX(${jt(_/l,0,1)})`,p>=1?(y=!0,!0):_<=0)),y){M.director.renderNow();let v=h.snapshot(360,270);c.flash(.9),Pt("shutter"),Pt("keep");let D=M.player?M.player.position.clone().add(new C(0,1,0)):h.camTarget.clone();M.world?.burst(D,{count:50,color:16770224}),o.keep(i,t,a,v),u.classList.remove("show"),u.classList.add("hidden"),c.flyPolaroid(v,t),await eu(.4)}else u.classList.add("lost"),Pt("lost"),o.lose(i),await eu(1.6),u.classList.remove("show","lost"),u.classList.add("hidden");return $e(1.2,v=>{M.timeScale=tn(.3,x===.3?1:x,v)}),h.pulse("saturation",1,1.5),h.pulse("dream",0,1.5),h.pulse("vignette",0,1.5),h.pulse("warmth",0,1.5),delete h.overrides.focusX,delete h.overrides.focusY,M.audio.setIntensity(g,3),await eu(y?1:.3),y}function nu(i,t,e=null){let n=e??M.director.current?.chapter??0;M.album.register(i,n,Pe(t),M.director.current?.id),M.album.lose(i)}async function Ui(i,t=2,e=.25){for(let n=0;n<t;n++)await $e(.35,s=>{i.extraY=Math.sin(s*Math.PI)*e},s=>s);i.extraY=0}function Ni(i){let t=Tt("div","mgbox");return i&&t.appendChild(Tt("div","mglabel",i)),M.ui.mgEl.appendChild(t),t}function Fi(i){i.style.transition="opacity 0.5s",i.style.opacity="0",setTimeout(()=>i.remove(),520)}var Gv=()=>M.input.lastDevice==="touch"?"Hold the screen":"Hold Space",Wv=()=>M.input.lastDevice==="touch"?"Tap":"Press Space";async function Oi({label:i=null,seconds:t=3,onProgress:e=null,drain:n=.35}={}){if(M.auto){e&&e(1,!0,.1),await Ht(.3);return}let s=Ni(i??Gv()),r=Tt("div","meter"),o=Tt("div");r.appendChild(o),s.appendChild(r);let a=0;await en(l=>(M.input.holding()?a+=l/t:a-=l*n/t,a=jt(a,0,1),o.style.width=a*100+"%",e&&e(a,M.input.holding(),l),a>=1)),Fi(s)}async function js({label:i=null,count:t=5,onTap:e=null,timeout:n=null}={}){if(M.auto){for(let u=1;u<=t;u++)e&&e(u),await Ht(.05);return t}let s=Ni(i??Wv()),r=Tt("div","mgkeys"),o=Tt("div","mgkey",M.input.lastDevice==="touch"?"Tap":"Space");r.appendChild(o),s.appendChild(r);let a=Tt("div","counter",`0 / ${t}`);s.appendChild(a);let l=0,c=0,h=!1;return o.addEventListener("pointerdown",u=>{u.stopPropagation(),h=!0}),await en(u=>{c+=u;let d=M.input;return(d.pressed("act")||d.pressed("pointer")||h)&&(h=!1,d.consume("act"),d.consume("pointer"),l++,o.classList.remove("on"),o.offsetWidth,o.classList.add("on"),setTimeout(()=>o.classList.remove("on"),120),a.textContent=`${l} / ${t}`,e&&e(l)),l>=t||n&&c>n}),Fi(s),l}async function Qs({label:i="Press Space with the music",hits:t=6,period:e=null,onlyDownbeat:n=!1,onHit:s=null,onPulse:r=null,window:o=.22,maxPulses:a=null}={}){if(M.auto){for(let y=1;y<=t;y++)r&&r(y),s&&s(y,1),await Ht(.1);return t}let l=Ni(i),c=Tt("div","pulse"),h=Tt("div","dot"),u=Tt("div","ring");c.appendChild(h),c.appendChild(u),l.appendChild(c);let d=Tt("div","hearts");l.appendChild(d);for(let y=0;y<t;y++)d.appendChild(Tt("span","","\u25CB"));let f=0,m=!1,x=0,g=-1,p=M.realTime;c.addEventListener("pointerdown",y=>{y.stopPropagation(),m=!0});let _=!1;return await en(()=>{let y,v,D;if(e){let L=M.realTime-p;y=L%e/e,D=Math.floor(L/e),v=Math.min(y,1-y)*e}else{let L=M.audio.beatInfo(),S=n?L.dur*L.beats:L.dur;n?(y=(L.barBeat+L.phase)/L.beats,D=Math.floor(L.beat/L.beats)):(y=L.phase,D=L.beat),v=Math.min(y,1-y)*S}D!==g&&(g=D,x++,_=!1,r&&r(x));let E=1+(1-y)*.9;u.style.transform=`scale(${E})`,u.style.opacity=.3+y*.7,h.style.transform=`scale(${.8+(v<o?.4:0)})`;let A=M.input;return(A.pressed("act")||A.pressed("pointer")||m)&&(m=!1,A.consume("act"),A.consume("pointer"),v<o&&!_?(_=!0,f++,d.children[f-1].textContent="\u25CF",c.classList.remove("hit"),c.offsetWidth,c.classList.add("hit"),M.audio.sfx("good",{deg:[1,3,5,8,5,3,1,8][f%8]}),s&&s(f,1-v/o)):(M.audio.sfx("miss"),s&&s(f,-1))),f>=t||a&&x>=a}),Fi(l),f}async function $a({label:i="Keep your balance \u2014 \u2190 \u2192",seconds:t=4,difficulty:e=1,onUpdate:n=null}={}){if(M.auto){n&&n(0,1,!0),await Ht(.3);return}let s=Ni(i),r=Tt("div","balance");r.innerHTML='<div class="bar"></div><div class="zone"></div><div class="ball"></div>',s.appendChild(r);let o=Tt("div","touchpads"),a=Tt("div","mgkey","\u2190"),l=Tt("div","mgkey","\u2192");o.appendChild(a),o.appendChild(l),s.appendChild(o);let c=0,h=y=>v=>{v.stopPropagation(),c=y};a.addEventListener("pointerdown",h(-1)),l.addEventListener("pointerdown",h(1));let u=()=>{c=0};window.addEventListener("pointerup",u);let d=Tt("div","meter"),f=Tt("div");d.appendChild(f),s.appendChild(d);let m=r.querySelector(".ball"),x=.1,g=0,p=0,_=0;await en(y=>{_+=y;let v=M.input.axis().x+c,D=Math.sin(_*1.7)*.6+Math.sin(_*3.1+1)*.4;g+=(D*.55*e+x*.9*e+v*2.4)*y,g*=Math.pow(.15,y),x=jt(x+g*y*1.6,-1,1),Math.abs(x)>=1&&(g*=-.3);let E=Math.abs(x)<.24;return p=jt(p+(E?y/t:-y/t*.25),0,1),m.style.left=(x+1)/2*100+"%",f.style.width=p*100+"%",n&&n(x,p,E),p>=1}),window.removeEventListener("pointerup",u),Fi(s)}var Xv={left:"\u2190",right:"\u2192",up:"\u2191",down:"\u2193"};async function tr({label:i="Follow along",keys:t=["left","right","up"],onStep:e=null}={}){if(M.auto){for(let c=0;c<t.length;c++)e&&e(c),await Ht(.1);return}let n=Ni(i),s=Tt("div","mgkeys");n.appendChild(s);let r=t.map(c=>{let h=Tt("div","mgkey",Xv[c]??c);return s.appendChild(h),h}),o=0,a=null;r.forEach((c,h)=>c.addEventListener("pointerdown",u=>{u.stopPropagation(),a=h}));let l=()=>r.forEach((c,h)=>{c.classList.toggle("on",h===o),c.classList.toggle("done",h<o)});l(),await en(()=>{let c=M.input,h=null;for(let u of["left","right","up","down"])c.pressed(u)&&(h=u);return a!==null&&(h=a===o?t[o]:"__wrong",a=null),h&&(h===t[o]?(M.audio.sfx("good",{deg:[1,2,3,5,6,8,9,10][o%8]}),e&&e(o),o++,l()):(M.audio.sfx("miss"),r[o].classList.remove("wrong"),r[o].offsetWidth,r[o].classList.add("wrong"))),o>=t.length}),await Ht(.3),Fi(n)}async function Je({label:i="Just be here. Don't press anything.",seconds:t=6,onProgress:e=null}={}){if(M.auto){e&&e(1,.1),await Ht(.3);return}let n=Ni(i),s=Tt("div","still");s.innerHTML='<svg viewBox="0 0 100 100"><circle class="track" cx="50" cy="50" r="40"/><circle class="fill" cx="50" cy="50" r="40"/></svg>',n.appendChild(s);let r=s.querySelector(".fill"),o=0,a=0;M.input.endFrame(),await en(l=>{let c=M.input;return(c.anyPress||c.isDown("left")||c.isDown("right")||c.isDown("up")||c.isDown("down"))&&o>.3&&(o=Math.max(0,o-1.5),a++%2===0&&(n.querySelector(".mglabel").textContent="Shh\u2026 there's no hurry.")),o+=l,r.style.strokeDashoffset=251.3*(1-jt(o/t,0,1)),e&&e(jt(o/t,0,1),l),o>=t}),Fi(n)}async function qr({label:i=null,items:t,radius:e=.6,onCollect:n=null,timeLimit:s=null,needed:r=null,showCount:o=!0}={}){let a=r??t.length;if(M.auto){let d=0;for(let f of t){if(d>=a)break;let m=f.obj?f.obj.position:f;M.player.position.x=m.x,M.player.position.z=m.z,f.got=!0,d++,n&&n(f,d),await Ht(.05)}return d}let l=Ni(i),c=Tt("div","counter",`0 / ${a}`);o&&l.appendChild(c),M.director.setControl(!0);let h=0,u=0;return await en(d=>{u+=d;let f=M.player.position;for(let m of t){if(m.got)continue;let x=m.obj?m.obj.position:m,g=m.r??e;Math.hypot(x.x-f.x,x.z-f.z)<g+M.player.radius&&(m.got=!0,h++,c.textContent=`${h} / ${a}`,M.audio.sfx("good",{deg:[1,3,5,6,8,10,12][h%7]}),n&&n(m,h))}return h>=a||s&&u>s}),M.director.setControl(!1),Fi(l),h}async function Ja({target:i,dist:t=1.6,seconds:e=8,label:n="Stay close",onProgress:s=null}={}){if(M.auto){s&&s(1,!0,.1),await Ht(.5);return}let r=Ni(n),o=Tt("div","meter"),a=Tt("div");o.appendChild(a),r.appendChild(o),M.director.setControl(!0);let l=0;await en(c=>{let h=i.position??i,d=Math.hypot(h.x-M.player.position.x,h.z-M.player.position.z)<t;return l=jt(l+(d?c/e:-c/e*.15),0,1),a.style.width=l*100+"%",s&&s(l,d,c),l>=1}),M.director.setControl(!1),Fi(r)}var Yr=[0,1,2,4,7,10,13,16,22,40,60,80],Ka={leg:[.12,.17,.22,.32,.42,.52,.64,.74,.78,.78,.76,.7],torso:[.2,.22,.26,.32,.38,.44,.5,.56,.6,.62,.6,.56],width:[.17,.18,.19,.2,.21,.23,.25,.28,.3,.32,.31,.29],head:[.15,.155,.16,.165,.17,.17,.17,.17,.17,.17,.17,.165],arm:[.14,.17,.2,.26,.32,.38,.44,.5,.54,.54,.52,.5]};function Zr(i,t){let e=jt(t,0,80);for(let n=0;n<Yr.length-1;n++)if(e<=Yr[n+1]){let s=(e-Yr[n])/(Yr[n+1]-Yr[n]);return tn(Ka[i][n],Ka[i][n+1],s)}return Ka[i][Ka[i].length-1]}var qv=(()=>{let i=new cn(1,.9,1,6);return i.translate(0,-.5,0),i})(),If=(()=>{let i=new cn(.85,1,1,7);return i.translate(0,.5,0),i})(),Lf=new Ve(1,1),Yv=new Ve(1,0),Df=new oi(1,5,4),$r=class{constructor(t={}){this.opts={age:30,skin:k.skin[0],hair:5913386,hairStyle:"short",shirt:k.blue,pants:k.navy,shoes:3813424,dress:!1,name:"",glasses:!1,beard:!1,scarf:null,hat:null,...t},this.name=this.opts.name,this.root=new rt,this.root.rotation.order="YXZ",this.root.userData.character=this,this.position=this.root.position,this.heading=0,this.targetHeading=0,this.speed=0,this.walkPhase=0,this.pose="idle",this.poseW={},this.anim={},this.moveTarget=null,this.path=null,this.followTarget=null,this.carried=null,this.carriedBy=null,this.extraY=0,this.lookTarget=null,this.mood="neutral",this.blinkT=Math.random()*3,this._build(),this.setAge(this.opts.age),M.world?.addCharacter(this)}_build(){let t=this.opts;this.mSkin=is(t.skin),this.mHair=is(t.hair),this.mShirt=is(t.shirt),this.mPants=is(t.pants),this.mShoe=ge(t.shoes);let e=this.root;this.body=new rt,e.add(this.body),this.torsoPivot=new rt,this.body.add(this.torsoPivot),this.torso=new Mt(If,this.mShirt),this.torsoPivot.add(this.torso),this.hips=new Mt(If,t.dress?this.mShirt:this.mPants),this.body.add(this.hips),this.skirt=null,t.dress&&(this.skirt=new Mt(new Ei(1,1,7,1,!0),this.mShirt),this.skirt.material.side=Te,this.body.add(this.skirt)),this.headPivot=new rt,this.torsoPivot.add(this.headPivot),this.head=new Mt(Lf,this.mSkin),this.headPivot.add(this.head),this.eyes=[];for(let s of[-1,1]){let r=new Mt(Df,ge(2761252,{roughness:.4}));this.head.add(r),r.position.set(s*.36,.08,.86),r.scale.set(.11,.14,.08),this.eyes.push(r);let o=new Mt(Df,ge(15900832));this.head.add(o),o.position.set(s*.55,-.2,.74),o.scale.set(.15,.09,.06)}if(this.hair=new rt,this.head.add(this.hair),this._buildHair(),t.glasses){for(let r of[-1,1]){let o=new Mt(new Ai(.2,.04,4,10),ge(3355443));o.position.set(r*.36,.08,.92),this.head.add(o)}let s=new Mt(new Ze(.2,.04,.04),ge(3355443));s.position.set(0,.1,.94),this.head.add(s)}if(t.beard){let s=new Mt(Lf,this.mHair);s.scale.set(.7,.45,.5),s.position.set(0,-.55,.45),this.head.add(s)}if(this.armL=this._limb(this.torsoPivot,this.mShirt,!0),this.armR=this._limb(this.torsoPivot,this.mShirt,!0),this.legL=this._limb(this.body,this.mPants,!1),this.legR=this._limb(this.body,this.mPants,!1),t.scarf&&(this.scarfM=new Mt(new Ai(1,.35,4,8),ge(t.scarf)),this.scarfM.rotation.x=Math.PI/2,this.torsoPivot.add(this.scarfM)),t.hat){this.hatM=new rt;let s=new Mt(new oi(1,7,4,0,Math.PI*2,0,Math.PI/2),ge(t.hat));this.hatM.add(s);let r=new Mt(new Ve(.25,0),ge(16777215));r.position.y=1,this.hatM.add(r),this.hatM.position.y=.25,this.hatM.scale.setScalar(1.08),this.head.add(this.hatM)}this.cane=null,this.root.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!1)});let n=new Mt(new zs(1,12),new Ye({color:0,transparent:!0,opacity:.12,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.012,this.root.add(n),this.blob=n}_buildHair(){let t=this.opts;for(;this.hair.children.length;)this.hair.remove(this.hair.children[0]);let e=(s,r,o,a,l,c,h,u=0)=>{let d=new Mt(s,this.mHair);return d.scale.set(r,o,a),d.position.set(l,c,h),d.rotation.x=u,d.castShadow=!0,this.hair.add(d),d},n=new oi(1,8,5,0,Math.PI*2,0,Math.PI*.55);switch(t.hairStyle){case"none":break;case"baby":e(new Ve(.25,0),1,1.4,1,0,.95,.15);break;case"bald":e(n,1.03,.5,1.03,0,-.1,-.08);break;case"long":e(n,1.08,1,1.1,0,0,-.04),e(new Ze(1,1,1),1.9,1.4,.5,0,-.6,-.65);break;case"ponytail":e(n,1.07,.95,1.08,0,0,-.05),e(new Ve(.4,0),1,1.6,1,0,-.1,-1.15);break;case"bun":e(n,1.07,.95,1.08,0,0,-.05),e(new Ve(.42,0),1,1,1,0,.75,-.6);break;case"curly":for(let s=0;s<9;s++){let r=s/9*Math.PI*2;e(new Ve(.36,0),1,1,1,Math.cos(r)*.72,.45+s%2*.15,Math.sin(r)*.72-.15)}e(new Ve(.55,0),1,1,1,0,.85,-.1);break;case"bob":e(n,1.1,1,1.12,0,0,-.03),e(new cn(1,1.05,1,8,1,!0),1.08,.7,1.1,0,-.25,-.05);break;default:e(n,1.06,.8,1.08,0,.05,-.06),e(new Ze(1,1,1),1.2,.3,.4,0,.62,.62,.4)}this.hair.children.forEach(s=>{s.geometry.type==="SphereGeometry"&&s.material&&(s.material.side=Te)})}_limb(t,e,n){let s=new rt;t.add(s);let r=new Mt(qv,e);s.add(r);let o=n?this.mSkin:this.mShoe,a=new Mt(Yv,o);return s.add(a),{pivot:s,upper:r,end:a,isArm:n}}setAge(t){this.age=t;let e=Zr("leg",t),n=Zr("torso",t),s=Zr("width",t),r=Zr("head",t)*(t<3?1.25:1),o=Zr("arm",t);this.dims={leg:e,torso:n,w:s,hr:r,arm:o};let a=e;this.body.position.y=a,this.hips.scale.set(s*.9,.12,s*.7),this.hips.position.y=-.06,this.torsoPivot.position.y=.04,this.torso.scale.set(s,n,s*.72),this.skirt&&(this.skirt.scale.set(s*1.5,e*.65,s*1.25),this.skirt.position.y=-e*.25),this.headPivot.position.y=n+r*.85,this.head.scale.setScalar(r);for(let[u,d]of[[this.armL,-1],[this.armR,1]])u.pivot.position.set(d*(s+.035),n*.88,0),u.upper.scale.set(.055+s*.12,o,.055+s*.12),u.end.scale.setScalar(.055+s*.08),u.end.position.y=-o-.02;for(let[u,d]of[[this.legL,-1],[this.legR,1]])u.pivot.position.set(d*s*.45,0,0),u.upper.scale.set(.06+s*.17,e,.06+s*.17),u.end.scale.set(.07+s*.1,.05+s*.06,.1+s*.15),u.end.position.set(0,-e+.02,.04);this.scarfM&&(this.scarfM.scale.set(s*.95,s*.85,s*.6),this.scarfM.position.y=n*.98),this.blob.scale.setScalar(s*1.6+.08);let l=new Ct(this.opts.hair),c=new Ct(14276306),h=jt((t-48)/25,0,.92);return this.mHair.color.copy(l).lerp(c,h),this.height=a+n+r*1.9,this.radius=Math.max(.18,s*1.15),this.hunch=jt((t-65)/15,0,1)*.22,this}setOutfit({shirt:t,pants:e,hair:n,hairStyle:s}={}){t!==void 0&&this.mShirt.color.setHex(t),e!==void 0&&this.mPants.color.setHex(e),n!==void 0&&(this.opts.hair=n,this.setAge(this.age)),s!==void 0&&(this.opts.hairStyle=s,this._buildHair(),this.root.traverse(r=>{r.isMesh&&r!==this.blob&&(r.castShadow=!0)}))}giveCane(t=!0){if(t&&!this.cane){this.cane=new rt;let e=new Mt(new cn(.018,.018,.85,4),ge(k.woodDark));e.position.y=-.38,this.cane.add(e);let n=new Mt(new Ai(.06,.018,3,8,Math.PI),ge(k.woodDark));n.position.set(.06,.04,0),this.cane.add(n),this.armR.end.add(this.cane),this.cane.scale.setScalar(1/this.armR.end.scale.x)}else!t&&this.cane&&(this.cane.parent.remove(this.cane),this.cane=null)}place(t,e,n=null){return this.position.set(t,0,e),n!==null&&(this.heading=this.targetHeading=n),this.moveTarget=null,this.path=null,this}face(t,e){return this.targetHeading=Math.atan2(t-this.position.x,e-this.position.z),this}faceChar(t){return this.face(t.position.x,t.position.z)}faceNow(t,e){return this.face(t,e),this.heading=this.targetHeading,this}get walkSpeed(){if(this._speedOverride)return this._speedOverride;let t=this.age;return t<1.3?1.1:t<3?1.5:t<10?3:t<18?3.4:t<60?2.9:1.6}set walkSpeed(t){this._speedOverride=t}walkTo(t,e,n={}){return new Promise(s=>{this.moveTarget={x:t,z:e,speed:n.speed??this.walkSpeed,resolve:s,stopDist:n.stopDist??.05,run:n.run}})}async walkPath(t,e={}){for(let[n,s]of t)await this.walkTo(n,s,e)}walkToChar(t,e=.8,n={}){let s=this.position.x-t.position.x,r=this.position.z-t.position.z,o=Math.hypot(s,r)||1;return this.walkTo(t.position.x+s/o*e,t.position.z+r/o*e,n).then(()=>this.faceChar(t))}stop(){if(this.moveTarget){let t=this.moveTarget.resolve;this.moveTarget=null,t&&t()}}follow(t,e=1.2){this.followTarget=t?{c:t,dist:e}:null}lookAt(t){this.lookTarget=t}setPose(t,e={}){return this.pose=t,this.anim=e,this}pickUp(t){this.carried=t,t.carriedBy=this,t.moveTarget=null,t.followTarget=null,t.setPose("carried")}putDown(t,e){let n=this.carried;n&&(this.carried=null,n.carriedBy=null,n.root.rotation.set(0,0,0),t!==void 0?n.place(t,e,this.heading):n.place(this.position.x+Math.sin(this.heading)*.6,this.position.z+Math.cos(this.heading)*.6,this.heading),n.extraY=0,n.setPose("idle"))}headWorld(){let t=new C;return this.head.getWorldPosition(t),t.y+=this.dims.hr*1.4,t}update(t,e){let n=!1;if(this.carriedBy){let s=this.carriedBy,r=new C(0,0,0),o=s.heading,a=s.pose==="carryHigh"?.12:.24;r.set(Math.sin(o)*a,s.body.position.y+s.dims.torso*.45-this.dims.leg*.3,Math.cos(o)*a),this.position.copy(s.position).add(r),this.heading=this.targetHeading=o+(s.pose==="carryHigh"?0:Math.PI*.5)}else if(this.moveTarget){let s=this.moveTarget,r=s.x-this.position.x,o=s.z-this.position.z,a=Math.hypot(r,o);if(a<=Math.max(s.stopDist,.02))this.moveTarget=null,s.resolve&&s.resolve();else{let l=Math.min(s.speed*t,a);this.position.x+=r/a*l,this.position.z+=o/a*l,this.targetHeading=Math.atan2(r,o),this.speed=s.speed,n=!0}}else if(this.followTarget){let{c:s,dist:r}=this.followTarget,o=Fr(this.position.x,this.position.z,s.position.x,s.position.z);if(o>r){let a=Math.min(Math.max(this.walkSpeed,s.speed||0)*t*(o>r*2?1.4:1),o-r),l=s.position.x-this.position.x,c=s.position.z-this.position.z;this.position.x+=l/o*a,this.position.z+=c/o*a,this.targetHeading=Math.atan2(l,c),this.speed=this.walkSpeed,n=!0}}if(!n&&!this._playerMoving&&(this.speed=ai(this.speed,0,10,t)),this.heading=Ph(this.heading,this.targetHeading,1-Math.exp(-10*t)),this.carriedBy?this.root.rotation.y=this.heading:this.root.rotation.y=this.heading,!this.carriedBy){let s=this.pose==="lie"||this.pose==="lieBack"||this.pose==="sleep";this._lift=ai(this._lift||0,s?this.dims.w*.75:0,10,t),this.position.y=this.extraY+this._lift}this._animate(t,e)}_animate(t,e){let n=this.dims,s=this.speed>.15,r=this.pose,o=this.age<1.3;r==="idle"&&s&&(r=o?"crawl":"walk"),r==="crawl"&&!s&&(r="crawlIdle"),this.walkPhase+=t*(this.speed/Math.max(.25,n.leg))*1.7;let a=this.walkPhase,l=n.leg,c=0,h=this.hunch,u=0,d=0,f=0,m=0,x=.08,g=-.08,p=0,_=0,y=0,v=0,D=0,E=0,A=this.anim,L=Math.sin(e*2)*.01;switch(r){case"walk":{let U=Math.sin(a),Y=jt(this.speed/3,.25,.75);p=U*Y,_=-U*Y,f=-U*Y*.8,m=U*Y*.8,l=n.leg-Math.abs(Math.cos(a))*.03+.015,h+=.05+(this.speed>3.2?.12:0),this.cane&&(m=-.3+U*.15);break}case"crawl":case"crawlIdle":{let U=r==="crawl"?Math.sin(a*.8):0;c=1.35,l=n.leg*.55+.02,u=-1.15,f=-1.35+U*.45,m=-1.35-U*.45,p=-1.55-U*.35,_=-1.55+U*.35,E=.02;break}case"sitGround":l=n.leg*.12+.02,p=_=-1.45,y=.12,v=-.12,f=m=A.reach?-2.7:-.4,A.reach&&(x=.25,g=-.25),h+=.05+L-(A.look?.15:0),u=A.look??0;break;case"sit":l=A.h??.45,p=_=-1.45,f=m=-.5,h+=L,E=-.1;break;case"lie":D=-Math.PI/2,l=.12,f=m=-.1,x=.4,g=-.4;break;case"lieBack":D=-Math.PI/2,l=.12,x=1.4,g=-1.4,y=.25,v=-.25;break;case"kneel":l=n.leg*.55,p=-1.5,_=.1,h+=.1,f=m=-.6;break;case"kneelOpen":l=n.leg*.55,p=-1.5,_=.1,h+=.05,f=m=-1.2,x=.6,g=-.6;break;case"crouch":l=n.leg*.45,p=_=-1.2,h+=.5,f=m=-1;break;case"reach":f=m=-2.8,x=.2,g=-.2,u=-.3;break;case"reachForward":f=m=-1.4;break;case"armsOpen":f=m=-1.1,x=.9,g=-.9;break;case"hug":f=m=-1.35,x=-.35,g=.35,h+=.12;break;case"carry":case"carryHigh":f=m=-1,x=-.5,g=.5,h-=.08;break;case"carried":l=n.leg*.4,p=_=-1.2,f=m=-.6;break;case"wave":m=-2.6+Math.sin(e*9)*0,g=-.5+Math.sin(e*8)*.35;break;case"point":m=-1.5;break;case"dance":{let U=Math.sin(e*(A.speed??4));l=n.leg+Math.abs(U)*.05,f=-1.6+U*.4,m=-1.6-U*.4,x=.5,g=-.5,p=U*.3,_=-U*.3;break}case"waltz":{f=-1.3,x=.5,m=-1.6,g=-.2;let U=Math.sin(e*3);p=U*.25,_=-U*.25;break}case"jump":{let U=Math.abs(Math.sin(e*5));l=n.leg+U*.25,f=m=-2.4,x=.3,g=-.3,p=_=-U*.5;break}case"cry":u=.45,f=m=-1.9,x=-.6,g=.6,h+=.2+Math.sin(e*6)*.03;break;case"laugh":u=-.35+Math.sin(e*14)*.06,h+=Math.sin(e*14)*.04,f=m=-.3;break;case"think":m=-2.2,g=.6,u=.15;break;case"push":{let U=A.phase??Math.sin(e*2);f=m=-1.3-U*.3,h+=.2+U*.1,p=-.3,_=.3;break}case"swing":l=A.h??.5,p=_=-1.2+(A.kick??0),f=m=-2.6,x=.15,g=-.15;break;case"bike":{let U=Math.sin(a);l=A.h??.68,p=-1.2+U*.6,_=-1.2-U*.6,f=m=-1.15,h+=.35;break}case"sleep":D=-Math.PI/2,l=.12,f=m=-.2,x=.2,g=-.2,u=0;break;case"rock":l=.47,p=_=-1.45,f=m=-1,x=-.5,g=.5,h-=.15;break;case"read":l=A.h??.45,p=_=-1.45,f=m=-1,x=-.3,g=.3,u=.35;break;case"stand":default:h+=L;break}let S=1-Math.exp(-12*t),w=this._j||(this._j={bodyY:l,bodyRX:c,torsoRX:h,headRX:u,headRY:d,aL:f,aR:m,aLz:x,aRz:g,lL:p,lR:_,lLz:y,lRz:v,rootRX:D,bodyZ:E}),P=(U,Y)=>{w[U]=tn(w[U],Y,S)};P("bodyY",l),P("bodyRX",c),P("torsoRX",h),P("headRX",u),P("aL",f),P("aR",m),P("aLz",x),P("aRz",g),P("lL",p),P("lR",_),P("lLz",y),P("lRz",v),P("rootRX",D),P("bodyZ",E);let H=0;if(this.lookTarget){let U=this.lookTarget.position??this.lookTarget,Y=Math.atan2(U.x-this.position.x,U.z-this.position.z)-this.heading;H=jt(Math.atan2(Math.sin(Y),Math.cos(Y)),-1.1,1.1)}w.headRY=tn(w.headRY,H,S),this.body.position.y=w.bodyY,this.body.position.z=w.bodyZ,this.body.rotation.x=w.bodyRX,this.root.rotation.x=w.rootRX+(this.lean||0),this.root.rotation.z=this.tilt||0,this.torsoPivot.rotation.x=w.torsoRX,this.headPivot.rotation.x=w.headRX,this.headPivot.rotation.y=w.headRY,this.armL.pivot.rotation.x=w.aL,this.armR.pivot.rotation.x=w.aR,this.armL.pivot.rotation.z=w.aLz,this.armR.pivot.rotation.z=w.aRz,this.legL.pivot.rotation.x=w.lL,this.legR.pivot.rotation.x=w.lR,this.legL.pivot.rotation.z=w.lLz,this.legR.pivot.rotation.z=w.lRz,this.blinkT-=t;let N=this.pose==="sleep"||this.blinkT<.12;this.blinkT<0&&(this.blinkT=2+Math.random()*4);for(let U of this.eyes)U.scale.y=N?.02:.14;this.blob.visible=w.rootRX>-.5&&!this.carriedBy}remove(){M.world?.removeCharacter(this),this.root.parent?.remove(this.root)}},ja=class{constructor({color:t=14198890,spot:e=16049872,size:n=1,age:s=3}={}){this.root=new rt,this.position=this.root.position,this.size=n,this.age=s,this.heading=0,this.targetHeading=0,this.speed=0,this.phase=0,this.moveTarget=null,this.followTarget=null,this.pose="idle";let r=is(t),o=ge(e),a=ge(3811876),l=n;this.bodyG=new rt,this.root.add(this.bodyG);let c=new Mt(new Ve(.25,0),r);c.scale.set(.9,.8,1.5),c.position.y=.32,this.bodyG.add(c);let h=new Mt(new Ve(.18,0),o);h.scale.set(.9,.7,1.6),h.position.set(0,.24,.02),this.bodyG.add(h),this.headG=new rt,this.headG.position.set(0,.48,.32),this.bodyG.add(this.headG);let u=new Mt(new Ve(.17,0),r);this.headG.add(u);let d=new Mt(new Ze(.14,.11,.16),o);d.position.set(0,-.04,.15),this.headG.add(d);let f=new Mt(new Ve(.035,0),a);f.position.set(0,-.01,.24),this.headG.add(f);for(let x of[-1,1]){let g=new Mt(new oi(.025,5,4),a);g.position.set(x*.075,.05,.13),this.headG.add(g);let p=new Mt(new Ze(.07,.16,.12),is(t));p.material.color.multiplyScalar(.8),p.position.set(x*.15,0,-.02),p.rotation.z=x*.3,this.headG.add(p)}this.tail=new rt,this.tail.position.set(0,.42,-.36),this.bodyG.add(this.tail);let m=new Mt(new cn(.025,.04,.25,4),r);m.position.y=.12,this.tail.add(m),this.tail.rotation.x=-.6,this.legs=[];for(let[x,g]of[[-.11,.2],[.11,.2],[-.11,-.2],[.11,-.2]]){let p=new rt;p.position.set(x,.26,g),this.bodyG.add(p);let _=new Mt(new cn(.04,.035,.26,4),r);_.position.y=-.13,p.add(_),this.legs.push(p)}this.root.scale.setScalar(l),ee(this.root,!0,!1),this.wag=1,M.world?.addCharacter(this)}place(t,e,n=null){return this.position.set(t,0,e),n!==null&&(this.heading=this.targetHeading=n),this}face(t,e){return this.targetHeading=Math.atan2(t-this.position.x,e-this.position.z),this}faceChar(t){return this.face(t.position.x,t.position.z)}walkTo(t,e,n={}){return new Promise(s=>{this.moveTarget={x:t,z:e,speed:n.speed??(this.age>10?.9:2.6),resolve:s}})}follow(t,e=1){this.followTarget=t?{c:t,dist:e}:null}setPose(t){return this.pose=t,this}get radius(){return .3}update(t,e){let n=!1;if(this.moveTarget){let o=this.moveTarget,a=o.x-this.position.x,l=o.z-this.position.z,c=Math.hypot(a,l);if(c<.05)this.moveTarget=null,o.resolve();else{let h=Math.min(o.speed*t,c);this.position.x+=a/c*h,this.position.z+=l/c*h,this.targetHeading=Math.atan2(a,l),this.speed=o.speed,n=!0}}else if(this.followTarget){let{c:o,dist:a}=this.followTarget,l=Fr(this.position.x,this.position.z,o.position.x,o.position.z);if(l>a){let c=Math.min((this.age>10?1:3.2)*t,l-a),h=o.position.x-this.position.x,u=o.position.z-this.position.z;this.position.x+=h/l*c,this.position.z+=u/l*c,this.targetHeading=Math.atan2(h,u),this.speed=2.5,n=!0}}n||(this.speed=ai(this.speed,0,8,t)),this.heading=Ph(this.heading,this.targetHeading,1-Math.exp(-8*t)),this.root.rotation.y=this.heading,this.phase+=t*this.speed*5;let s=Math.sin(this.phase),r=this.speed>.2;this.legs.forEach((o,a)=>{o.rotation.x=r?s*.6*(a%2?1:-1)*(a<2?1:-1):0}),this.tail.rotation.z=Math.sin(e*(6+this.wag*8))*.5*this.wag,this.pose==="sit"?(this.bodyG.rotation.x=-.45,this.bodyG.position.y=-.06,this.legs[2].rotation.x=this.legs[3].rotation.x=1):this.pose==="lie"?(this.bodyG.rotation.x=0,this.bodyG.position.y=-.16,this.legs.forEach(o=>o.rotation.x=1.4)):(this.bodyG.rotation.x=0,this.bodyG.position.y=r?Math.abs(s)*.03:0),this.headG.rotation.x=this.pose==="lie"?.3:Math.sin(e*1.5)*.05}headWorld(){let t=new C;return this.headG.getWorldPosition(t),t.y+=.3,t}remove(){M.world?.removeCharacter(this),this.root.parent?.remove(this.root)}},Ge={youMother:{skin:k.skin[1],hair:7028522,hairStyle:"long",shirt:15044474,pants:5201802,dress:!1},youFather:{skin:k.skin[1],hair:5913386,hairStyle:"short",shirt:7315408,pants:4608110},baby:{skin:k.skin[1],hair:9067066,hairStyle:"baby",shirt:16180128,pants:16180128,shoes:16180128},mom:{skin:k.skin[0],hair:9128491,hairStyle:"bun",shirt:14256800,pants:5917290,dress:!0},dad:{skin:k.skin[2],hair:3023904,hairStyle:"short",shirt:8367754,pants:4868696,beard:!0},grandpa:{skin:k.skin[0],hair:14210255,hairStyle:"bald",shirt:11967098,pants:6969930,glasses:!0},grandma:{skin:k.skin[0],hair:14210255,hairStyle:"bun",shirt:10137800,pants:6974074,dress:!0,glasses:!0},theo:{skin:k.skin[3],hair:1971730,hairStyle:"curly",shirt:15775818,pants:4876954},sam:{skin:k.skin[2],hair:2760218,hairStyle:"curly",shirt:6267786,pants:4013394},childDaughter:{skin:k.skin[1],hair:8014382,hairStyle:"ponytail",shirt:15901621,pants:6982344},childSon:{skin:k.skin[1],hair:8014382,hairStyle:"short",shirt:9093352,pants:5925512},pip:{skin:k.skin[2],hair:3811874,hairStyle:"curly",shirt:15976010,pants:14243914,hat:14243914,scarf:7320537}};function kf(i){let t=M.state.identity==="father"?Ge.youFather:Ge.youMother;return i<1.5?{...Ge.baby}:i<9?{...t,hairStyle:M.state.identity==="father"?"short":"ponytail",shirt:15976010,pants:5929656}:i<18?{...t,hairStyle:M.state.identity==="father"?"short":"ponytail",shirt:14711402,pants:4018042}:{...t}}function Jr(i){let t=M.state.childKind==="son"?Ge.childSon:Ge.childDaughter;return i<1.5?{...Ge.baby,shirt:13624309,pants:13624309,shoes:13624309}:{...t}}function qn(i,t=0,e=0,n=0,s=null){let r=new $r({...s??kf(i),age:i,name:"You"});return r.place(t,e,n),M.player=r,r}function sn(i,t,e,n=0,s=0,r=0){let o=new $r({...i,age:t,name:e});return o.place(n,s,r),o}function iu(i=2,t=0,e=0){let n=new ja({age:i});return n.name="Biscuit",n.place(t,e),n}function Qa(i,t,e,n,s=1,r=[]){let o=_e(s);for(let a=0;a<t;a++){let l=o.range(e[0],e[1]),c=o.range(e[2],e[3]);r.some(([h,u,d])=>Math.hypot(l-h,c-u)<d)||i.add(n(o,a),l,c,{ry:o.range(0,6.28)})}}function Kr(i,{era:t="past",night:e=!1,w:n=8,d:s=7}={}){let r=i.world,o={past:[15979468,16180950],present:[14018780,15985372],kid:[13622512,15919832],teen:[12109016,15261904],empty:[14210254,15131356]}[t],a=e?8228824:16769732,l=Fa({w:n,d:s,h:3.4,wall:o[0],wall2:o[1],floor:k.woodLight,windows:[{wall:"back",at:1.2,y:1.1,w:1.6,h:1.4,glow:a,roomW:n,roomD:s}]});r.add(l,0,0);let c=K(.08,2.1,1,t==="past"?16315114:15525080);r.add(c,-n/2+.05,0,{y:0}),c.position.z=1.8;let h=$s(.05,6,4,k.yellow);r.add(h,-n/2+.12,2.15,{y:1});let u=_e(t==="past"?3:9);for(let E=0;E<26;E++){let A=Pi(.08,.08,.02,t==="past"?16312546:t==="present"?15922926:16777215);r.add(A,u.range(-n/2+.4,n/2-.4),-s/2+.02,{y:u.range(1.6,3)}),Math.abs(A.position.x-1.2)<1.1&&A.position.y<2.7&&(A.visible=!1)}let d={room:l,door:c,doorPos:[-n/2+.6,1.8]},f=new Mt(new He(1.7,1.6),new Ye({color:e?10465535:16773320,transparent:!0,opacity:e?.18:.42,depthWrite:!1,blending:yn}));f.rotation.x=-Math.PI/2,f.rotation.z=.35,r.add(f,1.4,-1.6,{y:.02}),d.beam=f;let m=new Mt(new cn(.6,1,3,4,1,!0),new Ye({color:e?10465535:16773071,transparent:!0,opacity:e?.05:.09,depthWrite:!1,side:Te,blending:yn,fog:!1}));if(m.rotation.x=.55,m.rotation.y=Math.PI/4,r.add(m,1.3,-2.4,{y:1.3}),d.shaft=m,t==="past"||t==="present"){let E=pf();r.add(E,-2.5,-2.55,{collide:{w:1.6,d:.95}}),d.crib=E;let A=Xh();r.add(A,-2.5,-2.55,{y:.55}),d.mobile=A}else{let E=mf({color:t==="teen"?5925514:t==="empty"?13156536:15901621});r.add(E,-2.9,-1.8,{collide:{w:1.2,d:2.1}}),d.bed=E;let A=Xh();r.add(A,-3.6,-3.1,{y:1.6,s:.8}),d.mobile=A,A.userData.speed=.05}let x=xf();r.add(x,2.4,-2.2,{ry:-.7,collide:.5}),d.chair=x;let g=Ha(2.6,2.6,t==="past"?15972793:t==="present"?12114120:12635368,k.cream,!0);r.add(g,.3,.6);let p=Yh(1.3,1.3);r.add(p,-.6,-3.25,{collide:{w:1.3,d:.4}});let _=Gr();r.add(_,-.9,-3.2,{y:1.3}),d.teddy=_;let y=Va({lit:e||t==="present",h:1.6});if(r.add(y,3.3,-3,{collide:.25}),d.lamp=y,e){let E=new ns(16763274,6,7,1.6);E.position.set(3.2,1.7,-2.8),r.root.add(E),d.lampLight=E}let v=Ga(1.2);r.add(v,3.4,2.6,{collide:.3});let D=Wa(k.wood);return r.add(D,-n/2+.06,-1,{y:1.9,ry:Math.PI/2}),d.frame=D,d}function tl(i,{season:t="summer",treeStage:e=1,swing:n=!1,lit:s=!1,picnic:r=!1,sandbox:o=!1,theoHouse:a=!0,flowers:l=!0,cherry:c=!0,lemonade:h=!1,snowman:u=0,sign:d=null}={}){let f=i.world,m={spring:k.grassSpring,summer:k.grass,autumn:k.grassAutumn,winter:k.snow}[t],x=t==="winter"?k.snowShade:k.grassDark,g=Da({w:28,d:22,top:m,edge:x,seed:4});f.add(g,0,0);let p={season:t},_=uf(28,2.6);f.add(_,0,9.3);let y=_n(28,.5,t==="winter"?15133424:k.sidewalk,.012);f.add(y,0,7.8);let v=Gh({w:6,d:4.6,h:2.9,wall:16049103,roof:t==="winter"?15331060:k.terracotta,door:5929640,porch:!0,lit:s});if(f.add(v,-5,-6,{collide:{w:6.6,d:5}}),f.addCollider({minX:-7.6,maxX:-2.4,minZ:-3.6,maxZ:-2,porch:!0,disabled:!0}),p.house=v,p.door=[-5,-3.2],p.porch=[-5,-2.4],t==="winter"){let N=K(6.8,.2,5.4,k.snow);f.add(N,-5,-6,{y:2.92}),N.visible=!1}for(let N=0;N<9;N++){let U=Ii(.38,t==="winter"?14081254:k.stone,7,.02);f.add(U,-5+(N%2?.15:-.15),-1.6+N*1.05)}let D=k.white,E=Oa(7.6,D);f.add(E,-9.6,7),f.addCollider({minX:-13.4,maxX:-5.9,minZ:6.85,maxZ:7.15});let A=Oa(17.6,D);f.add(A,4.9,7),f.addCollider({minX:-4.1,maxX:13.7,minZ:6.85,maxZ:7.15});let L=Oa(9,D);f.add(L,13.6,2.4,{ry:Math.PI/2});let S=ka({stage:e,season:t,swing:n});if(f.add(S,4,-2.2,{collide:e===0?.15:.25+e*.12}),p.tree=S,p.treePos=[4,-2.2],c){let N=Js({kind:"blossom",season:t,size:1.35,seed:5});f.add(N,-10.5,-.5,{collide:.35}),p.cherry=N,p.cherryPos=[-10.5,-.5]}[[-12,-8,"round",1.2],[11.5,-8.5,"pine",1.3],[12,-3,"round",1.1],[-12.5,4.5,"pine",1],[9.5,4.8,"round",.9]].forEach(([N,U,Y,W],it)=>f.add(Js({kind:Y,season:t,size:W,seed:20+it}),N,U,{collide:.3*W}));for(let N of[-7.6,-6.6,-3.4,-2.4])f.add(hf(t==="autumn"?11575376:t==="winter"?15265010:7910486,.9,N*3),N,-3.2,{collide:.35});if(l&&t!=="winter"){let N=_n(3.2,1.1,k.dirt,.015);f.add(N,-9,-3.4);let U=t==="autumn"?[14917691,13197374]:[k.pink,k.yellow,15921906,12166886,k.red];for(let Y=0;Y<14;Y++)f.add(Vr(U[Y%U.length],Y),-10.4+Y%7*.45,-3.75+Math.floor(Y/7)*.5)}Qa(f,t==="winter"?0:80,[-13,13,-10,6.5],(N,U)=>Ua(t==="autumn"?12099664:k.grassDark,U),11,[[-5,-6,4],[4,-2.2,1.2],[-5,2,1]]),t!=="winter"&&Qa(f,25,[-13,13,-2,6.5],(N,U)=>Vr(N.pick([k.pink,k.yellow,16777215,12166886]),U),12,[[-5,2,1],[4,-2.2,1.2]]),t==="winter"&&Qa(f,18,[-13,13,-10,6.5],(N,U)=>Hr(.6,U,k.snowShade),13,[[-5,-6,4],[4,-2.2,1.5],[-5,2,1]]),Qa(f,8,[-13,13,-10,6],(N,U)=>Hr(N.range(.5,1),U,t==="winter"?k.snowShade:k.rock),14,[[-5,-6,4],[4,-2.2,1.5],[-5,2,1.5]]);let P=ff();f.add(P,-6.4,6.4,{collide:.2}),p.mailbox=P;let H=Ba();if(f.add(H,-3.2,-2.3,{ry:0,collide:{w:1.6,d:.5}}),p.bench=[-3.2,-2],a){let N=Gh({w:4.5,d:4,h:2.5,wall:13623534,roof:7306636,door:k.red,chimney:!1,lit:s});f.add(N,8.5,-6.5,{collide:{w:5,d:4.4}}),p.theoHouse=N,p.theoDoor=[8.5,-4.2]}if(o){let N=df();f.add(N,-8.5,2.2,{collide:!1}),p.sandbox=[-8.5,2.2]}if(r){let N=za(k.red);f.add(N,1.2,1.2),p.picnic=[1.2,1.2]}if(h){let N=Xa();f.add(N,2.5,6,{collide:{w:1.5,d:.7}}),p.lemonade=[2.5,5.2]}if(u){let N=Sf(u);f.add(N,0,1,{collide:.45}),p.snowman=N}return f.bounds={minX:-13.6,maxX:13.6,minZ:-10.8,maxZ:10.4},p}function Uf(i,{night:t=!0,winter:e=!0,wall:n=15721167,chairs:s=2}={}){let r=i.world,o=8,a=7,l=Fa({w:o,d:a,h:3.4,wall:n,wall2:16050904,floor:14205600,windows:[{wall:"back",at:1.4,y:1.2,w:1.7,h:1.3,glow:t?7307976:16771788,roomW:o,roomD:a},{wall:"left",at:-.6,y:1.2,w:1.3,h:1.2,glow:t?7307976:16771788,roomW:o,roomD:a}]});r.add(l,0,0);for(let E=0;E<8;E++)for(let A=0;A<2;A++){let L=_n(.9,.9,(E+A)%2?15920354:13220002,.004);r.add(L,-3.55+E*.95,-3+A*.9)}let c=wf(3.2);r.add(c,-.6,-3.15,{collide:{w:3.2,d:.7}});let h=bf();r.add(h,-2.65,-3.15,{collide:{w:.75,d:.7}});let u=Mf();r.add(u,-3.55,-1.9,{ry:Math.PI/2,collide:{w:.75,d:.75}});let d=rs({w:1.2,round:!0,color:k.wood});r.add(d,.9,.6,{collide:.65});let f={room:l,table:[.9,.6]},m=[[.9,-.35,0],[1.85,.6,-Math.PI/2],[.9,1.55,Math.PI],[-.05,.6,Math.PI/2]];f.chairs=[];for(let E=0;E<s;E++){let[A,L,S]=m[E],w=gf(k.woodDark);r.add(w,A,L,{ry:S}),f.chairs.push([A,L,S])}let x=Va({lit:t,table:!0});r.add(x,3.2,-3.1,{y:0});let g=rs({w:.6,d:.5,h:.7,color:k.woodLight});if(r.add(g,3.2,-3.1,{collide:.4}),x.position.y=.7,t){let E=new ns(16762250,9,8,1.4);E.position.set(1,2.2,.6),r.root.add(E),f.light=E;let A=li(.35,.3,8,15915440,{emissive:16766352,emissiveIntensity:1.2});r.add(A,.9,.6,{y:2.3});let L=K(.02,1.1,.02,5592405);r.add(L,.9,.6,{y:2.55});let S=Ln(16766362,3,.55);S.position.set(.9,2.3,.6),r.root.add(S)}let p=Af(k.white);r.add(p,.65,.5,{y:.75}),f.mug=p;let _=Ga(1.1);r.add(_,3.4,2.7,{collide:.3});let y=Ha(2.8,2.2,13209466,15258812);r.add(y,.9,.6),[[-o/2+.06,1.6,2],[-o/2+.06,2.6,2.4],[-o/2+.06,1.8,1.6]].forEach(([E,A,L],S)=>{let w=Wa([k.wood,k.woodDark,k.white][S],null,.45,.35);r.add(w,E,A,{y:L,ry:Math.PI/2})});let D=K(.06,1,.5,6965818);return r.add(D,-o/2+.1,3,{y:1.2}),f.coatHook=[-3.4,3],f}function Nf(i,{night:t=!1,fire:e=!0,toys:n=!0,wall:s=15260875,tree:r=!1}={}){let o=i.world,a=9,l=7.5,c=Fa({w:a,d:l,h:3.4,wall:s,wall2:15853270,floor:k.wood,windows:[{wall:"back",at:2.2,y:1,w:1.8,h:1.5,glow:t?7307976:16771528,roomW:a,roomD:l}]});o.add(c,0,0);let h={room:c},u=_f();if(o.add(u,-a/2+.3,-.8,{ry:Math.PI/2,collide:{w:1.6,d:.6}}),e||(u.userData.fire.visible=!1),h.fireplace=u,e){let y=new ns(16751184,7,7,1.5);y.position.set(-a/2+1,.8,-.8),o.root.add(y),h.fireLight=y}let d=qh(9414856);o.add(d,.6,-2.7,{collide:{w:2.1,d:.9}}),h.sofa=[.6,-2.2];let f=qh(13146762);f.scale.set(.5,1,1),o.add(f,3.4,-.6,{ry:-Math.PI/2,collide:{w:1.1,d:.9}});let m=Ha(3.4,2.6,14262394,15785152);o.add(m,.4,.2);let x=rs({w:1.2,d:.7,h:.4,color:k.woodLight});o.add(x,.6,-1.2,{collide:{w:1.2,d:.7}});let g=Yh(1.6,1.9);o.add(g,-1.8,-3.5,{collide:{w:1.6,d:.4}});let p=Va({lit:t,h:1.6});if(o.add(p,3.8,-3.2,{collide:.25}),t){let y=new ns(16763274,5,7,1.6);y.position.set(3.8,1.7,-3.2),o.root.add(y)}if(n&&(o.add(yf(5),-1.2,1.4),o.add(vf(),2.2,1.6),o.add(Gr(14200958),-2.3,2.6),h.blocks=[-1.2,1.4]),r){let y=Js({kind:"pine",season:"summer",size:1.15,seed:77});o.add(y,3.6,2.7,{collide:.6});let v=[],D=_e(5);for(let A=0;A<14;A++){let L=[16765562,16747146,10146047,12120736][A%4],S=$s(.06,5,4,L,{emissive:L,emissiveIntensity:2.5}),w=A*1.7,P=.9+A/14*2,H=1.05-A/14*.75;o.add(S,3.6+Math.cos(w)*H,2.7+Math.sin(w)*H,{y:P}),v.push(S)}let E=Me(.14,0,k.yellow,0,1,{emissive:k.yellow,emissiveIntensity:2});o.add(E,3.6,2.7,{y:3.55});for(let A=0;A<3;A++)o.add(Tf([k.red,k.teal,k.yellow][A],[k.yellow,k.white,k.red][A],.35+A*.05),3+A*.5,1.8-A%2*.3);h.xmasTree=[3.6,2.7]}return o.add(Ga(1.2),-3.9,3.2,{collide:.3}),[[-1.8,2.4],[-.9,2.2],[0,2.5]].forEach(([y,v],D)=>o.add(Wa([k.wood,k.white,k.woodDark][D],null,.5,.4),y,-l/2+.06,{y:v})),o.bounds={minX:-a/2+.2,maxX:a/2-.1,minZ:-l/2+.2,maxZ:l/2-.1},h}function er(i,{clouds:t=6,seed:e=1,y:n=-3,spread:s=22}={}){let r=_e(e);for(let o=0;o<t;o++){let a=Na(e+o,r.range(1,1.8)),l=o/t*Math.PI*2;i.world.add(a,Math.cos(l)*s*r.range(.9,1.2),Math.sin(l)*s*r.range(.9,1.2),{y:n+r.range(-2,3)}),a.userData.update=(c,h)=>{a.position.x+=Math.sin(h*.05+o)*.004},i.world.track(a)}}var Ff={id:"prologue",chapter:0,mood:"kitchenNight",music:"winter",intensity:.15,ambience:{room:.6,clock:.35,wind:.25},zoom:8.5,surface:"wood",bounds:{minX:-3.8,maxX:3.8,minZ:-3.3,maxZ:3.3},hint:"Move with <b>WASD</b> / <b>arrows</b> or <b>click</b>. Walk to a glowing light and press <b>Space</b>.",build(i){let t=Uf(i,{night:!0,chairs:2});i.r=t;let e=qn(79,-1.6,1.6,Math.PI*.75);e.giveCane(!0),i.me=e;let n=K(.42,.06,.3,7316424);i.world.add(n,1.85,.6,{y:.5});let s=Ef();i.world.add(s,1.1,.75,{y:.75,ry:.3}),i.albumObj=s},async intro(i){await Ht(.5),await kn(4),await vt("It is late, and the house is very quiet."),await Di("When did it get so quiet?")},moments:[{id:"window",label:"Look out at the snow",at:[1.4,-2.4],async run(i){let t=i.me;await t.walkTo(1.4,-2.2),t.face(1.4,-4),await ki(7,2),await Je({seconds:4,label:"Watch the snow fall."}),await vt("Snow on the old tree again."),await vt("Every winter it looks as if it might not wake up. Every spring, somehow, it does."),await ki(8.5,2)}},{id:"scarf",label:"The other chair",at:[2.3,1],async run(i){let t=i.me;await t.walkTo(2.5,1.1),t.face(1.85,.6),await Ht(.6),await vt("A blue scarf, still folded on the other chair."),await vt("You never could bring yourself to move it.")}},{id:"frames",label:"The photographs on the wall",at:[-3,2],async run(i){let t=i.me;await t.walkTo(-3.1,2),t.face(-4,2),await Ht(.5),await vt("Three frames. A wedding. A birthday cake. A child in a too-big coat, laughing at something you can no longer remember."),await Di("I should have taken more.")}},{id:"album",kind:"story",label:"Open the album",at:[.4,.2],requires:[],async run(i){let t=i.me;await t.walkTo(.9,-.55),t.giveCane(!1),t.faceNow(.9,.6),t.setPose("read",{h:.45}),t.position.set(.9,0,-.35),await ie(.9,.3,5.8,3),Un("title",{intensity:.2}),await vt("The album. A gift, years and years ago."),await vt("\u201CFor all the little moments,\u201D the card said."),await vt("So many pages. So few pictures."),await Di("Where did it all go?"),await Je({seconds:4,label:"Turn the first page."}),Pt("rustle"),Xr(.6,4),Oe("dream",6),await Li(["Let\u2019s go back.","Back to the beginning, when everything was enormous \u2014","\u2014 and you were so very small."],{minTime:1.2}),await Dn(3,"#fff6ee"),M.ui.clearNarration()}}],final:"album"};var su=["\u266A Little one, little one, close your eyes\u2026","\u266A the stars are out, the moon will rise\u2026","\u266A and when you wake, I\u2019ll still be here \u2014","\u266A little one, my little dear."];var Of={id:"ch1-nursery",chapter:1,card:{num:"I",title:"Tiny",ages:"zero to one",quote:"You were so small once. Small enough to fit in two hands."},mood:"dawnNursery",music:"tiny",intensity:.3,ambience:{room:.4,birds:.35},zoom:6.2,surface:"wood",bounds:{minX:-3.75,maxX:3.75,minZ:-3.2,maxZ:3.3},hint:"You can only crawl. That\u2019s alright \u2014 nothing here is in a hurry. Find the glowing lights.",build(i){let t=i.world;i.r=Kr(i,{era:"past"}),i.me=qn(.7,.3,.7,Math.PI*.8),i.me.setPose("sitGround"),i.mom=sn(Ge.mom,31,"Mom",-3.5,1.8,Math.PI/2),i.mom.root.visible=!1,i.dad=sn(Ge.dad,33,"Dad",-3.5,1.8,Math.PI/2),i.dad.root.visible=!1,t.add(Ii(.55,10123882,10,.02),-2.7,1.6),i.dog=iu(1,-2.7,1.6),i.dog.setPose("lie"),i.dog.wag=.3,i.dog.heading=i.dog.targetHeading=.6,t.addCollider({x:-2.7,z:1.6,r:.4}),i.blocks=[k.red,k.yellow,k.blue].map((e,n)=>{let s=K(.26,.26,.26,e);return t.add(s,1.4+n*.38,1.6+n%2*.25,{ry:n*.5}),s}),i.motes=t.particlesOf("motes",{center:new C(1.4,0,-1.6),area:{w:2.2,h:2.6,d:2.2},count:45,opacity:.35}),er(i,{clouds:4,y:-6,spread:14})},async intro(i){Xn({heartbeat:.8,room:.2},.5),await Li(["Before you knew any words,","before you knew your own name,","there was a heartbeat. And then, there was light."],{minTime:1.3}),Xn({room:.4,birds:.35},4),M.ui.clearNarration(),await kn(4),Pt("coo"),await vt("This was the whole world: one room, soft and pink and very, very big.")},moments:[{id:"mobile",label:"Look up at the stars",at:[-2.5,-1.75],caption:"The stars above your crib",async run(i){let t=i.me;await t.walkTo(-2.5,-1.75),t.faceNow(-2.5,-2.6),t.setPose("sitGround",{look:-.55,reach:!0}),i.r.mobile.userData.speed=.7,await ie(-2.5,-2.3,4.6,2.5),Pt("sparkle"),await Je({seconds:5,label:"Watch them turn."}),await vt("Five little stars, going round and round."),await vt("The whole sky, as far as you knew."),await Qt("mobile","The stars above your crib"),t.setPose("idle"),i.r.mobile.userData.speed=.25,await xe(t,6.2)}},{id:"sunbeam",label:"Crawl into the sunlight",at:[1.4,-1.5],caption:"Warm light on the floor",async run(i){let t=i.me;await t.walkTo(1.4,-1.5),t.setPose("sitGround",{look:-.2}),i.motes.setOpacity(2.6),Oe("dawnNursery",3,{warmth:.6,dream:.45,bloom:.6}),await ki(4.8,3),await Je({seconds:6,label:"Feel the warm light."}),await vt("Morning came in through the window and lay down on the floor beside you."),await Qt("sunbeam","Warm light on the floor"),i.motes.setOpacity(1),Oe("dawnNursery",3),t.setPose("idle"),await ki(6.2,2)}},{id:"biscuit",label:"Say hello to Biscuit",at:[-1.9,1.75],caption:"Biscuit, who was patient with you",async run(i){let t=i.me,e=i.dog;await t.walkTo(-1.95,1.7),t.face(-2.7,1.6),t.setPose("sitGround"),e.faceChar(t),e.wag=.8,await ie(-2.3,1.6,4.5,1.5),await js({count:5,label:"Pat Biscuit",onTap:n=>{e.wag=.8+n*.3,Pt(n%2?"giggle":"coo"),n===3&&e.setPose("sit")}}),Pt("woof",{vol:.5}),await Ui(t,1,.08),await vt("Biscuit was only a puppy too. The two of you were learning the world together."),await Qt("biscuit","Biscuit, who was patient with you"),e.setPose("lie"),e.wag=.4,t.setPose("idle"),await xe(t,6.2)}},{id:"blocks",label:"Build a tower",at:[1.8,1.25],caption:"Your first tower \u2014 and your first ruin",async run(i){let t=i.me;await t.walkTo(1.75,1),t.face(1.8,1.7),t.setPose("sitGround"),await ie(1.8,1.5,4.4,1.5);let e=new C(1.8,0,1.75);await tr({label:"Stack the blocks",keys:["up","up","up"],onStep:n=>{let s=i.blocks[n],r=s.position.clone(),o=e.clone().setY(n*.26);$e(.5,a=>{s.position.lerpVectors(r,o,a),s.position.y+=Math.sin(a*Math.PI)*.35,s.rotation.y=(1-a)*n*.5}),Pt("tap")}}),await Ht(.6),await js({count:1,label:"Now\u2026 knock it down!"}),Pt("thud"),i.blocks.forEach((n,s)=>{let r=n.position.clone(),o=new C(e.x+(s-1)*.5+.2,0,e.z+.3+s*.2);$e(.6,a=>{n.position.lerpVectors(r,o,a),n.position.y=Math.max(0,r.y*(1-a)+Math.sin(a*Math.PI)*.2),n.rotation.x=a*(1+s)})}),await Ht(.5),Pt("giggle"),await Ui(t,2,.08),await vt("Your first tower. Your first ruin. Both were wonderful."),await Qt("blocks","Your first tower \u2014 and your first ruin"),t.setPose("idle"),await xe(t,6.2)}},{id:"lullaby",kind:"story",label:"Call for someone",at:[.3,.6],radius:1.3,caption:"The song she sang",async run(i){let t=i.me,e=i.mom;t.setPose("sitGround",{look:-.3}),Pt("cry"),await Ht(2),Pt("door"),e.root.visible=!0,e.place(-3.4,1.8,Math.PI/2),await ie(-1.2,1.2,6.5,1.5),await e.walkTo(t.position.x-.8,t.position.z+.2),e.faceChar(t),St(e,"Oh, oh, oh. I know. I know."),e.setPose("crouch"),await Ht(.8),e.pickUp(t),e.setPose("carry"),Pt("coo"),await St(e,"There you are, little one. Did you think I\u2019d gone?"),await e.walkTo(2.3,-1.55),e.place(2.4,-2.15,-.7),e.setPose("rock"),await ie(2.3,-1.8,4.8,2),Un("tinyHum",{intensity:.45});let n=i.r.chair.userData.rock,s=0,r=a=>{s+=a;let l=Math.sin(s*2)*.09;n.rotation.x=l,e.lean=l*.8};M.updaters.add(r),await Ht(1.5);let o=(async()=>{for(let a of su)await St(e,a,{passive:!0,hold:3.4,name:"Mom"})})();await Qs({label:"Rock with her \u2014 press Space on the first beat of each bar",hits:4,onlyDownbeat:!0,window:.3}),await o,await Qt("lullaby","The song she sang"),await vt("She sang it every night. One day you would sing it too \u2014 though you didn\u2019t know that yet."),M.updaters.delete(r),n.rotation.x=0,e.lean=0,e.setPose("idle"),e.position.set(2,0,-1.5),await e.walkTo(.6,.9),e.putDown(.3,.6),t.setPose("sitGround"),await St(e,"Play for a little while. I\u2019m right here."),await e.walkTo(2,-1.4),e.place(2.4,-2.15,-.7),e.setPose("rock"),e.lookAt(t),Un("tiny",{intensity:.4}),await xe(t,6.2)}},{id:"firstSteps",kind:"story",label:"Pull yourself up on the crib",at:[-1.6,-1.8],requires:["lullaby"],caption:"Three steps. They cried.",async run(i){let t=i.me,e=i.mom,n=i.dad;await t.walkTo(-1.6,-1.85),t.faceNow(-1.6,-2.6),Pt("door"),n.root.visible=!0,n.place(-3.4,1.8,Math.PI/2),await ie(-.4,-.3,6.8,1.5),await n.walkTo(.9,1),n.faceChar(t),await St(n,"Hey, hey \u2014 what\u2019s this? What are you up to?"),e.setPose("idle"),e.lookAt(null),e.walkTo(1.7,-.6).then(()=>e.faceChar(t)),t.setAge(1.35),t.setPose("stand"),t.faceNow(n.position.x,n.position.z),Pt("coo"),await St(e,"Oh. Oh my goodness. Look.",{passive:!0,hold:2}),n.setPose("kneelOpen"),await $a({label:"Find your balance \u2014 \u2190 \u2192",seconds:3.5,difficulty:.8,onUpdate:o=>{t.tilt=-o*.3}}),t.tilt=0,await St(n,"Come on. Come to me. You can do it."),M.director.current.speedMul=.55;let s=0,r=o=>{s+=o,t.tilt=Math.sin(s*7)*.12};M.updaters.add(r),await qr({label:"Walk to Dad",items:[{x:n.position.x,z:n.position.z,r:.45}],showCount:!1}),M.updaters.delete(r),t.tilt=0,M.director.current.speedMul=1,n.pickUp(t),n.setPose("carryHigh"),Pt("giggle"),Pt("yay",{delay:.2}),Ui(n,2,.15),await ie(n.position.x,n.position.z,5.2,1.2),await St(n,"Look at you! Look at you go!"),e.setPose("cry"),await St(e,"Three steps! Did you count? Three!"),await St(e,"I\u2019m not crying. You\u2019re crying."),await Qt("firstSteps","Three steps. They cried."),e.setPose("idle"),await vt("That spring, they carried you outside for the very first time."),await Dn(2.5,"#fff6ee")}}],final:"firstSteps"},Bf={id:"ch1-spring",chapter:1,mood:"springMorning",music:"tiny",intensity:.45,ambience:{birds:.8,wind:.25},zoom:8,surface:"grass",hint:"Explore the garden. Nobody is in a hurry today.",build(i){let t=i.world;i.r=tl(i,{season:"spring",treeStage:0,picnic:!0,flowers:!0}),i.r.tree.visible=!1,t.removeCollidersOf(i.r.tree),t.bounds={minX:-9.8,maxX:6.5,minZ:-3.6,maxZ:5.8};let e=i.me=qn(1.1,1.2,1,Math.PI*.2);e.setPose("sitGround"),i.mom=sn(Ge.mom,32,"Mom",.4,1.9,2.4),i.mom.setPose("sitGround"),i.dad=sn(Ge.dad,34,"Dad",2.1,1.6,-2),i.dad.setPose("sitGround"),i.grandpa=sn(Ge.grandpa,66,"Grandpa",-3.6,-2.05,0),i.grandpa.setPose("sit",{h:.45}),i.grandma=sn(Ge.grandma,64,"Grandma",-2.8,-2.05,0),i.grandma.setPose("sit",{h:.45}),i.dog=iu(1.5,3.5,2.5),i.dog.follow(e,1.8),i.dog.wag=1,i.petals=t.particlesOf("petals",{center:new C(-8.5,0,0),area:{w:7,h:5,d:7},count:70}),t.butterflies(3,{x:0,z:3,r:4},3),t.birds(6,2),er(i,{clouds:7,y:-4,spread:24})},async intro(i){await kn(3),await vt("The world, it turned out, was much bigger than one room."),await St(i.grandma,"Look at those eyes. They want to see everything.")},moments:[{id:"petals",label:"Reach for the falling petals",at:[-7.6,.4],caption:"Blossoms, falling like slow snow",async run(i){let t=i.me,e=i.world;await t.walkTo(-7.6,.4),await ie(-8,.4,6.5,1.5),t.setPose("sitGround",{look:-.4,reach:!0}),await Ht(1),t.setPose("idle");let n=_e(9),s=[];for(let r=0;r<5;r++){let o=Ln(16763096,.55,.95),a=-8+n.range(-2.2,2.2),l=.4+n.range(-2,2);o.position.set(a,3+r*.6,l),e.root.add(o);let c={obj:o,x:a,z:l},h=u=>{o.position.y>.25&&(o.position.y-=u*.45,o.position.x+=Math.sin(M.time*2+r)*u*.3),c.got&&(o.material.opacity-=u*2,o.material.opacity<=0&&(e.root.remove(o),M.updaters.delete(h)))};M.updaters.add(h),s.push(c)}await xe(t,7),await qr({label:"Catch the petals",items:s,radius:.55,onCollect:()=>Pt("giggle")}),t.setPose("sitGround",{look:-.3}),await St(i.grandma,"The blossoms only last a week, little one.",{name:"Grandma"}),await vt("You didn\u2019t know what a week was. You didn\u2019t know they only last a week."),await Qt("petals","Blossoms, falling like slow snow"),t.setPose("idle")}},{id:"grass",label:"Touch the grass",at:[3.6,4],caption:"The first time you touched grass",async run(i){let t=i.me;await t.walkTo(3.6,4),t.setPose("sitGround",{look:.4}),await ie(3.6,4,4.6,1.5),Xn({birds:1,wind:.4},2),await Oi({label:"Hold Space to feel the grass",seconds:3,onProgress:(e,n)=>{n&&Math.random()<.04&&Pt("rustle",{vol:.5})}}),Pt("giggle"),await Ui(t,2,.06),Pt("giggle",{delay:.3}),await vt("It was cool, and it tickled. You laughed at the grass for a long, long time."),await Qt("grass","The first time you touched grass"),Xn({birds:.8,wind:.25},2),t.setPose("idle"),await xe(t,8)}},{id:"butterfly",label:"Follow the butterfly",at:[-2,4.2],caption:"The butterfly that got away",async run(i){let t=i.me,e=i.world,n=new rt,s=new He(.22,.17);s.translate(.11,0,0);let r=ge(16774896,{side:Te,emissive:16773344,emissiveIntensity:.6}),o=new Mt(s,r),a=new Mt(s,r);a.scale.x=-1,o.rotation.x=a.rotation.x=-Math.PI/2;let l=new rt;l.add(o);let c=new rt;c.add(a),n.add(l,c);let h=Ln(16774368,.7,.6);n.add(h),e.root.add(n);let u=0,d=m=>{u+=m*.32;let x=-2+Math.sin(u)*2.6+Math.sin(u*2.2)*.6,g=3.4+Math.cos(u*.8)*1.6,p=x-n.position.x,_=g-n.position.z;n.position.set(x,.7+Math.sin(u*5)*.2,g),n.rotation.y=Math.atan2(p,_)-Math.PI/2;let y=Math.sin(M.time*14)*1.1;l.rotation.z=y,c.rotation.z=-y};M.updaters.add(d),await xe(t,7),await Ja({target:n,dist:1.5,seconds:9,label:"Follow it. Don\u2019t lose it."}),t.setPose("sitGround",{look:-.5,reach:!0}),await Ht(.5),M.updaters.delete(d);let f=n.position.clone();await $e(3,m=>{n.position.set(f.x+m*3,f.y+m*6,f.z-m*2);let x=Math.sin(M.time*14)*1.1;l.rotation.z=x,c.rotation.z=-x}),e.root.remove(n),await vt("It never let you catch it. That was alright. Some things are only for watching."),await Qt("butterfly","The butterfly that got away"),t.setPose("idle")}},{id:"firstWord",kind:"story",label:"Crawl back to the blanket",at:[1.2,1.2],radius:1.4,caption:{id:"firstWord",text:"Your first word"},async run(i){let t=i.me,e=i.mom,n=i.dad;await t.walkTo(1.25,1.05),t.setPose("sitGround"),t.face(1.2,4),await ie(1.2,1.4,5.2,1.5),e.lookAt(t),n.lookAt(t),await St(e,"Can you say \u201CMama\u201D? Ma-ma?"),await St(n,"Don\u2019t listen to her. Da-da. Daaa-da."),i.dog.walkTo(2.4,2.4).then(()=>i.dog.setPose("sit"));let s=await hi("Your very first word\u2026",["\u201CMama.\u201D","\u201CDada.\u201D","\u201CWoof!\u201D"]),r=["Mama","Dada","Woof"][s];Pt("coo",{pitch:1.2}),await Ht(.6),s===0?(e.setPose("jump"),await St(e,"Did you hear that? Did everyone hear that?!"),e.setPose("sitGround"),await St(n,"That\u2019s not fair. I\u2019ve been practising with them for weeks.")):s===1?(n.setPose("jump"),await St(n,"YES! Everyone heard that, right? That counts!"),n.setPose("sitGround"),await St(e,"Traitor."),await vt("She was smiling when she said it.")):(Pt("woof",{n:2}),i.dog.wag=2,await St(i.grandpa,"Well. Now we know who the favourite is."),await St(e,"Biscuit! You taught them that!")),Pt("giggle"),await Qt("firstWord",`Your first word: \u201C${r}\u201D`),M.state.flags.firstWord=r}},{id:"grandpaLap",kind:"story",label:"Go to Grandpa",anchor:i=>i.grandpa,offset:[0,0,.8],requires:["firstWord"],caption:"Asleep on Grandpa\u2019s lap",async run(i){let t=i.me,e=i.grandpa,n=i.dad;n.setPose("idle"),await n.walkToChar(t,.6),n.setPose("crouch"),await Ht(.5),n.pickUp(t),n.setPose("carry"),await n.walkTo(e.position.x+.2,e.position.z+.9),n.faceChar(e),await St(e,"Give that little bundle here."),n.putDown(e.position.x,e.position.z+.3),e.pickUp(t),e.setPose("carry"),await n.walkTo(.4,.3),await ie(e.position.x,e.position.z,4.6,2.5),Un("whistle",{intensity:.5}),Oe("goldenAfternoon",10,{dream:.3}),await vt("Grandpa whistled the same song your mother sang to you."),await vt("He had sung it to her, once, when she was the one who was small."),await Je({seconds:7,label:"Close your eyes."}),t.setPose("sleep"),await Qt("grandpaLap","Asleep on Grandpa\u2019s lap",{window:10}),await Ht(1),Un("tiny",{intensity:.2}),await Dn(4,"#16121a"),await Li(["You won\u2019t remember any of this.","Not the stars, not the sunlight, not the song.","But they will.","They will carry it for you \u2014 until you\u2019re big enough to carry it yourself."],{minTime:1.4}),M.ui.clearNarration(),await Ht(1.2)}}],final:"grandpaLap"};function zf(){return Vh(512,384,(i,t,e)=>{i.fillStyle="#fbf7ee",i.fillRect(0,0,t,e),i.lineCap="round",i.lineJoin="round";let n=(l,c)=>[l+Math.sin(c*.13)*2,c+Math.cos(l*.11)*2],s=(l,c,h=6)=>{i.strokeStyle=c,i.lineWidth=h,i.beginPath(),l.forEach(([u,d],f)=>{let[m,x]=n(u,d);f?i.lineTo(m,x):i.moveTo(m,x)}),i.stroke()};s([[10,330],[120,325],[260,335],[400,322],[500,330]],"#5aa846",10),i.fillStyle="#f6c63c",i.beginPath(),i.arc(440,70,34,0,7),i.fill();for(let l=0;l<9;l++){let c=l*.7;s([[440+Math.cos(c)*44,70+Math.sin(c)*44],[440+Math.cos(c)*62,70+Math.sin(c)*62]],"#f6c63c",5)}s([[380,330],[385,200]],"#8a5a3a",16),i.fillStyle="#6cbf4c",i.beginPath(),i.arc(385,170,70,0,7),i.fill(),s([[402,200],[402,262]],"#e2c9a0",3),s([[430,200],[430,262]],"#e2c9a0",3),s([[396,262],[436,262]],"#c0392b",6);let r=(l,c,h,u)=>{i.strokeStyle="#333",i.lineWidth=4,i.beginPath(),i.arc(l,330-120*c,18*c,0,7),i.stroke(),s([[l-14*c,335-125*c],[l+14*c,335-125*c]],u,8*c),s([[l,330-100*c],[l,330-45*c]],h,7),s([[l,330-45*c],[l-16*c,330]],"#333",4),s([[l,330-45*c],[l+16*c,330]],"#333",4),s([[l-34*c,330-70*c],[l+34*c,330-70*c]],"#333",4),i.fillStyle="#333",i.fillRect(l-7*c,330-124*c,3,3),i.fillRect(l+5*c,330-124*c,3,3),i.beginPath(),i.arc(l,330-116*c,7*c,.2,Math.PI-.2),i.stroke()};r(90,1.3,"#d9584a","#6b3f2a"),r(170,1.35,"#3f9a8a","#2a1e1a"),r(240,.85,"#f2a3b5","#7a4a2e"),i.fillStyle="#d9584a",i.font='bold 40px "Comic Sans MS", "Chalkboard SE", cursive',i.fillText(Pe("{me}"),40,60),i.fillText("ME",210,110),i.fillStyle="#e04a7a",i.beginPath();let o=300,a=70;i.moveTo(o,a+10),i.bezierCurveTo(o-30,a-15,o-10,a-35,o,a-15),i.bezierCurveTo(o+10,a-35,o+30,a-15,o,a+10),i.fill()})}function ru({id:i,label:t,at:e,emails:n=12,cost:s=60,lines:r}){return{id:i,label:t,at:e,kind:"work",once:!1,radius:1,async run(o,a){let l=a.uses=(a.uses||0)+1;Pt("ping"),await o.me.walkTo(e[0]+.5,e[1]+.4),o.me.face(e[0],e[1]),o.me.setPose(o.def.workPose??"idle");let c=r?.[(l-1)%r.length]??"Just a few emails.";await Di(c);for(let u=0;u<6;u++)Pt("tap",{vol:.5}),await Ht(.12);M.state.stats.emails+=n,o.passTime(s);let h=o.world.hotspots.filter(u=>u.enabled&&!u.done&&(u.m?.kind??"little")==="little");if(h.length){let u=h[Math.floor(Math.random()*h.length)];u.setEnabled(!1),u.done=!0,u.m?.caption&&nu(u.m.caption.id??u.m.id,typeof u.m.caption=="string"?u.m.caption:u.m.caption.text),Pt("lost",{vol:.5})}await vt(o.def.workAfter?.[(l-1)%o.def.workAfter.length]??"When you looked up, the light had moved across the floor."),o.me.setPose("idle"),a.label=`${t} (${Math.max(3,n+l*5)} unread)`}}}var Hf={id:"ch5-newborn",chapter:5,card:{num:"V",title:"Little Ones",ages:"thirty to forty",quote:"And then, one spring night, the house was full again."},mood:"nurseryNight",music:"little",intensity:.3,ambience:{room:.35,crickets:.25},zoom:8,surface:"wood",bounds:{minX:-3.75,maxX:3.75,minZ:-3.2,maxZ:3.3},ages:[31,31],clock:{seconds:330},timeUpText:"The first weeks went by in one long, sleepless, golden blur.",workAfter:["When you looked up, they had already fallen asleep \u2014 without you.","Sam had done the night feed alone again."],hint:"Blue lights are work. They will always be there.",build(i){let t=i.world;i.r=Kr(i,{era:"present",night:!0}),i.r.mobile.visible=!1,i.me=qn(31,.6,1.4,Math.PI),i.sam=sn(Ge.sam,31,"Sam",-.4,1.2,Math.PI*.9),i.baby=sn(Jr(.05),.05,"Baby",-.4,1.2),i.sam.pickUp(i.baby),i.sam.setPose("carry");let e=rs({w:1,d:.6,color:k.woodLight});t.add(e,3.3,.6,{ry:-Math.PI/2,collide:{w:1,d:.6}});let n=Zh();t.add(n,3.3,.6,{y:.75,ry:-Math.PI/2}),t.add(Jh(.6),2.9,2.6,{collide:.4}),i.atticBox=[2.9,2.6],t.add(Jh(.5),3.4,2,{collide:.35}),er(i,{clouds:3,y:-6,spread:14})},async intro(i){await Li(["Your parents moved to a little house by the sea.","The big house was yours now \u2014 the creaky stairs, the garden, the tree.","And the small pink room at the top of the stairs."],{minTime:1.2}),M.ui.clearNarration();let t=await hi("One spring night, someone new arrived. You had\u2026",["a daughter","a son"]);M.state.childKind=t===0?"daughter":"son";let e=t===0?"Lily":"Leo";M.state.childName=await Cf(`What did you name ${t===0?"her":"him"}?`,e),i.baby.name=qs(),await kn(3),await vt("{child}. The word felt strange for a day, and then it was the only word."),await St(i.sam,"Look at {them}. Look at what we made.")},moments:[{id:"holdNewborn",kind:"story",label:"Hold {child}",anchor:i=>i.sam,offset:[.4,0,.6],caption:"So small",async run(i){let t=i.me,e=i.sam,n=i.baby;await t.walkToChar(e,.7),e.faceChar(t),await St(e,"Here. Support the head. You\u2019ve got {them}."),e.putDown(t.position.x,t.position.z),t.pickUp(n),t.setPose("carry"),Pt("coo",{pitch:1.3}),await ie(t.position.x,t.position.z,4.4,2),Xr(.6,3),await Oi({label:"Hold {them} close",seconds:5}),await vt("So small. Smaller than you remembered anyone could be."),await vt("Once, you were this small. Someone held you exactly like this."),await Qt("holdNewborn","So small"),Xr(.35,4),e.walkTo(-1.4,2.7).then(()=>{e.setPose("sitGround"),e.faceNow(.5,0)}),await xe(t,8)}},{id:"mobile",label:"Open the box from the attic",at:[2.6,2.1],requires:["holdNewborn"],caption:"The same five stars",async run(i){let t=i.me;await t.walkTo(2.5,2),t.face(2.9,2.6),t.setPose("crouch"),await vt("A box from the attic, labelled in your mother\u2019s handwriting: NURSERY."),await Ht(.6),await vt("Inside, wrapped in tissue paper: five little stars on strings."),t.setPose("carry"),await t.walkTo(-2,-1.7),t.face(-2.5,-2.55),await ie(-2.5,-2.2,5,1.5),await tr({label:"Hang the mobile",keys:["up","left","right","up"]});let e=i.r.mobile;e.visible=!0,e.position.set(-2.5,.55,-2.55),e.userData.speed=.4,Pt("sparkle"),await Je({seconds:4,label:"Watch them turn."}),await vt("The same five stars. Going round and round, for somebody new."),await Qt("mobile","The same five stars"),await xe(t,8)}},{id:"finger",label:"Let {child} hold your finger",at:[.4,-.6],requires:["holdNewborn"],caption:"{Their} whole hand around one finger",async run(i){let t=i.me;await t.walkTo(.4,-.5),t.setPose("sit",{h:0}),t.setPose("sitGround"),await ie(.4,-.4,4,1.5),await Oi({label:"Offer one finger",seconds:3.5}),Pt("coo",{pitch:1.4}),await vt("{Their} whole hand closed around one of your fingers, and held on."),await vt("As if {they} already knew you. As if {they} had been waiting."),await Qt("finger","{Their} whole hand around one finger"),t.setPose("carry"),await xe(t,8)}},{id:"blanket",label:"Cover Sam with a blanket",anchor:i=>i.sam,offset:[.5,0,.5],requires:["holdNewborn"],caption:"Both of you, so tired",async run(i){let t=i.me,e=i.sam;await t.walkTo(e.position.x+.6,e.position.z+.6),t.faceChar(e);let n=K(.7,.05,.6,12114120);i.world.add(n,e.position.x,e.position.z+.15,{y:.28,ry:.3}),Pt("rustle"),await Je({seconds:4,label:"Let them sleep."}),await vt("You had never been so tired. You had never been so happy. It turned out those could be the same thing."),await Qt("blanket","Both of you, so tired")}},{id:"watchSleep",label:"Watch {them} breathe",at:[-1.9,-1.5],requires:["nightRocking"],caption:"Watching {them} breathe",async run(i){let t=i.me;await t.walkTo(-1.9,-1.55),t.face(-2.5,-2.55),await ie(-2.4,-2.3,4.2,2),await Je({seconds:8,label:"Just watch."}),await vt("In. Out. In. Out. You could have watched for a hundred years."),await Qt("watchSleep","Watching {them} breathe"),await xe(t,8)}},ru({id:"laptop",label:"Answer emails",at:[3.3,.6],emails:14,cost:70,lines:["Just ten minutes. Just the urgent ones.","They said it couldn\u2019t wait.","One more. Then bed."]}),{id:"nightRocking",kind:"story",label:"It\u2019s 3 a.m. \u2014 {child} is crying",at:[2,-1.5],requires:["holdNewborn"],caption:"Your mother\u2019s song, now yours",async run(i){let t=i.me,e=i.sam,n=i.baby;Pt("cry"),Oe("nurseryNight",3,{saturation:.85,vignette:.65}),t.carried||(await t.walkToChar(e,.7),e.putDown(t.position.x,t.position.z),t.pickUp(n)),t.setPose("carry"),Pt("cry",{delay:1.5}),await t.walkTo(2.2,-1.6),t.place(2.4,-2.15,-.7),t.setPose("rock"),await ie(2.3,-1.8,4.6,2),await Di("What did Mom do? What did she sing?"),await Ht(.6),await vt("And then, from somewhere very deep, the song came back to you."),Un("littleHum",{intensity:.5});let s=i.r.chair.userData.rock,r=0,o=l=>{r+=l;let c=Math.sin(r*2)*.09;s.rotation.x=c,t.lean=c*.8};M.updaters.add(o),await Ht(1.2);let a=(async()=>{for(let l of su)await St(t,l,{passive:!0,hold:3.4,name:"You"})})();await Qs({label:"Rock with the song \u2014 press on the first beat",hits:4,onlyDownbeat:!0,window:.3}),await a,n.setPose("sleep"),await Qt("nightRocking","Your mother\u2019s song, now yours"),M.updaters.delete(o),s.rotation.x=0,t.lean=0,await vt("You phoned your mother the next morning, just to tell her. She cried a little. So did you."),Un("little",{intensity:.4}),Oe("nurseryNight",3),t.setPose("idle"),t.position.set(2,0,-1.5),await t.walkTo(-1.9,-1.9),t.putDown(-2.5,-2.55),n.setPose("sleep"),n.extraY=.5,await xe(t,8)}},{id:"dawn",kind:"story",label:"Look out of the window",at:[1.2,-2.6],requires:["nightRocking"],caption:"The first sunrise with {child}",async run(i){let t=i.me;await t.walkTo(1.2,-2.5),t.face(1.2,-4),Oe("dawnNursery",8),Xn({birds:.6,room:.3},6),await ki(6.5,4),await Je({seconds:5,label:"The sun is coming up."}),await vt("You hadn\u2019t slept at all. You had never felt less tired."),await Qt("dawn","The first sunrise with {child}"),await vt("Everyone tells you the days are long and the years are short. Nobody tells you how fast they mean."),await Dn(3,"#fff6ee")}}],final:"dawn"},Vf={id:"ch5-steps",chapter:5,mood:"homeMorning",music:"little",intensity:.45,ambience:{room:.35,birds:.35,fire:.25},zoom:8.5,surface:"wood",ages:[32,33],clock:{seconds:330},timeUpText:"One morning you noticed {they} didn\u2019t crawl anymore. You couldn\u2019t remember the last time {they} had.",workAfter:["By the time you hung up, {they} had learned a new word. Sam heard it first.","The call took an hour. It felt like five minutes. It was {their} whole morning."],hint:"Spend the morning however you like.",build(i){i.r=Nf(i,{night:!1,fire:!0,toys:!0}),i.me=qn(32,1.6,1.4,-2.4),i.sam=sn(Ge.sam,32,"Sam",-1.5,2.2,2.5),i.sam.setPose("sitGround"),i.kid=sn(Jr(1.1),1.1,qs(),-.6,1.8,.3),i.kid.setPose("sitGround");let t=$h();i.world.add(t,.6,-1.2,{y:.42}),i.phoneObj=t,i.bubbleField=null},async intro(i){await kn(3),await vt("{child} could crawl now. Fast. Everything in the house had to move up a shelf."),i.kid.walkSpeed=1,i.kid.walkTo(.6,.6).then(()=>i.kid.setPose("sitGround"))},moments:[{id:"peekaboo",label:"Play peekaboo",anchor:i=>i.kid,offset:[.5,0,.5],caption:"Peekaboo, four hundred times",async run(i){let t=i.me,e=i.kid;await t.walkToChar(e,.9),e.faceChar(t),t.setPose("kneel"),await ie(e.position.x,e.position.z,4.8,1.5),await Qs({label:"Hide\u2026 and appear! (press with the pulse)",hits:5,period:1.3,window:.3,onPulse:()=>t.setPose("cry"),onHit:(n,s)=>{s>0&&(t.setPose("armsOpen"),Pt("giggle",{pitch:1.3}),Ui(e,1,.06))}}),t.setPose("kneel"),await vt("Every single time, {they} were astonished that you came back."),await Qt("peekaboo","Peekaboo, four hundred times"),t.setPose("idle"),await xe(t,8.5)}},{id:"tower",label:"Build a tower together",at:[-1.2,1.1],caption:"{They} knocked it down. You built it again.",async run(i){let t=i.me,e=i.kid,n=i.world;await t.walkTo(-.7,.9),t.face(-1.2,1.4),t.setPose("sitGround"),e.walkTo(-1.4,.7).then(()=>{e.setPose("sitGround"),e.faceChar(t)}),await ie(-1.1,1.2,4.6,1.5);let s=[k.red,k.yellow,k.blue,k.green].map((r,o)=>{let a=K(.24,.24,.24,r);return n.add(a,-1+o*.3,1.8,{}),a});await tr({label:"Stack them up",keys:["up","up","up","up"],onStep:r=>{let o=s[r],a=o.position.clone(),l=new C(-1.15,r*.24,1.35);$e(.45,c=>{o.position.lerpVectors(a,l,c),o.position.y+=Math.sin(c*Math.PI)*.3}),Pt("tap")}}),await Ht(.6),e.setPose("reachForward"),Pt("thud"),s.forEach((r,o)=>{let a=r.position.clone(),l=new C(-1.15+(o-1.5)*.45,0,1.6+o*.15);$e(.6,c=>{r.position.lerpVectors(a,l,c),r.rotation.x=c*2})}),Pt("giggle",{pitch:1.3,delay:.3}),await Ht(.8),e.setPose("sitGround"),await vt("Your first tower fell like this, a long time ago. You laughed then too."),await Qt("tower","{They} knocked it down. You built it again."),t.setPose("idle"),await xe(t,8.5)}},{id:"bubbles",label:"Blow bubbles",at:[2.2,.2],caption:"{Their} first word was you",async run(i){let t=i.me,e=i.kid,n=i.world;await t.walkTo(2,.4),t.face(.6,.6),await ie(1.3,.6,5.2,1.5);let s=n.particlesOf("bubbles",{center:new C(1,0,.6),area:{w:3,h:2.5,d:3},count:1,opacity:0});await Oi({label:"Hold Space to blow",seconds:3,onProgress:o=>{s.n<30&&o>0,s.setOpacity(o*1.6),Math.random()<.05&&Pt("bloop",{vol:.4})}}),n.removeParticles(s);let r=n.particlesOf("bubbles",{center:new C(1,0,.6),area:{w:3,h:2.5,d:3},count:24,opacity:1});e.setPose("reach"),e.lookAt(t),await js({count:5,label:"Pop them for {them}",onTap:()=>{Pt("pop"),Pt("giggle",{pitch:1.3,vol:.6})}}),e.setPose("sitGround"),await Ht(.4),Pt("coo",{pitch:1.3}),await St(e,"{me}!",{name:"{child}"}),await St(i.sam,"Did \u2014 did {they} just \u2014",{passive:!0,hold:1.6}),await vt("{Their} first word. It was you."),await Qt("bubbles","{Their} first word was you"),r.setOpacity(0),await xe(t,8.5)}},{id:"picturebook",label:"Read a picture book",at:[.6,-2.1],caption:"\u201CMoo,\u201D said the cow. Every night.",async run(i){let t=i.me,e=i.kid;await t.walkTo(.6,-2.05),t.faceNow(.6,0),t.setPose("read",{h:.45}),t.position.z=-2.35,await e.walkTo(1.1,-1.8),e.setPose("sitGround"),e.faceChar(t),await ie(.8,-2,4.6,1.5),await St(t,"And what does the cow say?"),await hi("What does the cow say?",["\u201CMoooo.\u201D","\u201CWoof!\u201D","\u201CQuack?\u201D"])===0?(Pt("giggle",{pitch:1.3}),await St(e,"Mooo!",{name:"{child}"})):(Pt("giggle",{pitch:1.3}),await St(e,"Nooo! Mooo!",{name:"{child}"}),await vt("{They} corrected you, very seriously, every night for a year.")),await Je({seconds:4,label:"Turn the pages slowly."}),await Qt("picturebook","\u201CMoo,\u201D said the cow. Every night."),t.setPose("idle"),t.position.z=-2.05,await xe(t,8.5)}},ru({id:"phone",label:"Answer the work call",at:[.6,-1.2],emails:6,cost:80,lines:["It\u2019s the office. It\u2019s probably important.","They keep calling.","Five minutes, I promise."]}),{id:"firstSteps",kind:"story",label:"Kneel down and open your arms",at:[2.6,1.6],caption:"Three steps. You cried.",async run(i){let t=i.me,e=i.kid,n=i.sam;await t.walkTo(2.6,1.6),e.place(-.9,1.2),e.setPose("sitGround"),t.faceChar(e),t.setPose("kneelOpen"),n.setPose("idle"),n.walkTo(-1.6,.6).then(()=>n.faceChar(e)),await ie(.8,1.4,6,1.5),await St(t,"Come on, {child}. Come here. You can do it."),e.setAge(1.35),e.setPose("stand"),e.faceChar(t),await St(n,"Oh. Oh, look. Look at {them}.",{passive:!0,hold:2}),await $a({label:"Steady, steady \u2014 \u2190 \u2192",seconds:3.5,difficulty:.8,onUpdate:o=>{e.tilt=-o*.3}}),e.tilt=0;let s=0,r=o=>{s+=o,e.tilt=Math.sin(s*7)*.12};M.updaters.add(r),e.walkSpeed=.6,await e.walkTo(t.position.x-.55,t.position.z-.1),M.updaters.delete(r),e.tilt=0,t.setPose("carryHigh"),t.pickUp(e),Pt("giggle",{pitch:1.3}),Pt("yay",{delay:.2,pitch:1.3}),Ui(t,2,.12),await ie(t.position.x,t.position.z,4.8,1.2),await St(n,"Three steps! Did you count?"),t.setPose("carry"),await Di("My mother cried, when I did this. Now I understand."),await Qt("firstSteps","Three steps. You cried."),await vt("After that, {they} never stopped walking. Away from you, mostly. That was the point. That was the hard part."),await Dn(2.5,"#fff6ee")}}],final:"firstSteps"},Gf={id:"ch5-summer",chapter:5,mood:"summerDay",music:"play",intensity:.45,ambience:{birds:.8,wind:.2},zoom:11,surface:"grass",ages:[36,37],clock:{seconds:400},timeUpText:"Somewhere in the middle of that summer, {they} stopped asking you to watch.",workAfter:["The sun had moved all the way across the yard.","{They} had come to show you something. You said \u201Cin a minute.\u201D {They} didn\u2019t come back."],hint:"A whole Saturday. Spend it well.",build(i){let t=i.world;i.r=tl(i,{season:"summer",treeStage:2,swing:!0,sandbox:!0}),t.bounds={minX:-12,maxX:12,minZ:-4,maxZ:7.5},i.me=qn(36,-4.6,.8,.5),i.sam=sn(Ge.sam,36,"Sam",-3,-2.05,0),i.sam.setPose("sit",{h:.45}),i.kid=sn(Jr(6),6,qs(),2.2,.6,.5),i.kid.walkSpeed=2.6;let e=$h();t.add(e,-3.6,-2.05,{y:.47}),i.phoneAt=[-3.6,-2.05],t.butterflies(3,{x:0,z:2,r:6},7),t.birds(5,3),i.bike=Wh(k.teal,.8),t.add(i.bike,7,6.4),er(i,{clouds:7,y:-4,spread:24})},async intro(i){await kn(3),await vt("The tree your grandfather planted with you was big enough for a swing now."),await St(i.kid,"{me}! {me}! Watch me! Are you watching?",{name:"{child}"})},moments:[{id:"swing",kind:"story",label:"Push the swing",at:[5.4,-1.2],caption:"\u201CHigher! Higher!\u201D",async run(i){let t=i.me,e=i.kid,n=i.r.tree,s=n.userData.swing,r=n.userData.swingLen,o=new C;s.getWorldPosition(o),await e.walkTo(o.x,o.z+.05),e.setPose("swing",{h:0}),e.faceNow(o.x,o.z+3),await t.walkTo(o.x,o.z-1),t.faceNow(o.x,o.z+2),await ie(o.x,o.z,6.5,1.5);let a=.15,l=0,c=h=>{l+=h;let u=Math.sin(l*Math.PI/1.2)*a;s.rotation.x=u;let d=o.y-Math.cos(u)*r,f=o.z+Math.sin(u)*r;e.position.set(o.x,0,f),e.extraY=d+.03,e.lean=-u*.5,t.setPose("push",{phase:Math.max(0,-Math.sin(l*Math.PI/1.2))})};M.updaters.add(c),await Qs({label:"Push when the swing comes back to you",hits:6,period:2.4,window:.35,onHit:(h,u)=>{u>0&&(a=Math.min(.75,a+.1),Pt("giggle",{pitch:1.1}),(h===2||h===4)&&St(e,h===2?"Higher!":"HIGHER!",{passive:!0,hold:1.2,name:"{child}"}))}}),await St(e,"I\u2019m flying! {me}, I can touch the leaves!",{name:"{child}"}),await Qt("swing","\u201CHigher! Higher!\u201D"),await $e(2.5,h=>{a=.75*(1-h)}),M.updaters.delete(c),s.rotation.x=0,e.extraY=0,e.lean=0,e.setPose("idle"),e.place(o.x+.6,o.z+.8),t.setPose("idle"),await xe(t,11)}},{id:"bike",label:"Teach {them} to ride a bike",at:[6.4,5.6],caption:"You let go. {They} didn\u2019t notice.",async run(i){let t=i.me,e=i.kid,n=i.world;await e.walkTo(6.6,5.4),await t.walkTo(6.2,5),n.remove(i.bike);let s=Wh(k.teal,.8);e.root.add(s),s.position.set(0,0,0),s.rotation.y=-Math.PI/2,s.scale.setScalar(.8/e.root.scale.x),e.setPose("bike",{h:.55}),await St(e,"Don\u2019t let go. Promise you won\u2019t let go.",{name:"{child}"}),await xe(t,8),e.walkSpeed=1.6;let r=[[-2,5.6],[-9,5.6]],o=e.walkTo(r[0][0],r[0][1]);await Ja({target:e,dist:1.4,seconds:6,label:"Run alongside. Hold on."}),await hi("{They} are wobbling less now\u2026",["Let go","Hold on a little longer"])===0?(e.walkSpeed=3.2,e.walkTo(-10,5.6),await vt("You let go. {They} didn\u2019t even notice. {They} just kept going, and going."),await Qt("bike","You let go. {They} didn\u2019t notice.")):(await o,e.walkSpeed=3.2,e.walkTo(-10,5.6),await vt("You held on a few more metres. Then {they} pulled ahead on {their} own, and you were just holding air."),await Qt("bike","You held on a little longer")),await Ht(1.5),e.root.remove(s),e.setPose("idle"),e.walkSpeed=2.6,n.add(i.bike,7,6.4),e.place(-8,4.8),await xe(t,11)}},{id:"puddles",label:"Jump in the puddles after the rain",at:[-1,4],caption:"Soaked to the knees, both of you",async run(i){let t=i.me,e=i.kid,n=i.world;Oe("rainyGrey",2);let s=n.particlesOf("rain",{area:{w:26,h:12,d:26}});Xn({rain:.8,birds:.1},1.5),await vt("A summer shower, out of nowhere. Then \u2014 just as fast \u2014 sun."),await Ht(2.5),n.removeParticles(s),Oe("summerDay",3),Xn({birds:.8,wind:.2},3);let r=[[-2.5,3.2],[.4,4.6],[-.6,2.2],[1.6,3],[-2,5.2]].map(([o,a])=>{let l=Ii(.45,9417936,10,.02);return l.material=ge(10274016,{roughness:.2,transparent:!0,opacity:.85}),n.add(l,o,a),{obj:l,x:o,z:a}});e.follow(t,1),await xe(t,9),await qr({label:"Splash!",items:r,radius:.5,onCollect:o=>{Pt("splash"),n.burst(new C(o.x,.2,o.z),{color:13625599,count:25,speed:1.5,size:.18}),Pt("giggle",{pitch:1.1,delay:.3})}}),e.follow(null),await vt("Sam just shook their head from the porch. Then came down and jumped in too."),await Qt("puddles","Soaked to the knees, both of you"),r.forEach(o=>n.remove(o.obj))}},{id:"dandelions",label:"Blow dandelions",at:[9,1],caption:"You both wished for the same thing",async run(i){let t=i.me,e=i.kid,n=i.world;await t.walkTo(8.6,1.2),await e.walkTo(9.4,1.4),e.faceChar(t),t.faceChar(e),t.setPose("sitGround"),e.setPose("sitGround"),await ie(9,1.3,5,1.5),await St(e,"You have to make a wish. But you can\u2019t say it, or it won\u2019t come true.",{name:"{child}"}),await Oi({label:"Hold Space to blow",seconds:2.5}),Pt("blow"),n.burst(new C(9,.6,1.3),{color:16777215,count:60,speed:1.2,life:3.5,size:.14}),await Ht(1.5),await St(e,"What did you wish for?",{name:"{child}"}),await St(t,"I can\u2019t tell you. Or it won\u2019t come true."),await vt("You wished that this would last. You suspect {they} wished for a puppy."),await Qt("dandelions","You both wished for the same thing"),t.setPose("idle"),e.setPose("idle"),await xe(t,11)}},{id:"drawing",label:"{child} has something for you",anchor:i=>i.kid,offset:[.4,0,.4],requires:["swing"],caption:"It\u2019s you. And me. And the tree.",async run(i){let t=i.me,e=i.kid,n=i.world;await t.walkToChar(e,.9),e.faceChar(t),await St(e,"Close your eyes. Okay, open them!",{name:"{child}"});let s=zf(),r=Kh(s);n.add(r,e.position.x,e.position.z,{y:1.1}),r.lookAt(M.camera.position),r.scale.setScalar(1.6),await ie(e.position.x,e.position.z,4,1.5),await St(e,"That\u2019s you. And that\u2019s Sam. And that\u2019s me. And that\u2019s the tree. And the swing.",{name:"{child}"}),await St(t,"It\u2019s the most beautiful thing I\u2019ve ever seen."),await St(e,"I know.",{name:"{child}"}),await Qt("drawing","It\u2019s you. And me. And the tree."),M.state.flags.drawing=!0,await vt("You put it on the fridge. Later, in a frame. Much later, you would find it again."),n.remove(r),await xe(t,11)}},{id:"lemonade",label:"{child}\u2019s lemonade stand",at:[1,6],requires:["swing"],caption:"Ten cups. You drank every one.",async run(i){let t=i.me,e=i.kid,n=i.world,s=Xa();n.add(s,1,6.4,{collide:{w:1.5,d:.7}}),await e.walkTo(1,7),e.faceNow(1,4),await t.walkTo(1,5.3),t.faceNow(1,7),await ie(1,6,5.5,1.5),await St(e,"Lemonade! Fifty cents! It\u2019s very sour!",{name:"{child}"}),await js({count:10,label:"Buy a cup. And another. And another.",onTap:r=>{Pt("tap"),r%3===0&&Pt("giggle",{pitch:1.2})}}),await St(e,"You\u2019re my best customer.",{name:"{child}"}),await vt("Your grandfather once bought ten cups from you, at a sticky table on this same street."),await Qt("lemonade","Ten cups. You drank every one."),await xe(t,11)}},{id:"boss",kind:"work",label:"Your phone is ringing (the boss)",at:[-3.6,-1.6],radius:1,async run(i){let t=i.me;if(Pt("phone"),await t.walkTo(-3.6,-1.5),await St(null,"Hi \u2014 sorry to call on a Saturday. Any chance you could come in? Just for a few hours.",{name:"Your boss"}),await hi("Just for a few hours\u2026",["\u201CSure. I\u2019ll be there.\u201D","\u201CNot today. It\u2019s Saturday.\u201D"])===0){M.state.stats.emails+=25,M.state.stats.workCalls++,await Dn(1.2),i.passTime(140);let n=i.world.hotspots.filter(s=>s.enabled&&!s.done&&(s.m?.kind??"little")==="little");for(let s of n.slice(0,2))s.setEnabled(!1),s.done=!0,s.m?.caption&&nu(s.m.id,typeof s.m.caption=="string"?s.m.caption:s.m.caption.text);Oe("summerDusk",.1),await kn(1.5),await vt("You came home after dark. The swing was still moving, just a little, in the wind."),Oe("summerDay",6)}else M.state.flags.saidNo=!0,await St(t,"Not today. It\u2019s Saturday."),await vt("You turned the phone off and put it in a drawer. Nothing terrible happened. Nothing terrible ever did.")}},{id:"picnic",kind:"story",label:"Dinner under the tree",at:[2.6,.2],requires:["swing"],caption:"Dinner under the tree",async run(i){let t=i.me,e=i.kid,n=i.sam,s=i.world;Oe("summerDusk",6),Un("little",{intensity:.5}),Xn({crickets:.5,birds:.2},6),s.add(za(k.blue),2.4,.8),n.setPose("idle"),await Promise.all([t.walkTo(1.8,.6),e.walkTo(2.6,1.3),n.walkTo(3,.4)]),t.setPose("sitGround"),e.setPose("lieBack"),n.setPose("sitGround"),t.face(2.6,1.3),n.face(2.6,1.3),await ie(2.5,.8,5.5,2),await Ht(1),e.setPose("sleep"),await St(n,"Do you think {they}\u2019ll remember this? Any of it?",{name:"Sam"}),await St(t,"No. Probably not."),await St(t,"But we will."),await Je({seconds:6,label:"Stay a little longer."}),await Qt("picnic","Dinner under the tree"),await Dn(3)}}],final:"picnic"},Wf={id:"ch5-bedtime",chapter:5,mood:"nurseryNight",music:"bedtime",intensity:.35,ambience:{room:.35,crickets:.3},zoom:7.5,surface:"wood",bounds:{minX:-3.75,maxX:3.75,minZ:-3.2,maxZ:3.3},ages:[39,40],clock:{seconds:300},timeUpText:"Bedtime got later and later. One night {they} said {they} could read on {their} own now.",workAfter:["The presentation was finished. {They} were already asleep.","{They} called for you once. You said \u201Cin a minute.\u201D"],hint:"The last bedtime story you remember reading.",build(i){let t=i.world;i.r=Kr(i,{era:"kid",night:!0}),i.me=qn(39,.4,2.2,Math.PI),i.kid=sn(Jr(8.5),8.5,qs(),-2.9,-1.9,0),i.kid.setPose("sit",{h:.55}),i.kid.place(-2.9,-2.2,0),t.add(Gr(14200958),1.6,1.6),i.teddyAt=[1.6,1.6],i.starPack=K(.3,.05,.2,k.yellow),t.add(i.starPack,3.2,-1,{y:0});let e=rs({w:1,d:.6,color:k.woodLight});if(t.add(e,3.3,.8,{ry:-Math.PI/2,collide:{w:1,d:.6}}),t.add(Zh(),3.3,.8,{y:.75,ry:-Math.PI/2}),M.state.flags.drawing){let n=Kh(zf());t.add(n,-3.9,.6,{y:1.8,ry:Math.PI/2})}},async intro(i){await kn(3),await vt("{child} was eight. {They} had opinions about everything, and questions about everything else."),await St(i.kid,"{me}! You said one story. You promised.",{name:"{child}"})},moments:[{id:"stars",label:"Stick glow-in-the-dark stars on the wall",at:[3,-1],caption:"A whole sky, just for {them}",async run(i){let t=i.me,e=i.world;await t.walkTo(2.8,-1),i.starPack.visible=!1,await t.walkTo(-1,-2.8),t.face(-1,-4),await ie(-1.5,-2.8,5.2,1.5);let n=[[-2.6,2.6],[-1.9,2.9],[-1.2,2.5],[-.5,2.9],[-3.2,2.2]],s=[];await tr({label:"Press them on, one by one",keys:["up","left","up","right","up"],onStep:r=>{let[o,a]=n[r],l=Me(.07,0,15400880,0,1,{emissive:14221210,emissiveIntensity:2.5});e.add(l,o,-3.45,{y:a}),s.push(l),Pt("tap")}}),Oe("nurseryNight",2,{bloom:1.1}),await St(i.kid,"Whoa. It\u2019s like sleeping outside.",{name:"{child}"}),await Qt("stars","A whole sky, just for {them}"),Oe("nurseryNight",2),await xe(t,7.5)}},{id:"monster",label:"Check under the bed for monsters",at:[-2.2,-.4],caption:"No monsters. Just a sock.",async run(i){let t=i.me;await St(i.kid,"Can you check? Just in case.",{name:"{child}"}),await t.walkTo(-2.2,-.5),t.face(-2.9,-1.6),t.setPose("crouch"),await ie(-2.6,-1,4.5,1.5),await Oi({label:"Look carefully\u2026",seconds:3}),Pt("rustle"),await St(t,"Hmm. One sock. Two crayons. A very old raisin. No monsters."),Pt("giggle",{pitch:1.05}),await St(i.kid,"They probably heard you coming.",{name:"{child}"}),await Qt("monster","No monsters. Just a sock."),t.setPose("idle"),await xe(t,7.5)}},{id:"teddy",label:"Find {their} bear",at:[1.6,1.6],caption:"The bear with one ear",async run(i){let t=i.me;await t.walkTo(1.7,1.4),t.setPose("crouch"),await Ht(.6),t.setPose("idle"),await t.walkTo(-2,-1.6),await St(i.kid,"He can\u2019t sleep without me. It\u2019s not for me. It\u2019s for him.",{name:"{child}"}),await vt("The bear had one ear left. {They} loved him exactly twice as much because of it."),await Qt("teddy","The bear with one ear")}},ru({id:"laptop",label:"Finish the presentation",at:[3.3,.8],emails:10,cost:60,lines:["It\u2019s due tomorrow. It has to be tonight.","Just the last slide."]}),{id:"story",kind:"story",label:"Read the bedtime story",at:[-2,-1],caption:"One more time. Always one more time.",async run(i){let t=i.me,e=i.kid;await t.walkTo(-2,-1.1),t.faceChar(e),t.setPose("sit",{h:.5}),t.position.set(-2.1,0,-1.2),e.setPose("lie"),e.position.set(-2.9,0,-2.1),e.extraY=.42,e.heading=e.targetHeading=Math.PI,await ie(-2.5,-1.6,4.4,2);let n=M.state.flags.storyChoice;n?await vt(`You read ${{dragon:"the dragon who was afraid of the dark",ocean:"the whale who sang to the moon",moon:"the girl who lived on the moon"}[n]}. The same story your parents read to you, from the same falling-apart book.`):await vt("You read the same story your parents read to you, from the same falling-apart book."),await Je({seconds:5,label:"Read slowly. Do all the voices."}),await St(e,"Again?",{name:"{child}"}),await hi("\u201CAgain?\u201D",["\u201COf course.\u201D","\u201CIt\u2019s late, sweetheart.\u201D"])===0?await vt("Again. And again. You knew it by heart. So did {they}. That wasn\u2019t the point."):(await St(e,"Pleeease. Just the end bit.",{name:"{child}"}),await vt("You read the end bit. Then the middle bit. Then the whole thing.")),await Qt("story","One more time. Always one more time.")}},{id:"questions",kind:"story",label:"Turn off the lamp",at:[3.1,-2.6],requires:["story"],caption:"\u201CWill you always be here?\u201D",async run(i){let t=i.me,e=i.kid;await t.walkTo(3,-2.5),Oe("nurseryNight",2,{sunIntensity:.3,hemiIntensity:.5}),i.r.lampLight&&(i.r.lampLight.intensity=1.2),await St(e,"{me}?",{name:"{child}"}),await St(t,"Mm?"),await St(e,"Will you always be here?",{name:"{child}"}),await t.walkTo(-2,-1.2),t.faceChar(e);let n=await hi("\u201CWill you always be here?\u201D",["\u201CAlways.\u201D","\u201CAs long as I possibly can.\u201D","\u201CEven when you can\u2019t see me.\u201D"]);M.state.flags.alwaysAnswer=["Always.","As long as I possibly can.","Even when you can\u2019t see me."][n],await St(t,M.state.flags.alwaysAnswer),await St(e,"Okay.",{name:"{child}"}),await vt("{They} believed you completely. That was the most frightening thing about it."),await Qt("questions","\u201CWill you always be here?\u201D")}},{id:"goodnight",kind:"story",label:"Kiss {them} goodnight",anchor:i=>i.kid,offset:[.9,0,.6],requires:["questions"],caption:"Standing in the doorway",async run(i){let t=i.me,e=i.kid;await t.walkToChar(e,.7),t.setPose("crouch"),Pt("kiss"),await Ht(.8),e.setPose("sleep"),t.setPose("idle"),await t.walkTo(-3.2,1.8),t.faceChar(e),await ie(-2.6,-.5,6.5,3),await Je({seconds:8,label:"Stand in the doorway."}),await vt("You stood in the doorway a long time. Longer than you needed to."),await vt("Not long enough."),await Qt("goodnight","Standing in the doorway"),await Dn(4),await Li(["After that night, something changed speed.","Nobody warned you. Nobody ever does."],{minTime:1.4}),M.ui.clearNarration()}}],final:"goodnight"};var nr=[Ff,Of,Bf,Hf,Vf,Gf,Wf];function Zv(){let i=new URLSearchParams(location.search);M.debug=i.has("debug"),M.speed=parseFloat(i.get("speed")||"1"),M.auto=i.has("auto"),M.autoSkip=i.has("skiplittle"),M.log=[],M.renderer=new Sa(document.getElementById("game")),i.has("lowfx")&&(M.renderer.r.setPixelRatio(.5),M.renderer.r.shadowMap.enabled=!1,M.renderer.bloom.enabled=!1,M.renderer.resize()),M.scene=M.renderer.scene,M.camera=M.renderer.camera,M.input=new Ta(M.renderer.r.domElement),M.ui=new Ea,M.audio=new Ra,M.album=new zr,M.director=new Za(nr),M.director.onTitle=()=>{M.director.abort(),qf()};for(let s of nr)for(let r of s.moments??[])r.caption&&M.album.register(r.caption.id??r.id,s.chapter,typeof r.caption=="string"?r.caption:r.caption.text,s.id);for(let s of nr)(s.extraMoments??[]).forEach(([r,o])=>M.album.register(r,s.chapter,o,s.id));document.getElementById("menuBtn").addEventListener("click",()=>M.director.toggleMenu()),document.getElementById("albumBtn").addEventListener("click",()=>{M.album.open?M.album.hide():M.director.openAlbum()});let t=performance.now(),e=s=>{let r=Math.min(M.auto?.25:.05,(s-t)/1e3);t=s,M.realTime+=r;let o=M.input;if(o.pressed("pause")&&M.director.current&&M.director.toggleMenu(),o.pressed("album")&&M.director.current&&!M.director.menuOpen&&(M.album.open?M.album.hide():M.director.openAlbum()),!M.paused){let a=r*M.timeScale*M.speed;M.dt=a,M.time+=a;for(let l of[...M.updaters])l(a);for(let l of[...M.realUpdaters])l(r*M.speed);M.world&&M.world.update(a,M.time),M.director.update(a,r*M.speed),jr&&Jv(r)}M.ui.update(),M.renderer.update(r),M.renderer.render(),o.endFrame(),requestAnimationFrame(e)};requestAnimationFrame(e);let n=i.get("scene")??i.get("s");if(n!==null){let s=nr.findIndex(o=>o.id===n);s<0&&(s=parseInt(n,10)||0),M.state.identity=i.get("who")==="father"?"father":"mother",M.state.childName=i.get("child")||M.state.childName,M.ui.fade(1,.01);let r=()=>{M.audio.init(),M.director.start(s)};if(i.has("noaudio"))M.director.start(s);else{let o=Tt("div","");o.style.cssText="position:fixed;inset:0;z-index:99;display:flex;align-items:center;justify-content:center;color:#fff;font:20px sans-serif;cursor:pointer;pointer-events:auto",o.textContent="Click to start scene "+nr[s].id,document.body.appendChild(o),o.addEventListener("click",()=>{o.remove(),r()})}return}qf()}var jr=null,Xf=0;function $v(){M.world&&M.world.dispose();let i=new Ks({name:"title"});M.world=i,jr=i,i.add(Da({w:9,d:9,h:1,top:k.grassSpring,seed:8}),0,0),i.add(ka({stage:3,season:"spring",swing:!0}),.6,-.8),i.add(Ba(),-1.6,1.4,{ry:.6});let t=_e(4);for(let n=0;n<30;n++)i.add(Ua(k.grassDark,n),t.range(-4,4),t.range(-4,4));for(let n=0;n<14;n++)i.add(Vr(t.pick([k.pink,k.yellow,16777215]),n),t.range(-4,4),t.range(-4,4));i.add(Js({kind:"blossom",season:"spring",size:.9,seed:3}),-3,-2.6),i.add(Hr(.8,2),3,2.6),i.particlesOf("petals",{area:{w:14,h:8,d:14},count:60}),i.particlesOf("motes",{area:{w:12,h:6,d:12},count:30,opacity:.6});for(let n=0;n<5;n++){let s=Na(n+1,1.2),r=n*1.3;i.add(s,Math.cos(r)*11,Math.sin(r)*11,{y:-2+n*.6})}let e=M.renderer;e.setFollow(null),e.camGoal.set(0,.6,0),e.zoomGoal=11.5,e.camBounds=null,e.snapCamera(),e.setMood("dawnNursery",0,{dream:.35,tilt:.8})}function Jv(i){Xf+=i,M.renderer.camAz=45+Math.sin(Xf*.05)*25}function qf(){M.director.current=null,M.ui.showHud(!1),M.ui.clock(!1),$v(),M.ui.fade(0,3);let i=document.getElementById("title");i.innerHTML="",i.classList.remove("hidden"),i.appendChild(Tt("h1","","Little Moments")),i.appendChild(Tt("div","sub","We are born so tiny. And then \u2014 so fast."));let t=Tt("div","btns");i.appendChild(t);let e=zr.readSave(),n=Tt("button","",e?"Begin a new life":"Begin");if(t.appendChild(n),e&&e.sceneIndex>0){let r=Tt("button","ghost","Continue");r.addEventListener("click",()=>{M.audio.init(),M.album.load(e),Yf(e.sceneIndex)}),t.insertBefore(r,n)}i.appendChild(Tt("div","foot","Best with headphones \xB7 about two to three hours, in chapters \xB7 progress saves itself<br>WASD / arrows / click to move \xB7 Space to interact \xB7 hold Space to keep a moment \xB7 Esc to pause"));let s=()=>{M.audio.init(),M.audio.music("title",{intensity:.3}),M.audio.ambience({birds:.4,wind:.2})};window.addEventListener("pointerdown",s,{once:!0}),window.addEventListener("keydown",s,{once:!0}),n.addEventListener("click",()=>{M.audio.init(),M.audio.music("title",{intensity:.5}),t.innerHTML="",i.querySelector(".sub").textContent="In this story, you will grow up to become\u2026";let r=Tt("div","who");t.appendChild(r);let o=Tt("button","","a mother"),a=Tt("button","","a father");r.appendChild(o),r.appendChild(a);let l=c=>{M.album.wipe(),M.state.identity=c,M.state.flags={},M.state.stats={emails:0,workCalls:0},Yf(0)};o.addEventListener("click",()=>l("mother")),a.addEventListener("click",()=>l("father"))})}async function Yf(i){let t=document.getElementById("title");await M.ui.fade(1,2.2,"#000"),t.classList.add("hidden"),t.innerHTML="",jr&&(jr.dispose(),jr=null,M.world=null),M.renderer.camAz=45,M.director.start(i)}window.addEventListener("DOMContentLoaded",Zv);window.G=M;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
