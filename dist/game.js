(()=>{var _p=Object.defineProperty;var vo=(n,t)=>()=>(n&&(t=n(n=0)),t);var wp=(n,t)=>{for(var e in t)_p(n,e,{get:t[e],enumerable:!0})};function ji(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function He(n,t,e){return Math.max(t,Math.min(e,n))}function Yh(n,t){return(n%t+t)%t}function jp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Qp(n,t,e){return n!==t?(e-n)/(t-n):0}function Cr(n,t,e){return(1-e)*n+e*t}function t0(n,t,e,i){return Cr(n,t,1-Math.exp(-e*i))}function e0(n,t=1){return t-Math.abs(Yh(n,t*2)-t)}function i0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function n0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function s0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function r0(n,t){return n+Math.random()*(t-n)}function o0(n){return n*(.5-Math.random())}function a0(n){n!==void 0&&(Yu=n);let t=Yu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function l0(n){return n*Rr}function c0(n){return n*Ur}function h0(n){return(n&n-1)===0&&n!==0}function u0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function d0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function f0(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),f=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function pf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function p0(){let n=sa("canvas");return n.style.display="block",n}function Er(n){n in Zu||(Zu[n]=!0,console.warn(n))}function m0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function g0(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function x0(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}function mn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Al(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Cl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){jn.fromArray(n,r);let a=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),l=t.dot(jn),c=e.dot(jn),h=i.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Vl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function C0(n,t,e,i,s,r,o,a){let l;if(t.side===di?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Oi,a),l===null)return null;Uo.copy(a),Uo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Uo);return c<e.near||c>e.far?null:{distance:c,point:Uo.clone(),object:n}}function No(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Io),n.getVertexPosition(l,Lo),n.getVertexPosition(c,Do);let h=C0(n,t,e,i,Io,Lo,Do,ud);if(h){let u=new C;Pn.getBarycoord(ud,Io,Lo,Do,u),s&&(h.uv=Pn.getInterpolatedAttribute(s,a,l,c,u,new K)),r&&(h.uv1=Pn.getInterpolatedAttribute(r,a,l,c,u,new K)),o&&(h.normal=Pn.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new C,materialIndex:0};Pn.getNormal(Io,Lo,Do,f.normal),h.face=f,h.barycoord=u}return h}function Ys(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function si(n){let t={};for(let e=0;e<n.length;e++){let i=Ys(n[e]);for(let s in i)t[s]=i[s]}return t}function P0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function gf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}function xf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function U0(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],d=u[p];d.start<=g.start+g.count+1?g.count=Math.max(g.count,d.start+d.count-g.start):(++f,u[f]=d)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let d=u[p];n.bufferSubData(c,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function gx(n,t,e,i,s,r,o){let a=new Pt(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function d(v){let y=!1,_=g(v);_===null?m(a,l):_&&_.isColor&&(m(_,1),y=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(v,y){let _=g(y);_&&(_.isCubeTexture||_.mapping===Ua)?(h===void 0&&(h=new Rt(new ri(1,1,1),new Te({name:"BackgroundCubeMaterial",uniforms:Ys($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),es.copy(y.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mx.makeRotationFromEuler(es)),h.material.toneMapped=ae.getTransfer(_.colorSpace)!==pe,(u!==_||f!==_.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,p=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Rt(new Ye(2,2),new Te({name:"BackgroundMaterial",uniforms:Ys($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ae.getTransfer(_.colorSpace)!==pe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,y){v.getRGB(Oo,gf(n)),i.buffers.color.setClear(Oo.r,Oo.g,Oo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:d,addToRenderList:x}}function xx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(b,L,B,U,H){let Y=!1,W=u(U,B,L);r!==W&&(r=W,c(r.object)),Y=p(b,U,B,H),Y&&g(b,U,B,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,_(b,L,B,U),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,L,B){let U=B.wireframe===!0,H=i[b.id];H===void 0&&(H={},i[b.id]=H);let Y=H[L.id];Y===void 0&&(Y={},H[L.id]=Y);let W=Y[U];return W===void 0&&(W=f(l()),Y[U]=W),W}function f(b){let L=[],B=[],U=[];for(let H=0;H<e;H++)L[H]=0,B[H]=0,U[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:U,object:b,attributes:{},index:null}}function p(b,L,B,U){let H=r.attributes,Y=L.attributes,W=0,it=B.getAttributes();for(let X in it)if(it[X].location>=0){let pt=H[X],yt=Y[X];if(yt===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(yt=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(yt=b.instanceColor)),pt===void 0||pt.attribute!==yt||yt&&pt.data!==yt.data)return!0;W++}return r.attributesNum!==W||r.index!==U}function g(b,L,B,U){let H={},Y=L.attributes,W=0,it=B.getAttributes();for(let X in it)if(it[X].location>=0){let pt=Y[X];pt===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(pt=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(pt=b.instanceColor));let yt={};yt.attribute=pt,pt&&pt.data&&(yt.data=pt.data),H[X]=yt,W++}r.attributes=H,r.attributesNum=W,r.index=U}function d(){let b=r.newAttributes;for(let L=0,B=b.length;L<B;L++)b[L]=0}function x(b){m(b,0)}function m(b,L){let B=r.newAttributes,U=r.enabledAttributes,H=r.attributeDivisors;B[b]=1,U[b]===0&&(n.enableVertexAttribArray(b),U[b]=1),H[b]!==L&&(n.vertexAttribDivisor(b,L),H[b]=L)}function v(){let b=r.newAttributes,L=r.enabledAttributes;for(let B=0,U=L.length;B<U;B++)L[B]!==b[B]&&(n.disableVertexAttribArray(B),L[B]=0)}function y(b,L,B,U,H,Y,W){W===!0?n.vertexAttribIPointer(b,L,B,H,Y):n.vertexAttribPointer(b,L,B,U,H,Y)}function _(b,L,B,U){d();let H=U.attributes,Y=B.getAttributes(),W=L.defaultAttributeValues;for(let it in Y){let X=Y[it];if(X.location>=0){let rt=H[it];if(rt===void 0&&(it==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),it==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor)),rt!==void 0){let pt=rt.normalized,yt=rt.itemSize,Vt=t.get(rt);if(Vt===void 0)continue;let oe=Vt.buffer,J=Vt.type,at=Vt.bytesPerElement,Tt=J===n.INT||J===n.UNSIGNED_INT||rt.gpuType===Bh;if(rt.isInterleavedBufferAttribute){let lt=rt.data,Lt=lt.stride,zt=rt.offset;if(lt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<X.locationSize;Ot++)m(X.location+Ot,lt.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ot=0;Ot<X.locationSize;Ot++)x(X.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let Ot=0;Ot<X.locationSize;Ot++)y(X.location+Ot,yt/X.locationSize,J,pt,Lt*at,(zt+yt/X.locationSize*Ot)*at,Tt)}else{if(rt.isInstancedBufferAttribute){for(let lt=0;lt<X.locationSize;lt++)m(X.location+lt,rt.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let lt=0;lt<X.locationSize;lt++)x(X.location+lt);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let lt=0;lt<X.locationSize;lt++)y(X.location+lt,yt/X.locationSize,J,pt,yt*at,yt/X.locationSize*lt*at,Tt)}}else if(W!==void 0){let pt=W[it];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv(X.location,pt);break;case 3:n.vertexAttrib3fv(X.location,pt);break;case 4:n.vertexAttrib4fv(X.location,pt);break;default:n.vertexAttrib1fv(X.location,pt)}}}}v()}function I(){P();for(let b in i){let L=i[b];for(let B in L){let U=L[B];for(let H in U)h(U[H].object),delete U[H];delete L[B]}delete i[b]}}function M(b){if(i[b.id]===void 0)return;let L=i[b.id];for(let B in L){let U=L[B];for(let H in U)h(U[H].object),delete U[H];delete L[B]}delete i[b.id]}function A(b){for(let L in i){let B=i[L];if(B[b.id]===void 0)continue;let U=B[b.id];for(let H in U)h(U[H].object),delete U[H];delete B[b.id]}}function P(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:M,releaseStatesOfProgram:A,initAttributes:d,enableAttribute:x,disableUnusedAttributes:v}}function yx(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,i,1)}function l(c,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let d=0;d<u;d++)g+=h[d]*f[d];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==_i&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let P=A===mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Bi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ki&&!P)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:d,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:I,maxSamples:M}}function _x(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Ni,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,d=u.clipIntersection,x=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!x)r?h(null):c();else{let v=r?0:i,y=v*4,_=m.clippingState||null;l.value=_,_=h(g,f,y,p);for(let I=0;I!==y;++I)_[I]=e[I];m.clippingState=_,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,p,g){let d=u!==null?u.length:0,x=null;if(d!==0){if(x=l.value,g!==!0||x===null){let m=p+d*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(x===null||x.length<m)&&(x=new Float32Array(m));for(let y=0,_=p;y!==d;++y,_+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(x,_),x[_+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=d,t.numIntersection=0,x}}function wx(n){let t=new WeakMap;function e(o,a){return a===fc?o.mapping=Xs:a===pc&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===fc||a===pc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Zc(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}function bx(n){let t=[],e=[],i=[],s=n,r=n-Os+1+pd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Os?l=pd[o-n+Os-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,d=3,x=2,m=1,v=new Float32Array(d*g*p),y=new Float32Array(x*g*p),_=new Float32Array(m*g*p);for(let M=0;M<p;M++){let A=M%3*2/3-1,P=M>2?0:-1,T=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];v.set(T,d*g*M),y.set(f,x*g*M);let b=[M,M,M,M,M,M];_.set(b,m*g*M)}let I=new Ce;I.setAttribute("position",new Ve(v,d)),I.setAttribute("uv",new Ve(y,x)),I.setAttribute("faceIndex",new Ve(_,m)),t.push(I),s>Os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function xd(n,t,e){let i=new Ge(n,t,e);return i.texture.mapping=Ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Mx(n,t,e){let i=new Float32Array(ss),s=new C(0,1,0);return new Te({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zh(),fragmentShader:`

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
		`,blending:Ue,depthTest:!1,depthWrite:!1})}function yd(){return new Te({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zh(),fragmentShader:`

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
		`,blending:Ue,depthTest:!1,depthWrite:!1})}function vd(){return new Te({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ue,depthTest:!1,depthWrite:!1})}function Zh(){return`

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
	`}function Sx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===fc||l===pc,h=l===Xs||l===qs;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ua(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new ua(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Tx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Er("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ex(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let d=f.morphAttributes[g];for(let x=0,m=d.length;x<m;x++)t.remove(d[x])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let d=p[g];for(let x=0,m=d.length;x<m;x++)t.update(d[x],n.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,d=0;if(p!==null){let v=p.array;d=p.version;for(let y=0,_=v.length;y<_;y+=3){let I=v[y+0],M=v[y+1],A=v[y+2];f.push(I,M,M,A,A,I)}}else if(g!==void 0){let v=g.array;d=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let I=y+0,M=y+1,A=y+2;f.push(I,M,M,A,A,I)}}else return;let x=new(pf(f)?la:aa)(f,1);x.version=d;let m=r.get(u);m&&t.remove(m),r.set(u,x)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ax(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),e.update(p,i,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let x=0;for(let m=0;m<g;m++)x+=p[m];e.update(x,i,1)}function u(f,p,g,d){if(g===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],d[m]);else{x.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,d,0,g);let m=0;for(let v=0;v<g;v++)m+=p[v]*d[v];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Rx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Cx(n,t,e){let i=new WeakMap,s=new xe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let T=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),d===!0&&(y=3);let _=a.attributes.position.count*y,I=1;_>t.maxTextureSize&&(I=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let M=new Float32Array(_*I*4*u),A=new oa(M,_,I,u);A.type=Ki,A.needsUpdate=!0;let P=y*4;for(let b=0;b<u;b++){let L=x[b],B=m[b],U=v[b],H=_*I*4*b;for(let Y=0;Y<L.count;Y++){let W=Y*P;p===!0&&(s.fromBufferAttribute(L,Y),M[H+W+0]=s.x,M[H+W+1]=s.y,M[H+W+2]=s.z,M[H+W+3]=0),g===!0&&(s.fromBufferAttribute(B,Y),M[H+W+4]=s.x,M[H+W+5]=s.y,M[H+W+6]=s.z,M[H+W+7]=0),d===!0&&(s.fromBufferAttribute(U,Y),M[H+W+8]=s.x,M[H+W+9]=s.y,M[H+W+10]=s.z,M[H+W+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new K(_,I)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let d=0;d<c.length;d++)p+=c[d];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Px(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}function ir(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=wd[s];if(r===void 0&&(r=new Float32Array(s),wd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Fa(n,t){let e=bd[t];e===void 0&&(e=new Int32Array(t),bd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ix(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Lx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function Dx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function kx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function Ux(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Td.set(i),n.uniformMatrix2fv(this.addr,!1,Td),Oe(e,i)}}function Nx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Sd.set(i),n.uniformMatrix3fv(this.addr,!1,Sd),Oe(e,i)}}function Fx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Md.set(i),n.uniformMatrix4fv(this.addr,!1,Md),Oe(e,i)}}function Ox(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Bx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function zx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function Hx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function Vx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Gx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function Wx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function Xx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function qx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(_d.compareFunction=ff,r=_d):r=yf,e.setTexture2D(t||r,s)}function Yx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||_f,s)}function Zx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||wf,s)}function $x(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||vf,s)}function Jx(n){switch(n){case 5126:return Ix;case 35664:return Lx;case 35665:return Dx;case 35666:return kx;case 35674:return Ux;case 35675:return Nx;case 35676:return Fx;case 5124:case 35670:return Ox;case 35667:case 35671:return Bx;case 35668:case 35672:return zx;case 35669:case 35673:return Hx;case 5125:return Vx;case 36294:return Gx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return $x}}function Kx(n,t){n.uniform1fv(this.addr,t)}function jx(n,t){let e=ir(t,this.size,2);n.uniform2fv(this.addr,e)}function Qx(n,t){let e=ir(t,this.size,3);n.uniform3fv(this.addr,e)}function ty(n,t){let e=ir(t,this.size,4);n.uniform4fv(this.addr,e)}function ey(n,t){let e=ir(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function iy(n,t){let e=ir(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ny(n,t){let e=ir(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function sy(n,t){n.uniform1iv(this.addr,t)}function ry(n,t){n.uniform2iv(this.addr,t)}function oy(n,t){n.uniform3iv(this.addr,t)}function ay(n,t){n.uniform4iv(this.addr,t)}function ly(n,t){n.uniform1uiv(this.addr,t)}function cy(n,t){n.uniform2uiv(this.addr,t)}function hy(n,t){n.uniform3uiv(this.addr,t)}function uy(n,t){n.uniform4uiv(this.addr,t)}function dy(n,t,e){let i=this.cache,s=t.length,r=Fa(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||yf,r[o])}function fy(n,t,e){let i=this.cache,s=t.length,r=Fa(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||_f,r[o])}function py(n,t,e){let i=this.cache,s=t.length,r=Fa(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||wf,r[o])}function my(n,t,e){let i=this.cache,s=t.length,r=Fa(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vf,r[o])}function gy(n){switch(n){case 5126:return Kx;case 35664:return jx;case 35665:return Qx;case 35666:return ty;case 35674:return ey;case 35675:return iy;case 35676:return ny;case 5124:case 35670:return sy;case 35667:case 35671:return ry;case 35668:case 35672:return oy;case 35669:case 35673:return ay;case 5125:return ly;case 36294:return cy;case 36295:return hy;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}function Ed(n,t){n.seq.push(t),n.map[t.id]=t}function xy(n,t,e){let i=n.name,s=i.length;for(Kl.lastIndex=0;;){let r=Kl.exec(i),o=Kl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ed(e,c===void 0?new $c(a,n,t):new Jc(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Kc(a),Ed(e,u)),e=u}}}function Ad(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function _y(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function wy(n){ae._getMatrix(Rd,ae.workingColorSpace,n);let t=`mat3( ${Rd.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(n)){case Na:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Cd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+_y(n.getShaderSource(t),o)}else return s}function by(n,t){let e=wy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function My(n,t){let e;switch(t){case kh:e="Linear";break;case Uh:e="Reinhard";break;case Nh:e="Cineon";break;case Fh:e="ACESFilmic";break;case Oh:e="AgX";break;case Zr:e="Neutral";break;case zp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Sy(){ae.getLuminanceCoefficients(zo);let n=zo.x.toFixed(4),t=zo.y.toFixed(4),e=zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ty(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function Ey(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ay(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ar(n){return n!==""}function Pd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Id(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function jc(n){return n.replace(Ry,Py)}function Py(n,t){let e=te[t];if(e===void 0){let i=Cy.get(t);if(i!==void 0)e=te[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return jc(e)}function Ld(n){return n.replace(Iy,Ly)}function Ly(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Dy(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===tf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Lh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function ky(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xs:case qs:t="ENVMAP_TYPE_CUBE";break;case Ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Uy(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qs:t="ENVMAP_MODE_REFRACTION";break}return t}function Ny(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ef:t="ENVMAP_BLENDING_MULTIPLY";break;case Op:t="ENVMAP_BLENDING_MIX";break;case Bp:t="ENVMAP_BLENDING_ADD";break}return t}function Fy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Oy(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Dy(e),c=ky(e),h=Uy(e),u=Ny(e),f=Fy(e),p=Ty(e),g=Ey(r),d=s.createProgram(),x,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ar).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ar).join(`
`),m.length>0&&(m+=`
`)):(x=[Dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),m=[Dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?te.tonemapping_pars_fragment:"",e.toneMapping!==In?My("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,by("linearToOutputTexel",e.outputColorSpace),Sy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ar).join(`
`)),o=jc(o),o=Pd(o,e),o=Id(o,e),a=jc(a),a=Pd(a,e),a=Id(a,e),o=Ld(o),a=Ld(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=v+x+o,_=v+m+a,I=Ad(s,s.VERTEX_SHADER,y),M=Ad(s,s.FRAGMENT_SHADER,_);s.attachShader(d,I),s.attachShader(d,M),e.index0AttributeName!==void 0?s.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function A(L){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(d).trim(),U=s.getShaderInfoLog(I).trim(),H=s.getShaderInfoLog(M).trim(),Y=!0,W=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,d,I,M);else{let it=Cd(s,I,"vertex"),X=Cd(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+it+`
`+X)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(U===""||H==="")&&(W=!1);W&&(L.diagnostics={runnable:Y,programLog:B,vertexShader:{log:U,prefix:x},fragmentShader:{log:H,prefix:m}})}s.deleteShader(I),s.deleteShader(M),P=new Gs(s,d),T=Ay(s,d)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(d,yy)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vy++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=I,this.fragmentShader=M,this}function zy(n,t,e,i,s,r,o){let a=new Fr,l=new Qc,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(T){return c.add(T),T===0?"uv":`uv${T}`}function x(T,b,L,B,U){let H=B.fog,Y=U.geometry,W=T.isMeshStandardMaterial?B.environment:null,it=(T.isMeshStandardMaterial?e:t).get(T.envMap||W),X=it&&it.mapping===Ua?it.image.height:null,rt=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));let pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,yt=pt!==void 0?pt.length:0,Vt=0;Y.morphAttributes.position!==void 0&&(Vt=1),Y.morphAttributes.normal!==void 0&&(Vt=2),Y.morphAttributes.color!==void 0&&(Vt=3);let oe,J,at,Tt;if(rt){let me=$i[rt];oe=me.vertexShader,J=me.fragmentShader}else oe=T.vertexShader,J=T.fragmentShader,l.update(T),at=l.getVertexShaderID(T),Tt=l.getFragmentShaderID(T);let lt=n.getRenderTarget(),Lt=n.state.buffers.depth.getReversed(),zt=U.isInstancedMesh===!0,Ot=U.isBatchedMesh===!0,ie=!!T.map,Q=!!T.matcap,ct=!!it,D=!!T.aoMap,Dt=!!T.lightMap,nt=!!T.bumpMap,bt=!!T.normalMap,ut=!!T.displacementMap,Ht=!!T.emissiveMap,vt=!!T.metalnessMap,R=!!T.roughnessMap,S=T.anisotropy>0,z=T.clearcoat>0,Z=T.dispersion>0,et=T.iridescence>0,$=T.sheen>0,It=T.transmission>0,dt=S&&!!T.anisotropyMap,xt=z&&!!T.clearcoatMap,Zt=z&&!!T.clearcoatNormalMap,st=z&&!!T.clearcoatRoughnessMap,Et=et&&!!T.iridescenceMap,Gt=et&&!!T.iridescenceThicknessMap,Xt=$&&!!T.sheenColorMap,At=$&&!!T.sheenRoughnessMap,ne=!!T.specularMap,qt=!!T.specularColorMap,he=!!T.specularIntensityMap,N=It&&!!T.transmissionMap,ft=It&&!!T.thicknessMap,q=!!T.gradientMap,tt=!!T.alphaMap,Mt=T.alphaTest>0,_t=!!T.alphaHash,$t=!!T.extensions,Pe=In;T.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Pe=n.toneMapping);let $e={shaderID:rt,shaderType:T.type,shaderName:T.name,vertexShader:oe,fragmentShader:J,defines:T.defines,customVertexShaderID:at,customFragmentShaderID:Tt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&U._colorsTexture!==null,instancing:zt,instancingColor:zt&&U.instanceColor!==null,instancingMorph:zt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:er,alphaToCoverage:!!T.alphaToCoverage,map:ie,matcap:Q,envMap:ct,envMapMode:ct&&it.mapping,envMapCubeUVHeight:X,aoMap:D,lightMap:Dt,bumpMap:nt,normalMap:bt,displacementMap:f&&ut,emissiveMap:Ht,normalMapObjectSpace:bt&&T.normalMapType===Wp,normalMapTangentSpace:bt&&T.normalMapType===qh,metalnessMap:vt,roughnessMap:R,anisotropy:S,anisotropyMap:dt,clearcoat:z,clearcoatMap:xt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:st,dispersion:Z,iridescence:et,iridescenceMap:Et,iridescenceThicknessMap:Gt,sheen:$,sheenColorMap:Xt,sheenRoughnessMap:At,specularMap:ne,specularColorMap:qt,specularIntensityMap:he,transmission:It,transmissionMap:N,thicknessMap:ft,gradientMap:q,opaque:T.transparent===!1&&T.blending===zs&&T.alphaToCoverage===!1,alphaMap:tt,alphaTest:Mt,alphaHash:_t,combine:T.combine,mapUv:ie&&d(T.map.channel),aoMapUv:D&&d(T.aoMap.channel),lightMapUv:Dt&&d(T.lightMap.channel),bumpMapUv:nt&&d(T.bumpMap.channel),normalMapUv:bt&&d(T.normalMap.channel),displacementMapUv:ut&&d(T.displacementMap.channel),emissiveMapUv:Ht&&d(T.emissiveMap.channel),metalnessMapUv:vt&&d(T.metalnessMap.channel),roughnessMapUv:R&&d(T.roughnessMap.channel),anisotropyMapUv:dt&&d(T.anisotropyMap.channel),clearcoatMapUv:xt&&d(T.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&d(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&d(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&d(T.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&d(T.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&d(T.sheenColorMap.channel),sheenRoughnessMapUv:At&&d(T.sheenRoughnessMap.channel),specularMapUv:ne&&d(T.specularMap.channel),specularColorMapUv:qt&&d(T.specularColorMap.channel),specularIntensityMapUv:he&&d(T.specularIntensityMap.channel),transmissionMapUv:N&&d(T.transmissionMap.channel),thicknessMapUv:ft&&d(T.thicknessMap.channel),alphaMapUv:tt&&d(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(bt||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Y.attributes.uv&&(ie||tt),fog:!!H,useFog:T.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:U.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Vt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ie&&T.map.isVideoTexture===!0&&ae.getTransfer(T.map.colorSpace)===pe,decodeVideoTextureEmissive:Ht&&T.emissiveMap.isVideoTexture===!0&&ae.getTransfer(T.emissiveMap.colorSpace)===pe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Se,flipSided:T.side===di,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:$t&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&T.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function m(T){let b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(let L in T.defines)b.push(L),b.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(v(b,T),y(b,T),b.push(n.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function v(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function y(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function _(T){let b=g[T.type],L;if(b){let B=$i[b];L=gi.clone(B.uniforms)}else L=T.uniforms;return L}function I(T,b){let L;for(let B=0,U=h.length;B<U;B++){let H=h[B];if(H.cacheKey===b){L=H,++L.usedTimes;break}}return L===void 0&&(L=new Oy(n,b,T,r),h.push(L)),L}function M(T){if(--T.usedTimes===0){let b=h.indexOf(T);h[b]=h[h.length-1],h.pop(),T.destroy()}}function A(T){l.remove(T)}function P(){l.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:_,acquireProgram:I,releaseProgram:M,releaseShaderCache:A,programs:h,dispose:P}}function Hy(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Vy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function kd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ud(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,p,g,d,x){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:d,group:x},n[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=d,m.group=x),t++,m}function a(u,f,p,g,d,x){let m=o(u,f,p,g,d,x);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(u,f,p,g,d,x){let m=o(u,f,p,g,d,x);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||Vy),i.length>1&&i.sort(f||kd),s.length>1&&s.sort(f||kd)}function h(){for(let u=t,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Gy(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Ud,n.set(i,[o])):s>=r.length?(o=new Ud,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Wy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Pt};break;case"SpotLight":e={position:new C,direction:new C,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function Xy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function Yy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Zy(n){let t=new Wy,e=Xy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new le,o=new le;function a(c){let h=0,u=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,d=0,x=0,m=0,v=0,y=0,_=0,I=0,M=0,A=0;c.sort(Yy);for(let T=0,b=c.length;T<b;T++){let L=c[T],B=L.color,U=L.intensity,H=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=B.r*U,u+=B.g*U,f+=B.b*U;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],U);A++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let it=L.shadow,X=e.get(L);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=W,p++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(B).multiplyScalar(U),W.distance=H,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[d]=W;let it=L.shadow;if(L.map&&(i.spotLightMap[I]=L.map,I++,it.updateMatrices(L),L.castShadow&&M++),i.spotLightMatrix[d]=it.matrix,L.castShadow){let X=e.get(L);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,i.spotShadow[d]=X,i.spotShadowMap[d]=Y,_++}d++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(B).multiplyScalar(U),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=W,x++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let it=L.shadow,X=e.get(L);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,X.shadowCameraNear=it.camera.near,X.shadowCameraFar=it.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=W,g++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(U),W.groundColor.copy(L.groundColor).multiplyScalar(U),i.hemi[m]=W,m++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==d||P.rectAreaLength!==x||P.hemiLength!==m||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==_||P.numSpotMaps!==I||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=d,i.rectArea.length=x,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+I-M,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=d,P.rectAreaLength=x,P.hemiLength=m,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=_,P.numSpotMaps=I,P.numLightProbes=A,i.version=qy++)}function l(c,h){let u=0,f=0,p=0,g=0,d=0,x=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let y=c[m];if(y.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(x),u++}else if(y.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(x),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(x),p++}else if(y.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(x),o.identity(),r.copy(y.matrixWorld),r.premultiply(x),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(x),f++}else if(y.isHemisphereLight){let _=i.hemi[d];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(x),d++}}}return{setup:a,setupView:l,state:i}}function Nd(n){let t=new Zy(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function $y(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Nd(n),t.set(s,[a])):r>=o.length?(a=new Nd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}function jy(n,t,e){let i=new Or,s=new K,r=new K,o=new xe,a=new eh({depthPacking:Gp}),l=new ih,c={},h=e.maxTextureSize,u={[Oi]:di,[di]:Oi,[Se]:Se},f=new Te({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:Jy,fragmentShader:Ky}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ce;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let d=new Rt(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tf;let m=this.type;this.render=function(M,A,P){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||M.length===0)return;let T=n.getRenderTarget(),b=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ue),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let U=m!==fn&&this.type===fn,H=m===fn&&this.type!==fn;for(let Y=0,W=M.length;Y<W;Y++){let it=M[Y],X=it.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let rt=X.getFrameExtents();if(s.multiply(rt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,X.mapSize.y=r.y)),X.map===null||U===!0||H===!0){let yt=this.type!==fn?{minFilter:je,magFilter:je}:{};X.map!==null&&X.map.dispose(),X.map=new Ge(s.x,s.y,yt),X.map.texture.name=it.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let pt=X.getViewportCount();for(let yt=0;yt<pt;yt++){let Vt=X.getViewport(yt);o.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),B.viewport(o),X.updateMatrices(it,yt),i=X.getFrustum(),_(A,P,X.camera,it,this.type)}X.isPointLightShadow!==!0&&this.type===fn&&v(X,P),X.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(T,b,L)};function v(M,A){let P=t.update(d);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ge(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(A,null,P,f,d,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(A,null,P,p,d,null)}function y(M,A,P,T){let b=null,L=P.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)b=L;else if(b=P.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let B=b.uuid,U=A.uuid,H=c[B];H===void 0&&(H={},c[B]=H);let Y=H[U];Y===void 0&&(Y=b.clone(),H[U]=Y,A.addEventListener("dispose",I)),b=Y}if(b.visible=A.visible,b.wireframe=A.wireframe,T===fn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let B=n.properties.get(b);B.light=P}return b}function _(M,A,P,T,b){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===fn)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,M.matrixWorld);let U=t.update(M),H=M.material;if(Array.isArray(H)){let Y=U.groups;for(let W=0,it=Y.length;W<it;W++){let X=Y[W],rt=H[X.materialIndex];if(rt&&rt.visible){let pt=y(M,rt,T,b);M.onBeforeShadow(n,M,A,P,U,pt,X),n.renderBufferDirect(P,null,U,pt,M,X),M.onAfterShadow(n,M,A,P,U,pt,X)}}}else if(H.visible){let Y=y(M,H,T,b);M.onBeforeShadow(n,M,A,P,U,Y,null),n.renderBufferDirect(P,null,U,Y,M,null),M.onAfterShadow(n,M,A,P,U,Y,null)}}let B=M.children;for(let U=0,H=B.length;U<H;U++)_(B[U],A,P,T,b)}function I(M){M.target.removeEventListener("dispose",I);for(let P in c){let T=c[P],b=M.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}function tv(n,t){function e(){let N=!1,ft=new xe,q=null,tt=new xe(0,0,0,0);return{setMask:function(Mt){q!==Mt&&!N&&(n.colorMask(Mt,Mt,Mt,Mt),q=Mt)},setLocked:function(Mt){N=Mt},setClear:function(Mt,_t,$t,Pe,$e){$e===!0&&(Mt*=Pe,_t*=Pe,$t*=Pe),ft.set(Mt,_t,$t,Pe),tt.equals(ft)===!1&&(n.clearColor(Mt,_t,$t,Pe),tt.copy(ft))},reset:function(){N=!1,q=null,tt.set(-1,0,0,0)}}}function i(){let N=!1,ft=!1,q=null,tt=null,Mt=null;return{setReversed:function(_t){if(ft!==_t){let $t=t.get("EXT_clip_control");ft?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);let Pe=Mt;Mt=null,this.setClear(Pe)}ft=_t},getReversed:function(){return ft},setTest:function(_t){_t?lt(n.DEPTH_TEST):Lt(n.DEPTH_TEST)},setMask:function(_t){q!==_t&&!N&&(n.depthMask(_t),q=_t)},setFunc:function(_t){if(ft&&(_t=Qy[_t]),tt!==_t){switch(_t){case oc:n.depthFunc(n.NEVER);break;case ac:n.depthFunc(n.ALWAYS);break;case lc:n.depthFunc(n.LESS);break;case Ws:n.depthFunc(n.LEQUAL);break;case cc:n.depthFunc(n.EQUAL);break;case hc:n.depthFunc(n.GEQUAL);break;case uc:n.depthFunc(n.GREATER);break;case dc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=_t}},setLocked:function(_t){N=_t},setClear:function(_t){Mt!==_t&&(ft&&(_t=1-_t),n.clearDepth(_t),Mt=_t)},reset:function(){N=!1,q=null,tt=null,Mt=null,ft=!1}}}function s(){let N=!1,ft=null,q=null,tt=null,Mt=null,_t=null,$t=null,Pe=null,$e=null;return{setTest:function(me){N||(me?lt(n.STENCIL_TEST):Lt(n.STENCIL_TEST))},setMask:function(me){ft!==me&&!N&&(n.stencilMask(me),ft=me)},setFunc:function(me,Ii,on){(q!==me||tt!==Ii||Mt!==on)&&(n.stencilFunc(me,Ii,on),q=me,tt=Ii,Mt=on)},setOp:function(me,Ii,on){(_t!==me||$t!==Ii||Pe!==on)&&(n.stencilOp(me,Ii,on),_t=me,$t=Ii,Pe=on)},setLocked:function(me){N=me},setClear:function(me){$e!==me&&(n.clearStencil(me),$e=me)},reset:function(){N=!1,ft=null,q=null,tt=null,Mt=null,_t=null,$t=null,Pe=null,$e=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,d=!1,x=null,m=null,v=null,y=null,_=null,I=null,M=null,A=new Pt(0,0,0),P=0,T=!1,b=null,L=null,B=null,U=null,H=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,it=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=it>=1):X.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=it>=2);let rt=null,pt={},yt=n.getParameter(n.SCISSOR_BOX),Vt=n.getParameter(n.VIEWPORT),oe=new xe().fromArray(yt),J=new xe().fromArray(Vt);function at(N,ft,q,tt){let Mt=new Uint8Array(4),_t=n.createTexture();n.bindTexture(N,_t),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $t=0;$t<q;$t++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ft,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,Mt):n.texImage2D(ft+$t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Mt);return _t}let Tt={};Tt[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),Tt[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Tt[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(n.DEPTH_TEST),o.setFunc(Ws),nt(!1),bt(Bu),lt(n.CULL_FACE),D(Ue);function lt(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function Lt(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function zt(N,ft){return u[N]!==ft?(n.bindFramebuffer(N,ft),u[N]=ft,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ft),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ft),!0):!1}function Ot(N,ft){let q=p,tt=!1;if(N){q=f.get(ft),q===void 0&&(q=[],f.set(ft,q));let Mt=N.textures;if(q.length!==Mt.length||q[0]!==n.COLOR_ATTACHMENT0){for(let _t=0,$t=Mt.length;_t<$t;_t++)q[_t]=n.COLOR_ATTACHMENT0+_t;q.length=Mt.length,tt=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,tt=!0);tt&&n.drawBuffers(q)}function ie(N){return g!==N?(n.useProgram(N),g=N,!0):!1}let Q={[Ei]:n.FUNC_ADD,[Sp]:n.FUNC_SUBTRACT,[Tp]:n.FUNC_REVERSE_SUBTRACT};Q[Ep]=n.MIN,Q[Ap]=n.MAX;let ct={[tr]:n.ZERO,[Rp]:n.ONE,[Cp]:n.SRC_COLOR,[sc]:n.SRC_ALPHA,[Dp]:n.SRC_ALPHA_SATURATE,[ka]:n.DST_COLOR,[Da]:n.DST_ALPHA,[Pp]:n.ONE_MINUS_SRC_COLOR,[rc]:n.ONE_MINUS_SRC_ALPHA,[Lp]:n.ONE_MINUS_DST_COLOR,[Ip]:n.ONE_MINUS_DST_ALPHA,[kp]:n.CONSTANT_COLOR,[Up]:n.ONE_MINUS_CONSTANT_COLOR,[Np]:n.CONSTANT_ALPHA,[Fp]:n.ONE_MINUS_CONSTANT_ALPHA};function D(N,ft,q,tt,Mt,_t,$t,Pe,$e,me){if(N===Ue){d===!0&&(Lt(n.BLEND),d=!1);return}if(d===!1&&(lt(n.BLEND),d=!0),N!==Dh){if(N!==x||me!==T){if((m!==Ei||_!==Ei)&&(n.blendEquation(n.FUNC_ADD),m=Ei,_=Ei),me)switch(N){case zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ai:n.blendFunc(n.ONE,n.ONE);break;case zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ai:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,y=null,I=null,M=null,A.set(0,0,0),P=0,x=N,T=me}return}Mt=Mt||ft,_t=_t||q,$t=$t||tt,(ft!==m||Mt!==_)&&(n.blendEquationSeparate(Q[ft],Q[Mt]),m=ft,_=Mt),(q!==v||tt!==y||_t!==I||$t!==M)&&(n.blendFuncSeparate(ct[q],ct[tt],ct[_t],ct[$t]),v=q,y=tt,I=_t,M=$t),(Pe.equals(A)===!1||$e!==P)&&(n.blendColor(Pe.r,Pe.g,Pe.b,$e),A.copy(Pe),P=$e),x=N,T=!1}function Dt(N,ft){N.side===Se?Lt(n.CULL_FACE):lt(n.CULL_FACE);let q=N.side===di;ft&&(q=!q),nt(q),N.blending===zs&&N.transparent===!1?D(Ue):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let tt=N.stencilWrite;a.setTest(tt),tt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ht(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):Lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(N){b!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),b=N)}function bt(N){N!==bp?(lt(n.CULL_FACE),N!==L&&(N===Bu?n.cullFace(n.BACK):N===Mp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Lt(n.CULL_FACE),L=N}function ut(N){N!==B&&(W&&n.lineWidth(N),B=N)}function Ht(N,ft,q){N?(lt(n.POLYGON_OFFSET_FILL),(U!==ft||H!==q)&&(n.polygonOffset(ft,q),U=ft,H=q)):Lt(n.POLYGON_OFFSET_FILL)}function vt(N){N?lt(n.SCISSOR_TEST):Lt(n.SCISSOR_TEST)}function R(N){N===void 0&&(N=n.TEXTURE0+Y-1),rt!==N&&(n.activeTexture(N),rt=N)}function S(N,ft,q){q===void 0&&(rt===null?q=n.TEXTURE0+Y-1:q=rt);let tt=pt[q];tt===void 0&&(tt={type:void 0,texture:void 0},pt[q]=tt),(tt.type!==N||tt.texture!==ft)&&(rt!==q&&(n.activeTexture(q),rt=q),n.bindTexture(N,ft||Tt[N]),tt.type=N,tt.texture=ft)}function z(){let N=pt[rt];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Zt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xt(N){oe.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),oe.copy(N))}function At(N){J.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),J.copy(N))}function ne(N,ft){let q=c.get(ft);q===void 0&&(q=new WeakMap,c.set(ft,q));let tt=q.get(N);tt===void 0&&(tt=n.getUniformBlockIndex(ft,N.name),q.set(N,tt))}function qt(N,ft){let tt=c.get(ft).get(N);l.get(ft)!==tt&&(n.uniformBlockBinding(ft,tt,N.__bindingPointIndex),l.set(ft,tt))}function he(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},rt=null,pt={},u={},f=new WeakMap,p=[],g=null,d=!1,x=null,m=null,v=null,y=null,_=null,I=null,M=null,A=new Pt(0,0,0),P=0,T=!1,b=null,L=null,B=null,U=null,H=null,oe.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Lt,bindFramebuffer:zt,drawBuffers:Ot,useProgram:ie,setBlending:D,setMaterial:Dt,setFlipSided:nt,setCullFace:bt,setLineWidth:ut,setPolygonOffset:Ht,setScissorTest:vt,activeTexture:R,bindTexture:S,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:et,texImage2D:Et,texImage3D:Gt,updateUBOMapping:ne,uniformBlockBinding:qt,texStorage2D:Zt,texStorage3D:st,texSubImage2D:$,texSubImage3D:It,compressedTexSubImage2D:dt,compressedTexSubImage3D:xt,scissor:Xt,viewport:At,reset:he}}function Fd(n,t,e,i){let s=ev(i);switch(e){case af:return n*t;case cf:return n*t;case hf:return n*t*2;case Vh:return n*t/s.components*s.byteLength;case Gh:return n*t/s.components*s.byteLength;case uf:return n*t*2/s.components*s.byteLength;case Wh:return n*t*2/s.components*s.byteLength;case lf:return n*t*3/s.components*s.byteLength;case _i:return n*t*4/s.components*s.byteLength;case Xh:return n*t*4/s.components*s.byteLength;case Ko:case jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qo:case ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xc:case vc:return Math.max(n,16)*Math.max(t,8)/4;case gc:case yc:return Math.max(n,8)*Math.max(t,8)/2;case _c:case wc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Tc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case kc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Uc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Nc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ea:case Fc:case Oc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case df:case Bc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case zc:case Hc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ev(n){switch(n){case Bi:case sf:return{byteLength:1,components:1};case kr:case rf:case mi:return{byteLength:2,components:1};case zh:case Hh:return{byteLength:2,components:4};case as:case Bh:case Ki:return{byteLength:4,components:1};case of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function iv(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new K,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return p?new OffscreenCanvas(R,S):sa("canvas")}function d(R,S,z){let Z=1,et=vt(R);if((et.width>z||et.height>z)&&(Z=z/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let $=Math.floor(Z*et.width),It=Math.floor(Z*et.height);u===void 0&&(u=g($,It));let dt=S?g($,It):u;return dt.width=$,dt.height=It,dt.getContext("2d").drawImage(R,0,0,$,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+$+"x"+It+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function x(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,S,z,Z,et=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=S;if(S===n.RED&&(z===n.FLOAT&&($=n.R32F),z===n.HALF_FLOAT&&($=n.R16F),z===n.UNSIGNED_BYTE&&($=n.R8)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.R8UI),z===n.UNSIGNED_SHORT&&($=n.R16UI),z===n.UNSIGNED_INT&&($=n.R32UI),z===n.BYTE&&($=n.R8I),z===n.SHORT&&($=n.R16I),z===n.INT&&($=n.R32I)),S===n.RG&&(z===n.FLOAT&&($=n.RG32F),z===n.HALF_FLOAT&&($=n.RG16F),z===n.UNSIGNED_BYTE&&($=n.RG8)),S===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RG8UI),z===n.UNSIGNED_SHORT&&($=n.RG16UI),z===n.UNSIGNED_INT&&($=n.RG32UI),z===n.BYTE&&($=n.RG8I),z===n.SHORT&&($=n.RG16I),z===n.INT&&($=n.RG32I)),S===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RGB8UI),z===n.UNSIGNED_SHORT&&($=n.RGB16UI),z===n.UNSIGNED_INT&&($=n.RGB32UI),z===n.BYTE&&($=n.RGB8I),z===n.SHORT&&($=n.RGB16I),z===n.INT&&($=n.RGB32I)),S===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RGBA8UI),z===n.UNSIGNED_SHORT&&($=n.RGBA16UI),z===n.UNSIGNED_INT&&($=n.RGBA32UI),z===n.BYTE&&($=n.RGBA8I),z===n.SHORT&&($=n.RGBA16I),z===n.INT&&($=n.RGBA32I)),S===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),S===n.RGBA){let It=et?Na:ae.getTransfer(Z);z===n.FLOAT&&($=n.RGBA32F),z===n.HALF_FLOAT&&($=n.RGBA16F),z===n.UNSIGNED_BYTE&&($=It===pe?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(R,S){let z;return R?S===null||S===as||S===Ln?z=n.DEPTH24_STENCIL8:S===Ki?z=n.DEPTH32F_STENCIL8:S===kr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===as||S===Ln?z=n.DEPTH_COMPONENT24:S===Ki?z=n.DEPTH_COMPONENT32F:S===kr&&(z=n.DEPTH_COMPONENT16),z}function I(R,S){return x(R)===!0||R.isFramebufferTexture&&R.minFilter!==je&&R.minFilter!==Ji?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function M(R){let S=R.target;S.removeEventListener("dispose",M),P(S),S.isVideoTexture&&h.delete(S)}function A(R){let S=R.target;S.removeEventListener("dispose",A),b(S)}function P(R){let S=i.get(R);if(S.__webglInit===void 0)return;let z=R.source,Z=f.get(z);if(Z){let et=Z[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&T(R),Object.keys(Z).length===0&&f.delete(z)}i.remove(R)}function T(R){let S=i.get(R);n.deleteTexture(S.__webglTexture);let z=R.source,Z=f.get(z);delete Z[S.__cacheKey],o.memory.textures--}function b(R){let S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let et=0;et<S.__webglFramebuffer[Z].length;et++)n.deleteFramebuffer(S.__webglFramebuffer[Z][et]);else n.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)n.deleteFramebuffer(S.__webglFramebuffer[Z]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let z=R.textures;for(let Z=0,et=z.length;Z<et;Z++){let $=i.get(z[Z]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(z[Z])}i.remove(R)}let L=0;function B(){L=0}function U(){let R=L;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function H(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Y(R,S){let z=i.get(R);if(R.isVideoTexture&&ut(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){let Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(z,R,S);return}}e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function W(R,S){let z=i.get(R);if(R.version>0&&z.__version!==R.version){J(z,R,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function it(R,S){let z=i.get(R);if(R.version>0&&z.__version!==R.version){J(z,R,S);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function X(R,S){let z=i.get(R);if(R.version>0&&z.__version!==R.version){at(z,R,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}let rt={[gn]:n.REPEAT,[rs]:n.CLAMP_TO_EDGE,[mc]:n.MIRRORED_REPEAT},pt={[je]:n.NEAREST,[Hp]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[Ji]:n.LINEAR,[Sl]:n.LINEAR_MIPMAP_NEAREST,[os]:n.LINEAR_MIPMAP_LINEAR},yt={[Xp]:n.NEVER,[Kp]:n.ALWAYS,[qp]:n.LESS,[ff]:n.LEQUAL,[Yp]:n.EQUAL,[Jp]:n.GEQUAL,[Zp]:n.GREATER,[$p]:n.NOTEQUAL};function Vt(R,S){if(S.type===Ki&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ji||S.magFilter===Sl||S.magFilter===_o||S.magFilter===os||S.minFilter===Ji||S.minFilter===Sl||S.minFilter===_o||S.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,rt[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,rt[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,rt[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,pt[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,pt[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,yt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===je||S.minFilter!==_o&&S.minFilter!==os||S.type===Ki&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function oe(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",M));let Z=S.source,et=f.get(Z);et===void 0&&(et={},f.set(Z,et));let $=H(S);if($!==R.__cacheKey){et[$]===void 0&&(et[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),et[$].usedTimes++;let It=et[R.__cacheKey];It!==void 0&&(et[R.__cacheKey].usedTimes--,It.usedTimes===0&&T(S)),R.__cacheKey=$,R.__webglTexture=et[$].texture}return z}function J(R,S,z){let Z=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=n.TEXTURE_3D);let et=oe(R,S),$=S.source;e.bindTexture(Z,R.__webglTexture,n.TEXTURE0+z);let It=i.get($);if($.version!==It.__version||et===!0){e.activeTexture(n.TEXTURE0+z);let dt=ae.getPrimaries(ae.workingColorSpace),xt=S.colorSpace===Cn?null:ae.getPrimaries(S.colorSpace),Zt=S.colorSpace===Cn||dt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let st=d(S.image,!1,s.maxTextureSize);st=Ht(S,st);let Et=r.convert(S.format,S.colorSpace),Gt=r.convert(S.type),Xt=y(S.internalFormat,Et,Gt,S.colorSpace,S.isVideoTexture);Vt(Z,S);let At,ne=S.mipmaps,qt=S.isVideoTexture!==!0,he=It.__version===void 0||et===!0,N=$.dataReady,ft=I(S,st);if(S.isDepthTexture)Xt=_(S.format===Dn,S.type),he&&(qt?e.texStorage2D(n.TEXTURE_2D,1,Xt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Xt,st.width,st.height,0,Et,Gt,null));else if(S.isDataTexture)if(ne.length>0){qt&&he&&e.texStorage2D(n.TEXTURE_2D,ft,Xt,ne[0].width,ne[0].height);for(let q=0,tt=ne.length;q<tt;q++)At=ne[q],qt?N&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,At.width,At.height,Et,Gt,At.data):e.texImage2D(n.TEXTURE_2D,q,Xt,At.width,At.height,0,Et,Gt,At.data);S.generateMipmaps=!1}else qt?(he&&e.texStorage2D(n.TEXTURE_2D,ft,Xt,st.width,st.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,Et,Gt,st.data)):e.texImage2D(n.TEXTURE_2D,0,Xt,st.width,st.height,0,Et,Gt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qt&&he&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Xt,ne[0].width,ne[0].height,st.depth);for(let q=0,tt=ne.length;q<tt;q++)if(At=ne[q],S.format!==_i)if(Et!==null)if(qt){if(N)if(S.layerUpdates.size>0){let Mt=Fd(At.width,At.height,S.format,S.type);for(let _t of S.layerUpdates){let $t=At.data.subarray(_t*Mt/At.data.BYTES_PER_ELEMENT,(_t+1)*Mt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,_t,At.width,At.height,1,Et,$t)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,At.width,At.height,st.depth,Et,At.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Xt,At.width,At.height,st.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,At.width,At.height,st.depth,Et,Gt,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,Xt,At.width,At.height,st.depth,0,Et,Gt,At.data)}else{qt&&he&&e.texStorage2D(n.TEXTURE_2D,ft,Xt,ne[0].width,ne[0].height);for(let q=0,tt=ne.length;q<tt;q++)At=ne[q],S.format!==_i?Et!==null?qt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(n.TEXTURE_2D,q,Xt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?N&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,At.width,At.height,Et,Gt,At.data):e.texImage2D(n.TEXTURE_2D,q,Xt,At.width,At.height,0,Et,Gt,At.data)}else if(S.isDataArrayTexture)if(qt){if(he&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Xt,st.width,st.height,st.depth),N)if(S.layerUpdates.size>0){let q=Fd(st.width,st.height,S.format,S.type);for(let tt of S.layerUpdates){let Mt=st.data.subarray(tt*q/st.data.BYTES_PER_ELEMENT,(tt+1)*q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,Et,Gt,Mt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Et,Gt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Xt,st.width,st.height,st.depth,0,Et,Gt,st.data);else if(S.isData3DTexture)qt?(he&&e.texStorage3D(n.TEXTURE_3D,ft,Xt,st.width,st.height,st.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Et,Gt,st.data)):e.texImage3D(n.TEXTURE_3D,0,Xt,st.width,st.height,st.depth,0,Et,Gt,st.data);else if(S.isFramebufferTexture){if(he)if(qt)e.texStorage2D(n.TEXTURE_2D,ft,Xt,st.width,st.height);else{let q=st.width,tt=st.height;for(let Mt=0;Mt<ft;Mt++)e.texImage2D(n.TEXTURE_2D,Mt,Xt,q,tt,0,Et,Gt,null),q>>=1,tt>>=1}}else if(ne.length>0){if(qt&&he){let q=vt(ne[0]);e.texStorage2D(n.TEXTURE_2D,ft,Xt,q.width,q.height)}for(let q=0,tt=ne.length;q<tt;q++)At=ne[q],qt?N&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Et,Gt,At):e.texImage2D(n.TEXTURE_2D,q,Xt,Et,Gt,At);S.generateMipmaps=!1}else if(qt){if(he){let q=vt(st);e.texStorage2D(n.TEXTURE_2D,ft,Xt,q.width,q.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et,Gt,st)}else e.texImage2D(n.TEXTURE_2D,0,Xt,Et,Gt,st);x(S)&&m(Z),It.__version=$.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function at(R,S,z){if(S.image.length!==6)return;let Z=oe(R,S),et=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);let $=i.get(et);if(et.version!==$.__version||Z===!0){e.activeTexture(n.TEXTURE0+z);let It=ae.getPrimaries(ae.workingColorSpace),dt=S.colorSpace===Cn?null:ae.getPrimaries(S.colorSpace),xt=S.colorSpace===Cn||It===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Zt=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,Et=[];for(let tt=0;tt<6;tt++)!Zt&&!st?Et[tt]=d(S.image[tt],!0,s.maxCubemapSize):Et[tt]=st?S.image[tt].image:S.image[tt],Et[tt]=Ht(S,Et[tt]);let Gt=Et[0],Xt=r.convert(S.format,S.colorSpace),At=r.convert(S.type),ne=y(S.internalFormat,Xt,At,S.colorSpace),qt=S.isVideoTexture!==!0,he=$.__version===void 0||Z===!0,N=et.dataReady,ft=I(S,Gt);Vt(n.TEXTURE_CUBE_MAP,S);let q;if(Zt){qt&&he&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,ne,Gt.width,Gt.height);for(let tt=0;tt<6;tt++){q=Et[tt].mipmaps;for(let Mt=0;Mt<q.length;Mt++){let _t=q[Mt];S.format!==_i?Xt!==null?qt?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,0,0,_t.width,_t.height,Xt,_t.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,ne,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,0,0,_t.width,_t.height,Xt,At,_t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,ne,_t.width,_t.height,0,Xt,At,_t.data)}}}else{if(q=S.mipmaps,qt&&he){q.length>0&&ft++;let tt=vt(Et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,ne,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){qt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Et[tt].width,Et[tt].height,Xt,At,Et[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ne,Et[tt].width,Et[tt].height,0,Xt,At,Et[tt].data);for(let Mt=0;Mt<q.length;Mt++){let $t=q[Mt].image[tt].image;qt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,0,0,$t.width,$t.height,Xt,At,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,ne,$t.width,$t.height,0,Xt,At,$t.data)}}else{qt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Xt,At,Et[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ne,Xt,At,Et[tt]);for(let Mt=0;Mt<q.length;Mt++){let _t=q[Mt];qt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,0,0,Xt,At,_t.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,ne,Xt,At,_t.image[tt])}}}x(S)&&m(n.TEXTURE_CUBE_MAP),$.__version=et.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Tt(R,S,z,Z,et,$){let It=r.convert(z.format,z.colorSpace),dt=r.convert(z.type),xt=y(z.internalFormat,It,dt,z.colorSpace),Zt=i.get(S),st=i.get(z);if(st.__renderTarget=S,!Zt.__hasExternalTextures){let Et=Math.max(1,S.width>>$),Gt=Math.max(1,S.height>>$);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,$,xt,Et,Gt,S.depth,0,It,dt,null):e.texImage2D(et,$,xt,Et,Gt,0,It,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),bt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,et,st.__webglTexture,0,nt(S)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,et,st.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(R,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){let Z=S.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,$=_(S.stencilBuffer,et),It=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=nt(S);bt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,$,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,$,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,$,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,It,n.RENDERBUFFER,R)}else{let Z=S.textures;for(let et=0;et<Z.length;et++){let $=Z[et],It=r.convert($.format,$.colorSpace),dt=r.convert($.type),xt=y($.internalFormat,It,dt,$.colorSpace),Zt=nt(S);z&&bt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt,xt,S.width,S.height):bt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt,xt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,xt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);let et=Z.__webglTexture,$=nt(S);if(S.depthTexture.format===Hs)bt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(S.depthTexture.format===Dn)bt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function zt(R){let S=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let Z=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=Z}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Lt(S.__webglFramebuffer,R)}else if(z){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=n.createRenderbuffer(),lt(S.__webglDepthbuffer[Z],R,!1);else{let et=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,$)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),lt(S.__webglDepthbuffer,R,!1);else{let Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,et)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(R,S,z){let Z=i.get(R);S!==void 0&&Tt(Z.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&zt(R)}function ie(R){let S=R.texture,z=i.get(R),Z=i.get(S);R.addEventListener("dispose",A);let et=R.textures,$=R.isWebGLCubeRenderTarget===!0,It=et.length>1;if(It||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=S.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let xt=0;xt<S.mipmaps.length;xt++)z.__webglFramebuffer[dt][xt]=n.createFramebuffer()}else z.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)z.__webglFramebuffer[dt]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(It)for(let dt=0,xt=et.length;dt<xt;dt++){let Zt=i.get(et[dt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&bt(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){let xt=et[dt];z.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[dt]);let Zt=r.convert(xt.format,xt.colorSpace),st=r.convert(xt.type),Et=y(xt.internalFormat,Zt,st,xt.colorSpace,R.isXRRenderTarget===!0),Gt=nt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,Et,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,z.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),lt(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Vt(n.TEXTURE_CUBE_MAP,S);for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)Tt(z.__webglFramebuffer[dt][xt],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,xt);else Tt(z.__webglFramebuffer[dt],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);x(S)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let dt=0,xt=et.length;dt<xt;dt++){let Zt=et[dt],st=i.get(Zt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),Vt(n.TEXTURE_2D,Zt),Tt(z.__webglFramebuffer,R,Zt,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),x(Zt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,Z.__webglTexture),Vt(dt,S),S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)Tt(z.__webglFramebuffer[xt],R,S,n.COLOR_ATTACHMENT0,dt,xt);else Tt(z.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,dt,0);x(S)&&m(dt),e.unbindTexture()}R.depthBuffer&&zt(R)}function Q(R){let S=R.textures;for(let z=0,Z=S.length;z<Z;z++){let et=S[z];if(x(et)){let $=v(R),It=i.get(et).__webglTexture;e.bindTexture($,It),m($),e.unbindTexture()}}}let ct=[],D=[];function Dt(R){if(R.samples>0){if(bt(R)===!1){let S=R.textures,z=R.width,Z=R.height,et=n.COLOR_BUFFER_BIT,$=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,It=i.get(R),dt=S.length>1;if(dt)for(let xt=0;xt<S.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let xt=0;xt<S.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,It.__webglColorRenderbuffer[xt]);let Zt=i.get(S[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Zt,0)}n.blitFramebuffer(0,0,z,Z,0,0,z,Z,et,n.NEAREST),l===!0&&(ct.length=0,D.length=0,ct.push(n.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ct.push($),D.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let xt=0;xt<S.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,It.__webglColorRenderbuffer[xt]);let Zt=i.get(S[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,Zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function nt(R){return Math.min(s.maxSamples,R.samples)}function bt(R){let S=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ut(R){let S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Ht(R,S){let z=R.colorSpace,Z=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==er&&z!==Cn&&(ae.getTransfer(z)===pe?(Z!==_i||et!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=it,this.setTextureCube=X,this.rebindTextures=Ot,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=bt}function nv(n,t){function e(i,s=Cn){let r,o=ae.getTransfer(s);if(i===Bi)return n.UNSIGNED_BYTE;if(i===zh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===of)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sf)return n.BYTE;if(i===rf)return n.SHORT;if(i===kr)return n.UNSIGNED_SHORT;if(i===Bh)return n.INT;if(i===as)return n.UNSIGNED_INT;if(i===Ki)return n.FLOAT;if(i===mi)return n.HALF_FLOAT;if(i===af)return n.ALPHA;if(i===lf)return n.RGB;if(i===_i)return n.RGBA;if(i===cf)return n.LUMINANCE;if(i===hf)return n.LUMINANCE_ALPHA;if(i===Hs)return n.DEPTH_COMPONENT;if(i===Dn)return n.DEPTH_STENCIL;if(i===Vh)return n.RED;if(i===Gh)return n.RED_INTEGER;if(i===uf)return n.RG;if(i===Wh)return n.RG_INTEGER;if(i===Xh)return n.RGBA_INTEGER;if(i===Ko||i===jo||i===Qo||i===ta)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gc||i===xc||i===yc||i===vc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_c||i===wc||i===bc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_c||i===wc)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mc||i===Sc||i===Tc||i===Ec||i===Ac||i===Rc||i===Cc||i===Pc||i===Ic||i===Lc||i===Dc||i===kc||i===Uc||i===Nc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Mc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ec)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ac)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ic)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ea||i===Fc||i===Oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ea)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===df||i===Bc||i===zc||i===Hc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ea)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ln?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function lv(n,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,gf(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,v,y,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(x,m):m.isMeshToonMaterial?(r(x,m),u(x,m)):m.isMeshPhongMaterial?(r(x,m),h(x,m)):m.isMeshStandardMaterial?(r(x,m),f(x,m),m.isMeshPhysicalMaterial&&p(x,m,_)):m.isMeshMatcapMaterial?(r(x,m),g(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),d(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?l(x,m,v,y):m.isSpriteMaterial?c(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===di&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===di&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let v=t.get(m),y=v.envMap,_=v.envMapRotation;y&&(x.envMap.value=y,is.copy(_),is.x*=-1,is.y*=-1,is.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),x.envMapRotation.value.setFromMatrix4(av.makeRotationFromEuler(is)),x.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function l(x,m,v,y){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*v,x.scale.value=y*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function u(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function f(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function p(x,m,v){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===di&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,m){m.matcap&&(x.matcap.value=m.matcap)}function d(x,m){let v=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cv(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let _=y.program;i.uniformBlockBinding(v,_)}function c(v,y){let _=s[v.id];_===void 0&&(g(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",x));let I=y.program;i.updateUBOMapping(v,I);let M=t.render.frame;r[v.id]!==M&&(f(v),r[v.id]=M)}function h(v){let y=u();v.__bindingPointIndex=y;let _=n.createBuffer(),I=v.__size,M=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,I,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let y=s[v.id],_=v.uniforms,I=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let M=0,A=_.length;M<A;M++){let P=Array.isArray(_[M])?_[M]:[_[M]];for(let T=0,b=P.length;T<b;T++){let L=P[T];if(p(L,M,T,I)===!0){let B=L.__offset,U=Array.isArray(L.value)?L.value:[L.value],H=0;for(let Y=0;Y<U.length;Y++){let W=U[Y],it=d(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,B+H,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,H),H+=it.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,y,_,I){let M=v.value,A=y+"_"+_;if(I[A]===void 0)return typeof M=="number"||typeof M=="boolean"?I[A]=M:I[A]=M.clone(),!0;{let P=I[A];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return I[A]=M,!0}else if(P.equals(M)===!1)return P.copy(M),!0}return!1}function g(v){let y=v.uniforms,_=0,I=16;for(let A=0,P=y.length;A<P;A++){let T=Array.isArray(y[A])?y[A]:[y[A]];for(let b=0,L=T.length;b<L;b++){let B=T[b],U=Array.isArray(B.value)?B.value:[B.value];for(let H=0,Y=U.length;H<Y;H++){let W=U[H],it=d(W),X=_%I,rt=X%it.boundary,pt=X+rt;_+=rt,pt!==0&&I-pt<it.storage&&(_+=I-pt),B.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=it.storage}}}let M=_%I;return M>0&&(_+=I-M),v.__size=_,v.__cache={},this}function d(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function x(v){let y=v.target;y.removeEventListener("dispose",x);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}function Go(n,t,e,i,s,r){Ns.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(wr.x=r*Ns.x-s*Ns.y,wr.y=s*Ns.x+r*Ns.y):wr.copy(Ns),n.copy(t),n.x+=wr.x,n.y+=wr.y,n.applyMatrix4(bf)}function Gd(n,t,e,i,s,r,o){let a=ah.distanceSqToPoint(n);if(a<e){let l=new C;ah.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}function $h(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}function Wd(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function uv(n,t){let e=1-n;return e*e*t}function dv(n,t){return 2*(1-n)*n*t}function fv(n,t){return n*n*t}function Ir(n,t,e,i){return uv(n,t)+dv(n,e)+fv(n,i)}function pv(n,t){let e=1-n;return e*e*e*t}function mv(n,t){let e=1-n;return 3*e*e*n*t}function gv(n,t){return 3*(1-n)*n*n*t}function xv(n,t){return n*n*n*t}function Lr(n,t,e,i,s){return pv(n,t)+mv(n,e)+gv(n,i)+xv(n,s)}function Mf(n,t,e,i,s){let r,o;if(s===kv(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Xd(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Xd(r,n[r],n[r+1],o);return o&&Oa(o,o.next)&&(Wr(o),o=o.next),o}function cs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Oa(e,e.next)||Re(e.prev,e,e.next)===0)){if(Wr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Vr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Rv(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?_v(n,i,s,r):vv(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Wr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=wv(cs(n),t,e),Vr(n,t,e,i,s,r,2)):o===2&&bv(n,t,e,i,s,r):Vr(cs(n),t,e,i,s,r,1);break}}}function vv(n){let t=n.prev,e=n,i=n.next;if(Re(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&Bs(s,a,r,l,o,c,g.x,g.y)&&Re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _v(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Re(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,d=a>l?a>c?a:c:l>c?l:c,x=h>u?h>f?h:f:u>f?u:f,m=gh(p,g,t,e,i),v=gh(d,x,t,e,i),y=n.prevZ,_=n.nextZ;for(;y&&y.z>=m&&_&&_.z<=v;){if(y.x>=p&&y.x<=d&&y.y>=g&&y.y<=x&&y!==s&&y!==o&&Bs(a,h,l,u,c,f,y.x,y.y)&&Re(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=p&&_.x<=d&&_.y>=g&&_.y<=x&&_!==s&&_!==o&&Bs(a,h,l,u,c,f,_.x,_.y)&&Re(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y.x>=p&&y.x<=d&&y.y>=g&&y.y<=x&&y!==s&&y!==o&&Bs(a,h,l,u,c,f,y.x,y.y)&&Re(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=p&&_.x<=d&&_.y>=g&&_.y<=x&&_!==s&&_!==o&&Bs(a,h,l,u,c,f,_.x,_.y)&&Re(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function wv(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Oa(s,r)&&Sf(s,i,i.next,r)&&Gr(s,r)&&Gr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Wr(i),Wr(i.next),i=n=r),i=i.next}while(i!==n);return cs(i)}function bv(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Iv(o,a)){let l=Tf(o,a);o=cs(o,o.next),l=cs(l,l.next),Vr(o,t,e,i,s,r,0),Vr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Mv(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Mf(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Pv(c));for(s.sort(Sv),r=0;r<s.length;r++)e=Tv(s[r],e);return e}function Sv(n,t){return n.x-t.x}function Tv(n,t){let e=Ev(n,t);if(!e)return t;let i=Tf(e,n);return cs(i,i.next),cs(e,e.next)}function Ev(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Bs(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Gr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Av(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Av(n,t){return Re(n.prev,n,t.prev)<0&&Re(t.next,n,n.next)<0}function Rv(n,t,e,i){let s=n;do s.z===0&&(s.z=gh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Cv(s)}function Cv(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function gh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Pv(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Bs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Iv(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Lv(n,t)&&(Gr(n,t)&&Gr(t,n)&&Dv(n,t)&&(Re(n.prev,n,t.prev)||Re(n,t.prev,t))||Oa(n,t)&&Re(n.prev,n,n.next)>0&&Re(t.prev,t,t.next)>0)}function Re(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Oa(n,t){return n.x===t.x&&n.y===t.y}function Sf(n,t,e,i){let s=$o(Re(n,t,e)),r=$o(Re(n,t,i)),o=$o(Re(e,i,n)),a=$o(Re(e,i,t));return!!(s!==r&&o!==a||s===0&&Zo(n,e,t)||r===0&&Zo(n,i,t)||o===0&&Zo(e,n,i)||a===0&&Zo(e,t,i))}function Zo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function $o(n){return n>0?1:n<0?-1:0}function Lv(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Sf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Gr(n,t){return Re(n.prev,n,n.next)<0?Re(n,t,n.next)>=0&&Re(n,n.prev,t)>=0:Re(n,t,n.prev)<0||Re(n,n.next,t)<0}function Dv(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Tf(n,t){let e=new xh(n.i,n.x,n.y),i=new xh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Xd(n,t,e,i){let s=new xh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Wr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function xh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function kv(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}function qd(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Yd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}function Nv(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function Jo(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Fv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Kd(){return performance.now()}function Qd(n,t){return n.distance-t.distance}function Ph(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Ph(r[o],t,e,!0)}}var Ih,bp,Bu,Mp,tf,Lh,fn,Oi,di,Se,Ue,zs,Ai,zu,Hu,Dh,Ei,Sp,Tp,Ep,Ap,tr,Rp,Cp,Pp,sc,rc,Da,Ip,ka,Lp,Dp,kp,Up,Np,Fp,oc,ac,lc,Ws,cc,hc,uc,dc,ef,Op,Bp,In,kh,Uh,Nh,Fh,zp,Oh,Zr,nf,Xs,qs,fc,pc,Ua,gn,rs,mc,je,Hp,_o,Ji,Sl,os,Bi,sf,rf,kr,Bh,as,Ki,mi,zh,Hh,Ln,of,af,lf,_i,cf,hf,Hs,Dn,Vh,Gh,uf,Wh,Xh,Ko,jo,Qo,ta,gc,xc,yc,vc,_c,wc,bc,Mc,Sc,Tc,Ec,Ac,Rc,Cc,Pc,Ic,Lc,Dc,kc,Uc,Nc,ea,Fc,Oc,df,Bc,zc,Hc,ia,Vc,Tl,Vu,Gu,Wu,Vp,Gp,qh,Wp,Cn,qe,er,Na,pe,vs,Xu,Xp,qp,Yp,ff,Zp,$p,Jp,Kp,Gc,qu,pn,na,kn,Je,Yu,Rr,Ur,ps,K,Kt,El,Zu,ae,$u,Ju,Ku,ju,Qu,_s,Wc,y0,ra,v0,fi,xe,Xc,Ge,oa,qc,Un,C,Rl,td,xn,ln,Di,wo,ws,bs,Ms,Mn,Sn,Kn,gr,bo,Mo,jn,_0,xr,Pl,Nn,cn,Il,So,Tn,Ll,To,Dl,Nr,le,Ss,ki,w0,b0,En,Eo,yi,ed,id,Qi,Fr,M0,nd,Ts,hn,Ao,yr,S0,T0,sd,rd,od,ad,E0,Es,kl,Ne,Ui,un,Ul,dn,As,Rs,ld,Nl,Fl,Ol,Bl,zl,Hl,Pn,mf,An,Ro,Pt,Ke,A0,tn,Qe,Le,Co,Ve,aa,la,se,R0,Ti,Gl,Cs,vi,vr,ze,Ce,cd,Qn,Po,hd,Io,Lo,Do,Wl,ko,ud,Uo,Rt,ri,gi,I0,L0,Te,ca,Rn,dd,fd,ui,Ps,Is,Yc,ha,Zc,Xl,D0,k0,Ni,ts,Fo,Or,Ye,N0,F0,O0,B0,z0,H0,V0,G0,W0,X0,q0,Y0,Z0,$0,J0,K0,j0,Q0,tm,em,im,nm,sm,rm,om,am,lm,cm,hm,um,dm,fm,pm,mm,gm,xm,ym,vm,_m,wm,bm,Mm,Sm,Tm,Em,Am,Rm,Cm,Pm,Im,Lm,Dm,km,Um,Nm,Fm,Om,Bm,zm,Hm,Vm,Gm,Wm,Xm,qm,Ym,Zm,$m,Jm,Km,jm,Qm,tg,eg,ig,ng,sg,rg,og,ag,lg,cg,hg,ug,dg,fg,pg,mg,gg,xg,yg,vg,_g,wg,bg,Mg,Sg,Tg,Eg,Ag,Rg,Cg,Pg,Ig,Lg,Dg,kg,Ug,Ng,Fg,Og,Bg,zg,Hg,Vg,Gg,Wg,Xg,qg,Yg,Zg,$g,Jg,Kg,jg,Qg,tx,ex,ix,nx,sx,rx,ox,ax,lx,cx,hx,ux,dx,fx,px,te,gt,$i,Oo,es,mx,Fn,Os,pd,ss,ql,md,Yl,Zl,$l,Jl,ns,Ls,gd,ua,Zs,yf,_d,vf,_f,wf,wd,bd,Md,Sd,Td,$c,Jc,Kc,Kl,Gs,yy,vy,Rd,zo,Ry,Cy,Iy,By,Qc,th,qy,eh,ih,Jy,Ky,Qy,nh,ot,sv,Pr,rv,ov,sh,rh,is,av,da,fa,pa,oh,ni,ma,Br,Ds,_r,ks,Us,Ns,wr,bf,Ho,br,Vo,Od,jl,Bd,ga,ls,xa,Fs,zd,Wo,Hd,hv,Mr,Sr,ya,$s,Vd,ah,Xo,qo,zr,Js,Ri,Hr,lh,Yo,Ql,tc,ec,ch,va,hh,_a,uh,wa,dh,ba,fh,ph,Ma,Sa,Ks,Ze,On,mh,js,yv,Dr,Xr,Uv,pi,Ta,Ci,yn,Ea,hs,Aa,Qs,yh,vh,_h,zi,us,wh,bh,Mh,Ra,ds,Sh,Th,Ov,Eh,qr,Ca,ic,Zd,$d,Pa,Jd,Tr,nc,Ah,fs,Rh,Yr,Ia,Jh,Bv,Kh,zv,Hv,Vv,Gv,Wv,Xv,qv,Ch,Ae,M_,jd,La,Ie=vo(()=>{Ih="170",bp=0,Bu=1,Mp=2,tf=1,Lh=2,fn=3,Oi=0,di=1,Se=2,Ue=0,zs=1,Ai=2,zu=3,Hu=4,Dh=5,Ei=100,Sp=101,Tp=102,Ep=103,Ap=104,tr=200,Rp=201,Cp=202,Pp=203,sc=204,rc=205,Da=206,Ip=207,ka=208,Lp=209,Dp=210,kp=211,Up=212,Np=213,Fp=214,oc=0,ac=1,lc=2,Ws=3,cc=4,hc=5,uc=6,dc=7,ef=0,Op=1,Bp=2,In=0,kh=1,Uh=2,Nh=3,Fh=4,zp=5,Oh=6,Zr=7,nf=300,Xs=301,qs=302,fc=303,pc=304,Ua=306,gn=1e3,rs=1001,mc=1002,je=1003,Hp=1004,_o=1005,Ji=1006,Sl=1007,os=1008,Bi=1009,sf=1010,rf=1011,kr=1012,Bh=1013,as=1014,Ki=1015,mi=1016,zh=1017,Hh=1018,Ln=1020,of=35902,af=1021,lf=1022,_i=1023,cf=1024,hf=1025,Hs=1026,Dn=1027,Vh=1028,Gh=1029,uf=1030,Wh=1031,Xh=1033,Ko=33776,jo=33777,Qo=33778,ta=33779,gc=35840,xc=35841,yc=35842,vc=35843,_c=36196,wc=37492,bc=37496,Mc=37808,Sc=37809,Tc=37810,Ec=37811,Ac=37812,Rc=37813,Cc=37814,Pc=37815,Ic=37816,Lc=37817,Dc=37818,kc=37819,Uc=37820,Nc=37821,ea=36492,Fc=36494,Oc=36495,df=36283,Bc=36284,zc=36285,Hc=36286,ia=2300,Vc=2301,Tl=2302,Vu=2400,Gu=2401,Wu=2402,Vp=3200,Gp=3201,qh=0,Wp=1,Cn="",qe="srgb",er="srgb-linear",Na="linear",pe="srgb",vs=7680,Xu=519,Xp=512,qp=513,Yp=514,ff=515,Zp=516,$p=517,Jp=518,Kp=519,Gc=35044,qu="300 es",pn=2e3,na=2001,kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=1234567,Rr=Math.PI/180,Ur=180/Math.PI;ps={DEG2RAD:Rr,RAD2DEG:Ur,generateUUID:ji,clamp:He,euclideanModulo:Yh,mapLinear:jp,inverseLerp:Qp,lerp:Cr,damp:t0,pingpong:e0,smoothstep:i0,smootherstep:n0,randInt:s0,randFloat:r0,randFloatSpread:o0,seededRandom:a0,degToRad:l0,radToDeg:c0,isPowerOfTwo:h0,ceilPowerOfTwo:u0,floorPowerOfTwo:d0,setQuaternionFromProperEuler:f0,normalize:ge,denormalize:Fi},K=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],d=s[0],x=s[3],m=s[6],v=s[1],y=s[4],_=s[7],I=s[2],M=s[5],A=s[8];return r[0]=o*d+a*v+l*I,r[3]=o*x+a*y+l*M,r[6]=o*m+a*_+l*A,r[1]=c*d+h*v+u*I,r[4]=c*x+h*y+u*M,r[7]=c*m+h*_+u*A,r[2]=f*d+p*v+g*I,r[5]=f*x+p*y+g*M,r[8]=f*m+p*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=e*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let d=1/g;return t[0]=u*d,t[1]=(s*c-h*i)*d,t[2]=(a*i-s*o)*d,t[3]=f*d,t[4]=(h*e-s*l)*d,t[5]=(s*r-a*e)*d,t[6]=p*d,t[7]=(i*l-c*e)*d,t[8]=(o*e-i*r)*d,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(El.makeScale(t,e)),this}rotate(t){return this.premultiply(El.makeRotation(-t)),this}translate(t,e){return this.premultiply(El.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},El=new Kt;Zu={};ae={enabled:!0,workingColorSpace:er,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(n.r=mn(n.r),n.g=mn(n.g),n.b=mn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(n.r=Vs(n.r),n.g=Vs(n.g),n.b=Vs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Cn?Na:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};$u=[.64,.33,.3,.6,.15,.06],Ju=[.2126,.7152,.0722],Ku=[.3127,.329],ju=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qu=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[er]:{primaries:$u,whitePoint:Ku,transfer:Na,toXYZ:ju,fromXYZ:Qu,luminanceCoefficients:Ju,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:$u,whitePoint:Ku,transfer:pe,toXYZ:ju,fromXYZ:Qu,luminanceCoefficients:Ju,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}});Wc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_s===void 0&&(_s=sa("canvas")),_s.width=t.width,_s.height=t.height;let i=_s.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=_s}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=sa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(mn(e[i]/255)*255):e[i]=mn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},y0=0,ra=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=ji(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Al(s[o].image)):r.push(Al(s[o]))}else r=Al(s);i.url=r}return e||(t.images[this.uuid]=i),i}};v0=0,fi=class n extends kn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=rs,s=rs,r=Ji,o=os,a=_i,l=Bi,c=n.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=ji(),this.name="",this.source=new ra(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gn:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gn:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fi.DEFAULT_IMAGE=null;fi.DEFAULT_MAPPING=nf;fi.DEFAULT_ANISOTROPY=1;xe=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],d=l[2],x=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-d)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+d)<.1&&Math.abs(g+x)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,_=(p+1)/2,I=(m+1)/2,M=(h+f)/4,A=(u+d)/4,P=(g+x)/4;return y>_&&y>I?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=M/i,r=A/i):_>I?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=M/s,r=P/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=A/r,s=P/r),this.set(i,s,r,e),this}let v=Math.sqrt((x-g)*(x-g)+(u-d)*(u-d)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(x-g)/v,this.y=(u-d)/v,this.z=(f-h)/v,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xc=class extends kn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new fi(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ra(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ge=class extends Xc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},oa=class extends fi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},qc=class extends fi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Un=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],d=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=d;return}if(u!==d||l!==f||c!==p||h!==g){let x=1-a,m=l*f+c*p+h*g+u*d,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let I=Math.sqrt(y),M=Math.atan2(I,m*v);x=Math.sin(x*M)/I,a=Math.sin(a*M)/I}let _=a*v;if(l=l*x+f*_,c=c*x+p*_,h=h*x+g*_,u=u*x+d*_,x===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-a*p,t[e+2]=c*g+h*p+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(td.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(td.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Rl.copy(this).projectOnVector(t),this.sub(Rl)}reflect(t){return this.sub(Rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rl=new C,td=new Un,xn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Di):Di.fromBufferAttribute(r,o),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wo.copy(i.boundingBox)),wo.applyMatrix4(t.matrixWorld),this.union(wo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gr),bo.subVectors(this.max,gr),ws.subVectors(t.a,gr),bs.subVectors(t.b,gr),Ms.subVectors(t.c,gr),Mn.subVectors(bs,ws),Sn.subVectors(Ms,bs),Kn.subVectors(ws,Ms);let e=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-Kn.z,Kn.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,Kn.z,0,-Kn.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-Kn.y,Kn.x,0];return!Cl(e,ws,bs,Ms,bo)||(e=[1,0,0,0,1,0,0,0,1],!Cl(e,ws,bs,Ms,bo))?!1:(Mo.crossVectors(Mn,Sn),e=[Mo.x,Mo.y,Mo.z],Cl(e,ws,bs,Ms,bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ln=[new C,new C,new C,new C,new C,new C,new C,new C],Di=new C,wo=new xn,ws=new C,bs=new C,Ms=new C,Mn=new C,Sn=new C,Kn=new C,gr=new C,bo=new C,Mo=new C,jn=new C;_0=new xn,xr=new C,Pl=new C,Nn=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):_0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);let e=xr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(xr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(Pl)),this.expandByPoint(xr.copy(t.center).sub(Pl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},cn=new C,Il=new C,So=new C,Tn=new C,Ll=new C,To=new C,Dl=new C,Nr=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Il.copy(t).add(e).multiplyScalar(.5),So.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(Il);let r=t.distanceTo(e)*.5,o=-this.direction.dot(So),a=Tn.dot(this.direction),l=-Tn.dot(So),c=Tn.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let d=1/h;u*=d,f*=d,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Il).addScaledVector(So,f),p}intersectSphere(t,e){cn.subVectors(t.center,this.origin);let i=cn.dot(this.direction),s=cn.dot(cn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,i,s,r){Ll.subVectors(e,t),To.subVectors(i,t),Dl.crossVectors(Ll,To);let o=this.direction.dot(Dl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tn.subVectors(this.origin,t);let l=a*this.direction.dot(To.crossVectors(Tn,To));if(l<0)return null;let c=a*this.direction.dot(Ll.cross(Tn));if(c<0||l+c>o)return null;let h=-a*Tn.dot(Dl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,f,p,g,d,x){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,p,g,d,x)}set(t,e,i,s,r,o,a,l,c,h,u,f,p,g,d,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=p,m[7]=g,m[11]=d,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ss.setFromMatrixColumn(t,0).length(),r=1/Ss.setFromMatrixColumn(t,1).length(),o=1/Ss.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*u,g=a*h,d=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-d*c,e[9]=-a*l,e[2]=d-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,g=c*h,d=c*u;e[0]=f+d*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=d+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,g=c*h,d=c*u;e[0]=f-d*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=d-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,p=o*u,g=a*h,d=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+d,e[1]=l*u,e[5]=d*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,g=a*l,d=a*c;e[0]=l*h,e[4]=d-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-d*u}else if(t.order==="XZY"){let f=o*l,p=o*c,g=a*l,d=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+d,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=d*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(w0,t,b0)}lookAt(t,e,i){let s=this.elements;return yi.subVectors(t,e),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),En.crossVectors(i,yi),En.lengthSq()===0&&(Math.abs(i.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),En.crossVectors(i,yi)),En.normalize(),Eo.crossVectors(yi,En),s[0]=En.x,s[4]=Eo.x,s[8]=yi.x,s[1]=En.y,s[5]=Eo.y,s[9]=yi.y,s[2]=En.z,s[6]=Eo.z,s[10]=yi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],d=i[6],x=i[10],m=i[14],v=i[3],y=i[7],_=i[11],I=i[15],M=s[0],A=s[4],P=s[8],T=s[12],b=s[1],L=s[5],B=s[9],U=s[13],H=s[2],Y=s[6],W=s[10],it=s[14],X=s[3],rt=s[7],pt=s[11],yt=s[15];return r[0]=o*M+a*b+l*H+c*X,r[4]=o*A+a*L+l*Y+c*rt,r[8]=o*P+a*B+l*W+c*pt,r[12]=o*T+a*U+l*it+c*yt,r[1]=h*M+u*b+f*H+p*X,r[5]=h*A+u*L+f*Y+p*rt,r[9]=h*P+u*B+f*W+p*pt,r[13]=h*T+u*U+f*it+p*yt,r[2]=g*M+d*b+x*H+m*X,r[6]=g*A+d*L+x*Y+m*rt,r[10]=g*P+d*B+x*W+m*pt,r[14]=g*T+d*U+x*it+m*yt,r[3]=v*M+y*b+_*H+I*X,r[7]=v*A+y*L+_*Y+I*rt,r[11]=v*P+y*B+_*W+I*pt,r[15]=v*T+y*U+_*it+I*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],d=t[7],x=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*p-i*l*p)+d*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+x*(+e*c*u-e*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+m*(-s*a*h-e*l*u+e*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],d=t[13],x=t[14],m=t[15],v=u*x*c-d*f*c+d*l*p-a*x*p-u*l*m+a*f*m,y=g*f*c-h*x*c-g*l*p+o*x*p+h*l*m-o*f*m,_=h*d*c-g*u*c+g*a*p-o*d*p-h*a*m+o*u*m,I=g*u*l-h*d*l-g*a*f+o*d*f+h*a*x-o*u*x,M=e*v+i*y+s*_+r*I;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/M;return t[0]=v*A,t[1]=(d*f*r-u*x*r-d*s*p+i*x*p+u*s*m-i*f*m)*A,t[2]=(a*x*r-d*l*r+d*s*c-i*x*c-a*s*m+i*l*m)*A,t[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*p-i*l*p)*A,t[4]=y*A,t[5]=(h*x*r-g*f*r+g*s*p-e*x*p-h*s*m+e*f*m)*A,t[6]=(g*l*r-o*x*r-g*s*c+e*x*c+o*s*m-e*l*m)*A,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*A,t[8]=_*A,t[9]=(g*u*r-h*d*r-g*i*p+e*d*p+h*i*m-e*u*m)*A,t[10]=(o*d*r-g*a*r+g*i*c-e*d*c-o*i*m+e*a*m)*A,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*p-e*a*p)*A,t[12]=I*A,t[13]=(h*d*s-g*u*s+g*i*f-e*d*f-h*i*x+e*u*x)*A,t[14]=(g*a*s-o*d*s-g*i*l+e*d*l+o*i*x-e*a*x)*A,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*f+e*a*f)*A,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,d=o*h,x=o*u,m=a*u,v=l*c,y=l*h,_=l*u,I=i.x,M=i.y,A=i.z;return s[0]=(1-(d+m))*I,s[1]=(p+_)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(p-_)*M,s[5]=(1-(f+m))*M,s[6]=(x+v)*M,s[7]=0,s[8]=(g+y)*A,s[9]=(x-v)*A,s[10]=(1-(f+d))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ss.set(s[0],s[1],s[2]).length(),o=Ss.set(s[4],s[5],s[6]).length(),a=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ki.copy(this);let c=1/r,h=1/o,u=1/a;return ki.elements[0]*=c,ki.elements[1]*=c,ki.elements[2]*=c,ki.elements[4]*=h,ki.elements[5]*=h,ki.elements[6]*=h,ki.elements[8]*=u,ki.elements[9]*=u,ki.elements[10]*=u,e.setFromRotationMatrix(ki),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=pn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),p,g;if(a===pn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===na)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=pn){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*c,p=(i+s)*h,g,d;if(a===pn)g=(o+r)*u,d=-2*u;else if(a===na)g=r*u,d=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=d,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ss=new C,ki=new le,w0=new C(0,0,0),b0=new C(1,1,1),En=new C,Eo=new C,yi=new C,ed=new le,id=new Un,Qi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ed.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ed,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return id.setFromEuler(this),this.setFromQuaternion(id,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qi.DEFAULT_ORDER="XYZ";Fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},M0=0,nd=new C,Ts=new Un,hn=new le,Ao=new C,yr=new C,S0=new C,T0=new Un,sd=new C(1,0,0),rd=new C(0,1,0),od=new C(0,0,1),ad={type:"added"},E0={type:"removed"},Es={type:"childadded",child:null},kl={type:"childremoved",child:null},Ne=class n extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new C,e=new Qi,i=new Un,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Kt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(sd,t)}rotateY(t){return this.rotateOnAxis(rd,t)}rotateZ(t){return this.rotateOnAxis(od,t)}translateOnAxis(t,e){return nd.copy(t).applyQuaternion(this.quaternion),this.position.add(nd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sd,t)}translateY(t){return this.translateOnAxis(rd,t)}translateZ(t){return this.translateOnAxis(od,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ao.copy(t):Ao.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(yr,Ao,this.up):hn.lookAt(Ao,yr,this.up),this.quaternion.setFromRotationMatrix(hn),s&&(hn.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(hn),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ad),Es.child=t,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(E0),kl.child=t,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ad),Es.child=t,this.dispatchEvent(Es),Es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,t,S0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,T0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ne.DEFAULT_UP=new C(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Ui=new C,un=new C,Ul=new C,dn=new C,As=new C,Rs=new C,ld=new C,Nl=new C,Fl=new C,Ol=new C,Bl=new xe,zl=new xe,Hl=new xe,Pn=class n{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ui.subVectors(t,e),s.cross(Ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ui.subVectors(s,e),un.subVectors(i,e),Ul.subVectors(t,e);let o=Ui.dot(Ui),a=Ui.dot(un),l=Ui.dot(Ul),c=un.dot(un),h=un.dot(Ul),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(o,dn.y),l.addScaledVector(a,dn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Bl.setScalar(0),zl.setScalar(0),Hl.setScalar(0),Bl.fromBufferAttribute(t,e),zl.fromBufferAttribute(t,i),Hl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Bl,r.x),o.addScaledVector(zl,r.y),o.addScaledVector(Hl,r.z),o}static isFrontFacing(t,e,i,s){return Ui.subVectors(i,e),un.subVectors(t,e),Ui.cross(un).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Ui.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;As.subVectors(s,i),Rs.subVectors(r,i),Nl.subVectors(t,i);let l=As.dot(Nl),c=Rs.dot(Nl);if(l<=0&&c<=0)return e.copy(i);Fl.subVectors(t,s);let h=As.dot(Fl),u=Rs.dot(Fl);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(As,o);Ol.subVectors(t,r);let p=As.dot(Ol),g=Rs.dot(Ol);if(g>=0&&p<=g)return e.copy(r);let d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Rs,a);let x=h*g-p*u;if(x<=0&&u-h>=0&&p-g>=0)return ld.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(ld,a);let m=1/(x+d+f);return o=d*m,a=f*m,e.copy(i).addScaledVector(As,o).addScaledVector(Rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},Ro={h:0,s:0,l:0};Pt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=Yh(t,1),e=He(e,0,1),i=He(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Vl(o,r,t+1/3),this.g=Vl(o,r,t),this.b=Vl(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let i=mf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mn(t.r),this.g=mn(t.g),this.b=mn(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return ae.fromWorkingColorSpace(Ke.copy(this),t),Math.round(He(Ke.r*255,0,255))*65536+Math.round(He(Ke.g*255,0,255))*256+Math.round(He(Ke.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Ke.copy(this),e);let i=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=qe){ae.fromWorkingColorSpace(Ke.copy(this),t);let e=Ke.r,i=Ke.g,s=Ke.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(Ro);let i=Cr(An.h,Ro.h,e),s=Cr(An.s,Ro.s,e),r=Cr(An.l,Ro.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new Pt;Pt.NAMES=mf;A0=0,tn=class extends kn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=ji(),this.name="",this.blending=zs,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sc&&(i.blendSrc=this.blendSrc),this.blendDst!==rc&&(i.blendDst=this.blendDst),this.blendEquation!==Ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Qe=class extends tn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Le=new C,Co=new K,Ve=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Gc,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Fi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gc&&(t.usage=this.usage),t}},aa=class extends Ve{constructor(t,e,i){super(new Uint16Array(t),e,i)}},la=class extends Ve{constructor(t,e,i){super(new Uint32Array(t),e,i)}},se=class extends Ve{constructor(t,e,i){super(new Float32Array(t),e,i)}},R0=0,Ti=new le,Gl=new Ne,Cs=new C,vi=new xn,vr=new xn,ze=new C,Ce=class n extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pf(t)?la:aa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,e,i){return Ti.makeTranslation(t,e,i),this.applyMatrix4(Ti),this}scale(t,e,i){return Ti.makeScale(t,e,i),this.applyMatrix4(Ti),this}lookAt(t){return Gl.lookAt(t),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];vi.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(vi.min,vr.min),vi.expandByPoint(ze),ze.addVectors(vi.max,vr.max),vi.expandByPoint(ze)):(vi.expandByPoint(vr.min),vi.expandByPoint(vr.max))}vi.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(Cs.fromBufferAttribute(t,c),ze.add(Cs)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new C,l[P]=new C;let c=new C,h=new C,u=new C,f=new K,p=new K,g=new K,d=new C,x=new C;function m(P,T,b){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,b),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(d.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),x.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[P].add(d),a[T].add(d),a[b].add(d),l[P].add(x),l[T].add(x),l[b].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,T=v.length;P<T;++P){let b=v[P],L=b.start,B=b.count;for(let U=L,H=L+B;U<H;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let y=new C,_=new C,I=new C,M=new C;function A(P){I.fromBufferAttribute(s,P),M.copy(I);let T=a[P];y.copy(T),y.sub(I.multiplyScalar(I.dot(T))).normalize(),_.crossVectors(M,T);let L=_.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,T=v.length;P<T;++P){let b=v[P],L=b.start,B=b.count;for(let U=L,H=L+B;U<H;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),d=t.getX(f+1),x=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,d),o.fromBufferAttribute(e,x),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,d),c.fromBufferAttribute(i,x),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(d,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let d=0,x=l.length;d<x;d++){a.isInterleavedBufferAttribute?p=l[d]*a.data.stride+a.offset:p=l[d]*h;for(let m=0;m<h;m++)f[g++]=c[p++]}return new Ve(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cd=new le,Qn=new Nr,Po=new Nn,hd=new C,Io=new C,Lo=new C,Do=new C,Wl=new C,ko=new C,ud=new C,Uo=new C,Rt=class extends Ne{constructor(t=new Ce,e=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Wl.fromBufferAttribute(u,t),o?ko.addScaledVector(Wl,h):ko.addScaledVector(Wl.sub(e),h))}e.add(ko)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(Po.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Po,hd)===null||Qn.origin.distanceToSquared(hd)>(t.far-t.near)**2))&&(cd.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(cd),!(i.boundingBox!==null&&Qn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,d=f.length;g<d;g++){let x=f[g],m=o[x.materialIndex],v=Math.max(x.start,p.start),y=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let _=v,I=y;_<I;_+=3){let M=a.getX(_),A=a.getX(_+1),P=a.getX(_+2);s=No(this,m,t,i,c,h,u,M,A,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),d=Math.min(a.count,p.start+p.count);for(let x=g,m=d;x<m;x+=3){let v=a.getX(x),y=a.getX(x+1),_=a.getX(x+2);s=No(this,o,t,i,c,h,u,v,y,_),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,d=f.length;g<d;g++){let x=f[g],m=o[x.materialIndex],v=Math.max(x.start,p.start),y=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));for(let _=v,I=y;_<I;_+=3){let M=_,A=_+1,P=_+2;s=No(this,m,t,i,c,h,u,M,A,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),d=Math.min(l.count,p.start+p.count);for(let x=g,m=d;x<m;x+=3){let v=x,y=x+1,_=x+2;s=No(this,o,t,i,c,h,u,v,y,_),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};ri=class n extends Ce{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function g(d,x,m,v,y,_,I,M,A,P,T){let b=_/A,L=I/P,B=_/2,U=I/2,H=M/2,Y=A+1,W=P+1,it=0,X=0,rt=new C;for(let pt=0;pt<W;pt++){let yt=pt*L-U;for(let Vt=0;Vt<Y;Vt++){let oe=Vt*b-B;rt[d]=oe*v,rt[x]=yt*y,rt[m]=H,c.push(rt.x,rt.y,rt.z),rt[d]=0,rt[x]=0,rt[m]=M>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Vt/A),u.push(1-pt/P),it+=1}}for(let pt=0;pt<P;pt++)for(let yt=0;yt<A;yt++){let Vt=f+yt+Y*pt,oe=f+yt+Y*(pt+1),J=f+(yt+1)+Y*(pt+1),at=f+(yt+1)+Y*pt;l.push(Vt,oe,at),l.push(oe,J,at),X+=6}a.addGroup(p,X,T),p+=X,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};gi={clone:Ys,merge:si},I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Te=class extends tn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=L0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=P0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ca=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rn=new C,dd=new K,fd=new K,ui=class extends ca{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,dd,fd),e.subVectors(fd,dd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Rr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ps=-90,Is=1,Yc=class extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ui(Ps,Is,t,e);s.layers=this.layers,this.add(s);let r=new ui(Ps,Is,t,e);r.layers=this.layers,this.add(r);let o=new ui(Ps,Is,t,e);o.layers=this.layers,this.add(o);let a=new ui(Ps,Is,t,e);a.layers=this.layers,this.add(a);let l=new ui(Ps,Is,t,e);l.layers=this.layers,this.add(l);let c=new ui(Ps,Is,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===pn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=d,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ha=class extends fi{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Xs,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zc=class extends Ge{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ha(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ji}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ri(5,5,5),r=new Te({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:di,blending:Ue});r.uniforms.tEquirect.value=e;let o=new Rt(s,r),a=e.minFilter;return e.minFilter===os&&(e.minFilter=Ji),new Yc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Xl=new C,D0=new C,k0=new Kt,Ni=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Xl.subVectors(i,e).cross(D0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Xl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||k0.getNormalMatrix(t),s=this.coplanarPoint(Xl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new Nn,Fo=new C,Or=class{constructor(t=new Ni,e=new Ni,i=new Ni,s=new Ni,r=new Ni,o=new Ni){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=pn){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],d=s[10],x=s[11],m=s[12],v=s[13],y=s[14],_=s[15];if(i[0].setComponents(l-r,f-c,x-p,_-m).normalize(),i[1].setComponents(l+r,f+c,x+p,_+m).normalize(),i[2].setComponents(l+o,f+h,x+g,_+v).normalize(),i[3].setComponents(l-o,f-h,x-g,_-v).normalize(),i[4].setComponents(l-a,f-u,x-d,_-y).normalize(),e===pn)i[5].setComponents(l+a,f+u,x+d,_+y).normalize();else if(e===na)i[5].setComponents(a,u,d,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Fo.x=s.normal.x>0?t.max.x:t.min.x,Fo.y=s.normal.y>0?t.max.y:t.min.y,Fo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Ye=class n extends Ce{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,p=[],g=[],d=[],x=[];for(let m=0;m<h;m++){let v=m*f-o;for(let y=0;y<c;y++){let _=y*u-r;g.push(_,-v,0),d.push(0,0,1),x.push(y/a),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let y=v+c*m,_=v+c*(m+1),I=v+1+c*(m+1),M=v+1+c*m;p.push(y,_,M),p.push(_,I,M)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},N0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F0=`#ifdef USE_ALPHAHASH
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
#endif`,O0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V0=`#ifdef USE_AOMAP
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
#endif`,G0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W0=`#ifdef USE_BATCHING
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
#endif`,X0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,q0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$0=`#ifdef USE_IRIDESCENCE
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
#endif`,J0=`#ifdef USE_BUMPMAP
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
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rm=`#define PI 3.141592653589793
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
} // validated`,om=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,am=`vec3 transformedNormal = objectNormal;
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
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mm=`#ifdef USE_GRADIENTMAP
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
}`,Sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Am=`uniform bool receiveShadow;
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
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dm=`PhysicalMaterial material;
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
#endif`,km=`struct PhysicalMaterial {
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
}`,Um=`
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
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Om=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xm=`#if defined( USE_POINTS_UV )
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
#endif`,qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$m=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Km=`#ifdef USE_MORPHTARGETS
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
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sg=`#ifdef USE_NORMALMAP
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
#endif`,rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ug=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_g=`float getShadowMask() {
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
}`,wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,Mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,Tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cg=`#ifdef USE_TRANSMISSION
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
#endif`,Pg=`#ifdef USE_TRANSMISSION
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ng=`uniform sampler2D t2D;
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Og=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`#include <common>
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
}`,Vg=`#if DEPTH_PACKING == 3200
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
}`,Gg=`#define DISTANCE
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
}`,Wg=`#define DISTANCE
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`uniform float scale;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,Jg=`uniform vec3 diffuse;
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
}`,Kg=`#define LAMBERT
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
}`,jg=`#define LAMBERT
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
}`,Qg=`#define MATCAP
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
}`,tx=`#define MATCAP
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
}`,ex=`#define NORMAL
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
}`,ix=`#define NORMAL
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
}`,nx=`#define PHONG
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
}`,sx=`#define PHONG
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
}`,rx=`#define STANDARD
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
}`,ox=`#define STANDARD
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
}`,ax=`#define TOON
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
}`,lx=`#define TOON
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
}`,cx=`uniform float size;
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
}`,hx=`uniform vec3 diffuse;
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
}`,ux=`#include <common>
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
}`,dx=`uniform vec3 color;
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
}`,fx=`uniform float rotation;
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
}`,px=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:N0,alphahash_pars_fragment:F0,alphamap_fragment:O0,alphamap_pars_fragment:B0,alphatest_fragment:z0,alphatest_pars_fragment:H0,aomap_fragment:V0,aomap_pars_fragment:G0,batching_pars_vertex:W0,batching_vertex:X0,begin_vertex:q0,beginnormal_vertex:Y0,bsdfs:Z0,iridescence_fragment:$0,bumpmap_pars_fragment:J0,clipping_planes_fragment:K0,clipping_planes_pars_fragment:j0,clipping_planes_pars_vertex:Q0,clipping_planes_vertex:tm,color_fragment:em,color_pars_fragment:im,color_pars_vertex:nm,color_vertex:sm,common:rm,cube_uv_reflection_fragment:om,defaultnormal_vertex:am,displacementmap_pars_vertex:lm,displacementmap_vertex:cm,emissivemap_fragment:hm,emissivemap_pars_fragment:um,colorspace_fragment:dm,colorspace_pars_fragment:fm,envmap_fragment:pm,envmap_common_pars_fragment:mm,envmap_pars_fragment:gm,envmap_pars_vertex:xm,envmap_physical_pars_fragment:Rm,envmap_vertex:ym,fog_vertex:vm,fog_pars_vertex:_m,fog_fragment:wm,fog_pars_fragment:bm,gradientmap_pars_fragment:Mm,lightmap_pars_fragment:Sm,lights_lambert_fragment:Tm,lights_lambert_pars_fragment:Em,lights_pars_begin:Am,lights_toon_fragment:Cm,lights_toon_pars_fragment:Pm,lights_phong_fragment:Im,lights_phong_pars_fragment:Lm,lights_physical_fragment:Dm,lights_physical_pars_fragment:km,lights_fragment_begin:Um,lights_fragment_maps:Nm,lights_fragment_end:Fm,logdepthbuf_fragment:Om,logdepthbuf_pars_fragment:Bm,logdepthbuf_pars_vertex:zm,logdepthbuf_vertex:Hm,map_fragment:Vm,map_pars_fragment:Gm,map_particle_fragment:Wm,map_particle_pars_fragment:Xm,metalnessmap_fragment:qm,metalnessmap_pars_fragment:Ym,morphinstance_vertex:Zm,morphcolor_vertex:$m,morphnormal_vertex:Jm,morphtarget_pars_vertex:Km,morphtarget_vertex:jm,normal_fragment_begin:Qm,normal_fragment_maps:tg,normal_pars_fragment:eg,normal_pars_vertex:ig,normal_vertex:ng,normalmap_pars_fragment:sg,clearcoat_normal_fragment_begin:rg,clearcoat_normal_fragment_maps:og,clearcoat_pars_fragment:ag,iridescence_pars_fragment:lg,opaque_fragment:cg,packing:hg,premultiplied_alpha_fragment:ug,project_vertex:dg,dithering_fragment:fg,dithering_pars_fragment:pg,roughnessmap_fragment:mg,roughnessmap_pars_fragment:gg,shadowmap_pars_fragment:xg,shadowmap_pars_vertex:yg,shadowmap_vertex:vg,shadowmask_pars_fragment:_g,skinbase_vertex:wg,skinning_pars_vertex:bg,skinning_vertex:Mg,skinnormal_vertex:Sg,specularmap_fragment:Tg,specularmap_pars_fragment:Eg,tonemapping_fragment:Ag,tonemapping_pars_fragment:Rg,transmission_fragment:Cg,transmission_pars_fragment:Pg,uv_pars_fragment:Ig,uv_pars_vertex:Lg,uv_vertex:Dg,worldpos_vertex:kg,background_vert:Ug,background_frag:Ng,backgroundCube_vert:Fg,backgroundCube_frag:Og,cube_vert:Bg,cube_frag:zg,depth_vert:Hg,depth_frag:Vg,distanceRGBA_vert:Gg,distanceRGBA_frag:Wg,equirect_vert:Xg,equirect_frag:qg,linedashed_vert:Yg,linedashed_frag:Zg,meshbasic_vert:$g,meshbasic_frag:Jg,meshlambert_vert:Kg,meshlambert_frag:jg,meshmatcap_vert:Qg,meshmatcap_frag:tx,meshnormal_vert:ex,meshnormal_frag:ix,meshphong_vert:nx,meshphong_frag:sx,meshphysical_vert:rx,meshphysical_frag:ox,meshtoon_vert:ax,meshtoon_frag:lx,points_vert:cx,points_frag:hx,shadow_vert:ux,shadow_frag:dx,sprite_vert:fx,sprite_frag:px},gt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},$i={basic:{uniforms:si([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:si([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:si([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:si([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:si([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:si([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:si([gt.points,gt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:si([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:si([gt.common,gt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:si([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:si([gt.sprite,gt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:si([gt.common,gt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:si([gt.lights,gt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};$i.physical={uniforms:si([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};Oo={r:0,b:0,g:0},es=new Qi,mx=new le;Fn=class extends ca{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Os=4,pd=[.125,.215,.35,.446,.526,.582],ss=20,ql=new Fn,md=new Pt,Yl=null,Zl=0,$l=0,Jl=!1,ns=(1+Math.sqrt(5))/2,Ls=1/ns,gd=[new C(-ns,Ls,0),new C(ns,Ls,0),new C(-Ls,0,ns),new C(Ls,0,ns),new C(0,ns,-Ls),new C(0,ns,Ls),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],ua=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Yl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yl,Zl,$l),this._renderer.xr.enabled=Jl,t.scissorTest=!1,Bo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ji,minFilter:Ji,generateMipmaps:!1,type:mi,format:_i,colorSpace:er,depthBuffer:!1},s=xd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xd(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bx(r)),this._blurMaterial=Mx(r,t,e)}return s}_compileMaterial(t){let e=new Rt(this._lodPlanes[0],t);this._renderer.compile(e,ql)}_sceneToCubeUV(t,e,i,s){let a=new ui(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(md),h.toneMapping=In,h.autoClear=!1;let p=new Qe({name:"PMREM.Background",side:di,depthWrite:!1,depthTest:!1}),g=new Rt(new ri,p),d=!1,x=t.background;x?x.isColor&&(p.color.copy(x),t.background=null,d=!0):(p.color.copy(md),d=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let y=this._cubeSize;Bo(s,v*y,m>2?y:0,y,y),h.setRenderTarget(s),d&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Xs||t.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Bo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ql)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gd[(s-r-1)%gd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Rt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ss-1),d=r/g,x=isFinite(r)?1+Math.floor(h*d):ss;x>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ss}`);let m=[],v=0;for(let A=0;A<ss;++A){let P=A/d,T=Math.exp(-P*P/2);m.push(T),A===0?v+=T:A<x&&(v+=2*T)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;f.envMap.value=t.texture,f.samples.value=x,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;let _=this._sizeLods[s],I=3*_*(s>y-Os?s-y+Os:0),M=4*(this._cubeSize-_);Bo(e,I,M,3*_,2*_),l.setRenderTarget(e),l.render(u,ql)}};Zs=class extends fi{constructor(t,e,i,s,r,o,a,l,c,h=Hs){if(h!==Hs&&h!==Dn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Hs&&(i=as),i===void 0&&h===Dn&&(i=Ln),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:je,this.minFilter=l!==void 0?l:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},yf=new fi,_d=new Zs(1,1),vf=new oa,_f=new qc,wf=new ha,wd=[],bd=[],Md=new Float32Array(16),Sd=new Float32Array(9),Td=new Float32Array(4);$c=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Jx(e.type)}},Jc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gy(e.type)}},Kc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Kl=/(\w+)(\])?(\[|\.)?/g;Gs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);xy(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};yy=37297,vy=0;Rd=new Kt;zo=new C;Ry=/^[ \t]*#include +<([\w\d./]+)>/gm;Cy=new Map;Iy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;By=0,Qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new th(t),e.set(t,i)),i}},th=class{constructor(t){this.id=By++,this.code=t,this.usedTimes=0}};qy=0;eh=class extends tn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ih=class extends tn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Jy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ky=`uniform sampler2D shadow_pass;
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
}`;Qy={[oc]:ac,[lc]:uc,[cc]:dc,[Ws]:hc,[ac]:oc,[uc]:lc,[dc]:cc,[hc]:Ws};nh=class extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ot=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},sv={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let d of t.hand.values()){let x=e.getJointPose(d,i),m=this._getHandJoint(c,d);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ot;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},rv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ov=`
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

}`,sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new fi,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Te({vertexShader:rv,fragmentShader:ov,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rt(new Ye(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rh=class extends kn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,d=new sh,x=e.getContextAttributes(),m=null,v=null,y=[],_=[],I=new K,M=null,A=new ui;A.viewport=new xe;let P=new ui;P.viewport=new xe;let T=[A,P],b=new nh,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=y[J];return at===void 0&&(at=new Pr,y[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=y[J];return at===void 0&&(at=new Pr,y[J]=at),at.getGripSpace()},this.getHand=function(J){let at=y[J];return at===void 0&&(at=new Pr,y[J]=at),at.getHandSpace()};function U(J){let at=_.indexOf(J.inputSource);if(at===-1)return;let Tt=y[at];Tt!==void 0&&(Tt.update(J.inputSource,J.frame,c||o),Tt.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Y);for(let J=0;J<y.length;J++){let at=_[J];at!==null&&(_[J]=null,y[J].disconnect(at))}L=null,B=null,d.reset(),t.setRenderTarget(m),p=null,f=null,u=null,s=null,v=null,oe.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let at={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ge(p.framebufferWidth,p.framebufferHeight,{format:_i,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let at=null,Tt=null,lt=null;x.depth&&(lt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=x.stencil?Dn:Hs,Tt=x.stencil?Ln:as);let Lt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Lt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Ge(f.textureWidth,f.textureHeight,{format:_i,type:Bi,depthTexture:new Zs(f.textureWidth,f.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function Y(J){for(let at=0;at<J.removed.length;at++){let Tt=J.removed[at],lt=_.indexOf(Tt);lt>=0&&(_[lt]=null,y[lt].disconnect(Tt))}for(let at=0;at<J.added.length;at++){let Tt=J.added[at],lt=_.indexOf(Tt);if(lt===-1){for(let zt=0;zt<y.length;zt++)if(zt>=_.length){_.push(Tt),lt=zt;break}else if(_[zt]===null){_[zt]=Tt,lt=zt;break}if(lt===-1)break}let Lt=y[lt];Lt&&Lt.connect(Tt)}}let W=new C,it=new C;function X(J,at,Tt){W.setFromMatrixPosition(at.matrixWorld),it.setFromMatrixPosition(Tt.matrixWorld);let lt=W.distanceTo(it),Lt=at.projectionMatrix.elements,zt=Tt.projectionMatrix.elements,Ot=Lt[14]/(Lt[10]-1),ie=Lt[14]/(Lt[10]+1),Q=(Lt[9]+1)/Lt[5],ct=(Lt[9]-1)/Lt[5],D=(Lt[8]-1)/Lt[0],Dt=(zt[8]+1)/zt[0],nt=Ot*D,bt=Ot*Dt,ut=lt/(-D+Dt),Ht=ut*-D;if(at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ht),J.translateZ(ut),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Lt[10]===-1)J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let vt=Ot+ut,R=ie+ut,S=nt-Ht,z=bt+(lt-Ht),Z=Q*ie/R*vt,et=ct*ie/R*vt;J.projectionMatrix.makePerspective(S,z,Z,et,vt,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function rt(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let at=J.near,Tt=J.far;d.texture!==null&&(d.depthNear>0&&(at=d.depthNear),d.depthFar>0&&(Tt=d.depthFar)),b.near=P.near=A.near=at,b.far=P.far=A.far=Tt,(L!==b.near||B!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,B=b.far),A.layers.mask=J.layers.mask|2,P.layers.mask=J.layers.mask|4,b.layers.mask=A.layers.mask|P.layers.mask;let lt=J.parent,Lt=b.cameras;rt(b,lt);for(let zt=0;zt<Lt.length;zt++)rt(Lt[zt],lt);Lt.length===2?X(b,A,P):b.projectionMatrix.copy(A.projectionMatrix),pt(J,b,lt)};function pt(J,at,Tt){Tt===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(Tt.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ur*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(b)};let yt=null;function Vt(J,at){if(h=at.getViewerPose(c||o),g=at,h!==null){let Tt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let lt=!1;Tt.length!==b.cameras.length&&(b.cameras.length=0,lt=!0);for(let zt=0;zt<Tt.length;zt++){let Ot=Tt[zt],ie=null;if(p!==null)ie=p.getViewport(Ot);else{let ct=u.getViewSubImage(f,Ot);ie=ct.viewport,zt===0&&(t.setRenderTargetTextures(v,ct.colorTexture,f.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(v))}let Q=T[zt];Q===void 0&&(Q=new ui,Q.layers.enable(zt),Q.viewport=new xe,T[zt]=Q),Q.matrix.fromArray(Ot.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ot.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ie.x,ie.y,ie.width,ie.height),zt===0&&(b.matrix.copy(Q.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),lt===!0&&b.cameras.push(Q)}let Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){let zt=u.getDepthInformation(Tt[0]);zt&&zt.isValid&&zt.texture&&d.init(t,zt,s.renderState)}}for(let Tt=0;Tt<y.length;Tt++){let lt=_[Tt],Lt=y[Tt];lt!==null&&Lt!==void 0&&Lt.update(lt,at,c||o)}yt&&yt(J,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),g=null}let oe=new xf;oe.setAnimationLoop(Vt),this.setAnimationLoop=function(J){yt=J},this.dispose=function(){}}},is=new Qi,av=new le;da=class{constructor(t={}){let{canvas:e=p0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),d=new Int32Array(4),x=null,m=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=In,this.toneMappingExposure=1;let _=this,I=!1,M=0,A=0,P=null,T=-1,b=null,L=new xe,B=new xe,U=null,H=new Pt(0),Y=0,W=e.width,it=e.height,X=1,rt=null,pt=null,yt=new xe(0,0,W,it),Vt=new xe(0,0,W,it),oe=!1,J=new Or,at=!1,Tt=!1,lt=new le,Lt=new le,zt=new C,Ot=new xe,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function ct(){return P===null?X:1}let D=i;function Dt(E,F){return e.getContext(E,F)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ih}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),D===null){let F="webgl2";if(D=Dt(F,E),D===null)throw Dt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let nt,bt,ut,Ht,vt,R,S,z,Z,et,$,It,dt,xt,Zt,st,Et,Gt,Xt,At,ne,qt,he,N;function ft(){nt=new Tx(D),nt.init(),qt=new nv(D,nt),bt=new vx(D,nt,t,qt),ut=new tv(D,nt),bt.reverseDepthBuffer&&f&&ut.buffers.depth.setReversed(!0),Ht=new Rx(D),vt=new Hy,R=new iv(D,nt,ut,vt,bt,qt,Ht),S=new wx(_),z=new Sx(_),Z=new U0(D),he=new xx(D,Z),et=new Ex(D,Z,Ht,he),$=new Px(D,et,Z,Ht),Xt=new Cx(D,bt,R),st=new _x(vt),It=new zy(_,S,z,nt,bt,he,st),dt=new lv(_,vt),xt=new Gy,Zt=new $y(nt),Gt=new gx(_,S,z,ut,$,p,l),Et=new jy(_,$,bt),N=new cv(D,Ht,bt,ut),At=new yx(D,nt,Ht),ne=new Ax(D,nt,Ht),Ht.programs=It.programs,_.capabilities=bt,_.extensions=nt,_.properties=vt,_.renderLists=xt,_.shadowMap=Et,_.state=ut,_.info=Ht}ft();let q=new rh(_,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(W,it,!1))},this.getSize=function(E){return E.set(W,it)},this.setSize=function(E,F,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,it=F,e.width=Math.floor(E*X),e.height=Math.floor(F*X),V===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(W*X,it*X).floor()},this.setDrawingBufferSize=function(E,F,V){W=E,it=F,X=V,e.width=Math.floor(E*V),e.height=Math.floor(F*V),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(yt)},this.setViewport=function(E,F,V,G){E.isVector4?yt.set(E.x,E.y,E.z,E.w):yt.set(E,F,V,G),ut.viewport(L.copy(yt).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(Vt)},this.setScissor=function(E,F,V,G){E.isVector4?Vt.set(E.x,E.y,E.z,E.w):Vt.set(E,F,V,G),ut.scissor(B.copy(Vt).multiplyScalar(X).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(E){ut.setScissorTest(oe=E)},this.setOpaqueSort=function(E){rt=E},this.setTransparentSort=function(E){pt=E},this.getClearColor=function(E){return E.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(E=!0,F=!0,V=!0){let G=0;if(E){let O=!1;if(P!==null){let ht=P.texture.format;O=ht===Xh||ht===Wh||ht===Gh}if(O){let ht=P.texture.type,wt=ht===Bi||ht===as||ht===kr||ht===Ln||ht===zh||ht===Hh,Ut=Gt.getClearColor(),Nt=Gt.getClearAlpha(),Yt=Ut.r,Jt=Ut.g,Ft=Ut.b;wt?(g[0]=Yt,g[1]=Jt,g[2]=Ft,g[3]=Nt,D.clearBufferuiv(D.COLOR,0,g)):(d[0]=Yt,d[1]=Jt,d[2]=Ft,d[3]=Nt,D.clearBufferiv(D.COLOR,0,d))}else G|=D.COLOR_BUFFER_BIT}F&&(G|=D.DEPTH_BUFFER_BIT),V&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),xt.dispose(),Zt.dispose(),vt.dispose(),S.dispose(),z.dispose(),$.dispose(),he.dispose(),N.dispose(),It.dispose(),q.dispose(),q.removeEventListener("sessionstart",Iu),q.removeEventListener("sessionend",Lu),Jn.stop()};function tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let E=Ht.autoReset,F=Et.enabled,V=Et.autoUpdate,G=Et.needsUpdate,O=Et.type;ft(),Ht.autoReset=E,Et.enabled=F,Et.autoUpdate=V,Et.needsUpdate=G,Et.type=O}function _t(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $t(E){let F=E.target;F.removeEventListener("dispose",$t),Pe(F)}function Pe(E){$e(E),vt.remove(E)}function $e(E){let F=vt.get(E).programs;F!==void 0&&(F.forEach(function(V){It.releaseProgram(V)}),E.isShaderMaterial&&It.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,V,G,O,ht){F===null&&(F=ie);let wt=O.isMesh&&O.matrixWorld.determinant()<0,Ut=xp(E,F,V,G,O);ut.setMaterial(G,wt);let Nt=V.index,Yt=1;if(G.wireframe===!0){if(Nt=et.getWireframeAttribute(V),Nt===void 0)return;Yt=2}let Jt=V.drawRange,Ft=V.attributes.position,ue=Jt.start*Yt,_e=(Jt.start+Jt.count)*Yt;ht!==null&&(ue=Math.max(ue,ht.start*Yt),_e=Math.min(_e,(ht.start+ht.count)*Yt)),Nt!==null?(ue=Math.max(ue,0),_e=Math.min(_e,Nt.count)):Ft!=null&&(ue=Math.max(ue,0),_e=Math.min(_e,Ft.count));let be=_e-ue;if(be<0||be===1/0)return;he.setup(O,G,Ut,V,Nt);let hi,de=At;if(Nt!==null&&(hi=Z.get(Nt),de=ne,de.setIndex(hi)),O.isMesh)G.wireframe===!0?(ut.setLineWidth(G.wireframeLinewidth*ct()),de.setMode(D.LINES)):de.setMode(D.TRIANGLES);else if(O.isLine){let Bt=G.linewidth;Bt===void 0&&(Bt=1),ut.setLineWidth(Bt*ct()),O.isLineSegments?de.setMode(D.LINES):O.isLineLoop?de.setMode(D.LINE_LOOP):de.setMode(D.LINE_STRIP)}else O.isPoints?de.setMode(D.POINTS):O.isSprite&&de.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)de.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))de.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Bt=O._multiDrawStarts,an=O._multiDrawCounts,fe=O._multiDrawCount,Li=Nt?Z.get(Nt).bytesPerElement:1,ys=vt.get(G).currentProgram.getUniforms();for(let xi=0;xi<fe;xi++)ys.setValue(D,"_gl_DrawID",xi),de.render(Bt[xi]/Li,an[xi])}else if(O.isInstancedMesh)de.renderInstances(ue,be,O.count);else if(V.isInstancedBufferGeometry){let Bt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,an=Math.min(V.instanceCount,Bt);de.renderInstances(ue,be,an)}else de.render(ue,be)};function me(E,F,V){E.transparent===!0&&E.side===Se&&E.forceSinglePass===!1?(E.side=di,E.needsUpdate=!0,yo(E,F,V),E.side=Oi,E.needsUpdate=!0,yo(E,F,V),E.side=Se):yo(E,F,V)}this.compile=function(E,F,V=null){V===null&&(V=E),m=Zt.get(V),m.init(F),y.push(m),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),E!==V&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();let G=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ht=O.material;if(ht)if(Array.isArray(ht))for(let wt=0;wt<ht.length;wt++){let Ut=ht[wt];me(Ut,V,O),G.add(Ut)}else me(ht,V,O),G.add(ht)}),y.pop(),m=null,G},this.compileAsync=function(E,F,V=null){let G=this.compile(E,F,V);return new Promise(O=>{function ht(){if(G.forEach(function(wt){vt.get(wt).currentProgram.isReady()&&G.delete(wt)}),G.size===0){O(E);return}setTimeout(ht,10)}nt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Ii=null;function on(E){Ii&&Ii(E)}function Iu(){Jn.stop()}function Lu(){Jn.start()}let Jn=new xf;Jn.setAnimationLoop(on),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(E){Ii=E,q.setAnimationLoop(E),E===null?Jn.stop():Jn.start()},q.addEventListener("sessionstart",Iu),q.addEventListener("sessionend",Lu),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,F,P),m=Zt.get(E,y.length),m.init(F),y.push(m),Lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),J.setFromProjectionMatrix(Lt),Tt=this.localClippingEnabled,at=st.init(this.clippingPlanes,Tt),x=xt.get(E,v.length),x.init(),v.push(x),q.enabled===!0&&q.isPresenting===!0){let ht=_.xr.getDepthSensingMesh();ht!==null&&Ml(ht,F,-1/0,_.sortObjects)}Ml(E,F,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(rt,pt),Q=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Q&&Gt.addToRenderList(x,E),this.info.render.frame++,at===!0&&st.beginShadows();let V=m.state.shadowsArray;Et.render(V,E,F),at===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=x.opaque,O=x.transmissive;if(m.setupLights(),F.isArrayCamera){let ht=F.cameras;if(O.length>0)for(let wt=0,Ut=ht.length;wt<Ut;wt++){let Nt=ht[wt];ku(G,O,E,Nt)}Q&&Gt.render(E);for(let wt=0,Ut=ht.length;wt<Ut;wt++){let Nt=ht[wt];Du(x,E,Nt,Nt.viewport)}}else O.length>0&&ku(G,O,E,F),Q&&Gt.render(E),Du(x,E,F);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(_,E,F),he.resetDefaultState(),T=-1,b=null,y.pop(),y.length>0?(m=y[y.length-1],at===!0&&st.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?x=v[v.length-1]:x=null};function Ml(E,F,V,G){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){G&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Lt);let wt=$.update(E),Ut=E.material;Ut.visible&&x.push(E,wt,Ut,V,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||J.intersectsObject(E))){let wt=$.update(E),Ut=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ot.copy(wt.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(Lt)),Array.isArray(Ut)){let Nt=wt.groups;for(let Yt=0,Jt=Nt.length;Yt<Jt;Yt++){let Ft=Nt[Yt],ue=Ut[Ft.materialIndex];ue&&ue.visible&&x.push(E,wt,ue,V,Ot.z,Ft)}}else Ut.visible&&x.push(E,wt,Ut,V,Ot.z,null)}}let ht=E.children;for(let wt=0,Ut=ht.length;wt<Ut;wt++)Ml(ht[wt],F,V,G)}function Du(E,F,V,G){let O=E.opaque,ht=E.transmissive,wt=E.transparent;m.setupLightsView(V),at===!0&&st.setGlobalState(_.clippingPlanes,V),G&&ut.viewport(L.copy(G)),O.length>0&&xo(O,F,V),ht.length>0&&xo(ht,F,V),wt.length>0&&xo(wt,F,V),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function ku(E,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Ge(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?mi:Bi,minFilter:os,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let ht=m.state.transmissionRenderTarget[G.id],wt=G.viewport||L;ht.setSize(wt.z,wt.w);let Ut=_.getRenderTarget();_.setRenderTarget(ht),_.getClearColor(H),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),Q&&Gt.render(V);let Nt=_.toneMapping;_.toneMapping=In;let Yt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),at===!0&&st.setGlobalState(_.clippingPlanes,G),xo(E,V,G),R.updateMultisampleRenderTarget(ht),R.updateRenderTargetMipmap(ht),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ft=0,ue=F.length;Ft<ue;Ft++){let _e=F[Ft],be=_e.object,hi=_e.geometry,de=_e.material,Bt=_e.group;if(de.side===Se&&be.layers.test(G.layers)){let an=de.side;de.side=di,de.needsUpdate=!0,Uu(be,V,G,hi,de,Bt),de.side=an,de.needsUpdate=!0,Jt=!0}}Jt===!0&&(R.updateMultisampleRenderTarget(ht),R.updateRenderTargetMipmap(ht))}_.setRenderTarget(Ut),_.setClearColor(H,Y),Yt!==void 0&&(G.viewport=Yt),_.toneMapping=Nt}function xo(E,F,V){let G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ht=E.length;O<ht;O++){let wt=E[O],Ut=wt.object,Nt=wt.geometry,Yt=G===null?wt.material:G,Jt=wt.group;Ut.layers.test(V.layers)&&Uu(Ut,F,V,Nt,Yt,Jt)}}function Uu(E,F,V,G,O,ht){E.onBeforeRender(_,F,V,G,O,ht),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(_,F,V,G,E,ht),O.transparent===!0&&O.side===Se&&O.forceSinglePass===!1?(O.side=di,O.needsUpdate=!0,_.renderBufferDirect(V,F,G,O,E,ht),O.side=Oi,O.needsUpdate=!0,_.renderBufferDirect(V,F,G,O,E,ht),O.side=Se):_.renderBufferDirect(V,F,G,O,E,ht),E.onAfterRender(_,F,V,G,O,ht)}function yo(E,F,V){F.isScene!==!0&&(F=ie);let G=vt.get(E),O=m.state.lights,ht=m.state.shadowsArray,wt=O.state.version,Ut=It.getParameters(E,O.state,ht,F,V),Nt=It.getProgramCacheKey(Ut),Yt=G.programs;G.environment=E.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(E.isMeshStandardMaterial?z:S).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Yt===void 0&&(E.addEventListener("dispose",$t),Yt=new Map,G.programs=Yt);let Jt=Yt.get(Nt);if(Jt!==void 0){if(G.currentProgram===Jt&&G.lightsStateVersion===wt)return Fu(E,Ut),Jt}else Ut.uniforms=It.getUniforms(E),E.onBeforeCompile(Ut,_),Jt=It.acquireProgram(Ut,Nt),Yt.set(Nt,Jt),G.uniforms=Ut.uniforms;let Ft=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ft.clippingPlanes=st.uniform),Fu(E,Ut),G.needsLights=vp(E),G.lightsStateVersion=wt,G.needsLights&&(Ft.ambientLightColor.value=O.state.ambient,Ft.lightProbe.value=O.state.probe,Ft.directionalLights.value=O.state.directional,Ft.directionalLightShadows.value=O.state.directionalShadow,Ft.spotLights.value=O.state.spot,Ft.spotLightShadows.value=O.state.spotShadow,Ft.rectAreaLights.value=O.state.rectArea,Ft.ltc_1.value=O.state.rectAreaLTC1,Ft.ltc_2.value=O.state.rectAreaLTC2,Ft.pointLights.value=O.state.point,Ft.pointLightShadows.value=O.state.pointShadow,Ft.hemisphereLights.value=O.state.hemi,Ft.directionalShadowMap.value=O.state.directionalShadowMap,Ft.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ft.spotShadowMap.value=O.state.spotShadowMap,Ft.spotLightMatrix.value=O.state.spotLightMatrix,Ft.spotLightMap.value=O.state.spotLightMap,Ft.pointShadowMap.value=O.state.pointShadowMap,Ft.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Jt,G.uniformsList=null,Jt}function Nu(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Gs.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Fu(E,F){let V=vt.get(E);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function xp(E,F,V,G,O){F.isScene!==!0&&(F=ie),R.resetTextureUnits();let ht=F.fog,wt=G.isMeshStandardMaterial?F.environment:null,Ut=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:er,Nt=(G.isMeshStandardMaterial?z:S).get(G.envMap||wt),Yt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Jt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ft=!!V.morphAttributes.position,ue=!!V.morphAttributes.normal,_e=!!V.morphAttributes.color,be=In;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(be=_.toneMapping);let hi=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,de=hi!==void 0?hi.length:0,Bt=vt.get(G),an=m.state.lights;if(at===!0&&(Tt===!0||E!==b)){let Si=E===b&&G.id===T;st.setState(G,E,Si)}let fe=!1;G.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==an.state.version||Bt.outputColorSpace!==Ut||O.isBatchedMesh&&Bt.batching===!1||!O.isBatchedMesh&&Bt.batching===!0||O.isBatchedMesh&&Bt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Bt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Bt.instancing===!1||!O.isInstancedMesh&&Bt.instancing===!0||O.isSkinnedMesh&&Bt.skinning===!1||!O.isSkinnedMesh&&Bt.skinning===!0||O.isInstancedMesh&&Bt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Bt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Bt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Bt.instancingMorph===!1&&O.morphTexture!==null||Bt.envMap!==Nt||G.fog===!0&&Bt.fog!==ht||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==st.numPlanes||Bt.numIntersection!==st.numIntersection)||Bt.vertexAlphas!==Yt||Bt.vertexTangents!==Jt||Bt.morphTargets!==Ft||Bt.morphNormals!==ue||Bt.morphColors!==_e||Bt.toneMapping!==be||Bt.morphTargetsCount!==de)&&(fe=!0):(fe=!0,Bt.__version=G.version);let Li=Bt.currentProgram;fe===!0&&(Li=yo(G,F,O));let ys=!1,xi=!1,pr=!1,Me=Li.getUniforms(),Zi=Bt.uniforms;if(ut.useProgram(Li.program)&&(ys=!0,xi=!0,pr=!0),G.id!==T&&(T=G.id,xi=!0),ys||b!==E){ut.buffers.depth.getReversed()?(lt.copy(E.projectionMatrix),g0(lt),x0(lt),Me.setValue(D,"projectionMatrix",lt)):Me.setValue(D,"projectionMatrix",E.projectionMatrix),Me.setValue(D,"viewMatrix",E.matrixWorldInverse);let wn=Me.map.cameraPosition;wn!==void 0&&wn.setValue(D,zt.setFromMatrixPosition(E.matrixWorld)),bt.logarithmicDepthBuffer&&Me.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Me.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,xi=!0,pr=!0)}if(O.isSkinnedMesh){Me.setOptional(D,O,"bindMatrix"),Me.setOptional(D,O,"bindMatrixInverse");let Si=O.skeleton;Si&&(Si.boneTexture===null&&Si.computeBoneTexture(),Me.setValue(D,"boneTexture",Si.boneTexture,R))}O.isBatchedMesh&&(Me.setOptional(D,O,"batchingTexture"),Me.setValue(D,"batchingTexture",O._matricesTexture,R),Me.setOptional(D,O,"batchingIdTexture"),Me.setValue(D,"batchingIdTexture",O._indirectTexture,R),Me.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Me.setValue(D,"batchingColorTexture",O._colorsTexture,R));let mr=V.morphAttributes;if((mr.position!==void 0||mr.normal!==void 0||mr.color!==void 0)&&Xt.update(O,V,Li),(xi||Bt.receiveShadow!==O.receiveShadow)&&(Bt.receiveShadow=O.receiveShadow,Me.setValue(D,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Zi.envMap.value=Nt,Zi.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Zi.envMapIntensity.value=F.environmentIntensity),xi&&(Me.setValue(D,"toneMappingExposure",_.toneMappingExposure),Bt.needsLights&&yp(Zi,pr),ht&&G.fog===!0&&dt.refreshFogUniforms(Zi,ht),dt.refreshMaterialUniforms(Zi,G,X,it,m.state.transmissionRenderTarget[E.id]),Gs.upload(D,Nu(Bt),Zi,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Gs.upload(D,Nu(Bt),Zi,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Me.setValue(D,"center",O.center),Me.setValue(D,"modelViewMatrix",O.modelViewMatrix),Me.setValue(D,"normalMatrix",O.normalMatrix),Me.setValue(D,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Si=G.uniformsGroups;for(let wn=0,bn=Si.length;wn<bn;wn++){let Ou=Si[wn];N.update(Ou,Li),N.bind(Ou,Li)}}return Li}function yp(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function vp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,F,V){vt.get(E.texture).__webglTexture=F,vt.get(E.depthTexture).__webglTexture=V;let G=vt.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){let V=vt.get(E);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,V=0){P=E,M=F,A=V;let G=!0,O=null,ht=!1,wt=!1;if(E){let Nt=vt.get(E);if(Nt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(Nt.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Nt.__hasExternalTextures)R.rebindTextures(E,vt.get(E.texture).__webglTexture,vt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ft=E.depthTexture;if(Nt.__boundDepthTexture!==Ft){if(Ft!==null&&vt.has(Ft)&&(E.width!==Ft.image.width||E.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}let Yt=E.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(wt=!0);let Jt=vt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Jt[F])?O=Jt[F][V]:O=Jt[F],ht=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?O=vt.get(E).__webglMultisampledFramebuffer:Array.isArray(Jt)?O=Jt[V]:O=Jt,L.copy(E.viewport),B.copy(E.scissor),U=E.scissorTest}else L.copy(yt).multiplyScalar(X).floor(),B.copy(Vt).multiplyScalar(X).floor(),U=oe;if(ut.bindFramebuffer(D.FRAMEBUFFER,O)&&G&&ut.drawBuffers(E,O),ut.viewport(L),ut.scissor(B),ut.setScissorTest(U),ht){let Nt=vt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Nt.__webglTexture,V)}else if(wt){let Nt=vt.get(E.texture),Yt=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nt.__webglTexture,V||0,Yt)}T=-1},this.readRenderTargetPixels=function(E,F,V,G,O,ht,wt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Ut=Ut[wt]),Ut){ut.bindFramebuffer(D.FRAMEBUFFER,Ut);try{let Nt=E.texture,Yt=Nt.format,Jt=Nt.type;if(!bt.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-G&&V>=0&&V<=E.height-O&&D.readPixels(F,V,G,O,qt.convert(Yt),qt.convert(Jt),ht)}finally{let Nt=P!==null?vt.get(P).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(E,F,V,G,O,ht,wt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Ut=Ut[wt]),Ut){let Nt=E.texture,Yt=Nt.format,Jt=Nt.type;if(!bt.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-G&&V>=0&&V<=E.height-O){ut.bindFramebuffer(D.FRAMEBUFFER,Ut);let Ft=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ft),D.bufferData(D.PIXEL_PACK_BUFFER,ht.byteLength,D.STREAM_READ),D.readPixels(F,V,G,O,qt.convert(Yt),qt.convert(Jt),0);let ue=P!==null?vt.get(P).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,ue);let _e=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await m0(D,_e,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ft),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ht),D.deleteBuffer(Ft),D.deleteSync(_e),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,V=0){E.isTexture!==!0&&(Er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);let G=Math.pow(2,-V),O=Math.floor(E.image.width*G),ht=Math.floor(E.image.height*G),wt=F!==null?F.x:0,Ut=F!==null?F.y:0;R.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,wt,Ut,O,ht),ut.unbindTexture()},this.copyTextureToTexture=function(E,F,V=null,G=null,O=0){E.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],F=arguments[2],O=arguments[3]||0,V=null);let ht,wt,Ut,Nt,Yt,Jt,Ft,ue,_e,be=E.isCompressedTexture?E.mipmaps[O]:E.image;V!==null?(ht=V.max.x-V.min.x,wt=V.max.y-V.min.y,Ut=V.isBox3?V.max.z-V.min.z:1,Nt=V.min.x,Yt=V.min.y,Jt=V.isBox3?V.min.z:0):(ht=be.width,wt=be.height,Ut=be.depth||1,Nt=0,Yt=0,Jt=0),G!==null?(Ft=G.x,ue=G.y,_e=G.z):(Ft=0,ue=0,_e=0);let hi=qt.convert(F.format),de=qt.convert(F.type),Bt;F.isData3DTexture?(R.setTexture3D(F,0),Bt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Bt=D.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Bt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let an=D.getParameter(D.UNPACK_ROW_LENGTH),fe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Li=D.getParameter(D.UNPACK_SKIP_PIXELS),ys=D.getParameter(D.UNPACK_SKIP_ROWS),xi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,be.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,be.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Yt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Jt);let pr=E.isDataArrayTexture||E.isData3DTexture,Me=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Zi=vt.get(E),mr=vt.get(F),Si=vt.get(Zi.__renderTarget),wn=vt.get(mr.__renderTarget);ut.bindFramebuffer(D.READ_FRAMEBUFFER,Si.__webglFramebuffer),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let bn=0;bn<Ut;bn++)pr&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(E).__webglTexture,O,Jt+bn),E.isDepthTexture?(Me&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(F).__webglTexture,O,_e+bn),D.blitFramebuffer(Nt,Yt,ht,wt,Ft,ue,ht,wt,D.DEPTH_BUFFER_BIT,D.NEAREST)):Me?D.copyTexSubImage3D(Bt,O,Ft,ue,_e+bn,Nt,Yt,ht,wt):D.copyTexSubImage2D(Bt,O,Ft,ue,_e+bn,Nt,Yt,ht,wt);ut.bindFramebuffer(D.READ_FRAMEBUFFER,null),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Me?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Bt,O,Ft,ue,_e,ht,wt,Ut,hi,de,be.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Bt,O,Ft,ue,_e,ht,wt,Ut,hi,be.data):D.texSubImage3D(Bt,O,Ft,ue,_e,ht,wt,Ut,hi,de,be):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Ft,ue,ht,wt,hi,de,be.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Ft,ue,be.width,be.height,hi,be.data):D.texSubImage2D(D.TEXTURE_2D,O,Ft,ue,ht,wt,hi,de,be);D.pixelStorei(D.UNPACK_ROW_LENGTH,an),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Li),D.pixelStorei(D.UNPACK_SKIP_ROWS,ys),D.pixelStorei(D.UNPACK_SKIP_IMAGES,xi),O===0&&F.generateMipmaps&&D.generateMipmap(Bt),ut.unbindTexture()},this.copyTextureToTexture3D=function(E,F,V=null,G=null,O=0){return E.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0),Er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,V,G,O)},this.initRenderTarget=function(E){vt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),ut.unbindTexture()},this.resetState=function(){M=0,A=0,P=null,ut.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}},fa=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},pa=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},oh=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gc,this.updateRanges=[],this.version=0,this.uuid=ji()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ni=new C,ma=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.applyMatrix4(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.applyNormalMatrix(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.transformDirection(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Fi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ge(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Br=class extends tn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_r=new C,ks=new C,Us=new C,Ns=new K,wr=new K,bf=new le,Ho=new C,br=new C,Vo=new C,Od=new K,jl=new K,Bd=new K,ga=class extends Ne{constructor(t=new Br){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new Ce;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new oh(e,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new ma(i,3,0,!1)),Ds.setAttribute("uv",new ma(i,2,3,!1))}this.geometry=Ds,this.material=t,this.center=new K(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),bf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Us.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Go(Ho.set(-.5,-.5,0),Us,o,ks,s,r),Go(br.set(.5,-.5,0),Us,o,ks,s,r),Go(Vo.set(.5,.5,0),Us,o,ks,s,r),Od.set(0,0),jl.set(1,0),Bd.set(1,1);let a=t.ray.intersectTriangle(Ho,br,Vo,!1,_r);if(a===null&&(Go(br.set(-.5,.5,0),Us,o,ks,s,r),jl.set(0,1),a=t.ray.intersectTriangle(Ho,Vo,br,!1,_r),a===null))return;let l=t.ray.origin.distanceTo(_r);l<t.near||l>t.far||e.push({distance:l,point:_r.clone(),uv:Pn.getInterpolation(_r,Ho,br,Vo,Od,jl,Bd,new K),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};ls=class extends fi{constructor(t=null,e=1,i=1,s,r,o,a,l,c=je,h=je,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xa=class extends Ve{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Fs=new le,zd=new le,Wo=[],Hd=new xn,hv=new le,Mr=new Rt,Sr=new Nn,ya=class extends Rt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,hv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fs),Hd.copy(t.boundingBox).applyMatrix4(Fs),this.boundingBox.union(Hd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fs),Sr.copy(t.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sr.copy(this.boundingSphere),Sr.applyMatrix4(i),t.ray.intersectsSphere(Sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fs),zd.multiplyMatrices(i,Fs),Mr.matrixWorld=zd,Mr.raycast(t,Wo);for(let o=0,a=Wo.length;o<a;o++){let l=Wo[o];l.instanceId=r,l.object=this,e.push(l)}Wo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new xa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ls(new Float32Array(s*this.count),s,this.count,Vh,Ki));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},$s=class extends tn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vd=new le,ah=new Nr,Xo=new Nn,qo=new C,zr=class extends Ne{constructor(t=new Ce,e=new $s){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(s),Xo.radius+=r,t.ray.intersectsSphere(Xo)===!1)return;Vd.copy(s).invert(),ah.copy(t.ray).applyMatrix4(Vd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,d=p;g<d;g++){let x=c.getX(g);qo.fromBufferAttribute(u,x),Gd(qo,x,l,s,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,d=p;g<d;g++)qo.fromBufferAttribute(u,g),Gd(qo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Js=class extends fi{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ri=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new K:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new C,s=[],r=[],o=[],a=new C,l=new le;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(He(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(He(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Hr=class extends Ri{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new K){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},lh=class extends Hr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Yo=new C,Ql=new $h,tc=new $h,ec=new $h,ch=class extends Ri{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Yo.subVectors(s[0],s[1]).add(s[0]),c=Yo);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Yo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),d=Math.pow(u.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(h),p);d<1e-4&&(d=1),g<1e-4&&(g=d),x<1e-4&&(x=d),Ql.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,d,x),tc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,d,x),ec.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,d,x)}else this.curveType==="catmullrom"&&(Ql.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),tc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ec.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Ql.calc(l),tc.calc(l),ec.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};va=class extends Ri{constructor(t=new K,e=new K,i=new K,s=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new K){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Lr(t,s.x,r.x,o.x,a.x),Lr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},hh=class extends Ri{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Lr(t,s.x,r.x,o.x,a.x),Lr(t,s.y,r.y,o.y,a.y),Lr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_a=class extends Ri{constructor(t=new K,e=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new K){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new K){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uh=class extends Ri{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wa=class extends Ri{constructor(t=new K,e=new K,i=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new K){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Ir(t,s.x,r.x,o.x),Ir(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dh=class extends Ri{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Ir(t,s.x,r.x,o.x),Ir(t,s.y,r.y,o.y),Ir(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ba=class extends Ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new K){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Wd(a,l.x,c.x,h.x,u.x),Wd(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new K().fromArray(s))}return this}},fh=Object.freeze({__proto__:null,ArcCurve:lh,CatmullRomCurve3:ch,CubicBezierCurve:va,CubicBezierCurve3:hh,EllipseCurve:Hr,LineCurve:_a,LineCurve3:uh,QuadraticBezierCurve:wa,QuadraticBezierCurve3:dh,SplineCurve:ba}),ph=class extends Ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new fh[s.type]().fromJSON(s))}return this}},Ma=class extends ph{constructor(t){super(),this.type="Path",this.currentPoint=new K,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new _a(this.currentPoint.clone(),new K(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new wa(this.currentPoint.clone(),new K(t,e),new K(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new va(this.currentPoint.clone(),new K(t,e),new K(i,s),new K(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ba(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Hr(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Sa=class n extends Ce{constructor(t=[new K(0,-.5),new K(.5,0),new K(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=He(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new C,f=new K,p=new C,g=new C,d=new C,x=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:x=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,p.x=m*1,p.y=-x,p.z=m*0,d.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(d.x,d.y,d.z);break;default:x=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,p.x=m*1,p.y=-x,p.z=m*0,g.copy(p),p.x+=d.x,p.y+=d.y,p.z+=d.z,p.normalize(),l.push(p.x,p.y,p.z),d.copy(g)}for(let v=0;v<=e;v++){let y=i+v*h*s,_=Math.sin(y),I=Math.cos(y);for(let M=0;M<=t.length-1;M++){u.x=t[M].x*_,u.y=t[M].y,u.z=t[M].x*I,o.push(u.x,u.y,u.z),f.x=v/e,f.y=M/(t.length-1),a.push(f.x,f.y);let A=l[3*M+0]*_,P=l[3*M+1],T=l[3*M+0]*I;c.push(A,P,T)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){let _=y+v*t.length,I=_,M=_+t.length,A=_+t.length+1,P=_+1;r.push(I,M,P),r.push(A,P,M)}this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},Ks=class n extends Ce{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new C,h=new K;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let p=i+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ze=class n extends Ce{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,d=[],x=i/2,m=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(p,2));function v(){let _=new C,I=new C,M=0,A=(e-t)/i;for(let P=0;P<=r;P++){let T=[],b=P/r,L=b*(e-t)+t;for(let B=0;B<=s;B++){let U=B/s,H=U*l+a,Y=Math.sin(H),W=Math.cos(H);I.x=L*Y,I.y=-b*i+x,I.z=L*W,u.push(I.x,I.y,I.z),_.set(Y,A,W).normalize(),f.push(_.x,_.y,_.z),p.push(U,1-b),T.push(g++)}d.push(T)}for(let P=0;P<s;P++)for(let T=0;T<r;T++){let b=d[T][P],L=d[T+1][P],B=d[T+1][P+1],U=d[T][P+1];(t>0||T!==0)&&(h.push(b,L,U),M+=3),(e>0||T!==r-1)&&(h.push(L,B,U),M+=3)}c.addGroup(m,M,0),m+=M}function y(_){let I=g,M=new K,A=new C,P=0,T=_===!0?t:e,b=_===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,x*b,0),f.push(0,b,0),p.push(.5,.5),g++;let L=g;for(let B=0;B<=s;B++){let H=B/s*l+a,Y=Math.cos(H),W=Math.sin(H);A.x=T*W,A.y=x*b,A.z=T*Y,u.push(A.x,A.y,A.z),f.push(0,b,0),M.x=Y*.5+.5,M.y=W*.5*b+.5,p.push(M.x,M.y),g++}for(let B=0;B<s;B++){let U=I+B,H=L+B;_===!0?h.push(H,H+1,U):h.push(H+1,H,U),P+=3}c.addGroup(m,P,_===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},On=class n extends Ze{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},mh=class n extends Ce{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new C,_=new C,I=new C;for(let M=0;M<e.length;M+=3)p(e[M+0],y),p(e[M+1],_),p(e[M+2],I),l(y,_,I,v)}function l(v,y,_,I){let M=I+1,A=[];for(let P=0;P<=M;P++){A[P]=[];let T=v.clone().lerp(_,P/M),b=y.clone().lerp(_,P/M),L=M-P;for(let B=0;B<=L;B++)B===0&&P===M?A[P][B]=T:A[P][B]=T.clone().lerp(b,B/L)}for(let P=0;P<M;P++)for(let T=0;T<2*(M-P)-1;T++){let b=Math.floor(T/2);T%2===0?(f(A[P][b+1]),f(A[P+1][b]),f(A[P][b])):(f(A[P][b+1]),f(A[P+1][b+1]),f(A[P+1][b]))}}function c(v){let y=new C;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let v=new C;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let _=x(v)/2/Math.PI+.5,I=m(v)/Math.PI+.5;o.push(_,1-I)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let y=o[v+0],_=o[v+2],I=o[v+4],M=Math.max(y,_,I),A=Math.min(y,_,I);M>.9&&A<.1&&(y<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),I<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function p(v,y){let _=v*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function g(){let v=new C,y=new C,_=new C,I=new C,M=new K,A=new K,P=new K;for(let T=0,b=0;T<r.length;T+=9,b+=6){v.set(r[T+0],r[T+1],r[T+2]),y.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),M.set(o[b+0],o[b+1]),A.set(o[b+2],o[b+3]),P.set(o[b+4],o[b+5]),I.copy(v).add(y).add(_).divideScalar(3);let L=x(I);d(M,b+0,v,L),d(A,b+2,y,L),d(P,b+4,_,L)}}function d(v,y,_,I){I<0&&v.x===1&&(o[y]=v.x-1),_.x===0&&_.z===0&&(o[y]=I/2/Math.PI+.5)}function x(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}},js=class extends Ma{constructor(t){super(t),this.uuid=ji(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Ma().fromJSON(s))}return this}},yv={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Mf(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,p;if(i&&(r=Mv(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Vr(r,o,e,a,l,p,0),o}};Dr=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];qd(t),Yd(i,t);let o=t.length;e.forEach(qd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Yd(i,e[l]);let a=yv.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Xr=class n extends Ce{constructor(t=new js([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,d=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Uv,y,_=!1,I,M,A,P;m&&(y=m.getSpacedPoints(h),_=!0,f=!1,I=m.computeFrenetFrames(h,!1),M=new C,A=new C,P=new C),f||(x=0,p=0,g=0,d=0);let T=a.extractPoints(c),b=T.shape,L=T.holes;if(!Dr.isClockWise(b)){b=b.reverse();for(let Q=0,ct=L.length;Q<ct;Q++){let D=L[Q];Dr.isClockWise(D)&&(L[Q]=D.reverse())}}let U=Dr.triangulateShape(b,L),H=b;for(let Q=0,ct=L.length;Q<ct;Q++){let D=L[Q];b=b.concat(D)}function Y(Q,ct,D){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ct,D)}let W=b.length,it=U.length;function X(Q,ct,D){let Dt,nt,bt,ut=Q.x-ct.x,Ht=Q.y-ct.y,vt=D.x-Q.x,R=D.y-Q.y,S=ut*ut+Ht*Ht,z=ut*R-Ht*vt;if(Math.abs(z)>Number.EPSILON){let Z=Math.sqrt(S),et=Math.sqrt(vt*vt+R*R),$=ct.x-Ht/Z,It=ct.y+ut/Z,dt=D.x-R/et,xt=D.y+vt/et,Zt=((dt-$)*R-(xt-It)*vt)/(ut*R-Ht*vt);Dt=$+ut*Zt-Q.x,nt=It+Ht*Zt-Q.y;let st=Dt*Dt+nt*nt;if(st<=2)return new K(Dt,nt);bt=Math.sqrt(st/2)}else{let Z=!1;ut>Number.EPSILON?vt>Number.EPSILON&&(Z=!0):ut<-Number.EPSILON?vt<-Number.EPSILON&&(Z=!0):Math.sign(Ht)===Math.sign(R)&&(Z=!0),Z?(Dt=-Ht,nt=ut,bt=Math.sqrt(S)):(Dt=ut,nt=Ht,bt=Math.sqrt(S/2))}return new K(Dt/bt,nt/bt)}let rt=[];for(let Q=0,ct=H.length,D=ct-1,Dt=Q+1;Q<ct;Q++,D++,Dt++)D===ct&&(D=0),Dt===ct&&(Dt=0),rt[Q]=X(H[Q],H[D],H[Dt]);let pt=[],yt,Vt=rt.concat();for(let Q=0,ct=L.length;Q<ct;Q++){let D=L[Q];yt=[];for(let Dt=0,nt=D.length,bt=nt-1,ut=Dt+1;Dt<nt;Dt++,bt++,ut++)bt===nt&&(bt=0),ut===nt&&(ut=0),yt[Dt]=X(D[Dt],D[bt],D[ut]);pt.push(yt),Vt=Vt.concat(yt)}for(let Q=0;Q<x;Q++){let ct=Q/x,D=p*Math.cos(ct*Math.PI/2),Dt=g*Math.sin(ct*Math.PI/2)+d;for(let nt=0,bt=H.length;nt<bt;nt++){let ut=Y(H[nt],rt[nt],Dt);lt(ut.x,ut.y,-D)}for(let nt=0,bt=L.length;nt<bt;nt++){let ut=L[nt];yt=pt[nt];for(let Ht=0,vt=ut.length;Ht<vt;Ht++){let R=Y(ut[Ht],yt[Ht],Dt);lt(R.x,R.y,-D)}}}let oe=g+d;for(let Q=0;Q<W;Q++){let ct=f?Y(b[Q],Vt[Q],oe):b[Q];_?(A.copy(I.normals[0]).multiplyScalar(ct.x),M.copy(I.binormals[0]).multiplyScalar(ct.y),P.copy(y[0]).add(A).add(M),lt(P.x,P.y,P.z)):lt(ct.x,ct.y,0)}for(let Q=1;Q<=h;Q++)for(let ct=0;ct<W;ct++){let D=f?Y(b[ct],Vt[ct],oe):b[ct];_?(A.copy(I.normals[Q]).multiplyScalar(D.x),M.copy(I.binormals[Q]).multiplyScalar(D.y),P.copy(y[Q]).add(A).add(M),lt(P.x,P.y,P.z)):lt(D.x,D.y,u/h*Q)}for(let Q=x-1;Q>=0;Q--){let ct=Q/x,D=p*Math.cos(ct*Math.PI/2),Dt=g*Math.sin(ct*Math.PI/2)+d;for(let nt=0,bt=H.length;nt<bt;nt++){let ut=Y(H[nt],rt[nt],Dt);lt(ut.x,ut.y,u+D)}for(let nt=0,bt=L.length;nt<bt;nt++){let ut=L[nt];yt=pt[nt];for(let Ht=0,vt=ut.length;Ht<vt;Ht++){let R=Y(ut[Ht],yt[Ht],Dt);_?lt(R.x,R.y+y[h-1].y,y[h-1].x+D):lt(R.x,R.y,u+D)}}}J(),at();function J(){let Q=s.length/3;if(f){let ct=0,D=W*ct;for(let Dt=0;Dt<it;Dt++){let nt=U[Dt];Lt(nt[2]+D,nt[1]+D,nt[0]+D)}ct=h+x*2,D=W*ct;for(let Dt=0;Dt<it;Dt++){let nt=U[Dt];Lt(nt[0]+D,nt[1]+D,nt[2]+D)}}else{for(let ct=0;ct<it;ct++){let D=U[ct];Lt(D[2],D[1],D[0])}for(let ct=0;ct<it;ct++){let D=U[ct];Lt(D[0]+W*h,D[1]+W*h,D[2]+W*h)}}i.addGroup(Q,s.length/3-Q,0)}function at(){let Q=s.length/3,ct=0;Tt(H,ct),ct+=H.length;for(let D=0,Dt=L.length;D<Dt;D++){let nt=L[D];Tt(nt,ct),ct+=nt.length}i.addGroup(Q,s.length/3-Q,1)}function Tt(Q,ct){let D=Q.length;for(;--D>=0;){let Dt=D,nt=D-1;nt<0&&(nt=Q.length-1);for(let bt=0,ut=h+x*2;bt<ut;bt++){let Ht=W*bt,vt=W*(bt+1),R=ct+Dt+Ht,S=ct+nt+Ht,z=ct+nt+vt,Z=ct+Dt+vt;zt(R,S,z,Z)}}}function lt(Q,ct,D){l.push(Q),l.push(ct),l.push(D)}function Lt(Q,ct,D){Ot(Q),Ot(ct),Ot(D);let Dt=s.length/3,nt=v.generateTopUV(i,s,Dt-3,Dt-2,Dt-1);ie(nt[0]),ie(nt[1]),ie(nt[2])}function zt(Q,ct,D,Dt){Ot(Q),Ot(ct),Ot(Dt),Ot(ct),Ot(D),Ot(Dt);let nt=s.length/3,bt=v.generateSideWallUV(i,s,nt-6,nt-3,nt-2,nt-1);ie(bt[0]),ie(bt[1]),ie(bt[3]),ie(bt[1]),ie(bt[2]),ie(bt[3])}function Ot(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function ie(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Nv(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new fh[s.type]().fromJSON(s)),new n(i,t.options)}},Uv={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new K(r,o),new K(a,l),new K(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],d=t[r*3],x=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new K(o,1-l),new K(c,1-u),new K(f,1-g),new K(d,1-m)]:[new K(a,1-l),new K(h,1-u),new K(p,1-g),new K(x,1-m)]}};pi=class n extends mh{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Ta=class n extends Ce{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,p=new C,g=new K;for(let d=0;d<=s;d++){for(let x=0;x<=i;x++){let m=r+x/i*o;p.x=u*Math.cos(m),p.y=u*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let d=0;d<s;d++){let x=d*(i+1);for(let m=0;m<i;m++){let v=m+x,y=v,_=v+i+1,I=v+i+2,M=v+1;a.push(y,_,M),a.push(_,I,M)}}this.setIndex(a),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ci=class n extends Ce{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,f=new C,p=[],g=[],d=[],x=[];for(let m=0;m<=i;m++){let v=[],y=m/i,_=0;m===0&&o===0?_=.5/e:m===i&&l===Math.PI&&(_=-.5/e);for(let I=0;I<=e;I++){let M=I/e;u.x=-t*Math.cos(s+M*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+M*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),d.push(f.x,f.y,f.z),x.push(M+_,1-y),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){let y=h[m][v+1],_=h[m][v],I=h[m+1][v],M=h[m+1][v+1];(m!==0||o>0)&&p.push(y,_,M),(m!==i-1||l<Math.PI)&&p.push(_,I,M)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},yn=class n extends Ce{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new C,u=new C,f=new C;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let d=g/s*r,x=p/i*Math.PI*2;u.x=(t+e*Math.cos(x))*Math.cos(d),u.y=(t+e*Math.cos(x))*Math.sin(d),u.z=e*Math.sin(x),a.push(u.x,u.y,u.z),h.x=t*Math.cos(d),h.y=t*Math.sin(d),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let d=(s+1)*p+g-1,x=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,v=(s+1)*p+g;o.push(d,x,v),o.push(x,m,v)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Ea=class extends Te{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},hs=class extends tn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Aa=class extends tn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};Qs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yh=class extends Qs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vu,endingEnd:Vu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gu:r=t,a=2*e-i;break;case Wu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Gu:o=t,l=2*i-e;break;case Wu:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),d=g*g,x=d*g,m=-f*x+2*f*d-f*g,v=(1+f)*x+(-1.5-2*f)*d+(-.5+f)*g+1,y=(-1-p)*x+(1.5+p)*d+.5*g,_=p*x-p*d;for(let I=0;I!==a;++I)r[I]=m*o[h+I]+v*o[c+I]+y*o[l+I]+_*o[u+I];return r}},vh=class extends Qs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},_h=class extends Qs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},zi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jo(e,this.TimeBufferType),this.values=Jo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Jo(t.times,Array),values:Jo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new _h(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ia:e=this.InterpolantFactoryMethodDiscrete;break;case Vc:e=this.InterpolantFactoryMethodLinear;break;case Tl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ia;case this.InterpolantFactoryMethodLinear:return Vc;case this.InterpolantFactoryMethodSmooth:return Tl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Fv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Tl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,f=u-i,p=u+i;for(let g=0;g!==i;++g){let d=e[u+g];if(d!==e[f+g]||d!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let p=0;p!==i;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};zi.prototype.TimeBufferType=Float32Array;zi.prototype.ValueBufferType=Float32Array;zi.prototype.DefaultInterpolation=Vc;us=class extends zi{constructor(t,e,i){super(t,e,i)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=ia;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;wh=class extends zi{};wh.prototype.ValueTypeName="color";bh=class extends zi{};bh.prototype.ValueTypeName="number";Mh=class extends Qs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Un.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ra=class extends zi{InterpolantFactoryMethodLinear(t){return new Mh(this.times,this.values,this.getValueSize(),t)}};Ra.prototype.ValueTypeName="quaternion";Ra.prototype.InterpolantFactoryMethodSmooth=void 0;ds=class extends zi{constructor(t,e,i){super(t,e,i)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=ia;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;Sh=class extends zi{};Sh.prototype.ValueTypeName="vector";Th=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Ov=new Th,Eh=class{constructor(t){this.manager=t!==void 0?t:Ov,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Eh.DEFAULT_MATERIAL_NAME="__DEFAULT";qr=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ca=class extends qr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ic=new le,Zd=new C,$d=new C,Pa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Zd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zd),$d.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($d),e.updateMatrixWorld(),ic.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ic)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Jd=new le,Tr=new C,nc=new C,Ah=class extends Pa{constructor(){super(new ui(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Tr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Tr),nc.copy(i.position),nc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(nc),i.updateMatrixWorld(),s.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Jd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jd)}},fs=class extends qr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ah}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Rh=class extends Pa{constructor(){super(new Fn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends qr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Rh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ia=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Kd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};Jh="\\[\\]\\.:\\/",Bv=new RegExp("["+Jh+"]","g"),Kh="[^"+Jh+"]",zv="[^"+Jh.replace("\\.","")+"]",Hv=/((?:WC+[\/:])*)/.source.replace("WC",Kh),Vv=/(WCOD+)?/.source.replace("WCOD",zv),Gv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kh),Wv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kh),Xv=new RegExp("^"+Hv+Vv+Gv+Wv+"$"),qv=["material","materials","bones","map"],Ch=class{constructor(t,e,i){let s=i||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ae=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bv,"")}static parseTrackName(t){let e=Xv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);qv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Ch;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];M_=new Float32Array(1),jd=new le,La=class{constructor(t,e,i=0,s=1/0){this.ray=new Nr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jd),this}intersectObject(t,e=!0,i=[]){return Ph(t,this,i,e),i.sort(Qd),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ph(t[s],this,i,e);return i.sort(Qd),i}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ih)});function Yv(){return w.state.identity==="father"?"Dad":"Mom"}function Zv(){return w.state.identity==="father"?"Grandpa":"Grandma"}function nr(){return w.state.childName||"Lily"}function Ef(){return w.state.childKind==="son"?"he":"she"}function $v(){return w.state.childKind==="son"?"him":"her"}function Af(){return w.state.childKind==="son"?"his":"her"}function Jv(){let n=Ef();return n[0].toUpperCase()+n.slice(1)}function Kv(){let n=Af();return n[0].toUpperCase()+n.slice(1)}function De(n){return n.replace(/\{me\}/g,Yv()).replace(/\{grandme\}/g,Zv()).replace(/\{child\}/g,nr()).replace(/\{they\}/g,Ef()).replace(/\{They\}/g,Jv()).replace(/\{them\}/g,$v()).replace(/\{their\}/g,Af()).replace(/\{Their\}/g,Kv())}function jh(n,t,e){let i=(t-n+Math.PI)%(Math.PI*2)-Math.PI;return i<-Math.PI&&(i+=Math.PI*2),n+i*e}function we(n=1){let t=n>>>0||1,e=()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,(t>>>0)/4294967296);return e.range=(i,s)=>i+(s-i)*e(),e.int=(i,s)=>Math.floor(i+(s-i+1)*e()),e.pick=i=>i[Math.floor(e()*i.length)],e}function Wt(n){return new Promise(t=>{let e=0,i=s=>{e+=s,e>=n&&(w.updaters.delete(i),t())};w.updaters.add(i)})}function ei(n,t,e=jv){return new Promise(i=>{let s=0;if(n<=0)return t(1),i();let r=o=>{s+=o;let a=jt(s/n,0,1);t(e(a)),a>=1&&(w.updaters.delete(r),i())};w.updaters.add(r)})}function oi(n){return new Promise(t=>{let e=i=>{n(i)&&(w.updaters.delete(e),t())};w.updaters.add(e)})}function $r(n,t,e,i){let s=n-e,r=t-i;return Math.sqrt(s*s+r*r)}var w,jt,ti,jv,Hi,S_,Be=vo(()=>{w={time:0,realTime:0,dt:0,timeScale:1,paused:!1,debug:!1,renderer:null,scene:null,camera:null,world:null,player:null,ui:null,audio:null,input:null,album:null,director:null,state:{identity:"mother",childName:"Lily",childKind:"daughter",flags:{},stats:{emails:0,workCalls:0}},updaters:new Set,realUpdaters:new Set};jt=(n,t,e)=>n<t?t:n>e?e:n,ti=(n,t,e)=>n+(t-n)*e,jv=n=>n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2,Hi=(n,t,e,i)=>ti(n,t,1-Math.exp(-e*i));S_=we(12345)});function ye(n,t={}){let e=n+JSON.stringify(t);if(lu.has(e))return lu.get(e);let i=new hs({color:n,flatShading:!0,roughness:t.roughness??.92,metalness:t.metalness??0,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,transparent:!!t.transparent,opacity:t.opacity??1,side:t.side??Oi,depthWrite:t.depthWrite??!0});return lu.set(e,i),i}function Gi(n,t={}){return new hs({color:n,flatShading:!0,roughness:t.roughness??.92,metalness:0,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,transparent:!!t.transparent,opacity:t.opacity??1,side:t.side??Oi,depthWrite:t.depthWrite??!0})}function vn(n,t){return cu.has(n)||cu.set(n,t()),cu.get(n)}function hu(n,t=.05,e=1,i=!0){let s=n.attributes.position,r=1/0;for(let o=0;o<s.count;o++)r=Math.min(r,s.getY(o));for(let o=0;o<s.count;o++){let a=s.getX(o),l=s.getY(o),c=s.getZ(o);if(i&&Math.abs(l-r)<1e-4)continue;let h=Math.sin(Math.round(a*100)*12.9898+Math.round(l*100)*78.233+Math.round(c*100)*37.719+e*11.13)*43758.5453,u=h-Math.floor(h)-.5,f=Math.sin(h*1.37+3.1)*9631.17,p=f-Math.floor(f)-.5,g=Math.sin(h*.71+7.7)*7211.31,d=g-Math.floor(g)-.5;s.setXYZ(o,a+u*t,l+p*t,c+d*t)}return s.needsUpdate=!0,n.computeVertexNormals(),n}function re(n,t=!0,e=!0){return n.traverse(i=>{i.isMesh&&(i.castShadow=t,i.receiveShadow=e)}),n}function ms(n,t,e){let i=new Rt(n,typeof t=="number"?ye(t,e):t);return i.castShadow=!0,i.receiveShadow=!0,i}function j(n,t,e,i,s){let r=vn(`box${n},${t},${e}`,()=>{let o=new ri(n,t,e);return o.translate(0,t/2,0),o});return ms(r,i,s)}function zn(n,t,e,i,s){let r=vn(`boxc${n},${t},${e}`,()=>new ri(n,t,e));return ms(r,i,s)}function ke(n,t,e,i,s,r){let o=vn(`cyl${n},${t},${e},${i}`,()=>{let a=new Ze(n,t,e,i);return a.translate(0,e/2,0),a});return ms(o,s,r)}function Vi(n,t,e,i,s){let r=vn(`cone${n},${t},${e}`,()=>{let o=new On(n,t,e);return o.translate(0,t/2,0),o});return ms(r,i,s)}function Ee(n,t,e,i=0,s=1,r){let o=vn(`ico${n},${t},${i},${s}`,()=>hu(new pi(n,t),i,s,!1));return ms(o,e,r)}function Hn(n,t,e,i,s){let r=vn(`sph${n},${t},${e}`,()=>new Ci(n,t,e));return ms(r,i,s)}function ja(n,t,e,i,s,r=Math.PI*2,o){let a=vn(`tor${n},${t},${e},${i},${r}`,()=>new yn(n,t,e,i,r));return ms(a,s,o)}function l_(...n){let t=new ot;return n.forEach(e=>e&&t.add(e)),t}function uu(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);let s=new Js(i);return s.colorSpace=qe,s.anisotropy=4,s}function Qa(){return Ka||(Ka=uu(128,128,(n,t)=>{let e=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.55)"),e.addColorStop(.6,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)}),Ka)}function Wi(n=16777215,t=1,e=1){let i=new ga(new Br({map:Qa(),color:n,transparent:!0,opacity:e,blending:Ai,depthWrite:!1,fog:!1}));return i.scale.setScalar(t),i}function no({w:n=20,d:t=20,h:e=1.2,top:i=k.grass,side:s=k.dirt,under:r=k.dirtDark,seed:o=3,rocks:a=!0,edge:l=null}={}){let c=new ot,h=j(n,.35,t,i);if(h.position.y=-.35,h.castShadow=!1,c.add(h),l){let f=j(n+.06,.12,t+.06,l);f.position.y=-.47,f.castShadow=!1,c.add(f)}let u=j(n-.1,e,t-.1,s);if(u.position.y=-.35-e,u.castShadow=!1,c.add(u),a){let f=we(o),p=Math.max(4,Math.round(n*t/30));for(let d=0;d<p;d++){let x=f.range(1.8,4.2),m=f.range(2.5,7.5),v=hu(new On(x,m,5),.35,o+d,!1),y=new Rt(v,ye(d%3===0?k.rockDark:r));y.rotation.x=Math.PI,y.position.set(f.range(-n/2+x*.8,n/2-x*.8),-.35-e-m/2+.2,f.range(-t/2+x*.8,t/2-x*.8)),c.add(y)}let g=new Rt(hu(new On(Math.min(n,t)*.62,Math.min(n,t)*.55,6),.5,o+99,!1),ye(r));g.rotation.x=Math.PI,g.rotation.y=.4,g.scale.set(n/Math.min(n,t),1,t/Math.min(n,t)),g.position.y=-.35-e-Math.min(n,t)*.27+.1,c.add(g)}return c.userData.ground=h,c}function Pi(n,t,e,i=.005,s){let r=new Rt(vn(`patch${n},${t}`,()=>{let o=new Ye(n,t);return o.rotateX(-Math.PI/2),o}),ye(e,s));return r.position.y=i,r.receiveShadow=!0,r}function Vn(n,t,e=10,i=.006){let s=new Rt(vn(`disc${n},${e}`,()=>{let r=new Ks(n,e);return r.rotateX(-Math.PI/2),r}),ye(t));return s.position.y=i,s.receiveShadow=!0,s}function or({kind:n="round",season:t="summer",size:e=1,seed:i=1}={}){let s=we(i*7+3),r=new ot,o=(n==="pine"?.9:1.4)*e,a=n==="birch"?k.birch:k.trunk,l=ke(.12*e,.2*e,o,5,a);r.add(l);let c=new ot;c.position.y=o,r.add(c);let h=kf[n==="blossom"&&t!=="winter"&&t!=="autumn"?"blossom":t];if(n==="pine"){let u=t==="winter"?[k.pine,6134384]:[k.pine,6003307];for(let f=0;f<3;f++){let p=Vi((1-f*.25)*e,1.3*e,6,u[f%2]);if(p.position.y=f*.65*e-.2,c.add(p),t==="winter"){let g=Vi((.55-f*.14)*e,.5*e,6,k.snow);g.position.y=f*.65*e+.75*e,c.add(g)}}}else if(t==="winter"&&n!=="pine"){for(let f=0;f<5;f++){let p=ke(.03*e,.07*e,.9*e,4,a);p.rotation.z=s.range(.5,.9)*(f%2?1:-1),p.rotation.y=f*1.3,p.position.y=s.range(-.2,.3)*e,c.add(p)}let u=Ee(.35*e,0,k.snow,.05,i);u.position.y=.6*e,u.scale.y=.5,c.add(u)}else{let u=n==="birch"?3:4;for(let p=0;p<u;p++){let g=s.range(.55,.85)*e,d=Ee(g,0,h[p%h.length],.12,i+p),x=p/u*Math.PI*2+s.range(0,1);d.position.set(Math.cos(x)*.45*e,s.range(.35,.9)*e,Math.sin(x)*.45*e),c.add(d)}let f=Ee(.7*e,0,h[0],.12,i+9);f.position.y=1.15*e,c.add(f)}return re(r),r.userData.canopy=c,r.userData.sway=s.range(0,6),r.userData.update=(u,f)=>{c.rotation.z=Math.sin(f*.8+r.userData.sway)*.02,c.rotation.x=Math.cos(f*.6+r.userData.sway)*.015},r}function tl({stage:n=1,season:t="summer",swing:e=!1,seed:i=42}={}){let s=new ot,r=[.28,.6,1.25,1.9,2.4][n]??1,o=1.5*r,a=ke(.1*r+.03,.22*r+.05,o,6,k.trunk);s.add(a);let l=new ot;if(l.position.y=o,s.add(l),n>=2)for(let h=0;h<3;h++){let u=ke(.04*r,.09*r,.9*r,5,k.trunk);u.rotation.z=(h-1)*.7,u.rotation.y=h*2.1,u.position.y=-.2*r,l.add(u)}let c=kf[t];if(t==="winter"){for(let u=0;u<7;u++){let f=ke(.025*r,.06*r,1.1*r,4,k.trunk);f.rotation.z=.6+u%3*.15,f.rotation.y=u*.9,f.position.y=.1*r,l.add(f)}let h=Ee(.5*r,0,k.snow,.06,i);h.scale.y=.35,h.position.y=.75*r,l.add(h)}else{let h=we(i),u=n===0?2:6;for(let p=0;p<u;p++){let g=Ee(h.range(.5,.75)*r,n>=3?1:0,c[p%3],.1*r,i+p),d=p/u*Math.PI*2;g.position.set(Math.cos(d)*.6*r,h.range(.3,.8)*r,Math.sin(d)*.6*r),l.add(g)}let f=Ee(.8*r,n>=3?1:0,c[0],.1*r,i+77);f.position.y=1.1*r,l.add(f)}if(e&&n>=2){let h=new ot,u=j(.025,1.3*r*.75,.025,15260872);u.position.set(-.25,-1.3*r*.75,0),h.add(u);let f=j(.025,1.3*r*.75,.025,15260872);f.position.set(.25,-1.3*r*.75,0),h.add(f);let p=j(.65,.06,.25,k.woodDark);p.position.y=-1.3*r*.75,h.add(p),h.position.set(.9*r,o+.15*r-.35,.2),s.add(h),s.userData.swing=h,s.userData.swingLen=1.3*r*.75}return re(s),s.userData.canopy=l,s.userData.update=(h,u)=>{l.rotation.z=Math.sin(u*.7)*.015},s}function Uf(n=7910486,t=1,e=1){let i=new ot,s=we(e);for(let r=0;r<3;r++){let o=Ee(s.range(.28,.42)*t,0,r===1?n:bi(n,.92),.06,e+r);o.position.set((r-1)*.3*t,.25*t,s.range(-.1,.1)),i.add(o)}return re(i)}function so(n=1,t=1,e=k.rock){let i=Ee(.4*n,0,e,.12*n,t);return i.scale.y=.6,i.position.y=.12*n,l_(i)}function ro(n=k.pink,t=1){let e=new ot,i=j(.025,.22,.025,6068806);e.add(i);let s=Ee(.07,0,n,0);s.position.y=.24,e.add(s);let r=Ee(.035,0,k.yellow);return r.position.y=.27,e.add(r),e.rotation.y=t,re(e,!1,!1)}function el(n=k.grassDark,t=1){let e=new ot;for(let i=0;i<3;i++){let s=Vi(.04,.22+i%2*.08,3,n);s.position.set((i-1)*.05,0,i%2*.04),s.rotation.z=(i-1)*.3,e.add(s)}return e.rotation.y=t,re(e,!1,!1)}function il(n=1,t=1){let e=new ot,i=we(n);for(let s=0;s<4;s++){let r=Ee(i.range(.6,1.1)*t,0,16777215,.15,n+s,{emissive:16777215,emissiveIntensity:.25});r.position.set((s-1.5)*.8*t,i.range(-.2,.3),i.range(-.3,.3)),r.scale.y=.7,e.add(r)}return e.userData.drift=i.range(.1,.25),e.traverse(s=>{s.isMesh&&(s.castShadow=!1,s.receiveShadow=!1)}),e}function bi(n,t){let e=new Pt(n);return e.multiplyScalar(t),e.getHex()}function nl({w:n=8,d:t=8,h:e=3.2,floor:i=k.woodLight,wall:s=k.cream,wall2:r=null,trim:o=k.white,base:a=k.dirtDark,windows:l=[]}={}){let c=new ot,h=j(n,.25,t,i);h.position.y=-.25,h.castShadow=!1,c.add(h);let u=j(n+.3,.6,t+.3,a);u.position.y=-.85,u.castShadow=!1,c.add(u);for(let x=1;x<Math.floor(n/.8);x++){let m=Pi(.02,t,bi(i,.9),.003);m.position.x=-n/2+x*.8,c.add(m)}let f=j(.25,e,t+.25,s);f.position.set(-n/2-.125,-.25,-.125),c.add(f);let p=j(n,e,.25,r??s);p.position.set(0,-.25,-t/2-.125),c.add(p);let g=j(.06,.18,t,o);g.position.set(-n/2+.03,0,0),c.add(g);let d=j(n,.18,.06,o);d.position.set(0,0,-t/2+.03),c.add(d);for(let x of l)c.add(c_(x));return re(c),c.userData.walls=[f,p],c}function c_({wall:n="back",at:t=0,y:e=1.1,w:i=1.4,h:s=1.3,glow:r=16773848,roomW:o=8,roomD:a=8}={}){let l=new ot,c=j(i,s,.05,r,{emissive:r,emissiveIntensity:.9});c.castShadow=!1,l.add(c);let h=j(i+.16,.1,.14,k.white);h.position.y=-.05,l.add(h);let u=j(i+.16,.1,.14,k.white);u.position.y=s,l.add(u);let f=j(.08,s,.12,k.white);f.position.x=0,l.add(f);let p=j(.1,s,.14,k.white);p.position.x=-i/2,l.add(p);let g=j(.1,s,.14,k.white);g.position.x=i/2,l.add(g);let d=j(i+.3,.07,.3,k.white);return d.position.set(0,-.08,.12),l.add(d),n==="back"?l.position.set(t,e,-a/2+.03):(l.position.set(-o/2+.03,e,t),l.rotation.y=Math.PI/2),l.userData.pane=c,l}function du({w:n=5,d:t=4,h:e=2.6,wall:i=k.cream,roof:s=k.terracotta,door:r=k.navy,trim:o=k.white,chimney:a=!0,porch:l=!1,lit:c=!1,seed:h=1}={}){let u=new ot,f=j(n,e,t,i);u.add(f);let p=new js,g=.35;p.moveTo(-n/2-g,0),p.lineTo(n/2+g,0),p.lineTo(0,e*.6),p.lineTo(-n/2-g,0);let d=new Xr(p,{depth:t+g*2,bevelEnabled:!1});d.translate(0,0,-(t+g*2)/2);let x=new Rt(d,ye(s));x.position.y=e,x.castShadow=!0,x.receiveShadow=!0,u.add(x);let m=new js;m.moveTo(-n/2,0),m.lineTo(n/2,0),m.lineTo(0,e*.52),m.lineTo(-n/2,0);let v=new Xr(m,{depth:t-.02,bevelEnabled:!1});v.translate(0,0,-(t-.02)/2);let y=new Rt(v,ye(i));if(y.position.y=e-.01,u.add(y),a){let T=j(.45,1.2,.45,k.terracotta===s?11097919:bi(s,.8));T.position.set(n*.25,e+.3,-t*.15),u.add(T)}let _=j(.75,1.45,.08,r);_.position.set(0,0,t/2+.02),u.add(_);let I=Hn(.04,6,4,k.yellow);I.position.set(.25,.72,t/2+.08),u.add(I);let M=c?16769184:13624046,A=c?{emissive:16765578,emissiveIntensity:1.2}:{};for(let T of[-1,1]){let b=j(.75,.7,.06,M,A);b.position.set(T*n*.3,1.1,t/2+.02),u.add(b);let L=j(.9,.08,.1,o);L.position.set(T*n*.3,1.06,t/2+.05),u.add(L);let B=j(.06,.7,.75,M,A);B.position.set(n/2+.02,1.1,T*t*.22),u.add(B)}let P=j(1.1,.12,.5,k.stone);if(P.position.set(0,0,t/2+.25),u.add(P),l){let T=j(n*.8,.15,1.4,k.woodLight);T.position.set(0,0,t/2+.7),u.add(T);for(let L of[-1,1]){let B=ke(.06,.06,1.9,5,o);B.position.set(L*n*.38,.15,t/2+1.3),u.add(B)}let b=j(n*.85,.1,1.6,s);b.position.set(0,2.05,t/2+.75),b.rotation.x=.12,u.add(b)}return re(u)}function sl(n=4,t=k.white,e=.6){let i=new ot,s=Math.max(2,Math.round(n/.5));for(let r=0;r<=s;r++){let o=j(.08,e,.08,t);o.position.x=-n/2+r/s*n,i.add(o)}for(let r of[e*.35,e*.75]){let o=j(n,.06,.05,t);o.position.y=r,i.add(o)}return re(i)}function Nf(n,t=3,e=!0){let i=new ot,s=Pi(e?n:t,e?t:n,k.asphalt,.01);i.add(s);let r=Math.floor(n/1.4);for(let o=0;o<r;o++){let a=Pi(e?.6:.1,e?.1:.6,15855590,.015),l=-n/2+.7+o*1.4;e?a.position.x=l:a.position.z=l,i.add(a)}return i}function rl(n=k.woodDark){let t=new ot,e=j(1.6,.08,.45,n);e.position.y=.42,t.add(e);let i=j(1.6,.4,.06,n);i.position.set(0,.6,-.2),i.rotation.x=-.12,t.add(i);for(let s of[-.7,.7])for(let r of[-.18,.18]){let o=j(.07,.42,.07,4869980);o.position.set(s,0,r),t.add(o)}return re(t)}function Ff(){let n=new ot;for(let[e,i,s,r]of[[0,-1,2.2,.15],[0,1,2.2,.15],[-1.05,0,.15,2],[1.05,0,.15,2]]){let o=j(s,.25,r,k.wood);o.position.set(e,0,i),n.add(o)}let t=j(2,.15,1.85,k.sand);return n.add(t),re(n)}function Of(){let n=new ot;n.add(j(.07,.8,.07,k.woodDark));let t=j(.25,.22,.4,k.navy);t.position.y=.8,n.add(t);let e=j(.02,.15,.06,k.red);return e.position.set(.14,.9,.1),n.add(e),re(n)}function ol(n=k.red){let t=new ot;t.add(Pi(2.2,1.8,n,.02));for(let e=0;e<5;e++){let i=Pi(.18,1.8,k.white,.025);i.position.x=-.88+e*.44,t.add(i)}for(let e=0;e<4;e++){let i=Pi(2.2,.18,k.white,.026);i.position.z=-.66+e*.44,t.add(i)}return t}function fu(n=k.red,t=1){let e=new ot;for(let l of[-.45,.45]){let c=ja(.3,.035,4,12,3355443);c.position.set(l,.3,0),e.add(c)}let i=zn(.7,.05,.05,n);i.position.set(0,.52,0),e.add(i);let s=zn(.05,.4,.05,n);s.position.set(-.12,.42,0),s.rotation.z=.3,e.add(s);let r=zn(.2,.05,.12,3355443);r.position.set(-.18,.68,0),e.add(r);let o=zn(.05,.05,.4,6710886);o.position.set(.4,.75,0),e.add(o);let a=zn(.04,.45,.04,n);return a.position.set(.42,.52,0),a.rotation.z=-.15,e.add(a),e.scale.setScalar(t),re(e)}function Bf(){let n=new ot,t=j(1.5,.12,.85,k.white);t.position.y=.45,n.add(t);let e=j(1.4,.12,.75,14674677);e.position.y=.57,n.add(e);for(let s of[-.72,.72])for(let r of[-.4,.4]){let o=j(.07,1.1,.07,k.white);o.position.set(s,0,r),n.add(o)}for(let s=0;s<9;s++)for(let r of[-.4,.4]){let o=j(.03,.5,.03,k.white);o.position.set(-.6+s*.15,.57,r),n.add(o)}for(let s of[-.4,.4]){let r=j(1.5,.05,.05,k.white);r.position.set(0,1.07,s),n.add(r)}let i=j(.6,.06,.7,k.pink);return i.position.set(.35,.65,0),n.add(i),re(n)}function pu(){let n=new ot,t=j(.03,.9,.03,k.white);n.add(t);let e=j(.6,.02,.02,k.white);e.position.y=.9,n.add(e);let i=new ot;i.position.y=.88,n.add(i);let s=[k.yellow,12114162,k.pink,13166281,16179624];for(let r=0;r<5;r++){let o=r/5*Math.PI*2,a=j(.008,.25,.008,14540253);a.position.set(Math.cos(o)*.3,-.25,Math.sin(o)*.3),i.add(a);let l=Ee(.07,0,s[r],0,1,{emissive:s[r],emissiveIntensity:.6});l.position.set(Math.cos(o)*.3,-.3,Math.sin(o)*.3),i.add(l)}return n.userData.spin=i,n.userData.speed=.25,n.userData.update=r=>{i.rotation.y+=r*n.userData.speed},n}function zf({w:n=1.1,d:t=2,color:e=k.blue,frame:i=k.wood}={}){let s=new ot,r=j(n,.35,t,i);s.add(r);let o=j(n-.1,.18,t-.1,k.white);o.position.y=.35,s.add(o);let a=j(n-.05,.1,t*.6,e);a.position.set(0,.5,t*.18),s.add(a);let l=j(n*.6,.12,.35,k.white);l.position.set(0,.53,-t/2+.3),s.add(l);let c=j(n,.9,.08,i);return c.position.set(0,0,-t/2),s.add(c),re(s)}function gs({w:n=1.4,d:t=.9,h:e=.75,color:i=k.wood,round:s=!1}={}){let r=new ot,o=s?ke(n/2,n/2,.08,10,i):j(n,.08,t,i);if(o.position.y=e-.08,r.add(o),s){r.add(ke(.06,.08,e-.08,5,bi(i,.85)));let a=ke(.3,.32,.04,8,bi(i,.85));r.add(a)}else for(let a of[-1,1])for(let l of[-1,1]){let c=j(.07,e-.08,.07,bi(i,.85));c.position.set(a*(n/2-.08),0,l*(t/2-.08)),r.add(c)}return re(r)}function Hf(n=k.wood){let t=new ot,e=j(.45,.06,.45,n);e.position.y=.44,t.add(e);let i=j(.45,.5,.06,n);i.position.set(0,.5,-.2),t.add(i);for(let s of[-.19,.19])for(let r of[-.19,.19]){let o=j(.05,.44,.05,bi(n,.85));o.position.set(s,0,r),t.add(o)}return re(t)}function Vf(n=k.woodDark){let t=new ot,e=new ot;t.add(e);for(let o of[-.28,.28]){let a=ja(.9,.035,3,12,n,.9);a.rotation.z=Math.PI+1.12,a.position.set(0,.92,o),e.add(a)}let i=j(.6,.07,.6,n);i.position.y=.45,e.add(i);let s=j(.52,.08,.52,k.pink);s.position.y=.52,e.add(s);let r=j(.6,.75,.06,n);r.position.set(0,.55,-.28),r.rotation.x=-.18,e.add(r);for(let o of[-.27,.27])for(let a of[-.25,.25]){let l=j(.05,.38,.05,n);l.position.set(o,.08,a),e.add(l)}return t.userData.rock=e,re(t)}function mu(n=9414856){let t=new ot,e=j(2,.45,.85,n);e.position.y=.05,t.add(e);let i=j(2,.55,.22,bi(n,.92));i.position.set(0,.45,-.32),t.add(i);for(let s of[-.92,.92]){let r=j(.18,.3,.85,bi(n,.92));r.position.set(s,.45,0),t.add(r)}for(let s of[-.45,.45]){let r=j(.85,.12,.6,bi(n,1.06));r.position.set(s,.5,.08),t.add(r)}return re(t)}function al(n=2.4,t=1.8,e=k.pink,i=k.cream,s=!1){let r=new ot;if(s){r.add(Vn(n/2,i,14,.008));let o=Vn(n/2-.15,e,14,.012);r.add(o)}else r.add(Pi(n,t,i,.008)),r.add(Pi(n-.25,t-.25,e,.012));return r}function gu(n=1.2,t=1.8){let e=new ot,i=j(n,t,.35,k.woodDark);e.add(i);let s=we(Math.round(n*100+t*10)),r=[k.red,k.navy,k.yellow,k.green,k.pink,k.teal,k.cream];for(let o=0;o<3;o++){let a=.15+o*(t/3),l=j(n-.06,.04,.33,k.wood);l.position.set(0,a-.04,.02),e.add(l);let c=-n/2+.08;for(;c<n/2-.15;){let h=s.range(.06,.12),u=s.range(.25,.42),f=j(h,u,.25,s.pick(r));f.position.set(c+h/2,a,.06),f.rotation.z=s()<.1?.15:0,e.add(f),c+=h+.01}}return re(e)}function ll({h:n=1.5,shade:t=16508868,lit:e=!0,table:i=!1}={}){let s=new ot,r=i?.45:n;s.add(ke(.12,.15,.04,8,9076596)),s.add(ke(.02,.02,r,4,9076596));let o=ke(.14,.24,.3,8,t,e?{emissive:16767392,emissiveIntensity:1.1}:{});if(o.position.y=r-.1,s.add(o),e){let a=Wi(16766880,i?1.4:2.2,.5);a.position.y=r,s.add(a)}return re(s)}function Gf(n=3){let t=new ot,e=[k.red,k.yellow,k.blue,k.green,k.pink];for(let i=0;i<n;i++){let s=j(.22,.22,.22,e[i%e.length]);s.position.set(i*.3-.3,0,i%2*.15),s.rotation.y=i*.4,t.add(s)}return re(t)}function oo(n=13081198){let t=new ot,e=Ee(.15,0,n,.02);e.position.y=.15,e.scale.y=1.1,t.add(e);let i=Ee(.11,0,n,.02);i.position.y=.36,t.add(i);for(let r of[-.08,.08]){let o=Ee(.045,0,n);o.position.set(r,.45,0),t.add(o)}let s=Ee(.04,0,15257520);return s.position.set(0,.34,.1),t.add(s),re(t)}function Wf(n=k.yellow){let t=new ot,e=Ee(.12,0,n);e.scale.set(1.3,.8,1),e.position.y=.08,t.add(e);let i=Ee(.07,0,n);i.position.set(.1,.18,0),t.add(i);let s=Vi(.03,.07,4,15764538);return s.rotation.z=-Math.PI/2,s.position.set(.18,.17,0),t.add(s),re(t)}function xu(n=!0,t=!0){let e=new ot;e.add(j(.5,.025,.35,10133672));let i=new ot;i.position.set(0,.025,-.17),e.add(i);let s=j(.5,.34,.02,10133672);i.add(s);let r=j(.45,.29,.01,13625087,{emissive:12573951,emissiveIntensity:1.4});return r.position.set(0,.025,.012),i.add(r),i.rotation.x=n?-.25:-Math.PI/2,re(e)}function yu(){let n=new ot,t=j(.12,.02,.22,2829107);n.add(t);let e=j(.1,.005,.19,13625087,{emissive:12573951,emissiveIntensity:1.5});return e.position.y=.02,n.add(e),n}function Xf(){let n=new ot,t=j(1.6,1.3,.5,12101786);n.add(t);let e=j(.9,.7,.1,2760736);e.position.set(0,.1,.22),n.add(e);let i=j(1.8,.1,.6,k.woodDark);i.position.y=1.3,n.add(i);let s=new ot;s.position.set(0,.12,.3);for(let o=0;o<3;o++){let a=Vi(.12-o*.02,.35-o*.05,5,[16751162,16760906,16742954][o],{emissive:[16742944,16756784,16734736][o],emissiveIntensity:2.5});a.position.x=(o-1)*.15,a.castShadow=!1,s.add(a)}let r=Wi(16751184,2.2,.7);return r.position.y=.2,s.add(r),n.add(s),n.userData.fire=s,n.userData.update=(o,a)=>{s.children.forEach((l,c)=>{l.isMesh&&(l.scale.y=.85+Math.sin(a*9+c*2)*.15)})},re(n)}function qf(n=2.4){let t=new ot,e=j(n,.85,.6,k.white);t.add(e);let i=j(n+.05,.06,.65,14208964);i.position.y=.85,t.add(i);for(let s=0;s<Math.floor(n/.6);s++){let r=j(.1,.03,.03,10066329);r.position.set(-n/2+.3+s*.6,.65,.31),t.add(r)}return re(t)}function Yf(){let n=new ot;n.add(j(.7,.85,.6,15262942));let t=j(.72,.04,.62,4473924);t.position.y=.85,n.add(t);let e=ke(.17,.15,.05,10,3355443);e.position.set(.12,.9,.05),n.add(e);let i=j(.25,.03,.04,3355443);return i.position.set(.4,.92,.05),n.add(i),re(n)}function Zf(){let n=new ot;n.add(j(.75,1.8,.65,15921386));let t=j(.73,.02,.02,12303291);t.position.set(0,1.15,.33),n.add(t);let e=j(.03,.4,.04,11184810);return e.position.set(.3,1.35,.34),n.add(e),re(n)}function cl(n=1){let t=new ot;t.add(ke(.16*n,.12*n,.28*n,7,k.terracotta));for(let e=0;e<5;e++){let i=Vi(.07*n,.5*n,3,k.green);i.position.y=.25*n,i.rotation.z=(e-2)*.35,i.rotation.y=e*1.2,t.add(i)}return re(t)}function hl(n=k.wood,t=null,e=.5,i=.4){let s=new ot;s.add(zn(e,i,.04,n));let r=new Rt(new Ye(e*.8,i*.8),t?new Qe({map:t}):ye(15787736));return r.position.z=.025,s.add(r),s}function vu(n=.6){let t=new ot;t.add(j(n,n*.8,n,13214323));let e=j(n*.12,.01,n+.01,14205850);return e.position.y=n*.8,t.add(e),re(t)}function $f(n=3){let t=new ot;if(n>=1){let e=Ee(.42,1,k.snow,.03);e.position.y=.36,t.add(e)}if(n>=2){let e=Ee(.3,1,k.snow,.03);e.position.y=.95,t.add(e)}if(n>=3){let e=Ee(.21,1,k.snow,.02);e.position.y=1.38,t.add(e)}if(n>=4){let e=Vi(.04,.22,5,15764538);e.rotation.x=Math.PI/2,e.position.set(0,1.38,.2),t.add(e);for(let i of[-.07,.07]){let s=Hn(.025,5,4,2236962);s.position.set(i,1.45,.18),t.add(s)}for(let i=0;i<3;i++){let s=Hn(.03,5,4,2236962);s.position.set(0,.85+i*.13,.29-Math.abs(i-1)*.02),t.add(s)}}if(n>=5){let e=ja(.22,.05,4,10,k.red);e.rotation.x=Math.PI/2,e.position.y=1.2,t.add(e);let i=ke(.15,.15,.22,8,3355443);i.position.y=1.55,t.add(i);let s=ke(.24,.24,.03,10,3355443);s.position.y=1.55,t.add(s);for(let r of[-1,1]){let o=ke(.015,.02,.5,3,k.trunk);o.rotation.z=r*1.1,o.position.set(r*.28,1,0),t.add(o)}}return re(t)}function Jf(n=k.red,t=k.yellow,e=.4){let i=new ot;i.add(j(e,e*.8,e,n));let s=j(e+.01,e*.8+.01,e*.15,t);i.add(s);let r=j(e*.15,e*.8+.01,e+.01,t);return i.add(r),re(i)}function Kf(n=10115658){let t=new ot;t.add(j(.5,.08,.38,n));let e=j(.47,.06,.35,k.white);return e.position.set(.01,.01,0),t.add(e),re(t)}function jf(n=k.white){let t=new ot;t.add(ke(.06,.055,.12,8,n));let e=ja(.035,.012,4,8,n);return e.position.set(.065,.06,0),t.add(e),t}function ul(){let n=new ot,t=j(1.4,.75,.6,k.woodLight);n.add(t);let e=j(1.2,.35,.04,k.yellow);e.position.set(0,1.5,.25),n.add(e);for(let s of[-.65,.65]){let r=j(.06,1.7,.06,k.wood);r.position.set(s,0,.25),n.add(r)}let i=ke(.12,.12,.3,8,16774048,{transparent:!0,opacity:.85});i.position.set(-.3,.75,0),n.add(i);for(let s=0;s<3;s++){let r=ke(.05,.04,.12,6,k.white);r.position.set(.1+s*.15,.75,.05),n.add(r)}return re(n)}function _u(n){let t=new ot,e=new Rt(new Ye(.6,.45),new Qe({map:n,side:Se}));return t.add(e),t}var k,lu,cu,Ka,kf,Mi=vo(()=>{Ie();Be();k={grass:10735474,grassSpring:11655562,grassDark:8631130,grassAutumn:13153378,grassDry:13482874,snow:15988474,snowShade:14673647,ice:13624562,dirt:10253399,dirtDark:7361088,rock:9604496,rockDark:7301744,sand:15587496,wood:12290911,woodDark:8871999,woodLight:14465164,trunk:8215107,birch:15657182,cream:16050390,white:16513266,pink:15911364,peach:16238243,blue:11126502,navy:4018042,red:14243914,terracotta:13199692,yellow:15979371,green:7319146,teal:6271912,lilac:12297949,slate:7306636,stone:13616827,asphalt:7106424,sidewalk:14209736,water:7321561,leafSummer:8372058,leafSpring:10474606,blossom:16169160,blossomLight:16503774,leafAutumn:14916155,leafAutumn2:13787198,leafAutumn3:15646794,pine:5214050,skin:[16176056,15317140,13209190,10118980,7227956]},lu=new Map;cu=new Map;Ka=null;kf={spring:[k.leafSpring,9423459,11918980],summer:[k.leafSummer,6989903,9488482],autumn:[k.leafAutumn,k.leafAutumn2,k.leafAutumn3],winter:[15330803,14673390,16054010],blossom:[k.blossom,k.blossomLight,15836859]}});var ip={};wp(ip,{Character:()=>hr,Dog:()=>fo,LOOKS:()=>Xe,childLook:()=>ur,youLook:()=>Eu});function uo(n,t){let e=jt(t,0,80);for(let i=0;i<ho.length-1;i++)if(e<=ho[i+1]){let s=(e-ho[i])/(ho[i+1]-ho[i]);return ti(xl[n][i],xl[n][i+1],s)}return xl[n][xl[n].length-1]}function m_(){let n=new pi(1,2),t=n.attributes.position;for(let e=0;e<t.count;e++){let i=t.getX(e),s=t.getY(e),r=t.getZ(e);if(s<-.05){let o=1-jt((-.05-s)*.42,0,.32);i*=o,r*=ti(1,o,.6)}r<0&&(r*=1.06),r>.6&&(r=.6+(r-.6)*.75),s*=1.07,t.setXYZ(e,i,s,r)}return n.computeVertexNormals(),n}function Eu(n){let t=w.state.identity==="father"?Xe.youFather:Xe.youMother;return n<1.5?{...Xe.baby}:n<9?{...t,hairStyle:w.state.identity==="father"?"short":"ponytail",shirt:15976010,pants:5929656}:n<18?{...t,hairStyle:w.state.identity==="father"?"short":"ponytail",shirt:14711402,pants:4018042}:{...t}}function ur(n){let t=w.state.childKind==="son"?Xe.childSon:Xe.childDaughter;return n<1.5?{...Xe.baby,shirt:13624309,pants:13624309,shoes:13624309}:{...t}}var ho,xl,Qt,hr,fo,Xe,po=vo(()=>{Ie();Be();Mi();ho=[0,1,2,4,7,10,13,16,22,40,60,80],xl={leg:[.12,.16,.21,.31,.41,.51,.62,.72,.76,.76,.74,.68],torso:[.2,.22,.26,.31,.37,.43,.49,.55,.58,.6,.58,.55],width:[.16,.17,.18,.19,.2,.22,.24,.27,.29,.31,.31,.29],head:[.16,.165,.17,.175,.18,.182,.184,.185,.185,.185,.183,.178],arm:[.14,.17,.2,.26,.32,.38,.44,.5,.53,.53,.51,.49]};Qt={head:m_(),torso:(()=>{let n=[[0,0],[.86,0],[.88,.14],[.8,.34],[.86,.58],[.98,.78],[.94,.9],[.62,.99],[.32,1]].map(([t,e])=>new K(t,e));return new Sa(n,9)})(),pelvis:(()=>{let n=new Ze(.95,.8,1,9);return n.translate(0,-.5,0),n})(),limb:(()=>{let n=new Ze(1,.86,1,7);return n.translate(0,-.5,0),n})(),joint:new pi(1,1),hand:(()=>{let n=new pi(1,1);return n.scale(1,1.15,.78),n})(),foot:(()=>{let n=new Ci(1,8,5,0,Math.PI*2,0,Math.PI*.55);return n.scale(1,1.6,1),n.translate(0,-.35,0),n})(),neck:(()=>{let n=new Ze(1,1.1,1,7);return n.translate(0,.5,0),n})(),eye:new Ci(1,8,6),ball:new pi(1,1),ball0:new pi(1,0),box:new ri(1,1,1),smile:new yn(1,.22,4,10,Math.PI),skirt:new Ze(.62,1,1,10,1,!0),cap:new Ci(1,14,8,0,Math.PI*2,0,Math.PI*.52),back:new Ci(1,14,8,Math.PI,Math.PI,Math.PI*.25,Math.PI*.5),bang:(()=>{let n=new On(1,1,4);return n.rotateX(Math.PI),n.translate(0,-.5,0),n})(),shell:new Ze(1,1.06,1,14,1,!0,.75,Math.PI*2-1.5),scarfSeg:(()=>{let n=new ri(1,1,.3);return n.translate(0,-.5,0),n})()},hr=class{constructor(t={}){this.opts={age:30,skin:k.skin[0],hair:5913386,hairStyle:"short",shirt:k.blue,pants:k.navy,shoes:4864566,dress:!1,name:"",glasses:!1,beard:!1,scarf:null,hat:null,...t},this.name=this.opts.name,this.root=new ot,this.root.rotation.order="YXZ",this.root.userData.character=this,this.position=this.root.position,this.heading=0,this.targetHeading=0,this.speed=0,this.walkPhase=0,this.pose="idle",this.anim={},this.moveTarget=null,this.followTarget=null,this.carried=null,this.carriedBy=null,this.extraY=0,this.lookTarget=null,this.lean=0,this.tilt=0,this.blinkT=Math.random()*3,this._build(),this.setAge(this.opts.age),w.world?.addCharacter(this)}_build(){let t=this.opts;this.mSkin=Gi(t.skin,{roughness:.75}),this.mSkinShade=Gi(bi(t.skin,.9),{roughness:.8}),this.mHair=Gi(t.hair,{roughness:.7,side:Se}),this.mShirt=Gi(t.shirt),this.mPants=Gi(t.pants),this.mShoe=Gi(t.shoes),this.mEye=ye(2760752,{roughness:.25}),this.mWhite=ye(16777215,{emissive:16777215,emissiveIntensity:.6}),this.mMouth=ye(10111568),this.mCheek=ye(15768216,{roughness:1});let e=(r,o,a)=>{let l=new Rt(r,o);return l.castShadow=!0,a.add(l),l};this._mesh=e,this.body=new ot,this.root.add(this.body),this.pelvis=e(Qt.pelvis,t.dress?this.mShirt:this.mPants,this.body),this.torsoPivot=new ot,this.body.add(this.torsoPivot),this.torso=e(Qt.torso,this.mShirt,this.torsoPivot),this.neck=e(Qt.neck,this.mSkin,this.torsoPivot),this.headPivot=new ot,this.torsoPivot.add(this.headPivot),this.head=e(Qt.head,this.mSkin,this.headPivot),this.skirt=null,t.dress&&(this.skirt=e(Qt.skirt,this.mShirt,this.body),this.skirt.material=Gi(t.shirt,{side:Se}));let i=this.head;this.eyes=[],this.lids=[];for(let r of[-1,1]){let o=e(Qt.eye,this.mEye,i);o.position.set(r*.33,.04,.83),o.scale.set(.105,.14,.06),o.castShadow=!1,this.eyes.push(o);let a=e(Qt.eye,this.mWhite,o);a.position.set(.35*r,.35,.8),a.scale.setScalar(.32),a.castShadow=!1;let l=e(Qt.box,this.mHair,i);l.position.set(r*.34,.27,.83),l.scale.set(.2,.045,.05),l.rotation.z=-r*.12,l.castShadow=!1,this.brows=(this.brows||[]).concat(l);let c=e(Qt.eye,this.mCheek,i);c.position.set(r*.52,-.2,.7),c.scale.set(.13,.08,.05),c.castShadow=!1;let h=e(Qt.ball,this.mSkin,i);h.position.set(r*.96,-.02,-.02),h.scale.set(.13,.22,.14)}if(this.nose=e(Qt.ball,this.mSkinShade,i),this.nose.position.set(0,-.12,.92),this.nose.scale.set(.11,.1,.1),this.nose.castShadow=!1,this.mouthSmile=e(Qt.smile,this.mMouth,i),this.mouthSmile.position.set(0,-.36,.84),this.mouthSmile.rotation.z=Math.PI,this.mouthSmile.scale.set(.11,.1,.1),this.mouthSmile.castShadow=!1,this.mouthOpen=e(Qt.eye,this.mMouth,i),this.mouthOpen.position.set(0,-.38,.84),this.mouthOpen.scale.set(.1,.08,.05),this.mouthOpen.visible=!1,this.mouthSad=e(Qt.smile,this.mMouth,i),this.mouthSad.position.set(0,-.44,.83),this.mouthSad.scale.set(.1,.09,.1),this.mouthSad.visible=!1,this.hair=new ot,i.add(this.hair),this._buildHair(),t.glasses){let r=ye(3813430);for(let a of[-1,1]){let l=new Rt(new yn(.19,.035,4,12),r);l.position.set(a*.33,.05,.9),i.add(l)}let o=new Rt(Qt.box,r);o.position.set(0,.07,.95),o.scale.set(.18,.035,.035),i.add(o)}if(t.beard){let r=new Rt(new Ci(1,12,6,0,Math.PI*2,Math.PI*.45,Math.PI*.55),this.mHair);r.scale.set(.72,.5,.7),r.position.set(0,-.3,.2),i.add(r),this.beardM=r,this.mouthSmile.position.z=.9,this.mouthOpen.position.z=.9}if(this.armL=this._limb(this.torsoPivot,this.mShirt,this.mSkin,!0),this.armR=this._limb(this.torsoPivot,this.mShirt,this.mSkin,!0),this.legL=this._limb(this.body,this.mPants,this.mShoe,!1),this.legR=this._limb(this.body,this.mPants,this.mShoe,!1),t.scarf){let r=Gi(t.scarf,{side:Se});this.scarfM=new Rt(new yn(1,.38,5,10),r),this.scarfM.rotation.x=Math.PI/2,this.torsoPivot.add(this.scarfM),this.scarfTail=[];let o=this.torsoPivot;for(let a=0;a<4;a++){let l=new ot;o.add(l);let c=new Rt(Qt.scarfSeg,r);c.castShadow=!0,l.add(c),l.userData.m=c,this.scarfTail.push(l),o=l,l.userData.a=.2}}if(t.hat){this.hatM=new ot;let r=new Rt(new Ci(1,12,6,0,Math.PI*2,0,Math.PI/2),ye(t.hat));r.castShadow=!0,this.hatM.add(r);let o=new Rt(new Ze(1.02,1.04,.22,12,1,!0),ye(bi(t.hat,.8),{side:Se}));o.position.y=.05,this.hatM.add(o);let a=new Rt(Qt.ball,ye(16775408));a.position.y=1.05,a.scale.setScalar(.25),this.hatM.add(a),this.hatM.position.y=.22,this.hatM.scale.setScalar(1.1),i.add(this.hatM),this.hair.visible=this.opts.hairStyle==="long"}this.cane=null;let s=new Rt(new Ks(1,16),new Qe({color:1708064,transparent:!0,opacity:.16,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.012,this.root.add(s),this.blob=s}_limb(t,e,i,s){let r=new ot;t.add(r);let o=new Rt(Qt.limb,e);o.castShadow=!0,r.add(o);let a=new ot;r.add(a);let l=new Rt(Qt.joint,e);l.castShadow=!0,a.add(l);let c=new Rt(Qt.limb,e);c.castShadow=!0,a.add(c);let h=new Rt(s?Qt.hand:Qt.foot,i);return h.castShadow=!0,a.add(h),{pivot:r,upper:o,joint:a,knob:l,lower:c,end:h,isArm:s}}_buildHair(){let t=this.opts,e=this.hair;for(;e.children.length;)e.remove(e.children[0]);let i=(o,a,l,c=[0,0,0])=>{let h=new Rt(o,this.mHair);return h.castShadow=!0,typeof a=="number"?h.scale.setScalar(a):h.scale.set(...a),h.position.set(...l),h.rotation.set(...c),e.add(h),h},s=(o=-.32,a=1.08)=>i(Qt.cap,[a,a*.98,a],[0,.04,-.02],[o,0,0]),r=(o,a,l=0,c=.62,h=1.1)=>{for(let u=0;u<o;u++){let f=(u/(o-1)-.5)*h,p=i(Qt.bang,[.2,a*(.85+.3*Math.abs(Math.sin(u*2.3))),.13],[Math.sin(f)*.98,c,Math.cos(f)*.86],[.55,f,l+f*.25]);p.position.y+=Math.cos(f*2)*.03}};switch(this.tail=null,t.hairStyle){case"none":break;case"baby":{let o=i(Qt.ball0,[.16,.3,.16],[.05,1.04,.15],[.2,0,-.5]);i(Qt.ball0,[.1,.18,.1],[-.12,1,.25],[.4,0,.6]);break}case"bald":{i(Qt.back,[1.04,.62,1.04],[0,-.14,-.02]);for(let o of[-1,1])i(Qt.ball0,[.18,.2,.3],[o*.9,.06,-.25],[0,o*.3,0]);break}case"long":{s(-.3,1.09),i(Qt.back,[1.08,1,1.1],[0,-.05,-.02]);let o=i(Qt.shell,[1.06,1.5,1.04],[0,-.55,-.02]);for(let a of[-1,1])i(Qt.box,[.22,1.25,.42],[a*.94,-.45,.22],[0,0,a*.08]);r(5,.42,.25,.66,1.25),this.tail=o;break}case"ponytail":{s(-.3,1.08),i(Qt.back,[1.07,.96,1.08],[0,-.03,-.02]),r(4,.34,.35,.66,1);let o=i(Qt.ball0,.17,[0,.36,-1]),a=new ot;a.position.set(0,.32,-1.05),e.add(a);let l=a;[.3,.27,.21].forEach((c,h)=>{let u=new ot;u.position.y=h===0?0:-.36,l.add(u);let f=new Rt(Qt.ball,this.mHair);f.scale.set(c,c*1.45,c),f.position.y=-.2,f.castShadow=!0,u.add(f),l=u}),a.rotation.x=.35,this.tail=a;break}case"bun":{s(-.25,1.07),i(Qt.back,[1.06,.95,1.08],[0,-.02,-.02]),i(Qt.ball,[.42,.38,.42],[0,.82,-.62]);for(let o of[-1,1])i(Qt.bang,[.12,.45,.1],[o*.86,.15,.5],[.1,0,o*.12]);break}case"curly":{s(-.25,1.06);let o=26;for(let a=0;a<o;a++){let l=1-a/(o-1)*1.15,c=Math.sqrt(Math.max(0,1-l*l)),h=a*2.39996,u=Math.cos(h)*c,f=Math.sin(h)*c;f>.45&&l<.55||i(Qt.ball0,.3+a%3*.04,[u*1.02,l*1+.08,f*1.02-.02],[a,a*.7,0])}break}case"bob":{s(-.3,1.1),i(Qt.shell,[1.12,.95,1.1],[0,-.22,-.02]),r(6,.36,0,.66,1.3);break}default:s(-.35,1.07),i(Qt.back,[1.06,.82,1.08],[0,0,-.02]),r(5,.3,.55,.68,1.05),i(Qt.ball0,[.35,.22,.35],[.35,.92,.25],[0,0,-.4])}}setAge(t){this.age=t;let e=uo("leg",t),i=uo("torso",t),s=uo("width",t),r=uo("arm",t),o=uo("head",t),a=e*.49,l=e*.43,c=e*.08,h=.035+s*.2,u=.03+s*.13;this.dims={leg:e,torso:i,w:s,hr:o,arm:r,thigh:a,shin:l,footH:c,lr:h,ar:u},this.body.position.y=e,this.pelvis.scale.set(s*.95,.1+e*.06,s*.7),this.torsoPivot.position.y=0,this.torso.scale.set(s,i,s*.74);let f=.03+o*.18;this.neck.position.y=i*.96,this.neck.scale.set(o*.34,f,o*.32),this.headPivot.position.y=i+f+o*.82,this.head.scale.setScalar(o),this.skirt&&(this.skirt.scale.set(s*1.35,e*.62,s*1.15),this.skirt.position.y=-e*.28);for(let[d,x]of[[this.armL,-1],[this.armR,1]]){d.pivot.position.set(x*(s*.9+u*.6),i*.84,0);let m=r*.5,v=r*.44;d.upper.scale.set(u,m,u),d.joint.position.y=-m,d.knob.scale.setScalar(u*.95),d.lower.scale.set(u*.9,v,u*.9);let y=u*1.25;d.end.scale.setScalar(y),d.end.position.set(0,-v-y*.7,0),d.len=[m,v]}for(let[d,x]of[[this.legL,-1],[this.legR,1]])d.pivot.position.set(x*s*.44,-.02,0),d.upper.scale.set(h,a,h),d.joint.position.y=-a,d.knob.scale.setScalar(h*.95),d.lower.scale.set(h*.9,l,h*.9),d.end.scale.set(h*1.15,c,h*1.75),d.end.position.set(0,-l-c*.25,h*.55),d.len=[a,l];this.scarfM&&(this.scarfM.scale.set(o*.5,o*.45,o*.42),this.scarfM.position.y=i*.97,this.scarfTail.forEach((d,x)=>{let m=.06+i*.14;x===0?d.position.set(s*.25,i*.95,-s*.62):d.position.y=-d.userData.len,d.userData.len=m,d.userData.m.scale.set(.08+s*.15,m,1)})),this.blob.scale.setScalar(s*1.7+.08);let p=new Pt(this.opts.hair),g=new Pt(14473428);return this.mHair.color.copy(p).lerp(g,jt((t-48)/25,0,.92)),this.height=e+i+f+o*1.9,this.radius=Math.max(.18,s*1.15),this.hunch=jt((t-65)/15,0,1)*.22,this}setOutfit({shirt:t,pants:e,hair:i,hairStyle:s,shoes:r}={}){t!==void 0&&(this.mShirt.color.setHex(t),this.skirt&&this.skirt.material.color.setHex(t)),e!==void 0&&this.mPants.color.setHex(e),r!==void 0&&this.mShoe.color.setHex(r),i!==void 0&&(this.opts.hair=i,this.setAge(this.age)),s!==void 0&&s!==this.opts.hairStyle&&(this.opts.hairStyle=s,this._buildHair())}giveCane(t=!0){if(t&&!this.cane){this.cane=new ot;let e=new Rt(new Ze(.018,.018,.85,5),ye(k.woodDark));e.position.y=-.38,this.cane.add(e);let i=new Rt(new yn(.06,.018,4,8,Math.PI),ye(k.woodDark));i.position.set(.06,.04,0),this.cane.add(i),this.armR.end.add(this.cane),this.cane.scale.setScalar(1/this.armR.end.scale.x)}else!t&&this.cane&&(this.cane.parent.remove(this.cane),this.cane=null)}place(t,e,i=null){return this.position.set(t,0,e),i!==null&&(this.heading=this.targetHeading=i),this.moveTarget=null,this.path=null,this}face(t,e){return this.targetHeading=Math.atan2(t-this.position.x,e-this.position.z),this}faceChar(t){return this.face(t.position.x,t.position.z)}faceNow(t,e){return this.face(t,e),this.heading=this.targetHeading,this}get walkSpeed(){if(this._speedOverride)return this._speedOverride;let t=this.age;return t<1.3?1.1:t<3?1.5:t<10?3:t<18?3.4:t<60?2.9:1.6}set walkSpeed(t){this._speedOverride=t}walkTo(t,e,i={}){return new Promise(s=>{this.moveTarget={x:t,z:e,speed:i.speed??this.walkSpeed,resolve:s,stopDist:i.stopDist??.05}})}async walkPath(t,e={}){for(let[i,s]of t)await this.walkTo(i,s,e)}walkToChar(t,e=.8,i={}){let s=this.position.x-t.position.x,r=this.position.z-t.position.z,o=Math.hypot(s,r)||1;return this.walkTo(t.position.x+s/o*e,t.position.z+r/o*e,i).then(()=>this.faceChar(t))}stop(){if(this.moveTarget){let t=this.moveTarget.resolve;this.moveTarget=null,t&&t()}}follow(t,e=1.2){this.followTarget=t?{c:t,dist:e}:null}lookAt(t){this.lookTarget=t}setPose(t,e={}){return this.pose=t,this.anim=e,this}pickUp(t){this.carried=t,t.carriedBy=this,t.moveTarget=null,t.followTarget=null,t.setPose("carried")}putDown(t,e){let i=this.carried;i&&(this.carried=null,i.carriedBy=null,i.root.rotation.set(0,0,0),t!==void 0?i.place(t,e,this.heading):i.place(this.position.x+Math.sin(this.heading)*.6,this.position.z+Math.cos(this.heading)*.6,this.heading),i.extraY=0,i.setPose("idle"))}headWorld(){let t=new C;return this.head.getWorldPosition(t),t.y+=this.dims.hr*1.45,t}update(t,e){let i=!1;if(this.carriedBy){let s=this.carriedBy,r=s.heading,o=s.pose==="carryHigh",a=o?.16:.2+s.dims.w*.25;this.position.set(s.position.x+Math.sin(r)*a,s.position.y+s.body.position.y+s.dims.torso*(o?.75:.42)-this.dims.leg*.35,s.position.z+Math.cos(r)*a),this.heading=this.targetHeading=r+(o?Math.PI:Math.PI*.5)}else if(this.moveTarget){let s=this.moveTarget,r=s.x-this.position.x,o=s.z-this.position.z,a=Math.hypot(r,o);if(a<=Math.max(s.stopDist,.02))this.moveTarget=null,s.resolve&&s.resolve();else{this._npcV=Math.min(s.speed,(this._npcV||0)+s.speed*t*4);let l=Math.min(this._npcV,Math.max(.35*s.speed,a*3)),c=Math.min(l*t,a);this.position.x+=r/a*c,this.position.z+=o/a*c,this.targetHeading=Math.atan2(r,o),this.speed=l,i=!0}}else if(this.followTarget){let{c:s,dist:r}=this.followTarget,o=$r(this.position.x,this.position.z,s.position.x,s.position.z);if(o>r){let a=Math.min(Math.max(this.walkSpeed,s.speed||0)*t*(o>r*2?1.4:1),o-r),l=s.position.x-this.position.x,c=s.position.z-this.position.z;this.position.x+=l/o*a,this.position.z+=c/o*a,this.targetHeading=Math.atan2(l,c),this.speed=this.walkSpeed,i=!0}}if(!i&&!this._playerMoving&&(this.speed=Hi(this.speed,0,9,t),this._npcV=0),this.heading=jh(this.heading,this.targetHeading,1-Math.exp(-9*t)),this.root.rotation.y=this.heading,!this.carriedBy){let s=this.pose==="lie"||this.pose==="lieBack"||this.pose==="sleep";this._lift=Hi(this._lift||0,s?this.dims.w*.75:0,10,t),this.position.y=this.extraY+this._lift}this._animate(t,e)}_animate(t,e){let i=this.dims,s=this.anim,r=this.speed>.12,o=this.pose,a=this.age<1.3,l=this.age>=1.3&&this.age<2.6,c=this.age>68;o==="idle"&&r&&(o=a?"crawl":"walk"),o==="crawl"&&!r&&(o="crawlIdle");let h=a?1.25:l?1.9:c?1.25:1.6;this.walkPhase+=t*(this.speed/Math.max(.2,i.leg))*h;let u=this.walkPhase,f=Math.sin(u),p=Math.cos(u),g=Math.sin(e*2.1)*.012,d={bodyY:i.leg,bodyZ:0,bodyRX:0,sway:Math.sin(e*.7)*.012,torsoRX:this.hunch+g,torsoRY:0,headRX:0,headRZ:0,aL:.04,aR:.04,aLo:.12,aRo:.12,eL:-.18,eR:-.18,lL:0,lR:0,lLo:.03,lRo:.03,kL:.04,kR:.04,rootRX:0},x="smile";switch(o){case"walk":{if(l)d.lL=f*.45,d.lR=-f*.45,d.kL=.2+Math.max(0,p)*.7,d.kR=.2+Math.max(0,-p)*.7,d.lLo=d.lRo=.16,d.aL=d.aR=-.75,d.aLo=d.aRo=.55+Math.sin(u*2)*.08,d.eL=d.eR=-.5,d.sway=f*.1,d.bodyY=i.leg-.02+Math.abs(p)*.035,d.torsoRX+=.06,d.headRZ=-f*.08;else{let M=this.speed>3.2,A=jt(this.speed/3.2,.3,M?.95:.7)*(c?.6:1);d.lL=f*A,d.lR=-f*A,d.kL=.08+Math.max(0,p)*A*1.5,d.kR=.08+Math.max(0,-p)*A*1.5,d.aL=-f*A*.75,d.aR=f*A*.75,d.eL=-.25-Math.max(0,f)*A*.6,d.eR=-.25-Math.max(0,-f)*A*.6,d.bodyY=i.leg-.012-Math.abs(f)*i.leg*.05+(M?Math.abs(p)*.04:0),d.torsoRY=f*.1,d.sway=f*.035,d.torsoRX+=.04+(M?.16:0),d.headRX=-d.torsoRX*.5,this.cane&&(d.aR=-.35+f*.15,d.eR=-.3)}x="smile";break}case"crawl":case"crawlIdle":{let M=o==="crawl"?1:0,A=1.12;d.bodyRX=A,d.bodyY=i.thigh*.95+i.lr,d.torsoRX=.05,d.headRX=-.95-.1*M*Math.abs(f),d.lL=-A+f*.38*M,d.lR=-A-f*.38*M,d.kL=1.55-Math.max(0,f)*.3*M,d.kR=1.55-Math.max(0,-f)*.3*M,d.lLo=d.lRo=.12,d.aL=-A-f*.38*M,d.aR=-A+f*.38*M,d.eL=-.1-Math.max(0,-f)*.4*M,d.eR=-.1-Math.max(0,f)*.4*M,d.aLo=d.aRo=.1,d.sway=f*.06*M,d.bodyY+=Math.abs(p)*.012*M,d.headRZ=f*.06*M;break}case"sitGround":{d.bodyY=i.lr+.015,d.lL=d.lR=-1.5,d.kL=d.kR=a?.25:.12,d.lLo=d.lRo=a?.42:.15,d.aL=d.aR=s.reach?-2.75:-.35,d.eL=d.eR=s.reach?-.15:-.5,d.aLo=d.aRo=s.reach?.25:.14,d.torsoRX=.08+g-(s.look?.12:0),d.headRX=s.look??0,a&&(d.sway=Math.sin(e*1.3)*.04);break}case"sit":d.bodyY=s.h??.45,d.lL=d.lR=-1.5,d.kL=d.kR=1.45,d.aL=d.aR=-.45,d.eL=d.eR=-.65,d.aLo=d.aRo=.05,d.bodyZ=-.08;break;case"lie":d.rootRX=-Math.PI/2,d.bodyY=.12,d.aLo=d.aRo=.25,d.kL=.15;break;case"lieBack":d.rootRX=-Math.PI/2,d.bodyY=.12,d.aLo=d.aRo=1.35+Math.sin(e*2)*.15*(s.wave??0),d.lLo=d.lRo=.25;break;case"sleep":d.rootRX=-Math.PI/2,d.bodyY=.12,d.aL=d.aR=-.3,d.eL=d.eR=-.9,d.aLo=d.aRo=.15,d.kL=d.kR=.35,d.lL=d.lR=-.3,x="sleep";break;case"kneel":d.bodyY=i.thigh+i.lr+.02,d.lL=.05,d.kL=1.55,d.lR=-1.45,d.kR=1.45,d.torsoRX+=.12,d.aL=d.aR=-.55,d.eL=d.eR=-.5;break;case"kneelOpen":d.bodyY=i.thigh+i.lr+.02,d.lL=.05,d.kL=1.55,d.lR=-1.45,d.kR=1.45,d.torsoRX+=.06,d.aL=d.aR=-1.15,d.aLo=d.aRo=.75,d.eL=d.eR=-.25;break;case"crouch":d.bodyY=i.leg*.4,d.lL=d.lR=-1.95,d.kL=d.kR=2.3,d.torsoRX+=.45,d.aL=d.aR=-.9,d.eL=d.eR=-.6,d.lLo=d.lRo=.14;break;case"reach":d.aL=d.aR=-2.9,d.aLo=d.aRo=.22,d.eL=d.eR=-.1,d.headRX=-.35;break;case"reachForward":d.aL=d.aR=-1.45,d.eL=d.eR=-.1,d.torsoRX+=.08;break;case"armsOpen":d.aL=d.aR=-1,d.aLo=d.aRo=.85,d.eL=d.eR=-.2,x="open";break;case"hug":d.aL=d.aR=-1.35,d.eL=d.eR=-1.15,d.aLo=d.aRo=-.3,d.torsoRX+=.12,d.headRX=.15;break;case"carry":case"rockCarry":d.aL=d.aR=-.85,d.eL=d.eR=-1.25,d.aLo=d.aRo=-.22,d.torsoRX-=.06,d.headRX=.3;break;case"carryHigh":d.aL=d.aR=-2.35,d.eL=d.eR=-.45,d.aLo=d.aRo=.12,d.headRX=-.35,x="open";break;case"carried":d.bodyY=i.thigh*.6,d.lL=d.lR=-1.3,d.kL=d.kR=.7,d.aL=d.aR=-.5,d.eL=d.eR=-.6;break;case"wave":d.aR=-2.7,d.aRo=.35,d.eR=-.45+Math.sin(e*9)*.45,x="open";break;case"point":d.aR=-1.5,d.eR=-.05;break;case"dance":{let M=Math.sin(e*(s.speed??4));d.bodyY=i.leg-Math.abs(M)*.04,d.aL=-1.7+M*.4,d.aR=-1.7-M*.4,d.aLo=d.aRo=.5,d.eL=d.eR=-.7,d.lL=M*.3,d.lR=-M*.3,d.kL=d.kR=.25,d.sway=M*.08,x="open";break}case"waltz":{let M=Math.sin(e*3);d.aL=-1.55,d.aLo=.4,d.eL=-.7,d.aR=-1.25,d.aRo=-.1,d.eR=-.9,d.lL=M*.25,d.lR=-M*.25,d.kL=Math.max(0,M)*.3,d.kR=Math.max(0,-M)*.3,d.sway=M*.05;break}case"jump":{let M=Math.abs(Math.sin(e*5));d.bodyY=i.leg+M*.22,d.aL=d.aR=-2.5,d.aLo=d.aRo=.35,d.lL=d.lR=-M*.5,d.kL=d.kR=M*.8,x="open";break}case"cry":d.headRX=.45,d.aL=d.aR=-1.2,d.eL=d.eR=-2.1,d.aLo=d.aRo=-.25,d.torsoRX+=.2+Math.sin(e*7)*.025,x="sad";break;case"laugh":d.headRX=-.35+Math.sin(e*14)*.06,d.torsoRX+=Math.sin(e*14)*.04-.05,d.aL=d.aR=-.3,d.eL=d.eR=-.9,x="open";break;case"think":d.aR=-1.35,d.eR=-2.15,d.aRo=-.15,d.headRX=.15,d.headRZ=.12,x="flat";break;case"sad":d.headRX=.35,d.torsoRX+=.12,x="sad";break;case"push":{let M=s.phase??Math.sin(e*2);d.aL=d.aR=-1.35-M*.25,d.eL=d.eR=-.35+M*.25,d.torsoRX+=.22+M*.12,d.lL=-.35,d.kL=.35,d.lR=.25;break}case"swing":{let M=s.kick??0;d.bodyY=s.h??.5,d.lL=d.lR=-1.35+M,d.kL=d.kR=.9-M*.8,d.aL=d.aR=-2.55,d.eL=d.eR=-.45,d.aLo=d.aRo=.1,x="open";break}case"bike":d.bodyY=s.h??.68,d.lL=-1.2+f*.55,d.lR=-1.2-f*.55,d.kL=1.3-f*.6,d.kR=1.3+f*.6,d.aL=d.aR=-1.1,d.eL=d.eR=-.35,d.torsoRX+=.35;break;case"rock":d.bodyY=s.h??.47,d.lL=d.lR=-1.5,d.kL=d.kR=1.45,d.aL=d.aR=-.85,d.eL=d.eR=-1.25,d.aLo=d.aRo=-.22,d.torsoRX-=.12,d.headRX=.3;break;case"read":d.bodyY=s.h??.45,d.lL=d.lR=-1.5,d.kL=d.kR=1.45,d.aL=d.aR=-.85,d.eL=d.eR=-1.35,d.aLo=d.aRo=-.15,d.headRX=.38;break;case"stand":default:break}(o==="idle"||o==="stand")&&(d.sway=Math.sin(e*.8+this.blinkT)*.018,d.headRZ=Math.sin(e*.5)*.03);let m=1-Math.exp(-12*t);this._j||(this._j={...d,headRY:0});let v=this._j;for(let M in d)v[M]=ti(v[M],d[M],m);let y=0;if(this.lookTarget){let M=this.lookTarget.position??this.lookTarget,A=Math.atan2(M.x-this.position.x,M.z-this.position.z)-this.heading;y=jt(Math.atan2(Math.sin(A),Math.cos(A)),-1.1,1.1)}v.headRY=ti(v.headRY,y,m),this.body.position.y=v.bodyY,this.body.position.z=v.bodyZ,this.body.rotation.x=v.bodyRX,this.body.rotation.z=v.sway,this.root.rotation.x=v.rootRX+(this.lean||0),this.root.rotation.z=this.tilt||0,this.torsoPivot.rotation.x=v.torsoRX,this.torsoPivot.rotation.y=v.torsoRY,this.torsoPivot.rotation.z=-v.sway*.6,this.headPivot.rotation.set(v.headRX,v.headRY,v.headRZ),this.armL.pivot.rotation.set(v.aL,0,-v.aLo),this.armR.pivot.rotation.set(v.aR,0,v.aRo),this.armL.joint.rotation.x=v.eL,this.armR.joint.rotation.x=v.eR,this.legL.pivot.rotation.set(v.lL,0,-v.lLo),this.legR.pivot.rotation.set(v.lR,0,v.lRo),this.legL.joint.rotation.x=v.kL,this.legR.joint.rotation.x=v.kR,this.legL.end.rotation.x=-(v.lL+v.kL)*.6,this.legR.end.rotation.x=-(v.lR+v.kR)*.6,this.skirt&&(this.skirt.rotation.x=(v.lL+v.lR)*.25);let _=jt(this.speed/3,0,1.4);if(this.tail){let M=.35+_*.5+Math.sin(u*2)*.08*_+Math.sin(e*1.7)*.03;this._tailA=Hi(this._tailA??M,M,6,t),this.opts.hairStyle==="ponytail"?(this.tail.rotation.x=this._tailA,this.tail.rotation.z=Math.sin(u)*.15*_):this.tail.rotation.x=(this._tailA-.35)*.15}this.scarfTail&&this.scarfTail.forEach((M,A)=>{let P=(A===0?.25:.08)+_*(.45-A*.05)+Math.sin(e*5+A*.9)*(.04+_*.12);M.userData.a=Hi(M.userData.a,P,5-A*.6,t),M.rotation.x=M.userData.a,M.rotation.z=Math.sin(e*3+A)*.05}),this.blinkT-=t;let I=x==="sleep"||this.blinkT<.12||x==="sad";this.blinkT<0&&(this.blinkT=2+Math.random()*4);for(let M of this.eyes)M.scale.y=I?x==="sad"?.04:.018:.14;this.mouthSmile.visible=x==="smile"||x==="sleep",this.mouthOpen.visible=x==="open",this.mouthSad.visible=x==="sad",x==="flat"&&(this.mouthSmile.visible=!1),this.blob.visible=v.rootRX>-.5&&!this.carriedBy}remove(){w.world?.removeCharacter(this),this.root.parent?.remove(this.root)}},fo=class{constructor({color:t=14198890,spot:e=16049872,size:i=1,age:s=3}={}){this.root=new ot,this.position=this.root.position,this.size=i,this.age=s,this.heading=0,this.targetHeading=0,this.speed=0,this.phase=0,this.moveTarget=null,this.followTarget=null,this.pose="idle";let r=Gi(t),o=ye(e),a=ye(3811876),l=i;this.bodyG=new ot,this.root.add(this.bodyG);let c=new Rt(new pi(.25,0),r);c.scale.set(.9,.8,1.5),c.position.y=.32,this.bodyG.add(c);let h=new Rt(new pi(.18,0),o);h.scale.set(.9,.7,1.6),h.position.set(0,.24,.02),this.bodyG.add(h),this.headG=new ot,this.headG.position.set(0,.48,.32),this.bodyG.add(this.headG);let u=new Rt(new pi(.17,0),r);this.headG.add(u);let f=new Rt(new ri(.14,.11,.16),o);f.position.set(0,-.04,.15),this.headG.add(f);let p=new Rt(new pi(.035,0),a);p.position.set(0,-.01,.24),this.headG.add(p);for(let d of[-1,1]){let x=new Rt(new Ci(.025,5,4),a);x.position.set(d*.075,.05,.13),this.headG.add(x);let m=new Rt(new ri(.07,.16,.12),Gi(t));m.material.color.multiplyScalar(.8),m.position.set(d*.15,0,-.02),m.rotation.z=d*.3,this.headG.add(m)}this.tail=new ot,this.tail.position.set(0,.42,-.36),this.bodyG.add(this.tail);let g=new Rt(new Ze(.025,.04,.25,4),r);g.position.y=.12,this.tail.add(g),this.tail.rotation.x=-.6,this.legs=[];for(let[d,x]of[[-.11,.2],[.11,.2],[-.11,-.2],[.11,-.2]]){let m=new ot;m.position.set(d,.26,x),this.bodyG.add(m);let v=new Rt(new Ze(.04,.035,.26,4),r);v.position.y=-.13,m.add(v),this.legs.push(m)}this.root.scale.setScalar(l),re(this.root,!0,!1),this.wag=1,w.world?.addCharacter(this)}place(t,e,i=null){return this.position.set(t,0,e),i!==null&&(this.heading=this.targetHeading=i),this}face(t,e){return this.targetHeading=Math.atan2(t-this.position.x,e-this.position.z),this}faceChar(t){return this.face(t.position.x,t.position.z)}walkTo(t,e,i={}){return new Promise(s=>{this.moveTarget={x:t,z:e,speed:i.speed??(this.age>10?.9:2.6),resolve:s}})}follow(t,e=1){this.followTarget=t?{c:t,dist:e}:null}setPose(t){return this.pose=t,this}get radius(){return .3}update(t,e){let i=!1;if(this.moveTarget){let o=this.moveTarget,a=o.x-this.position.x,l=o.z-this.position.z,c=Math.hypot(a,l);if(c<.05)this.moveTarget=null,o.resolve();else{let h=Math.min(o.speed*t,c);this.position.x+=a/c*h,this.position.z+=l/c*h,this.targetHeading=Math.atan2(a,l),this.speed=o.speed,i=!0}}else if(this.followTarget){let{c:o,dist:a}=this.followTarget,l=$r(this.position.x,this.position.z,o.position.x,o.position.z);if(l>a){let c=Math.min((this.age>10?1:3.2)*t,l-a),h=o.position.x-this.position.x,u=o.position.z-this.position.z;this.position.x+=h/l*c,this.position.z+=u/l*c,this.targetHeading=Math.atan2(h,u),this.speed=2.5,i=!0}}i||(this.speed=Hi(this.speed,0,8,t)),this.heading=jh(this.heading,this.targetHeading,1-Math.exp(-8*t)),this.root.rotation.y=this.heading,this.phase+=t*this.speed*5;let s=Math.sin(this.phase),r=this.speed>.2;this.legs.forEach((o,a)=>{o.rotation.x=r?s*.6*(a%2?1:-1)*(a<2?1:-1):0}),this.tail.rotation.z=Math.sin(e*(6+this.wag*8))*.5*this.wag,this.pose==="sit"?(this.bodyG.rotation.x=-.45,this.bodyG.position.y=-.06,this.legs[2].rotation.x=this.legs[3].rotation.x=1):this.pose==="lie"?(this.bodyG.rotation.x=0,this.bodyG.position.y=-.16,this.legs.forEach(o=>o.rotation.x=1.4)):(this.bodyG.rotation.x=0,this.bodyG.position.y=r?Math.abs(s)*.03:0),this.headG.rotation.x=this.pose==="lie"?.3:Math.sin(e*1.5)*.05}headWorld(){let t=new C;return this.headG.getWorldPosition(t),t.y+=.3,t}remove(){w.world?.removeCharacter(this),this.root.parent?.remove(this.root)}},Xe={youMother:{skin:k.skin[1],hair:7028522,hairStyle:"long",shirt:15044474,pants:5201802,dress:!1},youFather:{skin:k.skin[1],hair:5913386,hairStyle:"short",shirt:7315408,pants:4608110},baby:{skin:k.skin[1],hair:9067066,hairStyle:"baby",shirt:16180128,pants:16180128,shoes:16180128},mom:{skin:k.skin[0],hair:9128491,hairStyle:"bun",shirt:14256800,pants:5917290,dress:!0},dad:{skin:k.skin[2],hair:3023904,hairStyle:"short",shirt:8367754,pants:4868696,beard:!0},grandpa:{skin:k.skin[0],hair:14210255,hairStyle:"bald",shirt:11967098,pants:6969930,glasses:!0},grandma:{skin:k.skin[0],hair:14210255,hairStyle:"bun",shirt:10137800,pants:6974074,dress:!0,glasses:!0},theo:{skin:k.skin[3],hair:1971730,hairStyle:"curly",shirt:15775818,pants:4876954},sam:{skin:k.skin[2],hair:2760218,hairStyle:"curly",shirt:6267786,pants:4013394,scarf:7316424},childDaughter:{skin:k.skin[1],hair:8014382,hairStyle:"ponytail",shirt:15901621,pants:6982344},childSon:{skin:k.skin[1],hair:8014382,hairStyle:"short",shirt:9093352,pants:5925512},pip:{skin:k.skin[2],hair:3811874,hairStyle:"curly",shirt:15976010,pants:14243914,hat:14243914,scarf:7320537}}});Be();Ie();Ie();var Bn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};Ie();Ie();var ai=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Qv=new Fn(-1,1,1,-1,0,1),Qh=class extends Ce{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}},t_=new Qh,nn=class{constructor(t){this._mesh=new Rt(t_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Qv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var sr=class extends ai{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Te?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gi.clone(t.uniforms),this.material=new Te({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new nn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Jr=class extends ai{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ba=class extends ai{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var za=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new K);this._width=i.width,this._height=i.height,e=new Ge(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sr(Bn),this.copyPass.material.blending=Ue,this.clock=new Ia}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Jr!==void 0&&(o instanceof Jr?i=!0:o instanceof Ba&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};Ie();var Ha=class extends ai{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};Ie();Ie();var Rf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var rr=class n extends ai{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new K(t.x,t.y):new K(256,256),this.clearColor=new Pt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ge(r,o,{type:mi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ge(r,o,{type:mi});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Ge(r,o,{type:mi});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Rf;this.highPassUniforms=gi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Te({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new K(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Bn;this.copyUniforms=gi.clone(h.uniforms),this.blendMaterial=new Te({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ai,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pt,this.oldClearAlpha=1,this.basic=new Qe,this.fsQuad=new nn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new K(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Te({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new K(.5,.5)},direction:{value:new K(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Te({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};rr.BlurDirectionX=new K(1,0);rr.BlurDirectionY=new K(0,1);Ie();var Cf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Va=class extends ai{constructor(){super();let t=Cf;this.uniforms=gi.clone(t.uniforms),this.material=new Ea({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new nn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===kh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Uh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Fh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Oh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Zr&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};Ie();Ie();var Kr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new K},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new le},cameraProjectionMatrixInverse:{value:new le},cameraWorldMatrix:{value:new le},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new C(-1,-1,-1)},sceneBoxMax:{value:new C(1,1,1)}},vertexShader:`

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

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
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
			if (depth >= 1.0) {
				discard;
				return;
			}
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

				vec3 viewDir = normalize(-viewPos.xyz);
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
		}`},jr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Ga={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Pf(n=5){let t=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),e=e_(t),i=e.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=e[o],l=2*Math.PI*a/i,c=new C(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new ls(s,t,t);return r.wrapS=gn,r.wrapT=gn,r.needsUpdate=!0,r}function e_(n){let t=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),e=t*t,i=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),i[s*t+r]!==0){r-=2,s++;continue}else i[s*t+r]=o++;r++,s--}return i}Ie();var Qr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:tu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new K},cameraProjectionMatrixInverse:{value:new le},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
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
		}`};function tu(n,t,e){let i=i_(n,t,e),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function i_(n,t,e){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*t*s/n,o=Math.pow(s/(n-1),e);i.push(new C(Math.cos(r),Math.sin(r),o))}return i}var Wa=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,i){return t[0]*e+t[1]*i}dot3(t,e,i,s){return t[0]*e+t[1]*i+t[2]*s}dot4(t,e,i,s,r){return t[0]*e+t[1]*i+t[2]*s+t[3]*r}noise(t,e){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,p=c-u,g=t-f,d=e-p,x,m;g>d?(x=1,m=0):(x=0,m=1);let v=g-x+h,y=d-m+h,_=g-1+2*h,I=d-1+2*h,M=l&255,A=c&255,P=this.perm[M+this.perm[A]]%12,T=this.perm[M+x+this.perm[A+m]]%12,b=this.perm[M+1+this.perm[A+1]]%12,L=.5-g*g-d*d;L<0?i=0:(L*=L,i=L*L*this.dot(this.grad3[P],g,d));let B=.5-v*v-y*y;B<0?s=0:(B*=B,s=B*B*this.dot(this.grad3[T],v,y));let U=.5-_*_-I*I;return U<0?r=0:(U*=U,r=U*U*this.dot(this.grad3[b],_,I)),70*(i+s+r)}noise3d(t,e,i){let s,r,o,a,c=(t+e+i)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),f=Math.floor(i+c),p=1/6,g=(h+u+f)*p,d=h-g,x=u-g,m=f-g,v=t-d,y=e-x,_=i-m,I,M,A,P,T,b;v>=y?y>=_?(I=1,M=0,A=0,P=1,T=1,b=0):v>=_?(I=1,M=0,A=0,P=1,T=0,b=1):(I=0,M=0,A=1,P=1,T=0,b=1):y<_?(I=0,M=0,A=1,P=0,T=1,b=1):v<_?(I=0,M=1,A=0,P=0,T=1,b=1):(I=0,M=1,A=0,P=1,T=1,b=0);let L=v-I+p,B=y-M+p,U=_-A+p,H=v-P+2*p,Y=y-T+2*p,W=_-b+2*p,it=v-1+3*p,X=y-1+3*p,rt=_-1+3*p,pt=h&255,yt=u&255,Vt=f&255,oe=this.perm[pt+this.perm[yt+this.perm[Vt]]]%12,J=this.perm[pt+I+this.perm[yt+M+this.perm[Vt+A]]]%12,at=this.perm[pt+P+this.perm[yt+T+this.perm[Vt+b]]]%12,Tt=this.perm[pt+1+this.perm[yt+1+this.perm[Vt+1]]]%12,lt=.6-v*v-y*y-_*_;lt<0?s=0:(lt*=lt,s=lt*lt*this.dot3(this.grad3[oe],v,y,_));let Lt=.6-L*L-B*B-U*U;Lt<0?r=0:(Lt*=Lt,r=Lt*Lt*this.dot3(this.grad3[J],L,B,U));let zt=.6-H*H-Y*Y-W*W;zt<0?o=0:(zt*=zt,o=zt*zt*this.dot3(this.grad3[at],H,Y,W));let Ot=.6-it*it-X*X-rt*rt;return Ot<0?a=0:(Ot*=Ot,a=Ot*Ot*this.dot3(this.grad3[Tt],it,X,rt)),32*(s+r+o+a)}noise4d(t,e,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,p,g,d=(t+e+i+s)*l,x=Math.floor(t+d),m=Math.floor(e+d),v=Math.floor(i+d),y=Math.floor(s+d),_=(x+m+v+y)*c,I=x-_,M=m-_,A=v-_,P=y-_,T=t-I,b=e-M,L=i-A,B=s-P,U=T>b?32:0,H=T>L?16:0,Y=b>L?8:0,W=T>B?4:0,it=b>B?2:0,X=L>B?1:0,rt=U+H+Y+W+it+X,pt=o[rt][0]>=3?1:0,yt=o[rt][1]>=3?1:0,Vt=o[rt][2]>=3?1:0,oe=o[rt][3]>=3?1:0,J=o[rt][0]>=2?1:0,at=o[rt][1]>=2?1:0,Tt=o[rt][2]>=2?1:0,lt=o[rt][3]>=2?1:0,Lt=o[rt][0]>=1?1:0,zt=o[rt][1]>=1?1:0,Ot=o[rt][2]>=1?1:0,ie=o[rt][3]>=1?1:0,Q=T-pt+c,ct=b-yt+c,D=L-Vt+c,Dt=B-oe+c,nt=T-J+2*c,bt=b-at+2*c,ut=L-Tt+2*c,Ht=B-lt+2*c,vt=T-Lt+3*c,R=b-zt+3*c,S=L-Ot+3*c,z=B-ie+3*c,Z=T-1+4*c,et=b-1+4*c,$=L-1+4*c,It=B-1+4*c,dt=x&255,xt=m&255,Zt=v&255,st=y&255,Et=a[dt+a[xt+a[Zt+a[st]]]]%32,Gt=a[dt+pt+a[xt+yt+a[Zt+Vt+a[st+oe]]]]%32,Xt=a[dt+J+a[xt+at+a[Zt+Tt+a[st+lt]]]]%32,At=a[dt+Lt+a[xt+zt+a[Zt+Ot+a[st+ie]]]]%32,ne=a[dt+1+a[xt+1+a[Zt+1+a[st+1]]]]%32,qt=.6-T*T-b*b-L*L-B*B;qt<0?h=0:(qt*=qt,h=qt*qt*this.dot4(r[Et],T,b,L,B));let he=.6-Q*Q-ct*ct-D*D-Dt*Dt;he<0?u=0:(he*=he,u=he*he*this.dot4(r[Gt],Q,ct,D,Dt));let N=.6-nt*nt-bt*bt-ut*ut-Ht*Ht;N<0?f=0:(N*=N,f=N*N*this.dot4(r[Xt],nt,bt,ut,Ht));let ft=.6-vt*vt-R*R-S*S-z*z;ft<0?p=0:(ft*=ft,p=ft*ft*this.dot4(r[At],vt,R,S,z));let q=.6-Z*Z-et*et-$*$-It*It;return q<0?g=0:(q*=q,g=q*q*this.dot4(r[ne],Z,et,$,It)),27*(h+u+f+p+g)}};var to=class n extends ai{constructor(t,e,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Pf(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Ge(this.width,this.height,{type:mi}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Te({defines:Object.assign({},Kr.defines),uniforms:gi.clone(Kr.uniforms),vertexShader:Kr.vertexShader,fragmentShader:Kr.fragmentShader,blending:Ue,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Aa,this.normalMaterial.blending=Ue,this.pdMaterial=new Te({defines:Object.assign({},Qr.defines),uniforms:gi.clone(Qr.uniforms),vertexShader:Qr.vertexShader,fragmentShader:Qr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Te({defines:Object.assign({},jr.defines),uniforms:gi.clone(jr.uniforms),vertexShader:jr.vertexShader,fragmentShader:jr.fragmentShader,blending:Ue}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Te({uniforms:gi.clone(Bn.uniforms),vertexShader:Bn.vertexShader,fragmentShader:Bn.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ka,blendDst:tr,blendEquation:Ei,blendSrcAlpha:Da,blendDstAlpha:tr,blendEquationAlpha:Ei}),this.blendMaterial=new Te({uniforms:gi.clone(Ga.uniforms),vertexShader:Ga.vertexShader,fragmentShader:Ga.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Dh,blendSrc:ka,blendDst:tr,blendEquation:Ei,blendSrcAlpha:Da,blendDstAlpha:tr,blendEquationAlpha:Ei}),this.fsQuad=new nn(null),this.originalClearColor=new Pt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Zs,this.depthTexture.format=Dn,this.depthTexture.type=Ln,this.normalRenderTarget=new Ge(this.width,this.height,{minFilter:je,magFilter:je,type:mi,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=tu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Ue,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ue,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ue,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ue,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Ue,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,i,s,r){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,i,s,r){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){e.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){let s=e.get(i);i.visible=s}),e.clear()}generateNoise(t=64){let e=new Wa,i=t*t*4,s=new Uint8Array(i);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;s[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,s[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new ls(s,t,t,_i,Bi);return r.wrapS=gn,r.wrapT=gn,r.needsUpdate=!0,r}};to.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};Be();var eu={skyTop:12572912,skyBottom:16246488,fog:15917782,fogNear:6,fogFar:46,sun:16773596,sunIntensity:2.6,sunAz:210,sunEl:52,hemiSky:14674431,hemiGround:11901574,hemiIntensity:1.1,fill:11058408,fillIntensity:.55,exposure:1,saturation:1,contrast:1,brightness:0,warmth:0,tint:16777215,tintAmt:0,vignette:.35,grain:.035,bloom:.28,tilt:.6,focusX:.5,focusY:.5,focusRadius:2,focusDesat:0,dream:0},iu={dawnNursery:{fill:12101864,fillIntensity:.5,skyTop:16041923,skyBottom:16508628,fog:16243919,sun:16765616,sunIntensity:2.4,sunAz:235,sunEl:28,hemiSky:16769254,hemiGround:12884620,hemiIntensity:1.35,saturation:.95,warmth:.35,vignette:.45,bloom:.42,tilt:.9,dream:.25},springMorning:{skyTop:11129842,skyBottom:16510688,fog:16116964,sun:16773334,sunIntensity:2.8,sunAz:220,sunEl:48,hemiSky:14938111,hemiGround:10466442,hemiIntensity:1.3,saturation:1.05,warmth:.15,vignette:.32,bloom:.32,tilt:.75,dream:.12},summerDay:{skyTop:8373488,skyBottom:15135999,fog:14675706,sun:16774880,sunIntensity:3.1,sunAz:205,sunEl:58,hemiSky:15332607,hemiGround:9416302,hemiIntensity:1.25,saturation:1.18,contrast:1.04,warmth:.1,vignette:.28,bloom:.26,tilt:.6},summerDusk:{fill:9079520,fillIntensity:.55,skyTop:5988254,skyBottom:16169354,fog:15247754,sun:16757370,sunIntensity:2.1,sunAz:250,sunEl:14,hemiSky:10260432,hemiGround:9136730,hemiIntensity:1.1,saturation:1.1,warmth:.45,vignette:.42,bloom:.45,tilt:.75},summerNight:{fill:5925592,fillIntensity:.5,skyTop:1317434,skyBottom:3817330,fog:2896483,sun:10466559,sunIntensity:.9,sunAz:140,sunEl:40,hemiSky:5924528,hemiGround:2761792,hemiIntensity:.9,saturation:.95,warmth:-.1,vignette:.55,bloom:.7,tilt:.8},goldenAfternoon:{fill:10138864,fillIntensity:.6,skyTop:9418982,skyBottom:16768174,fog:16308660,sun:16764812,sunIntensity:3,sunAz:240,sunEl:30,hemiSky:16638912,hemiGround:10518624,hemiIntensity:1.2,saturation:1.12,contrast:1.05,warmth:.4,vignette:.35,bloom:.35,tilt:.65},rainyGrey:{skyTop:8161172,skyBottom:12174024,fog:11187130,sun:14213868,sunIntensity:1.1,sunAz:200,sunEl:60,hemiSky:13095644,hemiGround:6975344,hemiIntensity:1.35,saturation:.55,contrast:.95,warmth:-.25,vignette:.5,bloom:.15,tilt:.7},autumnEvening:{fill:8030944,fillIntensity:.6,skyTop:4012651,skyBottom:15964779,fog:14255978,sun:16752490,sunIntensity:1.9,sunAz:255,sunEl:12,hemiSky:9403584,hemiGround:8015936,hemiIntensity:1.05,saturation:1.15,warmth:.5,vignette:.45,bloom:.6,tilt:.7},festivalNight:{fill:8018640,fillIntensity:.55,skyTop:1053750,skyBottom:3878236,fog:3024464,sun:10725631,sunIntensity:.7,sunAz:130,sunEl:45,hemiSky:6970024,hemiGround:3811898,hemiIntensity:.95,saturation:1.1,warmth:.2,vignette:.5,bloom:.85,tilt:.75},weddingDay:{skyTop:10473458,skyBottom:16773602,fog:16510948,sun:16774108,sunIntensity:3,sunAz:215,sunEl:50,hemiSky:15856895,hemiGround:10926218,hemiIntensity:1.35,saturation:1.08,warmth:.25,vignette:.3,bloom:.45,tilt:.7,dream:.15},nurseryNight:{fill:5925584,fillIntensity:.45,skyTop:1909832,skyBottom:4016762,fog:3029094,sun:9348863,sunIntensity:.55,sunAz:140,sunEl:40,hemiSky:6320312,hemiGround:3813448,hemiIntensity:.75,saturation:.95,warmth:.15,vignette:.55,bloom:.8,tilt:.9},homeMorning:{skyTop:11851506,skyBottom:16641757,fog:16313052,sun:16772300,sunIntensity:2.7,sunAz:225,sunEl:40,hemiSky:15790335,hemiGround:11770496,hemiIntensity:1.4,saturation:1.05,warmth:.28,vignette:.32,bloom:.35,tilt:.7},fastForward:{skyTop:10137291,skyBottom:15260879,fog:14603208,sun:16773344,sunIntensity:2.4,sunAz:210,sunEl:45,hemiSky:14739184,hemiGround:10129536,hemiIntensity:1.3,saturation:.85,contrast:1.08,warmth:0,vignette:.5,bloom:.3,tilt:.95},emptyHouse:{skyTop:10134445,skyBottom:14078668,fog:13617860,sun:15788254,sunIntensity:1.8,sunAz:230,sunEl:26,hemiSky:14212580,hemiGround:9076854,hemiIntensity:1.25,saturation:.45,contrast:.96,warmth:-.05,vignette:.55,bloom:.2,tilt:.8},winterMorning:{skyTop:12043992,skyBottom:15659508,fog:15133423,sun:15987455,sunIntensity:2.2,sunAz:205,sunEl:22,hemiSky:15660031,hemiGround:12107980,hemiIntensity:1.5,saturation:.35,contrast:.98,warmth:-.2,vignette:.45,bloom:.3,tilt:.8},winterDusk:{fill:9083608,fillIntensity:.55,skyTop:3620970,skyBottom:14264480,fog:12560042,sun:16761504,sunIntensity:1.6,sunAz:250,sunEl:10,hemiSky:10134736,hemiGround:9474208,hemiIntensity:1.2,saturation:.7,warmth:.3,vignette:.5,bloom:.6,tilt:.8},dream:{skyTop:16177126,skyBottom:16774888,fog:16773610,sun:16774374,sunIntensity:2.6,sunAz:220,sunEl:40,hemiSky:16773366,hemiGround:15126464,hemiIntensity:1.6,saturation:1,warmth:.3,vignette:.25,bloom:.75,tilt:.9,dream:.6,fogNear:2,fogFar:34},kitchenNight:{fill:5922960,fillIntensity:.4,skyTop:1448496,skyBottom:2961744,fog:2501189,sun:11056383,sunIntensity:.5,sunAz:140,sunEl:40,hemiSky:5922704,hemiGround:3813424,hemiIntensity:.6,saturation:.75,warmth:.35,vignette:.6,bloom:.75,tilt:.9},black:{skyTop:328968,skyBottom:657936,fog:526348,sunIntensity:0,hemiIntensity:.1}};var n_={uniforms:{tDiffuse:{value:null},resolution:{value:new K(1,1)},time:{value:0},saturation:{value:1},contrast:{value:1},brightness:{value:0},warmth:{value:0},tint:{value:new Pt(1,1,1)},tintAmt:{value:0},vignette:{value:.3},grain:{value:.03},tilt:{value:.5},dream:{value:0},focus:{value:new K(.5,.5)},focusRadius:{value:2},focusDesat:{value:0}},vertexShader:`
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
  `},Xa=class n{constructor(t){this.container=t;let e=new da({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=Lh,e.toneMapping=Zr,e.toneMappingExposure=1,e.outputColorSpace=qe,t.appendChild(e.domElement),this.r=e,this.scene=new pa,this.skyCanvas=document.createElement("canvas"),this.skyCanvas.width=2,this.skyCanvas.height=128,this.skyTex=new Js(this.skyCanvas),this.skyTex.colorSpace=qe,this.scene.background=this.skyTex,this.scene.fog=new fa(16777215,50,120),this.viewSize=14;let i=window.innerWidth/window.innerHeight;this.camera=new Fn(-i*7,i*7,7,-7,.1,300),this.camAz=45,this.camEl=33,this.camDist=70,this.camTarget=new C,this.camGoal=new C,this.zoomGoal=14,this.followSpeed=3,this.follow=null,this.followOffset=new C,this.shake=0,this.camBounds=null,this.hemi=new Ca(16777215,8947848,1.2),this.scene.add(this.hemi),this.sun=new Yr(16777215,2.5),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,this.sun.shadow.radius=3;let s=this.sun.shadow.camera;s.left=-22,s.right=22,s.top=22,s.bottom=-22,s.near=1,s.far=120,this.scene.add(this.sun),this.scene.add(this.sun.target),this.fill=new Yr(10466536,.5),this.scene.add(this.fill),this.scene.add(this.fill.target);let r=new za(e);r.addPass(new Ha(this.scene,this.camera)),this.ao=new to(this.scene,this.camera,window.innerWidth,window.innerHeight),this.ao.updateGtaoMaterial({radius:.55,distanceExponent:1.6,thickness:2,scale:1.25,samples:12,distanceFallOff:1}),this.ao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),this.ao.blendIntensity=.85;let o=!("ontouchstart"in window);try{let a=localStorage.getItem("lm.ao");a!==null&&(o=a==="1")}catch{}this.ao.enabled=o,r.addPass(this.ao),this.bloom=new rr(new K(window.innerWidth/2,window.innerHeight/2),.3,.55,.82),r.addPass(this.bloom),r.addPass(new Va),this.grade=new sr(n_),r.addPass(this.grade),this.composer=r,this.mood=this._expand(eu),this.moodFrom=this._clone(this.mood),this.moodTo=this._clone(this.mood),this.moodT=1,this.moodDur=0,this.overrides={},this._applyMood(),window.addEventListener("resize",()=>this.resize()),this.resize()}_expand(t){let e={};for(let i in t)e[i]=n.isColorKey(i)?new Pt(t[i]):t[i];return e}_clone(t){let e={};for(let i in t)e[i]=t[i]instanceof Pt?t[i].clone():t[i];return e}static isColorKey(t){return["skyTop","skyBottom","fog","sun","hemiSky","hemiGround","tint","fill"].includes(t)}setAO(t){this.ao.enabled=t;try{localStorage.setItem("lm.ao",t?"1":"0")}catch{}}setMood(t,e=2,i=null){let s=typeof t=="string"?{...eu,...iu[t]}:{...this._flat(this.moodTo),...t};typeof t=="string"&&!iu[t]&&console.warn("unknown mood",t),i&&(s={...s,...i}),this.moodFrom=this._clone(this.mood);let r={};for(let o in s)r[o]=n.isColorKey(o)?new Pt(s[o]):s[o];this.moodTo=r,this.moodT=0,this.moodDur=Math.max(1e-4,e),e<=0&&(this.moodT=1,this.mood=this._clone(r),this._applyMood())}_flat(t){let e={};for(let i in t)e[i]=t[i]instanceof Pt?t[i].getHex():t[i];return e}moodTarget(){return this._flat(this.moodTo)}_updateMood(t){if(this.moodT<1){this.moodT=Math.min(1,this.moodT+t/this.moodDur);let e=this.moodT*this.moodT*(3-2*this.moodT);for(let i in this.moodTo){let s=this.moodFrom[i],r=this.moodTo[i];r instanceof Pt?(this.mood[i]instanceof Pt||(this.mood[i]=new Pt),this.mood[i].copy(s instanceof Pt?s:r).lerp(r,e)):typeof r=="number"&&(this.mood[i]=ti(s??r,r,e))}this._applyMood()}else this._applyMood(!0)}_applyMood(t=!1){let e=this.mood,i=this.overrides;if(!t){let o=this.skyCanvas.getContext("2d"),a=o.createLinearGradient(0,0,0,128);a.addColorStop(0,"#"+e.skyTop.getHexString()),a.addColorStop(1,"#"+e.skyBottom.getHexString()),o.fillStyle=a,o.fillRect(0,0,2,128),this.skyTex.needsUpdate=!0,this.scene.fog.color.copy(e.fog),this.sun.color.copy(e.sun),e.fill&&this.fill.color.copy(e.fill),this.hemi.color.copy(e.hemiSky),this.hemi.groundColor.copy(e.hemiGround)}let s=Math.max(.8,this.viewSize/14);this.scene.fog.near=this.camDist+e.fogNear*s,this.scene.fog.far=this.camDist+e.fogFar*s,this.sun.intensity=e.sunIntensity*(i.light??1),this.fill.intensity=(e.fillIntensity??.5)*(i.light??1),this.hemi.intensity=e.hemiIntensity*(i.light??1),this.r.toneMappingExposure=e.exposure;let r=this.grade.uniforms;r.saturation.value=e.saturation*(i.saturation??1),r.contrast.value=e.contrast,r.brightness.value=e.brightness+(i.brightness??0),r.warmth.value=e.warmth+(i.warmth??0),r.tint.value.copy(e.tint),r.tintAmt.value=e.tintAmt,r.vignette.value=e.vignette+(i.vignette??0),r.grain.value=e.grain,r.tilt.value=e.tilt,r.dream.value=jt(e.dream+(i.dream??0),0,1.2),r.focus.value.set(i.focusX??e.focusX,i.focusY??e.focusY),r.focusRadius.value=i.focusRadius??e.focusRadius,r.focusDesat.value=i.focusDesat??e.focusDesat,this.bloom.strength=e.bloom+(i.bloom??0)}pulse(t,e,i=1){let s=this.overrides[t]??(t==="saturation"||t==="light"?1:0);return ei(i,r=>{this.overrides[t]=ti(s,e,r)})}resize(){let t=window.innerWidth,e=window.innerHeight;this.r.setSize(t,e),this.composer.setSize(t,e);let i=this.r.getPixelRatio();this.grade.uniforms.resolution.value.set(t*i,e*i),this._updateProjection()}_updateProjection(){let t=window.innerWidth,e=window.innerHeight,i=t/e,s=this.viewSize*(i<1?1.25:1);this.camera.left=-s*i/2,this.camera.right=s*i/2,this.camera.top=s/2,this.camera.bottom=-s/2,this.camera.updateProjectionMatrix()}camOffset(){let t=ps.degToRad(this.camAz),e=ps.degToRad(this.camEl);return new C(Math.sin(t)*Math.cos(e),Math.sin(e),Math.cos(t)*Math.cos(e)).multiplyScalar(this.camDist)}groundBasis(){let t=ps.degToRad(this.camAz),e=new C(-Math.sin(t),0,-Math.cos(t)),i=new C(Math.cos(t),0,-Math.sin(t));return{fwd:e,right:i}}setFollow(t,e=null){this.follow=t,e?this.followOffset.copy(e):this.followOffset.set(0,0,0)}snapCamera(){this.follow&&this.camGoal.copy(this.follow.position).add(this.followOffset),this.camTarget.copy(this.camGoal),this.viewSize=this.zoomGoal,this._updateProjection()}async cameraTo(t,e=null,i=2){this.follow=null;let s=this.camTarget.clone(),r=this.viewSize,o=new C(t.x,t.y??0,t.z);await ei(i,a=>{this.camGoal.copy(s).lerp(o,a),this.camTarget.copy(this.camGoal),e&&(this.zoomGoal=ti(r,e,a),this.viewSize=this.zoomGoal,this._updateProjection())})}zoomTo(t,e=2){let i=this.zoomGoal;return ei(e,s=>{this.zoomGoal=ti(i,t,s)})}update(t){if(this._updateMood(t),this.follow&&(this.camGoal.copy(this.follow.position).add(this.followOffset),this.camGoal.y=Math.max(0,this.camGoal.y*.5)),this.camBounds&&this.follow){let p=this.camBounds;this.camGoal.x=jt(this.camGoal.x,p.minX,p.maxX),this.camGoal.z=jt(this.camGoal.z,p.minZ,p.maxZ)}let e=this.followSpeed;this.camTarget.x=Hi(this.camTarget.x,this.camGoal.x,e,t),this.camTarget.y=Hi(this.camTarget.y,this.camGoal.y,e,t),this.camTarget.z=Hi(this.camTarget.z,this.camGoal.z,e,t);let i=Hi(this.viewSize,this.zoomGoal,2.5,t);Math.abs(i-this.viewSize)>1e-4&&(this.viewSize=i,this._updateProjection());let s=this.camOffset();this.camera.position.copy(this.camTarget).add(s),this.shake>0&&(this.camera.position.x+=(Math.random()-.5)*this.shake,this.camera.position.y+=(Math.random()-.5)*this.shake,this.shake=Math.max(0,this.shake-t*2)),this.camera.lookAt(this.camTarget);let r=this.mood,o=ps.degToRad(r.sunAz),a=ps.degToRad(r.sunEl),l=new C(Math.sin(o)*Math.cos(a),Math.sin(a),Math.cos(o)*Math.cos(a));this.sun.position.copy(this.camTarget).addScaledVector(l,50),this.sun.target.position.copy(this.camTarget);let c=o+Math.PI,h=ps.degToRad(28);this.fill.position.copy(this.camTarget).add(new C(Math.sin(c)*Math.cos(h),Math.sin(h),Math.cos(c)*Math.cos(h)).multiplyScalar(50)),this.fill.target.position.copy(this.camTarget);let u=Math.max(14,this.viewSize*1.25),f=this.sun.shadow.camera;Math.abs(f.right-u)>.5&&(f.left=-u,f.right=u,f.top=u,f.bottom=-u,f.updateProjectionMatrix()),this.grade.uniforms.time.value=w.realTime}render(){this.composer.render()}snapshot(t=320,e=240){let i=this.r.domElement,s=document.createElement("canvas");s.width=t,s.height=e;let r=s.getContext("2d"),o=i.width/i.height,a=t/e,l=i.width,c=i.height,h=0,u=0;o>a?(l=c*a,h=(i.width-l)/2):(c=l/a,u=(i.height-c)/2);let f=.82,p=l*f,g=c*f;h+=(l-p)/2,u+=(c-g)/2,r.drawImage(i,h,u,p,g,0,0,t,e);try{return s.toDataURL("image/jpeg",.72)}catch{return null}}project(t){let e=t.clone().project(this.camera);return{x:(e.x+1)/2*window.innerWidth,y:(1-e.y)/2*window.innerHeight,visible:e.z<1}}unproject(t,e,i=0){let s=new K(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1),r=new La;r.setFromCamera(s,this.camera);let o=new Ni(new C(0,1,0),-i),a=new C;return r.ray.intersectPlane(o,a)?a:null}};Be();var If={ArrowUp:"up",KeyW:"up",ArrowDown:"down",KeyS:"down",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",Space:"act",Enter:"act",KeyE:"act",NumpadEnter:"act",Escape:"pause",KeyP:"pause",KeyJ:"album",Tab:"album",Digit1:"n1",Digit2:"n2",Digit3:"n3",Digit4:"n4"},qa=class{constructor(t){this.el=t,this.held=new Set,this.pressedSet=new Set,this.releasedSet=new Set,this.pointer={x:0,y:0,down:!1,downT:0,moved:!1,startX:0,startY:0},this.clicks=[],this.anyPress=!1,this.lastDevice="keyboard",window.addEventListener("keydown",e=>{if(e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA"))return;let i=If[e.code];i&&(e.preventDefault(),this.held.has(i)||this.pressedSet.add(i),this.held.add(i)),e.repeat||(this.anyPress=!0),this.lastDevice="keyboard",w.audio?.init()}),window.addEventListener("keyup",e=>{let i=If[e.code];i&&(this.held.delete(i),this.releasedSet.add(i))}),window.addEventListener("blur",()=>{this.held.clear(),this.pointer.down=!1}),t.addEventListener("pointerdown",e=>{this.pointer.down=!0,this.pointer.downT=performance.now(),this.pointer.moved=!1,this.pointer.x=this.pointer.startX=e.clientX,this.pointer.y=this.pointer.startY=e.clientY,this.pressedSet.add("pointer"),this.anyPress=!0,this.lastDevice=e.pointerType==="touch"?"touch":"mouse",w.audio?.init()}),window.addEventListener("pointermove",e=>{this.pointer.x=e.clientX,this.pointer.y=e.clientY,this.pointer.down&&Math.hypot(e.clientX-this.pointer.startX,e.clientY-this.pointer.startY)>12&&(this.pointer.moved=!0)}),window.addEventListener("pointerup",e=>{if(this.pointer.down&&e.target===t){let i=performance.now()-this.pointer.downT;!this.pointer.moved&&i<450&&this.clicks.push({x:e.clientX,y:e.clientY})}this.pointer.down=!1,this.releasedSet.add("pointer")}),t.addEventListener("contextmenu",e=>e.preventDefault())}isDown(t){return this.held.has(t)}pressed(t){return this.pressedSet.has(t)}released(t){return this.releasedSet.has(t)}consume(t){this.pressedSet.delete(t)}holding(){return this.held.has("act")||this.pointer.down}axis(){let t=0,e=0;return this.held.has("left")&&(t-=1),this.held.has("right")&&(t+=1),this.held.has("up")&&(e+=1),this.held.has("down")&&(e-=1),{x:t,y:e}}endFrame(){this.pressedSet.clear(),this.releasedSet.clear(),this.clicks.length=0,this.anyPress=!1}};Be();var li=n=>document.querySelector(n),mt=(n,t,e)=>{let i=document.createElement(n);return t&&(i.className=t),e!==void 0&&(i.innerHTML=e),i},Lf=n=>new Promise(t=>setTimeout(t,n)),Ya=class{constructor(){this.fadeEl=li("#fade"),this.flashEl=li("#flash"),this.narrEl=li("#narr"),this.lowerEl=li("#lower"),this.bubblesEl=li("#bubbles"),this.choicesEl=li("#choices"),this.promptEl=li("#prompt"),this.keepEl=li("#keep"),this.mgEl=li("#mg"),this.cardEl=li("#card"),this.hintEl=li("#hint"),this.flyerEl=li("#flyer"),this.clockEl=li("#clock"),this.albumBtn=li("#albumBtn"),this.menuBtn=li("#menuBtn"),this.bubbles=[],this.settings={auto:!0,textSpeed:1};try{Object.assign(this.settings,JSON.parse(localStorage.getItem("lm.settings")||"{}"))}catch{}this.promptTarget=null,this.fadeValue=1,this.promptEl.addEventListener("pointerdown",t=>{t.stopPropagation(),this.promptClicked=!0})}saveSettings(){try{localStorage.setItem("lm.settings",JSON.stringify(this.settings))}catch{}}fade(t,e=1.5,i="#000"){let s=this.fadeEl;return s.style.background=i,s.style.transition=`opacity ${e}s ease`,s.offsetWidth,s.style.opacity=t,this.fadeValue=t,Lf(e*1e3)}fadeOut(t=1.5,e="#000"){return this.fade(1,t,e)}fadeIn(t=1.5){return this.fade(0,t,this.fadeEl.style.background||"#000")}flash(t=.8,e=.85){let i=this.flashEl;i.style.transition="none",i.style.opacity=e,i.offsetWidth,i.style.transition=`opacity ${t}s ease`,i.style.opacity=0}_advance(){let t=w.input,e=t.pressed("act")||t.clicks.length>0||t.pressed("pointer");return e&&(t.consume("act"),t.consume("pointer"),t.clicks.length=0),e}_readTime(t){return w.auto?.25:(2+t.length*.055)/this.settings.textSpeed}async narrate(t,{stack:e=!1,auto:i=null,small:s=!1,dark:r=!1,hold:o=null,minTime:a=.9}={}){Array.isArray(t)||(t=[t]);let l=i??this.settings.auto;for(let c=0;c<t.length;c++){let h=De(t[c]);e||this._clearNarr();let u=mt("div","line"+(s?" small":"")+(r?" dark":""));u.innerHTML=h+'<span class="advance"></span>',this.narrEl.appendChild(u),u.offsetWidth,u.classList.add("show"),await Wt(w.auto?.1:a),u.classList.add("ready");let f=o??(l?this._readTime(h):1/0),p=a;await oi(g=>(p+=g,this._advance()||p>=f))}}_clearNarr(){for(let t of[...this.narrEl.children])t.classList.remove("show"),t.classList.add("out"),setTimeout(()=>t.remove(),1100)}clearNarration(){this._clearNarr()}async lower(t,{auto:e=null,hold:i=null,block:s=!0}={}){t=De(t);for(let c of[...this.lowerEl.children])c.classList.remove("show"),setTimeout(()=>c.remove(),1100);let r=mt("div","line");r.innerHTML=t+'<span class="advance"></span>',this.lowerEl.appendChild(r),r.offsetWidth,r.classList.add("show");let o=e??this.settings.auto,a=i??(o?this._readTime(t):1/0);if(!s){Wt(a).then(()=>{r.classList.remove("show"),setTimeout(()=>r.remove(),1200)});return}await Wt(.6),r.classList.add("ready");let l=.6;await oi(c=>(l+=c,this._advance()||l>=a)),r.classList.remove("show"),setTimeout(()=>r.remove(),1200)}async say(t,e,{thought:i=!1,auto:s=null,hold:r=null,small:o=!1,name:a=null,passive:l=!1}={}){e=De(e);let c=mt("div","bubble"+(i?" thought":"")+(o?" small":"")),h=a??t?.name??"";c.innerHTML=(h&&!i?`<span class="who">${De(h)}</span>`:"")+'<span class="t"></span><span class="advance"></span>',this.bubblesEl.appendChild(c);let u={el:c,speaker:t};this.bubbles.push(u),this._positionBubble(u),c.offsetWidth,c.classList.add("show");let f=c.querySelector(".t"),p=0,g=!0,d=48*this.settings.textSpeed,x=0,m=0,v=l?()=>!1:()=>this._advance();await oi(M=>{if(v())return g=!1,!0;x+=M*d;let A=Math.min(e.length,Math.floor(x));return A>p&&(p=A,f.textContent=e.slice(0,A),m++,m%3===0&&!i&&w.audio?.sfx("tap",{vol:.25})),A>=e.length}),f.textContent=e,c.classList.add("ready");let y=s??this.settings.auto,_=r??(y||l?this._readTime(e)*.85:1/0),I=0;await Wt(.25),await oi(M=>(I+=M,v()||I>=_)),c.classList.remove("show"),setTimeout(()=>{c.remove(),this.bubbles=this.bubbles.filter(M=>M!==u)},350)}_positionBubble(t){let e=t.speaker,i=window.innerWidth/2,s=window.innerHeight*.7;if(e&&(e.headWorld||e.isVector3||e.position)){let r=e.headWorld?e.headWorld():e.isVector3?e.clone():e.position.clone(),o=w.renderer.project(r);i=jt(o.x,140,window.innerWidth-140),s=jt(o.y-14,90,window.innerHeight-40)}t.el.style.left=i+"px",t.el.style.top=s+"px"}choose(t,e){return w.auto?(w.log?.push("choose: "+t),Wt(.2).then(()=>(w.autoChoice??0)%e.length)):new Promise(i=>{let s=this.choicesEl;s.innerHTML="",s.classList.remove("hidden"),t&&s.appendChild(mt("div","q",De(t)));let r=-1,o=e.map((u,f)=>{let p=mt("button","",`<span class="n">${f+1}</span><span>${De(u)}</span>`);return p.style.animationDelay=.15+f*.12+"s",p.addEventListener("pointerdown",g=>{g.stopPropagation(),c(f)}),p.addEventListener("mouseenter",()=>{r=f,a()}),s.appendChild(p),p}),a=()=>o.forEach((u,f)=>u.classList.toggle("sel",f===r)),l=!1,c=u=>{l||(l=!0,w.audio?.sfx("soft",{deg:5}),s.classList.add("hidden"),s.innerHTML="",w.updaters.delete(h),i(u))},h=()=>{let u=w.input;for(let f=0;f<e.length&&f<4;f++)if(u.pressed("n"+(f+1)))return c(f);(u.pressed("down")||u.pressed("right"))&&(r=(r+1)%e.length,a()),(u.pressed("up")||u.pressed("left"))&&(r=(r-1+e.length)%e.length,a()),u.pressed("act")&&r>=0&&(u.consume("act"),c(r))};w.updaters.add(h)})}askText(t,e=""){return w.auto?Wt(.2).then(()=>e):new Promise(i=>{let s=this.choicesEl;s.innerHTML="",s.classList.remove("hidden"),s.appendChild(mt("div","q",De(t)));let r=mt("input");r.type="text",r.maxLength=14,r.value=e,r.placeholder=e,s.appendChild(r);let o=mt("button","",`<span class="n">\u2713</span><span>That's the one</span>`);s.appendChild(o),setTimeout(()=>{r.focus(),r.select()},50);let a=()=>{let l=r.value.trim().replace(/[<>&"]/g,"");l||(l=e),l=l.charAt(0).toUpperCase()+l.slice(1),s.classList.add("hidden"),s.innerHTML="",r.blur(),i(l)};r.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),a()),l.stopPropagation()}),o.addEventListener("pointerdown",l=>{l.stopPropagation(),a()})})}setPrompt(t){if(this.promptTarget=t,!t){this.promptEl.classList.add("hidden");return}this.promptEl.classList.remove("hidden"),this.promptEl.className=t.kind==="work"?"work":t.kind==="story"?"story":t.kind==="secret"?"secret":"";let e=w.input.lastDevice==="touch"?"Tap":"Space";this.promptEl.querySelector(".key").textContent=e,this.promptEl.querySelector(".txt").textContent=(t.kind==="secret"?"\u2726 ":"")+De(t.label)}showHud(t=!0){this.albumBtn.classList.toggle("hidden",!t),this.menuBtn.classList.toggle("hidden",!t)}clock(t){this.clockEl.classList.toggle("hidden",!t)}setClock(t,e,i=!1){let s=jt(t,0,1);this.clockEl.querySelector(".fill").style.strokeDashoffset=264*(1-s),this.clockEl.querySelector(".sun").style.transform=`rotate(${s*360}deg)`,this.clockEl.querySelector(".num").textContent=e,this.clockEl.classList.toggle("urgent",i)}setAlbumCount(t,e=!1){this.albumBtn.querySelector(".count").textContent=t,e&&(this.albumBtn.classList.remove("bump"),this.albumBtn.offsetWidth,this.albumBtn.classList.add("bump"))}hint(t,e=6){this.hintEl.innerHTML=t,this.hintEl.classList.add("show"),clearTimeout(this._hintT),e&&(this._hintT=setTimeout(()=>this.hintEl.classList.remove("show"),e*1e3))}hideHint(){this.hintEl.classList.remove("show")}async chapterCard({num:t="",title:e="",ages:i="",quote:s=""},r=4.5){let o=this.cardEl;o.querySelector(".num").textContent=t,o.querySelector(".title").textContent=e,o.querySelector(".ages").textContent=i,o.querySelector(".quote").textContent=De(s),o.classList.remove("hidden","out","show"),o.offsetWidth,o.classList.add("show");let a=0;await oi(l=>(a+=l,a>2.5&&this._advance()||a>r+2||w.auto&&a>.5)),o.classList.add("out"),await Lf(1200),o.classList.add("hidden"),o.classList.remove("show","out")}flyPolaroid(t,e){let i=mt("div","polaroid"),s=Math.min(320,window.innerWidth*.35);i.style.width=s+"px",i.innerHTML=`<img src="${t||""}"><div class="cap">${De(e)}</div>`,i.style.left=window.innerWidth/2-s/2+"px",i.style.top=window.innerHeight/2-s*.45+"px",i.style.transform="rotate(-3deg) scale(0.9)",i.style.opacity="0",i.style.transition="opacity 0.5s ease, transform 0.6s ease",this.flyerEl.appendChild(i),requestAnimationFrame(()=>{i.style.opacity="1",i.style.transform="rotate(-2deg) scale(1)"}),setTimeout(()=>{let r=this.albumBtn.getBoundingClientRect(),o=r.left+r.width/2-window.innerWidth/2,a=r.top+r.height/2-window.innerHeight/2;i.style.transition="transform 1.1s cubic-bezier(.6,.0,.3,1), opacity 1.1s ease",i.style.transform=`translate(${o}px, ${a}px) rotate(12deg) scale(0.08)`,i.style.opacity="0.2"},2300),setTimeout(()=>{i.remove(),this.setAlbumCount(w.album.count(),!0)},3500)}update(){for(let t of this.bubbles)this._positionBubble(t);if(this.promptTarget){let t=this.promptTarget,e=t.position.clone();e.y=(t.def.height??(t.anchor?.height?t.anchor.height+.25:1))+.55;let i=w.renderer.project(e);this.promptEl.style.left=i.x+"px",this.promptEl.style.top=i.y-6+"px"}}};Be();var nu={C:60,"C#":61,Db:61,D:62,Eb:63,E:64,F:65,"F#":66,G:67,Ab:68,A:69,Bb:70,B:71},Za={major:[0,2,4,5,7,9,11],minor:[0,2,3,5,7,8,10],harmonic:[0,2,3,5,7,8,11],dorian:[0,2,3,5,7,9,10]},s_={i:0,ii:1,iii:2,iv:3,v:4,vi:5,vii:6};function su(n,t=!1){let e=n,i=0;e[0]==="b"?(i=-1,e=e.slice(1)):e[0]==="#"&&(i=1,e=e.slice(1));let s=e.match(/^(VII|VI|IV|V|III|II|I|vii|vi|iv|v|iii|ii|i)(.*)$/);if(!s)return{root:0,iv:[0,4,7]};let r=s[1],o=s[2],a=r===r.toUpperCase(),l=s_[r.toLowerCase()],c=Za.major[l]+i+(t&&["iii","vi","vii"].includes(r.toLowerCase())?-1:0),h=a?[0,4,7]:[0,3,7];return(o.includes("\xB0")||o.includes("dim"))&&(h=[0,3,6]),o.includes("sus4")&&(h=[0,5,7]),o.includes("sus2")&&(h=[0,2,7]),o.includes("maj7")?h=[...h,11]:o.includes("7")&&(h=[...h,10]),o.includes("add9")&&(h=[...h,14]),o.includes("6")&&(h=[...h,9]),{root:c,iv:h}}function eo(n,t){let e=Math.floor((n-1)/7),i=((n-1)%7+7)%7;return t[i]+e*12}var wi=[{c:"I",n:[[3,2],[5,1]]},{c:"IV",n:[[6,2],[5,1]]},{c:"I",n:[[3,1],[2,1],[1,1]]},{c:"V",n:[[2,3]]},{c:"I",n:[[3,2],[5,1]]},{c:"vi",n:[[8,2],[7,1]]},{c:"IVmaj7",n:[[6,1],[5,1],[3,1]]},{c:"V",n:[[5,3]]},{c:"IVadd9",n:[[6,2],[5,1]]},{c:"ii",n:[[4,2],[3,1]]},{c:"V7",n:[[2,1],[3,1],[4,1]]},{c:"I",n:[[3,3]]},{c:"vi",n:[[3,2],[2,1]]},{c:"IV",n:[[1,2],[-1,1]]},{c:"V",n:[[0,1],[2,1],[0,1]]},{c:"I",n:[[1,3]]}],r_=wi.map(n=>({...n,c:{I:"i",IV:"iv",V:"V",vi:"VI",IVmaj7:"iv7",IVadd9:"iv",ii:"ii\xB0",V7:"V7"}[n.c]??n.c})),o_=[{c:"I",n:[[3,1],[3,.5],[5,.5],[6,1],[5,1]]},{c:"IV",n:[[6,1],[8,1],[6,1],[5,1]]},{c:"I",n:[[3,1],[2,.5],[1,.5],[2,1],[3,1]]},{c:"V",n:[[2,2],[5,1],[0,1]]},{c:"I",n:[[3,1],[3,.5],[5,.5],[8,1],[7,1]]},{c:"vi",n:[[6,1],[5,1],[3,1],[5,1]]},{c:"IV",n:[[4,1],[3,1],[2,1],[4,1]]},{c:"V",n:[[2,1],[3,1],[1,2]]}],Df={silence:{key:"F",bpm:60,beats:4,prog:[["I",4]],layers:[]},title:{key:"F",bpm:62,beats:3,prog:[["I",3],["vi",3],["IVmaj7",3],["Vsus4",3]],layers:[{t:"chord",inst:"pad",gain:.16,oct:-1,every:6},{t:"sparkle",inst:"musicbox",gain:.22,oct:1,density:.35},{t:"song",inst:"musicbox",gain:.3,oct:1,song:wi,min:.5}]},tiny:{key:"F",bpm:64,beats:3,song:wi,layers:[{t:"song",inst:"musicbox",gain:.34,oct:1},{t:"chord",inst:"pad",gain:.12,oct:-1,every:3,min:.25},{t:"bass",inst:"softbass",gain:.16,oct:-2,min:.5},{t:"sparkle",inst:"bell",gain:.08,oct:2,density:.15,min:.6}]},tinyHum:{key:"F",bpm:60,beats:3,song:wi,layers:[{t:"song",inst:"hum",gain:.22,oct:0},{t:"song",inst:"musicbox",gain:.16,oct:1,min:.3},{t:"chord",inst:"pad",gain:.12,oct:-1,every:3},{t:"bass",inst:"softbass",gain:.14,oct:-2}]},whistle:{key:"F",bpm:66,beats:3,song:wi,layers:[{t:"song",inst:"whistle",gain:.16,oct:1},{t:"arp",inst:"pluck",gain:.12,oct:0,pattern:[0,1,2],div:1},{t:"bass",inst:"softbass",gain:.14,oct:-2}]},wonder:{key:"C",bpm:104,beats:4,prog:[["I",4],["V",4],["vi",4],["IV",4],["I",4],["IV",4],["ii7",4],["V",4]],layers:[{t:"arp",inst:"marimba",gain:.2,oct:0,pattern:[0,2,1,2,0,2,1,3],div:2},{t:"bass",inst:"softbass",gain:.2,oct:-2,fifth:!0},{t:"gen",inst:"flute",gain:.13,oct:1,seed:11,min:.35},{t:"perc",gain:.12,pat:{shaker:"..x...x...x...x.",kick:"x.......x......."},min:.5},{t:"sparkle",inst:"musicbox",gain:.1,oct:2,density:.25,min:.7}]},summerNight:{key:"G",bpm:72,beats:3,prog:[["I",3],["iii",3],["IV",3],["I",3],["vi",3],["ii",3],["IV",3],["V",3]],layers:[{t:"arp",inst:"musicbox",gain:.16,oct:1,pattern:[0,1,2,3,2,1],div:2},{t:"chord",inst:"pad",gain:.13,oct:-1,every:3},{t:"gen",inst:"piano",gain:.16,oct:0,seed:23,min:.4},{t:"bass",inst:"softbass",gain:.12,oct:-2,min:.3}]},bedtime:{key:"G",bpm:60,beats:3,song:wi,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.12,oct:1,min:.5}]},running:{key:"D",bpm:112,beats:4,prog:[["vi",4],["IV",4],["I",4],["V",4]],layers:[{t:"strum",inst:"guitar",gain:.12,oct:0,rhythm:[0,3,6,8,10,12,14]},{t:"bass",inst:"softbass",gain:.2,oct:-2,fifth:!0},{t:"perc",gain:.13,pat:{kick:"x.......x.x.....",hat:"..x...x...x...x.",brush:"....x.......x..."},min:.3},{t:"gen",inst:"piano",gain:.14,oct:1,seed:37,min:.5},{t:"chord",inst:"strings",gain:.06,oct:0,every:8,min:.75}]},loss:{key:"D",bpm:56,beats:3,scale:"harmonic",song:r_,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"strings",gain:.1,oct:-1,every:3},{t:"bass",inst:"softbass",gain:.12,oct:-2,min:.4}]},rainHope:{key:"D",bpm:60,beats:3,song:wi,layers:[{t:"song",inst:"piano",gain:.18,oct:0},{t:"chord",inst:"strings",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.12,oct:1,min:.5}]},together:{key:"A",bpm:138,beats:3,prog:[["I",3],["I",3],["iii",3],["iii",3],["IV",3],["iv",3],["I",3],["V7",3]],layers:[{t:"waltz",inst:"piano",gain:.16,oct:-1},{t:"gen",inst:"piano",gain:.15,oct:1,seed:51,long:!0,min:.2},{t:"chord",inst:"strings",gain:.07,oct:0,every:6,min:.55},{t:"sparkle",inst:"musicbox",gain:.08,oct:2,density:.18,min:.7}]},wedding:{key:"A",bpm:66,beats:3,song:wi,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"strings",gain:.1,oct:-1,every:3},{t:"bass",inst:"softbass",gain:.12,oct:-2},{t:"song",inst:"strings",gain:.08,oct:1,min:.6}]},little:{key:"F",bpm:66,beats:3,song:wi,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.13,oct:1,min:.35},{t:"chord",inst:"strings",gain:.07,oct:0,every:3,min:.6},{t:"bass",inst:"softbass",gain:.12,oct:-2,min:.5}]},littleHum:{key:"F",bpm:60,beats:3,song:wi,layers:[{t:"song",inst:"hum",gain:.2,oct:-1},{t:"song",inst:"musicbox",gain:.12,oct:1},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3}]},play:{key:"F",bpm:100,beats:4,song:o_,layers:[{t:"song",inst:"marimba",gain:.18,oct:1},{t:"arp",inst:"pluck",gain:.12,oct:0,pattern:[0,1,2,1],div:2},{t:"bass",inst:"softbass",gain:.18,oct:-2,fifth:!0},{t:"perc",gain:.1,pat:{shaker:"..x...x...x...x.",kick:"x.......x......."},min:.4},{t:"gen",inst:"flute",gain:.1,oct:1,seed:71,min:.7}]},sofast:{key:"A",bpm:96,beats:4,scale:"minor",prog:[["i",4],["VI",4],["III",4],["VII",4]],layers:[{t:"arp",inst:"piano",gain:.15,oct:0,pattern:[0,1,2,1,3,1,2,1],div:4},{t:"tick",gain:.12},{t:"bass",inst:"softbass",gain:.18,oct:-2,min:.2},{t:"chord",inst:"strings",gain:.09,oct:0,every:4,min:.35},{t:"perc",gain:.12,pat:{kick:"x...x...x...x...",hat:"..x...x...x...x."},min:.55},{t:"gen",inst:"strings",gain:.07,oct:1,seed:91,long:!0,min:.75}]},quiet:{key:"A",bpm:50,beats:4,prog:[["I",8],["IVmaj7",8]],layers:[{t:"chord",inst:"pad",gain:.09,oct:-1,every:8},{t:"sparkle",inst:"piano",gain:.12,oct:0,density:.12}]},winter:{key:"D",bpm:54,beats:3,scale:"minor",prog:[["i",3],["iv",3],["VI",3],["V",3]],layers:[{t:"gen",inst:"piano",gain:.17,oct:0,seed:101,long:!0,sparse:!0},{t:"chord",inst:"pad",gain:.1,oct:-1,every:6},{t:"bass",inst:"softbass",gain:.09,oct:-2,min:.5}]},winterWarm:{key:"D",bpm:62,beats:3,song:wi,layers:[{t:"song",inst:"musicbox",gain:.2,oct:1},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"piano",gain:.14,oct:0,min:.35},{t:"chord",inst:"strings",gain:.07,oct:0,every:3,min:.6}]},pipHum:{key:"D",bpm:60,beats:3,song:wi,layers:[{t:"song",inst:"hum",gain:.18,oct:1},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.1,oct:1,min:.5}]},epilogue:{key:"F",bpm:64,beats:3,song:wi,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.13,oct:1,min:.25},{t:"chord",inst:"strings",gain:.09,oct:0,every:3,min:.45},{t:"bass",inst:"softbass",gain:.13,oct:-2,min:.55},{t:"song",inst:"hum",gain:.1,oct:-1,min:.7},{t:"song",inst:"strings",gain:.08,oct:1,min:.85}]}};var a_=n=>440*Math.pow(2,(n-69)/12),$a=class{constructor(){this.ready=!1,this.vol={master:.85,music:.8,sfx:.85,amb:.7},this.voices=[],this.intensity=.4,this.intensityTarget=.4,this.amb={},this.beatLog=[],this.tempoMul=1,this.listeners=new Set;try{let t=JSON.parse(localStorage.getItem("lm.vol")||"null");t&&Object.assign(this.vol,t)}catch{}}init(){if(this.ready){this.ctx.resume?.();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.vol.master;let i=e.createDynamicsCompressor();i.threshold.value=-16,i.ratio.value=3,i.attack.value=.01,i.release.value=.3,this.master.connect(i),i.connect(e.destination),this.musicBus=e.createGain(),this.musicBus.gain.value=this.vol.music,this.musicFilter=e.createBiquadFilter(),this.musicFilter.type="lowpass",this.musicFilter.frequency.value=18e3,this.musicBus.connect(this.musicFilter),this.musicFilter.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.vol.sfx,this.sfxBus.connect(this.master),this.ambBus=e.createGain(),this.ambBus.gain.value=this.vol.amb,this.ambBus.connect(this.master),this.reverb=e.createConvolver(),this.reverb.buffer=this._impulse(3.2,2.6),this.revIn=e.createGain(),this.revIn.gain.value=1;let s=e.createGain();s.gain.value=.55,this.revIn.connect(this.reverb),this.reverb.connect(s),s.connect(this.musicFilter),this.sfxRev=e.createGain(),this.sfxRev.gain.value=.6,this.sfxRev.connect(this.revIn),this.noise=this._noiseBuffer(2,"white"),this.pink=this._noiseBuffer(4,"pink"),this.brown=this._noiseBuffer(4,"brown"),this.ready=!0,this.nextBeatClock=e.currentTime+.1,this.timer=setInterval(()=>this._schedule(),25),this._ambInit()}setVolume(t,e){this.vol[t]=e;try{localStorage.setItem("lm.vol",JSON.stringify(this.vol))}catch{}if(!this.ready)return;({master:this.master,music:this.musicBus,sfx:this.sfxBus,amb:this.ambBus})[t].gain.setTargetAtTime(e,this.ctx.currentTime,.1)}get now(){return this.ready?this.ctx.currentTime:performance.now()/1e3}_impulse(t,e){let i=this.ctx,s=i.sampleRate,r=Math.floor(s*t),o=i.createBuffer(2,r,s);for(let a=0;a<2;a++){let l=o.getChannelData(a);for(let c=0;c<r;c++)l[c]=(Math.random()*2-1)*Math.pow(1-c/r,e)*(c<s*.01?c/(s*.01):1)}return o}_noiseBuffer(t,e){let i=this.ctx,s=Math.floor(i.sampleRate*t),r=i.createBuffer(1,s,i.sampleRate),o=r.getChannelData(0),a=0,l=0,c=0,h=0;for(let u=0;u<s;u++){let f=Math.random()*2-1;e==="white"?o[u]=f:e==="brown"?(a=(a+.02*f)/1.02,o[u]=a*3.5):(l=.99765*l+f*.099046,c=.963*c+f*.2965164,h=.57*h+f*1.0526913,o[u]=(l+c+h+f*.1848)*.18)}return r}note(t,e,i,s,r=.8,o=null){if(!this.ready)return;let a=this.ctx,l=o??this.musicBus,c=a_(e),h=(p,g,d,x,m,v,y)=>{p.gain.setValueAtTime(1e-4,i),p.gain.linearRampToValueAtTime(d,i+g),p.gain.setTargetAtTime(m,i+g,x),p.gain.setTargetAtTime(1e-4,y,v)},u=(p,g,d=0)=>{let x=a.createOscillator();return x.type=p,x.frequency.value=Math.min(g,19e3),x.detune.value=d,x},f=(p,g)=>p.forEach(d=>{d.start(i),d.stop(g)});switch(t){case"musicbox":{let p=a.createGain();p.connect(l);let g=i+Math.max(1.6,s+1.2),d=u("sine",c),x=u("sine",c*4.01),m=u("sine",c*2),v=a.createGain(),y=a.createGain(),_=a.createGain();v.gain.setValueAtTime(1e-4,i),v.gain.exponentialRampToValueAtTime(.45*r,i+.004),v.gain.exponentialRampToValueAtTime(1e-4,g),y.gain.setValueAtTime(1e-4,i),y.gain.exponentialRampToValueAtTime(.09*r,i+.002),y.gain.exponentialRampToValueAtTime(1e-4,i+.18),_.gain.setValueAtTime(1e-4,i),_.gain.exponentialRampToValueAtTime(.1*r,i+.003),_.gain.exponentialRampToValueAtTime(1e-4,i+.7),d.connect(v),x.connect(y),m.connect(_),v.connect(p),y.connect(p),_.connect(p),f([d,x,m],g+.05);break}case"bell":{let p=i+3.5;[[1,.35,3.2],[2.76,.16,1.8],[5.4,.08,.9],[8.93,.04,.45]].forEach(([g,d,x])=>{let m=u("sine",c*g),v=a.createGain();v.gain.setValueAtTime(1e-4,i),v.gain.exponentialRampToValueAtTime(d*r,i+.003),v.gain.exponentialRampToValueAtTime(1e-4,i+x),m.connect(v),v.connect(l),f([m],p)});break}case"piano":{let p=i+s+1.6,g=a.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(900+r*3800,i),g.frequency.setTargetAtTime(500+c*1.2,i+.01,.5);let d=a.createGain();d.gain.setValueAtTime(1e-4,i),d.gain.linearRampToValueAtTime(.32*r,i+.005),d.gain.setTargetAtTime(.12*r,i+.005,.35),d.gain.setTargetAtTime(1e-4,i+s,.35);let x=u("triangle",c),m=u("sine",c*2,3),v=u("triangle",c,-6),y=a.createGain();y.gain.value=.25,x.connect(g),v.connect(g),m.connect(y),y.connect(g),g.connect(d),d.connect(l),f([x,m,v],p);break}case"pad":{let p=i+s+2.5,g=a.createBiquadFilter();g.type="lowpass",g.frequency.value=650+r*500,g.Q.value=.5;let d=a.createGain();h(d,Math.min(1.2,s*.4),.09*r,.8,.07*r,.9,i+s);let x=[u("sawtooth",c,-9),u("sawtooth",c,9),u("triangle",c/2)];x.forEach(m=>m.connect(g)),g.connect(d),d.connect(l),f(x,p);break}case"strings":{let p=i+s+1.8,g=a.createBiquadFilter();g.type="lowpass",g.frequency.value=1400+r*800,g.Q.value=.4;let d=a.createGain();h(d,Math.min(.45,s*.4),.075*r,.5,.06*r,.5,i+s);let x=u("sine",5.2),m=a.createGain();m.gain.value=7,x.connect(m);let v=[u("sawtooth",c,-7),u("sawtooth",c,6),u("sawtooth",c*2,2)];v.forEach(y=>{m.connect(y.detune),y.connect(g)}),g.connect(d),d.connect(l),f([...v,x],p);break}case"marimba":{let p=i+1;[[1,.42,.55],[4,.1,.08],[9.9,.03,.03]].forEach(([g,d,x])=>{let m=u("sine",c*g),v=a.createGain();v.gain.setValueAtTime(1e-4,i),v.gain.exponentialRampToValueAtTime(d*r,i+.003),v.gain.exponentialRampToValueAtTime(1e-4,i+x),m.connect(v),v.connect(l),f([m],p)});break}case"pluck":case"guitar":{let p=i+1.6,g=a.createBiquadFilter();g.type="lowpass",g.Q.value=t==="guitar"?2:1,g.frequency.setValueAtTime(t==="guitar"?3200:2400,i),g.frequency.exponentialRampToValueAtTime(400,i+.35);let d=a.createGain();d.gain.setValueAtTime(1e-4,i),d.gain.exponentialRampToValueAtTime(.26*r,i+.004),d.gain.exponentialRampToValueAtTime(1e-4,i+(t==="guitar"?1.4:.7));let x=[u("sawtooth",c),u("triangle",c*2,4)];x.forEach(m=>m.connect(g)),g.connect(d),d.connect(l),f(x,p);break}case"softbass":{let p=i+s+.6,g=a.createBiquadFilter();g.type="lowpass",g.frequency.value=380;let d=a.createGain();h(d,.02,.45*r,.3,.25*r,.15,i+s*.9);let x=[u("sine",c),u("triangle",c,4)];x.forEach(m=>m.connect(g)),g.connect(d),d.connect(l),f(x,p);break}case"flute":{let p=i+s+.6,g=a.createGain();h(g,.06,.16*r,.2,.12*r,.12,i+s*.95);let d=u("sine",c),x=u("triangle",c*2),m=a.createGain();m.gain.value=.08;let v=u("sine",5),y=a.createGain();y.gain.setValueAtTime(0,i),y.gain.linearRampToValueAtTime(9,i+.4),v.connect(y),y.connect(d.detune),y.connect(x.detune),d.connect(g),x.connect(m),m.connect(g),g.connect(l),f([d,x,v],p);break}case"whistle":{let p=i+s+.5,g=a.createGain();h(g,.05,.14*r,.2,.11*r,.1,i+s*.9);let d=u("sine",c*2);d.frequency.setValueAtTime(c*2*.97,i),d.frequency.exponentialRampToValueAtTime(c*2,i+.06);let x=u("sine",6),m=a.createGain();m.gain.value=14,x.connect(m),m.connect(d.detune);let v=a.createBufferSource();v.buffer=this.noise;let y=a.createBiquadFilter();y.type="bandpass",y.frequency.value=c*2,y.Q.value=12;let _=a.createGain();_.gain.value=.25*r,v.connect(y),y.connect(_),_.connect(g),d.connect(g),g.connect(l),f([d,x,v],p);break}case"hum":{let p=i+s+.9,g=[u("sawtooth",c,-4),u("sawtooth",c,5)],d=u("sine",4.8),x=a.createGain();x.gain.setValueAtTime(0,i),x.gain.linearRampToValueAtTime(12,i+.5),d.connect(x);let m=a.createGain();m.gain.value=.5,g.forEach(A=>{x.connect(A.detune),A.connect(m)});let v=a.createBiquadFilter();v.type="bandpass",v.frequency.value=320,v.Q.value=3;let y=a.createBiquadFilter();y.type="bandpass",y.frequency.value=800,y.Q.value=5;let _=a.createBiquadFilter();_.type="lowpass",_.frequency.value=1400;let I=a.createGain();I.gain.value=.35,m.connect(v),m.connect(y),y.connect(I);let M=a.createGain();h(M,.18,.55*r,.4,.45*r,.25,i+s*.95),v.connect(_),I.connect(_),_.connect(M),M.connect(l),f([...g,d],p);break}default:break}}drum(t,e,i=1,s=null){if(!this.ready)return;let r=this.ctx,o=s??this.musicBus,a=(l,c,h,u,f,p)=>{let g=r.createBufferSource();g.buffer=this.noise;let d=r.createBiquadFilter();d.type=l,d.frequency.value=c,d.Q.value=h;let x=r.createGain();x.gain.setValueAtTime(1e-4,e),x.gain.exponentialRampToValueAtTime(p*i,e+u),x.gain.exponentialRampToValueAtTime(1e-4,e+u+f),g.connect(d),d.connect(x),x.connect(o),g.start(e,Math.random()*1.5),g.stop(e+u+f+.05)};switch(t){case"kick":{let l=r.createOscillator();l.frequency.setValueAtTime(130,e),l.frequency.exponentialRampToValueAtTime(42,e+.14);let c=r.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(.7*i,e+.004),c.gain.exponentialRampToValueAtTime(1e-4,e+.3),l.connect(c),c.connect(o),l.start(e),l.stop(e+.35);break}case"hat":a("highpass",7500,.7,.002,.045,.18);break;case"shaker":a("bandpass",5200,1.2,.012,.07,.22);break;case"brush":a("bandpass",2400,.6,.006,.16,.16);break;case"clap":for(let l=0;l<3;l++)a("bandpass",1500,.8,.002,.05,.25*(1-l*.2));break;case"tick":{let l=r.createOscillator();l.type="square",l.frequency.value=2600;let c=r.createBiquadFilter();c.type="bandpass",c.frequency.value=3e3,c.Q.value=4;let h=r.createGain();h.gain.setValueAtTime(1e-4,e),h.gain.exponentialRampToValueAtTime(.12*i,e+.001),h.gain.exponentialRampToValueAtTime(1e-4,e+.025),l.connect(c),c.connect(h),h.connect(o),l.start(e),l.stop(e+.04);break}case"tock":{let l=r.createOscillator();l.type="square",l.frequency.value=1700;let c=r.createBiquadFilter();c.type="bandpass",c.frequency.value=1900,c.Q.value=4;let h=r.createGain();h.gain.setValueAtTime(1e-4,e),h.gain.exponentialRampToValueAtTime(.12*i,e+.001),h.gain.exponentialRampToValueAtTime(1e-4,e+.03),l.connect(c),c.connect(h),h.connect(o),l.start(e),l.stop(e+.05);break}default:break}}music(t,{fade:e=3,intensity:i=null,immediate:s=!1}={}){if(i!==null&&this.setIntensity(i,.01),!this.ready){this.pendingProfile=t;return}let r=this.voices[this.voices.length-1];if(r&&r.name===t&&!r.stopping)return;let o=Df[t];if(!o){console.warn("no profile",t);return}let a=this.ctx.currentTime,l=a+.08;r&&!r.stopping&&!s&&(l=Math.min(r.nextBarTime(),a+2.5));for(let h of this.voices)h.stopping||h.stop(l,e);let c=new ru(this,t,o,l);this.voices.push(c)}stopMusic(t=3){if(!this.ready)return;let e=this.ctx.currentTime;for(let i of this.voices)i.stopping||i.stop(e,t)}setIntensity(t,e=2){this.intensityTarget=jt(t,0,1),this.intensityRate=1/Math.max(.01,e)}setTempo(t,e=2){this.tempoTarget=t,this.tempoRate=1/Math.max(.01,e)}muffle(t=1,e=1.5){if(!this.ready)return;let i=18e3*Math.pow(400/18e3,jt(t,0,1));this.musicFilter.frequency.setTargetAtTime(i,this.ctx.currentTime,e/3)}duck(t=.5,e=.5){this.ready&&this.musicBus.gain.setTargetAtTime(this.vol.music*t,this.ctx.currentTime,e/3)}currentVoice(){return this.voices.filter(t=>!t.stopping).slice(-1)[0]??null}currentKey(){let t=this.currentVoice();return t?{tonic:t.tonic,scale:t.scale}:{tonic:nu.F,scale:Za.major}}beatInfo(){let t=this.now,e=this.currentVoice();if(!this.ready||!e){let a=.8571428571428571,l=t/a;return{dur:a,phase:l%1,beat:Math.floor(l),barBeat:Math.floor(l)%3,beats:3,nextTime:(Math.floor(l)+1)*a,lastTime:Math.floor(l)*a,now:t}}let i=e.beatLog,s=null,r=null;for(let a=i.length-1;a>=0;a--)if(i[a].time<=t){s=i[a],r=i[a+1]??null;break}if(!s){let a=e.beatDur();return{dur:a,phase:0,beat:0,barBeat:0,beats:e.p.beats,nextTime:i[0]?.time??t+a,lastTime:t-a,now:t}}let o=r?r.time-s.time:e.beatDur();return{dur:o,phase:jt((t-s.time)/o,0,1),beat:s.n,barBeat:s.beat,beats:e.p.beats,nextTime:r?r.time:s.time+o,lastTime:s.time,now:t}}onBeat(t){return this.listeners.add(t),()=>this.listeners.delete(t)}_schedule(){if(!this.ready)return;let t=this.ctx,e=t.currentTime,i=.15,s=.025;if(this.intensity!==this.intensityTarget){let o=this.intensityTarget-this.intensity,a=(this.intensityRate??.5)*s;this.intensity=Math.abs(o)<a?this.intensityTarget:this.intensity+Math.sign(o)*a}if(this.tempoTarget!==void 0&&this.tempoMul!==this.tempoTarget){let o=this.tempoTarget-this.tempoMul,a=(this.tempoRate??.5)*s;this.tempoMul=Math.abs(o)<a?this.tempoTarget:this.tempoMul+Math.sign(o)*a}for(let o of this.voices)o.schedule(e,i);this.voices=this.voices.filter(o=>!(o.stopping&&e>o.stopEnd+.5));let r=this.currentVoice();if(r){for(;r.beatLog.length&&r.beatLog[0].time<e-8;)r.beatLog.shift();for(let o of r.beatLog)!o.fired&&o.time<=e&&(o.fired=!0,this.listeners.forEach(a=>a(o)))}this._ambTick(e)}_ambInit(){let t=this.ctx,e=(i,s,r,o)=>{let a=t.createBufferSource();a.buffer=i,a.loop=!0;let l=t.createBiquadFilter();l.type=s,l.frequency.value=r,l.Q.value=o;let c=t.createGain();return c.gain.value=0,a.connect(l),l.connect(c),c.connect(this.ambBus),a.start(),{s:a,f:l,g:c}};this.ambNodes={wind:e(this.brown,"bandpass",500,.6),rain:e(this.pink,"highpass",900,.3),waves:e(this.brown,"lowpass",700,.5),room:e(this.brown,"lowpass",220,.5),fire:e(this.brown,"lowpass",400,.7),city:e(this.brown,"lowpass",300,.4)},this.ambLevels={wind:0,rain:0,waves:0,room:0,fire:0,city:0,birds:0,crickets:0,heartbeat:0,crowd:0,clock:0},this.nextBird=0,this.nextCrackle=0,this.nextHeart=0,this.nextCricket=0,this.nextCrowd=0,this.nextClock=0}ambience(t={},e=3){if(this.ambTarget={wind:0,rain:0,waves:0,room:0,fire:0,city:0,birds:0,crickets:0,heartbeat:0,crowd:0,clock:0,...t},!this.ready)return;let i=this.ctx.currentTime;for(let s in this.ambNodes){let r={wind:.35,rain:.22,waves:.4,room:.25,fire:.3,city:.25}[s];this.ambNodes[s].g.gain.setTargetAtTime((this.ambTarget[s]||0)*r,i,e/3)}Object.assign(this.ambLevels,this.ambTarget)}_ambTick(t){if(!this.ambLevels)return;let e=this.ambLevels;this.ambTarget&&!this._ambApplied&&(this._ambApplied=!0,this.ambience(this.ambTarget,2)),e.wind>0&&this.ambNodes.wind.f.frequency.setTargetAtTime(400+Math.sin(t*.3)*200+Math.sin(t*.71)*120,t,.5),e.waves>0&&this.ambNodes.waves.g.gain.setTargetAtTime(e.waves*.4*(.55+.45*Math.sin(t*.55)),t,.4),e.birds>0&&t>this.nextBird&&(this._bird(t+.05,e.birds),this.nextBird=t+.6+Math.random()*3.5/e.birds),e.fire>0&&t>this.nextCrackle&&(this._crackle(t+.02,e.fire),this.nextCrackle=t+.05+Math.random()*.4),e.crickets>0&&t>this.nextCricket&&(this._cricket(t+.05,e.crickets),this.nextCricket=t+.35+Math.random()*.9),e.heartbeat>0&&t>this.nextHeart&&(this._heart(t+.05,e.heartbeat),this.nextHeart=t+.95),e.crowd>0&&t>this.nextCrowd&&(this._murmur(t+.05,e.crowd),this.nextCrowd=t+.15+Math.random()*.4),e.clock>0&&t>this.nextClock&&(this.drum(this._tk=this._tk?"tock":"tick",t+.05,e.clock,this.ambBus),this.nextClock=t+1)}_bird(t,e){let i=this.ctx,s=2+Math.floor(Math.random()*4),r=2200+Math.random()*1800,o=i.createStereoPanner?i.createStereoPanner():null;o&&(o.pan.value=Math.random()*1.6-.8,o.connect(this.ambBus));for(let a=0;a<s;a++){let l=i.createOscillator();l.type="sine";let c=i.createGain(),h=t+a*(.09+Math.random()*.06);l.frequency.setValueAtTime(r*(.9+Math.random()*.3),h),l.frequency.exponentialRampToValueAtTime(r*(1.1+Math.random()*.5),h+.06),c.gain.setValueAtTime(1e-4,h),c.gain.exponentialRampToValueAtTime(.03*e,h+.01),c.gain.exponentialRampToValueAtTime(1e-4,h+.08),l.connect(c),c.connect(o??this.ambBus),l.start(h),l.stop(h+.1)}}_crackle(t,e){let i=this.ctx,s=i.createBufferSource();s.buffer=this.noise;let r=i.createBiquadFilter();r.type="bandpass",r.frequency.value=1500+Math.random()*2500,r.Q.value=2;let o=i.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.12*e*Math.random(),t+.002),o.gain.exponentialRampToValueAtTime(1e-4,t+.02),s.connect(r),r.connect(o),o.connect(this.ambBus),s.start(t,Math.random()),s.stop(t+.03)}_cricket(t,e){let i=this.ctx,s=4300+Math.random()*600;for(let r=0;r<3;r++){let o=i.createOscillator();o.frequency.value=s;let a=i.createGain(),l=t+r*.045;a.gain.setValueAtTime(1e-4,l),a.gain.exponentialRampToValueAtTime(.012*e,l+.006),a.gain.exponentialRampToValueAtTime(1e-4,l+.03),o.connect(a),a.connect(this.ambBus),o.start(l),o.stop(l+.04)}}_heart(t,e){let i=this.ctx;for(let[s,r]of[[0,1],[.24,.7]]){let o=i.createOscillator();o.frequency.setValueAtTime(70,t+s),o.frequency.exponentialRampToValueAtTime(38,t+s+.12);let a=i.createGain();a.gain.setValueAtTime(1e-4,t+s),a.gain.exponentialRampToValueAtTime(.35*e*r,t+s+.01),a.gain.exponentialRampToValueAtTime(1e-4,t+s+.2),o.connect(a),a.connect(this.ambBus),o.start(t+s),o.stop(t+s+.25)}}_murmur(t,e){let i=this.ctx,s=i.createOscillator();s.type="sawtooth";let r=140+Math.random()*120;s.frequency.setValueAtTime(r,t),s.frequency.linearRampToValueAtTime(r*(.85+Math.random()*.3),t+.25);let o=i.createBiquadFilter();o.type="bandpass",o.frequency.value=500+Math.random()*600,o.Q.value=3;let a=i.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.01*e,t+.05),a.gain.exponentialRampToValueAtTime(1e-4,t+.3),s.connect(o),o.connect(a),a.connect(this.ambBus),s.start(t),s.stop(t+.35)}sfx(t,e={}){if(!this.ready)return;let i=this.ctx,s=i.currentTime+(e.delay??0),r=this.sfxBus,o=e.vol??1,a=(u,f,p,g,d,x,m,v=r)=>{let y=i.createBufferSource();y.buffer=this.noise;let _=i.createBiquadFilter();_.type=u,_.Q.value=g,_.frequency.setValueAtTime(f,s),p&&_.frequency.exponentialRampToValueAtTime(p,s+d+x);let I=i.createGain();return I.gain.setValueAtTime(1e-4,s),I.gain.exponentialRampToValueAtTime(m*o,s+d),I.gain.exponentialRampToValueAtTime(1e-4,s+d+x),y.connect(_),_.connect(I),I.connect(v),y.start(s,Math.random()),y.stop(s+d+x+.05),I},l=(u,f,p,g,d,x,m=s,v=r)=>{let y=i.createOscillator();y.type=u,y.frequency.setValueAtTime(f,m),p&&y.frequency.exponentialRampToValueAtTime(p,m+g+d);let _=i.createGain();_.gain.setValueAtTime(1e-4,m),_.gain.exponentialRampToValueAtTime(x*o,m+g),_.gain.exponentialRampToValueAtTime(1e-4,m+g+d),y.connect(_),_.connect(v),y.start(m),y.stop(m+g+d+.05)},c=this.currentKey(),h=(u,f=0)=>c.tonic+eo(u,c.scale)+f*12;switch(t){case"step":{let u=e.surface??"grass";u==="wood"?a("bandpass",900,null,1.5,.003,.05,.05):u==="snow"?a("highpass",2500,null,.5,.01,.09,.05):u==="stone"?a("bandpass",2200,null,1,.002,.03,.04):a("lowpass",1400,null,.7,.008,.07,.035);break}case"chime":[1,3,5].forEach((u,f)=>this.note("bell",h(u,2),s+f*.09,.5,.5*o,this.sfxBus));break;case"keep":[1,3,5,8,10].forEach((u,f)=>this.note("musicbox",h(u,1),s+f*.11,.6,.7*o,this.sfxRev)),this.note("bell",h(1,1),s,1,.4*o,this.sfxRev);break;case"lost":[5,3,2].forEach((u,f)=>this.note("musicbox",h(u,1),s+f*.25,.8,.35*o,this.sfxRev));break;case"shutter":a("highpass",3e3,null,.5,.001,.02,.3),a("bandpass",1200,null,1,.001,.04,.2);break;case"pop":l("sine",500,1100,.005,.08,.15);break;case"tap":l("sine",900+Math.random()*200,null,.003,.06,.08);break;case"good":this.note("musicbox",h(e.deg??5,1),s,.4,.6*o,this.sfxBus);break;case"soft":this.note("bell",h(e.deg??1,1),s,.6,.35*o,this.sfxRev);break;case"miss":l("sine",300,240,.01,.12,.05);break;case"giggle":{let u=4+Math.floor(Math.random()*3),f=(e.pitch??1)*(520+Math.random()*120);for(let p=0;p<u;p++){let g=s+p*.11;l("triangle",f*(1.3-p*.05),f*(1.1-p*.05),.01,.07,.08,g),l("sine",f*2.6,f*2.2,.01,.05,.03,g)}break}case"coo":case"babble":{let u=t==="coo"?2:3+Math.floor(Math.random()*3);for(let f=0;f<u;f++){let p=s+f*.2,g=(e.pitch??1)*(380+Math.random()*140),d=i.createOscillator();d.type="sawtooth",d.frequency.setValueAtTime(g,p),d.frequency.linearRampToValueAtTime(g*(t==="coo"?1.25:.9),p+.16);let x=i.createBiquadFilter();x.type="bandpass",x.frequency.value=t==="coo"?450:800,x.Q.value=4;let m=i.createGain();m.gain.setValueAtTime(1e-4,p),m.gain.exponentialRampToValueAtTime(.12*o,p+.03),m.gain.exponentialRampToValueAtTime(1e-4,p+.18),d.connect(x),x.connect(m),m.connect(r),d.start(p),d.stop(p+.2)}break}case"cry":{for(let u=0;u<3;u++){let f=s+u*.55,p=i.createOscillator();p.type="sawtooth",p.frequency.setValueAtTime(420,f),p.frequency.linearRampToValueAtTime(520,f+.15),p.frequency.linearRampToValueAtTime(380,f+.45);let g=i.createBiquadFilter();g.type="bandpass",g.frequency.value=1100,g.Q.value=3;let d=i.createGain();d.gain.setValueAtTime(1e-4,f),d.gain.exponentialRampToValueAtTime(.09*o,f+.05),d.gain.exponentialRampToValueAtTime(1e-4,f+.48),p.connect(g),g.connect(d),d.connect(r),p.start(f),p.stop(f+.5)}break}case"woof":{for(let u=0;u<(e.n??1);u++){let f=s+u*.25;l("sawtooth",320,170,.01,.13,.12,f)}a("bandpass",700,400,2,.01,.12,.1);break}case"splash":a("lowpass",3500,400,.6,.02,.5,.35);break;case"whoosh":a("bandpass",300,1800,1.2,.25,.5,.2);break;case"blow":a("lowpass",1500,600,.5,.15,.6,.15);break;case"rustle":a("bandpass",3e3,1500,.8,.05,.25,.08);break;case"thud":l("sine",120,50,.005,.2,.3),a("lowpass",500,null,1,.003,.1,.15);break;case"door":l("sine",90,60,.01,.25,.25),a("lowpass",800,null,1,.01,.15,.08);break;case"ping":l("sine",1320,null,.005,.12,.12),l("sine",1760,null,.005,.2,.1,s+.1);break;case"phone":for(let u=0;u<2;u++){let f=s+u*.5;l("sine",440,null,.01,.38,.06,f),l("sine",480,null,.01,.38,.06,f)}break;case"bikebell":for(let u=0;u<2;u++){let f=s+u*.16;l("sine",3100,null,.002,.4,.08,f),l("sine",4250,null,.002,.25,.05,f)}break;case"heart":this._heart(s,o);break;case"kiss":l("sine",1600,800,.003,.05,.05);break;case"creak":{let u=i.createOscillator();u.type="sawtooth",u.frequency.setValueAtTime(110,s),u.frequency.linearRampToValueAtTime(140,s+.35);let f=i.createBiquadFilter();f.type="bandpass",f.frequency.value=900,f.Q.value=8;let p=i.createGain();p.gain.setValueAtTime(1e-4,s),p.gain.exponentialRampToValueAtTime(.03*o,s+.1),p.gain.exponentialRampToValueAtTime(1e-4,s+.4),u.connect(f),f.connect(p),p.connect(r),u.start(s),u.stop(s+.45);break}case"applause":for(let u=0;u<40;u++){let f=i.createGain(),p=s+Math.random()*2.5,g=i.createBufferSource();g.buffer=this.noise;let d=i.createBiquadFilter();d.type="bandpass",d.frequency.value=1200+Math.random()*1500,d.Q.value=1,f.gain.setValueAtTime(1e-4,p),f.gain.exponentialRampToValueAtTime(.06*o,p+.003),f.gain.exponentialRampToValueAtTime(1e-4,p+.05),g.connect(d),d.connect(f),f.connect(r),g.start(p,Math.random()),g.stop(p+.06)}break;case"engine":{let u=i.createOscillator();u.type="sawtooth",u.frequency.setValueAtTime(45,s),u.frequency.linearRampToValueAtTime(70,s+1.5),u.frequency.linearRampToValueAtTime(55,s+3.5);let f=i.createBiquadFilter();f.type="lowpass",f.frequency.value=300;let p=i.createGain();p.gain.setValueAtTime(1e-4,s),p.gain.exponentialRampToValueAtTime(.12*o,s+.3),p.gain.setTargetAtTime(1e-4,s+2.5,.8),u.connect(f),f.connect(p),p.connect(r),u.start(s),u.stop(s+5);break}case"yay":{let u=i.createOscillator();u.type="sawtooth",u.frequency.setValueAtTime(380*(e.pitch??1),s),u.frequency.linearRampToValueAtTime(620*(e.pitch??1),s+.25);let f=i.createBiquadFilter();f.type="bandpass",f.frequency.value=900,f.Q.value=3;let p=i.createGain();p.gain.setValueAtTime(1e-4,s),p.gain.exponentialRampToValueAtTime(.1*o,s+.04),p.gain.exponentialRampToValueAtTime(1e-4,s+.45),u.connect(f),f.connect(p),p.connect(r),u.start(s),u.stop(s+.5);break}case"sparkle":for(let u=0;u<6;u++)this.note("musicbox",h([1,3,5,8,10,12][Math.floor(Math.random()*6)],2),s+u*.07+Math.random()*.05,.3,.3*o,this.sfxRev);break;case"tick":this.drum("tick",s,o,r);break;case"tock":this.drum("tock",s,o,r);break;case"bloop":l("sine",300,600,.01,.12,.08);break;case"fwip":a("bandpass",2e3,4e3,2,.01,.08,.1);break;case"lantern":a("bandpass",400,900,1,.3,1.2,.08),this.note("bell",h(5,1),s+.2,1,.25*o,this.sfxRev);break;case"note":this.note(e.inst??"musicbox",h(e.deg??1,e.oct??1),s,e.dur??.5,(e.vel??.7)*o,this.sfxRev);break;case"thunder":a("lowpass",300,60,.6,.1,2.5,.4);break;default:break}}},ru=class{constructor(t,e,i,s){this.e=t,this.name=e,this.p=i;let r=t.ctx;this.out=r.createGain(),this.out.gain.setValueAtTime(1e-4,r.currentTime),this.out.gain.setTargetAtTime(1,s,.4),this.out.connect(t.musicBus),this.send=r.createGain(),this.send.gain.value=.55,this.out.connect(this.send),this.send.connect(t.revIn),this.tonic=nu[i.key]??65,this.minor=i.scale==="minor"||i.scale==="harmonic",this.scale=Za[i.scale??"major"],this.prog=i.song?i.song.map(o=>[o.c,i.beats]):i.prog,this.stepTime=s,this.step=0,this.bar=0,this.beatLog=[],this.beatN=0,this.layers=i.layers.map((o,a)=>{let l=r.createGain();return l.gain.value=this._layerLevel(o),l.connect(this.out),{...o,g:l,rng:we((o.seed??3)+a*17),cur:[]}}),this.stopping=!1}beatDur(){return 60/(this.p.bpm*this.e.tempoMul)}stepDur(){return this.beatDur()/4}nextBarTime(){let t=this.p.beats*4,e=this.step%t;return this.stepTime+(t-e)%t*this.stepDur()}stop(t,e){this.stopping=!0,this.stopEnd=t+e;let i=this.out.gain;i.cancelScheduledValues(t),i.setTargetAtTime(1e-4,t,e/3)}_layerLevel(t){let e=this.e.intensity,i=t.min??0,s=t.max??1.01,r=jt((e-i)/.15+0,0,1)*jt((s-e)/.15,0,1);return(t.gain??.2)*r}chordAt(t){let e=0;for(let[,r]of this.prog)e+=r;let i=t*this.p.beats%e,s=0;for(let[r,o]of this.prog){if(i<s+o)return su(r,this.minor);s+=o}return su(this.prog[0][0],this.minor)}chordTones(t,e,i=4){let s=this.tonic+t.root+e*12,r=[];for(let o=0;r.length<i;o++)r.push(s+t.iv[o%t.iv.length]+Math.floor(o/t.iv.length)*12);return r}schedule(t,e){if(!(this.stopping&&t>this.stopEnd)){for(let i of this.layers)i.g.gain.setTargetAtTime(this._layerLevel(i),t,.4);for(;this.stepTime<t+e;)this._playStep(this.stepTime),this.stepTime+=this.stepDur(),this.step++}}_playStep(t){let e=this.p,i=e.beats*4,s=this.step%i,r=Math.floor(this.step/i);s%4===0&&this.beatLog.push({time:t,beat:s/4,bar:r,n:this.beatN++});let o=this.chordAt(r),a=this.beatDur();for(let l of this.layers){if(l.g.gain.value<5e-4&&this._layerLevel(l)<5e-4)continue;let c=l.oct??0;switch(l.t){case"song":{let h=e.song??l.song;if(!h)break;let u=h[r%h.length],f=0;for(let[p,g]of u.n){if(Math.round(f*4)===s){let d=this.tonic+eo(p,this.scale)+12*c;this.e.note(l.inst,d,t,g*a*.95,.75+.15*Math.random(),l.g)}f+=g}break}case"chord":{let h=(l.every??e.beats)*4;this.step%h===0&&this.chordTones(o,c,o.iv.length).forEach(u=>this.e.note(l.inst,u,t,h/4*a,.7,l.g));break}case"arp":{let h=l.div??2,u=4/h;if(s%u===0){let f=Math.floor(s/u)%l.pattern.length,p=this.chordTones(o,c,6);this.e.note(l.inst,p[l.pattern[f]],t,a/h*1.5,.55+(f===0?.2:0),l.g)}break}case"bass":{let h=this.tonic+o.root+12*c;s===0&&this.e.note(l.inst,h,t,a*(l.fifth?e.beats/2:e.beats)*.9,.8,l.g),l.fifth&&s===i/2&&this.e.note(l.inst,h+7,t,a*e.beats/2*.9,.65,l.g);break}case"waltz":{let h=this.tonic+o.root+12*c;s===0&&this.e.note(l.inst,h-12,t,a*.9,.75,l.g),(s===4||s===8)&&this.chordTones(o,c+1,3).forEach(u=>this.e.note(l.inst,u,t,a*.5,.45,l.g));break}case"strum":{if(l.rhythm.includes(s)){let h=this.chordTones(o,c,5),u=s/2%2===0;h.forEach((f,p)=>this.e.note(l.inst,f,t+(u?p:h.length-p)*.012,a*.6,(s===0?.8:.5)*(.85+.15*Math.random()),l.g))}break}case"gen":{s===0&&(l.cur=this._genBar(l,r,o));for(let h of l.cur)h.s===s&&this.e.note(l.inst,h.m,t,h.d*a/4,h.v,l.g);break}case"perc":{let h=l.pat,u=this.step%16;for(let f in h)h[f][u%h[f].length]==="x"&&this.e.drum(f,t,(l.gain??.15)*5,l.g);break}case"tick":s%4===0&&this.e.drum(s/4%2?"tock":"tick",t,1,l.g);break;case"sparkle":{if(s%2===0&&l.rng()<(l.density??.2)*.5){let h=this.chordTones(o,c,6);this.e.note(l.inst,h[Math.floor(l.rng()*h.length)],t,a,.4+l.rng()*.3,l.g)}break}default:break}}}_genBar(t,e,i){let s=this.p,r=s.beats*4,o=Math.floor(e/4),a=e%4,l=a===3?e:a+o%2*4,c=we((t.seed??1)*1e3+l*31+7),h=t.long?[[4,4,8],[8,8],[6,2,8],[4,4,4,4],[12,4]]:[[4,4,4,4],[6,2,4,4],[8,4,4],[4,4,8],[2,2,4,8],[12,4],[4,2,2,8]],u=t.long?[[8,4],[12],[4,8],[6,6]]:[[4,4,4],[8,4],[4,8],[6,2,4],[12]],f=c.pick(s.beats===3?u:h);t.sparse&&c()<.35&&(f=[r]);let p=[],g=0,d=this.tonic+12*(t.oct??0),x=i.iv.map(v=>(i.root+v)%12),m=3+Math.floor(c()*4);for(let v=0;v<f.length;v++){if(t.sparse&&v>0&&c()<.4){g+=f[v];continue}if(v===0||c()<.4){let y=m,_=99;for(let I=m-3;I<=m+3;I++){let M=(eo(I,this.scale)%12+12)%12;x.includes(M)&&Math.abs(I-m)<_&&(_=Math.abs(I-m),y=I)}m=y}else m+=c.pick([-1,1,-1,1,2,-2]);m=jt(m,1,10),p.push({s:g,m:d+eo(m,this.scale),d:f[v]*.95,v:.6+c()*.25}),g+=f[v]}return p}};Be();var ou="lm.save.v1",Ja="lm.img.",au=["Prologue","I \xB7 Tiny","II \xB7 Wonder","III \xB7 Running","IV \xB7 Together","V \xB7 Little Ones","VI \xB7 So Fast","VII \xB7 Winter","VIII \xB7 Little Moments"],io=class{constructor(){this.registry=new Map,this.kept=new Map,this.lost=new Set,this.el=document.querySelector("#album"),this.open=!1,this.tab=1}register(t,e,i,s,r=null){this.registry.has(t)||this.registry.set(t,{id:t,chapter:e,caption:i,scene:s,alt:r})}isOtherLife(t){let e=this.registry.get(t);if(!e?.alt||this.kept.has(t))return!1;for(let[i,s]of this.registry)if(i!==t&&s.alt===e.alt&&(this.kept.has(i)||this.lived?.has(i)))return!0;return!1}chapterComplete(t){let e=[...this.registry.values()].filter(i=>i.chapter===t&&!this.isOtherLife(i.id));return e.length>0&&e.every(i=>this.kept.has(i.id))}count(){return this.kept.size}has(t){return this.kept.has(t)}keep(t,e,i,s){this.kept.set(t,{caption:e,chapter:i,img:s}),this.lost.delete(t);try{s&&localStorage.setItem(Ja+t,s)}catch{}}lose(t){!this.kept.has(t)&&!this.isOtherLife(t)&&(this.lost.add(t),w.achieve?.("passed"))}keptIn(t){return[...this.kept.entries()].filter(([,e])=>e.chapter===t)}save(t){let e={v:1,sceneIndex:t,date:Date.now(),state:w.state,kept:Object.fromEntries([...this.kept.entries()].map(([i,s])=>[i,{caption:s.caption,chapter:s.chapter}])),lost:[...this.lost]};try{localStorage.setItem(ou,JSON.stringify(e))}catch(i){console.warn("save failed",i)}}static readSave(){try{return JSON.parse(localStorage.getItem(ou)||"null")}catch{return null}}load(t){this.kept.clear(),this.lost.clear();for(let[e,i]of Object.entries(t.kept||{})){let s=null;try{s=localStorage.getItem(Ja+e)}catch{}this.kept.set(e,{...i,img:s})}(t.lost||[]).forEach(e=>this.lost.add(e)),Object.assign(w.state,t.state||{})}forgetFrom(t){for(let[e,i]of this.registry)if(t.includes(i.scene)){this.kept.delete(e),this.lost.delete(e);try{localStorage.removeItem(Ja+e)}catch{}}}wipe(){try{let t=[];for(let e=0;e<localStorage.length;e++){let i=localStorage.key(e);i&&(i.startsWith(Ja)||i===ou)&&t.push(i)}t.forEach(e=>localStorage.removeItem(e))}catch{}this.kept.clear(),this.lost.clear()}show(t=null,{reachedChapter:e=8,onClose:i=null}={}){this.open=!0,this.onClose=i,t!==null&&(this.tab=t),this.reached=e,this.render(),this.el.classList.remove("hidden")}hide(){this.open=!1,this.el.classList.add("hidden"),this.el.innerHTML="",this.onClose&&this.onClose()}render(){let t=this.el;t.innerHTML="";let e=mt("div","book"),i=mt("div","head");i.appendChild(mt("h2","","Little Moments"));let s=mt("button","close","Close \u2715");s.addEventListener("click",()=>this.hide()),i.appendChild(s),e.appendChild(i);let r=mt("div","tabs");for(let h=1;h<=Math.min(8,this.reached);h++){let u=this.keptIn(h).length,f=mt("button",h===this.tab?"on":"",`${au[h]} <small>(${u})</small>`);f.addEventListener("click",()=>{this.tab=h,this.render()}),r.appendChild(f)}e.appendChild(r);let o=mt("div","page"),a=[...this.registry.values()].filter(h=>h.chapter===this.tab),l=new Set(a.map(h=>h.id));for(let[h,u]of this.kept)u.chapter===this.tab&&!l.has(h)&&a.push({id:h,chapter:u.chapter,caption:u.caption});let c=0;for(let h of a.filter(u=>!this.isOtherLife(u.id))){let u=this.kept.get(h.id),f=mt("div","polaroid"+(u?"":" empty"));f.style.setProperty("--r",(c++*37%9-4)*.8+"deg"),u?f.innerHTML=(u.img?`<img class="ph" src="${u.img}">`:'<div class="ph"></div>')+`<div class="cap">${De(u.caption)}</div>`:f.innerHTML=`<div class="ph"></div><div class="cap">${this.lost.has(h.id)?"a moment that passed":"not yet lived"}</div>`,o.appendChild(f)}a.length||o.appendChild(mt("div","note","Nothing here yet.")),e.appendChild(o),t.appendChild(e)}};Ie();Be();Ie();Be();Mi();Ie();Be();Mi();var h_={petals:{color:[16236751,16505058,15968445],size:.09,fall:.35,drift:.6,spin:2,shape:"flake",count:120},leaves:{color:[14916155,13787198,15646794,13072938],size:.12,fall:.6,drift:.8,spin:3,shape:"flake",count:110},snow:{color:[16777215,15922943],size:.06,fall:.55,drift:.35,spin:1,shape:"flake",count:260},rain:{color:[12374246],size:.02,fall:9,drift:.05,spin:0,shape:"streak",count:420},fireflies:{color:[16187290,14679930],size:.35,fall:0,drift:.35,spin:0,shape:"glow",count:40},motes:{color:[16774360],size:.14,fall:-.02,drift:.12,spin:0,shape:"glow",count:60},stars:{color:[16777215,16774352,14214399],size:.3,fall:0,drift:0,spin:0,shape:"glow",count:120},bubbles:{color:[14676735,16179455],size:.28,fall:-.4,drift:.5,spin:0,shape:"glow",count:25},memories:{color:[16771e3,16765152,14215935],size:.5,fall:-.25,drift:.3,spin:0,shape:"glow",count:50}},dl=class{constructor(t,e={}){let i={...h_[t],...e};this.k=i,this.kind=t,this.area=e.area??{w:30,h:12,d:30},this.center=e.center??null,this.y0=e.y0??0;let s=i.count;this.n=s;let r=we(e.seed??7);this.p=new Float32Array(s*3),this.v=new Float32Array(s*3),this.ph=new Float32Array(s);for(let o=0;o<s;o++)this.p[o*3]=r.range(-.5,.5)*this.area.w,this.p[o*3+1]=this.y0+r.range(0,1)*this.area.h,this.p[o*3+2]=r.range(-.5,.5)*this.area.d,this.ph[o]=r.range(0,Math.PI*2);if(this.opacity=e.opacity??1,this.target=1,this.fade=1,i.shape==="glow"){let o=new Ce;o.setAttribute("position",new Ve(this.p.slice(),3));let a=new Float32Array(s*3),l=new Pt;for(let c=0;c<s;c++)l.setHex(i.color[c%i.color.length]),a.set([l.r,l.g,l.b],c*3);o.setAttribute("color",new Ve(a,3)),this.mat=new $s({size:i.size,map:Qa(),vertexColors:!0,transparent:!0,opacity:this.opacity,depthWrite:!1,blending:Ai,sizeAttenuation:!0,fog:!1}),this.obj=new zr(o,this.mat),this.geo=o}else{let o=i.shape==="streak"?new ri(.012,.35,.012):new Ye(i.size,i.size*.7);this.mat=new hs({side:Se,flatShading:!0,transparent:!0,opacity:this.opacity,roughness:1,depthWrite:i.shape!=="streak"}),this.obj=new ya(o,this.mat,s);let a=new Pt;for(let l=0;l<s;l++)a.setHex(i.color[l%i.color.length]),this.obj.setColorAt(l,a);this.dummy=new Ne}this.obj.frustumCulled=!1,this.obj.renderOrder=5}setOpacity(t){this.target=t}update(t,e){let i=this.k,s=this.n;this.fade+=(this.target-this.fade)*Math.min(1,t*1.5),this.mat.opacity=this.opacity*this.fade,this.obj.visible=this.mat.opacity>.01;let r=this.center??w.renderer.camTarget,o=this.area;for(let a=0;a<s;a++){let l=a*3,c=this.ph[a];this.p[l]+=Math.sin(e*.7+c)*i.drift*t+(i.wind??0)*t,this.p[l+1]-=i.fall*t*(.7+.6*Math.sin(c)),this.p[l+2]+=Math.cos(e*.6+c*1.3)*i.drift*t,(this.kind==="fireflies"||this.kind==="motes"||this.kind==="memories")&&(this.p[l+1]+=Math.sin(e*1.3+c)*.15*t),this.p[l+1]<this.y0&&(this.p[l+1]+=o.h),this.p[l+1]>this.y0+o.h&&(this.p[l+1]-=o.h);let h=this.p[l],u=this.p[l+2];h<-o.w/2&&(this.p[l]+=o.w),h>o.w/2&&(this.p[l]-=o.w),u<-o.d/2&&(this.p[l+2]+=o.d),u>o.d/2&&(this.p[l+2]-=o.d)}if(this.geo){let a=this.geo.attributes.position;for(let l=0;l<s;l++){let c=1;(this.kind==="fireflies"||this.kind==="stars")&&(c=.5+.5*Math.sin(e*(this.kind==="stars"?1.2:2.5)+this.ph[l]*3)),a.setXYZ(l,r.x+this.p[l*3],this.p[l*3+1]-(1-c)*0,r.z+this.p[l*3+2])}a.needsUpdate=!0,(this.kind==="fireflies"||this.kind==="stars")&&(this.mat.size=i.size*(.85+.15*Math.sin(e*3)))}else{let a=this.dummy;for(let l=0;l<s;l++)a.position.set(r.x+this.p[l*3],this.p[l*3+1],r.z+this.p[l*3+2]),i.spin?a.rotation.set(e*i.spin*.5+this.ph[l],e*i.spin*.3+this.ph[l]*2,this.ph[l]):a.rotation.set(0,0,.12),a.updateMatrix(),this.obj.setMatrixAt(l,a.matrix);this.obj.instanceMatrix.needsUpdate=!0}}dispose(){this.obj.geometry.dispose(),this.mat.dispose()}},fl=class{constructor(t,{color:e=16773312,count:i=40,speed:s=2,life:r=1.6,size:o=.3}={}){this.life=r,this.t=0,this.n=i;let a=new Ce;this.p=new Float32Array(i*3),this.v=new Float32Array(i*3);for(let l=0;l<i;l++){this.p.set([t.x,t.y,t.z],l*3);let c=Math.random()*Math.PI*2,h=Math.random()*Math.PI-Math.PI/4,u=s*(.4+Math.random());this.v.set([Math.cos(c)*Math.cos(h)*u,Math.abs(Math.sin(h))*u+.5,Math.sin(c)*Math.cos(h)*u],l*3)}a.setAttribute("position",new Ve(this.p,3)),this.mat=new $s({size:o,color:e,map:Qa(),transparent:!0,depthWrite:!1,blending:Ai,fog:!1}),this.obj=new zr(a,this.mat),this.obj.frustumCulled=!1,this.geo=a}update(t){this.t+=t;for(let e=0;e<this.n;e++){let i=e*3;this.v[i+1]-=t*.8,this.v[i]*=.985,this.v[i+2]*=.985,this.p[i]+=this.v[i]*t,this.p[i+1]+=this.v[i+1]*t,this.p[i+2]+=this.v[i+2]*t}return this.geo.attributes.position.needsUpdate=!0,this.mat.opacity=Math.max(0,1-this.t/this.life),this.t>=this.life}dispose(){this.geo.dispose(),this.mat.dispose()}};var xs=class{constructor({bounds:t={minX:-9,maxX:9,minZ:-9,maxZ:9},name:e=""}={}){this.name=e,this.root=new ot,this.bounds=t,this.colliders=[],this.characters=new Set,this.hotspots=[],this.updatables=[],this.particles=[],this.bursts=[],this.creatures=[],this.disposed=!1,w.scene.add(this.root)}add(t,e=0,i=0,{ry:s=0,s:r=1,y:o=0,collide:a=!1,parent:l=null}={}){if(t.position.set(e,o,i),t.rotation.y=s,r!==1&&t.scale.setScalar(r),(l??this.root).add(t),a!==!1&&a!==void 0)if(typeof a=="number")this.addCollider({x:e,z:i,r:a*(r||1),obj:t});else{let c=Math.round(s/(Math.PI/2))%2!==0,h=(c?a.d:a.w)*r,u=(c?a.w:a.d)*r;this.addCollider({minX:e-h/2+(a.ox??0),maxX:e+h/2+(a.ox??0),minZ:i-u/2+(a.oz??0),maxZ:i+u/2+(a.oz??0),obj:t})}return this.track(t),t}track(t){t.traverse(e=>{e.userData&&typeof e.userData.update=="function"&&!this.updatables.includes(e)&&this.updatables.push(e)})}addCollider(t){return this.colliders.push(t),t}removeCollider(t){let e=this.colliders.indexOf(t);e>=0&&this.colliders.splice(e,1)}removeCollidersOf(t){this.colliders=this.colliders.filter(e=>e.obj!==t)}remove(t){this.removeCollidersOf(t),t.parent?.remove(t),this.updatables=this.updatables.filter(e=>{let i=e;for(;i;){if(i===t)return!1;i=i.parent}return!0})}addCharacter(t){this.characters.add(t),this.root.add(t.root)}removeCharacter(t){this.characters.delete(t)}particlesOf(t,e){let i=new dl(t,e);return this.particles.push(i),this.root.add(i.obj),i}removeParticles(t){let e=this.particles.indexOf(t);e>=0&&this.particles.splice(e,1),t.obj.parent?.remove(t.obj),t.dispose()}burst(t,e){let i=new fl(t,e);return this.bursts.push(i),this.root.add(i.obj),i}hotspot(t){let e=new wu(this,t);return this.hotspots.push(e),e}getHotspot(t){return this.hotspots.find(e=>e.id===t)}butterflies(t=3,e={x:0,z:0,r:6},i=1){let s=we(i);for(let r=0;r<t;r++){let o=new bu(s.pick([16172101,15921906,10143984,15964848]),e,i+r);this.creatures.push(o),this.root.add(o.obj)}}birds(t=5,e=1){let i=new Mu(t,e);return this.creatures.push(i),this.root.add(i.obj),i}resolve(t,e,i=.3){let s=this.bounds;for(let r=0;r<3;r++)for(let o of this.colliders)if(!o.disabled)if(o.r!==void 0){let a=t-o.x,l=e-o.z,c=Math.hypot(a,l),h=o.r+i;c<h&&c>1e-5&&(t=o.x+a/c*h,e=o.z+l/c*h)}else{let a=jt(t,o.minX,o.maxX),l=jt(e,o.minZ,o.maxZ),c=t-a,h=e-l,u=Math.hypot(c,h);if(u<i)if(u>1e-5)t=a+c/u*i,e=l+h/u*i;else{let f=t-o.minX,p=o.maxX-t,g=e-o.minZ,d=o.maxZ-e,x=Math.min(f,p,g,d);x===f?t=o.minX-i:x===p?t=o.maxX+i:x===g?e=o.minZ-i:e=o.maxZ+i}}return t=jt(t,s.minX+i,s.maxX-i),e=jt(e,s.minZ+i,s.maxZ-i),{x:t,z:e}}update(t,e){for(let i of this.characters)i.update(t,e);for(let i of this.updatables)i.userData.update(t,e);for(let i of this.particles)i.update(t,e);for(let i of this.hotspots)i.update(t,e);for(let i of this.creatures)i.update(t,e);this.bursts=this.bursts.filter(i=>{let s=i.update(t);return s&&(i.obj.parent?.remove(i.obj),i.dispose()),!s})}dispose(){this.disposed=!0;for(let t of this.hotspots)t.destroy();for(let t of this.particles)t.dispose();w.scene.remove(this.root),this.root.traverse(t=>{t.geometry&&!t.geometry.parameters&&t.geometry.dispose?.()})}},Qf={little:16773842,story:16763243,work:9422079,exit:16777215,quiet:14214911,secret:15259903},wu=class{constructor(t,e){this.world=t,Object.assign(this,{id:e.id,label:e.label??"",kind:e.kind??"little",radius:e.radius??1.1,enabled:e.enabled??!0,done:!1,def:e}),this.anchor=e.anchor??null,this.offset=new C(...e.offset??[0,0,0]),this.pos=new C(e.x??0,e.y??0,e.z??0),this.obj=new ot;let i=Qf[this.kind]??Qf.little;this.glow=Wi(i,this.kind==="story"?1.5:1.15,.85),this.core=Wi(16777215,.35,.9),this.obj.add(this.glow,this.core),this.sparks=[];for(let s=0;s<5;s++){let r=Wi(i,.16,.8);this.obj.add(r),this.sparks.push({s:r,ph:s/5})}this.ring=new Rt(new Ta(.42,.48,24),new Qe({color:i,transparent:!0,opacity:0,depthWrite:!1,fog:!1})),this.ring.rotation.x=-Math.PI/2,t.root.add(this.obj),t.root.add(this.ring),this.alpha=this.enabled?1:0,this.t=Math.random()*10,this.near=!1}get position(){if(this.anchor){let t=this.anchor.position??this.anchor;return new C(t.x,0,t.z).add(this.offset)}return this.pos}setEnabled(t){this.enabled=t}complete(){this.done=!0,this.enabled=!1}update(t,e){this.t+=t;let i=this.enabled&&!this.done?1:0;this.alpha+=(i-this.alpha)*Math.min(1,t*3);let s=this.position,r=this.def.height??(this.anchor?.height?this.anchor.height+.25:1);this.obj.position.set(s.x,r+Math.sin(this.t*2)*.08,s.z);let o=this.kind==="work"?.75+.25*Math.sign(Math.sin(this.t*6)):.85+Math.sin(this.t*2.5)*.15;this.glow.material.opacity=this.alpha*.85*o*(this.near?1.25:1),this.glow.scale.setScalar((this.kind==="story"?1.5:1.15)*(this.near?1.25:1)*(.95+.05*Math.sin(this.t*3))),this.core.material.opacity=this.alpha*.9;for(let a of this.sparks){let l=(this.t*.35+a.ph)%1,c=a.ph*Math.PI*2+this.t*.5;a.s.position.set(Math.cos(c)*.35,-.6+l*1.3,Math.sin(c)*.35),a.s.material.opacity=this.alpha*Math.sin(l*Math.PI)*.8}this.ring.position.set(s.x,.03,s.z),this.ring.material.opacity=this.alpha*(this.near?.55:.18),this.ring.scale.setScalar(1+(this.near?.15*Math.sin(this.t*4):0)),this.obj.visible=this.alpha>.01,this.ring.visible=this.obj.visible,this.kind==="secret"&&(this.obj.visible=this.near,this.ring.visible=!1,this.glow.material.opacity*=.5)}destroy(){this.obj.parent?.remove(this.obj),this.ring.parent?.remove(this.ring)}},bu=class{constructor(t,e,i){let s=we(i*13);this.obj=new ot;let r=new Ye(.16,.12);r.translate(.08,0,0);let o=ye(t,{side:Se,emissive:t,emissiveIntensity:.2});this.l=new Rt(r,o),this.r=new Rt(r,o),this.r.scale.x=-1,this.l.rotation.x=this.r.rotation.x=-Math.PI/2;let a=new ot;a.add(this.l);let l=new ot;l.add(this.r),this.wl=a,this.wr=l,this.obj.add(a,l),this.area=e,this.ph=s.range(0,10),this.sp=s.range(.25,.45),this.obj.scale.setScalar(1.3)}update(t,e){let i=this.area,s=e*this.sp+this.ph,r=i.x+Math.sin(s)*i.r*.8+Math.sin(s*2.3)*.8,o=i.z+Math.cos(s*.8)*i.r*.8+Math.cos(s*1.7)*.8,a=.8+Math.sin(s*3.1)*.35,l=r-this.obj.position.x,c=o-this.obj.position.z;this.obj.position.set(r,a,o),this.obj.rotation.y=Math.atan2(l,c)-Math.PI/2;let h=Math.sin(e*18+this.ph)*1.1;this.wl.rotation.z=h,this.wr.rotation.z=-h}get position(){return this.obj.position}},Mu=class{constructor(t,e){this.obj=new ot,this.birds=[];let i=we(e);for(let s=0;s<t;s++){let r=new ot,o=new Ye(.3,.1);o.translate(.15,0,0);let a=ye(3816008,{side:Se}),l=new Rt(o,a),c=new Rt(o,a);c.scale.x=-1,l.rotation.x=c.rotation.x=-Math.PI/2;let h=new ot;h.add(l);let u=new ot;u.add(c),r.add(h,u),this.obj.add(r),this.birds.push({b:r,gl:h,gr:u,off:new C(i.range(-2,2),i.range(-.6,.6),i.range(-2,2)),ph:i.range(0,6)})}this.t=i.range(0,30),this.period=26}update(t,e){this.t+=t;let i=this.t%this.period/this.period,s=w.renderer.camTarget,r=s.x-30+i*60,o=s.z+12-i*24,a=7+Math.sin(i*6)*.5;for(let l of this.birds){l.b.position.set(r+l.off.x,a+l.off.y,o+l.off.z),l.b.rotation.y=-Math.PI/4-Math.PI/2+Math.PI;let c=Math.sin(this.t*10+l.ph)*.8;l.gl.rotation.z=c,l.gr.rotation.z=-c}}};var u_=[8,9,8,7,7,6.5,3.5,6.5,9],pl=class{constructor(t){this.scenes=t,this.index=0,this.current=null,this.ctx=null,this.control=!1,this.inMoment=!1,this.moveTarget=null,this.pendingHotspot=null,this.stepT=0,this.clock=null,this.menuOpen=!1,this.reachedChapter=1}keepWindow(){return this.current?.keepWindow??u_[this.current?.chapter??0]??7}setControl(t){this.control=t,t||(this.moveTarget=null,this.vel={x:0,z:0},w.ui.setPrompt(null),w.player&&(w.player._playerMoving=!1))}renderNow(){w.renderer.render()}async start(t=0){this.index=t,this.runToken=(this.runToken||0)+1;let e=this.runToken;for(;this.index<this.scenes.length&&e===this.runToken;){let i=this.scenes[this.index];this.reachedChapter=Math.max(this.reachedChapter,i.chapter),w.album.forgetFrom(this.scenes.slice(this.index).map(r=>r.id)),w.album.save(this.index);try{localStorage.setItem("lm.reached",String(this.reachedChapter))}catch{}if(await this.runScene(i,e),e!==this.runToken)return;this.index++;let s=this.scenes[this.index];(!s||s.chapter!==i.chapter)&&this.chapterDone(i.chapter,!s)}}chapterDone(t,e){t>=1&&t<=7&&w.achieve?.("ch"+t),t>=1&&w.album.chapterComplete(t)&&w.achieve?.("present"),t===5&&(w.achieve?.(w.state.childKind==="son"?"son":"daughter"),(w.state.stats.workTimes||0)===(w.state.stats.workAtCh5||0)&&w.achieve?.("unplugged")),e&&(w.achieve?.("the_end"),w.achieve?.(w.state.identity==="father"?"as_father":"as_mother"),w.ach?.remember("identity",w.state.identity)>=2&&w.achieve?.("both_lives"))}async runScene(t,e){var a;let i=w.ui;this.setControl(!1),w.world&&w.world.dispose(),w.renderer.overrides={},w.timeScale=1;let s=new xs({bounds:t.bounds??{minX:-9,maxX:9,minZ:-9,maxZ:9},name:t.id});w.world=s,w.player=null,this.current=t;let r={def:t,world:s,flags:w.state.flags,director:this};this.ctx=r,r.passTime=l=>this.passTime(l),r.hotspot=l=>s.getHotspot(l),r.done=l=>!!s.getHotspot(l)?.done,r.end=()=>{this.sceneOver=!0},this.sceneOver=!1,t.build(r);let o=w.renderer;o.camBounds=t.camBounds??null,o.zoomGoal=t.zoom??14,w.player?o.setFollow(w.player):o.setFollow(null),t.camAt&&(o.follow=null,o.camGoal.set(t.camAt[0],0,t.camAt[1])),o.snapCamera(),t.mood&&o.setMood(t.mood,0);for(let l of t.moments??[]){l.caption&&w.album.register(l.caption.id??l.id,t.chapter,De(l.caption.text??l.caption),t.id,l.alt);let c=l.anchor?l.anchor(r):null,h=s.hotspot({id:l.id,label:l.label,kind:l.kind??"little",x:l.at?.[0],z:l.at?.[1],radius:l.radius??1.2,anchor:c,height:l.height,offset:l.offset,enabled:!1});h.m=l}if(this.refreshHotspots(),this.clock=t.clock?{seconds:t.clock.seconds,t:0,over:!1,ages:t.ages??[0,1]}:null,i.clock(!!this.clock),t.ages&&i.setClock(0,Math.floor(t.ages[0])),i.showHud(!0),t.music&&w.audio.music(t.music,{intensity:t.intensity??.4}),t.ambience&&w.audio.ambience(t.ambience),t.card&&(await i.fade(1,1.2,"#16121a"),await i.chapterCard(t.card)),t.intro?await this.safe(()=>t.intro(r)):await i.fadeIn(1.5),e===this.runToken&&!((t.moments?.length||t.freeRoam)&&(this.setControl(!0),t.hint&&!this.hintShown?.[t.id]&&i.hint(t.hint,9),await new Promise(l=>{this.sceneResolve=l}),e!==this.runToken))){this.setControl(!1);for(let l of s.hotspots)l.done&&l.m&&((a=w.album).lived??(a.lived=new Set)).add(l.m.caption?.id??l.m.id);for(let l of s.hotspots)!l.done&&!l.otherLife&&l.m?.caption&&w.album.lose(l.m.caption.id??l.m.id);t.outro&&await this.safe(()=>t.outro(r)),e===this.runToken&&i.clock(!1)}}async safe(t){try{await t()}catch(e){console.error("[scene error]",e)}}refreshHotspots(){let t=w.world;if(t)for(let e of t.hotspots){if(e.done)continue;let i=e.m;if(!i)continue;let s=!0;i.requires&&(s=i.requires.every(r=>t.getHotspot(r)?.done)),s&&i.when&&(s=!!i.when(this.ctx)),this.clock?.over&&(i.kind??"little")==="little"&&(s=!1),s&&!e.enabled?(e.setEnabled(!0),this.control&&w.audio.sfx("chime",{vol:.35})):!s&&e.enabled&&e.setEnabled(!1)}}async runMoment(t){if(this.inMoment)return;let e=this.current,i=this.ctx;this.inMoment=!0,this.setControl(!1),w.ui.hideHint(),t.near=!1;let s=t.m;if(s.once!==!1&&t.complete(),s.alt)for(let o of i.world.hotspots)o!==t&&o.m?.alt===s.alt&&!o.done&&(o.setEnabled(!1),o.done=!0,o.otherLife=!0);try{await s.run(i,t)}catch(o){console.error("[moment error]",s.id,o)}if(s.once===!1&&t.setEnabled(!0),t.done=s.once!==!1,this.inMoment=!1,w.world!==i.world)return;if(this.refreshHotspots(),(e.final?i.world.getHotspot(e.final)?.done:!1)||this.sceneOver||e.exitWhen&&e.exitWhen(i)){this.finishFreeRoam();return}this.setControl(!0)}finishFreeRoam(){let t=this.sceneResolve;this.sceneResolve=null,t&&t()}passTime(t){this.clock&&(this.clock.t=Math.min(this.clock.seconds,this.clock.t+t))}async timeUp(){let t=this.current,e=this.ctx;this.clock.over=!0,this.inMoment=!0,this.setControl(!1);for(let s of w.world.hotspots)!s.done&&(s.m?.kind??"little")==="little"&&(s.setEnabled(!1),s.done=!0,s.m?.caption&&w.album.lose(s.m.caption.id??s.m.id));w.audio.sfx("lost",{vol:.6});try{t.onTimeUp?await t.onTimeUp(e):await w.ui.lower(t.timeUpText??"And just like that, the day was gone.")}catch(s){console.error(s)}if(this.inMoment=!1,this.refreshHotspots(),!w.world.hotspots.some(s=>!s.done&&s.enabled)||this.sceneOver){this.finishFreeRoam();return}this.setControl(!0)}update(t,e){let i=w.player,s=w.input,r=w.renderer;if(!w.world)return;if(this.clock&&!this.clock.over){this.control&&!this.inMoment&&(this.clock.t+=e);let m=jt(this.clock.t/this.clock.seconds,0,1),v=this.clock.ages,y=ti(v[0],v[1],m);w.ui.setClock(m,Math.floor(y),m>.85),m>=1&&!this.inMoment&&this.control&&this.timeUp()}if(!i)return;let o=null,a=1/0;if(this.control&&!this.inMoment){for(let m of w.world.hotspots){if(!m.enabled||m.done){m.near=!1;continue}let v=m.position,y=$r(v.x,v.z,i.position.x,i.position.z);m.near=!1,y<m.radius&&y<a&&(a=y,o=m)}o&&(o.near=!0)}if(w.ui.promptTarget!==o&&w.ui.setPrompt(o),!this.control)return;if(w.auto&&!this.inMoment){let v=w.world.hotspots.find(y=>y.enabled&&!y.done&&(w.autoSkip?y.kind!=="little":!0)&&y.kind!=="work")??w.world.hotspots.find(y=>y.enabled&&!y.done);if(v){let y=v.position,_=w.world.resolve(y.x+.3,y.z+.3,i.radius);i.position.x=_.x,i.position.z=_.z,w.log?.push("moment: "+v.id),this.runMoment(v)}return}if(!this.inMoment&&o&&(s.pressed("act")||w.ui.promptClicked)){s.consume("act"),w.ui.promptClicked=!1,this.runMoment(o);return}if(w.ui.promptClicked=!1,this.pendingHotspot&&this.pendingHotspot===o){this.pendingHotspot=null,this.moveTarget=null,this.runMoment(o);return}for(let m of s.clicks){let v=null;for(let y of w.world.hotspots){if(!y.enabled||y.done)continue;let _=y.position.clone();_.y=y.def.height??1;let I=r.project(_);Math.hypot(I.x-m.x,I.y-m.y)<46&&(v=y)}if(v){this.pendingHotspot=v;let y=v.position;this.moveTarget=new C(y.x,0,y.z)}else{let y=r.unproject(m.x,m.y,0);y&&(this.moveTarget=y,this.pendingHotspot=null)}}if(s.pointer.down&&s.pointer.moved){let m=r.unproject(s.pointer.x,s.pointer.y,0);m&&(this.moveTarget=m,this.pendingHotspot=null)}let l=s.axis(),c=i.walkSpeed*(this.current.speedMul??1),h=0,u=0;if(l.x||l.y){let{fwd:m,right:v}=r.groundBasis();h=v.x*l.x+m.x*l.y,u=v.z*l.x+m.z*l.y;let y=Math.hypot(h,u);h/=y,u/=y,this.moveTarget=null,this.pendingHotspot=null}else if(this.moveTarget){let m=this.moveTarget.x-i.position.x,v=this.moveTarget.z-i.position.z,y=Math.hypot(m,v),_=this.pendingHotspot?Math.max(.2,this.pendingHotspot.radius*.6):.12;y<_?this.moveTarget=null:(h=m/y,u=v/y)}let f=1;i.age<1.3?f=.55+.75*Math.abs(Math.sin(i.walkPhase*.8)):i.age<2.6&&(f=.8+.25*Math.abs(Math.sin(i.walkPhase)));let p=h*c*f,g=u*c*f,d=h||u?i.age<2.6?6:10:12;this.vel=this.vel||{x:0,z:0},this.vel.x+=(p-this.vel.x)*(1-Math.exp(-d*t)),this.vel.z+=(g-this.vel.z)*(1-Math.exp(-d*t));let x=Math.hypot(this.vel.x,this.vel.z);if(x>.03){let m=i.position.x+this.vel.x*t,v=i.position.z+this.vel.z*t,y=w.world.resolve(m,v,i.radius),_=Math.hypot(y.x-i.position.x,y.z-i.position.z);this.moveTarget&&_<x*t*.1?(this.stuck=(this.stuck||0)+t,this.stuck>.4&&(this.moveTarget=null,this.stuck=0)):this.stuck=0,t>0&&(this.vel.x=(y.x-i.position.x)/t,this.vel.z=(y.z-i.position.z)/t),i.position.x=y.x,i.position.z=y.z,(h||u)&&(i.targetHeading=Math.atan2(h,u)),i.speed=Math.max(x,h||u?c*.6:0),i._playerMoving=!0,this.stepT-=t*x,this.stepT<=0&&(this.stepT=i.age<1.3?.5:.62,w.audio.sfx("step",{surface:this.current.surface??"grass",vol:i.age<3?.5:1}))}else i._playerMoving=!1,this.vel.x=this.vel.z=0}toggleMenu(){if(w.album.open){w.album.hide();return}if(this.menuOpen)return this.closeMenu();if(!this.current)return;this.menuOpen=!0,w.paused=!0,w.audio.duck(.45);let t=document.querySelector("#menu");t.innerHTML="",t.classList.remove("hidden");let e=mt("div","panel");e.appendChild(mt("h2","","Paused"));let i=(c,h)=>{let u=mt("button","",c);return u.addEventListener("click",h),e.appendChild(u),u};i("Continue",()=>this.closeMenu()),i("Album",()=>{this.closeMenu(),this.openAlbum()});let s=(c,h)=>{let u=mt("label","",`<span>${c}</span>`),f=mt("input");f.type="range",f.min=0,f.max=1,f.step=.05,f.value=w.audio.vol[h],f.addEventListener("input",()=>w.audio.setVolume(h,parseFloat(f.value))),u.appendChild(f),e.appendChild(u)};s("Music","music"),s("Sound","sfx"),s("Ambience","amb");let r=mt("label","","<span>Auto-advance text</span>"),o=mt("input");o.type="checkbox",o.checked=w.ui.settings.auto,o.addEventListener("change",()=>{w.ui.settings.auto=o.checked,w.ui.saveSettings()}),r.appendChild(o),e.appendChild(r);let a=mt("label","","<span>Ambient occlusion (quality)</span>"),l=mt("input");l.type="checkbox",l.checked=w.renderer.ao.enabled,l.addEventListener("change",()=>w.renderer.setAO(l.checked)),a.appendChild(l),e.appendChild(a),i("Achievements",()=>{this.closeMenu(),w.showAchievements?.()}),i("Replay this scene",()=>{this.closeMenu(),this.restartScene()}),i("Return to title",()=>{this.closeMenu(),this.onTitle&&this.onTitle()}),e.appendChild(mt("div","small",`${au[this.current.chapter]??""}<br>Move: WASD / arrows / click \xB7 Interact: Space / click \xB7 Keep: hold Space`)),t.appendChild(e)}closeMenu(){this.menuOpen=!1,w.paused=!1,w.audio.duck(1),document.querySelector("#menu").classList.add("hidden")}openAlbum(){w.paused=!0,w.album.show(this.current?.chapter??1,{reachedChapter:this.reachedChapter,onClose:()=>{this.menuOpen||(w.paused=!1)}})}restartScene(){this.abort(),this.start(this.index)}abort(){this.runToken=(this.runToken||0)+1,this.sceneResolve=null,this.inMoment=!1,w.updaters.clear(),w.realUpdaters.clear(),w.ui.mgEl.innerHTML="",w.ui.bubblesEl.innerHTML="",w.ui.bubbles=[],w.ui.narrEl.innerHTML="",w.ui.lowerEl.innerHTML="",w.ui.choicesEl.classList.add("hidden"),w.ui.keepEl.classList.add("hidden"),w.ui.setPrompt(null),document.querySelector("#card").classList.add("hidden"),w.timeScale=1}};Mi();Mi();Be();Ie();Be();var Gn=(n,t)=>w.ui.narrate(n,t),St=(n,t)=>w.ui.lower(n,t),Ct=(n,t,e)=>w.ui.say(n,t,e),Wn=(n,t)=>w.ui.say(w.player,n,{thought:!0,...t}),_n=(n,t)=>w.ui.choose(n,t),tp=(n,t)=>w.ui.askText(n,t),Xi=(n=1.5,t="#000")=>w.ui.fadeOut(n,t),qi=(n=1.5)=>w.ui.fadeIn(n);var We=(n,t=2,e=null)=>w.renderer.setMood(n,t,e),Yi=(n,t)=>w.audio.music(n,t),lo=(n,t=2)=>w.audio.setIntensity(n,t),sn=(n,t=3)=>w.audio.ambience(n,t),kt=(n,t)=>w.audio.sfx(n,t);function ce(n,t,e=null,i=2){return w.renderer.cameraTo({x:n,y:0,z:t},e,i)}function ve(n=w.player,t=null,e=1.5){return w.renderer.setFollow(n),t?w.renderer.zoomTo(t,e):Promise.resolve()}function Xn(n,t=2){return w.renderer.zoomTo(n,t)}function ep(n){return new Promise(t=>{let e=i=>{n(i)&&(w.realUpdaters.delete(e),t())};w.realUpdaters.add(e)})}function Su(n){let t=0;return ep(e=>(t+=e)>=n)}async function ee(n,t,{window:e=null,chapter:i=null,focus:s=null,holdTime:r=1.5}={}){let o=w.album,a=i??w.director.current?.chapter??0;if(t=De(t),o.register(n,a,t,w.director.current?.id),o.has(n))return!0;let l=e??w.director.keepWindow(),c=w.ui,h=w.renderer,u=c.keepEl,f=u.querySelector(".fill"),p=u.querySelector(".timer div"),g=u.querySelector(".msg");g.innerHTML=w.input.lastDevice==="touch"?"Hold the screen to keep this moment":"Hold <b>Space</b> to keep this moment",u.classList.remove("hidden","lost","show"),u.offsetWidth,u.classList.add("show"),f.style.strokeDashoffset=251.3,kt("chime");let d=w.timeScale;ei(.6,_=>{w.timeScale=ti(d,.3,_)}),h.pulse("saturation",1.22,.8),h.pulse("dream",.35,.8),h.pulse("vignette",-.12,.8),h.pulse("warmth",.15,.8);let x=w.audio.intensityTarget;w.audio.setIntensity(Math.min(1,x+.3),1.2),s&&(h.overrides.focusX=s.x,h.overrides.focusY=s.y);let m=0,v=l,y=!1;if(w.input.endFrame(),await ep(_=>w.auto?(y=w.autoKeep!==!1,!0):(w.input.holding()?m+=_/r:m=Math.max(0,m-_*.6),m<=.001&&(v-=_),f.style.strokeDashoffset=251.3*(1-jt(m,0,1)),p.style.transform=`scaleX(${jt(v/l,0,1)})`,m>=1?(y=!0,!0):v<=0)),y){w.director.renderNow();let _=h.snapshot(360,270);c.flash(.9),kt("shutter"),kt("keep");let I=w.player?w.player.position.clone().add(new C(0,1,0)):h.camTarget.clone();w.world?.burst(I,{count:50,color:16770224}),o.keep(n,t,a,_);let M=o.count();M>=1&&w.achieve?.("keep_1"),M>=10&&w.achieve?.("keep_10"),M>=30&&w.achieve?.("keep_30"),M>=60&&w.achieve?.("keep_60"),u.classList.remove("show"),u.classList.add("hidden"),c.flyPolaroid(_,t),await Su(.4)}else u.classList.add("lost"),kt("lost"),o.lose(n),await Su(1.6),u.classList.remove("show","lost"),u.classList.add("hidden");return ei(1.2,_=>{w.timeScale=ti(.3,d===.3?1:d,_)}),h.pulse("saturation",1,1.5),h.pulse("dream",0,1.5),h.pulse("vignette",0,1.5),h.pulse("warmth",0,1.5),delete h.overrides.focusX,delete h.overrides.focusY,w.audio.setIntensity(x,3),await Su(y?1:.3),y}function Tu(n,t,e=null){let i=e??w.director.current?.chapter??0;w.album.register(n,i,De(t),w.director.current?.id),w.album.lose(n)}async function qn(n,t=2,e=.25){for(let i=0;i<t;i++)await ei(.35,s=>{n.extraY=Math.sin(s*Math.PI)*e},s=>s);n.extraY=0}Be();function Yn(n){let t=mt("div","mgbox");return n&&t.appendChild(mt("div","mglabel",n)),w.ui.mgEl.appendChild(t),t}function Zn(n){n.style.transition="opacity 0.5s",n.style.opacity="0",setTimeout(()=>n.remove(),520)}var d_=()=>w.input.lastDevice==="touch"?"Hold the screen":"Hold Space",f_=()=>w.input.lastDevice==="touch"?"Tap":"Press Space";async function $n({label:n=null,seconds:t=3,onProgress:e=null,drain:i=.35}={}){if(w.auto){e&&e(1,!0,.1),await Wt(.3);return}let s=Yn(n??d_()),r=mt("div","meter"),o=mt("div");r.appendChild(o),s.appendChild(r);let a=0;await oi(l=>(w.input.holding()?a+=l/t:a-=l*i/t,a=jt(a,0,1),o.style.width=a*100+"%",e&&e(a,w.input.holding(),l),a>=1)),Zn(s)}async function ar({label:n=null,count:t=5,onTap:e=null,timeout:i=null}={}){if(w.auto){for(let u=1;u<=t;u++)e&&e(u),await Wt(.05);return t}let s=Yn(n??f_()),r=mt("div","mgkeys"),o=mt("div","mgkey",w.input.lastDevice==="touch"?"Tap":"Space");r.appendChild(o),s.appendChild(r);let a=mt("div","counter",`0 / ${t}`);s.appendChild(a);let l=0,c=0,h=!1;return o.addEventListener("pointerdown",u=>{u.stopPropagation(),h=!0}),await oi(u=>{c+=u;let f=w.input;return(f.pressed("act")||f.pressed("pointer")||h)&&(h=!1,f.consume("act"),f.consume("pointer"),l++,o.classList.remove("on"),o.offsetWidth,o.classList.add("on"),setTimeout(()=>o.classList.remove("on"),120),a.textContent=`${l} / ${t}`,e&&e(l)),l>=t||i&&c>i}),Zn(s),l}async function lr({label:n="Press Space with the music",hits:t=6,period:e=null,onlyDownbeat:i=!1,onHit:s=null,onPulse:r=null,window:o=.22,maxPulses:a=null}={}){if(w.auto){for(let y=1;y<=t;y++)r&&r(y),s&&s(y,1),await Wt(.1);return t}let l=Yn(n),c=mt("div","pulse"),h=mt("div","dot"),u=mt("div","ring");c.appendChild(h),c.appendChild(u),l.appendChild(c);let f=mt("div","hearts");l.appendChild(f);for(let y=0;y<t;y++)f.appendChild(mt("span","","\u25CB"));let p=0,g=!1,d=0,x=-1,m=w.realTime;c.addEventListener("pointerdown",y=>{y.stopPropagation(),g=!0});let v=!1;return await oi(()=>{let y,_,I;if(e){let P=w.realTime-m;y=P%e/e,I=Math.floor(P/e),_=Math.min(y,1-y)*e}else{let P=w.audio.beatInfo(),T=i?P.dur*P.beats:P.dur;i?(y=(P.barBeat+P.phase)/P.beats,I=Math.floor(P.beat/P.beats)):(y=P.phase,I=P.beat),_=Math.min(y,1-y)*T}I!==x&&(x=I,d++,v=!1,r&&r(d));let M=1+(1-y)*.9;u.style.transform=`scale(${M})`,u.style.opacity=.3+y*.7,h.style.transform=`scale(${.8+(_<o?.4:0)})`;let A=w.input;return(A.pressed("act")||A.pressed("pointer")||g)&&(g=!1,A.consume("act"),A.consume("pointer"),_<o&&!v?(v=!0,p++,f.children[p-1].textContent="\u25CF",c.classList.remove("hit"),c.offsetWidth,c.classList.add("hit"),w.audio.sfx("good",{deg:[1,3,5,8,5,3,1,8][p%8]}),s&&s(p,1-_/o)):(w.audio.sfx("miss"),s&&s(p,-1))),p>=t||a&&d>=a}),Zn(l),p}async function ml({label:n="Keep your balance \u2014 \u2190 \u2192",seconds:t=4,difficulty:e=1,onUpdate:i=null}={}){if(w.auto){i&&i(0,1,!0),await Wt(.3);return}let s=Yn(n),r=mt("div","balance");r.innerHTML='<div class="bar"></div><div class="zone"></div><div class="ball"></div>',s.appendChild(r);let o=mt("div","touchpads"),a=mt("div","mgkey","\u2190"),l=mt("div","mgkey","\u2192");o.appendChild(a),o.appendChild(l),s.appendChild(o);let c=0,h=y=>_=>{_.stopPropagation(),c=y};a.addEventListener("pointerdown",h(-1)),l.addEventListener("pointerdown",h(1));let u=()=>{c=0};window.addEventListener("pointerup",u);let f=mt("div","meter"),p=mt("div");f.appendChild(p),s.appendChild(f);let g=r.querySelector(".ball"),d=.1,x=0,m=0,v=0;await oi(y=>{v+=y;let _=w.input.axis().x+c,I=Math.sin(v*1.7)*.6+Math.sin(v*3.1+1)*.4;x+=(I*.55*e+d*.9*e+_*2.4)*y,x*=Math.pow(.15,y),d=jt(d+x*y*1.6,-1,1),Math.abs(d)>=1&&(x*=-.3);let M=Math.abs(d)<.24;return m=jt(m+(M?y/t:-y/t*.25),0,1),g.style.left=(d+1)/2*100+"%",p.style.width=m*100+"%",i&&i(d,m,M),m>=1}),window.removeEventListener("pointerup",u),Zn(s)}var p_={left:"\u2190",right:"\u2192",up:"\u2191",down:"\u2193"};async function cr({label:n="Follow along",keys:t=["left","right","up"],onStep:e=null}={}){if(w.auto){for(let c=0;c<t.length;c++)e&&e(c),await Wt(.1);return}let i=Yn(n),s=mt("div","mgkeys");i.appendChild(s);let r=t.map(c=>{let h=mt("div","mgkey",p_[c]??c);return s.appendChild(h),h}),o=0,a=null;r.forEach((c,h)=>c.addEventListener("pointerdown",u=>{u.stopPropagation(),a=h}));let l=()=>r.forEach((c,h)=>{c.classList.toggle("on",h===o),c.classList.toggle("done",h<o)});l(),await oi(()=>{let c=w.input,h=null;for(let u of["left","right","up","down"])c.pressed(u)&&(h=u);return a!==null&&(h=a===o?t[o]:"__wrong",a=null),h&&(h===t[o]?(w.audio.sfx("good",{deg:[1,2,3,5,6,8,9,10][o%8]}),e&&e(o),o++,l()):(w.audio.sfx("miss"),r[o].classList.remove("wrong"),r[o].offsetWidth,r[o].classList.add("wrong"))),o>=t.length}),await Wt(.3),Zn(i)}async function ii({label:n="Just be here. Don't press anything.",seconds:t=6,onProgress:e=null}={}){if(w.auto){e&&e(1,.1),await Wt(.3);return}let i=Yn(n),s=mt("div","still");s.innerHTML='<svg viewBox="0 0 100 100"><circle class="track" cx="50" cy="50" r="40"/><circle class="fill" cx="50" cy="50" r="40"/></svg>',i.appendChild(s);let r=s.querySelector(".fill"),o=0,a=0;w.input.endFrame(),await oi(l=>{let c=w.input;return(c.anyPress||c.isDown("left")||c.isDown("right")||c.isDown("up")||c.isDown("down"))&&o>.3&&(o=Math.max(0,o-1.5),a++%2===0&&(i.querySelector(".mglabel").textContent="Shh\u2026 there's no hurry.")),o+=l,r.style.strokeDashoffset=251.3*(1-jt(o/t,0,1)),e&&e(jt(o/t,0,1),l),o>=t}),Zn(i)}async function co({label:n=null,items:t,radius:e=.6,onCollect:i=null,timeLimit:s=null,needed:r=null,showCount:o=!0}={}){let a=r??t.length;if(w.auto){let f=0;for(let p of t){if(f>=a)break;let g=p.obj?p.obj.position:p;w.player.position.x=g.x,w.player.position.z=g.z,p.got=!0,f++,i&&i(p,f),await Wt(.05)}return f}let l=Yn(n),c=mt("div","counter",`0 / ${a}`);o&&l.appendChild(c),w.director.setControl(!0);let h=0,u=0;return await oi(f=>{u+=f;let p=w.player.position;for(let g of t){if(g.got)continue;let d=g.obj?g.obj.position:g,x=g.r??e;Math.hypot(d.x-p.x,d.z-p.z)<x+w.player.radius&&(g.got=!0,h++,c.textContent=`${h} / ${a}`,w.audio.sfx("good",{deg:[1,3,5,6,8,10,12][h%7]}),i&&i(g,h))}return h>=a||s&&u>s}),w.director.setControl(!1),Zn(l),h}async function gl({target:n,dist:t=1.6,seconds:e=8,label:i="Stay close",onProgress:s=null}={}){if(w.auto){s&&s(1,!0,.1),await Wt(.5);return}let r=Yn(i),o=mt("div","meter"),a=mt("div");o.appendChild(a),r.appendChild(o),w.director.setControl(!0);let l=0;await oi(c=>{let h=n.position??n,f=Math.hypot(h.x-w.player.position.x,h.z-w.player.position.z)<t;return l=jt(l+(f?c/e:-c/e*.15),0,1),a.style.width=l*100+"%",s&&s(l,f,c),l>=1}),w.director.setControl(!1),Zn(r)}Ie();Be();Mi();Mi();po();function rn(n,t=0,e=0,i=0,s=null){let r=new hr({...s??Eu(n),age:n,name:"You"});return r.place(t,e,i),w.player=r,r}function ci(n,t,e,i=0,s=0,r=0){let o=new hr({...n,age:t,name:e});return o.place(i,s,r),o}function Au(n=2,t=0,e=0){let i=new fo({age:n});return i.name="Biscuit",i.place(t,e),i}function yl(n,t,e,i,s=1,r=[]){let o=we(s);for(let a=0;a<t;a++){let l=o.range(e[0],e[1]),c=o.range(e[2],e[3]);r.some(([h,u,f])=>Math.hypot(l-h,c-u)<f)||n.add(i(o,a),l,c,{ry:o.range(0,6.28)})}}function mo(n,{era:t="past",night:e=!1,w:i=8,d:s=7}={}){let r=n.world,o={past:[15979468,16180950],present:[14018780,15985372],kid:[13622512,15919832],teen:[12109016,15261904],empty:[14210254,15131356]}[t],a=e?8228824:16769732,l=nl({w:i,d:s,h:3.4,wall:o[0],wall2:o[1],floor:k.woodLight,windows:[{wall:"back",at:1.2,y:1.1,w:1.6,h:1.4,glow:a,roomW:i,roomD:s}]});r.add(l,0,0);let c=j(.08,2.1,1,t==="past"?16315114:15525080);r.add(c,-i/2+.05,0,{y:0}),c.position.z=1.8;let h=Hn(.05,6,4,k.yellow);r.add(h,-i/2+.12,2.15,{y:1});let u=we(t==="past"?3:9);for(let M=0;M<26;M++){let A=zn(.08,.08,.02,t==="past"?16312546:t==="present"?15922926:16777215);r.add(A,u.range(-i/2+.4,i/2-.4),-s/2+.02,{y:u.range(1.6,3)}),Math.abs(A.position.x-1.2)<1.1&&A.position.y<2.7&&(A.visible=!1)}let f={room:l,door:c,doorPos:[-i/2+.6,1.8]},p=new Rt(new Ye(1.7,1.6),new Qe({color:e?10465535:16773320,transparent:!0,opacity:e?.18:.42,depthWrite:!1,blending:Ai}));p.rotation.x=-Math.PI/2,p.rotation.z=.35,r.add(p,1.4,-1.6,{y:.02}),f.beam=p;let g=new Rt(new Ze(.6,1,3,4,1,!0),new Qe({color:e?10465535:16773071,transparent:!0,opacity:e?.05:.09,depthWrite:!1,side:Se,blending:Ai,fog:!1}));if(g.rotation.x=.55,g.rotation.y=Math.PI/4,r.add(g,1.3,-2.4,{y:1.3}),f.shaft=g,t==="past"||t==="present"){let M=Bf();r.add(M,-2.5,-2.55,{collide:{w:1.6,d:.95}}),f.crib=M;let A=pu();r.add(A,-2.5,-2.55,{y:.55}),f.mobile=A}else{let M=zf({color:t==="teen"?5925514:t==="empty"?13156536:15901621});r.add(M,-2.9,-1.8,{collide:{w:1.2,d:2.1}}),f.bed=M;let A=pu();r.add(A,-3.6,-3.1,{y:1.6,s:.8}),f.mobile=A,A.userData.speed=.05}let d=Vf();r.add(d,2.4,-2.2,{ry:-.7,collide:.5}),f.chair=d;let x=al(2.6,2.6,t==="past"?15972793:t==="present"?12114120:12635368,k.cream,!0);r.add(x,.3,.6);let m=gu(1.3,1.3);r.add(m,-.6,-3.25,{collide:{w:1.3,d:.4}});let v=oo();r.add(v,-.9,-3.2,{y:1.3}),f.teddy=v;let y=ll({lit:e||t==="present",h:1.6});if(r.add(y,3.3,-3,{collide:.25}),f.lamp=y,e){let M=new fs(16763274,6,7,1.6);M.position.set(3.2,1.7,-2.8),r.root.add(M),f.lampLight=M}let _=cl(1.2);r.add(_,3.4,2.6,{collide:.3});let I=hl(k.wood);return r.add(I,-i/2+.06,-1,{y:1.9,ry:Math.PI/2}),f.frame=I,f}function vl(n,{season:t="summer",treeStage:e=1,swing:i=!1,lit:s=!1,picnic:r=!1,sandbox:o=!1,theoHouse:a=!0,flowers:l=!0,cherry:c=!0,lemonade:h=!1,snowman:u=0,sign:f=null}={}){let p=n.world,g={spring:k.grassSpring,summer:k.grass,autumn:k.grassAutumn,winter:k.snow}[t],d=t==="winter"?k.snowShade:k.grassDark,x=no({w:28,d:22,top:g,edge:d,seed:4});p.add(x,0,0);let m={season:t},v=Nf(28,2.6);p.add(v,0,9.3);let y=Pi(28,.5,t==="winter"?15133424:k.sidewalk,.012);p.add(y,0,7.8);let _=du({w:6,d:4.6,h:2.9,wall:16049103,roof:t==="winter"?15331060:k.terracotta,door:5929640,porch:!0,lit:s});if(p.add(_,-5,-6,{collide:{w:6.6,d:5}}),p.addCollider({minX:-7.6,maxX:-2.4,minZ:-3.6,maxZ:-2,porch:!0,disabled:!0}),m.house=_,m.door=[-5,-3.2],m.porch=[-5,-2.4],t==="winter"){let U=j(6.8,.2,5.4,k.snow);p.add(U,-5,-6,{y:2.92}),U.visible=!1}for(let U=0;U<9;U++){let H=Vn(.38,t==="winter"?14081254:k.stone,7,.02);p.add(H,-5+(U%2?.15:-.15),-1.6+U*1.05)}let I=k.white,M=sl(7.6,I);p.add(M,-9.6,7),p.addCollider({minX:-13.4,maxX:-5.9,minZ:6.85,maxZ:7.15});let A=sl(17.6,I);p.add(A,4.9,7),p.addCollider({minX:-4.1,maxX:13.7,minZ:6.85,maxZ:7.15});let P=sl(9,I);p.add(P,13.6,2.4,{ry:Math.PI/2});let T=tl({stage:e,season:t,swing:i});if(p.add(T,4,-2.2,{collide:e===0?.15:.25+e*.12}),m.tree=T,m.treePos=[4,-2.2],c){let U=or({kind:"blossom",season:t,size:1.35,seed:5});p.add(U,-10.5,-.5,{collide:.35}),m.cherry=U,m.cherryPos=[-10.5,-.5]}[[-12,-8,"round",1.2],[11.5,-8.5,"pine",1.3],[12,-3,"round",1.1],[-12.5,4.5,"pine",1],[9.5,4.8,"round",.9]].forEach(([U,H,Y,W],it)=>p.add(or({kind:Y,season:t,size:W,seed:20+it}),U,H,{collide:.3*W}));for(let U of[-7.6,-6.6,-3.4,-2.4])p.add(Uf(t==="autumn"?11575376:t==="winter"?15265010:7910486,.9,U*3),U,-3.2,{collide:.35});if(l&&t!=="winter"){let U=Pi(3.2,1.1,k.dirt,.015);p.add(U,-9,-3.4);let H=t==="autumn"?[14917691,13197374]:[k.pink,k.yellow,15921906,12166886,k.red];for(let Y=0;Y<14;Y++)p.add(ro(H[Y%H.length],Y),-10.4+Y%7*.45,-3.75+Math.floor(Y/7)*.5)}yl(p,t==="winter"?0:80,[-13,13,-10,6.5],(U,H)=>el(t==="autumn"?12099664:k.grassDark,H),11,[[-5,-6,4],[4,-2.2,1.2],[-5,2,1]]),t!=="winter"&&yl(p,25,[-13,13,-2,6.5],(U,H)=>ro(U.pick([k.pink,k.yellow,16777215,12166886]),H),12,[[-5,2,1],[4,-2.2,1.2]]),t==="winter"&&yl(p,18,[-13,13,-10,6.5],(U,H)=>so(.6,H,k.snowShade),13,[[-5,-6,4],[4,-2.2,1.5],[-5,2,1]]),yl(p,8,[-13,13,-10,6],(U,H)=>so(U.range(.5,1),H,t==="winter"?k.snowShade:k.rock),14,[[-5,-6,4],[4,-2.2,1.5],[-5,2,1.5]]);let L=Of();p.add(L,-6.4,6.4,{collide:.2}),m.mailbox=L;let B=rl();if(p.add(B,-3.2,-2.3,{ry:0,collide:{w:1.6,d:.5}}),m.bench=[-3.2,-2],a){let U=du({w:4.5,d:4,h:2.5,wall:13623534,roof:7306636,door:k.red,chimney:!1,lit:s});p.add(U,8.5,-6.5,{collide:{w:5,d:4.4}}),m.theoHouse=U,m.theoDoor=[8.5,-4.2]}if(o){let U=Ff();p.add(U,-8.5,2.2,{collide:!1}),m.sandbox=[-8.5,2.2]}if(r){let U=ol(k.red);p.add(U,1.2,1.2),m.picnic=[1.2,1.2]}if(h){let U=ul();p.add(U,2.5,6,{collide:{w:1.5,d:.7}}),m.lemonade=[2.5,5.2]}if(u){let U=$f(u);p.add(U,0,1,{collide:.45}),m.snowman=U}return p.bounds={minX:-13.6,maxX:13.6,minZ:-10.8,maxZ:10.4},m}function np(n,{night:t=!0,winter:e=!0,wall:i=15721167,chairs:s=2}={}){let r=n.world,o=8,a=7,l=nl({w:o,d:a,h:3.4,wall:i,wall2:16050904,floor:14205600,windows:[{wall:"back",at:1.4,y:1.2,w:1.7,h:1.3,glow:t?7307976:16771788,roomW:o,roomD:a},{wall:"left",at:-.6,y:1.2,w:1.3,h:1.2,glow:t?7307976:16771788,roomW:o,roomD:a}]});r.add(l,0,0);for(let M=0;M<8;M++)for(let A=0;A<2;A++){let P=Pi(.9,.9,(M+A)%2?15920354:13220002,.004);r.add(P,-3.55+M*.95,-3+A*.9)}let c=qf(3.2);r.add(c,-.6,-3.15,{collide:{w:3.2,d:.7}});let h=Yf();r.add(h,-2.65,-3.15,{collide:{w:.75,d:.7}});let u=Zf();r.add(u,-3.55,-1.9,{ry:Math.PI/2,collide:{w:.75,d:.75}});let f=gs({w:1.2,round:!0,color:k.wood});r.add(f,.9,.6,{collide:.65});let p={room:l,table:[.9,.6]},g=[[.9,-.35,0],[1.85,.6,-Math.PI/2],[.9,1.55,Math.PI],[-.05,.6,Math.PI/2]];p.chairs=[];for(let M=0;M<s;M++){let[A,P,T]=g[M],b=Hf(k.woodDark);r.add(b,A,P,{ry:T}),p.chairs.push([A,P,T])}let d=ll({lit:t,table:!0});r.add(d,3.2,-3.1,{y:0});let x=gs({w:.6,d:.5,h:.7,color:k.woodLight});if(r.add(x,3.2,-3.1,{collide:.4}),d.position.y=.7,t){let M=new fs(16762250,9,8,1.4);M.position.set(1,2.2,.6),r.root.add(M),p.light=M;let A=Vi(.35,.3,8,15915440,{emissive:16766352,emissiveIntensity:1.2});r.add(A,.9,.6,{y:2.3});let P=j(.02,1.1,.02,5592405);r.add(P,.9,.6,{y:2.55});let T=Wi(16766362,3,.55);T.position.set(.9,2.3,.6),r.root.add(T)}let m=jf(k.white);r.add(m,.65,.5,{y:.75}),p.mug=m;let v=cl(1.1);r.add(v,3.4,2.7,{collide:.3});let y=al(2.8,2.2,13209466,15258812);r.add(y,.9,.6),[[-o/2+.06,1.6,2],[-o/2+.06,2.6,2.4],[-o/2+.06,1.8,1.6]].forEach(([M,A,P],T)=>{let b=hl([k.wood,k.woodDark,k.white][T],null,.45,.35);r.add(b,M,A,{y:P,ry:Math.PI/2})});let I=j(.06,1,.5,6965818);return r.add(I,-o/2+.1,3,{y:1.2}),p.coatHook=[-3.4,3],p}function sp(n,{night:t=!1,fire:e=!0,toys:i=!0,wall:s=15260875,tree:r=!1}={}){let o=n.world,a=9,l=7.5,c=nl({w:a,d:l,h:3.4,wall:s,wall2:15853270,floor:k.wood,windows:[{wall:"back",at:2.2,y:1,w:1.8,h:1.5,glow:t?7307976:16771528,roomW:a,roomD:l}]});o.add(c,0,0);let h={room:c},u=Xf();if(o.add(u,-a/2+.3,-.8,{ry:Math.PI/2,collide:{w:1.6,d:.6}}),e||(u.userData.fire.visible=!1),h.fireplace=u,e){let y=new fs(16751184,7,7,1.5);y.position.set(-a/2+1,.8,-.8),o.root.add(y),h.fireLight=y}let f=mu(9414856);o.add(f,.6,-2.7,{collide:{w:2.1,d:.9}}),h.sofa=[.6,-2.2];let p=mu(13146762);p.scale.set(.5,1,1),o.add(p,3.4,-.6,{ry:-Math.PI/2,collide:{w:1.1,d:.9}});let g=al(3.4,2.6,14262394,15785152);o.add(g,.4,.2);let d=gs({w:1.2,d:.7,h:.4,color:k.woodLight});o.add(d,.6,-1.2,{collide:{w:1.2,d:.7}});let x=gu(1.6,1.9);o.add(x,-1.8,-3.5,{collide:{w:1.6,d:.4}});let m=ll({lit:t,h:1.6});if(o.add(m,3.8,-3.2,{collide:.25}),t){let y=new fs(16763274,5,7,1.6);y.position.set(3.8,1.7,-3.2),o.root.add(y)}if(i&&(o.add(Gf(5),-1.2,1.4),o.add(Wf(),2.2,1.6),o.add(oo(14200958),-2.3,2.6),h.blocks=[-1.2,1.4]),r){let y=or({kind:"pine",season:"summer",size:1.15,seed:77});o.add(y,3.6,2.7,{collide:.6});let _=[],I=we(5);for(let A=0;A<14;A++){let P=[16765562,16747146,10146047,12120736][A%4],T=Hn(.06,5,4,P,{emissive:P,emissiveIntensity:2.5}),b=A*1.7,L=.9+A/14*2,B=1.05-A/14*.75;o.add(T,3.6+Math.cos(b)*B,2.7+Math.sin(b)*B,{y:L}),_.push(T)}let M=Ee(.14,0,k.yellow,0,1,{emissive:k.yellow,emissiveIntensity:2});o.add(M,3.6,2.7,{y:3.55});for(let A=0;A<3;A++)o.add(Jf([k.red,k.teal,k.yellow][A],[k.yellow,k.white,k.red][A],.35+A*.05),3+A*.5,1.8-A%2*.3);h.xmasTree=[3.6,2.7]}return o.add(cl(1.2),-3.9,3.2,{collide:.3}),[[-1.8,2.4],[-.9,2.2],[0,2.5]].forEach(([y,_],I)=>o.add(hl([k.wood,k.white,k.woodDark][I],null,.5,.4),y,-l/2+.06,{y:_})),o.bounds={minX:-a/2+.2,maxX:a/2-.1,minZ:-l/2+.2,maxZ:l/2-.1},h}function dr(n,{clouds:t=6,seed:e=1,y:i=-3,spread:s=22}={}){let r=we(e);for(let o=0;o<t;o++){let a=il(e+o,r.range(1,1.8)),l=o/t*Math.PI*2;n.world.add(a,Math.cos(l)*s*r.range(.9,1.2),Math.sin(l)*s*r.range(.9,1.2),{y:i+r.range(-2,3)}),a.userData.update=(c,h)=>{a.position.x+=Math.sin(h*.05+o)*.004},n.world.track(a)}}Mi();var rp={id:"prologue",chapter:0,mood:"kitchenNight",music:"winter",intensity:.15,ambience:{room:.6,clock:.35,wind:.25},zoom:8.5,surface:"wood",bounds:{minX:-3.8,maxX:3.8,minZ:-3.3,maxZ:3.3},hint:"Move with <b>WASD</b> / <b>arrows</b> or <b>click</b>. Walk to a glowing light and press <b>Space</b>.",build(n){let t=np(n,{night:!0,chairs:2});n.r=t;let e=rn(79,-1.6,1.6,Math.PI*.75);e.giveCane(!0),n.me=e;let i=j(.42,.06,.3,7316424);n.world.add(i,1.85,.6,{y:.5});let s=Kf();n.world.add(s,1.1,.75,{y:.75,ry:.3}),n.albumObj=s},async intro(n){await Wt(.5),await qi(4),await St("It is late, and the house is very quiet."),await Wn("When did it get so quiet?")},moments:[{id:"window",label:"Look out at the snow",at:[1.4,-2.4],async run(n){let t=n.me;await t.walkTo(1.4,-2.2),t.face(1.4,-4),await Xn(7,2),await ii({seconds:4,label:"Watch the snow fall."}),await St("Snow on the old tree again."),await St("Every winter it looks as if it might not wake up. Every spring, somehow, it does."),await Xn(8.5,2)}},{id:"scarf",label:"The other chair",at:[2.3,1],async run(n){let t=n.me;await t.walkTo(2.5,1.1),t.face(1.85,.6),await Wt(.6),await St("A blue scarf, still folded on the other chair."),await St("You never could bring yourself to move it.")}},{id:"frames",label:"The photographs on the wall",at:[-3,2],async run(n){let t=n.me;await t.walkTo(-3.1,2),t.face(-4,2),await Wt(.5),await St("Three frames. A wedding. A birthday cake. A child in a too-big coat, laughing at something you can no longer remember."),await Wn("I should have taken more.")}},{id:"album",kind:"story",label:"Open the album",at:[.4,.2],requires:[],async run(n){let t=n.me;await t.walkTo(.9,-.55),t.giveCane(!1),t.faceNow(.9,.6),t.setPose("read",{h:.45}),t.position.set(.9,0,-.35),await ce(.9,.3,5.8,3),Yi("title",{intensity:.2}),await St("The album. A gift, years and years ago."),await St("\u201CFor all the little moments,\u201D the card said."),await St("So many pages. So few pictures."),await Wn("Where did it all go?"),await ii({seconds:4,label:"Turn the first page."}),kt("rustle"),lo(.6,4),We("dream",6),await Gn(["Let\u2019s go back.","Back to the beginning, when everything was enormous \u2014","\u2014 and you were so very small."],{minTime:1.2}),await Xi(3,"#fff6ee"),w.ui.clearNarration()}}],final:"album"};Ie();Mi();Mi();Be();po();var Ru=["\u266A Little one, little one, close your eyes\u2026","\u266A the stars are out, the moon will rise\u2026","\u266A and when you wake, I\u2019ll still be here \u2014","\u266A little one, my little dear."];var op={id:"ch1-nursery",chapter:1,card:{num:"I",title:"Tiny",ages:"zero to one",quote:"You were so small once. Small enough to fit in two hands."},mood:"dawnNursery",music:"tiny",intensity:.3,ambience:{room:.4,birds:.35},zoom:6.2,surface:"wood",bounds:{minX:-3.75,maxX:3.75,minZ:-3.2,maxZ:3.3},hint:"You can only crawl. That\u2019s alright \u2014 nothing here is in a hurry. Find the glowing lights.",build(n){let t=n.world;n.r=mo(n,{era:"past"}),n.me=rn(.7,.3,.7,Math.PI*.8),n.me.setPose("sitGround"),n.mom=ci(Xe.mom,31,"Mom",-3.5,1.8,Math.PI/2),n.mom.root.visible=!1,n.dad=ci(Xe.dad,33,"Dad",-3.5,1.8,Math.PI/2),n.dad.root.visible=!1,t.add(Vn(.55,10123882,10,.02),-2.7,1.6),n.dog=Au(1,-2.7,1.6),n.dog.setPose("lie"),n.dog.wag=.3,n.dog.heading=n.dog.targetHeading=.6,t.addCollider({x:-2.7,z:1.6,r:.4}),n.blocks=[k.red,k.yellow,k.blue].map((e,i)=>{let s=j(.26,.26,.26,e);return t.add(s,1.4+i*.38,1.6+i%2*.25,{ry:i*.5}),s}),n.motes=t.particlesOf("motes",{center:new C(1.4,0,-1.6),area:{w:2.2,h:2.6,d:2.2},count:45,opacity:.35}),dr(n,{clouds:4,y:-6,spread:14})},async intro(n){sn({heartbeat:.8,room:.2},.5),await Gn(["Before you knew any words,","before you knew your own name,","there was a heartbeat. And then, there was light."],{minTime:1.3}),sn({room:.4,birds:.35},4),w.ui.clearNarration(),await qi(4),kt("coo"),await St("This was the whole world: one room, soft and pink and very, very big.")},moments:[{id:"mobile",label:"Look up at the stars",at:[-2.5,-1.75],caption:"The stars above your crib",async run(n){let t=n.me;await t.walkTo(-2.5,-1.75),t.faceNow(-2.5,-2.6),t.setPose("sitGround",{look:-.55,reach:!0}),n.r.mobile.userData.speed=.7,await ce(-2.5,-2.3,4.6,2.5),kt("sparkle"),await ii({seconds:5,label:"Watch them turn."}),await St("Five little stars, going round and round."),await St("The whole sky, as far as you knew."),await ee("mobile","The stars above your crib"),t.setPose("idle"),n.r.mobile.userData.speed=.25,await ve(t,6.2)}},{id:"sunbeam",label:"Crawl into the sunlight",at:[1.4,-1.5],caption:"Warm light on the floor",async run(n){let t=n.me;await t.walkTo(1.4,-1.5),t.setPose("sitGround",{look:-.2}),n.motes.setOpacity(2.6),We("dawnNursery",3,{warmth:.6,dream:.45,bloom:.6}),await Xn(4.8,3),await ii({seconds:6,label:"Feel the warm light."}),await St("Morning came in through the window and lay down on the floor beside you."),await ee("sunbeam","Warm light on the floor"),n.motes.setOpacity(1),We("dawnNursery",3),t.setPose("idle"),await Xn(6.2,2)}},{id:"biscuit",label:"Say hello to Biscuit",at:[-1.9,1.75],caption:"Biscuit, who was patient with you",async run(n){let t=n.me,e=n.dog;await t.walkTo(-1.95,1.7),t.face(-2.7,1.6),t.setPose("sitGround"),e.faceChar(t),e.wag=.8,await ce(-2.3,1.6,4.5,1.5),await ar({count:5,label:"Pat Biscuit",onTap:i=>{e.wag=.8+i*.3,kt(i%2?"giggle":"coo"),i===3&&e.setPose("sit")}}),kt("woof",{vol:.5}),await qn(t,1,.08),await St("Biscuit was only a puppy too. The two of you were learning the world together."),await ee("biscuit","Biscuit, who was patient with you"),e.setPose("lie"),e.wag=.4,t.setPose("idle"),await ve(t,6.2)}},{id:"blocks",label:"Build a tower",at:[1.8,1.25],caption:"Your first tower \u2014 and your first ruin",async run(n){let t=n.me;await t.walkTo(1.75,1),t.face(1.8,1.7),t.setPose("sitGround"),await ce(1.8,1.5,4.4,1.5);let e=new C(1.8,0,1.75);await cr({label:"Stack the blocks",keys:["up","up","up"],onStep:i=>{let s=n.blocks[i],r=s.position.clone(),o=e.clone().setY(i*.26);ei(.5,a=>{s.position.lerpVectors(r,o,a),s.position.y+=Math.sin(a*Math.PI)*.35,s.rotation.y=(1-a)*i*.5}),kt("tap")}}),await Wt(.6),await ar({count:1,label:"Now\u2026 knock it down!"}),kt("thud"),n.blocks.forEach((i,s)=>{let r=i.position.clone(),o=new C(e.x+(s-1)*.5+.2,0,e.z+.3+s*.2);ei(.6,a=>{i.position.lerpVectors(r,o,a),i.position.y=Math.max(0,r.y*(1-a)+Math.sin(a*Math.PI)*.2),i.rotation.x=a*(1+s)})}),await Wt(.5),kt("giggle"),await qn(t,2,.08),await St("Your first tower. Your first ruin. Both were wonderful."),await ee("blocks","Your first tower \u2014 and your first ruin"),t.setPose("idle"),await ve(t,6.2)}},{id:"lullaby",kind:"story",label:"Call for someone",at:[.3,.6],radius:1.3,caption:"The song she sang",async run(n){let t=n.me,e=n.mom;t.setPose("sitGround",{look:-.3}),kt("cry"),await Wt(2),kt("door"),e.root.visible=!0,e.place(-3.4,1.8,Math.PI/2),await ce(-1.2,1.2,6.5,1.5),await e.walkTo(t.position.x-.8,t.position.z+.2),e.faceChar(t),Ct(e,"Oh, oh, oh. I know. I know."),e.setPose("crouch"),await Wt(.8),e.pickUp(t),e.setPose("carry"),kt("coo"),await Ct(e,"There you are, little one. Did you think I\u2019d gone?"),await e.walkTo(2.3,-1.55),e.place(2.4,-2.15,-.7),e.setPose("rock"),await ce(2.3,-1.8,4.8,2),Yi("tinyHum",{intensity:.45});let i=n.r.chair.userData.rock,s=0,r=a=>{s+=a;let l=Math.sin(s*2)*.09;i.rotation.x=l,e.lean=l*.8};w.updaters.add(r),await Wt(1.5);let o=(async()=>{for(let a of Ru)await Ct(e,a,{passive:!0,hold:3.4,name:"Mom"})})();await lr({label:"Rock with her \u2014 press Space on the first beat of each bar",hits:4,onlyDownbeat:!0,window:.3}),await o,await ee("lullaby","The song she sang"),await St("She sang it every night. One day you would sing it too \u2014 though you didn\u2019t know that yet."),w.updaters.delete(r),i.rotation.x=0,e.lean=0,e.setPose("idle"),e.position.set(2,0,-1.5),await e.walkTo(.6,.9),e.putDown(.3,.6),t.setPose("sitGround"),await Ct(e,"Play for a little while. I\u2019m right here."),await e.walkTo(2,-1.4),e.place(2.4,-2.15,-.7),e.setPose("rock"),e.lookAt(t),Yi("tiny",{intensity:.4}),await ve(t,6.2)}},{id:"firstSteps",kind:"story",label:"Pull yourself up on the crib",at:[-1.6,-1.8],requires:["lullaby"],caption:"Three steps. They cried.",async run(n){let t=n.me,e=n.mom,i=n.dad;await t.walkTo(-1.6,-1.85),t.faceNow(-1.6,-2.6),kt("door"),i.root.visible=!0,i.place(-3.4,1.8,Math.PI/2),await ce(-.4,-.3,6.8,1.5),await i.walkTo(.9,1),i.faceChar(t),await Ct(i,"Hey, hey \u2014 what\u2019s this? What are you up to?"),e.setPose("idle"),e.lookAt(null),e.walkTo(1.7,-.6).then(()=>e.faceChar(t)),t.setAge(1.35),t.setPose("stand"),t.faceNow(i.position.x,i.position.z),kt("coo"),await Ct(e,"Oh. Oh my goodness. Look.",{passive:!0,hold:2}),i.setPose("kneelOpen"),await ml({label:"Find your balance \u2014 \u2190 \u2192",seconds:3.5,difficulty:.8,onUpdate:o=>{t.tilt=-o*.3}}),t.tilt=0,await Ct(i,"Come on. Come to me. You can do it."),w.director.current.speedMul=.55;let s=0,r=o=>{s+=o,t.tilt=Math.sin(s*7)*.12};w.updaters.add(r),await co({label:"Walk to Dad",items:[{x:i.position.x,z:i.position.z,r:.45}],showCount:!1}),w.updaters.delete(r),t.tilt=0,w.director.current.speedMul=1,i.pickUp(t),i.setPose("carryHigh"),kt("giggle"),kt("yay",{delay:.2}),qn(i,2,.15),await ce(i.position.x,i.position.z,5.2,1.2),await Ct(i,"Look at you! Look at you go!"),e.setPose("cry"),await Ct(e,"Three steps! Did you count? Three!"),await Ct(e,"I\u2019m not crying. You\u2019re crying."),await ee("firstSteps","Three steps. They cried."),e.setPose("idle"),await St("That spring, they carried you outside for the very first time."),await Xi(2.5,"#fff6ee")}}],final:"firstSteps"},ap={id:"ch1-spring",chapter:1,mood:"springMorning",music:"tiny",intensity:.45,ambience:{birds:.8,wind:.25},zoom:8,surface:"grass",hint:"Explore the garden. Nobody is in a hurry today.",build(n){let t=n.world;n.r=vl(n,{season:"spring",treeStage:0,picnic:!0,flowers:!0}),n.r.tree.visible=!1,t.removeCollidersOf(n.r.tree),t.bounds={minX:-9.8,maxX:6.5,minZ:-3.6,maxZ:5.8};let e=n.me=rn(1.1,1.2,1,Math.PI*.2);e.setPose("sitGround"),n.mom=ci(Xe.mom,32,"Mom",.4,1.9,2.4),n.mom.setPose("sitGround"),n.dad=ci(Xe.dad,34,"Dad",2.1,1.6,-2),n.dad.setPose("sitGround"),n.grandpa=ci(Xe.grandpa,66,"Grandpa",-3.6,-2.05,0),n.grandpa.setPose("sit",{h:.45}),n.grandma=ci(Xe.grandma,64,"Grandma",-2.8,-2.05,0),n.grandma.setPose("sit",{h:.45}),n.dog=Au(1.5,3.5,2.5),n.dog.follow(e,1.8),n.dog.wag=1,n.petals=t.particlesOf("petals",{center:new C(-8.5,0,0),area:{w:7,h:5,d:7},count:70}),t.butterflies(3,{x:0,z:3,r:4},3),t.birds(6,2),dr(n,{clouds:7,y:-4,spread:24})},async intro(n){await qi(3),await St("The world, it turned out, was much bigger than one room."),await Ct(n.grandma,"Look at those eyes. They want to see everything.")},moments:[{id:"petals",label:"Reach for the falling petals",at:[-7.6,.4],caption:"Blossoms, falling like slow snow",async run(n){let t=n.me,e=n.world;await t.walkTo(-7.6,.4),await ce(-8,.4,6.5,1.5),t.setPose("sitGround",{look:-.4,reach:!0}),await Wt(1),t.setPose("idle");let i=we(9),s=[];for(let r=0;r<5;r++){let o=Wi(16763096,.55,.95),a=-8+i.range(-2.2,2.2),l=.4+i.range(-2,2);o.position.set(a,3+r*.6,l),e.root.add(o);let c={obj:o,x:a,z:l},h=u=>{o.position.y>.25&&(o.position.y-=u*.45,o.position.x+=Math.sin(w.time*2+r)*u*.3),c.got&&(o.material.opacity-=u*2,o.material.opacity<=0&&(e.root.remove(o),w.updaters.delete(h)))};w.updaters.add(h),s.push(c)}await ve(t,7),await co({label:"Catch the petals",items:s,radius:.55,onCollect:()=>kt("giggle")}),t.setPose("sitGround",{look:-.3}),await Ct(n.grandma,"The blossoms only last a week, little one.",{name:"Grandma"}),await St("You didn\u2019t know what a week was. You didn\u2019t know they only last a week."),await ee("petals","Blossoms, falling like slow snow"),t.setPose("idle")}},{id:"grass",label:"Touch the grass",at:[3.6,4],caption:"The first time you touched grass",async run(n){let t=n.me;await t.walkTo(3.6,4),t.setPose("sitGround",{look:.4}),await ce(3.6,4,4.6,1.5),sn({birds:1,wind:.4},2),await $n({label:"Hold Space to feel the grass",seconds:3,onProgress:(e,i)=>{i&&Math.random()<.04&&kt("rustle",{vol:.5})}}),kt("giggle"),await qn(t,2,.06),kt("giggle",{delay:.3}),await St("It was cool, and it tickled. You laughed at the grass for a long, long time."),await ee("grass","The first time you touched grass"),sn({birds:.8,wind:.25},2),t.setPose("idle"),await ve(t,8)}},{id:"butterfly",label:"Follow the butterfly",at:[-2,4.2],caption:"The butterfly that got away",async run(n){let t=n.me,e=n.world,i=new ot,s=new Ye(.22,.17);s.translate(.11,0,0);let r=ye(16774896,{side:Se,emissive:16773344,emissiveIntensity:.6}),o=new Rt(s,r),a=new Rt(s,r);a.scale.x=-1,o.rotation.x=a.rotation.x=-Math.PI/2;let l=new ot;l.add(o);let c=new ot;c.add(a),i.add(l,c);let h=Wi(16774368,.7,.6);i.add(h),e.root.add(i);let u=0,f=g=>{u+=g*.32;let d=-2+Math.sin(u)*2.6+Math.sin(u*2.2)*.6,x=3.4+Math.cos(u*.8)*1.6,m=d-i.position.x,v=x-i.position.z;i.position.set(d,.7+Math.sin(u*5)*.2,x),i.rotation.y=Math.atan2(m,v)-Math.PI/2;let y=Math.sin(w.time*14)*1.1;l.rotation.z=y,c.rotation.z=-y};w.updaters.add(f),await ve(t,7),await gl({target:i,dist:1.5,seconds:9,label:"Follow it. Don\u2019t lose it."}),t.setPose("sitGround",{look:-.5,reach:!0}),await Wt(.5),w.updaters.delete(f);let p=i.position.clone();await ei(3,g=>{i.position.set(p.x+g*3,p.y+g*6,p.z-g*2);let d=Math.sin(w.time*14)*1.1;l.rotation.z=d,c.rotation.z=-d}),e.root.remove(i),await St("It never let you catch it. That was alright. Some things are only for watching."),await ee("butterfly","The butterfly that got away"),t.setPose("idle")}},{id:"firstWord",kind:"story",label:"Crawl back to the blanket",at:[1.2,1.2],radius:1.4,caption:{id:"firstWord",text:"Your first word"},async run(n){let t=n.me,e=n.mom,i=n.dad;await t.walkTo(1.25,1.05),t.setPose("sitGround"),t.face(1.2,4),await ce(1.2,1.4,5.2,1.5),e.lookAt(t),i.lookAt(t),await Ct(e,"Can you say \u201CMama\u201D? Ma-ma?"),await Ct(i,"Don\u2019t listen to her. Da-da. Daaa-da."),n.dog.walkTo(2.4,2.4).then(()=>n.dog.setPose("sit"));let s=await _n("Your very first word\u2026",["\u201CMama.\u201D","\u201CDada.\u201D","\u201CWoof!\u201D"]),r=["Mama","Dada","Woof"][s];kt("coo",{pitch:1.2}),await Wt(.6),s===0?(e.setPose("jump"),await Ct(e,"Did you hear that? Did everyone hear that?!"),e.setPose("sitGround"),await Ct(i,"That\u2019s not fair. I\u2019ve been practising with them for weeks.")):s===1?(i.setPose("jump"),await Ct(i,"YES! Everyone heard that, right? That counts!"),i.setPose("sitGround"),await Ct(e,"Traitor."),await St("She was smiling when she said it.")):(kt("woof",{n:2}),n.dog.wag=2,await Ct(n.grandpa,"Well. Now we know who the favourite is."),await Ct(e,"Biscuit! You taught them that!")),kt("giggle"),await ee("firstWord",`Your first word: \u201C${r}\u201D`),w.state.flags.firstWord=r}},{id:"grandpaLap",kind:"story",label:"Go to Grandpa",anchor:n=>n.grandpa,offset:[0,0,.8],requires:["firstWord"],caption:"Asleep on Grandpa\u2019s lap",async run(n){let t=n.me,e=n.grandpa,i=n.dad;i.setPose("idle"),await i.walkToChar(t,.6),i.setPose("crouch"),await Wt(.5),i.pickUp(t),i.setPose("carry"),await i.walkTo(e.position.x+.2,e.position.z+.9),i.faceChar(e),await Ct(e,"Give that little bundle here."),i.putDown(e.position.x,e.position.z+.3),e.pickUp(t),e.setPose("carry"),await i.walkTo(.4,.3),await ce(e.position.x,e.position.z,4.6,2.5),Yi("whistle",{intensity:.5}),We("goldenAfternoon",10,{dream:.3}),await St("Grandpa whistled the same song your mother sang to you."),await St("He had sung it to her, once, when she was the one who was small."),await ii({seconds:7,label:"Close your eyes."}),t.setPose("sleep"),await ee("grandpaLap","Asleep on Grandpa\u2019s lap",{window:10}),await Wt(1),Yi("tiny",{intensity:.2}),await Xi(4,"#16121a"),await Gn(["You won\u2019t remember any of this.","Not the stars, not the sunlight, not the song.","But they will.","They will carry it for you \u2014 until you\u2019re big enough to carry it yourself."],{minTime:1.4}),w.ui.clearNarration(),await Wt(1.2)}}],final:"grandpaLap"};Ie();Mi();Mi();Be();po();function lp(){return uu(512,384,(n,t,e)=>{n.fillStyle="#fbf7ee",n.fillRect(0,0,t,e),n.lineCap="round",n.lineJoin="round";let i=(l,c)=>[l+Math.sin(c*.13)*2,c+Math.cos(l*.11)*2],s=(l,c,h=6)=>{n.strokeStyle=c,n.lineWidth=h,n.beginPath(),l.forEach(([u,f],p)=>{let[g,d]=i(u,f);p?n.lineTo(g,d):n.moveTo(g,d)}),n.stroke()};s([[10,330],[120,325],[260,335],[400,322],[500,330]],"#5aa846",10),n.fillStyle="#f6c63c",n.beginPath(),n.arc(440,70,34,0,7),n.fill();for(let l=0;l<9;l++){let c=l*.7;s([[440+Math.cos(c)*44,70+Math.sin(c)*44],[440+Math.cos(c)*62,70+Math.sin(c)*62]],"#f6c63c",5)}s([[380,330],[385,200]],"#8a5a3a",16),n.fillStyle="#6cbf4c",n.beginPath(),n.arc(385,170,70,0,7),n.fill(),s([[402,200],[402,262]],"#e2c9a0",3),s([[430,200],[430,262]],"#e2c9a0",3),s([[396,262],[436,262]],"#c0392b",6);let r=(l,c,h,u)=>{n.strokeStyle="#333",n.lineWidth=4,n.beginPath(),n.arc(l,330-120*c,18*c,0,7),n.stroke(),s([[l-14*c,335-125*c],[l+14*c,335-125*c]],u,8*c),s([[l,330-100*c],[l,330-45*c]],h,7),s([[l,330-45*c],[l-16*c,330]],"#333",4),s([[l,330-45*c],[l+16*c,330]],"#333",4),s([[l-34*c,330-70*c],[l+34*c,330-70*c]],"#333",4),n.fillStyle="#333",n.fillRect(l-7*c,330-124*c,3,3),n.fillRect(l+5*c,330-124*c,3,3),n.beginPath(),n.arc(l,330-116*c,7*c,.2,Math.PI-.2),n.stroke()};r(90,1.3,"#d9584a","#6b3f2a"),r(170,1.35,"#3f9a8a","#2a1e1a"),r(240,.85,"#f2a3b5","#7a4a2e"),n.fillStyle="#d9584a",n.font='bold 40px "Comic Sans MS", "Chalkboard SE", cursive',n.fillText(De("{me}"),40,60),n.fillText("ME",210,110),n.fillStyle="#e04a7a",n.beginPath();let o=300,a=70;n.moveTo(o,a+10),n.bezierCurveTo(o-30,a-15,o-10,a-35,o,a-15),n.bezierCurveTo(o+10,a-35,o+30,a-15,o,a+10),n.fill()})}function Cu({id:n,label:t,at:e,emails:i=12,cost:s=60,lines:r}){return{id:n,label:t,at:e,kind:"work",once:!1,radius:1,async run(o,a){let l=a.uses=(a.uses||0)+1;kt("ping"),await o.me.walkTo(e[0]+.5,e[1]+.4),o.me.face(e[0],e[1]),o.me.setPose(o.def.workPose??"idle");let c=r?.[(l-1)%r.length]??"Just a few emails.";await Wn(c);for(let u=0;u<6;u++)kt("tap",{vol:.5}),await Wt(.12);w.state.stats.emails+=i,o.passTime(s);let h=o.world.hotspots.filter(u=>u.enabled&&!u.done&&(u.m?.kind??"little")==="little");if(h.length){let u=h[Math.floor(Math.random()*h.length)];u.setEnabled(!1),u.done=!0,u.m?.caption&&Tu(u.m.caption.id??u.m.id,typeof u.m.caption=="string"?u.m.caption:u.m.caption.text),kt("lost",{vol:.5})}await St(o.def.workAfter?.[(l-1)%o.def.workAfter.length]??"When you looked up, the light had moved across the floor."),o.me.setPose("idle"),a.label=`${t} (${Math.max(3,i+l*5)} unread)`}}}var cp={id:"ch5-newborn",chapter:5,card:{num:"V",title:"Little Ones",ages:"thirty to forty",quote:"And then, one spring night, the house was full again."},mood:"nurseryNight",music:"little",intensity:.3,ambience:{room:.35,crickets:.25},zoom:8,surface:"wood",bounds:{minX:-3.75,maxX:3.75,minZ:-3.2,maxZ:3.3},ages:[31,31],clock:{seconds:330},timeUpText:"The first weeks went by in one long, sleepless, golden blur.",workAfter:["When you looked up, they had already fallen asleep \u2014 without you.","Sam had done the night feed alone again."],hint:"Blue lights are work. They will always be there.",build(n){let t=n.world;n.r=mo(n,{era:"present",night:!0}),n.r.mobile.visible=!1,n.me=rn(31,.6,1.4,Math.PI),n.sam=ci(Xe.sam,31,"Sam",-.4,1.2,Math.PI*.9),n.baby=ci(ur(.05),.05,"Baby",-.4,1.2),n.sam.pickUp(n.baby),n.sam.setPose("carry");let e=gs({w:1,d:.6,color:k.woodLight});t.add(e,3.3,.6,{ry:-Math.PI/2,collide:{w:1,d:.6}});let i=xu();t.add(i,3.3,.6,{y:.75,ry:-Math.PI/2}),t.add(vu(.6),2.9,2.6,{collide:.4}),n.atticBox=[2.9,2.6],t.add(vu(.5),3.4,2,{collide:.35}),dr(n,{clouds:3,y:-6,spread:14})},async intro(n){await Gn(["Your parents moved to a little house by the sea.","The big house was yours now \u2014 the creaky stairs, the garden, the tree.","And the small pink room at the top of the stairs."],{minTime:1.2}),w.ui.clearNarration();let t=await _n("One spring night, someone new arrived. You had\u2026",["a daughter","a son"]);w.state.childKind=t===0?"daughter":"son";let e=t===0?"Lily":"Leo";w.state.childName=await tp(`What did you name ${t===0?"her":"him"}?`,e),n.baby.name=nr(),await qi(3),await St("{child}. The word felt strange for a day, and then it was the only word."),await Ct(n.sam,"Look at {them}. Look at what we made.")},moments:[{id:"holdNewborn",kind:"story",label:"Hold {child}",anchor:n=>n.sam,offset:[.4,0,.6],caption:"So small",async run(n){let t=n.me,e=n.sam,i=n.baby;await t.walkToChar(e,.7),e.faceChar(t),await Ct(e,"Here. Support the head. You\u2019ve got {them}."),e.putDown(t.position.x,t.position.z),t.pickUp(i),t.setPose("carry"),kt("coo",{pitch:1.3}),await ce(t.position.x,t.position.z,4.4,2),lo(.6,3),await $n({label:"Hold {them} close",seconds:5}),await St("So small. Smaller than you remembered anyone could be."),await St("Once, you were this small. Someone held you exactly like this."),await ee("holdNewborn","So small"),lo(.35,4),e.walkTo(-1.4,2.7).then(()=>{e.setPose("sitGround"),e.faceNow(.5,0)}),await ve(t,8)}},{id:"mobile",label:"Open the box from the attic",at:[2.6,2.1],requires:["holdNewborn"],caption:"The same five stars",async run(n){let t=n.me;await t.walkTo(2.5,2),t.face(2.9,2.6),t.setPose("crouch"),await St("A box from the attic, labelled in your mother\u2019s handwriting: NURSERY."),await Wt(.6),await St("Inside, wrapped in tissue paper: five little stars on strings."),t.setPose("carry"),await t.walkTo(-2,-1.7),t.face(-2.5,-2.55),await ce(-2.5,-2.2,5,1.5),await cr({label:"Hang the mobile",keys:["up","left","right","up"]});let e=n.r.mobile;e.visible=!0,e.position.set(-2.5,.55,-2.55),e.userData.speed=.4,kt("sparkle"),await ii({seconds:4,label:"Watch them turn."}),await St("The same five stars. Going round and round, for somebody new."),await ee("mobile","The same five stars"),await ve(t,8)}},{id:"finger",label:"Let {child} hold your finger",at:[.4,-.6],requires:["holdNewborn"],caption:"{Their} whole hand around one finger",async run(n){let t=n.me;await t.walkTo(.4,-.5),t.setPose("sit",{h:0}),t.setPose("sitGround"),await ce(.4,-.4,4,1.5),await $n({label:"Offer one finger",seconds:3.5}),kt("coo",{pitch:1.4}),await St("{Their} whole hand closed around one of your fingers, and held on."),await St("As if {they} already knew you. As if {they} had been waiting."),await ee("finger","{Their} whole hand around one finger"),t.setPose("carry"),await ve(t,8)}},{id:"blanket",label:"Cover Sam with a blanket",anchor:n=>n.sam,offset:[.5,0,.5],requires:["holdNewborn"],caption:"Both of you, so tired",async run(n){let t=n.me,e=n.sam;await t.walkTo(e.position.x+.6,e.position.z+.6),t.faceChar(e);let i=j(.7,.05,.6,12114120);n.world.add(i,e.position.x,e.position.z+.15,{y:.28,ry:.3}),kt("rustle"),await ii({seconds:4,label:"Let them sleep."}),await St("You had never been so tired. You had never been so happy. It turned out those could be the same thing."),await ee("blanket","Both of you, so tired")}},{id:"watchSleep",label:"Watch {them} breathe",at:[-1.9,-1.5],requires:["nightRocking"],caption:"Watching {them} breathe",async run(n){let t=n.me;await t.walkTo(-1.9,-1.55),t.face(-2.5,-2.55),await ce(-2.4,-2.3,4.2,2),await ii({seconds:8,label:"Just watch."}),await St("In. Out. In. Out. You could have watched for a hundred years."),await ee("watchSleep","Watching {them} breathe"),await ve(t,8)}},Cu({id:"laptop",label:"Answer emails",at:[3.3,.6],emails:14,cost:70,lines:["Just ten minutes. Just the urgent ones.","They said it couldn\u2019t wait.","One more. Then bed."]}),{id:"nightRocking",kind:"story",label:"It\u2019s 3 a.m. \u2014 {child} is crying",at:[2,-1.5],requires:["holdNewborn"],caption:"Your mother\u2019s song, now yours",async run(n){let t=n.me,e=n.sam,i=n.baby;kt("cry"),We("nurseryNight",3,{saturation:.85,vignette:.65}),t.carried||(await t.walkToChar(e,.7),e.putDown(t.position.x,t.position.z),t.pickUp(i)),t.setPose("carry"),kt("cry",{delay:1.5}),await t.walkTo(2.2,-1.6),t.place(2.4,-2.15,-.7),t.setPose("rock"),await ce(2.3,-1.8,4.6,2),await Wn("What did Mom do? What did she sing?"),await Wt(.6),await St("And then, from somewhere very deep, the song came back to you."),Yi("littleHum",{intensity:.5});let s=n.r.chair.userData.rock,r=0,o=l=>{r+=l;let c=Math.sin(r*2)*.09;s.rotation.x=c,t.lean=c*.8};w.updaters.add(o),await Wt(1.2);let a=(async()=>{for(let l of Ru)await Ct(t,l,{passive:!0,hold:3.4,name:"You"})})();await lr({label:"Rock with the song \u2014 press on the first beat",hits:4,onlyDownbeat:!0,window:.3}),await a,i.setPose("sleep"),await ee("nightRocking","Your mother\u2019s song, now yours"),w.updaters.delete(o),s.rotation.x=0,t.lean=0,await St("You phoned your mother the next morning, just to tell her. She cried a little. So did you."),Yi("little",{intensity:.4}),We("nurseryNight",3),t.setPose("idle"),t.position.set(2,0,-1.5),await t.walkTo(-1.9,-1.9),t.putDown(-2.5,-2.55),i.setPose("sleep"),i.extraY=.5,await ve(t,8)}},{id:"dawn",kind:"story",label:"Look out of the window",at:[1.2,-2.6],requires:["nightRocking"],caption:"The first sunrise with {child}",async run(n){let t=n.me;await t.walkTo(1.2,-2.5),t.face(1.2,-4),We("dawnNursery",8),sn({birds:.6,room:.3},6),await Xn(6.5,4),await ii({seconds:5,label:"The sun is coming up."}),await St("You hadn\u2019t slept at all. You had never felt less tired."),await ee("dawn","The first sunrise with {child}"),await St("Everyone tells you the days are long and the years are short. Nobody tells you how fast they mean."),await Xi(3,"#fff6ee")}}],final:"dawn"},hp={id:"ch5-steps",chapter:5,mood:"homeMorning",music:"little",intensity:.45,ambience:{room:.35,birds:.35,fire:.25},zoom:8.5,surface:"wood",ages:[32,33],clock:{seconds:330},timeUpText:"One morning you noticed {they} didn\u2019t crawl anymore. You couldn\u2019t remember the last time {they} had.",workAfter:["By the time you hung up, {they} had learned a new word. Sam heard it first.","The call took an hour. It felt like five minutes. It was {their} whole morning."],hint:"Spend the morning however you like.",build(n){n.r=sp(n,{night:!1,fire:!0,toys:!0}),n.me=rn(32,1.6,1.4,-2.4),n.sam=ci(Xe.sam,32,"Sam",-1.5,2.2,2.5),n.sam.setPose("sitGround"),n.kid=ci(ur(1.1),1.1,nr(),-.6,1.8,.3),n.kid.setPose("sitGround");let t=yu();n.world.add(t,.6,-1.2,{y:.42}),n.phoneObj=t,n.bubbleField=null},async intro(n){await qi(3),await St("{child} could crawl now. Fast. Everything in the house had to move up a shelf."),n.kid.walkSpeed=1,n.kid.walkTo(.6,.6).then(()=>n.kid.setPose("sitGround"))},moments:[{id:"peekaboo",label:"Play peekaboo",anchor:n=>n.kid,offset:[.5,0,.5],caption:"Peekaboo, four hundred times",async run(n){let t=n.me,e=n.kid;await t.walkToChar(e,.9),e.faceChar(t),t.setPose("kneel"),await ce(e.position.x,e.position.z,4.8,1.5),await lr({label:"Hide\u2026 and appear! (press with the pulse)",hits:5,period:1.3,window:.3,onPulse:()=>t.setPose("cry"),onHit:(i,s)=>{s>0&&(t.setPose("armsOpen"),kt("giggle",{pitch:1.3}),qn(e,1,.06))}}),t.setPose("kneel"),await St("Every single time, {they} were astonished that you came back."),await ee("peekaboo","Peekaboo, four hundred times"),t.setPose("idle"),await ve(t,8.5)}},{id:"tower",label:"Build a tower together",at:[-1.2,1.1],caption:"{They} knocked it down. You built it again.",async run(n){let t=n.me,e=n.kid,i=n.world;await t.walkTo(-.7,.9),t.face(-1.2,1.4),t.setPose("sitGround"),e.walkTo(-1.4,.7).then(()=>{e.setPose("sitGround"),e.faceChar(t)}),await ce(-1.1,1.2,4.6,1.5);let s=[k.red,k.yellow,k.blue,k.green].map((r,o)=>{let a=j(.24,.24,.24,r);return i.add(a,-1+o*.3,1.8,{}),a});await cr({label:"Stack them up",keys:["up","up","up","up"],onStep:r=>{let o=s[r],a=o.position.clone(),l=new C(-1.15,r*.24,1.35);ei(.45,c=>{o.position.lerpVectors(a,l,c),o.position.y+=Math.sin(c*Math.PI)*.3}),kt("tap")}}),await Wt(.6),e.setPose("reachForward"),kt("thud"),s.forEach((r,o)=>{let a=r.position.clone(),l=new C(-1.15+(o-1.5)*.45,0,1.6+o*.15);ei(.6,c=>{r.position.lerpVectors(a,l,c),r.rotation.x=c*2})}),kt("giggle",{pitch:1.3,delay:.3}),await Wt(.8),e.setPose("sitGround"),await St("Your first tower fell like this, a long time ago. You laughed then too."),await ee("tower","{They} knocked it down. You built it again."),t.setPose("idle"),await ve(t,8.5)}},{id:"bubbles",label:"Blow bubbles",at:[2.2,.2],caption:"{Their} first word was you",async run(n){let t=n.me,e=n.kid,i=n.world;await t.walkTo(2,.4),t.face(.6,.6),await ce(1.3,.6,5.2,1.5);let s=i.particlesOf("bubbles",{center:new C(1,0,.6),area:{w:3,h:2.5,d:3},count:1,opacity:0});await $n({label:"Hold Space to blow",seconds:3,onProgress:o=>{s.n<30&&o>0,s.setOpacity(o*1.6),Math.random()<.05&&kt("bloop",{vol:.4})}}),i.removeParticles(s);let r=i.particlesOf("bubbles",{center:new C(1,0,.6),area:{w:3,h:2.5,d:3},count:24,opacity:1});e.setPose("reach"),e.lookAt(t),await ar({count:5,label:"Pop them for {them}",onTap:()=>{kt("pop"),kt("giggle",{pitch:1.3,vol:.6})}}),e.setPose("sitGround"),await Wt(.4),kt("coo",{pitch:1.3}),await Ct(e,"{me}!",{name:"{child}"}),await Ct(n.sam,"Did \u2014 did {they} just \u2014",{passive:!0,hold:1.6}),await St("{Their} first word. It was you."),await ee("bubbles","{Their} first word was you"),r.setOpacity(0),await ve(t,8.5)}},{id:"picturebook",label:"Read a picture book",at:[.6,-2.1],caption:"\u201CMoo,\u201D said the cow. Every night.",async run(n){let t=n.me,e=n.kid;await t.walkTo(.6,-2.05),t.faceNow(.6,0),t.setPose("read",{h:.45}),t.position.z=-2.35,await e.walkTo(1.1,-1.8),e.setPose("sitGround"),e.faceChar(t),await ce(.8,-2,4.6,1.5),await Ct(t,"And what does the cow say?"),await _n("What does the cow say?",["\u201CMoooo.\u201D","\u201CWoof!\u201D","\u201CQuack?\u201D"])===0?(kt("giggle",{pitch:1.3}),await Ct(e,"Mooo!",{name:"{child}"})):(kt("giggle",{pitch:1.3}),await Ct(e,"Nooo! Mooo!",{name:"{child}"}),await St("{They} corrected you, very seriously, every night for a year.")),await ii({seconds:4,label:"Turn the pages slowly."}),await ee("picturebook","\u201CMoo,\u201D said the cow. Every night."),t.setPose("idle"),t.position.z=-2.05,await ve(t,8.5)}},Cu({id:"phone",label:"Answer the work call",at:[.6,-1.2],emails:6,cost:80,lines:["It\u2019s the office. It\u2019s probably important.","They keep calling.","Five minutes, I promise."]}),{id:"firstSteps",kind:"story",label:"Kneel down and open your arms",at:[2.6,1.6],caption:"Three steps. You cried.",async run(n){let t=n.me,e=n.kid,i=n.sam;await t.walkTo(2.6,1.6),e.place(-.9,1.2),e.setPose("sitGround"),t.faceChar(e),t.setPose("kneelOpen"),i.setPose("idle"),i.walkTo(-1.6,.6).then(()=>i.faceChar(e)),await ce(.8,1.4,6,1.5),await Ct(t,"Come on, {child}. Come here. You can do it."),e.setAge(1.35),e.setPose("stand"),e.faceChar(t),await Ct(i,"Oh. Oh, look. Look at {them}.",{passive:!0,hold:2}),await ml({label:"Steady, steady \u2014 \u2190 \u2192",seconds:3.5,difficulty:.8,onUpdate:o=>{e.tilt=-o*.3}}),e.tilt=0;let s=0,r=o=>{s+=o,e.tilt=Math.sin(s*7)*.12};w.updaters.add(r),e.walkSpeed=.6,await e.walkTo(t.position.x-.55,t.position.z-.1),w.updaters.delete(r),e.tilt=0,t.setPose("carryHigh"),t.pickUp(e),kt("giggle",{pitch:1.3}),kt("yay",{delay:.2,pitch:1.3}),qn(t,2,.12),await ce(t.position.x,t.position.z,4.8,1.2),await Ct(i,"Three steps! Did you count?"),t.setPose("carry"),await Wn("My mother cried, when I did this. Now I understand."),await ee("firstSteps","Three steps. You cried."),await St("After that, {they} never stopped walking. Away from you, mostly. That was the point. That was the hard part."),await Xi(2.5,"#fff6ee")}}],final:"firstSteps"},up={id:"ch5-summer",chapter:5,mood:"summerDay",music:"play",intensity:.45,ambience:{birds:.8,wind:.2},zoom:11,surface:"grass",ages:[36,37],clock:{seconds:400},timeUpText:"Somewhere in the middle of that summer, {they} stopped asking you to watch.",workAfter:["The sun had moved all the way across the yard.","{They} had come to show you something. You said \u201Cin a minute.\u201D {They} didn\u2019t come back."],hint:"A whole Saturday. Spend it well.",build(n){let t=n.world;n.r=vl(n,{season:"summer",treeStage:2,swing:!0,sandbox:!0}),t.bounds={minX:-12,maxX:12,minZ:-4,maxZ:7.5},n.me=rn(36,-4.6,.8,.5),n.sam=ci(Xe.sam,36,"Sam",-3,-2.05,0),n.sam.setPose("sit",{h:.45}),n.kid=ci(ur(6),6,nr(),2.2,.6,.5),n.kid.walkSpeed=2.6;let e=yu();t.add(e,-3.6,-2.05,{y:.47}),n.phoneAt=[-3.6,-2.05],t.butterflies(3,{x:0,z:2,r:6},7),t.birds(5,3),n.bike=fu(k.teal,.8),t.add(n.bike,7,6.4),dr(n,{clouds:7,y:-4,spread:24})},async intro(n){await qi(3),await St("The tree your grandfather planted with you was big enough for a swing now."),await Ct(n.kid,"{me}! {me}! Watch me! Are you watching?",{name:"{child}"})},moments:[{id:"swing",kind:"story",label:"Push the swing",at:[5.4,-1.2],caption:"\u201CHigher! Higher!\u201D",async run(n){let t=n.me,e=n.kid,i=n.r.tree,s=i.userData.swing,r=i.userData.swingLen,o=new C;s.getWorldPosition(o),await e.walkTo(o.x,o.z+.05),e.setPose("swing",{h:0}),e.faceNow(o.x,o.z+3),await t.walkTo(o.x,o.z-1),t.faceNow(o.x,o.z+2),await ce(o.x,o.z,6.5,1.5);let a=.15,l=0,c=h=>{l+=h;let u=Math.sin(l*Math.PI/1.2)*a;s.rotation.x=u;let f=o.y-Math.cos(u)*r,p=o.z+Math.sin(u)*r;e.position.set(o.x,0,p),e.extraY=f+.03,e.lean=-u*.5,t.setPose("push",{phase:Math.max(0,-Math.sin(l*Math.PI/1.2))})};w.updaters.add(c),await lr({label:"Push when the swing comes back to you",hits:6,period:2.4,window:.35,onHit:(h,u)=>{u>0&&(a=Math.min(.75,a+.1),kt("giggle",{pitch:1.1}),(h===2||h===4)&&Ct(e,h===2?"Higher!":"HIGHER!",{passive:!0,hold:1.2,name:"{child}"}))}}),await Ct(e,"I\u2019m flying! {me}, I can touch the leaves!",{name:"{child}"}),await ee("swing","\u201CHigher! Higher!\u201D"),await ei(2.5,h=>{a=.75*(1-h)}),w.updaters.delete(c),s.rotation.x=0,e.extraY=0,e.lean=0,e.setPose("idle"),e.place(o.x+.6,o.z+.8),t.setPose("idle"),await ve(t,11)}},{id:"bike",label:"Teach {them} to ride a bike",at:[6.4,5.6],caption:"You let go. {They} didn\u2019t notice.",async run(n){let t=n.me,e=n.kid,i=n.world;await e.walkTo(6.6,5.4),await t.walkTo(6.2,5),i.remove(n.bike);let s=fu(k.teal,.8);e.root.add(s),s.position.set(0,0,0),s.rotation.y=-Math.PI/2,s.scale.setScalar(.8/e.root.scale.x),e.setPose("bike",{h:.55}),await Ct(e,"Don\u2019t let go. Promise you won\u2019t let go.",{name:"{child}"}),await ve(t,8),e.walkSpeed=1.6;let r=[[-2,5.6],[-9,5.6]],o=e.walkTo(r[0][0],r[0][1]);await gl({target:e,dist:1.4,seconds:6,label:"Run alongside. Hold on."}),await _n("{They} are wobbling less now\u2026",["Let go","Hold on a little longer"])===0?(e.walkSpeed=3.2,e.walkTo(-10,5.6),await St("You let go. {They} didn\u2019t even notice. {They} just kept going, and going."),await ee("bike","You let go. {They} didn\u2019t notice.")):(await o,e.walkSpeed=3.2,e.walkTo(-10,5.6),await St("You held on a few more metres. Then {they} pulled ahead on {their} own, and you were just holding air."),await ee("bike","You held on a little longer")),await Wt(1.5),e.root.remove(s),e.setPose("idle"),e.walkSpeed=2.6,i.add(n.bike,7,6.4),e.place(-8,4.8),await ve(t,11)}},{id:"puddles",label:"Jump in the puddles after the rain",at:[-1,4],caption:"Soaked to the knees, both of you",async run(n){let t=n.me,e=n.kid,i=n.world;We("rainyGrey",2);let s=i.particlesOf("rain",{area:{w:26,h:12,d:26}});sn({rain:.8,birds:.1},1.5),await St("A summer shower, out of nowhere. Then \u2014 just as fast \u2014 sun."),await Wt(2.5),i.removeParticles(s),We("summerDay",3),sn({birds:.8,wind:.2},3);let r=[[-2.5,3.2],[.4,4.6],[-.6,2.2],[1.6,3],[-2,5.2]].map(([o,a])=>{let l=Vn(.45,9417936,10,.02);return l.material=ye(10274016,{roughness:.2,transparent:!0,opacity:.85}),i.add(l,o,a),{obj:l,x:o,z:a}});e.follow(t,1),await ve(t,9),await co({label:"Splash!",items:r,radius:.5,onCollect:o=>{kt("splash"),i.burst(new C(o.x,.2,o.z),{color:13625599,count:25,speed:1.5,size:.18}),kt("giggle",{pitch:1.1,delay:.3})}}),e.follow(null),await St("Sam just shook their head from the porch. Then came down and jumped in too."),await ee("puddles","Soaked to the knees, both of you"),r.forEach(o=>i.remove(o.obj))}},{id:"dandelions",label:"Blow dandelions",at:[9,1],caption:"You both wished for the same thing",async run(n){let t=n.me,e=n.kid,i=n.world;await t.walkTo(8.6,1.2),await e.walkTo(9.4,1.4),e.faceChar(t),t.faceChar(e),t.setPose("sitGround"),e.setPose("sitGround"),await ce(9,1.3,5,1.5),await Ct(e,"You have to make a wish. But you can\u2019t say it, or it won\u2019t come true.",{name:"{child}"}),await $n({label:"Hold Space to blow",seconds:2.5}),kt("blow"),i.burst(new C(9,.6,1.3),{color:16777215,count:60,speed:1.2,life:3.5,size:.14}),await Wt(1.5),await Ct(e,"What did you wish for?",{name:"{child}"}),await Ct(t,"I can\u2019t tell you. Or it won\u2019t come true."),await St("You wished that this would last. You suspect {they} wished for a puppy."),await ee("dandelions","You both wished for the same thing"),t.setPose("idle"),e.setPose("idle"),await ve(t,11)}},{id:"drawing",label:"{child} has something for you",anchor:n=>n.kid,offset:[.4,0,.4],requires:["swing"],caption:"It\u2019s you. And me. And the tree.",async run(n){let t=n.me,e=n.kid,i=n.world;await t.walkToChar(e,.9),e.faceChar(t),await Ct(e,"Close your eyes. Okay, open them!",{name:"{child}"});let s=lp(),r=_u(s);i.add(r,e.position.x,e.position.z,{y:1.1}),r.lookAt(w.camera.position),r.scale.setScalar(1.6),await ce(e.position.x,e.position.z,4,1.5),await Ct(e,"That\u2019s you. And that\u2019s Sam. And that\u2019s me. And that\u2019s the tree. And the swing.",{name:"{child}"}),await Ct(t,"It\u2019s the most beautiful thing I\u2019ve ever seen."),await Ct(e,"I know.",{name:"{child}"}),await ee("drawing","It\u2019s you. And me. And the tree."),w.state.flags.drawing=!0,await St("You put it on the fridge. Later, in a frame. Much later, you would find it again."),i.remove(r),await ve(t,11)}},{id:"lemonade",label:"{child}\u2019s lemonade stand",at:[1,6],requires:["swing"],caption:"Ten cups. You drank every one.",async run(n){let t=n.me,e=n.kid,i=n.world,s=ul();i.add(s,1,6.4,{collide:{w:1.5,d:.7}}),await e.walkTo(1,7),e.faceNow(1,4),await t.walkTo(1,5.3),t.faceNow(1,7),await ce(1,6,5.5,1.5),await Ct(e,"Lemonade! Fifty cents! It\u2019s very sour!",{name:"{child}"}),await ar({count:10,label:"Buy a cup. And another. And another.",onTap:r=>{kt("tap"),r%3===0&&kt("giggle",{pitch:1.2})}}),await Ct(e,"You\u2019re my best customer.",{name:"{child}"}),await St("Your grandfather once bought ten cups from you, at a sticky table on this same street."),await ee("lemonade","Ten cups. You drank every one."),await ve(t,11)}},{id:"boss",kind:"work",label:"Your phone is ringing (the boss)",at:[-3.6,-1.6],radius:1,async run(n){let t=n.me;if(kt("phone"),await t.walkTo(-3.6,-1.5),await Ct(null,"Hi \u2014 sorry to call on a Saturday. Any chance you could come in? Just for a few hours.",{name:"Your boss"}),await _n("Just for a few hours\u2026",["\u201CSure. I\u2019ll be there.\u201D","\u201CNot today. It\u2019s Saturday.\u201D"])===0){w.state.stats.emails+=25,w.state.stats.workCalls++,await Xi(1.2),n.passTime(140);let i=n.world.hotspots.filter(s=>s.enabled&&!s.done&&(s.m?.kind??"little")==="little");for(let s of i.slice(0,2))s.setEnabled(!1),s.done=!0,s.m?.caption&&Tu(s.m.id,typeof s.m.caption=="string"?s.m.caption:s.m.caption.text);We("summerDusk",.1),await qi(1.5),await St("You came home after dark. The swing was still moving, just a little, in the wind."),We("summerDay",6)}else w.state.flags.saidNo=!0,await Ct(t,"Not today. It\u2019s Saturday."),await St("You turned the phone off and put it in a drawer. Nothing terrible happened. Nothing terrible ever did.")}},{id:"picnic",kind:"story",label:"Dinner under the tree",at:[2.6,.2],requires:["swing"],caption:"Dinner under the tree",async run(n){let t=n.me,e=n.kid,i=n.sam,s=n.world;We("summerDusk",6),Yi("little",{intensity:.5}),sn({crickets:.5,birds:.2},6),s.add(ol(k.blue),2.4,.8),i.setPose("idle"),await Promise.all([t.walkTo(1.8,.6),e.walkTo(2.6,1.3),i.walkTo(3,.4)]),t.setPose("sitGround"),e.setPose("lieBack"),i.setPose("sitGround"),t.face(2.6,1.3),i.face(2.6,1.3),await ce(2.5,.8,5.5,2),await Wt(1),e.setPose("sleep"),await Ct(i,"Do you think {they}\u2019ll remember this? Any of it?",{name:"Sam"}),await Ct(t,"No. Probably not."),await Ct(t,"But we will."),await ii({seconds:6,label:"Stay a little longer."}),await ee("picnic","Dinner under the tree"),await Xi(3)}}],final:"picnic"},dp={id:"ch5-bedtime",chapter:5,mood:"nurseryNight",music:"bedtime",intensity:.35,ambience:{room:.35,crickets:.3},zoom:7.5,surface:"wood",bounds:{minX:-3.75,maxX:3.75,minZ:-3.2,maxZ:3.3},ages:[39,40],clock:{seconds:300},timeUpText:"Bedtime got later and later. One night {they} said {they} could read on {their} own now.",workAfter:["The presentation was finished. {They} were already asleep.","{They} called for you once. You said \u201Cin a minute.\u201D"],hint:"The last bedtime story you remember reading.",build(n){let t=n.world;n.r=mo(n,{era:"kid",night:!0}),n.me=rn(39,.4,2.2,Math.PI),n.kid=ci(ur(8.5),8.5,nr(),-2.9,-1.9,0),n.kid.setPose("sit",{h:.55}),n.kid.place(-2.9,-2.2,0),t.add(oo(14200958),1.6,1.6),n.teddyAt=[1.6,1.6],n.starPack=j(.3,.05,.2,k.yellow),t.add(n.starPack,3.2,-1,{y:0});let e=gs({w:1,d:.6,color:k.woodLight});if(t.add(e,3.3,.8,{ry:-Math.PI/2,collide:{w:1,d:.6}}),t.add(xu(),3.3,.8,{y:.75,ry:-Math.PI/2}),w.state.flags.drawing){let i=_u(lp());t.add(i,-3.9,.6,{y:1.8,ry:Math.PI/2})}},async intro(n){await qi(3),await St("{child} was eight. {They} had opinions about everything, and questions about everything else."),await Ct(n.kid,"{me}! You said one story. You promised.",{name:"{child}"})},moments:[{id:"stars",label:"Stick glow-in-the-dark stars on the wall",at:[3,-1],caption:"A whole sky, just for {them}",async run(n){let t=n.me,e=n.world;await t.walkTo(2.8,-1),n.starPack.visible=!1,await t.walkTo(-1,-2.8),t.face(-1,-4),await ce(-1.5,-2.8,5.2,1.5);let i=[[-2.6,2.6],[-1.9,2.9],[-1.2,2.5],[-.5,2.9],[-3.2,2.2]],s=[];await cr({label:"Press them on, one by one",keys:["up","left","up","right","up"],onStep:r=>{let[o,a]=i[r],l=Ee(.07,0,15400880,0,1,{emissive:14221210,emissiveIntensity:2.5});e.add(l,o,-3.45,{y:a}),s.push(l),kt("tap")}}),We("nurseryNight",2,{bloom:1.1}),await Ct(n.kid,"Whoa. It\u2019s like sleeping outside.",{name:"{child}"}),await ee("stars","A whole sky, just for {them}"),We("nurseryNight",2),await ve(t,7.5)}},{id:"monster",label:"Check under the bed for monsters",at:[-2.2,-.4],caption:"No monsters. Just a sock.",async run(n){let t=n.me;await Ct(n.kid,"Can you check? Just in case.",{name:"{child}"}),await t.walkTo(-2.2,-.5),t.face(-2.9,-1.6),t.setPose("crouch"),await ce(-2.6,-1,4.5,1.5),await $n({label:"Look carefully\u2026",seconds:3}),kt("rustle"),await Ct(t,"Hmm. One sock. Two crayons. A very old raisin. No monsters."),kt("giggle",{pitch:1.05}),await Ct(n.kid,"They probably heard you coming.",{name:"{child}"}),await ee("monster","No monsters. Just a sock."),t.setPose("idle"),await ve(t,7.5)}},{id:"teddy",label:"Find {their} bear",at:[1.6,1.6],caption:"The bear with one ear",async run(n){let t=n.me;await t.walkTo(1.7,1.4),t.setPose("crouch"),await Wt(.6),t.setPose("idle"),await t.walkTo(-2,-1.6),await Ct(n.kid,"He can\u2019t sleep without me. It\u2019s not for me. It\u2019s for him.",{name:"{child}"}),await St("The bear had one ear left. {They} loved him exactly twice as much because of it."),await ee("teddy","The bear with one ear")}},Cu({id:"laptop",label:"Finish the presentation",at:[3.3,.8],emails:10,cost:60,lines:["It\u2019s due tomorrow. It has to be tonight.","Just the last slide."]}),{id:"story",kind:"story",label:"Read the bedtime story",at:[-2,-1],caption:"One more time. Always one more time.",async run(n){let t=n.me,e=n.kid;await t.walkTo(-2,-1.1),t.faceChar(e),t.setPose("sit",{h:.5}),t.position.set(-2.1,0,-1.2),e.setPose("lie"),e.position.set(-2.9,0,-2.1),e.extraY=.42,e.heading=e.targetHeading=Math.PI,await ce(-2.5,-1.6,4.4,2);let i=w.state.flags.storyChoice;i?await St(`You read ${{dragon:"the dragon who was afraid of the dark",ocean:"the whale who sang to the moon",moon:"the girl who lived on the moon"}[i]}. The same story your parents read to you, from the same falling-apart book.`):await St("You read the same story your parents read to you, from the same falling-apart book."),await ii({seconds:5,label:"Read slowly. Do all the voices."}),await Ct(e,"Again?",{name:"{child}"}),await _n("\u201CAgain?\u201D",["\u201COf course.\u201D","\u201CIt\u2019s late, sweetheart.\u201D"])===0?await St("Again. And again. You knew it by heart. So did {they}. That wasn\u2019t the point."):(await Ct(e,"Pleeease. Just the end bit.",{name:"{child}"}),await St("You read the end bit. Then the middle bit. Then the whole thing.")),await ee("story","One more time. Always one more time.")}},{id:"questions",kind:"story",label:"Turn off the lamp",at:[3.1,-2.6],requires:["story"],caption:"\u201CWill you always be here?\u201D",async run(n){let t=n.me,e=n.kid;await t.walkTo(3,-2.5),We("nurseryNight",2,{sunIntensity:.3,hemiIntensity:.5}),n.r.lampLight&&(n.r.lampLight.intensity=1.2),await Ct(e,"{me}?",{name:"{child}"}),await Ct(t,"Mm?"),await Ct(e,"Will you always be here?",{name:"{child}"}),await t.walkTo(-2,-1.2),t.faceChar(e);let i=await _n("\u201CWill you always be here?\u201D",["\u201CAlways.\u201D","\u201CAs long as I possibly can.\u201D","\u201CEven when you can\u2019t see me.\u201D"]);w.state.flags.alwaysAnswer=["Always.","As long as I possibly can.","Even when you can\u2019t see me."][i],await Ct(t,w.state.flags.alwaysAnswer),await Ct(e,"Okay.",{name:"{child}"}),await St("{They} believed you completely. That was the most frightening thing about it."),await ee("questions","\u201CWill you always be here?\u201D")}},{id:"goodnight",kind:"story",label:"Kiss {them} goodnight",anchor:n=>n.kid,offset:[.9,0,.6],requires:["questions"],caption:"Standing in the doorway",async run(n){let t=n.me,e=n.kid;await t.walkToChar(e,.7),t.setPose("crouch"),kt("kiss"),await Wt(.8),e.setPose("sleep"),t.setPose("idle"),await t.walkTo(-3.2,1.8),t.faceChar(e),await ce(-2.6,-.5,6.5,3),await ii({seconds:8,label:"Stand in the doorway."}),await St("You stood in the doorway a long time. Longer than you needed to."),await St("Not long enough."),await ee("goodnight","Standing in the doorway"),await Xi(4),await Gn(["After that night, something changed speed.","Nobody warned you. Nobody ever does."],{minTime:1.4}),w.ui.clearNarration()}}],final:"goodnight"};var fr=[rp,op,ap,cp,hp,up,dp];Be();var g_=[{id:"begin",cat:"story",title:"So Small",desc:"Begin a life."},{id:"first_steps",cat:"story",title:"Three Steps",desc:"Take your first steps."},{id:"first_word",cat:"story",title:"First Word",desc:"Say your very first word."},{id:"ch1",cat:"story",title:"Tiny",desc:"Finish Chapter I."},{id:"ch2",cat:"story",title:"Wonder",desc:"Finish Chapter II."},{id:"ch3",cat:"story",title:"Running",desc:"Finish Chapter III."},{id:"ch4",cat:"story",title:"Together",desc:"Finish Chapter IV."},{id:"ch5",cat:"story",title:"Little Ones",desc:"Finish Chapter V."},{id:"ch6",cat:"story",title:"So Fast",desc:"Finish Chapter VI."},{id:"ch7",cat:"story",title:"Winter",desc:"Finish Chapter VII."},{id:"the_end",cat:"story",title:"The Little Moments",desc:"Live a whole life."},{id:"your_song",cat:"story",title:"Your Mother\u2019s Song",desc:"Sing the lullaby to your own child."},{id:"always",cat:"story",title:"Will You Always Be Here?",desc:"Answer the hardest question."},{id:"keep_1",cat:"album",title:"Click",desc:"Keep your first moment."},{id:"keep_10",cat:"album",title:"A Handful of Moments",desc:"Keep 10 moments."},{id:"keep_30",cat:"album",title:"A Shoebox of Photographs",desc:"Keep 30 moments."},{id:"keep_60",cat:"album",title:"A Full Album",desc:"Keep 60 moments."},{id:"present",cat:"album",title:"Fully Present",desc:"Keep every moment in a chapter."},{id:"passed",cat:"album",title:"It Happened Anyway",desc:"Let a moment pass you by."},{id:"as_mother",cat:"path",title:"A Mother",desc:"Live a whole life as a mother."},{id:"as_father",cat:"path",title:"A Father",desc:"Live a whole life as a father."},{id:"both_lives",cat:"path",title:"Two Lives",desc:"Live a whole life as a mother and as a father."},{id:"call_mom",cat:"path",title:"Mama\u2019s Arms",desc:"Call for your mother in the nursery.",hidden:!0},{id:"call_dad",cat:"path",title:"Papa\u2019s Arms",desc:"Call for your father in the nursery.",hidden:!0},{id:"word_woof",cat:"path",title:"Woof",desc:"Make your first word a bark.",hidden:!0},{id:"grandma_lap",cat:"path",title:"Grandma\u2019s Lap",desc:"Fall asleep on Grandma\u2019s lap.",hidden:!0},{id:"grandpa_lap",cat:"path",title:"Grandpa\u2019s Whistle",desc:"Fall asleep on Grandpa\u2019s lap.",hidden:!0},{id:"daughter",cat:"path",title:"A Daughter",desc:"Raise a daughter."},{id:"son",cat:"path",title:"A Son",desc:"Raise a son."},{id:"wake_sam",cat:"path",title:"Two Tired People",desc:"Wake Sam for the 3 a.m. feed.",hidden:!0},{id:"let_go",cat:"path",title:"Let Go",desc:"Let go of the bike.",hidden:!0},{id:"held_on",cat:"path",title:"A Little Longer",desc:"Hold on to the bike a little longer.",hidden:!0},{id:"said_no",cat:"path",title:"Not Today",desc:"Say no to working on a Saturday."},{id:"workaholic",cat:"path",title:"Just One More Email",desc:"Answer work five times in one life.",hidden:!0},{id:"unplugged",cat:"path",title:"Unplugged",desc:"Get through Chapter V without answering work once."},{id:"puppy",cat:"path",title:"A New Biscuit",desc:"Say yes to the puppy.",hidden:!0},{id:"every_answer",cat:"path",title:"Every Answer Was True",desc:"Give each answer to \u201CWill you always be here?\u201D across your lives.",hidden:!0},{id:"konami",cat:"egg",title:"Party Hats",desc:"Up, up, down, down\u2026",hidden:!0},{id:"title_swing",cat:"egg",title:"One More Push",desc:"Be very impatient on the title screen.",hidden:!0},{id:"fridge",cat:"egg",title:"Old Friend",desc:"Find what is stuck to the fridge.",hidden:!0},{id:"plant_snack",cat:"egg",title:"Taste Test",desc:"Find out what the plant tastes like.",hidden:!0},{id:"hedgehog",cat:"egg",title:"A Tiny Friend",desc:"Find who lives under the hedge.",hidden:!0},{id:"diaper",cat:"egg",title:"Your Turn",desc:"Volunteer for diaper duty.",hidden:!0},{id:"postcard",cat:"egg",title:"Wish You Were Here",desc:"Check the mailbox.",hidden:!0},{id:"wish",cat:"egg",title:"Make a Wish",desc:"Catch the shooting star.",hidden:!0}],fp="lm.achievements",_l=class{constructor(){this.defs=new Map(g_.map(t=>[t.id,{...t}])),this.unlocked={},this.meta={};try{let t=JSON.parse(localStorage.getItem(fp)||"{}");this.unlocked=t.unlocked||{},this.meta=t.meta||{};for(let e of t.extra||[])this.defs.has(e.id)||this.defs.set(e.id,e)}catch{}this.queue=[],this.showing=!1,this.el=null,setTimeout(()=>{for(let t in this.unlocked)this._steam(t)},2e3)}_save(){let t=[...this.defs.values()].filter(e=>e.extra);try{localStorage.setItem(fp,JSON.stringify({unlocked:this.unlocked,meta:this.meta,extra:t}))}catch{}}steamName(t){return this.defs.get(t)?.steam??"ACH_"+t.toUpperCase().replace(/[^A-Z0-9]/g,"_")}_steam(t){let e=this.steamName(t);try{window.steam?.activateAchievement?window.steam.activateAchievement(e):window.greenworks?.activateAchievement&&window.greenworks.activateAchievement(e,()=>{},()=>{})}catch{}}has(t){return!!this.unlocked[t]}unlock(t,e=null,i=null,s="path"){return this.defs.has(t)||this.defs.set(t,{id:t,title:e??t,desc:i??"",cat:s,extra:!0}),this.unlocked[t]?!1:(this.unlocked[t]=Date.now(),this._save(),this._steam(t),this.queue.push(this.defs.get(t)),this._next(),!0)}remember(t,e){let i=new Set(this.meta[t]||[]);return i.add(e),this.meta[t]=[...i],this._save(),i.size}count(){return Object.keys(this.unlocked).length}async _next(){if(this.showing||!this.queue.length)return;this.showing=!0;let t=this.queue.shift(),e=mt("div","achToast",`<div class="star">\u2726</div><div><div class="lbl">Achievement</div><div class="ttl">${t.title}</div><div class="dsc">${t.desc}</div></div>`);document.getElementById("ui").appendChild(e),w.audio?.sfx("sparkle",{vol:.6}),requestAnimationFrame(()=>e.classList.add("show")),await new Promise(i=>setTimeout(i,3800)),e.classList.remove("show"),await new Promise(i=>setTimeout(i,600)),e.remove(),this.showing=!1,this._next()}show(t=null){let e=w.paused;w.paused=!0;let i=mt("div","achView"),s=mt("div","achPanel"),r=this.defs.size,o=Object.keys(this.unlocked).filter(u=>this.defs.has(u)).length;s.appendChild(mt("div","head",`<h2>Achievements</h2><span>${o} / ${r}</span>`));let a=mt("button","close","Close \u2715");s.querySelector(".head").appendChild(a);let l=mt("div","list"),c=[["story","The story"],["album","The album"],["path","Other lives"],["egg","Little secrets"]];for(let[u,f]of c){let p=[...this.defs.values()].filter(g=>(g.cat??"path")===u);if(p.length){l.appendChild(mt("h3","",f));for(let g of p){let d=!!this.unlocked[g.id];l.appendChild(mt("div","ach"+(d?" on":""),`<div class="star">${d?"\u2726":"\u2727"}</div><div><div class="ttl">${d||!g.hidden?g.title:"???"}</div><div class="dsc">${d||!g.hidden?g.desc:"A secret, for another life."}</div></div>`))}}}s.appendChild(l),i.appendChild(s),document.getElementById("ui").appendChild(i);let h=()=>{i.remove(),w.paused=e&&!!w.director?.menuOpen,w.director?.menuOpen||(w.paused=!1),t&&t()};a.addEventListener("click",h),i.addEventListener("pointerdown",u=>{u.target===i&&h()})}};function pp(n){let t=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"],e=0;window.addEventListener("keydown",i=>{i.code===t[e]?(e++,e===t.length&&(e=0,n())):e=i.code===t[0]?1:0})}function x_(){let n=new URLSearchParams(location.search);w.debug=n.has("debug"),w.speed=parseFloat(n.get("speed")||"1"),w.auto=n.has("auto"),w.autoSkip=n.has("skiplittle"),w.log=[],w.renderer=new Xa(document.getElementById("game")),n.has("lowfx")&&(w.renderer.r.setPixelRatio(.5),w.renderer.r.shadowMap.enabled=!1,w.renderer.bloom.enabled=!1,w.renderer.ao.enabled=!1,w.renderer.resize()),w.scene=w.renderer.scene,w.camera=w.renderer.camera,w.input=new qa(w.renderer.r.domElement),w.ui=new Ya,w.audio=new $a,w.album=new io,w.director=new pl(fr),w.ach=new _l,w.achieve=(s,r,o,a)=>w.ach.unlock(s,r,o,a),w.showAchievements=()=>w.ach.show(),pp(()=>__()),w.director.onTitle=()=>{w.director.abort(),mp()};for(let s of fr)for(let r of s.moments??[])r.caption&&w.album.register(r.caption.id??r.id,s.chapter,typeof r.caption=="string"?r.caption:r.caption.text,s.id,r.alt);for(let s of fr)(s.extraMoments??[]).forEach(([r,o])=>w.album.register(r,s.chapter,o,s.id));document.getElementById("menuBtn").addEventListener("click",()=>w.director.toggleMenu()),document.getElementById("albumBtn").addEventListener("click",()=>{w.album.open?w.album.hide():w.director.openAlbum()});let t=performance.now(),e=s=>{let r=Math.min(w.auto?.25:.05,(s-t)/1e3);t=s,w.realTime+=r;let o=w.input;if(o.pressed("pause")&&w.director.current&&w.director.toggleMenu(),o.pressed("album")&&w.director.current&&!w.director.menuOpen&&(w.album.open?w.album.hide():w.director.openAlbum()),!w.paused){let a=r*w.timeScale*w.speed;w.dt=a,w.time+=a;for(let l of[...w.updaters])l(a);for(let l of[...w.realUpdaters])l(r*w.speed);w.world&&w.world.update(a,w.time),w.director.update(a,r*w.speed),go&&v_(r)}w.ui.update(),w.renderer.update(r),w.renderer.render(),o.endFrame(),requestAnimationFrame(e)};if(requestAnimationFrame(e),n.has("lineup")){w_(n.get("lineup"));return}let i=n.get("scene")??n.get("s");if(i!==null){let s=fr.findIndex(o=>o.id===i);s<0&&(s=parseInt(i,10)||0),w.state.identity=n.get("who")==="father"?"father":"mother",w.state.childName=n.get("child")||w.state.childName,w.ui.fade(1,.01);let r=()=>{w.audio.init(),w.director.start(s)};if(n.has("noaudio"))w.director.start(s);else{let o=mt("div","");o.style.cssText="position:fixed;inset:0;z-index:99;display:flex;align-items:center;justify-content:center;color:#fff;font:20px sans-serif;cursor:pointer;pointer-events:auto",o.textContent="Click to start scene "+fr[s].id,document.body.appendChild(o),o.addEventListener("click",()=>{o.remove(),r()})}return}mp()}var go=null,Pu=0;function y_(){w.world&&w.world.dispose();let n=new xs({name:"title"});w.world=n,go=n,n.add(no({w:9,d:9,h:1,top:k.grassSpring,seed:8}),0,0);let t=tl({stage:3,season:"spring",swing:!0});n.add(t,.6,-.8),wl=t.userData.swing,bl=0,n.add(rl(),-1.6,1.4,{ry:.6});let e=we(4);for(let s=0;s<30;s++)n.add(el(k.grassDark,s),e.range(-4,4),e.range(-4,4));for(let s=0;s<14;s++)n.add(ro(e.pick([k.pink,k.yellow,16777215]),s),e.range(-4,4),e.range(-4,4));n.add(or({kind:"blossom",season:"spring",size:.9,seed:3}),-3,-2.6),n.add(so(.8,2),3,2.6),n.particlesOf("petals",{area:{w:14,h:8,d:14},count:60}),n.particlesOf("motes",{area:{w:12,h:6,d:12},count:30,opacity:.6});for(let s=0;s<5;s++){let r=il(s+1,1.2),o=s*1.3;n.add(r,Math.cos(o)*11,Math.sin(o)*11,{y:-2+s*.6})}let i=w.renderer;i.setFollow(null),i.camGoal.set(0,.6,0),i.zoomGoal=11.5,i.camBounds=null,i.snapCamera(),i.setMood("dawnNursery",0,{dream:.35,tilt:.8})}var wl=null,bl=0;function v_(n){Pu+=n,w.renderer.camAz=45+Math.sin(Pu*.05)*25,wl&&bl>0&&(wl.rotation.x=Math.sin(Pu*2.6)*.6*bl)}function __(){if(w.world){for(let n of w.world.characters){if(!n.head||n._partyHat)continue;let t=Vi(.55,1.2,8,[15887242,7324639,15976010,9097354][Math.floor(Math.random()*4)]);t.position.y=.75,t.rotation.z=.15,n.head.add(t),n._partyHat=t;let e=Hn(.18,6,4,16777215);e.position.y=1.2,t.add(e)}w.player&&w.world.burst(w.player.position.clone().setY(1.5),{count:80,color:16765152,speed:3}),w.audio.sfx("sparkle"),w.audio.sfx("yay"),w.achieve("konami")}}function mp(){w.director.current=null,w.ui.showHud(!1),w.ui.clock(!1),y_(),w.ui.fade(0,3);let n=document.getElementById("title");n.innerHTML="",n.classList.remove("hidden"),n.appendChild(mt("h1","","Little Moments")),n.appendChild(mt("div","sub","We are born so tiny. And then \u2014 so fast."));let t=mt("div","btns");n.appendChild(t);let e=io.readSave(),i=mt("button","",e?"Begin a new life":"Begin");if(t.appendChild(i),e&&e.sceneIndex>0){let a=mt("button","ghost","Continue");a.addEventListener("click",()=>{w.audio.init(),w.album.load(e),gp(e.sceneIndex)}),t.insertBefore(a,i)}let s=mt("button","ghost","Achievements");s.addEventListener("click",()=>w.ach.show()),t.appendChild(s);let r=0;n.querySelector("h1").style.pointerEvents="auto",n.querySelector("h1").style.cursor="pointer",n.querySelector("h1").addEventListener("click",()=>{++r===5&&wl&&(bl=1,w.audio.sfx("giggle"),w.achieve("title_swing"))}),n.appendChild(mt("div","foot","Best with headphones \xB7 about two to three hours, in chapters \xB7 progress saves itself<br>WASD / arrows / click to move \xB7 Space to interact \xB7 hold Space to keep a moment \xB7 Esc to pause"));let o=()=>{w.audio.init(),w.audio.music("title",{intensity:.3}),w.audio.ambience({birds:.4,wind:.2})};window.addEventListener("pointerdown",o,{once:!0}),window.addEventListener("keydown",o,{once:!0}),i.addEventListener("click",()=>{w.audio.init(),w.audio.music("title",{intensity:.5}),t.innerHTML="",n.querySelector(".sub").textContent="In this story, you will grow up to become\u2026";let a=mt("div","who");t.appendChild(a);let l=mt("button","","a mother"),c=mt("button","","a father");a.appendChild(l),a.appendChild(c);let h=u=>{w.album.wipe(),w.state.identity=u,w.state.flags={},w.state.stats={emails:0,workCalls:0,workTimes:0},w.achieve("begin"),gp(0)};l.addEventListener("click",()=>h("mother")),c.addEventListener("click",()=>h("father"))})}async function gp(n){let t=document.getElementById("title");await w.ui.fade(1,2.2,"#000"),t.classList.add("hidden"),t.innerHTML="",go&&(go.dispose(),go=null,w.world=null),w.renderer.camAz=45,w.director.start(n)}async function w_(n){let{Character:t,LOOKS:e,youLook:i,childLook:s,Dog:r}=await Promise.resolve().then(()=>(po(),ip));w.ui.fade(0,.1);let o=new xs({name:"lineup"});w.world=o,o.add(no({w:14,d:8,top:k.grassSpring}),0,0),[[e.baby,.7,n==="pose"?"crawl":"sitGround"],[s(1.5),1.5,"idle"],[e.pip,5,"idle"],[e.childDaughter,8,"idle"],[e.theo,13,"idle"],[e.youMother,28,"idle"],[e.youFather,30,"idle"],[e.sam,30,"idle"],[e.mom,34,"idle"],[e.dad,36,"idle"],[e.grandma,70,"idle"],[e.grandpa,75,"idle"]].forEach(([u,f,p],g)=>{let d=new t({...u,age:f});d.place(-5.5+g*1,.5,.35),d.setPose(n==="walk"?"idle":p),n==="walk"&&(d.speed=d.walkSpeed,d._playerMoving=!0),n==="pose"&&d.setPose(["crawl","walk","jump","wave","kneelOpen","carry","hug","sit","cry","laugh","think","crouch"][g],{h:.45}),n==="pose"&&g<2&&(d.speed=d.walkSpeed,d._playerMoving=!0)}),new r().place(5.6,1.6);let c=w.renderer;c.setFollow(null);let h=parseFloat(new URLSearchParams(location.search).get("cx")||"0");c.camGoal.set(h,.9,.5+h*.35),c.zoomGoal=parseFloat(new URLSearchParams(location.search).get("zoom")||"6"),c.snapCamera(),c.setMood("springMorning",0)}window.addEventListener("DOMContentLoaded",x_);window.G=w;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
