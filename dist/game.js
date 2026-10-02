(()=>{var zl="170";var Rf=0,Gh=1,Cf=2;var sd=1,Hl=2,Gn=3,Sn=0,Qe=1,Me=2,In=0,fs=1,un=2,Wh=3,Xh=4,Pf=5,Ci=100,If=101,Lf=102,Df=103,Uf=104,Nf=200,kf=201,Ff=202,Of=203,uc=204,dc=205,Bf=206,zf=207,Hf=208,Vf=209,Gf=210,Wf=211,Xf=212,qf=213,Yf=214,fc=0,pc=1,mc=2,xs=3,gc=4,xc=5,yc=6,vc=7,rd=0,Zf=1,$f=2,li=0,Vl=1,Gl=2,Wl=3,Xl=4,Jf=5,ql=6,yr=7;var od=300,ys=301,vs=302,_c=303,bc=304,jo=306,Mc=1e3,Ii=1001,wc=1002,on=1003,Kf=1004;var Br=1005;var Cn=1006,Ia=1007;var Li=1008;var qn=1009,ad=1010,cd=1011,sr=1012,Yl=1013,Di=1014,Pn=1015,En=1016,Zl=1017,$l=1018,_s=1020,ld=35902,hd=1021,ud=1022,wn=1023,dd=1024,fd=1025,ps=1026,bs=1027,Jl=1028,Kl=1029,pd=1030,Ql=1031;var jl=1033,xo=33776,yo=33777,vo=33778,_o=33779,Sc=35840,Tc=35841,Ec=35842,Ac=35843,Rc=36196,Cc=37492,Pc=37496,Ic=37808,Lc=37809,Dc=37810,Uc=37811,Nc=37812,kc=37813,Fc=37814,Oc=37815,Bc=37816,zc=37817,Hc=37818,Vc=37819,Gc=37820,Wc=37821,bo=36492,Xc=36494,qc=36495,md=36283,Yc=36284,Zc=36285,$c=36286;var Mo=2300,Jc=2301,La=2302,qh=2400,Yh=2401,Zh=2402;var Qf=3200,jf=3201;var gd=0,tp=1,ai="",Ue="srgb",Rs="srgb-linear",ta="linear",re="srgb";var qi=7680;var $h=519,ep=512,np=513,ip=514,xd=515,sp=516,rp=517,op=518,ap=519,Kc=35044;var Jh="300 es",Wn=2e3,wo=2001,hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kh=1234567,Qs=Math.PI/180,rr=180/Math.PI;function Ln(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function th(i,t){return(i%t+t)%t}function cp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function lp(i,t,e){return i!==t?(e-i)/(t-i):0}function js(i,t,e){return(1-e)*i+e*t}function hp(i,t,e,n){return js(i,t,1-Math.exp(-e*n))}function up(i,t=1){return t-Math.abs(th(i,t*2)-t)}function dp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function fp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function pp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function mp(i,t){return i+Math.random()*(t-i)}function gp(i){return i*(.5-Math.random())}function xp(i){i!==void 0&&(Kh=i);let t=Kh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yp(i){return i*Qs}function vp(i){return i*rr}function _p(i){return(i&i-1)===0&&i!==0}function bp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Cs={DEG2RAD:Qs,RAD2DEG:rr,generateUUID:Ln,clamp:Ne,euclideanModulo:th,mapLinear:cp,inverseLerp:lp,lerp:js,damp:hp,pingpong:up,smoothstep:dp,smootherstep:fp,randInt:pp,randFloat:mp,randFloatSpread:gp,seededRandom:xp,degToRad:yp,radToDeg:vp,isPowerOfTwo:_p,ceilPowerOfTwo:bp,floorPowerOfTwo:Mp,setQuaternionFromProperEuler:wp,normalize:ae,denormalize:Mn},j=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],_=s[1],v=s[4],y=s[7],D=s[2],E=s[5],R=s[8];return r[0]=o*x+a*_+c*D,r[3]=o*g+a*v+c*E,r[6]=o*p+a*y+c*R,r[1]=l*x+h*_+u*D,r[4]=l*g+h*v+u*E,r[7]=l*p+h*y+u*R,r[2]=d*x+f*_+m*D,r[5]=d*g+f*v+m*E,r[8]=d*p+f*y+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Da.makeScale(t,e)),this}rotate(t){return this.premultiply(Da.makeRotation(-t)),this}translate(t,e){return this.premultiply(Da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Da=new Xt;function yd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function So(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sp(){let i=So("canvas");return i.style.display="block",i}var Qh={};function Js(i){i in Qh||(Qh[i]=!0,console.warn(i))}function Tp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ep(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ap(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Jt={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(i.r=Xn(i.r),i.g=Xn(i.g),i.b=Xn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(i.r=ms(i.r),i.g=ms(i.g),i.b=ms(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ai?ta:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var jh=[.64,.33,.3,.6,.15,.06],tu=[.2126,.7152,.0722],eu=[.3127,.329],nu=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[Rs]:{primaries:jh,whitePoint:eu,transfer:ta,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:tu,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:jh,whitePoint:eu,transfer:re,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:tu,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}});var Yi,Qc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=So("canvas")),Yi.width=t.width,Yi.height=t.height;let n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=So("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Rp=0,To=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Ln(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ua(s[o].image)):r.push(Ua(s[o]))}else r=Ua(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ua(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Cp=0,je=class i extends hi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ii,s=Ii,r=Cn,o=Li,a=wn,c=qn,l=i.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Ln(),this.name="",this.source=new To(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==od)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mc:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case wc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mc:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case wc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=od;je.DEFAULT_ANISOTROPY=1;var le=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,y=(f+1)/2,D=(p+1)/2,E=(h+d)/4,R=(u+x)/4,L=(m+g)/4;return v>y&&v>D?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=R/n):y>D?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=L/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=R/r,s=L/r),this.set(n,s,r,e),this}let _=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jc=class extends hi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new To(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xe=class extends jc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Eo=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var tl=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ui=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==m){let g=1-a,p=c*d+l*f+h*m+u*x,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let D=Math.sqrt(v),E=Math.atan2(D,p*_);g=Math.sin(g*E)/D,a=Math.sin(a*E)/D}let y=a*_;if(c=c*g+d*y,l=l*g+f*y,h=h*g+m*y,u=u*g+x*y,g===1-a){let D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(su.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Na.copy(this).projectOnVector(t),this.sub(Na)}reflect(t){return this.sub(Na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Na=new C,su=new ui,Yn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(t.matrixWorld),this.union(zr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),Hr.subVectors(this.max,zs),Zi.subVectors(t.a,zs),$i.subVectors(t.b,zs),Ji.subVectors(t.c,zs),ei.subVectors($i,Zi),ni.subVectors(Ji,$i),Mi.subVectors(Zi,Ji);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-Mi.z,Mi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,Mi.z,0,-Mi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-Mi.y,Mi.x,0];return!ka(e,Zi,$i,Ji,Hr)||(e=[1,0,0,0,1,0,0,0,1],!ka(e,Zi,$i,Ji,Hr))?!1:(Vr.crossVectors(ei,ni),e=[Vr.x,Vr.y,Vr.z],ka(e,Zi,$i,Ji,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},On=[new C,new C,new C,new C,new C,new C,new C,new C],yn=new C,zr=new Yn,Zi=new C,$i=new C,Ji=new C,ei=new C,ni=new C,Mi=new C,zs=new C,Hr=new C,Vr=new C,wi=new C;function ka(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wi.fromArray(i,r);let a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),c=t.dot(wi),l=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Pp=new Yn,Hs=new C,Fa=new C,di=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Pp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hs.subVectors(t,this.center);let e=Hs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hs.copy(t.center).add(Fa)),this.expandByPoint(Hs.copy(t.center).sub(Fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Bn=new C,Oa=new C,Gr=new C,ii=new C,Ba=new C,Wr=new C,za=new C,or=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Oa.copy(t).add(e).multiplyScalar(.5),Gr.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(Oa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Gr),a=ii.dot(this.direction),c=-ii.dot(Gr),l=ii.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Oa).addScaledVector(Gr,d),f}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);let n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,s,r){Ba.subVectors(e,t),Wr.subVectors(n,t),za.crossVectors(Ba,Wr);let o=this.direction.dot(za),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);let c=a*this.direction.dot(Wr.crossVectors(ii,Wr));if(c<0)return null;let l=a*this.direction.dot(Ba.cross(ii));if(l<0||c+l>o)return null;let h=-a*ii.dot(za);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,g)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),o=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ip,t,Lp)}lookAt(t,e,n){let s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),si.crossVectors(n,sn),si.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),si.crossVectors(n,sn)),si.normalize(),Xr.crossVectors(sn,si),s[0]=si.x,s[4]=Xr.x,s[8]=sn.x,s[1]=si.y,s[5]=Xr.y,s[9]=sn.y,s[2]=si.z,s[6]=Xr.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],_=n[3],v=n[7],y=n[11],D=n[15],E=s[0],R=s[4],L=s[8],w=s[12],b=s[1],I=s[5],H=s[9],N=s[13],U=s[2],Y=s[6],W=s[10],nt=s[14],X=s[3],ht=s[7],yt=s[11],Et=s[15];return r[0]=o*E+a*b+c*U+l*X,r[4]=o*R+a*I+c*Y+l*ht,r[8]=o*L+a*H+c*W+l*yt,r[12]=o*w+a*N+c*nt+l*Et,r[1]=h*E+u*b+d*U+f*X,r[5]=h*R+u*I+d*Y+f*ht,r[9]=h*L+u*H+d*W+f*yt,r[13]=h*w+u*N+d*nt+f*Et,r[2]=m*E+x*b+g*U+p*X,r[6]=m*R+x*I+g*Y+p*ht,r[10]=m*L+x*H+g*W+p*yt,r[14]=m*w+x*N+g*nt+p*Et,r[3]=_*E+v*b+y*U+D*X,r[7]=_*R+v*I+y*Y+D*ht,r[11]=_*L+v*H+y*W+D*yt,r[15]=_*w+v*N+y*nt+D*Et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+x*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],_=u*g*l-x*d*l+x*c*f-a*g*f-u*c*p+a*d*p,v=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,y=h*x*l-m*u*l+m*a*f-o*x*f-h*a*p+o*u*p,D=m*u*c-h*x*c-m*a*d+o*x*d+h*a*g-o*u*g,E=e*_+n*v+s*y+r*D;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return t[0]=_*R,t[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*p-n*d*p)*R,t[2]=(a*g*r-x*c*r+x*s*l-n*g*l-a*s*p+n*c*p)*R,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*R,t[4]=v*R,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*R,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*p-e*c*p)*R,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*R,t[8]=y*R,t[9]=(m*u*r-h*x*r-m*n*f+e*x*f+h*n*p-e*u*p)*R,t[10]=(o*x*r-m*a*r+m*n*l-e*x*l-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*R,t[12]=D*R,t[13]=(h*x*s-m*u*s+m*n*d-e*x*d-h*n*g+e*u*g)*R,t[14]=(m*a*s-o*x*s-m*n*c+e*x*c+o*n*g-e*a*g)*R,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,_=c*l,v=c*h,y=c*u,D=n.x,E=n.y,R=n.z;return s[0]=(1-(x+p))*D,s[1]=(f+y)*D,s[2]=(m-v)*D,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+p))*E,s[6]=(g+_)*E,s[7]=0,s[8]=(m+v)*R,s[9]=(g-_)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ki.set(s[0],s[1],s[2]).length(),o=Ki.set(s[4],s[5],s[6]).length(),a=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],vn.copy(this);let l=1/r,h=1/o,u=1/a;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Wn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,m;if(a===Wn)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===wo)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Wn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h,m,x;if(a===Wn)m=(o+r)*u,x=-2*u;else if(a===wo)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ki=new C,vn=new ce,Ip=new C(0,0,0),Lp=new C(1,1,1),si=new C,Xr=new C,sn=new C,ru=new ce,ou=new ui,Dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ou.setFromEuler(this),this.setFromQuaternion(ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var ar=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dp=0,au=new C,Qi=new ui,zn=new ce,qr=new C,Vs=new C,Up=new C,Np=new ui,cu=new C(1,0,0),lu=new C(0,1,0),hu=new C(0,0,1),uu={type:"added"},kp={type:"removed"},ji={type:"childadded",child:null},Ha={type:"childremoved",child:null},Re=class i extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new Dn,n=new ui,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Xt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(cu,t)}rotateY(t){return this.rotateOnAxis(lu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return au.copy(t).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cu,t)}translateY(t){return this.translateOnAxis(lu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qr.copy(t):qr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Vs,qr,this.up):zn.lookAt(qr,Vs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(zn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),ji.child=t,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kp),Ha.child=t,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,Up),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Np,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Re.DEFAULT_UP=new C(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=new C,Hn=new C,Va=new C,Vn=new C,ts=new C,es=new C,du=new C,Ga=new C,Wa=new C,Xa=new C,qa=new le,Ya=new le,Za=new le,ci=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),Hn.subVectors(n,e),Va.subVectors(t,e);let o=_n.dot(_n),a=_n.dot(Hn),c=_n.dot(Va),l=Hn.dot(Hn),h=Hn.dot(Va),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vn.x),c.addScaledVector(o,Vn.y),c.addScaledVector(a,Vn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return qa.setScalar(0),Ya.setScalar(0),Za.setScalar(0),qa.fromBufferAttribute(t,e),Ya.fromBufferAttribute(t,n),Za.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(qa,r.x),o.addScaledVector(Ya,r.y),o.addScaledVector(Za,r.z),o}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Hn.subVectors(t,e),_n.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),_n.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ts.subVectors(s,n),es.subVectors(r,n),Ga.subVectors(t,n);let c=ts.dot(Ga),l=es.dot(Ga);if(c<=0&&l<=0)return e.copy(n);Wa.subVectors(t,s);let h=ts.dot(Wa),u=es.dot(Wa);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ts,o);Xa.subVectors(t,r);let f=ts.dot(Xa),m=es.dot(Xa);if(m>=0&&f<=m)return e.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(es,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return du.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(du,a);let p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(ts,o).addScaledVector(es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function $a(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var At=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=th(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=$a(o,r,t+1/3),this.g=$a(o,r,t),this.b=$a(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Jt.fromWorkingColorSpace(ze.copy(this),t),Math.round(Ne(ze.r*255,0,255))*65536+Math.round(Ne(ze.g*255,0,255))*256+Math.round(Ne(ze.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(ze.copy(this),e);let n=ze.r,s=ze.g,r=ze.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Ue){Jt.fromWorkingColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,s=ze.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Yr);let n=js(ri.h,Yr.h,e),s=js(ri.s,Yr.s,e),r=js(ri.l,Yr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new At;At.NAMES=vd;var Fp=0,Zn=class extends hi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Ln(),this.name="",this.blending=fs,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=dc,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uc&&(n.blendSrc=this.blendSrc),this.blendDst!==dc&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},qe=class extends Zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Te=new C,Zr=new j,De=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kc&&(t.usage=this.usage),t}};var Ao=class extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ro=class extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}},Op=0,hn=new ce,Ja=new Re,ns=new C,rn=new Yn,Gs=new Yn,Le=new C,we=class i extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yd(t)?Ro:Ao)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Ja.lookAt(t),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(rn.min,Gs.min),rn.expandByPoint(Le),Le.addVectors(rn.max,Gs.max),rn.expandByPoint(Le)):(rn.expandByPoint(Gs.min),rn.expandByPoint(Gs.max))}rn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Le.fromBufferAttribute(a,l),c&&(ns.fromBufferAttribute(t,l),Le.add(ns)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new C,c[L]=new C;let l=new C,h=new C,u=new C,d=new j,f=new j,m=new j,x=new C,g=new C;function p(L,w,b){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,b),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),a[L].add(x),a[w].add(x),a[b].add(x),c[L].add(g),c[w].add(g),c[b].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let L=0,w=_.length;L<w;++L){let b=_[L],I=b.start,H=b.count;for(let N=I,U=I+H;N<U;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let v=new C,y=new C,D=new C,E=new C;function R(L){D.fromBufferAttribute(s,L),E.copy(D);let w=a[L];v.copy(w),v.sub(D.multiplyScalar(D.dot(w))).normalize(),y.crossVectors(E,w);let I=y.dot(c[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,I)}for(let L=0,w=_.length;L<w;++L){let b=_[L],I=b.start,H=b.count;for(let N=I,U=I+H;N<U;N+=3)R(t.getX(N+0)),R(t.getX(N+1)),R(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new De(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fu=new ce,Si=new or,$r=new di,pu=new C,Jr=new C,Kr=new C,Qr=new C,Ka=new C,jr=new C,mu=new C,to=new C,Mt=class extends Re{constructor(t=new we,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){jr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ka.fromBufferAttribute(u,t),o?jr.addScaledVector(Ka,h):jr.addScaledVector(Ka.sub(e),h))}e.add(jr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),Si.copy(t.ray).recast(t.near),!($r.containsPoint(Si.origin)===!1&&(Si.intersectSphere($r,pu)===null||Si.origin.distanceToSquared(pu)>(t.far-t.near)**2))&&(fu.copy(r).invert(),Si.copy(t.ray).applyMatrix4(fu),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],_=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,D=v;y<D;y+=3){let E=a.getX(y),R=a.getX(y+1),L=a.getX(y+2);s=eo(this,p,t,n,l,h,u,E,R,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let _=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);s=eo(this,o,t,n,l,h,u,_,v,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],_=Math.max(g.start,f.start),v=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,D=v;y<D;y+=3){let E=y,R=y+1,L=y+2;s=eo(this,p,t,n,l,h,u,E,R,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let _=g,v=g+1,y=g+2;s=eo(this,o,t,n,l,h,u,_,v,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Bp(i,t,e,n,s,r,o,a){let c;if(t.side===Qe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Sn,a),c===null)return null;to.copy(a),to.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(to);return l<e.near||l>e.far?null:{distance:l,point:to.clone(),object:i}}function eo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Jr),i.getVertexPosition(c,Kr),i.getVertexPosition(l,Qr);let h=Bp(i,t,e,n,Jr,Kr,Qr,mu);if(h){let u=new C;ci.getBarycoord(mu,Jr,Kr,Qr,u),s&&(h.uv=ci.getInterpolatedAttribute(s,a,c,l,u,new j)),r&&(h.uv1=ci.getInterpolatedAttribute(r,a,c,l,u,new j)),o&&(h.normal=ci.getInterpolatedAttribute(o,a,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new C,materialIndex:0};ci.getNormal(Jr,Kr,Qr,d.normal),h.face=d,h.barycoord=u}return h}var He=class i extends we{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function m(x,g,p,_,v,y,D,E,R,L,w){let b=y/R,I=D/L,H=y/2,N=D/2,U=E/2,Y=R+1,W=L+1,nt=0,X=0,ht=new C;for(let yt=0;yt<W;yt++){let Et=yt*I-N;for(let Vt=0;Vt<Y;Vt++){let ne=Vt*b-H;ht[x]=ne*_,ht[g]=Et*v,ht[p]=U,l.push(ht.x,ht.y,ht.z),ht[x]=0,ht[g]=0,ht[p]=E>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(Vt/R),u.push(1-yt/L),nt+=1}}for(let yt=0;yt<L;yt++)for(let Et=0;Et<R;Et++){let Vt=d+Et+Y*yt,ne=d+Et+Y*(yt+1),J=d+(Et+1)+Y*(yt+1),ot=d+(Et+1)+Y*yt;c.push(Vt,ne,ot),c.push(ne,J,ot),X+=6}a.addGroup(f,X,w),f+=X,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){let t={};for(let e=0;e<i.length;e++){let n=Ms(i[e]);for(let s in n)t[s]=n[s]}return t}function zp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _d(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var gi={clone:Ms,merge:We},Hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ce=class extends Zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Co=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},oi=new C,gu=new j,xu=new j,Ke=class extends Co{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,gu,xu),e.subVectors(xu,gu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},is=-90,ss=1,el=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ke(is,ss,t,e);s.layers=this.layers,this.add(s);let r=new Ke(is,ss,t,e);r.layers=this.layers,this.add(r);let o=new Ke(is,ss,t,e);o.layers=this.layers,this.add(o);let a=new Ke(is,ss,t,e);a.layers=this.layers,this.add(a);let c=new Ke(is,ss,t,e);c.layers=this.layers,this.add(c);let l=new Ke(is,ss,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Po=class extends je{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ys,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nl=class extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Po(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new He(5,5,5),r=new Ce({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:In});r.uniforms.tEquirect.value=e;let o=new Mt(s,r),a=e.minFilter;return e.minFilter===Li&&(e.minFilter=Cn),new el(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Qa=new C,Gp=new C,Wp=new Xt,bn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Qa.subVectors(n,e).cross(Gp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Qa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wp.getNormalMatrix(t),s=this.coplanarPoint(Qa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new di,no=new C,cr=class{constructor(t=new bn,e=new bn,n=new bn,s=new bn,r=new bn,o=new bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],_=s[13],v=s[14],y=s[15];if(n[0].setComponents(c-r,d-l,g-f,y-p).normalize(),n[1].setComponents(c+r,d+l,g+f,y+p).normalize(),n[2].setComponents(c+o,d+h,g+m,y+_).normalize(),n[3].setComponents(c-o,d-h,g-m,y-_).normalize(),n[4].setComponents(c-a,d-u,g-x,y-v).normalize(),e===Wn)n[5].setComponents(c+a,d+u,g+x,y+v).normalize();else if(e===wo)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(no.x=s.normal.x>0?t.max.x:t.min.x,no.y=s.normal.y>0?t.max.y:t.min.y,no.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(no)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function bd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ve=class i extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let _=p*d-o;for(let v=0;v<l;v++){let y=v*u-r;m.push(y,-_,0),x.push(0,0,1),g.push(v/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){let v=_+l*p,y=_+l*(p+1),D=_+1+l*(p+1),E=_+1+l*p;f.push(v,y,E),f.push(y,D,E)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
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
#endif`,Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
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
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm=`#ifdef USE_BATCHING
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
#endif`,em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rm=`#ifdef USE_IRIDESCENCE
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
#endif`,om=`#ifdef USE_BUMPMAP
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mm=`#define PI 3.141592653589793
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
} // validated`,gm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xm=`vec3 transformedNormal = objectNormal;
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
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dm=`#ifdef USE_GRADIENTMAP
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
}`,Um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fm=`uniform bool receiveShadow;
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
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gm=`PhysicalMaterial material;
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
#endif`,Wm=`struct PhysicalMaterial {
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
}`,Xm=`
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e0=`#if defined( USE_POINTS_UV )
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
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`#ifdef USE_MORPHTARGETS
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
#endif`,c0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p0=`#ifdef USE_NORMALMAP
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
#endif`,m0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P0=`float getShadowMask() {
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
}`,I0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,D0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,X0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`#include <common>
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
}`,Q0=`#if DEPTH_PACKING == 3200
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
}`,j0=`#define DISTANCE
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
}`,tg=`#define DISTANCE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`uniform float scale;
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#include <common>
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
}`,og=`uniform vec3 diffuse;
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
}`,ag=`#define LAMBERT
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
}`,cg=`#define LAMBERT
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
}`,lg=`#define MATCAP
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
}`,hg=`#define MATCAP
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
}`,ug=`#define NORMAL
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
}`,dg=`#define NORMAL
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
}`,fg=`#define PHONG
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
}`,pg=`#define PHONG
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
}`,mg=`#define STANDARD
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
}`,gg=`#define STANDARD
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
}`,xg=`#define TOON
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
}`,yg=`#define TOON
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
}`,vg=`uniform float size;
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
}`,_g=`uniform vec3 diffuse;
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
}`,bg=`#include <common>
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
}`,Mg=`uniform vec3 color;
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
}`,wg=`uniform float rotation;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:qp,alphahash_pars_fragment:Yp,alphamap_fragment:Zp,alphamap_pars_fragment:$p,alphatest_fragment:Jp,alphatest_pars_fragment:Kp,aomap_fragment:Qp,aomap_pars_fragment:jp,batching_pars_vertex:tm,batching_vertex:em,begin_vertex:nm,beginnormal_vertex:im,bsdfs:sm,iridescence_fragment:rm,bumpmap_pars_fragment:om,clipping_planes_fragment:am,clipping_planes_pars_fragment:cm,clipping_planes_pars_vertex:lm,clipping_planes_vertex:hm,color_fragment:um,color_pars_fragment:dm,color_pars_vertex:fm,color_vertex:pm,common:mm,cube_uv_reflection_fragment:gm,defaultnormal_vertex:xm,displacementmap_pars_vertex:ym,displacementmap_vertex:vm,emissivemap_fragment:_m,emissivemap_pars_fragment:bm,colorspace_fragment:Mm,colorspace_pars_fragment:wm,envmap_fragment:Sm,envmap_common_pars_fragment:Tm,envmap_pars_fragment:Em,envmap_pars_vertex:Am,envmap_physical_pars_fragment:Om,envmap_vertex:Rm,fog_vertex:Cm,fog_pars_vertex:Pm,fog_fragment:Im,fog_pars_fragment:Lm,gradientmap_pars_fragment:Dm,lightmap_pars_fragment:Um,lights_lambert_fragment:Nm,lights_lambert_pars_fragment:km,lights_pars_begin:Fm,lights_toon_fragment:Bm,lights_toon_pars_fragment:zm,lights_phong_fragment:Hm,lights_phong_pars_fragment:Vm,lights_physical_fragment:Gm,lights_physical_pars_fragment:Wm,lights_fragment_begin:Xm,lights_fragment_maps:qm,lights_fragment_end:Ym,logdepthbuf_fragment:Zm,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:Jm,logdepthbuf_vertex:Km,map_fragment:Qm,map_pars_fragment:jm,map_particle_fragment:t0,map_particle_pars_fragment:e0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:i0,morphinstance_vertex:s0,morphcolor_vertex:r0,morphnormal_vertex:o0,morphtarget_pars_vertex:a0,morphtarget_vertex:c0,normal_fragment_begin:l0,normal_fragment_maps:h0,normal_pars_fragment:u0,normal_pars_vertex:d0,normal_vertex:f0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:x0,iridescence_pars_fragment:y0,opaque_fragment:v0,packing:_0,premultiplied_alpha_fragment:b0,project_vertex:M0,dithering_fragment:w0,dithering_pars_fragment:S0,roughnessmap_fragment:T0,roughnessmap_pars_fragment:E0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:R0,shadowmap_vertex:C0,shadowmask_pars_fragment:P0,skinbase_vertex:I0,skinning_pars_vertex:L0,skinning_vertex:D0,skinnormal_vertex:U0,specularmap_fragment:N0,specularmap_pars_fragment:k0,tonemapping_fragment:F0,tonemapping_pars_fragment:O0,transmission_fragment:B0,transmission_pars_fragment:z0,uv_pars_fragment:H0,uv_pars_vertex:V0,uv_vertex:G0,worldpos_vertex:W0,background_vert:X0,background_frag:q0,backgroundCube_vert:Y0,backgroundCube_frag:Z0,cube_vert:$0,cube_frag:J0,depth_vert:K0,depth_frag:Q0,distanceRGBA_vert:j0,distanceRGBA_frag:tg,equirect_vert:eg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:sg,meshbasic_vert:rg,meshbasic_frag:og,meshlambert_vert:ag,meshlambert_frag:cg,meshmatcap_vert:lg,meshmatcap_frag:hg,meshnormal_vert:ug,meshnormal_frag:dg,meshphong_vert:fg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:xg,meshtoon_frag:yg,points_vert:vg,points_frag:_g,shadow_vert:bg,shadow_frag:Mg,sprite_vert:wg,sprite_frag:Sg},dt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Rn={basic:{uniforms:We([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:We([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new At(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:We([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:We([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:We([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new At(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:We([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:We([dt.points,dt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:We([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:We([dt.common,dt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:We([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:We([dt.sprite,dt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:We([dt.common,dt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:We([dt.lights,dt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Rn.physical={uniforms:We([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var io={r:0,b:0,g:0},Ei=new Dn,Tg=new ce;function Eg(i,t,e,n,s,r,o){let a=new At(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function x(_){let v=!1,y=m(_);y===null?p(a,c):y&&y.isColor&&(p(y,1),v=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,v){let y=m(v);y&&(y.isCubeTexture||y.mapping===jo)?(h===void 0&&(h=new Mt(new He(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:Ms(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ei.copy(v.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(Ei)),h.material.toneMapped=Jt.getTransfer(y.colorSpace)!==re,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Mt(new Ve(2,2),new Ce({name:"BackgroundMaterial",uniforms:Ms(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(y.colorSpace)!==re,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(io,_d(i)),n.buffers.color.setClear(io.r,io.g,io.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:x,addToRenderList:g}}function Ag(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(b,I,H,N,U){let Y=!1,W=u(N,H,I);r!==W&&(r=W,l(r.object)),Y=f(b,N,H,U),Y&&m(b,N,H,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(b,I,H,N),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,I,H){let N=H.wireframe===!0,U=n[b.id];U===void 0&&(U={},n[b.id]=U);let Y=U[I.id];Y===void 0&&(Y={},U[I.id]=Y);let W=Y[N];return W===void 0&&(W=d(c()),Y[N]=W),W}function d(b){let I=[],H=[],N=[];for(let U=0;U<e;U++)I[U]=0,H[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:N,object:b,attributes:{},index:null}}function f(b,I,H,N){let U=r.attributes,Y=I.attributes,W=0,nt=H.getAttributes();for(let X in nt)if(nt[X].location>=0){let yt=U[X],Et=Y[X];if(Et===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(Et=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(Et=b.instanceColor)),yt===void 0||yt.attribute!==Et||Et&&yt.data!==Et.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function m(b,I,H,N){let U={},Y=I.attributes,W=0,nt=H.getAttributes();for(let X in nt)if(nt[X].location>=0){let yt=Y[X];yt===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(yt=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(yt=b.instanceColor));let Et={};Et.attribute=yt,yt&&yt.data&&(Et.data=yt.data),U[X]=Et,W++}r.attributes=U,r.attributesNum=W,r.index=N}function x(){let b=r.newAttributes;for(let I=0,H=b.length;I<H;I++)b[I]=0}function g(b){p(b,0)}function p(b,I){let H=r.newAttributes,N=r.enabledAttributes,U=r.attributeDivisors;H[b]=1,N[b]===0&&(i.enableVertexAttribArray(b),N[b]=1),U[b]!==I&&(i.vertexAttribDivisor(b,I),U[b]=I)}function _(){let b=r.newAttributes,I=r.enabledAttributes;for(let H=0,N=I.length;H<N;H++)I[H]!==b[H]&&(i.disableVertexAttribArray(H),I[H]=0)}function v(b,I,H,N,U,Y,W){W===!0?i.vertexAttribIPointer(b,I,H,U,Y):i.vertexAttribPointer(b,I,H,N,U,Y)}function y(b,I,H,N){x();let U=N.attributes,Y=H.getAttributes(),W=I.defaultAttributeValues;for(let nt in Y){let X=Y[nt];if(X.location>=0){let ht=U[nt];if(ht===void 0&&(nt==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),nt==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor)),ht!==void 0){let yt=ht.normalized,Et=ht.itemSize,Vt=t.get(ht);if(Vt===void 0)continue;let ne=Vt.buffer,J=Vt.type,ot=Vt.bytesPerElement,Rt=J===i.INT||J===i.UNSIGNED_INT||ht.gpuType===Yl;if(ht.isInterleavedBufferAttribute){let ct=ht.data,Nt=ct.stride,zt=ht.offset;if(ct.isInstancedInterleavedBuffer){for(let Ot=0;Ot<X.locationSize;Ot++)p(X.location+Ot,ct.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ot=0;Ot<X.locationSize;Ot++)g(X.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Ot=0;Ot<X.locationSize;Ot++)v(X.location+Ot,Et/X.locationSize,J,yt,Nt*ot,(zt+Et/X.locationSize*Ot)*ot,Rt)}else{if(ht.isInstancedBufferAttribute){for(let ct=0;ct<X.locationSize;ct++)p(X.location+ct,ht.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ct=0;ct<X.locationSize;ct++)g(X.location+ct);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let ct=0;ct<X.locationSize;ct++)v(X.location+ct,Et/X.locationSize,J,yt,Et*ot,Et/X.locationSize*ct*ot,Rt)}}else if(W!==void 0){let yt=W[nt];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(X.location,yt);break;case 3:i.vertexAttrib3fv(X.location,yt);break;case 4:i.vertexAttrib4fv(X.location,yt);break;default:i.vertexAttrib1fv(X.location,yt)}}}}_()}function D(){L();for(let b in n){let I=n[b];for(let H in I){let N=I[H];for(let U in N)h(N[U].object),delete N[U];delete I[H]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;let I=n[b.id];for(let H in I){let N=I[H];for(let U in N)h(N[U].object),delete N[U];delete I[H]}delete n[b.id]}function R(b){for(let I in n){let H=n[I];if(H[b.id]===void 0)continue;let N=H[b.id];for(let U in N)h(N[U].object),delete N[U];delete H[b.id]}}function L(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function Rg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Cg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==wn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let L=R===En&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==qn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Pn&&!L)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:D,maxSamples:E}}function Pg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new bn,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let _=r?0:n,v=_*4,y=p.clippingState||null;c.value=y,y=h(m,d,v,f);for(let D=0;D!==v;++D)y[D]=e[D];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,y=f;v!==x;++v,y+=4)o.copy(u[v]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Ig(i){let t=new WeakMap;function e(o,a){return a===_c?o.mapping=ys:a===bc&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===_c||a===bc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new nl(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var fi=class extends Co{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},us=4,yu=[.125,.215,.35,.446,.526,.582],Pi=20,ja=new fi,vu=new At,tc=null,ec=0,nc=0,ic=!1,Ri=(1+Math.sqrt(5))/2,rs=1/Ri,_u=[new C(-Ri,rs,0),new C(Ri,rs,0),new C(-rs,0,Ri),new C(rs,0,Ri),new C(0,Ri,-rs),new C(0,Ri,rs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Io=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){tc=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tc,ec,nc),this._renderer.xr.enabled=ic,t.scissorTest=!1,so(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tc=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:En,format:wn,colorSpace:Rs,depthBuffer:!1},s=bu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lg(r)),this._blurMaterial=Dg(r,t,e)}return s}_compileMaterial(t){let e=new Mt(this._lodPlanes[0],t);this._renderer.compile(e,ja)}_sceneToCubeUV(t,e,n,s){let a=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(vu),h.toneMapping=li,h.autoClear=!1;let f=new qe({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),m=new Mt(new He,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(vu),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;so(s,_*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ys||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;so(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ja)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_u[(s-r-1)%_u.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Mt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Pi-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Pi;g>Pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pi}`);let p=[],_=0;for(let R=0;R<Pi;++R){let L=R/x,w=Math.exp(-L*L/2);p.push(w),R===0?_+=w:R<g&&(_+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/_;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;let y=this._sizeLods[s],D=3*y*(s>v-us?s-v+us:0),E=4*(this._cubeSize-y);so(e,D,E,3*y,2*y),c.setRenderTarget(e),c.render(u,ja)}};function Lg(i){let t=[],e=[],n=[],s=i,r=i-us+1+yu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-us?c=yu[o-i+us-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,_=new Float32Array(x*m*f),v=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let E=0;E<f;E++){let R=E%3*2/3-1,L=E>2?0:-1,w=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];_.set(w,x*m*E),v.set(d,g*m*E);let b=[E,E,E,E,E,E];y.set(b,p*m*E)}let D=new we;D.setAttribute("position",new De(_,x)),D.setAttribute("uv",new De(v,g)),D.setAttribute("faceIndex",new De(y,p)),t.push(D),s>us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bu(i,t,e){let n=new Xe(i,t,e);return n.texture.mapping=jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dg(i,t,e){let n=new Float32Array(Pi),s=new C(0,1,0);return new Ce({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eh(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Mu(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function wu(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function eh(){return`

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
	`}function Ug(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===_c||c===bc,h=c===ys||c===vs;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Io(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Io(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ng(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kg(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let v=0,y=_.length;v<y;v+=3){let D=_[v+0],E=_[v+1],R=_[v+2];d.push(D,E,E,R,R,D)}}else if(m!==void 0){let _=m.array;x=m.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let D=v+0,E=v+1,R=v+2;d.push(D,E,E,R,R,D)}}else return;let g=new(yd(d)?Ro:Ao)(d,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Fg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let _=0;_<m;_++)p+=f[_]*x[_];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Og(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bg(i,t,e){let n=new WeakMap,s=new le;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;f===!0&&(v=1),m===!0&&(v=2),x===!0&&(v=3);let y=a.attributes.position.count*v,D=1;y>t.maxTextureSize&&(D=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*D*4*u),R=new Eo(E,y,D,u);R.type=Pn,R.needsUpdate=!0;let L=v*4;for(let b=0;b<u;b++){let I=g[b],H=p[b],N=_[b],U=y*D*4*b;for(let Y=0;Y<I.count;Y++){let W=Y*L;f===!0&&(s.fromBufferAttribute(I,Y),E[U+W+0]=s.x,E[U+W+1]=s.y,E[U+W+2]=s.z,E[U+W+3]=0),m===!0&&(s.fromBufferAttribute(H,Y),E[U+W+4]=s.x,E[U+W+5]=s.y,E[U+W+6]=s.z,E[U+W+7]=0),x===!0&&(s.fromBufferAttribute(N,Y),E[U+W+8]=s.x,E[U+W+9]=s.y,E[U+W+10]=s.z,E[U+W+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new j(y,D)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function zg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Lo=class extends je{constructor(t,e,n,s,r,o,a,c,l,h=ps){if(h!==ps&&h!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ps&&(n=Di),n===void 0&&h===bs&&(n=_s),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Md=new je,Su=new Lo(1,1),wd=new Eo,Sd=new tl,Td=new Po,Tu=[],Eu=[],Au=new Float32Array(16),Ru=new Float32Array(9),Cu=new Float32Array(4);function Ps(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Tu[s];if(r===void 0&&(r=new Float32Array(s),Tu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ea(i,t){let e=Eu[t];e===void 0&&(e=new Int32Array(t),Eu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function Xg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Cu.set(n),i.uniformMatrix2fv(this.addr,!1,Cu),Ie(e,n)}}function qg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Ru.set(n),i.uniformMatrix3fv(this.addr,!1,Ru),Ie(e,n)}}function Yg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Au.set(n),i.uniformMatrix4fv(this.addr,!1,Au),Ie(e,n)}}function Zg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function Qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function nx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Su.compareFunction=xd,r=Su):r=Md,e.setTexture2D(t||r,s)}function ix(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Sd,s)}function sx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Td,s)}function rx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wd,s)}function ox(i){switch(i){case 5126:return Hg;case 35664:return Vg;case 35665:return Gg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return Zg;case 35667:case 35671:return $g;case 35668:case 35672:return Jg;case 35669:case 35673:return Kg;case 5125:return Qg;case 36294:return jg;case 36295:return tx;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}function ax(i,t){i.uniform1fv(this.addr,t)}function cx(i,t){let e=Ps(t,this.size,2);i.uniform2fv(this.addr,e)}function lx(i,t){let e=Ps(t,this.size,3);i.uniform3fv(this.addr,e)}function hx(i,t){let e=Ps(t,this.size,4);i.uniform4fv(this.addr,e)}function ux(i,t){let e=Ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dx(i,t){let e=Ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fx(i,t){let e=Ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function px(i,t){i.uniform1iv(this.addr,t)}function mx(i,t){i.uniform2iv(this.addr,t)}function gx(i,t){i.uniform3iv(this.addr,t)}function xx(i,t){i.uniform4iv(this.addr,t)}function yx(i,t){i.uniform1uiv(this.addr,t)}function vx(i,t){i.uniform2uiv(this.addr,t)}function _x(i,t){i.uniform3uiv(this.addr,t)}function bx(i,t){i.uniform4uiv(this.addr,t)}function Mx(i,t,e){let n=this.cache,s=t.length,r=ea(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Md,r[o])}function wx(i,t,e){let n=this.cache,s=t.length,r=ea(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Sd,r[o])}function Sx(i,t,e){let n=this.cache,s=t.length,r=ea(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Td,r[o])}function Tx(i,t,e){let n=this.cache,s=t.length,r=ea(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wd,r[o])}function Ex(i){switch(i){case 5126:return ax;case 35664:return cx;case 35665:return lx;case 35666:return hx;case 35674:return ux;case 35675:return dx;case 35676:return fx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return xx;case 5125:return yx;case 36294:return vx;case 36295:return _x;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return Tx}}var il=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ox(e.type)}},sl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ex(e.type)}},rl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},sc=/(\w+)(\])?(\[|\.)?/g;function Pu(i,t){i.seq.push(t),i.map[t.id]=t}function Ax(i,t,e){let n=i.name,s=n.length;for(sc.lastIndex=0;;){let r=sc.exec(n),o=sc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Pu(e,l===void 0?new il(a,i,t):new sl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new rl(a),Pu(e,u)),e=u}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Ax(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Iu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Rx=37297,Cx=0;function Px(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Lu=new Xt;function Ix(i){Jt._getMatrix(Lu,Jt.workingColorSpace,i);let t=`mat3( ${Lu.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case ta:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Du(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Px(i.getShaderSource(t),o)}else return s}function Lx(i,t){let e=Ix(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Dx(i,t){let e;switch(t){case Vl:e="Linear";break;case Gl:e="Reinhard";break;case Wl:e="Cineon";break;case Xl:e="ACESFilmic";break;case ql:e="AgX";break;case yr:e="Neutral";break;case Jf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ro=new C;function Ux(){Jt.getLuminanceCoefficients(ro);let i=ro.x.toFixed(4),t=ro.y.toFixed(4),e=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function kx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ks(i){return i!==""}function Uu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(i){return i.replace(Ox,zx)}var Bx=new Map;function zx(i,t){let e=Yt[t];if(e===void 0){let n=Bx.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ol(e)}var Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(i){return i.replace(Hx,Vx)}function Vx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Gx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function Wx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ys:case vs:t="ENVMAP_TYPE_CUBE";break;case jo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function qx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rd:t="ENVMAP_BLENDING_MULTIPLY";break;case Zf:t="ENVMAP_BLENDING_MIX";break;case $f:t="ENVMAP_BLENDING_ADD";break}return t}function Yx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Gx(e),l=Wx(e),h=Xx(e),u=qx(e),d=Yx(e),f=Nx(e),m=kx(r),x=s.createProgram(),g,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ks).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(g=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?Yt.tonemapping_pars_fragment:"",e.toneMapping!==li?Dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Lx("linearToOutputTexel",e.outputColorSpace),Ux(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ks).join(`
`)),o=ol(o),o=Uu(o,e),o=Nu(o,e),a=ol(a),a=Uu(a,e),a=Nu(a,e),o=ku(o),a=ku(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=_+g+o,y=_+p+a,D=Iu(s,s.VERTEX_SHADER,v),E=Iu(s,s.FRAGMENT_SHADER,y);s.attachShader(x,D),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(I){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(D).trim(),U=s.getShaderInfoLog(E).trim(),Y=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,E);else{let nt=Du(s,D,"vertex"),X=Du(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+nt+`
`+X)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(N===""||U==="")&&(W=!1);W&&(I.diagnostics={runnable:Y,programLog:H,vertexShader:{log:N,prefix:g},fragmentShader:{log:U,prefix:p}})}s.deleteShader(D),s.deleteShader(E),L=new gs(s,x),w=Fx(s,x)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,Rx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=E,this}var $x=0,al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new cl(t),e.set(t,n)),n}},cl=class{constructor(t){this.id=$x++,this.code=t,this.usedTimes=0}};function Jx(i,t,e,n,s,r,o){let a=new ar,c=new al,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,b,I,H,N){let U=H.fog,Y=N.geometry,W=w.isMeshStandardMaterial?H.environment:null,nt=(w.isMeshStandardMaterial?e:t).get(w.envMap||W),X=nt&&nt.mapping===jo?nt.image.height:null,ht=m[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let yt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Et=yt!==void 0?yt.length:0,Vt=0;Y.morphAttributes.position!==void 0&&(Vt=1),Y.morphAttributes.normal!==void 0&&(Vt=2),Y.morphAttributes.color!==void 0&&(Vt=3);let ne,J,ot,Rt;if(ht){let oe=Rn[ht];ne=oe.vertexShader,J=oe.fragmentShader}else ne=w.vertexShader,J=w.fragmentShader,c.update(w),ot=c.getVertexShaderID(w),Rt=c.getFragmentShaderID(w);let ct=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),zt=N.isInstancedMesh===!0,Ot=N.isBatchedMesh===!0,jt=!!w.map,Q=!!w.matcap,rt=!!nt,P=!!w.aoMap,Dt=!!w.lightMap,et=!!w.bumpMap,bt=!!w.normalMap,lt=!!w.displacementMap,kt=!!w.emissiveMap,vt=!!w.metalnessMap,A=!!w.roughnessMap,M=w.anisotropy>0,z=w.clearcoat>0,Z=w.dispersion>0,tt=w.iridescence>0,$=w.sheen>0,Ct=w.transmission>0,ft=M&&!!w.anisotropyMap,_t=z&&!!w.clearcoatMap,$t=z&&!!w.clearcoatNormalMap,it=z&&!!w.clearcoatRoughnessMap,St=tt&&!!w.iridescenceMap,Ft=tt&&!!w.iridescenceThicknessMap,Bt=$&&!!w.sheenColorMap,Tt=$&&!!w.sheenRoughnessMap,Kt=!!w.specularMap,qt=!!w.specularColorMap,de=!!w.specularIntensityMap,k=Ct&&!!w.transmissionMap,pt=Ct&&!!w.thicknessMap,q=!!w.gradientMap,K=!!w.alphaMap,xt=w.alphaTest>0,mt=!!w.alphaHash,Gt=!!w.extensions,be=li;w.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(be=i.toneMapping);let Oe={shaderID:ht,shaderType:w.type,shaderName:w.name,vertexShader:ne,fragmentShader:J,defines:w.defines,customVertexShaderID:ot,customFragmentShaderID:Rt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&N._colorsTexture!==null,instancing:zt,instancingColor:zt&&N.instanceColor!==null,instancingMorph:zt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Rs,alphaToCoverage:!!w.alphaToCoverage,map:jt,matcap:Q,envMap:rt,envMapMode:rt&&nt.mapping,envMapCubeUVHeight:X,aoMap:P,lightMap:Dt,bumpMap:et,normalMap:bt,displacementMap:d&&lt,emissiveMap:kt,normalMapObjectSpace:bt&&w.normalMapType===tp,normalMapTangentSpace:bt&&w.normalMapType===gd,metalnessMap:vt,roughnessMap:A,anisotropy:M,anisotropyMap:ft,clearcoat:z,clearcoatMap:_t,clearcoatNormalMap:$t,clearcoatRoughnessMap:it,dispersion:Z,iridescence:tt,iridescenceMap:St,iridescenceThicknessMap:Ft,sheen:$,sheenColorMap:Bt,sheenRoughnessMap:Tt,specularMap:Kt,specularColorMap:qt,specularIntensityMap:de,transmission:Ct,transmissionMap:k,thicknessMap:pt,gradientMap:q,opaque:w.transparent===!1&&w.blending===fs&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:xt,alphaHash:mt,combine:w.combine,mapUv:jt&&x(w.map.channel),aoMapUv:P&&x(w.aoMap.channel),lightMapUv:Dt&&x(w.lightMap.channel),bumpMapUv:et&&x(w.bumpMap.channel),normalMapUv:bt&&x(w.normalMap.channel),displacementMapUv:lt&&x(w.displacementMap.channel),emissiveMapUv:kt&&x(w.emissiveMap.channel),metalnessMapUv:vt&&x(w.metalnessMap.channel),roughnessMapUv:A&&x(w.roughnessMap.channel),anisotropyMapUv:ft&&x(w.anisotropyMap.channel),clearcoatMapUv:_t&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:$t&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&x(w.sheenRoughnessMap.channel),specularMapUv:Kt&&x(w.specularMap.channel),specularColorMapUv:qt&&x(w.specularColorMap.channel),specularIntensityMapUv:de&&x(w.specularIntensityMap.channel),transmissionMapUv:k&&x(w.transmissionMap.channel),thicknessMapUv:pt&&x(w.thicknessMap.channel),alphaMapUv:K&&x(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(bt||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Y.attributes.uv&&(jt||K),fog:!!U,useFog:w.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Nt,skinning:N.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Vt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:jt&&w.map.isVideoTexture===!0&&Jt.getTransfer(w.map.colorSpace)===re,decodeVideoTextureEmissive:kt&&w.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(w.emissiveMap.colorSpace)===re,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Me,flipSided:w.side===Qe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Gt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&w.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function p(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let I in w.defines)b.push(I),b.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(_(b,w),v(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function _(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function v(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let b=m[w.type],I;if(b){let H=Rn[b];I=gi.clone(H.uniforms)}else I=w.uniforms;return I}function D(w,b){let I;for(let H=0,N=h.length;H<N;H++){let U=h[H];if(U.cacheKey===b){I=U,++I.usedTimes;break}}return I===void 0&&(I=new Zx(i,b,w,r),h.push(I)),I}function E(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function R(w){c.remove(w)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:D,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:L}}function Kx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Qx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ou(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,x,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Qx),n.length>1&&n.sort(d||Ou),s.length>1&&s.sort(d||Ou)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function jx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Bu,i.set(n,[o])):s>=r.length?(o=new Bu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ty(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new At};break;case"SpotLight":e={position:new C,direction:new C,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function ey(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ny=0;function iy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function sy(i){let t=new ty,e=ey(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let s=new C,r=new ce,o=new ce;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,_=0,v=0,y=0,D=0,E=0,R=0;l.sort(iy);for(let w=0,b=l.length;w<b;w++){let I=l[w],H=I.color,N=I.intensity,U=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=H.r*N,u+=H.g*N,d+=H.b*N;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],N);R++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let nt=I.shadow,X=e.get(I);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=I.shadow.matrix,_++}n.directional[f]=W,f++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(H).multiplyScalar(N),W.distance=U,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[x]=W;let nt=I.shadow;if(I.map&&(n.spotLightMap[D]=I.map,D++,nt.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[x]=nt.matrix,I.castShadow){let X=e.get(I);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=Y,y++}x++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(H).multiplyScalar(N),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=W,g++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let nt=I.shadow,X=e.get(I);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,X.shadowCameraNear=nt.camera.near,X.shadowCameraFar=nt.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=I.shadow.matrix,v++}n.point[m]=W,m++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(N),W.groundColor.copy(I.groundColor).multiplyScalar(N),n.hemi[p]=W,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==_||L.numPointShadows!==v||L.numSpotShadows!==y||L.numSpotMaps!==D||L.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+D-E,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,L.directionalLength=f,L.pointLength=m,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=_,L.numPointShadows=v,L.numSpotShadows=y,L.numSpotMaps=D,L.numLightProbes=R,n.version=ny++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){let v=l[p];if(v.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(v.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function zu(i){let t=new sy(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ry(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new zu(i),t.set(s,[a])):r>=o.length?(a=new zu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ll=class extends Zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hl=class extends Zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ay=`uniform sampler2D shadow_pass;
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
}`;function cy(i,t,e){let n=new cr,s=new j,r=new j,o=new le,a=new ll({depthPacking:jf}),c=new hl,l={},h=e.maxTextureSize,u={[Sn]:Qe,[Qe]:Sn,[Me]:Me},d=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:oy,fragmentShader:ay}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new we;m.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Mt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sd;let p=this.type;this.render=function(E,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let w=i.getRenderTarget(),b=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),H=i.state;H.setBlending(In),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let N=p!==Gn&&this.type===Gn,U=p===Gn&&this.type!==Gn;for(let Y=0,W=E.length;Y<W;Y++){let nt=E[Y],X=nt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ht=X.getFrameExtents();if(s.multiply(ht),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,X.mapSize.y=r.y)),X.map===null||N===!0||U===!0){let Et=this.type!==Gn?{minFilter:on,magFilter:on}:{};X.map!==null&&X.map.dispose(),X.map=new Xe(s.x,s.y,Et),X.map.texture.name=nt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let yt=X.getViewportCount();for(let Et=0;Et<yt;Et++){let Vt=X.getViewport(Et);o.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),H.viewport(o),X.updateMatrices(nt,Et),n=X.getFrustum(),y(R,L,X.camera,nt,this.type)}X.isPointLightShadow!==!0&&this.type===Gn&&_(X,L),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,b,I)};function _(E,R){let L=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Xe(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,L,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,L,f,x,null)}function v(E,R,L,w){let b=null,I=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)b=I;else if(b=L.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let H=b.uuid,N=R.uuid,U=l[H];U===void 0&&(U={},l[H]=U);let Y=U[N];Y===void 0&&(Y=b.clone(),U[N]=Y,R.addEventListener("dispose",D)),b=Y}if(b.visible=R.visible,b.wireframe=R.wireframe,w===Gn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let H=i.properties.get(b);H.light=L}return b}function y(E,R,L,w,b){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Gn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);let N=t.update(E),U=E.material;if(Array.isArray(U)){let Y=N.groups;for(let W=0,nt=Y.length;W<nt;W++){let X=Y[W],ht=U[X.materialIndex];if(ht&&ht.visible){let yt=v(E,ht,w,b);E.onBeforeShadow(i,E,R,L,N,yt,X),i.renderBufferDirect(L,null,N,yt,E,X),E.onAfterShadow(i,E,R,L,N,yt,X)}}}else if(U.visible){let Y=v(E,U,w,b);E.onBeforeShadow(i,E,R,L,N,Y,null),i.renderBufferDirect(L,null,N,Y,E,null),E.onAfterShadow(i,E,R,L,N,Y,null)}}let H=E.children;for(let N=0,U=H.length;N<U;N++)y(H[N],R,L,w,b)}function D(E){E.target.removeEventListener("dispose",D);for(let L in l){let w=l[L],b=E.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var ly={[fc]:pc,[mc]:yc,[gc]:vc,[xs]:xc,[pc]:fc,[yc]:mc,[vc]:gc,[xc]:xs};function hy(i,t){function e(){let k=!1,pt=new le,q=null,K=new le(0,0,0,0);return{setMask:function(xt){q!==xt&&!k&&(i.colorMask(xt,xt,xt,xt),q=xt)},setLocked:function(xt){k=xt},setClear:function(xt,mt,Gt,be,Oe){Oe===!0&&(xt*=be,mt*=be,Gt*=be),pt.set(xt,mt,Gt,be),K.equals(pt)===!1&&(i.clearColor(xt,mt,Gt,be),K.copy(pt))},reset:function(){k=!1,q=null,K.set(-1,0,0,0)}}}function n(){let k=!1,pt=!1,q=null,K=null,xt=null;return{setReversed:function(mt){if(pt!==mt){let Gt=t.get("EXT_clip_control");pt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);let be=xt;xt=null,this.setClear(be)}pt=mt},getReversed:function(){return pt},setTest:function(mt){mt?ct(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(mt){q!==mt&&!k&&(i.depthMask(mt),q=mt)},setFunc:function(mt){if(pt&&(mt=ly[mt]),K!==mt){switch(mt){case fc:i.depthFunc(i.NEVER);break;case pc:i.depthFunc(i.ALWAYS);break;case mc:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case gc:i.depthFunc(i.EQUAL);break;case xc:i.depthFunc(i.GEQUAL);break;case yc:i.depthFunc(i.GREATER);break;case vc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=mt}},setLocked:function(mt){k=mt},setClear:function(mt){xt!==mt&&(pt&&(mt=1-mt),i.clearDepth(mt),xt=mt)},reset:function(){k=!1,q=null,K=null,xt=null,pt=!1}}}function s(){let k=!1,pt=null,q=null,K=null,xt=null,mt=null,Gt=null,be=null,Oe=null;return{setTest:function(oe){k||(oe?ct(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(oe){pt!==oe&&!k&&(i.stencilMask(oe),pt=oe)},setFunc:function(oe,gn,kn){(q!==oe||K!==gn||xt!==kn)&&(i.stencilFunc(oe,gn,kn),q=oe,K=gn,xt=kn)},setOp:function(oe,gn,kn){(mt!==oe||Gt!==gn||be!==kn)&&(i.stencilOp(oe,gn,kn),mt=oe,Gt=gn,be=kn)},setLocked:function(oe){k=oe},setClear:function(oe){Oe!==oe&&(i.clearStencil(oe),Oe=oe)},reset:function(){k=!1,pt=null,q=null,K=null,xt=null,mt=null,Gt=null,be=null,Oe=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,_=null,v=null,y=null,D=null,E=null,R=new At(0,0,0),L=0,w=!1,b=null,I=null,H=null,N=null,U=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,nt=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=nt>=2);let ht=null,yt={},Et=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),ne=new le().fromArray(Et),J=new le().fromArray(Vt);function ot(k,pt,q,K){let xt=new Uint8Array(4),mt=i.createTexture();i.bindTexture(k,mt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<q;Gt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(pt+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return mt}let Rt={};Rt[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(xs),et(!1),bt(Gh),ct(i.CULL_FACE),P(In);function ct(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function Nt(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function zt(k,pt){return u[k]!==pt?(i.bindFramebuffer(k,pt),u[k]=pt,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ot(k,pt){let q=f,K=!1;if(k){q=d.get(pt),q===void 0&&(q=[],d.set(pt,q));let xt=k.textures;if(q.length!==xt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Gt=xt.length;mt<Gt;mt++)q[mt]=i.COLOR_ATTACHMENT0+mt;q.length=xt.length,K=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,K=!0);K&&i.drawBuffers(q)}function jt(k){return m!==k?(i.useProgram(k),m=k,!0):!1}let Q={[Ci]:i.FUNC_ADD,[If]:i.FUNC_SUBTRACT,[Lf]:i.FUNC_REVERSE_SUBTRACT};Q[Df]=i.MIN,Q[Uf]=i.MAX;let rt={[Nf]:i.ZERO,[kf]:i.ONE,[Ff]:i.SRC_COLOR,[uc]:i.SRC_ALPHA,[Gf]:i.SRC_ALPHA_SATURATE,[Hf]:i.DST_COLOR,[Bf]:i.DST_ALPHA,[Of]:i.ONE_MINUS_SRC_COLOR,[dc]:i.ONE_MINUS_SRC_ALPHA,[Vf]:i.ONE_MINUS_DST_COLOR,[zf]:i.ONE_MINUS_DST_ALPHA,[Wf]:i.CONSTANT_COLOR,[Xf]:i.ONE_MINUS_CONSTANT_COLOR,[qf]:i.CONSTANT_ALPHA,[Yf]:i.ONE_MINUS_CONSTANT_ALPHA};function P(k,pt,q,K,xt,mt,Gt,be,Oe,oe){if(k===In){x===!0&&(Nt(i.BLEND),x=!1);return}if(x===!1&&(ct(i.BLEND),x=!0),k!==Pf){if(k!==g||oe!==w){if((p!==Ci||y!==Ci)&&(i.blendEquation(i.FUNC_ADD),p=Ci,y=Ci),oe)switch(k){case fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case un:i.blendFunc(i.ONE,i.ONE);break;case Wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case un:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}_=null,v=null,D=null,E=null,R.set(0,0,0),L=0,g=k,w=oe}return}xt=xt||pt,mt=mt||q,Gt=Gt||K,(pt!==p||xt!==y)&&(i.blendEquationSeparate(Q[pt],Q[xt]),p=pt,y=xt),(q!==_||K!==v||mt!==D||Gt!==E)&&(i.blendFuncSeparate(rt[q],rt[K],rt[mt],rt[Gt]),_=q,v=K,D=mt,E=Gt),(be.equals(R)===!1||Oe!==L)&&(i.blendColor(be.r,be.g,be.b,Oe),R.copy(be),L=Oe),g=k,w=!1}function Dt(k,pt){k.side===Me?Nt(i.CULL_FACE):ct(i.CULL_FACE);let q=k.side===Qe;pt&&(q=!q),et(q),k.blending===fs&&k.transparent===!1?P(In):P(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let K=k.stencilWrite;a.setTest(K),K&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),kt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(k){b!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),b=k)}function bt(k){k!==Rf?(ct(i.CULL_FACE),k!==I&&(k===Gh?i.cullFace(i.BACK):k===Cf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),I=k}function lt(k){k!==H&&(W&&i.lineWidth(k),H=k)}function kt(k,pt,q){k?(ct(i.POLYGON_OFFSET_FILL),(N!==pt||U!==q)&&(i.polygonOffset(pt,q),N=pt,U=q)):Nt(i.POLYGON_OFFSET_FILL)}function vt(k){k?ct(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function A(k){k===void 0&&(k=i.TEXTURE0+Y-1),ht!==k&&(i.activeTexture(k),ht=k)}function M(k,pt,q){q===void 0&&(ht===null?q=i.TEXTURE0+Y-1:q=ht);let K=yt[q];K===void 0&&(K={type:void 0,texture:void 0},yt[q]=K),(K.type!==k||K.texture!==pt)&&(ht!==q&&(i.activeTexture(q),ht=q),i.bindTexture(k,pt||Rt[k]),K.type=k,K.texture=pt)}function z(){let k=yt[ht];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(k){ne.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),ne.copy(k))}function Tt(k){J.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function Kt(k,pt){let q=l.get(pt);q===void 0&&(q=new WeakMap,l.set(pt,q));let K=q.get(k);K===void 0&&(K=i.getUniformBlockIndex(pt,k.name),q.set(k,K))}function qt(k,pt){let K=l.get(pt).get(k);c.get(pt)!==K&&(i.uniformBlockBinding(pt,K,k.__bindingPointIndex),c.set(pt,K))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,yt={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,_=null,v=null,y=null,D=null,E=null,R=new At(0,0,0),L=0,w=!1,b=null,I=null,H=null,N=null,U=null,ne.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:Nt,bindFramebuffer:zt,drawBuffers:Ot,useProgram:jt,setBlending:P,setMaterial:Dt,setFlipSided:et,setCullFace:bt,setLineWidth:lt,setPolygonOffset:kt,setScissorTest:vt,activeTexture:A,bindTexture:M,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:St,texImage3D:Ft,updateUBOMapping:Kt,uniformBlockBinding:qt,texStorage2D:$t,texStorage3D:it,texSubImage2D:$,texSubImage3D:Ct,compressedTexSubImage2D:ft,compressedTexSubImage3D:_t,scissor:Bt,viewport:Tt,reset:de}}function Hu(i,t,e,n){let s=uy(n);switch(e){case hd:return i*t;case dd:return i*t;case fd:return i*t*2;case Jl:return i*t/s.components*s.byteLength;case Kl:return i*t/s.components*s.byteLength;case pd:return i*t*2/s.components*s.byteLength;case Ql:return i*t*2/s.components*s.byteLength;case ud:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case jl:return i*t*4/s.components*s.byteLength;case xo:case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vo:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tc:case Ac:return Math.max(i,16)*Math.max(t,8)/4;case Sc:case Ec:return Math.max(i,8)*Math.max(t,8)/2;case Rc:case Cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case kc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Gc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case bo:case Xc:case qc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case md:case Yc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Zc:case $c:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uy(i){switch(i){case qn:case ad:return{byteLength:1,components:1};case sr:case cd:case En:return{byteLength:2,components:1};case Zl:case $l:return{byteLength:2,components:4};case Di:case Yl:case Pn:return{byteLength:4,components:1};case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function dy(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new j,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return f?new OffscreenCanvas(A,M):So("canvas")}function x(A,M,z){let Z=1,tt=vt(A);if((tt.width>z||tt.height>z)&&(Z=z/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let $=Math.floor(Z*tt.width),Ct=Math.floor(Z*tt.height);u===void 0&&(u=m($,Ct));let ft=M?m($,Ct):u;return ft.width=$,ft.height=Ct,ft.getContext("2d").drawImage(A,0,0,$,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+$+"x"+Ct+")."),ft}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,M,z,Z,tt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=M;if(M===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),M===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),M===i.RGBA){let Ct=tt?ta:Jt.getTransfer(Z);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=Ct===re?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(A,M){let z;return A?M===null||M===Di||M===_s?z=i.DEPTH24_STENCIL8:M===Pn?z=i.DEPTH32F_STENCIL8:M===sr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Di||M===_s?z=i.DEPTH_COMPONENT24:M===Pn?z=i.DEPTH_COMPONENT32F:M===sr&&(z=i.DEPTH_COMPONENT16),z}function D(A,M){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==on&&A.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function E(A){let M=A.target;M.removeEventListener("dispose",E),L(M),M.isVideoTexture&&h.delete(M)}function R(A){let M=A.target;M.removeEventListener("dispose",R),b(M)}function L(A){let M=n.get(A);if(M.__webglInit===void 0)return;let z=A.source,Z=d.get(z);if(Z){let tt=Z[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&w(A),Object.keys(Z).length===0&&d.delete(z)}n.remove(A)}function w(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let z=A.source,Z=d.get(z);delete Z[M.__cacheKey],o.memory.textures--}function b(A){let M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let tt=0;tt<M.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(M.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[Z]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=A.textures;for(let Z=0,tt=z.length;Z<tt;Z++){let $=n.get(z[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(A)}let I=0;function H(){I=0}function N(){let A=I;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function U(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function Y(A,M){let z=n.get(A);if(A.isVideoTexture&&lt(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){let Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(z,A,M);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function W(A,M){let z=n.get(A);if(A.version>0&&z.__version!==A.version){J(z,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function nt(A,M){let z=n.get(A);if(A.version>0&&z.__version!==A.version){J(z,A,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function X(A,M){let z=n.get(A);if(A.version>0&&z.__version!==A.version){ot(z,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}let ht={[Mc]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[wc]:i.MIRRORED_REPEAT},yt={[on]:i.NEAREST,[Kf]:i.NEAREST_MIPMAP_NEAREST,[Br]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[Ia]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},Et={[ep]:i.NEVER,[ap]:i.ALWAYS,[np]:i.LESS,[xd]:i.LEQUAL,[ip]:i.EQUAL,[op]:i.GEQUAL,[sp]:i.GREATER,[rp]:i.NOTEQUAL};function Vt(A,M){if(M.type===Pn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Cn||M.magFilter===Ia||M.magFilter===Br||M.magFilter===Li||M.minFilter===Cn||M.minFilter===Ia||M.minFilter===Br||M.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ht[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ht[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ht[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,yt[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,yt[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Et[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===on||M.minFilter!==Br&&M.minFilter!==Li||M.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ne(A,M){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",E));let Z=M.source,tt=d.get(Z);tt===void 0&&(tt={},d.set(Z,tt));let $=U(M);if($!==A.__cacheKey){tt[$]===void 0&&(tt[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),tt[$].usedTimes++;let Ct=tt[A.__cacheKey];Ct!==void 0&&(tt[A.__cacheKey].usedTimes--,Ct.usedTimes===0&&w(M)),A.__cacheKey=$,A.__webglTexture=tt[$].texture}return z}function J(A,M,z){let Z=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=i.TEXTURE_3D);let tt=ne(A,M),$=M.source;e.bindTexture(Z,A.__webglTexture,i.TEXTURE0+z);let Ct=n.get($);if($.version!==Ct.__version||tt===!0){e.activeTexture(i.TEXTURE0+z);let ft=Jt.getPrimaries(Jt.workingColorSpace),_t=M.colorSpace===ai?null:Jt.getPrimaries(M.colorSpace),$t=M.colorSpace===ai||ft===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let it=x(M.image,!1,s.maxTextureSize);it=kt(M,it);let St=r.convert(M.format,M.colorSpace),Ft=r.convert(M.type),Bt=v(M.internalFormat,St,Ft,M.colorSpace,M.isVideoTexture);Vt(Z,M);let Tt,Kt=M.mipmaps,qt=M.isVideoTexture!==!0,de=Ct.__version===void 0||tt===!0,k=$.dataReady,pt=D(M,it);if(M.isDepthTexture)Bt=y(M.format===bs,M.type),de&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Bt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Bt,it.width,it.height,0,St,Ft,null));else if(M.isDataTexture)if(Kt.length>0){qt&&de&&e.texStorage2D(i.TEXTURE_2D,pt,Bt,Kt[0].width,Kt[0].height);for(let q=0,K=Kt.length;q<K;q++)Tt=Kt[q],qt?k&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Tt.width,Tt.height,St,Ft,Tt.data):e.texImage2D(i.TEXTURE_2D,q,Bt,Tt.width,Tt.height,0,St,Ft,Tt.data);M.generateMipmaps=!1}else qt?(de&&e.texStorage2D(i.TEXTURE_2D,pt,Bt,it.width,it.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,St,Ft,it.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,it.width,it.height,0,St,Ft,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Bt,Kt[0].width,Kt[0].height,it.depth);for(let q=0,K=Kt.length;q<K;q++)if(Tt=Kt[q],M.format!==wn)if(St!==null)if(qt){if(k)if(M.layerUpdates.size>0){let xt=Hu(Tt.width,Tt.height,M.format,M.type);for(let mt of M.layerUpdates){let Gt=Tt.data.subarray(mt*xt/Tt.data.BYTES_PER_ELEMENT,(mt+1)*xt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,mt,Tt.width,Tt.height,1,St,Gt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Tt.width,Tt.height,it.depth,St,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Bt,Tt.width,Tt.height,it.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Tt.width,Tt.height,it.depth,St,Ft,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Bt,Tt.width,Tt.height,it.depth,0,St,Ft,Tt.data)}else{qt&&de&&e.texStorage2D(i.TEXTURE_2D,pt,Bt,Kt[0].width,Kt[0].height);for(let q=0,K=Kt.length;q<K;q++)Tt=Kt[q],M.format!==wn?St!==null?qt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Tt.width,Tt.height,St,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Bt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?k&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Tt.width,Tt.height,St,Ft,Tt.data):e.texImage2D(i.TEXTURE_2D,q,Bt,Tt.width,Tt.height,0,St,Ft,Tt.data)}else if(M.isDataArrayTexture)if(qt){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Bt,it.width,it.height,it.depth),k)if(M.layerUpdates.size>0){let q=Hu(it.width,it.height,M.format,M.type);for(let K of M.layerUpdates){let xt=it.data.subarray(K*q/it.data.BYTES_PER_ELEMENT,(K+1)*q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,St,Ft,xt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,St,Ft,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,it.width,it.height,it.depth,0,St,Ft,it.data);else if(M.isData3DTexture)qt?(de&&e.texStorage3D(i.TEXTURE_3D,pt,Bt,it.width,it.height,it.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,St,Ft,it.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,it.width,it.height,it.depth,0,St,Ft,it.data);else if(M.isFramebufferTexture){if(de)if(qt)e.texStorage2D(i.TEXTURE_2D,pt,Bt,it.width,it.height);else{let q=it.width,K=it.height;for(let xt=0;xt<pt;xt++)e.texImage2D(i.TEXTURE_2D,xt,Bt,q,K,0,St,Ft,null),q>>=1,K>>=1}}else if(Kt.length>0){if(qt&&de){let q=vt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,pt,Bt,q.width,q.height)}for(let q=0,K=Kt.length;q<K;q++)Tt=Kt[q],qt?k&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,St,Ft,Tt):e.texImage2D(i.TEXTURE_2D,q,Bt,St,Ft,Tt);M.generateMipmaps=!1}else if(qt){if(de){let q=vt(it);e.texStorage2D(i.TEXTURE_2D,pt,Bt,q.width,q.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Ft,it)}else e.texImage2D(i.TEXTURE_2D,0,Bt,St,Ft,it);g(M)&&p(Z),Ct.__version=$.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ot(A,M,z){if(M.image.length!==6)return;let Z=ne(A,M),tt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let $=n.get(tt);if(tt.version!==$.__version||Z===!0){e.activeTexture(i.TEXTURE0+z);let Ct=Jt.getPrimaries(Jt.workingColorSpace),ft=M.colorSpace===ai?null:Jt.getPrimaries(M.colorSpace),_t=M.colorSpace===ai||Ct===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let $t=M.isCompressedTexture||M.image[0].isCompressedTexture,it=M.image[0]&&M.image[0].isDataTexture,St=[];for(let K=0;K<6;K++)!$t&&!it?St[K]=x(M.image[K],!0,s.maxCubemapSize):St[K]=it?M.image[K].image:M.image[K],St[K]=kt(M,St[K]);let Ft=St[0],Bt=r.convert(M.format,M.colorSpace),Tt=r.convert(M.type),Kt=v(M.internalFormat,Bt,Tt,M.colorSpace),qt=M.isVideoTexture!==!0,de=$.__version===void 0||Z===!0,k=tt.dataReady,pt=D(M,Ft);Vt(i.TEXTURE_CUBE_MAP,M);let q;if($t){qt&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Kt,Ft.width,Ft.height);for(let K=0;K<6;K++){q=St[K].mipmaps;for(let xt=0;xt<q.length;xt++){let mt=q[xt];M.format!==wn?Bt!==null?qt?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,0,0,mt.width,mt.height,Bt,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,Kt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,0,0,mt.width,mt.height,Bt,Tt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,Kt,mt.width,mt.height,0,Bt,Tt,mt.data)}}}else{if(q=M.mipmaps,qt&&de){q.length>0&&pt++;let K=vt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Kt,K.width,K.height)}for(let K=0;K<6;K++)if(it){qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,St[K].width,St[K].height,Bt,Tt,St[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Kt,St[K].width,St[K].height,0,Bt,Tt,St[K].data);for(let xt=0;xt<q.length;xt++){let Gt=q[xt].image[K].image;qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,0,0,Gt.width,Gt.height,Bt,Tt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,Kt,Gt.width,Gt.height,0,Bt,Tt,Gt.data)}}else{qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Bt,Tt,St[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Kt,Bt,Tt,St[K]);for(let xt=0;xt<q.length;xt++){let mt=q[xt];qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,0,0,Bt,Tt,mt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,Kt,Bt,Tt,mt.image[K])}}}g(M)&&p(i.TEXTURE_CUBE_MAP),$.__version=tt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Rt(A,M,z,Z,tt,$){let Ct=r.convert(z.format,z.colorSpace),ft=r.convert(z.type),_t=v(z.internalFormat,Ct,ft,z.colorSpace),$t=n.get(M),it=n.get(z);if(it.__renderTarget=M,!$t.__hasExternalTextures){let St=Math.max(1,M.width>>$),Ft=Math.max(1,M.height>>$);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,$,_t,St,Ft,M.depth,0,Ct,ft,null):e.texImage2D(tt,$,_t,St,Ft,0,Ct,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),bt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,it.__webglTexture,0,et(M)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,it.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(A,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let Z=M.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,$=y(M.stencilBuffer,tt),Ct=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=et(M);bt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,$,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,A)}else{let Z=M.textures;for(let tt=0;tt<Z.length;tt++){let $=Z[tt],Ct=r.convert($.format,$.colorSpace),ft=r.convert($.type),_t=v($.internalFormat,Ct,ft,$.colorSpace),$t=et(M);z&&bt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,_t,M.width,M.height):bt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,_t,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,_t,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(M.depthTexture);Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);let tt=Z.__webglTexture,$=et(M);if(M.depthTexture.format===ps)bt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(M.depthTexture.format===bs)bt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function zt(A){let M=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let Z=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){let tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=Z}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Nt(M.__webglFramebuffer,A)}else if(z){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=i.createRenderbuffer(),ct(M.__webglDepthbuffer[Z],A,!1);else{let tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ct(M.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(A,M,z){let Z=n.get(A);M!==void 0&&Rt(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&zt(A)}function jt(A){let M=A.texture,z=n.get(A),Z=n.get(M);A.addEventListener("dispose",R);let tt=A.textures,$=A.isWebGLCubeRenderTarget===!0,Ct=tt.length>1;if(Ct||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=M.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ft]=[];for(let _t=0;_t<M.mipmaps.length;_t++)z.__webglFramebuffer[ft][_t]=i.createFramebuffer()}else z.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ft=0;ft<M.mipmaps.length;ft++)z.__webglFramebuffer[ft]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let ft=0,_t=tt.length;ft<_t;ft++){let $t=n.get(tt[ft]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&bt(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ft=0;ft<tt.length;ft++){let _t=tt[ft];z.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ft]);let $t=r.convert(_t.format,_t.colorSpace),it=r.convert(_t.type),St=v(_t.internalFormat,$t,it,_t.colorSpace,A.isXRRenderTarget===!0),Ft=et(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,St,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,z.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Vt(i.TEXTURE_CUBE_MAP,M);for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)Rt(z.__webglFramebuffer[ft][_t],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,_t);else Rt(z.__webglFramebuffer[ft],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ft=0,_t=tt.length;ft<_t;ft++){let $t=tt[ft],it=n.get($t);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Vt(i.TEXTURE_2D,$t),Rt(z.__webglFramebuffer,A,$t,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),g($t)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ft=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Z.__webglTexture),Vt(ft,M),M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)Rt(z.__webglFramebuffer[_t],A,M,i.COLOR_ATTACHMENT0,ft,_t);else Rt(z.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,ft,0);g(M)&&p(ft),e.unbindTexture()}A.depthBuffer&&zt(A)}function Q(A){let M=A.textures;for(let z=0,Z=M.length;z<Z;z++){let tt=M[z];if(g(tt)){let $=_(A),Ct=n.get(tt).__webglTexture;e.bindTexture($,Ct),p($),e.unbindTexture()}}}let rt=[],P=[];function Dt(A){if(A.samples>0){if(bt(A)===!1){let M=A.textures,z=A.width,Z=A.height,tt=i.COLOR_BUFFER_BIT,$=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(A),ft=M.length>1;if(ft)for(let _t=0;_t<M.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let _t=0;_t<M.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[_t]);let $t=n.get(M[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,tt,i.NEAREST),c===!0&&(rt.length=0,P.length=0,rt.push(i.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.resolveDepthBuffer===!1&&(rt.push($),P.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let _t=0;_t<M.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[_t]);let $t=n.get(M[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function et(A){return Math.min(s.maxSamples,A.samples)}function bt(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function lt(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function kt(A,M){let z=A.colorSpace,Z=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Rs&&z!==ai&&(Jt.getTransfer(z)===re?(Z!==wn||tt!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function vt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=nt,this.setTextureCube=X,this.rebindTextures=Ot,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=bt}function fy(i,t){function e(n,s=ai){let r,o=Jt.getTransfer(s);if(n===qn)return i.UNSIGNED_BYTE;if(n===Zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ld)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ad)return i.BYTE;if(n===cd)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===Yl)return i.INT;if(n===Di)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===hd)return i.ALPHA;if(n===ud)return i.RGB;if(n===wn)return i.RGBA;if(n===dd)return i.LUMINANCE;if(n===fd)return i.LUMINANCE_ALPHA;if(n===ps)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===Jl)return i.RED;if(n===Kl)return i.RED_INTEGER;if(n===pd)return i.RG;if(n===Ql)return i.RG_INTEGER;if(n===jl)return i.RGBA_INTEGER;if(n===xo||n===yo||n===vo||n===_o)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sc||n===Tc||n===Ec||n===Ac)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===Cc||n===Pc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rc||n===Cc)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ic||n===Lc||n===Dc||n===Uc||n===Nc||n===kc||n===Fc||n===Oc||n===Bc||n===zc||n===Hc||n===Vc||n===Gc||n===Wc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ic)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bo||n===Xc||n===qc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===bo)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===md||n===Yc||n===Zc||n===$c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===bo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ul=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ut=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},py={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(py)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ut;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},my=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gy=`
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

}`,dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ce({vertexShader:my,fragmentShader:gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mt(new Ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fl=class extends hi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,x=new dl,g=e.getContextAttributes(),p=null,_=null,v=[],y=[],D=new j,E=null,R=new Ke;R.viewport=new le;let L=new Ke;L.viewport=new le;let w=[R,L],b=new ul,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ot=v[J];return ot===void 0&&(ot=new tr,v[J]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(J){let ot=v[J];return ot===void 0&&(ot=new tr,v[J]=ot),ot.getGripSpace()},this.getHand=function(J){let ot=v[J];return ot===void 0&&(ot=new tr,v[J]=ot),ot.getHandSpace()};function N(J){let ot=y.indexOf(J.inputSource);if(ot===-1)return;let Rt=v[ot];Rt!==void 0&&(Rt.update(J.inputSource,J.frame,l||o),Rt.dispatchEvent({type:J.type,data:J.inputSource}))}function U(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",Y);for(let J=0;J<v.length;J++){let ot=y[J];ot!==null&&(y[J]=null,v[J].disconnect(ot))}I=null,H=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,_=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",U),s.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let ot={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Xe(f.framebufferWidth,f.framebufferHeight,{format:wn,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ot=null,Rt=null,ct=null;g.depth&&(ct=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=g.stencil?bs:ps,Rt=g.stencil?_s:Di);let Nt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Xe(d.textureWidth,d.textureHeight,{format:wn,type:qn,depthTexture:new Lo(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(J){for(let ot=0;ot<J.removed.length;ot++){let Rt=J.removed[ot],ct=y.indexOf(Rt);ct>=0&&(y[ct]=null,v[ct].disconnect(Rt))}for(let ot=0;ot<J.added.length;ot++){let Rt=J.added[ot],ct=y.indexOf(Rt);if(ct===-1){for(let zt=0;zt<v.length;zt++)if(zt>=y.length){y.push(Rt),ct=zt;break}else if(y[zt]===null){y[zt]=Rt,ct=zt;break}if(ct===-1)break}let Nt=v[ct];Nt&&Nt.connect(Rt)}}let W=new C,nt=new C;function X(J,ot,Rt){W.setFromMatrixPosition(ot.matrixWorld),nt.setFromMatrixPosition(Rt.matrixWorld);let ct=W.distanceTo(nt),Nt=ot.projectionMatrix.elements,zt=Rt.projectionMatrix.elements,Ot=Nt[14]/(Nt[10]-1),jt=Nt[14]/(Nt[10]+1),Q=(Nt[9]+1)/Nt[5],rt=(Nt[9]-1)/Nt[5],P=(Nt[8]-1)/Nt[0],Dt=(zt[8]+1)/zt[0],et=Ot*P,bt=Ot*Dt,lt=ct/(-P+Dt),kt=lt*-P;if(ot.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(kt),J.translateZ(lt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Nt[10]===-1)J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let vt=Ot+lt,A=jt+lt,M=et-kt,z=bt+(ct-kt),Z=Q*jt/A*vt,tt=rt*jt/A*vt;J.projectionMatrix.makePerspective(M,z,Z,tt,vt,A),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ht(J,ot){ot===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ot.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ot=J.near,Rt=J.far;x.texture!==null&&(x.depthNear>0&&(ot=x.depthNear),x.depthFar>0&&(Rt=x.depthFar)),b.near=L.near=R.near=ot,b.far=L.far=R.far=Rt,(I!==b.near||H!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,H=b.far),R.layers.mask=J.layers.mask|2,L.layers.mask=J.layers.mask|4,b.layers.mask=R.layers.mask|L.layers.mask;let ct=J.parent,Nt=b.cameras;ht(b,ct);for(let zt=0;zt<Nt.length;zt++)ht(Nt[zt],ct);Nt.length===2?X(b,R,L):b.projectionMatrix.copy(R.projectionMatrix),yt(J,b,ct)};function yt(J,ot,Rt){Rt===null?J.matrix.copy(ot.matrixWorld):(J.matrix.copy(Rt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ot.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=rr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let Et=null;function Vt(J,ot){if(h=ot.getViewerPose(l||o),m=ot,h!==null){let Rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let ct=!1;Rt.length!==b.cameras.length&&(b.cameras.length=0,ct=!0);for(let zt=0;zt<Rt.length;zt++){let Ot=Rt[zt],jt=null;if(f!==null)jt=f.getViewport(Ot);else{let rt=u.getViewSubImage(d,Ot);jt=rt.viewport,zt===0&&(t.setRenderTargetTextures(_,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(_))}let Q=w[zt];Q===void 0&&(Q=new Ke,Q.layers.enable(zt),Q.viewport=new le,w[zt]=Q),Q.matrix.fromArray(Ot.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ot.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(jt.x,jt.y,jt.width,jt.height),zt===0&&(b.matrix.copy(Q.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ct===!0&&b.cameras.push(Q)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){let zt=u.getDepthInformation(Rt[0]);zt&&zt.isValid&&zt.texture&&x.init(t,zt,s.renderState)}}for(let Rt=0;Rt<v.length;Rt++){let ct=y[Rt],Nt=v[Rt];ct!==null&&Nt!==void 0&&Nt.update(ct,ot,l||o)}Et&&Et(J,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),m=null}let ne=new bd;ne.setAnimationLoop(Vt),this.setAnimationLoop=function(J){Et=J},this.dispose=function(){}}},Ai=new Dn,xy=new ce;function yy(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,_d(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,_,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,_,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=t.get(p),v=_.envMap,y=_.envMapRotation;v&&(g.envMap.value=v,Ai.copy(y),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),g.envMapRotation.value.setFromMatrix4(xy.makeRotationFromEuler(Ai)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,_,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let _=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){let y=v.program;n.uniformBlockBinding(_,y)}function l(_,v){let y=s[_.id];y===void 0&&(m(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",g));let D=v.program;n.updateUBOMapping(_,D);let E=t.render.frame;r[_.id]!==E&&(d(_),r[_.id]=E)}function h(_){let v=u();_.__bindingPointIndex=v;let y=i.createBuffer(),D=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,D,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=s[_.id],y=_.uniforms,D=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,R=y.length;E<R;E++){let L=Array.isArray(y[E])?y[E]:[y[E]];for(let w=0,b=L.length;w<b;w++){let I=L[w];if(f(I,E,w,D)===!0){let H=I.__offset,N=Array.isArray(I.value)?I.value:[I.value],U=0;for(let Y=0;Y<N.length;Y++){let W=N[Y],nt=x(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+U,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,U),U+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,v,y,D){let E=_.value,R=v+"_"+y;if(D[R]===void 0)return typeof E=="number"||typeof E=="boolean"?D[R]=E:D[R]=E.clone(),!0;{let L=D[R];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return D[R]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function m(_){let v=_.uniforms,y=0,D=16;for(let R=0,L=v.length;R<L;R++){let w=Array.isArray(v[R])?v[R]:[v[R]];for(let b=0,I=w.length;b<I;b++){let H=w[b],N=Array.isArray(H.value)?H.value:[H.value];for(let U=0,Y=N.length;U<Y;U++){let W=N[U],nt=x(W),X=y%D,ht=X%nt.boundary,yt=X+ht;y+=ht,yt!==0&&D-yt<nt.storage&&(y+=D-yt),H.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=nt.storage}}}let E=y%D;return E>0&&(y+=D-E),_.__size=y,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){let v=_.target;v.removeEventListener("dispose",g);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Do=class{constructor(t={}){let{canvas:e=Sp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,_=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=li,this.toneMappingExposure=1;let y=this,D=!1,E=0,R=0,L=null,w=-1,b=null,I=new le,H=new le,N=null,U=new At(0),Y=0,W=e.width,nt=e.height,X=1,ht=null,yt=null,Et=new le(0,0,W,nt),Vt=new le(0,0,W,nt),ne=!1,J=new cr,ot=!1,Rt=!1,ct=new ce,Nt=new ce,zt=new C,Ot=new le,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function rt(){return L===null?X:1}let P=n;function Dt(S,F){return e.getContext(S,F)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zl}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),P===null){let F="webgl2";if(P=Dt(F,S),P===null)throw Dt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let et,bt,lt,kt,vt,A,M,z,Z,tt,$,Ct,ft,_t,$t,it,St,Ft,Bt,Tt,Kt,qt,de,k;function pt(){et=new Ng(P),et.init(),qt=new fy(P,et),bt=new Cg(P,et,t,qt),lt=new hy(P,et),bt.reverseDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),kt=new Og(P),vt=new Kx,A=new dy(P,et,lt,vt,bt,qt,kt),M=new Ig(y),z=new Ug(y),Z=new Xp(P),de=new Ag(P,Z),tt=new kg(P,Z,kt,de),$=new zg(P,tt,Z,kt),Bt=new Bg(P,bt,A),it=new Pg(vt),Ct=new Jx(y,M,z,et,bt,de,it),ft=new yy(y,vt),_t=new jx,$t=new ry(et),Ft=new Eg(y,M,z,lt,$,f,c),St=new cy(y,$,bt),k=new vy(P,kt,bt,lt),Tt=new Rg(P,et,kt),Kt=new Fg(P,et,kt),kt.programs=Ct.programs,y.capabilities=bt,y.extensions=et,y.properties=vt,y.renderLists=_t,y.shadowMap=St,y.state=lt,y.info=kt}pt();let q=new fl(y,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=et.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=et.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(W,nt,!1))},this.getSize=function(S){return S.set(W,nt)},this.setSize=function(S,F,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,nt=F,e.width=Math.floor(S*X),e.height=Math.floor(F*X),V===!0&&(e.style.width=S+"px",e.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(W*X,nt*X).floor()},this.setDrawingBufferSize=function(S,F,V){W=S,nt=F,X=V,e.width=Math.floor(S*V),e.height=Math.floor(F*V),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(Et)},this.setViewport=function(S,F,V,G){S.isVector4?Et.set(S.x,S.y,S.z,S.w):Et.set(S,F,V,G),lt.viewport(I.copy(Et).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(Vt)},this.setScissor=function(S,F,V,G){S.isVector4?Vt.set(S.x,S.y,S.z,S.w):Vt.set(S,F,V,G),lt.scissor(H.copy(Vt).multiplyScalar(X).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(S){lt.setScissorTest(ne=S)},this.setOpaqueSort=function(S){ht=S},this.setTransparentSort=function(S){yt=S},this.getClearColor=function(S){return S.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(S=!0,F=!0,V=!0){let G=0;if(S){let O=!1;if(L!==null){let at=L.texture.format;O=at===jl||at===Ql||at===Kl}if(O){let at=L.texture.type,gt=at===qn||at===Di||at===sr||at===_s||at===Zl||at===$l,Pt=Ft.getClearColor(),It=Ft.getClearAlpha(),Ht=Pt.r,Wt=Pt.g,Lt=Pt.b;gt?(m[0]=Ht,m[1]=Wt,m[2]=Lt,m[3]=It,P.clearBufferuiv(P.COLOR,0,m)):(x[0]=Ht,x[1]=Wt,x[2]=Lt,x[3]=It,P.clearBufferiv(P.COLOR,0,x))}else G|=P.COLOR_BUFFER_BIT}F&&(G|=P.DEPTH_BUFFER_BIT),V&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),_t.dispose(),$t.dispose(),vt.dispose(),M.dispose(),z.dispose(),$.dispose(),de.dispose(),k.dispose(),Ct.dispose(),q.dispose(),q.removeEventListener("sessionstart",Nh),q.removeEventListener("sessionend",kh),bi.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let S=kt.autoReset,F=St.enabled,V=St.autoUpdate,G=St.needsUpdate,O=St.type;pt(),kt.autoReset=S,St.enabled=F,St.autoUpdate=V,St.needsUpdate=G,St.type=O}function mt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Gt(S){let F=S.target;F.removeEventListener("dispose",Gt),be(F)}function be(S){Oe(S),vt.remove(S)}function Oe(S){let F=vt.get(S).programs;F!==void 0&&(F.forEach(function(V){Ct.releaseProgram(V)}),S.isShaderMaterial&&Ct.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,V,G,O,at){F===null&&(F=jt);let gt=O.isMesh&&O.matrixWorld.determinant()<0,Pt=Tf(S,F,V,G,O);lt.setMaterial(G,gt);let It=V.index,Ht=1;if(G.wireframe===!0){if(It=tt.getWireframeAttribute(V),It===void 0)return;Ht=2}let Wt=V.drawRange,Lt=V.attributes.position,ee=Wt.start*Ht,fe=(Wt.start+Wt.count)*Ht;at!==null&&(ee=Math.max(ee,at.start*Ht),fe=Math.min(fe,(at.start+at.count)*Ht)),It!==null?(ee=Math.max(ee,0),fe=Math.min(fe,It.count)):Lt!=null&&(ee=Math.max(ee,0),fe=Math.min(fe,Lt.count));let ge=fe-ee;if(ge<0||ge===1/0)return;de.setup(O,G,Pt,V,It);let Je,ie=Tt;if(It!==null&&(Je=Z.get(It),ie=Kt,ie.setIndex(Je)),O.isMesh)G.wireframe===!0?(lt.setLineWidth(G.wireframeLinewidth*rt()),ie.setMode(P.LINES)):ie.setMode(P.TRIANGLES);else if(O.isLine){let Ut=G.linewidth;Ut===void 0&&(Ut=1),lt.setLineWidth(Ut*rt()),O.isLineSegments?ie.setMode(P.LINES):O.isLineLoop?ie.setMode(P.LINE_LOOP):ie.setMode(P.LINE_STRIP)}else O.isPoints?ie.setMode(P.POINTS):O.isSprite&&ie.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ie.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ie.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ut=O._multiDrawStarts,Fn=O._multiDrawCounts,se=O._multiDrawCount,xn=It?Z.get(It).bytesPerElement:1,Xi=vt.get(G).currentProgram.getUniforms();for(let nn=0;nn<se;nn++)Xi.setValue(P,"_gl_DrawID",nn),ie.render(Ut[nn]/xn,Fn[nn])}else if(O.isInstancedMesh)ie.renderInstances(ee,ge,O.count);else if(V.isInstancedBufferGeometry){let Ut=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Fn=Math.min(V.instanceCount,Ut);ie.renderInstances(ee,ge,Fn)}else ie.render(ee,ge)};function oe(S,F,V){S.transparent===!0&&S.side===Me&&S.forceSinglePass===!1?(S.side=Qe,S.needsUpdate=!0,Or(S,F,V),S.side=Sn,S.needsUpdate=!0,Or(S,F,V),S.side=Me):Or(S,F,V)}this.compile=function(S,F,V=null){V===null&&(V=S),p=$t.get(V),p.init(F),v.push(p),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==V&&S.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let G=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let at=O.material;if(at)if(Array.isArray(at))for(let gt=0;gt<at.length;gt++){let Pt=at[gt];oe(Pt,V,O),G.add(Pt)}else oe(at,V,O),G.add(at)}),v.pop(),p=null,G},this.compileAsync=function(S,F,V=null){let G=this.compile(S,F,V);return new Promise(O=>{function at(){if(G.forEach(function(gt){vt.get(gt).currentProgram.isReady()&&G.delete(gt)}),G.size===0){O(S);return}setTimeout(at,10)}et.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let gn=null;function kn(S){gn&&gn(S)}function Nh(){bi.stop()}function kh(){bi.start()}let bi=new bd;bi.setAnimationLoop(kn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(S){gn=S,q.setAnimationLoop(S),S===null?bi.stop():bi.start()},q.addEventListener("sessionstart",Nh),q.addEventListener("sessionend",kh),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,F,L),p=$t.get(S,v.length),p.init(F),v.push(p),Nt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),J.setFromProjectionMatrix(Nt),Rt=this.localClippingEnabled,ot=it.init(this.clippingPlanes,Rt),g=_t.get(S,_.length),g.init(),_.push(g),q.enabled===!0&&q.isPresenting===!0){let at=y.xr.getDepthSensingMesh();at!==null&&Pa(at,F,-1/0,y.sortObjects)}Pa(S,F,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ht,yt),Q=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Q&&Ft.addToRenderList(g,S),this.info.render.frame++,ot===!0&&it.beginShadows();let V=p.state.shadowsArray;St.render(V,S,F),ot===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=g.opaque,O=g.transmissive;if(p.setupLights(),F.isArrayCamera){let at=F.cameras;if(O.length>0)for(let gt=0,Pt=at.length;gt<Pt;gt++){let It=at[gt];Oh(G,O,S,It)}Q&&Ft.render(S);for(let gt=0,Pt=at.length;gt<Pt;gt++){let It=at[gt];Fh(g,S,It,It.viewport)}}else O.length>0&&Oh(G,O,S,F),Q&&Ft.render(S),Fh(g,S,F);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(y,S,F),de.resetDefaultState(),w=-1,b=null,v.pop(),v.length>0?(p=v[v.length-1],ot===!0&&it.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Pa(S,F,V,G){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||J.intersectsSprite(S)){G&&Ot.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Nt);let gt=$.update(S),Pt=S.material;Pt.visible&&g.push(S,gt,Pt,V,Ot.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||J.intersectsObject(S))){let gt=$.update(S),Pt=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ot.copy(S.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Ot.copy(gt.boundingSphere.center)),Ot.applyMatrix4(S.matrixWorld).applyMatrix4(Nt)),Array.isArray(Pt)){let It=gt.groups;for(let Ht=0,Wt=It.length;Ht<Wt;Ht++){let Lt=It[Ht],ee=Pt[Lt.materialIndex];ee&&ee.visible&&g.push(S,gt,ee,V,Ot.z,Lt)}}else Pt.visible&&g.push(S,gt,Pt,V,Ot.z,null)}}let at=S.children;for(let gt=0,Pt=at.length;gt<Pt;gt++)Pa(at[gt],F,V,G)}function Fh(S,F,V,G){let O=S.opaque,at=S.transmissive,gt=S.transparent;p.setupLightsView(V),ot===!0&&it.setGlobalState(y.clippingPlanes,V),G&&lt.viewport(I.copy(G)),O.length>0&&Fr(O,F,V),at.length>0&&Fr(at,F,V),gt.length>0&&Fr(gt,F,V),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Oh(S,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Xe(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?En:qn,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));let at=p.state.transmissionRenderTarget[G.id],gt=G.viewport||I;at.setSize(gt.z,gt.w);let Pt=y.getRenderTarget();y.setRenderTarget(at),y.getClearColor(U),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),Q&&Ft.render(V);let It=y.toneMapping;y.toneMapping=li;let Ht=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),ot===!0&&it.setGlobalState(y.clippingPlanes,G),Fr(S,V,G),A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at),et.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Lt=0,ee=F.length;Lt<ee;Lt++){let fe=F[Lt],ge=fe.object,Je=fe.geometry,ie=fe.material,Ut=fe.group;if(ie.side===Me&&ge.layers.test(G.layers)){let Fn=ie.side;ie.side=Qe,ie.needsUpdate=!0,Bh(ge,V,G,Je,ie,Ut),ie.side=Fn,ie.needsUpdate=!0,Wt=!0}}Wt===!0&&(A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at))}y.setRenderTarget(Pt),y.setClearColor(U,Y),Ht!==void 0&&(G.viewport=Ht),y.toneMapping=It}function Fr(S,F,V){let G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,at=S.length;O<at;O++){let gt=S[O],Pt=gt.object,It=gt.geometry,Ht=G===null?gt.material:G,Wt=gt.group;Pt.layers.test(V.layers)&&Bh(Pt,F,V,It,Ht,Wt)}}function Bh(S,F,V,G,O,at){S.onBeforeRender(y,F,V,G,O,at),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(y,F,V,G,S,at),O.transparent===!0&&O.side===Me&&O.forceSinglePass===!1?(O.side=Qe,O.needsUpdate=!0,y.renderBufferDirect(V,F,G,O,S,at),O.side=Sn,O.needsUpdate=!0,y.renderBufferDirect(V,F,G,O,S,at),O.side=Me):y.renderBufferDirect(V,F,G,O,S,at),S.onAfterRender(y,F,V,G,O,at)}function Or(S,F,V){F.isScene!==!0&&(F=jt);let G=vt.get(S),O=p.state.lights,at=p.state.shadowsArray,gt=O.state.version,Pt=Ct.getParameters(S,O.state,at,F,V),It=Ct.getProgramCacheKey(Pt),Ht=G.programs;G.environment=S.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(S.isMeshStandardMaterial?z:M).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Ht===void 0&&(S.addEventListener("dispose",Gt),Ht=new Map,G.programs=Ht);let Wt=Ht.get(It);if(Wt!==void 0){if(G.currentProgram===Wt&&G.lightsStateVersion===gt)return Hh(S,Pt),Wt}else Pt.uniforms=Ct.getUniforms(S),S.onBeforeCompile(Pt,y),Wt=Ct.acquireProgram(Pt,It),Ht.set(It,Wt),G.uniforms=Pt.uniforms;let Lt=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Lt.clippingPlanes=it.uniform),Hh(S,Pt),G.needsLights=Af(S),G.lightsStateVersion=gt,G.needsLights&&(Lt.ambientLightColor.value=O.state.ambient,Lt.lightProbe.value=O.state.probe,Lt.directionalLights.value=O.state.directional,Lt.directionalLightShadows.value=O.state.directionalShadow,Lt.spotLights.value=O.state.spot,Lt.spotLightShadows.value=O.state.spotShadow,Lt.rectAreaLights.value=O.state.rectArea,Lt.ltc_1.value=O.state.rectAreaLTC1,Lt.ltc_2.value=O.state.rectAreaLTC2,Lt.pointLights.value=O.state.point,Lt.pointLightShadows.value=O.state.pointShadow,Lt.hemisphereLights.value=O.state.hemi,Lt.directionalShadowMap.value=O.state.directionalShadowMap,Lt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Lt.spotShadowMap.value=O.state.spotShadowMap,Lt.spotLightMatrix.value=O.state.spotLightMatrix,Lt.spotLightMap.value=O.state.spotLightMap,Lt.pointShadowMap.value=O.state.pointShadowMap,Lt.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Wt,G.uniformsList=null,Wt}function zh(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=gs.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Hh(S,F){let V=vt.get(S);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Tf(S,F,V,G,O){F.isScene!==!0&&(F=jt),A.resetTextureUnits();let at=F.fog,gt=G.isMeshStandardMaterial?F.environment:null,Pt=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Rs,It=(G.isMeshStandardMaterial?z:M).get(G.envMap||gt),Ht=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Wt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Lt=!!V.morphAttributes.position,ee=!!V.morphAttributes.normal,fe=!!V.morphAttributes.color,ge=li;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ge=y.toneMapping);let Je=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ie=Je!==void 0?Je.length:0,Ut=vt.get(G),Fn=p.state.lights;if(ot===!0&&(Rt===!0||S!==b)){let ln=S===b&&G.id===w;it.setState(G,S,ln)}let se=!1;G.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Fn.state.version||Ut.outputColorSpace!==Pt||O.isBatchedMesh&&Ut.batching===!1||!O.isBatchedMesh&&Ut.batching===!0||O.isBatchedMesh&&Ut.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ut.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ut.instancing===!1||!O.isInstancedMesh&&Ut.instancing===!0||O.isSkinnedMesh&&Ut.skinning===!1||!O.isSkinnedMesh&&Ut.skinning===!0||O.isInstancedMesh&&Ut.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ut.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ut.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ut.instancingMorph===!1&&O.morphTexture!==null||Ut.envMap!==It||G.fog===!0&&Ut.fog!==at||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==it.numPlanes||Ut.numIntersection!==it.numIntersection)||Ut.vertexAlphas!==Ht||Ut.vertexTangents!==Wt||Ut.morphTargets!==Lt||Ut.morphNormals!==ee||Ut.morphColors!==fe||Ut.toneMapping!==ge||Ut.morphTargetsCount!==ie)&&(se=!0):(se=!0,Ut.__version=G.version);let xn=Ut.currentProgram;se===!0&&(xn=Or(G,F,O));let Xi=!1,nn=!1,Os=!1,xe=xn.getUniforms(),An=Ut.uniforms;if(lt.useProgram(xn.program)&&(Xi=!0,nn=!0,Os=!0),G.id!==w&&(w=G.id,nn=!0),Xi||b!==S){lt.buffers.depth.getReversed()?(ct.copy(S.projectionMatrix),Ep(ct),Ap(ct),xe.setValue(P,"projectionMatrix",ct)):xe.setValue(P,"projectionMatrix",S.projectionMatrix),xe.setValue(P,"viewMatrix",S.matrixWorldInverse);let jn=xe.map.cameraPosition;jn!==void 0&&jn.setValue(P,zt.setFromMatrixPosition(S.matrixWorld)),bt.logarithmicDepthBuffer&&xe.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xe.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,nn=!0,Os=!0)}if(O.isSkinnedMesh){xe.setOptional(P,O,"bindMatrix"),xe.setOptional(P,O,"bindMatrixInverse");let ln=O.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),xe.setValue(P,"boneTexture",ln.boneTexture,A))}O.isBatchedMesh&&(xe.setOptional(P,O,"batchingTexture"),xe.setValue(P,"batchingTexture",O._matricesTexture,A),xe.setOptional(P,O,"batchingIdTexture"),xe.setValue(P,"batchingIdTexture",O._indirectTexture,A),xe.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&xe.setValue(P,"batchingColorTexture",O._colorsTexture,A));let Bs=V.morphAttributes;if((Bs.position!==void 0||Bs.normal!==void 0||Bs.color!==void 0)&&Bt.update(O,V,xn),(nn||Ut.receiveShadow!==O.receiveShadow)&&(Ut.receiveShadow=O.receiveShadow,xe.setValue(P,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(An.envMap.value=It,An.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(An.envMapIntensity.value=F.environmentIntensity),nn&&(xe.setValue(P,"toneMappingExposure",y.toneMappingExposure),Ut.needsLights&&Ef(An,Os),at&&G.fog===!0&&ft.refreshFogUniforms(An,at),ft.refreshMaterialUniforms(An,G,X,nt,p.state.transmissionRenderTarget[S.id]),gs.upload(P,zh(Ut),An,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(gs.upload(P,zh(Ut),An,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xe.setValue(P,"center",O.center),xe.setValue(P,"modelViewMatrix",O.modelViewMatrix),xe.setValue(P,"normalMatrix",O.normalMatrix),xe.setValue(P,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let ln=G.uniformsGroups;for(let jn=0,ti=ln.length;jn<ti;jn++){let Vh=ln[jn];k.update(Vh,xn),k.bind(Vh,xn)}}return xn}function Ef(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Af(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,F,V){vt.get(S.texture).__webglTexture=F,vt.get(S.depthTexture).__webglTexture=V;let G=vt.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){let V=vt.get(S);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,V=0){L=S,E=F,R=V;let G=!0,O=null,at=!1,gt=!1;if(S){let It=vt.get(S);if(It.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(It.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(It.__hasExternalTextures)A.rebindTextures(S,vt.get(S.texture).__webglTexture,vt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Lt=S.depthTexture;if(It.__boundDepthTexture!==Lt){if(Lt!==null&&vt.has(Lt)&&(S.width!==Lt.image.width||S.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}let Ht=S.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(gt=!0);let Wt=vt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Wt[F])?O=Wt[F][V]:O=Wt[F],at=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?O=vt.get(S).__webglMultisampledFramebuffer:Array.isArray(Wt)?O=Wt[V]:O=Wt,I.copy(S.viewport),H.copy(S.scissor),N=S.scissorTest}else I.copy(Et).multiplyScalar(X).floor(),H.copy(Vt).multiplyScalar(X).floor(),N=ne;if(lt.bindFramebuffer(P.FRAMEBUFFER,O)&&G&&lt.drawBuffers(S,O),lt.viewport(I),lt.scissor(H),lt.setScissorTest(N),at){let It=vt.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,It.__webglTexture,V)}else if(gt){let It=vt.get(S.texture),Ht=F||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,It.__webglTexture,V||0,Ht)}w=-1},this.readRenderTargetPixels=function(S,F,V,G,O,at,gt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=vt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&gt!==void 0&&(Pt=Pt[gt]),Pt){lt.bindFramebuffer(P.FRAMEBUFFER,Pt);try{let It=S.texture,Ht=It.format,Wt=It.type;if(!bt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-G&&V>=0&&V<=S.height-O&&P.readPixels(F,V,G,O,qt.convert(Ht),qt.convert(Wt),at)}finally{let It=L!==null?vt.get(L).__webglFramebuffer:null;lt.bindFramebuffer(P.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(S,F,V,G,O,at,gt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=vt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&gt!==void 0&&(Pt=Pt[gt]),Pt){let It=S.texture,Ht=It.format,Wt=It.type;if(!bt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=S.width-G&&V>=0&&V<=S.height-O){lt.bindFramebuffer(P.FRAMEBUFFER,Pt);let Lt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Lt),P.bufferData(P.PIXEL_PACK_BUFFER,at.byteLength,P.STREAM_READ),P.readPixels(F,V,G,O,qt.convert(Ht),qt.convert(Wt),0);let ee=L!==null?vt.get(L).__webglFramebuffer:null;lt.bindFramebuffer(P.FRAMEBUFFER,ee);let fe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Tp(P,fe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Lt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,at),P.deleteBuffer(Lt),P.deleteSync(fe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,F=null,V=0){S.isTexture!==!0&&(Js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,S=arguments[1]);let G=Math.pow(2,-V),O=Math.floor(S.image.width*G),at=Math.floor(S.image.height*G),gt=F!==null?F.x:0,Pt=F!==null?F.y:0;A.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,gt,Pt,O,at),lt.unbindTexture()},this.copyTextureToTexture=function(S,F,V=null,G=null,O=0){S.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],F=arguments[2],O=arguments[3]||0,V=null);let at,gt,Pt,It,Ht,Wt,Lt,ee,fe,ge=S.isCompressedTexture?S.mipmaps[O]:S.image;V!==null?(at=V.max.x-V.min.x,gt=V.max.y-V.min.y,Pt=V.isBox3?V.max.z-V.min.z:1,It=V.min.x,Ht=V.min.y,Wt=V.isBox3?V.min.z:0):(at=ge.width,gt=ge.height,Pt=ge.depth||1,It=0,Ht=0,Wt=0),G!==null?(Lt=G.x,ee=G.y,fe=G.z):(Lt=0,ee=0,fe=0);let Je=qt.convert(F.format),ie=qt.convert(F.type),Ut;F.isData3DTexture?(A.setTexture3D(F,0),Ut=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),Ut=P.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),Ut=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);let Fn=P.getParameter(P.UNPACK_ROW_LENGTH),se=P.getParameter(P.UNPACK_IMAGE_HEIGHT),xn=P.getParameter(P.UNPACK_SKIP_PIXELS),Xi=P.getParameter(P.UNPACK_SKIP_ROWS),nn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ge.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ge.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,It),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ht),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Wt);let Os=S.isDataArrayTexture||S.isData3DTexture,xe=F.isDataArrayTexture||F.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let An=vt.get(S),Bs=vt.get(F),ln=vt.get(An.__renderTarget),jn=vt.get(Bs.__renderTarget);lt.bindFramebuffer(P.READ_FRAMEBUFFER,ln.__webglFramebuffer),lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let ti=0;ti<Pt;ti++)Os&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.get(S).__webglTexture,O,Wt+ti),S.isDepthTexture?(xe&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.get(F).__webglTexture,O,fe+ti),P.blitFramebuffer(It,Ht,at,gt,Lt,ee,at,gt,P.DEPTH_BUFFER_BIT,P.NEAREST)):xe?P.copyTexSubImage3D(Ut,O,Lt,ee,fe+ti,It,Ht,at,gt):P.copyTexSubImage2D(Ut,O,Lt,ee,fe+ti,It,Ht,at,gt);lt.bindFramebuffer(P.READ_FRAMEBUFFER,null),lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else xe?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Ut,O,Lt,ee,fe,at,gt,Pt,Je,ie,ge.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Ut,O,Lt,ee,fe,at,gt,Pt,Je,ge.data):P.texSubImage3D(Ut,O,Lt,ee,fe,at,gt,Pt,Je,ie,ge):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,Lt,ee,at,gt,Je,ie,ge.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,Lt,ee,ge.width,ge.height,Je,ge.data):P.texSubImage2D(P.TEXTURE_2D,O,Lt,ee,at,gt,Je,ie,ge);P.pixelStorei(P.UNPACK_ROW_LENGTH,Fn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,se),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Xi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,nn),O===0&&F.generateMipmaps&&P.generateMipmap(Ut),lt.unbindTexture()},this.copyTextureToTexture3D=function(S,F,V=null,G=null,O=0){return S.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,S=arguments[2],F=arguments[3],O=arguments[4]||0),Js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,F,V,G,O)},this.initRenderTarget=function(S){vt.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),lt.unbindTexture()},this.resetState=function(){E=0,R=0,L=null,lt.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var Uo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},No=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},pl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kc,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ge=new C,ko=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},lr=class extends Zn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},os,Ws=new C,as=new C,cs=new C,ls=new j,Xs=new j,Ed=new ce,oo=new C,qs=new C,ao=new C,Vu=new j,rc=new j,Gu=new j,Fo=class extends Re{constructor(t=new lr){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new we;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pl(e,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new ko(n,3,0,!1)),os.setAttribute("uv",new ko(n,2,3,!1))}this.geometry=os,this.material=t,this.center=new j(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),Ed.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-cs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;co(oo.set(-.5,-.5,0),cs,o,as,s,r),co(qs.set(.5,-.5,0),cs,o,as,s,r),co(ao.set(.5,.5,0),cs,o,as,s,r),Vu.set(0,0),rc.set(1,0),Gu.set(1,1);let a=t.ray.intersectTriangle(oo,qs,ao,!1,Ws);if(a===null&&(co(qs.set(-.5,.5,0),cs,o,as,s,r),rc.set(0,1),a=t.ray.intersectTriangle(oo,ao,qs,!1,Ws),a===null))return;let c=t.ray.origin.distanceTo(Ws);c<t.near||c>t.far||e.push({distance:c,point:Ws.clone(),uv:ci.getInterpolation(Ws,oo,qs,ao,Vu,rc,Gu,new j),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function co(i,t,e,n,s,r){ls.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Xs.x=r*ls.x-s*ls.y,Xs.y=s*ls.x+r*ls.y):Xs.copy(ls),i.copy(t),i.x+=Xs.x,i.y+=Xs.y,i.applyMatrix4(Ed)}var ml=class extends je{constructor(t=null,e=1,n=1,s,r,o,a,c,l=on,h=on,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oo=class extends De{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hs=new ce,Wu=new ce,lo=[],Xu=new Yn,_y=new ce,Ys=new Mt,Zs=new di,Bo=class extends Mt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Oo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_y)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Xu.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(Xu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Zs.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zs.copy(this.boundingSphere),Zs.applyMatrix4(n),t.ray.intersectsSphere(Zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),Wu.multiplyMatrices(n,hs),Ys.matrixWorld=Wu,Ys.raycast(t,lo);for(let o=0,a=lo.length;o<a;o++){let c=lo[o];c.instanceId=r,c.object=this,e.push(c)}lo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Oo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ml(new Float32Array(s*this.count),s,this.count,Jl,Pn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ws=class extends Zn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qu=new ce,gl=new or,ho=new di,uo=new C,hr=class extends Re{constructor(t=new we,e=new ws){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(s),ho.radius+=r,t.ray.intersectsSphere(ho)===!1)return;qu.copy(s).invert(),gl.copy(t.ray).applyMatrix4(qu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let g=l.getX(m);uo.fromBufferAttribute(u,g),Yu(uo,g,c,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)uo.fromBufferAttribute(u,m),Yu(uo,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yu(i,t,e,n,s,r,o){let a=gl.distanceSqToPoint(i);if(a<e){let c=new C;gl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ss=class extends je{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new j:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],o=[],a=new C,c=new ce;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ne(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ne(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ur=class extends dn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new j){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},xl=class extends ur{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var fo=new C,oc=new nh,ac=new nh,cc=new nh,yl=class extends dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(fo.subVectors(s[0],s[1]).add(s[0]),l=fo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(fo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),oc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),ac.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),cc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(oc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ac.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),cc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(oc.calc(c),ac.calc(c),cc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function by(i,t){let e=1-i;return e*e*t}function My(i,t){return 2*(1-i)*i*t}function wy(i,t){return i*i*t}function er(i,t,e,n){return by(i,t)+My(i,e)+wy(i,n)}function Sy(i,t){let e=1-i;return e*e*e*t}function Ty(i,t){let e=1-i;return 3*e*e*i*t}function Ey(i,t){return 3*(1-i)*i*i*t}function Ay(i,t){return i*i*i*t}function nr(i,t,e,n,s){return Sy(i,t)+Ty(i,e)+Ey(i,n)+Ay(i,s)}var zo=class extends dn{constructor(t=new j,e=new j,n=new j,s=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(t,s.x,r.x,o.x,a.x),nr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vl=class extends dn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(t,s.x,r.x,o.x,a.x),nr(t,s.y,r.y,o.y,a.y),nr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ho=class extends dn{constructor(t=new j,e=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_l=class extends dn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vo=class extends dn{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(er(t,s.x,r.x,o.x),er(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bl=class extends dn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(er(t,s.x,r.x,o.x),er(t,s.y,r.y,o.y),er(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Go=class extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new j){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Zu(a,c.x,l.x,h.x,u.x),Zu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new j().fromArray(s))}return this}},Ml=Object.freeze({__proto__:null,ArcCurve:xl,CatmullRomCurve3:yl,CubicBezierCurve:zo,CubicBezierCurve3:vl,EllipseCurve:ur,LineCurve:Ho,LineCurve3:_l,QuadraticBezierCurve:Vo,QuadraticBezierCurve3:bl,SplineCurve:Go}),wl=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ml[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ml[s.type]().fromJSON(s))}return this}},Wo=class extends wl{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ho(this.currentPoint.clone(),new j(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Vo(this.currentPoint.clone(),new j(t,e),new j(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new zo(this.currentPoint.clone(),new j(t,e),new j(n,s),new j(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Go(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new ur(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Ts=class i extends we{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new C,h=new j;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},tn=class i extends we{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;_(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function _(){let y=new C,D=new C,E=0,R=(e-t)/n;for(let L=0;L<=r;L++){let w=[],b=L/r,I=b*(e-t)+t;for(let H=0;H<=s;H++){let N=H/s,U=N*c+a,Y=Math.sin(U),W=Math.cos(U);D.x=I*Y,D.y=-b*n+g,D.z=I*W,u.push(D.x,D.y,D.z),y.set(Y,R,W).normalize(),d.push(y.x,y.y,y.z),f.push(N,1-b),w.push(m++)}x.push(w)}for(let L=0;L<s;L++)for(let w=0;w<r;w++){let b=x[w][L],I=x[w+1][L],H=x[w+1][L+1],N=x[w][L+1];(t>0||w!==0)&&(h.push(b,I,N),E+=3),(e>0||w!==r-1)&&(h.push(I,H,N),E+=3)}l.addGroup(p,E,0),p+=E}function v(y){let D=m,E=new j,R=new C,L=0,w=y===!0?t:e,b=y===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),m++;let I=m;for(let H=0;H<=s;H++){let U=H/s*c+a,Y=Math.cos(U),W=Math.sin(U);R.x=w*W,R.y=g*b,R.z=w*Y,u.push(R.x,R.y,R.z),d.push(0,b,0),E.x=Y*.5+.5,E.y=W*.5*b+.5,f.push(E.x,E.y),m++}for(let H=0;H<s;H++){let N=D+H,U=I+H;y===!0?h.push(U,U+1,N):h.push(U+1,U,N),L+=3}l.addGroup(p,L,y===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pi=class i extends tn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sl=class i extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new C,y=new C,D=new C;for(let E=0;E<e.length;E+=3)f(e[E+0],v),f(e[E+1],y),f(e[E+2],D),c(v,y,D,_)}function c(_,v,y,D){let E=D+1,R=[];for(let L=0;L<=E;L++){R[L]=[];let w=_.clone().lerp(y,L/E),b=v.clone().lerp(y,L/E),I=E-L;for(let H=0;H<=I;H++)H===0&&L===E?R[L][H]=w:R[L][H]=w.clone().lerp(b,H/I)}for(let L=0;L<E;L++)for(let w=0;w<2*(E-L)-1;w++){let b=Math.floor(w/2);w%2===0?(d(R[L][b+1]),d(R[L+1][b]),d(R[L][b])):(d(R[L][b+1]),d(R[L+1][b+1]),d(R[L+1][b]))}}function l(_){let v=new C;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(_),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let _=new C;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let y=g(_)/2/Math.PI+.5,D=p(_)/Math.PI+.5;o.push(y,1-D)}m(),u()}function u(){for(let _=0;_<o.length;_+=6){let v=o[_+0],y=o[_+2],D=o[_+4],E=Math.max(v,y,D),R=Math.min(v,y,D);E>.9&&R<.1&&(v<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),D<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,v){let y=_*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function m(){let _=new C,v=new C,y=new C,D=new C,E=new j,R=new j,L=new j;for(let w=0,b=0;w<r.length;w+=9,b+=6){_.set(r[w+0],r[w+1],r[w+2]),v.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),E.set(o[b+0],o[b+1]),R.set(o[b+2],o[b+3]),L.set(o[b+4],o[b+5]),D.copy(_).add(v).add(y).divideScalar(3);let I=g(D);x(E,b+0,_,I),x(R,b+2,v,I),x(L,b+4,y,I)}}function x(_,v,y,D){D<0&&_.x===1&&(o[v]=_.x-1),y.x===0&&y.z===0&&(o[v]=D/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Es=class extends Wo{constructor(t){super(t),this.uuid=Ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Wo().fromJSON(s))}return this}},Ry={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ad(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=Dy(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return dr(r,o,e,a,c,f,0),o}};function Ad(i,t,e,n,s){let r,o;if(s===Wy(i,t,e,n)>0)for(r=t;r<e;r+=n)o=$u(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=$u(r,i[r],i[r+1],o);return o&&na(o,o.next)&&(pr(o),o=o.next),o}function Ui(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(na(e,e.next)||_e(e.prev,e,e.next)===0)){if(pr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function dr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Oy(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Py(i,n,s,r):Cy(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),pr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Iy(Ui(i),t,e),dr(i,t,e,n,s,r,2)):o===2&&Ly(i,t,e,n,s,r):dr(Ui(i),t,e,n,s,r,1);break}}}function Cy(i){let t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&ds(s,a,r,c,o,l,m.x,m.y)&&_e(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Py(i,t,e,n){let s=i.prev,r=i,o=i.next;if(_e(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=Tl(f,m,t,e,n),_=Tl(x,g,t,e,n),v=i.prevZ,y=i.nextZ;for(;v&&v.z>=p&&y&&y.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&ds(a,h,c,u,l,d,v.x,v.y)&&_e(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&ds(a,h,c,u,l,d,y.x,y.y)&&_e(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&ds(a,h,c,u,l,d,v.x,v.y)&&_e(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&ds(a,h,c,u,l,d,y.x,y.y)&&_e(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Iy(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!na(s,r)&&Rd(s,n,n.next,r)&&fr(s,r)&&fr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),pr(n),pr(n.next),n=i=r),n=n.next}while(n!==i);return Ui(n)}function Ly(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hy(o,a)){let c=Cd(o,a);o=Ui(o,o.next),c=Ui(c,c.next),dr(o,t,e,n,s,r,0),dr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Dy(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Ad(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(zy(l));for(s.sort(Uy),r=0;r<s.length;r++)e=Ny(s[r],e);return e}function Uy(i,t){return i.x-t.x}function Ny(i,t){let e=ky(i,t);if(!e)return t;let n=Cd(e,i);return Ui(n,n.next),Ui(e,e.next)}function ky(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ds(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),fr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Fy(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Fy(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function Oy(i,t,e,n){let s=i;do s.z===0&&(s.z=Tl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,By(s)}function By(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Tl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function zy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ds(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Hy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Vy(i,t)&&(fr(i,t)&&fr(t,i)&&Gy(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||na(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function na(i,t){return i.x===t.x&&i.y===t.y}function Rd(i,t,e,n){let s=mo(_e(i,t,e)),r=mo(_e(i,t,n)),o=mo(_e(e,n,i)),a=mo(_e(e,n,t));return!!(s!==r&&o!==a||s===0&&po(i,e,t)||r===0&&po(i,n,t)||o===0&&po(e,i,n)||a===0&&po(e,t,n))}function po(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function mo(i){return i>0?1:i<0?-1:0}function Vy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Rd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function fr(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function Gy(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Cd(i,t){let e=new El(i.i,i.x,i.y),n=new El(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $u(i,t,e,n){let s=new El(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function pr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function El(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wy(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ir=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ju(t),Ku(n,t);let o=t.length;e.forEach(Ju);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Ku(n,e[c]);let a=Ry.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ju(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ku(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var mr=class i extends we{constructor(t=new Es([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Xy,v,y=!1,D,E,R,L;p&&(v=p.getSpacedPoints(h),y=!0,d=!1,D=p.computeFrenetFrames(h,!1),E=new C,R=new C,L=new C),d||(g=0,f=0,m=0,x=0);let w=a.extractPoints(l),b=w.shape,I=w.holes;if(!ir.isClockWise(b)){b=b.reverse();for(let Q=0,rt=I.length;Q<rt;Q++){let P=I[Q];ir.isClockWise(P)&&(I[Q]=P.reverse())}}let N=ir.triangulateShape(b,I),U=b;for(let Q=0,rt=I.length;Q<rt;Q++){let P=I[Q];b=b.concat(P)}function Y(Q,rt,P){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(rt,P)}let W=b.length,nt=N.length;function X(Q,rt,P){let Dt,et,bt,lt=Q.x-rt.x,kt=Q.y-rt.y,vt=P.x-Q.x,A=P.y-Q.y,M=lt*lt+kt*kt,z=lt*A-kt*vt;if(Math.abs(z)>Number.EPSILON){let Z=Math.sqrt(M),tt=Math.sqrt(vt*vt+A*A),$=rt.x-kt/Z,Ct=rt.y+lt/Z,ft=P.x-A/tt,_t=P.y+vt/tt,$t=((ft-$)*A-(_t-Ct)*vt)/(lt*A-kt*vt);Dt=$+lt*$t-Q.x,et=Ct+kt*$t-Q.y;let it=Dt*Dt+et*et;if(it<=2)return new j(Dt,et);bt=Math.sqrt(it/2)}else{let Z=!1;lt>Number.EPSILON?vt>Number.EPSILON&&(Z=!0):lt<-Number.EPSILON?vt<-Number.EPSILON&&(Z=!0):Math.sign(kt)===Math.sign(A)&&(Z=!0),Z?(Dt=-kt,et=lt,bt=Math.sqrt(M)):(Dt=lt,et=kt,bt=Math.sqrt(M/2))}return new j(Dt/bt,et/bt)}let ht=[];for(let Q=0,rt=U.length,P=rt-1,Dt=Q+1;Q<rt;Q++,P++,Dt++)P===rt&&(P=0),Dt===rt&&(Dt=0),ht[Q]=X(U[Q],U[P],U[Dt]);let yt=[],Et,Vt=ht.concat();for(let Q=0,rt=I.length;Q<rt;Q++){let P=I[Q];Et=[];for(let Dt=0,et=P.length,bt=et-1,lt=Dt+1;Dt<et;Dt++,bt++,lt++)bt===et&&(bt=0),lt===et&&(lt=0),Et[Dt]=X(P[Dt],P[bt],P[lt]);yt.push(Et),Vt=Vt.concat(Et)}for(let Q=0;Q<g;Q++){let rt=Q/g,P=f*Math.cos(rt*Math.PI/2),Dt=m*Math.sin(rt*Math.PI/2)+x;for(let et=0,bt=U.length;et<bt;et++){let lt=Y(U[et],ht[et],Dt);ct(lt.x,lt.y,-P)}for(let et=0,bt=I.length;et<bt;et++){let lt=I[et];Et=yt[et];for(let kt=0,vt=lt.length;kt<vt;kt++){let A=Y(lt[kt],Et[kt],Dt);ct(A.x,A.y,-P)}}}let ne=m+x;for(let Q=0;Q<W;Q++){let rt=d?Y(b[Q],Vt[Q],ne):b[Q];y?(R.copy(D.normals[0]).multiplyScalar(rt.x),E.copy(D.binormals[0]).multiplyScalar(rt.y),L.copy(v[0]).add(R).add(E),ct(L.x,L.y,L.z)):ct(rt.x,rt.y,0)}for(let Q=1;Q<=h;Q++)for(let rt=0;rt<W;rt++){let P=d?Y(b[rt],Vt[rt],ne):b[rt];y?(R.copy(D.normals[Q]).multiplyScalar(P.x),E.copy(D.binormals[Q]).multiplyScalar(P.y),L.copy(v[Q]).add(R).add(E),ct(L.x,L.y,L.z)):ct(P.x,P.y,u/h*Q)}for(let Q=g-1;Q>=0;Q--){let rt=Q/g,P=f*Math.cos(rt*Math.PI/2),Dt=m*Math.sin(rt*Math.PI/2)+x;for(let et=0,bt=U.length;et<bt;et++){let lt=Y(U[et],ht[et],Dt);ct(lt.x,lt.y,u+P)}for(let et=0,bt=I.length;et<bt;et++){let lt=I[et];Et=yt[et];for(let kt=0,vt=lt.length;kt<vt;kt++){let A=Y(lt[kt],Et[kt],Dt);y?ct(A.x,A.y+v[h-1].y,v[h-1].x+P):ct(A.x,A.y,u+P)}}}J(),ot();function J(){let Q=s.length/3;if(d){let rt=0,P=W*rt;for(let Dt=0;Dt<nt;Dt++){let et=N[Dt];Nt(et[2]+P,et[1]+P,et[0]+P)}rt=h+g*2,P=W*rt;for(let Dt=0;Dt<nt;Dt++){let et=N[Dt];Nt(et[0]+P,et[1]+P,et[2]+P)}}else{for(let rt=0;rt<nt;rt++){let P=N[rt];Nt(P[2],P[1],P[0])}for(let rt=0;rt<nt;rt++){let P=N[rt];Nt(P[0]+W*h,P[1]+W*h,P[2]+W*h)}}n.addGroup(Q,s.length/3-Q,0)}function ot(){let Q=s.length/3,rt=0;Rt(U,rt),rt+=U.length;for(let P=0,Dt=I.length;P<Dt;P++){let et=I[P];Rt(et,rt),rt+=et.length}n.addGroup(Q,s.length/3-Q,1)}function Rt(Q,rt){let P=Q.length;for(;--P>=0;){let Dt=P,et=P-1;et<0&&(et=Q.length-1);for(let bt=0,lt=h+g*2;bt<lt;bt++){let kt=W*bt,vt=W*(bt+1),A=rt+Dt+kt,M=rt+et+kt,z=rt+et+vt,Z=rt+Dt+vt;zt(A,M,z,Z)}}}function ct(Q,rt,P){c.push(Q),c.push(rt),c.push(P)}function Nt(Q,rt,P){Ot(Q),Ot(rt),Ot(P);let Dt=s.length/3,et=_.generateTopUV(n,s,Dt-3,Dt-2,Dt-1);jt(et[0]),jt(et[1]),jt(et[2])}function zt(Q,rt,P,Dt){Ot(Q),Ot(rt),Ot(Dt),Ot(rt),Ot(P),Ot(Dt);let et=s.length/3,bt=_.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);jt(bt[0]),jt(bt[1]),jt(bt[3]),jt(bt[1]),jt(bt[2]),jt(bt[3])}function Ot(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function jt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return qy(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ml[s.type]().fromJSON(s)),new i(n,t.options)}},Xy={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new j(r,o),new j(a,c),new j(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new j(o,1-c),new j(l,1-u),new j(d,1-m),new j(x,1-p)]:[new j(a,1-c),new j(h,1-u),new j(f,1-m),new j(g,1-p)]}};function qy(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ke=class i extends Sl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Xo=class i extends we{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new C,m=new j;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let _=p+g,v=_,y=_+n+1,D=_+n+2,E=_+1;a.push(v,y,E),a.push(y,D,E)}}this.setIndex(a),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var $n=class i extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new C,d=new C,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let _=[],v=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let D=0;D<=e;D++){let E=D/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+v*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(E+y,1-v),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let v=h[p][_+1],y=h[p][_],D=h[p+1][_],E=h[p+1][_+1];(p!==0||o>0)&&f.push(v,y,E),(p!==n-1||c<Math.PI)&&f.push(y,D,E)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var mi=class i extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,_=(s+1)*f+m;o.push(x,g,_),o.push(g,p,_)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var qo=class extends Ce{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Ni=class extends Zn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gd,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function go(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Yy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var As=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Al=class extends As{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qh,endingEnd:qh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yh:r=t,a=2*e-n;break;case Zh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yh:o=t,c=2*n-e;break;case Zh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,_=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*x+.5*m,y=f*g-f*x;for(let D=0;D!==a;++D)r[D]=p*o[h+D]+_*o[l+D]+v*o[c+D]+y*o[u+D];return r}},Rl=class extends As{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Cl=class extends As{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=go(e,this.TimeBufferType),this.values=go(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:go(t.times,Array),values:go(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Al(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Mo:e=this.InterpolantFactoryMethodDiscrete;break;case Jc:e=this.InterpolantFactoryMethodLinear;break;case La:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return Jc;case this.InterpolantFactoryMethodSmooth:return La}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Yy(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===La,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Jc;var ki=class extends Tn{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Mo;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends Tn{};Pl.prototype.ValueTypeName="color";var Il=class extends Tn{};Il.prototype.ValueTypeName="number";var Ll=class extends As{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)ui.slerpFlat(r,0,o,l-a,o,l,c);return r}},Yo=class extends Tn{InterpolantFactoryMethodLinear(t){return new Ll(this.times,this.values,this.getValueSize(),t)}};Yo.prototype.ValueTypeName="quaternion";Yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends Tn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Mo;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends Tn{};Dl.prototype.ValueTypeName="vector";var Ul=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},Zy=new Ul,Nl=class{constructor(t){this.manager=t!==void 0?t:Zy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Nl.DEFAULT_MATERIAL_NAME="__DEFAULT";var gr=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Zo=class extends gr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},lc=new ce,Qu=new C,ju=new C,$o=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cr,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qu),ju.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ju),e.updateMatrixWorld(),lc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var td=new ce,$s=new C,hc=new C,kl=class extends $o{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),$s.setFromMatrixPosition(t.matrixWorld),n.position.copy($s),hc.copy(n.position),hc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(hc),n.updateMatrixWorld(),s.makeTranslation(-$s.x,-$s.y,-$s.z),td.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td)}},xr=class extends gr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Fl=class extends $o{constructor(){super(new fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jo=class extends gr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Fl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ko=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ed(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=ed();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function ed(){return performance.now()}var ih="\\[\\]\\.:\\/",$y=new RegExp("["+ih+"]","g"),sh="[^"+ih+"]",Jy="[^"+ih.replace("\\.","")+"]",Ky=/((?:WC+[\/:])*)/.source.replace("WC",sh),Qy=/(WCOD+)?/.source.replace("WCOD",Jy),jy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),tv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),ev=new RegExp("^"+Ky+Qy+jy+tv+"$"),nv=["material","materials","bones","map"],Ol=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($y,"")}static parseTrackName(t){let e=ev.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);nv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Ol;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Iv=new Float32Array(1);var nd=new ce,Qo=class{constructor(t,e,n=0,s=1/0){this.ray=new or(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nd),this}intersectObject(t,e=!0,n=[]){return Bl(t,this,n,e),n.sort(id),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Bl(t[s],this,n,e);return n.sort(id),n}};function id(i,t){return i.distance-t.distance}function Bl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Bl(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zl);var T={time:0,realTime:0,dt:0,timeScale:1,paused:!1,debug:!1,renderer:null,scene:null,camera:null,world:null,player:null,ui:null,audio:null,input:null,album:null,director:null,state:{identity:"mother",childName:"Lily",childKind:"daughter",flags:{},stats:{emails:0,workCalls:0}},updaters:new Set,realUpdaters:new Set};function iv(){return T.state.identity==="father"?"Dad":"Mom"}function sv(){return T.state.identity==="father"?"Grandpa":"Grandma"}function rv(){return T.state.childName||"Lily"}function Pd(){return T.state.childKind==="son"?"he":"she"}function ov(){return T.state.childKind==="son"?"him":"her"}function Id(){return T.state.childKind==="son"?"his":"her"}function av(){let i=Pd();return i[0].toUpperCase()+i.slice(1)}function cv(){let i=Id();return i[0].toUpperCase()+i.slice(1)}function Fe(i){return i.replace(/\{me\}/g,iv()).replace(/\{grandme\}/g,sv()).replace(/\{child\}/g,rv()).replace(/\{they\}/g,Pd()).replace(/\{They\}/g,av()).replace(/\{them\}/g,ov()).replace(/\{their\}/g,Id()).replace(/\{Their\}/g,cv())}var Zt=(i,t,e)=>i<t?t:i>e?e:i,Ye=(i,t,e)=>i+(t-i)*e;var lv=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2;var Kn=(i,t,e,n)=>Ye(i,t,1-Math.exp(-e*n));function rh(i,t,e){let n=(t-i+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),i+n*e}function ye(i=1){let t=i>>>0||1,e=()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,(t>>>0)/4294967296);return e.range=(n,s)=>n+(s-n)*e(),e.int=(n,s)=>Math.floor(n+(s-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e}var Lv=ye(12345);function Qt(i){return new Promise(t=>{let e=0,n=s=>{e+=s,e>=i&&(T.updaters.delete(n),t())};T.updaters.add(n)})}function fn(i,t,e=lv){return new Promise(n=>{let s=0;if(i<=0)return t(1),n();let r=o=>{s+=o;let a=Zt(s/i,0,1);t(e(a)),a>=1&&(T.updaters.delete(r),n())};T.updaters.add(r)})}function Ze(i){return new Promise(t=>{let e=n=>{i(n)&&(T.updaters.delete(e),t())};T.updaters.add(e)})}function vr(i,t,e,n){let s=i-e,r=t-n;return Math.sqrt(s*s+r*r)}var ia={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var an=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},hv=new fi(-1,1,1,-1,0,1),oh=class extends we{constructor(){super(),this.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new te([0,2,0,0,2,0],2))}},uv=new oh,xi=class{constructor(t){this._mesh=new Mt(uv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,hv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Is=class extends an{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gi.clone(t.uniforms),this.material=new Ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new xi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _r=class extends an{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},sa=class extends an{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ra=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new j);this._width=n.width,this._height=n.height,e=new Xe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Is(ia),this.copyPass.material.blending=In,this.clock=new Ko}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_r!==void 0&&(o instanceof _r?n=!0:o instanceof sa&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var oa=class extends an{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new At}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Ld={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new At(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ls=class i extends an{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new j(t.x,t.y):new j(256,256),this.clearColor=new At(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xe(r,o,{type:En}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Xe(r,o,{type:En});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Xe(r,o,{type:En});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Ld;this.highPassUniforms=gi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ce({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new j(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ia;this.copyUniforms=gi.clone(h.uniforms),this.blendMaterial=new Ce({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:un,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new At,this.oldClearAlpha=1,this.basic=new qe,this.fsQuad=new xi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new j(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ce({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new j(.5,.5)},direction:{value:new j(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ls.BlurDirectionX=new j(1,0);Ls.BlurDirectionY=new j(0,1);var Dd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var aa=class extends an{constructor(){super();let t=Dd;this.uniforms=gi.clone(t.uniforms),this.material=new qo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new xi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Jt.getTransfer(this._outputColorSpace)===re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ql?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===yr&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ah={skyTop:12572912,skyBottom:16246488,fog:15917782,fogNear:6,fogFar:46,sun:16773596,sunIntensity:2.6,sunAz:210,sunEl:52,hemiSky:14674431,hemiGround:11901574,hemiIntensity:1.25,exposure:1,saturation:1,contrast:1,brightness:0,warmth:0,tint:16777215,tintAmt:0,vignette:.35,grain:.035,bloom:.28,tilt:.6,focusX:.5,focusY:.5,focusRadius:2,focusDesat:0,dream:0},ch={dawnNursery:{skyTop:16041923,skyBottom:16508628,fog:16243919,sun:16765616,sunIntensity:2.4,sunAz:235,sunEl:28,hemiSky:16769254,hemiGround:12884620,hemiIntensity:1.35,saturation:.95,warmth:.35,vignette:.45,bloom:.42,tilt:.9,dream:.25},springMorning:{skyTop:11129842,skyBottom:16510688,fog:16116964,sun:16773334,sunIntensity:2.8,sunAz:220,sunEl:48,hemiSky:14938111,hemiGround:10466442,hemiIntensity:1.3,saturation:1.05,warmth:.15,vignette:.32,bloom:.32,tilt:.75,dream:.12},summerDay:{skyTop:8373488,skyBottom:15135999,fog:14675706,sun:16774880,sunIntensity:3.1,sunAz:205,sunEl:58,hemiSky:15332607,hemiGround:9416302,hemiIntensity:1.25,saturation:1.18,contrast:1.04,warmth:.1,vignette:.28,bloom:.26,tilt:.6},summerDusk:{skyTop:5988254,skyBottom:16169354,fog:15247754,sun:16757370,sunIntensity:2.1,sunAz:250,sunEl:14,hemiSky:10260432,hemiGround:9136730,hemiIntensity:1.1,saturation:1.1,warmth:.45,vignette:.42,bloom:.45,tilt:.75},summerNight:{skyTop:1317434,skyBottom:3817330,fog:2896483,sun:10466559,sunIntensity:.9,sunAz:140,sunEl:40,hemiSky:5924528,hemiGround:2761792,hemiIntensity:.9,saturation:.95,warmth:-.1,vignette:.55,bloom:.7,tilt:.8},goldenAfternoon:{skyTop:9418982,skyBottom:16768174,fog:16308660,sun:16764812,sunIntensity:3,sunAz:240,sunEl:30,hemiSky:16638912,hemiGround:10518624,hemiIntensity:1.2,saturation:1.12,contrast:1.05,warmth:.4,vignette:.35,bloom:.35,tilt:.65},rainyGrey:{skyTop:8161172,skyBottom:12174024,fog:11187130,sun:14213868,sunIntensity:1.1,sunAz:200,sunEl:60,hemiSky:13095644,hemiGround:6975344,hemiIntensity:1.35,saturation:.55,contrast:.95,warmth:-.25,vignette:.5,bloom:.15,tilt:.7},autumnEvening:{skyTop:4012651,skyBottom:15964779,fog:14255978,sun:16752490,sunIntensity:1.9,sunAz:255,sunEl:12,hemiSky:9403584,hemiGround:8015936,hemiIntensity:1.05,saturation:1.15,warmth:.5,vignette:.45,bloom:.6,tilt:.7},festivalNight:{skyTop:1053750,skyBottom:3878236,fog:3024464,sun:10725631,sunIntensity:.7,sunAz:130,sunEl:45,hemiSky:6970024,hemiGround:3811898,hemiIntensity:.95,saturation:1.1,warmth:.2,vignette:.5,bloom:.85,tilt:.75},weddingDay:{skyTop:10473458,skyBottom:16773602,fog:16510948,sun:16774108,sunIntensity:3,sunAz:215,sunEl:50,hemiSky:15856895,hemiGround:10926218,hemiIntensity:1.35,saturation:1.08,warmth:.25,vignette:.3,bloom:.45,tilt:.7,dream:.15},nurseryNight:{skyTop:1909832,skyBottom:4016762,fog:3029094,sun:9348863,sunIntensity:.55,sunAz:140,sunEl:40,hemiSky:6320312,hemiGround:3813448,hemiIntensity:.75,saturation:.95,warmth:.15,vignette:.55,bloom:.8,tilt:.9},homeMorning:{skyTop:11851506,skyBottom:16641757,fog:16313052,sun:16772300,sunIntensity:2.7,sunAz:225,sunEl:40,hemiSky:15790335,hemiGround:11770496,hemiIntensity:1.4,saturation:1.05,warmth:.28,vignette:.32,bloom:.35,tilt:.7},fastForward:{skyTop:10137291,skyBottom:15260879,fog:14603208,sun:16773344,sunIntensity:2.4,sunAz:210,sunEl:45,hemiSky:14739184,hemiGround:10129536,hemiIntensity:1.3,saturation:.85,contrast:1.08,warmth:0,vignette:.5,bloom:.3,tilt:.95},emptyHouse:{skyTop:10134445,skyBottom:14078668,fog:13617860,sun:15788254,sunIntensity:1.8,sunAz:230,sunEl:26,hemiSky:14212580,hemiGround:9076854,hemiIntensity:1.25,saturation:.45,contrast:.96,warmth:-.05,vignette:.55,bloom:.2,tilt:.8},winterMorning:{skyTop:12043992,skyBottom:15659508,fog:15133423,sun:15987455,sunIntensity:2.2,sunAz:205,sunEl:22,hemiSky:15660031,hemiGround:12107980,hemiIntensity:1.5,saturation:.35,contrast:.98,warmth:-.2,vignette:.45,bloom:.3,tilt:.8},winterDusk:{skyTop:3620970,skyBottom:14264480,fog:12560042,sun:16761504,sunIntensity:1.6,sunAz:250,sunEl:10,hemiSky:10134736,hemiGround:9474208,hemiIntensity:1.2,saturation:.7,warmth:.3,vignette:.5,bloom:.6,tilt:.8},dream:{skyTop:16177126,skyBottom:16774888,fog:16773610,sun:16774374,sunIntensity:2.6,sunAz:220,sunEl:40,hemiSky:16773366,hemiGround:15126464,hemiIntensity:1.6,saturation:1,warmth:.3,vignette:.25,bloom:.75,tilt:.9,dream:.6,fogNear:2,fogFar:34},kitchenNight:{skyTop:1448496,skyBottom:2961744,fog:2501189,sun:11056383,sunIntensity:.5,sunAz:140,sunEl:40,hemiSky:5922704,hemiGround:3813424,hemiIntensity:.6,saturation:.75,warmth:.35,vignette:.6,bloom:.75,tilt:.9},black:{skyTop:328968,skyBottom:657936,fog:526348,sunIntensity:0,hemiIntensity:.1}};var dv={uniforms:{tDiffuse:{value:null},resolution:{value:new j(1,1)},time:{value:0},saturation:{value:1},contrast:{value:1},brightness:{value:0},warmth:{value:0},tint:{value:new At(1,1,1)},tintAmt:{value:0},vignette:{value:.3},grain:{value:.03},tilt:{value:.5},dream:{value:0},focus:{value:new j(.5,.5)},focusRadius:{value:2},focusDesat:{value:0}},vertexShader:`
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
  `},ca=class i{constructor(t){this.container=t;let e=new Do({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=Hl,e.toneMapping=yr,e.toneMappingExposure=1,e.outputColorSpace=Ue,t.appendChild(e.domElement),this.r=e,this.scene=new No,this.skyCanvas=document.createElement("canvas"),this.skyCanvas.width=2,this.skyCanvas.height=128,this.skyTex=new Ss(this.skyCanvas),this.skyTex.colorSpace=Ue,this.scene.background=this.skyTex,this.scene.fog=new Uo(16777215,50,120),this.viewSize=14;let n=window.innerWidth/window.innerHeight;this.camera=new fi(-n*7,n*7,7,-7,.1,300),this.camAz=45,this.camEl=33,this.camDist=70,this.camTarget=new C,this.camGoal=new C,this.zoomGoal=14,this.followSpeed=3,this.follow=null,this.followOffset=new C,this.shake=0,this.camBounds=null,this.hemi=new Zo(16777215,8947848,1.2),this.scene.add(this.hemi),this.sun=new Jo(16777215,2.5),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,this.sun.shadow.radius=3;let s=this.sun.shadow.camera;s.left=-22,s.right=22,s.top=22,s.bottom=-22,s.near=1,s.far=120,this.scene.add(this.sun),this.scene.add(this.sun.target);let r=new ra(e);r.addPass(new oa(this.scene,this.camera)),this.bloom=new Ls(new j(window.innerWidth/2,window.innerHeight/2),.3,.55,.82),r.addPass(this.bloom),r.addPass(new aa),this.grade=new Is(dv),r.addPass(this.grade),this.composer=r,this.mood=this._expand(ah),this.moodFrom=this._clone(this.mood),this.moodTo=this._clone(this.mood),this.moodT=1,this.moodDur=0,this.overrides={},this._applyMood(),window.addEventListener("resize",()=>this.resize()),this.resize()}_expand(t){let e={};for(let n in t)e[n]=i.isColorKey(n)?new At(t[n]):t[n];return e}_clone(t){let e={};for(let n in t)e[n]=t[n]instanceof At?t[n].clone():t[n];return e}static isColorKey(t){return["skyTop","skyBottom","fog","sun","hemiSky","hemiGround","tint"].includes(t)}setMood(t,e=2,n=null){let s=typeof t=="string"?{...ah,...ch[t]}:{...this._flat(this.moodTo),...t};typeof t=="string"&&!ch[t]&&console.warn("unknown mood",t),n&&(s={...s,...n}),this.moodFrom=this._clone(this.mood);let r={};for(let o in s)r[o]=i.isColorKey(o)?new At(s[o]):s[o];this.moodTo=r,this.moodT=0,this.moodDur=Math.max(1e-4,e),e<=0&&(this.moodT=1,this.mood=this._clone(r),this._applyMood())}_flat(t){let e={};for(let n in t)e[n]=t[n]instanceof At?t[n].getHex():t[n];return e}moodTarget(){return this._flat(this.moodTo)}_updateMood(t){if(this.moodT<1){this.moodT=Math.min(1,this.moodT+t/this.moodDur);let e=this.moodT*this.moodT*(3-2*this.moodT);for(let n in this.moodTo){let s=this.moodFrom[n],r=this.moodTo[n];r instanceof At?(this.mood[n]instanceof At||(this.mood[n]=new At),this.mood[n].copy(s instanceof At?s:r).lerp(r,e)):typeof r=="number"&&(this.mood[n]=Ye(s??r,r,e))}this._applyMood()}else this._applyMood(!0)}_applyMood(t=!1){let e=this.mood,n=this.overrides;if(!t){let o=this.skyCanvas.getContext("2d"),a=o.createLinearGradient(0,0,0,128);a.addColorStop(0,"#"+e.skyTop.getHexString()),a.addColorStop(1,"#"+e.skyBottom.getHexString()),o.fillStyle=a,o.fillRect(0,0,2,128),this.skyTex.needsUpdate=!0,this.scene.fog.color.copy(e.fog),this.sun.color.copy(e.sun),this.hemi.color.copy(e.hemiSky),this.hemi.groundColor.copy(e.hemiGround)}let s=Math.max(.8,this.viewSize/14);this.scene.fog.near=this.camDist+e.fogNear*s,this.scene.fog.far=this.camDist+e.fogFar*s,this.sun.intensity=e.sunIntensity*(n.light??1),this.hemi.intensity=e.hemiIntensity*(n.light??1),this.r.toneMappingExposure=e.exposure;let r=this.grade.uniforms;r.saturation.value=e.saturation*(n.saturation??1),r.contrast.value=e.contrast,r.brightness.value=e.brightness+(n.brightness??0),r.warmth.value=e.warmth+(n.warmth??0),r.tint.value.copy(e.tint),r.tintAmt.value=e.tintAmt,r.vignette.value=e.vignette+(n.vignette??0),r.grain.value=e.grain,r.tilt.value=e.tilt,r.dream.value=Zt(e.dream+(n.dream??0),0,1.2),r.focus.value.set(n.focusX??e.focusX,n.focusY??e.focusY),r.focusRadius.value=n.focusRadius??e.focusRadius,r.focusDesat.value=n.focusDesat??e.focusDesat,this.bloom.strength=e.bloom+(n.bloom??0)}pulse(t,e,n=1){let s=this.overrides[t]??(t==="saturation"||t==="light"?1:0);return fn(n,r=>{this.overrides[t]=Ye(s,e,r)})}resize(){let t=window.innerWidth,e=window.innerHeight;this.r.setSize(t,e),this.composer.setSize(t,e);let n=this.r.getPixelRatio();this.grade.uniforms.resolution.value.set(t*n,e*n),this._updateProjection()}_updateProjection(){let t=window.innerWidth,e=window.innerHeight,n=t/e,s=this.viewSize*(n<1?1.25:1);this.camera.left=-s*n/2,this.camera.right=s*n/2,this.camera.top=s/2,this.camera.bottom=-s/2,this.camera.updateProjectionMatrix()}camOffset(){let t=Cs.degToRad(this.camAz),e=Cs.degToRad(this.camEl);return new C(Math.sin(t)*Math.cos(e),Math.sin(e),Math.cos(t)*Math.cos(e)).multiplyScalar(this.camDist)}groundBasis(){let t=Cs.degToRad(this.camAz),e=new C(-Math.sin(t),0,-Math.cos(t)),n=new C(Math.cos(t),0,-Math.sin(t));return{fwd:e,right:n}}setFollow(t,e=null){this.follow=t,e?this.followOffset.copy(e):this.followOffset.set(0,0,0)}snapCamera(){this.follow&&this.camGoal.copy(this.follow.position).add(this.followOffset),this.camTarget.copy(this.camGoal),this.viewSize=this.zoomGoal,this._updateProjection()}async cameraTo(t,e=null,n=2){this.follow=null;let s=this.camTarget.clone(),r=this.viewSize,o=new C(t.x,t.y??0,t.z);await fn(n,a=>{this.camGoal.copy(s).lerp(o,a),this.camTarget.copy(this.camGoal),e&&(this.zoomGoal=Ye(r,e,a),this.viewSize=this.zoomGoal,this._updateProjection())})}zoomTo(t,e=2){let n=this.zoomGoal;return fn(e,s=>{this.zoomGoal=Ye(n,t,s)})}update(t){if(this._updateMood(t),this.follow&&(this.camGoal.copy(this.follow.position).add(this.followOffset),this.camGoal.y=Math.max(0,this.camGoal.y*.5)),this.camBounds&&this.follow){let u=this.camBounds;this.camGoal.x=Zt(this.camGoal.x,u.minX,u.maxX),this.camGoal.z=Zt(this.camGoal.z,u.minZ,u.maxZ)}let e=this.followSpeed;this.camTarget.x=Kn(this.camTarget.x,this.camGoal.x,e,t),this.camTarget.y=Kn(this.camTarget.y,this.camGoal.y,e,t),this.camTarget.z=Kn(this.camTarget.z,this.camGoal.z,e,t);let n=Kn(this.viewSize,this.zoomGoal,2.5,t);Math.abs(n-this.viewSize)>1e-4&&(this.viewSize=n,this._updateProjection());let s=this.camOffset();this.camera.position.copy(this.camTarget).add(s),this.shake>0&&(this.camera.position.x+=(Math.random()-.5)*this.shake,this.camera.position.y+=(Math.random()-.5)*this.shake,this.shake=Math.max(0,this.shake-t*2)),this.camera.lookAt(this.camTarget);let r=this.mood,o=Cs.degToRad(r.sunAz),a=Cs.degToRad(r.sunEl),c=new C(Math.sin(o)*Math.cos(a),Math.sin(a),Math.cos(o)*Math.cos(a));this.sun.position.copy(this.camTarget).addScaledVector(c,50),this.sun.target.position.copy(this.camTarget);let l=Math.max(14,this.viewSize*1.25),h=this.sun.shadow.camera;Math.abs(h.right-l)>.5&&(h.left=-l,h.right=l,h.top=l,h.bottom=-l,h.updateProjectionMatrix()),this.grade.uniforms.time.value=T.realTime}render(){this.composer.render()}snapshot(t=320,e=240){let n=this.r.domElement,s=document.createElement("canvas");s.width=t,s.height=e;let r=s.getContext("2d"),o=n.width/n.height,a=t/e,c=n.width,l=n.height,h=0,u=0;o>a?(c=l*a,h=(n.width-c)/2):(l=c/a,u=(n.height-l)/2);let d=.82,f=c*d,m=l*d;h+=(c-f)/2,u+=(l-m)/2,r.drawImage(n,h,u,f,m,0,0,t,e);try{return s.toDataURL("image/jpeg",.72)}catch{return null}}project(t){let e=t.clone().project(this.camera);return{x:(e.x+1)/2*window.innerWidth,y:(1-e.y)/2*window.innerHeight,visible:e.z<1}}unproject(t,e,n=0){let s=new j(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1),r=new Qo;r.setFromCamera(s,this.camera);let o=new bn(new C(0,1,0),-n),a=new C;return r.ray.intersectPlane(o,a)?a:null}};var Ud={ArrowUp:"up",KeyW:"up",ArrowDown:"down",KeyS:"down",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",Space:"act",Enter:"act",KeyE:"act",NumpadEnter:"act",Escape:"pause",KeyP:"pause",KeyJ:"album",Tab:"album",Digit1:"n1",Digit2:"n2",Digit3:"n3",Digit4:"n4"},la=class{constructor(t){this.el=t,this.held=new Set,this.pressedSet=new Set,this.releasedSet=new Set,this.pointer={x:0,y:0,down:!1,downT:0,moved:!1,startX:0,startY:0},this.clicks=[],this.anyPress=!1,this.lastDevice="keyboard",window.addEventListener("keydown",e=>{if(e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA"))return;let n=Ud[e.code];n&&(e.preventDefault(),this.held.has(n)||this.pressedSet.add(n),this.held.add(n)),e.repeat||(this.anyPress=!0),this.lastDevice="keyboard",T.audio?.init()}),window.addEventListener("keyup",e=>{let n=Ud[e.code];n&&(this.held.delete(n),this.releasedSet.add(n))}),window.addEventListener("blur",()=>{this.held.clear(),this.pointer.down=!1}),t.addEventListener("pointerdown",e=>{this.pointer.down=!0,this.pointer.downT=performance.now(),this.pointer.moved=!1,this.pointer.x=this.pointer.startX=e.clientX,this.pointer.y=this.pointer.startY=e.clientY,this.pressedSet.add("pointer"),this.anyPress=!0,this.lastDevice=e.pointerType==="touch"?"touch":"mouse",T.audio?.init()}),window.addEventListener("pointermove",e=>{this.pointer.x=e.clientX,this.pointer.y=e.clientY,this.pointer.down&&Math.hypot(e.clientX-this.pointer.startX,e.clientY-this.pointer.startY)>12&&(this.pointer.moved=!0)}),window.addEventListener("pointerup",e=>{if(this.pointer.down&&e.target===t){let n=performance.now()-this.pointer.downT;!this.pointer.moved&&n<450&&this.clicks.push({x:e.clientX,y:e.clientY})}this.pointer.down=!1,this.releasedSet.add("pointer")}),t.addEventListener("contextmenu",e=>e.preventDefault())}isDown(t){return this.held.has(t)}pressed(t){return this.pressedSet.has(t)}released(t){return this.releasedSet.has(t)}consume(t){this.pressedSet.delete(t)}holding(){return this.held.has("act")||this.pointer.down}axis(){let t=0,e=0;return this.held.has("left")&&(t-=1),this.held.has("right")&&(t+=1),this.held.has("up")&&(e+=1),this.held.has("down")&&(e-=1),{x:t,y:e}}endFrame(){this.pressedSet.clear(),this.releasedSet.clear(),this.clicks.length=0,this.anyPress=!1}};var $e=i=>document.querySelector(i),wt=(i,t,e)=>{let n=document.createElement(i);return t&&(n.className=t),e!==void 0&&(n.innerHTML=e),n},Nd=i=>new Promise(t=>setTimeout(t,i)),ha=class{constructor(){this.fadeEl=$e("#fade"),this.flashEl=$e("#flash"),this.narrEl=$e("#narr"),this.lowerEl=$e("#lower"),this.bubblesEl=$e("#bubbles"),this.choicesEl=$e("#choices"),this.promptEl=$e("#prompt"),this.keepEl=$e("#keep"),this.mgEl=$e("#mg"),this.cardEl=$e("#card"),this.hintEl=$e("#hint"),this.flyerEl=$e("#flyer"),this.clockEl=$e("#clock"),this.albumBtn=$e("#albumBtn"),this.menuBtn=$e("#menuBtn"),this.bubbles=[],this.settings={auto:!0,textSpeed:1};try{Object.assign(this.settings,JSON.parse(localStorage.getItem("lm.settings")||"{}"))}catch{}this.promptTarget=null,this.fadeValue=1,this.promptEl.addEventListener("pointerdown",t=>{t.stopPropagation(),this.promptClicked=!0})}saveSettings(){try{localStorage.setItem("lm.settings",JSON.stringify(this.settings))}catch{}}fade(t,e=1.5,n="#000"){let s=this.fadeEl;return s.style.background=n,s.style.transition=`opacity ${e}s ease`,s.offsetWidth,s.style.opacity=t,this.fadeValue=t,Nd(e*1e3)}fadeOut(t=1.5,e="#000"){return this.fade(1,t,e)}fadeIn(t=1.5){return this.fade(0,t,this.fadeEl.style.background||"#000")}flash(t=.8,e=.85){let n=this.flashEl;n.style.transition="none",n.style.opacity=e,n.offsetWidth,n.style.transition=`opacity ${t}s ease`,n.style.opacity=0}_advance(){let t=T.input,e=t.pressed("act")||t.clicks.length>0||t.pressed("pointer");return e&&(t.consume("act"),t.consume("pointer"),t.clicks.length=0),e}_readTime(t){return T.auto?.25:(2+t.length*.055)/this.settings.textSpeed}async narrate(t,{stack:e=!1,auto:n=null,small:s=!1,dark:r=!1,hold:o=null,minTime:a=.9}={}){Array.isArray(t)||(t=[t]);let c=n??this.settings.auto;for(let l=0;l<t.length;l++){let h=Fe(t[l]);e||this._clearNarr();let u=wt("div","line"+(s?" small":"")+(r?" dark":""));u.innerHTML=h+'<span class="advance"></span>',this.narrEl.appendChild(u),u.offsetWidth,u.classList.add("show"),await Qt(T.auto?.1:a),u.classList.add("ready");let d=o??(c?this._readTime(h):1/0),f=a;await Ze(m=>(f+=m,this._advance()||f>=d))}}_clearNarr(){for(let t of[...this.narrEl.children])t.classList.remove("show"),t.classList.add("out"),setTimeout(()=>t.remove(),1100)}clearNarration(){this._clearNarr()}async lower(t,{auto:e=null,hold:n=null,block:s=!0}={}){t=Fe(t);for(let l of[...this.lowerEl.children])l.classList.remove("show"),setTimeout(()=>l.remove(),1100);let r=wt("div","line");r.innerHTML=t+'<span class="advance"></span>',this.lowerEl.appendChild(r),r.offsetWidth,r.classList.add("show");let o=e??this.settings.auto,a=n??(o?this._readTime(t):1/0);if(!s){Qt(a).then(()=>{r.classList.remove("show"),setTimeout(()=>r.remove(),1200)});return}await Qt(.6),r.classList.add("ready");let c=.6;await Ze(l=>(c+=l,this._advance()||c>=a)),r.classList.remove("show"),setTimeout(()=>r.remove(),1200)}async say(t,e,{thought:n=!1,auto:s=null,hold:r=null,small:o=!1,name:a=null,passive:c=!1}={}){e=Fe(e);let l=wt("div","bubble"+(n?" thought":"")+(o?" small":"")),h=a??t?.name??"";l.innerHTML=(h&&!n?`<span class="who">${Fe(h)}</span>`:"")+'<span class="t"></span><span class="advance"></span>',this.bubblesEl.appendChild(l);let u={el:l,speaker:t};this.bubbles.push(u),this._positionBubble(u),l.offsetWidth,l.classList.add("show");let d=l.querySelector(".t"),f=0,m=!0,x=48*this.settings.textSpeed,g=0,p=0,_=c?()=>!1:()=>this._advance();await Ze(E=>{if(_())return m=!1,!0;g+=E*x;let R=Math.min(e.length,Math.floor(g));return R>f&&(f=R,d.textContent=e.slice(0,R),p++,p%3===0&&!n&&T.audio?.sfx("tap",{vol:.25})),R>=e.length}),d.textContent=e,l.classList.add("ready");let v=s??this.settings.auto,y=r??(v||c?this._readTime(e)*.85:1/0),D=0;await Qt(.25),await Ze(E=>(D+=E,_()||D>=y)),l.classList.remove("show"),setTimeout(()=>{l.remove(),this.bubbles=this.bubbles.filter(E=>E!==u)},350)}_positionBubble(t){let e=t.speaker,n=window.innerWidth/2,s=window.innerHeight*.7;if(e&&(e.headWorld||e.isVector3||e.position)){let r=e.headWorld?e.headWorld():e.isVector3?e.clone():e.position.clone(),o=T.renderer.project(r);n=Zt(o.x,140,window.innerWidth-140),s=Zt(o.y-14,90,window.innerHeight-40)}t.el.style.left=n+"px",t.el.style.top=s+"px"}choose(t,e){return T.auto?(T.log?.push("choose: "+t),Qt(.2).then(()=>(T.autoChoice??0)%e.length)):new Promise(n=>{let s=this.choicesEl;s.innerHTML="",s.classList.remove("hidden"),t&&s.appendChild(wt("div","q",Fe(t)));let r=-1,o=e.map((u,d)=>{let f=wt("button","",`<span class="n">${d+1}</span><span>${Fe(u)}</span>`);return f.style.animationDelay=.15+d*.12+"s",f.addEventListener("pointerdown",m=>{m.stopPropagation(),l(d)}),f.addEventListener("mouseenter",()=>{r=d,a()}),s.appendChild(f),f}),a=()=>o.forEach((u,d)=>u.classList.toggle("sel",d===r)),c=!1,l=u=>{c||(c=!0,T.audio?.sfx("soft",{deg:5}),s.classList.add("hidden"),s.innerHTML="",T.updaters.delete(h),n(u))},h=()=>{let u=T.input;for(let d=0;d<e.length&&d<4;d++)if(u.pressed("n"+(d+1)))return l(d);(u.pressed("down")||u.pressed("right"))&&(r=(r+1)%e.length,a()),(u.pressed("up")||u.pressed("left"))&&(r=(r-1+e.length)%e.length,a()),u.pressed("act")&&r>=0&&(u.consume("act"),l(r))};T.updaters.add(h)})}askText(t,e=""){return T.auto?Qt(.2).then(()=>e):new Promise(n=>{let s=this.choicesEl;s.innerHTML="",s.classList.remove("hidden"),s.appendChild(wt("div","q",Fe(t)));let r=wt("input");r.type="text",r.maxLength=14,r.value=e,r.placeholder=e,s.appendChild(r);let o=wt("button","",`<span class="n">\u2713</span><span>That's the one</span>`);s.appendChild(o),setTimeout(()=>{r.focus(),r.select()},50);let a=()=>{let c=r.value.trim().replace(/[<>&"]/g,"");c||(c=e),c=c.charAt(0).toUpperCase()+c.slice(1),s.classList.add("hidden"),s.innerHTML="",r.blur(),n(c)};r.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),a()),c.stopPropagation()}),o.addEventListener("pointerdown",c=>{c.stopPropagation(),a()})})}setPrompt(t){if(this.promptTarget=t,!t){this.promptEl.classList.add("hidden");return}this.promptEl.classList.remove("hidden"),this.promptEl.className=t.kind==="work"?"work":t.kind==="story"?"story":"";let e=T.input.lastDevice==="touch"?"Tap":"Space";this.promptEl.querySelector(".key").textContent=e,this.promptEl.querySelector(".txt").textContent=Fe(t.label)}showHud(t=!0){this.albumBtn.classList.toggle("hidden",!t),this.menuBtn.classList.toggle("hidden",!t)}clock(t){this.clockEl.classList.toggle("hidden",!t)}setClock(t,e,n=!1){let s=Zt(t,0,1);this.clockEl.querySelector(".fill").style.strokeDashoffset=264*(1-s),this.clockEl.querySelector(".sun").style.transform=`rotate(${s*360}deg)`,this.clockEl.querySelector(".num").textContent=e,this.clockEl.classList.toggle("urgent",n)}setAlbumCount(t,e=!1){this.albumBtn.querySelector(".count").textContent=t,e&&(this.albumBtn.classList.remove("bump"),this.albumBtn.offsetWidth,this.albumBtn.classList.add("bump"))}hint(t,e=6){this.hintEl.innerHTML=t,this.hintEl.classList.add("show"),clearTimeout(this._hintT),e&&(this._hintT=setTimeout(()=>this.hintEl.classList.remove("show"),e*1e3))}hideHint(){this.hintEl.classList.remove("show")}async chapterCard({num:t="",title:e="",ages:n="",quote:s=""},r=4.5){let o=this.cardEl;o.querySelector(".num").textContent=t,o.querySelector(".title").textContent=e,o.querySelector(".ages").textContent=n,o.querySelector(".quote").textContent=Fe(s),o.classList.remove("hidden","out","show"),o.offsetWidth,o.classList.add("show");let a=0;await Ze(c=>(a+=c,a>2.5&&this._advance()||a>r+2||T.auto&&a>.5)),o.classList.add("out"),await Nd(1200),o.classList.add("hidden"),o.classList.remove("show","out")}flyPolaroid(t,e){let n=wt("div","polaroid"),s=Math.min(320,window.innerWidth*.35);n.style.width=s+"px",n.innerHTML=`<img src="${t||""}"><div class="cap">${Fe(e)}</div>`,n.style.left=window.innerWidth/2-s/2+"px",n.style.top=window.innerHeight/2-s*.45+"px",n.style.transform="rotate(-3deg) scale(0.9)",n.style.opacity="0",n.style.transition="opacity 0.5s ease, transform 0.6s ease",this.flyerEl.appendChild(n),requestAnimationFrame(()=>{n.style.opacity="1",n.style.transform="rotate(-2deg) scale(1)"}),setTimeout(()=>{let r=this.albumBtn.getBoundingClientRect(),o=r.left+r.width/2-window.innerWidth/2,a=r.top+r.height/2-window.innerHeight/2;n.style.transition="transform 1.1s cubic-bezier(.6,.0,.3,1), opacity 1.1s ease",n.style.transform=`translate(${o}px, ${a}px) rotate(12deg) scale(0.08)`,n.style.opacity="0.2"},2300),setTimeout(()=>{n.remove(),this.setAlbumCount(T.album.count(),!0)},3500)}update(){for(let t of this.bubbles)this._positionBubble(t);if(this.promptTarget){let t=this.promptTarget,e=t.position.clone();e.y=(t.def.height??(t.anchor?.height?t.anchor.height+.25:1))+.55;let n=T.renderer.project(e);this.promptEl.style.left=n.x+"px",this.promptEl.style.top=n.y-6+"px"}}};var lh={C:60,"C#":61,Db:61,D:62,Eb:63,E:64,F:65,"F#":66,G:67,Ab:68,A:69,Bb:70,B:71},ua={major:[0,2,4,5,7,9,11],minor:[0,2,3,5,7,8,10],harmonic:[0,2,3,5,7,8,11],dorian:[0,2,3,5,7,9,10]},fv={i:0,ii:1,iii:2,iv:3,v:4,vi:5,vii:6};function hh(i,t=!1){let e=i,n=0;e[0]==="b"?(n=-1,e=e.slice(1)):e[0]==="#"&&(n=1,e=e.slice(1));let s=e.match(/^(VII|VI|IV|V|III|II|I|vii|vi|iv|v|iii|ii|i)(.*)$/);if(!s)return{root:0,iv:[0,4,7]};let r=s[1],o=s[2],a=r===r.toUpperCase(),c=fv[r.toLowerCase()],l=ua.major[c]+n+(t&&["iii","vi","vii"].includes(r.toLowerCase())?-1:0),h=a?[0,4,7]:[0,3,7];return(o.includes("\xB0")||o.includes("dim"))&&(h=[0,3,6]),o.includes("sus4")&&(h=[0,5,7]),o.includes("sus2")&&(h=[0,2,7]),o.includes("maj7")?h=[...h,11]:o.includes("7")&&(h=[...h,10]),o.includes("add9")&&(h=[...h,14]),o.includes("6")&&(h=[...h,9]),{root:l,iv:h}}function br(i,t){let e=Math.floor((i-1)/7),n=((i-1)%7+7)%7;return t[n]+e*12}var cn=[{c:"I",n:[[3,2],[5,1]]},{c:"IV",n:[[6,2],[5,1]]},{c:"I",n:[[3,1],[2,1],[1,1]]},{c:"V",n:[[2,3]]},{c:"I",n:[[3,2],[5,1]]},{c:"vi",n:[[8,2],[7,1]]},{c:"IVmaj7",n:[[6,1],[5,1],[3,1]]},{c:"V",n:[[5,3]]},{c:"IVadd9",n:[[6,2],[5,1]]},{c:"ii",n:[[4,2],[3,1]]},{c:"V7",n:[[2,1],[3,1],[4,1]]},{c:"I",n:[[3,3]]},{c:"vi",n:[[3,2],[2,1]]},{c:"IV",n:[[1,2],[-1,1]]},{c:"V",n:[[0,1],[2,1],[0,1]]},{c:"I",n:[[1,3]]}],pv=cn.map(i=>({...i,c:{I:"i",IV:"iv",V:"V",vi:"VI",IVmaj7:"iv7",IVadd9:"iv",ii:"ii\xB0",V7:"V7"}[i.c]??i.c})),mv=[{c:"I",n:[[3,1],[3,.5],[5,.5],[6,1],[5,1]]},{c:"IV",n:[[6,1],[8,1],[6,1],[5,1]]},{c:"I",n:[[3,1],[2,.5],[1,.5],[2,1],[3,1]]},{c:"V",n:[[2,2],[5,1],[0,1]]},{c:"I",n:[[3,1],[3,.5],[5,.5],[8,1],[7,1]]},{c:"vi",n:[[6,1],[5,1],[3,1],[5,1]]},{c:"IV",n:[[4,1],[3,1],[2,1],[4,1]]},{c:"V",n:[[2,1],[3,1],[1,2]]}],kd={silence:{key:"F",bpm:60,beats:4,prog:[["I",4]],layers:[]},title:{key:"F",bpm:62,beats:3,prog:[["I",3],["vi",3],["IVmaj7",3],["Vsus4",3]],layers:[{t:"chord",inst:"pad",gain:.16,oct:-1,every:6},{t:"sparkle",inst:"musicbox",gain:.22,oct:1,density:.35},{t:"song",inst:"musicbox",gain:.3,oct:1,song:cn,min:.5}]},tiny:{key:"F",bpm:64,beats:3,song:cn,layers:[{t:"song",inst:"musicbox",gain:.34,oct:1},{t:"chord",inst:"pad",gain:.12,oct:-1,every:3,min:.25},{t:"bass",inst:"softbass",gain:.16,oct:-2,min:.5},{t:"sparkle",inst:"bell",gain:.08,oct:2,density:.15,min:.6}]},tinyHum:{key:"F",bpm:60,beats:3,song:cn,layers:[{t:"song",inst:"hum",gain:.22,oct:0},{t:"song",inst:"musicbox",gain:.16,oct:1,min:.3},{t:"chord",inst:"pad",gain:.12,oct:-1,every:3},{t:"bass",inst:"softbass",gain:.14,oct:-2}]},whistle:{key:"F",bpm:66,beats:3,song:cn,layers:[{t:"song",inst:"whistle",gain:.16,oct:1},{t:"arp",inst:"pluck",gain:.12,oct:0,pattern:[0,1,2],div:1},{t:"bass",inst:"softbass",gain:.14,oct:-2}]},wonder:{key:"C",bpm:104,beats:4,prog:[["I",4],["V",4],["vi",4],["IV",4],["I",4],["IV",4],["ii7",4],["V",4]],layers:[{t:"arp",inst:"marimba",gain:.2,oct:0,pattern:[0,2,1,2,0,2,1,3],div:2},{t:"bass",inst:"softbass",gain:.2,oct:-2,fifth:!0},{t:"gen",inst:"flute",gain:.13,oct:1,seed:11,min:.35},{t:"perc",gain:.12,pat:{shaker:"..x...x...x...x.",kick:"x.......x......."},min:.5},{t:"sparkle",inst:"musicbox",gain:.1,oct:2,density:.25,min:.7}]},summerNight:{key:"G",bpm:72,beats:3,prog:[["I",3],["iii",3],["IV",3],["I",3],["vi",3],["ii",3],["IV",3],["V",3]],layers:[{t:"arp",inst:"musicbox",gain:.16,oct:1,pattern:[0,1,2,3,2,1],div:2},{t:"chord",inst:"pad",gain:.13,oct:-1,every:3},{t:"gen",inst:"piano",gain:.16,oct:0,seed:23,min:.4},{t:"bass",inst:"softbass",gain:.12,oct:-2,min:.3}]},bedtime:{key:"G",bpm:60,beats:3,song:cn,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.12,oct:1,min:.5}]},running:{key:"D",bpm:112,beats:4,prog:[["vi",4],["IV",4],["I",4],["V",4]],layers:[{t:"strum",inst:"guitar",gain:.12,oct:0,rhythm:[0,3,6,8,10,12,14]},{t:"bass",inst:"softbass",gain:.2,oct:-2,fifth:!0},{t:"perc",gain:.13,pat:{kick:"x.......x.x.....",hat:"..x...x...x...x.",brush:"....x.......x..."},min:.3},{t:"gen",inst:"piano",gain:.14,oct:1,seed:37,min:.5},{t:"chord",inst:"strings",gain:.06,oct:0,every:8,min:.75}]},loss:{key:"D",bpm:56,beats:3,scale:"harmonic",song:pv,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"strings",gain:.1,oct:-1,every:3},{t:"bass",inst:"softbass",gain:.12,oct:-2,min:.4}]},rainHope:{key:"D",bpm:60,beats:3,song:cn,layers:[{t:"song",inst:"piano",gain:.18,oct:0},{t:"chord",inst:"strings",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.12,oct:1,min:.5}]},together:{key:"A",bpm:138,beats:3,prog:[["I",3],["I",3],["iii",3],["iii",3],["IV",3],["iv",3],["I",3],["V7",3]],layers:[{t:"waltz",inst:"piano",gain:.16,oct:-1},{t:"gen",inst:"piano",gain:.15,oct:1,seed:51,long:!0,min:.2},{t:"chord",inst:"strings",gain:.07,oct:0,every:6,min:.55},{t:"sparkle",inst:"musicbox",gain:.08,oct:2,density:.18,min:.7}]},wedding:{key:"A",bpm:66,beats:3,song:cn,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"strings",gain:.1,oct:-1,every:3},{t:"bass",inst:"softbass",gain:.12,oct:-2},{t:"song",inst:"strings",gain:.08,oct:1,min:.6}]},little:{key:"F",bpm:66,beats:3,song:cn,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.13,oct:1,min:.35},{t:"chord",inst:"strings",gain:.07,oct:0,every:3,min:.6},{t:"bass",inst:"softbass",gain:.12,oct:-2,min:.5}]},littleHum:{key:"F",bpm:60,beats:3,song:cn,layers:[{t:"song",inst:"hum",gain:.2,oct:-1},{t:"song",inst:"musicbox",gain:.12,oct:1},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3}]},play:{key:"F",bpm:100,beats:4,song:mv,layers:[{t:"song",inst:"marimba",gain:.18,oct:1},{t:"arp",inst:"pluck",gain:.12,oct:0,pattern:[0,1,2,1],div:2},{t:"bass",inst:"softbass",gain:.18,oct:-2,fifth:!0},{t:"perc",gain:.1,pat:{shaker:"..x...x...x...x.",kick:"x.......x......."},min:.4},{t:"gen",inst:"flute",gain:.1,oct:1,seed:71,min:.7}]},sofast:{key:"A",bpm:96,beats:4,scale:"minor",prog:[["i",4],["VI",4],["III",4],["VII",4]],layers:[{t:"arp",inst:"piano",gain:.15,oct:0,pattern:[0,1,2,1,3,1,2,1],div:4},{t:"tick",gain:.12},{t:"bass",inst:"softbass",gain:.18,oct:-2,min:.2},{t:"chord",inst:"strings",gain:.09,oct:0,every:4,min:.35},{t:"perc",gain:.12,pat:{kick:"x...x...x...x...",hat:"..x...x...x...x."},min:.55},{t:"gen",inst:"strings",gain:.07,oct:1,seed:91,long:!0,min:.75}]},quiet:{key:"A",bpm:50,beats:4,prog:[["I",8],["IVmaj7",8]],layers:[{t:"chord",inst:"pad",gain:.09,oct:-1,every:8},{t:"sparkle",inst:"piano",gain:.12,oct:0,density:.12}]},winter:{key:"D",bpm:54,beats:3,scale:"minor",prog:[["i",3],["iv",3],["VI",3],["V",3]],layers:[{t:"gen",inst:"piano",gain:.17,oct:0,seed:101,long:!0,sparse:!0},{t:"chord",inst:"pad",gain:.1,oct:-1,every:6},{t:"bass",inst:"softbass",gain:.09,oct:-2,min:.5}]},winterWarm:{key:"D",bpm:62,beats:3,song:cn,layers:[{t:"song",inst:"musicbox",gain:.2,oct:1},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"piano",gain:.14,oct:0,min:.35},{t:"chord",inst:"strings",gain:.07,oct:0,every:3,min:.6}]},pipHum:{key:"D",bpm:60,beats:3,song:cn,layers:[{t:"song",inst:"hum",gain:.18,oct:1},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.1,oct:1,min:.5}]},epilogue:{key:"F",bpm:64,beats:3,song:cn,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.13,oct:1,min:.25},{t:"chord",inst:"strings",gain:.09,oct:0,every:3,min:.45},{t:"bass",inst:"softbass",gain:.13,oct:-2,min:.55},{t:"song",inst:"hum",gain:.1,oct:-1,min:.7},{t:"song",inst:"strings",gain:.08,oct:1,min:.85}]}};var gv=i=>440*Math.pow(2,(i-69)/12),da=class{constructor(){this.ready=!1,this.vol={master:.85,music:.8,sfx:.85,amb:.7},this.voices=[],this.intensity=.4,this.intensityTarget=.4,this.amb={},this.beatLog=[],this.tempoMul=1,this.listeners=new Set;try{let t=JSON.parse(localStorage.getItem("lm.vol")||"null");t&&Object.assign(this.vol,t)}catch{}}init(){if(this.ready){this.ctx.resume?.();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.vol.master;let n=e.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=3,n.attack.value=.01,n.release.value=.3,this.master.connect(n),n.connect(e.destination),this.musicBus=e.createGain(),this.musicBus.gain.value=this.vol.music,this.musicFilter=e.createBiquadFilter(),this.musicFilter.type="lowpass",this.musicFilter.frequency.value=18e3,this.musicBus.connect(this.musicFilter),this.musicFilter.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.vol.sfx,this.sfxBus.connect(this.master),this.ambBus=e.createGain(),this.ambBus.gain.value=this.vol.amb,this.ambBus.connect(this.master),this.reverb=e.createConvolver(),this.reverb.buffer=this._impulse(3.2,2.6),this.revIn=e.createGain(),this.revIn.gain.value=1;let s=e.createGain();s.gain.value=.55,this.revIn.connect(this.reverb),this.reverb.connect(s),s.connect(this.musicFilter),this.sfxRev=e.createGain(),this.sfxRev.gain.value=.6,this.sfxRev.connect(this.revIn),this.noise=this._noiseBuffer(2,"white"),this.pink=this._noiseBuffer(4,"pink"),this.brown=this._noiseBuffer(4,"brown"),this.ready=!0,this.nextBeatClock=e.currentTime+.1,this.timer=setInterval(()=>this._schedule(),25),this._ambInit()}setVolume(t,e){this.vol[t]=e;try{localStorage.setItem("lm.vol",JSON.stringify(this.vol))}catch{}if(!this.ready)return;({master:this.master,music:this.musicBus,sfx:this.sfxBus,amb:this.ambBus})[t].gain.setTargetAtTime(e,this.ctx.currentTime,.1)}get now(){return this.ready?this.ctx.currentTime:performance.now()/1e3}_impulse(t,e){let n=this.ctx,s=n.sampleRate,r=Math.floor(s*t),o=n.createBuffer(2,r,s);for(let a=0;a<2;a++){let c=o.getChannelData(a);for(let l=0;l<r;l++)c[l]=(Math.random()*2-1)*Math.pow(1-l/r,e)*(l<s*.01?l/(s*.01):1)}return o}_noiseBuffer(t,e){let n=this.ctx,s=Math.floor(n.sampleRate*t),r=n.createBuffer(1,s,n.sampleRate),o=r.getChannelData(0),a=0,c=0,l=0,h=0;for(let u=0;u<s;u++){let d=Math.random()*2-1;e==="white"?o[u]=d:e==="brown"?(a=(a+.02*d)/1.02,o[u]=a*3.5):(c=.99765*c+d*.099046,l=.963*l+d*.2965164,h=.57*h+d*1.0526913,o[u]=(c+l+h+d*.1848)*.18)}return r}note(t,e,n,s,r=.8,o=null){if(!this.ready)return;let a=this.ctx,c=o??this.musicBus,l=gv(e),h=(f,m,x,g,p,_,v)=>{f.gain.setValueAtTime(1e-4,n),f.gain.linearRampToValueAtTime(x,n+m),f.gain.setTargetAtTime(p,n+m,g),f.gain.setTargetAtTime(1e-4,v,_)},u=(f,m,x=0)=>{let g=a.createOscillator();return g.type=f,g.frequency.value=Math.min(m,19e3),g.detune.value=x,g},d=(f,m)=>f.forEach(x=>{x.start(n),x.stop(m)});switch(t){case"musicbox":{let f=a.createGain();f.connect(c);let m=n+Math.max(1.6,s+1.2),x=u("sine",l),g=u("sine",l*4.01),p=u("sine",l*2),_=a.createGain(),v=a.createGain(),y=a.createGain();_.gain.setValueAtTime(1e-4,n),_.gain.exponentialRampToValueAtTime(.45*r,n+.004),_.gain.exponentialRampToValueAtTime(1e-4,m),v.gain.setValueAtTime(1e-4,n),v.gain.exponentialRampToValueAtTime(.09*r,n+.002),v.gain.exponentialRampToValueAtTime(1e-4,n+.18),y.gain.setValueAtTime(1e-4,n),y.gain.exponentialRampToValueAtTime(.1*r,n+.003),y.gain.exponentialRampToValueAtTime(1e-4,n+.7),x.connect(_),g.connect(v),p.connect(y),_.connect(f),v.connect(f),y.connect(f),d([x,g,p],m+.05);break}case"bell":{let f=n+3.5;[[1,.35,3.2],[2.76,.16,1.8],[5.4,.08,.9],[8.93,.04,.45]].forEach(([m,x,g])=>{let p=u("sine",l*m),_=a.createGain();_.gain.setValueAtTime(1e-4,n),_.gain.exponentialRampToValueAtTime(x*r,n+.003),_.gain.exponentialRampToValueAtTime(1e-4,n+g),p.connect(_),_.connect(c),d([p],f)});break}case"piano":{let f=n+s+1.6,m=a.createBiquadFilter();m.type="lowpass",m.frequency.setValueAtTime(900+r*3800,n),m.frequency.setTargetAtTime(500+l*1.2,n+.01,.5);let x=a.createGain();x.gain.setValueAtTime(1e-4,n),x.gain.linearRampToValueAtTime(.32*r,n+.005),x.gain.setTargetAtTime(.12*r,n+.005,.35),x.gain.setTargetAtTime(1e-4,n+s,.35);let g=u("triangle",l),p=u("sine",l*2,3),_=u("triangle",l,-6),v=a.createGain();v.gain.value=.25,g.connect(m),_.connect(m),p.connect(v),v.connect(m),m.connect(x),x.connect(c),d([g,p,_],f);break}case"pad":{let f=n+s+2.5,m=a.createBiquadFilter();m.type="lowpass",m.frequency.value=650+r*500,m.Q.value=.5;let x=a.createGain();h(x,Math.min(1.2,s*.4),.09*r,.8,.07*r,.9,n+s);let g=[u("sawtooth",l,-9),u("sawtooth",l,9),u("triangle",l/2)];g.forEach(p=>p.connect(m)),m.connect(x),x.connect(c),d(g,f);break}case"strings":{let f=n+s+1.8,m=a.createBiquadFilter();m.type="lowpass",m.frequency.value=1400+r*800,m.Q.value=.4;let x=a.createGain();h(x,Math.min(.45,s*.4),.075*r,.5,.06*r,.5,n+s);let g=u("sine",5.2),p=a.createGain();p.gain.value=7,g.connect(p);let _=[u("sawtooth",l,-7),u("sawtooth",l,6),u("sawtooth",l*2,2)];_.forEach(v=>{p.connect(v.detune),v.connect(m)}),m.connect(x),x.connect(c),d([..._,g],f);break}case"marimba":{let f=n+1;[[1,.42,.55],[4,.1,.08],[9.9,.03,.03]].forEach(([m,x,g])=>{let p=u("sine",l*m),_=a.createGain();_.gain.setValueAtTime(1e-4,n),_.gain.exponentialRampToValueAtTime(x*r,n+.003),_.gain.exponentialRampToValueAtTime(1e-4,n+g),p.connect(_),_.connect(c),d([p],f)});break}case"pluck":case"guitar":{let f=n+1.6,m=a.createBiquadFilter();m.type="lowpass",m.Q.value=t==="guitar"?2:1,m.frequency.setValueAtTime(t==="guitar"?3200:2400,n),m.frequency.exponentialRampToValueAtTime(400,n+.35);let x=a.createGain();x.gain.setValueAtTime(1e-4,n),x.gain.exponentialRampToValueAtTime(.26*r,n+.004),x.gain.exponentialRampToValueAtTime(1e-4,n+(t==="guitar"?1.4:.7));let g=[u("sawtooth",l),u("triangle",l*2,4)];g.forEach(p=>p.connect(m)),m.connect(x),x.connect(c),d(g,f);break}case"softbass":{let f=n+s+.6,m=a.createBiquadFilter();m.type="lowpass",m.frequency.value=380;let x=a.createGain();h(x,.02,.45*r,.3,.25*r,.15,n+s*.9);let g=[u("sine",l),u("triangle",l,4)];g.forEach(p=>p.connect(m)),m.connect(x),x.connect(c),d(g,f);break}case"flute":{let f=n+s+.6,m=a.createGain();h(m,.06,.16*r,.2,.12*r,.12,n+s*.95);let x=u("sine",l),g=u("triangle",l*2),p=a.createGain();p.gain.value=.08;let _=u("sine",5),v=a.createGain();v.gain.setValueAtTime(0,n),v.gain.linearRampToValueAtTime(9,n+.4),_.connect(v),v.connect(x.detune),v.connect(g.detune),x.connect(m),g.connect(p),p.connect(m),m.connect(c),d([x,g,_],f);break}case"whistle":{let f=n+s+.5,m=a.createGain();h(m,.05,.14*r,.2,.11*r,.1,n+s*.9);let x=u("sine",l*2);x.frequency.setValueAtTime(l*2*.97,n),x.frequency.exponentialRampToValueAtTime(l*2,n+.06);let g=u("sine",6),p=a.createGain();p.gain.value=14,g.connect(p),p.connect(x.detune);let _=a.createBufferSource();_.buffer=this.noise;let v=a.createBiquadFilter();v.type="bandpass",v.frequency.value=l*2,v.Q.value=12;let y=a.createGain();y.gain.value=.25*r,_.connect(v),v.connect(y),y.connect(m),x.connect(m),m.connect(c),d([x,g,_],f);break}case"hum":{let f=n+s+.9,m=[u("sawtooth",l,-4),u("sawtooth",l,5)],x=u("sine",4.8),g=a.createGain();g.gain.setValueAtTime(0,n),g.gain.linearRampToValueAtTime(12,n+.5),x.connect(g);let p=a.createGain();p.gain.value=.5,m.forEach(R=>{g.connect(R.detune),R.connect(p)});let _=a.createBiquadFilter();_.type="bandpass",_.frequency.value=320,_.Q.value=3;let v=a.createBiquadFilter();v.type="bandpass",v.frequency.value=800,v.Q.value=5;let y=a.createBiquadFilter();y.type="lowpass",y.frequency.value=1400;let D=a.createGain();D.gain.value=.35,p.connect(_),p.connect(v),v.connect(D);let E=a.createGain();h(E,.18,.55*r,.4,.45*r,.25,n+s*.95),_.connect(y),D.connect(y),y.connect(E),E.connect(c),d([...m,x],f);break}default:break}}drum(t,e,n=1,s=null){if(!this.ready)return;let r=this.ctx,o=s??this.musicBus,a=(c,l,h,u,d,f)=>{let m=r.createBufferSource();m.buffer=this.noise;let x=r.createBiquadFilter();x.type=c,x.frequency.value=l,x.Q.value=h;let g=r.createGain();g.gain.setValueAtTime(1e-4,e),g.gain.exponentialRampToValueAtTime(f*n,e+u),g.gain.exponentialRampToValueAtTime(1e-4,e+u+d),m.connect(x),x.connect(g),g.connect(o),m.start(e,Math.random()*1.5),m.stop(e+u+d+.05)};switch(t){case"kick":{let c=r.createOscillator();c.frequency.setValueAtTime(130,e),c.frequency.exponentialRampToValueAtTime(42,e+.14);let l=r.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(.7*n,e+.004),l.gain.exponentialRampToValueAtTime(1e-4,e+.3),c.connect(l),l.connect(o),c.start(e),c.stop(e+.35);break}case"hat":a("highpass",7500,.7,.002,.045,.18);break;case"shaker":a("bandpass",5200,1.2,.012,.07,.22);break;case"brush":a("bandpass",2400,.6,.006,.16,.16);break;case"clap":for(let c=0;c<3;c++)a("bandpass",1500,.8,.002,.05,.25*(1-c*.2));break;case"tick":{let c=r.createOscillator();c.type="square",c.frequency.value=2600;let l=r.createBiquadFilter();l.type="bandpass",l.frequency.value=3e3,l.Q.value=4;let h=r.createGain();h.gain.setValueAtTime(1e-4,e),h.gain.exponentialRampToValueAtTime(.12*n,e+.001),h.gain.exponentialRampToValueAtTime(1e-4,e+.025),c.connect(l),l.connect(h),h.connect(o),c.start(e),c.stop(e+.04);break}case"tock":{let c=r.createOscillator();c.type="square",c.frequency.value=1700;let l=r.createBiquadFilter();l.type="bandpass",l.frequency.value=1900,l.Q.value=4;let h=r.createGain();h.gain.setValueAtTime(1e-4,e),h.gain.exponentialRampToValueAtTime(.12*n,e+.001),h.gain.exponentialRampToValueAtTime(1e-4,e+.03),c.connect(l),l.connect(h),h.connect(o),c.start(e),c.stop(e+.05);break}default:break}}music(t,{fade:e=3,intensity:n=null,immediate:s=!1}={}){if(n!==null&&this.setIntensity(n,.01),!this.ready){this.pendingProfile=t;return}let r=this.voices[this.voices.length-1];if(r&&r.name===t&&!r.stopping)return;let o=kd[t];if(!o){console.warn("no profile",t);return}let a=this.ctx.currentTime,c=a+.08;r&&!r.stopping&&!s&&(c=Math.min(r.nextBarTime(),a+2.5));for(let h of this.voices)h.stopping||h.stop(c,e);let l=new uh(this,t,o,c);this.voices.push(l)}stopMusic(t=3){if(!this.ready)return;let e=this.ctx.currentTime;for(let n of this.voices)n.stopping||n.stop(e,t)}setIntensity(t,e=2){this.intensityTarget=Zt(t,0,1),this.intensityRate=1/Math.max(.01,e)}setTempo(t,e=2){this.tempoTarget=t,this.tempoRate=1/Math.max(.01,e)}muffle(t=1,e=1.5){if(!this.ready)return;let n=18e3*Math.pow(400/18e3,Zt(t,0,1));this.musicFilter.frequency.setTargetAtTime(n,this.ctx.currentTime,e/3)}duck(t=.5,e=.5){this.ready&&this.musicBus.gain.setTargetAtTime(this.vol.music*t,this.ctx.currentTime,e/3)}currentVoice(){return this.voices.filter(t=>!t.stopping).slice(-1)[0]??null}currentKey(){let t=this.currentVoice();return t?{tonic:t.tonic,scale:t.scale}:{tonic:lh.F,scale:ua.major}}beatInfo(){let t=this.now,e=this.currentVoice();if(!this.ready||!e){let a=.8571428571428571,c=t/a;return{dur:a,phase:c%1,beat:Math.floor(c),barBeat:Math.floor(c)%3,beats:3,nextTime:(Math.floor(c)+1)*a,lastTime:Math.floor(c)*a,now:t}}let n=e.beatLog,s=null,r=null;for(let a=n.length-1;a>=0;a--)if(n[a].time<=t){s=n[a],r=n[a+1]??null;break}if(!s){let a=e.beatDur();return{dur:a,phase:0,beat:0,barBeat:0,beats:e.p.beats,nextTime:n[0]?.time??t+a,lastTime:t-a,now:t}}let o=r?r.time-s.time:e.beatDur();return{dur:o,phase:Zt((t-s.time)/o,0,1),beat:s.n,barBeat:s.beat,beats:e.p.beats,nextTime:r?r.time:s.time+o,lastTime:s.time,now:t}}onBeat(t){return this.listeners.add(t),()=>this.listeners.delete(t)}_schedule(){if(!this.ready)return;let t=this.ctx,e=t.currentTime,n=.15,s=.025;if(this.intensity!==this.intensityTarget){let o=this.intensityTarget-this.intensity,a=(this.intensityRate??.5)*s;this.intensity=Math.abs(o)<a?this.intensityTarget:this.intensity+Math.sign(o)*a}if(this.tempoTarget!==void 0&&this.tempoMul!==this.tempoTarget){let o=this.tempoTarget-this.tempoMul,a=(this.tempoRate??.5)*s;this.tempoMul=Math.abs(o)<a?this.tempoTarget:this.tempoMul+Math.sign(o)*a}for(let o of this.voices)o.schedule(e,n);this.voices=this.voices.filter(o=>!(o.stopping&&e>o.stopEnd+.5));let r=this.currentVoice();if(r){for(;r.beatLog.length&&r.beatLog[0].time<e-8;)r.beatLog.shift();for(let o of r.beatLog)!o.fired&&o.time<=e&&(o.fired=!0,this.listeners.forEach(a=>a(o)))}this._ambTick(e)}_ambInit(){let t=this.ctx,e=(n,s,r,o)=>{let a=t.createBufferSource();a.buffer=n,a.loop=!0;let c=t.createBiquadFilter();c.type=s,c.frequency.value=r,c.Q.value=o;let l=t.createGain();return l.gain.value=0,a.connect(c),c.connect(l),l.connect(this.ambBus),a.start(),{s:a,f:c,g:l}};this.ambNodes={wind:e(this.brown,"bandpass",500,.6),rain:e(this.pink,"highpass",900,.3),waves:e(this.brown,"lowpass",700,.5),room:e(this.brown,"lowpass",220,.5),fire:e(this.brown,"lowpass",400,.7),city:e(this.brown,"lowpass",300,.4)},this.ambLevels={wind:0,rain:0,waves:0,room:0,fire:0,city:0,birds:0,crickets:0,heartbeat:0,crowd:0,clock:0},this.nextBird=0,this.nextCrackle=0,this.nextHeart=0,this.nextCricket=0,this.nextCrowd=0,this.nextClock=0}ambience(t={},e=3){if(this.ambTarget={wind:0,rain:0,waves:0,room:0,fire:0,city:0,birds:0,crickets:0,heartbeat:0,crowd:0,clock:0,...t},!this.ready)return;let n=this.ctx.currentTime;for(let s in this.ambNodes){let r={wind:.35,rain:.22,waves:.4,room:.25,fire:.3,city:.25}[s];this.ambNodes[s].g.gain.setTargetAtTime((this.ambTarget[s]||0)*r,n,e/3)}Object.assign(this.ambLevels,this.ambTarget)}_ambTick(t){if(!this.ambLevels)return;let e=this.ambLevels;this.ambTarget&&!this._ambApplied&&(this._ambApplied=!0,this.ambience(this.ambTarget,2)),e.wind>0&&this.ambNodes.wind.f.frequency.setTargetAtTime(400+Math.sin(t*.3)*200+Math.sin(t*.71)*120,t,.5),e.waves>0&&this.ambNodes.waves.g.gain.setTargetAtTime(e.waves*.4*(.55+.45*Math.sin(t*.55)),t,.4),e.birds>0&&t>this.nextBird&&(this._bird(t+.05,e.birds),this.nextBird=t+.6+Math.random()*3.5/e.birds),e.fire>0&&t>this.nextCrackle&&(this._crackle(t+.02,e.fire),this.nextCrackle=t+.05+Math.random()*.4),e.crickets>0&&t>this.nextCricket&&(this._cricket(t+.05,e.crickets),this.nextCricket=t+.35+Math.random()*.9),e.heartbeat>0&&t>this.nextHeart&&(this._heart(t+.05,e.heartbeat),this.nextHeart=t+.95),e.crowd>0&&t>this.nextCrowd&&(this._murmur(t+.05,e.crowd),this.nextCrowd=t+.15+Math.random()*.4),e.clock>0&&t>this.nextClock&&(this.drum(this._tk=this._tk?"tock":"tick",t+.05,e.clock,this.ambBus),this.nextClock=t+1)}_bird(t,e){let n=this.ctx,s=2+Math.floor(Math.random()*4),r=2200+Math.random()*1800,o=n.createStereoPanner?n.createStereoPanner():null;o&&(o.pan.value=Math.random()*1.6-.8,o.connect(this.ambBus));for(let a=0;a<s;a++){let c=n.createOscillator();c.type="sine";let l=n.createGain(),h=t+a*(.09+Math.random()*.06);c.frequency.setValueAtTime(r*(.9+Math.random()*.3),h),c.frequency.exponentialRampToValueAtTime(r*(1.1+Math.random()*.5),h+.06),l.gain.setValueAtTime(1e-4,h),l.gain.exponentialRampToValueAtTime(.03*e,h+.01),l.gain.exponentialRampToValueAtTime(1e-4,h+.08),c.connect(l),l.connect(o??this.ambBus),c.start(h),c.stop(h+.1)}}_crackle(t,e){let n=this.ctx,s=n.createBufferSource();s.buffer=this.noise;let r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=1500+Math.random()*2500,r.Q.value=2;let o=n.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.12*e*Math.random(),t+.002),o.gain.exponentialRampToValueAtTime(1e-4,t+.02),s.connect(r),r.connect(o),o.connect(this.ambBus),s.start(t,Math.random()),s.stop(t+.03)}_cricket(t,e){let n=this.ctx,s=4300+Math.random()*600;for(let r=0;r<3;r++){let o=n.createOscillator();o.frequency.value=s;let a=n.createGain(),c=t+r*.045;a.gain.setValueAtTime(1e-4,c),a.gain.exponentialRampToValueAtTime(.012*e,c+.006),a.gain.exponentialRampToValueAtTime(1e-4,c+.03),o.connect(a),a.connect(this.ambBus),o.start(c),o.stop(c+.04)}}_heart(t,e){let n=this.ctx;for(let[s,r]of[[0,1],[.24,.7]]){let o=n.createOscillator();o.frequency.setValueAtTime(70,t+s),o.frequency.exponentialRampToValueAtTime(38,t+s+.12);let a=n.createGain();a.gain.setValueAtTime(1e-4,t+s),a.gain.exponentialRampToValueAtTime(.35*e*r,t+s+.01),a.gain.exponentialRampToValueAtTime(1e-4,t+s+.2),o.connect(a),a.connect(this.ambBus),o.start(t+s),o.stop(t+s+.25)}}_murmur(t,e){let n=this.ctx,s=n.createOscillator();s.type="sawtooth";let r=140+Math.random()*120;s.frequency.setValueAtTime(r,t),s.frequency.linearRampToValueAtTime(r*(.85+Math.random()*.3),t+.25);let o=n.createBiquadFilter();o.type="bandpass",o.frequency.value=500+Math.random()*600,o.Q.value=3;let a=n.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.01*e,t+.05),a.gain.exponentialRampToValueAtTime(1e-4,t+.3),s.connect(o),o.connect(a),a.connect(this.ambBus),s.start(t),s.stop(t+.35)}sfx(t,e={}){if(!this.ready)return;let n=this.ctx,s=n.currentTime+(e.delay??0),r=this.sfxBus,o=e.vol??1,a=(u,d,f,m,x,g,p,_=r)=>{let v=n.createBufferSource();v.buffer=this.noise;let y=n.createBiquadFilter();y.type=u,y.Q.value=m,y.frequency.setValueAtTime(d,s),f&&y.frequency.exponentialRampToValueAtTime(f,s+x+g);let D=n.createGain();return D.gain.setValueAtTime(1e-4,s),D.gain.exponentialRampToValueAtTime(p*o,s+x),D.gain.exponentialRampToValueAtTime(1e-4,s+x+g),v.connect(y),y.connect(D),D.connect(_),v.start(s,Math.random()),v.stop(s+x+g+.05),D},c=(u,d,f,m,x,g,p=s,_=r)=>{let v=n.createOscillator();v.type=u,v.frequency.setValueAtTime(d,p),f&&v.frequency.exponentialRampToValueAtTime(f,p+m+x);let y=n.createGain();y.gain.setValueAtTime(1e-4,p),y.gain.exponentialRampToValueAtTime(g*o,p+m),y.gain.exponentialRampToValueAtTime(1e-4,p+m+x),v.connect(y),y.connect(_),v.start(p),v.stop(p+m+x+.05)},l=this.currentKey(),h=(u,d=0)=>l.tonic+br(u,l.scale)+d*12;switch(t){case"step":{let u=e.surface??"grass";u==="wood"?a("bandpass",900,null,1.5,.003,.05,.05):u==="snow"?a("highpass",2500,null,.5,.01,.09,.05):u==="stone"?a("bandpass",2200,null,1,.002,.03,.04):a("lowpass",1400,null,.7,.008,.07,.035);break}case"chime":[1,3,5].forEach((u,d)=>this.note("bell",h(u,2),s+d*.09,.5,.5*o,this.sfxBus));break;case"keep":[1,3,5,8,10].forEach((u,d)=>this.note("musicbox",h(u,1),s+d*.11,.6,.7*o,this.sfxRev)),this.note("bell",h(1,1),s,1,.4*o,this.sfxRev);break;case"lost":[5,3,2].forEach((u,d)=>this.note("musicbox",h(u,1),s+d*.25,.8,.35*o,this.sfxRev));break;case"shutter":a("highpass",3e3,null,.5,.001,.02,.3),a("bandpass",1200,null,1,.001,.04,.2);break;case"pop":c("sine",500,1100,.005,.08,.15);break;case"tap":c("sine",900+Math.random()*200,null,.003,.06,.08);break;case"good":this.note("musicbox",h(e.deg??5,1),s,.4,.6*o,this.sfxBus);break;case"soft":this.note("bell",h(e.deg??1,1),s,.6,.35*o,this.sfxRev);break;case"miss":c("sine",300,240,.01,.12,.05);break;case"giggle":{let u=4+Math.floor(Math.random()*3),d=(e.pitch??1)*(520+Math.random()*120);for(let f=0;f<u;f++){let m=s+f*.11;c("triangle",d*(1.3-f*.05),d*(1.1-f*.05),.01,.07,.08,m),c("sine",d*2.6,d*2.2,.01,.05,.03,m)}break}case"coo":case"babble":{let u=t==="coo"?2:3+Math.floor(Math.random()*3);for(let d=0;d<u;d++){let f=s+d*.2,m=(e.pitch??1)*(380+Math.random()*140),x=n.createOscillator();x.type="sawtooth",x.frequency.setValueAtTime(m,f),x.frequency.linearRampToValueAtTime(m*(t==="coo"?1.25:.9),f+.16);let g=n.createBiquadFilter();g.type="bandpass",g.frequency.value=t==="coo"?450:800,g.Q.value=4;let p=n.createGain();p.gain.setValueAtTime(1e-4,f),p.gain.exponentialRampToValueAtTime(.12*o,f+.03),p.gain.exponentialRampToValueAtTime(1e-4,f+.18),x.connect(g),g.connect(p),p.connect(r),x.start(f),x.stop(f+.2)}break}case"cry":{for(let u=0;u<3;u++){let d=s+u*.55,f=n.createOscillator();f.type="sawtooth",f.frequency.setValueAtTime(420,d),f.frequency.linearRampToValueAtTime(520,d+.15),f.frequency.linearRampToValueAtTime(380,d+.45);let m=n.createBiquadFilter();m.type="bandpass",m.frequency.value=1100,m.Q.value=3;let x=n.createGain();x.gain.setValueAtTime(1e-4,d),x.gain.exponentialRampToValueAtTime(.09*o,d+.05),x.gain.exponentialRampToValueAtTime(1e-4,d+.48),f.connect(m),m.connect(x),x.connect(r),f.start(d),f.stop(d+.5)}break}case"woof":{for(let u=0;u<(e.n??1);u++){let d=s+u*.25;c("sawtooth",320,170,.01,.13,.12,d)}a("bandpass",700,400,2,.01,.12,.1);break}case"splash":a("lowpass",3500,400,.6,.02,.5,.35);break;case"whoosh":a("bandpass",300,1800,1.2,.25,.5,.2);break;case"blow":a("lowpass",1500,600,.5,.15,.6,.15);break;case"rustle":a("bandpass",3e3,1500,.8,.05,.25,.08);break;case"thud":c("sine",120,50,.005,.2,.3),a("lowpass",500,null,1,.003,.1,.15);break;case"door":c("sine",90,60,.01,.25,.25),a("lowpass",800,null,1,.01,.15,.08);break;case"ping":c("sine",1320,null,.005,.12,.12),c("sine",1760,null,.005,.2,.1,s+.1);break;case"phone":for(let u=0;u<2;u++){let d=s+u*.5;c("sine",440,null,.01,.38,.06,d),c("sine",480,null,.01,.38,.06,d)}break;case"bikebell":for(let u=0;u<2;u++){let d=s+u*.16;c("sine",3100,null,.002,.4,.08,d),c("sine",4250,null,.002,.25,.05,d)}break;case"heart":this._heart(s,o);break;case"kiss":c("sine",1600,800,.003,.05,.05);break;case"creak":{let u=n.createOscillator();u.type="sawtooth",u.frequency.setValueAtTime(110,s),u.frequency.linearRampToValueAtTime(140,s+.35);let d=n.createBiquadFilter();d.type="bandpass",d.frequency.value=900,d.Q.value=8;let f=n.createGain();f.gain.setValueAtTime(1e-4,s),f.gain.exponentialRampToValueAtTime(.03*o,s+.1),f.gain.exponentialRampToValueAtTime(1e-4,s+.4),u.connect(d),d.connect(f),f.connect(r),u.start(s),u.stop(s+.45);break}case"applause":for(let u=0;u<40;u++){let d=n.createGain(),f=s+Math.random()*2.5,m=n.createBufferSource();m.buffer=this.noise;let x=n.createBiquadFilter();x.type="bandpass",x.frequency.value=1200+Math.random()*1500,x.Q.value=1,d.gain.setValueAtTime(1e-4,f),d.gain.exponentialRampToValueAtTime(.06*o,f+.003),d.gain.exponentialRampToValueAtTime(1e-4,f+.05),m.connect(x),x.connect(d),d.connect(r),m.start(f,Math.random()),m.stop(f+.06)}break;case"engine":{let u=n.createOscillator();u.type="sawtooth",u.frequency.setValueAtTime(45,s),u.frequency.linearRampToValueAtTime(70,s+1.5),u.frequency.linearRampToValueAtTime(55,s+3.5);let d=n.createBiquadFilter();d.type="lowpass",d.frequency.value=300;let f=n.createGain();f.gain.setValueAtTime(1e-4,s),f.gain.exponentialRampToValueAtTime(.12*o,s+.3),f.gain.setTargetAtTime(1e-4,s+2.5,.8),u.connect(d),d.connect(f),f.connect(r),u.start(s),u.stop(s+5);break}case"yay":{let u=n.createOscillator();u.type="sawtooth",u.frequency.setValueAtTime(380*(e.pitch??1),s),u.frequency.linearRampToValueAtTime(620*(e.pitch??1),s+.25);let d=n.createBiquadFilter();d.type="bandpass",d.frequency.value=900,d.Q.value=3;let f=n.createGain();f.gain.setValueAtTime(1e-4,s),f.gain.exponentialRampToValueAtTime(.1*o,s+.04),f.gain.exponentialRampToValueAtTime(1e-4,s+.45),u.connect(d),d.connect(f),f.connect(r),u.start(s),u.stop(s+.5);break}case"sparkle":for(let u=0;u<6;u++)this.note("musicbox",h([1,3,5,8,10,12][Math.floor(Math.random()*6)],2),s+u*.07+Math.random()*.05,.3,.3*o,this.sfxRev);break;case"tick":this.drum("tick",s,o,r);break;case"tock":this.drum("tock",s,o,r);break;case"bloop":c("sine",300,600,.01,.12,.08);break;case"fwip":a("bandpass",2e3,4e3,2,.01,.08,.1);break;case"lantern":a("bandpass",400,900,1,.3,1.2,.08),this.note("bell",h(5,1),s+.2,1,.25*o,this.sfxRev);break;case"note":this.note(e.inst??"musicbox",h(e.deg??1,e.oct??1),s,e.dur??.5,(e.vel??.7)*o,this.sfxRev);break;case"thunder":a("lowpass",300,60,.6,.1,2.5,.4);break;default:break}}},uh=class{constructor(t,e,n,s){this.e=t,this.name=e,this.p=n;let r=t.ctx;this.out=r.createGain(),this.out.gain.setValueAtTime(1e-4,r.currentTime),this.out.gain.setTargetAtTime(1,s,.4),this.out.connect(t.musicBus),this.send=r.createGain(),this.send.gain.value=.55,this.out.connect(this.send),this.send.connect(t.revIn),this.tonic=lh[n.key]??65,this.minor=n.scale==="minor"||n.scale==="harmonic",this.scale=ua[n.scale??"major"],this.prog=n.song?n.song.map(o=>[o.c,n.beats]):n.prog,this.stepTime=s,this.step=0,this.bar=0,this.beatLog=[],this.beatN=0,this.layers=n.layers.map((o,a)=>{let c=r.createGain();return c.gain.value=this._layerLevel(o),c.connect(this.out),{...o,g:c,rng:ye((o.seed??3)+a*17),cur:[]}}),this.stopping=!1}beatDur(){return 60/(this.p.bpm*this.e.tempoMul)}stepDur(){return this.beatDur()/4}nextBarTime(){let t=this.p.beats*4,e=this.step%t;return this.stepTime+(t-e)%t*this.stepDur()}stop(t,e){this.stopping=!0,this.stopEnd=t+e;let n=this.out.gain;n.cancelScheduledValues(t),n.setTargetAtTime(1e-4,t,e/3)}_layerLevel(t){let e=this.e.intensity,n=t.min??0,s=t.max??1.01,r=Zt((e-n)/.15+0,0,1)*Zt((s-e)/.15,0,1);return(t.gain??.2)*r}chordAt(t){let e=0;for(let[,r]of this.prog)e+=r;let n=t*this.p.beats%e,s=0;for(let[r,o]of this.prog){if(n<s+o)return hh(r,this.minor);s+=o}return hh(this.prog[0][0],this.minor)}chordTones(t,e,n=4){let s=this.tonic+t.root+e*12,r=[];for(let o=0;r.length<n;o++)r.push(s+t.iv[o%t.iv.length]+Math.floor(o/t.iv.length)*12);return r}schedule(t,e){if(!(this.stopping&&t>this.stopEnd)){for(let n of this.layers)n.g.gain.setTargetAtTime(this._layerLevel(n),t,.4);for(;this.stepTime<t+e;)this._playStep(this.stepTime),this.stepTime+=this.stepDur(),this.step++}}_playStep(t){let e=this.p,n=e.beats*4,s=this.step%n,r=Math.floor(this.step/n);s%4===0&&this.beatLog.push({time:t,beat:s/4,bar:r,n:this.beatN++});let o=this.chordAt(r),a=this.beatDur();for(let c of this.layers){if(c.g.gain.value<5e-4&&this._layerLevel(c)<5e-4)continue;let l=c.oct??0;switch(c.t){case"song":{let h=e.song??c.song;if(!h)break;let u=h[r%h.length],d=0;for(let[f,m]of u.n){if(Math.round(d*4)===s){let x=this.tonic+br(f,this.scale)+12*l;this.e.note(c.inst,x,t,m*a*.95,.75+.15*Math.random(),c.g)}d+=m}break}case"chord":{let h=(c.every??e.beats)*4;this.step%h===0&&this.chordTones(o,l,o.iv.length).forEach(u=>this.e.note(c.inst,u,t,h/4*a,.7,c.g));break}case"arp":{let h=c.div??2,u=4/h;if(s%u===0){let d=Math.floor(s/u)%c.pattern.length,f=this.chordTones(o,l,6);this.e.note(c.inst,f[c.pattern[d]],t,a/h*1.5,.55+(d===0?.2:0),c.g)}break}case"bass":{let h=this.tonic+o.root+12*l;s===0&&this.e.note(c.inst,h,t,a*(c.fifth?e.beats/2:e.beats)*.9,.8,c.g),c.fifth&&s===n/2&&this.e.note(c.inst,h+7,t,a*e.beats/2*.9,.65,c.g);break}case"waltz":{let h=this.tonic+o.root+12*l;s===0&&this.e.note(c.inst,h-12,t,a*.9,.75,c.g),(s===4||s===8)&&this.chordTones(o,l+1,3).forEach(u=>this.e.note(c.inst,u,t,a*.5,.45,c.g));break}case"strum":{if(c.rhythm.includes(s)){let h=this.chordTones(o,l,5),u=s/2%2===0;h.forEach((d,f)=>this.e.note(c.inst,d,t+(u?f:h.length-f)*.012,a*.6,(s===0?.8:.5)*(.85+.15*Math.random()),c.g))}break}case"gen":{s===0&&(c.cur=this._genBar(c,r,o));for(let h of c.cur)h.s===s&&this.e.note(c.inst,h.m,t,h.d*a/4,h.v,c.g);break}case"perc":{let h=c.pat,u=this.step%16;for(let d in h)h[d][u%h[d].length]==="x"&&this.e.drum(d,t,(c.gain??.15)*5,c.g);break}case"tick":s%4===0&&this.e.drum(s/4%2?"tock":"tick",t,1,c.g);break;case"sparkle":{if(s%2===0&&c.rng()<(c.density??.2)*.5){let h=this.chordTones(o,l,6);this.e.note(c.inst,h[Math.floor(c.rng()*h.length)],t,a,.4+c.rng()*.3,c.g)}break}default:break}}}_genBar(t,e,n){let s=this.p,r=s.beats*4,o=Math.floor(e/4),a=e%4,c=a===3?e:a+o%2*4,l=ye((t.seed??1)*1e3+c*31+7),h=t.long?[[4,4,8],[8,8],[6,2,8],[4,4,4,4],[12,4]]:[[4,4,4,4],[6,2,4,4],[8,4,4],[4,4,8],[2,2,4,8],[12,4],[4,2,2,8]],u=t.long?[[8,4],[12],[4,8],[6,6]]:[[4,4,4],[8,4],[4,8],[6,2,4],[12]],d=l.pick(s.beats===3?u:h);t.sparse&&l()<.35&&(d=[r]);let f=[],m=0,x=this.tonic+12*(t.oct??0),g=n.iv.map(_=>(n.root+_)%12),p=3+Math.floor(l()*4);for(let _=0;_<d.length;_++){if(t.sparse&&_>0&&l()<.4){m+=d[_];continue}if(_===0||l()<.4){let v=p,y=99;for(let D=p-3;D<=p+3;D++){let E=(br(D,this.scale)%12+12)%12;g.includes(E)&&Math.abs(D-p)<y&&(y=Math.abs(D-p),v=D)}p=v}else p+=l.pick([-1,1,-1,1,2,-2]);p=Zt(p,1,10),f.push({s:m,m:x+br(p,this.scale),d:d[_]*.95,v:.6+l()*.25}),m+=d[_]}return f}};var dh="lm.save.v1",fa="lm.img.",fh=["Prologue","I \xB7 Tiny","II \xB7 Wonder","III \xB7 Running","IV \xB7 Together","V \xB7 Little Ones","VI \xB7 So Fast","VII \xB7 Winter","VIII \xB7 Little Moments"],Mr=class{constructor(){this.registry=new Map,this.kept=new Map,this.lost=new Set,this.el=document.querySelector("#album"),this.open=!1,this.tab=1}register(t,e,n,s){this.registry.has(t)||this.registry.set(t,{id:t,chapter:e,caption:n,scene:s})}count(){return this.kept.size}has(t){return this.kept.has(t)}keep(t,e,n,s){this.kept.set(t,{caption:e,chapter:n,img:s}),this.lost.delete(t);try{s&&localStorage.setItem(fa+t,s)}catch{}}lose(t){this.kept.has(t)||this.lost.add(t)}keptIn(t){return[...this.kept.entries()].filter(([,e])=>e.chapter===t)}save(t){let e={v:1,sceneIndex:t,date:Date.now(),state:T.state,kept:Object.fromEntries([...this.kept.entries()].map(([n,s])=>[n,{caption:s.caption,chapter:s.chapter}])),lost:[...this.lost]};try{localStorage.setItem(dh,JSON.stringify(e))}catch(n){console.warn("save failed",n)}}static readSave(){try{return JSON.parse(localStorage.getItem(dh)||"null")}catch{return null}}load(t){this.kept.clear(),this.lost.clear();for(let[e,n]of Object.entries(t.kept||{})){let s=null;try{s=localStorage.getItem(fa+e)}catch{}this.kept.set(e,{...n,img:s})}(t.lost||[]).forEach(e=>this.lost.add(e)),Object.assign(T.state,t.state||{})}forgetFrom(t){for(let[e,n]of this.registry)if(t.includes(n.scene)){this.kept.delete(e),this.lost.delete(e);try{localStorage.removeItem(fa+e)}catch{}}}wipe(){try{let t=[];for(let e=0;e<localStorage.length;e++){let n=localStorage.key(e);n&&(n.startsWith(fa)||n===dh)&&t.push(n)}t.forEach(e=>localStorage.removeItem(e))}catch{}this.kept.clear(),this.lost.clear()}show(t=null,{reachedChapter:e=8,onClose:n=null}={}){this.open=!0,this.onClose=n,t!==null&&(this.tab=t),this.reached=e,this.render(),this.el.classList.remove("hidden")}hide(){this.open=!1,this.el.classList.add("hidden"),this.el.innerHTML="",this.onClose&&this.onClose()}render(){let t=this.el;t.innerHTML="";let e=wt("div","book"),n=wt("div","head");n.appendChild(wt("h2","","Little Moments"));let s=wt("button","close","Close \u2715");s.addEventListener("click",()=>this.hide()),n.appendChild(s),e.appendChild(n);let r=wt("div","tabs");for(let h=1;h<=Math.min(8,this.reached);h++){let u=this.keptIn(h).length,d=wt("button",h===this.tab?"on":"",`${fh[h]} <small>(${u})</small>`);d.addEventListener("click",()=>{this.tab=h,this.render()}),r.appendChild(d)}e.appendChild(r);let o=wt("div","page"),a=[...this.registry.values()].filter(h=>h.chapter===this.tab),c=new Set(a.map(h=>h.id));for(let[h,u]of this.kept)u.chapter===this.tab&&!c.has(h)&&a.push({id:h,chapter:u.chapter,caption:u.caption});let l=0;for(let h of a){let u=this.kept.get(h.id),d=wt("div","polaroid"+(u?"":" empty"));d.style.setProperty("--r",(l++*37%9-4)*.8+"deg"),u?d.innerHTML=(u.img?`<img class="ph" src="${u.img}">`:'<div class="ph"></div>')+`<div class="cap">${Fe(u.caption)}</div>`:d.innerHTML=`<div class="ph"></div><div class="cap">${this.lost.has(h.id)?"a moment that passed":"not yet lived"}</div>`,o.appendChild(d)}a.length||o.appendChild(wt("div","note","Nothing here yet.")),e.appendChild(o),t.appendChild(e)}};var B={grass:10735474,grassSpring:11655562,grassDark:8631130,grassAutumn:13153378,grassDry:13482874,snow:15988474,snowShade:14673647,ice:13624562,dirt:10253399,dirtDark:7361088,rock:9604496,rockDark:7301744,sand:15587496,wood:12290911,woodDark:8871999,woodLight:14465164,trunk:8215107,birch:15657182,cream:16050390,white:16513266,pink:15911364,peach:16238243,blue:11126502,navy:4018042,red:14243914,terracotta:13199692,yellow:15979371,green:7319146,teal:6271912,lilac:12297949,slate:7306636,stone:13616827,asphalt:7106424,sidewalk:14209736,water:7321561,leafSummer:8372058,leafSpring:10474606,blossom:16169160,blossomLight:16503774,leafAutumn:14916155,leafAutumn2:13787198,leafAutumn3:15646794,pine:5214050,skin:[16176056,15317140,13209190,10118980,7227956]},ph=new Map;function pe(i,t={}){let e=i+JSON.stringify(t);if(ph.has(e))return ph.get(e);let n=new Ni({color:i,flatShading:!0,roughness:t.roughness??.92,metalness:t.metalness??0,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,transparent:!!t.transparent,opacity:t.opacity??1,side:t.side??Sn,depthWrite:t.depthWrite??!0});return ph.set(e,n),n}function zi(i,t={}){return new Ni({color:i,flatShading:!0,roughness:t.roughness??.92,metalness:0,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,transparent:!!t.transparent,opacity:t.opacity??1,side:t.side??Sn,depthWrite:t.depthWrite??!0})}var mh=new Map;function Qn(i,t){return mh.has(i)||mh.set(i,t()),mh.get(i)}function gh(i,t=.05,e=1,n=!0){let s=i.attributes.position,r=1/0;for(let o=0;o<s.count;o++)r=Math.min(r,s.getY(o));for(let o=0;o<s.count;o++){let a=s.getX(o),c=s.getY(o),l=s.getZ(o);if(n&&Math.abs(c-r)<1e-4)continue;let h=Math.sin(Math.round(a*100)*12.9898+Math.round(c*100)*78.233+Math.round(l*100)*37.719+e*11.13)*43758.5453,u=h-Math.floor(h)-.5,d=Math.sin(h*1.37+3.1)*9631.17,f=d-Math.floor(d)-.5,m=Math.sin(h*.71+7.7)*7211.31,x=m-Math.floor(m)-.5;s.setXYZ(o,a+u*t,c+f*t,l+x*t)}return s.needsUpdate=!0,i.computeVertexNormals(),i}function he(i,t=!0,e=!0){return i.traverse(n=>{n.isMesh&&(n.castShadow=t,n.receiveShadow=e)}),i}function Hi(i,t,e){let n=new Mt(i,typeof t=="number"?pe(t,e):t);return n.castShadow=!0,n.receiveShadow=!0,n}function st(i,t,e,n,s){let r=Qn(`box${i},${t},${e}`,()=>{let o=new He(i,t,e);return o.translate(0,t/2,0),o});return Hi(r,n,s)}function xh(i,t,e,n,s){let r=Qn(`boxc${i},${t},${e}`,()=>new He(i,t,e));return Hi(r,n,s)}function Ae(i,t,e,n,s,r){let o=Qn(`cyl${i},${t},${e},${n}`,()=>{let a=new tn(i,t,e,n);return a.translate(0,e/2,0),a});return Hi(o,s,r)}function Bi(i,t,e,n,s){let r=Qn(`cone${i},${t},${e}`,()=>{let o=new pi(i,t,e);return o.translate(0,t/2,0),o});return Hi(r,n,s)}function Ee(i,t,e,n=0,s=1,r){let o=Qn(`ico${i},${t},${n},${s}`,()=>gh(new ke(i,t),n,s,!1));return Hi(o,e,r)}function wr(i,t,e,n,s){let r=Qn(`sph${i},${t},${e}`,()=>new $n(i,t,e));return Hi(r,n,s)}function yh(i,t,e,n,s,r=Math.PI*2,o){let a=Qn(`tor${i},${t},${e},${n},${r}`,()=>new mi(i,t,e,n,r));return Hi(a,s,o)}function xv(...i){let t=new ut;return i.forEach(e=>e&&t.add(e)),t}function yv(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new Ss(n);return s.colorSpace=Ue,s.anisotropy=4,s}var pa=null;function ma(){return pa||(pa=yv(128,128,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.55)"),e.addColorStop(.6,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)}),pa)}function Un(i=16777215,t=1,e=1){let n=new Fo(new lr({map:ma(),color:i,transparent:!0,opacity:e,blending:un,depthWrite:!1,fog:!1}));return n.scale.setScalar(t),n}function ga({w:i=20,d:t=20,h:e=1.2,top:n=B.grass,side:s=B.dirt,under:r=B.dirtDark,seed:o=3,rocks:a=!0,edge:c=null}={}){let l=new ut,h=st(i,.35,t,n);if(h.position.y=-.35,h.castShadow=!1,l.add(h),c){let d=st(i+.06,.12,t+.06,c);d.position.y=-.47,d.castShadow=!1,l.add(d)}let u=st(i-.1,e,t-.1,s);if(u.position.y=-.35-e,u.castShadow=!1,l.add(u),a){let d=ye(o),f=Math.max(4,Math.round(i*t/30));for(let x=0;x<f;x++){let g=d.range(1.8,4.2),p=d.range(2.5,7.5),_=gh(new pi(g,p,5),.35,o+x,!1),v=new Mt(_,pe(x%3===0?B.rockDark:r));v.rotation.x=Math.PI,v.position.set(d.range(-i/2+g*.8,i/2-g*.8),-.35-e-p/2+.2,d.range(-t/2+g*.8,t/2-g*.8)),l.add(v)}let m=new Mt(gh(new pi(Math.min(i,t)*.62,Math.min(i,t)*.55,6),.5,o+99,!1),pe(r));m.rotation.x=Math.PI,m.rotation.y=.4,m.scale.set(i/Math.min(i,t),1,t/Math.min(i,t)),m.position.y=-.35-e-Math.min(i,t)*.27+.1,l.add(m)}return l.userData.ground=h,l}function pn(i,t,e,n=.005,s){let r=new Mt(Qn(`patch${i},${t}`,()=>{let o=new Ve(i,t);return o.rotateX(-Math.PI/2),o}),pe(e,s));return r.position.y=n,r.receiveShadow=!0,r}function Ds(i,t,e=10,n=.006){let s=new Mt(Qn(`disc${i},${e}`,()=>{let r=new Ts(i,e);return r.rotateX(-Math.PI/2),r}),pe(t));return s.position.y=n,s.receiveShadow=!0,s}var Fd={spring:[B.leafSpring,9423459,11918980],summer:[B.leafSummer,6989903,9488482],autumn:[B.leafAutumn,B.leafAutumn2,B.leafAutumn3],winter:[15330803,14673390,16054010],blossom:[B.blossom,B.blossomLight,15836859]};function Sr({kind:i="round",season:t="summer",size:e=1,seed:n=1}={}){let s=ye(n*7+3),r=new ut,o=(i==="pine"?.9:1.4)*e,a=i==="birch"?B.birch:B.trunk,c=Ae(.12*e,.2*e,o,5,a);r.add(c);let l=new ut;l.position.y=o,r.add(l);let h=Fd[i==="blossom"&&t!=="winter"&&t!=="autumn"?"blossom":t];if(i==="pine"){let u=t==="winter"?[B.pine,6134384]:[B.pine,6003307];for(let d=0;d<3;d++){let f=Bi((1-d*.25)*e,1.3*e,6,u[d%2]);if(f.position.y=d*.65*e-.2,l.add(f),t==="winter"){let m=Bi((.55-d*.14)*e,.5*e,6,B.snow);m.position.y=d*.65*e+.75*e,l.add(m)}}}else if(t==="winter"&&i!=="pine"){for(let d=0;d<5;d++){let f=Ae(.03*e,.07*e,.9*e,4,a);f.rotation.z=s.range(.5,.9)*(d%2?1:-1),f.rotation.y=d*1.3,f.position.y=s.range(-.2,.3)*e,l.add(f)}let u=Ee(.35*e,0,B.snow,.05,n);u.position.y=.6*e,u.scale.y=.5,l.add(u)}else{let u=i==="birch"?3:4;for(let f=0;f<u;f++){let m=s.range(.55,.85)*e,x=Ee(m,0,h[f%h.length],.12,n+f),g=f/u*Math.PI*2+s.range(0,1);x.position.set(Math.cos(g)*.45*e,s.range(.35,.9)*e,Math.sin(g)*.45*e),l.add(x)}let d=Ee(.7*e,0,h[0],.12,n+9);d.position.y=1.15*e,l.add(d)}return he(r),r.userData.canopy=l,r.userData.sway=s.range(0,6),r.userData.update=(u,d)=>{l.rotation.z=Math.sin(d*.8+r.userData.sway)*.02,l.rotation.x=Math.cos(d*.6+r.userData.sway)*.015},r}function xa({stage:i=1,season:t="summer",swing:e=!1,seed:n=42}={}){let s=new ut,r=[.28,.6,1.25,1.9,2.4][i]??1,o=1.5*r,a=Ae(.1*r+.03,.22*r+.05,o,6,B.trunk);s.add(a);let c=new ut;if(c.position.y=o,s.add(c),i>=2)for(let h=0;h<3;h++){let u=Ae(.04*r,.09*r,.9*r,5,B.trunk);u.rotation.z=(h-1)*.7,u.rotation.y=h*2.1,u.position.y=-.2*r,c.add(u)}let l=Fd[t];if(t==="winter"){for(let u=0;u<7;u++){let d=Ae(.025*r,.06*r,1.1*r,4,B.trunk);d.rotation.z=.6+u%3*.15,d.rotation.y=u*.9,d.position.y=.1*r,c.add(d)}let h=Ee(.5*r,0,B.snow,.06,n);h.scale.y=.35,h.position.y=.75*r,c.add(h)}else{let h=ye(n),u=i===0?2:6;for(let f=0;f<u;f++){let m=Ee(h.range(.5,.75)*r,i>=3?1:0,l[f%3],.1*r,n+f),x=f/u*Math.PI*2;m.position.set(Math.cos(x)*.6*r,h.range(.3,.8)*r,Math.sin(x)*.6*r),c.add(m)}let d=Ee(.8*r,i>=3?1:0,l[0],.1*r,n+77);d.position.y=1.1*r,c.add(d)}if(e&&i>=2){let h=new ut,u=st(.025,1.3*r*.75,.025,15260872);u.position.set(-.25,-1.3*r*.75,0),h.add(u);let d=st(.025,1.3*r*.75,.025,15260872);d.position.set(.25,-1.3*r*.75,0),h.add(d);let f=st(.65,.06,.25,B.woodDark);f.position.y=-1.3*r*.75,h.add(f),h.position.set(.9*r,o+.15*r-.35,.2),s.add(h),s.userData.swing=h,s.userData.swingLen=1.3*r*.75}return he(s),s.userData.canopy=c,s.userData.update=(h,u)=>{c.rotation.z=Math.sin(u*.7)*.015},s}function Od(i=7910486,t=1,e=1){let n=new ut,s=ye(e);for(let r=0;r<3;r++){let o=Ee(s.range(.28,.42)*t,0,r===1?i:Oi(i,.92),.06,e+r);o.position.set((r-1)*.3*t,.25*t,s.range(-.1,.1)),n.add(o)}return he(n)}function Tr(i=1,t=1,e=B.rock){let n=Ee(.4*i,0,e,.12*i,t);return n.scale.y=.6,n.position.y=.12*i,xv(n)}function Er(i=B.pink,t=1){let e=new ut,n=st(.025,.22,.025,6068806);e.add(n);let s=Ee(.07,0,i,0);s.position.y=.24,e.add(s);let r=Ee(.035,0,B.yellow);return r.position.y=.27,e.add(r),e.rotation.y=t,he(e,!1,!1)}function ya(i=B.grassDark,t=1){let e=new ut;for(let n=0;n<3;n++){let s=Bi(.04,.22+n%2*.08,3,i);s.position.set((n-1)*.05,0,n%2*.04),s.rotation.z=(n-1)*.3,e.add(s)}return e.rotation.y=t,he(e,!1,!1)}function va(i=1,t=1){let e=new ut,n=ye(i);for(let s=0;s<4;s++){let r=Ee(n.range(.6,1.1)*t,0,16777215,.15,i+s,{emissive:16777215,emissiveIntensity:.25});r.position.set((s-1.5)*.8*t,n.range(-.2,.3),n.range(-.3,.3)),r.scale.y=.7,e.add(r)}return e.userData.drift=n.range(.1,.25),e.traverse(s=>{s.isMesh&&(s.castShadow=!1,s.receiveShadow=!1)}),e}function Oi(i,t){let e=new At(i);return e.multiplyScalar(t),e.getHex()}function vh({w:i=8,d:t=8,h:e=3.2,floor:n=B.woodLight,wall:s=B.cream,wall2:r=null,trim:o=B.white,base:a=B.dirtDark,windows:c=[]}={}){let l=new ut,h=st(i,.25,t,n);h.position.y=-.25,h.castShadow=!1,l.add(h);let u=st(i+.3,.6,t+.3,a);u.position.y=-.85,u.castShadow=!1,l.add(u);for(let g=1;g<Math.floor(i/.8);g++){let p=pn(.02,t,Oi(n,.9),.003);p.position.x=-i/2+g*.8,l.add(p)}let d=st(.25,e,t+.25,s);d.position.set(-i/2-.125,-.25,-.125),l.add(d);let f=st(i,e,.25,r??s);f.position.set(0,-.25,-t/2-.125),l.add(f);let m=st(.06,.18,t,o);m.position.set(-i/2+.03,0,0),l.add(m);let x=st(i,.18,.06,o);x.position.set(0,0,-t/2+.03),l.add(x);for(let g of c)l.add(vv(g));return he(l),l.userData.walls=[d,f],l}function vv({wall:i="back",at:t=0,y:e=1.1,w:n=1.4,h:s=1.3,glow:r=16773848,roomW:o=8,roomD:a=8}={}){let c=new ut,l=st(n,s,.05,r,{emissive:r,emissiveIntensity:.9});l.castShadow=!1,c.add(l);let h=st(n+.16,.1,.14,B.white);h.position.y=-.05,c.add(h);let u=st(n+.16,.1,.14,B.white);u.position.y=s,c.add(u);let d=st(.08,s,.12,B.white);d.position.x=0,c.add(d);let f=st(.1,s,.14,B.white);f.position.x=-n/2,c.add(f);let m=st(.1,s,.14,B.white);m.position.x=n/2,c.add(m);let x=st(n+.3,.07,.3,B.white);return x.position.set(0,-.08,.12),c.add(x),i==="back"?c.position.set(t,e,-a/2+.03):(c.position.set(-o/2+.03,e,t),c.rotation.y=Math.PI/2),c.userData.pane=l,c}function _h({w:i=5,d:t=4,h:e=2.6,wall:n=B.cream,roof:s=B.terracotta,door:r=B.navy,trim:o=B.white,chimney:a=!0,porch:c=!1,lit:l=!1,seed:h=1}={}){let u=new ut,d=st(i,e,t,n);u.add(d);let f=new Es,m=.35;f.moveTo(-i/2-m,0),f.lineTo(i/2+m,0),f.lineTo(0,e*.6),f.lineTo(-i/2-m,0);let x=new mr(f,{depth:t+m*2,bevelEnabled:!1});x.translate(0,0,-(t+m*2)/2);let g=new Mt(x,pe(s));g.position.y=e,g.castShadow=!0,g.receiveShadow=!0,u.add(g);let p=new Es;p.moveTo(-i/2,0),p.lineTo(i/2,0),p.lineTo(0,e*.52),p.lineTo(-i/2,0);let _=new mr(p,{depth:t-.02,bevelEnabled:!1});_.translate(0,0,-(t-.02)/2);let v=new Mt(_,pe(n));if(v.position.y=e-.01,u.add(v),a){let w=st(.45,1.2,.45,B.terracotta===s?11097919:Oi(s,.8));w.position.set(i*.25,e+.3,-t*.15),u.add(w)}let y=st(.75,1.45,.08,r);y.position.set(0,0,t/2+.02),u.add(y);let D=wr(.04,6,4,B.yellow);D.position.set(.25,.72,t/2+.08),u.add(D);let E=l?16769184:13624046,R=l?{emissive:16765578,emissiveIntensity:1.2}:{};for(let w of[-1,1]){let b=st(.75,.7,.06,E,R);b.position.set(w*i*.3,1.1,t/2+.02),u.add(b);let I=st(.9,.08,.1,o);I.position.set(w*i*.3,1.06,t/2+.05),u.add(I);let H=st(.06,.7,.75,E,R);H.position.set(i/2+.02,1.1,w*t*.22),u.add(H)}let L=st(1.1,.12,.5,B.stone);if(L.position.set(0,0,t/2+.25),u.add(L),c){let w=st(i*.8,.15,1.4,B.woodLight);w.position.set(0,0,t/2+.7),u.add(w);for(let I of[-1,1]){let H=Ae(.06,.06,1.9,5,o);H.position.set(I*i*.38,.15,t/2+1.3),u.add(H)}let b=st(i*.85,.1,1.6,s);b.position.set(0,2.05,t/2+.75),b.rotation.x=.12,u.add(b)}return he(u)}function _a(i=4,t=B.white,e=.6){let n=new ut,s=Math.max(2,Math.round(i/.5));for(let r=0;r<=s;r++){let o=st(.08,e,.08,t);o.position.x=-i/2+r/s*i,n.add(o)}for(let r of[e*.35,e*.75]){let o=st(i,.06,.05,t);o.position.y=r,n.add(o)}return he(n)}function Bd(i,t=3,e=!0){let n=new ut,s=pn(e?i:t,e?t:i,B.asphalt,.01);n.add(s);let r=Math.floor(i/1.4);for(let o=0;o<r;o++){let a=pn(e?.6:.1,e?.1:.6,15855590,.015),c=-i/2+.7+o*1.4;e?a.position.x=c:a.position.z=c,n.add(a)}return n}function ba(i=B.woodDark){let t=new ut,e=st(1.6,.08,.45,i);e.position.y=.42,t.add(e);let n=st(1.6,.4,.06,i);n.position.set(0,.6,-.2),n.rotation.x=-.12,t.add(n);for(let s of[-.7,.7])for(let r of[-.18,.18]){let o=st(.07,.42,.07,4869980);o.position.set(s,0,r),t.add(o)}return he(t)}function zd(){let i=new ut;for(let[e,n,s,r]of[[0,-1,2.2,.15],[0,1,2.2,.15],[-1.05,0,.15,2],[1.05,0,.15,2]]){let o=st(s,.25,r,B.wood);o.position.set(e,0,n),i.add(o)}let t=st(2,.15,1.85,B.sand);return i.add(t),he(i)}function Hd(){let i=new ut;i.add(st(.07,.8,.07,B.woodDark));let t=st(.25,.22,.4,B.navy);t.position.y=.8,i.add(t);let e=st(.02,.15,.06,B.red);return e.position.set(.14,.9,.1),i.add(e),he(i)}function Vd(i=B.red){let t=new ut;t.add(pn(2.2,1.8,i,.02));for(let e=0;e<5;e++){let n=pn(.18,1.8,B.white,.025);n.position.x=-.88+e*.44,t.add(n)}for(let e=0;e<4;e++){let n=pn(2.2,.18,B.white,.026);n.position.z=-.66+e*.44,t.add(n)}return t}function Gd(){let i=new ut,t=st(1.5,.12,.85,B.white);t.position.y=.45,i.add(t);let e=st(1.4,.12,.75,14674677);e.position.y=.57,i.add(e);for(let s of[-.72,.72])for(let r of[-.4,.4]){let o=st(.07,1.1,.07,B.white);o.position.set(s,0,r),i.add(o)}for(let s=0;s<9;s++)for(let r of[-.4,.4]){let o=st(.03,.5,.03,B.white);o.position.set(-.6+s*.15,.57,r),i.add(o)}for(let s of[-.4,.4]){let r=st(1.5,.05,.05,B.white);r.position.set(0,1.07,s),i.add(r)}let n=st(.6,.06,.7,B.pink);return n.position.set(.35,.65,0),i.add(n),he(i)}function bh(){let i=new ut,t=st(.03,.9,.03,B.white);i.add(t);let e=st(.6,.02,.02,B.white);e.position.y=.9,i.add(e);let n=new ut;n.position.y=.88,i.add(n);let s=[B.yellow,12114162,B.pink,13166281,16179624];for(let r=0;r<5;r++){let o=r/5*Math.PI*2,a=st(.008,.25,.008,14540253);a.position.set(Math.cos(o)*.3,-.25,Math.sin(o)*.3),n.add(a);let c=Ee(.07,0,s[r],0,1,{emissive:s[r],emissiveIntensity:.6});c.position.set(Math.cos(o)*.3,-.3,Math.sin(o)*.3),n.add(c)}return i.userData.spin=n,i.userData.speed=.25,i.userData.update=r=>{n.rotation.y+=r*i.userData.speed},i}function Wd({w:i=1.1,d:t=2,color:e=B.blue,frame:n=B.wood}={}){let s=new ut,r=st(i,.35,t,n);s.add(r);let o=st(i-.1,.18,t-.1,B.white);o.position.y=.35,s.add(o);let a=st(i-.05,.1,t*.6,e);a.position.set(0,.5,t*.18),s.add(a);let c=st(i*.6,.12,.35,B.white);c.position.set(0,.53,-t/2+.3),s.add(c);let l=st(i,.9,.08,n);return l.position.set(0,0,-t/2),s.add(l),he(s)}function Mh({w:i=1.4,d:t=.9,h:e=.75,color:n=B.wood,round:s=!1}={}){let r=new ut,o=s?Ae(i/2,i/2,.08,10,n):st(i,.08,t,n);if(o.position.y=e-.08,r.add(o),s){r.add(Ae(.06,.08,e-.08,5,Oi(n,.85)));let a=Ae(.3,.32,.04,8,Oi(n,.85));r.add(a)}else for(let a of[-1,1])for(let c of[-1,1]){let l=st(.07,e-.08,.07,Oi(n,.85));l.position.set(a*(i/2-.08),0,c*(t/2-.08)),r.add(l)}return he(r)}function Xd(i=B.wood){let t=new ut,e=st(.45,.06,.45,i);e.position.y=.44,t.add(e);let n=st(.45,.5,.06,i);n.position.set(0,.5,-.2),t.add(n);for(let s of[-.19,.19])for(let r of[-.19,.19]){let o=st(.05,.44,.05,Oi(i,.85));o.position.set(s,0,r),t.add(o)}return he(t)}function qd(i=B.woodDark){let t=new ut,e=new ut;t.add(e);for(let o of[-.28,.28]){let a=yh(.9,.035,3,12,i,.9);a.rotation.z=Math.PI+1.12,a.position.set(0,.92,o),e.add(a)}let n=st(.6,.07,.6,i);n.position.y=.45,e.add(n);let s=st(.52,.08,.52,B.pink);s.position.y=.52,e.add(s);let r=st(.6,.75,.06,i);r.position.set(0,.55,-.28),r.rotation.x=-.18,e.add(r);for(let o of[-.27,.27])for(let a of[-.25,.25]){let c=st(.05,.38,.05,i);c.position.set(o,.08,a),e.add(c)}return t.userData.rock=e,he(t)}function wh(i=2.4,t=1.8,e=B.pink,n=B.cream,s=!1){let r=new ut;if(s){r.add(Ds(i/2,n,14,.008));let o=Ds(i/2-.15,e,14,.012);r.add(o)}else r.add(pn(i,t,n,.008)),r.add(pn(i-.25,t-.25,e,.012));return r}function Yd(i=1.2,t=1.8){let e=new ut,n=st(i,t,.35,B.woodDark);e.add(n);let s=ye(Math.round(i*100+t*10)),r=[B.red,B.navy,B.yellow,B.green,B.pink,B.teal,B.cream];for(let o=0;o<3;o++){let a=.15+o*(t/3),c=st(i-.06,.04,.33,B.wood);c.position.set(0,a-.04,.02),e.add(c);let l=-i/2+.08;for(;l<i/2-.15;){let h=s.range(.06,.12),u=s.range(.25,.42),d=st(h,u,.25,s.pick(r));d.position.set(l+h/2,a,.06),d.rotation.z=s()<.1?.15:0,e.add(d),l+=h+.01}}return he(e)}function Sh({h:i=1.5,shade:t=16508868,lit:e=!0,table:n=!1}={}){let s=new ut,r=n?.45:i;s.add(Ae(.12,.15,.04,8,9076596)),s.add(Ae(.02,.02,r,4,9076596));let o=Ae(.14,.24,.3,8,t,e?{emissive:16767392,emissiveIntensity:1.1}:{});if(o.position.y=r-.1,s.add(o),e){let a=Un(16766880,n?1.4:2.2,.5);a.position.y=r,s.add(a)}return he(s)}function Zd(i=13081198){let t=new ut,e=Ee(.15,0,i,.02);e.position.y=.15,e.scale.y=1.1,t.add(e);let n=Ee(.11,0,i,.02);n.position.y=.36,t.add(n);for(let r of[-.08,.08]){let o=Ee(.045,0,i);o.position.set(r,.45,0),t.add(o)}let s=Ee(.04,0,15257520);return s.position.set(0,.34,.1),t.add(s),he(t)}function $d(i=2.4){let t=new ut,e=st(i,.85,.6,B.white);t.add(e);let n=st(i+.05,.06,.65,14208964);n.position.y=.85,t.add(n);for(let s=0;s<Math.floor(i/.6);s++){let r=st(.1,.03,.03,10066329);r.position.set(-i/2+.3+s*.6,.65,.31),t.add(r)}return he(t)}function Jd(){let i=new ut;i.add(st(.7,.85,.6,15262942));let t=st(.72,.04,.62,4473924);t.position.y=.85,i.add(t);let e=Ae(.17,.15,.05,10,3355443);e.position.set(.12,.9,.05),i.add(e);let n=st(.25,.03,.04,3355443);return n.position.set(.4,.92,.05),i.add(n),he(i)}function Kd(){let i=new ut;i.add(st(.75,1.8,.65,15921386));let t=st(.73,.02,.02,12303291);t.position.set(0,1.15,.33),i.add(t);let e=st(.03,.4,.04,11184810);return e.position.set(.3,1.35,.34),i.add(e),he(i)}function Th(i=1){let t=new ut;t.add(Ae(.16*i,.12*i,.28*i,7,B.terracotta));for(let e=0;e<5;e++){let n=Bi(.07*i,.5*i,3,B.green);n.position.y=.25*i,n.rotation.z=(e-2)*.35,n.rotation.y=e*1.2,t.add(n)}return he(t)}function Eh(i=B.wood,t=null,e=.5,n=.4){let s=new ut;s.add(xh(e,n,.04,i));let r=new Mt(new Ve(e*.8,n*.8),t?new qe({map:t}):pe(15787736));return r.position.z=.025,s.add(r),s}function Qd(i=3){let t=new ut;if(i>=1){let e=Ee(.42,1,B.snow,.03);e.position.y=.36,t.add(e)}if(i>=2){let e=Ee(.3,1,B.snow,.03);e.position.y=.95,t.add(e)}if(i>=3){let e=Ee(.21,1,B.snow,.02);e.position.y=1.38,t.add(e)}if(i>=4){let e=Bi(.04,.22,5,15764538);e.rotation.x=Math.PI/2,e.position.set(0,1.38,.2),t.add(e);for(let n of[-.07,.07]){let s=wr(.025,5,4,2236962);s.position.set(n,1.45,.18),t.add(s)}for(let n=0;n<3;n++){let s=wr(.03,5,4,2236962);s.position.set(0,.85+n*.13,.29-Math.abs(n-1)*.02),t.add(s)}}if(i>=5){let e=yh(.22,.05,4,10,B.red);e.rotation.x=Math.PI/2,e.position.y=1.2,t.add(e);let n=Ae(.15,.15,.22,8,3355443);n.position.y=1.55,t.add(n);let s=Ae(.24,.24,.03,10,3355443);s.position.y=1.55,t.add(s);for(let r of[-1,1]){let o=Ae(.015,.02,.5,3,B.trunk);o.rotation.z=r*1.1,o.position.set(r*.28,1,0),t.add(o)}}return he(t)}function jd(i=10115658){let t=new ut;t.add(st(.5,.08,.38,i));let e=st(.47,.06,.35,B.white);return e.position.set(.01,.01,0),t.add(e),he(t)}function tf(i=B.white){let t=new ut;t.add(Ae(.06,.055,.12,8,i));let e=yh(.035,.012,4,8,i);return e.position.set(.065,.06,0),t.add(e),t}function ef(){let i=new ut,t=st(1.4,.75,.6,B.woodLight);i.add(t);let e=st(1.2,.35,.04,B.yellow);e.position.set(0,1.5,.25),i.add(e);for(let s of[-.65,.65]){let r=st(.06,1.7,.06,B.wood);r.position.set(s,0,.25),i.add(r)}let n=Ae(.12,.12,.3,8,16774048,{transparent:!0,opacity:.85});n.position.set(-.3,.75,0),i.add(n);for(let s=0;s<3;s++){let r=Ae(.05,.04,.12,6,B.white);r.position.set(.1+s*.15,.75,.05),i.add(r)}return he(i)}var _v={petals:{color:[16236751,16505058,15968445],size:.09,fall:.35,drift:.6,spin:2,shape:"flake",count:120},leaves:{color:[14916155,13787198,15646794,13072938],size:.12,fall:.6,drift:.8,spin:3,shape:"flake",count:110},snow:{color:[16777215,15922943],size:.06,fall:.55,drift:.35,spin:1,shape:"flake",count:260},rain:{color:[12374246],size:.02,fall:9,drift:.05,spin:0,shape:"streak",count:420},fireflies:{color:[16187290,14679930],size:.35,fall:0,drift:.35,spin:0,shape:"glow",count:40},motes:{color:[16774360],size:.14,fall:-.02,drift:.12,spin:0,shape:"glow",count:60},stars:{color:[16777215,16774352,14214399],size:.3,fall:0,drift:0,spin:0,shape:"glow",count:120},bubbles:{color:[14676735,16179455],size:.28,fall:-.4,drift:.5,spin:0,shape:"glow",count:25},memories:{color:[16771e3,16765152,14215935],size:.5,fall:-.25,drift:.3,spin:0,shape:"glow",count:50}},wa=class{constructor(t,e={}){let n={..._v[t],...e};this.k=n,this.kind=t,this.area=e.area??{w:30,h:12,d:30},this.center=e.center??null,this.y0=e.y0??0;let s=n.count;this.n=s;let r=ye(e.seed??7);this.p=new Float32Array(s*3),this.v=new Float32Array(s*3),this.ph=new Float32Array(s);for(let o=0;o<s;o++)this.p[o*3]=r.range(-.5,.5)*this.area.w,this.p[o*3+1]=this.y0+r.range(0,1)*this.area.h,this.p[o*3+2]=r.range(-.5,.5)*this.area.d,this.ph[o]=r.range(0,Math.PI*2);if(this.opacity=e.opacity??1,this.target=1,this.fade=1,n.shape==="glow"){let o=new we;o.setAttribute("position",new De(this.p.slice(),3));let a=new Float32Array(s*3),c=new At;for(let l=0;l<s;l++)c.setHex(n.color[l%n.color.length]),a.set([c.r,c.g,c.b],l*3);o.setAttribute("color",new De(a,3)),this.mat=new ws({size:n.size,map:ma(),vertexColors:!0,transparent:!0,opacity:this.opacity,depthWrite:!1,blending:un,sizeAttenuation:!0,fog:!1}),this.obj=new hr(o,this.mat),this.geo=o}else{let o=n.shape==="streak"?new He(.012,.35,.012):new Ve(n.size,n.size*.7);this.mat=new Ni({side:Me,flatShading:!0,transparent:!0,opacity:this.opacity,roughness:1,depthWrite:n.shape!=="streak"}),this.obj=new Bo(o,this.mat,s);let a=new At;for(let c=0;c<s;c++)a.setHex(n.color[c%n.color.length]),this.obj.setColorAt(c,a);this.dummy=new Re}this.obj.frustumCulled=!1,this.obj.renderOrder=5}setOpacity(t){this.target=t}update(t,e){let n=this.k,s=this.n;this.fade+=(this.target-this.fade)*Math.min(1,t*1.5),this.mat.opacity=this.opacity*this.fade,this.obj.visible=this.mat.opacity>.01;let r=this.center??T.renderer.camTarget,o=this.area;for(let a=0;a<s;a++){let c=a*3,l=this.ph[a];this.p[c]+=Math.sin(e*.7+l)*n.drift*t+(n.wind??0)*t,this.p[c+1]-=n.fall*t*(.7+.6*Math.sin(l)),this.p[c+2]+=Math.cos(e*.6+l*1.3)*n.drift*t,(this.kind==="fireflies"||this.kind==="motes"||this.kind==="memories")&&(this.p[c+1]+=Math.sin(e*1.3+l)*.15*t),this.p[c+1]<this.y0&&(this.p[c+1]+=o.h),this.p[c+1]>this.y0+o.h&&(this.p[c+1]-=o.h);let h=this.p[c],u=this.p[c+2];h<-o.w/2&&(this.p[c]+=o.w),h>o.w/2&&(this.p[c]-=o.w),u<-o.d/2&&(this.p[c+2]+=o.d),u>o.d/2&&(this.p[c+2]-=o.d)}if(this.geo){let a=this.geo.attributes.position;for(let c=0;c<s;c++){let l=1;(this.kind==="fireflies"||this.kind==="stars")&&(l=.5+.5*Math.sin(e*(this.kind==="stars"?1.2:2.5)+this.ph[c]*3)),a.setXYZ(c,r.x+this.p[c*3],this.p[c*3+1]-(1-l)*0,r.z+this.p[c*3+2])}a.needsUpdate=!0,(this.kind==="fireflies"||this.kind==="stars")&&(this.mat.size=n.size*(.85+.15*Math.sin(e*3)))}else{let a=this.dummy;for(let c=0;c<s;c++)a.position.set(r.x+this.p[c*3],this.p[c*3+1],r.z+this.p[c*3+2]),n.spin?a.rotation.set(e*n.spin*.5+this.ph[c],e*n.spin*.3+this.ph[c]*2,this.ph[c]):a.rotation.set(0,0,.12),a.updateMatrix(),this.obj.setMatrixAt(c,a.matrix);this.obj.instanceMatrix.needsUpdate=!0}}dispose(){this.obj.geometry.dispose(),this.mat.dispose()}},Sa=class{constructor(t,{color:e=16773312,count:n=40,speed:s=2,life:r=1.6,size:o=.3}={}){this.life=r,this.t=0,this.n=n;let a=new we;this.p=new Float32Array(n*3),this.v=new Float32Array(n*3);for(let c=0;c<n;c++){this.p.set([t.x,t.y,t.z],c*3);let l=Math.random()*Math.PI*2,h=Math.random()*Math.PI-Math.PI/4,u=s*(.4+Math.random());this.v.set([Math.cos(l)*Math.cos(h)*u,Math.abs(Math.sin(h))*u+.5,Math.sin(l)*Math.cos(h)*u],c*3)}a.setAttribute("position",new De(this.p,3)),this.mat=new ws({size:o,color:e,map:ma(),transparent:!0,depthWrite:!1,blending:un,fog:!1}),this.obj=new hr(a,this.mat),this.obj.frustumCulled=!1,this.geo=a}update(t){this.t+=t;for(let e=0;e<this.n;e++){let n=e*3;this.v[n+1]-=t*.8,this.v[n]*=.985,this.v[n+2]*=.985,this.p[n]+=this.v[n]*t,this.p[n+1]+=this.v[n+1]*t,this.p[n+2]+=this.v[n+2]*t}return this.geo.attributes.position.needsUpdate=!0,this.mat.opacity=Math.max(0,1-this.t/this.life),this.t>=this.life}dispose(){this.geo.dispose(),this.mat.dispose()}};var Us=class{constructor({bounds:t={minX:-9,maxX:9,minZ:-9,maxZ:9},name:e=""}={}){this.name=e,this.root=new ut,this.bounds=t,this.colliders=[],this.characters=new Set,this.hotspots=[],this.updatables=[],this.particles=[],this.bursts=[],this.creatures=[],this.disposed=!1,T.scene.add(this.root)}add(t,e=0,n=0,{ry:s=0,s:r=1,y:o=0,collide:a=!1,parent:c=null}={}){if(t.position.set(e,o,n),t.rotation.y=s,r!==1&&t.scale.setScalar(r),(c??this.root).add(t),a!==!1&&a!==void 0)if(typeof a=="number")this.addCollider({x:e,z:n,r:a*(r||1),obj:t});else{let l=Math.round(s/(Math.PI/2))%2!==0,h=(l?a.d:a.w)*r,u=(l?a.w:a.d)*r;this.addCollider({minX:e-h/2+(a.ox??0),maxX:e+h/2+(a.ox??0),minZ:n-u/2+(a.oz??0),maxZ:n+u/2+(a.oz??0),obj:t})}return this.track(t),t}track(t){t.traverse(e=>{e.userData&&typeof e.userData.update=="function"&&!this.updatables.includes(e)&&this.updatables.push(e)})}addCollider(t){return this.colliders.push(t),t}removeCollider(t){let e=this.colliders.indexOf(t);e>=0&&this.colliders.splice(e,1)}removeCollidersOf(t){this.colliders=this.colliders.filter(e=>e.obj!==t)}remove(t){this.removeCollidersOf(t),t.parent?.remove(t),this.updatables=this.updatables.filter(e=>{let n=e;for(;n;){if(n===t)return!1;n=n.parent}return!0})}addCharacter(t){this.characters.add(t),this.root.add(t.root)}removeCharacter(t){this.characters.delete(t)}particlesOf(t,e){let n=new wa(t,e);return this.particles.push(n),this.root.add(n.obj),n}removeParticles(t){let e=this.particles.indexOf(t);e>=0&&this.particles.splice(e,1),t.obj.parent?.remove(t.obj),t.dispose()}burst(t,e){let n=new Sa(t,e);return this.bursts.push(n),this.root.add(n.obj),n}hotspot(t){let e=new Ah(this,t);return this.hotspots.push(e),e}getHotspot(t){return this.hotspots.find(e=>e.id===t)}butterflies(t=3,e={x:0,z:0,r:6},n=1){let s=ye(n);for(let r=0;r<t;r++){let o=new Rh(s.pick([16172101,15921906,10143984,15964848]),e,n+r);this.creatures.push(o),this.root.add(o.obj)}}birds(t=5,e=1){let n=new Ch(t,e);return this.creatures.push(n),this.root.add(n.obj),n}resolve(t,e,n=.3){let s=this.bounds;for(let r=0;r<3;r++)for(let o of this.colliders)if(!o.disabled)if(o.r!==void 0){let a=t-o.x,c=e-o.z,l=Math.hypot(a,c),h=o.r+n;l<h&&l>1e-5&&(t=o.x+a/l*h,e=o.z+c/l*h)}else{let a=Zt(t,o.minX,o.maxX),c=Zt(e,o.minZ,o.maxZ),l=t-a,h=e-c,u=Math.hypot(l,h);if(u<n)if(u>1e-5)t=a+l/u*n,e=c+h/u*n;else{let d=t-o.minX,f=o.maxX-t,m=e-o.minZ,x=o.maxZ-e,g=Math.min(d,f,m,x);g===d?t=o.minX-n:g===f?t=o.maxX+n:g===m?e=o.minZ-n:e=o.maxZ+n}}return t=Zt(t,s.minX+n,s.maxX-n),e=Zt(e,s.minZ+n,s.maxZ-n),{x:t,z:e}}update(t,e){for(let n of this.characters)n.update(t,e);for(let n of this.updatables)n.userData.update(t,e);for(let n of this.particles)n.update(t,e);for(let n of this.hotspots)n.update(t,e);for(let n of this.creatures)n.update(t,e);this.bursts=this.bursts.filter(n=>{let s=n.update(t);return s&&(n.obj.parent?.remove(n.obj),n.dispose()),!s})}dispose(){this.disposed=!0;for(let t of this.hotspots)t.destroy();for(let t of this.particles)t.dispose();T.scene.remove(this.root),this.root.traverse(t=>{t.geometry&&!t.geometry.parameters&&t.geometry.dispose?.()})}},nf={little:16773842,story:16763243,work:9422079,exit:16777215,quiet:14214911},Ah=class{constructor(t,e){this.world=t,Object.assign(this,{id:e.id,label:e.label??"",kind:e.kind??"little",radius:e.radius??1.1,enabled:e.enabled??!0,done:!1,def:e}),this.anchor=e.anchor??null,this.offset=new C(...e.offset??[0,0,0]),this.pos=new C(e.x??0,e.y??0,e.z??0),this.obj=new ut;let n=nf[this.kind]??nf.little;this.glow=Un(n,this.kind==="story"?1.5:1.15,.85),this.core=Un(16777215,.35,.9),this.obj.add(this.glow,this.core),this.sparks=[];for(let s=0;s<5;s++){let r=Un(n,.16,.8);this.obj.add(r),this.sparks.push({s:r,ph:s/5})}this.ring=new Mt(new Xo(.42,.48,24),new qe({color:n,transparent:!0,opacity:0,depthWrite:!1,fog:!1})),this.ring.rotation.x=-Math.PI/2,t.root.add(this.obj),t.root.add(this.ring),this.alpha=this.enabled?1:0,this.t=Math.random()*10,this.near=!1}get position(){if(this.anchor){let t=this.anchor.position??this.anchor;return new C(t.x,0,t.z).add(this.offset)}return this.pos}setEnabled(t){this.enabled=t}complete(){this.done=!0,this.enabled=!1}update(t,e){this.t+=t;let n=this.enabled&&!this.done?1:0;this.alpha+=(n-this.alpha)*Math.min(1,t*3);let s=this.position,r=this.def.height??(this.anchor?.height?this.anchor.height+.25:1);this.obj.position.set(s.x,r+Math.sin(this.t*2)*.08,s.z);let o=this.kind==="work"?.75+.25*Math.sign(Math.sin(this.t*6)):.85+Math.sin(this.t*2.5)*.15;this.glow.material.opacity=this.alpha*.85*o*(this.near?1.25:1),this.glow.scale.setScalar((this.kind==="story"?1.5:1.15)*(this.near?1.25:1)*(.95+.05*Math.sin(this.t*3))),this.core.material.opacity=this.alpha*.9;for(let a of this.sparks){let c=(this.t*.35+a.ph)%1,l=a.ph*Math.PI*2+this.t*.5;a.s.position.set(Math.cos(l)*.35,-.6+c*1.3,Math.sin(l)*.35),a.s.material.opacity=this.alpha*Math.sin(c*Math.PI)*.8}this.ring.position.set(s.x,.03,s.z),this.ring.material.opacity=this.alpha*(this.near?.55:.18),this.ring.scale.setScalar(1+(this.near?.15*Math.sin(this.t*4):0)),this.obj.visible=this.alpha>.01,this.ring.visible=this.obj.visible}destroy(){this.obj.parent?.remove(this.obj),this.ring.parent?.remove(this.ring)}},Rh=class{constructor(t,e,n){let s=ye(n*13);this.obj=new ut;let r=new Ve(.16,.12);r.translate(.08,0,0);let o=pe(t,{side:Me,emissive:t,emissiveIntensity:.2});this.l=new Mt(r,o),this.r=new Mt(r,o),this.r.scale.x=-1,this.l.rotation.x=this.r.rotation.x=-Math.PI/2;let a=new ut;a.add(this.l);let c=new ut;c.add(this.r),this.wl=a,this.wr=c,this.obj.add(a,c),this.area=e,this.ph=s.range(0,10),this.sp=s.range(.25,.45),this.obj.scale.setScalar(1.3)}update(t,e){let n=this.area,s=e*this.sp+this.ph,r=n.x+Math.sin(s)*n.r*.8+Math.sin(s*2.3)*.8,o=n.z+Math.cos(s*.8)*n.r*.8+Math.cos(s*1.7)*.8,a=.8+Math.sin(s*3.1)*.35,c=r-this.obj.position.x,l=o-this.obj.position.z;this.obj.position.set(r,a,o),this.obj.rotation.y=Math.atan2(c,l)-Math.PI/2;let h=Math.sin(e*18+this.ph)*1.1;this.wl.rotation.z=h,this.wr.rotation.z=-h}get position(){return this.obj.position}},Ch=class{constructor(t,e){this.obj=new ut,this.birds=[];let n=ye(e);for(let s=0;s<t;s++){let r=new ut,o=new Ve(.3,.1);o.translate(.15,0,0);let a=pe(3816008,{side:Me}),c=new Mt(o,a),l=new Mt(o,a);l.scale.x=-1,c.rotation.x=l.rotation.x=-Math.PI/2;let h=new ut;h.add(c);let u=new ut;u.add(l),r.add(h,u),this.obj.add(r),this.birds.push({b:r,gl:h,gr:u,off:new C(n.range(-2,2),n.range(-.6,.6),n.range(-2,2)),ph:n.range(0,6)})}this.t=n.range(0,30),this.period=26}update(t,e){this.t+=t;let n=this.t%this.period/this.period,s=T.renderer.camTarget,r=s.x-30+n*60,o=s.z+12-n*24,a=7+Math.sin(n*6)*.5;for(let c of this.birds){c.b.position.set(r+c.off.x,a+c.off.y,o+c.off.z),c.b.rotation.y=-Math.PI/4-Math.PI/2+Math.PI;let l=Math.sin(this.t*10+c.ph)*.8;c.gl.rotation.z=l,c.gr.rotation.z=-l}}};var bv=[8,9,8,7,7,6.5,3.5,6.5,9],Ta=class{constructor(t){this.scenes=t,this.index=0,this.current=null,this.ctx=null,this.control=!1,this.inMoment=!1,this.moveTarget=null,this.pendingHotspot=null,this.stepT=0,this.clock=null,this.menuOpen=!1,this.reachedChapter=1}keepWindow(){return this.current?.keepWindow??bv[this.current?.chapter??0]??7}setControl(t){this.control=t,t||(this.moveTarget=null,T.ui.setPrompt(null),T.player&&(T.player._playerMoving=!1))}renderNow(){T.renderer.render()}async start(t=0){this.index=t,this.runToken=(this.runToken||0)+1;let e=this.runToken;for(;this.index<this.scenes.length&&e===this.runToken;){let n=this.scenes[this.index];this.reachedChapter=Math.max(this.reachedChapter,n.chapter),T.album.forgetFrom(this.scenes.slice(this.index).map(s=>s.id)),T.album.save(this.index);try{localStorage.setItem("lm.reached",String(this.reachedChapter))}catch{}if(await this.runScene(n,e),e!==this.runToken)return;this.index++}}async runScene(t,e){let n=T.ui;this.setControl(!1),T.world&&T.world.dispose(),T.renderer.overrides={},T.timeScale=1;let s=new Us({bounds:t.bounds??{minX:-9,maxX:9,minZ:-9,maxZ:9},name:t.id});T.world=s,T.player=null,this.current=t;let r={def:t,world:s,flags:T.state.flags,director:this};this.ctx=r,r.passTime=a=>this.passTime(a),r.hotspot=a=>s.getHotspot(a),r.done=a=>!!s.getHotspot(a)?.done,r.end=()=>{this.sceneOver=!0},this.sceneOver=!1,t.build(r);let o=T.renderer;o.camBounds=t.camBounds??null,o.zoomGoal=t.zoom??14,T.player?o.setFollow(T.player):o.setFollow(null),t.camAt&&(o.follow=null,o.camGoal.set(t.camAt[0],0,t.camAt[1])),o.snapCamera(),t.mood&&o.setMood(t.mood,0);for(let a of t.moments??[]){a.caption&&T.album.register(a.caption.id??a.id,t.chapter,Fe(a.caption.text??a.caption),t.id);let c=a.anchor?a.anchor(r):null,l=s.hotspot({id:a.id,label:a.label,kind:a.kind??"little",x:a.at?.[0],z:a.at?.[1],radius:a.radius??1.2,anchor:c,height:a.height,offset:a.offset,enabled:!1});l.m=a}if(this.refreshHotspots(),this.clock=t.clock?{seconds:t.clock.seconds,t:0,over:!1,ages:t.ages??[0,1]}:null,n.clock(!!this.clock),t.ages&&n.setClock(0,Math.floor(t.ages[0])),n.showHud(!0),t.music&&T.audio.music(t.music,{intensity:t.intensity??.4}),t.ambience&&T.audio.ambience(t.ambience),t.card&&(await n.fade(1,1.2,"#16121a"),await n.chapterCard(t.card)),t.intro?await this.safe(()=>t.intro(r)):await n.fadeIn(1.5),e===this.runToken&&!((t.moments?.length||t.freeRoam)&&(this.setControl(!0),t.hint&&!this.hintShown?.[t.id]&&n.hint(t.hint,9),await new Promise(a=>{this.sceneResolve=a}),e!==this.runToken))){this.setControl(!1);for(let a of s.hotspots)!a.done&&a.m?.caption&&T.album.lose(a.m.caption.id??a.m.id);t.outro&&await this.safe(()=>t.outro(r)),e===this.runToken&&n.clock(!1)}}async safe(t){try{await t()}catch(e){console.error("[scene error]",e)}}refreshHotspots(){let t=T.world;if(t)for(let e of t.hotspots){if(e.done)continue;let n=e.m;if(!n)continue;let s=!0;n.requires&&(s=n.requires.every(r=>t.getHotspot(r)?.done)),s&&n.when&&(s=!!n.when(this.ctx)),this.clock?.over&&(n.kind??"little")==="little"&&(s=!1),s&&!e.enabled?(e.setEnabled(!0),this.control&&T.audio.sfx("chime",{vol:.35})):!s&&e.enabled&&e.setEnabled(!1)}}async runMoment(t){if(this.inMoment)return;let e=this.current,n=this.ctx;this.inMoment=!0,this.setControl(!1),T.ui.hideHint(),t.near=!1;let s=t.m;s.once!==!1&&t.complete();try{await s.run(n,t)}catch(o){console.error("[moment error]",s.id,o)}if(s.once===!1&&t.setEnabled(!0),t.done=s.once!==!1,this.inMoment=!1,T.world!==n.world)return;if(this.refreshHotspots(),(e.final?n.world.getHotspot(e.final)?.done:!1)||this.sceneOver||e.exitWhen&&e.exitWhen(n)){this.finishFreeRoam();return}this.setControl(!0)}finishFreeRoam(){let t=this.sceneResolve;this.sceneResolve=null,t&&t()}passTime(t){this.clock&&(this.clock.t=Math.min(this.clock.seconds,this.clock.t+t))}async timeUp(){let t=this.current,e=this.ctx;this.clock.over=!0,this.inMoment=!0,this.setControl(!1);for(let s of T.world.hotspots)!s.done&&(s.m?.kind??"little")==="little"&&(s.setEnabled(!1),s.done=!0,s.m?.caption&&T.album.lose(s.m.caption.id??s.m.id));T.audio.sfx("lost",{vol:.6});try{t.onTimeUp?await t.onTimeUp(e):await T.ui.lower(t.timeUpText??"And just like that, the day was gone.")}catch(s){console.error(s)}if(this.inMoment=!1,this.refreshHotspots(),!T.world.hotspots.some(s=>!s.done&&s.enabled)||this.sceneOver){this.finishFreeRoam();return}this.setControl(!0)}update(t,e){let n=T.player,s=T.input,r=T.renderer;if(!T.world)return;if(this.clock&&!this.clock.over){this.control&&!this.inMoment&&(this.clock.t+=e);let d=Zt(this.clock.t/this.clock.seconds,0,1),f=this.clock.ages,m=Ye(f[0],f[1],d);T.ui.setClock(d,Math.floor(m),d>.85),d>=1&&!this.inMoment&&this.control&&this.timeUp()}if(!n)return;let o=null,a=1/0;if(this.control&&!this.inMoment){for(let d of T.world.hotspots){if(!d.enabled||d.done){d.near=!1;continue}let f=d.position,m=vr(f.x,f.z,n.position.x,n.position.z);d.near=!1,m<d.radius&&m<a&&(a=m,o=d)}o&&(o.near=!0)}if(T.ui.promptTarget!==o&&T.ui.setPrompt(o),!this.control)return;if(T.auto&&!this.inMoment){let f=T.world.hotspots.find(m=>m.enabled&&!m.done&&(T.autoSkip?m.kind!=="little":!0)&&m.kind!=="work")??T.world.hotspots.find(m=>m.enabled&&!m.done);if(f){let m=f.position,x=T.world.resolve(m.x+.3,m.z+.3,n.radius);n.position.x=x.x,n.position.z=x.z,T.log?.push("moment: "+f.id),this.runMoment(f)}return}if(!this.inMoment&&o&&(s.pressed("act")||T.ui.promptClicked)){s.consume("act"),T.ui.promptClicked=!1,this.runMoment(o);return}if(T.ui.promptClicked=!1,this.pendingHotspot&&this.pendingHotspot===o){this.pendingHotspot=null,this.moveTarget=null,this.runMoment(o);return}for(let d of s.clicks){let f=null;for(let m of T.world.hotspots){if(!m.enabled||m.done)continue;let x=m.position.clone();x.y=m.def.height??1;let g=r.project(x);Math.hypot(g.x-d.x,g.y-d.y)<46&&(f=m)}if(f){this.pendingHotspot=f;let m=f.position;this.moveTarget=new C(m.x,0,m.z)}else{let m=r.unproject(d.x,d.y,0);m&&(this.moveTarget=m,this.pendingHotspot=null)}}if(s.pointer.down&&s.pointer.moved){let d=r.unproject(s.pointer.x,s.pointer.y,0);d&&(this.moveTarget=d,this.pendingHotspot=null)}let c=s.axis(),l=n.walkSpeed*(this.current.speedMul??1),h=0,u=0;if(c.x||c.y){let{fwd:d,right:f}=r.groundBasis();h=f.x*c.x+d.x*c.y,u=f.z*c.x+d.z*c.y;let m=Math.hypot(h,u);h/=m,u/=m,this.moveTarget=null,this.pendingHotspot=null}else if(this.moveTarget){let d=this.moveTarget.x-n.position.x,f=this.moveTarget.z-n.position.z,m=Math.hypot(d,f),x=this.pendingHotspot?Math.max(.2,this.pendingHotspot.radius*.6):.12;m<x?this.moveTarget=null:(h=d/m,u=f/m)}if(h||u){let d=n.position.x+h*l*t,f=n.position.z+u*l*t,m=T.world.resolve(d,f,n.radius),x=Math.hypot(m.x-n.position.x,m.z-n.position.z);this.moveTarget&&x<l*t*.1?(this.stuck=(this.stuck||0)+t,this.stuck>.4&&(this.moveTarget=null,this.stuck=0)):this.stuck=0,n.position.x=m.x,n.position.z=m.z,n.targetHeading=Math.atan2(h,u),n.speed=l,n._playerMoving=!0,this.stepT-=t*l,this.stepT<=0&&(this.stepT=n.age<1.3?.5:.62,T.audio.sfx("step",{surface:this.current.surface??"grass",vol:n.age<3?.5:1}))}else n._playerMoving=!1}toggleMenu(){if(T.album.open){T.album.hide();return}if(this.menuOpen)return this.closeMenu();if(!this.current)return;this.menuOpen=!0,T.paused=!0,T.audio.duck(.45);let t=document.querySelector("#menu");t.innerHTML="",t.classList.remove("hidden");let e=wt("div","panel");e.appendChild(wt("h2","","Paused"));let n=(a,c)=>{let l=wt("button","",a);return l.addEventListener("click",c),e.appendChild(l),l};n("Continue",()=>this.closeMenu()),n("Album",()=>{this.closeMenu(),this.openAlbum()});let s=(a,c)=>{let l=wt("label","",`<span>${a}</span>`),h=wt("input");h.type="range",h.min=0,h.max=1,h.step=.05,h.value=T.audio.vol[c],h.addEventListener("input",()=>T.audio.setVolume(c,parseFloat(h.value))),l.appendChild(h),e.appendChild(l)};s("Music","music"),s("Sound","sfx"),s("Ambience","amb");let r=wt("label","","<span>Auto-advance text</span>"),o=wt("input");o.type="checkbox",o.checked=T.ui.settings.auto,o.addEventListener("change",()=>{T.ui.settings.auto=o.checked,T.ui.saveSettings()}),r.appendChild(o),e.appendChild(r),n("Replay this scene",()=>{this.closeMenu(),this.restartScene()}),n("Return to title",()=>{this.closeMenu(),this.onTitle&&this.onTitle()}),e.appendChild(wt("div","small",`${fh[this.current.chapter]??""}<br>Move: WASD / arrows / click \xB7 Interact: Space / click \xB7 Keep: hold Space`)),t.appendChild(e)}closeMenu(){this.menuOpen=!1,T.paused=!1,T.audio.duck(1),document.querySelector("#menu").classList.add("hidden")}openAlbum(){T.paused=!0,T.album.show(this.current?.chapter??1,{reachedChapter:this.reachedChapter,onClose:()=>{this.menuOpen||(T.paused=!1)}})}restartScene(){this.abort(),this.start(this.index)}abort(){this.runToken=(this.runToken||0)+1,this.sceneResolve=null,this.inMoment=!1,T.updaters.clear(),T.realUpdaters.clear(),T.ui.mgEl.innerHTML="",T.ui.bubblesEl.innerHTML="",T.ui.bubbles=[],T.ui.narrEl.innerHTML="",T.ui.lowerEl.innerHTML="",T.ui.choicesEl.classList.add("hidden"),T.ui.keepEl.classList.add("hidden"),T.ui.setPrompt(null),document.querySelector("#card").classList.add("hidden"),T.timeScale=1}};var Ar=(i,t)=>T.ui.narrate(i,t),me=(i,t)=>T.ui.lower(i,t),Se=(i,t,e)=>T.ui.say(i,t,e),Ea=(i,t)=>T.ui.say(T.player,i,{thought:!0,...t}),sf=(i,t)=>T.ui.choose(i,t);var Rr=(i=1.5,t="#000")=>T.ui.fadeOut(i,t),Cr=(i=1.5)=>T.ui.fadeIn(i);var Ns=(i,t=2,e=null)=>T.renderer.setMood(i,t,e),Vi=(i,t)=>T.audio.music(i,t),rf=(i,t=2)=>T.audio.setIntensity(i,t),Pr=(i,t=3)=>T.audio.ambience(i,t),ue=(i,t)=>T.audio.sfx(i,t);function en(i,t,e=null,n=2){return T.renderer.cameraTo({x:i,y:0,z:t},e,n)}function yi(i=T.player,t=null,e=1.5){return T.renderer.setFollow(i),t?T.renderer.zoomTo(t,e):Promise.resolve()}function ks(i,t=2){return T.renderer.zoomTo(i,t)}function of(i){return new Promise(t=>{let e=n=>{i(n)&&(T.realUpdaters.delete(e),t())};T.realUpdaters.add(e)})}function Ph(i){let t=0;return of(e=>(t+=e)>=i)}async function mn(i,t,{window:e=null,chapter:n=null,focus:s=null,holdTime:r=1.5}={}){let o=T.album,a=n??T.director.current?.chapter??0;if(t=Fe(t),o.register(i,a,t,T.director.current?.id),o.has(i))return!0;let c=e??T.director.keepWindow(),l=T.ui,h=T.renderer,u=l.keepEl,d=u.querySelector(".fill"),f=u.querySelector(".timer div"),m=u.querySelector(".msg");m.innerHTML=T.input.lastDevice==="touch"?"Hold the screen to keep this moment":"Hold <b>Space</b> to keep this moment",u.classList.remove("hidden","lost","show"),u.offsetWidth,u.classList.add("show"),d.style.strokeDashoffset=251.3,ue("chime");let x=T.timeScale;fn(.6,y=>{T.timeScale=Ye(x,.3,y)}),h.pulse("saturation",1.22,.8),h.pulse("dream",.35,.8),h.pulse("vignette",-.12,.8),h.pulse("warmth",.15,.8);let g=T.audio.intensityTarget;T.audio.setIntensity(Math.min(1,g+.3),1.2),s&&(h.overrides.focusX=s.x,h.overrides.focusY=s.y);let p=0,_=c,v=!1;if(T.input.endFrame(),await of(y=>T.auto?(v=T.autoKeep!==!1,!0):(T.input.holding()?p+=y/r:p=Math.max(0,p-y*.6),p<=.001&&(_-=y),d.style.strokeDashoffset=251.3*(1-Zt(p,0,1)),f.style.transform=`scaleX(${Zt(_/c,0,1)})`,p>=1?(v=!0,!0):_<=0)),v){T.director.renderNow();let y=h.snapshot(360,270);l.flash(.9),ue("shutter"),ue("keep");let D=T.player?T.player.position.clone().add(new C(0,1,0)):h.camTarget.clone();T.world?.burst(D,{count:50,color:16770224}),o.keep(i,t,a,y),u.classList.remove("show"),u.classList.add("hidden"),l.flyPolaroid(y,t),await Ph(.4)}else u.classList.add("lost"),ue("lost"),o.lose(i),await Ph(1.6),u.classList.remove("show","lost"),u.classList.add("hidden");return fn(1.2,y=>{T.timeScale=Ye(.3,x===.3?1:x,y)}),h.pulse("saturation",1,1.5),h.pulse("dream",0,1.5),h.pulse("vignette",0,1.5),h.pulse("warmth",0,1.5),delete h.overrides.focusX,delete h.overrides.focusY,T.audio.setIntensity(g,3),await Ph(v?1:.3),v}async function Ir(i,t=2,e=.25){for(let n=0;n<t;n++)await fn(.35,s=>{i.extraY=Math.sin(s*Math.PI)*e},s=>s);i.extraY=0}function vi(i){let t=wt("div","mgbox");return i&&t.appendChild(wt("div","mglabel",i)),T.ui.mgEl.appendChild(t),t}function _i(i){i.style.transition="opacity 0.5s",i.style.opacity="0",setTimeout(()=>i.remove(),520)}var Mv=()=>T.input.lastDevice==="touch"?"Hold the screen":"Hold Space",wv=()=>T.input.lastDevice==="touch"?"Tap":"Press Space";async function af({label:i=null,seconds:t=3,onProgress:e=null,drain:n=.35}={}){if(T.auto){e&&e(1,!0,.1),await Qt(.3);return}let s=vi(i??Mv()),r=wt("div","meter"),o=wt("div");r.appendChild(o),s.appendChild(r);let a=0;await Ze(c=>(T.input.holding()?a+=c/t:a-=c*n/t,a=Zt(a,0,1),o.style.width=a*100+"%",e&&e(a,T.input.holding(),c),a>=1)),_i(s)}async function Ih({label:i=null,count:t=5,onTap:e=null,timeout:n=null}={}){if(T.auto){for(let u=1;u<=t;u++)e&&e(u),await Qt(.05);return t}let s=vi(i??wv()),r=wt("div","mgkeys"),o=wt("div","mgkey",T.input.lastDevice==="touch"?"Tap":"Space");r.appendChild(o),s.appendChild(r);let a=wt("div","counter",`0 / ${t}`);s.appendChild(a);let c=0,l=0,h=!1;return o.addEventListener("pointerdown",u=>{u.stopPropagation(),h=!0}),await Ze(u=>{l+=u;let d=T.input;return(d.pressed("act")||d.pressed("pointer")||h)&&(h=!1,d.consume("act"),d.consume("pointer"),c++,o.classList.remove("on"),o.offsetWidth,o.classList.add("on"),setTimeout(()=>o.classList.remove("on"),120),a.textContent=`${c} / ${t}`,e&&e(c)),c>=t||n&&l>n}),_i(s),c}async function cf({label:i="Press Space with the music",hits:t=6,period:e=null,onlyDownbeat:n=!1,onHit:s=null,onPulse:r=null,window:o=.22,maxPulses:a=null}={}){if(T.auto){for(let v=1;v<=t;v++)r&&r(v),s&&s(v,1),await Qt(.1);return t}let c=vi(i),l=wt("div","pulse"),h=wt("div","dot"),u=wt("div","ring");l.appendChild(h),l.appendChild(u),c.appendChild(l);let d=wt("div","hearts");c.appendChild(d);for(let v=0;v<t;v++)d.appendChild(wt("span","","\u25CB"));let f=0,m=!1,x=0,g=-1,p=T.realTime;l.addEventListener("pointerdown",v=>{v.stopPropagation(),m=!0});let _=!1;return await Ze(()=>{let v,y,D;if(e){let L=T.realTime-p;v=L%e/e,D=Math.floor(L/e),y=Math.min(v,1-v)*e}else{let L=T.audio.beatInfo(),w=n?L.dur*L.beats:L.dur;n?(v=(L.barBeat+L.phase)/L.beats,D=Math.floor(L.beat/L.beats)):(v=L.phase,D=L.beat),y=Math.min(v,1-v)*w}D!==g&&(g=D,x++,_=!1,r&&r(x));let E=1+(1-v)*.9;u.style.transform=`scale(${E})`,u.style.opacity=.3+v*.7,h.style.transform=`scale(${.8+(y<o?.4:0)})`;let R=T.input;return(R.pressed("act")||R.pressed("pointer")||m)&&(m=!1,R.consume("act"),R.consume("pointer"),y<o&&!_?(_=!0,f++,d.children[f-1].textContent="\u25CF",l.classList.remove("hit"),l.offsetWidth,l.classList.add("hit"),T.audio.sfx("good",{deg:[1,3,5,8,5,3,1,8][f%8]}),s&&s(f,1-y/o)):(T.audio.sfx("miss"),s&&s(f,-1))),f>=t||a&&x>=a}),_i(c),f}async function lf({label:i="Keep your balance \u2014 \u2190 \u2192",seconds:t=4,difficulty:e=1,onUpdate:n=null}={}){if(T.auto){n&&n(0,1,!0),await Qt(.3);return}let s=vi(i),r=wt("div","balance");r.innerHTML='<div class="bar"></div><div class="zone"></div><div class="ball"></div>',s.appendChild(r);let o=wt("div","touchpads"),a=wt("div","mgkey","\u2190"),c=wt("div","mgkey","\u2192");o.appendChild(a),o.appendChild(c),s.appendChild(o);let l=0,h=v=>y=>{y.stopPropagation(),l=v};a.addEventListener("pointerdown",h(-1)),c.addEventListener("pointerdown",h(1));let u=()=>{l=0};window.addEventListener("pointerup",u);let d=wt("div","meter"),f=wt("div");d.appendChild(f),s.appendChild(d);let m=r.querySelector(".ball"),x=.1,g=0,p=0,_=0;await Ze(v=>{_+=v;let y=T.input.axis().x+l,D=Math.sin(_*1.7)*.6+Math.sin(_*3.1+1)*.4;g+=(D*.55*e+x*.9*e+y*2.4)*v,g*=Math.pow(.15,v),x=Zt(x+g*v*1.6,-1,1),Math.abs(x)>=1&&(g*=-.3);let E=Math.abs(x)<.24;return p=Zt(p+(E?v/t:-v/t*.25),0,1),m.style.left=(x+1)/2*100+"%",f.style.width=p*100+"%",n&&n(x,p,E),p>=1}),window.removeEventListener("pointerup",u),_i(s)}var Sv={left:"\u2190",right:"\u2192",up:"\u2191",down:"\u2193"};async function hf({label:i="Follow along",keys:t=["left","right","up"],onStep:e=null}={}){if(T.auto){for(let l=0;l<t.length;l++)e&&e(l),await Qt(.1);return}let n=vi(i),s=wt("div","mgkeys");n.appendChild(s);let r=t.map(l=>{let h=wt("div","mgkey",Sv[l]??l);return s.appendChild(h),h}),o=0,a=null;r.forEach((l,h)=>l.addEventListener("pointerdown",u=>{u.stopPropagation(),a=h}));let c=()=>r.forEach((l,h)=>{l.classList.toggle("on",h===o),l.classList.toggle("done",h<o)});c(),await Ze(()=>{let l=T.input,h=null;for(let u of["left","right","up","down"])l.pressed(u)&&(h=u);return a!==null&&(h=a===o?t[o]:"__wrong",a=null),h&&(h===t[o]?(T.audio.sfx("good",{deg:[1,2,3,5,6,8,9,10][o%8]}),e&&e(o),o++,c()):(T.audio.sfx("miss"),r[o].classList.remove("wrong"),r[o].offsetWidth,r[o].classList.add("wrong"))),o>=t.length}),await Qt(.3),_i(n)}async function Gi({label:i="Just be here. Don't press anything.",seconds:t=6,onProgress:e=null}={}){if(T.auto){e&&e(1,.1),await Qt(.3);return}let n=vi(i),s=wt("div","still");s.innerHTML='<svg viewBox="0 0 100 100"><circle class="track" cx="50" cy="50" r="40"/><circle class="fill" cx="50" cy="50" r="40"/></svg>',n.appendChild(s);let r=s.querySelector(".fill"),o=0,a=0;T.input.endFrame(),await Ze(c=>{let l=T.input;return(l.anyPress||l.isDown("left")||l.isDown("right")||l.isDown("up")||l.isDown("down"))&&o>.3&&(o=Math.max(0,o-1.5),a++%2===0&&(n.querySelector(".mglabel").textContent="Shh\u2026 there's no hurry.")),o+=c,r.style.strokeDashoffset=251.3*(1-Zt(o/t,0,1)),e&&e(Zt(o/t,0,1),c),o>=t}),_i(n)}async function Lh({label:i=null,items:t,radius:e=.6,onCollect:n=null,timeLimit:s=null,needed:r=null,showCount:o=!0}={}){let a=r??t.length;if(T.auto){let d=0;for(let f of t){if(d>=a)break;let m=f.obj?f.obj.position:f;T.player.position.x=m.x,T.player.position.z=m.z,f.got=!0,d++,n&&n(f,d),await Qt(.05)}return d}let c=vi(i),l=wt("div","counter",`0 / ${a}`);o&&c.appendChild(l),T.director.setControl(!0);let h=0,u=0;return await Ze(d=>{u+=d;let f=T.player.position;for(let m of t){if(m.got)continue;let x=m.obj?m.obj.position:m,g=m.r??e;Math.hypot(x.x-f.x,x.z-f.z)<g+T.player.radius&&(m.got=!0,h++,l.textContent=`${h} / ${a}`,T.audio.sfx("good",{deg:[1,3,5,6,8,10,12][h%7]}),n&&n(m,h))}return h>=a||s&&u>s}),T.director.setControl(!1),_i(c),h}async function uf({target:i,dist:t=1.6,seconds:e=8,label:n="Stay close",onProgress:s=null}={}){if(T.auto){s&&s(1,!0,.1),await Qt(.5);return}let r=vi(n),o=wt("div","meter"),a=wt("div");o.appendChild(a),r.appendChild(o),T.director.setControl(!0);let c=0;await Ze(l=>{let h=i.position??i,d=Math.hypot(h.x-T.player.position.x,h.z-T.player.position.z)<t;return c=Zt(c+(d?l/e:-l/e*.15),0,1),a.style.width=c*100+"%",s&&s(c,d,l),c>=1}),T.director.setControl(!1),_i(r)}var Lr=[0,1,2,4,7,10,13,16,22,40,60,80],Aa={leg:[.12,.17,.22,.32,.42,.52,.64,.74,.78,.78,.76,.7],torso:[.2,.22,.26,.32,.38,.44,.5,.56,.6,.62,.6,.56],width:[.17,.18,.19,.2,.21,.23,.25,.28,.3,.32,.31,.29],head:[.15,.155,.16,.165,.17,.17,.17,.17,.17,.17,.17,.165],arm:[.14,.17,.2,.26,.32,.38,.44,.5,.54,.54,.52,.5]};function Dr(i,t){let e=Zt(t,0,80);for(let n=0;n<Lr.length-1;n++)if(e<=Lr[n+1]){let s=(e-Lr[n])/(Lr[n+1]-Lr[n]);return Ye(Aa[i][n],Aa[i][n+1],s)}return Aa[i][Aa[i].length-1]}var Tv=(()=>{let i=new tn(1,.9,1,6);return i.translate(0,-.5,0),i})(),df=(()=>{let i=new tn(.85,1,1,7);return i.translate(0,.5,0),i})(),ff=new ke(1,1),Ev=new ke(1,0),pf=new $n(1,5,4),Ur=class{constructor(t={}){this.opts={age:30,skin:B.skin[0],hair:5913386,hairStyle:"short",shirt:B.blue,pants:B.navy,shoes:3813424,dress:!1,name:"",glasses:!1,beard:!1,scarf:null,hat:null,...t},this.name=this.opts.name,this.root=new ut,this.root.rotation.order="YXZ",this.root.userData.character=this,this.position=this.root.position,this.heading=0,this.targetHeading=0,this.speed=0,this.walkPhase=0,this.pose="idle",this.poseW={},this.anim={},this.moveTarget=null,this.path=null,this.followTarget=null,this.carried=null,this.carriedBy=null,this.extraY=0,this.lookTarget=null,this.mood="neutral",this.blinkT=Math.random()*3,this._build(),this.setAge(this.opts.age),T.world?.addCharacter(this)}_build(){let t=this.opts;this.mSkin=zi(t.skin),this.mHair=zi(t.hair),this.mShirt=zi(t.shirt),this.mPants=zi(t.pants),this.mShoe=pe(t.shoes);let e=this.root;this.body=new ut,e.add(this.body),this.torsoPivot=new ut,this.body.add(this.torsoPivot),this.torso=new Mt(df,this.mShirt),this.torsoPivot.add(this.torso),this.hips=new Mt(df,t.dress?this.mShirt:this.mPants),this.body.add(this.hips),this.skirt=null,t.dress&&(this.skirt=new Mt(new pi(1,1,7,1,!0),this.mShirt),this.skirt.material.side=Me,this.body.add(this.skirt)),this.headPivot=new ut,this.torsoPivot.add(this.headPivot),this.head=new Mt(ff,this.mSkin),this.headPivot.add(this.head),this.eyes=[];for(let s of[-1,1]){let r=new Mt(pf,pe(2761252,{roughness:.4}));this.head.add(r),r.position.set(s*.36,.08,.86),r.scale.set(.11,.14,.08),this.eyes.push(r);let o=new Mt(pf,pe(15900832));this.head.add(o),o.position.set(s*.55,-.2,.74),o.scale.set(.15,.09,.06)}if(this.hair=new ut,this.head.add(this.hair),this._buildHair(),t.glasses){for(let r of[-1,1]){let o=new Mt(new mi(.2,.04,4,10),pe(3355443));o.position.set(r*.36,.08,.92),this.head.add(o)}let s=new Mt(new He(.2,.04,.04),pe(3355443));s.position.set(0,.1,.94),this.head.add(s)}if(t.beard){let s=new Mt(ff,this.mHair);s.scale.set(.7,.45,.5),s.position.set(0,-.55,.45),this.head.add(s)}if(this.armL=this._limb(this.torsoPivot,this.mShirt,!0),this.armR=this._limb(this.torsoPivot,this.mShirt,!0),this.legL=this._limb(this.body,this.mPants,!1),this.legR=this._limb(this.body,this.mPants,!1),t.scarf&&(this.scarfM=new Mt(new mi(1,.35,4,8),pe(t.scarf)),this.scarfM.rotation.x=Math.PI/2,this.torsoPivot.add(this.scarfM)),t.hat){this.hatM=new ut;let s=new Mt(new $n(1,7,4,0,Math.PI*2,0,Math.PI/2),pe(t.hat));this.hatM.add(s);let r=new Mt(new ke(.25,0),pe(16777215));r.position.y=1,this.hatM.add(r),this.hatM.position.y=.25,this.hatM.scale.setScalar(1.08),this.head.add(this.hatM)}this.cane=null,this.root.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!1)});let n=new Mt(new Ts(1,12),new qe({color:0,transparent:!0,opacity:.12,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.012,this.root.add(n),this.blob=n}_buildHair(){let t=this.opts;for(;this.hair.children.length;)this.hair.remove(this.hair.children[0]);let e=(s,r,o,a,c,l,h,u=0)=>{let d=new Mt(s,this.mHair);return d.scale.set(r,o,a),d.position.set(c,l,h),d.rotation.x=u,d.castShadow=!0,this.hair.add(d),d},n=new $n(1,8,5,0,Math.PI*2,0,Math.PI*.55);switch(t.hairStyle){case"none":break;case"baby":e(new ke(.25,0),1,1.4,1,0,.95,.15);break;case"bald":e(n,1.03,.5,1.03,0,-.1,-.08);break;case"long":e(n,1.08,1,1.1,0,0,-.04),e(new He(1,1,1),1.9,1.4,.5,0,-.6,-.65);break;case"ponytail":e(n,1.07,.95,1.08,0,0,-.05),e(new ke(.4,0),1,1.6,1,0,-.1,-1.15);break;case"bun":e(n,1.07,.95,1.08,0,0,-.05),e(new ke(.42,0),1,1,1,0,.75,-.6);break;case"curly":for(let s=0;s<9;s++){let r=s/9*Math.PI*2;e(new ke(.36,0),1,1,1,Math.cos(r)*.72,.45+s%2*.15,Math.sin(r)*.72-.15)}e(new ke(.55,0),1,1,1,0,.85,-.1);break;case"bob":e(n,1.1,1,1.12,0,0,-.03),e(new tn(1,1.05,1,8,1,!0),1.08,.7,1.1,0,-.25,-.05);break;default:e(n,1.06,.8,1.08,0,.05,-.06),e(new He(1,1,1),1.2,.3,.4,0,.62,.62,.4)}this.hair.children.forEach(s=>{s.geometry.type==="SphereGeometry"&&s.material&&(s.material.side=Me)})}_limb(t,e,n){let s=new ut;t.add(s);let r=new Mt(Tv,e);s.add(r);let o=n?this.mSkin:this.mShoe,a=new Mt(Ev,o);return s.add(a),{pivot:s,upper:r,end:a,isArm:n}}setAge(t){this.age=t;let e=Dr("leg",t),n=Dr("torso",t),s=Dr("width",t),r=Dr("head",t)*(t<3?1.25:1),o=Dr("arm",t);this.dims={leg:e,torso:n,w:s,hr:r,arm:o};let a=e;this.body.position.y=a,this.hips.scale.set(s*.9,.12,s*.7),this.hips.position.y=-.06,this.torsoPivot.position.y=.04,this.torso.scale.set(s,n,s*.72),this.skirt&&(this.skirt.scale.set(s*1.5,e*.65,s*1.25),this.skirt.position.y=-e*.25),this.headPivot.position.y=n+r*.85,this.head.scale.setScalar(r);for(let[u,d]of[[this.armL,-1],[this.armR,1]])u.pivot.position.set(d*(s+.035),n*.88,0),u.upper.scale.set(.055+s*.12,o,.055+s*.12),u.end.scale.setScalar(.055+s*.08),u.end.position.y=-o-.02;for(let[u,d]of[[this.legL,-1],[this.legR,1]])u.pivot.position.set(d*s*.45,0,0),u.upper.scale.set(.06+s*.17,e,.06+s*.17),u.end.scale.set(.07+s*.1,.05+s*.06,.1+s*.15),u.end.position.set(0,-e+.02,.04);this.scarfM&&(this.scarfM.scale.set(s*.95,s*.85,s*.6),this.scarfM.position.y=n*.98),this.blob.scale.setScalar(s*1.6+.08);let c=new At(this.opts.hair),l=new At(14276306),h=Zt((t-48)/25,0,.92);return this.mHair.color.copy(c).lerp(l,h),this.height=a+n+r*1.9,this.radius=Math.max(.18,s*1.15),this.hunch=Zt((t-65)/15,0,1)*.22,this}setOutfit({shirt:t,pants:e,hair:n,hairStyle:s}={}){t!==void 0&&this.mShirt.color.setHex(t),e!==void 0&&this.mPants.color.setHex(e),n!==void 0&&(this.opts.hair=n,this.setAge(this.age)),s!==void 0&&(this.opts.hairStyle=s,this._buildHair(),this.root.traverse(r=>{r.isMesh&&r!==this.blob&&(r.castShadow=!0)}))}giveCane(t=!0){if(t&&!this.cane){this.cane=new ut;let e=new Mt(new tn(.018,.018,.85,4),pe(B.woodDark));e.position.y=-.38,this.cane.add(e);let n=new Mt(new mi(.06,.018,3,8,Math.PI),pe(B.woodDark));n.position.set(.06,.04,0),this.cane.add(n),this.armR.end.add(this.cane),this.cane.scale.setScalar(1/this.armR.end.scale.x)}else!t&&this.cane&&(this.cane.parent.remove(this.cane),this.cane=null)}place(t,e,n=null){return this.position.set(t,0,e),n!==null&&(this.heading=this.targetHeading=n),this.moveTarget=null,this.path=null,this}face(t,e){return this.targetHeading=Math.atan2(t-this.position.x,e-this.position.z),this}faceChar(t){return this.face(t.position.x,t.position.z)}faceNow(t,e){return this.face(t,e),this.heading=this.targetHeading,this}get walkSpeed(){if(this._speedOverride)return this._speedOverride;let t=this.age;return t<1.3?1.1:t<3?1.5:t<10?3:t<18?3.4:t<60?2.9:1.6}set walkSpeed(t){this._speedOverride=t}walkTo(t,e,n={}){return new Promise(s=>{this.moveTarget={x:t,z:e,speed:n.speed??this.walkSpeed,resolve:s,stopDist:n.stopDist??.05,run:n.run}})}async walkPath(t,e={}){for(let[n,s]of t)await this.walkTo(n,s,e)}walkToChar(t,e=.8,n={}){let s=this.position.x-t.position.x,r=this.position.z-t.position.z,o=Math.hypot(s,r)||1;return this.walkTo(t.position.x+s/o*e,t.position.z+r/o*e,n).then(()=>this.faceChar(t))}stop(){if(this.moveTarget){let t=this.moveTarget.resolve;this.moveTarget=null,t&&t()}}follow(t,e=1.2){this.followTarget=t?{c:t,dist:e}:null}lookAt(t){this.lookTarget=t}setPose(t,e={}){return this.pose=t,this.anim=e,this}pickUp(t){this.carried=t,t.carriedBy=this,t.moveTarget=null,t.followTarget=null,t.setPose("carried")}putDown(t,e){let n=this.carried;n&&(this.carried=null,n.carriedBy=null,n.root.rotation.set(0,0,0),t!==void 0?n.place(t,e,this.heading):n.place(this.position.x+Math.sin(this.heading)*.6,this.position.z+Math.cos(this.heading)*.6,this.heading),n.extraY=0,n.setPose("idle"))}headWorld(){let t=new C;return this.head.getWorldPosition(t),t.y+=this.dims.hr*1.4,t}update(t,e){let n=!1;if(this.carriedBy){let s=this.carriedBy,r=new C(0,0,0),o=s.heading,a=s.pose==="carryHigh"?.12:.24;r.set(Math.sin(o)*a,s.body.position.y+s.dims.torso*.45-this.dims.leg*.3,Math.cos(o)*a),this.position.copy(s.position).add(r),this.heading=this.targetHeading=o+(s.pose==="carryHigh"?0:Math.PI*.5)}else if(this.moveTarget){let s=this.moveTarget,r=s.x-this.position.x,o=s.z-this.position.z,a=Math.hypot(r,o);if(a<=Math.max(s.stopDist,.02))this.moveTarget=null,s.resolve&&s.resolve();else{let c=Math.min(s.speed*t,a);this.position.x+=r/a*c,this.position.z+=o/a*c,this.targetHeading=Math.atan2(r,o),this.speed=s.speed,n=!0}}else if(this.followTarget){let{c:s,dist:r}=this.followTarget,o=vr(this.position.x,this.position.z,s.position.x,s.position.z);if(o>r){let a=Math.min(Math.max(this.walkSpeed,s.speed||0)*t*(o>r*2?1.4:1),o-r),c=s.position.x-this.position.x,l=s.position.z-this.position.z;this.position.x+=c/o*a,this.position.z+=l/o*a,this.targetHeading=Math.atan2(c,l),this.speed=this.walkSpeed,n=!0}}if(!n&&!this._playerMoving&&(this.speed=Kn(this.speed,0,10,t)),this.heading=rh(this.heading,this.targetHeading,1-Math.exp(-10*t)),this.carriedBy?this.root.rotation.y=this.heading:this.root.rotation.y=this.heading,!this.carriedBy){let s=this.pose==="lie"||this.pose==="lieBack"||this.pose==="sleep";this._lift=Kn(this._lift||0,s?this.dims.w*.75:0,10,t),this.position.y=this.extraY+this._lift}this._animate(t,e)}_animate(t,e){let n=this.dims,s=this.speed>.15,r=this.pose,o=this.age<1.3;r==="idle"&&s&&(r=o?"crawl":"walk"),r==="crawl"&&!s&&(r="crawlIdle"),this.walkPhase+=t*(this.speed/Math.max(.25,n.leg))*1.7;let a=this.walkPhase,c=n.leg,l=0,h=this.hunch,u=0,d=0,f=0,m=0,x=.08,g=-.08,p=0,_=0,v=0,y=0,D=0,E=0,R=this.anim,L=Math.sin(e*2)*.01;switch(r){case"walk":{let U=Math.sin(a),Y=Zt(this.speed/3,.25,.75);p=U*Y,_=-U*Y,f=-U*Y*.8,m=U*Y*.8,c=n.leg-Math.abs(Math.cos(a))*.03+.015,h+=.05+(this.speed>3.2?.12:0),this.cane&&(m=-.3+U*.15);break}case"crawl":case"crawlIdle":{let U=r==="crawl"?Math.sin(a*.8):0;l=1.35,c=n.leg*.55+.02,u=-1.15,f=-1.35+U*.45,m=-1.35-U*.45,p=-1.55-U*.35,_=-1.55+U*.35,E=.02;break}case"sitGround":c=n.leg*.12+.02,p=_=-1.45,v=.12,y=-.12,f=m=R.reach?-2.7:-.4,R.reach&&(x=.25,g=-.25),h+=.05+L-(R.look?.15:0),u=R.look??0;break;case"sit":c=R.h??.45,p=_=-1.45,f=m=-.5,h+=L,E=-.1;break;case"lie":D=-Math.PI/2,c=.12,f=m=-.1,x=.4,g=-.4;break;case"lieBack":D=-Math.PI/2,c=.12,x=1.4,g=-1.4,v=.25,y=-.25;break;case"kneel":c=n.leg*.55,p=-1.5,_=.1,h+=.1,f=m=-.6;break;case"kneelOpen":c=n.leg*.55,p=-1.5,_=.1,h+=.05,f=m=-1.2,x=.6,g=-.6;break;case"crouch":c=n.leg*.45,p=_=-1.2,h+=.5,f=m=-1;break;case"reach":f=m=-2.8,x=.2,g=-.2,u=-.3;break;case"reachForward":f=m=-1.4;break;case"armsOpen":f=m=-1.1,x=.9,g=-.9;break;case"hug":f=m=-1.35,x=-.35,g=.35,h+=.12;break;case"carry":case"carryHigh":f=m=-1,x=-.5,g=.5,h-=.08;break;case"carried":c=n.leg*.4,p=_=-1.2,f=m=-.6;break;case"wave":m=-2.6+Math.sin(e*9)*0,g=-.5+Math.sin(e*8)*.35;break;case"point":m=-1.5;break;case"dance":{let U=Math.sin(e*(R.speed??4));c=n.leg+Math.abs(U)*.05,f=-1.6+U*.4,m=-1.6-U*.4,x=.5,g=-.5,p=U*.3,_=-U*.3;break}case"waltz":{f=-1.3,x=.5,m=-1.6,g=-.2;let U=Math.sin(e*3);p=U*.25,_=-U*.25;break}case"jump":{let U=Math.abs(Math.sin(e*5));c=n.leg+U*.25,f=m=-2.4,x=.3,g=-.3,p=_=-U*.5;break}case"cry":u=.45,f=m=-1.9,x=-.6,g=.6,h+=.2+Math.sin(e*6)*.03;break;case"laugh":u=-.35+Math.sin(e*14)*.06,h+=Math.sin(e*14)*.04,f=m=-.3;break;case"think":m=-2.2,g=.6,u=.15;break;case"push":{let U=R.phase??Math.sin(e*2);f=m=-1.3-U*.3,h+=.2+U*.1,p=-.3,_=.3;break}case"swing":c=R.h??.5,p=_=-1.2+(R.kick??0),f=m=-2.6,x=.15,g=-.15;break;case"bike":{let U=Math.sin(a);c=R.h??.68,p=-1.2+U*.6,_=-1.2-U*.6,f=m=-1.15,h+=.35;break}case"sleep":D=-Math.PI/2,c=.12,f=m=-.2,x=.2,g=-.2,u=0;break;case"rock":c=.47,p=_=-1.45,f=m=-1,x=-.5,g=.5,h-=.15;break;case"read":c=R.h??.45,p=_=-1.45,f=m=-1,x=-.3,g=.3,u=.35;break;case"stand":default:h+=L;break}let w=1-Math.exp(-12*t),b=this._j||(this._j={bodyY:c,bodyRX:l,torsoRX:h,headRX:u,headRY:d,aL:f,aR:m,aLz:x,aRz:g,lL:p,lR:_,lLz:v,lRz:y,rootRX:D,bodyZ:E}),I=(U,Y)=>{b[U]=Ye(b[U],Y,w)};I("bodyY",c),I("bodyRX",l),I("torsoRX",h),I("headRX",u),I("aL",f),I("aR",m),I("aLz",x),I("aRz",g),I("lL",p),I("lR",_),I("lLz",v),I("lRz",y),I("rootRX",D),I("bodyZ",E);let H=0;if(this.lookTarget){let U=this.lookTarget.position??this.lookTarget,Y=Math.atan2(U.x-this.position.x,U.z-this.position.z)-this.heading;H=Zt(Math.atan2(Math.sin(Y),Math.cos(Y)),-1.1,1.1)}b.headRY=Ye(b.headRY,H,w),this.body.position.y=b.bodyY,this.body.position.z=b.bodyZ,this.body.rotation.x=b.bodyRX,this.root.rotation.x=b.rootRX+(this.lean||0),this.root.rotation.z=this.tilt||0,this.torsoPivot.rotation.x=b.torsoRX,this.headPivot.rotation.x=b.headRX,this.headPivot.rotation.y=b.headRY,this.armL.pivot.rotation.x=b.aL,this.armR.pivot.rotation.x=b.aR,this.armL.pivot.rotation.z=b.aLz,this.armR.pivot.rotation.z=b.aRz,this.legL.pivot.rotation.x=b.lL,this.legR.pivot.rotation.x=b.lR,this.legL.pivot.rotation.z=b.lLz,this.legR.pivot.rotation.z=b.lRz,this.blinkT-=t;let N=this.pose==="sleep"||this.blinkT<.12;this.blinkT<0&&(this.blinkT=2+Math.random()*4);for(let U of this.eyes)U.scale.y=N?.02:.14;this.blob.visible=b.rootRX>-.5&&!this.carriedBy}remove(){T.world?.removeCharacter(this),this.root.parent?.remove(this.root)}},Ra=class{constructor({color:t=14198890,spot:e=16049872,size:n=1,age:s=3}={}){this.root=new ut,this.position=this.root.position,this.size=n,this.age=s,this.heading=0,this.targetHeading=0,this.speed=0,this.phase=0,this.moveTarget=null,this.followTarget=null,this.pose="idle";let r=zi(t),o=pe(e),a=pe(3811876),c=n;this.bodyG=new ut,this.root.add(this.bodyG);let l=new Mt(new ke(.25,0),r);l.scale.set(.9,.8,1.5),l.position.y=.32,this.bodyG.add(l);let h=new Mt(new ke(.18,0),o);h.scale.set(.9,.7,1.6),h.position.set(0,.24,.02),this.bodyG.add(h),this.headG=new ut,this.headG.position.set(0,.48,.32),this.bodyG.add(this.headG);let u=new Mt(new ke(.17,0),r);this.headG.add(u);let d=new Mt(new He(.14,.11,.16),o);d.position.set(0,-.04,.15),this.headG.add(d);let f=new Mt(new ke(.035,0),a);f.position.set(0,-.01,.24),this.headG.add(f);for(let x of[-1,1]){let g=new Mt(new $n(.025,5,4),a);g.position.set(x*.075,.05,.13),this.headG.add(g);let p=new Mt(new He(.07,.16,.12),zi(t));p.material.color.multiplyScalar(.8),p.position.set(x*.15,0,-.02),p.rotation.z=x*.3,this.headG.add(p)}this.tail=new ut,this.tail.position.set(0,.42,-.36),this.bodyG.add(this.tail);let m=new Mt(new tn(.025,.04,.25,4),r);m.position.y=.12,this.tail.add(m),this.tail.rotation.x=-.6,this.legs=[];for(let[x,g]of[[-.11,.2],[.11,.2],[-.11,-.2],[.11,-.2]]){let p=new ut;p.position.set(x,.26,g),this.bodyG.add(p);let _=new Mt(new tn(.04,.035,.26,4),r);_.position.y=-.13,p.add(_),this.legs.push(p)}this.root.scale.setScalar(c),he(this.root,!0,!1),this.wag=1,T.world?.addCharacter(this)}place(t,e,n=null){return this.position.set(t,0,e),n!==null&&(this.heading=this.targetHeading=n),this}face(t,e){return this.targetHeading=Math.atan2(t-this.position.x,e-this.position.z),this}faceChar(t){return this.face(t.position.x,t.position.z)}walkTo(t,e,n={}){return new Promise(s=>{this.moveTarget={x:t,z:e,speed:n.speed??(this.age>10?.9:2.6),resolve:s}})}follow(t,e=1){this.followTarget=t?{c:t,dist:e}:null}setPose(t){return this.pose=t,this}get radius(){return .3}update(t,e){let n=!1;if(this.moveTarget){let o=this.moveTarget,a=o.x-this.position.x,c=o.z-this.position.z,l=Math.hypot(a,c);if(l<.05)this.moveTarget=null,o.resolve();else{let h=Math.min(o.speed*t,l);this.position.x+=a/l*h,this.position.z+=c/l*h,this.targetHeading=Math.atan2(a,c),this.speed=o.speed,n=!0}}else if(this.followTarget){let{c:o,dist:a}=this.followTarget,c=vr(this.position.x,this.position.z,o.position.x,o.position.z);if(c>a){let l=Math.min((this.age>10?1:3.2)*t,c-a),h=o.position.x-this.position.x,u=o.position.z-this.position.z;this.position.x+=h/c*l,this.position.z+=u/c*l,this.targetHeading=Math.atan2(h,u),this.speed=2.5,n=!0}}n||(this.speed=Kn(this.speed,0,8,t)),this.heading=rh(this.heading,this.targetHeading,1-Math.exp(-8*t)),this.root.rotation.y=this.heading,this.phase+=t*this.speed*5;let s=Math.sin(this.phase),r=this.speed>.2;this.legs.forEach((o,a)=>{o.rotation.x=r?s*.6*(a%2?1:-1)*(a<2?1:-1):0}),this.tail.rotation.z=Math.sin(e*(6+this.wag*8))*.5*this.wag,this.pose==="sit"?(this.bodyG.rotation.x=-.45,this.bodyG.position.y=-.06,this.legs[2].rotation.x=this.legs[3].rotation.x=1):this.pose==="lie"?(this.bodyG.rotation.x=0,this.bodyG.position.y=-.16,this.legs.forEach(o=>o.rotation.x=1.4)):(this.bodyG.rotation.x=0,this.bodyG.position.y=r?Math.abs(s)*.03:0),this.headG.rotation.x=this.pose==="lie"?.3:Math.sin(e*1.5)*.05}headWorld(){let t=new C;return this.headG.getWorldPosition(t),t.y+=.3,t}remove(){T.world?.removeCharacter(this),this.root.parent?.remove(this.root)}},Nn={youMother:{skin:B.skin[1],hair:7028522,hairStyle:"long",shirt:15044474,pants:5201802,dress:!1},youFather:{skin:B.skin[1],hair:5913386,hairStyle:"short",shirt:7315408,pants:4608110},baby:{skin:B.skin[1],hair:9067066,hairStyle:"baby",shirt:16180128,pants:16180128,shoes:16180128},mom:{skin:B.skin[0],hair:9128491,hairStyle:"bun",shirt:14256800,pants:5917290,dress:!0},dad:{skin:B.skin[2],hair:3023904,hairStyle:"short",shirt:8367754,pants:4868696,beard:!0},grandpa:{skin:B.skin[0],hair:14210255,hairStyle:"bald",shirt:11967098,pants:6969930,glasses:!0},grandma:{skin:B.skin[0],hair:14210255,hairStyle:"bun",shirt:10137800,pants:6974074,dress:!0,glasses:!0},theo:{skin:B.skin[3],hair:1971730,hairStyle:"curly",shirt:15775818,pants:4876954},sam:{skin:B.skin[2],hair:2760218,hairStyle:"curly",shirt:6267786,pants:4013394},childDaughter:{skin:B.skin[1],hair:8014382,hairStyle:"ponytail",shirt:15901621,pants:6982344},childSon:{skin:B.skin[1],hair:8014382,hairStyle:"short",shirt:9093352,pants:5925512},pip:{skin:B.skin[2],hair:3811874,hairStyle:"curly",shirt:15976010,pants:14243914,hat:14243914,scarf:7320537}};function mf(i){let t=T.state.identity==="father"?Nn.youFather:Nn.youMother;return i<1.5?{...Nn.baby}:i<9?{...t,hairStyle:T.state.identity==="father"?"short":"ponytail",shirt:15976010,pants:5929656}:i<18?{...t,hairStyle:T.state.identity==="father"?"short":"ponytail",shirt:14711402,pants:4018042}:{...t}}function Nr(i,t=0,e=0,n=0,s=null){let r=new Ur({...s??mf(i),age:i,name:"You"});return r.place(t,e,n),T.player=r,r}function Wi(i,t,e,n=0,s=0,r=0){let o=new Ur({...i,age:t,name:e});return o.place(n,s,r),o}function Dh(i=2,t=0,e=0){let n=new Ra({age:i});return n.name="Biscuit",n.place(t,e),n}function Ca(i,t,e,n,s=1,r=[]){let o=ye(s);for(let a=0;a<t;a++){let c=o.range(e[0],e[1]),l=o.range(e[2],e[3]);r.some(([h,u,d])=>Math.hypot(c-h,l-u)<d)||i.add(n(o,a),c,l,{ry:o.range(0,6.28)})}}function gf(i,{era:t="past",night:e=!1,w:n=8,d:s=7}={}){let r=i.world,o={past:[15979468,16180950],present:[14018780,15985372],kid:[13622512,15919832],teen:[12109016,15261904],empty:[14210254,15131356]}[t],a=e?8228824:16769732,c=vh({w:n,d:s,h:3.4,wall:o[0],wall2:o[1],floor:B.woodLight,windows:[{wall:"back",at:1.2,y:1.1,w:1.6,h:1.4,glow:a,roomW:n,roomD:s}]});r.add(c,0,0);let l=st(.08,2.1,1,t==="past"?16315114:15525080);r.add(l,-n/2+.05,0,{y:0}),l.position.z=1.8;let h=wr(.05,6,4,B.yellow);r.add(h,-n/2+.12,2.15,{y:1});let u=ye(t==="past"?3:9);for(let E=0;E<26;E++){let R=xh(.08,.08,.02,t==="past"?16312546:t==="present"?15922926:16777215);r.add(R,u.range(-n/2+.4,n/2-.4),-s/2+.02,{y:u.range(1.6,3)}),Math.abs(R.position.x-1.2)<1.1&&R.position.y<2.7&&(R.visible=!1)}let d={room:c,door:l,doorPos:[-n/2+.6,1.8]},f=new Mt(new Ve(1.7,1.6),new qe({color:e?10465535:16773320,transparent:!0,opacity:e?.18:.42,depthWrite:!1,blending:un}));f.rotation.x=-Math.PI/2,f.rotation.z=.35,r.add(f,1.4,-1.6,{y:.02}),d.beam=f;let m=new Mt(new tn(.6,1,3,4,1,!0),new qe({color:e?10465535:16773071,transparent:!0,opacity:e?.05:.09,depthWrite:!1,side:Me,blending:un,fog:!1}));if(m.rotation.x=.55,m.rotation.y=Math.PI/4,r.add(m,1.3,-2.4,{y:1.3}),d.shaft=m,t==="past"||t==="present"){let E=Gd();r.add(E,-2.5,-2.55,{collide:{w:1.6,d:.95}}),d.crib=E;let R=bh();r.add(R,-2.5,-2.55,{y:.55}),d.mobile=R}else{let E=Wd({color:t==="teen"?5925514:t==="empty"?13156536:15901621});r.add(E,-2.9,-1.8,{collide:{w:1.2,d:2.1}}),d.bed=E;let R=bh();r.add(R,-3.6,-3.1,{y:1.6,s:.8}),d.mobile=R,R.userData.speed=.05}let x=qd();r.add(x,2.4,-2.2,{ry:-.7,collide:.5}),d.chair=x;let g=wh(2.6,2.6,t==="past"?15972793:t==="present"?12114120:12635368,B.cream,!0);r.add(g,.3,.6);let p=Yd(1.3,1.3);r.add(p,-.6,-3.25,{collide:{w:1.3,d:.4}});let _=Zd();r.add(_,-.9,-3.2,{y:1.3}),d.teddy=_;let v=Sh({lit:e||t==="present",h:1.6});if(r.add(v,3.3,-3,{collide:.25}),d.lamp=v,e){let E=new xr(16763274,6,7,1.6);E.position.set(3.2,1.7,-2.8),r.root.add(E),d.lampLight=E}let y=Th(1.2);r.add(y,3.4,2.6,{collide:.3});let D=Eh(B.wood);return r.add(D,-n/2+.06,-1,{y:1.9,ry:Math.PI/2}),d.frame=D,d}function xf(i,{season:t="summer",treeStage:e=1,swing:n=!1,lit:s=!1,picnic:r=!1,sandbox:o=!1,theoHouse:a=!0,flowers:c=!0,cherry:l=!0,lemonade:h=!1,snowman:u=0,sign:d=null}={}){let f=i.world,m={spring:B.grassSpring,summer:B.grass,autumn:B.grassAutumn,winter:B.snow}[t],x=t==="winter"?B.snowShade:B.grassDark,g=ga({w:28,d:22,top:m,edge:x,seed:4});f.add(g,0,0);let p={season:t},_=Bd(28,2.6);f.add(_,0,9.3);let v=pn(28,.5,t==="winter"?15133424:B.sidewalk,.012);f.add(v,0,7.8);let y=_h({w:6,d:4.6,h:2.9,wall:16049103,roof:t==="winter"?15331060:B.terracotta,door:5929640,porch:!0,lit:s});if(f.add(y,-5,-6,{collide:{w:6.6,d:5}}),f.addCollider({minX:-7.6,maxX:-2.4,minZ:-3.6,maxZ:-2,porch:!0,disabled:!0}),p.house=y,p.door=[-5,-3.2],p.porch=[-5,-2.4],t==="winter"){let N=st(6.8,.2,5.4,B.snow);f.add(N,-5,-6,{y:2.92}),N.visible=!1}for(let N=0;N<9;N++){let U=Ds(.38,t==="winter"?14081254:B.stone,7,.02);f.add(U,-5+(N%2?.15:-.15),-1.6+N*1.05)}let D=B.white,E=_a(7.6,D);f.add(E,-9.6,7),f.addCollider({minX:-13.4,maxX:-5.9,minZ:6.85,maxZ:7.15});let R=_a(17.6,D);f.add(R,4.9,7),f.addCollider({minX:-4.1,maxX:13.7,minZ:6.85,maxZ:7.15});let L=_a(9,D);f.add(L,13.6,2.4,{ry:Math.PI/2});let w=xa({stage:e,season:t,swing:n});if(f.add(w,4,-2.2,{collide:e===0?.15:.25+e*.12}),p.tree=w,p.treePos=[4,-2.2],l){let N=Sr({kind:"blossom",season:t,size:1.35,seed:5});f.add(N,-10.5,-.5,{collide:.35}),p.cherry=N,p.cherryPos=[-10.5,-.5]}[[-12,-8,"round",1.2],[11.5,-8.5,"pine",1.3],[12,-3,"round",1.1],[-12.5,4.5,"pine",1],[9.5,4.8,"round",.9]].forEach(([N,U,Y,W],nt)=>f.add(Sr({kind:Y,season:t,size:W,seed:20+nt}),N,U,{collide:.3*W}));for(let N of[-7.6,-6.6,-3.4,-2.4])f.add(Od(t==="autumn"?11575376:t==="winter"?15265010:7910486,.9,N*3),N,-3.2,{collide:.35});if(c&&t!=="winter"){let N=pn(3.2,1.1,B.dirt,.015);f.add(N,-9,-3.4);let U=t==="autumn"?[14917691,13197374]:[B.pink,B.yellow,15921906,12166886,B.red];for(let Y=0;Y<14;Y++)f.add(Er(U[Y%U.length],Y),-10.4+Y%7*.45,-3.75+Math.floor(Y/7)*.5)}Ca(f,t==="winter"?0:80,[-13,13,-10,6.5],(N,U)=>ya(t==="autumn"?12099664:B.grassDark,U),11,[[-5,-6,4],[4,-2.2,1.2],[-5,2,1]]),t!=="winter"&&Ca(f,25,[-13,13,-2,6.5],(N,U)=>Er(N.pick([B.pink,B.yellow,16777215,12166886]),U),12,[[-5,2,1],[4,-2.2,1.2]]),t==="winter"&&Ca(f,18,[-13,13,-10,6.5],(N,U)=>Tr(.6,U,B.snowShade),13,[[-5,-6,4],[4,-2.2,1.5],[-5,2,1]]),Ca(f,8,[-13,13,-10,6],(N,U)=>Tr(N.range(.5,1),U,t==="winter"?B.snowShade:B.rock),14,[[-5,-6,4],[4,-2.2,1.5],[-5,2,1.5]]);let I=Hd();f.add(I,-6.4,6.4,{collide:.2}),p.mailbox=I;let H=ba();if(f.add(H,-3.2,-2.3,{ry:0,collide:{w:1.6,d:.5}}),p.bench=[-3.2,-2],a){let N=_h({w:4.5,d:4,h:2.5,wall:13623534,roof:7306636,door:B.red,chimney:!1,lit:s});f.add(N,8.5,-6.5,{collide:{w:5,d:4.4}}),p.theoHouse=N,p.theoDoor=[8.5,-4.2]}if(o){let N=zd();f.add(N,-8.5,2.2,{collide:!1}),p.sandbox=[-8.5,2.2]}if(r){let N=Vd(B.red);f.add(N,1.2,1.2),p.picnic=[1.2,1.2]}if(h){let N=ef();f.add(N,2.5,6,{collide:{w:1.5,d:.7}}),p.lemonade=[2.5,5.2]}if(u){let N=Qd(u);f.add(N,0,1,{collide:.45}),p.snowman=N}return f.bounds={minX:-13.6,maxX:13.6,minZ:-10.8,maxZ:10.4},p}function yf(i,{night:t=!0,winter:e=!0,wall:n=15721167,chairs:s=2}={}){let r=i.world,o=8,a=7,c=vh({w:o,d:a,h:3.4,wall:n,wall2:16050904,floor:14205600,windows:[{wall:"back",at:1.4,y:1.2,w:1.7,h:1.3,glow:t?7307976:16771788,roomW:o,roomD:a},{wall:"left",at:-.6,y:1.2,w:1.3,h:1.2,glow:t?7307976:16771788,roomW:o,roomD:a}]});r.add(c,0,0);for(let E=0;E<8;E++)for(let R=0;R<2;R++){let L=pn(.9,.9,(E+R)%2?15920354:13220002,.004);r.add(L,-3.55+E*.95,-3+R*.9)}let l=$d(3.2);r.add(l,-.6,-3.15,{collide:{w:3.2,d:.7}});let h=Jd();r.add(h,-2.65,-3.15,{collide:{w:.75,d:.7}});let u=Kd();r.add(u,-3.55,-1.9,{ry:Math.PI/2,collide:{w:.75,d:.75}});let d=Mh({w:1.2,round:!0,color:B.wood});r.add(d,.9,.6,{collide:.65});let f={room:c,table:[.9,.6]},m=[[.9,-.35,0],[1.85,.6,-Math.PI/2],[.9,1.55,Math.PI],[-.05,.6,Math.PI/2]];f.chairs=[];for(let E=0;E<s;E++){let[R,L,w]=m[E],b=Xd(B.woodDark);r.add(b,R,L,{ry:w}),f.chairs.push([R,L,w])}let x=Sh({lit:t,table:!0});r.add(x,3.2,-3.1,{y:0});let g=Mh({w:.6,d:.5,h:.7,color:B.woodLight});if(r.add(g,3.2,-3.1,{collide:.4}),x.position.y=.7,t){let E=new xr(16762250,9,8,1.4);E.position.set(1,2.2,.6),r.root.add(E),f.light=E;let R=Bi(.35,.3,8,15915440,{emissive:16766352,emissiveIntensity:1.2});r.add(R,.9,.6,{y:2.3});let L=st(.02,1.1,.02,5592405);r.add(L,.9,.6,{y:2.55});let w=Un(16766362,3,.55);w.position.set(.9,2.3,.6),r.root.add(w)}let p=tf(B.white);r.add(p,.65,.5,{y:.75}),f.mug=p;let _=Th(1.1);r.add(_,3.4,2.7,{collide:.3});let v=wh(2.8,2.2,13209466,15258812);r.add(v,.9,.6),[[-o/2+.06,1.6,2],[-o/2+.06,2.6,2.4],[-o/2+.06,1.8,1.6]].forEach(([E,R,L],w)=>{let b=Eh([B.wood,B.woodDark,B.white][w],null,.45,.35);r.add(b,E,R,{y:L,ry:Math.PI/2})});let D=st(.06,1,.5,6965818);return r.add(D,-o/2+.1,3,{y:1.2}),f.coatHook=[-3.4,3],f}function Uh(i,{clouds:t=6,seed:e=1,y:n=-3,spread:s=22}={}){let r=ye(e);for(let o=0;o<t;o++){let a=va(e+o,r.range(1,1.8)),c=o/t*Math.PI*2;i.world.add(a,Math.cos(c)*s*r.range(.9,1.2),Math.sin(c)*s*r.range(.9,1.2),{y:n+r.range(-2,3)}),a.userData.update=(l,h)=>{a.position.x+=Math.sin(h*.05+o)*.004},i.world.track(a)}}var vf={id:"prologue",chapter:0,mood:"kitchenNight",music:"winter",intensity:.15,ambience:{room:.6,clock:.35,wind:.25},zoom:8.5,surface:"wood",bounds:{minX:-3.8,maxX:3.8,minZ:-3.3,maxZ:3.3},hint:"Move with <b>WASD</b> / <b>arrows</b> or <b>click</b>. Walk to a glowing light and press <b>Space</b>.",build(i){let t=yf(i,{night:!0,chairs:2});i.r=t;let e=Nr(79,-1.6,1.6,Math.PI*.75);e.giveCane(!0),i.me=e;let n=st(.42,.06,.3,7316424);i.world.add(n,1.85,.6,{y:.5});let s=jd();i.world.add(s,1.1,.75,{y:.75,ry:.3}),i.albumObj=s},async intro(i){await Qt(.5),await Cr(4),await me("It is late, and the house is very quiet."),await Ea("When did it get so quiet?")},moments:[{id:"window",label:"Look out at the snow",at:[1.4,-2.4],async run(i){let t=i.me;await t.walkTo(1.4,-2.2),t.face(1.4,-4),await ks(7,2),await Gi({seconds:4,label:"Watch the snow fall."}),await me("Snow on the old tree again."),await me("Every winter it looks as if it might not wake up. Every spring, somehow, it does."),await ks(8.5,2)}},{id:"scarf",label:"The other chair",at:[2.3,1],async run(i){let t=i.me;await t.walkTo(2.5,1.1),t.face(1.85,.6),await Qt(.6),await me("A blue scarf, still folded on the other chair."),await me("You never could bring yourself to move it.")}},{id:"frames",label:"The photographs on the wall",at:[-3,2],async run(i){let t=i.me;await t.walkTo(-3.1,2),t.face(-4,2),await Qt(.5),await me("Three frames. A wedding. A birthday cake. A child in a too-big coat, laughing at something you can no longer remember."),await Ea("I should have taken more.")}},{id:"album",kind:"story",label:"Open the album",at:[.4,.2],requires:[],async run(i){let t=i.me;await t.walkTo(.9,-.55),t.giveCane(!1),t.faceNow(.9,.6),t.setPose("read",{h:.45}),t.position.set(.9,0,-.35),await en(.9,.3,5.8,3),Vi("title",{intensity:.2}),await me("The album. A gift, years and years ago."),await me("\u201CFor all the little moments,\u201D the card said."),await me("So many pages. So few pictures."),await Ea("Where did it all go?"),await Gi({seconds:4,label:"Turn the first page."}),ue("rustle"),rf(.6,4),Ns("dream",6),await Ar(["Let\u2019s go back.","Back to the beginning, when everything was enormous \u2014","\u2014 and you were so very small."],{minTime:1.2}),await Rr(3,"#fff6ee"),T.ui.clearNarration()}}],final:"album"};var Av=["\u266A Little one, little one, close your eyes\u2026","\u266A the stars are out, the moon will rise\u2026","\u266A and when you wake, I\u2019ll still be here \u2014","\u266A little one, my little dear."];var _f={id:"ch1-nursery",chapter:1,card:{num:"I",title:"Tiny",ages:"zero to one",quote:"You were so small once. Small enough to fit in two hands."},mood:"dawnNursery",music:"tiny",intensity:.3,ambience:{room:.4,birds:.35},zoom:6.2,surface:"wood",bounds:{minX:-3.75,maxX:3.75,minZ:-3.2,maxZ:3.3},hint:"You can only crawl. That\u2019s alright \u2014 nothing here is in a hurry. Find the glowing lights.",build(i){let t=i.world;i.r=gf(i,{era:"past"}),i.me=Nr(.7,.3,.7,Math.PI*.8),i.me.setPose("sitGround"),i.mom=Wi(Nn.mom,31,"Mom",-3.5,1.8,Math.PI/2),i.mom.root.visible=!1,i.dad=Wi(Nn.dad,33,"Dad",-3.5,1.8,Math.PI/2),i.dad.root.visible=!1,t.add(Ds(.55,10123882,10,.02),-2.7,1.6),i.dog=Dh(1,-2.7,1.6),i.dog.setPose("lie"),i.dog.wag=.3,i.dog.heading=i.dog.targetHeading=.6,t.addCollider({x:-2.7,z:1.6,r:.4}),i.blocks=[B.red,B.yellow,B.blue].map((e,n)=>{let s=st(.26,.26,.26,e);return t.add(s,1.4+n*.38,1.6+n%2*.25,{ry:n*.5}),s}),i.motes=t.particlesOf("motes",{center:new C(1.4,0,-1.6),area:{w:2.2,h:2.6,d:2.2},count:45,opacity:.35}),Uh(i,{clouds:4,y:-6,spread:14})},async intro(i){Pr({heartbeat:.8,room:.2},.5),await Ar(["Before you knew any words,","before you knew your own name,","there was a heartbeat. And then, there was light."],{minTime:1.3}),Pr({room:.4,birds:.35},4),T.ui.clearNarration(),await Cr(4),ue("coo"),await me("This was the whole world: one room, soft and pink and very, very big.")},moments:[{id:"mobile",label:"Look up at the stars",at:[-2.5,-1.75],caption:"The stars above your crib",async run(i){let t=i.me;await t.walkTo(-2.5,-1.75),t.faceNow(-2.5,-2.6),t.setPose("sitGround",{look:-.55,reach:!0}),i.r.mobile.userData.speed=.7,await en(-2.5,-2.3,4.6,2.5),ue("sparkle"),await Gi({seconds:5,label:"Watch them turn."}),await me("Five little stars, going round and round."),await me("The whole sky, as far as you knew."),await mn("mobile","The stars above your crib"),t.setPose("idle"),i.r.mobile.userData.speed=.25,await yi(t,6.2)}},{id:"sunbeam",label:"Crawl into the sunlight",at:[1.4,-1.5],caption:"Warm light on the floor",async run(i){let t=i.me;await t.walkTo(1.4,-1.5),t.setPose("sitGround",{look:-.2}),i.motes.setOpacity(2.6),Ns("dawnNursery",3,{warmth:.6,dream:.45,bloom:.6}),await ks(4.8,3),await Gi({seconds:6,label:"Feel the warm light."}),await me("Morning came in through the window and lay down on the floor beside you."),await mn("sunbeam","Warm light on the floor"),i.motes.setOpacity(1),Ns("dawnNursery",3),t.setPose("idle"),await ks(6.2,2)}},{id:"biscuit",label:"Say hello to Biscuit",at:[-1.9,1.75],caption:"Biscuit, who was patient with you",async run(i){let t=i.me,e=i.dog;await t.walkTo(-1.95,1.7),t.face(-2.7,1.6),t.setPose("sitGround"),e.faceChar(t),e.wag=.8,await en(-2.3,1.6,4.5,1.5),await Ih({count:5,label:"Pat Biscuit",onTap:n=>{e.wag=.8+n*.3,ue(n%2?"giggle":"coo"),n===3&&e.setPose("sit")}}),ue("woof",{vol:.5}),await Ir(t,1,.08),await me("Biscuit was only a puppy too. The two of you were learning the world together."),await mn("biscuit","Biscuit, who was patient with you"),e.setPose("lie"),e.wag=.4,t.setPose("idle"),await yi(t,6.2)}},{id:"blocks",label:"Build a tower",at:[1.8,1.25],caption:"Your first tower \u2014 and your first ruin",async run(i){let t=i.me;await t.walkTo(1.75,1),t.face(1.8,1.7),t.setPose("sitGround"),await en(1.8,1.5,4.4,1.5);let e=new C(1.8,0,1.75);await hf({label:"Stack the blocks",keys:["up","up","up"],onStep:n=>{let s=i.blocks[n],r=s.position.clone(),o=e.clone().setY(n*.26);fn(.5,a=>{s.position.lerpVectors(r,o,a),s.position.y+=Math.sin(a*Math.PI)*.35,s.rotation.y=(1-a)*n*.5}),ue("tap")}}),await Qt(.6),await Ih({count:1,label:"Now\u2026 knock it down!"}),ue("thud"),i.blocks.forEach((n,s)=>{let r=n.position.clone(),o=new C(e.x+(s-1)*.5+.2,0,e.z+.3+s*.2);fn(.6,a=>{n.position.lerpVectors(r,o,a),n.position.y=Math.max(0,r.y*(1-a)+Math.sin(a*Math.PI)*.2),n.rotation.x=a*(1+s)})}),await Qt(.5),ue("giggle"),await Ir(t,2,.08),await me("Your first tower. Your first ruin. Both were wonderful."),await mn("blocks","Your first tower \u2014 and your first ruin"),t.setPose("idle"),await yi(t,6.2)}},{id:"lullaby",kind:"story",label:"Call for someone",at:[.3,.6],radius:1.3,caption:"The song she sang",async run(i){let t=i.me,e=i.mom;t.setPose("sitGround",{look:-.3}),ue("cry"),await Qt(2),ue("door"),e.root.visible=!0,e.place(-3.4,1.8,Math.PI/2),await en(-1.2,1.2,6.5,1.5),await e.walkTo(t.position.x-.8,t.position.z+.2),e.faceChar(t),Se(e,"Oh, oh, oh. I know. I know."),e.setPose("crouch"),await Qt(.8),e.pickUp(t),e.setPose("carry"),ue("coo"),await Se(e,"There you are, little one. Did you think I\u2019d gone?"),await e.walkTo(2.3,-1.55),e.place(2.4,-2.15,-.7),e.setPose("rock"),await en(2.3,-1.8,4.8,2),Vi("tinyHum",{intensity:.45});let n=i.r.chair.userData.rock,s=0,r=a=>{s+=a;let c=Math.sin(s*2)*.09;n.rotation.x=c,e.lean=c*.8};T.updaters.add(r),await Qt(1.5);let o=(async()=>{for(let a of Av)await Se(e,a,{passive:!0,hold:3.4,name:"Mom"})})();await cf({label:"Rock with her \u2014 press Space on the first beat of each bar",hits:4,onlyDownbeat:!0,window:.3}),await o,await mn("lullaby","The song she sang"),await me("She sang it every night. One day you would sing it too \u2014 though you didn\u2019t know that yet."),T.updaters.delete(r),n.rotation.x=0,e.lean=0,e.setPose("idle"),e.position.set(2,0,-1.5),await e.walkTo(.6,.9),e.putDown(.3,.6),t.setPose("sitGround"),await Se(e,"Play for a little while. I\u2019m right here."),await e.walkTo(2,-1.4),e.place(2.4,-2.15,-.7),e.setPose("rock"),e.lookAt(t),Vi("tiny",{intensity:.4}),await yi(t,6.2)}},{id:"firstSteps",kind:"story",label:"Pull yourself up on the crib",at:[-1.6,-1.8],requires:["lullaby"],caption:"Three steps. They cried.",async run(i){let t=i.me,e=i.mom,n=i.dad;await t.walkTo(-1.6,-1.85),t.faceNow(-1.6,-2.6),ue("door"),n.root.visible=!0,n.place(-3.4,1.8,Math.PI/2),await en(-.4,-.3,6.8,1.5),await n.walkTo(.9,1),n.faceChar(t),await Se(n,"Hey, hey \u2014 what\u2019s this? What are you up to?"),e.setPose("idle"),e.lookAt(null),e.walkTo(1.7,-.6).then(()=>e.faceChar(t)),t.setAge(1.35),t.setPose("stand"),t.faceNow(n.position.x,n.position.z),ue("coo"),await Se(e,"Oh. Oh my goodness. Look.",{passive:!0,hold:2}),n.setPose("kneelOpen"),await lf({label:"Find your balance \u2014 \u2190 \u2192",seconds:3.5,difficulty:.8,onUpdate:o=>{t.tilt=-o*.3}}),t.tilt=0,await Se(n,"Come on. Come to me. You can do it."),T.director.current.speedMul=.55;let s=0,r=o=>{s+=o,t.tilt=Math.sin(s*7)*.12};T.updaters.add(r),await Lh({label:"Walk to Dad",items:[{x:n.position.x,z:n.position.z,r:.45}],showCount:!1}),T.updaters.delete(r),t.tilt=0,T.director.current.speedMul=1,n.pickUp(t),n.setPose("carryHigh"),ue("giggle"),ue("yay",{delay:.2}),Ir(n,2,.15),await en(n.position.x,n.position.z,5.2,1.2),await Se(n,"Look at you! Look at you go!"),e.setPose("cry"),await Se(e,"Three steps! Did you count? Three!"),await Se(e,"I\u2019m not crying. You\u2019re crying."),await mn("firstSteps","Three steps. They cried."),e.setPose("idle"),await me("That spring, they carried you outside for the very first time."),await Rr(2.5,"#fff6ee")}}],final:"firstSteps"},bf={id:"ch1-spring",chapter:1,mood:"springMorning",music:"tiny",intensity:.45,ambience:{birds:.8,wind:.25},zoom:8,surface:"grass",hint:"Explore the garden. Nobody is in a hurry today.",build(i){let t=i.world;i.r=xf(i,{season:"spring",treeStage:0,picnic:!0,flowers:!0}),i.r.tree.visible=!1,t.removeCollidersOf(i.r.tree),t.bounds={minX:-9.8,maxX:6.5,minZ:-3.6,maxZ:5.8};let e=i.me=Nr(1.1,1.2,1,Math.PI*.2);e.setPose("sitGround"),i.mom=Wi(Nn.mom,32,"Mom",.4,1.9,2.4),i.mom.setPose("sitGround"),i.dad=Wi(Nn.dad,34,"Dad",2.1,1.6,-2),i.dad.setPose("sitGround"),i.grandpa=Wi(Nn.grandpa,66,"Grandpa",-3.6,-2.05,0),i.grandpa.setPose("sit",{h:.45}),i.grandma=Wi(Nn.grandma,64,"Grandma",-2.8,-2.05,0),i.grandma.setPose("sit",{h:.45}),i.dog=Dh(1.5,3.5,2.5),i.dog.follow(e,1.8),i.dog.wag=1,i.petals=t.particlesOf("petals",{center:new C(-8.5,0,0),area:{w:7,h:5,d:7},count:70}),t.butterflies(3,{x:0,z:3,r:4},3),t.birds(6,2),Uh(i,{clouds:7,y:-4,spread:24})},async intro(i){await Cr(3),await me("The world, it turned out, was much bigger than one room."),await Se(i.grandma,"Look at those eyes. They want to see everything.")},moments:[{id:"petals",label:"Reach for the falling petals",at:[-7.6,.4],caption:"Blossoms, falling like slow snow",async run(i){let t=i.me,e=i.world;await t.walkTo(-7.6,.4),await en(-8,.4,6.5,1.5),t.setPose("sitGround",{look:-.4,reach:!0}),await Qt(1),t.setPose("idle");let n=ye(9),s=[];for(let r=0;r<5;r++){let o=Un(16763096,.55,.95),a=-8+n.range(-2.2,2.2),c=.4+n.range(-2,2);o.position.set(a,3+r*.6,c),e.root.add(o);let l={obj:o,x:a,z:c},h=u=>{o.position.y>.25&&(o.position.y-=u*.45,o.position.x+=Math.sin(T.time*2+r)*u*.3),l.got&&(o.material.opacity-=u*2,o.material.opacity<=0&&(e.root.remove(o),T.updaters.delete(h)))};T.updaters.add(h),s.push(l)}await yi(t,7),await Lh({label:"Catch the petals",items:s,radius:.55,onCollect:()=>ue("giggle")}),t.setPose("sitGround",{look:-.3}),await Se(i.grandma,"The blossoms only last a week, little one.",{name:"Grandma"}),await me("You didn\u2019t know what a week was. You didn\u2019t know they only last a week."),await mn("petals","Blossoms, falling like slow snow"),t.setPose("idle")}},{id:"grass",label:"Touch the grass",at:[3.6,4],caption:"The first time you touched grass",async run(i){let t=i.me;await t.walkTo(3.6,4),t.setPose("sitGround",{look:.4}),await en(3.6,4,4.6,1.5),Pr({birds:1,wind:.4},2),await af({label:"Hold Space to feel the grass",seconds:3,onProgress:(e,n)=>{n&&Math.random()<.04&&ue("rustle",{vol:.5})}}),ue("giggle"),await Ir(t,2,.06),ue("giggle",{delay:.3}),await me("It was cool, and it tickled. You laughed at the grass for a long, long time."),await mn("grass","The first time you touched grass"),Pr({birds:.8,wind:.25},2),t.setPose("idle"),await yi(t,8)}},{id:"butterfly",label:"Follow the butterfly",at:[-2,4.2],caption:"The butterfly that got away",async run(i){let t=i.me,e=i.world,n=new ut,s=new Ve(.22,.17);s.translate(.11,0,0);let r=pe(16774896,{side:Me,emissive:16773344,emissiveIntensity:.6}),o=new Mt(s,r),a=new Mt(s,r);a.scale.x=-1,o.rotation.x=a.rotation.x=-Math.PI/2;let c=new ut;c.add(o);let l=new ut;l.add(a),n.add(c,l);let h=Un(16774368,.7,.6);n.add(h),e.root.add(n);let u=0,d=m=>{u+=m*.32;let x=-2+Math.sin(u)*2.6+Math.sin(u*2.2)*.6,g=3.4+Math.cos(u*.8)*1.6,p=x-n.position.x,_=g-n.position.z;n.position.set(x,.7+Math.sin(u*5)*.2,g),n.rotation.y=Math.atan2(p,_)-Math.PI/2;let v=Math.sin(T.time*14)*1.1;c.rotation.z=v,l.rotation.z=-v};T.updaters.add(d),await yi(t,7),await uf({target:n,dist:1.5,seconds:9,label:"Follow it. Don\u2019t lose it."}),t.setPose("sitGround",{look:-.5,reach:!0}),await Qt(.5),T.updaters.delete(d);let f=n.position.clone();await fn(3,m=>{n.position.set(f.x+m*3,f.y+m*6,f.z-m*2);let x=Math.sin(T.time*14)*1.1;c.rotation.z=x,l.rotation.z=-x}),e.root.remove(n),await me("It never let you catch it. That was alright. Some things are only for watching."),await mn("butterfly","The butterfly that got away"),t.setPose("idle")}},{id:"firstWord",kind:"story",label:"Crawl back to the blanket",at:[1.2,1.2],radius:1.4,caption:{id:"firstWord",text:"Your first word"},async run(i){let t=i.me,e=i.mom,n=i.dad;await t.walkTo(1.25,1.05),t.setPose("sitGround"),t.face(1.2,4),await en(1.2,1.4,5.2,1.5),e.lookAt(t),n.lookAt(t),await Se(e,"Can you say \u201CMama\u201D? Ma-ma?"),await Se(n,"Don\u2019t listen to her. Da-da. Daaa-da."),i.dog.walkTo(2.4,2.4).then(()=>i.dog.setPose("sit"));let s=await sf("Your very first word\u2026",["\u201CMama.\u201D","\u201CDada.\u201D","\u201CWoof!\u201D"]),r=["Mama","Dada","Woof"][s];ue("coo",{pitch:1.2}),await Qt(.6),s===0?(e.setPose("jump"),await Se(e,"Did you hear that? Did everyone hear that?!"),e.setPose("sitGround"),await Se(n,"That\u2019s not fair. I\u2019ve been practising with them for weeks.")):s===1?(n.setPose("jump"),await Se(n,"YES! Everyone heard that, right? That counts!"),n.setPose("sitGround"),await Se(e,"Traitor."),await me("She was smiling when she said it.")):(ue("woof",{n:2}),i.dog.wag=2,await Se(i.grandpa,"Well. Now we know who the favourite is."),await Se(e,"Biscuit! You taught them that!")),ue("giggle"),await mn("firstWord",`Your first word: \u201C${r}\u201D`),T.state.flags.firstWord=r}},{id:"grandpaLap",kind:"story",label:"Go to Grandpa",anchor:i=>i.grandpa,offset:[0,0,.8],requires:["firstWord"],caption:"Asleep on Grandpa\u2019s lap",async run(i){let t=i.me,e=i.grandpa,n=i.dad;n.setPose("idle"),await n.walkToChar(t,.6),n.setPose("crouch"),await Qt(.5),n.pickUp(t),n.setPose("carry"),await n.walkTo(e.position.x+.2,e.position.z+.9),n.faceChar(e),await Se(e,"Give that little bundle here."),n.putDown(e.position.x,e.position.z+.3),e.pickUp(t),e.setPose("carry"),await n.walkTo(.4,.3),await en(e.position.x,e.position.z,4.6,2.5),Vi("whistle",{intensity:.5}),Ns("goldenAfternoon",10,{dream:.3}),await me("Grandpa whistled the same song your mother sang to you."),await me("He had sung it to her, once, when she was the one who was small."),await Gi({seconds:7,label:"Close your eyes."}),t.setPose("sleep"),await mn("grandpaLap","Asleep on Grandpa\u2019s lap",{window:10}),await Qt(1),Vi("tiny",{intensity:.2}),await Rr(4,"#16121a"),await Ar(["You won\u2019t remember any of this.","Not the stars, not the sunlight, not the song.","But they will.","They will carry it for you \u2014 until you\u2019re big enough to carry it yourself."],{minTime:1.4}),T.ui.clearNarration(),await Qt(1.2)}}],final:"grandpaLap"};var Fs=[vf,_f,bf];function Rv(){let i=new URLSearchParams(location.search);T.debug=i.has("debug"),T.speed=parseFloat(i.get("speed")||"1"),T.auto=i.has("auto"),T.autoSkip=i.has("skiplittle"),T.log=[],T.renderer=new ca(document.getElementById("game")),i.has("lowfx")&&(T.renderer.r.setPixelRatio(.5),T.renderer.r.shadowMap.enabled=!1,T.renderer.bloom.enabled=!1,T.renderer.resize()),T.scene=T.renderer.scene,T.camera=T.renderer.camera,T.input=new la(T.renderer.r.domElement),T.ui=new ha,T.audio=new da,T.album=new Mr,T.director=new Ta(Fs),T.director.onTitle=()=>{T.director.abort(),wf()};for(let s of Fs)for(let r of s.moments??[])r.caption&&T.album.register(r.caption.id??r.id,s.chapter,typeof r.caption=="string"?r.caption:r.caption.text,s.id);for(let s of Fs)(s.extraMoments??[]).forEach(([r,o])=>T.album.register(r,s.chapter,o,s.id));document.getElementById("menuBtn").addEventListener("click",()=>T.director.toggleMenu()),document.getElementById("albumBtn").addEventListener("click",()=>{T.album.open?T.album.hide():T.director.openAlbum()});let t=performance.now(),e=s=>{let r=Math.min(T.auto?.25:.05,(s-t)/1e3);t=s,T.realTime+=r;let o=T.input;if(o.pressed("pause")&&T.director.current&&T.director.toggleMenu(),o.pressed("album")&&T.director.current&&!T.director.menuOpen&&(T.album.open?T.album.hide():T.director.openAlbum()),!T.paused){let a=r*T.timeScale*T.speed;T.dt=a,T.time+=a;for(let c of[...T.updaters])c(a);for(let c of[...T.realUpdaters])c(r*T.speed);T.world&&T.world.update(a,T.time),T.director.update(a,r*T.speed),kr&&Pv(r)}T.ui.update(),T.renderer.update(r),T.renderer.render(),o.endFrame(),requestAnimationFrame(e)};requestAnimationFrame(e);let n=i.get("scene")??i.get("s");if(n!==null){let s=Fs.findIndex(o=>o.id===n);s<0&&(s=parseInt(n,10)||0),T.state.identity=i.get("who")==="father"?"father":"mother",T.state.childName=i.get("child")||T.state.childName,T.ui.fade(1,.01);let r=()=>{T.audio.init(),T.director.start(s)};if(i.has("noaudio"))T.director.start(s);else{let o=wt("div","");o.style.cssText="position:fixed;inset:0;z-index:99;display:flex;align-items:center;justify-content:center;color:#fff;font:20px sans-serif;cursor:pointer;pointer-events:auto",o.textContent="Click to start scene "+Fs[s].id,document.body.appendChild(o),o.addEventListener("click",()=>{o.remove(),r()})}return}wf()}var kr=null,Mf=0;function Cv(){T.world&&T.world.dispose();let i=new Us({name:"title"});T.world=i,kr=i,i.add(ga({w:9,d:9,h:1,top:B.grassSpring,seed:8}),0,0),i.add(xa({stage:3,season:"spring",swing:!0}),.6,-.8),i.add(ba(),-1.6,1.4,{ry:.6});let t=ye(4);for(let n=0;n<30;n++)i.add(ya(B.grassDark,n),t.range(-4,4),t.range(-4,4));for(let n=0;n<14;n++)i.add(Er(t.pick([B.pink,B.yellow,16777215]),n),t.range(-4,4),t.range(-4,4));i.add(Sr({kind:"blossom",season:"spring",size:.9,seed:3}),-3,-2.6),i.add(Tr(.8,2),3,2.6),i.particlesOf("petals",{area:{w:14,h:8,d:14},count:60}),i.particlesOf("motes",{area:{w:12,h:6,d:12},count:30,opacity:.6});for(let n=0;n<5;n++){let s=va(n+1,1.2),r=n*1.3;i.add(s,Math.cos(r)*11,Math.sin(r)*11,{y:-2+n*.6})}let e=T.renderer;e.setFollow(null),e.camGoal.set(0,.6,0),e.zoomGoal=11.5,e.camBounds=null,e.snapCamera(),e.setMood("dawnNursery",0,{dream:.35,tilt:.8})}function Pv(i){Mf+=i,T.renderer.camAz=45+Math.sin(Mf*.05)*25}function wf(){T.director.current=null,T.ui.showHud(!1),T.ui.clock(!1),Cv(),T.ui.fade(0,3);let i=document.getElementById("title");i.innerHTML="",i.classList.remove("hidden"),i.appendChild(wt("h1","","Little Moments")),i.appendChild(wt("div","sub","We are born so tiny. And then \u2014 so fast."));let t=wt("div","btns");i.appendChild(t);let e=Mr.readSave(),n=wt("button","",e?"Begin a new life":"Begin");if(t.appendChild(n),e&&e.sceneIndex>0){let r=wt("button","ghost","Continue");r.addEventListener("click",()=>{T.audio.init(),T.album.load(e),Sf(e.sceneIndex)}),t.insertBefore(r,n)}i.appendChild(wt("div","foot","Best with headphones \xB7 about two to three hours, in chapters \xB7 progress saves itself<br>WASD / arrows / click to move \xB7 Space to interact \xB7 hold Space to keep a moment \xB7 Esc to pause"));let s=()=>{T.audio.init(),T.audio.music("title",{intensity:.3}),T.audio.ambience({birds:.4,wind:.2})};window.addEventListener("pointerdown",s,{once:!0}),window.addEventListener("keydown",s,{once:!0}),n.addEventListener("click",()=>{T.audio.init(),T.audio.music("title",{intensity:.5}),t.innerHTML="",i.querySelector(".sub").textContent="In this story, you will grow up to become\u2026";let r=wt("div","who");t.appendChild(r);let o=wt("button","","a mother"),a=wt("button","","a father");r.appendChild(o),r.appendChild(a);let c=l=>{T.album.wipe(),T.state.identity=l,T.state.flags={},T.state.stats={emails:0,workCalls:0},Sf(0)};o.addEventListener("click",()=>c("mother")),a.addEventListener("click",()=>c("father"))})}async function Sf(i){let t=document.getElementById("title");await T.ui.fade(1,2.2,"#000"),t.classList.add("hidden"),t.innerHTML="",kr&&(kr.dispose(),kr=null,T.world=null),T.renderer.camAz=45,T.director.start(i)}window.addEventListener("DOMContentLoaded",Rv);window.G=T;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
