(()=>{var a0=Object.defineProperty;var No=(n,t)=>()=>(n&&(t=n(n=0)),t);var o0=(n,t)=>{for(var e in t)a0(n,e,{get:t[e],enumerable:!0})};function dn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(li[n&255]+li[n>>8&255]+li[n>>16&255]+li[n>>24&255]+"-"+li[t&255]+li[t>>8&255]+"-"+li[t>>16&15|64]+li[t>>24&255]+"-"+li[e&63|128]+li[e>>8&255]+"-"+li[e>>16&255]+li[e>>24&255]+li[i&255]+li[i>>8&255]+li[i>>16&255]+li[i>>24&255]).toLowerCase()}function Ke(n,t,e){return Math.max(t,Math.min(e,n))}function dd(n,t){return(n%t+t)%t}function F0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function O0(n,t,e){return n!==t?(e-n)/(t-n):0}function Za(n,t,e){return(1-e)*n+e*t}function B0(n,t,e,i){return Za(n,t,1-Math.exp(-e*i))}function z0(n,t=1){return t-Math.abs(dd(n,t*2)-t)}function H0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function V0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function G0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function W0(n,t){return n+Math.random()*(t-n)}function X0(n){return n*(.5-Math.random())}function Y0(n){n!==void 0&&(xu=n);let t=xu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function q0(n){return n*qa}function Z0(n){return n*to}function $0(n){return(n&n-1)===0&&n!==0}function J0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function K0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function j0(n,t,e,i,s){let a=Math.cos,o=Math.sin,r=a(e/2),l=o(e/2),c=a((t+i)/2),h=o((t+i)/2),d=a((t-i)/2),u=o((t-i)/2),p=a((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(r*h,l*d,l*u,r*c);break;case"YZY":n.set(l*u,r*h,l*d,r*c);break;case"ZXZ":n.set(l*d,l*u,r*h,r*c);break;case"XZX":n.set(r*h,l*g,l*p,r*c);break;case"YXY":n.set(l*p,r*h,l*g,r*c);break;case"ZYZ":n.set(l*g,l*p,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ji(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function zf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Q0(){let n=eo("canvas");return n.style.display="block",n}function Xa(n){n in vu||(vu[n]=!0,console.warn(n))}function tm(n,t,e){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}function em(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function im(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}function Cn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Xl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function ql(n,t,e,i,s){for(let a=0,o=n.length-3;a<=o;a+=3){cs.fromArray(n,a);let r=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),l=t.dot(cs),c=e.dot(cs),h=i.dot(cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}function oc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function pm(n,t,e,i,s,a,o,r){let l;if(t.side===Ti?l=i.intersectTriangle(o,a,s,!0,r):l=i.intersectTriangle(s,a,o,t.side===Qi,r),l===null)return null;jo.copy(r),jo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(jo);return c<e.near||c>e.far?null:{distance:c,point:jo.clone(),object:n}}function Qo(n,t,e,i,s,a,o,r,l,c){n.getVertexPosition(r,Zo),n.getVertexPosition(l,$o),n.getVertexPosition(c,Jo);let h=pm(n,t,e,i,Zo,$o,Jo,Nu);if(h){let d=new P;Xn.getBarycoord(Nu,Zo,$o,Jo,d),s&&(h.uv=Xn.getInterpolatedAttribute(s,r,l,c,d,new it)),a&&(h.uv1=Xn.getInterpolatedAttribute(a,r,l,c,d,new it)),o&&(h.normal=Xn.getInterpolatedAttribute(o,r,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:r,b:l,c,normal:new P,materialIndex:0};Xn.getNormal(Zo,$o,Jo,u.normal),h.face=u,h.barycoord=d}return h}function ca(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function pi(n){let t={};for(let e=0;e<n.length;e++){let i=ca(n[e]);for(let s in i)t[s]=i[s]}return t}function mm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Vf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}function Gf(){let n=null,t=!1,e=null,i=null;function s(a,o){e(a,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function wm(n){let t=new WeakMap;function e(r,l){let c=r.array,h=r.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),r.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:d}}function i(r,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,r),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],f=d[p];f.start<=g.start+g.count+1?g.count=Math.max(g.count,f.start+f.count-g.start):(++u,d[u]=f)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let f=d[p];n.bufferSubData(c,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function a(r){r.isInterleavedBufferAttribute&&(r=r.data);let l=t.get(r);l&&(n.deleteBuffer(l.buffer),t.delete(r))}function o(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){let h=t.get(r);(!h||h.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}let c=t.get(r);if(c===void 0)t.set(r,e(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,r,l),c.version=r.version}}return{get:s,remove:a,update:o}}function ex(n,t,e,i,s,a,o){let r=new Lt(0),l=a===!0?0:1,c,h,d=null,u=0,p=null;function g(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?e:t).get(v)),v}function f(w){let v=!1,_=g(w);_===null?m(r,l):_&&_.isColor&&(m(_,1),v=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(w,v){let _=g(v);_&&(_.isCubeTexture||_.mapping===jr)?(h===void 0&&(h=new bt(new gi(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:ca(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),us.copy(v.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tx.makeRotationFromEuler(us)),h.material.toneMapped=ce.getTransfer(_.colorSpace)!==xe,(d!==_||u!==_.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,p=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new bt(new Ue(2,2),new ke({name:"BackgroundMaterial",uniforms:ca(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ce.getTransfer(_.colorSpace)!==xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,p=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,v){w.getRGB(er,Vf(n)),i.buffers.color.setClear(er.r,er.g,er.b,v,o)}return{getClearColor:function(){return r},setClearColor:function(w,v=1){r.set(w),l=v,m(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(r,l)},render:f,addToRenderList:y}}function ix(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,o=!1;function r(b,R,N,D,F){let O=!1,z=d(D,N,R);a!==z&&(a=z,c(a.object)),O=p(b,D,N,F),O&&g(b,D,N,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,_(b,R,N,D),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function d(b,R,N){let D=N.wireframe===!0,F=i[b.id];F===void 0&&(F={},i[b.id]=F);let O=F[R.id];O===void 0&&(O={},F[R.id]=O);let z=O[D];return z===void 0&&(z=u(l()),O[D]=z),z}function u(b){let R=[],N=[],D=[];for(let F=0;F<e;F++)R[F]=0,N[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:D,object:b,attributes:{},index:null}}function p(b,R,N,D){let F=a.attributes,O=R.attributes,z=0,Y=N.getAttributes();for(let W in Y)if(Y[W].location>=0){let pt=F[W],vt=O[W];if(vt===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(vt=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(vt=b.instanceColor)),pt===void 0||pt.attribute!==vt||vt&&pt.data!==vt.data)return!0;z++}return a.attributesNum!==z||a.index!==D}function g(b,R,N,D){let F={},O=R.attributes,z=0,Y=N.getAttributes();for(let W in Y)if(Y[W].location>=0){let pt=O[W];pt===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(pt=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(pt=b.instanceColor));let vt={};vt.attribute=pt,pt&&pt.data&&(vt.data=pt.data),F[W]=vt,z++}a.attributes=F,a.attributesNum=z,a.index=D}function f(){let b=a.newAttributes;for(let R=0,N=b.length;R<N;R++)b[R]=0}function y(b){m(b,0)}function m(b,R){let N=a.newAttributes,D=a.enabledAttributes,F=a.attributeDivisors;N[b]=1,D[b]===0&&(n.enableVertexAttribArray(b),D[b]=1),F[b]!==R&&(n.vertexAttribDivisor(b,R),F[b]=R)}function w(){let b=a.newAttributes,R=a.enabledAttributes;for(let N=0,D=R.length;N<D;N++)R[N]!==b[N]&&(n.disableVertexAttribArray(N),R[N]=0)}function v(b,R,N,D,F,O,z){z===!0?n.vertexAttribIPointer(b,R,N,F,O):n.vertexAttribPointer(b,R,N,D,F,O)}function _(b,R,N,D){f();let F=D.attributes,O=N.getAttributes(),z=R.defaultAttributeValues;for(let Y in O){let W=O[Y];if(W.location>=0){let st=F[Y];if(st===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(st=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(st=b.instanceColor)),st!==void 0){let pt=st.normalized,vt=st.itemSize,Nt=t.get(st);if(Nt===void 0)continue;let Gt=Nt.buffer,K=Nt.type,dt=Nt.bytesPerElement,Ct=K===n.INT||K===n.UNSIGNED_INT||st.gpuType===nd;if(st.isInterleavedBufferAttribute){let ut=st.data,Pt=ut.stride,Xt=st.offset;if(ut.isInstancedInterleavedBuffer){for(let Ot=0;Ot<W.locationSize;Ot++)m(W.location+Ot,ut.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ot=0;Ot<W.locationSize;Ot++)y(W.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let Ot=0;Ot<W.locationSize;Ot++)v(W.location+Ot,vt/W.locationSize,K,pt,Pt*dt,(Xt+vt/W.locationSize*Ot)*dt,Ct)}else{if(st.isInstancedBufferAttribute){for(let ut=0;ut<W.locationSize;ut++)m(W.location+ut,st.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ut=0;ut<W.locationSize;ut++)y(W.location+ut);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let ut=0;ut<W.locationSize;ut++)v(W.location+ut,vt/W.locationSize,K,pt,vt*dt,vt/W.locationSize*ut*dt,Ct)}}else if(z!==void 0){let pt=z[Y];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv(W.location,pt);break;case 3:n.vertexAttrib3fv(W.location,pt);break;case 4:n.vertexAttrib4fv(W.location,pt);break;default:n.vertexAttrib1fv(W.location,pt)}}}}w()}function I(){k();for(let b in i){let R=i[b];for(let N in R){let D=R[N];for(let F in D)h(D[F].object),delete D[F];delete R[N]}delete i[b]}}function T(b){if(i[b.id]===void 0)return;let R=i[b.id];for(let N in R){let D=R[N];for(let F in D)h(D[F].object),delete D[F];delete R[N]}delete i[b.id]}function E(b){for(let R in i){let N=i[R];if(N[b.id]===void 0)continue;let D=N[b.id];for(let F in D)h(D[F].object),delete D[F];delete N[b.id]}}function k(){M(),o=!0,a!==s&&(a=s,c(a.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:k,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:f,enableAttribute:y,disableUnusedAttributes:w}}function nx(n,t,e){let i;function s(c){i=c}function a(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function r(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,i,1)}function l(c,h,d,u){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let f=0;f<d;f++)g+=h[f]*u[f];e.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=o,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function sx(n,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Di&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(E){let k=E===Ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==tn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==hn&&!k)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:f,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:w,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:I,maxSamples:T}}function ax(n){let t=this,e=null,i=0,s=!1,a=!1,o=new Ki,r=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,f=d.clipIntersection,y=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||a&&!y)a?h(null):c();else{let w=a?0:i,v=w*4,_=m.clippingState||null;l.value=_,_=h(g,u,v,p);for(let I=0;I!==v;++I)_[I]=e[I];m.clippingState=_,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,g){let f=d!==null?d.length:0,y=null;if(f!==0){if(y=l.value,g!==!0||y===null){let m=p+f*4,w=u.matrixWorldInverse;r.getNormalMatrix(w),(y===null||y.length<m)&&(y=new Float32Array(m));for(let v=0,_=p;v!==f;++v,_+=4)o.copy(d[v]).applyMatrix4(w,r),o.normal.toArray(y,_),y[_+3]=o.constant}l.value=y,l.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,y}}function ox(n){let t=new WeakMap;function e(o,r){return r===Ic?o.mapping=ra:r===kc&&(o.mapping=la),o}function i(o){if(o&&o.isTexture){let r=o.mapping;if(r===Ic||r===kc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new uh(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let r=o.target;r.removeEventListener("dispose",s);let l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}function rx(n){let t=[],e=[],i=[],s=n,a=n-ea+1+Bu.length;for(let o=0;o<a;o++){let r=Math.pow(2,s);e.push(r);let l=1/r;o>n-ea?l=Bu[o-n+ea-1]:o===0&&(l=0),i.push(l);let c=1/(r-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,f=3,y=2,m=1,w=new Float32Array(f*g*p),v=new Float32Array(y*g*p),_=new Float32Array(m*g*p);for(let T=0;T<p;T++){let E=T%3*2/3-1,k=T>2?0:-1,M=[E,k,0,E+2/3,k,0,E+2/3,k+1,0,E,k,0,E+2/3,k+1,0,E,k+1,0];w.set(M,f*g*T),v.set(u,y*g*T);let b=[T,T,T,T,T,T];_.set(b,m*g*T)}let I=new Ie;I.setAttribute("position",new je(w,f)),I.setAttribute("uv",new je(v,y)),I.setAttribute("faceIndex",new je(_,m)),t.push(I),s>ea&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Vu(n,t,e){let i=new Qe(n,t,e);return i.texture.mapping=jr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ir(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function lx(n,t,e){let i=new Float32Array(ms),s=new P(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ud(),fragmentShader:`

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
		`,blending:Ye,depthTest:!1,depthWrite:!1})}function Gu(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ud(),fragmentShader:`

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
		`,blending:Ye,depthTest:!1,depthWrite:!1})}function Wu(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ye,depthTest:!1,depthWrite:!1})}function ud(){return`

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
	`}function cx(n){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){let l=r.mapping,c=l===Ic||l===kc,h=l===ra||l===la;if(c||h){let d=t.get(r),u=d!==void 0?d.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==u)return e===null&&(e=new Ar(n)),d=c?e.fromEquirectangular(r,d):e.fromCubemap(r,d),d.texture.pmremVersion=r.pmremVersion,t.set(r,d),d.texture;if(d!==void 0)return d.texture;{let p=r.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ar(n)),d=c?e.fromEquirectangular(r):e.fromCubemap(r),d.texture.pmremVersion=r.pmremVersion,t.set(r,d),r.addEventListener("dispose",a),d.texture):null}}}return r}function s(r){let l=0,c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function a(r){let l=r.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function hx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Xa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function dx(n,t,e,i){let s={},a=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let f=u.morphAttributes[g];for(let y=0,m=f.length;y<m;y++)t.remove(f[y])}u.removeEventListener("dispose",o),delete s[u.id];let p=a.get(u);p&&(t.remove(p),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function r(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let f=p[g];for(let y=0,m=f.length;y<m;y++)t.update(f[y],n.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,g=d.attributes.position,f=0;if(p!==null){let w=p.array;f=p.version;for(let v=0,_=w.length;v<_;v+=3){let I=w[v+0],T=w[v+1],E=w[v+2];u.push(I,T,T,E,E,I)}}else if(g!==void 0){let w=g.array;f=g.version;for(let v=0,_=w.length/3-1;v<_;v+=3){let I=v+0,T=v+1,E=v+2;u.push(I,T,T,E,E,I)}}else return;let y=new(zf(u)?Tr:Mr)(u,1);y.version=f;let m=a.get(d);m&&t.remove(m),a.set(d,y)}function h(d){let u=a.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:r,update:l,getWireframeAttribute:h}}function ux(n,t,e){let i;function s(u){i=u}let a,o;function r(u){a=u.type,o=u.bytesPerElement}function l(u,p){n.drawElements(i,p,a,u*o),e.update(p,i,1)}function c(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,a,u*o,g),e.update(p,i,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,u,0,g);let y=0;for(let m=0;m<g;m++)y+=p[m];e.update(y,i,1)}function d(u,p,g,f){if(g===0)return;let y=t.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<u.length;m++)c(u[m]/o,p[m],f[m]);else{y.multiDrawElementsInstancedWEBGL(i,p,0,a,u,0,f,0,g);let m=0;for(let w=0;w<g;w++)m+=p[w]*f[w];e.update(m,i,1)}}this.setMode=s,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function fx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,r){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=r*(a/3);break;case n.LINES:e.lines+=r*(a/2);break;case n.LINE_STRIP:e.lines+=r*(a-1);break;case n.LINE_LOOP:e.lines+=r*a;break;case n.POINTS:e.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function px(n,t,e){let i=new WeakMap,s=new be;function a(o,r,l){let c=o.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(r);if(u===void 0||u.count!==d){let M=function(){E.dispose(),i.delete(r),r.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let p=r.morphAttributes.position!==void 0,g=r.morphAttributes.normal!==void 0,f=r.morphAttributes.color!==void 0,y=r.morphAttributes.position||[],m=r.morphAttributes.normal||[],w=r.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),f===!0&&(v=3);let _=r.attributes.position.count*v,I=1;_>t.maxTextureSize&&(I=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*I*4*d),E=new br(T,_,I,d);E.type=hn,E.needsUpdate=!0;let k=v*4;for(let b=0;b<d;b++){let R=y[b],N=m[b],D=w[b],F=_*I*4*b;for(let O=0;O<R.count;O++){let z=O*k;p===!0&&(s.fromBufferAttribute(R,O),T[F+z+0]=s.x,T[F+z+1]=s.y,T[F+z+2]=s.z,T[F+z+3]=0),g===!0&&(s.fromBufferAttribute(N,O),T[F+z+4]=s.x,T[F+z+5]=s.y,T[F+z+6]=s.z,T[F+z+7]=0),f===!0&&(s.fromBufferAttribute(D,O),T[F+z+8]=s.x,T[F+z+9]=s.y,T[F+z+10]=s.z,T[F+z+11]=D.itemSize===4?s.w:1)}}u={count:d,texture:E,size:new it(_,I)},i.set(r,u),r.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let f=0;f<c.length;f++)p+=c[f];let g=r.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:a}}function mx(n,t,e,i){let s=new WeakMap;function a(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function r(l){let c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:o}}function xa(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,a=Yu[s];if(a===void 0&&(a=new Float32Array(s),Yu[s]=a),t!==0){i.toArray(a,0);for(let o=1,r=0;o!==t;++o)r+=e,n[o].toArray(a,r)}return a}function qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function tl(n,t){let e=qu[t];e===void 0&&(e=new Int32Array(t),qu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function gx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function yx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2fv(this.addr,t),Ze(e,t)}}function xx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;n.uniform3fv(this.addr,t),Ze(e,t)}}function vx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4fv(this.addr,t),Ze(e,t)}}function wx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(qe(e,i))return;Ju.set(i),n.uniformMatrix2fv(this.addr,!1,Ju),Ze(e,i)}}function _x(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(qe(e,i))return;$u.set(i),n.uniformMatrix3fv(this.addr,!1,$u),Ze(e,i)}}function bx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(qe(e,i))return;Zu.set(i),n.uniformMatrix4fv(this.addr,!1,Zu),Ze(e,i)}}function Mx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Tx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2iv(this.addr,t),Ze(e,t)}}function Sx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3iv(this.addr,t),Ze(e,t)}}function Ex(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4iv(this.addr,t),Ze(e,t)}}function Ax(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Rx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2uiv(this.addr,t),Ze(e,t)}}function Cx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3uiv(this.addr,t),Ze(e,t)}}function Px(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4uiv(this.addr,t),Ze(e,t)}}function Ix(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(Xu.compareFunction=Bf,a=Xu):a=Wf,e.setTexture2D(t||a,s)}function kx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Yf,s)}function Lx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||qf,s)}function Dx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Xf,s)}function Ux(n){switch(n){case 5126:return gx;case 35664:return yx;case 35665:return xx;case 35666:return vx;case 35674:return wx;case 35675:return _x;case 35676:return bx;case 5124:case 35670:return Mx;case 35667:case 35671:return Tx;case 35668:case 35672:return Sx;case 35669:case 35673:return Ex;case 5125:return Ax;case 36294:return Rx;case 36295:return Cx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Dx}}function Nx(n,t){n.uniform1fv(this.addr,t)}function Fx(n,t){let e=xa(t,this.size,2);n.uniform2fv(this.addr,e)}function Ox(n,t){let e=xa(t,this.size,3);n.uniform3fv(this.addr,e)}function Bx(n,t){let e=xa(t,this.size,4);n.uniform4fv(this.addr,e)}function zx(n,t){let e=xa(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Hx(n,t){let e=xa(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Vx(n,t){let e=xa(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Gx(n,t){n.uniform1iv(this.addr,t)}function Wx(n,t){n.uniform2iv(this.addr,t)}function Xx(n,t){n.uniform3iv(this.addr,t)}function Yx(n,t){n.uniform4iv(this.addr,t)}function qx(n,t){n.uniform1uiv(this.addr,t)}function Zx(n,t){n.uniform2uiv(this.addr,t)}function $x(n,t){n.uniform3uiv(this.addr,t)}function Jx(n,t){n.uniform4uiv(this.addr,t)}function Kx(n,t,e){let i=this.cache,s=t.length,a=tl(e,s);qe(i,a)||(n.uniform1iv(this.addr,a),Ze(i,a));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wf,a[o])}function jx(n,t,e){let i=this.cache,s=t.length,a=tl(e,s);qe(i,a)||(n.uniform1iv(this.addr,a),Ze(i,a));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yf,a[o])}function Qx(n,t,e){let i=this.cache,s=t.length,a=tl(e,s);qe(i,a)||(n.uniform1iv(this.addr,a),Ze(i,a));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qf,a[o])}function tv(n,t,e){let i=this.cache,s=t.length,a=tl(e,s);qe(i,a)||(n.uniform1iv(this.addr,a),Ze(i,a));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xf,a[o])}function ev(n){switch(n){case 5126:return Nx;case 35664:return Fx;case 35665:return Ox;case 35666:return Bx;case 35674:return zx;case 35675:return Hx;case 35676:return Vx;case 5124:case 35670:return Gx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return Yx;case 5125:return qx;case 36294:return Zx;case 36295:return $x;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return tv}}function Ku(n,t){n.seq.push(t),n.map[t.id]=t}function iv(n,t,e){let i=n.name,s=i.length;for(mc.lastIndex=0;;){let a=mc.exec(i),o=mc.lastIndex,r=a[1],l=a[2]==="]",c=a[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===s){Ku(e,c===void 0?new fh(r,n,t):new ph(r,n,t));break}else{let d=e.map[r];d===void 0&&(d=new mh(r),Ku(e,d)),e=d}}}function ju(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function av(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=s;o<a;o++){let r=o+1;i.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return i.join(`
`)}function ov(n){ce._getMatrix(Qu,ce.workingColorSpace,n);let t=`mat3( ${Qu.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(n)){case Qr:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function tf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+av(n.getShaderSource(t),o)}else return s}function rv(n,t){let e=ov(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function lv(n,t){let e;switch(t){case jh:e="Linear";break;case Qh:e="Reinhard";break;case td:e="Cineon";break;case ed:e="ACESFilmic";break;case id:e="AgX";break;case go:e="Neutral";break;case S0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function cv(){ce.getLuminanceCoefficients(nr);let n=nr.x.toFixed(4),t=nr.y.toFixed(4),e=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function dv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function uv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=n.getActiveAttrib(t,s),o=a.name,r=1;a.type===n.FLOAT_MAT2&&(r=2),a.type===n.FLOAT_MAT3&&(r=3),a.type===n.FLOAT_MAT4&&(r=4),e[o]={type:a.type,location:n.getAttribLocation(t,o),locationSize:r}}return e}function Ya(n){return n!==""}function ef(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function gh(n){return n.replace(fv,mv)}function mv(n,t){let e=ae[t];if(e===void 0){let i=pv.get(t);if(i!==void 0)e=ae[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return gh(e)}function sf(n){return n.replace(gv,yv)}function yv(n,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function af(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function xv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Af?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function vv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ra:case la:t="ENVMAP_TYPE_CUBE";break;case jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case la:t="ENVMAP_MODE_REFRACTION";break}return t}function _v(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rf:t="ENVMAP_BLENDING_MULTIPLY";break;case M0:t="ENVMAP_BLENDING_MIX";break;case T0:t="ENVMAP_BLENDING_ADD";break}return t}function bv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Mv(n,t,e,i){let s=n.getContext(),a=e.defines,o=e.vertexShader,r=e.fragmentShader,l=xv(e),c=vv(e),h=wv(e),d=_v(e),u=bv(e),p=hv(e),g=dv(a),f=s.createProgram(),y,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ya).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ya).join(`
`),m.length>0&&(m+=`
`)):(y=[af(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),m=[af(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?ae.tonemapping_pars_fragment:"",e.toneMapping!==qn?lv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,rv("linearToOutputTexel",e.outputColorSpace),cv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ya).join(`
`)),o=gh(o),o=ef(o,e),o=nf(o,e),r=gh(r),r=ef(r,e),r=nf(r,e),o=sf(o),r=sf(r),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=w+y+o,_=w+m+r,I=ju(s,s.VERTEX_SHADER,v),T=ju(s,s.FRAGMENT_SHADER,_);s.attachShader(f,I),s.attachShader(f,T),e.index0AttributeName!==void 0?s.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function E(R){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(f).trim(),D=s.getShaderInfoLog(I).trim(),F=s.getShaderInfoLog(T).trim(),O=!0,z=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,I,T);else{let Y=tf(s,I,"vertex"),W=tf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+Y+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||F==="")&&(z=!1);z&&(R.diagnostics={runnable:O,programLog:N,vertexShader:{log:D,prefix:y},fragmentShader:{log:F,prefix:m}})}s.deleteShader(I),s.deleteShader(T),k=new aa(s,f),M=uv(s,f)}let k;this.getUniforms=function(){return k===void 0&&E(this),k};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(f,nv)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sv++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=I,this.fragmentShader=T,this}function Sv(n,t,e,i,s,a,o){let r=new no,l=new yh,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(M){return c.add(M),M===0?"uv":`uv${M}`}function y(M,b,R,N,D){let F=N.fog,O=D.geometry,z=M.isMeshStandardMaterial?N.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),W=Y&&Y.mapping===jr?Y.image.height:null,st=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let pt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,vt=pt!==void 0?pt.length:0,Nt=0;O.morphAttributes.position!==void 0&&(Nt=1),O.morphAttributes.normal!==void 0&&(Nt=2),O.morphAttributes.color!==void 0&&(Nt=3);let Gt,K,dt,Ct;if(st){let we=ln[st];Gt=we.vertexShader,K=we.fragmentShader}else Gt=M.vertexShader,K=M.fragmentShader,l.update(M),dt=l.getVertexShaderID(M),Ct=l.getFragmentShaderID(M);let ut=n.getRenderTarget(),Pt=n.state.buffers.depth.getReversed(),Xt=D.isInstancedMesh===!0,Ot=D.isBatchedMesh===!0,re=!!M.map,nt=!!M.matcap,ft=!!Y,L=!!M.aoMap,Ft=!!M.lightMap,ct=!!M.bumpMap,At=!!M.normalMap,gt=!!M.displacementMap,Yt=!!M.emissiveMap,Tt=!!M.metalnessMap,C=!!M.roughnessMap,S=M.anisotropy>0,X=M.clearcoat>0,Q=M.dispersion>0,ot=M.iridescence>0,tt=M.sheen>0,Ut=M.transmission>0,yt=S&&!!M.anisotropyMap,Mt=X&&!!M.clearcoatMap,Qt=X&&!!M.clearcoatNormalMap,ht=X&&!!M.clearcoatRoughnessMap,It=ot&&!!M.iridescenceMap,Zt=ot&&!!M.iridescenceThicknessMap,$t=tt&&!!M.sheenColorMap,kt=tt&&!!M.sheenRoughnessMap,le=!!M.specularMap,Jt=!!M.specularColorMap,de=!!M.specularIntensityMap,B=Ut&&!!M.transmissionMap,xt=Ut&&!!M.thicknessMap,J=!!M.gradientMap,at=!!M.alphaMap,Rt=M.alphaTest>0,St=!!M.alphaHash,te=!!M.extensions,ze=qn;M.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ze=n.toneMapping);let ri={shaderID:st,shaderType:M.type,shaderName:M.name,vertexShader:Gt,fragmentShader:K,defines:M.defines,customVertexShaderID:dt,customFragmentShaderID:Ct,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&D._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&D.instanceColor!==null,instancingMorph:Xt&&D.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:ya,alphaToCoverage:!!M.alphaToCoverage,map:re,matcap:nt,envMap:ft,envMapMode:ft&&Y.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:Ft,bumpMap:ct,normalMap:At,displacementMap:u&&gt,emissiveMap:Yt,normalMapObjectSpace:At&&M.normalMapType===C0,normalMapTangentSpace:At&&M.normalMapType===hd,metalnessMap:Tt,roughnessMap:C,anisotropy:S,anisotropyMap:yt,clearcoat:X,clearcoatMap:Mt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:ht,dispersion:Q,iridescence:ot,iridescenceMap:It,iridescenceThicknessMap:Zt,sheen:tt,sheenColorMap:$t,sheenRoughnessMap:kt,specularMap:le,specularColorMap:Jt,specularIntensityMap:de,transmission:Ut,transmissionMap:B,thicknessMap:xt,gradientMap:J,opaque:M.transparent===!1&&M.blending===Yn&&M.alphaToCoverage===!1,alphaMap:at,alphaTest:Rt,alphaHash:St,combine:M.combine,mapUv:re&&f(M.map.channel),aoMapUv:L&&f(M.aoMap.channel),lightMapUv:Ft&&f(M.lightMap.channel),bumpMapUv:ct&&f(M.bumpMap.channel),normalMapUv:At&&f(M.normalMap.channel),displacementMapUv:gt&&f(M.displacementMap.channel),emissiveMapUv:Yt&&f(M.emissiveMap.channel),metalnessMapUv:Tt&&f(M.metalnessMap.channel),roughnessMapUv:C&&f(M.roughnessMap.channel),anisotropyMapUv:yt&&f(M.anisotropyMap.channel),clearcoatMapUv:Mt&&f(M.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&f(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&f(M.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&f(M.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&f(M.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&f(M.sheenColorMap.channel),sheenRoughnessMapUv:kt&&f(M.sheenRoughnessMap.channel),specularMapUv:le&&f(M.specularMap.channel),specularColorMapUv:Jt&&f(M.specularColorMap.channel),specularIntensityMapUv:de&&f(M.specularIntensityMap.channel),transmissionMapUv:B&&f(M.transmissionMap.channel),thicknessMapUv:xt&&f(M.thicknessMap.channel),alphaMapUv:at&&f(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(At||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(re||at),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Pt,skinning:D.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Nt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:re&&M.map.isVideoTexture===!0&&ce.getTransfer(M.map.colorSpace)===xe,decodeVideoTextureEmissive:Yt&&M.emissiveMap.isVideoTexture===!0&&ce.getTransfer(M.emissiveMap.colorSpace)===xe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Te,flipSided:M.side===Ti,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:te&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&M.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ri.vertexUv1s=c.has(1),ri.vertexUv2s=c.has(2),ri.vertexUv3s=c.has(3),c.clear(),ri}function m(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)b.push(R),b.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(w(b,M),v(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function w(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){r.disableAll(),b.supportsVertexTextures&&r.enable(0),b.instancing&&r.enable(1),b.instancingColor&&r.enable(2),b.instancingMorph&&r.enable(3),b.matcap&&r.enable(4),b.envMap&&r.enable(5),b.normalMapObjectSpace&&r.enable(6),b.normalMapTangentSpace&&r.enable(7),b.clearcoat&&r.enable(8),b.iridescence&&r.enable(9),b.alphaTest&&r.enable(10),b.vertexColors&&r.enable(11),b.vertexAlphas&&r.enable(12),b.vertexUv1s&&r.enable(13),b.vertexUv2s&&r.enable(14),b.vertexUv3s&&r.enable(15),b.vertexTangents&&r.enable(16),b.anisotropy&&r.enable(17),b.alphaHash&&r.enable(18),b.batching&&r.enable(19),b.dispersion&&r.enable(20),b.batchingColor&&r.enable(21),M.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reverseDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),M.push(r.mask)}function _(M){let b=g[M.type],R;if(b){let N=ln[b];R=Ci.clone(N.uniforms)}else R=M.uniforms;return R}function I(M,b){let R;for(let N=0,D=h.length;N<D;N++){let F=h[N];if(F.cacheKey===b){R=F,++R.usedTimes;break}}return R===void 0&&(R=new Mv(n,b,M,a),h.push(R)),R}function T(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function k(){l.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:_,acquireProgram:I,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:k}}function Ev(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let r=n.get(o);return r===void 0&&(r={},n.set(o,r)),r}function i(o){n.delete(o)}function s(o,r,l){n.get(o)[r]=l}function a(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:a}}function Av(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function of(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function rf(){let n=[],t=0,e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function o(d,u,p,g,f,y){let m=n[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:f,group:y},n[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=f,m.group=y),t++,m}function r(d,u,p,g,f,y){let m=o(d,u,p,g,f,y);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(d,u,p,g,f,y){let m=o(d,u,p,g,f,y);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function c(d,u){e.length>1&&e.sort(d||Av),i.length>1&&i.sort(u||of),s.length>1&&s.sort(u||of)}function h(){for(let d=t,u=n.length;d<u;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:r,unshift:l,finish:h,sort:c}}function Rv(){let n=new WeakMap;function t(i,s){let a=n.get(i),o;return a===void 0?(o=new rf,n.set(i,[o])):s>=a.length?(o=new rf,a.push(o)):o=a[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Cv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Lt};break;case"SpotLight":e={position:new P,direction:new P,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function Pv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function kv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Lv(n){let t=new Cv,e=Pv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,a=new he,o=new he;function r(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,f=0,y=0,m=0,w=0,v=0,_=0,I=0,T=0,E=0;c.sort(kv);for(let M=0,b=c.length;M<b;M++){let R=c[M],N=R.color,D=R.intensity,F=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=N.r*D,d+=N.g*D,u+=N.b*D;else if(R.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(R.sh.coefficients[z],D);E++}else if(R.isDirectionalLight){let z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Y=R.shadow,W=e.get(R);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=R.shadow.matrix,w++}i.directional[p]=z,p++}else if(R.isSpotLight){let z=t.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(N).multiplyScalar(D),z.distance=F,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,i.spot[f]=z;let Y=R.shadow;if(R.map&&(i.spotLightMap[I]=R.map,I++,Y.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[f]=Y.matrix,R.castShadow){let W=e.get(R);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,i.spotShadow[f]=W,i.spotShadowMap[f]=O,_++}f++}else if(R.isRectAreaLight){let z=t.get(R);z.color.copy(N).multiplyScalar(D),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),i.rectArea[y]=z,y++}else if(R.isPointLight){let z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){let Y=R.shadow,W=e.get(R);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=R.shadow.matrix,v++}i.point[g]=z,g++}else if(R.isHemisphereLight){let z=t.get(R);z.skyColor.copy(R.color).multiplyScalar(D),z.groundColor.copy(R.groundColor).multiplyScalar(D),i.hemi[m]=z,m++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let k=i.hash;(k.directionalLength!==p||k.pointLength!==g||k.spotLength!==f||k.rectAreaLength!==y||k.hemiLength!==m||k.numDirectionalShadows!==w||k.numPointShadows!==v||k.numSpotShadows!==_||k.numSpotMaps!==I||k.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=f,i.rectArea.length=y,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+I-T,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,k.directionalLength=p,k.pointLength=g,k.spotLength=f,k.rectAreaLength=y,k.hemiLength=m,k.numDirectionalShadows=w,k.numPointShadows=v,k.numSpotShadows=_,k.numSpotMaps=I,k.numLightProbes=E,i.version=Iv++)}function l(c,h){let d=0,u=0,p=0,g=0,f=0,y=h.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){let v=c[m];if(v.isDirectionalLight){let _=i.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(y),d++}else if(v.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(y),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(y),p++}else if(v.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(y),o.identity(),a.copy(v.matrixWorld),a.premultiply(y),o.extractRotation(a),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=i.point[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(y),u++}else if(v.isHemisphereLight){let _=i.hemi[f];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(y),f++}}}return{setup:r,setupView:l,state:i}}function lf(n){let t=new Lv(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function r(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:r,setupLightsView:l,pushLight:a,pushShadow:o}}function Dv(n){let t=new WeakMap;function e(s,a=0){let o=t.get(s),r;return o===void 0?(r=new lf(n),t.set(s,[r])):a>=o.length?(r=new lf(n),o.push(r)):r=o[a],r}function i(){t=new WeakMap}return{get:e,dispose:i}}function Fv(n,t,e){let i=new so,s=new it,a=new it,o=new be,r=new vh({depthPacking:R0}),l=new wh,c={},h=e.maxTextureSize,d={[Qi]:Ti,[Ti]:Qi,[Te]:Te},u=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Uv,fragmentShader:Nv}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ie;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let f=new bt(g,u),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Af;let m=this.type;this.render=function(T,E,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||T.length===0)return;let M=n.getRenderTarget(),b=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Ye),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let D=m!==An&&this.type===An,F=m===An&&this.type!==An;for(let O=0,z=T.length;O<z;O++){let Y=T[O],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let st=W.getFrameExtents();if(s.multiply(st),a.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/st.x),s.x=a.x*st.x,W.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/st.y),s.y=a.y*st.y,W.mapSize.y=a.y)),W.map===null||D===!0||F===!0){let vt=this.type!==An?{minFilter:hi,magFilter:hi}:{};W.map!==null&&W.map.dispose(),W.map=new Qe(s.x,s.y,vt),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let pt=W.getViewportCount();for(let vt=0;vt<pt;vt++){let Nt=W.getViewport(vt);o.set(a.x*Nt.x,a.y*Nt.y,a.x*Nt.z,a.y*Nt.w),N.viewport(o),W.updateMatrices(Y,vt),i=W.getFrustum(),_(E,k,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===An&&w(W,k),W.needsUpdate=!1}m=this.type,y.needsUpdate=!1,n.setRenderTarget(M,b,R)};function w(T,E){let k=t.update(f);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qe(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,k,u,f,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,k,p,f,null)}function v(T,E,k,M){let b=null,R=k.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)b=R;else if(b=k.isPointLight===!0?l:r,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let N=b.uuid,D=E.uuid,F=c[N];F===void 0&&(F={},c[N]=F);let O=F[D];O===void 0&&(O=b.clone(),F[D]=O,E.addEventListener("dispose",I)),b=O}if(b.visible=E.visible,b.wireframe=E.wireframe,M===An?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:d[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,k.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let N=n.properties.get(b);N.light=k}return b}function _(T,E,k,M,b){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===An)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld);let D=t.update(T),F=T.material;if(Array.isArray(F)){let O=D.groups;for(let z=0,Y=O.length;z<Y;z++){let W=O[z],st=F[W.materialIndex];if(st&&st.visible){let pt=v(T,st,M,b);T.onBeforeShadow(n,T,E,k,D,pt,W),n.renderBufferDirect(k,null,D,pt,T,W),T.onAfterShadow(n,T,E,k,D,pt,W)}}}else if(F.visible){let O=v(T,F,M,b);T.onBeforeShadow(n,T,E,k,D,O,null),n.renderBufferDirect(k,null,D,O,T,null),T.onAfterShadow(n,T,E,k,D,O,null)}}let N=T.children;for(let D=0,F=N.length;D<F;D++)_(N[D],E,k,M,b)}function I(T){T.target.removeEventListener("dispose",I);for(let k in c){let M=c[k],b=T.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function Bv(n,t){function e(){let B=!1,xt=new be,J=null,at=new be(0,0,0,0);return{setMask:function(Rt){J!==Rt&&!B&&(n.colorMask(Rt,Rt,Rt,Rt),J=Rt)},setLocked:function(Rt){B=Rt},setClear:function(Rt,St,te,ze,ri){ri===!0&&(Rt*=ze,St*=ze,te*=ze),xt.set(Rt,St,te,ze),at.equals(xt)===!1&&(n.clearColor(Rt,St,te,ze),at.copy(xt))},reset:function(){B=!1,J=null,at.set(-1,0,0,0)}}}function i(){let B=!1,xt=!1,J=null,at=null,Rt=null;return{setReversed:function(St){if(xt!==St){let te=t.get("EXT_clip_control");xt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);let ze=Rt;Rt=null,this.setClear(ze)}xt=St},getReversed:function(){return xt},setTest:function(St){St?ut(n.DEPTH_TEST):Pt(n.DEPTH_TEST)},setMask:function(St){J!==St&&!B&&(n.depthMask(St),J=St)},setFunc:function(St){if(xt&&(St=Ov[St]),at!==St){switch(St){case Tc:n.depthFunc(n.NEVER);break;case Sc:n.depthFunc(n.ALWAYS);break;case Ec:n.depthFunc(n.LESS);break;case oa:n.depthFunc(n.LEQUAL);break;case Ac:n.depthFunc(n.EQUAL);break;case Rc:n.depthFunc(n.GEQUAL);break;case Cc:n.depthFunc(n.GREATER);break;case Pc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}at=St}},setLocked:function(St){B=St},setClear:function(St){Rt!==St&&(xt&&(St=1-St),n.clearDepth(St),Rt=St)},reset:function(){B=!1,J=null,at=null,Rt=null,xt=!1}}}function s(){let B=!1,xt=null,J=null,at=null,Rt=null,St=null,te=null,ze=null,ri=null;return{setTest:function(we){B||(we?ut(n.STENCIL_TEST):Pt(n.STENCIL_TEST))},setMask:function(we){xt!==we&&!B&&(n.stencilMask(we),xt=we)},setFunc:function(we,Yi,wn){(J!==we||at!==Yi||Rt!==wn)&&(n.stencilFunc(we,Yi,wn),J=we,at=Yi,Rt=wn)},setOp:function(we,Yi,wn){(St!==we||te!==Yi||ze!==wn)&&(n.stencilOp(we,Yi,wn),St=we,te=Yi,ze=wn)},setLocked:function(we){B=we},setClear:function(we){ri!==we&&(n.clearStencil(we),ri=we)},reset:function(){B=!1,xt=null,J=null,at=null,Rt=null,St=null,te=null,ze=null,ri=null}}}let a=new e,o=new i,r=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,p=[],g=null,f=!1,y=null,m=null,w=null,v=null,_=null,I=null,T=null,E=new Lt(0,0,0),k=0,M=!1,b=null,R=null,N=null,D=null,F=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Y=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=Y>=2);let st=null,pt={},vt=n.getParameter(n.SCISSOR_BOX),Nt=n.getParameter(n.VIEWPORT),Gt=new be().fromArray(vt),K=new be().fromArray(Nt);function dt(B,xt,J,at){let Rt=new Uint8Array(4),St=n.createTexture();n.bindTexture(B,St),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<J;te++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(xt,0,n.RGBA,1,1,at,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(xt+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return St}let Ct={};Ct[n.TEXTURE_2D]=dt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ct[n.TEXTURE_CUBE_MAP]=dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[n.TEXTURE_2D_ARRAY]=dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ct[n.TEXTURE_3D]=dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),r.setClear(0),ut(n.DEPTH_TEST),o.setFunc(oa),ct(!1),At(hu),ut(n.CULL_FACE),L(Ye);function ut(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function Pt(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function Xt(B,xt){return d[B]!==xt?(n.bindFramebuffer(B,xt),d[B]=xt,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=xt),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=xt),!0):!1}function Ot(B,xt){let J=p,at=!1;if(B){J=u.get(xt),J===void 0&&(J=[],u.set(xt,J));let Rt=B.textures;if(J.length!==Rt.length||J[0]!==n.COLOR_ATTACHMENT0){for(let St=0,te=Rt.length;St<te;St++)J[St]=n.COLOR_ATTACHMENT0+St;J.length=Rt.length,at=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,at=!0);at&&n.drawBuffers(J)}function re(B){return g!==B?(n.useProgram(B),g=B,!0):!1}let nt={[Hi]:n.FUNC_ADD,[c0]:n.FUNC_SUBTRACT,[h0]:n.FUNC_REVERSE_SUBTRACT};nt[d0]=n.MIN,nt[u0]=n.MAX;let ft={[ga]:n.ZERO,[f0]:n.ONE,[p0]:n.SRC_COLOR,[bc]:n.SRC_ALPHA,[x0]:n.SRC_ALPHA_SATURATE,[Kr]:n.DST_COLOR,[Jr]:n.DST_ALPHA,[m0]:n.ONE_MINUS_SRC_COLOR,[Mc]:n.ONE_MINUS_SRC_ALPHA,[y0]:n.ONE_MINUS_DST_COLOR,[g0]:n.ONE_MINUS_DST_ALPHA,[v0]:n.CONSTANT_COLOR,[w0]:n.ONE_MINUS_CONSTANT_COLOR,[_0]:n.CONSTANT_ALPHA,[b0]:n.ONE_MINUS_CONSTANT_ALPHA};function L(B,xt,J,at,Rt,St,te,ze,ri,we){if(B===Ye){f===!0&&(Pt(n.BLEND),f=!1);return}if(f===!1&&(ut(n.BLEND),f=!0),B!==Kh){if(B!==y||we!==M){if((m!==Hi||_!==Hi)&&(n.blendEquation(n.FUNC_ADD),m=Hi,_=Hi),we)switch(B){case Yn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Si:n.blendFunc(n.ONE,n.ONE);break;case du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Yn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Si:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,v=null,I=null,T=null,E.set(0,0,0),k=0,y=B,M=we}return}Rt=Rt||xt,St=St||J,te=te||at,(xt!==m||Rt!==_)&&(n.blendEquationSeparate(nt[xt],nt[Rt]),m=xt,_=Rt),(J!==w||at!==v||St!==I||te!==T)&&(n.blendFuncSeparate(ft[J],ft[at],ft[St],ft[te]),w=J,v=at,I=St,T=te),(ze.equals(E)===!1||ri!==k)&&(n.blendColor(ze.r,ze.g,ze.b,ri),E.copy(ze),k=ri),y=B,M=!1}function Ft(B,xt){B.side===Te?Pt(n.CULL_FACE):ut(n.CULL_FACE);let J=B.side===Ti;xt&&(J=!J),ct(J),B.blending===Yn&&B.transparent===!1?L(Ye):L(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),a.setMask(B.colorWrite);let at=B.stencilWrite;r.setTest(at),at&&(r.setMask(B.stencilWriteMask),r.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),r.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Yt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):Pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ct(B){b!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),b=B)}function At(B){B!==r0?(ut(n.CULL_FACE),B!==R&&(B===hu?n.cullFace(n.BACK):B===l0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pt(n.CULL_FACE),R=B}function gt(B){B!==N&&(z&&n.lineWidth(B),N=B)}function Yt(B,xt,J){B?(ut(n.POLYGON_OFFSET_FILL),(D!==xt||F!==J)&&(n.polygonOffset(xt,J),D=xt,F=J)):Pt(n.POLYGON_OFFSET_FILL)}function Tt(B){B?ut(n.SCISSOR_TEST):Pt(n.SCISSOR_TEST)}function C(B){B===void 0&&(B=n.TEXTURE0+O-1),st!==B&&(n.activeTexture(B),st=B)}function S(B,xt,J){J===void 0&&(st===null?J=n.TEXTURE0+O-1:J=st);let at=pt[J];at===void 0&&(at={type:void 0,texture:void 0},pt[J]=at),(at.type!==B||at.texture!==xt)&&(st!==J&&(n.activeTexture(J),st=J),n.bindTexture(B,xt||Ct[B]),at.type=B,at.texture=xt)}function X(){let B=pt[st];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ut(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function yt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Qt(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function It(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Zt(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $t(B){Gt.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Gt.copy(B))}function kt(B){K.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),K.copy(B))}function le(B,xt){let J=c.get(xt);J===void 0&&(J=new WeakMap,c.set(xt,J));let at=J.get(B);at===void 0&&(at=n.getUniformBlockIndex(xt,B.name),J.set(B,at))}function Jt(B,xt){let at=c.get(xt).get(B);l.get(xt)!==at&&(n.uniformBlockBinding(xt,at,B.__bindingPointIndex),l.set(xt,at))}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},st=null,pt={},d={},u=new WeakMap,p=[],g=null,f=!1,y=null,m=null,w=null,v=null,_=null,I=null,T=null,E=new Lt(0,0,0),k=0,M=!1,b=null,R=null,N=null,D=null,F=null,Gt.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),a.reset(),o.reset(),r.reset()}return{buffers:{color:a,depth:o,stencil:r},enable:ut,disable:Pt,bindFramebuffer:Xt,drawBuffers:Ot,useProgram:re,setBlending:L,setMaterial:Ft,setFlipSided:ct,setCullFace:At,setLineWidth:gt,setPolygonOffset:Yt,setScissorTest:Tt,activeTexture:C,bindTexture:S,unbindTexture:X,compressedTexImage2D:Q,compressedTexImage3D:ot,texImage2D:It,texImage3D:Zt,updateUBOMapping:le,uniformBlockBinding:Jt,texStorage2D:Qt,texStorage3D:ht,texSubImage2D:tt,texSubImage3D:Ut,compressedTexSubImage2D:yt,compressedTexSubImage3D:Mt,scissor:$t,viewport:kt,reset:de}}function cf(n,t,e,i){let s=zv(i);switch(e){case Lf:return n*t;case Uf:return n*t;case Nf:return n*t*2;case od:return n*t/s.components*s.byteLength;case rd:return n*t/s.components*s.byteLength;case Ff:return n*t*2/s.components*s.byteLength;case ld:return n*t*2/s.components*s.byteLength;case Df:return n*t*3/s.components*s.byteLength;case Di:return n*t*4/s.components*s.byteLength;case cd:return n*t*4/s.components*s.byteLength;case pr:case mr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case gr:case yr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Uc:case Fc:return Math.max(n,16)*Math.max(t,8)/4;case Dc:case Nc:return Math.max(n,8)*Math.max(t,8)/2;case Oc:case Bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case zc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Hc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Gc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Yc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case qc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Zc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case $c:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case jc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Qc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case th:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case xr:case eh:case ih:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Of:case nh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case sh:case ah:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zv(n){switch(n){case tn:case Pf:return{byteLength:1,components:1};case Qa:case If:case Ri:return{byteLength:2,components:1};case sd:case ad:return{byteLength:2,components:4};case xs:case nd:case hn:return{byteLength:4,components:1};case kf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Hv(n,t,e,i,s,a,o){let r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):eo("canvas")}function f(C,S,X){let Q=1,ot=Tt(C);if((ot.width>X||ot.height>X)&&(Q=X/Math.max(ot.width,ot.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let tt=Math.floor(Q*ot.width),Ut=Math.floor(Q*ot.height);d===void 0&&(d=g(tt,Ut));let yt=S?g(tt,Ut):d;return yt.width=tt,yt.height=Ut,yt.getContext("2d").drawImage(C,0,0,tt,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+tt+"x"+Ut+")."),yt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),C;return C}function y(C){return C.generateMipmaps}function m(C){n.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(C,S,X,Q,ot=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let tt=S;if(S===n.RED&&(X===n.FLOAT&&(tt=n.R32F),X===n.HALF_FLOAT&&(tt=n.R16F),X===n.UNSIGNED_BYTE&&(tt=n.R8)),S===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(tt=n.R8UI),X===n.UNSIGNED_SHORT&&(tt=n.R16UI),X===n.UNSIGNED_INT&&(tt=n.R32UI),X===n.BYTE&&(tt=n.R8I),X===n.SHORT&&(tt=n.R16I),X===n.INT&&(tt=n.R32I)),S===n.RG&&(X===n.FLOAT&&(tt=n.RG32F),X===n.HALF_FLOAT&&(tt=n.RG16F),X===n.UNSIGNED_BYTE&&(tt=n.RG8)),S===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(tt=n.RG8UI),X===n.UNSIGNED_SHORT&&(tt=n.RG16UI),X===n.UNSIGNED_INT&&(tt=n.RG32UI),X===n.BYTE&&(tt=n.RG8I),X===n.SHORT&&(tt=n.RG16I),X===n.INT&&(tt=n.RG32I)),S===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),X===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),X===n.UNSIGNED_INT&&(tt=n.RGB32UI),X===n.BYTE&&(tt=n.RGB8I),X===n.SHORT&&(tt=n.RGB16I),X===n.INT&&(tt=n.RGB32I)),S===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),X===n.UNSIGNED_INT&&(tt=n.RGBA32UI),X===n.BYTE&&(tt=n.RGBA8I),X===n.SHORT&&(tt=n.RGBA16I),X===n.INT&&(tt=n.RGBA32I)),S===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),S===n.RGBA){let Ut=ot?Qr:ce.getTransfer(Q);X===n.FLOAT&&(tt=n.RGBA32F),X===n.HALF_FLOAT&&(tt=n.RGBA16F),X===n.UNSIGNED_BYTE&&(tt=Ut===xe?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function _(C,S){let X;return C?S===null||S===xs||S===Zn?X=n.DEPTH24_STENCIL8:S===hn?X=n.DEPTH32F_STENCIL8:S===Qa&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===xs||S===Zn?X=n.DEPTH_COMPONENT24:S===hn?X=n.DEPTH_COMPONENT32F:S===Qa&&(X=n.DEPTH_COMPONENT16),X}function I(C,S){return y(C)===!0||C.isFramebufferTexture&&C.minFilter!==hi&&C.minFilter!==cn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){let S=C.target;S.removeEventListener("dispose",T),k(S),S.isVideoTexture&&h.delete(S)}function E(C){let S=C.target;S.removeEventListener("dispose",E),b(S)}function k(C){let S=i.get(C);if(S.__webglInit===void 0)return;let X=C.source,Q=u.get(X);if(Q){let ot=Q[S.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&M(C),Object.keys(Q).length===0&&u.delete(X)}i.remove(C)}function M(C){let S=i.get(C);n.deleteTexture(S.__webglTexture);let X=C.source,Q=u.get(X);delete Q[S.__cacheKey],o.memory.textures--}function b(C){let S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let ot=0;ot<S.__webglFramebuffer[Q].length;ot++)n.deleteFramebuffer(S.__webglFramebuffer[Q][ot]);else n.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[Q]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let X=C.textures;for(let Q=0,ot=X.length;Q<ot;Q++){let tt=i.get(X[Q]);tt.__webglTexture&&(n.deleteTexture(tt.__webglTexture),o.memory.textures--),i.remove(X[Q])}i.remove(C)}let R=0;function N(){R=0}function D(){let C=R;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),R+=1,C}function F(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function O(C,S){let X=i.get(C);if(C.isVideoTexture&&gt(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){let Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(X,C,S);return}}e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+S)}function z(C,S){let X=i.get(C);if(C.version>0&&X.__version!==C.version){K(X,C,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+S)}function Y(C,S){let X=i.get(C);if(C.version>0&&X.__version!==C.version){K(X,C,S);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+S)}function W(C,S){let X=i.get(C);if(C.version>0&&X.__version!==C.version){dt(X,C,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+S)}let st={[Pn]:n.REPEAT,[gs]:n.CLAMP_TO_EDGE,[Lc]:n.MIRRORED_REPEAT},pt={[hi]:n.NEAREST,[E0]:n.NEAREST_MIPMAP_NEAREST,[Fo]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[Vl]:n.LINEAR_MIPMAP_NEAREST,[ys]:n.LINEAR_MIPMAP_LINEAR},vt={[P0]:n.NEVER,[N0]:n.ALWAYS,[I0]:n.LESS,[Bf]:n.LEQUAL,[k0]:n.EQUAL,[U0]:n.GEQUAL,[L0]:n.GREATER,[D0]:n.NOTEQUAL};function Nt(C,S){if(S.type===hn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===cn||S.magFilter===Vl||S.magFilter===Fo||S.magFilter===ys||S.minFilter===cn||S.minFilter===Vl||S.minFilter===Fo||S.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,st[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,st[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,st[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,pt[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,pt[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,vt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hi||S.minFilter!==Fo&&S.minFilter!==ys||S.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Gt(C,S){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));let Q=S.source,ot=u.get(Q);ot===void 0&&(ot={},u.set(Q,ot));let tt=F(S);if(tt!==C.__cacheKey){ot[tt]===void 0&&(ot[tt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ot[tt].usedTimes++;let Ut=ot[C.__cacheKey];Ut!==void 0&&(ot[C.__cacheKey].usedTimes--,Ut.usedTimes===0&&M(S)),C.__cacheKey=tt,C.__webglTexture=ot[tt].texture}return X}function K(C,S,X){let Q=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=n.TEXTURE_3D);let ot=Gt(C,S),tt=S.source;e.bindTexture(Q,C.__webglTexture,n.TEXTURE0+X);let Ut=i.get(tt);if(tt.version!==Ut.__version||ot===!0){e.activeTexture(n.TEXTURE0+X);let yt=ce.getPrimaries(ce.workingColorSpace),Mt=S.colorSpace===Wn?null:ce.getPrimaries(S.colorSpace),Qt=S.colorSpace===Wn||yt===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let ht=f(S.image,!1,s.maxTextureSize);ht=Yt(S,ht);let It=a.convert(S.format,S.colorSpace),Zt=a.convert(S.type),$t=v(S.internalFormat,It,Zt,S.colorSpace,S.isVideoTexture);Nt(Q,S);let kt,le=S.mipmaps,Jt=S.isVideoTexture!==!0,de=Ut.__version===void 0||ot===!0,B=tt.dataReady,xt=I(S,ht);if(S.isDepthTexture)$t=_(S.format===$n,S.type),de&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,$t,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,$t,ht.width,ht.height,0,It,Zt,null));else if(S.isDataTexture)if(le.length>0){Jt&&de&&e.texStorage2D(n.TEXTURE_2D,xt,$t,le[0].width,le[0].height);for(let J=0,at=le.length;J<at;J++)kt=le[J],Jt?B&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,kt.width,kt.height,It,Zt,kt.data):e.texImage2D(n.TEXTURE_2D,J,$t,kt.width,kt.height,0,It,Zt,kt.data);S.generateMipmaps=!1}else Jt?(de&&e.texStorage2D(n.TEXTURE_2D,xt,$t,ht.width,ht.height),B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht.width,ht.height,It,Zt,ht.data)):e.texImage2D(n.TEXTURE_2D,0,$t,ht.width,ht.height,0,It,Zt,ht.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Jt&&de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,$t,le[0].width,le[0].height,ht.depth);for(let J=0,at=le.length;J<at;J++)if(kt=le[J],S.format!==Di)if(It!==null)if(Jt){if(B)if(S.layerUpdates.size>0){let Rt=cf(kt.width,kt.height,S.format,S.type);for(let St of S.layerUpdates){let te=kt.data.subarray(St*Rt/kt.data.BYTES_PER_ELEMENT,(St+1)*Rt/kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,St,kt.width,kt.height,1,It,te)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,kt.width,kt.height,ht.depth,It,kt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,$t,kt.width,kt.height,ht.depth,0,kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,kt.width,kt.height,ht.depth,It,Zt,kt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,$t,kt.width,kt.height,ht.depth,0,It,Zt,kt.data)}else{Jt&&de&&e.texStorage2D(n.TEXTURE_2D,xt,$t,le[0].width,le[0].height);for(let J=0,at=le.length;J<at;J++)kt=le[J],S.format!==Di?It!==null?Jt?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,kt.width,kt.height,It,kt.data):e.compressedTexImage2D(n.TEXTURE_2D,J,$t,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?B&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,kt.width,kt.height,It,Zt,kt.data):e.texImage2D(n.TEXTURE_2D,J,$t,kt.width,kt.height,0,It,Zt,kt.data)}else if(S.isDataArrayTexture)if(Jt){if(de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,$t,ht.width,ht.height,ht.depth),B)if(S.layerUpdates.size>0){let J=cf(ht.width,ht.height,S.format,S.type);for(let at of S.layerUpdates){let Rt=ht.data.subarray(at*J/ht.data.BYTES_PER_ELEMENT,(at+1)*J/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,at,ht.width,ht.height,1,It,Zt,Rt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,It,Zt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,$t,ht.width,ht.height,ht.depth,0,It,Zt,ht.data);else if(S.isData3DTexture)Jt?(de&&e.texStorage3D(n.TEXTURE_3D,xt,$t,ht.width,ht.height,ht.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,It,Zt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,$t,ht.width,ht.height,ht.depth,0,It,Zt,ht.data);else if(S.isFramebufferTexture){if(de)if(Jt)e.texStorage2D(n.TEXTURE_2D,xt,$t,ht.width,ht.height);else{let J=ht.width,at=ht.height;for(let Rt=0;Rt<xt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,$t,J,at,0,It,Zt,null),J>>=1,at>>=1}}else if(le.length>0){if(Jt&&de){let J=Tt(le[0]);e.texStorage2D(n.TEXTURE_2D,xt,$t,J.width,J.height)}for(let J=0,at=le.length;J<at;J++)kt=le[J],Jt?B&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,It,Zt,kt):e.texImage2D(n.TEXTURE_2D,J,$t,It,Zt,kt);S.generateMipmaps=!1}else if(Jt){if(de){let J=Tt(ht);e.texStorage2D(n.TEXTURE_2D,xt,$t,J.width,J.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,It,Zt,ht)}else e.texImage2D(n.TEXTURE_2D,0,$t,It,Zt,ht);y(S)&&m(Q),Ut.__version=tt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function dt(C,S,X){if(S.image.length!==6)return;let Q=Gt(C,S),ot=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+X);let tt=i.get(ot);if(ot.version!==tt.__version||Q===!0){e.activeTexture(n.TEXTURE0+X);let Ut=ce.getPrimaries(ce.workingColorSpace),yt=S.colorSpace===Wn?null:ce.getPrimaries(S.colorSpace),Mt=S.colorSpace===Wn||Ut===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Qt=S.isCompressedTexture||S.image[0].isCompressedTexture,ht=S.image[0]&&S.image[0].isDataTexture,It=[];for(let at=0;at<6;at++)!Qt&&!ht?It[at]=f(S.image[at],!0,s.maxCubemapSize):It[at]=ht?S.image[at].image:S.image[at],It[at]=Yt(S,It[at]);let Zt=It[0],$t=a.convert(S.format,S.colorSpace),kt=a.convert(S.type),le=v(S.internalFormat,$t,kt,S.colorSpace),Jt=S.isVideoTexture!==!0,de=tt.__version===void 0||Q===!0,B=ot.dataReady,xt=I(S,Zt);Nt(n.TEXTURE_CUBE_MAP,S);let J;if(Qt){Jt&&de&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,le,Zt.width,Zt.height);for(let at=0;at<6;at++){J=It[at].mipmaps;for(let Rt=0;Rt<J.length;Rt++){let St=J[Rt];S.format!==Di?$t!==null?Jt?B&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt,0,0,St.width,St.height,$t,St.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt,le,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt,0,0,St.width,St.height,$t,kt,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt,le,St.width,St.height,0,$t,kt,St.data)}}}else{if(J=S.mipmaps,Jt&&de){J.length>0&&xt++;let at=Tt(It[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,le,at.width,at.height)}for(let at=0;at<6;at++)if(ht){Jt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,It[at].width,It[at].height,$t,kt,It[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,le,It[at].width,It[at].height,0,$t,kt,It[at].data);for(let Rt=0;Rt<J.length;Rt++){let te=J[Rt].image[at].image;Jt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt+1,0,0,te.width,te.height,$t,kt,te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt+1,le,te.width,te.height,0,$t,kt,te.data)}}else{Jt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,$t,kt,It[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,le,$t,kt,It[at]);for(let Rt=0;Rt<J.length;Rt++){let St=J[Rt];Jt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt+1,0,0,$t,kt,St.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt+1,le,$t,kt,St.image[at])}}}y(S)&&m(n.TEXTURE_CUBE_MAP),tt.__version=ot.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ct(C,S,X,Q,ot,tt){let Ut=a.convert(X.format,X.colorSpace),yt=a.convert(X.type),Mt=v(X.internalFormat,Ut,yt,X.colorSpace),Qt=i.get(S),ht=i.get(X);if(ht.__renderTarget=S,!Qt.__hasExternalTextures){let It=Math.max(1,S.width>>tt),Zt=Math.max(1,S.height>>tt);ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?e.texImage3D(ot,tt,Mt,It,Zt,S.depth,0,Ut,yt,null):e.texImage2D(ot,tt,Mt,It,Zt,0,Ut,yt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),At(S)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ot,ht.__webglTexture,0,ct(S)):(ot===n.TEXTURE_2D||ot>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ot,ht.__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(C,S,X){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){let Q=S.depthTexture,ot=Q&&Q.isDepthTexture?Q.type:null,tt=_(S.stencilBuffer,ot),Ut=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=ct(S);At(S)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt,tt,S.width,S.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,tt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,tt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ut,n.RENDERBUFFER,C)}else{let Q=S.textures;for(let ot=0;ot<Q.length;ot++){let tt=Q[ot],Ut=a.convert(tt.format,tt.colorSpace),yt=a.convert(tt.type),Mt=v(tt.internalFormat,Ut,yt,tt.colorSpace),Qt=ct(S);X&&At(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qt,Mt,S.width,S.height):At(S)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qt,Mt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);let ot=Q.__webglTexture,tt=ct(S);if(S.depthTexture.format===na)At(S)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0);else if(S.depthTexture.format===$n)At(S)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Xt(C){let S=i.get(C),X=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let Q=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){let ot=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",ot)};Q.addEventListener("dispose",ot),S.__depthDisposeCallback=ot}S.__boundDepthTexture=Q}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Pt(S.__webglFramebuffer,C)}else if(X){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=n.createRenderbuffer(),ut(S.__webglDepthbuffer[Q],C,!1);else{let ot=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ut(S.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ot)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(C,S,X){let Q=i.get(C);S!==void 0&&Ct(Q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Xt(C)}function re(C){let S=C.texture,X=i.get(C),Q=i.get(S);C.addEventListener("dispose",E);let ot=C.textures,tt=C.isWebGLCubeRenderTarget===!0,Ut=ot.length>1;if(Ut||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=S.version,o.memory.textures++),tt){X.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[yt]=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)X.__webglFramebuffer[yt][Mt]=n.createFramebuffer()}else X.__webglFramebuffer[yt]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let yt=0;yt<S.mipmaps.length;yt++)X.__webglFramebuffer[yt]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Ut)for(let yt=0,Mt=ot.length;yt<Mt;yt++){let Qt=i.get(ot[yt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&At(C)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let yt=0;yt<ot.length;yt++){let Mt=ot[yt];X.__webglColorRenderbuffer[yt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[yt]);let Qt=a.convert(Mt.format,Mt.colorSpace),ht=a.convert(Mt.type),It=v(Mt.internalFormat,Qt,ht,Mt.colorSpace,C.isXRRenderTarget===!0),Zt=ct(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt,It,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,X.__webglColorRenderbuffer[yt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),ut(X.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(tt){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Nt(n.TEXTURE_CUBE_MAP,S);for(let yt=0;yt<6;yt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)Ct(X.__webglFramebuffer[yt][Mt],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Mt);else Ct(X.__webglFramebuffer[yt],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);y(S)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let yt=0,Mt=ot.length;yt<Mt;yt++){let Qt=ot[yt],ht=i.get(Qt);e.bindTexture(n.TEXTURE_2D,ht.__webglTexture),Nt(n.TEXTURE_2D,Qt),Ct(X.__webglFramebuffer,C,Qt,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,0),y(Qt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let yt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(yt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(yt,Q.__webglTexture),Nt(yt,S),S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)Ct(X.__webglFramebuffer[Mt],C,S,n.COLOR_ATTACHMENT0,yt,Mt);else Ct(X.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,yt,0);y(S)&&m(yt),e.unbindTexture()}C.depthBuffer&&Xt(C)}function nt(C){let S=C.textures;for(let X=0,Q=S.length;X<Q;X++){let ot=S[X];if(y(ot)){let tt=w(C),Ut=i.get(ot).__webglTexture;e.bindTexture(tt,Ut),m(tt),e.unbindTexture()}}}let ft=[],L=[];function Ft(C){if(C.samples>0){if(At(C)===!1){let S=C.textures,X=C.width,Q=C.height,ot=n.COLOR_BUFFER_BIT,tt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ut=i.get(C),yt=S.length>1;if(yt)for(let Mt=0;Mt<S.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Mt=0;Mt<S.length;Mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ot|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ot|=n.STENCIL_BUFFER_BIT)),yt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Mt]);let Qt=i.get(S[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qt,0)}n.blitFramebuffer(0,0,X,Q,0,0,X,Q,ot,n.NEAREST),l===!0&&(ft.length=0,L.length=0,ft.push(n.COLOR_ATTACHMENT0+Mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ft.push(tt),L.push(tt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),yt)for(let Mt=0;Mt<S.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Mt]);let Qt=i.get(S[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,Qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ct(C){return Math.min(s.maxSamples,C.samples)}function At(C){let S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function gt(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Yt(C,S){let X=C.colorSpace,Q=C.format,ot=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==ya&&X!==Wn&&(ce.getTransfer(X)===xe?(Q!==Di||ot!==tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=N,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=Ot,this.setupRenderTarget=re,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=At}function Vv(n,t){function e(i,s=Wn){let a,o=ce.getTransfer(s);if(i===tn)return n.UNSIGNED_BYTE;if(i===sd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ad)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pf)return n.BYTE;if(i===If)return n.SHORT;if(i===Qa)return n.UNSIGNED_SHORT;if(i===nd)return n.INT;if(i===xs)return n.UNSIGNED_INT;if(i===hn)return n.FLOAT;if(i===Ri)return n.HALF_FLOAT;if(i===Lf)return n.ALPHA;if(i===Df)return n.RGB;if(i===Di)return n.RGBA;if(i===Uf)return n.LUMINANCE;if(i===Nf)return n.LUMINANCE_ALPHA;if(i===na)return n.DEPTH_COMPONENT;if(i===$n)return n.DEPTH_STENCIL;if(i===od)return n.RED;if(i===rd)return n.RED_INTEGER;if(i===Ff)return n.RG;if(i===ld)return n.RG_INTEGER;if(i===cd)return n.RGBA_INTEGER;if(i===pr||i===mr||i===gr||i===yr)if(o===xe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===pr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===pr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dc||i===Uc||i===Nc||i===Fc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Dc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oc||i===Bc||i===zc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Oc||i===Bc)return o===xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===zc)return o===xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hc||i===Vc||i===Gc||i===Wc||i===Xc||i===Yc||i===qc||i===Zc||i===$c||i===Jc||i===Kc||i===jc||i===Qc||i===th)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Hc)return o===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vc)return o===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gc)return o===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wc)return o===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xc)return o===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yc)return o===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qc)return o===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zc)return o===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$c)return o===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jc)return o===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kc)return o===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jc)return o===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qc)return o===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===th)return o===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xr||i===eh||i===ih)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===xr)return o===xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ih)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Of||i===nh||i===sh||i===ah)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===xr)return a.COMPRESSED_RED_RGTC1_EXT;if(i===nh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ah)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function qv(n,t){function e(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function i(y,m){m.color.getRGB(y.fogColor.value,Vf(n)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function s(y,m,w,v,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(y,m):m.isMeshToonMaterial?(a(y,m),d(y,m)):m.isMeshPhongMaterial?(a(y,m),h(y,m)):m.isMeshStandardMaterial?(a(y,m),u(y,m),m.isMeshPhysicalMaterial&&p(y,m,_)):m.isMeshMatcapMaterial?(a(y,m),g(y,m)):m.isMeshDepthMaterial?a(y,m):m.isMeshDistanceMaterial?(a(y,m),f(y,m)):m.isMeshNormalMaterial?a(y,m):m.isLineBasicMaterial?(o(y,m),m.isLineDashedMaterial&&r(y,m)):m.isPointsMaterial?l(y,m,w,v):m.isSpriteMaterial?c(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,e(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===Ti&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,e(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===Ti&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,e(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,e(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);let w=t.get(m),v=w.envMap,_=w.envMapRotation;v&&(y.envMap.value=v,fs.copy(_),fs.x*=-1,fs.y*=-1,fs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),y.envMapRotation.value.setFromMatrix4(Yv.makeRotationFromEuler(fs)),y.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,y.aoMapTransform))}function o(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform))}function r(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function l(y,m,w,v){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*w,y.scale.value=v*.5,m.map&&(y.map.value=m.map,e(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function c(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function h(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function d(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function u(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function p(y,m,w){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ti&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,y.specularIntensityMapTransform))}function g(y,m){m.matcap&&(y.matcap.value=m.matcap)}function f(y,m){let w=t.get(m).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Zv(n,t,e,i){let s={},a={},o=[],r=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,v){let _=v.program;i.uniformBlockBinding(w,_)}function c(w,v){let _=s[w.id];_===void 0&&(g(w),_=h(w),s[w.id]=_,w.addEventListener("dispose",y));let I=v.program;i.updateUBOMapping(w,I);let T=t.render.frame;a[w.id]!==T&&(u(w),a[w.id]=T)}function h(w){let v=d();w.__bindingPointIndex=v;let _=n.createBuffer(),I=w.__size,T=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,I,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function d(){for(let w=0;w<r;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){let v=s[w.id],_=w.uniforms,I=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,E=_.length;T<E;T++){let k=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,b=k.length;M<b;M++){let R=k[M];if(p(R,T,M,I)===!0){let N=R.__offset,D=Array.isArray(R.value)?R.value:[R.value],F=0;for(let O=0;O<D.length;O++){let z=D[O],Y=f(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,N+F,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,F),F+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,v,_,I){let T=w.value,E=v+"_"+_;if(I[E]===void 0)return typeof T=="number"||typeof T=="boolean"?I[E]=T:I[E]=T.clone(),!0;{let k=I[E];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return I[E]=T,!0}else if(k.equals(T)===!1)return k.copy(T),!0}return!1}function g(w){let v=w.uniforms,_=0,I=16;for(let E=0,k=v.length;E<k;E++){let M=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,R=M.length;b<R;b++){let N=M[b],D=Array.isArray(N.value)?N.value:[N.value];for(let F=0,O=D.length;F<O;F++){let z=D[F],Y=f(z),W=_%I,st=W%Y.boundary,pt=W+st;_+=st,pt!==0&&I-pt<Y.storage&&(_+=I-pt),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=Y.storage}}}let T=_%I;return T>0&&(_+=I-T),w.__size=_,w.__cache={},this}function f(w){let v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function y(w){let v=w.target;v.removeEventListener("dispose",y);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete a[v.id]}function m(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},a={}}return{bind:l,update:c,dispose:m}}function or(n,t,e,i,s,a){Qs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(za.x=a*Qs.x-s*Qs.y,za.y=s*Qs.x+a*Qs.y):za.copy(Qs),n.copy(t),n.x+=za.x,n.y+=za.y,n.applyMatrix4(Zf)}function mf(n,t,e,i,s,a,o){let r=Sh.distanceSqToPoint(n);if(r<e){let l=new P;Sh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}function fd(){let n=0,t=0,e=0,i=0;function s(a,o,r,l){n=a,t=r,e=-3*a+3*o-2*r-l,i=2*a-2*o+r+l}return{initCatmullRom:function(a,o,r,l,c){s(o,r,c*(r-a),c*(l-o))},initNonuniformCatmullRom:function(a,o,r,l,c,h,d){let u=(o-a)/c-(r-a)/(c+h)+(r-o)/h,p=(r-o)/h-(l-o)/(h+d)+(l-r)/d;u*=h,p*=h,s(o,r,u,p)},calc:function(a){let o=a*a,r=o*a;return n+t*a+e*o+i*r}}}function gf(n,t,e,i,s){let a=(i-t)*.5,o=(s-e)*.5,r=n*n,l=n*r;return(2*e-2*i+a+o)*l+(-3*e+3*i-2*a-o)*r+a*n+e}function Jv(n,t){let e=1-n;return e*e*t}function Kv(n,t){return 2*(1-n)*n*t}function jv(n,t){return n*n*t}function Ja(n,t,e,i){return Jv(n,t)+Kv(n,e)+jv(n,i)}function Qv(n,t){let e=1-n;return e*e*e*t}function tw(n,t){let e=1-n;return 3*e*e*n*t}function ew(n,t){return 3*(1-n)*n*n*t}function iw(n,t){return n*n*n*t}function Ka(n,t,e,i,s){return Qv(n,t)+tw(n,e)+ew(n,i)+iw(n,s)}function $f(n,t,e,i,s){let a,o;if(s===vw(n,t,e,i)>0)for(a=t;a<e;a+=i)o=yf(a,n[a],n[a+1],o);else for(a=e-i;a>=t;a-=i)o=yf(a,n[a],n[a+1],o);return o&&el(o,o.next)&&(ho(o),o=o.next),o}function ws(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(el(e,e.next)||Oe(e.prev,e,e.next)===0)){if(ho(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function lo(n,t,e,i,s,a,o){if(!n)return;!o&&a&&fw(n,i,s,a);let r=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,a?aw(n,i,s,a):sw(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),ho(n),n=c.next,r=c.next;continue}if(n=c,n===r){o?o===1?(n=ow(ws(n),t,e),lo(n,t,e,i,s,a,2)):o===2&&rw(n,t,e,i,s,a):lo(ws(n),t,e,i,s,a,1);break}}}function sw(n){let t=n.prev,e=n,i=n.next;if(Oe(t,e,i)>=0)return!1;let s=t.x,a=e.x,o=i.x,r=t.y,l=e.y,c=i.y,h=s<a?s<o?s:o:a<o?a:o,d=r<l?r<c?r:c:l<c?l:c,u=s>a?s>o?s:o:a>o?a:o,p=r>l?r>c?r:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&ia(s,r,a,l,o,c,g.x,g.y)&&Oe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function aw(n,t,e,i){let s=n.prev,a=n,o=n.next;if(Oe(s,a,o)>=0)return!1;let r=s.x,l=a.x,c=o.x,h=s.y,d=a.y,u=o.y,p=r<l?r<c?r:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,f=r>l?r>c?r:c:l>c?l:c,y=h>d?h>u?h:u:d>u?d:u,m=Dh(p,g,t,e,i),w=Dh(f,y,t,e,i),v=n.prevZ,_=n.nextZ;for(;v&&v.z>=m&&_&&_.z<=w;){if(v.x>=p&&v.x<=f&&v.y>=g&&v.y<=y&&v!==s&&v!==o&&ia(r,h,l,d,c,u,v.x,v.y)&&Oe(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=p&&_.x<=f&&_.y>=g&&_.y<=y&&_!==s&&_!==o&&ia(r,h,l,d,c,u,_.x,_.y)&&Oe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=m;){if(v.x>=p&&v.x<=f&&v.y>=g&&v.y<=y&&v!==s&&v!==o&&ia(r,h,l,d,c,u,v.x,v.y)&&Oe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=w;){if(_.x>=p&&_.x<=f&&_.y>=g&&_.y<=y&&_!==s&&_!==o&&ia(r,h,l,d,c,u,_.x,_.y)&&Oe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ow(n,t,e){let i=n;do{let s=i.prev,a=i.next.next;!el(s,a)&&Jf(s,i,i.next,a)&&co(s,a)&&co(a,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(a.i/e|0),ho(i),ho(i.next),i=n=a),i=i.next}while(i!==n);return ws(i)}function rw(n,t,e,i,s,a){let o=n;do{let r=o.next.next;for(;r!==o.prev;){if(o.i!==r.i&&gw(o,r)){let l=Kf(o,r);o=ws(o,o.next),l=ws(l,l.next),lo(o,t,e,i,s,a,0),lo(l,t,e,i,s,a,0);return}r=r.next}o=o.next}while(o!==n)}function lw(n,t,e,i){let s=[],a,o,r,l,c;for(a=0,o=t.length;a<o;a++)r=t[a]*i,l=a<o-1?t[a+1]*i:n.length,c=$f(n,r,l,i,!1),c===c.next&&(c.steiner=!0),s.push(mw(c));for(s.sort(cw),a=0;a<s.length;a++)e=hw(s[a],e);return e}function cw(n,t){return n.x-t.x}function hw(n,t){let e=dw(n,t);if(!e)return t;let i=Kf(e,n);return ws(i,i.next),ws(e,e.next)}function dw(n,t){let e=t,i=-1/0,s,a=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=a&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===a))return s}e=e.next}while(e!==t);if(!s)return null;let r=s,l=s.x,c=s.y,h=1/0,d;e=s;do a>=e.x&&e.x>=l&&a!==e.x&&ia(o<c?a:i,o,l,c,o<c?i:a,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(a-e.x),co(e,n)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&uw(s,e)))&&(s=e,h=d)),e=e.next;while(e!==r);return s}function uw(n,t){return Oe(n.prev,n,t.prev)<0&&Oe(t.next,n,n.next)<0}function fw(n,t,e,i){let s=n;do s.z===0&&(s.z=Dh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,pw(s)}function pw(n){let t,e,i,s,a,o,r,l,c=1;do{for(e=n,n=null,a=null,o=0;e;){for(o++,i=e,r=0,t=0;t<c&&(r++,i=i.nextZ,!!i);t++);for(l=c;r>0||l>0&&i;)r!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,r--):(s=i,i=i.nextZ,l--),a?a.nextZ=s:n=s,s.prevZ=a,a=s;e=i}a.nextZ=null,c*=2}while(o>1);return n}function Dh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function mw(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ia(n,t,e,i,s,a,o,r){return(s-o)*(t-r)>=(n-o)*(a-r)&&(n-o)*(i-r)>=(e-o)*(t-r)&&(e-o)*(a-r)>=(s-o)*(i-r)}function gw(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!yw(n,t)&&(co(n,t)&&co(t,n)&&xw(n,t)&&(Oe(n.prev,n,t.prev)||Oe(n,t.prev,t))||el(n,t)&&Oe(n.prev,n,n.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function el(n,t){return n.x===t.x&&n.y===t.y}function Jf(n,t,e,i){let s=ur(Oe(n,t,e)),a=ur(Oe(n,t,i)),o=ur(Oe(e,i,n)),r=ur(Oe(e,i,t));return!!(s!==a&&o!==r||s===0&&dr(n,e,t)||a===0&&dr(n,i,t)||o===0&&dr(e,n,i)||r===0&&dr(e,t,i))}function dr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ur(n){return n>0?1:n<0?-1:0}function yw(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Jf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function co(n,t){return Oe(n.prev,n,n.next)<0?Oe(n,t,n.next)>=0&&Oe(n,n.prev,t)>=0:Oe(n,t,n.prev)<0||Oe(n,n.next,t)<0}function xw(n,t){let e=n,i=!1,s=(n.x+t.x)/2,a=(n.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&s<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Kf(n,t){let e=new Uh(n.i,n.x,n.y),i=new Uh(t.i,t.x,t.y),s=n.next,a=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,a.next=i,i.prev=a,i}function yf(n,t,e,i){let s=new Uh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ho(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Uh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vw(n,t,e,i){let s=0;for(let a=t,o=e-i;a<e;a+=i)s+=(n[o]-n[a])*(n[a+1]+n[o+1]),o=a;return s}function xf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function vf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}function _w(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let a=n[i];e.shapes.push(a.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function fr(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function bw(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Tf(){return performance.now()}function Ef(n,t){return n.distance-t.distance}function Zh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let a=n.children;for(let o=0,r=a.length;o<r;o++)Zh(a[o],t,e,!0)}}var $h,r0,hu,l0,Af,Jh,An,Qi,Ti,Te,Ye,Yn,Si,du,uu,Kh,Hi,c0,h0,d0,u0,ga,f0,p0,m0,bc,Mc,Jr,g0,Kr,y0,x0,v0,w0,_0,b0,Tc,Sc,Ec,oa,Ac,Rc,Cc,Pc,Rf,M0,T0,qn,jh,Qh,td,ed,S0,id,go,Cf,ra,la,Ic,kc,jr,Pn,gs,Lc,hi,E0,Fo,cn,Vl,ys,tn,Pf,If,Qa,nd,xs,hn,Ri,sd,ad,Zn,kf,Lf,Df,Di,Uf,Nf,na,$n,od,rd,Ff,ld,cd,pr,mr,gr,yr,Dc,Uc,Nc,Fc,Oc,Bc,zc,Hc,Vc,Gc,Wc,Xc,Yc,qc,Zc,$c,Jc,Kc,jc,Qc,th,xr,eh,ih,Of,nh,sh,ah,vr,oh,Gl,fu,pu,mu,A0,R0,hd,C0,Wn,Xe,ya,Qr,xe,Ns,gu,P0,I0,k0,Bf,L0,D0,U0,N0,rh,yu,Rn,wr,Jn,li,xu,qa,to,Ss,it,ie,Wl,vu,ce,wu,_u,bu,Mu,Tu,Fs,lh,nm,_r,sm,mi,be,ch,Qe,br,hh,Kn,P,Yl,Su,In,bn,Zi,Oo,Os,Bs,zs,On,Bn,ls,Ua,Bo,zo,cs,am,Na,Zl,jn,Mn,$l,Ho,zn,Jl,Vo,Kl,io,he,Hs,$i,om,rm,Hn,Go,ki,Eu,Au,un,no,lm,Ru,Vs,Tn,Wo,Fa,cm,hm,Cu,Pu,Iu,ku,dm,Gs,jl,Me,Ji,Sn,Ql,En,Ws,Xs,Lu,tc,ec,ic,nc,sc,ac,Xn,Hf,Vn,Xo,Lt,ci,um,fn,Pe,Ve,Yo,je,Mr,Tr,oe,fm,zi,rc,Ys,Li,Oa,Je,Ie,Du,hs,qo,Uu,Zo,$o,Jo,lc,Ko,Nu,jo,bt,gi,Ci,gm,ym,ke,Sr,Gn,Fu,Ou,Mi,qs,Zs,dh,Er,uh,cc,xm,vm,Ki,ds,tr,so,Ue,_m,bm,Mm,Tm,Sm,Em,Am,Rm,Cm,Pm,Im,km,Lm,Dm,Um,Nm,Fm,Om,Bm,zm,Hm,Vm,Gm,Wm,Xm,Ym,qm,Zm,$m,Jm,Km,jm,Qm,tg,eg,ig,ng,sg,ag,og,rg,lg,cg,hg,dg,ug,fg,pg,mg,gg,yg,xg,vg,wg,_g,bg,Mg,Tg,Sg,Eg,Ag,Rg,Cg,Pg,Ig,kg,Lg,Dg,Ug,Ng,Fg,Og,Bg,zg,Hg,Vg,Gg,Wg,Xg,Yg,qg,Zg,$g,Jg,Kg,jg,Qg,ty,ey,iy,ny,sy,ay,oy,ry,ly,cy,hy,dy,uy,fy,py,my,gy,yy,xy,vy,wy,_y,by,My,Ty,Sy,Ey,Ay,Ry,Cy,Py,Iy,ky,Ly,Dy,Uy,Ny,Fy,Oy,By,zy,Hy,Vy,Gy,Wy,Xy,Yy,qy,Zy,$y,Jy,Ky,jy,Qy,ae,_t,ln,er,us,tx,Qn,ea,Bu,ms,hc,zu,dc,uc,fc,pc,ps,$s,Hu,Ar,ha,Wf,Xu,Xf,Yf,qf,Yu,qu,Zu,$u,Ju,fh,ph,mh,mc,aa,nv,sv,Qu,nr,fv,pv,gv,Tv,yh,xh,Iv,vh,wh,Uv,Nv,Ov,_h,rt,Gv,$a,Wv,Xv,bh,Mh,fs,Yv,Rr,Cr,Pr,Th,fi,Ir,ao,Js,Ba,Ks,js,Qs,za,Zf,sr,Ha,ar,hf,gc,df,kr,vs,Lr,ta,uf,rr,ff,$v,Va,Ga,Dr,da,pf,Sh,lr,cr,oo,ua,Vi,ro,Eh,hr,yc,xc,vc,Ah,Ur,Rh,Nr,Ch,Fr,Ph,Or,Ih,kh,Br,zr,fa,ei,ts,Lh,pa,nw,ja,uo,ww,Ei,Hr,Ai,kn,Vr,_s,Gr,ma,Nh,Fh,Oh,en,bs,Bh,zh,Hh,Wr,Ms,Vh,wf,Gh,Mw,fo,Wh,Xr,po,Yr,wc,_f,bf,qr,Mf,Wa,_c,Xh,Ts,Yh,mo,Zr,pd,Tw,md,Sw,Ew,Aw,Rw,Cw,Pw,Iw,qh,De,k1,Sf,$r,Be=No(()=>{$h="170",r0=0,hu=1,l0=2,Af=1,Jh=2,An=3,Qi=0,Ti=1,Te=2,Ye=0,Yn=1,Si=2,du=3,uu=4,Kh=5,Hi=100,c0=101,h0=102,d0=103,u0=104,ga=200,f0=201,p0=202,m0=203,bc=204,Mc=205,Jr=206,g0=207,Kr=208,y0=209,x0=210,v0=211,w0=212,_0=213,b0=214,Tc=0,Sc=1,Ec=2,oa=3,Ac=4,Rc=5,Cc=6,Pc=7,Rf=0,M0=1,T0=2,qn=0,jh=1,Qh=2,td=3,ed=4,S0=5,id=6,go=7,Cf=300,ra=301,la=302,Ic=303,kc=304,jr=306,Pn=1e3,gs=1001,Lc=1002,hi=1003,E0=1004,Fo=1005,cn=1006,Vl=1007,ys=1008,tn=1009,Pf=1010,If=1011,Qa=1012,nd=1013,xs=1014,hn=1015,Ri=1016,sd=1017,ad=1018,Zn=1020,kf=35902,Lf=1021,Df=1022,Di=1023,Uf=1024,Nf=1025,na=1026,$n=1027,od=1028,rd=1029,Ff=1030,ld=1031,cd=1033,pr=33776,mr=33777,gr=33778,yr=33779,Dc=35840,Uc=35841,Nc=35842,Fc=35843,Oc=36196,Bc=37492,zc=37496,Hc=37808,Vc=37809,Gc=37810,Wc=37811,Xc=37812,Yc=37813,qc=37814,Zc=37815,$c=37816,Jc=37817,Kc=37818,jc=37819,Qc=37820,th=37821,xr=36492,eh=36494,ih=36495,Of=36283,nh=36284,sh=36285,ah=36286,vr=2300,oh=2301,Gl=2302,fu=2400,pu=2401,mu=2402,A0=3200,R0=3201,hd=0,C0=1,Wn="",Xe="srgb",ya="srgb-linear",Qr="linear",xe="srgb",Ns=7680,gu=519,P0=512,I0=513,k0=514,Bf=515,L0=516,D0=517,U0=518,N0=519,rh=35044,yu="300 es",Rn=2e3,wr=2001,Jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,t);t.target=null}}},li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xu=1234567,qa=Math.PI/180,to=180/Math.PI;Ss={DEG2RAD:qa,RAD2DEG:to,generateUUID:dn,clamp:Ke,euclideanModulo:dd,mapLinear:F0,inverseLerp:O0,lerp:Za,damp:B0,pingpong:z0,smoothstep:H0,smootherstep:V0,randInt:G0,randFloat:W0,randFloatSpread:X0,seededRandom:Y0,degToRad:q0,radToDeg:Z0,isPowerOfTwo:$0,ceilPowerOfTwo:J0,floorPowerOfTwo:K0,setQuaternionFromProperEuler:j0,normalize:_e,denormalize:ji},it=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*i-o*s+t.x,this.y=a*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ie=class n{constructor(t,e,i,s,a,o,r,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,o,r,l,c)}set(t,e,i,s,a,o,r,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=r,h[3]=e,h[4]=a,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,a=this.elements,o=i[0],r=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],f=s[0],y=s[3],m=s[6],w=s[1],v=s[4],_=s[7],I=s[2],T=s[5],E=s[8];return a[0]=o*f+r*w+l*I,a[3]=o*y+r*v+l*T,a[6]=o*m+r*_+l*E,a[1]=c*f+h*w+d*I,a[4]=c*y+h*v+d*T,a[7]=c*m+h*_+d*E,a[2]=u*f+p*w+g*I,a[5]=u*y+p*v+g*T,a[8]=u*m+p*_+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],o=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*r*c-i*a*h+i*r*l+s*a*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],o=t[4],r=t[5],l=t[6],c=t[7],h=t[8],d=h*o-r*c,u=r*l-h*a,p=c*a-o*l,g=e*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let f=1/g;return t[0]=d*f,t[1]=(s*c-h*i)*f,t[2]=(r*i-s*o)*f,t[3]=u*f,t[4]=(h*e-s*l)*f,t[5]=(s*a-r*e)*f,t[6]=p*f,t[7]=(i*l-c*e)*f,t[8]=(o*e-i*a)*f,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,o,r){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*r)+o+t,-s*c,s*l,-s*(-c*o+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Wl.makeScale(t,e)),this}rotate(t){return this.premultiply(Wl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wl=new ie;vu={};ce={enabled:!0,workingColorSpace:ya,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===xe&&(n.r=Cn(n.r),n.g=Cn(n.g),n.b=Cn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===xe&&(n.r=sa(n.r),n.g=sa(n.g),n.b=sa(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Wn?Qr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};wu=[.64,.33,.3,.6,.15,.06],_u=[.2126,.7152,.0722],bu=[.3127,.329],Mu=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tu=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ce.define({[ya]:{primaries:wu,whitePoint:bu,transfer:Qr,toXYZ:Mu,fromXYZ:Tu,luminanceCoefficients:_u,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:wu,whitePoint:bu,transfer:xe,toXYZ:Mu,fromXYZ:Tu,luminanceCoefficients:_u,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}});lh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fs===void 0&&(Fs=eo("canvas")),Fs.width=t.width,Fs.height=t.height;let i=Fs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=eo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=Cn(a[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Cn(e[i]/255)*255):e[i]=Cn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nm=0,_r=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=dn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,r=s.length;o<r;o++)s[o].isDataTexture?a.push(Xl(s[o].image)):a.push(Xl(s[o]))}else a=Xl(s);i.url=a}return e||(t.images[this.uuid]=i),i}};sm=0,mi=class n extends Jn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=gs,s=gs,a=cn,o=ys,r=Di,l=tn,c=n.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=dn(),this.name="",this.source=new _r(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pn:t.x=t.x-Math.floor(t.x);break;case gs:t.x=t.x<0?0:1;break;case Lc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pn:t.y=t.y-Math.floor(t.y);break;case gs:t.y=t.y<0?0:1;break;case Lc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mi.DEFAULT_IMAGE=null;mi.DEFAULT_MAPPING=Cf;mi.DEFAULT_ANISOTROPY=1;be=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*a,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*a,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*a,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],f=l[2],y=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-f)<.01&&Math.abs(g-y)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+f)<.1&&Math.abs(g+y)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,_=(p+1)/2,I=(m+1)/2,T=(h+u)/4,E=(d+f)/4,k=(g+y)/4;return v>_&&v>I?v<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(v),s=T/i,a=E/i):_>I?_<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(_),i=T/s,a=k/s):I<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(I),i=E/a,s=k/a),this.set(i,s,a,e),this}let w=Math.sqrt((y-g)*(y-g)+(d-f)*(d-f)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(y-g)/w,this.y=(d-f)/w,this.z=(u-h)/w,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ch=class extends Jn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let a=new mi(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let r=0;r<o;r++)this.textures[r]=a.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new _r(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends ch{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},br=class extends mi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hi,this.minFilter=hi,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},hh=class extends mi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hi,this.minFilter=hi,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,o,r){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=a[o+0],p=a[o+1],g=a[o+2],f=a[o+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(r===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=f;return}if(d!==f||l!==u||c!==p||h!==g){let y=1-r,m=l*u+c*p+h*g+d*f,w=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let I=Math.sqrt(v),T=Math.atan2(I,m*w);y=Math.sin(y*T)/I,r=Math.sin(r*T)/I}let _=r*w;if(l=l*y+u*_,c=c*y+p*_,h=h*y+g*_,d=d*y+f*_,y===1-r){let I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,a,o){let r=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=a[o],u=a[o+1],p=a[o+2],g=a[o+3];return t[e]=r*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-r*p,t[e+2]=c*g+h*p+r*u-l*d,t[e+3]=h*g-r*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,a=t._z,o=t._order,r=Math.cos,l=Math.sin,c=r(i/2),h=r(s/2),d=r(a/2),u=l(i/2),p=l(s/2),g=l(a/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],a=e[8],o=e[1],r=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+r+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(o-s)*p}else if(i>r&&i>d){let p=2*Math.sqrt(1+i-r-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(a+c)/p}else if(r>d){let p=2*Math.sqrt(1+r-i-d);this._w=(a-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-r);this._w=(o-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,a=t._z,o=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*r+s*c-a*l,this._y=s*h+o*l+a*r-i*c,this._z=a*h+o*c+i*l-s*r,this._w=o*h-i*r-s*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,o=this._w,r=o*t._w+i*t._x+s*t._y+a*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=i,this._y=s,this._z=a,this;let l=1-r*r;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*a+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,r),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=a*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Su.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,a=t.elements,o=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*o,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*o,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,a=t.x,o=t.y,r=t.z,l=t.w,c=2*(o*s-r*i),h=2*(r*e-a*s),d=2*(a*i-o*e);return this.x=e+l*c+o*d-r*h,this.y=i+l*h+r*c-a*d,this.z=s+l*d+a*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,a=t.z,o=e.x,r=e.y,l=e.z;return this.x=s*l-a*r,this.y=a*o-i*l,this.z=i*r-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Yl.copy(this).projectOnVector(t),this.sub(Yl)}reflect(t){return this.sub(Yl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yl=new P,Su=new Kn,In=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Zi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Zi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Zi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)t.isMesh===!0?t.getVertexPosition(o,Zi):Zi.fromBufferAttribute(a,o),Zi.applyMatrix4(t.matrixWorld),this.expandByPoint(Zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oo.copy(i.boundingBox)),Oo.applyMatrix4(t.matrixWorld),this.union(Oo)}let s=t.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zi),Zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ua),Bo.subVectors(this.max,Ua),Os.subVectors(t.a,Ua),Bs.subVectors(t.b,Ua),zs.subVectors(t.c,Ua),On.subVectors(Bs,Os),Bn.subVectors(zs,Bs),ls.subVectors(Os,zs);let e=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ls.z,ls.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ls.z,0,-ls.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ls.y,ls.x,0];return!ql(e,Os,Bs,zs,Bo)||(e=[1,0,0,0,1,0,0,0,1],!ql(e,Os,Bs,zs,Bo))?!1:(zo.crossVectors(On,Bn),e=[zo.x,zo.y,zo.z],ql(e,Os,Bs,zs,Bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},bn=[new P,new P,new P,new P,new P,new P,new P,new P],Zi=new P,Oo=new In,Os=new P,Bs=new P,zs=new P,On=new P,Bn=new P,ls=new P,Ua=new P,Bo=new P,zo=new P,cs=new P;am=new In,Na=new P,Zl=new P,jn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):am.setFromPoints(t).getCenter(i);let s=0;for(let a=0,o=t.length;a<o;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Na.subVectors(t,this.center);let e=Na.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Na,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Na.copy(t.center).add(Zl)),this.expandByPoint(Na.copy(t.center).sub(Zl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Mn=new P,$l=new P,Ho=new P,zn=new P,Jl=new P,Vo=new P,Kl=new P,io=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){$l.copy(t).add(e).multiplyScalar(.5),Ho.copy(e).sub(t).normalize(),zn.copy(this.origin).sub($l);let a=t.distanceTo(e)*.5,o=-this.direction.dot(Ho),r=zn.dot(this.direction),l=-zn.dot(Ho),c=zn.lengthSq(),h=Math.abs(1-o*o),d,u,p,g;if(h>0)if(d=o*l-r,u=o*r-l,g=a*h,d>=0)if(u>=-g)if(u<=g){let f=1/h;d*=f,u*=f,p=d*(d+o*u+2*r)+u*(o*d+u+2*l)+c}else u=a,d=Math.max(0,-(o*u+r)),p=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(o*u+r)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*a+r)),u=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(d=Math.max(0,-(o*a+r)),u=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c);else u=o>0?-a:a,d=Math.max(0,-(o*u+r)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy($l).addScaledVector(Ho,u),p}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);let i=Mn.dot(this.direction),s=Mn.dot(Mn)-i*i,a=t.radius*t.radius;if(s>a)return null;let o=Math.sqrt(a-s),r=i-o,l=i+o;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,o,r,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||a>s||((a>i||isNaN(i))&&(i=a),(o<s||isNaN(s))&&(s=o),d>=0?(r=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(r=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||r>s)||((r>i||i!==i)&&(i=r),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,i,s,a){Jl.subVectors(e,t),Vo.subVectors(i,t),Kl.crossVectors(Jl,Vo);let o=this.direction.dot(Kl),r;if(o>0){if(s)return null;r=1}else if(o<0)r=-1,o=-o;else return null;zn.subVectors(this.origin,t);let l=r*this.direction.dot(Vo.crossVectors(zn,Vo));if(l<0)return null;let c=r*this.direction.dot(Jl.cross(zn));if(c<0||l+c>o)return null;let h=-r*zn.dot(Kl);return h<0?null:this.at(h/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class n{constructor(t,e,i,s,a,o,r,l,c,h,d,u,p,g,f,y){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,o,r,l,c,h,d,u,p,g,f,y)}set(t,e,i,s,a,o,r,l,c,h,d,u,p,g,f,y){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=a,m[5]=o,m[9]=r,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=p,m[7]=g,m[11]=f,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Hs.setFromMatrixColumn(t,0).length(),a=1/Hs.setFromMatrixColumn(t,1).length(),o=1/Hs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,a=t.z,o=Math.cos(i),r=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let u=o*h,p=o*d,g=r*h,f=r*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-f*c,e[9]=-r*l,e[2]=f-u*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,g=c*h,f=c*d;e[0]=u+f*r,e[4]=g*r-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-r,e[2]=p*r-g,e[6]=f+u*r,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,g=c*h,f=c*d;e[0]=u-f*r,e[4]=-o*d,e[8]=g+p*r,e[1]=p+g*r,e[5]=o*h,e[9]=f-u*r,e[2]=-o*c,e[6]=r,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,p=o*d,g=r*h,f=r*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+f,e[1]=l*d,e[5]=f*c+u,e[9]=p*c-g,e[2]=-c,e[6]=r*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,p=o*c,g=r*l,f=r*c;e[0]=l*h,e[4]=f-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-r*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-f*d}else if(t.order==="XZY"){let u=o*l,p=o*c,g=r*l,f=r*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+f,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=r*h,e[10]=f*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(om,t,rm)}lookAt(t,e,i){let s=this.elements;return ki.subVectors(t,e),ki.lengthSq()===0&&(ki.z=1),ki.normalize(),Hn.crossVectors(i,ki),Hn.lengthSq()===0&&(Math.abs(i.z)===1?ki.x+=1e-4:ki.z+=1e-4,ki.normalize(),Hn.crossVectors(i,ki)),Hn.normalize(),Go.crossVectors(ki,Hn),s[0]=Hn.x,s[4]=Go.x,s[8]=ki.x,s[1]=Hn.y,s[5]=Go.y,s[9]=ki.y,s[2]=Hn.z,s[6]=Go.z,s[10]=ki.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,a=this.elements,o=i[0],r=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],f=i[6],y=i[10],m=i[14],w=i[3],v=i[7],_=i[11],I=i[15],T=s[0],E=s[4],k=s[8],M=s[12],b=s[1],R=s[5],N=s[9],D=s[13],F=s[2],O=s[6],z=s[10],Y=s[14],W=s[3],st=s[7],pt=s[11],vt=s[15];return a[0]=o*T+r*b+l*F+c*W,a[4]=o*E+r*R+l*O+c*st,a[8]=o*k+r*N+l*z+c*pt,a[12]=o*M+r*D+l*Y+c*vt,a[1]=h*T+d*b+u*F+p*W,a[5]=h*E+d*R+u*O+p*st,a[9]=h*k+d*N+u*z+p*pt,a[13]=h*M+d*D+u*Y+p*vt,a[2]=g*T+f*b+y*F+m*W,a[6]=g*E+f*R+y*O+m*st,a[10]=g*k+f*N+y*z+m*pt,a[14]=g*M+f*D+y*Y+m*vt,a[3]=w*T+v*b+_*F+I*W,a[7]=w*E+v*R+_*O+I*st,a[11]=w*k+v*N+_*z+I*pt,a[15]=w*M+v*D+_*Y+I*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],o=t[1],r=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],f=t[7],y=t[11],m=t[15];return g*(+a*l*d-s*c*d-a*r*u+i*c*u+s*r*p-i*l*p)+f*(+e*l*p-e*c*u+a*o*u-s*o*p+s*c*h-a*l*h)+y*(+e*c*d-e*r*p-a*o*d+i*o*p+a*r*h-i*c*h)+m*(-s*r*h-e*l*d+e*r*u+s*o*d-i*o*u+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],o=t[4],r=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],f=t[13],y=t[14],m=t[15],w=d*y*c-f*u*c+f*l*p-r*y*p-d*l*m+r*u*m,v=g*u*c-h*y*c-g*l*p+o*y*p+h*l*m-o*u*m,_=h*f*c-g*d*c+g*r*p-o*f*p-h*r*m+o*d*m,I=g*d*l-h*f*l-g*r*u+o*f*u+h*r*y-o*d*y,T=e*w+i*v+s*_+a*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return t[0]=w*E,t[1]=(f*u*a-d*y*a-f*s*p+i*y*p+d*s*m-i*u*m)*E,t[2]=(r*y*a-f*l*a+f*s*c-i*y*c-r*s*m+i*l*m)*E,t[3]=(d*l*a-r*u*a-d*s*c+i*u*c+r*s*p-i*l*p)*E,t[4]=v*E,t[5]=(h*y*a-g*u*a+g*s*p-e*y*p-h*s*m+e*u*m)*E,t[6]=(g*l*a-o*y*a-g*s*c+e*y*c+o*s*m-e*l*m)*E,t[7]=(o*u*a-h*l*a+h*s*c-e*u*c-o*s*p+e*l*p)*E,t[8]=_*E,t[9]=(g*d*a-h*f*a-g*i*p+e*f*p+h*i*m-e*d*m)*E,t[10]=(o*f*a-g*r*a+g*i*c-e*f*c-o*i*m+e*r*m)*E,t[11]=(h*r*a-o*d*a-h*i*c+e*d*c+o*i*p-e*r*p)*E,t[12]=I*E,t[13]=(h*f*s-g*d*s+g*i*u-e*f*u-h*i*y+e*d*y)*E,t[14]=(g*r*s-o*f*s-g*i*l+e*f*l+o*i*y-e*r*y)*E,t[15]=(o*d*s-h*r*s+h*i*l-e*d*l-o*i*u+e*r*u)*E,this}scale(t){let e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),a=1-i,o=t.x,r=t.y,l=t.z,c=a*o,h=a*r;return this.set(c*o+i,c*r-s*l,c*l+s*r,0,c*r+s*l,h*r+i,h*l-s*o,0,c*l-s*r,h*l+s*o,a*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,o){return this.set(1,i,a,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,a=e._x,o=e._y,r=e._z,l=e._w,c=a+a,h=o+o,d=r+r,u=a*c,p=a*h,g=a*d,f=o*h,y=o*d,m=r*d,w=l*c,v=l*h,_=l*d,I=i.x,T=i.y,E=i.z;return s[0]=(1-(f+m))*I,s[1]=(p+_)*I,s[2]=(g-v)*I,s[3]=0,s[4]=(p-_)*T,s[5]=(1-(u+m))*T,s[6]=(y+w)*T,s[7]=0,s[8]=(g+v)*E,s[9]=(y-w)*E,s[10]=(1-(u+f))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,a=Hs.set(s[0],s[1],s[2]).length(),o=Hs.set(s[4],s[5],s[6]).length(),r=Hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],$i.copy(this);let c=1/a,h=1/o,d=1/r;return $i.elements[0]*=c,$i.elements[1]*=c,$i.elements[2]*=c,$i.elements[4]*=h,$i.elements[5]*=h,$i.elements[6]*=h,$i.elements[8]*=d,$i.elements[9]*=d,$i.elements[10]*=d,e.setFromRotationMatrix($i),i.x=a,i.y=o,i.z=r,this}makePerspective(t,e,i,s,a,o,r=Rn){let l=this.elements,c=2*a/(e-t),h=2*a/(i-s),d=(e+t)/(e-t),u=(i+s)/(i-s),p,g;if(r===Rn)p=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(r===wr)p=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,a,o,r=Rn){let l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(o-a),u=(e+t)*c,p=(i+s)*h,g,f;if(r===Rn)g=(o+a)*d,f=-2*d;else if(r===wr)g=a*d,f=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=f,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Hs=new P,$i=new he,om=new P(0,0,0),rm=new P(1,1,1),Hn=new P,Go=new P,ki=new P,Eu=new he,Au=new Kn,un=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,a=s[0],o=s[4],r=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ke(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Eu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Au.setFromEuler(this),this.setFromQuaternion(Au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";no=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},lm=0,Ru=new P,Vs=new Kn,Tn=new he,Wo=new P,Fa=new P,cm=new P,hm=new Kn,Cu=new P(1,0,0),Pu=new P(0,1,0),Iu=new P(0,0,1),ku={type:"added"},dm={type:"removed"},Gs={type:"childadded",child:null},jl={type:"childremoved",child:null},Me=class n extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,e=new un,i=new Kn,s=new P(1,1,1);function a(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new ie}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(Cu,t)}rotateY(t){return this.rotateOnAxis(Pu,t)}rotateZ(t){return this.rotateOnAxis(Iu,t)}translateOnAxis(t,e){return Ru.copy(t).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cu,t)}translateY(t){return this.translateOnAxis(Pu,t)}translateZ(t){return this.translateOnAxis(Iu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Wo.copy(t):Wo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Fa,Wo,this.up):Tn.lookAt(Wo,Fa,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(Tn),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ku),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dm),jl.child=t,this.dispatchEvent(jl),jl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ku),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,t,cm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,hm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){let l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(a(t.materials,this.material[l]));s.material=r}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){let l=this.animations[r];s.animations.push(a(t.animations,l))}}if(e){let r=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(r){let l=[];for(let c in r){let h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Me.DEFAULT_UP=new P(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Ji=new P,Sn=new P,Ql=new P,En=new P,Ws=new P,Xs=new P,Lu=new P,tc=new P,ec=new P,ic=new P,nc=new be,sc=new be,ac=new be,Xn=class n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ji.subVectors(t,e),s.cross(Ji);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){Ji.subVectors(s,e),Sn.subVectors(i,e),Ql.subVectors(t,e);let o=Ji.dot(Ji),r=Ji.dot(Sn),l=Ji.dot(Ql),c=Sn.dot(Sn),h=Sn.dot(Ql),d=o*c-r*r;if(d===0)return a.set(0,0,0),null;let u=1/d,p=(c*l-r*h)*u,g=(o*h-r*l)*u;return a.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,i,s,a,o,r,l){return this.getBarycoord(t,e,i,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,En.x),l.addScaledVector(o,En.y),l.addScaledVector(r,En.z),l)}static getInterpolatedAttribute(t,e,i,s,a,o){return nc.setScalar(0),sc.setScalar(0),ac.setScalar(0),nc.fromBufferAttribute(t,e),sc.fromBufferAttribute(t,i),ac.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(nc,a.x),o.addScaledVector(sc,a.y),o.addScaledVector(ac,a.z),o}static isFrontFacing(t,e,i,s){return Ji.subVectors(i,e),Sn.subVectors(t,e),Ji.cross(Sn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ji.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),Ji.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,a=this.c,o,r;Ws.subVectors(s,i),Xs.subVectors(a,i),tc.subVectors(t,i);let l=Ws.dot(tc),c=Xs.dot(tc);if(l<=0&&c<=0)return e.copy(i);ec.subVectors(t,s);let h=Ws.dot(ec),d=Xs.dot(ec);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Ws,o);ic.subVectors(t,a);let p=Ws.dot(ic),g=Xs.dot(ic);if(g>=0&&p<=g)return e.copy(a);let f=p*c-l*g;if(f<=0&&c>=0&&g<=0)return r=c/(c-g),e.copy(i).addScaledVector(Xs,r);let y=h*g-p*d;if(y<=0&&d-h>=0&&p-g>=0)return Lu.subVectors(a,s),r=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(Lu,r);let m=1/(y+f+u);return o=f*m,r=u*m,e.copy(i).addScaledVector(Ws,o).addScaledVector(Xs,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Xo={h:0,s:0,l:0};Lt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ce.workingColorSpace){if(t=dd(t,1),e=Ke(e,0,1),i=Ke(i,0,1),e===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+e):i+e-i*e,o=2*i-a;this.r=oc(o,a,t+1/3),this.g=oc(o,a,t),this.b=oc(o,a,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=Xe){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,o=s[1],r=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let i=Hf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=sa(t.r),this.g=sa(t.g),this.b=sa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return ce.fromWorkingColorSpace(ci.copy(this),t),Math.round(Ke(ci.r*255,0,255))*65536+Math.round(Ke(ci.g*255,0,255))*256+Math.round(Ke(ci.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(ci.copy(this),e);let i=ci.r,s=ci.g,a=ci.b,o=Math.max(i,s,a),r=Math.min(i,s,a),l,c,h=(r+o)/2;if(r===o)l=0,c=0;else{let d=o-r;switch(c=h<=.5?d/(o+r):d/(2-o-r),o){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(ci.copy(this),e),t.r=ci.r,t.g=ci.g,t.b=ci.b,t}getStyle(t=Xe){ce.fromWorkingColorSpace(ci.copy(this),t);let e=ci.r,i=ci.g,s=ci.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Xo);let i=Za(Vn.h,Xo.h,e),s=Za(Vn.s,Xo.s,e),a=Za(Vn.l,Xo.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ci=new Lt;Lt.NAMES=Hf;um=0,fn=class extends Jn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=dn(),this.name="",this.blending=Yn,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=Mc,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bc&&(i.blendSrc=this.blendSrc),this.blendDst!==Mc&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let o=[];for(let r in a){let l=a[r];delete l.metadata,o.push(l)}return o}if(e){let a=s(t.textures),o=s(t.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Pe=class extends fn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ve=new P,Yo=new it,je=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=rh,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Yo.fromBufferAttribute(this,e),Yo.applyMatrix3(t),this.setXY(e,Yo.x,Yo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ji(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),a=_e(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rh&&(t.usage=this.usage),t}},Mr=class extends je{constructor(t,e,i){super(new Uint16Array(t),e,i)}},Tr=class extends je{constructor(t,e,i){super(new Uint32Array(t),e,i)}},oe=class extends je{constructor(t,e,i){super(new Float32Array(t),e,i)}},fm=0,zi=new he,rc=new Me,Ys=new P,Li=new In,Oa=new In,Je=new P,Ie=class n extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zf(t)?Tr:Mr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new ie().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zi.makeRotationFromQuaternion(t),this.applyMatrix4(zi),this}rotateX(t){return zi.makeRotationX(t),this.applyMatrix4(zi),this}rotateY(t){return zi.makeRotationY(t),this.applyMatrix4(zi),this}rotateZ(t){return zi.makeRotationZ(t),this.applyMatrix4(zi),this}translate(t,e,i){return zi.makeTranslation(t,e,i),this.applyMatrix4(zi),this}scale(t,e,i){return zi.makeScale(t,e,i),this.applyMatrix4(zi),this}lookAt(t){return rc.lookAt(t),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(i,3))}else{for(let i=0,s=e.count;i<s;i++){let a=t[i];e.setXYZ(i,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let a=e[i];Li.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(Li.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){let r=e[a];Oa.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(Li.min,Oa.min),Li.expandByPoint(Je),Je.addVectors(Li.max,Oa.max),Li.expandByPoint(Je)):(Li.expandByPoint(Oa.min),Li.expandByPoint(Oa.max))}Li.getCenter(i);let s=0;for(let a=0,o=t.count;a<o;a++)Je.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(Je));if(e)for(let a=0,o=e.length;a<o;a++){let r=e[a],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)Je.fromBufferAttribute(r,c),l&&(Ys.fromBufferAttribute(t,c),Je.add(Ys)),s=Math.max(s,i.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),r=[],l=[];for(let k=0;k<i.count;k++)r[k]=new P,l[k]=new P;let c=new P,h=new P,d=new P,u=new it,p=new it,g=new it,f=new P,y=new P;function m(k,M,b){c.fromBufferAttribute(i,k),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,b),u.fromBufferAttribute(a,k),p.fromBufferAttribute(a,M),g.fromBufferAttribute(a,b),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(f.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),y.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),r[k].add(f),r[M].add(f),r[b].add(f),l[k].add(y),l[M].add(y),l[b].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let k=0,M=w.length;k<M;++k){let b=w[k],R=b.start,N=b.count;for(let D=R,F=R+N;D<F;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let v=new P,_=new P,I=new P,T=new P;function E(k){I.fromBufferAttribute(s,k),T.copy(I);let M=r[k];v.copy(M),v.sub(I.multiplyScalar(I.dot(M))).normalize(),_.crossVectors(T,M);let R=_.dot(l[k])<0?-1:1;o.setXYZW(k,v.x,v.y,v.z,R)}for(let k=0,M=w.length;k<M;++k){let b=w[k],R=b.start,N=b.count;for(let D=R,F=R+N;D<F;D+=3)E(t.getX(D+0)),E(t.getX(D+1)),E(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new P,a=new P,o=new P,r=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),f=t.getX(u+1),y=t.getX(u+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,f),o.fromBufferAttribute(e,y),h.subVectors(o,a),d.subVectors(s,a),h.cross(d),r.fromBufferAttribute(i,g),l.fromBufferAttribute(i,f),c.fromBufferAttribute(i,y),r.add(h),l.add(h),c.add(h),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(f,l.x,l.y,l.z),i.setXYZ(y,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),a.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,a),d.subVectors(s,a),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(r,l){let c=r.array,h=r.itemSize,d=r.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let f=0,y=l.length;f<y;f++){r.isInterleavedBufferAttribute?p=l[f]*r.data.stride+r.offset:p=l[f]*h;for(let m=0;m<h;m++)u[g++]=c[p++]}return new je(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let r in s){let l=s[r],c=t(l,i);e.setAttribute(r,c)}let a=this.morphAttributes;for(let r in a){let l=[],c=a[r];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,i);l.push(p)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let r=0,l=o.length;r<l;r++){let c=o[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let a=t.morphAttributes;for(let c in a){let h=[],d=a[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Du=new he,hs=new io,qo=new jn,Uu=new P,Zo=new P,$o=new P,Jo=new P,lc=new P,Ko=new P,Nu=new P,jo=new P,bt=class extends Me{constructor(t=new Ie,e=new Pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){let r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let r=this.morphTargetInfluences;if(a&&r){Ko.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=r[l],d=a[l];h!==0&&(lc.fromBufferAttribute(d,t),o?Ko.addScaledVector(lc,h):Ko.addScaledVector(lc.sub(e),h))}e.add(Ko)}return e}raycast(t,e){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(a),hs.copy(t.ray).recast(t.near),!(qo.containsPoint(hs.origin)===!1&&(hs.intersectSphere(qo,Uu)===null||hs.origin.distanceToSquared(Uu)>(t.far-t.near)**2))&&(Du.copy(a).invert(),hs.copy(t.ray).applyMatrix4(Du),!(i.boundingBox!==null&&hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,hs)))}_computeIntersections(t,e,i){let s,a=this.geometry,o=this.material,r=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,p=a.drawRange;if(r!==null)if(Array.isArray(o))for(let g=0,f=u.length;g<f;g++){let y=u[g],m=o[y.materialIndex],w=Math.max(y.start,p.start),v=Math.min(r.count,Math.min(y.start+y.count,p.start+p.count));for(let _=w,I=v;_<I;_+=3){let T=r.getX(_),E=r.getX(_+1),k=r.getX(_+2);s=Qo(this,m,t,i,c,h,d,T,E,k),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),f=Math.min(r.count,p.start+p.count);for(let y=g,m=f;y<m;y+=3){let w=r.getX(y),v=r.getX(y+1),_=r.getX(y+2);s=Qo(this,o,t,i,c,h,d,w,v,_),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,f=u.length;g<f;g++){let y=u[g],m=o[y.materialIndex],w=Math.max(y.start,p.start),v=Math.min(l.count,Math.min(y.start+y.count,p.start+p.count));for(let _=w,I=v;_<I;_+=3){let T=_,E=_+1,k=_+2;s=Qo(this,m,t,i,c,h,d,T,E,k),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),f=Math.min(l.count,p.start+p.count);for(let y=g,m=f;y<m;y+=3){let w=y,v=y+1,_=y+2;s=Qo(this,o,t,i,c,h,d,w,v,_),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};gi=class n extends Ie{constructor(t=1,e=1,i=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:o};let r=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,i,e,t,o,a,0),g("z","y","x",1,-1,i,e,-t,o,a,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,a,4),g("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(d,2));function g(f,y,m,w,v,_,I,T,E,k,M){let b=_/E,R=I/k,N=_/2,D=I/2,F=T/2,O=E+1,z=k+1,Y=0,W=0,st=new P;for(let pt=0;pt<z;pt++){let vt=pt*R-D;for(let Nt=0;Nt<O;Nt++){let Gt=Nt*b-N;st[f]=Gt*w,st[y]=vt*v,st[m]=F,c.push(st.x,st.y,st.z),st[f]=0,st[y]=0,st[m]=T>0?1:-1,h.push(st.x,st.y,st.z),d.push(Nt/E),d.push(1-pt/k),Y+=1}}for(let pt=0;pt<k;pt++)for(let vt=0;vt<E;vt++){let Nt=u+vt+O*pt,Gt=u+vt+O*(pt+1),K=u+(vt+1)+O*(pt+1),dt=u+(vt+1)+O*pt;l.push(Nt,Gt,dt),l.push(Gt,K,dt),W+=6}r.addGroup(p,W,M),p+=W,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};Ci={clone:ca,merge:pi},gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends fn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gm,this.fragmentShader=ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ca(t.uniforms),this.uniformsGroups=mm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Sr=class extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gn=new P,Fu=new it,Ou=new it,Mi=class extends Sr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=to*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return to*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,Fu,Ou),e.subVectors(Ou,Fu)}setViewOffset(t,e,i,s,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qa*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let r=this.filmOffset;r!==0&&(a+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},qs=-90,Zs=1,dh=class extends Me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mi(qs,Zs,t,e);s.layers=this.layers,this.add(s);let a=new Mi(qs,Zs,t,e);a.layers=this.layers,this.add(a);let o=new Mi(qs,Zs,t,e);o.layers=this.layers,this.add(o);let r=new Mi(qs,Zs,t,e);r.layers=this.layers,this.add(r);let l=new Mi(qs,Zs,t,e);l.layers=this.layers,this.add(l);let c=new Mi(qs,Zs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,a,o,r,l]=e;for(let c of e)this.remove(c);if(t===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,o,r,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,a),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,r),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=f,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Er=class extends mi{constructor(t,e,i,s,a,o,r,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ra,super(t,e,i,s,a,o,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},uh=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Er(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gi(5,5,5),a=new ke({name:"CubemapFromEquirect",uniforms:ca(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ti,blending:Ye});a.uniforms.tEquirect.value=e;let o=new bt(s,a),r=e.minFilter;return e.minFilter===ys&&(e.minFilter=cn),new dh(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(a)}},cc=new P,xm=new P,vm=new ie,Ki=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=cc.subVectors(i,e).cross(xm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(cc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||vm.getNormalMatrix(t),s=this.coplanarPoint(cc).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ds=new jn,tr=new P,so=class{constructor(t=new Ki,e=new Ki,i=new Ki,s=new Ki,a=new Ki,o=new Ki){this.planes=[t,e,i,s,a,o]}set(t,e,i,s,a,o){let r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(s),r[4].copy(a),r[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Rn){let i=this.planes,s=t.elements,a=s[0],o=s[1],r=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],f=s[10],y=s[11],m=s[12],w=s[13],v=s[14],_=s[15];if(i[0].setComponents(l-a,u-c,y-p,_-m).normalize(),i[1].setComponents(l+a,u+c,y+p,_+m).normalize(),i[2].setComponents(l+o,u+h,y+g,_+w).normalize(),i[3].setComponents(l-o,u-h,y-g,_-w).normalize(),i[4].setComponents(l-r,u-d,y-f,_-v).normalize(),e===Rn)i[5].setComponents(l+r,u+d,y+f,_+v).normalize();else if(e===wr)i[5].setComponents(r,d,f,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(tr.x=s.normal.x>0?t.max.x:t.min.x,tr.y=s.normal.y>0?t.max.y:t.min.y,tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(tr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Ue=class n extends Ie{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let a=t/2,o=e/2,r=Math.floor(i),l=Math.floor(s),c=r+1,h=l+1,d=t/r,u=e/l,p=[],g=[],f=[],y=[];for(let m=0;m<h;m++){let w=m*u-o;for(let v=0;v<c;v++){let _=v*d-a;g.push(_,-w,0),f.push(0,0,1),y.push(v/r),y.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<r;w++){let v=w+c*m,_=w+c*(m+1),I=w+1+c*(m+1),T=w+1+c*m;p.push(v,_,T),p.push(_,I,T)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},_m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bm=`#ifdef USE_ALPHAHASH
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
#endif`,Mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Am=`#ifdef USE_AOMAP
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
#endif`,Rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cm=`#ifdef USE_BATCHING
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
#endif`,Pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dm=`#ifdef USE_IRIDESCENCE
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
#endif`,Um=`#ifdef USE_BUMPMAP
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
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wm=`#define PI 3.141592653589793
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
} // validated`,Xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ym=`vec3 transformedNormal = objectNormal;
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
#endif`,qm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Km="gl_FragColor = linearToOutputTexel( gl_FragColor );",jm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qm=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eg=`#ifdef USE_ENVMAP
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
#endif`,ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ng=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lg=`#ifdef USE_GRADIENTMAP
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
}`,cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ug=`uniform bool receiveShadow;
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
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xg=`PhysicalMaterial material;
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
#endif`,vg=`struct PhysicalMaterial {
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
}`,wg=`
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
#endif`,_g=`#if defined( RE_IndirectDiffuse )
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
#endif`,bg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pg=`#if defined( USE_POINTS_UV )
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
#endif`,Ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ug=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ng=`#ifdef USE_MORPHTARGETS
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
#endif`,Fg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Og=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gg=`#ifdef USE_NORMALMAP
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
#endif`,Wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$g=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ay=`float getShadowMask() {
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
}`,oy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ry=`#ifdef USE_SKINNING
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
#endif`,ly=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cy=`#ifdef USE_SKINNING
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
#endif`,hy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,py=`#ifdef USE_TRANSMISSION
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
#endif`,my=`#ifdef USE_TRANSMISSION
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_y=`uniform sampler2D t2D;
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`#include <common>
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
}`,Ay=`#if DEPTH_PACKING == 3200
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
}`,Ry=`#define DISTANCE
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
}`,Cy=`#define DISTANCE
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
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ky=`uniform float scale;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Dy=`#include <common>
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Ny=`#define LAMBERT
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
}`,Fy=`#define LAMBERT
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
}`,Oy=`#define MATCAP
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
}`,By=`#define MATCAP
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
}`,zy=`#define NORMAL
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
}`,Hy=`#define NORMAL
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
}`,Vy=`#define PHONG
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
}`,Gy=`#define PHONG
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
}`,Wy=`#define STANDARD
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
}`,Xy=`#define STANDARD
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
}`,Yy=`#define TOON
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
}`,qy=`#define TOON
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
}`,Zy=`uniform float size;
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
}`,$y=`uniform vec3 diffuse;
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
}`,Jy=`#include <common>
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
}`,Ky=`uniform vec3 color;
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
}`,jy=`uniform float rotation;
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
}`,Qy=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:_m,alphahash_pars_fragment:bm,alphamap_fragment:Mm,alphamap_pars_fragment:Tm,alphatest_fragment:Sm,alphatest_pars_fragment:Em,aomap_fragment:Am,aomap_pars_fragment:Rm,batching_pars_vertex:Cm,batching_vertex:Pm,begin_vertex:Im,beginnormal_vertex:km,bsdfs:Lm,iridescence_fragment:Dm,bumpmap_pars_fragment:Um,clipping_planes_fragment:Nm,clipping_planes_pars_fragment:Fm,clipping_planes_pars_vertex:Om,clipping_planes_vertex:Bm,color_fragment:zm,color_pars_fragment:Hm,color_pars_vertex:Vm,color_vertex:Gm,common:Wm,cube_uv_reflection_fragment:Xm,defaultnormal_vertex:Ym,displacementmap_pars_vertex:qm,displacementmap_vertex:Zm,emissivemap_fragment:$m,emissivemap_pars_fragment:Jm,colorspace_fragment:Km,colorspace_pars_fragment:jm,envmap_fragment:Qm,envmap_common_pars_fragment:tg,envmap_pars_fragment:eg,envmap_pars_vertex:ig,envmap_physical_pars_fragment:fg,envmap_vertex:ng,fog_vertex:sg,fog_pars_vertex:ag,fog_fragment:og,fog_pars_fragment:rg,gradientmap_pars_fragment:lg,lightmap_pars_fragment:cg,lights_lambert_fragment:hg,lights_lambert_pars_fragment:dg,lights_pars_begin:ug,lights_toon_fragment:pg,lights_toon_pars_fragment:mg,lights_phong_fragment:gg,lights_phong_pars_fragment:yg,lights_physical_fragment:xg,lights_physical_pars_fragment:vg,lights_fragment_begin:wg,lights_fragment_maps:_g,lights_fragment_end:bg,logdepthbuf_fragment:Mg,logdepthbuf_pars_fragment:Tg,logdepthbuf_pars_vertex:Sg,logdepthbuf_vertex:Eg,map_fragment:Ag,map_pars_fragment:Rg,map_particle_fragment:Cg,map_particle_pars_fragment:Pg,metalnessmap_fragment:Ig,metalnessmap_pars_fragment:kg,morphinstance_vertex:Lg,morphcolor_vertex:Dg,morphnormal_vertex:Ug,morphtarget_pars_vertex:Ng,morphtarget_vertex:Fg,normal_fragment_begin:Og,normal_fragment_maps:Bg,normal_pars_fragment:zg,normal_pars_vertex:Hg,normal_vertex:Vg,normalmap_pars_fragment:Gg,clearcoat_normal_fragment_begin:Wg,clearcoat_normal_fragment_maps:Xg,clearcoat_pars_fragment:Yg,iridescence_pars_fragment:qg,opaque_fragment:Zg,packing:$g,premultiplied_alpha_fragment:Jg,project_vertex:Kg,dithering_fragment:jg,dithering_pars_fragment:Qg,roughnessmap_fragment:ty,roughnessmap_pars_fragment:ey,shadowmap_pars_fragment:iy,shadowmap_pars_vertex:ny,shadowmap_vertex:sy,shadowmask_pars_fragment:ay,skinbase_vertex:oy,skinning_pars_vertex:ry,skinning_vertex:ly,skinnormal_vertex:cy,specularmap_fragment:hy,specularmap_pars_fragment:dy,tonemapping_fragment:uy,tonemapping_pars_fragment:fy,transmission_fragment:py,transmission_pars_fragment:my,uv_pars_fragment:gy,uv_pars_vertex:yy,uv_vertex:xy,worldpos_vertex:vy,background_vert:wy,background_frag:_y,backgroundCube_vert:by,backgroundCube_frag:My,cube_vert:Ty,cube_frag:Sy,depth_vert:Ey,depth_frag:Ay,distanceRGBA_vert:Ry,distanceRGBA_frag:Cy,equirect_vert:Py,equirect_frag:Iy,linedashed_vert:ky,linedashed_frag:Ly,meshbasic_vert:Dy,meshbasic_frag:Uy,meshlambert_vert:Ny,meshlambert_frag:Fy,meshmatcap_vert:Oy,meshmatcap_frag:By,meshnormal_vert:zy,meshnormal_frag:Hy,meshphong_vert:Vy,meshphong_frag:Gy,meshphysical_vert:Wy,meshphysical_frag:Xy,meshtoon_vert:Yy,meshtoon_frag:qy,points_vert:Zy,points_frag:$y,shadow_vert:Jy,shadow_frag:Ky,sprite_vert:jy,sprite_frag:Qy},_t={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},ln={basic:{uniforms:pi([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:pi([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:pi([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:pi([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:pi([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:pi([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:pi([_t.points,_t.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:pi([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:pi([_t.common,_t.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:pi([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:pi([_t.sprite,_t.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:pi([_t.common,_t.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:pi([_t.lights,_t.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};ln.physical={uniforms:pi([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};er={r:0,b:0,g:0},us=new un,tx=new he;Qn=class extends Sr{constructor(t=-1,e=1,i=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,o=i+t,r=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ea=4,Bu=[.125,.215,.35,.446,.526,.582],ms=20,hc=new Qn,zu=new Lt,dc=null,uc=0,fc=0,pc=!1,ps=(1+Math.sqrt(5))/2,$s=1/ps,Hu=[new P(-ps,$s,0),new P(ps,$s,0),new P(-$s,0,ps),new P($s,0,ps),new P(0,ps,-$s),new P(0,ps,$s),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Ar=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){dc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dc,uc,fc),this._renderer.xr.enabled=pc,t.scissorTest=!1,ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ra||t.mapping===la?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Ri,format:Di,colorSpace:ya,depthBuffer:!1},s=Vu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(t,e,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rx(a)),this._blurMaterial=lx(a,t,e)}return s}_compileMaterial(t){let e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,hc)}_sceneToCubeUV(t,e,i,s){let r=new Mi(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(zu),h.toneMapping=qn,h.autoClear=!1;let p=new Pe({name:"PMREM.Background",side:Ti,depthWrite:!1,depthTest:!1}),g=new bt(new gi,p),f=!1,y=t.background;y?y.isColor&&(p.color.copy(y),t.background=null,f=!0):(p.color.copy(zu),f=!0);for(let m=0;m<6;m++){let w=m%3;w===0?(r.up.set(0,l[m],0),r.lookAt(c[m],0,0)):w===1?(r.up.set(0,0,l[m]),r.lookAt(0,c[m],0)):(r.up.set(0,l[m],0),r.lookAt(0,0,c[m]));let v=this._cubeSize;ir(s,w*v,m>2?v:0,v,v),h.setRenderTarget(s),f&&h.render(g,r),h.render(t,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=y}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ra||t.mapping===la;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());let a=s?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=t;let l=this._cubeSize;ir(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,hc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),r=Hu[(s-a-1)%Hu.length];this._blur(t,a-1,a,o,r)}e.autoClear=i}_blur(t,e,i,s,a){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",a),this._halfBlur(o,t,i,i,s,"longitudinal",a)}_halfBlur(t,e,i,s,a,o,r){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new bt(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*ms-1),f=a/g,y=isFinite(a)?1+Math.floor(h*f):ms;y>ms&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ms}`);let m=[],w=0;for(let E=0;E<ms;++E){let k=E/f,M=Math.exp(-k*k/2);m.push(M),E===0?w+=M:E<y&&(w+=2*M)}for(let E=0;E<m.length;E++)m[E]=m[E]/w;u.envMap.value=t.texture,u.samples.value=y,u.weights.value=m,u.latitudinal.value=o==="latitudinal",r&&(u.poleAxis.value=r);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;let _=this._sizeLods[s],I=3*_*(s>v-ea?s-v+ea:0),T=4*(this._cubeSize-_);ir(e,I,T,3*_,2*_),l.setRenderTarget(e),l.render(d,hc)}};ha=class extends mi{constructor(t,e,i,s,a,o,r,l,c,h=na){if(h!==na&&h!==$n)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===na&&(i=xs),i===void 0&&h===$n&&(i=Zn),super(null,s,a,o,r,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:hi,this.minFilter=l!==void 0?l:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Wf=new mi,Xu=new ha(1,1),Xf=new br,Yf=new hh,qf=new Er,Yu=[],qu=[],Zu=new Float32Array(16),$u=new Float32Array(9),Ju=new Float32Array(4);fh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ux(e.type)}},ph=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ev(e.type)}},mh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let a=0,o=s.length;a!==o;++a){let r=s[a];r.setValue(t,e[r.id],i)}}},mc=/(\w+)(\])?(\[|\.)?/g;aa=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(e,s),o=t.getUniformLocation(e,a.name);iv(a,o,this)}}setValue(t,e,i,s){let a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,o=e.length;a!==o;++a){let r=e[a],l=i[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,a=t.length;s!==a;++s){let o=t[s];o.id in e&&i.push(o)}return i}};nv=37297,sv=0;Qu=new ie;nr=new P;fv=/^[ \t]*#include +<([\w\d./]+)>/gm;pv=new Map;gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Tv=0,yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new xh(t),e.set(t,i)),i}},xh=class{constructor(t){this.id=Tv++,this.code=t,this.usedTimes=0}};Iv=0;vh=class extends fn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=A0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wh=class extends fn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nv=`uniform sampler2D shadow_pass;
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
}`;Ov={[Tc]:Sc,[Ec]:Cc,[Ac]:Pc,[oa]:Rc,[Sc]:Tc,[Cc]:Ec,[Pc]:Ac,[Rc]:oa};_h=class extends Mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},rt=class extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gv={type:"move"},$a=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,o=null,r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let f of t.hand.values()){let y=e.getJointPose(f,i),m=this._getHandJoint(c,f);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Gv)))}return r!==null&&(r.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new rt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Wv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xv=`
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

}`,bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new mi,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ke({vertexShader:Wv,fragmentShader:Xv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new Ue(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends Jn{constructor(t,e){super();let i=this,s=null,a=1,o=null,r="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,f=new bh,y=e.getContextAttributes(),m=null,w=null,v=[],_=[],I=new it,T=null,E=new Mi;E.viewport=new be;let k=new Mi;k.viewport=new be;let M=[E,k],b=new _h,R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let dt=v[K];return dt===void 0&&(dt=new $a,v[K]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(K){let dt=v[K];return dt===void 0&&(dt=new $a,v[K]=dt),dt.getGripSpace()},this.getHand=function(K){let dt=v[K];return dt===void 0&&(dt=new $a,v[K]=dt),dt.getHandSpace()};function D(K){let dt=_.indexOf(K.inputSource);if(dt===-1)return;let Ct=v[dt];Ct!==void 0&&(Ct.update(K.inputSource,K.frame,c||o),Ct.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",O);for(let K=0;K<v.length;K++){let dt=_[K];dt!==null&&(_[K]=null,v[K].disconnect(dt))}R=null,N=null,f.reset(),t.setRenderTarget(m),p=null,u=null,d=null,s=null,w=null,Gt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",F),s.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let dt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Qe(p.framebufferWidth,p.framebufferHeight,{format:Di,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let dt=null,Ct=null,ut=null;y.depth&&(ut=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=y.stencil?$n:na,Ct=y.stencil?Zn:xs);let Pt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:a};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Pt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new Qe(u.textureWidth,u.textureHeight,{format:Di,type:tn,depthTexture:new ha(u.textureWidth,u.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(r),Gt.setContext(s),Gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function O(K){for(let dt=0;dt<K.removed.length;dt++){let Ct=K.removed[dt],ut=_.indexOf(Ct);ut>=0&&(_[ut]=null,v[ut].disconnect(Ct))}for(let dt=0;dt<K.added.length;dt++){let Ct=K.added[dt],ut=_.indexOf(Ct);if(ut===-1){for(let Xt=0;Xt<v.length;Xt++)if(Xt>=_.length){_.push(Ct),ut=Xt;break}else if(_[Xt]===null){_[Xt]=Ct,ut=Xt;break}if(ut===-1)break}let Pt=v[ut];Pt&&Pt.connect(Ct)}}let z=new P,Y=new P;function W(K,dt,Ct){z.setFromMatrixPosition(dt.matrixWorld),Y.setFromMatrixPosition(Ct.matrixWorld);let ut=z.distanceTo(Y),Pt=dt.projectionMatrix.elements,Xt=Ct.projectionMatrix.elements,Ot=Pt[14]/(Pt[10]-1),re=Pt[14]/(Pt[10]+1),nt=(Pt[9]+1)/Pt[5],ft=(Pt[9]-1)/Pt[5],L=(Pt[8]-1)/Pt[0],Ft=(Xt[8]+1)/Xt[0],ct=Ot*L,At=Ot*Ft,gt=ut/(-L+Ft),Yt=gt*-L;if(dt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Yt),K.translateZ(gt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Pt[10]===-1)K.projectionMatrix.copy(dt.projectionMatrix),K.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{let Tt=Ot+gt,C=re+gt,S=ct-Yt,X=At+(ut-Yt),Q=nt*re/C*Tt,ot=ft*re/C*Tt;K.projectionMatrix.makePerspective(S,X,Q,ot,Tt,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function st(K,dt){dt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(dt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let dt=K.near,Ct=K.far;f.texture!==null&&(f.depthNear>0&&(dt=f.depthNear),f.depthFar>0&&(Ct=f.depthFar)),b.near=k.near=E.near=dt,b.far=k.far=E.far=Ct,(R!==b.near||N!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,N=b.far),E.layers.mask=K.layers.mask|2,k.layers.mask=K.layers.mask|4,b.layers.mask=E.layers.mask|k.layers.mask;let ut=K.parent,Pt=b.cameras;st(b,ut);for(let Xt=0;Xt<Pt.length;Xt++)st(Pt[Xt],ut);Pt.length===2?W(b,E,k):b.projectionMatrix.copy(E.projectionMatrix),pt(K,b,ut)};function pt(K,dt,Ct){Ct===null?K.matrix.copy(dt.matrixWorld):(K.matrix.copy(Ct.matrixWorld),K.matrix.invert(),K.matrix.multiply(dt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(dt.projectionMatrix),K.projectionMatrixInverse.copy(dt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=to*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(b)};let vt=null;function Nt(K,dt){if(h=dt.getViewerPose(c||o),g=dt,h!==null){let Ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let ut=!1;Ct.length!==b.cameras.length&&(b.cameras.length=0,ut=!0);for(let Xt=0;Xt<Ct.length;Xt++){let Ot=Ct[Xt],re=null;if(p!==null)re=p.getViewport(Ot);else{let ft=d.getViewSubImage(u,Ot);re=ft.viewport,Xt===0&&(t.setRenderTargetTextures(w,ft.colorTexture,u.ignoreDepthValues?void 0:ft.depthStencilTexture),t.setRenderTarget(w))}let nt=M[Xt];nt===void 0&&(nt=new Mi,nt.layers.enable(Xt),nt.viewport=new be,M[Xt]=nt),nt.matrix.fromArray(Ot.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Ot.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(re.x,re.y,re.width,re.height),Xt===0&&(b.matrix.copy(nt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ut===!0&&b.cameras.push(nt)}let Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){let Xt=d.getDepthInformation(Ct[0]);Xt&&Xt.isValid&&Xt.texture&&f.init(t,Xt,s.renderState)}}for(let Ct=0;Ct<v.length;Ct++){let ut=_[Ct],Pt=v[Ct];ut!==null&&Pt!==void 0&&Pt.update(ut,dt,c||o)}vt&&vt(K,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),g=null}let Gt=new Gf;Gt.setAnimationLoop(Nt),this.setAnimationLoop=function(K){vt=K},this.dispose=function(){}}},fs=new un,Yv=new he;Rr=class{constructor(t={}){let{canvas:e=Q0(),context:i=null,depth:s=!0,stencil:a=!1,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),f=new Int32Array(4),y=null,m=null,w=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=qn,this.toneMappingExposure=1;let _=this,I=!1,T=0,E=0,k=null,M=-1,b=null,R=new be,N=new be,D=null,F=new Lt(0),O=0,z=e.width,Y=e.height,W=1,st=null,pt=null,vt=new be(0,0,z,Y),Nt=new be(0,0,z,Y),Gt=!1,K=new so,dt=!1,Ct=!1,ut=new he,Pt=new he,Xt=new P,Ot=new be,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function ft(){return k===null?W:1}let L=i;function Ft(A,H){return e.getContext(A,H)}try{let A={alpha:!0,depth:s,stencil:a,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$h}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",St,!1),L===null){let H="webgl2";if(L=Ft(H,A),L===null)throw Ft(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ct,At,gt,Yt,Tt,C,S,X,Q,ot,tt,Ut,yt,Mt,Qt,ht,It,Zt,$t,kt,le,Jt,de,B;function xt(){ct=new hx(L),ct.init(),Jt=new Vv(L,ct),At=new sx(L,ct,t,Jt),gt=new Bv(L,ct),At.reverseDepthBuffer&&u&&gt.buffers.depth.setReversed(!0),Yt=new fx(L),Tt=new Ev,C=new Hv(L,ct,gt,Tt,At,Jt,Yt),S=new ox(_),X=new cx(_),Q=new wm(L),de=new ix(L,Q),ot=new dx(L,Q,Yt,de),tt=new mx(L,ot,Q,Yt),$t=new px(L,At,C),ht=new ax(Tt),Ut=new Sv(_,S,X,ct,At,de,ht),yt=new qv(_,Tt),Mt=new Rv,Qt=new Dv(ct),Zt=new ex(_,S,X,gt,tt,p,l),It=new Fv(_,tt,At),B=new Zv(L,Yt,At,gt),kt=new nx(L,ct,Yt),le=new ux(L,ct,Yt),Yt.programs=Ut.programs,_.capabilities=At,_.extensions=ct,_.properties=Tt,_.renderLists=Mt,_.shadowMap=It,_.state=gt,_.info=Yt}xt();let J=new Mh(_,L);this.xr=J,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let A=ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(z,Y,!1))},this.getSize=function(A){return A.set(z,Y)},this.setSize=function(A,H,q=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,Y=H,e.width=Math.floor(A*W),e.height=Math.floor(H*W),q===!0&&(e.style.width=A+"px",e.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(z*W,Y*W).floor()},this.setDrawingBufferSize=function(A,H,q){z=A,Y=H,W=q,e.width=Math.floor(A*q),e.height=Math.floor(H*q),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(vt)},this.setViewport=function(A,H,q,Z){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,H,q,Z),gt.viewport(R.copy(vt).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(Nt)},this.setScissor=function(A,H,q,Z){A.isVector4?Nt.set(A.x,A.y,A.z,A.w):Nt.set(A,H,q,Z),gt.scissor(N.copy(Nt).multiplyScalar(W).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(A){gt.setScissorTest(Gt=A)},this.setOpaqueSort=function(A){st=A},this.setTransparentSort=function(A){pt=A},this.getClearColor=function(A){return A.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(A=!0,H=!0,q=!0){let Z=0;if(A){let V=!1;if(k!==null){let mt=k.texture.format;V=mt===cd||mt===ld||mt===rd}if(V){let mt=k.texture.type,Et=mt===tn||mt===xs||mt===Qa||mt===Zn||mt===sd||mt===ad,zt=Zt.getClearColor(),Ht=Zt.getClearAlpha(),jt=zt.r,ee=zt.g,Vt=zt.b;Et?(g[0]=jt,g[1]=ee,g[2]=Vt,g[3]=Ht,L.clearBufferuiv(L.COLOR,0,g)):(f[0]=jt,f[1]=ee,f[2]=Vt,f[3]=Ht,L.clearBufferiv(L.COLOR,0,f))}else Z|=L.COLOR_BUFFER_BIT}H&&(Z|=L.DEPTH_BUFFER_BIT),q&&(Z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Mt.dispose(),Qt.dispose(),Tt.dispose(),S.dispose(),X.dispose(),tt.dispose(),de.dispose(),B.dispose(),Ut.dispose(),J.dispose(),J.removeEventListener("sessionstart",iu),J.removeEventListener("sessionend",nu),rs.stop()};function at(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let A=Yt.autoReset,H=It.enabled,q=It.autoUpdate,Z=It.needsUpdate,V=It.type;xt(),Yt.autoReset=A,It.enabled=H,It.autoUpdate=q,It.needsUpdate=Z,It.type=V}function St(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function te(A){let H=A.target;H.removeEventListener("dispose",te),ze(H)}function ze(A){ri(A),Tt.remove(A)}function ri(A){let H=Tt.get(A).programs;H!==void 0&&(H.forEach(function(q){Ut.releaseProgram(q)}),A.isShaderMaterial&&Ut.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,q,Z,V,mt){H===null&&(H=re);let Et=V.isMesh&&V.matrixWorld.determinant()<0,zt=i0(A,H,q,Z,V);gt.setMaterial(Z,Et);let Ht=q.index,jt=1;if(Z.wireframe===!0){if(Ht=ot.getWireframeAttribute(q),Ht===void 0)return;jt=2}let ee=q.drawRange,Vt=q.attributes.position,ue=ee.start*jt,Ee=(ee.start+ee.count)*jt;mt!==null&&(ue=Math.max(ue,mt.start*jt),Ee=Math.min(Ee,(mt.start+mt.count)*jt)),Ht!==null?(ue=Math.max(ue,0),Ee=Math.min(Ee,Ht.count)):Vt!=null&&(ue=Math.max(ue,0),Ee=Math.min(Ee,Vt.count));let Re=Ee-ue;if(Re<0||Re===1/0)return;de.setup(V,Z,zt,q,Ht);let bi,ge=kt;if(Ht!==null&&(bi=Q.get(Ht),ge=le,ge.setIndex(bi)),V.isMesh)Z.wireframe===!0?(gt.setLineWidth(Z.wireframeLinewidth*ft()),ge.setMode(L.LINES)):ge.setMode(L.TRIANGLES);else if(V.isLine){let Wt=Z.linewidth;Wt===void 0&&(Wt=1),gt.setLineWidth(Wt*ft()),V.isLineSegments?ge.setMode(L.LINES):V.isLineLoop?ge.setMode(L.LINE_LOOP):ge.setMode(L.LINE_STRIP)}else V.isPoints?ge.setMode(L.POINTS):V.isSprite&&ge.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ge.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))ge.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Wt=V._multiDrawStarts,_n=V._multiDrawCounts,ye=V._multiDrawCount,qi=Ht?Q.get(Ht).bytesPerElement:1,Us=Tt.get(Z).currentProgram.getUniforms();for(let Ii=0;Ii<ye;Ii++)Us.setValue(L,"_gl_DrawID",Ii),ge.render(Wt[Ii]/qi,_n[Ii])}else if(V.isInstancedMesh)ge.renderInstances(ue,Re,V.count);else if(q.isInstancedBufferGeometry){let Wt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,_n=Math.min(q.instanceCount,Wt);ge.renderInstances(ue,Re,_n)}else ge.render(ue,Re)};function we(A,H,q){A.transparent===!0&&A.side===Te&&A.forceSinglePass===!1?(A.side=Ti,A.needsUpdate=!0,Uo(A,H,q),A.side=Qi,A.needsUpdate=!0,Uo(A,H,q),A.side=Te):Uo(A,H,q)}this.compile=function(A,H,q=null){q===null&&(q=A),m=Qt.get(q),m.init(H),v.push(m),q.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==q&&A.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();let Z=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let mt=V.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){let zt=mt[Et];we(zt,q,V),Z.add(zt)}else we(mt,q,V),Z.add(mt)}),v.pop(),m=null,Z},this.compileAsync=function(A,H,q=null){let Z=this.compile(A,H,q);return new Promise(V=>{function mt(){if(Z.forEach(function(Et){Tt.get(Et).currentProgram.isReady()&&Z.delete(Et)}),Z.size===0){V(A);return}setTimeout(mt,10)}ct.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Yi=null;function wn(A){Yi&&Yi(A)}function iu(){rs.stop()}function nu(){rs.start()}let rs=new Gf;rs.setAnimationLoop(wn),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(A){Yi=A,J.setAnimationLoop(A),A===null?rs.stop():rs.start()},J.addEventListener("sessionstart",iu),J.addEventListener("sessionend",nu),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(H),H=J.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,H,k),m=Qt.get(A,v.length),m.init(H),v.push(m),Pt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),K.setFromProjectionMatrix(Pt),Ct=this.localClippingEnabled,dt=ht.init(this.clippingPlanes,Ct),y=Mt.get(A,w.length),y.init(),w.push(y),J.enabled===!0&&J.isPresenting===!0){let mt=_.xr.getDepthSensingMesh();mt!==null&&Hl(mt,H,-1/0,_.sortObjects)}Hl(A,H,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(st,pt),nt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,nt&&Zt.addToRenderList(y,A),this.info.render.frame++,dt===!0&&ht.beginShadows();let q=m.state.shadowsArray;It.render(q,A,H),dt===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=y.opaque,V=y.transmissive;if(m.setupLights(),H.isArrayCamera){let mt=H.cameras;if(V.length>0)for(let Et=0,zt=mt.length;Et<zt;Et++){let Ht=mt[Et];au(Z,V,A,Ht)}nt&&Zt.render(A);for(let Et=0,zt=mt.length;Et<zt;Et++){let Ht=mt[Et];su(y,A,Ht,Ht.viewport)}}else V.length>0&&au(Z,V,A,H),nt&&Zt.render(A),su(y,A,H);k!==null&&(C.updateMultisampleRenderTarget(k),C.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(_,A,H),de.resetDefaultState(),M=-1,b=null,v.pop(),v.length>0?(m=v[v.length-1],dt===!0&&ht.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?y=w[w.length-1]:y=null};function Hl(A,H,q,Z){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){Z&&Ot.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pt);let Et=tt.update(A),zt=A.material;zt.visible&&y.push(A,Et,zt,q,Ot.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){let Et=tt.update(A),zt=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ot.copy(A.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Ot.copy(Et.boundingSphere.center)),Ot.applyMatrix4(A.matrixWorld).applyMatrix4(Pt)),Array.isArray(zt)){let Ht=Et.groups;for(let jt=0,ee=Ht.length;jt<ee;jt++){let Vt=Ht[jt],ue=zt[Vt.materialIndex];ue&&ue.visible&&y.push(A,Et,ue,q,Ot.z,Vt)}}else zt.visible&&y.push(A,Et,zt,q,Ot.z,null)}}let mt=A.children;for(let Et=0,zt=mt.length;Et<zt;Et++)Hl(mt[Et],H,q,Z)}function su(A,H,q,Z){let V=A.opaque,mt=A.transmissive,Et=A.transparent;m.setupLightsView(q),dt===!0&&ht.setGlobalState(_.clippingPlanes,q),Z&&gt.viewport(R.copy(Z)),V.length>0&&Do(V,H,q),mt.length>0&&Do(mt,H,q),Et.length>0&&Do(Et,H,q),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function au(A,H,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new Qe(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Ri:tn,minFilter:ys,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));let mt=m.state.transmissionRenderTarget[Z.id],Et=Z.viewport||R;mt.setSize(Et.z,Et.w);let zt=_.getRenderTarget();_.setRenderTarget(mt),_.getClearColor(F),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),nt&&Zt.render(q);let Ht=_.toneMapping;_.toneMapping=qn;let jt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),dt===!0&&ht.setGlobalState(_.clippingPlanes,Z),Do(A,q,Z),C.updateMultisampleRenderTarget(mt),C.updateRenderTargetMipmap(mt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Vt=0,ue=H.length;Vt<ue;Vt++){let Ee=H[Vt],Re=Ee.object,bi=Ee.geometry,ge=Ee.material,Wt=Ee.group;if(ge.side===Te&&Re.layers.test(Z.layers)){let _n=ge.side;ge.side=Ti,ge.needsUpdate=!0,ou(Re,q,Z,bi,ge,Wt),ge.side=_n,ge.needsUpdate=!0,ee=!0}}ee===!0&&(C.updateMultisampleRenderTarget(mt),C.updateRenderTargetMipmap(mt))}_.setRenderTarget(zt),_.setClearColor(F,O),jt!==void 0&&(Z.viewport=jt),_.toneMapping=Ht}function Do(A,H,q){let Z=H.isScene===!0?H.overrideMaterial:null;for(let V=0,mt=A.length;V<mt;V++){let Et=A[V],zt=Et.object,Ht=Et.geometry,jt=Z===null?Et.material:Z,ee=Et.group;zt.layers.test(q.layers)&&ou(zt,H,q,Ht,jt,ee)}}function ou(A,H,q,Z,V,mt){A.onBeforeRender(_,H,q,Z,V,mt),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(_,H,q,Z,A,mt),V.transparent===!0&&V.side===Te&&V.forceSinglePass===!1?(V.side=Ti,V.needsUpdate=!0,_.renderBufferDirect(q,H,Z,V,A,mt),V.side=Qi,V.needsUpdate=!0,_.renderBufferDirect(q,H,Z,V,A,mt),V.side=Te):_.renderBufferDirect(q,H,Z,V,A,mt),A.onAfterRender(_,H,q,Z,V,mt)}function Uo(A,H,q){H.isScene!==!0&&(H=re);let Z=Tt.get(A),V=m.state.lights,mt=m.state.shadowsArray,Et=V.state.version,zt=Ut.getParameters(A,V.state,mt,H,q),Ht=Ut.getProgramCacheKey(zt),jt=Z.programs;Z.environment=A.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(A.isMeshStandardMaterial?X:S).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,jt===void 0&&(A.addEventListener("dispose",te),jt=new Map,Z.programs=jt);let ee=jt.get(Ht);if(ee!==void 0){if(Z.currentProgram===ee&&Z.lightsStateVersion===Et)return lu(A,zt),ee}else zt.uniforms=Ut.getUniforms(A),A.onBeforeCompile(zt,_),ee=Ut.acquireProgram(zt,Ht),jt.set(Ht,ee),Z.uniforms=zt.uniforms;let Vt=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Vt.clippingPlanes=ht.uniform),lu(A,zt),Z.needsLights=s0(A),Z.lightsStateVersion=Et,Z.needsLights&&(Vt.ambientLightColor.value=V.state.ambient,Vt.lightProbe.value=V.state.probe,Vt.directionalLights.value=V.state.directional,Vt.directionalLightShadows.value=V.state.directionalShadow,Vt.spotLights.value=V.state.spot,Vt.spotLightShadows.value=V.state.spotShadow,Vt.rectAreaLights.value=V.state.rectArea,Vt.ltc_1.value=V.state.rectAreaLTC1,Vt.ltc_2.value=V.state.rectAreaLTC2,Vt.pointLights.value=V.state.point,Vt.pointLightShadows.value=V.state.pointShadow,Vt.hemisphereLights.value=V.state.hemi,Vt.directionalShadowMap.value=V.state.directionalShadowMap,Vt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Vt.spotShadowMap.value=V.state.spotShadowMap,Vt.spotLightMatrix.value=V.state.spotLightMatrix,Vt.spotLightMap.value=V.state.spotLightMap,Vt.pointShadowMap.value=V.state.pointShadowMap,Vt.pointShadowMatrix.value=V.state.pointShadowMatrix),Z.currentProgram=ee,Z.uniformsList=null,ee}function ru(A){if(A.uniformsList===null){let H=A.currentProgram.getUniforms();A.uniformsList=aa.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function lu(A,H){let q=Tt.get(A);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function i0(A,H,q,Z,V){H.isScene!==!0&&(H=re),C.resetTextureUnits();let mt=H.fog,Et=Z.isMeshStandardMaterial?H.environment:null,zt=k===null?_.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ya,Ht=(Z.isMeshStandardMaterial?X:S).get(Z.envMap||Et),jt=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ee=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Vt=!!q.morphAttributes.position,ue=!!q.morphAttributes.normal,Ee=!!q.morphAttributes.color,Re=qn;Z.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Re=_.toneMapping);let bi=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ge=bi!==void 0?bi.length:0,Wt=Tt.get(Z),_n=m.state.lights;if(dt===!0&&(Ct===!0||A!==b)){let Bi=A===b&&Z.id===M;ht.setState(Z,A,Bi)}let ye=!1;Z.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==_n.state.version||Wt.outputColorSpace!==zt||V.isBatchedMesh&&Wt.batching===!1||!V.isBatchedMesh&&Wt.batching===!0||V.isBatchedMesh&&Wt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Wt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Wt.instancing===!1||!V.isInstancedMesh&&Wt.instancing===!0||V.isSkinnedMesh&&Wt.skinning===!1||!V.isSkinnedMesh&&Wt.skinning===!0||V.isInstancedMesh&&Wt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Wt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Wt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Wt.instancingMorph===!1&&V.morphTexture!==null||Wt.envMap!==Ht||Z.fog===!0&&Wt.fog!==mt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==ht.numPlanes||Wt.numIntersection!==ht.numIntersection)||Wt.vertexAlphas!==jt||Wt.vertexTangents!==ee||Wt.morphTargets!==Vt||Wt.morphNormals!==ue||Wt.morphColors!==Ee||Wt.toneMapping!==Re||Wt.morphTargetsCount!==ge)&&(ye=!0):(ye=!0,Wt.__version=Z.version);let qi=Wt.currentProgram;ye===!0&&(qi=Uo(Z,H,V));let Us=!1,Ii=!1,La=!1,Ce=qi.getUniforms(),rn=Wt.uniforms;if(gt.useProgram(qi.program)&&(Us=!0,Ii=!0,La=!0),Z.id!==M&&(M=Z.id,Ii=!0),Us||b!==A){gt.buffers.depth.getReversed()?(ut.copy(A.projectionMatrix),em(ut),im(ut),Ce.setValue(L,"projectionMatrix",ut)):Ce.setValue(L,"projectionMatrix",A.projectionMatrix),Ce.setValue(L,"viewMatrix",A.matrixWorldInverse);let Nn=Ce.map.cameraPosition;Nn!==void 0&&Nn.setValue(L,Xt.setFromMatrixPosition(A.matrixWorld)),At.logarithmicDepthBuffer&&Ce.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ce.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Ii=!0,La=!0)}if(V.isSkinnedMesh){Ce.setOptional(L,V,"bindMatrix"),Ce.setOptional(L,V,"bindMatrixInverse");let Bi=V.skeleton;Bi&&(Bi.boneTexture===null&&Bi.computeBoneTexture(),Ce.setValue(L,"boneTexture",Bi.boneTexture,C))}V.isBatchedMesh&&(Ce.setOptional(L,V,"batchingTexture"),Ce.setValue(L,"batchingTexture",V._matricesTexture,C),Ce.setOptional(L,V,"batchingIdTexture"),Ce.setValue(L,"batchingIdTexture",V._indirectTexture,C),Ce.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&Ce.setValue(L,"batchingColorTexture",V._colorsTexture,C));let Da=q.morphAttributes;if((Da.position!==void 0||Da.normal!==void 0||Da.color!==void 0)&&$t.update(V,q,qi),(Ii||Wt.receiveShadow!==V.receiveShadow)&&(Wt.receiveShadow=V.receiveShadow,Ce.setValue(L,"receiveShadow",V.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(rn.envMap.value=Ht,rn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(rn.envMapIntensity.value=H.environmentIntensity),Ii&&(Ce.setValue(L,"toneMappingExposure",_.toneMappingExposure),Wt.needsLights&&n0(rn,La),mt&&Z.fog===!0&&yt.refreshFogUniforms(rn,mt),yt.refreshMaterialUniforms(rn,Z,W,Y,m.state.transmissionRenderTarget[A.id]),aa.upload(L,ru(Wt),rn,C)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(aa.upload(L,ru(Wt),rn,C),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ce.setValue(L,"center",V.center),Ce.setValue(L,"modelViewMatrix",V.modelViewMatrix),Ce.setValue(L,"normalMatrix",V.normalMatrix),Ce.setValue(L,"modelMatrix",V.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Bi=Z.uniformsGroups;for(let Nn=0,Fn=Bi.length;Nn<Fn;Nn++){let cu=Bi[Nn];B.update(cu,qi),B.bind(cu,qi)}}return qi}function n0(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function s0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,H,q){Tt.get(A.texture).__webglTexture=H,Tt.get(A.depthTexture).__webglTexture=q;let Z=Tt.get(A);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=q===void 0,Z.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){let q=Tt.get(A);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,q=0){k=A,T=H,E=q;let Z=!0,V=null,mt=!1,Et=!1;if(A){let Ht=Tt.get(A);if(Ht.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(L.FRAMEBUFFER,null),Z=!1;else if(Ht.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Ht.__hasExternalTextures)C.rebindTextures(A,Tt.get(A.texture).__webglTexture,Tt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Vt=A.depthTexture;if(Ht.__boundDepthTexture!==Vt){if(Vt!==null&&Tt.has(Vt)&&(A.width!==Vt.image.width||A.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}let jt=A.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Et=!0);let ee=Tt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[H])?V=ee[H][q]:V=ee[H],mt=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?V=Tt.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?V=ee[q]:V=ee,R.copy(A.viewport),N.copy(A.scissor),D=A.scissorTest}else R.copy(vt).multiplyScalar(W).floor(),N.copy(Nt).multiplyScalar(W).floor(),D=Gt;if(gt.bindFramebuffer(L.FRAMEBUFFER,V)&&Z&&gt.drawBuffers(A,V),gt.viewport(R),gt.scissor(N),gt.setScissorTest(D),mt){let Ht=Tt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ht.__webglTexture,q)}else if(Et){let Ht=Tt.get(A.texture),jt=H||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ht.__webglTexture,q||0,jt)}M=-1},this.readRenderTargetPixels=function(A,H,q,Z,V,mt,Et){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(zt=zt[Et]),zt){gt.bindFramebuffer(L.FRAMEBUFFER,zt);try{let Ht=A.texture,jt=Ht.format,ee=Ht.type;if(!At.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Z&&q>=0&&q<=A.height-V&&L.readPixels(H,q,Z,V,Jt.convert(jt),Jt.convert(ee),mt)}finally{let Ht=k!==null?Tt.get(k).__webglFramebuffer:null;gt.bindFramebuffer(L.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(A,H,q,Z,V,mt,Et){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(zt=zt[Et]),zt){let Ht=A.texture,jt=Ht.format,ee=Ht.type;if(!At.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=A.width-Z&&q>=0&&q<=A.height-V){gt.bindFramebuffer(L.FRAMEBUFFER,zt);let Vt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Vt),L.bufferData(L.PIXEL_PACK_BUFFER,mt.byteLength,L.STREAM_READ),L.readPixels(H,q,Z,V,Jt.convert(jt),Jt.convert(ee),0);let ue=k!==null?Tt.get(k).__webglFramebuffer:null;gt.bindFramebuffer(L.FRAMEBUFFER,ue);let Ee=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await tm(L,Ee,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Vt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,mt),L.deleteBuffer(Vt),L.deleteSync(Ee),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,H=null,q=0){A.isTexture!==!0&&(Xa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1]);let Z=Math.pow(2,-q),V=Math.floor(A.image.width*Z),mt=Math.floor(A.image.height*Z),Et=H!==null?H.x:0,zt=H!==null?H.y:0;C.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Et,zt,V,mt),gt.unbindTexture()},this.copyTextureToTexture=function(A,H,q=null,Z=null,V=0){A.isTexture!==!0&&(Xa("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,A=arguments[1],H=arguments[2],V=arguments[3]||0,q=null);let mt,Et,zt,Ht,jt,ee,Vt,ue,Ee,Re=A.isCompressedTexture?A.mipmaps[V]:A.image;q!==null?(mt=q.max.x-q.min.x,Et=q.max.y-q.min.y,zt=q.isBox3?q.max.z-q.min.z:1,Ht=q.min.x,jt=q.min.y,ee=q.isBox3?q.min.z:0):(mt=Re.width,Et=Re.height,zt=Re.depth||1,Ht=0,jt=0,ee=0),Z!==null?(Vt=Z.x,ue=Z.y,Ee=Z.z):(Vt=0,ue=0,Ee=0);let bi=Jt.convert(H.format),ge=Jt.convert(H.type),Wt;H.isData3DTexture?(C.setTexture3D(H,0),Wt=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(C.setTexture2DArray(H,0),Wt=L.TEXTURE_2D_ARRAY):(C.setTexture2D(H,0),Wt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);let _n=L.getParameter(L.UNPACK_ROW_LENGTH),ye=L.getParameter(L.UNPACK_IMAGE_HEIGHT),qi=L.getParameter(L.UNPACK_SKIP_PIXELS),Us=L.getParameter(L.UNPACK_SKIP_ROWS),Ii=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Re.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Re.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ht),L.pixelStorei(L.UNPACK_SKIP_ROWS,jt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ee);let La=A.isDataArrayTexture||A.isData3DTexture,Ce=H.isDataArrayTexture||H.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let rn=Tt.get(A),Da=Tt.get(H),Bi=Tt.get(rn.__renderTarget),Nn=Tt.get(Da.__renderTarget);gt.bindFramebuffer(L.READ_FRAMEBUFFER,Bi.__webglFramebuffer),gt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Fn=0;Fn<zt;Fn++)La&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tt.get(A).__webglTexture,V,ee+Fn),A.isDepthTexture?(Ce&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tt.get(H).__webglTexture,V,Ee+Fn),L.blitFramebuffer(Ht,jt,mt,Et,Vt,ue,mt,Et,L.DEPTH_BUFFER_BIT,L.NEAREST)):Ce?L.copyTexSubImage3D(Wt,V,Vt,ue,Ee+Fn,Ht,jt,mt,Et):L.copyTexSubImage2D(Wt,V,Vt,ue,Ee+Fn,Ht,jt,mt,Et);gt.bindFramebuffer(L.READ_FRAMEBUFFER,null),gt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ce?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Wt,V,Vt,ue,Ee,mt,Et,zt,bi,ge,Re.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(Wt,V,Vt,ue,Ee,mt,Et,zt,bi,Re.data):L.texSubImage3D(Wt,V,Vt,ue,Ee,mt,Et,zt,bi,ge,Re):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,V,Vt,ue,mt,Et,bi,ge,Re.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,V,Vt,ue,Re.width,Re.height,bi,Re.data):L.texSubImage2D(L.TEXTURE_2D,V,Vt,ue,mt,Et,bi,ge,Re);L.pixelStorei(L.UNPACK_ROW_LENGTH,_n),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ye),L.pixelStorei(L.UNPACK_SKIP_PIXELS,qi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Us),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ii),V===0&&H.generateMipmaps&&L.generateMipmap(Wt),gt.unbindTexture()},this.copyTextureToTexture3D=function(A,H,q=null,Z=null,V=0){return A.isTexture!==!0&&(Xa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Z=arguments[1]||null,A=arguments[2],H=arguments[3],V=arguments[4]||0),Xa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,H,q,Z,V)},this.initRenderTarget=function(A){Tt.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),gt.unbindTexture()},this.resetState=function(){T=0,E=0,k=null,gt.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}},Cr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pr=class extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Th=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=rh,this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},fi=new P,Ir=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)fi.fromBufferAttribute(this,e),fi.applyMatrix4(t),this.setXYZ(e,fi.x,fi.y,fi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fi.fromBufferAttribute(this,e),fi.applyNormalMatrix(t),this.setXYZ(e,fi.x,fi.y,fi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fi.fromBufferAttribute(this,e),fi.transformDirection(t),this.setXYZ(e,fi.x,fi.y,fi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ji(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ji(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ji(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ji(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ji(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),a=_e(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ao=class extends fn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ba=new P,Ks=new P,js=new P,Qs=new it,za=new it,Zf=new he,sr=new P,Ha=new P,ar=new P,hf=new it,gc=new it,df=new it,kr=class extends Me{constructor(t=new ao){if(super(),this.isSprite=!0,this.type="Sprite",Js===void 0){Js=new Ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Th(e,5);Js.setIndex([0,1,2,0,2,3]),Js.setAttribute("position",new Ir(i,3,0,!1)),Js.setAttribute("uv",new Ir(i,2,3,!1))}this.geometry=Js,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),Zf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-js.z);let i=this.material.rotation,s,a;i!==0&&(a=Math.cos(i),s=Math.sin(i));let o=this.center;or(sr.set(-.5,-.5,0),js,o,Ks,s,a),or(Ha.set(.5,-.5,0),js,o,Ks,s,a),or(ar.set(.5,.5,0),js,o,Ks,s,a),hf.set(0,0),gc.set(1,0),df.set(1,1);let r=t.ray.intersectTriangle(sr,Ha,ar,!1,Ba);if(r===null&&(or(Ha.set(-.5,.5,0),js,o,Ks,s,a),gc.set(0,1),r=t.ray.intersectTriangle(sr,ar,Ha,!1,Ba),r===null))return;let l=t.ray.origin.distanceTo(Ba);l<t.near||l>t.far||e.push({distance:l,point:Ba.clone(),uv:Xn.getInterpolation(Ba,sr,Ha,ar,hf,gc,df,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};vs=class extends mi{constructor(t=null,e=1,i=1,s,a,o,r,l,c=hi,h=hi,d,u){super(null,o,r,l,c,h,s,a,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Lr=class extends je{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ta=new he,uf=new he,rr=[],ff=new In,$v=new he,Va=new bt,Ga=new jn,Dr=class extends bt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Lr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,$v)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new In),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ta),ff.copy(t.boundingBox).applyMatrix4(ta),this.boundingBox.union(ff)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ta),Ga.copy(t.boundingSphere).applyMatrix4(ta),this.boundingSphere.union(Ga)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,o=t*a+1;for(let r=0;r<i.length;r++)i[r]=s[o+r]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Va.geometry=this.geometry,Va.material=this.material,Va.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ga.copy(this.boundingSphere),Ga.applyMatrix4(i),t.ray.intersectsSphere(Ga)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,ta),uf.multiplyMatrices(i,ta),Va.matrixWorld=uf,Va.raycast(t,rr);for(let o=0,r=rr.length;o<r;o++){let l=rr[o];l.instanceId=a,l.object=this,e.push(l)}rr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new vs(new Float32Array(s*this.count),s,this.count,od,hn));let a=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let r=this.geometry.morphTargetsRelative?1:1-o,l=s*t;a[l]=r,a.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},da=class extends fn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pf=new he,Sh=new io,lr=new jn,cr=new P,oo=class extends Me{constructor(t=new Ie,e=new da){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere),lr.applyMatrix4(s),lr.radius+=a,t.ray.intersectsSphere(lr)===!1)return;pf.copy(s).invert(),Sh.copy(t.ray).applyMatrix4(pf);let r=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,f=p;g<f;g++){let y=c.getX(g);cr.fromBufferAttribute(d,y),mf(cr,y,l,s,t,e,this)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,f=p;g<f;g++)cr.fromBufferAttribute(d,g),mf(cr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){let r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}};ua=class extends mi{constructor(t,e,i,s,a,o,r,l,c){super(t,e,i,s,a,o,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),a=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),a+=i.distanceTo(s),e.push(a),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,a=i.length,o;e?o=e:o=t*i[a-1];let r=0,l=a-1,c;for(;r<=l;)if(s=Math.floor(r+(l-r)/2),c=i[s]-o,c<0)r=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(a-1);let h=i[s],u=i[s+1]-h,p=(o-h)/u;return(s+p)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);let o=this.getPoint(s),r=this.getPoint(a),l=e||(o.isVector2?new it:new P);return l.copy(r).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new P,s=[],a=[],o=[],r=new P,l=new he;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new P)}a[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),r.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],r),o[0].crossVectors(s[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),o[p]=o[p-1].clone(),r.crossVectors(s[p-1],s[p]),r.length()>Number.EPSILON){r.normalize();let g=Math.acos(Ke(s[p-1].dot(s[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(r,g))}o[p].crossVectors(s[p],a[p])}if(e===!0){let p=Math.acos(Ke(a[0].dot(a[t]),-1,1));p/=t,s[0].dot(r.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ro=class extends Vi{constructor(t=0,e=0,i=1,s=1,a=0,o=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=r,this.aRotation=l}getPoint(t,e=new it){let i=e,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(o?a=0:a=s),this.aClockwise===!0&&!o&&(a===s?a=-s:a=a-s);let r=this.aStartAngle+t*a,l=this.aX+this.xRadius*Math.cos(r),c=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Eh=class extends ro{constructor(t,e,i,s,a,o){super(t,e,i,i,s,a,o),this.isArcCurve=!0,this.type="ArcCurve"}};hr=new P,yc=new fd,xc=new fd,vc=new fd,Ah=class extends Vi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){let i=e,s=this.points,a=s.length,o=(a-(this.closed?0:1))*t,r=Math.floor(o),l=o-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/a)+1)*a:l===0&&r===a-1&&(r=a-2,l=1);let c,h;this.closed||r>0?c=s[(r-1)%a]:(hr.subVectors(s[0],s[1]).add(s[0]),c=hr);let d=s[r%a],u=s[(r+1)%a];if(this.closed||r+2<a?h=s[(r+2)%a]:(hr.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=hr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(h),p);f<1e-4&&(f=1),g<1e-4&&(g=f),y<1e-4&&(y=f),yc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,f,y),xc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,f,y),vc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,f,y)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),xc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),vc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(yc.calc(l),xc.calc(l),vc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};Ur=class extends Vi{constructor(t=new it,e=new it,i=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new it){let i=e,s=this.v0,a=this.v1,o=this.v2,r=this.v3;return i.set(Ka(t,s.x,a.x,o.x,r.x),Ka(t,s.y,a.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Rh=class extends Vi{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){let i=e,s=this.v0,a=this.v1,o=this.v2,r=this.v3;return i.set(Ka(t,s.x,a.x,o.x,r.x),Ka(t,s.y,a.y,o.y,r.y),Ka(t,s.z,a.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Nr=class extends Vi{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ch=class extends Vi{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fr=class extends Vi{constructor(t=new it,e=new it,i=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new it){let i=e,s=this.v0,a=this.v1,o=this.v2;return i.set(Ja(t,s.x,a.x,o.x),Ja(t,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ph=class extends Vi{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){let i=e,s=this.v0,a=this.v1,o=this.v2;return i.set(Ja(t,s.x,a.x,o.x),Ja(t,s.y,a.y,o.y),Ja(t,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends Vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let i=e,s=this.points,a=(s.length-1)*t,o=Math.floor(a),r=a-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(gf(r,l.x,c.x,h.x,d.x),gf(r,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new it().fromArray(s))}return this}},Ih=Object.freeze({__proto__:null,ArcCurve:Eh,CatmullRomCurve3:Ah,CubicBezierCurve:Ur,CubicBezierCurve3:Rh,EllipseCurve:ro,LineCurve:Nr,LineCurve3:Ch,QuadraticBezierCurve:Fr,QuadraticBezierCurve3:Ph,SplineCurve:Or}),kh=class extends Vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ih[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=i){let o=s[a]-i,r=this.curves[a],l=r.getLength(),c=l===0?0:1-o/l;return r.getPointAt(c,e)}a++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,a=this.curves;s<a.length;s++){let o=a[s],r=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(r);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Ih[s.type]().fromJSON(s))}return this}},Br=class extends kh{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Nr(this.currentPoint.clone(),new it(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let a=new Fr(this.currentPoint.clone(),new it(t,e),new it(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,a,o){let r=new Ur(this.currentPoint.clone(),new it(t,e),new it(i,s),new it(a,o));return this.curves.push(r),this.currentPoint.set(a,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Or(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,a,o){let r=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+r,e+l,i,s,a,o),this}absarc(t,e,i,s,a,o){return this.absellipse(t,e,i,i,s,a,o),this}ellipse(t,e,i,s,a,o,r,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,a,o,r,l),this}absellipse(t,e,i,s,a,o,r,l){let c=new ro(t,e,i,s,a,o,r,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},zr=class n extends Ie{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Ke(s,0,Math.PI*2);let a=[],o=[],r=[],l=[],c=[],h=1/e,d=new P,u=new it,p=new P,g=new P,f=new P,y=0,m=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:y=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,p.x=m*1,p.y=-y,p.z=m*0,f.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(f.x,f.y,f.z);break;default:y=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,p.x=m*1,p.y=-y,p.z=m*0,g.copy(p),p.x+=f.x,p.y+=f.y,p.z+=f.z,p.normalize(),l.push(p.x,p.y,p.z),f.copy(g)}for(let w=0;w<=e;w++){let v=i+w*h*s,_=Math.sin(v),I=Math.cos(v);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*_,d.y=t[T].y,d.z=t[T].x*I,o.push(d.x,d.y,d.z),u.x=w/e,u.y=T/(t.length-1),r.push(u.x,u.y);let E=l[3*T+0]*_,k=l[3*T+1],M=l[3*T+0]*I;c.push(E,k,M)}}for(let w=0;w<e;w++)for(let v=0;v<t.length-1;v++){let _=v+w*t.length,I=_,T=_+t.length,E=_+t.length+1,k=_+1;a.push(I,T,k),a.push(E,k,T)}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(r,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},fa=class n extends Ie{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let a=[],o=[],r=[],l=[],c=new P,h=new it;o.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let p=i+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(r,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ei=class n extends Ie{constructor(t=1,e=1,i=1,s=32,a=1,o=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let h=[],d=[],u=[],p=[],g=0,f=[],y=i/2,m=0;w(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(p,2));function w(){let _=new P,I=new P,T=0,E=(e-t)/i;for(let k=0;k<=a;k++){let M=[],b=k/a,R=b*(e-t)+t;for(let N=0;N<=s;N++){let D=N/s,F=D*l+r,O=Math.sin(F),z=Math.cos(F);I.x=R*O,I.y=-b*i+y,I.z=R*z,d.push(I.x,I.y,I.z),_.set(O,E,z).normalize(),u.push(_.x,_.y,_.z),p.push(D,1-b),M.push(g++)}f.push(M)}for(let k=0;k<s;k++)for(let M=0;M<a;M++){let b=f[M][k],R=f[M+1][k],N=f[M+1][k+1],D=f[M][k+1];(t>0||M!==0)&&(h.push(b,R,D),T+=3),(e>0||M!==a-1)&&(h.push(R,N,D),T+=3)}c.addGroup(m,T,0),m+=T}function v(_){let I=g,T=new it,E=new P,k=0,M=_===!0?t:e,b=_===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,y*b,0),u.push(0,b,0),p.push(.5,.5),g++;let R=g;for(let N=0;N<=s;N++){let F=N/s*l+r,O=Math.cos(F),z=Math.sin(F);E.x=M*z,E.y=y*b,E.z=M*O,d.push(E.x,E.y,E.z),u.push(0,b,0),T.x=O*.5+.5,T.y=z*.5*b+.5,p.push(T.x,T.y),g++}for(let N=0;N<s;N++){let D=I+N,F=R+N;_===!0?h.push(F,F+1,D):h.push(F+1,F,D),k+=3}c.addGroup(m,k,_===!0?1:2),m+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ts=class n extends ei{constructor(t=1,e=1,i=32,s=1,a=!1,o=0,r=Math.PI*2){super(0,t,e,i,s,a,o,r),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:r}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Lh=class n extends Ie{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let a=[],o=[];r(s),c(i),h(),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(a.slice(),3)),this.setAttribute("uv",new oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function r(w){let v=new P,_=new P,I=new P;for(let T=0;T<e.length;T+=3)p(e[T+0],v),p(e[T+1],_),p(e[T+2],I),l(v,_,I,w)}function l(w,v,_,I){let T=I+1,E=[];for(let k=0;k<=T;k++){E[k]=[];let M=w.clone().lerp(_,k/T),b=v.clone().lerp(_,k/T),R=T-k;for(let N=0;N<=R;N++)N===0&&k===T?E[k][N]=M:E[k][N]=M.clone().lerp(b,N/R)}for(let k=0;k<T;k++)for(let M=0;M<2*(T-k)-1;M++){let b=Math.floor(M/2);M%2===0?(u(E[k][b+1]),u(E[k+1][b]),u(E[k][b])):(u(E[k][b+1]),u(E[k+1][b+1]),u(E[k+1][b]))}}function c(w){let v=new P;for(let _=0;_<a.length;_+=3)v.x=a[_+0],v.y=a[_+1],v.z=a[_+2],v.normalize().multiplyScalar(w),a[_+0]=v.x,a[_+1]=v.y,a[_+2]=v.z}function h(){let w=new P;for(let v=0;v<a.length;v+=3){w.x=a[v+0],w.y=a[v+1],w.z=a[v+2];let _=y(w)/2/Math.PI+.5,I=m(w)/Math.PI+.5;o.push(_,1-I)}g(),d()}function d(){for(let w=0;w<o.length;w+=6){let v=o[w+0],_=o[w+2],I=o[w+4],T=Math.max(v,_,I),E=Math.min(v,_,I);T>.9&&E<.1&&(v<.2&&(o[w+0]+=1),_<.2&&(o[w+2]+=1),I<.2&&(o[w+4]+=1))}}function u(w){a.push(w.x,w.y,w.z)}function p(w,v){let _=w*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){let w=new P,v=new P,_=new P,I=new P,T=new it,E=new it,k=new it;for(let M=0,b=0;M<a.length;M+=9,b+=6){w.set(a[M+0],a[M+1],a[M+2]),v.set(a[M+3],a[M+4],a[M+5]),_.set(a[M+6],a[M+7],a[M+8]),T.set(o[b+0],o[b+1]),E.set(o[b+2],o[b+3]),k.set(o[b+4],o[b+5]),I.copy(w).add(v).add(_).divideScalar(3);let R=y(I);f(T,b+0,w,R),f(E,b+2,v,R),f(k,b+4,_,R)}}function f(w,v,_,I){I<0&&w.x===1&&(o[v]=w.x-1),_.x===0&&_.z===0&&(o[v]=I/2/Math.PI+.5)}function y(w){return Math.atan2(w.z,-w.x)}function m(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}},pa=class extends Br{constructor(t){super(t),this.uuid=dn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Br().fromJSON(s))}return this}},nw={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,a=$f(n,0,s,e,!0),o=[];if(!a||a.next===a.prev)return o;let r,l,c,h,d,u,p;if(i&&(a=lw(n,t,a,e)),n.length>80*e){r=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)d=n[g],u=n[g+1],d<r&&(r=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-r,h-l),p=p!==0?32767/p:0}return lo(a,o,e,r,l,p,0),o}};ja=class n{static area(t){let e=t.length,i=0;for(let s=e-1,a=0;a<e;s=a++)i+=t[s].x*t[a].y-t[a].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],a=[];xf(t),vf(i,t);let o=t.length;e.forEach(xf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,vf(i,e[l]);let r=nw.triangulate(i,s);for(let l=0;l<r.length;l+=3)a.push(r.slice(l,l+3));return a}};uo=class n extends Ie{constructor(t=new pa([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],a=[];for(let r=0,l=t.length;r<l;r++){let c=t[r];o(c)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(a,2)),this.computeVertexNormals();function o(r){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,f=e.bevelOffset!==void 0?e.bevelOffset:0,y=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:ww,v,_=!1,I,T,E,k;m&&(v=m.getSpacedPoints(h),_=!0,u=!1,I=m.computeFrenetFrames(h,!1),T=new P,E=new P,k=new P),u||(y=0,p=0,g=0,f=0);let M=r.extractPoints(c),b=M.shape,R=M.holes;if(!ja.isClockWise(b)){b=b.reverse();for(let nt=0,ft=R.length;nt<ft;nt++){let L=R[nt];ja.isClockWise(L)&&(R[nt]=L.reverse())}}let D=ja.triangulateShape(b,R),F=b;for(let nt=0,ft=R.length;nt<ft;nt++){let L=R[nt];b=b.concat(L)}function O(nt,ft,L){return ft||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(ft,L)}let z=b.length,Y=D.length;function W(nt,ft,L){let Ft,ct,At,gt=nt.x-ft.x,Yt=nt.y-ft.y,Tt=L.x-nt.x,C=L.y-nt.y,S=gt*gt+Yt*Yt,X=gt*C-Yt*Tt;if(Math.abs(X)>Number.EPSILON){let Q=Math.sqrt(S),ot=Math.sqrt(Tt*Tt+C*C),tt=ft.x-Yt/Q,Ut=ft.y+gt/Q,yt=L.x-C/ot,Mt=L.y+Tt/ot,Qt=((yt-tt)*C-(Mt-Ut)*Tt)/(gt*C-Yt*Tt);Ft=tt+gt*Qt-nt.x,ct=Ut+Yt*Qt-nt.y;let ht=Ft*Ft+ct*ct;if(ht<=2)return new it(Ft,ct);At=Math.sqrt(ht/2)}else{let Q=!1;gt>Number.EPSILON?Tt>Number.EPSILON&&(Q=!0):gt<-Number.EPSILON?Tt<-Number.EPSILON&&(Q=!0):Math.sign(Yt)===Math.sign(C)&&(Q=!0),Q?(Ft=-Yt,ct=gt,At=Math.sqrt(S)):(Ft=gt,ct=Yt,At=Math.sqrt(S/2))}return new it(Ft/At,ct/At)}let st=[];for(let nt=0,ft=F.length,L=ft-1,Ft=nt+1;nt<ft;nt++,L++,Ft++)L===ft&&(L=0),Ft===ft&&(Ft=0),st[nt]=W(F[nt],F[L],F[Ft]);let pt=[],vt,Nt=st.concat();for(let nt=0,ft=R.length;nt<ft;nt++){let L=R[nt];vt=[];for(let Ft=0,ct=L.length,At=ct-1,gt=Ft+1;Ft<ct;Ft++,At++,gt++)At===ct&&(At=0),gt===ct&&(gt=0),vt[Ft]=W(L[Ft],L[At],L[gt]);pt.push(vt),Nt=Nt.concat(vt)}for(let nt=0;nt<y;nt++){let ft=nt/y,L=p*Math.cos(ft*Math.PI/2),Ft=g*Math.sin(ft*Math.PI/2)+f;for(let ct=0,At=F.length;ct<At;ct++){let gt=O(F[ct],st[ct],Ft);ut(gt.x,gt.y,-L)}for(let ct=0,At=R.length;ct<At;ct++){let gt=R[ct];vt=pt[ct];for(let Yt=0,Tt=gt.length;Yt<Tt;Yt++){let C=O(gt[Yt],vt[Yt],Ft);ut(C.x,C.y,-L)}}}let Gt=g+f;for(let nt=0;nt<z;nt++){let ft=u?O(b[nt],Nt[nt],Gt):b[nt];_?(E.copy(I.normals[0]).multiplyScalar(ft.x),T.copy(I.binormals[0]).multiplyScalar(ft.y),k.copy(v[0]).add(E).add(T),ut(k.x,k.y,k.z)):ut(ft.x,ft.y,0)}for(let nt=1;nt<=h;nt++)for(let ft=0;ft<z;ft++){let L=u?O(b[ft],Nt[ft],Gt):b[ft];_?(E.copy(I.normals[nt]).multiplyScalar(L.x),T.copy(I.binormals[nt]).multiplyScalar(L.y),k.copy(v[nt]).add(E).add(T),ut(k.x,k.y,k.z)):ut(L.x,L.y,d/h*nt)}for(let nt=y-1;nt>=0;nt--){let ft=nt/y,L=p*Math.cos(ft*Math.PI/2),Ft=g*Math.sin(ft*Math.PI/2)+f;for(let ct=0,At=F.length;ct<At;ct++){let gt=O(F[ct],st[ct],Ft);ut(gt.x,gt.y,d+L)}for(let ct=0,At=R.length;ct<At;ct++){let gt=R[ct];vt=pt[ct];for(let Yt=0,Tt=gt.length;Yt<Tt;Yt++){let C=O(gt[Yt],vt[Yt],Ft);_?ut(C.x,C.y+v[h-1].y,v[h-1].x+L):ut(C.x,C.y,d+L)}}}K(),dt();function K(){let nt=s.length/3;if(u){let ft=0,L=z*ft;for(let Ft=0;Ft<Y;Ft++){let ct=D[Ft];Pt(ct[2]+L,ct[1]+L,ct[0]+L)}ft=h+y*2,L=z*ft;for(let Ft=0;Ft<Y;Ft++){let ct=D[Ft];Pt(ct[0]+L,ct[1]+L,ct[2]+L)}}else{for(let ft=0;ft<Y;ft++){let L=D[ft];Pt(L[2],L[1],L[0])}for(let ft=0;ft<Y;ft++){let L=D[ft];Pt(L[0]+z*h,L[1]+z*h,L[2]+z*h)}}i.addGroup(nt,s.length/3-nt,0)}function dt(){let nt=s.length/3,ft=0;Ct(F,ft),ft+=F.length;for(let L=0,Ft=R.length;L<Ft;L++){let ct=R[L];Ct(ct,ft),ft+=ct.length}i.addGroup(nt,s.length/3-nt,1)}function Ct(nt,ft){let L=nt.length;for(;--L>=0;){let Ft=L,ct=L-1;ct<0&&(ct=nt.length-1);for(let At=0,gt=h+y*2;At<gt;At++){let Yt=z*At,Tt=z*(At+1),C=ft+Ft+Yt,S=ft+ct+Yt,X=ft+ct+Tt,Q=ft+Ft+Tt;Xt(C,S,X,Q)}}}function ut(nt,ft,L){l.push(nt),l.push(ft),l.push(L)}function Pt(nt,ft,L){Ot(nt),Ot(ft),Ot(L);let Ft=s.length/3,ct=w.generateTopUV(i,s,Ft-3,Ft-2,Ft-1);re(ct[0]),re(ct[1]),re(ct[2])}function Xt(nt,ft,L,Ft){Ot(nt),Ot(ft),Ot(Ft),Ot(ft),Ot(L),Ot(Ft);let ct=s.length/3,At=w.generateSideWallUV(i,s,ct-6,ct-3,ct-2,ct-1);re(At[0]),re(At[1]),re(At[3]),re(At[1]),re(At[2]),re(At[3])}function Ot(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function re(nt){a.push(nt.x),a.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return _w(e,i,t)}static fromJSON(t,e){let i=[];for(let a=0,o=t.shapes.length;a<o;a++){let r=e[t.shapes[a]];i.push(r)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ih[s.type]().fromJSON(s)),new n(i,t.options)}},ww={generateTopUV:function(n,t,e,i,s){let a=t[e*3],o=t[e*3+1],r=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new it(a,o),new it(r,l),new it(c,h)]},generateSideWallUV:function(n,t,e,i,s,a){let o=t[e*3],r=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],p=t[s*3+1],g=t[s*3+2],f=t[a*3],y=t[a*3+1],m=t[a*3+2];return Math.abs(r-h)<Math.abs(o-c)?[new it(o,1-l),new it(c,1-d),new it(u,1-g),new it(f,1-m)]:[new it(r,1-l),new it(h,1-d),new it(p,1-g),new it(y,1-m)]}};Ei=class n extends Lh{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Hr=class n extends Ie{constructor(t=.5,e=1,i=32,s=1,a=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let r=[],l=[],c=[],h=[],d=t,u=(e-t)/s,p=new P,g=new it;for(let f=0;f<=s;f++){for(let y=0;y<=i;y++){let m=a+y/i*o;p.x=d*Math.cos(m),p.y=d*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let f=0;f<s;f++){let y=f*(i+1);for(let m=0;m<i;m++){let w=m+y,v=w,_=w+i+1,I=w+i+2,T=w+1;r.push(v,_,T),r.push(_,I,T)}}this.setIndex(r),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ai=class n extends Ie{constructor(t=1,e=32,i=16,s=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:a,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+r,Math.PI),c=0,h=[],d=new P,u=new P,p=[],g=[],f=[],y=[];for(let m=0;m<=i;m++){let w=[],v=m/i,_=0;m===0&&o===0?_=.5/e:m===i&&l===Math.PI&&(_=-.5/e);for(let I=0;I<=e;I++){let T=I/e;d.x=-t*Math.cos(s+T*a)*Math.sin(o+v*r),d.y=t*Math.cos(o+v*r),d.z=t*Math.sin(s+T*a)*Math.sin(o+v*r),g.push(d.x,d.y,d.z),u.copy(d).normalize(),f.push(u.x,u.y,u.z),y.push(T+_,1-v),w.push(c++)}h.push(w)}for(let m=0;m<i;m++)for(let w=0;w<e;w++){let v=h[m][w+1],_=h[m][w],I=h[m+1][w],T=h[m+1][w+1];(m!==0||o>0)&&p.push(v,_,T),(m!==i-1||l<Math.PI)&&p.push(_,I,T)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},kn=class n extends Ie{constructor(t=1,e=.4,i=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:a},i=Math.floor(i),s=Math.floor(s);let o=[],r=[],l=[],c=[],h=new P,d=new P,u=new P;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let f=g/s*a,y=p/i*Math.PI*2;d.x=(t+e*Math.cos(y))*Math.cos(f),d.y=(t+e*Math.cos(y))*Math.sin(f),d.z=e*Math.sin(y),r.push(d.x,d.y,d.z),h.x=t*Math.cos(f),h.y=t*Math.sin(f),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let f=(s+1)*p+g-1,y=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,w=(s+1)*p+g;o.push(f,y,w),o.push(y,m,w)}this.setIndex(o),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Vr=class extends ke{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},_s=class extends fn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hd,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Gr=class extends fn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hd,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};ma=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],a=e[i-1];i:{t:{let o;e:{n:if(!(t<s)){for(let r=i+2;;){if(s===void 0){if(t<a)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===r)break;if(a=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=a)){let r=e[1];t<r&&(i=2,a=r);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=e[--i-1],t>=a)break t}o=i,i=0;break e}break i}for(;i<o;){let r=i+o>>>1;t<e[r]?o=r:i=r+1}if(s=e[i],a=e[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let o=0;o!==s;++o)e[o]=i[a+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nh=class extends ma{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fu,endingEnd:fu}}intervalChanged_(t,e,i){let s=this.parameterPositions,a=t-2,o=t+1,r=s[a],l=s[o];if(r===void 0)switch(this.getSettings_().endingStart){case pu:a=t,r=2*e-i;break;case mu:a=s.length-2,r=e+s[a]-s[a+1];break;default:a=t,r=i}if(l===void 0)switch(this.getSettings_().endingEnd){case pu:o=t,l=2*i-e;break;case mu:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-r),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let a=this.resultBuffer,o=this.sampleValues,r=this.valueSize,l=t*r,c=l-r,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),f=g*g,y=f*g,m=-u*y+2*u*f-u*g,w=(1+u)*y+(-1.5-2*u)*f+(-.5+u)*g+1,v=(-1-p)*y+(1.5+p)*f+.5*g,_=p*y-p*f;for(let I=0;I!==r;++I)a[I]=m*o[h+I]+w*o[c+I]+v*o[l+I]+_*o[d+I];return a}},Fh=class extends ma{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let a=this.resultBuffer,o=this.sampleValues,r=this.valueSize,l=t*r,c=l-r,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==r;++u)a[u]=o[c+u]*d+o[l+u]*h;return a}},Oh=class extends ma{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},en=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fr(e,this.TimeBufferType),this.values=fr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:fr(t.times,Array),values:fr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Oh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case vr:e=this.InterpolantFactoryMethodDiscrete;break;case oh:e=this.InterpolantFactoryMethodLinear;break;case Gl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return oh;case this.InterpolantFactoryMethodSmooth:return Gl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,a=0,o=s-1;for(;a!==s&&i[a]<t;)++a;for(;o!==-1&&i[o]>e;)--o;if(++o,a!==0||o!==s){a>=o&&(o=Math.max(o,1),a=o-1);let r=this.getValueSize();this.times=i.slice(a,o),this.values=this.values.slice(a*r,o*r)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let r=0;r!==a;r++){let l=i[r];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,l,o),t=!1;break}o=l}if(s!==void 0&&bw(s))for(let r=0,l=s.length;r!==l;++r){let c=s[r];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Gl,a=t.length-1,o=1;for(let r=1;r<a;++r){let l=!1,c=t[r],h=t[r+1];if(c!==h&&(r!==1||c!==t[0]))if(s)l=!0;else{let d=r*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){let f=e[d+g];if(f!==e[u+g]||f!==e[p+g]){l=!0;break}}}if(l){if(r!==o){t[o]=t[r];let d=r*i,u=o*i;for(let p=0;p!==i;++p)e[u+p]=e[d+p]}++o}}if(a>0){t[o]=t[a];for(let r=a*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[r+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=oh;bs=class extends en{constructor(t,e,i){super(t,e,i)}};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=vr;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;Bh=class extends en{};Bh.prototype.ValueTypeName="color";zh=class extends en{};zh.prototype.ValueTypeName="number";Hh=class extends ma{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let a=this.resultBuffer,o=this.sampleValues,r=this.valueSize,l=(i-e)/(s-e),c=t*r;for(let h=c+r;c!==h;c+=4)Kn.slerpFlat(a,0,o,c-r,o,c,l);return a}},Wr=class extends en{InterpolantFactoryMethodLinear(t){return new Hh(this.times,this.values,this.getValueSize(),t)}};Wr.prototype.ValueTypeName="quaternion";Wr.prototype.InterpolantFactoryMethodSmooth=void 0;Ms=class extends en{constructor(t,e,i){super(t,e,i)}};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=vr;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;Vh=class extends en{};Vh.prototype.ValueTypeName="vector";wf={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Gh=class{constructor(t,e,i){let s=this,a=!1,o=0,r=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){r++,a===!1&&s.onStart!==void 0&&s.onStart(h,o,r),a=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,r),o===r&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Mw=new Gh,fo=class{constructor(t){this.manager=t!==void 0?t:Mw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,a){i.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};fo.DEFAULT_MATERIAL_NAME="__DEFAULT";Wh=class extends fo{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=this,o=wf.get(t);if(o!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(o),a.manager.itemEnd(t)},0),o;let r=eo("img");function l(){h(),wf.add(t,this),e&&e(this),a.manager.itemEnd(t)}function c(d){h(),s&&s(d),a.manager.itemError(t),a.manager.itemEnd(t)}function h(){r.removeEventListener("load",l,!1),r.removeEventListener("error",c,!1)}return r.addEventListener("load",l,!1),r.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),a.manager.itemStart(t),r.src=t,r}},Xr=class extends fo{constructor(t){super(t)}load(t,e,i,s){let a=new mi,o=new Wh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(r){a.image=r,a.needsUpdate=!0,e!==void 0&&e(a)},i,s),a}},po=class extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Yr=class extends po{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},wc=new he,_f=new P,bf=new P,qr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;_f.setFromMatrixPosition(t.matrixWorld),e.position.copy(_f),bf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bf),e.updateMatrixWorld(),wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Mf=new he,Wa=new P,_c=new P,Xh=class extends qr{constructor(){super(new Mi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Wa.setFromMatrixPosition(t.matrixWorld),i.position.copy(Wa),_c.copy(i.position),_c.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(_c),i.updateMatrixWorld(),s.makeTranslation(-Wa.x,-Wa.y,-Wa.z),Mf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mf)}},Ts=class extends po{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Yh=class extends qr{constructor(){super(new Qn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},mo=class extends po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Yh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Zr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Tf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};pd="\\[\\]\\.:\\/",Tw=new RegExp("["+pd+"]","g"),md="[^"+pd+"]",Sw="[^"+pd.replace("\\.","")+"]",Ew=/((?:WC+[\/:])*)/.source.replace("WC",md),Aw=/(WCOD+)?/.source.replace("WCOD",Sw),Rw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",md),Cw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",md),Pw=new RegExp("^"+Ew+Aw+Rw+Cw+"$"),Iw=["material","materials","bones","map"],qh=class{constructor(t,e,i){let s=i||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},De=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tw,"")}static parseTrackName(t){let e=Pw.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);Iw.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(a){for(let o=0;o<a.length;o++){let r=a[o];if(r.name===e||r.uuid===e)return r;let l=i(r.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,a=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let r=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=qh;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];k1=new Float32Array(1),Sf=new he,$r=class{constructor(t,e,i=0,s=1/0){this.ray=new io(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new no,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Sf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sf),this}intersectObject(t,e=!0,i=[]){return Zh(t,this,i,e),i.sort(Ef),i}intersectObjects(t,e=!0,i=[]){for(let s=0,a=t.length;s<a;s++)Zh(t[s],this,i,e);return i.sort(Ef),i}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$h)});function kw(){return x.state.identity==="father"?"Dad":"Mom"}function il(){return x.state.identity==="father"?"Grandpa":"Grandma"}function va(){return x.state.childName||"Lily"}function jf(){return x.state.childKind==="son"?"he":"she"}function Lw(){return x.state.childKind==="son"?"him":"her"}function Qf(){return x.state.childKind==="son"?"his":"her"}function Dw(){let n=jf();return n[0].toUpperCase()+n.slice(1)}function Uw(){let n=Qf();return n[0].toUpperCase()+n.slice(1)}function Le(n){return n.replace(/\{me\}/g,kw()).replace(/\{grandme\}/g,il()).replace(/\{child\}/g,va()).replace(/\{they\}/g,jf()).replace(/\{They\}/g,Dw()).replace(/\{them\}/g,Lw()).replace(/\{their\}/g,Qf()).replace(/\{Their\}/g,Uw())}function gd(n,t,e){let i=(t-n+Math.PI)%(Math.PI*2)-Math.PI;return i<-Math.PI&&(i+=Math.PI*2),n+i*e}function fe(n=1){let t=n>>>0||1,e=()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,(t>>>0)/4294967296);return e.range=(i,s)=>i+(s-i)*e(),e.int=(i,s)=>Math.floor(i+(s-i+1)*e()),e.pick=i=>i[Math.floor(e()*i.length)],e}function wt(n){return new Promise(t=>{let e=0,i=s=>{e+=s,e>=n&&(x.updaters.delete(i),t())};x.updaters.add(i)})}function ve(n,t,e=Nw){return new Promise(i=>{let s=0;if(n<=0)return t(1),i();let a=o=>{s+=o;let r=qt(s/n,0,1);t(e(r)),r>=1&&(x.updaters.delete(a),i())};x.updaters.add(a)})}function di(n){return new Promise(t=>{let e=i=>{n(i)&&(x.updaters.delete(e),t())};x.updaters.add(e)})}function yo(n,t,e,i){let s=n-e,a=t-i;return Math.sqrt(s*s+a*a)}var x,qt,$e,tp,Nw,Ui,L1,He=No(()=>{x={time:0,realTime:0,dt:0,timeScale:1,paused:!1,debug:!1,renderer:null,scene:null,camera:null,world:null,player:null,ui:null,audio:null,input:null,album:null,director:null,state:{identity:"mother",childName:"Lily",childKind:"daughter",flags:{},stats:{emails:0,workCalls:0}},updaters:new Set,realUpdaters:new Set};qt=(n,t,e)=>n<t?t:n>e?e:n,$e=(n,t,e)=>n+(t-n)*e,tp=n=>n*n*(3-2*n),Nw=n=>n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2,Ui=(n,t,e,i)=>$e(n,t,1-Math.exp(-e*i));L1=fe(12345)});function pe(n,t={}){let e=n+JSON.stringify(t);if(Ed.has(e))return Ed.get(e);let i=new _s({color:n,flatShading:!0,roughness:t.roughness??.92,metalness:t.metalness??0,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,transparent:!!t.transparent,opacity:t.opacity??1,side:t.side??Qi,depthWrite:t.depthWrite??!0});return Ed.set(e,i),i}function sn(n,t={}){return new _s({color:n,flatShading:!0,roughness:t.roughness??.92,metalness:0,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,transparent:!!t.transparent,opacity:t.opacity??1,side:t.side??Qi,depthWrite:t.depthWrite??!0})}function Ln(n,t){return Ad.has(n)||Ad.set(n,t()),Ad.get(n)}function Rd(n,t=.05,e=1,i=!0){let s=n.attributes.position,a=1/0;for(let o=0;o<s.count;o++)a=Math.min(a,s.getY(o));for(let o=0;o<s.count;o++){let r=s.getX(o),l=s.getY(o),c=s.getZ(o);if(i&&Math.abs(l-a)<1e-4)continue;let h=Math.sin(Math.round(r*100)*12.9898+Math.round(l*100)*78.233+Math.round(c*100)*37.719+e*11.13)*43758.5453,d=h-Math.floor(h)-.5,u=Math.sin(h*1.37+3.1)*9631.17,p=u-Math.floor(u)-.5,g=Math.sin(h*.71+7.7)*7211.31,f=g-Math.floor(g)-.5;s.setXYZ(o,r+d*t,l+p*t,c+f*t)}return s.needsUpdate=!0,n.computeVertexNormals(),n}function ne(n,t=!0,e=!0){return n.traverse(i=>{i.isMesh&&(i.castShadow=t,i.receiveShadow=e)}),n}function Es(n,t,e){let i=new bt(n,typeof t=="number"?pe(t,e):t);return i.castShadow=!0,i.receiveShadow=!0,i}function j(n,t,e,i,s){let a=Ln(`box${n},${t},${e}`,()=>{let o=new gi(n,t,e);return o.translate(0,t/2,0),o});return Es(a,i,s)}function mn(n,t,e,i,s){let a=Ln(`boxc${n},${t},${e}`,()=>new gi(n,t,e));return Es(a,i,s)}function Se(n,t,e,i,s,a){let o=Ln(`cyl${n},${t},${e},${i}`,()=>{let r=new ei(n,t,e,i);return r.translate(0,e/2,0),r});return Es(o,s,a)}function Fi(n,t,e,i,s){let a=Ln(`cone${n},${t},${e}`,()=>{let o=new ts(n,t,e);return o.translate(0,t/2,0),o});return Es(a,i,s)}function me(n,t,e,i=0,s=1,a){let o=Ln(`ico${n},${t},${i},${s}`,()=>Rd(new Ei(n,t),i,s,!1));return Es(o,e,a)}function Xi(n,t,e,i,s){let a=Ln(`sph${n},${t},${e}`,()=>new Ai(n,t,e));return Es(a,i,s)}function As(n,t,e,i,s,a=Math.PI*2,o){let r=Ln(`tor${n},${t},${e},${i},${a}`,()=>new kn(n,t,e,i,a));return Es(r,s,o)}function Yw(...n){let t=new rt;return n.forEach(e=>e&&t.add(e)),t}function an(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);let s=new ua(i);return s.colorSpace=Xe,s.anisotropy=4,s}function gl(){return ml||(ml=an(128,128,(n,t)=>{let e=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.55)"),e.addColorStop(.6,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)}),ml)}function Ge(n=16777215,t=1,e=1){let i=new kr(new ao({map:gl(),color:n,transparent:!0,opacity:e,blending:Si,depthWrite:!1,fog:!1}));return i.scale.setScalar(t),i}function Rs({w:n=20,d:t=20,h:e=1.2,top:i=U.grass,side:s=U.dirt,under:a=U.dirtDark,seed:o=3,rocks:r=!0,edge:l=null}={}){let c=new rt,h=j(n,.35,t,i);if(h.position.y=-.35,h.castShadow=!1,c.add(h),l){let u=j(n+.06,.12,t+.06,l);u.position.y=-.47,u.castShadow=!1,c.add(u)}let d=j(n-.1,e,t-.1,s);if(d.position.y=-.35-e,d.castShadow=!1,c.add(d),r){let u=fe(o),p=Math.max(4,Math.round(n*t/30));for(let f=0;f<p;f++){let y=u.range(1.8,4.2),m=u.range(2.5,7.5),w=Rd(new ts(y,m,5),.35,o+f,!1),v=new bt(w,pe(f%3===0?U.rockDark:a));v.rotation.x=Math.PI,v.position.set(u.range(-n/2+y*.8,n/2-y*.8),-.35-e-m/2+.2,u.range(-t/2+y*.8,t/2-y*.8)),c.add(v)}let g=new bt(Rd(new ts(Math.min(n,t)*.62,Math.min(n,t)*.55,6),.5,o+99,!1),pe(a));g.rotation.x=Math.PI,g.rotation.y=.4,g.scale.set(n/Math.min(n,t),1,t/Math.min(n,t)),g.position.y=-.35-e-Math.min(n,t)*.27+.1,c.add(g)}return c.userData.ground=h,c}function Wi(n,t,e,i=.005,s){let a=new bt(Ln(`patch${n},${t}`,()=>{let o=new Ue(n,t);return o.rotateX(-Math.PI/2),o}),pe(e,s));return a.position.y=i,a.receiveShadow=!0,a}function nn(n,t,e=10,i=.006){let s=new bt(Ln(`disc${n},${e}`,()=>{let a=new fa(n,e);return a.rotateX(-Math.PI/2),a}),pe(t));return s.position.y=i,s.receiveShadow=!0,s}function is({kind:n="round",season:t="summer",size:e=1,seed:i=1}={}){let s=fe(i*7+3),a=new rt,o=(n==="pine"?.9:1.4)*e,r=n==="birch"?U.birch:U.trunk,l=Se(.12*e,.2*e,o,5,r);a.add(l);let c=new rt;c.position.y=o,a.add(c);let h=rp[n==="blossom"&&t!=="winter"&&t!=="autumn"?"blossom":t];if(n==="pine"){let d=t==="winter"?[U.pine,6134384]:[U.pine,6003307];for(let u=0;u<3;u++){let p=Fi((1-u*.25)*e,1.3*e,6,d[u%2]);if(p.position.y=u*.65*e-.2,c.add(p),t==="winter"){let g=Fi((.55-u*.14)*e,.5*e,6,U.snow);g.position.y=u*.65*e+.75*e,c.add(g)}}}else if(t==="winter"&&n!=="pine"){for(let u=0;u<5;u++){let p=Se(.03*e,.07*e,.9*e,4,r);p.rotation.z=s.range(.5,.9)*(u%2?1:-1),p.rotation.y=u*1.3,p.position.y=s.range(-.2,.3)*e,c.add(p)}let d=me(.35*e,0,U.snow,.05,i);d.position.y=.6*e,d.scale.y=.5,c.add(d)}else{let d=n==="birch"?3:4;for(let p=0;p<d;p++){let g=s.range(.55,.85)*e,f=me(g,0,h[p%h.length],.12,i+p),y=p/d*Math.PI*2+s.range(0,1);f.position.set(Math.cos(y)*.45*e,s.range(.35,.9)*e,Math.sin(y)*.45*e),c.add(f)}let u=me(.7*e,0,h[0],.12,i+9);u.position.y=1.15*e,c.add(u)}return ne(a),a.userData.canopy=c,a.userData.sway=s.range(0,6),a.userData.update=(d,u)=>{c.rotation.z=Math.sin(u*.8+a.userData.sway)*.02,c.rotation.x=Math.cos(u*.6+a.userData.sway)*.015},a}function ba({stage:n=1,season:t="summer",swing:e=!1,seed:i=42}={}){let s=new rt,a=[.28,.6,1.25,1.9,2.4][n]??1,o=1.5*a,r=Se(.1*a+.03,.22*a+.05,o,6,U.trunk);s.add(r);let l=new rt;if(l.position.y=o,s.add(l),n>=2)for(let h=0;h<3;h++){let d=Se(.04*a,.09*a,.9*a,5,U.trunk);d.rotation.z=(h-1)*.7,d.rotation.y=h*2.1,d.position.y=-.2*a,l.add(d)}let c=rp[t];if(t==="winter"){for(let d=0;d<7;d++){let u=Se(.025*a,.06*a,1.1*a,4,U.trunk);u.rotation.z=.6+d%3*.15,u.rotation.y=d*.9,u.position.y=.1*a,l.add(u)}let h=me(.5*a,0,U.snow,.06,i);h.scale.y=.35,h.position.y=.75*a,l.add(h)}else{let h=fe(i),d=n===0?2:6;for(let p=0;p<d;p++){let g=me(h.range(.5,.75)*a,n>=3?1:0,c[p%3],.1*a,i+p),f=p/d*Math.PI*2;g.position.set(Math.cos(f)*.6*a,h.range(.3,.8)*a,Math.sin(f)*.6*a),l.add(g)}let u=me(.8*a,n>=3?1:0,c[0],.1*a,i+77);u.position.y=1.1*a,l.add(u)}if(e&&n>=2){let h=new rt,d=j(.025,1.3*a*.75,.025,15260872);d.position.set(-.25,-1.3*a*.75,0),h.add(d);let u=j(.025,1.3*a*.75,.025,15260872);u.position.set(.25,-1.3*a*.75,0),h.add(u);let p=j(.65,.06,.25,U.woodDark);p.position.y=-1.3*a*.75,h.add(p),h.position.set(.9*a,o+.15*a-.35,.2),s.add(h),s.userData.swing=h,s.userData.swingLen=1.3*a*.75}return ne(s),s.userData.canopy=l,s.userData.update=(h,d)=>{l.rotation.z=Math.sin(d*.7)*.015},s}function lp(n=7910486,t=1,e=1){let i=new rt,s=fe(e);for(let a=0;a<3;a++){let o=me(s.range(.28,.42)*t,0,a===1?n:vi(n,.92),.06,e+a);o.position.set((a-1)*.3*t,.25*t,s.range(-.1,.1)),i.add(o)}return ne(i)}function Cs(n=1,t=1,e=U.rock){let i=me(.4*n,0,e,.12*n,t);return i.scale.y=.6,i.position.y=.12*n,Yw(i)}function Ps(n=U.pink,t=1){let e=new rt,i=j(.025,.22,.025,6068806);e.add(i);let s=me(.07,0,n,0);s.position.y=.24,e.add(s);let a=me(.035,0,U.yellow);return a.position.y=.27,e.add(a),e.rotation.y=t,ne(e,!1,!1)}function Ma(n=U.grassDark,t=1){let e=new rt;for(let i=0;i<3;i++){let s=Fi(.04,.22+i%2*.08,3,n);s.position.set((i-1)*.05,0,i%2*.04),s.rotation.z=(i-1)*.3,e.add(s)}return e.rotation.y=t,ne(e,!1,!1)}function Ta(n=1,t=1){let e=new rt,i=fe(n);for(let s=0;s<4;s++){let a=me(i.range(.6,1.1)*t,0,16777215,.15,n+s,{emissive:16777215,emissiveIntensity:.25});a.position.set((s-1.5)*.8*t,i.range(-.2,.3),i.range(-.3,.3)),a.scale.y=.7,e.add(a)}return e.userData.drift=i.range(.1,.25),e.traverse(s=>{s.isMesh&&(s.castShadow=!1,s.receiveShadow=!1)}),e}function vi(n,t){let e=new Lt(n);return e.multiplyScalar(t),e.getHex()}function yl({w:n=8,d:t=8,h:e=3.2,floor:i=U.woodLight,wall:s=U.cream,wall2:a=null,trim:o=U.white,base:r=U.dirtDark,windows:l=[]}={}){let c=new rt,h=j(n,.25,t,i);h.position.y=-.25,h.castShadow=!1,c.add(h);let d=j(n+.3,.6,t+.3,r);d.position.y=-.85,d.castShadow=!1,c.add(d);for(let y=1;y<Math.floor(n/.8);y++){let m=Wi(.02,t,vi(i,.9),.003);m.position.x=-n/2+y*.8,c.add(m)}let u=j(.25,e,t+.25,s);u.position.set(-n/2-.125,-.25,-.125),c.add(u);let p=j(n,e,.25,a??s);p.position.set(0,-.25,-t/2-.125),c.add(p);let g=j(.06,.18,t,o);g.position.set(-n/2+.03,0,0),c.add(g);let f=j(n,.18,.06,o);f.position.set(0,0,-t/2+.03),c.add(f);for(let y of l)c.add(qw(y));return ne(c),c.userData.walls=[u,p],c}function qw({wall:n="back",at:t=0,y:e=1.1,w:i=1.4,h:s=1.3,glow:a=16773848,roomW:o=8,roomD:r=8}={}){let l=new rt,c=j(i,s,.05,a,{emissive:a,emissiveIntensity:.9});c.castShadow=!1,l.add(c);let h=j(i+.16,.1,.14,U.white);h.position.y=-.05,l.add(h);let d=j(i+.16,.1,.14,U.white);d.position.y=s,l.add(d);let u=j(.08,s,.12,U.white);u.position.x=0,l.add(u);let p=j(.1,s,.14,U.white);p.position.x=-i/2,l.add(p);let g=j(.1,s,.14,U.white);g.position.x=i/2,l.add(g);let f=j(i+.3,.07,.3,U.white);return f.position.set(0,-.08,.12),l.add(f),n==="back"?l.position.set(t,e,-r/2+.03):(l.position.set(-o/2+.03,e,t),l.rotation.y=Math.PI/2),l.userData.pane=c,l}function Cd({w:n=5,d:t=4,h:e=2.6,wall:i=U.cream,roof:s=U.terracotta,door:a=U.navy,trim:o=U.white,chimney:r=!0,porch:l=!1,lit:c=!1,seed:h=1}={}){let d=new rt,u=j(n,e,t,i);d.add(u);let p=new pa,g=.35;p.moveTo(-n/2-g,0),p.lineTo(n/2+g,0),p.lineTo(0,e*.6),p.lineTo(-n/2-g,0);let f=new uo(p,{depth:t+g*2,bevelEnabled:!1});f.translate(0,0,-(t+g*2)/2);let y=new bt(f,pe(s));y.position.y=e,y.castShadow=!0,y.receiveShadow=!0,d.add(y);let m=new pa;m.moveTo(-n/2,0),m.lineTo(n/2,0),m.lineTo(0,e*.52),m.lineTo(-n/2,0);let w=new uo(m,{depth:t-.02,bevelEnabled:!1});w.translate(0,0,-(t-.02)/2);let v=new bt(w,pe(i));if(v.position.y=e-.01,d.add(v),r){let M=j(.45,1.2,.45,U.terracotta===s?11097919:vi(s,.8));M.position.set(n*.25,e+.3,-t*.15),d.add(M)}let _=j(.75,1.45,.08,a);_.position.set(0,0,t/2+.02),d.add(_);let I=Xi(.04,6,4,U.yellow);I.position.set(.25,.72,t/2+.08),d.add(I);let T=c?16769184:13624046,E=c?{emissive:16765578,emissiveIntensity:1.2}:{};for(let M of[-1,1]){let b=j(.75,.7,.06,T,E);b.position.set(M*n*.3,1.1,t/2+.02),d.add(b);let R=j(.9,.08,.1,o);R.position.set(M*n*.3,1.06,t/2+.05),d.add(R);let N=j(.06,.7,.75,T,E);N.position.set(n/2+.02,1.1,M*t*.22),d.add(N)}let k=j(1.1,.12,.5,U.stone);if(k.position.set(0,0,t/2+.25),d.add(k),l){let M=j(n*.8,.15,1.4,U.woodLight);M.position.set(0,0,t/2+.7),d.add(M);for(let R of[-1,1]){let N=Se(.06,.06,1.9,5,o);N.position.set(R*n*.38,.15,t/2+1.3),d.add(N)}let b=j(n*.85,.1,1.6,s);b.position.set(0,2.05,t/2+.75),b.rotation.x=.12,d.add(b)}return ne(d)}function xl(n=4,t=U.white,e=.6){let i=new rt,s=Math.max(2,Math.round(n/.5));for(let a=0;a<=s;a++){let o=j(.08,e,.08,t);o.position.x=-n/2+a/s*n,i.add(o)}for(let a of[e*.35,e*.75]){let o=j(n,.06,.05,t);o.position.y=a,i.add(o)}return ne(i)}function cp(n,t=3,e=!0){let i=new rt,s=Wi(e?n:t,e?t:n,U.asphalt,.01);i.add(s);let a=Math.floor(n/1.4);for(let o=0;o<a;o++){let r=Wi(e?.6:.1,e?.1:.6,15855590,.015),l=-n/2+.7+o*1.4;e?r.position.x=l:r.position.z=l,i.add(r)}return i}function vl(n=U.woodDark){let t=new rt,e=j(1.6,.08,.45,n);e.position.y=.42,t.add(e);let i=j(1.6,.4,.06,n);i.position.set(0,.6,-.2),i.rotation.x=-.12,t.add(i);for(let s of[-.7,.7])for(let a of[-.18,.18]){let o=j(.07,.42,.07,4869980);o.position.set(s,0,a),t.add(o)}return ne(t)}function hp(){let n=new rt;for(let[e,i,s,a]of[[0,-1,2.2,.15],[0,1,2.2,.15],[-1.05,0,.15,2],[1.05,0,.15,2]]){let o=j(s,.25,a,U.wood);o.position.set(e,0,i),n.add(o)}let t=j(2,.15,1.85,U.sand);return n.add(t),ne(n)}function dp(){let n=new rt;n.add(j(.07,.8,.07,U.woodDark));let t=j(.25,.22,.4,U.navy);t.position.y=.8,n.add(t);let e=j(.02,.15,.06,U.red);return e.position.set(.14,.9,.1),n.add(e),ne(n)}function wl(n=U.red){let t=new rt;t.add(Wi(2.2,1.8,n,.02));for(let e=0;e<5;e++){let i=Wi(.18,1.8,U.white,.025);i.position.x=-.88+e*.44,t.add(i)}for(let e=0;e<4;e++){let i=Wi(2.2,.18,U.white,.026);i.position.z=-.66+e*.44,t.add(i)}return t}function up(n=U.blue){let t=new rt,e=j(2.2,.55,1.1,n);e.position.y=.25,t.add(e);let i=j(1.2,.45,1,n);i.position.set(-.1,.8,0),t.add(i);let s=j(1.22,.32,1.02,13624562);s.position.set(-.1,.86,0),t.add(s);for(let r of[-.7,.7])for(let l of[-.55,.55]){let c=Se(.22,.22,.14,8,3355443);c.rotation.x=Math.PI/2,c.position.set(r,.22,l),t.add(c)}let a=j(.05,.12,.25,16774352,{emissive:16773312,emissiveIntensity:.6});a.position.set(1.1,.45,.3),t.add(a);let o=a.clone();return o.position.z=-.3,t.add(o),ne(t)}function Pd(n=U.red,t=1){let e=new rt;for(let l of[-.45,.45]){let c=As(.3,.035,4,12,3355443);c.position.set(l,.3,0),e.add(c)}let i=mn(.7,.05,.05,n);i.position.set(0,.52,0),e.add(i);let s=mn(.05,.4,.05,n);s.position.set(-.12,.42,0),s.rotation.z=.3,e.add(s);let a=mn(.2,.05,.12,3355443);a.position.set(-.18,.68,0),e.add(a);let o=mn(.05,.05,.4,6710886);o.position.set(.4,.75,0),e.add(o);let r=mn(.04,.45,.04,n);return r.position.set(.42,.52,0),r.rotation.z=-.15,e.add(r),e.scale.setScalar(t),ne(e)}function _l(){let n=new rt,t=j(1.5,.12,.85,U.white);t.position.y=.45,n.add(t);let e=j(1.4,.12,.75,14674677);e.position.y=.57,n.add(e);for(let s of[-.72,.72])for(let a of[-.4,.4]){let o=j(.07,1.1,.07,U.white);o.position.set(s,0,a),n.add(o)}for(let s=0;s<9;s++)for(let a of[-.4,.4]){let o=j(.03,.5,.03,U.white);o.position.set(-.6+s*.15,.57,a),n.add(o)}for(let s of[-.4,.4]){let a=j(1.5,.05,.05,U.white);a.position.set(0,1.07,s),n.add(a)}let i=j(.6,.06,.7,U.pink);return i.position.set(.35,.65,0),n.add(i),ne(n)}function Id(){let n=new rt,t=j(.03,.9,.03,U.white);n.add(t);let e=j(.6,.02,.02,U.white);e.position.y=.9,n.add(e);let i=new rt;i.position.y=.88,n.add(i);let s=[U.yellow,12114162,U.pink,13166281,16179624];for(let a=0;a<5;a++){let o=a/5*Math.PI*2,r=j(.008,.25,.008,14540253);r.position.set(Math.cos(o)*.3,-.25,Math.sin(o)*.3),i.add(r);let l=me(.07,0,s[a],0,1,{emissive:s[a],emissiveIntensity:.6});l.position.set(Math.cos(o)*.3,-.3,Math.sin(o)*.3),i.add(l)}return n.userData.spin=i,n.userData.speed=.25,n.userData.update=a=>{i.rotation.y+=a*n.userData.speed},n}function fp({w:n=1.1,d:t=2,color:e=U.blue,frame:i=U.wood}={}){let s=new rt,a=j(n,.35,t,i);s.add(a);let o=j(n-.1,.18,t-.1,U.white);o.position.y=.35,s.add(o);let r=j(n-.05,.1,t*.6,e);r.position.set(0,.5,t*.18),s.add(r);let l=j(n*.6,.12,.35,U.white);l.position.set(0,.53,-t/2+.3),s.add(l);let c=j(n,.9,.08,i);return c.position.set(0,0,-t/2),s.add(c),ne(s)}function Is({w:n=1.4,d:t=.9,h:e=.75,color:i=U.wood,round:s=!1}={}){let a=new rt,o=s?Se(n/2,n/2,.08,10,i):j(n,.08,t,i);if(o.position.y=e-.08,a.add(o),s){a.add(Se(.06,.08,e-.08,5,vi(i,.85)));let r=Se(.3,.32,.04,8,vi(i,.85));a.add(r)}else for(let r of[-1,1])for(let l of[-1,1]){let c=j(.07,e-.08,.07,vi(i,.85));c.position.set(r*(n/2-.08),0,l*(t/2-.08)),a.add(c)}return ne(a)}function pp(n=U.wood){let t=new rt,e=j(.45,.06,.45,n);e.position.y=.44,t.add(e);let i=j(.45,.5,.06,n);i.position.set(0,.5,-.2),t.add(i);for(let s of[-.19,.19])for(let a of[-.19,.19]){let o=j(.05,.44,.05,vi(n,.85));o.position.set(s,0,a),t.add(o)}return ne(t)}function mp(n=U.woodDark){let t=new rt,e=new rt;t.add(e);for(let o of[-.28,.28]){let r=As(.9,.035,3,12,n,.9);r.rotation.z=Math.PI+1.12,r.position.set(0,.92,o),e.add(r)}let i=j(.6,.07,.6,n);i.position.y=.45,e.add(i);let s=j(.52,.08,.52,U.pink);s.position.y=.52,e.add(s);let a=j(.6,.75,.06,n);a.position.set(0,.55,-.28),a.rotation.x=-.18,e.add(a);for(let o of[-.27,.27])for(let r of[-.25,.25]){let l=j(.05,.38,.05,n);l.position.set(o,.08,r),e.add(l)}return t.userData.rock=e,ne(t)}function kd(n=9414856){let t=new rt,e=j(2,.45,.85,n);e.position.y=.05,t.add(e);let i=j(2,.55,.22,vi(n,.92));i.position.set(0,.45,-.32),t.add(i);for(let s of[-.92,.92]){let a=j(.18,.3,.85,vi(n,.92));a.position.set(s,.45,0),t.add(a)}for(let s of[-.45,.45]){let a=j(.85,.12,.6,vi(n,1.06));a.position.set(s,.5,.08),t.add(a)}return ne(t)}function bl(n=2.4,t=1.8,e=U.pink,i=U.cream,s=!1){let a=new rt;if(s){a.add(nn(n/2,i,14,.008));let o=nn(n/2-.15,e,14,.012);a.add(o)}else a.add(Wi(n,t,i,.008)),a.add(Wi(n-.25,t-.25,e,.012));return a}function Ld(n=1.2,t=1.8){let e=new rt,i=j(n,t,.35,U.woodDark);e.add(i);let s=fe(Math.round(n*100+t*10)),a=[U.red,U.navy,U.yellow,U.green,U.pink,U.teal,U.cream];for(let o=0;o<3;o++){let r=.15+o*(t/3),l=j(n-.06,.04,.33,U.wood);l.position.set(0,r-.04,.02),e.add(l);let c=-n/2+.08;for(;c<n/2-.15;){let h=s.range(.06,.12),d=s.range(.25,.42),u=j(h,d,.25,s.pick(a));u.position.set(c+h/2,r,.06),u.rotation.z=s()<.1?.15:0,e.add(u),c+=h+.01}}return ne(e)}function Ml({h:n=1.5,shade:t=16508868,lit:e=!0,table:i=!1}={}){let s=new rt,a=i?.45:n;s.add(Se(.12,.15,.04,8,9076596)),s.add(Se(.02,.02,a,4,9076596));let o=Se(.14,.24,.3,8,t,e?{emissive:16767392,emissiveIntensity:1.1}:{});if(o.position.y=a-.1,s.add(o),e){let r=Ge(16766880,i?1.4:2.2,.5);r.position.y=a,s.add(r)}return ne(s)}function gp(n=3){let t=new rt,e=[U.red,U.yellow,U.blue,U.green,U.pink];for(let i=0;i<n;i++){let s=j(.22,.22,.22,e[i%e.length]);s.position.set(i*.3-.3,0,i%2*.15),s.rotation.y=i*.4,t.add(s)}return ne(t)}function So(n=13081198){let t=new rt,e=me(.15,0,n,.02);e.position.y=.15,e.scale.y=1.1,t.add(e);let i=me(.11,0,n,.02);i.position.y=.36,t.add(i);for(let a of[-.08,.08]){let o=me(.045,0,n);o.position.set(a,.45,0),t.add(o)}let s=me(.04,0,15257520);return s.position.set(0,.34,.1),t.add(s),ne(t)}function yp(n=U.yellow){let t=new rt,e=me(.12,0,n);e.scale.set(1.3,.8,1),e.position.y=.08,t.add(e);let i=me(.07,0,n);i.position.set(.1,.18,0),t.add(i);let s=Fi(.03,.07,4,15764538);return s.rotation.z=-Math.PI/2,s.position.set(.18,.17,0),t.add(s),ne(t)}function Dd(n=!0,t=!0){let e=new rt;e.add(j(.5,.025,.35,10133672));let i=new rt;i.position.set(0,.025,-.17),e.add(i);let s=j(.5,.34,.02,10133672);i.add(s);let a=j(.45,.29,.01,13625087,{emissive:12573951,emissiveIntensity:1.4});return a.position.set(0,.025,.012),i.add(a),i.rotation.x=n?-.25:-Math.PI/2,ne(e)}function Eo(){let n=new rt,t=j(.12,.02,.22,2829107);n.add(t);let e=j(.1,.005,.19,13625087,{emissive:12573951,emissiveIntensity:1.5});return e.position.y=.02,n.add(e),n}function xp(){let n=new rt,t=j(1.6,1.3,.5,12101786);n.add(t);let e=j(.9,.7,.1,2760736);e.position.set(0,.1,.22),n.add(e);let i=j(1.8,.1,.6,U.woodDark);i.position.y=1.3,n.add(i);let s=new rt;s.position.set(0,.12,.3);for(let o=0;o<3;o++){let r=Fi(.12-o*.02,.35-o*.05,5,[16751162,16760906,16742954][o],{emissive:[16742944,16756784,16734736][o],emissiveIntensity:2.5});r.position.x=(o-1)*.15,r.castShadow=!1,s.add(r)}let a=Ge(16751184,2.2,.7);return a.position.y=.2,s.add(a),n.add(s),n.userData.fire=s,n.userData.update=(o,r)=>{s.children.forEach((l,c)=>{l.isMesh&&(l.scale.y=.85+Math.sin(r*9+c*2)*.15)})},ne(n)}function vp(n=2.4){let t=new rt,e=j(n,.85,.6,U.white);t.add(e);let i=j(n+.05,.06,.65,14208964);i.position.y=.85,t.add(i);for(let s=0;s<Math.floor(n/.6);s++){let a=j(.1,.03,.03,10066329);a.position.set(-n/2+.3+s*.6,.65,.31),t.add(a)}return ne(t)}function wp(){let n=new rt;n.add(j(.7,.85,.6,15262942));let t=j(.72,.04,.62,4473924);t.position.y=.85,n.add(t);let e=Se(.17,.15,.05,10,3355443);e.position.set(.12,.9,.05),n.add(e);let i=j(.25,.03,.04,3355443);return i.position.set(.4,.92,.05),n.add(i),ne(n)}function _p(){let n=new rt;n.add(j(.75,1.8,.65,15921386));let t=j(.73,.02,.02,12303291);t.position.set(0,1.15,.33),n.add(t);let e=j(.03,.4,.04,11184810);return e.position.set(.3,1.35,.34),n.add(e),ne(n)}function Tl(n=1){let t=new rt;t.add(Se(.16*n,.12*n,.28*n,7,U.terracotta));for(let e=0;e<5;e++){let i=Fi(.07*n,.5*n,3,U.green);i.position.y=.25*n,i.rotation.z=(e-2)*.35,i.rotation.y=e*1.2,t.add(i)}return ne(t)}function Sa(n=U.wood,t=null,e=.5,i=.4){let s=new rt;s.add(mn(e,i,.04,n));let a=new bt(new Ue(e*.8,i*.8),t?new Pe({map:t}):pe(15787736));return a.position.z=.025,s.add(a),s}function Ud(n=.6){let t=new rt;t.add(j(n,n*.8,n,13214323));let e=j(n*.12,.01,n+.01,14205850);return e.position.y=n*.8,t.add(e),ne(t)}function Sl(n=3){let t=new rt;if(n>=1){let e=me(.42,1,U.snow,.03);e.position.y=.36,t.add(e)}if(n>=2){let e=me(.3,1,U.snow,.03);e.position.y=.95,t.add(e)}if(n>=3){let e=me(.21,1,U.snow,.02);e.position.y=1.38,t.add(e)}if(n>=4){let e=Fi(.04,.22,5,15764538);e.rotation.x=Math.PI/2,e.position.set(0,1.38,.2),t.add(e);for(let i of[-.07,.07]){let s=Xi(.025,5,4,2236962);s.position.set(i,1.45,.18),t.add(s)}for(let i=0;i<3;i++){let s=Xi(.03,5,4,2236962);s.position.set(0,.85+i*.13,.29-Math.abs(i-1)*.02),t.add(s)}}if(n>=5){let e=As(.22,.05,4,10,U.red);e.rotation.x=Math.PI/2,e.position.y=1.2,t.add(e);let i=Se(.15,.15,.22,8,3355443);i.position.y=1.55,t.add(i);let s=Se(.24,.24,.03,10,3355443);s.position.y=1.55,t.add(s);for(let a of[-1,1]){let o=Se(.015,.02,.5,3,U.trunk);o.rotation.z=a*1.1,o.position.set(a*.28,1,0),t.add(o)}}return ne(t)}function El(n=U.red,t=U.yellow,e=.4){let i=new rt;i.add(j(e,e*.8,e,n));let s=j(e+.01,e*.8+.01,e*.15,t);i.add(s);let a=j(e*.15,e*.8+.01,e+.01,t);return i.add(a),ne(i)}function Al(n=10115658){let t=new rt;t.add(j(.5,.08,.38,n));let e=j(.47,.06,.35,U.white);return e.position.set(.01,.01,0),t.add(e),ne(t)}function Ao(n=U.white){let t=new rt;t.add(Se(.06,.055,.12,8,n));let e=As(.035,.012,4,8,n);return e.position.set(.065,.06,0),t.add(e),t}function bp(n=U.red){let t=new rt,e=j(.5,.06,1,n);e.position.y=.12,t.add(e);for(let i of[-.22,.22]){let s=j(.04,.12,1,5592405);s.position.set(i,0,0),t.add(s)}return ne(t)}function Rl(){let n=new rt,t=j(1.4,.75,.6,U.woodLight);n.add(t);let e=j(1.2,.35,.04,U.yellow);e.position.set(0,1.5,.25),n.add(e);for(let s of[-.65,.65]){let a=j(.06,1.7,.06,U.wood);a.position.set(s,0,.25),n.add(a)}let i=Se(.12,.12,.3,8,16774048,{transparent:!0,opacity:.85});i.position.set(-.3,.75,0),n.add(i);for(let s=0;s<3;s++){let a=Se(.05,.04,.12,6,U.white);a.position.set(.1+s*.15,.75,.05),n.add(a)}return ne(n)}function Nd(n){let t=new rt,e=new bt(new Ue(.6,.45),new Pe({map:n,side:Te}));return t.add(e),t}var U,Ed,Ad,ml,rp,ii=No(()=>{Be();He();U={grass:10735474,grassSpring:11655562,grassDark:8631130,grassAutumn:13153378,grassDry:13482874,snow:15988474,snowShade:14673647,ice:13624562,dirt:10253399,dirtDark:7361088,rock:9604496,rockDark:7301744,sand:15587496,wood:12290911,woodDark:8871999,woodLight:14465164,trunk:8215107,birch:15657182,cream:16050390,white:16513266,pink:15911364,peach:16238243,blue:11126502,navy:4018042,red:14243914,terracotta:13199692,yellow:15979371,green:7319146,teal:6271912,lilac:12297949,slate:7306636,stone:13616827,asphalt:7106424,sidewalk:14209736,water:7321561,leafSummer:8372058,leafSpring:10474606,blossom:16169160,blossomLight:16503774,leafAutumn:14916155,leafAutumn2:13787198,leafAutumn3:15646794,pine:5214050,skin:[16176056,15317140,13209190,10118980,7227956]},Ed=new Map;Ad=new Map;ml=null;rp={spring:[U.leafSpring,9423459,11918980],summer:[U.leafSummer,6989903,9488482],autumn:[U.leafAutumn,U.leafAutumn2,U.leafAutumn3],winter:[15330803,14673390,16054010],blossom:[U.blossom,U.blossomLight,15836859]}});var Ap={};o0(Ap,{Character:()=>Aa,Dog:()=>ss,LOOKS:()=>Fe,childLook:()=>os,youLook:()=>as});function Po(n,t){let e=qt(t,0,80);for(let i=0;i<Co.length-1;i++)if(e<=Co[i+1]){let s=(e-Co[i])/(Co[i+1]-Co[i]);return $e(Ll[n][i],Ll[n][i+1],s)}return Ll[n][Ll[n].length-1]}function Qw(){let n=new Ei(1,2),t=n.attributes.position;for(let e=0;e<t.count;e++){let i=t.getX(e),s=t.getY(e),a=t.getZ(e);if(s<-.05){let o=1-qt((-.05-s)*.42,0,.32);i*=o,a*=$e(1,o,.6)}a<0&&(a*=1.06),a>.6&&(a=.6+(a-.6)*.75),s*=1.07,t.setXYZ(e,i,s,a)}return n.computeVertexNormals(),n}function as(n){let t=x.state.identity==="father"?Fe.youFather:Fe.youMother;return n<1.5?{...Fe.baby}:n<9?{...t,hairStyle:x.state.identity==="father"?"short":"ponytail",shirt:15976010,pants:5929656}:n<18?{...t,hairStyle:x.state.identity==="father"?"short":"ponytail",shirt:14711402,pants:4018042}:{...t}}function os(n){let t=x.state.childKind==="son"?Fe.childSon:Fe.childDaughter;return n<1.5?{...Fe.baby,shirt:13624309,pants:13624309,shoes:13624309}:{...t}}var Co,Ll,se,Aa,ss,Fe,Ds=No(()=>{Be();He();ii();Co=[0,1,2,4,7,10,13,16,22,40,60,80],Ll={leg:[.12,.16,.21,.31,.41,.51,.62,.72,.76,.76,.74,.68],torso:[.2,.22,.26,.31,.37,.43,.49,.55,.58,.6,.58,.55],width:[.16,.17,.18,.19,.2,.22,.24,.27,.29,.31,.31,.29],head:[.16,.165,.17,.175,.18,.182,.184,.185,.185,.185,.183,.178],arm:[.14,.17,.2,.26,.32,.38,.44,.5,.53,.53,.51,.49]};se={head:Qw(),torso:(()=>{let n=[[0,0],[.86,0],[.88,.14],[.8,.34],[.86,.58],[.98,.78],[.94,.9],[.62,.99],[.32,1]].map(([t,e])=>new it(t,e));return new zr(n,9)})(),pelvis:(()=>{let n=new ei(.95,.8,1,9);return n.translate(0,-.5,0),n})(),limb:(()=>{let n=new ei(1,.86,1,7);return n.translate(0,-.5,0),n})(),joint:new Ei(1,1),hand:(()=>{let n=new Ei(1,1);return n.scale(1,1.15,.78),n})(),foot:(()=>{let n=new Ai(1,8,5,0,Math.PI*2,0,Math.PI*.55);return n.scale(1,1.6,1),n.translate(0,-.35,0),n})(),neck:(()=>{let n=new ei(1,1.1,1,7);return n.translate(0,.5,0),n})(),eye:new Ai(1,8,6),ball:new Ei(1,1),ball0:new Ei(1,0),box:new gi(1,1,1),smile:new kn(1,.22,4,10,Math.PI),skirt:new ei(.62,1,1,10,1,!0),cap:new Ai(1,14,8,0,Math.PI*2,0,Math.PI*.52),back:new Ai(1,14,8,Math.PI,Math.PI,Math.PI*.25,Math.PI*.5),bang:(()=>{let n=new ts(1,1,4);return n.rotateX(Math.PI),n.translate(0,-.5,0),n})(),shell:new ei(1,1.06,1,14,1,!0,.75,Math.PI*2-1.5),scarfSeg:(()=>{let n=new gi(1,1,.3);return n.translate(0,-.5,0),n})()},Aa=class{constructor(t={}){this.opts={age:30,skin:U.skin[0],hair:5913386,hairStyle:"short",shirt:U.blue,pants:U.navy,shoes:4864566,dress:!1,name:"",glasses:!1,beard:!1,scarf:null,hat:null,...t},this.name=this.opts.name,this.root=new rt,this.root.rotation.order="YXZ",this.root.userData.character=this,this.position=this.root.position,this.heading=0,this.targetHeading=0,this.speed=0,this.walkPhase=0,this.pose="idle",this.anim={},this.moveTarget=null,this.followTarget=null,this.carried=null,this.carriedBy=null,this.extraY=0,this.lookTarget=null,this.lean=0,this.tilt=0,this.blinkT=Math.random()*3,this._build(),this.setAge(this.opts.age),x.world?.addCharacter(this)}_build(){let t=this.opts;this.mSkin=sn(t.skin,{roughness:.75}),this.mSkinShade=sn(vi(t.skin,.9),{roughness:.8}),this.mHair=sn(t.hair,{roughness:.7,side:Te}),this.mShirt=sn(t.shirt),this.mPants=sn(t.pants),this.mShoe=sn(t.shoes),this.mEye=pe(2760752,{roughness:.25}),this.mWhite=pe(16777215,{emissive:16777215,emissiveIntensity:.6}),this.mMouth=pe(10111568),this.mCheek=pe(15768216,{roughness:1});let e=(a,o,r)=>{let l=new bt(a,o);return l.castShadow=!0,r.add(l),l};this._mesh=e,this.body=new rt,this.root.add(this.body),this.pelvis=e(se.pelvis,t.dress?this.mShirt:this.mPants,this.body),this.torsoPivot=new rt,this.body.add(this.torsoPivot),this.torso=e(se.torso,this.mShirt,this.torsoPivot),this.neck=e(se.neck,this.mSkin,this.torsoPivot),this.headPivot=new rt,this.torsoPivot.add(this.headPivot),this.head=e(se.head,this.mSkin,this.headPivot),this.skirt=null,t.dress&&(this.skirt=e(se.skirt,this.mShirt,this.body),this.skirt.material=sn(t.shirt,{side:Te}));let i=this.head;this.eyes=[],this.lids=[];for(let a of[-1,1]){let o=e(se.eye,this.mEye,i);o.position.set(a*.33,.04,.83),o.scale.set(.105,.14,.06),o.castShadow=!1,this.eyes.push(o);let r=e(se.eye,this.mWhite,o);r.position.set(.35*a,.35,.8),r.scale.setScalar(.32),r.castShadow=!1;let l=e(se.box,this.mHair,i);l.position.set(a*.34,.27,.83),l.scale.set(.2,.045,.05),l.rotation.z=-a*.12,l.castShadow=!1,this.brows=(this.brows||[]).concat(l);let c=e(se.eye,this.mCheek,i);c.position.set(a*.52,-.2,.7),c.scale.set(.13,.08,.05),c.castShadow=!1;let h=e(se.ball,this.mSkin,i);h.position.set(a*.96,-.02,-.02),h.scale.set(.13,.22,.14)}if(this.nose=e(se.ball,this.mSkinShade,i),this.nose.position.set(0,-.12,.92),this.nose.scale.set(.11,.1,.1),this.nose.castShadow=!1,this.mouthSmile=e(se.smile,this.mMouth,i),this.mouthSmile.position.set(0,-.36,.84),this.mouthSmile.rotation.z=Math.PI,this.mouthSmile.scale.set(.11,.1,.1),this.mouthSmile.castShadow=!1,this.mouthOpen=e(se.eye,this.mMouth,i),this.mouthOpen.position.set(0,-.38,.84),this.mouthOpen.scale.set(.1,.08,.05),this.mouthOpen.visible=!1,this.mouthSad=e(se.smile,this.mMouth,i),this.mouthSad.position.set(0,-.44,.83),this.mouthSad.scale.set(.1,.09,.1),this.mouthSad.visible=!1,this.hair=new rt,i.add(this.hair),this._buildHair(),t.glasses){let a=pe(3813430);for(let r of[-1,1]){let l=new bt(new kn(.19,.035,4,12),a);l.position.set(r*.33,.05,.9),i.add(l)}let o=new bt(se.box,a);o.position.set(0,.07,.95),o.scale.set(.18,.035,.035),i.add(o)}if(t.beard){let a=new bt(new Ai(1,12,6,0,Math.PI*2,Math.PI*.45,Math.PI*.55),this.mHair);a.scale.set(.72,.5,.7),a.position.set(0,-.3,.2),i.add(a),this.beardM=a,this.mouthSmile.position.z=.9,this.mouthOpen.position.z=.9}if(this.armL=this._limb(this.torsoPivot,this.mShirt,this.mSkin,!0),this.armR=this._limb(this.torsoPivot,this.mShirt,this.mSkin,!0),this.legL=this._limb(this.body,this.mPants,this.mShoe,!1),this.legR=this._limb(this.body,this.mPants,this.mShoe,!1),t.scarf){let a=sn(t.scarf,{side:Te});this.scarfM=new bt(new kn(1,.38,5,10),a),this.scarfM.rotation.x=Math.PI/2,this.torsoPivot.add(this.scarfM),this.scarfTail=[];let o=this.torsoPivot;for(let r=0;r<4;r++){let l=new rt;o.add(l);let c=new bt(se.scarfSeg,a);c.castShadow=!0,l.add(c),l.userData.m=c,this.scarfTail.push(l),o=l,l.userData.a=.2}}if(t.hat){this.hatM=new rt;let a=new bt(new Ai(1,12,6,0,Math.PI*2,0,Math.PI/2),pe(t.hat));a.castShadow=!0,this.hatM.add(a);let o=new bt(new ei(1.02,1.04,.22,12,1,!0),pe(vi(t.hat,.8),{side:Te}));o.position.y=.05,this.hatM.add(o);let r=new bt(se.ball,pe(16775408));r.position.y=1.05,r.scale.setScalar(.25),this.hatM.add(r),this.hatM.position.y=.22,this.hatM.scale.setScalar(1.1),i.add(this.hatM),this.hair.visible=this.opts.hairStyle==="long"}this.cane=null;let s=new bt(new fa(1,16),new Pe({color:1708064,transparent:!0,opacity:.16,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.012,this.root.add(s),this.blob=s}_limb(t,e,i,s){let a=new rt;t.add(a);let o=new bt(se.limb,e);o.castShadow=!0,a.add(o);let r=new rt;a.add(r);let l=new bt(se.joint,e);l.castShadow=!0,r.add(l);let c=new bt(se.limb,e);c.castShadow=!0,r.add(c);let h=new bt(s?se.hand:se.foot,i);return h.castShadow=!0,r.add(h),{pivot:a,upper:o,joint:r,knob:l,lower:c,end:h,isArm:s}}_buildHair(){let t=this.opts,e=this.hair;for(;e.children.length;)e.remove(e.children[0]);let i=(o,r,l,c=[0,0,0])=>{let h=new bt(o,this.mHair);return h.castShadow=!0,typeof r=="number"?h.scale.setScalar(r):h.scale.set(...r),h.position.set(...l),h.rotation.set(...c),e.add(h),h},s=(o=-.32,r=1.08)=>i(se.cap,[r,r*.98,r],[0,.04,-.02],[o,0,0]),a=(o,r,l=0,c=.62,h=1.1)=>{for(let d=0;d<o;d++){let u=(d/(o-1)-.5)*h,p=i(se.bang,[.2,r*(.85+.3*Math.abs(Math.sin(d*2.3))),.13],[Math.sin(u)*.98,c,Math.cos(u)*.86],[.55,u,l+u*.25]);p.position.y+=Math.cos(u*2)*.03}};switch(this.tail=null,t.hairStyle){case"none":break;case"baby":{let o=i(se.ball0,[.16,.3,.16],[.05,1.04,.15],[.2,0,-.5]);i(se.ball0,[.1,.18,.1],[-.12,1,.25],[.4,0,.6]);break}case"bald":{i(se.back,[1.04,.62,1.04],[0,-.14,-.02]);for(let o of[-1,1])i(se.ball0,[.18,.2,.3],[o*.9,.06,-.25],[0,o*.3,0]);break}case"long":{s(-.3,1.09),i(se.back,[1.08,1,1.1],[0,-.05,-.02]);let o=i(se.shell,[1.06,1.5,1.04],[0,-.55,-.02]);for(let r of[-1,1])i(se.box,[.22,1.25,.42],[r*.94,-.45,.22],[0,0,r*.08]);a(5,.42,.25,.66,1.25),this.tail=o;break}case"ponytail":{s(-.3,1.08),i(se.back,[1.07,.96,1.08],[0,-.03,-.02]),a(4,.34,.35,.66,1);let o=i(se.ball0,.17,[0,.36,-1]),r=new rt;r.position.set(0,.32,-1.05),e.add(r);let l=r;[.3,.27,.21].forEach((c,h)=>{let d=new rt;d.position.y=h===0?0:-.36,l.add(d);let u=new bt(se.ball,this.mHair);u.scale.set(c,c*1.45,c),u.position.y=-.2,u.castShadow=!0,d.add(u),l=d}),r.rotation.x=.35,this.tail=r;break}case"bun":{s(-.25,1.07),i(se.back,[1.06,.95,1.08],[0,-.02,-.02]),i(se.ball,[.42,.38,.42],[0,.82,-.62]);for(let o of[-1,1])i(se.bang,[.12,.45,.1],[o*.86,.15,.5],[.1,0,o*.12]);break}case"curly":{s(-.25,1.06);let o=26;for(let r=0;r<o;r++){let l=1-r/(o-1)*1.15,c=Math.sqrt(Math.max(0,1-l*l)),h=r*2.39996,d=Math.cos(h)*c,u=Math.sin(h)*c;u>.45&&l<.55||i(se.ball0,.3+r%3*.04,[d*1.02,l*1+.08,u*1.02-.02],[r,r*.7,0])}break}case"bob":{s(-.3,1.1),i(se.shell,[1.12,.95,1.1],[0,-.22,-.02]),a(6,.36,0,.66,1.3);break}default:s(-.35,1.07),i(se.back,[1.06,.82,1.08],[0,0,-.02]),a(5,.3,.55,.68,1.05),i(se.ball0,[.35,.22,.35],[.35,.92,.25],[0,0,-.4])}}setAge(t){this.age=t;let e=Po("leg",t),i=Po("torso",t),s=Po("width",t),a=Po("arm",t),o=Po("head",t),r=e*.49,l=e*.43,c=e*.08,h=.035+s*.2,d=.03+s*.13;this.dims={leg:e,torso:i,w:s,hr:o,arm:a,thigh:r,shin:l,footH:c,lr:h,ar:d},this.body.position.y=e,this.pelvis.scale.set(s*.95,.1+e*.06,s*.7),this.torsoPivot.position.y=0,this.torso.scale.set(s,i,s*.74);let u=.03+o*.18;this.neck.position.y=i*.96,this.neck.scale.set(o*.34,u,o*.32),this.headPivot.position.y=i+u+o*.82,this.head.scale.setScalar(o),this.skirt&&(this.skirt.scale.set(s*1.35,e*.62,s*1.15),this.skirt.position.y=-e*.28);for(let[f,y]of[[this.armL,-1],[this.armR,1]]){f.pivot.position.set(y*(s*.9+d*.6),i*.84,0);let m=a*.5,w=a*.44;f.upper.scale.set(d,m,d),f.joint.position.y=-m,f.knob.scale.setScalar(d*.95),f.lower.scale.set(d*.9,w,d*.9);let v=d*1.25;f.end.scale.setScalar(v),f.end.position.set(0,-w-v*.7,0),f.len=[m,w]}for(let[f,y]of[[this.legL,-1],[this.legR,1]])f.pivot.position.set(y*s*.44,-.02,0),f.upper.scale.set(h,r,h),f.joint.position.y=-r,f.knob.scale.setScalar(h*.95),f.lower.scale.set(h*.9,l,h*.9),f.end.scale.set(h*1.15,c,h*1.75),f.end.position.set(0,-l-c*.25,h*.55),f.len=[r,l];this.scarfM&&(this.scarfM.scale.set(o*.5,o*.45,o*.42),this.scarfM.position.y=i*.97,this.scarfTail.forEach((f,y)=>{let m=.06+i*.14;y===0?f.position.set(s*.25,i*.95,-s*.62):f.position.y=-f.userData.len,f.userData.len=m,f.userData.m.scale.set(.08+s*.15,m,1)})),this.blob.scale.setScalar(s*1.7+.08);let p=new Lt(this.opts.hair),g=new Lt(14473428);return this.mHair.color.copy(p).lerp(g,qt((t-48)/25,0,.92)),this.height=e+i+u+o*1.9,this.radius=Math.max(.18,s*1.15),this.hunch=qt((t-65)/15,0,1)*.22,this}setOutfit({shirt:t,pants:e,hair:i,hairStyle:s,shoes:a}={}){t!==void 0&&(this.mShirt.color.setHex(t),this.skirt&&this.skirt.material.color.setHex(t)),e!==void 0&&this.mPants.color.setHex(e),a!==void 0&&this.mShoe.color.setHex(a),i!==void 0&&(this.opts.hair=i,this.setAge(this.age)),s!==void 0&&s!==this.opts.hairStyle&&(this.opts.hairStyle=s,this._buildHair())}giveCane(t=!0){if(t&&!this.cane){this.cane=new rt;let e=new bt(new ei(.018,.018,.85,5),pe(U.woodDark));e.position.y=-.38,this.cane.add(e);let i=new bt(new kn(.06,.018,4,8,Math.PI),pe(U.woodDark));i.position.set(.06,.04,0),this.cane.add(i),this.armR.end.add(this.cane),this.cane.scale.setScalar(1/this.armR.end.scale.x)}else!t&&this.cane&&(this.cane.parent.remove(this.cane),this.cane=null)}place(t,e,i=null){return this.position.set(t,0,e),i!==null&&(this.heading=this.targetHeading=i),this.moveTarget=null,this.path=null,this}face(t,e){return this.targetHeading=Math.atan2(t-this.position.x,e-this.position.z),this}faceChar(t){return this.face(t.position.x,t.position.z)}faceNow(t,e){return this.face(t,e),this.heading=this.targetHeading,this}get walkSpeed(){if(this._speedOverride)return this._speedOverride;let t=this.age;return t<1.3?1.1:t<3?1.5:t<10?3:t<18?3.4:t<60?2.9:1.6}set walkSpeed(t){this._speedOverride=t}walkTo(t,e,i={}){return new Promise(s=>{this.moveTarget={x:t,z:e,speed:i.speed??this.walkSpeed,resolve:s,stopDist:i.stopDist??.05}})}async walkPath(t,e={}){for(let[i,s]of t)await this.walkTo(i,s,e)}walkToChar(t,e=.8,i={}){let s=this.position.x-t.position.x,a=this.position.z-t.position.z,o=Math.hypot(s,a)||1;return this.walkTo(t.position.x+s/o*e,t.position.z+a/o*e,i).then(()=>this.faceChar(t))}stop(){if(this.moveTarget){let t=this.moveTarget.resolve;this.moveTarget=null,t&&t()}}follow(t,e=1.2){this.followTarget=t?{c:t,dist:e}:null}lookAt(t){this.lookTarget=t}setPose(t,e={}){return this.pose=t,this.anim=e,this}pickUp(t){this.carried=t,t.carriedBy=this,t.moveTarget=null,t.followTarget=null,t.setPose("carried")}putDown(t,e){let i=this.carried;i&&(this.carried=null,i.carriedBy=null,i.root.rotation.set(0,0,0),t!==void 0?i.place(t,e,this.heading):i.place(this.position.x+Math.sin(this.heading)*.6,this.position.z+Math.cos(this.heading)*.6,this.heading),i.extraY=0,i.setPose("idle"))}headWorld(){let t=new P;return this.head.getWorldPosition(t),t.y+=this.dims.hr*1.45,t}update(t,e){let i=!1;if(this.carriedBy){let s=this.carriedBy,a=s.heading,o=s.pose==="carryHigh",r=o?.16:.2+s.dims.w*.25;this.position.set(s.position.x+Math.sin(a)*r,s.position.y+s.body.position.y+s.dims.torso*(o?.75:.42)-this.dims.leg*.35,s.position.z+Math.cos(a)*r),this.heading=this.targetHeading=a+(o?Math.PI:Math.PI*.5)}else if(this.moveTarget){let s=this.moveTarget,a=s.x-this.position.x,o=s.z-this.position.z,r=Math.hypot(a,o);if(r<=Math.max(s.stopDist,.02))this.moveTarget=null,s.resolve&&s.resolve();else{this._npcV=Math.min(s.speed,(this._npcV||0)+s.speed*t*4);let l=Math.min(this._npcV,Math.max(.35*s.speed,r*3)),c=Math.min(l*t,r);this.position.x+=a/r*c,this.position.z+=o/r*c,this.targetHeading=Math.atan2(a,o),this.speed=l,i=!0}}else if(this.followTarget){let{c:s,dist:a}=this.followTarget,o=yo(this.position.x,this.position.z,s.position.x,s.position.z);if(o>a){let r=Math.min(Math.max(this.walkSpeed,s.speed||0)*t*(o>a*2?1.4:1),o-a),l=s.position.x-this.position.x,c=s.position.z-this.position.z;this.position.x+=l/o*r,this.position.z+=c/o*r,this.targetHeading=Math.atan2(l,c),this.speed=this.walkSpeed,i=!0}}if(!i&&!this._playerMoving&&(this.speed=Ui(this.speed,0,9,t),this._npcV=0),this.heading=gd(this.heading,this.targetHeading,1-Math.exp(-9*t)),this.root.rotation.y=this.heading,!this.carriedBy){let s=this.pose==="lie"||this.pose==="lieBack"||this.pose==="sleep";this._lift=Ui(this._lift||0,s?this.dims.w*.75:0,10,t),this.position.y=this.extraY+this._lift}this._animate(t,e)}_animate(t,e){let i=this.dims,s=this.anim,a=this.speed>.12,o=this.pose,r=this.age<1.3,l=this.age>=1.3&&this.age<2.6,c=this.age>68;o==="idle"&&a&&(o=r?"crawl":"walk"),o==="crawl"&&!a&&(o="crawlIdle");let h=r?1.25:l?1.9:c?1.25:1.6;this.walkPhase+=t*(this.speed/Math.max(.2,i.leg))*h;let d=this.walkPhase,u=Math.sin(d),p=Math.cos(d),g=Math.sin(e*2.1)*.012,f={bodyY:i.leg,bodyZ:0,bodyRX:0,sway:Math.sin(e*.7)*.012,torsoRX:this.hunch+g,torsoRY:0,headRX:0,headRZ:0,aL:.04,aR:.04,aLo:.12,aRo:.12,eL:-.18,eR:-.18,lL:0,lR:0,lLo:.03,lRo:.03,kL:.04,kR:.04,rootRX:0},y="smile";switch(o){case"walk":{if(l)f.lL=u*.45,f.lR=-u*.45,f.kL=.2+Math.max(0,p)*.7,f.kR=.2+Math.max(0,-p)*.7,f.lLo=f.lRo=.16,f.aL=f.aR=-.75,f.aLo=f.aRo=.55+Math.sin(d*2)*.08,f.eL=f.eR=-.5,f.sway=u*.1,f.bodyY=i.leg-.02+Math.abs(p)*.035,f.torsoRX+=.06,f.headRZ=-u*.08;else{let T=this.speed>3.2,E=qt(this.speed/3.2,.3,T?.95:.7)*(c?.6:1);f.lL=u*E,f.lR=-u*E,f.kL=.08+Math.max(0,p)*E*1.5,f.kR=.08+Math.max(0,-p)*E*1.5,f.aL=-u*E*.75,f.aR=u*E*.75,f.eL=-.25-Math.max(0,u)*E*.6,f.eR=-.25-Math.max(0,-u)*E*.6,f.bodyY=i.leg-.012-Math.abs(u)*i.leg*.05+(T?Math.abs(p)*.04:0),f.torsoRY=u*.1,f.sway=u*.035,f.torsoRX+=.04+(T?.16:0),f.headRX=-f.torsoRX*.5,this.cane&&(f.aR=-.35+u*.15,f.eR=-.3)}y="smile";break}case"crawl":case"crawlIdle":{let T=o==="crawl"?1:0,E=1.12;f.bodyRX=E,f.bodyY=i.thigh*.95+i.lr,f.torsoRX=.05,f.headRX=-.95-.1*T*Math.abs(u),f.lL=-E+u*.38*T,f.lR=-E-u*.38*T,f.kL=1.55-Math.max(0,u)*.3*T,f.kR=1.55-Math.max(0,-u)*.3*T,f.lLo=f.lRo=.12,f.aL=-E-u*.38*T,f.aR=-E+u*.38*T,f.eL=-.1-Math.max(0,-u)*.4*T,f.eR=-.1-Math.max(0,u)*.4*T,f.aLo=f.aRo=.1,f.sway=u*.06*T,f.bodyY+=Math.abs(p)*.012*T,f.headRZ=u*.06*T;break}case"sitGround":{f.bodyY=i.lr+.015,f.lL=f.lR=-1.5,f.kL=f.kR=r?.25:.12,f.lLo=f.lRo=r?.42:.15,f.aL=f.aR=s.reach?-2.75:-.35,f.eL=f.eR=s.reach?-.15:-.5,f.aLo=f.aRo=s.reach?.25:.14,f.torsoRX=.08+g-(s.look?.12:0),f.headRX=s.look??0,r&&(f.sway=Math.sin(e*1.3)*.04);break}case"sit":f.bodyY=s.h??.45,f.lL=f.lR=-1.5,f.kL=f.kR=1.45,f.aL=f.aR=-.45,f.eL=f.eR=-.65,f.aLo=f.aRo=.05,f.bodyZ=-.08;break;case"lie":f.rootRX=-Math.PI/2,f.bodyY=.12,f.aLo=f.aRo=.25,f.kL=.15;break;case"lieBack":f.rootRX=-Math.PI/2,f.bodyY=.12,f.aLo=f.aRo=1.35+Math.sin(e*2)*.15*(s.wave??0),f.lLo=f.lRo=.25;break;case"sleep":f.rootRX=-Math.PI/2,f.bodyY=.12,f.aL=f.aR=-.3,f.eL=f.eR=-.9,f.aLo=f.aRo=.15,f.kL=f.kR=.35,f.lL=f.lR=-.3,y="sleep";break;case"kneel":f.bodyY=i.thigh+i.lr+.02,f.lL=.05,f.kL=1.55,f.lR=-1.45,f.kR=1.45,f.torsoRX+=.12,f.aL=f.aR=-.55,f.eL=f.eR=-.5;break;case"kneelOpen":f.bodyY=i.thigh+i.lr+.02,f.lL=.05,f.kL=1.55,f.lR=-1.45,f.kR=1.45,f.torsoRX+=.06,f.aL=f.aR=-1.15,f.aLo=f.aRo=.75,f.eL=f.eR=-.25;break;case"crouch":f.bodyY=i.leg*.4,f.lL=f.lR=-1.95,f.kL=f.kR=2.3,f.torsoRX+=.45,f.aL=f.aR=-.9,f.eL=f.eR=-.6,f.lLo=f.lRo=.14;break;case"reach":f.aL=f.aR=-2.9,f.aLo=f.aRo=.22,f.eL=f.eR=-.1,f.headRX=-.35;break;case"reachForward":f.aL=f.aR=-1.45,f.eL=f.eR=-.1,f.torsoRX+=.08;break;case"armsOpen":f.aL=f.aR=-1,f.aLo=f.aRo=.85,f.eL=f.eR=-.2,y="open";break;case"hug":f.aL=f.aR=-1.35,f.eL=f.eR=-1.15,f.aLo=f.aRo=-.3,f.torsoRX+=.12,f.headRX=.15;break;case"carry":case"rockCarry":f.aL=f.aR=-.85,f.eL=f.eR=-1.25,f.aLo=f.aRo=-.22,f.torsoRX-=.06,f.headRX=.3;break;case"carryHigh":f.aL=f.aR=-2.35,f.eL=f.eR=-.45,f.aLo=f.aRo=.12,f.headRX=-.35,y="open";break;case"carried":f.bodyY=i.thigh*.6,f.lL=f.lR=-1.3,f.kL=f.kR=.7,f.aL=f.aR=-.5,f.eL=f.eR=-.6;break;case"wave":f.aR=-2.7,f.aRo=.35,f.eR=-.45+Math.sin(e*9)*.45,y="open";break;case"point":f.aR=-1.5,f.eR=-.05;break;case"dance":{let T=Math.sin(e*(s.speed??4));f.bodyY=i.leg-Math.abs(T)*.04,f.aL=-1.7+T*.4,f.aR=-1.7-T*.4,f.aLo=f.aRo=.5,f.eL=f.eR=-.7,f.lL=T*.3,f.lR=-T*.3,f.kL=f.kR=.25,f.sway=T*.08,y="open";break}case"waltz":{let T=Math.sin(e*3);f.aL=-1.55,f.aLo=.4,f.eL=-.7,f.aR=-1.25,f.aRo=-.1,f.eR=-.9,f.lL=T*.25,f.lR=-T*.25,f.kL=Math.max(0,T)*.3,f.kR=Math.max(0,-T)*.3,f.sway=T*.05;break}case"jump":{let T=Math.abs(Math.sin(e*5));f.bodyY=i.leg+T*.22,f.aL=f.aR=-2.5,f.aLo=f.aRo=.35,f.lL=f.lR=-T*.5,f.kL=f.kR=T*.8,y="open";break}case"cry":f.headRX=.45,f.aL=f.aR=-1.2,f.eL=f.eR=-2.1,f.aLo=f.aRo=-.25,f.torsoRX+=.2+Math.sin(e*7)*.025,y="sad";break;case"laugh":f.headRX=-.35+Math.sin(e*14)*.06,f.torsoRX+=Math.sin(e*14)*.04-.05,f.aL=f.aR=-.3,f.eL=f.eR=-.9,y="open";break;case"think":f.aR=-1.35,f.eR=-2.15,f.aRo=-.15,f.headRX=.15,f.headRZ=.12,y="flat";break;case"sad":f.headRX=.35,f.torsoRX+=.12,y="sad";break;case"push":{let T=s.phase??Math.sin(e*2);f.aL=f.aR=-1.35-T*.25,f.eL=f.eR=-.35+T*.25,f.torsoRX+=.22+T*.12,f.lL=-.35,f.kL=.35,f.lR=.25;break}case"swing":{let T=s.kick??0;f.bodyY=s.h??.5,f.lL=f.lR=-1.35+T,f.kL=f.kR=.9-T*.8,f.aL=f.aR=-2.55,f.eL=f.eR=-.45,f.aLo=f.aRo=.1,y="open";break}case"bike":f.bodyY=s.h??.68,f.lL=-1.2+u*.55,f.lR=-1.2-u*.55,f.kL=1.3-u*.6,f.kR=1.3+u*.6,f.aL=f.aR=-1.1,f.eL=f.eR=-.35,f.torsoRX+=.35;break;case"rock":f.bodyY=s.h??.47,f.lL=f.lR=-1.5,f.kL=f.kR=1.45,f.aL=f.aR=-.85,f.eL=f.eR=-1.25,f.aLo=f.aRo=-.22,f.torsoRX-=.12,f.headRX=.3;break;case"read":f.bodyY=s.h??.45,f.lL=f.lR=-1.5,f.kL=f.kR=1.45,f.aL=f.aR=-.85,f.eL=f.eR=-1.35,f.aLo=f.aRo=-.15,f.headRX=.38;break;case"stand":default:break}(o==="idle"||o==="stand")&&(f.sway=Math.sin(e*.8+this.blinkT)*.018,f.headRZ=Math.sin(e*.5)*.03);let m=1-Math.exp(-12*t);this._j||(this._j={...f,headRY:0});let w=this._j;for(let T in f)w[T]=$e(w[T],f[T],m);let v=0;if(this.lookTarget){let T=this.lookTarget.position??this.lookTarget,E=Math.atan2(T.x-this.position.x,T.z-this.position.z)-this.heading;v=qt(Math.atan2(Math.sin(E),Math.cos(E)),-1.1,1.1)}w.headRY=$e(w.headRY,v,m),this.body.position.y=w.bodyY,this.body.position.z=w.bodyZ,this.body.rotation.x=w.bodyRX,this.body.rotation.z=w.sway,this.root.rotation.x=w.rootRX+(this.lean||0),this.root.rotation.z=this.tilt||0,this.torsoPivot.rotation.x=w.torsoRX,this.torsoPivot.rotation.y=w.torsoRY,this.torsoPivot.rotation.z=-w.sway*.6,this.headPivot.rotation.set(w.headRX,w.headRY,w.headRZ),this.armL.pivot.rotation.set(w.aL,0,-w.aLo),this.armR.pivot.rotation.set(w.aR,0,w.aRo),this.armL.joint.rotation.x=w.eL,this.armR.joint.rotation.x=w.eR,this.legL.pivot.rotation.set(w.lL,0,-w.lLo),this.legR.pivot.rotation.set(w.lR,0,w.lRo),this.legL.joint.rotation.x=w.kL,this.legR.joint.rotation.x=w.kR,this.legL.end.rotation.x=-(w.lL+w.kL)*.6,this.legR.end.rotation.x=-(w.lR+w.kR)*.6,this.skirt&&(this.skirt.rotation.x=(w.lL+w.lR)*.25);let _=qt(this.speed/3,0,1.4);if(this.tail){let T=.35+_*.5+Math.sin(d*2)*.08*_+Math.sin(e*1.7)*.03;this._tailA=Ui(this._tailA??T,T,6,t),this.opts.hairStyle==="ponytail"?(this.tail.rotation.x=this._tailA,this.tail.rotation.z=Math.sin(d)*.15*_):this.tail.rotation.x=(this._tailA-.35)*.15}this.scarfTail&&this.scarfTail.forEach((T,E)=>{let k=(E===0?.25:.08)+_*(.45-E*.05)+Math.sin(e*5+E*.9)*(.04+_*.12);T.userData.a=Ui(T.userData.a,k,5-E*.6,t),T.rotation.x=T.userData.a,T.rotation.z=Math.sin(e*3+E)*.05}),this.blinkT-=t;let I=y==="sleep"||this.blinkT<.12||y==="sad";this.blinkT<0&&(this.blinkT=2+Math.random()*4);for(let T of this.eyes)T.scale.y=I?y==="sad"?.04:.018:.14;this.mouthSmile.visible=y==="smile"||y==="sleep",this.mouthOpen.visible=y==="open",this.mouthSad.visible=y==="sad",y==="flat"&&(this.mouthSmile.visible=!1),this.blob.visible=w.rootRX>-.5&&!this.carriedBy}remove(){x.world?.removeCharacter(this),this.root.parent?.remove(this.root)}},ss=class{constructor({color:t=14198890,spot:e=16049872,size:i=1,age:s=3}={}){this.root=new rt,this.position=this.root.position,this.size=i,this.age=s,this.heading=0,this.targetHeading=0,this.speed=0,this.phase=0,this.moveTarget=null,this.followTarget=null,this.pose="idle";let a=sn(t),o=pe(e),r=pe(3811876),l=i;this.bodyG=new rt,this.root.add(this.bodyG);let c=new bt(new Ei(.25,0),a);c.scale.set(.9,.8,1.5),c.position.y=.32,this.bodyG.add(c);let h=new bt(new Ei(.18,0),o);h.scale.set(.9,.7,1.6),h.position.set(0,.24,.02),this.bodyG.add(h),this.headG=new rt,this.headG.position.set(0,.48,.32),this.bodyG.add(this.headG);let d=new bt(new Ei(.17,0),a);this.headG.add(d);let u=new bt(new gi(.14,.11,.16),o);u.position.set(0,-.04,.15),this.headG.add(u);let p=new bt(new Ei(.035,0),r);p.position.set(0,-.01,.24),this.headG.add(p);for(let f of[-1,1]){let y=new bt(new Ai(.025,5,4),r);y.position.set(f*.075,.05,.13),this.headG.add(y);let m=new bt(new gi(.07,.16,.12),sn(t));m.material.color.multiplyScalar(.8),m.position.set(f*.15,0,-.02),m.rotation.z=f*.3,this.headG.add(m)}this.tail=new rt,this.tail.position.set(0,.42,-.36),this.bodyG.add(this.tail);let g=new bt(new ei(.025,.04,.25,4),a);g.position.y=.12,this.tail.add(g),this.tail.rotation.x=-.6,this.legs=[];for(let[f,y]of[[-.11,.2],[.11,.2],[-.11,-.2],[.11,-.2]]){let m=new rt;m.position.set(f,.26,y),this.bodyG.add(m);let w=new bt(new ei(.04,.035,.26,4),a);w.position.y=-.13,m.add(w),this.legs.push(m)}this.root.scale.setScalar(l),ne(this.root,!0,!1),this.wag=1,x.world?.addCharacter(this)}place(t,e,i=null){return this.position.set(t,0,e),i!==null&&(this.heading=this.targetHeading=i),this}face(t,e){return this.targetHeading=Math.atan2(t-this.position.x,e-this.position.z),this}faceChar(t){return this.face(t.position.x,t.position.z)}walkTo(t,e,i={}){return new Promise(s=>{this.moveTarget={x:t,z:e,speed:i.speed??(this.age>10?.9:2.6),resolve:s}})}follow(t,e=1){this.followTarget=t?{c:t,dist:e}:null}setPose(t){return this.pose=t,this}get radius(){return .3}update(t,e){let i=!1;if(this.moveTarget){let o=this.moveTarget,r=o.x-this.position.x,l=o.z-this.position.z,c=Math.hypot(r,l);if(c<.05)this.moveTarget=null,o.resolve();else{let h=Math.min(o.speed*t,c);this.position.x+=r/c*h,this.position.z+=l/c*h,this.targetHeading=Math.atan2(r,l),this.speed=o.speed,i=!0}}else if(this.followTarget){let{c:o,dist:r}=this.followTarget,l=yo(this.position.x,this.position.z,o.position.x,o.position.z);if(l>r){let c=Math.min((this.age>10?1:3.2)*t,l-r),h=o.position.x-this.position.x,d=o.position.z-this.position.z;this.position.x+=h/l*c,this.position.z+=d/l*c,this.targetHeading=Math.atan2(h,d),this.speed=2.5,i=!0}}i||(this.speed=Ui(this.speed,0,8,t)),this.heading=gd(this.heading,this.targetHeading,1-Math.exp(-8*t)),this.root.rotation.y=this.heading,this.phase+=t*this.speed*5;let s=Math.sin(this.phase),a=this.speed>.2;this.legs.forEach((o,r)=>{o.rotation.x=a?s*.6*(r%2?1:-1)*(r<2?1:-1):0}),this.tail.rotation.z=Math.sin(e*(6+this.wag*8))*.5*this.wag,this.pose==="sit"?(this.bodyG.rotation.x=-.45,this.bodyG.position.y=-.06,this.legs[2].rotation.x=this.legs[3].rotation.x=1):this.pose==="lie"?(this.bodyG.rotation.x=0,this.bodyG.position.y=-.16,this.legs.forEach(o=>o.rotation.x=1.4)):(this.bodyG.rotation.x=0,this.bodyG.position.y=a?Math.abs(s)*.03:0),this.headG.rotation.x=this.pose==="lie"?.3:Math.sin(e*1.5)*.05}headWorld(){let t=new P;return this.headG.getWorldPosition(t),t.y+=.3,t}remove(){x.world?.removeCharacter(this),this.root.parent?.remove(this.root)}},Fe={youMother:{skin:U.skin[1],hair:7028522,hairStyle:"long",shirt:15044474,pants:5201802,dress:!1},youFather:{skin:U.skin[1],hair:5913386,hairStyle:"short",shirt:7315408,pants:4608110},baby:{skin:U.skin[1],hair:9067066,hairStyle:"baby",shirt:16180128,pants:16180128,shoes:16180128},mom:{skin:U.skin[0],hair:9128491,hairStyle:"bun",shirt:14256800,pants:5917290,dress:!0},dad:{skin:U.skin[2],hair:3023904,hairStyle:"short",shirt:8367754,pants:4868696,beard:!0},grandpa:{skin:U.skin[0],hair:14210255,hairStyle:"bald",shirt:11967098,pants:6969930,glasses:!0},grandma:{skin:U.skin[0],hair:14210255,hairStyle:"bun",shirt:10137800,pants:6974074,dress:!0,glasses:!0},theo:{skin:U.skin[3],hair:1971730,hairStyle:"curly",shirt:15775818,pants:4876954},sam:{skin:U.skin[2],hair:2760218,hairStyle:"curly",shirt:6267786,pants:4013394,scarf:7316424},childDaughter:{skin:U.skin[1],hair:8014382,hairStyle:"ponytail",shirt:15901621,pants:6982344},childSon:{skin:U.skin[1],hair:8014382,hairStyle:"short",shirt:9093352,pants:5925512},pip:{skin:U.skin[2],hair:3811874,hairStyle:"curly",shirt:15976010,pants:14243914,hat:14243914,scarf:7320537}}});He();Be();Be();var es={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};Be();Be();var yi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Fw=new Qn(-1,1,1,-1,0,1),yd=class extends Ie{constructor(){super(),this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}},Ow=new yd,pn=class{constructor(t){this._mesh=new bt(Ow,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Fw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var wa=class extends yi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ci.clone(t.uniforms),this.material=new ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new pn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var xo=class extends yi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),a=t.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,r;this.inverse?(o=0,r=1):(o=1,r=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),a.buffers.stencil.setClear(r),a.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}},nl=class extends yi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var sl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new it);this._width=i.width,this._height=i.height,e=new Qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ri}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wa(es),this.copyPass.material.blending=Ye,this.clock=new Zr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,a=this.passes.length;s<a;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}xo!==void 0&&(o instanceof xo?i=!0:o instanceof nl&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};Be();var al=class extends yi{constructor(t,e,i=null,s=null,a=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Lt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(a=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};Be();Be();var ep={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Lt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var _a=class n extends yi{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new it(t.x,t.y):new it(256,256),this.clearColor=new Lt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Qe(a,o,{type:Ri}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new Qe(a,o,{type:Ri});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let p=new Qe(a,o,{type:Ri});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),a=Math.round(a/2),o=Math.round(o/2)}let r=ep;this.highPassUniforms=Ci.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ke({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new it(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=es;this.copyUniforms=Ci.clone(h.uniforms),this.blendMaterial=new ke({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Si,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Lt,this.oldClearAlpha=1,this.basic=new Pe,this.fsQuad=new pn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new it(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),r=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new ke({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};_a.BlurDirectionX=new it(1,0);_a.BlurDirectionY=new it(0,1);Be();var ip={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ol=class extends yi{constructor(){super();let t=ip;this.uniforms=Ci.clone(t.uniforms),this.material=new Vr({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new pn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ce.getTransfer(this._outputColorSpace)===xe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===jh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===td?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ed?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===id?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===go&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};Be();Be();var vo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new it},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new he},cameraProjectionMatrixInverse:{value:new he},cameraWorldMatrix:{value:new he},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new P(-1,-1,-1)},sceneBoxMax:{value:new P(1,1,1)}},vertexShader:`

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
		}`},wo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},rl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function np(n=5){let t=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),e=Bw(t),i=e.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let r=e[o],l=2*Math.PI*r/i,c=new P(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let a=new vs(s,t,t);return a.wrapS=Pn,a.wrapT=Pn,a.needsUpdate=!0,a}function Bw(n){let t=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),e=t*t,i=Array(e).fill(0),s=Math.floor(t/2),a=t-1;for(let o=1;o<=e;){if(s===-1&&a===t?(a=t-2,s=0):(a===t&&(a=0),s<0&&(s=t-1)),i[s*t+a]!==0){a-=2,s++;continue}else i[s*t+a]=o++;a++,s--}return i}Be();var _o={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:xd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new it},cameraProjectionMatrixInverse:{value:new he},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function xd(n,t,e){let i=zw(n,t,e),s="vec3[SAMPLES](";for(let a=0;a<n;a++){let o=i[a];s+=`vec3(${o.x}, ${o.y}, ${o.z})${a<n-1?",":")"}`}return s}function zw(n,t,e){let i=[];for(let s=0;s<n;s++){let a=2*Math.PI*t*s/n,o=Math.pow(s/(n-1),e);i.push(new P(Math.cos(a),Math.sin(a),o))}return i}var ll=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,i){return t[0]*e+t[1]*i}dot3(t,e,i,s){return t[0]*e+t[1]*i+t[2]*s}dot4(t,e,i,s,a){return t[0]*e+t[1]*i+t[2]*s+t[3]*a}noise(t,e){let i,s,a,o=.5*(Math.sqrt(3)-1),r=(t+e)*o,l=Math.floor(t+r),c=Math.floor(e+r),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,p=c-d,g=t-u,f=e-p,y,m;g>f?(y=1,m=0):(y=0,m=1);let w=g-y+h,v=f-m+h,_=g-1+2*h,I=f-1+2*h,T=l&255,E=c&255,k=this.perm[T+this.perm[E]]%12,M=this.perm[T+y+this.perm[E+m]]%12,b=this.perm[T+1+this.perm[E+1]]%12,R=.5-g*g-f*f;R<0?i=0:(R*=R,i=R*R*this.dot(this.grad3[k],g,f));let N=.5-w*w-v*v;N<0?s=0:(N*=N,s=N*N*this.dot(this.grad3[M],w,v));let D=.5-_*_-I*I;return D<0?a=0:(D*=D,a=D*D*this.dot(this.grad3[b],_,I)),70*(i+s+a)}noise3d(t,e,i){let s,a,o,r,c=(t+e+i)*.3333333333333333,h=Math.floor(t+c),d=Math.floor(e+c),u=Math.floor(i+c),p=1/6,g=(h+d+u)*p,f=h-g,y=d-g,m=u-g,w=t-f,v=e-y,_=i-m,I,T,E,k,M,b;w>=v?v>=_?(I=1,T=0,E=0,k=1,M=1,b=0):w>=_?(I=1,T=0,E=0,k=1,M=0,b=1):(I=0,T=0,E=1,k=1,M=0,b=1):v<_?(I=0,T=0,E=1,k=0,M=1,b=1):w<_?(I=0,T=1,E=0,k=0,M=1,b=1):(I=0,T=1,E=0,k=1,M=1,b=0);let R=w-I+p,N=v-T+p,D=_-E+p,F=w-k+2*p,O=v-M+2*p,z=_-b+2*p,Y=w-1+3*p,W=v-1+3*p,st=_-1+3*p,pt=h&255,vt=d&255,Nt=u&255,Gt=this.perm[pt+this.perm[vt+this.perm[Nt]]]%12,K=this.perm[pt+I+this.perm[vt+T+this.perm[Nt+E]]]%12,dt=this.perm[pt+k+this.perm[vt+M+this.perm[Nt+b]]]%12,Ct=this.perm[pt+1+this.perm[vt+1+this.perm[Nt+1]]]%12,ut=.6-w*w-v*v-_*_;ut<0?s=0:(ut*=ut,s=ut*ut*this.dot3(this.grad3[Gt],w,v,_));let Pt=.6-R*R-N*N-D*D;Pt<0?a=0:(Pt*=Pt,a=Pt*Pt*this.dot3(this.grad3[K],R,N,D));let Xt=.6-F*F-O*O-z*z;Xt<0?o=0:(Xt*=Xt,o=Xt*Xt*this.dot3(this.grad3[dt],F,O,z));let Ot=.6-Y*Y-W*W-st*st;return Ot<0?r=0:(Ot*=Ot,r=Ot*Ot*this.dot3(this.grad3[Ct],Y,W,st)),32*(s+a+o+r)}noise4d(t,e,i,s){let a=this.grad4,o=this.simplex,r=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,p,g,f=(t+e+i+s)*l,y=Math.floor(t+f),m=Math.floor(e+f),w=Math.floor(i+f),v=Math.floor(s+f),_=(y+m+w+v)*c,I=y-_,T=m-_,E=w-_,k=v-_,M=t-I,b=e-T,R=i-E,N=s-k,D=M>b?32:0,F=M>R?16:0,O=b>R?8:0,z=M>N?4:0,Y=b>N?2:0,W=R>N?1:0,st=D+F+O+z+Y+W,pt=o[st][0]>=3?1:0,vt=o[st][1]>=3?1:0,Nt=o[st][2]>=3?1:0,Gt=o[st][3]>=3?1:0,K=o[st][0]>=2?1:0,dt=o[st][1]>=2?1:0,Ct=o[st][2]>=2?1:0,ut=o[st][3]>=2?1:0,Pt=o[st][0]>=1?1:0,Xt=o[st][1]>=1?1:0,Ot=o[st][2]>=1?1:0,re=o[st][3]>=1?1:0,nt=M-pt+c,ft=b-vt+c,L=R-Nt+c,Ft=N-Gt+c,ct=M-K+2*c,At=b-dt+2*c,gt=R-Ct+2*c,Yt=N-ut+2*c,Tt=M-Pt+3*c,C=b-Xt+3*c,S=R-Ot+3*c,X=N-re+3*c,Q=M-1+4*c,ot=b-1+4*c,tt=R-1+4*c,Ut=N-1+4*c,yt=y&255,Mt=m&255,Qt=w&255,ht=v&255,It=r[yt+r[Mt+r[Qt+r[ht]]]]%32,Zt=r[yt+pt+r[Mt+vt+r[Qt+Nt+r[ht+Gt]]]]%32,$t=r[yt+K+r[Mt+dt+r[Qt+Ct+r[ht+ut]]]]%32,kt=r[yt+Pt+r[Mt+Xt+r[Qt+Ot+r[ht+re]]]]%32,le=r[yt+1+r[Mt+1+r[Qt+1+r[ht+1]]]]%32,Jt=.6-M*M-b*b-R*R-N*N;Jt<0?h=0:(Jt*=Jt,h=Jt*Jt*this.dot4(a[It],M,b,R,N));let de=.6-nt*nt-ft*ft-L*L-Ft*Ft;de<0?d=0:(de*=de,d=de*de*this.dot4(a[Zt],nt,ft,L,Ft));let B=.6-ct*ct-At*At-gt*gt-Yt*Yt;B<0?u=0:(B*=B,u=B*B*this.dot4(a[$t],ct,At,gt,Yt));let xt=.6-Tt*Tt-C*C-S*S-X*X;xt<0?p=0:(xt*=xt,p=xt*xt*this.dot4(a[kt],Tt,C,S,X));let J=.6-Q*Q-ot*ot-tt*tt-Ut*Ut;return J<0?g=0:(J*=J,g=J*J*this.dot4(a[le],Q,ot,tt,Ut)),27*(h+d+u+p+g)}};var bo=class n extends yi{constructor(t,e,i,s,a,o,r){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=np(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Qe(this.width,this.height,{type:Ri}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ke({defines:Object.assign({},vo.defines),uniforms:Ci.clone(vo.uniforms),vertexShader:vo.vertexShader,fragmentShader:vo.fragmentShader,blending:Ye,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Gr,this.normalMaterial.blending=Ye,this.pdMaterial=new ke({defines:Object.assign({},_o.defines),uniforms:Ci.clone(_o.uniforms),vertexShader:_o.vertexShader,fragmentShader:_o.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ke({defines:Object.assign({},wo.defines),uniforms:Ci.clone(wo.uniforms),vertexShader:wo.vertexShader,fragmentShader:wo.fragmentShader,blending:Ye}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ke({uniforms:Ci.clone(es.uniforms),vertexShader:es.vertexShader,fragmentShader:es.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Kr,blendDst:ga,blendEquation:Hi,blendSrcAlpha:Jr,blendDstAlpha:ga,blendEquationAlpha:Hi}),this.blendMaterial=new ke({uniforms:Ci.clone(rl.uniforms),vertexShader:rl.vertexShader,fragmentShader:rl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Kh,blendSrc:Kr,blendDst:ga,blendEquation:Hi,blendSrcAlpha:Jr,blendDstAlpha:ga,blendEquationAlpha:Hi}),this.fsQuad=new pn(null),this.originalClearColor=new Lt,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),r!==void 0&&this.updatePdMaterial(r)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new ha,this.depthTexture.format=$n,this.depthTexture.type=Zn,this.normalRenderTarget=new Qe(this.width,this.height,{minFilter:hi,magFilter:hi,type:Ri,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=xd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Ye,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ye,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ye,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ye,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Ye,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,i,s,a){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),r=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(a||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=r,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,i,s,a){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),r=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,s=e.clearColor||s,a=e.clearAlpha||a,s!=null&&(t.setClearColor(s),t.setClearAlpha(a||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=r,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){e.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){let s=e.get(i);i.visible=s}),e.clear()}generateNoise(t=64){let e=new ll,i=t*t*4,s=new Uint8Array(i);for(let o=0;o<t;o++)for(let r=0;r<t;r++){let l=o,c=r;s[(o*t+r)*4]=(e.noise(l,c)*.5+.5)*255,s[(o*t+r)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(o*t+r)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(o*t+r)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let a=new vs(s,t,t,Di,tn);return a.wrapS=Pn,a.wrapT=Pn,a.needsUpdate=!0,a}};bo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};He();var vd={skyTop:12572912,skyBottom:16246488,fog:15917782,fogNear:6,fogFar:46,sun:16773596,sunIntensity:2.6,sunAz:210,sunEl:52,hemiSky:14674431,hemiGround:11901574,hemiIntensity:1.1,fill:11058408,fillIntensity:.55,exposure:1,saturation:1,contrast:1,brightness:0,warmth:0,tint:16777215,tintAmt:0,vignette:.35,grain:.035,bloom:.28,tilt:.6,focusX:.5,focusY:.5,focusRadius:2,focusDesat:0,dream:0},wd={dawnNursery:{fill:12101864,fillIntensity:.5,skyTop:16041923,skyBottom:16508628,fog:16243919,sun:16765616,sunIntensity:2.4,sunAz:235,sunEl:28,hemiSky:16769254,hemiGround:12884620,hemiIntensity:1.35,saturation:.95,warmth:.35,vignette:.45,bloom:.42,tilt:.9,dream:.25},springMorning:{skyTop:11129842,skyBottom:16510688,fog:16116964,sun:16773334,sunIntensity:2.8,sunAz:220,sunEl:48,hemiSky:14938111,hemiGround:10466442,hemiIntensity:1.3,saturation:1.05,warmth:.15,vignette:.32,bloom:.32,tilt:.75,dream:.12},summerDay:{skyTop:8373488,skyBottom:15135999,fog:14675706,sun:16774880,sunIntensity:3.1,sunAz:205,sunEl:58,hemiSky:15332607,hemiGround:9416302,hemiIntensity:1.25,saturation:1.18,contrast:1.04,warmth:.1,vignette:.28,bloom:.26,tilt:.6},summerDusk:{fill:9079520,fillIntensity:.55,skyTop:5988254,skyBottom:16169354,fog:15247754,sun:16757370,sunIntensity:2.1,sunAz:250,sunEl:14,hemiSky:10260432,hemiGround:9136730,hemiIntensity:1.1,saturation:1.1,warmth:.45,vignette:.42,bloom:.45,tilt:.75},summerNight:{fill:5925592,fillIntensity:.5,skyTop:1317434,skyBottom:3817330,fog:2896483,sun:10466559,sunIntensity:.9,sunAz:140,sunEl:40,hemiSky:5924528,hemiGround:2761792,hemiIntensity:.9,saturation:.95,warmth:-.1,vignette:.55,bloom:.7,tilt:.8},goldenAfternoon:{fill:10138864,fillIntensity:.6,skyTop:9418982,skyBottom:16768174,fog:16308660,sun:16764812,sunIntensity:3,sunAz:240,sunEl:30,hemiSky:16638912,hemiGround:10518624,hemiIntensity:1.2,saturation:1.12,contrast:1.05,warmth:.4,vignette:.35,bloom:.35,tilt:.65},rainyGrey:{skyTop:8161172,skyBottom:12174024,fog:11187130,sun:14213868,sunIntensity:1.1,sunAz:200,sunEl:60,hemiSky:13095644,hemiGround:6975344,hemiIntensity:1.35,saturation:.55,contrast:.95,warmth:-.25,vignette:.5,bloom:.15,tilt:.7},autumnEvening:{fill:8030944,fillIntensity:.6,skyTop:4012651,skyBottom:15964779,fog:14255978,sun:16752490,sunIntensity:1.9,sunAz:255,sunEl:12,hemiSky:9403584,hemiGround:8015936,hemiIntensity:1.05,saturation:1.15,warmth:.5,vignette:.45,bloom:.6,tilt:.7},festivalNight:{fill:8018640,fillIntensity:.55,skyTop:1053750,skyBottom:3878236,fog:3024464,sun:10725631,sunIntensity:.7,sunAz:130,sunEl:45,hemiSky:6970024,hemiGround:3811898,hemiIntensity:.95,saturation:1.1,warmth:.2,vignette:.5,bloom:.85,tilt:.75},weddingDay:{skyTop:10473458,skyBottom:16773602,fog:16510948,sun:16774108,sunIntensity:3,sunAz:215,sunEl:50,hemiSky:15856895,hemiGround:10926218,hemiIntensity:1.35,saturation:1.08,warmth:.25,vignette:.3,bloom:.45,tilt:.7,dream:.15},nurseryNight:{fill:5925584,fillIntensity:.45,skyTop:1909832,skyBottom:4016762,fog:3029094,sun:9348863,sunIntensity:.55,sunAz:140,sunEl:40,hemiSky:6320312,hemiGround:3813448,hemiIntensity:.75,saturation:.95,warmth:.15,vignette:.55,bloom:.8,tilt:.9},homeMorning:{skyTop:11851506,skyBottom:16641757,fog:16313052,sun:16772300,sunIntensity:2.7,sunAz:225,sunEl:40,hemiSky:15790335,hemiGround:11770496,hemiIntensity:1.4,saturation:1.05,warmth:.28,vignette:.32,bloom:.35,tilt:.7},fastForward:{skyTop:10137291,skyBottom:15260879,fog:14603208,sun:16773344,sunIntensity:2.4,sunAz:210,sunEl:45,hemiSky:14739184,hemiGround:10129536,hemiIntensity:1.3,saturation:.85,contrast:1.08,warmth:0,vignette:.5,bloom:.3,tilt:.95},emptyHouse:{skyTop:10134445,skyBottom:14078668,fog:13617860,sun:15788254,sunIntensity:1.8,sunAz:230,sunEl:26,hemiSky:14212580,hemiGround:9076854,hemiIntensity:1.25,saturation:.45,contrast:.96,warmth:-.05,vignette:.55,bloom:.2,tilt:.8},winterMorning:{skyTop:12043992,skyBottom:15659508,fog:15133423,sun:15987455,sunIntensity:2.2,sunAz:205,sunEl:22,hemiSky:15660031,hemiGround:12107980,hemiIntensity:1.5,saturation:.35,contrast:.98,warmth:-.2,vignette:.45,bloom:.3,tilt:.8},winterDusk:{fill:9083608,fillIntensity:.55,skyTop:3620970,skyBottom:14264480,fog:12560042,sun:16761504,sunIntensity:1.6,sunAz:250,sunEl:10,hemiSky:10134736,hemiGround:9474208,hemiIntensity:1.2,saturation:.7,warmth:.3,vignette:.5,bloom:.6,tilt:.8},dream:{skyTop:16177126,skyBottom:16774888,fog:16773610,sun:16774374,sunIntensity:2.6,sunAz:220,sunEl:40,hemiSky:16773366,hemiGround:15126464,hemiIntensity:1.6,saturation:1,warmth:.3,vignette:.25,bloom:.75,tilt:.9,dream:.6,fogNear:2,fogFar:34},kitchenNight:{fill:5922960,fillIntensity:.4,skyTop:1448496,skyBottom:2961744,fog:2501189,sun:11056383,sunIntensity:.5,sunAz:140,sunEl:40,hemiSky:5922704,hemiGround:3813424,hemiIntensity:.6,saturation:.75,warmth:.35,vignette:.6,bloom:.75,tilt:.9},black:{skyTop:328968,skyBottom:657936,fog:526348,sunIntensity:0,hemiIntensity:.1}};var Hw={uniforms:{tDiffuse:{value:null},resolution:{value:new it(1,1)},time:{value:0},saturation:{value:1},contrast:{value:1},brightness:{value:0},warmth:{value:0},tint:{value:new Lt(1,1,1)},tintAmt:{value:0},vignette:{value:.3},grain:{value:.03},tilt:{value:.5},dream:{value:0},focus:{value:new it(.5,.5)},focusRadius:{value:2},focusDesat:{value:0}},vertexShader:`
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
  `},cl=class n{constructor(t){this.container=t;let e=new Rr({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=Jh,e.toneMapping=go,e.toneMappingExposure=1,e.outputColorSpace=Xe,t.appendChild(e.domElement),this.r=e,this.scene=new Pr,this.skyCanvas=document.createElement("canvas"),this.skyCanvas.width=2,this.skyCanvas.height=128,this.skyTex=new ua(this.skyCanvas),this.skyTex.colorSpace=Xe,this.scene.background=this.skyTex,this.scene.fog=new Cr(16777215,50,120),this.viewSize=14;let i=window.innerWidth/window.innerHeight;this.camera=new Qn(-i*7,i*7,7,-7,.1,300),this.camAz=45,this.camEl=33,this.camDist=70,this.camTarget=new P,this.camGoal=new P,this.zoomGoal=14,this.followSpeed=3,this.follow=null,this.followOffset=new P,this.shake=0,this.camBounds=null,this.hemi=new Yr(16777215,8947848,1.2),this.scene.add(this.hemi),this.sun=new mo(16777215,2.5),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,this.sun.shadow.radius=3;let s=this.sun.shadow.camera;s.left=-22,s.right=22,s.top=22,s.bottom=-22,s.near=1,s.far=120,this.scene.add(this.sun),this.scene.add(this.sun.target),this.fill=new mo(10466536,.5),this.scene.add(this.fill),this.scene.add(this.fill.target);let a=new sl(e);a.addPass(new al(this.scene,this.camera)),this.ao=new bo(this.scene,this.camera,window.innerWidth,window.innerHeight),this.ao.updateGtaoMaterial({radius:.55,distanceExponent:1.6,thickness:2,scale:1.25,samples:12,distanceFallOff:1}),this.ao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),this.ao.blendIntensity=.85;let o=!("ontouchstart"in window);try{let r=localStorage.getItem("lm.ao");r!==null&&(o=r==="1")}catch{}this.ao.enabled=o,a.addPass(this.ao),this.bloom=new _a(new it(window.innerWidth/2,window.innerHeight/2),.3,.55,.82),a.addPass(this.bloom),a.addPass(new ol),this.grade=new wa(Hw),a.addPass(this.grade),this.composer=a,this.mood=this._expand(vd),this.moodFrom=this._clone(this.mood),this.moodTo=this._clone(this.mood),this.moodT=1,this.moodDur=0,this.overrides={},this._applyMood(),window.addEventListener("resize",()=>this.resize()),this.resize()}_expand(t){let e={};for(let i in t)e[i]=n.isColorKey(i)?new Lt(t[i]):t[i];return e}_clone(t){let e={};for(let i in t)e[i]=t[i]instanceof Lt?t[i].clone():t[i];return e}static isColorKey(t){return["skyTop","skyBottom","fog","sun","hemiSky","hemiGround","tint","fill"].includes(t)}setAO(t){this.ao.enabled=t;try{localStorage.setItem("lm.ao",t?"1":"0")}catch{}}setMood(t,e=2,i=null){let s=typeof t=="string"?{...vd,...wd[t]}:{...this._flat(this.moodTo),...t};typeof t=="string"&&!wd[t]&&console.warn("unknown mood",t),i&&(s={...s,...i}),this.moodFrom=this._clone(this.mood);let a={};for(let o in s)a[o]=n.isColorKey(o)?new Lt(s[o]):s[o];this.moodTo=a,this.moodT=0,this.moodDur=Math.max(1e-4,e),e<=0&&(this.moodT=1,this.mood=this._clone(a),this._applyMood())}_flat(t){let e={};for(let i in t)e[i]=t[i]instanceof Lt?t[i].getHex():t[i];return e}moodTarget(){return this._flat(this.moodTo)}_updateMood(t){if(this.moodT<1){this.moodT=Math.min(1,this.moodT+t/this.moodDur);let e=this.moodT*this.moodT*(3-2*this.moodT);for(let i in this.moodTo){let s=this.moodFrom[i],a=this.moodTo[i];a instanceof Lt?(this.mood[i]instanceof Lt||(this.mood[i]=new Lt),this.mood[i].copy(s instanceof Lt?s:a).lerp(a,e)):typeof a=="number"&&(this.mood[i]=$e(s??a,a,e))}this._applyMood()}else this._applyMood(!0)}_applyMood(t=!1){let e=this.mood,i=this.overrides;if(!t){let o=this.skyCanvas.getContext("2d"),r=o.createLinearGradient(0,0,0,128);r.addColorStop(0,"#"+e.skyTop.getHexString()),r.addColorStop(1,"#"+e.skyBottom.getHexString()),o.fillStyle=r,o.fillRect(0,0,2,128),this.skyTex.needsUpdate=!0,this.scene.fog.color.copy(e.fog),this.sun.color.copy(e.sun),e.fill&&this.fill.color.copy(e.fill),this.hemi.color.copy(e.hemiSky),this.hemi.groundColor.copy(e.hemiGround)}let s=Math.max(.8,this.viewSize/14);this.scene.fog.near=this.camDist+e.fogNear*s,this.scene.fog.far=this.camDist+e.fogFar*s,this.sun.intensity=e.sunIntensity*(i.light??1),this.fill.intensity=(e.fillIntensity??.5)*(i.light??1),this.hemi.intensity=e.hemiIntensity*(i.light??1),this.r.toneMappingExposure=e.exposure;let a=this.grade.uniforms;a.saturation.value=e.saturation*(i.saturation??1),a.contrast.value=e.contrast,a.brightness.value=e.brightness+(i.brightness??0),a.warmth.value=e.warmth+(i.warmth??0),a.tint.value.copy(e.tint),a.tintAmt.value=e.tintAmt,a.vignette.value=e.vignette+(i.vignette??0),a.grain.value=e.grain,a.tilt.value=e.tilt,a.dream.value=qt(e.dream+(i.dream??0),0,1.2),a.focus.value.set(i.focusX??e.focusX,i.focusY??e.focusY),a.focusRadius.value=i.focusRadius??e.focusRadius,a.focusDesat.value=i.focusDesat??e.focusDesat,this.bloom.strength=e.bloom+(i.bloom??0)}pulse(t,e,i=1){let s=this.overrides[t]??(t==="saturation"||t==="light"?1:0);return ve(i,a=>{this.overrides[t]=$e(s,e,a)})}resize(){let t=window.innerWidth,e=window.innerHeight;this.r.setSize(t,e),this.composer.setSize(t,e);let i=this.r.getPixelRatio();this.grade.uniforms.resolution.value.set(t*i,e*i),this._updateProjection()}_updateProjection(){let t=window.innerWidth,e=window.innerHeight,i=t/e,s=this.viewSize*(i<1?1.25:1);this.camera.left=-s*i/2,this.camera.right=s*i/2,this.camera.top=s/2,this.camera.bottom=-s/2,this.camera.updateProjectionMatrix()}camOffset(){let t=Ss.degToRad(this.camAz),e=Ss.degToRad(this.camEl);return new P(Math.sin(t)*Math.cos(e),Math.sin(e),Math.cos(t)*Math.cos(e)).multiplyScalar(this.camDist)}groundBasis(){let t=Ss.degToRad(this.camAz),e=new P(-Math.sin(t),0,-Math.cos(t)),i=new P(Math.cos(t),0,-Math.sin(t));return{fwd:e,right:i}}setFollow(t,e=null){this.follow=t,e?this.followOffset.copy(e):this.followOffset.set(0,0,0)}snapCamera(){this.follow&&this.camGoal.copy(this.follow.position).add(this.followOffset),this.camTarget.copy(this.camGoal),this.viewSize=this.zoomGoal,this._updateProjection()}async cameraTo(t,e=null,i=2){this.follow=null;let s=this.camTarget.clone(),a=this.viewSize,o=new P(t.x,t.y??0,t.z);await ve(i,r=>{this.camGoal.copy(s).lerp(o,r),this.camTarget.copy(this.camGoal),e&&(this.zoomGoal=$e(a,e,r),this.viewSize=this.zoomGoal,this._updateProjection())})}zoomTo(t,e=2){let i=this.zoomGoal;return ve(e,s=>{this.zoomGoal=$e(i,t,s)})}update(t){if(this._updateMood(t),this.follow&&(this.camGoal.copy(this.follow.position).add(this.followOffset),this.camGoal.y=Math.max(0,this.camGoal.y*.5)),this.camBounds&&this.follow){let p=this.camBounds;this.camGoal.x=qt(this.camGoal.x,p.minX,p.maxX),this.camGoal.z=qt(this.camGoal.z,p.minZ,p.maxZ)}let e=this.followSpeed;this.camTarget.x=Ui(this.camTarget.x,this.camGoal.x,e,t),this.camTarget.y=Ui(this.camTarget.y,this.camGoal.y,e,t),this.camTarget.z=Ui(this.camTarget.z,this.camGoal.z,e,t);let i=Ui(this.viewSize,this.zoomGoal,2.5,t);Math.abs(i-this.viewSize)>1e-4&&(this.viewSize=i,this._updateProjection());let s=this.camOffset();this.camera.position.copy(this.camTarget).add(s),this.shake>0&&(this.camera.position.x+=(Math.random()-.5)*this.shake,this.camera.position.y+=(Math.random()-.5)*this.shake,this.shake=Math.max(0,this.shake-t*2)),this.camera.lookAt(this.camTarget);let a=this.mood,o=Ss.degToRad(a.sunAz),r=Ss.degToRad(a.sunEl),l=new P(Math.sin(o)*Math.cos(r),Math.sin(r),Math.cos(o)*Math.cos(r));this.sun.position.copy(this.camTarget).addScaledVector(l,50),this.sun.target.position.copy(this.camTarget);let c=o+Math.PI,h=Ss.degToRad(28);this.fill.position.copy(this.camTarget).add(new P(Math.sin(c)*Math.cos(h),Math.sin(h),Math.cos(c)*Math.cos(h)).multiplyScalar(50)),this.fill.target.position.copy(this.camTarget);let d=Math.max(14,this.viewSize*1.25),u=this.sun.shadow.camera;Math.abs(u.right-d)>.5&&(u.left=-d,u.right=d,u.top=d,u.bottom=-d,u.updateProjectionMatrix()),this.grade.uniforms.time.value=x.realTime}render(){this.composer.render()}snapshot(t=320,e=240){let i=this.r.domElement,s=document.createElement("canvas");s.width=t,s.height=e;let a=s.getContext("2d"),o=i.width/i.height,r=t/e,l=i.width,c=i.height,h=0,d=0;o>r?(l=c*r,h=(i.width-l)/2):(c=l/r,d=(i.height-c)/2);let u=.82,p=l*u,g=c*u;h+=(l-p)/2,d+=(c-g)/2,a.drawImage(i,h,d,p,g,0,0,t,e);try{return s.toDataURL("image/jpeg",.72)}catch{return null}}project(t){let e=t.clone().project(this.camera);return{x:(e.x+1)/2*window.innerWidth,y:(1-e.y)/2*window.innerHeight,visible:e.z<1}}unproject(t,e,i=0){let s=new it(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1),a=new $r;a.setFromCamera(s,this.camera);let o=new Ki(new P(0,1,0),-i),r=new P;return a.ray.intersectPlane(o,r)?r:null}};He();var sp={ArrowUp:"up",KeyW:"up",ArrowDown:"down",KeyS:"down",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",Space:"act",Enter:"act",KeyE:"act",NumpadEnter:"act",Escape:"pause",KeyP:"pause",KeyJ:"album",Tab:"album",Digit1:"n1",Digit2:"n2",Digit3:"n3",Digit4:"n4"},hl=class{constructor(t){this.el=t,this.held=new Set,this.pressedSet=new Set,this.releasedSet=new Set,this.pointer={x:0,y:0,down:!1,downT:0,moved:!1,startX:0,startY:0},this.clicks=[],this.anyPress=!1,this.lastDevice="keyboard",window.addEventListener("keydown",e=>{if(e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA"))return;let i=sp[e.code];i&&(e.preventDefault(),this.held.has(i)||this.pressedSet.add(i),this.held.add(i)),e.repeat||(this.anyPress=!0),this.lastDevice="keyboard",x.audio?.init()}),window.addEventListener("keyup",e=>{let i=sp[e.code];i&&(this.held.delete(i),this.releasedSet.add(i))}),window.addEventListener("blur",()=>{this.held.clear(),this.pointer.down=!1}),t.addEventListener("pointerdown",e=>{this.pointer.down=!0,this.pointer.downT=performance.now(),this.pointer.moved=!1,this.pointer.x=this.pointer.startX=e.clientX,this.pointer.y=this.pointer.startY=e.clientY,this.pressedSet.add("pointer"),this.anyPress=!0,this.lastDevice=e.pointerType==="touch"?"touch":"mouse",x.audio?.init()}),window.addEventListener("pointermove",e=>{this.pointer.x=e.clientX,this.pointer.y=e.clientY,this.pointer.down&&Math.hypot(e.clientX-this.pointer.startX,e.clientY-this.pointer.startY)>12&&(this.pointer.moved=!0)}),window.addEventListener("pointerup",e=>{if(this.pointer.down&&e.target===t){let i=performance.now()-this.pointer.downT;!this.pointer.moved&&i<450&&this.clicks.push({x:e.clientX,y:e.clientY})}this.pointer.down=!1,this.releasedSet.add("pointer")}),t.addEventListener("contextmenu",e=>e.preventDefault())}isDown(t){return this.held.has(t)}pressed(t){return this.pressedSet.has(t)}released(t){return this.releasedSet.has(t)}consume(t){this.pressedSet.delete(t)}holding(){return this.held.has("act")||this.pointer.down}axis(){let t=0,e=0;return this.held.has("left")&&(t-=1),this.held.has("right")&&(t+=1),this.held.has("up")&&(e+=1),this.held.has("down")&&(e-=1),{x:t,y:e}}endFrame(){this.pressedSet.clear(),this.releasedSet.clear(),this.clicks.length=0,this.anyPress=!1}};He();var xi=n=>document.querySelector(n),lt=(n,t,e)=>{let i=document.createElement(n);return t&&(i.className=t),e!==void 0&&(i.innerHTML=e),i},ap=n=>new Promise(t=>setTimeout(t,n)),dl=class{constructor(){this.fadeEl=xi("#fade"),this.flashEl=xi("#flash"),this.narrEl=xi("#narr"),this.lowerEl=xi("#lower"),this.bubblesEl=xi("#bubbles"),this.choicesEl=xi("#choices"),this.promptEl=xi("#prompt"),this.keepEl=xi("#keep"),this.mgEl=xi("#mg"),this.cardEl=xi("#card"),this.hintEl=xi("#hint"),this.flyerEl=xi("#flyer"),this.clockEl=xi("#clock"),this.albumBtn=xi("#albumBtn"),this.menuBtn=xi("#menuBtn"),this.bubbles=[],this.settings={auto:!0,textSpeed:1};try{Object.assign(this.settings,JSON.parse(localStorage.getItem("lm.settings")||"{}"))}catch{}this.promptTarget=null,this.fadeValue=1,this.promptEl.addEventListener("pointerdown",t=>{t.stopPropagation(),this.promptClicked=!0})}saveSettings(){try{localStorage.setItem("lm.settings",JSON.stringify(this.settings))}catch{}}fade(t,e=1.5,i="#000"){let s=this.fadeEl;return s.style.background=i,s.style.transition=`opacity ${e}s ease`,s.offsetWidth,s.style.opacity=t,this.fadeValue=t,ap(e*1e3)}fadeOut(t=1.5,e="#000"){return this.fade(1,t,e)}fadeIn(t=1.5){return this.fade(0,t,this.fadeEl.style.background||"#000")}flash(t=.8,e=.85){let i=this.flashEl;i.style.transition="none",i.style.opacity=e,i.offsetWidth,i.style.transition=`opacity ${t}s ease`,i.style.opacity=0}_advance(){let t=x.input,e=t.pressed("act")||t.clicks.length>0||t.pressed("pointer");return e&&(t.consume("act"),t.consume("pointer"),t.clicks.length=0),e}_readTime(t){return x.auto?.25:(2+t.length*.055)/this.settings.textSpeed}async narrate(t,{stack:e=!1,auto:i=null,small:s=!1,dark:a=!1,hold:o=null,minTime:r=.9}={}){Array.isArray(t)||(t=[t]);let l=i??this.settings.auto;for(let c=0;c<t.length;c++){let h=Le(t[c]);e||this._clearNarr();let d=lt("div","line"+(s?" small":"")+(a?" dark":""));d.innerHTML=h+'<span class="advance"></span>',this.narrEl.appendChild(d),d.offsetWidth,d.classList.add("show"),await wt(x.auto?.1:r),d.classList.add("ready");let u=o??(l?this._readTime(h):1/0),p=r;await di(g=>(p+=g,this._advance()||p>=u))}}_clearNarr(){for(let t of[...this.narrEl.children])t.classList.remove("show"),t.classList.add("out"),setTimeout(()=>t.remove(),1100)}clearNarration(){this._clearNarr()}async lower(t,{auto:e=null,hold:i=null,block:s=!0}={}){t=Le(t);for(let c of[...this.lowerEl.children])c.classList.remove("show"),setTimeout(()=>c.remove(),1100);let a=lt("div","line");a.innerHTML=t+'<span class="advance"></span>',this.lowerEl.appendChild(a),a.offsetWidth,a.classList.add("show");let o=e??this.settings.auto,r=i??(o?this._readTime(t):1/0);if(!s){wt(r).then(()=>{a.classList.remove("show"),setTimeout(()=>a.remove(),1200)});return}await wt(.6),a.classList.add("ready");let l=.6;await di(c=>(l+=c,this._advance()||l>=r)),a.classList.remove("show"),setTimeout(()=>a.remove(),1200)}async say(t,e,{thought:i=!1,auto:s=null,hold:a=null,small:o=!1,name:r=null,passive:l=!1}={}){e=Le(e);let c=lt("div","bubble"+(i?" thought":"")+(o?" small":"")),h=r??t?.name??"";c.innerHTML=(h&&!i?`<span class="who">${Le(h)}</span>`:"")+'<span class="t"></span><span class="advance"></span>',this.bubblesEl.appendChild(c);let d={el:c,speaker:t};this.bubbles.push(d),this._positionBubble(d),c.offsetWidth,c.classList.add("show");let u=c.querySelector(".t"),p=0,g=!0,f=48*this.settings.textSpeed,y=0,m=0,w=l?()=>!1:()=>this._advance();await di(T=>{if(w())return g=!1,!0;y+=T*f;let E=Math.min(e.length,Math.floor(y));return E>p&&(p=E,u.textContent=e.slice(0,E),m++,m%3===0&&!i&&x.audio?.sfx("tap",{vol:.25})),E>=e.length}),u.textContent=e,c.classList.add("ready");let v=s??this.settings.auto,_=a??(v||l?this._readTime(e)*.85:1/0),I=0;await wt(.25),await di(T=>(I+=T,w()||I>=_)),c.classList.remove("show"),setTimeout(()=>{c.remove(),this.bubbles=this.bubbles.filter(T=>T!==d)},350)}_positionBubble(t){let e=t.speaker,i=window.innerWidth/2,s=window.innerHeight*.7;if(e&&(e.headWorld||e.isVector3||e.position)){let a=e.headWorld?e.headWorld():e.isVector3?e.clone():e.position.clone(),o=x.renderer.project(a);i=qt(o.x,140,window.innerWidth-140),s=qt(o.y-14,90,window.innerHeight-40)}t.el.style.left=i+"px",t.el.style.top=s+"px"}choose(t,e){return x.auto?(x.log?.push("choose: "+t),wt(.2).then(()=>(x.autoChoice??0)%e.length)):new Promise(i=>{let s=this.choicesEl;s.innerHTML="",s.classList.remove("hidden"),t&&s.appendChild(lt("div","q",Le(t)));let a=-1,o=e.map((d,u)=>{let p=lt("button","",`<span class="n">${u+1}</span><span>${Le(d)}</span>`);return p.style.animationDelay=.15+u*.12+"s",p.addEventListener("pointerdown",g=>{g.stopPropagation(),c(u)}),p.addEventListener("mouseenter",()=>{a=u,r()}),s.appendChild(p),p}),r=()=>o.forEach((d,u)=>d.classList.toggle("sel",u===a)),l=!1,c=d=>{l||(l=!0,x.audio?.sfx("soft",{deg:5}),s.classList.add("hidden"),s.innerHTML="",x.updaters.delete(h),i(d))},h=()=>{let d=x.input;for(let u=0;u<e.length&&u<4;u++)if(d.pressed("n"+(u+1)))return c(u);(d.pressed("down")||d.pressed("right"))&&(a=(a+1)%e.length,r()),(d.pressed("up")||d.pressed("left"))&&(a=(a-1+e.length)%e.length,r()),d.pressed("act")&&a>=0&&(d.consume("act"),c(a))};x.updaters.add(h)})}askText(t,e=""){return x.auto?wt(.2).then(()=>e):new Promise(i=>{let s=this.choicesEl;s.innerHTML="",s.classList.remove("hidden"),s.appendChild(lt("div","q",Le(t)));let a=lt("input");a.type="text",a.maxLength=14,a.value=e,a.placeholder=e,s.appendChild(a);let o=lt("button","",`<span class="n">\u2713</span><span>That's the one</span>`);s.appendChild(o),setTimeout(()=>{a.focus(),a.select()},50);let r=()=>{let l=a.value.trim().replace(/[<>&"]/g,"");l||(l=e),l=l.charAt(0).toUpperCase()+l.slice(1),s.classList.add("hidden"),s.innerHTML="",a.blur(),i(l)};a.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),r()),l.stopPropagation()}),o.addEventListener("pointerdown",l=>{l.stopPropagation(),r()})})}setPrompt(t){if(this.promptTarget=t,!t){this.promptEl.classList.add("hidden");return}this.promptEl.classList.remove("hidden"),this.promptEl.className=t.kind==="work"?"work":t.kind==="story"?"story":t.kind==="secret"?"secret":"";let e=x.input.lastDevice==="touch"?"Tap":"Space";this.promptEl.querySelector(".key").textContent=e,this.promptEl.querySelector(".txt").textContent=(t.kind==="secret"?"\u2726 ":"")+Le(t.label)}showHud(t=!0){this.albumBtn.classList.toggle("hidden",!t),this.menuBtn.classList.toggle("hidden",!t)}clock(t){this.clockEl.classList.toggle("hidden",!t)}setClock(t,e,i=!1){let s=qt(t,0,1);this.clockEl.querySelector(".fill").style.strokeDashoffset=264*(1-s),this.clockEl.querySelector(".sun").style.transform=`rotate(${s*360}deg)`,this.clockEl.querySelector(".num").textContent=e,this.clockEl.classList.toggle("urgent",i)}setAlbumCount(t,e=!1){this.albumBtn.querySelector(".count").textContent=t,e&&(this.albumBtn.classList.remove("bump"),this.albumBtn.offsetWidth,this.albumBtn.classList.add("bump"))}hint(t,e=6){this.hintEl.innerHTML=t,this.hintEl.classList.add("show"),clearTimeout(this._hintT),e&&(this._hintT=setTimeout(()=>this.hintEl.classList.remove("show"),e*1e3))}hideHint(){this.hintEl.classList.remove("show")}async chapterCard({num:t="",title:e="",ages:i="",quote:s=""},a=4.5){let o=this.cardEl;o.querySelector(".num").textContent=t,o.querySelector(".title").textContent=e,o.querySelector(".ages").textContent=i,o.querySelector(".quote").textContent=Le(s),o.classList.remove("hidden","out","show"),o.offsetWidth,o.classList.add("show");let r=0;await di(l=>(r+=l,r>2.5&&this._advance()||r>a+2||x.auto&&r>.5)),o.classList.add("out"),await ap(1200),o.classList.add("hidden"),o.classList.remove("show","out")}flyPolaroid(t,e){let i=lt("div","polaroid"),s=Math.min(320,window.innerWidth*.35);i.style.width=s+"px",i.innerHTML=`<img src="${t||""}"><div class="cap">${Le(e)}</div>`,i.style.left=window.innerWidth/2-s/2+"px",i.style.top=window.innerHeight/2-s*.45+"px",i.style.transform="rotate(-3deg) scale(0.9)",i.style.opacity="0",i.style.transition="opacity 0.5s ease, transform 0.6s ease",this.flyerEl.appendChild(i),requestAnimationFrame(()=>{i.style.opacity="1",i.style.transform="rotate(-2deg) scale(1)"}),setTimeout(()=>{let a=this.albumBtn.getBoundingClientRect(),o=a.left+a.width/2-window.innerWidth/2,r=a.top+a.height/2-window.innerHeight/2;i.style.transition="transform 1.1s cubic-bezier(.6,.0,.3,1), opacity 1.1s ease",i.style.transform=`translate(${o}px, ${r}px) rotate(12deg) scale(0.08)`,i.style.opacity="0.2"},2300),setTimeout(()=>{i.remove(),this.setAlbumCount(x.album.count(),!0)},3500)}update(){for(let t of this.bubbles)this._positionBubble(t);if(this.promptTarget){let t=this.promptTarget,e=t.position.clone();e.y=(t.def.height??(t.anchor?.height?t.anchor.height+.25:1))+.55;let i=x.renderer.project(e);this.promptEl.style.left=i.x+"px",this.promptEl.style.top=i.y-6+"px"}}};He();var _d={C:60,"C#":61,Db:61,D:62,Eb:63,E:64,F:65,"F#":66,G:67,Ab:68,A:69,Bb:70,B:71},ul={major:[0,2,4,5,7,9,11],minor:[0,2,3,5,7,8,10],harmonic:[0,2,3,5,7,8,11],dorian:[0,2,3,5,7,9,10]},Vw={i:0,ii:1,iii:2,iv:3,v:4,vi:5,vii:6};function bd(n,t=!1){let e=n,i=0;e[0]==="b"?(i=-1,e=e.slice(1)):e[0]==="#"&&(i=1,e=e.slice(1));let s=e.match(/^(VII|VI|IV|V|III|II|I|vii|vi|iv|v|iii|ii|i)(.*)$/);if(!s)return{root:0,iv:[0,4,7]};let a=s[1],o=s[2],r=a===a.toUpperCase(),l=Vw[a.toLowerCase()],c=ul.major[l]+i+(t&&["iii","vi","vii"].includes(a.toLowerCase())?-1:0),h=r?[0,4,7]:[0,3,7];return(o.includes("\xB0")||o.includes("dim"))&&(h=[0,3,6]),o.includes("sus4")&&(h=[0,5,7]),o.includes("sus2")&&(h=[0,2,7]),o.includes("maj7")?h=[...h,11]:o.includes("7")&&(h=[...h,10]),o.includes("add9")&&(h=[...h,14]),o.includes("6")&&(h=[...h,9]),{root:c,iv:h}}function Mo(n,t){let e=Math.floor((n-1)/7),i=((n-1)%7+7)%7;return t[i]+e*12}var Ni=[{c:"I",n:[[3,2],[5,1]]},{c:"IV",n:[[6,2],[5,1]]},{c:"I",n:[[3,1],[2,1],[1,1]]},{c:"V",n:[[2,3]]},{c:"I",n:[[3,2],[5,1]]},{c:"vi",n:[[8,2],[7,1]]},{c:"IVmaj7",n:[[6,1],[5,1],[3,1]]},{c:"V",n:[[5,3]]},{c:"IVadd9",n:[[6,2],[5,1]]},{c:"ii",n:[[4,2],[3,1]]},{c:"V7",n:[[2,1],[3,1],[4,1]]},{c:"I",n:[[3,3]]},{c:"vi",n:[[3,2],[2,1]]},{c:"IV",n:[[1,2],[-1,1]]},{c:"V",n:[[0,1],[2,1],[0,1]]},{c:"I",n:[[1,3]]}],Gw=Ni.map(n=>({...n,c:{I:"i",IV:"iv",V:"V",vi:"VI",IVmaj7:"iv7",IVadd9:"iv",ii:"ii\xB0",V7:"V7"}[n.c]??n.c})),Ww=[{c:"I",n:[[3,1],[3,.5],[5,.5],[6,1],[5,1]]},{c:"IV",n:[[6,1],[8,1],[6,1],[5,1]]},{c:"I",n:[[3,1],[2,.5],[1,.5],[2,1],[3,1]]},{c:"V",n:[[2,2],[5,1],[0,1]]},{c:"I",n:[[3,1],[3,.5],[5,.5],[8,1],[7,1]]},{c:"vi",n:[[6,1],[5,1],[3,1],[5,1]]},{c:"IV",n:[[4,1],[3,1],[2,1],[4,1]]},{c:"V",n:[[2,1],[3,1],[1,2]]}],op={silence:{key:"F",bpm:60,beats:4,prog:[["I",4]],layers:[]},title:{key:"F",bpm:62,beats:3,prog:[["I",3],["vi",3],["IVmaj7",3],["Vsus4",3]],layers:[{t:"chord",inst:"pad",gain:.16,oct:-1,every:6},{t:"sparkle",inst:"musicbox",gain:.22,oct:1,density:.35},{t:"song",inst:"musicbox",gain:.3,oct:1,song:Ni,min:.5}]},tiny:{key:"F",bpm:64,beats:3,song:Ni,layers:[{t:"song",inst:"musicbox",gain:.34,oct:1},{t:"chord",inst:"pad",gain:.12,oct:-1,every:3,min:.25},{t:"bass",inst:"softbass",gain:.16,oct:-2,min:.5},{t:"sparkle",inst:"bell",gain:.08,oct:2,density:.15,min:.6}]},tinyHum:{key:"F",bpm:60,beats:3,song:Ni,layers:[{t:"song",inst:"hum",gain:.22,oct:0},{t:"song",inst:"musicbox",gain:.16,oct:1,min:.3},{t:"chord",inst:"pad",gain:.12,oct:-1,every:3},{t:"bass",inst:"softbass",gain:.14,oct:-2}]},whistle:{key:"F",bpm:66,beats:3,song:Ni,layers:[{t:"song",inst:"whistle",gain:.16,oct:1},{t:"arp",inst:"pluck",gain:.12,oct:0,pattern:[0,1,2],div:1},{t:"bass",inst:"softbass",gain:.14,oct:-2}]},wonder:{key:"C",bpm:104,beats:4,prog:[["I",4],["V",4],["vi",4],["IV",4],["I",4],["IV",4],["ii7",4],["V",4]],layers:[{t:"arp",inst:"marimba",gain:.2,oct:0,pattern:[0,2,1,2,0,2,1,3],div:2},{t:"bass",inst:"softbass",gain:.2,oct:-2,fifth:!0},{t:"gen",inst:"flute",gain:.13,oct:1,seed:11,min:.35},{t:"perc",gain:.12,pat:{shaker:"..x...x...x...x.",kick:"x.......x......."},min:.5},{t:"sparkle",inst:"musicbox",gain:.1,oct:2,density:.25,min:.7}]},summerNight:{key:"G",bpm:72,beats:3,prog:[["I",3],["iii",3],["IV",3],["I",3],["vi",3],["ii",3],["IV",3],["V",3]],layers:[{t:"arp",inst:"musicbox",gain:.16,oct:1,pattern:[0,1,2,3,2,1],div:2},{t:"chord",inst:"pad",gain:.13,oct:-1,every:3},{t:"gen",inst:"piano",gain:.16,oct:0,seed:23,min:.4},{t:"bass",inst:"softbass",gain:.12,oct:-2,min:.3}]},bedtime:{key:"G",bpm:60,beats:3,song:Ni,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.12,oct:1,min:.5}]},running:{key:"D",bpm:112,beats:4,prog:[["vi",4],["IV",4],["I",4],["V",4]],layers:[{t:"strum",inst:"guitar",gain:.12,oct:0,rhythm:[0,3,6,8,10,12,14]},{t:"bass",inst:"softbass",gain:.2,oct:-2,fifth:!0},{t:"perc",gain:.13,pat:{kick:"x.......x.x.....",hat:"..x...x...x...x.",brush:"....x.......x..."},min:.3},{t:"gen",inst:"piano",gain:.14,oct:1,seed:37,min:.5},{t:"chord",inst:"strings",gain:.06,oct:0,every:8,min:.75}]},loss:{key:"D",bpm:56,beats:3,scale:"harmonic",song:Gw,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"strings",gain:.1,oct:-1,every:3},{t:"bass",inst:"softbass",gain:.12,oct:-2,min:.4}]},rainHope:{key:"D",bpm:60,beats:3,song:Ni,layers:[{t:"song",inst:"piano",gain:.18,oct:0},{t:"chord",inst:"strings",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.12,oct:1,min:.5}]},together:{key:"A",bpm:138,beats:3,prog:[["I",3],["I",3],["iii",3],["iii",3],["IV",3],["iv",3],["I",3],["V7",3]],layers:[{t:"waltz",inst:"piano",gain:.16,oct:-1},{t:"gen",inst:"piano",gain:.15,oct:1,seed:51,long:!0,min:.2},{t:"chord",inst:"strings",gain:.07,oct:0,every:6,min:.55},{t:"sparkle",inst:"musicbox",gain:.08,oct:2,density:.18,min:.7}]},wedding:{key:"A",bpm:66,beats:3,song:Ni,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"strings",gain:.1,oct:-1,every:3},{t:"bass",inst:"softbass",gain:.12,oct:-2},{t:"song",inst:"strings",gain:.08,oct:1,min:.6}]},little:{key:"F",bpm:66,beats:3,song:Ni,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.13,oct:1,min:.35},{t:"chord",inst:"strings",gain:.07,oct:0,every:3,min:.6},{t:"bass",inst:"softbass",gain:.12,oct:-2,min:.5}]},littleHum:{key:"F",bpm:60,beats:3,song:Ni,layers:[{t:"song",inst:"hum",gain:.2,oct:-1},{t:"song",inst:"musicbox",gain:.12,oct:1},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3}]},play:{key:"F",bpm:100,beats:4,song:Ww,layers:[{t:"song",inst:"marimba",gain:.18,oct:1},{t:"arp",inst:"pluck",gain:.12,oct:0,pattern:[0,1,2,1],div:2},{t:"bass",inst:"softbass",gain:.18,oct:-2,fifth:!0},{t:"perc",gain:.1,pat:{shaker:"..x...x...x...x.",kick:"x.......x......."},min:.4},{t:"gen",inst:"flute",gain:.1,oct:1,seed:71,min:.7}]},sofast:{key:"A",bpm:96,beats:4,scale:"minor",prog:[["i",4],["VI",4],["III",4],["VII",4]],layers:[{t:"arp",inst:"piano",gain:.15,oct:0,pattern:[0,1,2,1,3,1,2,1],div:4},{t:"tick",gain:.12},{t:"bass",inst:"softbass",gain:.18,oct:-2,min:.2},{t:"chord",inst:"strings",gain:.09,oct:0,every:4,min:.35},{t:"perc",gain:.12,pat:{kick:"x...x...x...x...",hat:"..x...x...x...x."},min:.55},{t:"gen",inst:"strings",gain:.07,oct:1,seed:91,long:!0,min:.75}]},quiet:{key:"A",bpm:50,beats:4,prog:[["I",8],["IVmaj7",8]],layers:[{t:"chord",inst:"pad",gain:.09,oct:-1,every:8},{t:"sparkle",inst:"piano",gain:.12,oct:0,density:.12}]},winter:{key:"D",bpm:54,beats:3,scale:"minor",prog:[["i",3],["iv",3],["VI",3],["V",3]],layers:[{t:"gen",inst:"piano",gain:.17,oct:0,seed:101,long:!0,sparse:!0},{t:"chord",inst:"pad",gain:.1,oct:-1,every:6},{t:"bass",inst:"softbass",gain:.09,oct:-2,min:.5}]},winterWarm:{key:"D",bpm:62,beats:3,song:Ni,layers:[{t:"song",inst:"musicbox",gain:.2,oct:1},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"piano",gain:.14,oct:0,min:.35},{t:"chord",inst:"strings",gain:.07,oct:0,every:3,min:.6}]},pipHum:{key:"D",bpm:60,beats:3,song:Ni,layers:[{t:"song",inst:"hum",gain:.18,oct:1},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.1,oct:1,min:.5}]},epilogue:{key:"F",bpm:64,beats:3,song:Ni,layers:[{t:"song",inst:"piano",gain:.2,oct:0},{t:"chord",inst:"pad",gain:.1,oct:-1,every:3},{t:"song",inst:"musicbox",gain:.13,oct:1,min:.25},{t:"chord",inst:"strings",gain:.09,oct:0,every:3,min:.45},{t:"bass",inst:"softbass",gain:.13,oct:-2,min:.55},{t:"song",inst:"hum",gain:.1,oct:-1,min:.7},{t:"song",inst:"strings",gain:.08,oct:1,min:.85}]}};var Xw=n=>440*Math.pow(2,(n-69)/12),fl=class{constructor(){this.ready=!1,this.vol={master:.85,music:.8,sfx:.85,amb:.7},this.voices=[],this.intensity=.4,this.intensityTarget=.4,this.amb={},this.beatLog=[],this.tempoMul=1,this.listeners=new Set;try{let t=JSON.parse(localStorage.getItem("lm.vol")||"null");t&&Object.assign(this.vol,t)}catch{}}init(){if(this.ready){this.ctx.resume?.();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.vol.master;let i=e.createDynamicsCompressor();i.threshold.value=-16,i.ratio.value=3,i.attack.value=.01,i.release.value=.3,this.master.connect(i),i.connect(e.destination),this.musicBus=e.createGain(),this.musicBus.gain.value=this.vol.music,this.musicFilter=e.createBiquadFilter(),this.musicFilter.type="lowpass",this.musicFilter.frequency.value=18e3,this.musicBus.connect(this.musicFilter),this.musicFilter.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.vol.sfx,this.sfxBus.connect(this.master),this.ambBus=e.createGain(),this.ambBus.gain.value=this.vol.amb,this.ambBus.connect(this.master),this.reverb=e.createConvolver(),this.reverb.buffer=this._impulse(3.2,2.6),this.revIn=e.createGain(),this.revIn.gain.value=1;let s=e.createGain();s.gain.value=.55,this.revIn.connect(this.reverb),this.reverb.connect(s),s.connect(this.musicFilter),this.sfxRev=e.createGain(),this.sfxRev.gain.value=.6,this.sfxRev.connect(this.revIn),this.noise=this._noiseBuffer(2,"white"),this.pink=this._noiseBuffer(4,"pink"),this.brown=this._noiseBuffer(4,"brown"),this.ready=!0,this.nextBeatClock=e.currentTime+.1,this.timer=setInterval(()=>this._schedule(),25),this._ambInit()}setVolume(t,e){this.vol[t]=e;try{localStorage.setItem("lm.vol",JSON.stringify(this.vol))}catch{}if(!this.ready)return;({master:this.master,music:this.musicBus,sfx:this.sfxBus,amb:this.ambBus})[t].gain.setTargetAtTime(e,this.ctx.currentTime,.1)}get now(){return this.ready?this.ctx.currentTime:performance.now()/1e3}_impulse(t,e){let i=this.ctx,s=i.sampleRate,a=Math.floor(s*t),o=i.createBuffer(2,a,s);for(let r=0;r<2;r++){let l=o.getChannelData(r);for(let c=0;c<a;c++)l[c]=(Math.random()*2-1)*Math.pow(1-c/a,e)*(c<s*.01?c/(s*.01):1)}return o}_noiseBuffer(t,e){let i=this.ctx,s=Math.floor(i.sampleRate*t),a=i.createBuffer(1,s,i.sampleRate),o=a.getChannelData(0),r=0,l=0,c=0,h=0;for(let d=0;d<s;d++){let u=Math.random()*2-1;e==="white"?o[d]=u:e==="brown"?(r=(r+.02*u)/1.02,o[d]=r*3.5):(l=.99765*l+u*.099046,c=.963*c+u*.2965164,h=.57*h+u*1.0526913,o[d]=(l+c+h+u*.1848)*.18)}return a}note(t,e,i,s,a=.8,o=null){if(!this.ready)return;let r=this.ctx,l=o??this.musicBus,c=Xw(e),h=(p,g,f,y,m,w,v)=>{p.gain.setValueAtTime(1e-4,i),p.gain.linearRampToValueAtTime(f,i+g),p.gain.setTargetAtTime(m,i+g,y),p.gain.setTargetAtTime(1e-4,v,w)},d=(p,g,f=0)=>{let y=r.createOscillator();return y.type=p,y.frequency.value=Math.min(g,19e3),y.detune.value=f,y},u=(p,g)=>p.forEach(f=>{f.start(i),f.stop(g)});switch(t){case"musicbox":{let p=r.createGain();p.connect(l);let g=i+Math.max(1.6,s+1.2),f=d("sine",c),y=d("sine",c*4.01),m=d("sine",c*2),w=r.createGain(),v=r.createGain(),_=r.createGain();w.gain.setValueAtTime(1e-4,i),w.gain.exponentialRampToValueAtTime(.45*a,i+.004),w.gain.exponentialRampToValueAtTime(1e-4,g),v.gain.setValueAtTime(1e-4,i),v.gain.exponentialRampToValueAtTime(.09*a,i+.002),v.gain.exponentialRampToValueAtTime(1e-4,i+.18),_.gain.setValueAtTime(1e-4,i),_.gain.exponentialRampToValueAtTime(.1*a,i+.003),_.gain.exponentialRampToValueAtTime(1e-4,i+.7),f.connect(w),y.connect(v),m.connect(_),w.connect(p),v.connect(p),_.connect(p),u([f,y,m],g+.05);break}case"bell":{let p=i+3.5;[[1,.35,3.2],[2.76,.16,1.8],[5.4,.08,.9],[8.93,.04,.45]].forEach(([g,f,y])=>{let m=d("sine",c*g),w=r.createGain();w.gain.setValueAtTime(1e-4,i),w.gain.exponentialRampToValueAtTime(f*a,i+.003),w.gain.exponentialRampToValueAtTime(1e-4,i+y),m.connect(w),w.connect(l),u([m],p)});break}case"piano":{let p=i+s+1.6,g=r.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(900+a*3800,i),g.frequency.setTargetAtTime(500+c*1.2,i+.01,.5);let f=r.createGain();f.gain.setValueAtTime(1e-4,i),f.gain.linearRampToValueAtTime(.32*a,i+.005),f.gain.setTargetAtTime(.12*a,i+.005,.35),f.gain.setTargetAtTime(1e-4,i+s,.35);let y=d("triangle",c),m=d("sine",c*2,3),w=d("triangle",c,-6),v=r.createGain();v.gain.value=.25,y.connect(g),w.connect(g),m.connect(v),v.connect(g),g.connect(f),f.connect(l),u([y,m,w],p);break}case"pad":{let p=i+s+2.5,g=r.createBiquadFilter();g.type="lowpass",g.frequency.value=650+a*500,g.Q.value=.5;let f=r.createGain();h(f,Math.min(1.2,s*.4),.09*a,.8,.07*a,.9,i+s);let y=[d("sawtooth",c,-9),d("sawtooth",c,9),d("triangle",c/2)];y.forEach(m=>m.connect(g)),g.connect(f),f.connect(l),u(y,p);break}case"strings":{let p=i+s+1.8,g=r.createBiquadFilter();g.type="lowpass",g.frequency.value=1400+a*800,g.Q.value=.4;let f=r.createGain();h(f,Math.min(.45,s*.4),.075*a,.5,.06*a,.5,i+s);let y=d("sine",5.2),m=r.createGain();m.gain.value=7,y.connect(m);let w=[d("sawtooth",c,-7),d("sawtooth",c,6),d("sawtooth",c*2,2)];w.forEach(v=>{m.connect(v.detune),v.connect(g)}),g.connect(f),f.connect(l),u([...w,y],p);break}case"marimba":{let p=i+1;[[1,.42,.55],[4,.1,.08],[9.9,.03,.03]].forEach(([g,f,y])=>{let m=d("sine",c*g),w=r.createGain();w.gain.setValueAtTime(1e-4,i),w.gain.exponentialRampToValueAtTime(f*a,i+.003),w.gain.exponentialRampToValueAtTime(1e-4,i+y),m.connect(w),w.connect(l),u([m],p)});break}case"pluck":case"guitar":{let p=i+1.6,g=r.createBiquadFilter();g.type="lowpass",g.Q.value=t==="guitar"?2:1,g.frequency.setValueAtTime(t==="guitar"?3200:2400,i),g.frequency.exponentialRampToValueAtTime(400,i+.35);let f=r.createGain();f.gain.setValueAtTime(1e-4,i),f.gain.exponentialRampToValueAtTime(.26*a,i+.004),f.gain.exponentialRampToValueAtTime(1e-4,i+(t==="guitar"?1.4:.7));let y=[d("sawtooth",c),d("triangle",c*2,4)];y.forEach(m=>m.connect(g)),g.connect(f),f.connect(l),u(y,p);break}case"softbass":{let p=i+s+.6,g=r.createBiquadFilter();g.type="lowpass",g.frequency.value=380;let f=r.createGain();h(f,.02,.45*a,.3,.25*a,.15,i+s*.9);let y=[d("sine",c),d("triangle",c,4)];y.forEach(m=>m.connect(g)),g.connect(f),f.connect(l),u(y,p);break}case"flute":{let p=i+s+.6,g=r.createGain();h(g,.06,.16*a,.2,.12*a,.12,i+s*.95);let f=d("sine",c),y=d("triangle",c*2),m=r.createGain();m.gain.value=.08;let w=d("sine",5),v=r.createGain();v.gain.setValueAtTime(0,i),v.gain.linearRampToValueAtTime(9,i+.4),w.connect(v),v.connect(f.detune),v.connect(y.detune),f.connect(g),y.connect(m),m.connect(g),g.connect(l),u([f,y,w],p);break}case"whistle":{let p=i+s+.5,g=r.createGain();h(g,.05,.14*a,.2,.11*a,.1,i+s*.9);let f=d("sine",c*2);f.frequency.setValueAtTime(c*2*.97,i),f.frequency.exponentialRampToValueAtTime(c*2,i+.06);let y=d("sine",6),m=r.createGain();m.gain.value=14,y.connect(m),m.connect(f.detune);let w=r.createBufferSource();w.buffer=this.noise;let v=r.createBiquadFilter();v.type="bandpass",v.frequency.value=c*2,v.Q.value=12;let _=r.createGain();_.gain.value=.25*a,w.connect(v),v.connect(_),_.connect(g),f.connect(g),g.connect(l),u([f,y,w],p);break}case"hum":{let p=i+s+.9,g=[d("sawtooth",c,-4),d("sawtooth",c,5)],f=d("sine",4.8),y=r.createGain();y.gain.setValueAtTime(0,i),y.gain.linearRampToValueAtTime(12,i+.5),f.connect(y);let m=r.createGain();m.gain.value=.5,g.forEach(E=>{y.connect(E.detune),E.connect(m)});let w=r.createBiquadFilter();w.type="bandpass",w.frequency.value=320,w.Q.value=3;let v=r.createBiquadFilter();v.type="bandpass",v.frequency.value=800,v.Q.value=5;let _=r.createBiquadFilter();_.type="lowpass",_.frequency.value=1400;let I=r.createGain();I.gain.value=.35,m.connect(w),m.connect(v),v.connect(I);let T=r.createGain();h(T,.18,.55*a,.4,.45*a,.25,i+s*.95),w.connect(_),I.connect(_),_.connect(T),T.connect(l),u([...g,f],p);break}default:break}}drum(t,e,i=1,s=null){if(!this.ready)return;let a=this.ctx,o=s??this.musicBus,r=(l,c,h,d,u,p)=>{let g=a.createBufferSource();g.buffer=this.noise;let f=a.createBiquadFilter();f.type=l,f.frequency.value=c,f.Q.value=h;let y=a.createGain();y.gain.setValueAtTime(1e-4,e),y.gain.exponentialRampToValueAtTime(p*i,e+d),y.gain.exponentialRampToValueAtTime(1e-4,e+d+u),g.connect(f),f.connect(y),y.connect(o),g.start(e,Math.random()*1.5),g.stop(e+d+u+.05)};switch(t){case"kick":{let l=a.createOscillator();l.frequency.setValueAtTime(130,e),l.frequency.exponentialRampToValueAtTime(42,e+.14);let c=a.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(.7*i,e+.004),c.gain.exponentialRampToValueAtTime(1e-4,e+.3),l.connect(c),c.connect(o),l.start(e),l.stop(e+.35);break}case"hat":r("highpass",7500,.7,.002,.045,.18);break;case"shaker":r("bandpass",5200,1.2,.012,.07,.22);break;case"brush":r("bandpass",2400,.6,.006,.16,.16);break;case"clap":for(let l=0;l<3;l++)r("bandpass",1500,.8,.002,.05,.25*(1-l*.2));break;case"tick":{let l=a.createOscillator();l.type="square",l.frequency.value=2600;let c=a.createBiquadFilter();c.type="bandpass",c.frequency.value=3e3,c.Q.value=4;let h=a.createGain();h.gain.setValueAtTime(1e-4,e),h.gain.exponentialRampToValueAtTime(.12*i,e+.001),h.gain.exponentialRampToValueAtTime(1e-4,e+.025),l.connect(c),c.connect(h),h.connect(o),l.start(e),l.stop(e+.04);break}case"tock":{let l=a.createOscillator();l.type="square",l.frequency.value=1700;let c=a.createBiquadFilter();c.type="bandpass",c.frequency.value=1900,c.Q.value=4;let h=a.createGain();h.gain.setValueAtTime(1e-4,e),h.gain.exponentialRampToValueAtTime(.12*i,e+.001),h.gain.exponentialRampToValueAtTime(1e-4,e+.03),l.connect(c),c.connect(h),h.connect(o),l.start(e),l.stop(e+.05);break}default:break}}music(t,{fade:e=3,intensity:i=null,immediate:s=!1}={}){if(i!==null&&this.setIntensity(i,.01),!this.ready){this.pendingProfile=t;return}let a=this.voices[this.voices.length-1];if(a&&a.name===t&&!a.stopping)return;let o=op[t];if(!o){console.warn("no profile",t);return}let r=this.ctx.currentTime,l=r+.08;a&&!a.stopping&&!s&&(l=Math.min(a.nextBarTime(),r+2.5));for(let h of this.voices)h.stopping||h.stop(l,e);let c=new Md(this,t,o,l);this.voices.push(c)}stopMusic(t=3){if(!this.ready)return;let e=this.ctx.currentTime;for(let i of this.voices)i.stopping||i.stop(e,t)}setIntensity(t,e=2){this.intensityTarget=qt(t,0,1),this.intensityRate=1/Math.max(.01,e)}setTempo(t,e=2){this.tempoTarget=t,this.tempoRate=1/Math.max(.01,e)}muffle(t=1,e=1.5){if(!this.ready)return;let i=18e3*Math.pow(400/18e3,qt(t,0,1));this.musicFilter.frequency.setTargetAtTime(i,this.ctx.currentTime,e/3)}duck(t=.5,e=.5){this.ready&&this.musicBus.gain.setTargetAtTime(this.vol.music*t,this.ctx.currentTime,e/3)}currentVoice(){return this.voices.filter(t=>!t.stopping).slice(-1)[0]??null}currentKey(){let t=this.currentVoice();return t?{tonic:t.tonic,scale:t.scale}:{tonic:_d.F,scale:ul.major}}beatInfo(){let t=this.now,e=this.currentVoice();if(!this.ready||!e){let r=.8571428571428571,l=t/r;return{dur:r,phase:l%1,beat:Math.floor(l),barBeat:Math.floor(l)%3,beats:3,nextTime:(Math.floor(l)+1)*r,lastTime:Math.floor(l)*r,now:t}}let i=e.beatLog,s=null,a=null;for(let r=i.length-1;r>=0;r--)if(i[r].time<=t){s=i[r],a=i[r+1]??null;break}if(!s){let r=e.beatDur();return{dur:r,phase:0,beat:0,barBeat:0,beats:e.p.beats,nextTime:i[0]?.time??t+r,lastTime:t-r,now:t}}let o=a?a.time-s.time:e.beatDur();return{dur:o,phase:qt((t-s.time)/o,0,1),beat:s.n,barBeat:s.beat,beats:e.p.beats,nextTime:a?a.time:s.time+o,lastTime:s.time,now:t}}onBeat(t){return this.listeners.add(t),()=>this.listeners.delete(t)}_schedule(){if(!this.ready)return;let t=this.ctx,e=t.currentTime,i=.15,s=.025;if(this.intensity!==this.intensityTarget){let o=this.intensityTarget-this.intensity,r=(this.intensityRate??.5)*s;this.intensity=Math.abs(o)<r?this.intensityTarget:this.intensity+Math.sign(o)*r}if(this.tempoTarget!==void 0&&this.tempoMul!==this.tempoTarget){let o=this.tempoTarget-this.tempoMul,r=(this.tempoRate??.5)*s;this.tempoMul=Math.abs(o)<r?this.tempoTarget:this.tempoMul+Math.sign(o)*r}for(let o of this.voices)o.schedule(e,i);this.voices=this.voices.filter(o=>!(o.stopping&&e>o.stopEnd+.5));let a=this.currentVoice();if(a){for(;a.beatLog.length&&a.beatLog[0].time<e-8;)a.beatLog.shift();for(let o of a.beatLog)!o.fired&&o.time<=e&&(o.fired=!0,this.listeners.forEach(r=>r(o)))}this._ambTick(e)}_ambInit(){let t=this.ctx,e=(i,s,a,o)=>{let r=t.createBufferSource();r.buffer=i,r.loop=!0;let l=t.createBiquadFilter();l.type=s,l.frequency.value=a,l.Q.value=o;let c=t.createGain();return c.gain.value=0,r.connect(l),l.connect(c),c.connect(this.ambBus),r.start(),{s:r,f:l,g:c}};this.ambNodes={wind:e(this.brown,"bandpass",500,.6),rain:e(this.pink,"highpass",900,.3),waves:e(this.brown,"lowpass",700,.5),room:e(this.brown,"lowpass",220,.5),fire:e(this.brown,"lowpass",400,.7),city:e(this.brown,"lowpass",300,.4)},this.ambLevels={wind:0,rain:0,waves:0,room:0,fire:0,city:0,birds:0,crickets:0,heartbeat:0,crowd:0,clock:0},this.nextBird=0,this.nextCrackle=0,this.nextHeart=0,this.nextCricket=0,this.nextCrowd=0,this.nextClock=0}ambience(t={},e=3){if(this.ambTarget={wind:0,rain:0,waves:0,room:0,fire:0,city:0,birds:0,crickets:0,heartbeat:0,crowd:0,clock:0,...t},!this.ready)return;let i=this.ctx.currentTime;for(let s in this.ambNodes){let a={wind:.35,rain:.22,waves:.4,room:.25,fire:.3,city:.25}[s];this.ambNodes[s].g.gain.setTargetAtTime((this.ambTarget[s]||0)*a,i,e/3)}Object.assign(this.ambLevels,this.ambTarget)}_ambTick(t){if(!this.ambLevels)return;let e=this.ambLevels;this.ambTarget&&!this._ambApplied&&(this._ambApplied=!0,this.ambience(this.ambTarget,2)),e.wind>0&&this.ambNodes.wind.f.frequency.setTargetAtTime(400+Math.sin(t*.3)*200+Math.sin(t*.71)*120,t,.5),e.waves>0&&this.ambNodes.waves.g.gain.setTargetAtTime(e.waves*.4*(.55+.45*Math.sin(t*.55)),t,.4),e.birds>0&&t>this.nextBird&&(this._bird(t+.05,e.birds),this.nextBird=t+.6+Math.random()*3.5/e.birds),e.fire>0&&t>this.nextCrackle&&(this._crackle(t+.02,e.fire),this.nextCrackle=t+.05+Math.random()*.4),e.crickets>0&&t>this.nextCricket&&(this._cricket(t+.05,e.crickets),this.nextCricket=t+.35+Math.random()*.9),e.heartbeat>0&&t>this.nextHeart&&(this._heart(t+.05,e.heartbeat),this.nextHeart=t+.95),e.crowd>0&&t>this.nextCrowd&&(this._murmur(t+.05,e.crowd),this.nextCrowd=t+.15+Math.random()*.4),e.clock>0&&t>this.nextClock&&(this.drum(this._tk=this._tk?"tock":"tick",t+.05,e.clock,this.ambBus),this.nextClock=t+1)}_bird(t,e){let i=this.ctx,s=2+Math.floor(Math.random()*4),a=2200+Math.random()*1800,o=i.createStereoPanner?i.createStereoPanner():null;o&&(o.pan.value=Math.random()*1.6-.8,o.connect(this.ambBus));for(let r=0;r<s;r++){let l=i.createOscillator();l.type="sine";let c=i.createGain(),h=t+r*(.09+Math.random()*.06);l.frequency.setValueAtTime(a*(.9+Math.random()*.3),h),l.frequency.exponentialRampToValueAtTime(a*(1.1+Math.random()*.5),h+.06),c.gain.setValueAtTime(1e-4,h),c.gain.exponentialRampToValueAtTime(.03*e,h+.01),c.gain.exponentialRampToValueAtTime(1e-4,h+.08),l.connect(c),c.connect(o??this.ambBus),l.start(h),l.stop(h+.1)}}_crackle(t,e){let i=this.ctx,s=i.createBufferSource();s.buffer=this.noise;let a=i.createBiquadFilter();a.type="bandpass",a.frequency.value=1500+Math.random()*2500,a.Q.value=2;let o=i.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.12*e*Math.random(),t+.002),o.gain.exponentialRampToValueAtTime(1e-4,t+.02),s.connect(a),a.connect(o),o.connect(this.ambBus),s.start(t,Math.random()),s.stop(t+.03)}_cricket(t,e){let i=this.ctx,s=4300+Math.random()*600;for(let a=0;a<3;a++){let o=i.createOscillator();o.frequency.value=s;let r=i.createGain(),l=t+a*.045;r.gain.setValueAtTime(1e-4,l),r.gain.exponentialRampToValueAtTime(.012*e,l+.006),r.gain.exponentialRampToValueAtTime(1e-4,l+.03),o.connect(r),r.connect(this.ambBus),o.start(l),o.stop(l+.04)}}_heart(t,e){let i=this.ctx;for(let[s,a]of[[0,1],[.24,.7]]){let o=i.createOscillator();o.frequency.setValueAtTime(70,t+s),o.frequency.exponentialRampToValueAtTime(38,t+s+.12);let r=i.createGain();r.gain.setValueAtTime(1e-4,t+s),r.gain.exponentialRampToValueAtTime(.35*e*a,t+s+.01),r.gain.exponentialRampToValueAtTime(1e-4,t+s+.2),o.connect(r),r.connect(this.ambBus),o.start(t+s),o.stop(t+s+.25)}}_murmur(t,e){let i=this.ctx,s=i.createOscillator();s.type="sawtooth";let a=140+Math.random()*120;s.frequency.setValueAtTime(a,t),s.frequency.linearRampToValueAtTime(a*(.85+Math.random()*.3),t+.25);let o=i.createBiquadFilter();o.type="bandpass",o.frequency.value=500+Math.random()*600,o.Q.value=3;let r=i.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.01*e,t+.05),r.gain.exponentialRampToValueAtTime(1e-4,t+.3),s.connect(o),o.connect(r),r.connect(this.ambBus),s.start(t),s.stop(t+.35)}sfx(t,e={}){if(!this.ready)return;let i=this.ctx,s=i.currentTime+(e.delay??0),a=this.sfxBus,o=e.vol??1,r=(d,u,p,g,f,y,m,w=a)=>{let v=i.createBufferSource();v.buffer=this.noise;let _=i.createBiquadFilter();_.type=d,_.Q.value=g,_.frequency.setValueAtTime(u,s),p&&_.frequency.exponentialRampToValueAtTime(p,s+f+y);let I=i.createGain();return I.gain.setValueAtTime(1e-4,s),I.gain.exponentialRampToValueAtTime(m*o,s+f),I.gain.exponentialRampToValueAtTime(1e-4,s+f+y),v.connect(_),_.connect(I),I.connect(w),v.start(s,Math.random()),v.stop(s+f+y+.05),I},l=(d,u,p,g,f,y,m=s,w=a)=>{let v=i.createOscillator();v.type=d,v.frequency.setValueAtTime(u,m),p&&v.frequency.exponentialRampToValueAtTime(p,m+g+f);let _=i.createGain();_.gain.setValueAtTime(1e-4,m),_.gain.exponentialRampToValueAtTime(y*o,m+g),_.gain.exponentialRampToValueAtTime(1e-4,m+g+f),v.connect(_),_.connect(w),v.start(m),v.stop(m+g+f+.05)},c=this.currentKey(),h=(d,u=0)=>c.tonic+Mo(d,c.scale)+u*12;switch(t){case"step":{let d=e.surface??"grass";d==="wood"?r("bandpass",900,null,1.5,.003,.05,.05):d==="snow"?r("highpass",2500,null,.5,.01,.09,.05):d==="stone"?r("bandpass",2200,null,1,.002,.03,.04):r("lowpass",1400,null,.7,.008,.07,.035);break}case"chime":[1,3,5].forEach((d,u)=>this.note("bell",h(d,2),s+u*.09,.5,.5*o,this.sfxBus));break;case"keep":[1,3,5,8,10].forEach((d,u)=>this.note("musicbox",h(d,1),s+u*.11,.6,.7*o,this.sfxRev)),this.note("bell",h(1,1),s,1,.4*o,this.sfxRev);break;case"lost":[5,3,2].forEach((d,u)=>this.note("musicbox",h(d,1),s+u*.25,.8,.35*o,this.sfxRev));break;case"shutter":r("highpass",3e3,null,.5,.001,.02,.3),r("bandpass",1200,null,1,.001,.04,.2);break;case"pop":l("sine",500,1100,.005,.08,.15);break;case"tap":l("sine",900+Math.random()*200,null,.003,.06,.08);break;case"good":this.note("musicbox",h(e.deg??5,1),s,.4,.6*o,this.sfxBus);break;case"soft":this.note("bell",h(e.deg??1,1),s,.6,.35*o,this.sfxRev);break;case"miss":l("sine",300,240,.01,.12,.05);break;case"giggle":{let d=4+Math.floor(Math.random()*3),u=(e.pitch??1)*(520+Math.random()*120);for(let p=0;p<d;p++){let g=s+p*.11;l("triangle",u*(1.3-p*.05),u*(1.1-p*.05),.01,.07,.08,g),l("sine",u*2.6,u*2.2,.01,.05,.03,g)}break}case"coo":case"babble":{let d=t==="coo"?2:3+Math.floor(Math.random()*3);for(let u=0;u<d;u++){let p=s+u*.2,g=(e.pitch??1)*(380+Math.random()*140),f=i.createOscillator();f.type="sawtooth",f.frequency.setValueAtTime(g,p),f.frequency.linearRampToValueAtTime(g*(t==="coo"?1.25:.9),p+.16);let y=i.createBiquadFilter();y.type="bandpass",y.frequency.value=t==="coo"?450:800,y.Q.value=4;let m=i.createGain();m.gain.setValueAtTime(1e-4,p),m.gain.exponentialRampToValueAtTime(.12*o,p+.03),m.gain.exponentialRampToValueAtTime(1e-4,p+.18),f.connect(y),y.connect(m),m.connect(a),f.start(p),f.stop(p+.2)}break}case"cry":{for(let d=0;d<3;d++){let u=s+d*.55,p=i.createOscillator();p.type="sawtooth",p.frequency.setValueAtTime(420,u),p.frequency.linearRampToValueAtTime(520,u+.15),p.frequency.linearRampToValueAtTime(380,u+.45);let g=i.createBiquadFilter();g.type="bandpass",g.frequency.value=1100,g.Q.value=3;let f=i.createGain();f.gain.setValueAtTime(1e-4,u),f.gain.exponentialRampToValueAtTime(.09*o,u+.05),f.gain.exponentialRampToValueAtTime(1e-4,u+.48),p.connect(g),g.connect(f),f.connect(a),p.start(u),p.stop(u+.5)}break}case"woof":{for(let d=0;d<(e.n??1);d++){let u=s+d*.25;l("sawtooth",320,170,.01,.13,.12,u)}r("bandpass",700,400,2,.01,.12,.1);break}case"splash":r("lowpass",3500,400,.6,.02,.5,.35);break;case"whoosh":r("bandpass",300,1800,1.2,.25,.5,.2);break;case"blow":r("lowpass",1500,600,.5,.15,.6,.15);break;case"rustle":r("bandpass",3e3,1500,.8,.05,.25,.08);break;case"thud":l("sine",120,50,.005,.2,.3),r("lowpass",500,null,1,.003,.1,.15);break;case"door":l("sine",90,60,.01,.25,.25),r("lowpass",800,null,1,.01,.15,.08);break;case"ping":l("sine",1320,null,.005,.12,.12),l("sine",1760,null,.005,.2,.1,s+.1);break;case"phone":for(let d=0;d<2;d++){let u=s+d*.5;l("sine",440,null,.01,.38,.06,u),l("sine",480,null,.01,.38,.06,u)}break;case"bikebell":for(let d=0;d<2;d++){let u=s+d*.16;l("sine",3100,null,.002,.4,.08,u),l("sine",4250,null,.002,.25,.05,u)}break;case"heart":this._heart(s,o);break;case"kiss":l("sine",1600,800,.003,.05,.05);break;case"creak":{let d=i.createOscillator();d.type="sawtooth",d.frequency.setValueAtTime(110,s),d.frequency.linearRampToValueAtTime(140,s+.35);let u=i.createBiquadFilter();u.type="bandpass",u.frequency.value=900,u.Q.value=8;let p=i.createGain();p.gain.setValueAtTime(1e-4,s),p.gain.exponentialRampToValueAtTime(.03*o,s+.1),p.gain.exponentialRampToValueAtTime(1e-4,s+.4),d.connect(u),u.connect(p),p.connect(a),d.start(s),d.stop(s+.45);break}case"applause":for(let d=0;d<40;d++){let u=i.createGain(),p=s+Math.random()*2.5,g=i.createBufferSource();g.buffer=this.noise;let f=i.createBiquadFilter();f.type="bandpass",f.frequency.value=1200+Math.random()*1500,f.Q.value=1,u.gain.setValueAtTime(1e-4,p),u.gain.exponentialRampToValueAtTime(.06*o,p+.003),u.gain.exponentialRampToValueAtTime(1e-4,p+.05),g.connect(f),f.connect(u),u.connect(a),g.start(p,Math.random()),g.stop(p+.06)}break;case"engine":{let d=i.createOscillator();d.type="sawtooth",d.frequency.setValueAtTime(45,s),d.frequency.linearRampToValueAtTime(70,s+1.5),d.frequency.linearRampToValueAtTime(55,s+3.5);let u=i.createBiquadFilter();u.type="lowpass",u.frequency.value=300;let p=i.createGain();p.gain.setValueAtTime(1e-4,s),p.gain.exponentialRampToValueAtTime(.12*o,s+.3),p.gain.setTargetAtTime(1e-4,s+2.5,.8),d.connect(u),u.connect(p),p.connect(a),d.start(s),d.stop(s+5);break}case"yay":{let d=i.createOscillator();d.type="sawtooth",d.frequency.setValueAtTime(380*(e.pitch??1),s),d.frequency.linearRampToValueAtTime(620*(e.pitch??1),s+.25);let u=i.createBiquadFilter();u.type="bandpass",u.frequency.value=900,u.Q.value=3;let p=i.createGain();p.gain.setValueAtTime(1e-4,s),p.gain.exponentialRampToValueAtTime(.1*o,s+.04),p.gain.exponentialRampToValueAtTime(1e-4,s+.45),d.connect(u),u.connect(p),p.connect(a),d.start(s),d.stop(s+.5);break}case"sparkle":for(let d=0;d<6;d++)this.note("musicbox",h([1,3,5,8,10,12][Math.floor(Math.random()*6)],2),s+d*.07+Math.random()*.05,.3,.3*o,this.sfxRev);break;case"tick":this.drum("tick",s,o,a);break;case"tock":this.drum("tock",s,o,a);break;case"bloop":l("sine",300,600,.01,.12,.08);break;case"fwip":r("bandpass",2e3,4e3,2,.01,.08,.1);break;case"lantern":r("bandpass",400,900,1,.3,1.2,.08),this.note("bell",h(5,1),s+.2,1,.25*o,this.sfxRev);break;case"note":this.note(e.inst??"musicbox",h(e.deg??1,e.oct??1),s,e.dur??.5,(e.vel??.7)*o,this.sfxRev);break;case"thunder":r("lowpass",300,60,.6,.1,2.5,.4);break;default:break}}},Md=class{constructor(t,e,i,s){this.e=t,this.name=e,this.p=i;let a=t.ctx;this.out=a.createGain(),this.out.gain.setValueAtTime(1e-4,a.currentTime),this.out.gain.setTargetAtTime(1,s,.4),this.out.connect(t.musicBus),this.send=a.createGain(),this.send.gain.value=.55,this.out.connect(this.send),this.send.connect(t.revIn),this.tonic=_d[i.key]??65,this.minor=i.scale==="minor"||i.scale==="harmonic",this.scale=ul[i.scale??"major"],this.prog=i.song?i.song.map(o=>[o.c,i.beats]):i.prog,this.stepTime=s,this.step=0,this.bar=0,this.beatLog=[],this.beatN=0,this.layers=i.layers.map((o,r)=>{let l=a.createGain();return l.gain.value=this._layerLevel(o),l.connect(this.out),{...o,g:l,rng:fe((o.seed??3)+r*17),cur:[]}}),this.stopping=!1}beatDur(){return 60/(this.p.bpm*this.e.tempoMul)}stepDur(){return this.beatDur()/4}nextBarTime(){let t=this.p.beats*4,e=this.step%t;return this.stepTime+(t-e)%t*this.stepDur()}stop(t,e){this.stopping=!0,this.stopEnd=t+e;let i=this.out.gain;i.cancelScheduledValues(t),i.setTargetAtTime(1e-4,t,e/3)}_layerLevel(t){let e=this.e.intensity,i=t.min??0,s=t.max??1.01,a=qt((e-i)/.15+0,0,1)*qt((s-e)/.15,0,1);return(t.gain??.2)*a}chordAt(t){let e=0;for(let[,a]of this.prog)e+=a;let i=t*this.p.beats%e,s=0;for(let[a,o]of this.prog){if(i<s+o)return bd(a,this.minor);s+=o}return bd(this.prog[0][0],this.minor)}chordTones(t,e,i=4){let s=this.tonic+t.root+e*12,a=[];for(let o=0;a.length<i;o++)a.push(s+t.iv[o%t.iv.length]+Math.floor(o/t.iv.length)*12);return a}schedule(t,e){if(!(this.stopping&&t>this.stopEnd)){for(let i of this.layers)i.g.gain.setTargetAtTime(this._layerLevel(i),t,.4);for(;this.stepTime<t+e;)this._playStep(this.stepTime),this.stepTime+=this.stepDur(),this.step++}}_playStep(t){let e=this.p,i=e.beats*4,s=this.step%i,a=Math.floor(this.step/i);s%4===0&&this.beatLog.push({time:t,beat:s/4,bar:a,n:this.beatN++});let o=this.chordAt(a),r=this.beatDur();for(let l of this.layers){if(l.g.gain.value<5e-4&&this._layerLevel(l)<5e-4)continue;let c=l.oct??0;switch(l.t){case"song":{let h=e.song??l.song;if(!h)break;let d=h[a%h.length],u=0;for(let[p,g]of d.n){if(Math.round(u*4)===s){let f=this.tonic+Mo(p,this.scale)+12*c;this.e.note(l.inst,f,t,g*r*.95,.75+.15*Math.random(),l.g)}u+=g}break}case"chord":{let h=(l.every??e.beats)*4;this.step%h===0&&this.chordTones(o,c,o.iv.length).forEach(d=>this.e.note(l.inst,d,t,h/4*r,.7,l.g));break}case"arp":{let h=l.div??2,d=4/h;if(s%d===0){let u=Math.floor(s/d)%l.pattern.length,p=this.chordTones(o,c,6);this.e.note(l.inst,p[l.pattern[u]],t,r/h*1.5,.55+(u===0?.2:0),l.g)}break}case"bass":{let h=this.tonic+o.root+12*c;s===0&&this.e.note(l.inst,h,t,r*(l.fifth?e.beats/2:e.beats)*.9,.8,l.g),l.fifth&&s===i/2&&this.e.note(l.inst,h+7,t,r*e.beats/2*.9,.65,l.g);break}case"waltz":{let h=this.tonic+o.root+12*c;s===0&&this.e.note(l.inst,h-12,t,r*.9,.75,l.g),(s===4||s===8)&&this.chordTones(o,c+1,3).forEach(d=>this.e.note(l.inst,d,t,r*.5,.45,l.g));break}case"strum":{if(l.rhythm.includes(s)){let h=this.chordTones(o,c,5),d=s/2%2===0;h.forEach((u,p)=>this.e.note(l.inst,u,t+(d?p:h.length-p)*.012,r*.6,(s===0?.8:.5)*(.85+.15*Math.random()),l.g))}break}case"gen":{s===0&&(l.cur=this._genBar(l,a,o));for(let h of l.cur)h.s===s&&this.e.note(l.inst,h.m,t,h.d*r/4,h.v,l.g);break}case"perc":{let h=l.pat,d=this.step%16;for(let u in h)h[u][d%h[u].length]==="x"&&this.e.drum(u,t,(l.gain??.15)*5,l.g);break}case"tick":s%4===0&&this.e.drum(s/4%2?"tock":"tick",t,1,l.g);break;case"sparkle":{if(s%2===0&&l.rng()<(l.density??.2)*.5){let h=this.chordTones(o,c,6);this.e.note(l.inst,h[Math.floor(l.rng()*h.length)],t,r,.4+l.rng()*.3,l.g)}break}default:break}}}_genBar(t,e,i){let s=this.p,a=s.beats*4,o=Math.floor(e/4),r=e%4,l=r===3?e:r+o%2*4,c=fe((t.seed??1)*1e3+l*31+7),h=t.long?[[4,4,8],[8,8],[6,2,8],[4,4,4,4],[12,4]]:[[4,4,4,4],[6,2,4,4],[8,4,4],[4,4,8],[2,2,4,8],[12,4],[4,2,2,8]],d=t.long?[[8,4],[12],[4,8],[6,6]]:[[4,4,4],[8,4],[4,8],[6,2,4],[12]],u=c.pick(s.beats===3?d:h);t.sparse&&c()<.35&&(u=[a]);let p=[],g=0,f=this.tonic+12*(t.oct??0),y=i.iv.map(w=>(i.root+w)%12),m=3+Math.floor(c()*4);for(let w=0;w<u.length;w++){if(t.sparse&&w>0&&c()<.4){g+=u[w];continue}if(w===0||c()<.4){let v=m,_=99;for(let I=m-3;I<=m+3;I++){let T=(Mo(I,this.scale)%12+12)%12;y.includes(T)&&Math.abs(I-m)<_&&(_=Math.abs(I-m),v=I)}m=v}else m+=c.pick([-1,1,-1,1,2,-2]);m=qt(m,1,10),p.push({s:g,m:f+Mo(m,this.scale),d:u[w]*.95,v:.6+c()*.25}),g+=u[w]}return p}};He();var Td="lm.save.v1",pl="lm.img.",Sd=["Prologue","I \xB7 Tiny","II \xB7 Wonder","III \xB7 Running","IV \xB7 Together","V \xB7 Little Ones","VI \xB7 So Fast","VII \xB7 Winter","VIII \xB7 Little Moments"],To=class{constructor(){this.registry=new Map,this.kept=new Map,this.lost=new Set,this.el=document.querySelector("#album"),this.open=!1,this.tab=1}register(t,e,i,s,a=null){this.registry.has(t)||this.registry.set(t,{id:t,chapter:e,caption:i,scene:s,alt:a})}isOtherLife(t){let e=this.registry.get(t);if(!e?.alt||this.kept.has(t))return!1;for(let[i,s]of this.registry)if(i!==t&&s.alt===e.alt&&(this.kept.has(i)||this.lived?.has(i)))return!0;return!1}chapterComplete(t){let e=[...this.registry.values()].filter(i=>i.chapter===t&&!this.isOtherLife(i.id));return e.length>0&&e.every(i=>this.kept.has(i.id))}count(){return this.kept.size}has(t){return this.kept.has(t)}keep(t,e,i,s){this.kept.set(t,{caption:e,chapter:i,img:s}),this.lost.delete(t);try{s&&localStorage.setItem(pl+t,s)}catch{}}lose(t){!this.kept.has(t)&&!this.isOtherLife(t)&&(this.lost.add(t),x.achieve?.("passed"))}keptIn(t){return[...this.kept.entries()].filter(([,e])=>e.chapter===t)}save(t){let e={v:1,sceneIndex:t,date:Date.now(),state:x.state,kept:Object.fromEntries([...this.kept.entries()].map(([i,s])=>[i,{caption:s.caption,chapter:s.chapter}])),lost:[...this.lost]};try{localStorage.setItem(Td,JSON.stringify(e))}catch(i){console.warn("save failed",i)}}static readSave(){try{return JSON.parse(localStorage.getItem(Td)||"null")}catch{return null}}load(t){this.kept.clear(),this.lost.clear();for(let[e,i]of Object.entries(t.kept||{})){let s=null;try{s=localStorage.getItem(pl+e)}catch{}this.kept.set(e,{...i,img:s})}(t.lost||[]).forEach(e=>this.lost.add(e)),Object.assign(x.state,t.state||{})}forgetFrom(t){for(let[e,i]of this.registry)if(t.includes(i.scene)){this.kept.delete(e),this.lost.delete(e);try{localStorage.removeItem(pl+e)}catch{}}}wipe(){try{let t=[];for(let e=0;e<localStorage.length;e++){let i=localStorage.key(e);i&&(i.startsWith(pl)||i===Td)&&t.push(i)}t.forEach(e=>localStorage.removeItem(e))}catch{}this.kept.clear(),this.lost.clear()}show(t=null,{reachedChapter:e=8,onClose:i=null}={}){this.open=!0,this.onClose=i,t!==null&&(this.tab=t),this.reached=e,this.render(),this.el.classList.remove("hidden")}hide(){this.open=!1,this.el.classList.add("hidden"),this.el.innerHTML="",this.onClose&&this.onClose()}render(){let t=this.el;t.innerHTML="";let e=lt("div","book"),i=lt("div","head");i.appendChild(lt("h2","","Little Moments"));let s=lt("button","close","Close \u2715");s.addEventListener("click",()=>this.hide()),i.appendChild(s),e.appendChild(i);let a=lt("div","tabs");for(let h=1;h<=Math.min(8,this.reached);h++){let d=this.keptIn(h).length,u=lt("button",h===this.tab?"on":"",`${Sd[h]} <small>(${d})</small>`);u.addEventListener("click",()=>{this.tab=h,this.render()}),a.appendChild(u)}e.appendChild(a);let o=lt("div","page"),r=[...this.registry.values()].filter(h=>h.chapter===this.tab),l=new Set(r.map(h=>h.id));for(let[h,d]of this.kept)d.chapter===this.tab&&!l.has(h)&&r.push({id:h,chapter:d.chapter,caption:d.caption});let c=0;for(let h of r.filter(d=>!this.isOtherLife(d.id))){let d=this.kept.get(h.id),u=lt("div","polaroid"+(d?"":" empty"));u.style.setProperty("--r",(c++*37%9-4)*.8+"deg"),d?u.innerHTML=(d.img?`<img class="ph" src="${d.img}">`:'<div class="ph"></div>')+`<div class="cap">${Le(d.caption)}</div>`:u.innerHTML=`<div class="ph"></div><div class="cap">${this.lost.has(h.id)?"a moment that passed":"not yet lived"}</div>`,o.appendChild(u)}r.length||o.appendChild(lt("div","note","Nothing here yet.")),e.appendChild(o),t.appendChild(e)}};Be();He();Be();He();ii();Be();He();ii();var Zw={petals:{color:[16236751,16505058,15968445],size:.09,fall:.35,drift:.6,spin:2,shape:"flake",count:120},leaves:{color:[14916155,13787198,15646794,13072938],size:.12,fall:.6,drift:.8,spin:3,shape:"flake",count:110},snow:{color:[16777215,15922943],size:.06,fall:.55,drift:.35,spin:1,shape:"flake",count:260},rain:{color:[12374246],size:.02,fall:9,drift:.05,spin:0,shape:"streak",count:420},fireflies:{color:[16187290,14679930],size:.35,fall:0,drift:.35,spin:0,shape:"glow",count:40},motes:{color:[16774360],size:.14,fall:-.02,drift:.12,spin:0,shape:"glow",count:60},stars:{color:[16777215,16774352,14214399],size:.3,fall:0,drift:0,spin:0,shape:"glow",count:120},bubbles:{color:[14676735,16179455],size:.28,fall:-.4,drift:.5,spin:0,shape:"glow",count:25},memories:{color:[16771e3,16765152,14215935],size:.5,fall:-.25,drift:.3,spin:0,shape:"glow",count:50}},Cl=class{constructor(t,e={}){let i={...Zw[t],...e};this.k=i,this.kind=t,this.area=e.area??{w:30,h:12,d:30},this.center=e.center??null,this.y0=e.y0??0;let s=i.count;this.n=s;let a=fe(e.seed??7);this.p=new Float32Array(s*3),this.v=new Float32Array(s*3),this.ph=new Float32Array(s);for(let o=0;o<s;o++)this.p[o*3]=a.range(-.5,.5)*this.area.w,this.p[o*3+1]=this.y0+a.range(0,1)*this.area.h,this.p[o*3+2]=a.range(-.5,.5)*this.area.d,this.ph[o]=a.range(0,Math.PI*2);if(this.opacity=e.opacity??1,this.target=1,this.fade=1,i.shape==="glow"){let o=new Ie;o.setAttribute("position",new je(this.p.slice(),3));let r=new Float32Array(s*3),l=new Lt;for(let c=0;c<s;c++)l.setHex(i.color[c%i.color.length]),r.set([l.r,l.g,l.b],c*3);o.setAttribute("color",new je(r,3)),this.mat=new da({size:i.size,map:gl(),vertexColors:!0,transparent:!0,opacity:this.opacity,depthWrite:!1,blending:Si,sizeAttenuation:!0,fog:!1}),this.obj=new oo(o,this.mat),this.geo=o}else{let o=i.shape==="streak"?new gi(.012,.35,.012):new Ue(i.size,i.size*.7);this.mat=new _s({side:Te,flatShading:!0,transparent:!0,opacity:this.opacity,roughness:1,depthWrite:i.shape!=="streak"}),this.obj=new Dr(o,this.mat,s);let r=new Lt;for(let l=0;l<s;l++)r.setHex(i.color[l%i.color.length]),this.obj.setColorAt(l,r);this.dummy=new Me}this.obj.frustumCulled=!1,this.obj.renderOrder=5}setOpacity(t){this.target=t}update(t,e){let i=this.k,s=this.n;this.fade+=(this.target-this.fade)*Math.min(1,t*1.5),this.mat.opacity=this.opacity*this.fade,this.obj.visible=this.mat.opacity>.01;let a=this.center??x.renderer.camTarget,o=this.area;for(let r=0;r<s;r++){let l=r*3,c=this.ph[r];this.p[l]+=Math.sin(e*.7+c)*i.drift*t+(i.wind??0)*t,this.p[l+1]-=i.fall*t*(.7+.6*Math.sin(c)),this.p[l+2]+=Math.cos(e*.6+c*1.3)*i.drift*t,(this.kind==="fireflies"||this.kind==="motes"||this.kind==="memories")&&(this.p[l+1]+=Math.sin(e*1.3+c)*.15*t),this.p[l+1]<this.y0&&(this.p[l+1]+=o.h),this.p[l+1]>this.y0+o.h&&(this.p[l+1]-=o.h);let h=this.p[l],d=this.p[l+2];h<-o.w/2&&(this.p[l]+=o.w),h>o.w/2&&(this.p[l]-=o.w),d<-o.d/2&&(this.p[l+2]+=o.d),d>o.d/2&&(this.p[l+2]-=o.d)}if(this.geo){let r=this.geo.attributes.position;for(let l=0;l<s;l++){let c=1;(this.kind==="fireflies"||this.kind==="stars")&&(c=.5+.5*Math.sin(e*(this.kind==="stars"?1.2:2.5)+this.ph[l]*3)),r.setXYZ(l,a.x+this.p[l*3],this.p[l*3+1]-(1-c)*0,a.z+this.p[l*3+2])}r.needsUpdate=!0,(this.kind==="fireflies"||this.kind==="stars")&&(this.mat.size=i.size*(.85+.15*Math.sin(e*3)))}else{let r=this.dummy;for(let l=0;l<s;l++)r.position.set(a.x+this.p[l*3],this.p[l*3+1],a.z+this.p[l*3+2]),i.spin?r.rotation.set(e*i.spin*.5+this.ph[l],e*i.spin*.3+this.ph[l]*2,this.ph[l]):r.rotation.set(0,0,.12),r.updateMatrix(),this.obj.setMatrixAt(l,r.matrix);this.obj.instanceMatrix.needsUpdate=!0}}dispose(){this.obj.geometry.dispose(),this.mat.dispose()}},Pl=class{constructor(t,{color:e=16773312,count:i=40,speed:s=2,life:a=1.6,size:o=.3}={}){this.life=a,this.t=0,this.n=i;let r=new Ie;this.p=new Float32Array(i*3),this.v=new Float32Array(i*3);for(let l=0;l<i;l++){this.p.set([t.x,t.y,t.z],l*3);let c=Math.random()*Math.PI*2,h=Math.random()*Math.PI-Math.PI/4,d=s*(.4+Math.random());this.v.set([Math.cos(c)*Math.cos(h)*d,Math.abs(Math.sin(h))*d+.5,Math.sin(c)*Math.cos(h)*d],l*3)}r.setAttribute("position",new je(this.p,3)),this.mat=new da({size:o,color:e,map:gl(),transparent:!0,depthWrite:!1,blending:Si,fog:!1}),this.obj=new oo(r,this.mat),this.obj.frustumCulled=!1,this.geo=r}update(t){this.t+=t;for(let e=0;e<this.n;e++){let i=e*3;this.v[i+1]-=t*.8,this.v[i]*=.985,this.v[i+2]*=.985,this.p[i]+=this.v[i]*t,this.p[i+1]+=this.v[i+1]*t,this.p[i+2]+=this.v[i+2]*t}return this.geo.attributes.position.needsUpdate=!0,this.mat.opacity=Math.max(0,1-this.t/this.life),this.t>=this.life}dispose(){this.geo.dispose(),this.mat.dispose()}};var Ls=class{constructor({bounds:t={minX:-9,maxX:9,minZ:-9,maxZ:9},name:e=""}={}){this.name=e,this.root=new rt,this.bounds=t,this.colliders=[],this.characters=new Set,this.hotspots=[],this.updatables=[],this.particles=[],this.bursts=[],this.creatures=[],this.disposed=!1,x.scene.add(this.root)}add(t,e=0,i=0,{ry:s=0,s:a=1,y:o=0,collide:r=!1,parent:l=null}={}){if(t.position.set(e,o,i),t.rotation.y=s,a!==1&&t.scale.setScalar(a),(l??this.root).add(t),r!==!1&&r!==void 0)if(typeof r=="number")this.addCollider({x:e,z:i,r:r*(a||1),obj:t});else{let c=Math.round(s/(Math.PI/2))%2!==0,h=(c?r.d:r.w)*a,d=(c?r.w:r.d)*a;this.addCollider({minX:e-h/2+(r.ox??0),maxX:e+h/2+(r.ox??0),minZ:i-d/2+(r.oz??0),maxZ:i+d/2+(r.oz??0),obj:t})}return this.track(t),t}track(t){t.traverse(e=>{e.userData&&typeof e.userData.update=="function"&&!this.updatables.includes(e)&&this.updatables.push(e)})}addCollider(t){return this.colliders.push(t),t}removeCollider(t){let e=this.colliders.indexOf(t);e>=0&&this.colliders.splice(e,1)}removeCollidersOf(t){this.colliders=this.colliders.filter(e=>e.obj!==t)}remove(t){this.removeCollidersOf(t),t.parent?.remove(t),this.updatables=this.updatables.filter(e=>{let i=e;for(;i;){if(i===t)return!1;i=i.parent}return!0})}addCharacter(t){this.characters.add(t),this.root.add(t.root)}removeCharacter(t){this.characters.delete(t)}particlesOf(t,e){let i=new Cl(t,e);return this.particles.push(i),this.root.add(i.obj),i}removeParticles(t){let e=this.particles.indexOf(t);e>=0&&this.particles.splice(e,1),t.obj.parent?.remove(t.obj),t.dispose()}burst(t,e){let i=new Pl(t,e);return this.bursts.push(i),this.root.add(i.obj),i}hotspot(t){let e=new Fd(this,t);return this.hotspots.push(e),e}getHotspot(t){return this.hotspots.find(e=>e.id===t)}butterflies(t=3,e={x:0,z:0,r:6},i=1){let s=fe(i);for(let a=0;a<t;a++){let o=new Od(s.pick([16172101,15921906,10143984,15964848]),e,i+a);this.creatures.push(o),this.root.add(o.obj)}}birds(t=5,e=1){let i=new Bd(t,e);return this.creatures.push(i),this.root.add(i.obj),i}resolve(t,e,i=.3){let s=this.bounds;for(let a=0;a<3;a++)for(let o of this.colliders)if(!o.disabled)if(o.r!==void 0){let r=t-o.x,l=e-o.z,c=Math.hypot(r,l),h=o.r+i;c<h&&c>1e-5&&(t=o.x+r/c*h,e=o.z+l/c*h)}else{let r=qt(t,o.minX,o.maxX),l=qt(e,o.minZ,o.maxZ),c=t-r,h=e-l,d=Math.hypot(c,h);if(d<i)if(d>1e-5)t=r+c/d*i,e=l+h/d*i;else{let u=t-o.minX,p=o.maxX-t,g=e-o.minZ,f=o.maxZ-e,y=Math.min(u,p,g,f);y===u?t=o.minX-i:y===p?t=o.maxX+i:y===g?e=o.minZ-i:e=o.maxZ+i}}return t=qt(t,s.minX+i,s.maxX-i),e=qt(e,s.minZ+i,s.maxZ-i),{x:t,z:e}}update(t,e){for(let i of this.characters)i.update(t,e);for(let i of this.updatables)i.userData.update(t,e);for(let i of this.particles)i.update(t,e);for(let i of this.hotspots)i.update(t,e);for(let i of this.creatures)i.update(t,e);this.bursts=this.bursts.filter(i=>{let s=i.update(t);return s&&(i.obj.parent?.remove(i.obj),i.dispose()),!s})}dispose(){this.disposed=!0;for(let t of this.hotspots)t.destroy();for(let t of this.particles)t.dispose();x.scene.remove(this.root),this.root.traverse(t=>{t.geometry&&!t.geometry.parameters&&t.geometry.dispose?.()})}},Mp={little:16773842,story:16763243,work:9422079,exit:16777215,quiet:14214911,secret:15259903},Fd=class{constructor(t,e){this.world=t,Object.assign(this,{id:e.id,label:e.label??"",kind:e.kind??"little",radius:e.radius??1.1,enabled:e.enabled??!0,done:!1,def:e}),this.anchor=e.anchor??null,this.offset=new P(...e.offset??[0,0,0]),this.pos=new P(e.x??0,e.y??0,e.z??0),this.obj=new rt;let i=Mp[this.kind]??Mp.little;this.glow=Ge(i,this.kind==="story"?1.5:1.15,.85),this.core=Ge(16777215,.35,.9),this.obj.add(this.glow,this.core),this.sparks=[];for(let s=0;s<5;s++){let a=Ge(i,.16,.8);this.obj.add(a),this.sparks.push({s:a,ph:s/5})}this.ring=new bt(new Hr(.42,.48,24),new Pe({color:i,transparent:!0,opacity:0,depthWrite:!1,fog:!1})),this.ring.rotation.x=-Math.PI/2,t.root.add(this.obj),t.root.add(this.ring),this.alpha=this.enabled?1:0,this.t=Math.random()*10,this.near=!1}get position(){if(this.anchor){let t=this.anchor.position??this.anchor;return new P(t.x,0,t.z).add(this.offset)}return this.pos}setEnabled(t){this.enabled=t}complete(){this.done=!0,this.enabled=!1}update(t,e){this.t+=t;let i=this.enabled&&!this.done?1:0;this.alpha+=(i-this.alpha)*Math.min(1,t*3);let s=this.position,a=this.def.height??(this.anchor?.height?this.anchor.height+.25:1);this.obj.position.set(s.x,a+Math.sin(this.t*2)*.08,s.z);let o=this.kind==="work"?.75+.25*Math.sign(Math.sin(this.t*6)):.85+Math.sin(this.t*2.5)*.15;this.glow.material.opacity=this.alpha*.85*o*(this.near?1.25:1),this.glow.scale.setScalar((this.kind==="story"?1.5:1.15)*(this.near?1.25:1)*(.95+.05*Math.sin(this.t*3))),this.core.material.opacity=this.alpha*.9;for(let r of this.sparks){let l=(this.t*.35+r.ph)%1,c=r.ph*Math.PI*2+this.t*.5;r.s.position.set(Math.cos(c)*.35,-.6+l*1.3,Math.sin(c)*.35),r.s.material.opacity=this.alpha*Math.sin(l*Math.PI)*.8}this.ring.position.set(s.x,.03,s.z),this.ring.material.opacity=this.alpha*(this.near?.55:.18),this.ring.scale.setScalar(1+(this.near?.15*Math.sin(this.t*4):0)),this.obj.visible=this.alpha>.01,this.ring.visible=this.obj.visible,this.kind==="secret"&&(this.obj.visible=this.near,this.ring.visible=!1,this.glow.material.opacity*=.5)}destroy(){this.obj.parent?.remove(this.obj),this.ring.parent?.remove(this.ring)}},Od=class{constructor(t,e,i){let s=fe(i*13);this.obj=new rt;let a=new Ue(.16,.12);a.translate(.08,0,0);let o=pe(t,{side:Te,emissive:t,emissiveIntensity:.2});this.l=new bt(a,o),this.r=new bt(a,o),this.r.scale.x=-1,this.l.rotation.x=this.r.rotation.x=-Math.PI/2;let r=new rt;r.add(this.l);let l=new rt;l.add(this.r),this.wl=r,this.wr=l,this.obj.add(r,l),this.area=e,this.ph=s.range(0,10),this.sp=s.range(.25,.45),this.obj.scale.setScalar(1.3)}update(t,e){let i=this.area,s=e*this.sp+this.ph,a=i.x+Math.sin(s)*i.r*.8+Math.sin(s*2.3)*.8,o=i.z+Math.cos(s*.8)*i.r*.8+Math.cos(s*1.7)*.8,r=.8+Math.sin(s*3.1)*.35,l=a-this.obj.position.x,c=o-this.obj.position.z;this.obj.position.set(a,r,o),this.obj.rotation.y=Math.atan2(l,c)-Math.PI/2;let h=Math.sin(e*18+this.ph)*1.1;this.wl.rotation.z=h,this.wr.rotation.z=-h}get position(){return this.obj.position}},Bd=class{constructor(t,e){this.obj=new rt,this.birds=[];let i=fe(e);for(let s=0;s<t;s++){let a=new rt,o=new Ue(.3,.1);o.translate(.15,0,0);let r=pe(3816008,{side:Te}),l=new bt(o,r),c=new bt(o,r);c.scale.x=-1,l.rotation.x=c.rotation.x=-Math.PI/2;let h=new rt;h.add(l);let d=new rt;d.add(c),a.add(h,d),this.obj.add(a),this.birds.push({b:a,gl:h,gr:d,off:new P(i.range(-2,2),i.range(-.6,.6),i.range(-2,2)),ph:i.range(0,6)})}this.t=i.range(0,30),this.period=26}update(t,e){this.t+=t;let i=this.t%this.period/this.period,s=x.renderer.camTarget,a=s.x-30+i*60,o=s.z+12-i*24,r=7+Math.sin(i*6)*.5;for(let l of this.birds){l.b.position.set(a+l.off.x,r+l.off.y,o+l.off.z),l.b.rotation.y=-Math.PI/4-Math.PI/2+Math.PI;let c=Math.sin(this.t*10+l.ph)*.8;l.gl.rotation.z=c,l.gr.rotation.z=-c}}};var $w=[8,9,8,7,7,6.5,3.5,6.5,9],Il=class{constructor(t){this.scenes=t,this.index=0,this.current=null,this.ctx=null,this.control=!1,this.inMoment=!1,this.moveTarget=null,this.pendingHotspot=null,this.stepT=0,this.clock=null,this.menuOpen=!1,this.reachedChapter=1}keepWindow(){return this.current?.keepWindow??$w[this.current?.chapter??0]??7}setControl(t){this.control=t,t||(this.moveTarget=null,this.vel={x:0,z:0},x.ui.setPrompt(null),x.player&&(x.player._playerMoving=!1))}renderNow(){x.renderer.render()}async start(t=0){this.index=t,this.runToken=(this.runToken||0)+1;let e=this.runToken;for(;this.index<this.scenes.length&&e===this.runToken;){let i=this.scenes[this.index];this.reachedChapter=Math.max(this.reachedChapter,i.chapter),x.album.forgetFrom(this.scenes.slice(this.index).map(a=>a.id)),x.album.save(this.index);try{localStorage.setItem("lm.reached",String(this.reachedChapter))}catch{}if(await this.runScene(i,e),e!==this.runToken)return;this.index++;let s=this.scenes[this.index];(!s||s.chapter!==i.chapter)&&this.chapterDone(i.chapter,!s)}}chapterDone(t,e){t>=1&&t<=7&&x.achieve?.("ch"+t),t>=1&&x.album.chapterComplete(t)&&x.achieve?.("present"),t===5&&(x.achieve?.(x.state.childKind==="son"?"son":"daughter"),(x.state.stats.workTimes||0)===(x.state.stats.workAtCh5||0)&&x.achieve?.("unplugged")),e&&(x.album.save(0),x.achieve?.("the_end"),x.achieve?.(x.state.identity==="father"?"as_father":"as_mother"),x.ach?.remember("identity",x.state.identity)>=2&&x.achieve?.("both_lives"))}async runScene(t,e){var r;let i=x.ui;this.setControl(!1),x.world&&x.world.dispose(),x.renderer.overrides={},x.timeScale=1;let s=new Ls({bounds:t.bounds??{minX:-9,maxX:9,minZ:-9,maxZ:9},name:t.id});x.world=s,x.player=null,this.current=t;let a={def:t,world:s,flags:x.state.flags,director:this};this.ctx=a,a.passTime=l=>this.passTime(l),a.hotspot=l=>s.getHotspot(l),a.done=l=>!!s.getHotspot(l)?.done,a.end=()=>{this.sceneOver=!0},this.sceneOver=!1,t.build(a);let o=x.renderer;o.camBounds=t.camBounds??null,o.zoomGoal=t.zoom??14,x.player?o.setFollow(x.player):o.setFollow(null),t.camAt&&(o.follow=null,o.camGoal.set(t.camAt[0],0,t.camAt[1])),o.snapCamera(),t.mood&&o.setMood(t.mood,0);for(let l of t.moments??[]){l.caption&&x.album.register(l.caption.id??l.id,t.chapter,Le(l.caption.text??l.caption),t.id,l.alt);let c=l.anchor?l.anchor(a):null,h=s.hotspot({id:l.id,label:l.label,kind:l.kind??"little",x:l.at?.[0],z:l.at?.[1],radius:l.radius??1.2,anchor:c,height:l.height,offset:l.offset,enabled:!1});h.m=l}if(this.refreshHotspots(),this.clock=t.clock?{seconds:t.clock.seconds,t:0,over:!1,ages:t.ages??[0,1]}:null,i.clock(!!this.clock),t.ages&&i.setClock(0,Math.floor(t.ages[0])),i.showHud(!0),t.music&&x.audio.music(t.music,{intensity:t.intensity??.4}),t.ambience&&x.audio.ambience(t.ambience),t.card&&(await i.fade(1,1.2,"#16121a"),await i.chapterCard(t.card)),t.intro?await this.safe(()=>t.intro(a)):await i.fadeIn(1.5),e===this.runToken&&!((t.moments?.length||t.freeRoam)&&(this.setControl(!0),t.hint&&!this.hintShown?.[t.id]&&i.hint(t.hint,9),await new Promise(l=>{this.sceneResolve=l}),e!==this.runToken))){this.setControl(!1);for(let l of s.hotspots)l.done&&l.m&&((r=x.album).lived??(r.lived=new Set)).add(l.m.caption?.id??l.m.id);for(let l of s.hotspots)!l.done&&!l.otherLife&&l.m?.caption&&x.album.lose(l.m.caption.id??l.m.id);t.outro&&await this.safe(()=>t.outro(a)),e===this.runToken&&i.clock(!1)}}async safe(t){try{await t()}catch(e){console.error("[scene error]",e)}}refreshHotspots(){let t=x.world;if(t)for(let e of t.hotspots){if(e.done)continue;let i=e.m;if(!i)continue;let s=!0;i.requires&&(s=i.requires.every(a=>t.getHotspot(a)?.done)),s&&i.when&&(s=!!i.when(this.ctx)),this.clock?.over&&(i.kind??"little")==="little"&&(s=!1),s&&!e.enabled?(e.setEnabled(!0),this.control&&x.audio.sfx("chime",{vol:.35})):!s&&e.enabled&&e.setEnabled(!1)}}async runMoment(t){if(this.inMoment)return;let e=this.current,i=this.ctx;this.inMoment=!0,this.setControl(!1),x.ui.hideHint(),t.near=!1;let s=t.m;if(s.once!==!1&&t.complete(),s.alt)for(let o of i.world.hotspots)o!==t&&o.m?.alt===s.alt&&!o.done&&(o.setEnabled(!1),o.done=!0,o.otherLife=!0);try{await s.run(i,t)}catch(o){console.error("[moment error]",s.id,o)}if(s.once===!1&&t.setEnabled(!0),t.done=s.once!==!1,this.inMoment=!1,x.world!==i.world)return;if(this.refreshHotspots(),(e.final?i.world.getHotspot(e.final)?.done:!1)||this.sceneOver||e.exitWhen&&e.exitWhen(i)){this.finishFreeRoam();return}this.setControl(!0)}finishFreeRoam(){let t=this.sceneResolve;this.sceneResolve=null,t&&t()}passTime(t){this.clock&&(this.clock.t=Math.min(this.clock.seconds,this.clock.t+t))}async timeUp(){let t=this.current,e=this.ctx;this.clock.over=!0,this.inMoment=!0,this.setControl(!1);for(let s of x.world.hotspots)!s.done&&(s.m?.kind??"little")==="little"&&(s.setEnabled(!1),s.done=!0,s.m?.caption&&x.album.lose(s.m.caption.id??s.m.id));x.audio.sfx("lost",{vol:.6});try{t.onTimeUp?await t.onTimeUp(e):await x.ui.lower(t.timeUpText??"And just like that, the day was gone.")}catch(s){console.error(s)}if(this.inMoment=!1,this.refreshHotspots(),!x.world.hotspots.some(s=>!s.done&&s.enabled)||this.sceneOver){this.finishFreeRoam();return}this.setControl(!0)}update(t,e){let i=x.player,s=x.input,a=x.renderer;if(!x.world)return;if(this.clock&&!this.clock.over){this.control&&!this.inMoment&&(this.clock.t+=e);let m=qt(this.clock.t/this.clock.seconds,0,1),w=this.clock.ages,v=$e(w[0],w[1],m);x.ui.setClock(m,Math.floor(v),m>.85),m>=1&&!this.inMoment&&this.control&&this.timeUp()}if(!i)return;let o=null,r=1/0;if(this.control&&!this.inMoment){for(let m of x.world.hotspots){if(!m.enabled||m.done){m.near=!1;continue}let w=m.position,v=yo(w.x,w.z,i.position.x,i.position.z);m.near=!1,v<m.radius&&v<r&&(r=v,o=m)}o&&(o.near=!0)}if(x.ui.promptTarget!==o&&x.ui.setPrompt(o),!this.control)return;if(x.auto&&!this.inMoment){let w=x.world.hotspots.find(v=>v.enabled&&!v.done&&(x.autoSkip?v.kind!=="little":!0)&&v.kind!=="work")??x.world.hotspots.find(v=>v.enabled&&!v.done);if(w){let v=w.position,_=x.world.resolve(v.x+.3,v.z+.3,i.radius);i.position.x=_.x,i.position.z=_.z,x.log?.push("moment: "+w.id),this.runMoment(w)}return}if(!this.inMoment&&o&&(s.pressed("act")||x.ui.promptClicked)){s.consume("act"),x.ui.promptClicked=!1,this.runMoment(o);return}if(x.ui.promptClicked=!1,this.pendingHotspot&&this.pendingHotspot===o){this.pendingHotspot=null,this.moveTarget=null,this.runMoment(o);return}for(let m of s.clicks){let w=null;for(let v of x.world.hotspots){if(!v.enabled||v.done)continue;let _=v.position.clone();_.y=v.def.height??1;let I=a.project(_);Math.hypot(I.x-m.x,I.y-m.y)<46&&(w=v)}if(w){this.pendingHotspot=w;let v=w.position;this.moveTarget=new P(v.x,0,v.z)}else{let v=a.unproject(m.x,m.y,0);v&&(this.moveTarget=v,this.pendingHotspot=null)}}if(s.pointer.down&&s.pointer.moved){let m=a.unproject(s.pointer.x,s.pointer.y,0);m&&(this.moveTarget=m,this.pendingHotspot=null)}let l=s.axis(),c=i.walkSpeed*(this.current.speedMul??1),h=0,d=0;if(l.x||l.y){let{fwd:m,right:w}=a.groundBasis();h=w.x*l.x+m.x*l.y,d=w.z*l.x+m.z*l.y;let v=Math.hypot(h,d);h/=v,d/=v,this.moveTarget=null,this.pendingHotspot=null}else if(this.moveTarget){let m=this.moveTarget.x-i.position.x,w=this.moveTarget.z-i.position.z,v=Math.hypot(m,w),_=this.pendingHotspot?Math.max(.2,this.pendingHotspot.radius*.6):.12;v<_?this.moveTarget=null:(h=m/v,d=w/v)}let u=1;i.age<1.3?u=.55+.75*Math.abs(Math.sin(i.walkPhase*.8)):i.age<2.6&&(u=.8+.25*Math.abs(Math.sin(i.walkPhase)));let p=h*c*u,g=d*c*u,f=h||d?i.age<2.6?6:10:12;this.vel=this.vel||{x:0,z:0},this.vel.x+=(p-this.vel.x)*(1-Math.exp(-f*t)),this.vel.z+=(g-this.vel.z)*(1-Math.exp(-f*t));let y=Math.hypot(this.vel.x,this.vel.z);if(y>.03){let m=i.position.x+this.vel.x*t,w=i.position.z+this.vel.z*t,v=x.world.resolve(m,w,i.radius),_=Math.hypot(v.x-i.position.x,v.z-i.position.z);this.moveTarget&&_<y*t*.1?(this.stuck=(this.stuck||0)+t,this.stuck>.4&&(this.moveTarget=null,this.stuck=0)):this.stuck=0,t>0&&(this.vel.x=(v.x-i.position.x)/t,this.vel.z=(v.z-i.position.z)/t),i.position.x=v.x,i.position.z=v.z,(h||d)&&(i.targetHeading=Math.atan2(h,d)),i.speed=Math.max(y,h||d?c*.6:0),i._playerMoving=!0,this.stepT-=t*y,this.stepT<=0&&(this.stepT=i.age<1.3?.5:.62,x.audio.sfx("step",{surface:this.current.surface??"grass",vol:i.age<3?.5:1}))}else i._playerMoving=!1,this.vel.x=this.vel.z=0}toggleMenu(){if(x.album.open){x.album.hide();return}if(this.menuOpen)return this.closeMenu();if(!this.current)return;this.menuOpen=!0,x.paused=!0,x.audio.duck(.45);let t=document.querySelector("#menu");t.innerHTML="",t.classList.remove("hidden");let e=lt("div","panel");e.appendChild(lt("h2","","Paused"));let i=(c,h)=>{let d=lt("button","",c);return d.addEventListener("click",h),e.appendChild(d),d};i("Continue",()=>this.closeMenu()),i("Album",()=>{this.closeMenu(),this.openAlbum()});let s=(c,h)=>{let d=lt("label","",`<span>${c}</span>`),u=lt("input");u.type="range",u.min=0,u.max=1,u.step=.05,u.value=x.audio.vol[h],u.addEventListener("input",()=>x.audio.setVolume(h,parseFloat(u.value))),d.appendChild(u),e.appendChild(d)};s("Music","music"),s("Sound","sfx"),s("Ambience","amb");let a=lt("label","","<span>Auto-advance text</span>"),o=lt("input");o.type="checkbox",o.checked=x.ui.settings.auto,o.addEventListener("change",()=>{x.ui.settings.auto=o.checked,x.ui.saveSettings()}),a.appendChild(o),e.appendChild(a);let r=lt("label","","<span>Ambient occlusion (quality)</span>"),l=lt("input");l.type="checkbox",l.checked=x.renderer.ao.enabled,l.addEventListener("change",()=>x.renderer.setAO(l.checked)),r.appendChild(l),e.appendChild(r),i("Achievements",()=>{this.closeMenu(),x.showAchievements?.()}),i("Replay this scene",()=>{this.closeMenu(),this.restartScene()}),i("Return to title",()=>{this.closeMenu(),this.onTitle&&this.onTitle()}),e.appendChild(lt("div","small",`${Sd[this.current.chapter]??""}<br>Move: WASD / arrows / click \xB7 Interact: Space / click \xB7 Keep: hold Space`)),t.appendChild(e)}closeMenu(){this.menuOpen=!1,x.paused=!1,x.audio.duck(1),document.querySelector("#menu").classList.add("hidden")}openAlbum(){x.paused=!0,x.album.show(this.current?.chapter??1,{reachedChapter:this.reachedChapter,onClose:()=>{this.menuOpen||(x.paused=!1)}})}restartScene(){this.abort(),this.start(this.index)}abort(){this.runToken=(this.runToken||0)+1,this.sceneResolve=null,this.inMoment=!1,x.updaters.clear(),x.realUpdaters.clear(),x.ui.mgEl.innerHTML="",x.ui.bubblesEl.innerHTML="",x.ui.bubbles=[],x.ui.narrEl.innerHTML="",x.ui.lowerEl.innerHTML="",x.ui.choicesEl.classList.add("hidden"),x.ui.keepEl.classList.add("hidden"),x.ui.setPrompt(null),document.querySelector("#card").classList.add("hidden"),x.timeScale=1}};ii();ii();He();Be();He();var wi=(n,t)=>x.ui.narrate(n,t),$=(n,t)=>x.ui.lower(n,t),G=(n,t,e)=>x.ui.say(n,t,e),_i=(n,t)=>x.ui.say(x.player,n,{thought:!0,...t}),ni=(n,t)=>x.ui.choose(n,t),Tp=(n,t)=>x.ui.askText(n,t),si=(n=1.5,t="#000")=>x.ui.fadeOut(n,t),ai=(n=1.5)=>x.ui.fadeIn(n);var Ae=(n,t=2,e=null)=>x.renderer.setMood(n,t,e),oi=(n,t)=>x.audio.music(n,t),gn=(n,t=2)=>x.audio.setIntensity(n,t),ti=(n,t=3)=>x.audio.ambience(n,t),et=(n,t)=>x.audio.sfx(n,t);function Bt(n,t,e=null,i=2){return x.renderer.cameraTo({x:n,y:0,z:t},e,i)}function Kt(n=x.player,t=null,e=1.5){return x.renderer.setFollow(n),t?x.renderer.zoomTo(t,e):Promise.resolve()}function on(n,t=2){return x.renderer.zoomTo(n,t)}function Sp(n){return new Promise(t=>{let e=i=>{n(i)&&(x.realUpdaters.delete(e),t())};x.realUpdaters.add(e)})}function zd(n){let t=0;return Sp(e=>(t+=e)>=n)}async function Dt(n,t,{window:e=null,chapter:i=null,focus:s=null,holdTime:a=1.5}={}){let o=x.album,r=i??x.director.current?.chapter??0;if(t=Le(t),o.register(n,r,t,x.director.current?.id),o.has(n))return!0;let l=e??x.director.keepWindow(),c=x.ui,h=x.renderer,d=c.keepEl,u=d.querySelector(".fill"),p=d.querySelector(".timer div"),g=d.querySelector(".msg");g.innerHTML=x.input.lastDevice==="touch"?"Hold the screen to keep this moment":"Hold <b>Space</b> to keep this moment",d.classList.remove("hidden","lost","show"),d.offsetWidth,d.classList.add("show"),u.style.strokeDashoffset=251.3,et("chime");let f=x.timeScale;ve(.6,_=>{x.timeScale=$e(f,.3,_)}),h.pulse("saturation",1.22,.8),h.pulse("dream",.35,.8),h.pulse("vignette",-.12,.8),h.pulse("warmth",.15,.8);let y=x.audio.intensityTarget;x.audio.setIntensity(Math.min(1,y+.3),1.2),s&&(h.overrides.focusX=s.x,h.overrides.focusY=s.y);let m=0,w=l,v=!1;if(x.input.endFrame(),await Sp(_=>x.auto?(v=x.autoKeep!==!1,!0):(x.input.holding()?m+=_/a:m=Math.max(0,m-_*.6),m<=.001&&(w-=_),u.style.strokeDashoffset=251.3*(1-qt(m,0,1)),p.style.transform=`scaleX(${qt(w/l,0,1)})`,m>=1?(v=!0,!0):w<=0)),v){x.director.renderNow();let _=h.snapshot(360,270);c.flash(.9),et("shutter"),et("keep");let I=x.player?x.player.position.clone().add(new P(0,1,0)):h.camTarget.clone();x.world?.burst(I,{count:50,color:16770224}),o.keep(n,t,r,_);let T=o.count();T>=1&&x.achieve?.("keep_1"),T>=10&&x.achieve?.("keep_10"),T>=30&&x.achieve?.("keep_30"),T>=60&&x.achieve?.("keep_60"),d.classList.remove("show"),d.classList.add("hidden"),c.flyPolaroid(_,t),await zd(.4)}else d.classList.add("lost"),et("lost"),o.lose(n),await zd(1.6),d.classList.remove("show","lost"),d.classList.add("hidden");return ve(1.2,_=>{x.timeScale=$e(.3,f===.3?1:f,_)}),h.pulse("saturation",1,1.5),h.pulse("dream",0,1.5),h.pulse("vignette",0,1.5),h.pulse("warmth",0,1.5),delete h.overrides.focusX,delete h.overrides.focusY,x.audio.setIntensity(y,3),await zd(v?1:.3),v}function Hd(n,t,e=null){let i=e??x.director.current?.chapter??0;x.album.register(n,i,Le(t),x.director.current?.id),x.album.lose(n)}async function yn(n,t=2,e=.25){for(let i=0;i<t;i++)await ve(.35,s=>{n.extraY=Math.sin(s*Math.PI)*e},s=>s);n.extraY=0}He();function Dn(n){let t=lt("div","mgbox");return n&&t.appendChild(lt("div","mglabel",n)),x.ui.mgEl.appendChild(t),t}function Un(n){n.style.transition="opacity 0.5s",n.style.opacity="0",setTimeout(()=>n.remove(),520)}var Jw=()=>x.input.lastDevice==="touch"?"Hold the screen":"Hold Space",Kw=()=>x.input.lastDevice==="touch"?"Tap":"Press Space";async function Pi({label:n=null,seconds:t=3,onProgress:e=null,drain:i=.35}={}){if(x.auto){e&&e(1,!0,.1),await wt(.3);return}let s=Dn(n??Jw()),a=lt("div","meter"),o=lt("div");a.appendChild(o),s.appendChild(a);let r=0;await di(l=>(x.input.holding()?r+=l/t:r-=l*i/t,r=qt(r,0,1),o.style.width=r*100+"%",e&&e(r,x.input.holding(),l),r>=1)),Un(s)}async function xn({label:n=null,count:t=5,onTap:e=null,timeout:i=null}={}){if(x.auto){for(let d=1;d<=t;d++)e&&e(d),await wt(.05);return t}let s=Dn(n??Kw()),a=lt("div","mgkeys"),o=lt("div","mgkey",x.input.lastDevice==="touch"?"Tap":"Space");a.appendChild(o),s.appendChild(a);let r=lt("div","counter",`0 / ${t}`);s.appendChild(r);let l=0,c=0,h=!1;return o.addEventListener("pointerdown",d=>{d.stopPropagation(),h=!0}),await di(d=>{c+=d;let u=x.input;return(u.pressed("act")||u.pressed("pointer")||h)&&(h=!1,u.consume("act"),u.consume("pointer"),l++,o.classList.remove("on"),o.offsetWidth,o.classList.add("on"),setTimeout(()=>o.classList.remove("on"),120),r.textContent=`${l} / ${t}`,e&&e(l)),l>=t||i&&c>i}),Un(s),l}async function ns({label:n="Press Space with the music",hits:t=6,period:e=null,onlyDownbeat:i=!1,onHit:s=null,onPulse:a=null,window:o=.22,maxPulses:r=null}={}){if(x.auto){for(let v=1;v<=t;v++)a&&a(v),s&&s(v,1),await wt(.1);return t}let l=Dn(n),c=lt("div","pulse"),h=lt("div","dot"),d=lt("div","ring");c.appendChild(h),c.appendChild(d),l.appendChild(c);let u=lt("div","hearts");l.appendChild(u);for(let v=0;v<t;v++)u.appendChild(lt("span","","\u25CB"));let p=0,g=!1,f=0,y=-1,m=x.realTime;c.addEventListener("pointerdown",v=>{v.stopPropagation(),g=!0});let w=!1;return await di(()=>{let v,_,I;if(e){let k=x.realTime-m;v=k%e/e,I=Math.floor(k/e),_=Math.min(v,1-v)*e}else{let k=x.audio.beatInfo(),M=i?k.dur*k.beats:k.dur;i?(v=(k.barBeat+k.phase)/k.beats,I=Math.floor(k.beat/k.beats)):(v=k.phase,I=k.beat),_=Math.min(v,1-v)*M}I!==y&&(y=I,f++,w=!1,a&&a(f));let T=1+(1-v)*.9;d.style.transform=`scale(${T})`,d.style.opacity=.3+v*.7,h.style.transform=`scale(${.8+(_<o?.4:0)})`;let E=x.input;return(E.pressed("act")||E.pressed("pointer")||g)&&(g=!1,E.consume("act"),E.consume("pointer"),_<o&&!w?(w=!0,p++,u.children[p-1].textContent="\u25CF",c.classList.remove("hit"),c.offsetWidth,c.classList.add("hit"),x.audio.sfx("good",{deg:[1,3,5,8,5,3,1,8][p%8]}),s&&s(p,1-_/o)):(x.audio.sfx("miss"),s&&s(p,-1))),p>=t||r&&f>=r}),Un(l),p}async function Ea({label:n="Keep your balance \u2014 \u2190 \u2192",seconds:t=4,difficulty:e=1,onUpdate:i=null}={}){if(x.auto){i&&i(0,1,!0),await wt(.3);return}let s=Dn(n),a=lt("div","balance");a.innerHTML='<div class="bar"></div><div class="zone"></div><div class="ball"></div>',s.appendChild(a);let o=lt("div","touchpads"),r=lt("div","mgkey","\u2190"),l=lt("div","mgkey","\u2192");o.appendChild(r),o.appendChild(l),s.appendChild(o);let c=0,h=v=>_=>{_.stopPropagation(),c=v};r.addEventListener("pointerdown",h(-1)),l.addEventListener("pointerdown",h(1));let d=()=>{c=0};window.addEventListener("pointerup",d);let u=lt("div","meter"),p=lt("div");u.appendChild(p),s.appendChild(u);let g=a.querySelector(".ball"),f=.1,y=0,m=0,w=0;await di(v=>{w+=v;let _=x.input.axis().x+c,I=Math.sin(w*1.7)*.6+Math.sin(w*3.1+1)*.4;y+=(I*.55*e+f*.9*e+_*2.4)*v,y*=Math.pow(.15,v),f=qt(f+y*v*1.6,-1,1),Math.abs(f)>=1&&(y*=-.3);let T=Math.abs(f)<.24;return m=qt(m+(T?v/t:-v/t*.25),0,1),g.style.left=(f+1)/2*100+"%",p.style.width=m*100+"%",i&&i(f,m,T),m>=1}),window.removeEventListener("pointerup",d),Un(s)}var jw={left:"\u2190",right:"\u2192",up:"\u2191",down:"\u2193"};async function vn({label:n="Follow along",keys:t=["left","right","up"],onStep:e=null}={}){if(x.auto){for(let c=0;c<t.length;c++)e&&e(c),await wt(.1);return}let i=Dn(n),s=lt("div","mgkeys");i.appendChild(s);let a=t.map(c=>{let h=lt("div","mgkey",jw[c]??c);return s.appendChild(h),h}),o=0,r=null;a.forEach((c,h)=>c.addEventListener("pointerdown",d=>{d.stopPropagation(),r=h}));let l=()=>a.forEach((c,h)=>{c.classList.toggle("on",h===o),c.classList.toggle("done",h<o)});l(),await di(()=>{let c=x.input,h=null;for(let d of["left","right","up","down"])c.pressed(d)&&(h=d);return r!==null&&(h=r===o?t[o]:"__wrong",r=null),h&&(h===t[o]?(x.audio.sfx("good",{deg:[1,2,3,5,6,8,9,10][o%8]}),e&&e(o),o++,l()):(x.audio.sfx("miss"),a[o].classList.remove("wrong"),a[o].offsetWidth,a[o].classList.add("wrong"))),o>=t.length}),await wt(.3),Un(i)}async function Ne({label:n="Just be here. Don't press anything.",seconds:t=6,onProgress:e=null}={}){if(x.auto){e&&e(1,.1),await wt(.3);return}let i=Dn(n),s=lt("div","still");s.innerHTML='<svg viewBox="0 0 100 100"><circle class="track" cx="50" cy="50" r="40"/><circle class="fill" cx="50" cy="50" r="40"/></svg>',i.appendChild(s);let a=s.querySelector(".fill"),o=0,r=0;x.input.endFrame(),await di(l=>{let c=x.input;return(c.anyPress||c.isDown("left")||c.isDown("right")||c.isDown("up")||c.isDown("down"))&&o>.3&&(o=Math.max(0,o-1.5),r++%2===0&&(i.querySelector(".mglabel").textContent="Shh\u2026 there's no hurry.")),o+=l,a.style.strokeDashoffset=251.3*(1-qt(o/t,0,1)),e&&e(qt(o/t,0,1),l),o>=t}),Un(i)}async function Ep({label:n="Press Space at the right moment",speed:t=1.2,sweet:e=.16,center:i=.7,tries:s=3,onTry:a=null}={}){if(x.auto)return a&&a(1,1),await wt(.2),1;let o=Dn(n),r=lt("div","timing");r.innerHTML=`<div class="sweet" style="left:${(i-e/2)*100}%;width:${e*100}%"></div><div class="needle"></div>`,o.appendChild(r);let l=r.querySelector(".needle"),c=0,h=0,d=0,u=!1;return r.addEventListener("pointerdown",p=>{p.stopPropagation(),u=!0}),r.style.pointerEvents="auto",await di(p=>{c+=p*t;let g=(Math.sin(c*2.2-Math.PI/2)+1)/2;l.style.left=g*100+"%";let f=x.input;if(f.pressed("act")||f.pressed("pointer")||u){u=!1,f.consume("act"),f.consume("pointer");let y=qt(1-Math.abs(g-i)/(e/2+.2),0,1),m=Math.abs(g-i)<=e/2;if(h=Math.max(h,m?1:y*.7),d++,x.audio.sfx(m?"good":"miss",{deg:5}),a&&a(m?1:y*.7,d),m)return!0}return d>=s}),Un(o),h}async function Ro({label:n=null,items:t,radius:e=.6,onCollect:i=null,timeLimit:s=null,needed:a=null,showCount:o=!0}={}){let r=a??t.length;if(x.auto){let u=0;for(let p of t){if(u>=r)break;let g=p.obj?p.obj.position:p;x.player.position.x=g.x,x.player.position.z=g.z,p.got=!0,u++,i&&i(p,u),await wt(.05)}return u}let l=Dn(n),c=lt("div","counter",`0 / ${r}`);o&&l.appendChild(c),x.director.setControl(!0);let h=0,d=0;return await di(u=>{d+=u;let p=x.player.position;for(let g of t){if(g.got)continue;let f=g.obj?g.obj.position:g,y=g.r??e;Math.hypot(f.x-p.x,f.z-p.z)<y+x.player.radius&&(g.got=!0,h++,c.textContent=`${h} / ${r}`,x.audio.sfx("good",{deg:[1,3,5,6,8,10,12][h%7]}),i&&i(g,h))}return h>=r||s&&d>s}),x.director.setControl(!1),Un(l),h}async function kl({target:n,dist:t=1.6,seconds:e=8,label:i="Stay close",onProgress:s=null}={}){if(x.auto){s&&s(1,!0,.1),await wt(.5);return}let a=Dn(i),o=lt("div","meter"),r=lt("div");o.appendChild(r),a.appendChild(o),x.director.setControl(!0);let l=0;await di(c=>{let h=n.position??n,u=Math.hypot(h.x-x.player.position.x,h.z-x.player.position.z)<t;return l=qt(l+(u?c/e:-c/e*.15),0,1),r.style.width=l*100+"%",s&&s(l,u,c),l>=1}),x.director.setControl(!1),Un(a)}Be();He();ii();ii();Ds();function ui(n,t=0,e=0,i=0,s=null){let a=new Aa({...s??as(n),age:n,name:"You"});return a.place(t,e,i),x.player=a,a}function We(n,t,e,i=0,s=0,a=0){let o=new Aa({...n,age:t,name:e});return o.place(i,s,a),o}function Vd(n=2,t=0,e=0){let i=new ss({age:n});return i.name="Biscuit",i.place(t,e),i}function Dl(n,t,e,i,s=1,a=[]){let o=fe(s);for(let r=0;r<t;r++){let l=o.range(e[0],e[1]),c=o.range(e[2],e[3]);a.some(([h,d,u])=>Math.hypot(l-h,c-d)<u)||n.add(i(o,r),l,c,{ry:o.range(0,6.28)})}}function Io(n,{era:t="past",night:e=!1,w:i=8,d:s=7}={}){let a=n.world,o={past:[15979468,16180950],present:[14018780,15985372],kid:[13622512,15919832],teen:[12109016,15261904],empty:[14210254,15131356]}[t],r=e?8228824:16769732,l=yl({w:i,d:s,h:3.4,wall:o[0],wall2:o[1],floor:U.woodLight,windows:[{wall:"back",at:1.2,y:1.1,w:1.6,h:1.4,glow:r,roomW:i,roomD:s}]});a.add(l,0,0);let c=j(.08,2.1,1,t==="past"?16315114:15525080);a.add(c,-i/2+.05,0,{y:0}),c.position.z=1.8;let h=Xi(.05,6,4,U.yellow);a.add(h,-i/2+.12,2.15,{y:1});let d=fe(t==="past"?3:9);for(let T=0;T<26;T++){let E=mn(.08,.08,.02,t==="past"?16312546:t==="present"?15922926:16777215);a.add(E,d.range(-i/2+.4,i/2-.4),-s/2+.02,{y:d.range(1.6,3)}),Math.abs(E.position.x-1.2)<1.1&&E.position.y<2.7&&(E.visible=!1)}let u={room:l,door:c,doorPos:[-i/2+.6,1.8]},p=new bt(new Ue(1.7,1.6),new Pe({color:e?10465535:16773320,transparent:!0,opacity:e?.18:.42,depthWrite:!1,blending:Si}));p.rotation.x=-Math.PI/2,p.rotation.z=.35,a.add(p,1.4,-1.6,{y:.02}),u.beam=p;let g=new bt(new ei(.6,1,3,4,1,!0),new Pe({color:e?10465535:16773071,transparent:!0,opacity:e?.05:.09,depthWrite:!1,side:Te,blending:Si,fog:!1}));if(g.rotation.x=.55,g.rotation.y=Math.PI/4,a.add(g,1.3,-2.4,{y:1.3}),u.shaft=g,t==="past"||t==="present"){let T=_l();a.add(T,-2.5,-2.55,{collide:{w:1.6,d:.95}}),u.crib=T;let E=Id();a.add(E,-2.5,-2.55,{y:.55}),u.mobile=E}else{let T=fp({color:t==="teen"?5925514:t==="empty"?13156536:15901621});a.add(T,-2.9,-1.8,{collide:{w:1.2,d:2.1}}),u.bed=T;let E=Id();a.add(E,-3.6,-3.1,{y:1.6,s:.8}),u.mobile=E,E.userData.speed=.05}let f=mp();a.add(f,2.4,-2.2,{ry:-.7,collide:.5}),u.chair=f;let y=bl(2.6,2.6,t==="past"?15972793:t==="present"?12114120:12635368,U.cream,!0);a.add(y,.3,.6);let m=Ld(1.3,1.3);a.add(m,-.6,-3.25,{collide:{w:1.3,d:.4}});let w=So();a.add(w,-.9,-3.2,{y:1.3}),u.teddy=w;let v=Ml({lit:e||t==="present",h:1.6});if(a.add(v,3.3,-3,{collide:.25}),u.lamp=v,e){let T=new Ts(16763274,6,7,1.6);T.position.set(3.2,1.7,-2.8),a.root.add(T),u.lampLight=T}let _=Tl(1.2);a.add(_,3.4,2.6,{collide:.3});let I=Sa(U.wood);return a.add(I,-i/2+.06,-1,{y:1.9,ry:Math.PI/2}),u.frame=I,u}function Ra(n,{season:t="summer",treeStage:e=1,swing:i=!1,lit:s=!1,picnic:a=!1,sandbox:o=!1,theoHouse:r=!0,flowers:l=!0,cherry:c=!0,lemonade:h=!1,snowman:d=0,sign:u=null}={}){let p=n.world,g={spring:U.grassSpring,summer:U.grass,autumn:U.grassAutumn,winter:U.snow}[t],f=t==="winter"?U.snowShade:U.grassDark,y=Rs({w:28,d:22,top:g,edge:f,seed:4});p.add(y,0,0);let m={season:t},w=cp(28,2.6);p.add(w,0,9.3);let v=Wi(28,.5,t==="winter"?15133424:U.sidewalk,.012);p.add(v,0,7.8);let _=Cd({w:6,d:4.6,h:2.9,wall:16049103,roof:t==="winter"?15331060:U.terracotta,door:5929640,porch:!0,lit:s});if(p.add(_,-5,-6,{collide:{w:6.6,d:5}}),p.addCollider({minX:-7.6,maxX:-2.4,minZ:-3.6,maxZ:-2,porch:!0,disabled:!0}),m.house=_,m.door=[-5,-3.2],m.porch=[-5,-2.4],t==="winter"){let D=j(6.8,.2,5.4,U.snow);p.add(D,-5,-6,{y:2.92}),D.visible=!1}for(let D=0;D<9;D++){let F=nn(.38,t==="winter"?14081254:U.stone,7,.02);p.add(F,-5+(D%2?.15:-.15),-1.6+D*1.05)}let I=U.white,T=xl(7.6,I);p.add(T,-9.6,7),p.addCollider({minX:-13.4,maxX:-5.9,minZ:6.85,maxZ:7.15});let E=xl(17.6,I);p.add(E,4.9,7),p.addCollider({minX:-4.1,maxX:13.7,minZ:6.85,maxZ:7.15});let k=xl(9,I);p.add(k,13.6,2.4,{ry:Math.PI/2});let M=ba({stage:e,season:t,swing:i});if(p.add(M,4,-2.2,{collide:e===0?.15:.25+e*.12}),m.tree=M,m.treePos=[4,-2.2],c){let D=is({kind:"blossom",season:t,size:1.35,seed:5});p.add(D,-10.5,-.5,{collide:.35}),m.cherry=D,m.cherryPos=[-10.5,-.5]}[[-12,-8,"round",1.2],[11.5,-8.5,"pine",1.3],[12,-3,"round",1.1],[-12.5,4.5,"pine",1],[9.5,4.8,"round",.9]].forEach(([D,F,O,z],Y)=>p.add(is({kind:O,season:t,size:z,seed:20+Y}),D,F,{collide:.3*z}));for(let D of[-7.6,-6.6,-3.4,-2.4])p.add(lp(t==="autumn"?11575376:t==="winter"?15265010:7910486,.9,D*3),D,-3.2,{collide:.35});if(l&&t!=="winter"){let D=Wi(3.2,1.1,U.dirt,.015);p.add(D,-9,-3.4);let F=t==="autumn"?[14917691,13197374]:[U.pink,U.yellow,15921906,12166886,U.red];for(let O=0;O<14;O++)p.add(Ps(F[O%F.length],O),-10.4+O%7*.45,-3.75+Math.floor(O/7)*.5)}Dl(p,t==="winter"?0:80,[-13,13,-10,6.5],(D,F)=>Ma(t==="autumn"?12099664:U.grassDark,F),11,[[-5,-6,4],[4,-2.2,1.2],[-5,2,1]]),t!=="winter"&&Dl(p,25,[-13,13,-2,6.5],(D,F)=>Ps(D.pick([U.pink,U.yellow,16777215,12166886]),F),12,[[-5,2,1],[4,-2.2,1.2]]),t==="winter"&&Dl(p,18,[-13,13,-10,6.5],(D,F)=>Cs(.6,F,U.snowShade),13,[[-5,-6,4],[4,-2.2,1.5],[-5,2,1]]),Dl(p,8,[-13,13,-10,6],(D,F)=>Cs(D.range(.5,1),F,t==="winter"?U.snowShade:U.rock),14,[[-5,-6,4],[4,-2.2,1.5],[-5,2,1.5]]);let R=dp();p.add(R,-6.4,6.4,{collide:.2}),m.mailbox=R;let N=vl();if(p.add(N,-3.2,-2.3,{ry:0,collide:{w:1.6,d:.5}}),m.bench=[-3.2,-2],r){let D=Cd({w:4.5,d:4,h:2.5,wall:13623534,roof:7306636,door:U.red,chimney:!1,lit:s});p.add(D,8.5,-6.5,{collide:{w:5,d:4.4}}),m.theoHouse=D,m.theoDoor=[8.5,-4.2]}if(o){let D=hp();p.add(D,-8.5,2.2,{collide:!1}),m.sandbox=[-8.5,2.2]}if(a){let D=wl(U.red);p.add(D,1.2,1.2),m.picnic=[1.2,1.2]}if(h){let D=Rl();p.add(D,2.5,6,{collide:{w:1.5,d:.7}}),m.lemonade=[2.5,5.2]}if(d){let D=Sl(d);p.add(D,0,1,{collide:.45}),m.snowman=D}return p.bounds={minX:-13.6,maxX:13.6,minZ:-10.8,maxZ:10.4},m}function ko(n,{night:t=!0,winter:e=!0,wall:i=15721167,chairs:s=2}={}){let a=n.world,o=8,r=7,l=yl({w:o,d:r,h:3.4,wall:i,wall2:16050904,floor:14205600,windows:[{wall:"back",at:1.4,y:1.2,w:1.7,h:1.3,glow:t?7307976:16771788,roomW:o,roomD:r},{wall:"left",at:-.6,y:1.2,w:1.3,h:1.2,glow:t?7307976:16771788,roomW:o,roomD:r}]});a.add(l,0,0);for(let T=0;T<8;T++)for(let E=0;E<2;E++){let k=Wi(.9,.9,(T+E)%2?15920354:13220002,.004);a.add(k,-3.55+T*.95,-3+E*.9)}let c=vp(3.2);a.add(c,-.6,-3.15,{collide:{w:3.2,d:.7}});let h=wp();a.add(h,-2.65,-3.15,{collide:{w:.75,d:.7}});let d=_p();a.add(d,-3.55,-1.9,{ry:Math.PI/2,collide:{w:.75,d:.75}});let u=Is({w:1.2,round:!0,color:U.wood});a.add(u,.9,.6,{collide:.65});let p={room:l,table:[.9,.6]},g=[[.9,-.35,0],[1.85,.6,-Math.PI/2],[.9,1.55,Math.PI],[-.05,.6,Math.PI/2]];p.chairs=[];for(let T=0;T<s;T++){let[E,k,M]=g[T],b=pp(U.woodDark);a.add(b,E,k,{ry:M}),p.chairs.push([E,k,M])}let f=Ml({lit:t,table:!0});a.add(f,3.2,-3.1,{y:0});let y=Is({w:.6,d:.5,h:.7,color:U.woodLight});if(a.add(y,3.2,-3.1,{collide:.4}),f.position.y=.7,t){let T=new Ts(16762250,9,8,1.4);T.position.set(1,2.2,.6),a.root.add(T),p.light=T;let E=Fi(.35,.3,8,15915440,{emissive:16766352,emissiveIntensity:1.2});a.add(E,.9,.6,{y:2.3});let k=j(.02,1.1,.02,5592405);a.add(k,.9,.6,{y:2.55});let M=Ge(16766362,3,.55);M.position.set(.9,2.3,.6),a.root.add(M)}let m=Ao(U.white);a.add(m,.65,.5,{y:.75}),p.mug=m;let w=Tl(1.1);a.add(w,3.4,2.7,{collide:.3});let v=bl(2.8,2.2,13209466,15258812);a.add(v,.9,.6),[[-o/2+.06,1.6,2],[-o/2+.06,2.6,2.4],[-o/2+.06,1.8,1.6]].forEach(([T,E,k],M)=>{let b=Sa([U.wood,U.woodDark,U.white][M],null,.45,.35);a.add(b,T,E,{y:k,ry:Math.PI/2})});let I=j(.06,1,.5,6965818);return a.add(I,-o/2+.1,3,{y:1.2}),p.coatHook=[-3.4,3],p}function Rp(n,{night:t=!1,fire:e=!0,toys:i=!0,wall:s=15260875,tree:a=!1}={}){let o=n.world,r=9,l=7.5,c=yl({w:r,d:l,h:3.4,wall:s,wall2:15853270,floor:U.wood,windows:[{wall:"back",at:2.2,y:1,w:1.8,h:1.5,glow:t?7307976:16771528,roomW:r,roomD:l}]});o.add(c,0,0);let h={room:c},d=xp();if(o.add(d,-r/2+.3,-.8,{ry:Math.PI/2,collide:{w:1.6,d:.6}}),e||(d.userData.fire.visible=!1),h.fireplace=d,e){let v=new Ts(16751184,7,7,1.5);v.position.set(-r/2+1,.8,-.8),o.root.add(v),h.fireLight=v}let u=kd(9414856);o.add(u,.6,-2.7,{collide:{w:2.1,d:.9}}),h.sofa=[.6,-2.2];let p=kd(13146762);p.scale.set(.5,1,1),o.add(p,3.4,-.6,{ry:-Math.PI/2,collide:{w:1.1,d:.9}});let g=bl(3.4,2.6,14262394,15785152);o.add(g,.4,.2);let f=Is({w:1.2,d:.7,h:.4,color:U.woodLight});o.add(f,.6,-1.2,{collide:{w:1.2,d:.7}});let y=Ld(1.6,1.9);o.add(y,-1.8,-3.5,{collide:{w:1.6,d:.4}});let m=Ml({lit:t,h:1.6});if(o.add(m,3.8,-3.2,{collide:.25}),t){let v=new Ts(16763274,5,7,1.6);v.position.set(3.8,1.7,-3.2),o.root.add(v)}if(i&&(o.add(gp(5),-1.2,1.4),o.add(yp(),2.2,1.6),o.add(So(14200958),-2.3,2.6),h.blocks=[-1.2,1.4]),a){let v=is({kind:"pine",season:"summer",size:1.15,seed:77});o.add(v,3.6,2.7,{collide:.6});let _=[],I=fe(5);for(let E=0;E<14;E++){let k=[16765562,16747146,10146047,12120736][E%4],M=Xi(.06,5,4,k,{emissive:k,emissiveIntensity:2.5}),b=E*1.7,R=.9+E/14*2,N=1.05-E/14*.75;o.add(M,3.6+Math.cos(b)*N,2.7+Math.sin(b)*N,{y:R}),_.push(M)}let T=me(.14,0,U.yellow,0,1,{emissive:U.yellow,emissiveIntensity:2});o.add(T,3.6,2.7,{y:3.55});for(let E=0;E<3;E++)o.add(El([U.red,U.teal,U.yellow][E],[U.yellow,U.white,U.red][E],.35+E*.05),3+E*.5,1.8-E%2*.3);h.xmasTree=[3.6,2.7]}return o.add(Tl(1.2),-3.9,3.2,{collide:.3}),[[-1.8,2.4],[-.9,2.2],[0,2.5]].forEach(([v,_],I)=>o.add(Sa([U.wood,U.white,U.woodDark][I],null,.5,.4),v,-l/2+.06,{y:_})),o.bounds={minX:-r/2+.2,maxX:r/2-.1,minZ:-l/2+.2,maxZ:l/2-.1},h}function Ca(n,{clouds:t=6,seed:e=1,y:i=-3,spread:s=22}={}){let a=fe(e);for(let o=0;o<t;o++){let r=Ta(e+o,a.range(1,1.8)),l=o/t*Math.PI*2;n.world.add(r,Math.cos(l)*s*a.range(.9,1.2),Math.sin(l)*s*a.range(.9,1.2),{y:i+a.range(-2,3)}),r.userData.update=(c,h)=>{r.position.x+=Math.sin(h*.05+o)*.004},n.world.track(r)}}ii();var Cp={id:"prologue",chapter:0,mood:"kitchenNight",music:"winter",intensity:.15,ambience:{room:.6,clock:.35,wind:.25},zoom:8.5,surface:"wood",bounds:{minX:-3.8,maxX:3.8,minZ:-3.3,maxZ:3.3},hint:"Move with <b>WASD</b> / <b>arrows</b> or <b>click</b>. Walk to a glowing light and press <b>Space</b>.",build(n){let t=ko(n,{night:!0,chairs:2});n.r=t;let e=ui(79,-1.6,1.6,Math.PI*.75);e.giveCane(!0),n.me=e;let i=j(.42,.06,.3,7316424);n.world.add(i,1.85,.6,{y:.5});let s=Al();n.world.add(s,1.1,.75,{y:.75,ry:.3}),n.albumObj=s},async intro(n){await wt(.5),await ai(4),await $("It is late, and the house is very quiet."),await _i("When did it get so quiet?")},moments:[{id:"window",label:"Look out at the snow",at:[1.4,-2.4],async run(n){let t=n.me;await t.walkTo(1.4,-2.2),t.face(1.4,-4),await on(7,2),await Ne({seconds:4,label:"Watch the snow fall."}),await $("Snow on the old tree again."),await $("Every winter it looks as if it might not wake up. Every spring, somehow, it does."),await on(8.5,2)}},{id:"scarf",label:"The other chair",at:[2.3,1],async run(n){let t=n.me;await t.walkTo(2.5,1.1),t.face(1.85,.6),await wt(.6),await $("A blue scarf, still folded on the other chair."),await $("You never could bring yourself to move it.")}},{id:"frames",label:"The photographs on the wall",at:[-3,2],async run(n){let t=n.me;await t.walkTo(-3.1,2),t.face(-4,2),await wt(.5),await $("Three frames. A wedding. A birthday cake. A child in a too-big coat, laughing at something you can no longer remember."),await _i("I should have taken more.")}},{id:"fridge",kind:"secret",label:"Something on the fridge",at:[-2.9,-1.5],radius:.8,async run(n){let t=n.me;await t.walkTo(-2.85,-1.4),t.face(-3.55,-1.9),await $("A fridge magnet shaped like a small brown dog. Chipped, faded, older than the fridge."),await _i("Biscuit. I haven\u2019t thought about Biscuit in years."),x.achieve?.("fridge")}},{id:"album",kind:"story",label:"Open the album",at:[.4,.2],requires:[],async run(n){let t=n.me;await t.walkTo(.9,-.55),t.giveCane(!1),t.faceNow(.9,.6),t.setPose("read",{h:.45}),t.position.set(.9,0,-.35),await Bt(.9,.3,5.8,3),oi("title",{intensity:.2}),await $("The album. A gift, years and years ago."),await $("\u201CFor all the little moments,\u201D the card said."),await $("So many pages. So few pictures."),await _i("Where did it all go?"),await Ne({seconds:4,label:"Turn the first page."}),et("rustle"),gn(.6,4),Ae("dream",6),await wi(["Let\u2019s go back.","Back to the beginning, when everything was enormous \u2014","\u2014 and you were so very small."],{minTime:1.2}),await si(3,"#fff6ee"),x.ui.clearNarration()}}],final:"album"};Be();ii();ii();He();Ds();var Pa=["\u266A Little one, little one, close your eyes\u2026","\u266A the stars are out, the moon will rise\u2026","\u266A and when you wake, I\u2019ll still be here \u2014","\u266A little one, my little dear."];var Ip={id:"ch1-nursery",chapter:1,card:{num:"I",title:"Tiny",ages:"zero to one",quote:"You were so small once. Small enough to fit in two hands."},mood:"dawnNursery",music:"tiny",intensity:.3,ambience:{room:.4,birds:.35},zoom:6.2,surface:"wood",bounds:{minX:-3.75,maxX:3.75,minZ:-3.2,maxZ:3.3},hint:"You can only crawl. That\u2019s alright \u2014 nothing here is in a hurry. Find the glowing lights.",build(n){let t=n.world;n.r=Io(n,{era:"past"}),n.me=ui(.7,.3,.7,Math.PI*.8),n.me.setPose("sitGround"),n.mom=We(Fe.mom,31,"Mom",-3.5,1.8,Math.PI/2),n.mom.root.visible=!1,n.dad=We(Fe.dad,33,"Dad",-3.5,1.8,Math.PI/2),n.dad.root.visible=!1,t.add(nn(.55,10123882,10,.02),-2.7,1.6),n.dog=Vd(1,-2.7,1.6),n.dog.setPose("lie"),n.dog.wag=.3,n.dog.heading=n.dog.targetHeading=.6,t.addCollider({x:-2.7,z:1.6,r:.4}),n.blocks=[U.red,U.yellow,U.blue].map((e,i)=>{let s=j(.26,.26,.26,e);return t.add(s,1.4+i*.38,1.6+i%2*.25,{ry:i*.5}),s}),n.motes=t.particlesOf("motes",{center:new P(1.4,0,-1.6),area:{w:2.2,h:2.6,d:2.2},count:45,opacity:.35}),Ca(n,{clouds:4,y:-6,spread:14})},async intro(n){ti({heartbeat:.8,room:.2},.5),await wi(["Before you knew any words,","before you knew your own name,","there was a heartbeat. And then, there was light."],{minTime:1.3}),ti({room:.4,birds:.35},4),x.ui.clearNarration(),await ai(4),et("coo"),await $("This was the whole world: one room, soft and pink and very, very big.")},moments:[{id:"mobile",label:"Look up at the stars",at:[-2.5,-1.75],caption:"The stars above your crib",async run(n){let t=n.me;await t.walkTo(-2.5,-1.75),t.faceNow(-2.5,-2.6),t.setPose("sitGround",{look:-.55,reach:!0}),n.r.mobile.userData.speed=.7,await Bt(-2.5,-2.3,4.6,2.5),et("sparkle"),await Ne({seconds:5,label:"Watch them turn."}),await $("Five little stars, going round and round."),await $("The whole sky, as far as you knew."),await Dt("mobile","The stars above your crib"),t.setPose("idle"),n.r.mobile.userData.speed=.25,await Kt(t,6.2)}},{id:"sunbeam",label:"Crawl into the sunlight",at:[1.4,-1.5],caption:"Warm light on the floor",async run(n){let t=n.me;await t.walkTo(1.4,-1.5),t.setPose("sitGround",{look:-.2}),n.motes.setOpacity(2.6),Ae("dawnNursery",3,{warmth:.6,dream:.45,bloom:.6}),await on(4.8,3),await Ne({seconds:6,label:"Feel the warm light."}),await $("Morning came in through the window and lay down on the floor beside you."),await Dt("sunbeam","Warm light on the floor"),n.motes.setOpacity(1),Ae("dawnNursery",3),t.setPose("idle"),await on(6.2,2)}},{id:"biscuit",label:"Say hello to Biscuit",at:[-1.9,1.75],caption:"Biscuit, who was patient with you",async run(n){let t=n.me,e=n.dog;await t.walkTo(-1.95,1.7),t.face(-2.7,1.6),t.setPose("sitGround"),e.faceChar(t),e.wag=.8,await Bt(-2.3,1.6,4.5,1.5),await xn({count:5,label:"Pat Biscuit",onTap:i=>{e.wag=.8+i*.3,et(i%2?"giggle":"coo"),i===3&&e.setPose("sit")}}),et("woof",{vol:.5}),await yn(t,1,.08),await $("Biscuit was only a puppy too. The two of you were learning the world together."),await Dt("biscuit","Biscuit, who was patient with you"),e.setPose("lie"),e.wag=.4,t.setPose("idle"),await Kt(t,6.2)}},{id:"blocks",label:"Build a tower",at:[1.8,1.25],caption:"Your first tower \u2014 and your first ruin",async run(n){let t=n.me;await t.walkTo(1.75,1),t.face(1.8,1.7),t.setPose("sitGround"),await Bt(1.8,1.5,4.4,1.5);let e=new P(1.8,0,1.75);await vn({label:"Stack the blocks",keys:["up","up","up"],onStep:i=>{let s=n.blocks[i],a=s.position.clone(),o=e.clone().setY(i*.26);ve(.5,r=>{s.position.lerpVectors(a,o,r),s.position.y+=Math.sin(r*Math.PI)*.35,s.rotation.y=(1-r)*i*.5}),et("tap")}}),await wt(.6),await xn({count:1,label:"Now\u2026 knock it down!"}),et("thud"),n.blocks.forEach((i,s)=>{let a=i.position.clone(),o=new P(e.x+(s-1)*.5+.2,0,e.z+.3+s*.2);ve(.6,r=>{i.position.lerpVectors(a,o,r),i.position.y=Math.max(0,a.y*(1-r)+Math.sin(r*Math.PI)*.2),i.rotation.x=r*(1+s)})}),await wt(.5),et("giggle"),await yn(t,2,.08),await $("Your first tower. Your first ruin. Both were wonderful."),await Dt("blocks","Your first tower \u2014 and your first ruin"),t.setPose("idle"),await Kt(t,6.2)}},{id:"plant",kind:"secret",label:"That plant looks delicious",at:[3.1,2.3],radius:.8,async run(n){let t=n.me;await t.walkTo(3.1,2.25),t.face(3.4,2.6),t.setPose("sitGround",{reach:!0}),et("rustle"),await wt(.8),et("coo",{pitch:.8}),await $("It did not taste delicious. It tasted like a plant."),await $("Somewhere downstairs, a voice called: \u201CIs everything alright up there?\u201D"),x.achieve?.("plant_snack"),t.setPose("idle")}},{id:"lullaby",kind:"story",label:"Call for someone",at:[.3,.6],radius:1.3,caption:"The song she sang",async run(n){let t=n.me;t.setPose("sitGround",{look:-.3});let e=await ni("You want someone. You want\u2026",["\u201CMama!\u201D","\u201CPapa!\u201D"]),i=e===0?n.mom:n.dad;n.singer=i,n.other=e===0?n.dad:n.mom,x.state.flags.calledFor=e===0?"mom":"dad",x.achieve?.(e===0?"call_mom":"call_dad");let s=e===0?"She":"He";et("cry"),await wt(2),et("door"),i.root.visible=!0,i.place(-3.4,1.8,Math.PI/2),await Bt(-1.2,1.2,6.5,1.5),await i.walkTo(t.position.x-.8,t.position.z+.2),i.faceChar(t),G(i,"Oh, oh, oh. I know. I know."),i.setPose("crouch"),await wt(.8),i.pickUp(t),i.setPose("carry"),et("coo"),await G(i,e===0?"There you are, little one. Did you think I\u2019d gone?":"Hey, hey. Papa\u2019s here. Papa\u2019s got you."),await i.walkTo(2.3,-1.55),i.place(2.4,-2.15,-.7),i.setPose("rock"),await Bt(2.3,-1.8,4.8,2),oi("tinyHum",{intensity:.45});let a=n.r.chair.userData.rock,o=0,r=c=>{o+=c;let h=Math.sin(o*2)*.09;a.rotation.x=h,i.lean=h*.8};x.updaters.add(r),await wt(1.5);let l=(async()=>{for(let c of Pa)await G(i,c,{passive:!0,hold:3.4,name:i.name})})();await ns({label:`Rock with ${e===0?"her":"him"} \u2014 press Space on the first beat of each bar`,hits:4,onlyDownbeat:!0,window:.3}),await l,await Dt("lullaby",e===0?"The song she sang":"The song he sang"),e===1&&await $("Your father couldn\u2019t really sing. He sang anyway \u2014 the song his own mother had sung to him."),await $(`${s} sang it every night. One day you would sing it too \u2014 though you didn\u2019t know that yet.`),x.updaters.delete(r),a.rotation.x=0,i.lean=0,i.setPose("idle"),i.position.set(2,0,-1.5),await i.walkTo(.6,.9),i.putDown(.3,.6),t.setPose("sitGround"),await G(i,"Play for a little while. I\u2019m right here."),await i.walkTo(2,-1.4),i.place(2.4,-2.15,-.7),i.setPose("rock"),i.lookAt(t),oi("tiny",{intensity:.4}),await Kt(t,6.2)}},{id:"firstSteps",kind:"story",label:"Pull yourself up on the crib",at:[-1.6,-1.8],requires:["lullaby"],caption:"Three steps. They cried.",async run(n){let t=n.me,e=n.singer??n.mom,i=n.other??n.dad;await t.walkTo(-1.6,-1.85),t.faceNow(-1.6,-2.6),et("door"),i.root.visible=!0,i.place(-3.4,1.8,Math.PI/2),await Bt(-.4,-.3,6.8,1.5),await i.walkTo(.9,1),i.faceChar(t),await G(i,"Hey, hey \u2014 what\u2019s this? What are you up to?"),e.setPose("idle"),e.lookAt(null),e.walkTo(1.7,-.6).then(()=>e.faceChar(t)),t.setAge(1.35),t.setPose("stand"),t.faceNow(i.position.x,i.position.z),et("coo"),await G(e,"Oh. Oh my goodness. Look.",{passive:!0,hold:2}),i.setPose("kneelOpen"),await Ea({label:"Find your balance \u2014 \u2190 \u2192",seconds:3.5,difficulty:.8,onUpdate:o=>{t.tilt=-o*.3}}),t.tilt=0,await G(i,"Come on. Come to me. You can do it."),t.setPose("idle"),x.director.current.speedMul=.55;let s=0,a=o=>{s+=o,t.tilt=Math.sin(s*7)*.12};x.updaters.add(a),await Ro({label:`Walk to ${i.name}`,items:[{x:i.position.x,z:i.position.z,r:.45}],showCount:!1}),x.updaters.delete(a),t.tilt=0,x.director.current.speedMul=1,i.pickUp(t),i.setPose("carryHigh"),et("giggle"),et("yay",{delay:.2}),yn(i,2,.15),await Bt(i.position.x,i.position.z,5.2,1.2),await G(i,"Look at you! Look at you go!"),e.setPose("cry"),await G(e,"Three steps! Did you count? Three!"),await G(e,"I\u2019m not crying. You\u2019re crying."),await Dt("firstSteps","Three steps. They cried."),x.achieve?.("first_steps"),e.setPose("idle"),await $("That spring, they carried you outside for the very first time."),await si(2.5,"#fff6ee")}}],final:"firstSteps"};function Pp(n){let t=n==="grandpa",e=t?"grandpaLap":"grandmaLap";return{id:e,kind:"story",alt:"lap",label:t?"Go to Grandpa":"Go to Grandma",anchor:i=>i[n],offset:[0,0,.8],requires:["firstWord"],caption:t?"Asleep on Grandpa\u2019s lap":"Asleep on Grandma\u2019s lap",async run(i){let s=i.me,a=i[n],o=i.dad,r=x.state.flags.calledFor==="dad"?"father":"mother";o.setPose("idle"),await o.walkToChar(s,.6),o.setPose("crouch"),await wt(.5),o.pickUp(s),o.setPose("carry"),await o.walkTo(a.position.x+.2,a.position.z+.9),o.faceChar(a),await G(a,t?"Give that little bundle here.":"Come to Grandma, sweet pea. Come here."),o.putDown(a.position.x,a.position.z+.3),a.pickUp(s),a.setPose("carry"),await o.walkTo(.4,.3),await Bt(a.position.x,a.position.z,4.6,2.5),oi(t?"whistle":"tinyHum",{intensity:.5}),Ae("goldenAfternoon",10,{dream:.3}),t?(await $("Grandpa whistled the same song you had heard in the nursery."),await $(`He had sung it to your ${r} once, when they were the one who was small.`)):(await $("Grandma hummed the song \u2014 slower than anyone else ever sang it."),await $(`She had taught it to your ${r}, a long time ago, in a different nursery.`),await G(i.grandpa,"You always did put them to sleep faster than me.")),await Ne({seconds:7,label:"Close your eyes."}),s.setPose("sleep"),await Dt(e,t?"Asleep on Grandpa\u2019s lap":"Asleep on Grandma\u2019s lap",{window:10}),x.achieve?.(t?"grandpa_lap":"grandma_lap"),x.state.flags.lap=n,await wt(1),oi("tiny",{intensity:.2}),await si(4,"#16121a"),await wi(["You won\u2019t remember any of this.","Not the stars, not the sunlight, not the song.","But they will.","They will carry it for you \u2014 until you\u2019re big enough to carry it yourself."],{minTime:1.4}),x.ui.clearNarration(),await wt(1.2)}}}var kp={id:"ch1-spring",chapter:1,mood:"springMorning",music:"tiny",intensity:.45,ambience:{birds:.8,wind:.25},zoom:8,surface:"grass",hint:"Explore the garden. Nobody is in a hurry today.",build(n){let t=n.world;n.r=Ra(n,{season:"spring",treeStage:0,picnic:!0,flowers:!0}),n.r.tree.visible=!1,t.removeCollidersOf(n.r.tree),t.bounds={minX:-9.8,maxX:6.5,minZ:-3.6,maxZ:5.8};let e=n.me=ui(1.1,1.2,1,Math.PI*.2);e.setPose("sitGround"),n.mom=We(Fe.mom,32,"Mom",.4,1.9,2.4),n.mom.setPose("sitGround"),n.dad=We(Fe.dad,34,"Dad",2.1,1.6,-2),n.dad.setPose("sitGround"),n.grandpa=We(Fe.grandpa,66,"Grandpa",-3.6,-2.05,0),n.grandpa.setPose("sit",{h:.45}),n.grandma=We(Fe.grandma,64,"Grandma",-2.8,-2.05,0),n.grandma.setPose("sit",{h:.45}),n.dog=Vd(1.5,3.5,2.5),n.dog.follow(e,1.8),n.dog.wag=1,n.petals=t.particlesOf("petals",{center:new P(-8.5,0,0),area:{w:7,h:5,d:7},count:70}),t.butterflies(3,{x:0,z:3,r:4},3),t.birds(6,2),Ca(n,{clouds:7,y:-4,spread:24})},async intro(n){await ai(3),await $("The world, it turned out, was much bigger than one room."),await G(n.grandma,"Look at those eyes. They want to see everything.")},moments:[{id:"hedgehog",kind:"secret",label:"Something is rustling in the flowers",at:[-8.4,-2.7],radius:.9,async run(n){let t=n.me,e=n.world;await t.walkTo(-8.4,-2.6),t.face(-8.8,-3.4),t.setPose("sitGround",{look:.3}),et("rustle");let i=new rt,s=me(.16,1,9071184,.03);s.scale.set(1,.7,1.3),s.position.y=.1,i.add(s);for(let r=0;r<14;r++){let l=Fi(.03,.12,3,5916214),c=r*2.4;l.position.set(Math.cos(c)*.1,.16+r%3*.02,Math.sin(c)*.12-.03),l.rotation.set(-.6+Math.sin(c)*.4,0,Math.cos(c)*.6),i.add(l)}let a=me(.07,0,14268566);a.position.set(0,.08,.2),i.add(a);let o=Xi(.022,5,4,2236962);o.position.set(0,.08,.27),i.add(o),e.add(i,-8.8,-3.3,{ry:.5}),await ve(1.2,r=>{i.position.z=-3.3+r*.25}),et("giggle"),await $("A hedgehog. It looked at you. You looked at it. Neither of you had ever seen anything like the other."),x.achieve?.("hedgehog"),await ve(1.5,r=>{i.position.z=-3.05-r*.5,i.scale.setScalar(1-r*.3)}),e.remove(i),t.setPose("idle")}},{id:"petals",label:"Reach for the falling petals",at:[-7.6,.4],caption:"Blossoms, falling like slow snow",async run(n){let t=n.me,e=n.world;await t.walkTo(-7.6,.4),await Bt(-8,.4,6.5,1.5),t.setPose("sitGround",{look:-.4,reach:!0}),await wt(1),t.setPose("idle");let i=fe(9),s=[];for(let a=0;a<5;a++){let o=Ge(16763096,.55,.95),r=-8+i.range(-2.2,2.2),l=.4+i.range(-2,2);o.position.set(r,3+a*.6,l),e.root.add(o);let c={obj:o,x:r,z:l},h=d=>{o.position.y>.25&&(o.position.y-=d*.45,o.position.x+=Math.sin(x.time*2+a)*d*.3),c.got&&(o.material.opacity-=d*2,o.material.opacity<=0&&(e.root.remove(o),x.updaters.delete(h)))};x.updaters.add(h),s.push(c)}await Kt(t,7),await Ro({label:"Catch the petals",items:s,radius:.55,onCollect:()=>et("giggle")}),t.setPose("sitGround",{look:-.3}),await G(n.grandma,"The blossoms only last a week, little one.",{name:"Grandma"}),await $("You didn\u2019t know what a week was. You didn\u2019t know they only last a week."),await Dt("petals","Blossoms, falling like slow snow"),t.setPose("idle")}},{id:"grass",label:"Touch the grass",at:[3.6,4],caption:"The first time you touched grass",async run(n){let t=n.me;await t.walkTo(3.6,4),t.setPose("sitGround",{look:.4}),await Bt(3.6,4,4.6,1.5),ti({birds:1,wind:.4},2),await Pi({label:"Hold Space to feel the grass",seconds:3,onProgress:(e,i)=>{i&&Math.random()<.04&&et("rustle",{vol:.5})}}),et("giggle"),await yn(t,2,.06),et("giggle",{delay:.3}),await $("It was cool, and it tickled. You laughed at the grass for a long, long time."),await Dt("grass","The first time you touched grass"),ti({birds:.8,wind:.25},2),t.setPose("idle"),await Kt(t,8)}},{id:"butterfly",label:"Follow the butterfly",at:[-2,4.2],caption:"The butterfly that got away",async run(n){let t=n.me,e=n.world,i=new rt,s=new Ue(.22,.17);s.translate(.11,0,0);let a=pe(16774896,{side:Te,emissive:16773344,emissiveIntensity:.6}),o=new bt(s,a),r=new bt(s,a);r.scale.x=-1,o.rotation.x=r.rotation.x=-Math.PI/2;let l=new rt;l.add(o);let c=new rt;c.add(r),i.add(l,c);let h=Ge(16774368,.7,.6);i.add(h),e.root.add(i);let d=0,u=g=>{d+=g*.32;let f=-2+Math.sin(d)*2.6+Math.sin(d*2.2)*.6,y=3.4+Math.cos(d*.8)*1.6,m=f-i.position.x,w=y-i.position.z;i.position.set(f,.7+Math.sin(d*5)*.2,y),i.rotation.y=Math.atan2(m,w)-Math.PI/2;let v=Math.sin(x.time*14)*1.1;l.rotation.z=v,c.rotation.z=-v};x.updaters.add(u),await Kt(t,7),await kl({target:i,dist:1.5,seconds:9,label:"Follow it. Don\u2019t lose it."}),t.setPose("sitGround",{look:-.5,reach:!0}),await wt(.5),x.updaters.delete(u);let p=i.position.clone();await ve(3,g=>{i.position.set(p.x+g*3,p.y+g*6,p.z-g*2);let f=Math.sin(x.time*14)*1.1;l.rotation.z=f,c.rotation.z=-f}),e.root.remove(i),await $("It never let you catch it. That was alright. Some things are only for watching."),await Dt("butterfly","The butterfly that got away"),t.setPose("idle")}},{id:"firstWord",kind:"story",label:"Crawl back to the blanket",at:[1.2,1.2],radius:1.4,caption:{id:"firstWord",text:"Your first word"},async run(n){let t=n.me,e=n.mom,i=n.dad;await t.walkTo(1.25,1.05),t.setPose("sitGround"),t.face(1.2,4),await Bt(1.2,1.4,5.2,1.5),e.lookAt(t),i.lookAt(t),await G(e,"Can you say \u201CMama\u201D? Ma-ma?"),await G(i,"Don\u2019t listen to her. Da-da. Daaa-da."),n.dog.walkTo(2.4,2.4).then(()=>n.dog.setPose("sit"));let s=await ni("Your very first word\u2026",["\u201CMama.\u201D","\u201CDada.\u201D","\u201CWoof!\u201D"]),a=["Mama","Dada","Woof"][s];et("coo",{pitch:1.2}),await wt(.6),s===0?(e.setPose("jump"),await G(e,"Did you hear that? Did everyone hear that?!"),e.setPose("sitGround"),await G(i,"That\u2019s not fair. I\u2019ve been practising with them for weeks.")):s===1?(i.setPose("jump"),await G(i,"YES! Everyone heard that, right? That counts!"),i.setPose("sitGround"),await G(e,"Traitor."),await $("She was smiling when she said it.")):(et("woof",{n:2}),n.dog.wag=2,await G(n.grandpa,"Well. Now we know who the favourite is."),await G(e,"Biscuit! You taught them that!")),et("giggle"),await Dt("firstWord",`Your first word: \u201C${a}\u201D`),x.state.flags.firstWord=a,x.achieve?.("first_word"),s===2&&x.achieve?.("word_woof")}},Pp("grandpa"),Pp("grandma")],exitWhen:n=>n.done("grandpaLap")||n.done("grandmaLap")};Be();ii();ii();He();Ds();function Lp(){return an(512,384,(n,t,e)=>{n.fillStyle="#fbf7ee",n.fillRect(0,0,t,e),n.lineCap="round",n.lineJoin="round";let i=(l,c)=>[l+Math.sin(c*.13)*2,c+Math.cos(l*.11)*2],s=(l,c,h=6)=>{n.strokeStyle=c,n.lineWidth=h,n.beginPath(),l.forEach(([d,u],p)=>{let[g,f]=i(d,u);p?n.lineTo(g,f):n.moveTo(g,f)}),n.stroke()};s([[10,330],[120,325],[260,335],[400,322],[500,330]],"#5aa846",10),n.fillStyle="#f6c63c",n.beginPath(),n.arc(440,70,34,0,7),n.fill();for(let l=0;l<9;l++){let c=l*.7;s([[440+Math.cos(c)*44,70+Math.sin(c)*44],[440+Math.cos(c)*62,70+Math.sin(c)*62]],"#f6c63c",5)}s([[380,330],[385,200]],"#8a5a3a",16),n.fillStyle="#6cbf4c",n.beginPath(),n.arc(385,170,70,0,7),n.fill(),s([[402,200],[402,262]],"#e2c9a0",3),s([[430,200],[430,262]],"#e2c9a0",3),s([[396,262],[436,262]],"#c0392b",6);let a=(l,c,h,d)=>{n.strokeStyle="#333",n.lineWidth=4,n.beginPath(),n.arc(l,330-120*c,18*c,0,7),n.stroke(),s([[l-14*c,335-125*c],[l+14*c,335-125*c]],d,8*c),s([[l,330-100*c],[l,330-45*c]],h,7),s([[l,330-45*c],[l-16*c,330]],"#333",4),s([[l,330-45*c],[l+16*c,330]],"#333",4),s([[l-34*c,330-70*c],[l+34*c,330-70*c]],"#333",4),n.fillStyle="#333",n.fillRect(l-7*c,330-124*c,3,3),n.fillRect(l+5*c,330-124*c,3,3),n.beginPath(),n.arc(l,330-116*c,7*c,.2,Math.PI-.2),n.stroke()};a(90,1.3,"#d9584a","#6b3f2a"),a(170,1.35,"#3f9a8a","#2a1e1a"),a(240,.85,"#f2a3b5","#7a4a2e"),n.fillStyle="#d9584a",n.font='bold 40px "Comic Sans MS", "Chalkboard SE", cursive',n.fillText(Le("{me}"),40,60),n.fillText("ME",210,110),n.fillStyle="#e04a7a",n.beginPath();let o=300,r=70;n.moveTo(o,r+10),n.bezierCurveTo(o-30,r-15,o-10,r-35,o,r-15),n.bezierCurveTo(o+10,r-35,o+30,r-15,o,r+10),n.fill()})}function Gd({id:n,label:t,at:e,emails:i=12,cost:s=60,lines:a}){return{id:n,label:t,at:e,kind:"work",once:!1,radius:1,async run(o,r){let l=r.uses=(r.uses||0)+1;et("ping"),await o.me.walkTo(e[0]+.5,e[1]+.4),o.me.face(e[0],e[1]),o.me.setPose(o.def.workPose??"idle");let c=a?.[(l-1)%a.length]??"Just a few emails.";await _i(c);for(let d=0;d<6;d++)et("tap",{vol:.5}),await wt(.12);x.state.stats.emails+=i,x.state.stats.workTimes=(x.state.stats.workTimes||0)+1,x.state.stats.workTimes>=5&&x.achieve?.("workaholic"),o.passTime(s);let h=o.world.hotspots.filter(d=>d.enabled&&!d.done&&(d.m?.kind??"little")==="little");if(h.length){let d=h[Math.floor(Math.random()*h.length)];d.setEnabled(!1),d.done=!0,d.m?.caption&&Hd(d.m.caption.id??d.m.id,typeof d.m.caption=="string"?d.m.caption:d.m.caption.text),et("lost",{vol:.5})}await $(o.def.workAfter?.[(l-1)%o.def.workAfter.length]??"When you looked up, the light had moved across the floor."),o.me.setPose("idle"),r.label=`${t} (${Math.max(3,i+l*5)} unread)`}}}var Dp={id:"ch5-newborn",chapter:5,card:{num:"V",title:"Little Ones",ages:"thirty to forty",quote:"And then, one spring night, the house was full again."},mood:"nurseryNight",music:"little",intensity:.3,ambience:{room:.35,crickets:.25},zoom:8,surface:"wood",bounds:{minX:-3.75,maxX:3.75,minZ:-3.2,maxZ:3.3},ages:[31,31],clock:{seconds:330},timeUpText:"The first weeks went by in one long, sleepless, golden blur.",workAfter:["When you looked up, they had already fallen asleep \u2014 without you.","Sam had done the night feed alone again."],hint:"Blue lights are work. They will always be there.",build(n){let t=n.world;x.state.stats.workAtCh5=x.state.stats.workTimes||0,n.r=Io(n,{era:"present",night:!0}),n.r.mobile.visible=!1,n.me=ui(31,.6,1.4,Math.PI),n.sam=We(Fe.sam,31,"Sam",-.4,1.2,Math.PI*.9),n.baby=We(os(.05),.05,"Baby",-.4,1.2),n.sam.pickUp(n.baby),n.sam.setPose("carry");let e=Is({w:1,d:.6,color:U.woodLight});t.add(e,3.3,.6,{ry:-Math.PI/2,collide:{w:1,d:.6}});let i=Dd();t.add(i,3.3,.6,{y:.75,ry:-Math.PI/2}),t.add(Ud(.6),2.9,2.6,{collide:.4}),n.atticBox=[2.9,2.6],t.add(Ud(.5),3.4,2,{collide:.35}),t.add(j(.35,.3,.25,13625077),-3.45,.2,{collide:.25}),Ca(n,{clouds:3,y:-6,spread:14})},async intro(n){await wi(["Your parents moved to a little house by the sea.","The big house was yours now \u2014 the creaky stairs, the garden, the tree.","And the small pink room at the top of the stairs."],{minTime:1.2}),x.ui.clearNarration();let t=await ni("One spring night, someone new arrived. You had\u2026",["a daughter","a son"]);x.state.childKind=t===0?"daughter":"son";let e=t===0?"Lily":"Leo";x.state.childName=await Tp(`What did you name ${t===0?"her":"him"}?`,e),n.baby.name=va(),await ai(3),await $("{child}. The word felt strange for a day, and then it was the only word."),await G(n.sam,"Look at {them}. Look at what we made.")},moments:[{id:"holdNewborn",kind:"story",label:"Hold {child}",anchor:n=>n.sam,offset:[.4,0,.6],caption:"So small",async run(n){let t=n.me,e=n.sam,i=n.baby;await t.walkToChar(e,.7),e.faceChar(t),await G(e,"Here. Support the head. You\u2019ve got {them}."),e.putDown(t.position.x,t.position.z),t.pickUp(i),t.setPose("carry"),et("coo",{pitch:1.3}),await Bt(t.position.x,t.position.z,4.4,2),gn(.6,3),await Pi({label:"Hold {them} close",seconds:5}),await $("So small. Smaller than you remembered anyone could be."),await $("Once, you were this small. Someone held you exactly like this."),await Dt("holdNewborn","So small"),gn(.35,4),e.walkTo(-1.4,2.7).then(()=>{e.setPose("sitGround"),e.faceNow(.5,0)}),await Kt(t,8)}},{id:"mobile",label:"Open the box from the attic",at:[2.6,2.1],requires:["holdNewborn"],caption:"The same five stars",async run(n){let t=n.me;await t.walkTo(2.5,2),t.face(2.9,2.6),t.setPose("crouch"),await $("A box from the attic, labelled in your mother\u2019s handwriting: NURSERY."),await wt(.6),await $("Inside, wrapped in tissue paper: five little stars on strings."),t.setPose("carry"),await t.walkTo(-2,-1.7),t.face(-2.5,-2.55),await Bt(-2.5,-2.2,5,1.5),await vn({label:"Hang the mobile",keys:["up","left","right","up"]});let e=n.r.mobile;e.visible=!0,e.position.set(-2.5,.55,-2.55),e.userData.speed=.4,et("sparkle"),await Ne({seconds:4,label:"Watch them turn."}),await $("The same five stars. Going round and round, for somebody new."),await Dt("mobile","The same five stars"),await Kt(t,8)}},{id:"finger",label:"Let {child} hold your finger",at:[.4,-.6],requires:["holdNewborn"],caption:"{Their} whole hand around one finger",async run(n){let t=n.me;await t.walkTo(.4,-.5),t.setPose("sit",{h:0}),t.setPose("sitGround"),await Bt(.4,-.4,4,1.5),await Pi({label:"Offer one finger",seconds:3.5}),et("coo",{pitch:1.4}),await $("{Their} whole hand closed around one of your fingers, and held on."),await $("As if {they} already knew you. As if {they} had been waiting."),await Dt("finger","{Their} whole hand around one finger"),t.setPose("carry"),await Kt(t,8)}},{id:"blanket",label:"Cover Sam with a blanket",anchor:n=>n.sam,offset:[.5,0,.5],requires:["holdNewborn"],caption:"Both of you, so tired",async run(n){let t=n.me,e=n.sam;await t.walkTo(e.position.x+.6,e.position.z+.6),t.faceChar(e);let i=j(.7,.05,.6,12114120);n.world.add(i,e.position.x,e.position.z+.15,{y:.28,ry:.3}),et("rustle"),await Ne({seconds:4,label:"Let them sleep."}),await $("You had never been so tired. You had never been so happy. It turned out those could be the same thing."),await Dt("blanket","Both of you, so tired")}},{id:"watchSleep",label:"Watch {them} breathe",at:[-1.9,-1.5],requires:["nightRocking"],caption:"Watching {them} breathe",async run(n){let t=n.me;await t.walkTo(-1.9,-1.55),t.face(-2.5,-2.55),await Bt(-2.4,-2.3,4.2,2),await Ne({seconds:8,label:"Just watch."}),await $("In. Out. In. Out. You could have watched for a hundred years."),await Dt("watchSleep","Watching {them} breathe"),await Kt(t,8)}},{id:"diaper",kind:"secret",label:"A suspicious smell",at:[-3,.3],radius:.8,requires:["holdNewborn"],async run(n){let t=n.me;await t.walkTo(-3,.35),t.face(-3.45,.2),await G(n.sam,"Oh \u2014 you\u2019re volunteering? That\u2019s so generous of you."),await vn({label:"Diaper duty. Quickly. Bravely.",keys:["left","right","up","down","up"]}),await $("Nobody tells you about this part either. You became an expert within a week."),x.achieve?.("diaper")}},Gd({id:"laptop",label:"Answer emails",at:[3.3,.6],emails:14,cost:70,lines:["Just ten minutes. Just the urgent ones.","They said it couldn\u2019t wait.","One more. Then bed."]}),{id:"nightRocking",kind:"story",label:"It\u2019s 3 a.m. \u2014 {child} is crying",at:[2,-1.5],requires:["holdNewborn"],caption:"Your mother\u2019s song, now yours",async run(n){let t=n.me,e=n.sam,i=n.baby;et("cry"),Ae("nurseryNight",3,{saturation:.85,vignette:.65});let s=await ni("3 a.m. Again.",["Get up. You\u2019ve got this.","Wake Sam. It\u2019s their turn."]),a=s===0?t:e;s===1?(x.achieve?.("wake_sam"),x.state.flags.wokeSam=!0,await G(e,"Mm. Okay. Okay, I\u2019m up. I\u2019m up."),t.carried&&t.putDown(t.position.x,t.position.z),e.setPose("idle"),await e.walkToChar(i,.5),e.pickUp(i),t.walkTo(1.4,.2).then(()=>{t.setPose("sitGround"),t.faceNow(2.4,-2.15)})):a.carried||(e.carried?(await a.walkToChar(e,.7),e.putDown(a.position.x,a.position.z)):await a.walkToChar(i,.5),a.pickUp(i)),a.setPose("carry"),et("cry",{delay:1.5}),await a.walkTo(2.2,-1.6),a.place(2.4,-2.15,-.7),a.setPose("rock"),await Bt(2.3,-1.8,4.6,2),s===0?(await _i(x.state.flags.calledFor==="dad"?"What did Dad do? What did he sing?":"What did Mom do? What did she sing?"),await wt(.6),await $("And then, from somewhere very deep, the song came back to you.")):(await G(e,"Sing me the one your parents used to sing. I only know half."),await $("So you sang it, quietly, from the floor \u2014 and Sam rocked, and hummed along to the half they knew.")),oi("littleHum",{intensity:.5});let o=n.r.chair.userData.rock,r=0,l=h=>{r+=h;let d=Math.sin(r*2)*.09;o.rotation.x=d,a.lean=d*.8};x.updaters.add(l),await wt(1.2);let c=(async()=>{for(let h of Pa)await G(t,h,{passive:!0,hold:3.4,name:"You"})})();await ns({label:"Rock with the song \u2014 press on the first beat",hits:4,onlyDownbeat:!0,window:.3}),await c,i.setPose("sleep"),await Dt("nightRocking",s===0?"Your mother\u2019s song, now yours":"The song, in two voices"),x.achieve?.("your_song"),x.updaters.delete(l),o.rotation.x=0,a.lean=0,await $(`You phoned your ${x.state.flags.calledFor==="dad"?"father":"mother"} the next morning, just to tell them. They cried a little. So did you.`),oi("little",{intensity:.4}),Ae("nurseryNight",3),a.setPose("idle"),a.position.set(2,0,-1.5),await a.walkTo(-1.9,-1.9),a.putDown(-2.5,-2.55),i.setPose("sleep"),i.extraY=.5,s===1&&(t.setPose("idle"),e.walkTo(-1.4,2.7).then(()=>{e.setPose("sitGround"),e.faceNow(.5,0)})),await Kt(t,8)}},{id:"dawn",kind:"story",label:"Look out of the window",at:[1.2,-2.6],requires:["nightRocking"],caption:"The first sunrise with {child}",async run(n){let t=n.me;await t.walkTo(1.2,-2.5),t.face(1.2,-4),Ae("dawnNursery",8),ti({birds:.6,room:.3},6),await on(6.5,4),await Ne({seconds:5,label:"The sun is coming up."}),await $("You hadn\u2019t slept at all. You had never felt less tired."),await Dt("dawn","The first sunrise with {child}"),await $("Everyone tells you the days are long and the years are short. Nobody tells you how fast they mean."),await si(3,"#fff6ee")}}],final:"dawn"},Up={id:"ch5-steps",chapter:5,mood:"homeMorning",music:"little",intensity:.45,ambience:{room:.35,birds:.35,fire:.25},zoom:8.5,surface:"wood",ages:[32,33],clock:{seconds:330},timeUpText:"One morning you noticed {they} didn\u2019t crawl anymore. You couldn\u2019t remember the last time {they} had.",workAfter:["By the time you hung up, {they} had learned a new word. Sam heard it first.","The call took an hour. It felt like five minutes. It was {their} whole morning."],hint:"Spend the morning however you like.",build(n){n.r=Rp(n,{night:!1,fire:!0,toys:!0}),n.me=ui(32,1.6,1.4,-2.4),n.sam=We(Fe.sam,32,"Sam",-1.5,2.2,2.5),n.sam.setPose("sitGround"),n.kid=We(os(1.1),1.1,va(),-.6,1.8,.3),n.kid.setPose("sitGround");let t=Eo();n.world.add(t,.6,-1.2,{y:.42}),n.phoneObj=t,n.bubbleField=null},async intro(n){await ai(3),await $("{child} could crawl now. Fast. Everything in the house had to move up a shelf."),n.kid.walkSpeed=1,n.kid.walkTo(.6,.6).then(()=>n.kid.setPose("sitGround"))},moments:[{id:"peekaboo",label:"Play peekaboo",anchor:n=>n.kid,offset:[.5,0,.5],caption:"Peekaboo, four hundred times",async run(n){let t=n.me,e=n.kid;await t.walkToChar(e,.9),e.faceChar(t),t.setPose("kneel"),await Bt(e.position.x,e.position.z,4.8,1.5),await ns({label:"Hide\u2026 and appear! (press with the pulse)",hits:5,period:1.3,window:.3,onPulse:()=>t.setPose("cry"),onHit:(i,s)=>{s>0&&(t.setPose("armsOpen"),et("giggle",{pitch:1.3}),yn(e,1,.06))}}),t.setPose("kneel"),await $("Every single time, {they} were astonished that you came back."),await Dt("peekaboo","Peekaboo, four hundred times"),t.setPose("idle"),await Kt(t,8.5)}},{id:"tower",label:"Build a tower together",at:[-1.2,1.1],caption:"{They} knocked it down. You built it again.",async run(n){let t=n.me,e=n.kid,i=n.world;await t.walkTo(-.7,.9),t.face(-1.2,1.4),t.setPose("sitGround"),e.walkTo(-1.4,.7).then(()=>{e.setPose("sitGround"),e.faceChar(t)}),await Bt(-1.1,1.2,4.6,1.5);let s=[U.red,U.yellow,U.blue,U.green].map((a,o)=>{let r=j(.24,.24,.24,a);return i.add(r,-1+o*.3,1.8,{}),r});await vn({label:"Stack them up",keys:["up","up","up","up"],onStep:a=>{let o=s[a],r=o.position.clone(),l=new P(-1.15,a*.24,1.35);ve(.45,c=>{o.position.lerpVectors(r,l,c),o.position.y+=Math.sin(c*Math.PI)*.3}),et("tap")}}),await wt(.6),e.setPose("reachForward"),et("thud"),s.forEach((a,o)=>{let r=a.position.clone(),l=new P(-1.15+(o-1.5)*.45,0,1.6+o*.15);ve(.6,c=>{a.position.lerpVectors(r,l,c),a.rotation.x=c*2})}),et("giggle",{pitch:1.3,delay:.3}),await wt(.8),e.setPose("sitGround"),await $("Your first tower fell like this, a long time ago. You laughed then too."),await Dt("tower","{They} knocked it down. You built it again."),t.setPose("idle"),await Kt(t,8.5)}},{id:"bubbles",label:"Blow bubbles",at:[2.2,.2],caption:"{Their} first word was you",async run(n){let t=n.me,e=n.kid,i=n.world;await t.walkTo(2,.4),t.face(.6,.6),await Bt(1.3,.6,5.2,1.5);let s=i.particlesOf("bubbles",{center:new P(1,0,.6),area:{w:3,h:2.5,d:3},count:1,opacity:0});await Pi({label:"Hold Space to blow",seconds:3,onProgress:o=>{s.n<30&&o>0,s.setOpacity(o*1.6),Math.random()<.05&&et("bloop",{vol:.4})}}),i.removeParticles(s);let a=i.particlesOf("bubbles",{center:new P(1,0,.6),area:{w:3,h:2.5,d:3},count:24,opacity:1});e.setPose("reach"),e.lookAt(t),await xn({count:5,label:"Pop them for {them}",onTap:()=>{et("pop"),et("giggle",{pitch:1.3,vol:.6})}}),e.setPose("sitGround"),await wt(.4),et("coo",{pitch:1.3}),await G(e,"{me}!",{name:"{child}"}),await G(n.sam,"Did \u2014 did {they} just \u2014",{passive:!0,hold:1.6}),await $("{Their} first word. It was you."),await Dt("bubbles","{Their} first word was you"),a.setOpacity(0),await Kt(t,8.5)}},{id:"picturebook",label:"Read a picture book",at:[.6,-2.1],caption:"\u201CMoo,\u201D said the cow. Every night.",async run(n){let t=n.me,e=n.kid;await t.walkTo(.6,-2.05),t.faceNow(.6,0),t.setPose("read",{h:.45}),t.position.z=-2.35,await e.walkTo(1.1,-1.8),e.setPose("sitGround"),e.faceChar(t),await Bt(.8,-2,4.6,1.5),await G(t,"And what does the cow say?"),await ni("What does the cow say?",["\u201CMoooo.\u201D","\u201CWoof!\u201D","\u201CQuack?\u201D"])===0?(et("giggle",{pitch:1.3}),await G(e,"Mooo!",{name:"{child}"})):(et("giggle",{pitch:1.3}),await G(e,"Nooo! Mooo!",{name:"{child}"}),await $("{They} corrected you, very seriously, every night for a year.")),await Ne({seconds:4,label:"Turn the pages slowly."}),await Dt("picturebook","\u201CMoo,\u201D said the cow. Every night."),t.setPose("idle"),t.position.z=-2.05,await Kt(t,8.5)}},Gd({id:"phone",label:"Answer the work call",at:[.6,-1.2],emails:6,cost:80,lines:["It\u2019s the office. It\u2019s probably important.","They keep calling.","Five minutes, I promise."]}),{id:"firstSteps",kind:"story",label:"Kneel down and open your arms",at:[2.6,1.6],caption:"Three steps. You cried.",async run(n){let t=n.me,e=n.kid,i=n.sam;await t.walkTo(2.6,1.6),e.place(-.9,1.2),e.setPose("sitGround"),t.faceChar(e),t.setPose("kneelOpen"),i.setPose("idle"),i.walkTo(-1.6,.6).then(()=>i.faceChar(e)),await Bt(.8,1.4,6,1.5),await G(t,"Come on, {child}. Come here. You can do it."),e.setAge(1.35),e.setPose("stand"),e.faceChar(t),await G(i,"Oh. Oh, look. Look at {them}.",{passive:!0,hold:2}),await Ea({label:"Steady, steady \u2014 \u2190 \u2192",seconds:3.5,difficulty:.8,onUpdate:o=>{e.tilt=-o*.3}}),e.tilt=0;let s=0,a=o=>{s+=o,e.tilt=Math.sin(s*7)*.12};x.updaters.add(a),e.walkSpeed=.6,await e.walkTo(t.position.x-.55,t.position.z-.1),x.updaters.delete(a),e.tilt=0,t.setPose("carryHigh"),t.pickUp(e),et("giggle",{pitch:1.3}),et("yay",{delay:.2,pitch:1.3}),yn(t,2,.12),await Bt(t.position.x,t.position.z,4.8,1.2),await G(i,"Three steps! Did you count?"),t.setPose("carry"),await _i("My mother cried, when I did this. Now I understand."),await Dt("firstSteps","Three steps. You cried."),await $("After that, {they} never stopped walking. Away from you, mostly. That was the point. That was the hard part."),await si(2.5,"#fff6ee")}}],final:"firstSteps"},Np={id:"ch5-summer",chapter:5,mood:"summerDay",music:"play",intensity:.45,ambience:{birds:.8,wind:.2},zoom:11,surface:"grass",ages:[36,37],clock:{seconds:400},timeUpText:"Somewhere in the middle of that summer, {they} stopped asking you to watch.",workAfter:["The sun had moved all the way across the yard.","{They} had come to show you something. You said \u201Cin a minute.\u201D {They} didn\u2019t come back."],hint:"A whole Saturday. Spend it well.",build(n){let t=n.world;n.r=Ra(n,{season:"summer",treeStage:2,swing:!0,sandbox:!0}),t.bounds={minX:-12,maxX:12,minZ:-4,maxZ:7.5},n.me=ui(36,-4.6,.8,.5),n.sam=We(Fe.sam,36,"Sam",-3,-2.05,0),n.sam.setPose("sit",{h:.45}),n.kid=We(os(6),6,va(),2.2,.6,.5),n.kid.walkSpeed=2.6;let e=Eo();t.add(e,-3.6,-2.05,{y:.47}),n.phoneAt=[-3.6,-2.05],t.butterflies(3,{x:0,z:2,r:6},7),t.birds(5,3),n.bike=Pd(U.teal,.8),t.add(n.bike,7,6.4),Ca(n,{clouds:7,y:-4,spread:24})},async intro(n){await ai(3),await $("The tree your grandfather planted with you was big enough for a swing now."),await G(n.kid,"{me}! {me}! Watch me! Are you watching?",{name:"{child}"})},moments:[{id:"swing",kind:"story",label:"Push the swing",at:[5.4,-1.2],caption:"\u201CHigher! Higher!\u201D",async run(n){let t=n.me,e=n.kid,i=n.r.tree,s=i.userData.swing,a=i.userData.swingLen,o=new P;s.getWorldPosition(o),await e.walkTo(o.x,o.z+.05),e.setPose("swing",{h:0}),e.faceNow(o.x,o.z+3),await t.walkTo(o.x,o.z-1),t.faceNow(o.x,o.z+2),await Bt(o.x,o.z,6.5,1.5);let r=.15,l=0,c=h=>{l+=h;let d=Math.sin(l*Math.PI/1.2)*r;s.rotation.x=d;let u=o.y-Math.cos(d)*a,p=o.z+Math.sin(d)*a;e.position.set(o.x,0,p),e.extraY=u+.03,e.lean=-d*.5,t.setPose("push",{phase:Math.max(0,-Math.sin(l*Math.PI/1.2))})};x.updaters.add(c),await ns({label:"Push when the swing comes back to you",hits:6,period:2.4,window:.35,onHit:(h,d)=>{d>0&&(r=Math.min(.75,r+.1),et("giggle",{pitch:1.1}),(h===2||h===4)&&G(e,h===2?"Higher!":"HIGHER!",{passive:!0,hold:1.2,name:"{child}"}))}}),await G(e,"I\u2019m flying! {me}, I can touch the leaves!",{name:"{child}"}),await Dt("swing","\u201CHigher! Higher!\u201D"),await ve(2.5,h=>{r=.75*(1-h)}),x.updaters.delete(c),s.rotation.x=0,e.extraY=0,e.lean=0,e.setPose("idle"),e.place(o.x+.6,o.z+.8),t.setPose("idle"),await Kt(t,11)}},{id:"bike",label:"Teach {them} to ride a bike",at:[6.4,5.6],caption:"You let go. {They} didn\u2019t notice.",async run(n){let t=n.me,e=n.kid,i=n.world;await e.walkTo(6.6,5.4),await t.walkTo(6.2,5),i.remove(n.bike);let s=Pd(U.teal,.8);e.root.add(s),s.position.set(0,0,0),s.rotation.y=-Math.PI/2,s.scale.setScalar(.8/e.root.scale.x),e.setPose("bike",{h:.55}),await G(e,"Don\u2019t let go. Promise you won\u2019t let go.",{name:"{child}"}),await Kt(t,8),e.walkSpeed=1.6;let a=[[-2,5.6],[-9,5.6]],o=e.walkTo(a[0][0],a[0][1]);await kl({target:e,dist:1.4,seconds:6,label:"Run alongside. Hold on."}),await ni("{They} are wobbling less now\u2026",["Let go","Hold on a little longer"])===0?(e.walkSpeed=3.2,e.walkTo(-10,5.6),await $("You let go. {They} didn\u2019t even notice. {They} just kept going, and going."),await Dt("bike","You let go. {They} didn\u2019t notice."),x.achieve?.("let_go"),x.state.flags.bike="letGo"):(await o,e.walkSpeed=3.2,e.walkTo(-10,5.6),await $("You held on a few more metres. Then {they} pulled ahead on {their} own, and you were just holding air."),await Dt("bike","You held on a little longer"),x.achieve?.("held_on"),x.state.flags.bike="heldOn"),await wt(1.5),e.root.remove(s),e.setPose("idle"),e.walkSpeed=2.6,i.add(n.bike,7,6.4),e.place(-8,4.8),await Kt(t,11)}},{id:"puddles",label:"Jump in the puddles after the rain",at:[-1,4],caption:"Soaked to the knees, both of you",async run(n){let t=n.me,e=n.kid,i=n.world;Ae("rainyGrey",2);let s=i.particlesOf("rain",{area:{w:26,h:12,d:26}});ti({rain:.8,birds:.1},1.5),await $("A summer shower, out of nowhere. Then \u2014 just as fast \u2014 sun."),await wt(2.5),i.removeParticles(s),Ae("summerDay",3),ti({birds:.8,wind:.2},3);let a=[[-2.5,3.2],[.4,4.6],[-.6,2.2],[1.6,3],[-2,5.2]].map(([o,r])=>{let l=nn(.45,9417936,10,.02);return l.material=pe(10274016,{roughness:.2,transparent:!0,opacity:.85}),i.add(l,o,r),{obj:l,x:o,z:r}});e.follow(t,1),await Kt(t,9),await Ro({label:"Splash!",items:a,radius:.5,onCollect:o=>{et("splash"),i.burst(new P(o.x,.2,o.z),{color:13625599,count:25,speed:1.5,size:.18}),et("giggle",{pitch:1.1,delay:.3})}}),e.follow(null),await $("Sam just shook their head from the porch. Then came down and jumped in too."),await Dt("puddles","Soaked to the knees, both of you"),a.forEach(o=>i.remove(o.obj))}},{id:"dandelions",label:"Blow dandelions",at:[9,1],caption:"You both wished for the same thing",async run(n){let t=n.me,e=n.kid,i=n.world;await t.walkTo(8.6,1.2),await e.walkTo(9.4,1.4),e.faceChar(t),t.faceChar(e),t.setPose("sitGround"),e.setPose("sitGround"),await Bt(9,1.3,5,1.5),await G(e,"You have to make a wish. But you can\u2019t say it, or it won\u2019t come true.",{name:"{child}"}),await Pi({label:"Hold Space to blow",seconds:2.5}),et("blow"),i.burst(new P(9,.6,1.3),{color:16777215,count:60,speed:1.2,life:3.5,size:.14}),await wt(1.5),await G(e,"What did you wish for?",{name:"{child}"}),await G(t,"I can\u2019t tell you. Or it won\u2019t come true."),await $("You wished that this would last. You suspect {they} wished for a puppy."),await Dt("dandelions","You both wished for the same thing"),t.setPose("idle"),e.setPose("idle"),await Kt(t,11)}},{id:"drawing",label:"{child} has something for you",anchor:n=>n.kid,offset:[.4,0,.4],requires:["swing"],caption:"It\u2019s you. And me. And the tree.",async run(n){let t=n.me,e=n.kid,i=n.world;await t.walkToChar(e,.9),e.faceChar(t),await G(e,"Close your eyes. Okay, open them!",{name:"{child}"});let s=Lp(),a=Nd(s);i.add(a,e.position.x,e.position.z,{y:1.1}),a.lookAt(x.camera.position),a.scale.setScalar(1.6),await Bt(e.position.x,e.position.z,4,1.5),await G(e,"That\u2019s you. And that\u2019s Sam. And that\u2019s me. And that\u2019s the tree. And the swing.",{name:"{child}"}),await G(t,"It\u2019s the most beautiful thing I\u2019ve ever seen."),await G(e,"I know.",{name:"{child}"}),await Dt("drawing","It\u2019s you. And me. And the tree."),x.state.flags.drawing=!0,await $("You put it on the fridge. Later, in a frame. Much later, you would find it again."),i.remove(a),await Kt(t,11)}},{id:"lemonade",label:"{child}\u2019s lemonade stand",at:[1,6],requires:["swing"],caption:"Ten cups. You drank every one.",async run(n){let t=n.me,e=n.kid,i=n.world,s=Rl();i.add(s,1,6.4,{collide:{w:1.5,d:.7}}),await e.walkTo(1,7),e.faceNow(1,4),await t.walkTo(1,5.3),t.faceNow(1,7),await Bt(1,6,5.5,1.5),await G(e,"Lemonade! Fifty cents! It\u2019s very sour!",{name:"{child}"}),await xn({count:10,label:"Buy a cup. And another. And another.",onTap:a=>{et("tap"),a%3===0&&et("giggle",{pitch:1.2})}}),await G(e,"You\u2019re my best customer.",{name:"{child}"}),await $("Your grandfather once bought ten cups from you, at a sticky table on this same street."),await Dt("lemonade","Ten cups. You drank every one."),await Kt(t,11)}},{id:"puppy",label:"{child} wants to ask you something",anchor:n=>n.kid,offset:[.5,0,.5],requires:["swing"],caption:"The puppy question",async run(n){let t=n.me,e=n.kid;if(await t.walkToChar(e,.9),e.faceChar(t),await G(e,"Can we get a puppy? Please? I\u2019ll walk it every day. Every single day. I promise.",{name:"{child}"}),await ni("A puppy\u2026",["\u201C\u2026Okay. Yes.\u201D","\u201CMaybe when you\u2019re older.\u201D"])===0){x.state.flags.puppy=!0,x.achieve?.("puppy"),e.setPose("jump"),et("yay",{pitch:1.2}),await wt(1.2),e.setPose("idle");let s=new ss({age:.5,color:15253642});s.root.scale.setScalar(.65),s.name="Pancake",s.place(-5,6.6),s.follow(e,.9),s.wag=2,await $("Two weeks later there was a puppy. {child} named it Pancake. {child} walked it every day for nearly a month."),await $("After that, you walked it. You didn\u2019t mind. Biscuit would have liked it."),await Dt("puppy","Pancake comes home")}else e.setPose("sad"),await G(e,"That\u2019s what you always say.",{name:"{child}"}),e.setPose("idle"),await $("{They} sulked for exactly eleven minutes. Then {they} found a frog, and named it Puppy."),await Dt("puppy","A frog named Puppy")}},{id:"postcard",kind:"secret",label:"Check the mailbox",at:[-6.4,5.8],radius:.8,async run(n){let t=n.me;await t.walkTo(-6.3,5.8),t.face(-6.4,6.4),et("rustle"),await $(`A postcard from the sea, in your ${x.state.flags.calledFor==="dad"?"father":"mother"}\u2019s handwriting:`),await $("\u201CWish you were here. The water is cold and your father refuses to admit it. Eat something green. Kiss {child} for us.\u201D"),x.achieve?.("postcard")}},{id:"boss",kind:"work",label:"Your phone is ringing (the boss)",at:[-3.6,-1.6],radius:1,async run(n){let t=n.me;if(et("phone"),await t.walkTo(-3.6,-1.5),await G(null,"Hi \u2014 sorry to call on a Saturday. Any chance you could come in? Just for a few hours.",{name:"Your boss"}),await ni("Just for a few hours\u2026",["\u201CSure. I\u2019ll be there.\u201D","\u201CNot today. It\u2019s Saturday.\u201D"])===0){x.state.stats.emails+=25,x.state.stats.workCalls++,x.state.stats.workTimes=(x.state.stats.workTimes||0)+1,x.state.stats.workTimes>=5&&x.achieve?.("workaholic"),await si(1.2),n.passTime(140);let i=n.world.hotspots.filter(s=>s.enabled&&!s.done&&(s.m?.kind??"little")==="little");for(let s of i.slice(0,2))s.setEnabled(!1),s.done=!0,s.m?.caption&&Hd(s.m.id,typeof s.m.caption=="string"?s.m.caption:s.m.caption.text);Ae("summerDusk",.1),await ai(1.5),await $("You came home after dark. The swing was still moving, just a little, in the wind."),Ae("summerDay",6)}else x.state.flags.saidNo=!0,x.achieve?.("said_no"),await G(t,"Not today. It\u2019s Saturday."),await $("You turned the phone off and put it in a drawer. Nothing terrible happened. Nothing terrible ever did.")}},{id:"picnic",kind:"story",label:"Dinner under the tree",at:[2.6,.2],requires:["swing"],caption:"Dinner under the tree",async run(n){let t=n.me,e=n.kid,i=n.sam,s=n.world;Ae("summerDusk",6),oi("little",{intensity:.5}),ti({crickets:.5,birds:.2},6),s.add(wl(U.blue),2.4,.8),i.setPose("idle"),await Promise.all([t.walkTo(1.8,.6),e.walkTo(2.6,1.3),i.walkTo(3,.4)]),t.setPose("sitGround"),e.setPose("lieBack"),i.setPose("sitGround"),t.face(2.6,1.3),i.face(2.6,1.3),await Bt(2.5,.8,5.5,2),await wt(1),e.setPose("sleep"),await G(i,"Do you think {they}\u2019ll remember this? Any of it?",{name:"Sam"}),await G(t,"No. Probably not."),await G(t,"But we will."),await Ne({seconds:6,label:"Stay a little longer."}),await Dt("picnic","Dinner under the tree"),await si(3)}}],final:"picnic"},Fp={id:"ch5-bedtime",chapter:5,mood:"nurseryNight",music:"bedtime",intensity:.35,ambience:{room:.35,crickets:.3},zoom:7.5,surface:"wood",bounds:{minX:-3.75,maxX:3.75,minZ:-3.2,maxZ:3.3},ages:[39,40],clock:{seconds:300},timeUpText:"Bedtime got later and later. One night {they} said {they} could read on {their} own now.",workAfter:["The presentation was finished. {They} were already asleep.","{They} called for you once. You said \u201Cin a minute.\u201D"],hint:"The last bedtime story you remember reading.",build(n){let t=n.world;n.r=Io(n,{era:"kid",night:!0}),n.me=ui(39,.4,2.2,Math.PI),n.kid=We(os(8.5),8.5,va(),-2.9,-1.9,0),n.kid.setPose("sit",{h:.55}),n.kid.place(-2.9,-2.2,0),t.add(So(14200958),1.6,1.6),n.teddyAt=[1.6,1.6],n.starPack=j(.3,.05,.2,U.yellow),t.add(n.starPack,3.2,-1,{y:0});let e=Is({w:1,d:.6,color:U.woodLight});if(t.add(e,3.3,.8,{ry:-Math.PI/2,collide:{w:1,d:.6}}),t.add(Dd(),3.3,.8,{y:.75,ry:-Math.PI/2}),x.state.flags.drawing){let i=Nd(Lp());t.add(i,-3.9,.6,{y:1.8,ry:Math.PI/2})}if(x.state.flags.puppy){let i=new ss({age:3,color:15253642});i.root.scale.setScalar(.8),i.place(-2.9,-.95,Math.PI),i.setPose("lie"),i.extraY=.45,i.update=(s=>function(a,o){s.call(this,a,o),this.root.position.y=.45})(i.update)}},async intro(n){await ai(3),await $("{child} was eight. {They} had opinions about everything, and questions about everything else."),await G(n.kid,"{me}! You said one story. You promised.",{name:"{child}"})},moments:[{id:"stars",label:"Stick glow-in-the-dark stars on the wall",at:[3,-1],caption:"A whole sky, just for {them}",async run(n){let t=n.me,e=n.world;await t.walkTo(2.8,-1),n.starPack.visible=!1,await t.walkTo(-1,-2.8),t.face(-1,-4),await Bt(-1.5,-2.8,5.2,1.5);let i=[[-2.6,2.6],[-1.9,2.9],[-1.2,2.5],[-.5,2.9],[-3.2,2.2]],s=[];await vn({label:"Press them on, one by one",keys:["up","left","up","right","up"],onStep:a=>{let[o,r]=i[a],l=me(.07,0,15400880,0,1,{emissive:14221210,emissiveIntensity:2.5});e.add(l,o,-3.45,{y:r}),s.push(l),et("tap")}}),Ae("nurseryNight",2,{bloom:1.1}),await G(n.kid,"Whoa. It\u2019s like sleeping outside.",{name:"{child}"}),await Dt("stars","A whole sky, just for {them}"),Ae("nurseryNight",2),await Kt(t,7.5)}},{id:"monster",label:"Check under the bed for monsters",at:[-2.2,-.4],caption:"No monsters. Just a sock.",async run(n){let t=n.me;await G(n.kid,"Can you check? Just in case.",{name:"{child}"}),await t.walkTo(-2.2,-.5),t.face(-2.9,-1.6),t.setPose("crouch"),await Bt(-2.6,-1,4.5,1.5),await Pi({label:"Look carefully\u2026",seconds:3}),et("rustle"),await G(t,"Hmm. One sock. Two crayons. A very old raisin. No monsters."),et("giggle",{pitch:1.05}),await G(n.kid,"They probably heard you coming.",{name:"{child}"}),await Dt("monster","No monsters. Just a sock."),t.setPose("idle"),await Kt(t,7.5)}},{id:"teddy",label:"Find {their} bear",at:[1.6,1.6],caption:"The bear with one ear",async run(n){let t=n.me;await t.walkTo(1.7,1.4),t.setPose("crouch"),await wt(.6),t.setPose("idle"),await t.walkTo(-2,-1.6),await G(n.kid,"He can\u2019t sleep without me. It\u2019s not for me. It\u2019s for him.",{name:"{child}"}),await $("The bear had one ear left. {They} loved him exactly twice as much because of it."),await Dt("teddy","The bear with one ear")}},{id:"wish",kind:"secret",label:"Was that a shooting star?",at:[1.2,-2.5],radius:.8,async run(n){let t=n.me,e=n.world;await t.walkTo(1.2,-2.45),t.face(1.2,-4);let i=Ge(16777215,.5,1);e.root.add(i),await ve(1.4,s=>{i.position.set(.4+s*1.6,2.4-s*.6,-3.45),i.material.opacity=Math.sin(s*Math.PI)}),e.root.remove(i),et("sparkle"),await $("You made a wish before you could stop yourself."),await $("More time. Everybody wishes for more time."),x.achieve?.("wish")}},Gd({id:"laptop",label:"Finish the presentation",at:[3.3,.8],emails:10,cost:60,lines:["It\u2019s due tomorrow. It has to be tonight.","Just the last slide."]}),{id:"story",kind:"story",label:"Read the bedtime story",at:[-2,-1],caption:"One more time. Always one more time.",async run(n){let t=n.me,e=n.kid;await t.walkTo(-2,-1.1),t.faceChar(e),t.setPose("sit",{h:.5}),t.position.set(-2.1,0,-1.2),e.setPose("lie"),e.position.set(-2.9,0,-2.1),e.extraY=.42,e.heading=e.targetHeading=Math.PI,await Bt(-2.5,-1.6,4.4,2);let i=x.state.flags.storyChoice;i?await $(`You read ${{dragon:"the dragon who was afraid of the dark",ocean:"the whale who sang to the moon",moon:"the girl who lived on the moon"}[i]}. The same story your parents read to you, from the same falling-apart book.`):await $("You read the same story your parents read to you, from the same falling-apart book."),await Ne({seconds:5,label:"Read slowly. Do all the voices."}),await G(e,"Again?",{name:"{child}"}),await ni("\u201CAgain?\u201D",["\u201COf course.\u201D","\u201CIt\u2019s late, sweetheart.\u201D"])===0?await $("Again. And again. You knew it by heart. So did {they}. That wasn\u2019t the point."):(await G(e,"Pleeease. Just the end bit.",{name:"{child}"}),await $("You read the end bit. Then the middle bit. Then the whole thing.")),await Dt("story","One more time. Always one more time.")}},{id:"questions",kind:"story",label:"Turn off the lamp",at:[3.1,-2.6],requires:["story"],caption:"\u201CWill you always be here?\u201D",async run(n){let t=n.me,e=n.kid;await t.walkTo(3,-2.5),Ae("nurseryNight",2,{sunIntensity:.3,hemiIntensity:.5}),n.r.lampLight&&(n.r.lampLight.intensity=1.2),await G(e,"{me}?",{name:"{child}"}),await G(t,"Mm?"),await G(e,"Will you always be here?",{name:"{child}"}),await t.walkTo(-2,-1.2),t.faceChar(e);let i=await ni("\u201CWill you always be here?\u201D",["\u201CAlways.\u201D","\u201CAs long as I possibly can.\u201D","\u201CEven when you can\u2019t see me.\u201D"]);x.state.flags.alwaysAnswer=["Always.","As long as I possibly can.","Even when you can\u2019t see me."][i],x.achieve?.("always"),x.ach?.remember("alwaysAnswers",i)>=3&&x.achieve?.("every_answer"),await G(t,x.state.flags.alwaysAnswer),await G(e,"Okay.",{name:"{child}"}),await $("{They} believed you completely. That was the most frightening thing about it."),await Dt("questions","\u201CWill you always be here?\u201D")}},{id:"goodnight",kind:"story",label:"Kiss {them} goodnight",anchor:n=>n.kid,offset:[.9,0,.6],requires:["questions"],caption:"Standing in the doorway",async run(n){let t=n.me,e=n.kid;await t.walkToChar(e,.7),t.setPose("crouch"),et("kiss"),await wt(.8),e.setPose("sleep"),t.setPose("idle"),await t.walkTo(-3.2,1.8),t.faceChar(e),await Bt(-2.6,-.5,6.5,3),await Ne({seconds:8,label:"Stand in the doorway."}),await $("You stood in the doorway a long time. Longer than you needed to."),await $("Not long enough."),await Dt("goodnight","Standing in the doorway"),await si(4),await wi(["After that night, something changed speed.","Nobody warned you. Nobody ever does."],{minTime:1.4}),x.ui.clearNarration()}}],final:"goodnight"};Be();ii();ii();He();Ds();var Ul=79,Op=7316424,Wd=()=>x.state.childKind==="son"?"Dad":"Mom",Oi=(n,t,e)=>x.achieve?.(n,t,e),t1=["snowman","angels","treeTale","snowball"];function qd(n,t,e){let i=new Me;n.root.add(i);let s=!1;i.userData.update=a=>{if(s)return;let o=x.director;!o.control||o.inMoment||x.auto||t(a)&&(s=!0,e())},n.track(i)}function e1(n,t=2){let e=x.ui.fadeEl;return e.style.transition=`opacity 0.01s, background ${t}s ease`,e.offsetWidth,e.style.background=n,new Promise(i=>setTimeout(i,t*1e3))}function Zd(n={}){return{...as(Ul),shirt:10325636,pants:5591132,...n}}function Yd(n,t,e,i,s,a,o,r){let l=e+Math.cos(a)*s,c=i-Math.sin(a)*s;n.strokeStyle="#5e4c42",n.lineWidth=r,n.lineCap="round",n.beginPath(),n.moveTo(e,i),n.lineTo(l,c),n.stroke(),o>1&&r>1.4&&(n.strokeStyle="rgba(255,255,255,0.85)",n.lineWidth=r*.45,n.beginPath(),n.moveTo(e,i-r*.35),n.lineTo(l,c-r*.35),n.stroke()),o>0&&(Yd(n,t,l,c,s*t.range(.66,.78),a+t.range(.3,.6),o-1,r*.68),Yd(n,t,l,c,s*t.range(.66,.78),a-t.range(.25,.55),o-1,r*.68))}function i1(){return an(256,200,(n,t,e)=>{let i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#c9d3de"),i.addColorStop(1,"#eef1f4"),n.fillStyle=i,n.fillRect(0,0,t,e),n.fillStyle="#f6f8fb",n.fillRect(0,e*.72,t,e),n.fillStyle="#dfe5ec";for(let a=0;a<12;a++)n.fillRect(a*22,e*.68,3,18);n.fillRect(0,e*.7,t,3);let s=fe(17);Yd(n,s,t*.56,e*.8,e*.3,Math.PI/2,6,12),n.strokeStyle="#d8d2c8",n.lineWidth=1.5,n.beginPath(),n.moveTo(t*.66,e*.42),n.lineTo(t*.66,e*.66),n.moveTo(t*.74,e*.4),n.lineTo(t*.74,e*.62),n.stroke(),n.fillStyle="#8a7060",n.fillRect(t*.645,e*.655,t*.06,3),n.fillStyle="rgba(255,255,255,0.9)";for(let a=0;a<70;a++)n.beginPath(),n.arc(s()*t,s()*e,s.range(.6,1.6),0,7),n.fill()})}function n1(){return an(128,100,(n,t,e)=>{let i=fe(5);n.fillStyle="rgba(244,248,252,0.82)",n.fillRect(0,0,t,e);for(let s=0;s<260;s++)n.fillStyle=`rgba(255,255,255,${i.range(.2,.7)})`,n.fillRect(i()*t,i()*e,i.range(1,4),i.range(1,3))})}function s1(n){return an(160,128,(t,e,i)=>{let s={wedding:["#bcd9f0","#fbefe2"],cake:["#f3d9c4","#f8ead8"],coat:["#d6dde6","#eef0f2"]}[n],a=t.createLinearGradient(0,0,0,i);if(a.addColorStop(0,s[0]),a.addColorStop(1,s[1]),t.fillStyle=a,t.fillRect(0,0,e,i),n==="wedding")t.fillStyle="#9fcf7a",t.fillRect(0,i*.75,e,i),t.fillStyle="#7d5a43",t.fillRect(e*.47,i*.3,8,i*.46),t.fillStyle="#86c06a",[[.5,.25,30],[.36,.33,22],[.64,.33,22]].forEach(([o,r,l])=>{t.beginPath(),t.arc(e*o,i*r,l,0,7),t.fill()}),[[.38,"#5fa38a"],[.58,"#f6f2ea"]].forEach(([o,r])=>{t.fillStyle=r,t.fillRect(e*o-6,i*.55,12,26),t.fillStyle="#e9b894",t.beginPath(),t.arc(e*o,i*.5,6,0,7),t.fill()});else if(n==="cake"){t.fillStyle="#d6b48c",t.fillRect(0,i*.72,e,i),t.fillStyle="#f7c6d0",t.fillRect(e*.28,i*.48,e*.44,i*.26),t.fillStyle="#fff6f0",t.fillRect(e*.28,i*.46,e*.44,6);for(let o=0;o<5;o++){let r=e*.33+o*e*.085;t.fillStyle="#9ac8f0",t.fillRect(r,i*.36,4,12),t.fillStyle="#ffd36b",t.beginPath(),t.arc(r+2,i*.33,3.5,0,7),t.fill()}}else t.fillStyle="#f6f8fb",t.fillRect(0,i*.74,e,i),t.fillStyle="#6a7a8a",t.beginPath(),t.moveTo(e*.5,i*.36),t.lineTo(e*.66,i*.86),t.lineTo(e*.34,i*.86),t.closePath(),t.fill(),t.fillStyle="#e9b894",t.beginPath(),t.arc(e*.5,i*.32,11,0,7),t.fill(),t.fillStyle="#2a2224",t.beginPath(),t.arc(e*.5,i*.34,4,0,Math.PI),t.fill(),t.fillStyle="#6a7a8a",t.fillRect(e*.3,i*.48,e*.4,8)})}function a1(){return an(200,150,(n,t,e)=>{n.fillStyle="#fbfaf6",n.fillRect(0,0,t,e),n.lineWidth=3,n.lineCap="round",n.strokeStyle="#f3b62a",n.beginPath(),n.arc(t*.82,e*.2,16,0,7),n.stroke();for(let i=0;i<8;i++){let s=i/8*Math.PI*2;n.beginPath(),n.moveTo(t*.82+Math.cos(s)*21,e*.2+Math.sin(s)*21),n.lineTo(t*.82+Math.cos(s)*28,e*.2+Math.sin(s)*28),n.stroke()}n.fillStyle="#3a3030",n.fillRect(t*.79,e*.17,2,2),n.fillRect(t*.845,e*.17,2,2),n.beginPath(),n.arc(t*.82,e*.21,6,.2,Math.PI-.2),n.stroke(),n.strokeStyle="#6a8ac8",[[.3,.68,22],[.3,.42,15],[.3,.24,10],[.56,.74,14],[.56,.58,9]].forEach(([i,s,a])=>{n.beginPath(),n.arc(t*i,e*s,a,0,7),n.stroke()}),n.strokeStyle="#d9584a",n.beginPath(),n.moveTo(t*.27,e*.32),n.lineTo(t*.36,e*.33),n.stroke(),n.fillStyle="#d9584a",n.font="bold 15px sans-serif",n.fillText(`ME + ${il().toUpperCase()}`,12,e-10)})}function o1(){let n=new rt;n.add(Se(.11,.14,.2,8,14243914));let t=Se(.07,.1,.04,8,12601918);t.position.y=.2,n.add(t);let e=Xi(.025,5,4,3355443);e.position.y=.25,n.add(e);let i=Se(.02,.035,.16,5,14243914);i.rotation.z=-.9,i.position.set(.12,.08,0),n.add(i);let s=As(.09,.015,4,8,3355443,Math.PI);return s.position.y=.22,n.add(s),ne(n)}function r1(){let n=new rt;n.add(j(.38,.22,.16,9067066));let t=j(.17,.15,.01,14207144);t.position.set(-.08,.035,.08),n.add(t);let e=Se(.035,.035,.02,8,15260872);e.rotation.x=Math.PI/2,e.position.set(.1,.11,.085),n.add(e);let i=j(.01,.3,.01,7829367);return i.position.set(.15,.22,-.04),i.rotation.z=-.4,n.add(i),ne(n)}function Xd(n,t,e,i){let s=[];for(let o=0;o<3;o++){let r=Ge(16777215,.22,0);n.root.add(r),s.push(r)}let a=new Me;return n.root.add(a),a.userData.update=(o,r)=>s.forEach((l,c)=>{let h=(r*.35+c/3)%1;l.position.set(t+Math.sin(r*1.3+c)*.03,e+h*.45,i),l.material.opacity=Math.sin(h*Math.PI)*.35}),n.track(a),a}var l1=["twoCups","samChair","window","radio","photos","plant"],Bp={id:"ch7-house",chapter:7,card:{num:"VII",title:"Winter",ages:"seventy-five and after",quote:"You get old the way snow falls: slowly, and then you look up and everything is white."},mood:"winterMorning",music:"winter",intensity:.2,ambience:{room:.5,clock:.45,wind:.35},zoom:8,surface:"wood",bounds:{minX:-3.75,maxX:3.75,minZ:-3.2,maxZ:3.3},hint:"You are slower now. That\u2019s alright. Nothing here is in a hurry either.",build(n){let t=n.world,e=n.r=ko(n,{night:!1,winter:!0,chairs:2});e.mug.visible=!1;let i=n.me=ui(Ul,-2.2,1.7,Math.PI*.75,Zd());i.giveCane(!0);let s=j(.42,.06,.3,Op);t.add(s,1.85,.6,{y:.5}),n.scarf=s,n.kettle=t.add(o1(),-2.6,-3.1,{y:.89}),n.radio=t.add(r1(),.35,-3.2,{y:.91}),n.phone=t.add(Eo(),3,-2.95,{y:.71,ry:.4});let a=new bt(new Ue(1.62,1.24),new Pe({map:i1()}));t.add(a,1.4,-3.437,{y:1.85}),n.frost=new bt(new Ue(1.62,1.24),new Pe({map:n1(),transparent:!0,opacity:.85,depthWrite:!1})),t.add(n.frost,1.4,-3.43,{y:1.85}),n.frames=[["wedding",1.6,2,.09],["coat",2.6,2.4,-.12],["cake",1.8,1.6,.07]].map(([h,d,u,p])=>{let g=Sa([U.wood,U.woodDark,U.white][["wedding","coat","cake"].indexOf(h)],s1(h),.5,.4);return t.add(g,-3.885,d,{y:u,ry:Math.PI/2}),g.rotation.z=p,g}),n.cups=[Ao(U.white),Ao(11126502)],n.cups.forEach(h=>{h.visible=!1,t.add(h,0,0,{y:.75})});let o=new Me;t.root.add(o);let r=0;o.userData.update=h=>{let d=n.hotspot("phone");if(!d||!d.enabled||d.done){n.phone.rotation.z=0;return}r-=h,r<=0&&(r=2.6,et("phone",{vol:.8}),n.rangOnce||(n.rangOnce=!0,x.ui.hint("The phone is ringing.",5))),n.phone.rotation.z=r>1.9?Math.sin(x.time*60)*.08:0},t.track(o);let l=null,c=0;qd(t,()=>{let h=i.position,d=h.x-.9,u=h.z-.6;if(Math.hypot(d,u)>2.3)return l=null,c=0,!1;let p=Math.atan2(u,d);return l!==null&&(c+=Math.atan2(Math.sin(p-l),Math.cos(p-l))),l=p,Math.abs(c)>Math.PI*2},()=>{$("Round and round the table \u2014 the way {child} used to run, at three, shrieking, with you pretending you couldn\u2019t catch {them}.",{block:!1,hold:7}),Oi("ch7_egg_table","Round and Round","Walked all the way around the kitchen table, like a three-year-old.")})},async intro(n){await wt(.4),await ai(4),await $("The house wakes slowly now. So do you."),await _i("Kettle first. Then the world.")},moments:[{id:"twoCups",label:"Make tea",at:[-1.7,-2.35],caption:"Two cups, still",async run(n){let t=n.me;await t.walkTo(-2,-2.45),t.face(-2.6,-3.2),await Bt(-1.6,-2.4,5.6,2);let e=n.kettle;await vn({label:"Fill the kettle \xB7 light the stove \xB7 pour",keys:["up","right","down"],onStep:i=>{i===0&&(et("splash",{vol:.4}),ve(.6,s=>{e.position.y=.89+Math.sin(s*Math.PI)*.15})),i===1&&(et("fwip",{vol:.6}),Xd(n.world,-2.48,1.12,-3.1)),i===2&&(et("blow",{vol:.4}),ve(.8,s=>{e.rotation.z=Math.sin(s*Math.PI)*.7}))}}),n.cups[0].position.set(-1,.91,-3.1),n.cups[1].position.set(-.75,.91,-3.1),n.cups.forEach(i=>{i.visible=!0}),et("tap"),await wt(.3),et("tap",{vol:.7}),await wt(.8),await $("You take down two cups. You always take down two cups."),await $("Your hands have been doing it for fifty years. Nobody has told them."),t.setPose("idle"),n.cups.forEach(i=>{i.visible=!1}),await t.walkTo(.9,-.9),t.face(.9,.6),n.cups[0].position.set(.85,.75,.2),n.cups[1].position.set(1.38,.75,.62),n.cups.forEach(i=>{i.visible=!0}),Xd(n.world,.85,.9,.2),Xd(n.world,1.38,.9,.62),et("tap",{vol:.6}),await Bt(1.2,.3,5,1.8),await _i("Oh."),await $("You leave it where it is. It\u2019s warm, and it\u2019s theirs."),await Dt("twoCups","Two cups, still"),await Kt(t,8)}},{id:"samChair",label:"Sit at the table",at:[2.55,1.35],caption:"The blue scarf on the other chair",async run(n){let t=n.me;await t.walkTo(.9,-.95),t.giveCane(!1),t.place(.9,-.38,0),t.setPose("sit",{h:.45}),t.lookAt(new P(1.85,0,.6)),await Bt(1.35,.25,4.6,2.5),await $("A blue scarf, folded on the other chair."),await $("Every morning, for fifty years, Sam read the paper out loud at this table. Only the good parts."),await G({position:new P(1.85,1.2,.6)},"\u201CListen to this one.\u201D",{name:"Sam",hold:2.6});let e=Ge(13624063,1.6,0);n.world.add(e,1.85,.6,{y:1}),ve(5,i=>{e.material.opacity=Math.sin(i*Math.PI)*.35}),await Ne({seconds:6,label:"Sit with them a while."}),et("rustle",{vol:.25}),await $("Some mornings you could swear you hear the paper rustle."),await Dt("samChair","The blue scarf on the other chair"),n.world.remove(e),t.lookAt(null),t.setPose("idle"),t.giveCane(!0),t.position.set(.9,0,-.95),await Kt(t,8)}},{id:"window",label:"Look out of the window",at:[1.4,-2.55],caption:"The tree, enormous and bare",async run(n){let t=n.me;await t.walkTo(.62,-2.5),t.face(1.4,-3.6),await x.renderer.cameraTo({x:1.25,y:1.4,z:-2.9},3.8,2);let e=n.frost;await Pi({label:"Hold Space to wipe the frost away",seconds:3,onProgress:i=>{e.material.opacity=.85*(1-i)}}),e.material.opacity=0,ti({room:.5,clock:.45,wind:.6},2),await Ne({seconds:4,label:"Look at it."}),await $("Out in the snow, the family tree. Enormous now, and bare."),await $("You planted it with Grandpa when it was a stick with two leaves. You were married under it. A swing hung from it."),await $("The rope is still there, white with frost. Nobody could bear to take it down."),await Dt("window","The tree, enormous and bare"),ti({room:.5,clock:.45,wind:.35},2),ve(6,i=>{e.material.opacity=.5*i}),await Kt(t,8)}},{id:"radio",label:"Turn on the radio",at:[.35,-2.45],caption:"Dancing with the radio",async run(n){let t=n.me;await t.walkTo(.35,-2.5),t.face(.35,-3.3),et("tap"),await wt(.4),x.audio.muffle(.62,1),oi("together",{intensity:.35,immediate:!0}),await Bt(.4,-2,5.2,2),await $("A crackle, and then \u2014 the waltz. The one from the lantern festival."),x.state.flags.danced?await $("Under the lanterns, a lifetime ago, you stepped on their feet twice. They said it was the best dance of their life."):await $("You never danced that night at the festival. You made up for it in this kitchen, for fifty years."),t.giveCane(!1),await t.walkTo(.6,-1.6),t.setPose("waltz");let e=t.heading,i=0,s=a=>{i+=a,t.targetHeading=e+Math.sin(i*.9)*.6,t.tilt=Math.sin(i*1.8)*.04};x.updaters.add(s),await ns({label:"Sway \u2014 press Space on the first beat of each bar",hits:4,onlyDownbeat:!0,window:.35}),await $("Your left hand still knows exactly where their shoulder was."),await Dt("radio","Dancing with the radio"),x.updaters.delete(s),t.tilt=0,t.setPose("idle"),t.giveCane(!0),oi("winter",{intensity:.2}),x.audio.muffle(0,3),await Kt(t,8)}},{id:"photos",label:"The photographs on the wall",at:[-3.05,2.05],caption:"Three frames, straightened",async run(n){let t=n.me;await t.walkTo(-3.1,2),t.face(-4,2),await Bt(-3.4,2,4,2),await $("A wedding under a tree. A birthday cake with five candles. {child}, in a coat three sizes too big, laughing."),await xn({count:3,label:"Straighten them",onTap:e=>{let i=n.frames[e-1],s=i.rotation.z;ve(.4,a=>{i.rotation.z=s*(1-a)}),et("tap")}}),await $("{They} had been laughing at the neighbour\u2019s dog. You remember that."),await _i("I still remember that."),await Dt("photos","Three frames, straightened"),await Kt(t,8)}},{id:"plant",label:"Water Sam\u2019s plant",at:[2.85,2.2],caption:"A new leaf on Sam\u2019s plant",async run(n){let t=n.me;await t.walkTo(2.85,2.15),t.face(3.4,2.7),t.setPose("reachForward"),await Bt(2.7,1.9,4.6,2),await Pi({label:"Hold Space to water it, slowly",seconds:3,onProgress:(e,i)=>{i&&Math.random()<.05&&et("splash",{vol:.15})}}),t.setPose("idle"),await $("Sam\u2019s plant. Thirty years old, and still putting out new leaves out of pure stubbornness."),await G(t,"Good morning. Look at you. Look at that new leaf."),await $("You talk to it the way they did. It doesn\u2019t answer. You know what they would have said anyway."),await Dt("plant","A new leaf on Sam\u2019s plant"),await Kt(t,8)}},{id:"phone",kind:"story",label:"Answer the phone",at:[2.75,-2.45],radius:1.3,caption:"The phone call",requires:["twoCups"],when:n=>l1.filter(t=>n.done(t)).length>=3,async run(n){let t=n.me,e=n.phone;await t.walkTo(2.75,-2.55),t.face(3,-2.95),t.setPose("think"),await Bt(2.4,-2.2,5,1.5);let i={position:new P(3,1.1,-2.95)};await G(t,"Hello?"),await G(i,"{me}! It\u2019s me. Did I wake you?",{name:"{child}"}),await G(t,"Sweetheart, at my age nobody wakes me. I wake the birds."),await G(i,"Listen \u2014 we\u2019re coming for the holidays. All of us.",{name:"{child}"}),await G(i,"Pip can\u2019t stop talking about you. It\u2019s {grandme} this, {grandme} that, all day long.",{name:"{child}"}),await G(i,"HI {grandme}!!",{name:"Pip",small:!0}),t.setPose("laugh"),et("giggle",{pitch:.8,vol:.5}),await wt(1.2),t.setPose("think"),await G(i,"We\u2019ll be there Saturday. And don\u2019t shovel the path. I mean it.",{name:"{child}"}),await G(t,"I\u2019ll make up the beds."),et("tap"),t.setPose("idle"),oi("winterWarm",{intensity:.3}),Ae("winterMorning",7,{saturation:.62,warmth:.12,bloom:.42}),await $("When you put the phone down, the kitchen looked different. As if someone had opened a window."),await Dt("phone","The phone call"),Oi("ch7_coming_home","Coming Home","Answered the phone on a quiet winter morning."),await $("Saturday came slowly. And then, all at once."),await si(3,"#f2f4f8")}}],final:"phone"},zp={id:"ch7-snow",chapter:7,mood:"winterMorning",music:"winterWarm",intensity:.3,ambience:{wind:.3},zoom:10.5,surface:"snow",hint:"They\u2019re here. Go and meet them at the gate.",build(n){let t=n.world;n.r=Ra(n,{season:"winter",treeStage:4,swing:!0,flowers:!1}),t.bounds={minX:-9.2,maxX:8.2,minZ:-3.4,maxZ:6.6};let e=n.me=ui(Ul,-4.6,-1.4,Math.PI,Zd({shirt:8022626,scarf:12080970}));e.giveCane(!0);let i=os(10);n.kid=We({...i,hairStyle:x.state.childKind==="son"?"short":"bob",shirt:7176870,pants:4539215,scarf:14852684},47,"{child}",-5.6,8.6,Math.PI),n.kid.setOutfit({shirt:7176870,pants:4539215}),n.pip=We(Fe.pip,5,"Pip",-4.6,8.6,Math.PI),n.kid.root.visible=n.pip.root.visible=!1,n.car=up(9412536),t.add(n.car,-18,9.3),t.add(bp(U.red),-1.7,-2.4,{ry:.3}),n.snowmanAt=[.7,1.6],n.snowman=null,n.snowStage=0,n.setSnowman=r=>{let[l,c]=n.snowmanAt;n.snowman&&t.remove(n.snowman),n.snowman=Sl(r),t.add(n.snowman,l,c,{ry:.6}),n.snowStage=r,t.burst(new P(l,.6+r*.2,c),{count:16,color:16777215,speed:1.2}),r===1&&t.addCollider({x:l,z:c,r:.45})};let s=new Me;t.root.add(s);let a=0;s.userData.update=r=>{if(!n.pipBuilding)return;a+=r;let l=Math.min(4,1+Math.floor(a/4));l>n.snowStage&&(n.setSnowman(l),et("thud",{vol:.25})),l>=4&&(n.pipBuilding=!1,n.pip.setPose("jump"))},t.track(s),qd(t,()=>Math.hypot(e.position.x+6.4,e.position.z-6)<.95,()=>{e.face(-6.4,6.4),et("rustle"),$("A card in the mailbox, in Theo\u2019s spidery writing: \u201CStill the better stone-skipper. Tea when the snow stops? \u2014 T.\u201D",{block:!1,hold:8}),Oi("ch7_egg_theo","Still Neighbours","Found Theo\u2019s card in the mailbox.")}),t.particlesOf("snow",{count:200,area:{w:30,h:12,d:30}}),n.focusOn=!1,n.focusR=0,n.focusGoal=.35,n.focusDesat=.85;let o=new Me;t.root.add(o),o.userData.update=r=>{if(!n.focusOn)return;n.focusR=Ui(n.focusR,n.focusGoal,.9,r);let l=n.pip.position.clone();l.y+=.55;let c=x.renderer.project(l),h=x.renderer.overrides;h.focusX=c.x/window.innerWidth,h.focusY=1-c.y/window.innerHeight,h.focusRadius=n.focusR,h.focusDesat=n.focusDesat},t.track(o),n.grow=()=>{let r=["snowman","angels","treeTale","snowball","gift","porch"].filter(l=>n.done(l)).length;n.focusGoal=.35+r*.11}},async intro(n){x.renderer.setMood("winterMorning",0,{saturation:.3}),await ai(3),await $("Saturday. You shovelled the path anyway."),et("engine",{vol:.6});let t=n.car;Bt(-6,4.5,11,3),await ve(4,e=>{t.position.x=-18+e*11.2},e=>1-Math.pow(1-e,2)),await Kt(n.me,10.5)},moments:[{id:"arrive",kind:"story",label:"Meet them at the gate",at:[-5,5],radius:1.4,caption:"Pip, running up the path",async run(n){let t=n.me,e=n.pip,i=n.kid;await t.walkTo(-5,5.2),t.face(-5,8),et("door"),e.root.visible=i.root.visible=!0,e.place(-4.6,8.7,Math.PI),i.place(-5.8,8.7,Math.PI),await Bt(-5,6.6,7.5,1.5),n.focusOn=!0,n.focusR=.02,n.focusGoal=.35,Ae("winterMorning",3,{saturation:1,warmth:.05}),G(e,"{grandme}!",{passive:!0,hold:1.4}),await e.walkTo(-5,7,{speed:3.6}),await e.walkTo(t.position.x+.15,t.position.z+.5,{speed:3.6}),e.faceChar(t),t.faceChar(e),t.giveCane(!1),t.setPose("hug"),e.setPose("hug"),et("giggle"),await $("And there it was. Colour \u2014 wherever Pip went."),await G(e,"{grandme}, it SNOWED."),await G(t,"It did. I ordered it specially."),i.walkTo(-3.9,4.4).then(()=>i.faceChar(t)),await Dt("arrive","Pip, running up the path"),t.setPose("idle"),e.setPose("idle"),t.giveCane(!0),await G(i,"You shovelled the path. I told you not to shovel the path."),await G(t,"I had help. The shovel did most of it."),await G(i,"I\u2019ll take the bags in. Pip \u2014 be gentle with {grandme}."),await G(e,"I\u2019m ALWAYS gentle."),i.walkTo(-3.6,-1.4).then(()=>{i.place(-2.8,-2.05,0),i.setPose("sit",{h:.45}),i.lookAt(e)}),e.setPose("reach");let s=await ni("Pip is already tugging at your sleeve\u2026",["Go out into the snow with Pip","Sit with {child} on the porch first"]);if(e.setPose("idle"),s===0)n.flags.ch7First="snow",await G(e,"YES! Come ON!"),Oi("ch7_snow_first","Snow First","Went straight out into the snow with Pip."),e.follow(t,1.1);else{n.flags.ch7First="talk",await G(t,`Give me ten minutes with your ${Wd()==="Mom"?"mom":"dad"}, Pip. Then I\u2019m all yours.`),await G(e,"Fine. But I\u2019m starting the snowman WITHOUT you."),Oi("ch7_talk_first","Grown-up Talk","Sat with your child on the porch before going out to play.");let a=n.hotspot("snowman");a&&(a.label="Finish Pip\u2019s snowman");let[o,r]=n.snowmanAt;e.walkTo(o+.85,r-.45,{speed:3.2}).then(()=>{e.face(o,r),e.setPose("push"),n.pipBuilding=!0})}await Kt(t,10.5)}},{id:"snowman",label:"Build a snowman with Pip",at:[.7,2.6],requires:["arrive"],when:n=>n.flags.ch7First!=="talk"||n.done("porch"),caption:"A snowman called Biscuit",async run(n){let t=n.me,e=n.pip,i=n.world,[s,a]=n.snowmanAt;e.follow(null),e.walkTo(s+.85,a-.45).then(()=>e.face(s,a)),await t.walkTo(s-.45,a+.85),t.face(s,a),await Bt(s+.2,a+.2,6,1.5);let o=n.setSnowman;n.pipBuilding=!1,n.snowStage>=3?(e.setPose("idle"),n.snowStage<4&&o(4),await G(e,"I made him ALL BY MYSELF. You were too slow."),await G(t,"He\u2019s magnificent. He\u2019s the best one on the street."),await G(e,"He just needs a hat. And arms. You do those."),await xn({count:2,label:"Give him a hat \xB7 and arms",onTap:r=>{et(r===1?"pop":"rustle",{vol:.5}),r===2&&o(5)}})):(t.setPose("push"),e.setPose("push"),await vn({label:"Roll the base \xB7 the middle \xB7 the head \xB7 then a face",keys:["down","left","up","right"],onStep:r=>{o(r+1),et(r<3?"thud":"pop",{vol:.5}),r===2&&(t.setPose("idle"),e.setPose("reach"))}}),e.setPose("idle"),await G(e,"He needs a hat. And arms. And a NAME."),o(5)),et("sparkle",{vol:.5}),await G(t,"What shall we call him?"),await G(e,"Biscuit. Like the dog in your stories. The one who was patient."),await $("You hadn\u2019t said that name out loud in years. It came out warm."),e.setPose("jump"),et("giggle"),await Dt("snowman","A snowman called Biscuit"),e.setPose("idle"),t.setPose("idle"),e.follow(t,1.1),n.grow(),await Kt(t,10.5)}},{id:"angels",label:"Lie down in the snow",at:[3,4.4],requires:["arrive"],when:n=>n.flags.ch7First!=="talk"||n.done("porch"),caption:"Two snow angels, one big, one small",async run(n){let t=n.me,e=n.pip,i=n.world;e.follow(null),e.walkTo(3.7,4.3),await t.walkTo(2.5,4.3),await G(e,"Lie down! Like this!"),t.giveCane(!1),t.place(2.5,4.3,Math.PI*.75),e.place(3.6,4.2,Math.PI*.75),t.setPose("lieBack"),e.setPose("lieBack"),et("thud",{vol:.4}),await Bt(3,4,5.2,2);let s=0,a=!0,o=r=>{s+=r,s>.45&&(s=0,a=!a,t.setPose(a?"lieBack":"lie"),e.setPose(a?"lie":"lieBack"),Math.random()<.4&&et("rustle",{vol:.3}))};x.updaters.add(o),await wt(2.6),x.updaters.delete(o),t.setPose("lieBack"),e.setPose("lieBack"),await G(e,"Yours is bigger than mine."),await G(t,"I\u2019ve had longer to practise."),await Ne({seconds:5,label:"Look up at the snow falling."}),await $("The snow kept falling on both of you. It didn\u2019t seem to be in any hurry."),await Dt("angels","Two snow angels, one big, one small");for(let[r,l,c]of[[2.5,4.3,1],[3.6,4.2,.7]]){let h=new rt;h.add(nn(.42*c,U.snowShade,10,.012));let d=nn(.5*c,U.snowShade,3,.011);h.add(d),i.add(h,r,l,{ry:.8})}e.setPose("idle"),e.place(3.6,4.6),await $("Getting up took longer than lying down. Pip helped."),t.setPose("idle"),t.place(2.5,4.8),t.giveCane(!0),e.follow(t,1.1),n.grow(),await Kt(t,10.5)}},{id:"treeTale",label:"Show Pip the tree",at:[3.7,-.4],requires:["arrive"],when:n=>n.flags.ch7First!=="talk"||n.done("porch"),caption:"The tree, taller than all of us",async run(n){let t=n.me,e=n.pip;e.follow(null),e.walkTo(4.75,-1.45).then(()=>e.face(4,-2.2)),await t.walkTo(3.55,-1.2),t.face(4,-2.2),await x.renderer.cameraTo({x:3.6,y:2.6,z:-1.4},11,2.5),e.setPose("reach"),await G(e,"It\u2019s so BIG."),await G(t,"Your great-great-grandpa and I planted this. It was smaller than you are."),e.setPose("idle"),e.faceChar(t),await G(e,"Smaller than ME?"),await G(t,"Smaller than your boot. It had two leaves. We gave them names.");let i=await ni("Tell Pip about\u2026",["Planting it with Grandpa","The wedding under it","The swing that hangs from it"]);n.flags.toldPip=["grandpa","wedding","swing"][i];let s="The tree, taller than all of us";if(i===0)await G(t,"Grandpa dug the hole. I was in charge of the watering can. I watered his shoes more than the tree."),await G(e,"Was he nice?"),n.flags.satWithGrandpa===!1?(await G(t,"Very. He asked me to sit with him once, and I said \u201Clater\u201D."),await G(t,"He understood. He always did. But if somebody old ever asks you to sit with them, Pip \u2014 sit.")):await G(t,"The nicest. He always saved me a seat on the porch. And I always took it."),t.setPose("reachForward"),e.setPose("reachForward"),await Pi({label:"Hold Space \u2014 put your hand on the bark, next to Pip\u2019s",seconds:3}),s="The story of the watering can";else if(i===1)await G(t,"Sam and I were married right here, under these branches. There were lanterns in it, and petals in everybody\u2019s hair."),await G(e,"Did you dance?"),n.flags.danced?await G(t,"We did. I stepped on their feet. Twice. They said it didn\u2019t count."):await G(t,"Not that day. We were too nervous. We danced later \u2014 in the kitchen, for fifty years."),e.setPose("waltz"),et("giggle"),await G(e,"Like THIS?"),await G(t,"Exactly like that."),s="The wedding under the tree, told again";else{await G(t,`Your ${Wd()==="Mom"?"mom":"dad"} used to swing on that, right there. \u201CHigher! Higher!\u201D Every single day.`),await G(e,"Can I? Please? PLEASE?");let a=n.kid,o=n.r.tree.userData.swing,r=n.r.tree.userData.swingLen,l=new P;o.getWorldPosition(l),a.setPose("idle"),a.lookAt(null),t.walkTo(l.x-.05,l.z-1.05).then(()=>t.face(l.x,l.z)),await a.walkTo(l.x+.85,l.z-.6),a.face(l.x,l.z),await G(a,"Up you go. Hold on tight. It\u2019s older than I am."),e.place(l.x,l.z,0),e.setPose("swing",{h:.4}),e.extraY=l.y-r-.37,et("creak",{vol:.5});let c=.05,h=0,d=u=>{h+=u;let p=Math.sin(h*2.1)*c;o.rotation.x=-p,e.position.z=l.z+Math.sin(p)*r,e.extraY=l.y-Math.cos(p)*r-.37,e.lean=-p*.6};x.updaters.add(d),await Bt(l.x-.6,l.z+.4,6.5,1.5),t.setPose("push"),await xn({count:4,label:"Push \u2014 gently",onTap:()=>{c=Math.min(.5,c+.11),et("creak",{vol:.35}),et("giggle",{delay:.3})}}),t.setPose("idle"),await G(e,"HIGHER!"),await $("Forty years, and the old swing still knew what to do."),Oi("ch7_swing_again","Higher, Higher","Pushed Pip on the old swing."),await ve(2,u=>{c=.5*(1-u)}),x.updaters.delete(d),o.rotation.x=0,e.lean=0,e.extraY=0,e.place(l.x+.3,l.z+.9),e.setPose("idle"),a.walkTo(-3.6,-1.4).then(()=>{a.place(-2.8,-2.05,0),a.setPose("sit",{h:.45}),a.lookAt(e)}),s="Higher! Higher!"}await $("Every year it gets a little bigger, and you get a little smaller. That seems fair."),await Dt("treeTale",s),t.setPose("idle"),e.setPose("idle"),e.follow(t,1.1),n.grow(),await Kt(t,10.5)}},{id:"snowball",label:"Make a snowball",at:[-1.4,4.2],requires:["arrive"],when:n=>n.flags.ch7First!=="talk"||n.done("porch"),caption:"Snowball fight (Pip won)",async run(n){let t=n.me,e=n.pip,i=n.world;e.follow(null),await t.walkTo(-1.4,4),t.setPose("crouch"),et("rustle",{vol:.4}),await wt(.6),t.setPose("idle"),await e.walkTo(.9,4.9,{speed:3.4}),e.faceChar(t),t.faceChar(e),await Bt(-.2,4.4,6.5,1.5),await G(e,"You can\u2019t get me! You\u2019re too slow!");let s=(l,c,h)=>{let d=me(.09,0,U.snow);i.root.add(d);let u=l.clone(),p=c.clone();return ve(.7,g=>{d.position.lerpVectors(u,p,g),d.position.y+=Math.sin(g*Math.PI)*1},g=>g).then(()=>{i.root.remove(d),i.burst(p,{count:14,color:16777215,speed:1.4}),et("thud",{vol:.4}),h&&h()})},a=l=>l.position.clone().add(new P(0,l.height*.8,0)),o=0,r=l=>{o+=l,e.position.x=.9+Math.sin(o*2.2)*.8};x.updaters.add(r),t.setPose("point"),await Ep({label:"Throw it \u2014 press Space when Pip is in the sweet spot",speed:1,sweet:.2,tries:4}),x.updaters.delete(r),t.setPose("idle"),await s(a(t),a(e),()=>{e.setPose("laugh"),et("giggle")}),await wt(.6),await G(e,"My turn!"),e.setPose("point");for(let l=0;l<3;l++)await s(a(e),a(t),()=>{t.setPose("laugh")}),et("giggle",{delay:.1});e.setPose("jump"),await $("You got Pip once. Pip got you eleven times. Nobody was keeping score, except Pip."),await Dt("snowball","Snowball fight (Pip won)"),t.setPose("idle"),e.setPose("idle"),e.follow(t,1.1),n.grow(),await Kt(t,10.5)}},{id:"gift",kind:"story",label:"Give Pip something",at:[-2.4,1.4],requires:["arrive"],when:n=>n.flags.ch7First!=="talk"||n.done("porch"),caption:"A gift for Pip",async run(n){let t=n.me,e=n.pip;e.follow(null),await t.walkTo(-2.4,1.2);let i=!!x.state.flags.hasWatch;await Bt(-2.1,.9,4.6,2),await $(i?"Grandpa\u2019s watch, still ticking on your wrist. It has been waiting for someone.":"Your scarf, the warm one. You\u2019ve been meaning to give it to someone.");let s=await ni(i?"The watch\u2026":"The scarf\u2026",["Give it to Pip now","Keep it a little longer"]);if(n.flags.giftNow=s===0,s===1){await G(t,"Pip! Come and tell me which snowflake is your favourite."),await e.walkTo(-1.75,.6),e.faceChar(t),t.faceChar(e),await G(e,"That one. No \u2014 that one. They keep MOVING."),await $(i?"The watch stays on your wrist a little longer. Tonight, you decide, it can go in a box with a note.":"The scarf stays round your neck a little longer. Tonight, you decide, it can go in a box with a note."),await Dt("gift",i?"Grandpa\u2019s watch, ticking a little longer":"Your scarf, a little longer"),t.setPose("idle"),e.follow(t,1.1),n.grow(),await Kt(t,10.5);return}if(await G(t,"Pip. Come here a minute. I want to give you something."),await e.walkTo(-1.75,.6),e.faceChar(t),t.faceChar(e),t.giveCane(!1),t.setPose("kneel"),i){let a=new rt;a.add(As(.06,.016,4,10,14267482));let o=Se(.05,.05,.015,10,16775400);o.rotation.x=Math.PI/2,a.add(o),await G(t,"This was my grandpa\u2019s. He gave it to me on a porch, a lot like that one."),e.armR.end.add(a),a.scale.setScalar(1/e.armR.end.scale.x),et("sparkle",{vol:.5}),e.setPose("think");for(let r=0;r<4;r++)et(r%2?"tock":"tick",{vol:.5}),await wt(.5);await G(e,"It ticks."),await G(t,"Time\u2019s a funny thing\u2026",{hold:3}),await wt(.6),await G(t,"That\u2019s what he told me. I didn\u2019t understand it for about sixty years."),e.setPose("idle"),await G(e,"I don\u2019t understand it either."),await G(t,"Good. You\u2019ve got time."),await Dt("gift","Grandpa\u2019s watch, on a smaller wrist"),Oi("ch7_watch","Time\u2019s a Funny Thing","Gave Grandpa\u2019s watch to Pip.")}else await G(t,"Hold still. Your neck looks cold."),t.scarfM&&(t.scarfM.visible=!1),e.scarfM&&t.scarfM&&(e.scarfM.material=t.scarfM.material),et("rustle"),await G(t,"When I was small I was always in such a hurry to get somewhere. Nobody ever told me I was already there."),await G(t,"So I\u2019m telling you. You\u2019re already there."),await G(e,"Where?"),await G(t,"Here."),await Dt("gift","Your scarf, around a smaller neck"),Oi("ch7_scarf","Already There","Gave Pip your scarf, and the words you never heard.");t.setPose("idle"),t.giveCane(!0),e.follow(t,1.1),n.grow(),await Kt(t,10.5)}},{id:"porch",kind:"story",label:"Sit on the porch with {child}",at:[-3.2,-1.3],radius:1.3,requires:["arrive"],when:n=>n.flags.ch7First==="talk"||t1.filter(t=>n.done(t)).length>=2,caption:"They held you the way you once held them",async run(n){let t=n.me,e=n.pip,i=n.kid;e.follow(null),n.flags.ch7First!=="talk"&&e.walkTo(n.snowmanAt[0]-.7,n.snowmanAt[1]-.6).then(()=>{e.setPose("crouch")}),await t.walkTo(-3.6,-1.6),t.giveCane(!1),t.place(-3.6,-2.05,0),t.setPose("sit",{h:.45}),i.lookAt(t),await Bt(-3.2,-1.7,5.2,2);let s=n.flags.ch7First==="talk";if(s){await G(i,"Sit. Pip will survive ten minutes without you. Probably."),await G(t,"Pip will. I\u2019m not so sure about me."),await G(i,"Can I tell you something? I\u2019m always on my phone. At dinner. At bedtime. Just one more email, I tell myself."),await G(i,"Last week Pip asked me to watch a drawing happen. I said \u201Cin a minute\u201D. Then I forgot.");let a=await ni("You tell {them}\u2026",["\u201CPut the phone away. It\u2019ll keep. They won\u2019t.\u201D","\u201CYou\u2019re doing fine. You came home.\u201D","About the emails you answered, once"]);if(n.flags.ch7Advice=["phone","fine","emails"][a],a===0)await G(t,"Put the phone away. It\u2019ll keep. They won\u2019t."),await wt(.8),await G(i,"\u2026Okay."),Oi("ch7_pass_it_on","Pass It On","Told your child to put the phone away.");else if(a===1)await G(t,"You\u2019re doing fine. You came home. That\u2019s not nothing."),await G(i,"It doesn\u2019t feel like enough."),await G(t,"It never does. That\u2019s how you know you\u2019re doing it right.");else{let o=x.state.stats?.emails??0;o>0?await G(t,`I answered ${o===1?"an email":o+" emails"} once, on days I should have been watching you. I can\u2019t remember a single one of them.`):await G(t,"I didn\u2019t have so many emails. But I had other ways of not quite being there. Everybody does."),await G(t,"I remember every one of your drawings, though."),await G(i,"\u2026Even the purple horse?"),await G(t,"Especially the purple horse."),Oi("ch7_confession","What I Learned","Told your child about the emails you answered.")}await wt(.6),await G(i,"Pip asks about you all the time. What you were like. What I was like."),await G(i,"I tell them you sang to me. Every night. Even when I said I was too old.")}else await G(i,"Look at Pip. Counting the days since October."),await G(t,"So was I."),await G(i,"Pip asks about you all the time. What you were like when you were small. What I was like."),await G(t,"And what do you tell them?"),await G(i,"That you sang to me. Every night. Even when I said I was too old.");await wt(.8),await G(i,"I never said it properly."),i.setPose("idle"),i.position.set(-2.8,0,-1.6),t.setPose("idle"),t.position.set(-3.3,0,-1.6),i.faceChar(t),t.faceChar(i),await wt(.4),await G(i,"Thank you, {me}. For everything."),t.place(-3.42,-1.28),i.place(-3,-1.7),i.faceChar(t),t.faceChar(i),i.setPose("hug"),t.setPose("hug"),et("heart",{vol:.5}),await Bt(-3.2,-1.45,3.8,2),await Pi({label:"Hold on",seconds:4}),await Dt("porch","They held you the way you once held them"),await $("Once, {they} fit in the crook of your arm. Now {their} arms went all the way around you."),i.setPose("idle"),t.setPose("idle"),i.place(-2.8,-2.05,0),i.setPose("sit",{h:.45}),t.place(-3.6,-1.5,0),t.giveCane(!0),s&&(n.pipBuilding=!1,n.snowStage<4&&n.setSnowman(4),await G(e,"{grandme}! Come and SEE!")),e.setPose("idle"),e.follow(t,1.1),n.grow(),await Kt(t,10.5)}},{id:"pipHum",kind:"story",label:"Sit with Pip as the light goes",at:[-3.3,-1],radius:1.4,requires:["porch","gift"],caption:"The song, three generations later",async run(n){let t=n.me,e=n.pip,i=n.kid;Ae("winterDusk",8,{saturation:1}),ti({wind:.15},4),i.setPose("idle"),i.lookAt(null),await G(i,"I\u2019ll start dinner. Ten minutes, Pip."),i.walkTo(-5,-3).then(()=>{et("door",{vol:.6}),i.root.visible=!1}),e.follow(null),await t.walkTo(-3.6,-1.6),t.giveCane(!1),t.place(-3.6,-2.05,0),t.setPose("sit",{h:.45}),await e.walkTo(-2.95,-1.6),e.place(-2.95,-2.05,0),e.setPose("sit",{h:.45}),e.tilt=.14,await Bt(-3.3,-1.7,4.2,3),oi("pipHum",{intensity:.4}),await wt(1.2),await G(e,"\u266A Hmm-hm, hmm-hm\u2026 hmm hm hm\u2026",{passive:!0,hold:3.5}),await G(t,"Where did you learn that one?"),await G(e,`${Wd()} sings it to me. Every night. Even when I say I\u2019m too big.`),n.focusGoal=2.8,ve(7,s=>{n.focusDesat=.85*(1-s)}),await Ne({seconds:7,label:"Just listen."}),await $("Your mother\u2019s song. Then yours. Then {child}\u2019s."),await $("Now Pip\u2019s."),await Dt("pipHum","The song, three generations later",{window:10}),Oi("ch7_three_generations","Three Generations","Heard Pip hum the lullaby."),await $("And for a moment, the whole world was in colour again."),await wt(1.5),e.tilt=0,await si(3.5,"#14121c")}}],final:"pipHum",async outro(){await wi(["That night, the house was full of small sounds.","Breathing through the walls. A creak on the stairs. Someone small, turning over in their sleep."],{minTime:1.3}),x.ui.clearNarration(),await wt(1)}},Hp={id:"ch7-night",chapter:7,mood:"kitchenNight",music:"winterWarm",intensity:.15,ambience:{room:.5,clock:.35,wind:.2},zoom:8.5,surface:"wood",bounds:{minX:-3.8,maxX:3.8,minZ:-3.3,maxZ:3.3},hint:"Everyone is asleep. Take your time.",build(n){let t=n.world;n.r=ko(n,{night:!0,chairs:2});let e=n.me=ui(Ul,-1.6,1.6,Math.PI*.75,Zd());e.giveCane(!0);let i=j(.42,.06,.3,Op);t.add(i,1.85,.6,{y:.5}),n.albumObj=t.add(Al(),1.1,.75,{y:.75,ry:.3});let s=new rt,a=new bt(new Ai(.12,7,4,0,Math.PI*2,0,Math.PI/2),pe(14243914));s.add(a);let o=me(.04,0,U.white);o.position.y=.13,s.add(o),t.add(s,.55,.85,{y:.75});let r=new bt(new Ue(.44,.33),new Pe({map:a1()}));t.add(r,-3.215,-1.85,{y:1.3,ry:Math.PI/2}),r.rotation.z=.05;let l=j(.05,.05,.02,14243914);t.add(l,-3.21,-1.85,{y:1.47,ry:Math.PI/2});let c=0;qd(t,h=>(c=Math.hypot(e.position.x-1.4,e.position.z+2.55)<.9&&!e._playerMoving?c+h:0,c>6),()=>{e.face(1.4,-4),$("A fox picks its way across the snow, stops under the old tree, and looks straight at the window. Then it is gone.",{block:!1,hold:8}),Oi("ch7_egg_fox","The Night Visitor","Stood at the window long enough to see who visits at night.")})},async intro(n){await wt(.5),await ai(4),await $("It is late, and the house is quiet again."),await _i("But it\u2019s a different kind of quiet now.")},moments:[{id:"wrap",label:"A box for Pip",at:[2.4,1.7],when:n=>n.flags.giftNow===!1,async run(n){let t=n.me,e=n.world,i=!!x.state.flags.hasWatch;await t.walkTo(2.3,1.5),t.face(1.85,.6),await Bt(1.9,1,4.2,2);let s=El(14243914,U.white,.22);e.add(s,1.45,.95,{y:.75,ry:.4}),s.scale.setScalar(.01),ve(.6,a=>s.scale.setScalar(Math.max(.01,a))),await $(i?"You take off Grandpa\u2019s watch for the last time, and lay it in a little box.":"You fold the scarf small enough to fit in a little box."),await Pi({label:"Hold Space to write the note",seconds:3,onProgress:(a,o)=>{o&&Math.random()<.05&&et("tap",{vol:.2})}}),await $(i?"\u201CFor Pip. For when time feels funny.\u201D":"\u201CFor Pip. You\u2019re already there.\u201D"),await $("You leave it where small hands will find it in the morning."),await Dt("wrap","A small box with Pip\u2019s name on it"),Oi("ch7_gift_later","A Little Longer","Kept the gift a little longer, then left it with a note."),await Kt(t,8.5)}},{id:"drawing",label:"Pip\u2019s drawing on the fridge",at:[-2.6,-1.4],caption:"Pip\u2019s drawing on the fridge",async run(n){let t=n.me;await t.walkTo(-2.6,-1.6),t.face(-3.6,-1.85),await Bt(-3,-1.8,3.8,2),await $(`Two snow people \u2014 one big, one small \u2014 and a sun with a face. Underneath, in careful letters: ME + ${il().toUpperCase()}.`),await Ne({seconds:4,label:"Look at it a little longer."}),await $("It is the best thing anyone has ever put on that fridge. You will tell everyone so."),await Dt("drawing","Pip\u2019s drawing on the fridge"),await Kt(t,8.5)}},{id:"listen",label:"Listen to the house",at:[-2.9,2.6],caption:"A house full of sleeping people",async run(n){let t=n.me;await t.walkTo(-2.9,2.7),t.face(-3.6,3.2),await on(6.5,2),ti({room:.25,clock:.2,wind:.1},2),await Ne({seconds:6,label:"Be very still.",onProgress:e=>{Math.random()<.006&&et("creak",{vol:.25})}}),await $("Upstairs, three people are asleep. If you are very still, you can hear them."),await $("It is the same quiet as before. But now it is full."),await Dt("listen","A house full of sleeping people"),ti({room:.5,clock:.35,wind:.2},3),await on(8.5,2)}},{id:"album",kind:"story",label:"Open the album",at:[.4,.2],caption:null,async run(n){let t=n.me;await t.walkTo(.9,-.55),t.giveCane(!1),t.faceNow(.9,.6),t.setPose("read",{h:.45}),t.position.set(.9,0,-.35),await Bt(.9,.3,5.8,3),oi("title",{intensity:.25}),await $("And here you are again. The kitchen, the snow, the album."),await $("\u201CFor all the little moments,\u201D the card said.");let e=x.album.count(),i=Math.max(1,x.album.registry.size);e===0?await $("The pages are empty. You were too busy living to take pictures. That happens."):e<i*.35?await $("Not so many pictures. But you can feel the ones that are missing, like a step in the dark."):await $("So many pages. And look \u2014 look how many you kept."),await _i("Just once more. From the beginning."),await Ne({seconds:4,label:"Turn the first page."}),et("rustle"),gn(.6,4),Ae("dream",6),await wi(["You turn the pages slowly.","And somewhere between one page and the next \u2014","\u2014 you close your eyes."],{minTime:1.3}),await si(3,"#fff6ee"),x.ui.clearNarration(),await e1("#16121a",2.5)}}],final:"album"};Be();ii();ii();He();Ds();var Vp={7:[80,75],6:[55,40],5:[40,30],4:[28,22],3:[15,12],2:[7,5],1:[1.25,.7]},Ia=(n,t,e)=>x.achieve?.(n,t,e),Nl=(n,t=70)=>typeof n=="string"&&n.trim().length>0&&n.length<=t,Fl=n=>n.trim().replace(/^[“"']+|[”"']+$/g,"");function c1(n){let t=x.state.flags;switch(n){case 7:{let e=t.ch7First==="talk"?"A porch, and a talk that was long overdue.":"Two cups of tea. Snow, and a small hand pulling you into it.",i=t.giftNow===!1?" A small box with Pip\u2019s name on it.":t.giftNow&&t.hasWatch?" Grandpa\u2019s watch, on a smaller wrist.":t.giftNow?" Your scarf, round a smaller neck.":"";return e+i+" A small voice humming an old song."}case 6:return t.saidNo?"The years that went by like pages in the wind \u2014 and the day you said no to something, so you could say yes to them.":"The years that went by like pages in the wind.";case 5:{let e="A small hand in yours. \u201CWill you always be here?\u201D";return Nl(t.alwaysAnswer)&&(e+=` \u201C${Fl(t.alwaysAnswer)}\u201D`),Nl(t.drawing,40)&&(e+=` A drawing on the fridge: ${Fl(t.drawing)}.`),(x.state.stats?.emails??0)>5&&(e+=" And a phone that would not stop lighting up."),e}case 4:{let e=t.danced===!1?"Lanterns, and a dance you almost had.":t.danced?"Lanterns, and a waltz. You stepped on their feet twice.":"Lanterns. A waltz.";return e+=Nl(t.vow)?` A tree, two people under it, and a promise: \u201C${Fl(t.vow)}\u201D`:" A tree, and two people under it.",e}case 3:{let e=t.metSamYoung?"Bicycles, rain, and an ice cream shared with a kid called Sam. ":"Bicycles and rain. ";return t.satWithGrandpa===!0?e+="A porch, and an old man who saved you a seat. You sat.":t.satWithGrandpa===!1?e+="A porch, and an empty chair. You said \u201Clater\u201D. He understood. He always did.":e+="A porch, and someone saving you a seat.",e}case 2:{let e={dragon:"a dragon",ocean:"the ocean",moon:"the moon"}[t.storyChoice];return e?`Fireflies in a jar. A story about ${e}. \u201CRead it again.\u201D`:"Fireflies in a jar. \u201CRead it again.\u201D"}case 1:return Nl(t.firstWord,20)?`Stars going round and round. A song. Three steps. And one word: \u201C${Fl(t.firstWord)}.\u201D`:"Stars going round and round. A song. Three steps."}return""}function h1(){let n=x.state.flags,t=[];t.push(`You were ${x.state.identity==="father"?"a father":"a mother"}. Somebody called you {me}. Somebody still does.`),n.satWithGrandpa===!0?t.push("When Grandpa asked you to sit with him, you sat."):n.satWithGrandpa===!1&&t.push("You told Grandpa \u201Clater\u201D, once. He kept your seat anyway."),n.danced===!0?t.push("Under the lanterns, you danced."):n.danced===!1&&t.push("You didn\u2019t dance at the festival. You danced in the kitchen instead, for fifty years."),n.ch7Advice==="phone"?t.push("You told {child} to put the phone away. {They} did \u2014 mostly."):n.ch7Advice==="emails"?t.push("You told {child} about the emails. {They} listened."):n.ch7First==="talk"?t.push("When Pip came, you sat with {child} first."):n.ch7First==="snow"&&t.push("When Pip came, you went straight out into the snow.");let e={grandpa:"You told Pip about Grandpa, and the watering can, and his wet shoes.",wedding:"You told Pip about the wedding under the tree.",swing:"You pushed Pip on the old swing. Higher. Higher."}[n.toldPip];return e&&t.push(e),n.giftNow===!1?t.push("You left a small box on the table with Pip\u2019s name on it."):n.giftNow&&n.hasWatch?t.push("Grandpa\u2019s watch is Pip\u2019s now. It still ticks."):n.giftNow&&t.push("Your scarf is Pip\u2019s now."),t.slice(0,7).map(Le)}var Gp={7:13161184,6:14663578,5:11850906,4:14656698,3:14993036,2:11064458,1:15782592},$d={bloom:.42,dream:.32,exposure:.94,saturation:1.1,contrast:1.04,fogNear:6,fogFar:46,vignette:.34,warmth:.25},Wp={7:[4,"winter"],6:[3,"autumn"],5:[3,"summer"],4:[2,"spring"],3:[1,"summer"],2:[0,"summer"]},Jd=["We are born so tiny.","We get older.","And then time passes so fast.","So hold the little moments as they pass \u2014","the small, ordinary, sweet ones.","They are not the pause between the important things.","They are the important things."],Xp=2,d1=5.5,Kd=7,jd=12,Yp=.95,u1=new P(-1,0,-1).normalize(),f1=new P(1,0,-1).normalize(),p1=2.6,m1=22;function g1(n){let t=d=>u1.clone().multiplyScalar(d).addScaledVector(f1,p1*Math.sin(d*Math.PI*2/m1)),i=[],s=0,a=0,o=t(0),r=.2;for(i.push(o.clone());a<n+2;){s+=.01;let d=t(s);a+=d.distanceTo(o),o=d,a>=r&&(i.push(d.clone()),r+=.2)}let l=i.map((d,u)=>i[Math.min(i.length-1,u+1)].clone().sub(i[Math.max(0,u-1)]).normalize()),c=l.map(d=>new P(-d.z,0,d.x)),h=d=>qt(Math.round(d/.2),0,i.length-1);return{pts:i,tans:l,nrms:c,step:.2,L:n,idx:h,at:d=>i[h(d)],tan:d=>l[h(d)],nrm:d=>c[h(d)]}}function y1(){let n=[...x.album.registry.values()],t=new Map(n.map((i,s)=>[i.id,s])),e=[];for(let i=7;i>=1;i--){let s=[...x.album.kept.entries()].filter(([,l])=>l.chapter===i).map(([l,c])=>({id:l,caption:c.caption,img:c.img,empty:!1})).sort((l,c)=>(t.get(c.id)??1e6)-(t.get(l.id)??1e6)),a=n.filter(l=>l.chapter===i&&!x.album.kept.has(l.id)),o=Math.min(3,a.length),r=[...s];for(let l=0;l<o;l++){let c=Math.round((l+1)*(s.length+o)/(o+1))-1;r.splice(qt(c,0,r.length),0,{id:"empty-"+i+"-"+l,caption:"a moment that passed",img:null,empty:!0})}e.push({ch:i,items:r})}return e}function qp(n,t,e){let i=t.split(" "),s=[],a="";for(let o of i){let r=a?a+" "+o:o;n.measureText(r).width>e&&a?(s.push(a),a=o):a=r}return a&&s.push(a),s}function x1(n){return an(512,614,(t,e,i)=>{t.fillStyle=n.empty?"#f6f1ea":"#fffdf8",t.fillRect(0,0,e,i),n.empty&&(t.strokeStyle="#cdbfae",t.lineWidth=6,t.setLineDash([18,14]),t.strokeRect(10,10,e-20,i-20),t.setLineDash([]),t.strokeRect(34,34,e-68,336));let s=58;t.font=`${n.empty?"italic 500":"600"} ${s}px ${n.empty?'"Cormorant Garamond", Georgia, serif':'Caveat, "Segoe Print", cursive'}`;let a=qp(t,Le(n.caption),e-40);for(;a.length>2&&s>34;)s-=4,t.font=t.font.replace(/\d+px/,s+"px"),a=qp(t,Le(n.caption),e-40);a=a.slice(0,3),t.fillStyle=n.empty?"#a59889":"#4a3f48",t.textAlign="center",t.textBaseline="middle";let o=380+(i-380)/2-(a.length-1)*s*1.05/2;a.forEach((r,l)=>t.fillText(r,e/2,o+l*s*1.05))})}function v1(n){let t=fe(n*7+3);return an(160,120,(e,i,s)=>{let a=e.createLinearGradient(0,0,i,s);a.addColorStop(0,"#f6dce6"),a.addColorStop(1,"#fff2df"),e.fillStyle=a,e.fillRect(0,0,i,s);for(let o=0;o<7;o++){let r=e.createRadialGradient(t()*i,t()*s,0,t()*i,t()*s,t.range(10,34));r.addColorStop(0,"rgba(255,255,255,0.8)"),r.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=r,e.fillRect(0,0,i,s)}})}var w1=new Xr;function _1(n,t){let e=new rt,i=1.55,s=1.86,a=new Pe({map:x1(n),transparent:n.empty,opacity:n.empty?.42:1,depthWrite:!n.empty});a.color.setScalar(n.empty?1:.9);let o=new bt(new Ue(i,s),a);if(o.position.z=.018,e.add(o),!n.empty){let r=mn(i,s,.03,15261908);e.add(r);let l=n.img?w1.load(n.img,d=>{d.needsUpdate=!0}):v1(t);l.colorSpace=Xe;let c=new Pe({map:l});c.color.setScalar(.95);let h=new bt(new Ue(1.36,1.02),c);h.position.set(0,s/2-.09-.51,.022),e.add(h)}return e}function Qd(n,t,e,i,s,a,o=!1){let r=We(n,t,e,i,s,a),l=new Pe({color:16770224,transparent:!0,opacity:.92});r.root.traverse(h=>{!h.isMesh||h===r.blob||o&&h===r.scarfM||(h.material=l,h.castShadow=!1)}),r.blob.material.color.setHex(16767392),r.blob.material.opacity=.3;let c=Ge(16769712,3,.35);return c.position.y=1,r.root.add(c),r.glowMat=l,r.halo=c,r}var b1=n=>n>=62?"old":n>=18?"adult":n>=9?"teen":n>=1.5?"kid":"baby";function Jp(n){return n==="old"?{...as(40),shirt:10325636,pants:5591132}:as({adult:30,teen:13,kid:6,baby:.5}[n])}function tu(n,t){let e=Jp(t);n.setOutfit({shirt:e.shirt,pants:e.pants,hair:e.hair,hairStyle:e.hairStyle});let i=pe(e.shoes??3813424);n.legL.end.material=i,n.legR.end.material=i,n.giveCane(t==="old"),n.band=t}var Zp=n=>({old:1.45,adult:1.85,teen:2,kid:1.75,baby:1})[n],Kp={id:"ch8-epilogue",chapter:8,card:{num:"VIII",title:"The Little Moments",ages:"all of them",quote:"Everything you held on to is still here."},mood:"dream",music:"epilogue",intensity:.2,ambience:{wind:.12},zoom:8,surface:"grass",hint:"Walk along the path. Take as long as you like.",build(n){let t=n.world,e=n.groups=y1(),i=Kd,s=[[0,80]];for(let M of e){let b=Math.max(8,M.items.length*Xp+4);M.s0=i,M.s1=i+b,s.push([M.s0,Vp[M.ch][0]],[M.s1,Vp[M.ch][1]]),M.items.forEach((R,N)=>{R.s=M.s0+2+N*Xp,R.side=N%2?-1:1}),i=M.s1+d1}let a=i,o=n.L=i+jd;s.push([o,.65]),n.ageAt=M=>{for(let b=0;b<s.length-1;b++){let[R,N]=s[b],[D,F]=s[b+1];if(M<=D)return $e(N,F,qt((M-R)/Math.max(1e-6,D-R),0,1))}return s[s.length-1][1]};let r=n.path=g1(o),l=M=>{let b=r.tan(M);return Math.atan2(b.x,b.z)},c=fe(81),h=(M,b,R,N,D)=>{let F=r.at(M),O=r.nrm(M),z=Rs({w:b,d:R,h:.8,top:N,side:14270382,under:13150916,edge:vi(N,.9),seed:D});return t.add(z,F.x+O.x*c.range(-.6,.6),F.z+O.z*c.range(-.6,.6),{ry:l(M)}),z};h(Kd/2,9,Kd+1.5,Gp[7],3);for(let M of e){let b=M.s1-M.s0,R=Math.max(1,Math.round(b/6.5)),N=b/R;for(let F=0;F<R;F++)h(M.s0+(F+.5)*N,10.5,N+1.5,Gp[M.ch],10+M.ch*7+F);let D=(M.s0+M.s1)/2;for(let F=0;F<12;F++){let O=c.range(M.s0,M.s1),z=(c()<.5?-1:1)*c.range(3,4.6),Y=r.at(O),W=r.nrm(O),st=M.ch===7?Cs(.5,F,U.snowShade):F%3?Ps(c.pick([U.pink,U.yellow,16777215,12166886]),F):Ma(U.grassDark,F);t.add(st,Y.x+W.x*z,Y.z+W.z*z)}if(Wp[M.ch]){let[F,O]=Wp[M.ch],z=r.at(D),Y=r.nrm(D);t.add(ba({stage:F,season:O,swing:M.ch===5}),z.x-Y.x*4.9,z.z-Y.z*4.9,{s:.75})}else{let F=r.at(D),O=r.nrm(D);t.add(is({kind:"blossom",season:"spring",size:.8,seed:5}),F.x-O.x*4.4,F.z-O.z*4.4),t.add(_l(),F.x+O.x*4,F.z+O.z*4,{ry:l(D),s:.8})}}let d=h(a+jd/2+.5,12,jd+1,14852786,99);n.endIsland=d;for(let M=0;M<16;M++){let b=M/16*o,R=r.at(b),N=r.nrm(b),D=(M%2?1:-1)*c.range(6,11),F=Ta(M+1,c.range(1.2,2));t.add(F,R.x+N.x*D,R.z+N.z*D,{y:c.range(-6,-2.5)})}let u=(M,b,R,N,D)=>{let F=[],O=[],z=r.pts.length,Y=Math.min(z,r.idx(o-5.4));for(let Nt=0;Nt<Y;Nt+=2){let Gt=r.pts[Nt],K=r.nrms[Nt];F.push(Gt.x-K.x*M,b,Gt.z-K.z*M,Gt.x+K.x*M,b,Gt.z+K.z*M)}let W=F.length/6;for(let Nt=0;Nt<W-1;Nt++){let Gt=Nt*2;O.push(Gt,Gt+2,Gt+1,Gt+1,Gt+2,Gt+3)}let st=new Ie;st.setAttribute("position",new oe(F,3)),st.setIndex(O);let pt=new Pe({color:R,transparent:!0,opacity:N,depthWrite:!1,side:Te,blending:D?Si:Yn}),vt=new bt(st,pt);return vt.renderOrder=2,t.root.add(vt),vt};u(1.45,.025,16771014,.35,!0),u(.72,.035,16774372,.95,!1);for(let M=.8;M<o-5.6;M+=1.4){let b=r.at(M),R=r.nrm(M);for(let N of[-1,1]){let D=Ge(16769716,.5,.75);D.position.set(b.x+R.x*N*.92,.14,b.z+R.z*N*.92),t.root.add(D)}}let p=new P(1,0,1).normalize(),g=0;for(let M of e)for(let b of M.items){let R=r.at(b.s),N=r.nrm(b.s),D=R.x+N.x*b.side*2.2,F=R.z+N.z*b.side*2.2,O=new rt,z=j(.07,1,.07,b.empty?15260875:14206120);O.add(z);let Y=_1(b,g++);Y.position.y=1+.93,Y.rotation.x=-.08,Y.rotation.z=c.range(-.06,.06),O.add(Y);let W=new P(-N.x*b.side,0,-N.z*b.side),st=p.clone().multiplyScalar(.8).addScaledVector(W,.25).normalize();if(t.add(O,D,F,{ry:Math.atan2(st.x,st.z)}),!b.empty){let pt=Ge(16773328,2.8,.16);pt.position.set(D,1.9,F),t.root.add(pt)}}t.particlesOf("memories",{count:46,area:{w:26,h:9,d:26},y0:-3}),t.particlesOf("motes",{count:40,area:{w:20,h:5,d:20},opacity:.6});let f=1.5,y=r.at(f),m=n.me=ui(80,y.x,y.z,l(f),Jp("old"));tu(m,"old"),m.walkSpeed=Zp("old"),n.si=r.idx(f),n.maxS=f,n.speedMul=qt(o/85,1,1.5);let w=e.find(M=>M.ch===4);n.samS=(w.s0+w.s1)/2;{let M=r.at(n.samS),b=r.nrm(n.samS);n.sam=Qd({...Fe.sam,scarf:7316424},26,"Sam",M.x-b.x*3,M.z-b.z*3,l(n.samS)+Math.PI*.6,!0)}let v=o-2.6,_=r.at(v),I=r.nrm(v),T=l(v)+Math.PI;n.dad=Qd(Fe.dad,33,"Dad",_.x+I.x*.7,_.z+I.z*.7,T),n.mom=Qd(Fe.mom,31,"Mom",_.x-I.x*.7,_.z-I.z*.7,T),n.endMarker=new Me;{let M=r.at(o-4.6);n.endMarker.position.set(M.x,0,M.z)}t.root.add(n.endMarker),t.resolve=(M,b)=>{let R=r.pts,N=n.si,D=1/0;for(let Pt=Math.max(0,n.si-70),Xt=Math.min(R.length-1,n.si+70);Pt<=Xt;Pt++){let Ot=(R[Pt].x-M)**2+(R[Pt].z-b)**2;Ot<D&&(D=Ot,N=Pt)}let F=Math.max(0,Math.floor((n.maxS-4)/r.step)),O=Math.floor((o-.8)/r.step),z=qt(N,F,O),Y=R[N],W=r.tans[N];N*r.step+(M-Y.x)*W.x+(b-Y.z)*W.z<Math.max(0,n.maxS-4)-.08&&!n.triedBack&&!x.auto&&(n.backT=(n.backT||0)+x.dt,n.backT>1.6&&(n.triedBack=!0,$("You can\u2019t go back. Nobody can. But you can look, as long as you like.",{block:!1,hold:6}),Ia("ch8_no_going_back","No Going Back","Tried to walk back along the path.")));let pt=R[N],vt=r.tans[N],Nt=r.nrms[N],Gt=(M-pt.x)*vt.x+(b-pt.z)*vt.z,K=qt((M-pt.x)*Nt.x+(b-pt.z)*Nt.z,-Yp,Yp);z>N?Gt=Math.max(0,Gt):z<N&&(Gt=Math.min(0,Gt));let dt=R[z],Ct=r.tans[z],ut=r.nrms[z];return Gt=qt(Gt,-r.step,r.step),n.si=z,n.maxS=Math.max(n.maxS,z*r.step+Gt),{x:dt.x+Ct.x*Gt+ut.x*K,z:dt.z+Ct.z*Gt+ut.z*K}};let E=new Set,k=new Me;t.root.add(k),k.userData.update=M=>{if(n.locked)return;let b=x.director;if(x.auto&&b.control&&!b.inMoment&&!n.finaleReady){let W=Math.min(o-5,n.maxS+M*6),st=r.at(W);m.position.x=st.x,m.position.z=st.z,m.targetHeading=l(W),m.speed=2,n.si=r.idx(W),n.maxS=W}let R=n.maxS,N=R/o,D=n.ageAt(R);Math.abs(D-m.age)>.015&&m.setAge(D);let F=b1(D);F!==m.band&&(tu(m,F),et("sparkle",{vol:.35}),t.burst(m.position.clone().add(new P(0,.8,0)),{count:26,color:16773328,speed:1.3})),m.walkSpeed=Zp(F)*n.speedMul,x.audio.setIntensity(.2+.8*qt(N*1.05,0,1),1.2);let O=tp(qt((N-.78)/.2,0,1));x.renderer.zoomGoal=$e(8,5.2,O);let z=r.tan(R);x.renderer.followOffset.set(z.x*1.6*(1-O),0,z.z*1.6*(1-O));for(let W of e)!E.has(W.ch)&&R>=W.s0-1&&(E.add(W.ch),$(c1(W.ch),{block:!1,hold:7.5}));let Y=n.sam;if(Y&&Y.root.visible){let W=R-n.samS;W>-6&&!Y.waved&&(Y.faceChar(m),W>-3.5&&(Y.waved=!0,Y.setPose("wave"))),!Y.waited&&!x.auto&&b.control&&Math.hypot(m.position.x-Y.position.x,m.position.z-Y.position.z)<3.5&&!m._playerMoving?(Y.waitT=(Y.waitT||0)+M,Y.waitT>3.5&&(Y.waited=!0,Y.setPose("idle"),Y.faceChar(m),G(Y,"Go on, love. I\u2019ll catch up.",{passive:!0,hold:3.6}),Ia("ch8_catch_up","I\u2019ll Catch Up","Stopped and waited with Sam on the path."))):Y.waited||(Y.waitT=0),W>2.5&&(Y.fade=(Y.fade??1)-M/3,Y.glowMat.opacity=Math.max(0,.92*Y.fade),Y.halo.material.opacity=Math.max(0,.35*Y.fade),Y.scarfM.material=Y.glowMat,Y.fade<=0&&(Y.root.visible=!1))}!n.finaleReady&&R>=o-8&&(n.finaleReady=!0,Ae("dream",6,{...$d,bloom:.6,warmth:.4}),n.dad.setPose("kneelOpen"),n.mom.setPose("kneel"),b.refreshHotspots())},t.track(k)},async intro(n){x.renderer.setMood("dream",0,$d),await ai(4),await $("You open your eyes somewhere soft and bright."),await $("There is a path. And all along it, the moments you kept.")},moments:[{id:"lifted",kind:"story",label:"Reach for them",anchor:n=>n.endMarker,radius:1.8,height:.9,when:n=>!!n.finaleReady,caption:"Small again, and held",async run(n){let t=n.me,e=n.mom,i=n.dad,s=n.path;n.locked=!0,t.band!=="baby"&&tu(t,"baby"),t.setAge(.8),t.setPose("sitGround",{look:-.3});let a=s.at(n.L-3.3);await Bt(a.x,a.z,4.8,3),await G(e,"There you are."),await G(i,"Hey, you. Come here. Come on. You can do it."),t.setAge(1.35),t.setPose("stand"),t.faceNow(i.position.x,i.position.z),await Ea({label:"Find your balance \u2014 \u2190 \u2192",seconds:3,difficulty:.7,onUpdate:h=>{t.tilt=-h*.3}}),t.tilt=0;let o=0,r=h=>{o+=h,t.tilt=Math.sin(o*7)*.12};x.updaters.add(r);let l=t.position.clone(),c=i.position.clone();for(let h=1;h<=3;h++){let d=l.clone().lerp(c,h/3*.78);await t.walkTo(d.x,d.z,{speed:.55}),et("step",{surface:"grass",vol:.7})}x.updaters.delete(r),t.tilt=0,i.pickUp(t),i.setPose("carryHigh"),et("giggle"),et("yay",{delay:.2,vol:.6}),yn(i,2,.12),gn(1,6),Ae("dream",8,{...$d,bloom:.7,warmth:.5,dream:.38}),await Bt(i.position.x,i.position.z,3.8,2.5),e.setPose("idle"),e.faceChar(i),await G(e,"Three steps. Did you count?"),await G(i,"Look at you. Look how far you came."),await G(e,Pa[2],{passive:!0,hold:3.4}),await G(e,Pa[3],{passive:!0,hold:3.4}),await Dt("ch8-held","Small again, and held",{window:12}),Ia("ch8_held","Held","Walked the whole path and were carried home."),await wt(1),await si(5,"#fff6ee")}}],final:"lifted",showEnding:()=>$p(),async outro(){x.ui.showHud(!1),ti({},4),gn(.5,8),await M1("#17131b",4),await wt(1),await wi(Jd.slice(0,3),{minTime:1.8}),x.ui.clearNarration(),await wt(1.1),await wi(Jd.slice(3,5),{minTime:1.8,stack:!0}),x.ui.clearNarration(),await wt(1.1),await wi(Jd.slice(5),{minTime:2}),x.ui.clearNarration(),await wt(1.6),$p()}};function M1(n,t=2){let e=x.ui.fadeEl;return e.style.transition=`opacity 0.01s, background ${t}s ease`,e.offsetWidth,e.style.background=n,new Promise(i=>setTimeout(i,t*1e3))}var T1=`
#lmEnd{position:absolute;inset:0;background:#17131b;color:#fff8ef;pointer-events:auto;overflow:hidden;opacity:0;transition:opacity 2s ease;font-family:var(--serif)}
#lmEnd.show{opacity:1}
#lmEnd .page{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 6vw;opacity:0;transition:opacity 1.6s ease;pointer-events:none}
#lmEnd .page.on{opacity:1;pointer-events:auto}
#lmEnd .strip{width:100vw;overflow:hidden;padding:20px 0 14px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
#lmEnd .track{display:flex;gap:28px;width:max-content;padding:0 14px}
#lmEnd .track.roll{animation:lmScroll var(--dur) linear infinite}
#lmEnd .track.still{margin:0 auto}
@keyframes lmScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
#lmEnd .pol{position:relative;flex:0 0 auto;width:clamp(130px,17vw,220px);background:#fffdf8;padding:8px 8px 36px;box-shadow:0 10px 30px rgba(0,0,0,.45);transform:rotate(var(--r));border-radius:2px}
#lmEnd .pol img,#lmEnd .pol .ph{display:block;width:100%;aspect-ratio:4/3;object-fit:cover;background:#e0d6ca}
#lmEnd .pol.empty{background:rgba(255,253,248,.12);box-shadow:none;border:2px dashed rgba(255,248,239,.35)}
#lmEnd .pol.empty .ph{background:transparent}
#lmEnd .pol .cap{position:absolute;left:0;right:0;bottom:7px;font-family:var(--hand);font-size:clamp(14px,1.45vw,19px);color:#4a3f48;padding:0 6px;line-height:1;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#lmEnd .pol.empty .cap{color:rgba(255,248,239,.6);font-family:var(--serif);font-style:italic}
#lmEnd .count{font-size:clamp(24px,3vw,38px);margin-top:18px;font-weight:500}
#lmEnd .sub{font-style:italic;font-size:clamp(16px,1.9vw,23px);opacity:.85;margin-top:10px;max-width:760px;line-height:1.4}
#lmEnd .muted{font-family:var(--sans);font-size:clamp(12px,1.2vw,14px);letter-spacing:.04em;opacity:.55;margin-top:14px;max-width:640px;line-height:1.5}
#lmEnd h1{font-weight:500;font-size:clamp(44px,7vw,84px);margin:0;letter-spacing:.01em}
#lmEnd .last{font-size:clamp(26px,3.6vw,46px);max-width:900px;line-height:1.3;font-weight:500}
#lmEnd button{margin-top:44px;font-family:var(--sans);font-size:16px;font-weight:700;border:0;border-radius:30px;padding:13px 34px;background:rgba(255,250,242,.92);color:#3a3036;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.3);transition:transform .2s}
#lmEnd button:hover{transform:scale(1.04)}
#lmEnd .row{display:flex;gap:14px;flex-wrap:wrap;justify-content:center}
#lmEnd button.ghost{background:transparent;color:#fff8ef;box-shadow:none;border:1px solid rgba(255,248,239,.4)}
#lmEnd .lines{margin-top:12px;display:flex;flex-direction:column;gap:4px}
#lmEnd .lines .sub{margin-top:4px}
#lmEnd .tap{position:absolute;bottom:4vh;left:0;right:0;font-family:var(--sans);font-size:11px;letter-spacing:.22em;text-transform:uppercase;opacity:.35;text-align:center;transition:opacity 1s}
`;function $p(){if(!document.getElementById("lmEndCss")){let O=document.createElement("style");O.id="lmEndCss",O.textContent=T1,document.head.appendChild(O)}x.log?.push("ending: shown"),x.director.setControl(!1),x.director.current=null;let n=x.album,t=new Set([...n.registry.keys()]),e=new Set([...t,...n.kept.keys()]),i=new Map([...n.registry.keys()].map((O,z)=>[O,z])),s=[...n.kept.entries()].sort((O,z)=>O[1].chapter-z[1].chapter||(i.get(O[0])??1e6)-(i.get(z[0])??1e6)),a=s.length,o=Math.max(a,e.size),r=lt("div");r.id="lmEnd";let l=lt("div","page"),c=lt("div","strip"),h=lt("div","track"),d=(O,z)=>{let Y=lt("div","pol"+(O?"":" empty"));return Y.style.setProperty("--r",(z*37%9-4)*.7+"deg"),Y.innerHTML=O?(O.img?`<img src="${O.img}">`:'<div class="ph"></div>')+`<div class="cap">${Le(O.caption)}</div>`:'<div class="ph"></div><div class="cap">\u2026</div>',Y};if(a===0)h.appendChild(d(null,0)),h.classList.add("still");else if(a<=3)s.forEach(([,O],z)=>h.appendChild(d(O,z))),h.classList.add("still");else{for(let O=0;O<2;O++)s.forEach(([,z],Y)=>h.appendChild(d(z,Y)));h.classList.add("roll"),h.style.setProperty("--dur",Math.max(26,a*3.6)+"s")}c.appendChild(h),l.appendChild(c),l.appendChild(lt("div","count",`You kept ${a} of ${o} ${o===1?"moment":"moments"}.`)),a===0&&l.appendChild(lt("div","sub","The album is empty. The life wasn\u2019t."));let u=x.state.stats?.emails??0;u>0&&l.appendChild(lt("div","muted",`Emails answered: ${u}. They all got answered in the end, one way or another.`)),l.appendChild(lt("div","sub","The moments you didn\u2019t keep happened anyway.<br>Someone else may be keeping them for you."));let p=lt("div","page");p.appendChild(lt("div","muted","A LIFE, IN A FEW LINES"));let g=lt("div","lines");h1().forEach(O=>g.appendChild(lt("div","sub",O))),p.appendChild(g);let f=lt("div","page");f.appendChild(lt("h1","","Little Moments")),f.appendChild(lt("div","sub","a game about time")),f.appendChild(lt("div","muted","Made with Three.js and Web Audio"));let y=lt("div","page");y.appendChild(lt("div","last","Now close this, and go find your little ones."));let m=lt("div","row"),w=lt("button","","Return to the beginning");m.appendChild(w);let v=lt("button","ghost","Achievements");m.appendChild(v),y.appendChild(m);let _=lt("div","tap","click to continue");r.append(l,p,f,y,_),document.getElementById("ui").appendChild(r),r.offsetWidth,r.classList.add("show"),x.ui.fade(1,.01,"#17131b");let I=[l,p,f,y],T=-1,E=null,k=!1,M=x.auto?[1.4,1.2,1.2]:[16,12,8],b=O=>{k||O>=I.length||O===T||(I.forEach((z,Y)=>z.classList.toggle("on",Y===O)),T=O,clearTimeout(E),O<I.length-1?E=setTimeout(()=>b(O+1),M[O]*1e3):(_.style.opacity="0",x.auto&&(E=setTimeout(F,2500))))},R=()=>{T<I.length-1&&b(T+1)},N=O=>{(O.code==="Space"||O.code==="Enter"||O.code==="ArrowRight")&&R()},D=O=>{O.target===w||O.target===v||R()};function F(){k||(k=!0,clearTimeout(E),window.removeEventListener("keydown",N),r.removeEventListener("pointerdown",D),x.director.menuOpen&&x.director.closeMenu(),x.paused=!1,x.log?.push("ending: closed"),r.classList.remove("show"),setTimeout(()=>{r.remove(),x.director.onTitle&&x.director.onTitle()},1200))}window.addEventListener("keydown",N),r.addEventListener("pointerdown",D),w.addEventListener("click",O=>{O.stopPropagation(),F()}),v.addEventListener("click",O=>{O.stopPropagation(),x.showAchievements?.()}),Ia("game_complete","A Whole Life","Lived a whole life, from tiny to tiny again."),a>0&&a>=o&&Ia("ch8_every_moment","Every Little Moment","Kept every moment there was to keep."),a===0&&Ia("ch8_present","Present","Finished with an empty album. You were there for all of it."),setTimeout(()=>b(0),400)}var ka=[Cp,Ip,kp,Dp,Up,Np,Fp,Bp,zp,Hp,Kp];He();var S1=[{id:"begin",cat:"story",title:"So Small",desc:"Begin a life."},{id:"first_steps",cat:"story",title:"Three Steps",desc:"Take your first steps."},{id:"first_word",cat:"story",title:"First Word",desc:"Say your very first word."},{id:"ch1",cat:"story",title:"Tiny",desc:"Finish Chapter I."},{id:"ch2",cat:"story",title:"Wonder",desc:"Finish Chapter II."},{id:"ch3",cat:"story",title:"Running",desc:"Finish Chapter III."},{id:"ch4",cat:"story",title:"Together",desc:"Finish Chapter IV."},{id:"ch5",cat:"story",title:"Little Ones",desc:"Finish Chapter V."},{id:"ch6",cat:"story",title:"So Fast",desc:"Finish Chapter VI."},{id:"ch7",cat:"story",title:"Winter",desc:"Finish Chapter VII."},{id:"the_end",cat:"story",title:"The Little Moments",desc:"Live a whole life."},{id:"your_song",cat:"story",title:"Your Mother\u2019s Song",desc:"Sing the lullaby to your own child."},{id:"always",cat:"story",title:"Will You Always Be Here?",desc:"Answer the hardest question."},{id:"keep_1",cat:"album",title:"Click",desc:"Keep your first moment."},{id:"keep_10",cat:"album",title:"A Handful of Moments",desc:"Keep 10 moments."},{id:"keep_30",cat:"album",title:"A Shoebox of Photographs",desc:"Keep 30 moments."},{id:"keep_60",cat:"album",title:"A Full Album",desc:"Keep 60 moments."},{id:"present",cat:"album",title:"Fully Present",desc:"Keep every moment in a chapter."},{id:"passed",cat:"album",title:"It Happened Anyway",desc:"Let a moment pass you by."},{id:"as_mother",cat:"path",title:"A Mother",desc:"Live a whole life as a mother."},{id:"as_father",cat:"path",title:"A Father",desc:"Live a whole life as a father."},{id:"both_lives",cat:"path",title:"Two Lives",desc:"Live a whole life as a mother and as a father."},{id:"call_mom",cat:"path",title:"Mama\u2019s Arms",desc:"Call for your mother in the nursery.",hidden:!0},{id:"call_dad",cat:"path",title:"Papa\u2019s Arms",desc:"Call for your father in the nursery.",hidden:!0},{id:"word_woof",cat:"path",title:"Woof",desc:"Make your first word a bark.",hidden:!0},{id:"grandma_lap",cat:"path",title:"Grandma\u2019s Lap",desc:"Fall asleep on Grandma\u2019s lap.",hidden:!0},{id:"grandpa_lap",cat:"path",title:"Grandpa\u2019s Whistle",desc:"Fall asleep on Grandpa\u2019s lap.",hidden:!0},{id:"daughter",cat:"path",title:"A Daughter",desc:"Raise a daughter."},{id:"son",cat:"path",title:"A Son",desc:"Raise a son."},{id:"wake_sam",cat:"path",title:"Two Tired People",desc:"Wake Sam for the 3 a.m. feed.",hidden:!0},{id:"let_go",cat:"path",title:"Let Go",desc:"Let go of the bike.",hidden:!0},{id:"held_on",cat:"path",title:"A Little Longer",desc:"Hold on to the bike a little longer.",hidden:!0},{id:"said_no",cat:"path",title:"Not Today",desc:"Say no to working on a Saturday."},{id:"workaholic",cat:"path",title:"Just One More Email",desc:"Answer work five times in one life.",hidden:!0},{id:"unplugged",cat:"path",title:"Unplugged",desc:"Get through Chapter V without answering work once."},{id:"puppy",cat:"path",title:"A New Biscuit",desc:"Say yes to the puppy.",hidden:!0},{id:"every_answer",cat:"path",title:"Every Answer Was True",desc:"Give each answer to \u201CWill you always be here?\u201D across your lives.",hidden:!0},{id:"konami",cat:"egg",title:"Party Hats",desc:"Up, up, down, down\u2026",hidden:!0},{id:"title_swing",cat:"egg",title:"One More Push",desc:"Be very impatient on the title screen.",hidden:!0},{id:"fridge",cat:"egg",title:"Old Friend",desc:"Find what is stuck to the fridge.",hidden:!0},{id:"plant_snack",cat:"egg",title:"Taste Test",desc:"Find out what the plant tastes like.",hidden:!0},{id:"hedgehog",cat:"egg",title:"A Tiny Friend",desc:"Find who lives under the hedge.",hidden:!0},{id:"diaper",cat:"egg",title:"Your Turn",desc:"Volunteer for diaper duty.",hidden:!0},{id:"postcard",cat:"egg",title:"Wish You Were Here",desc:"Check the mailbox.",hidden:!0},{id:"wish",cat:"egg",title:"Make a Wish",desc:"Catch the shooting star.",hidden:!0}],jp="lm.achievements",Ol=class{constructor(){this.defs=new Map(S1.map(t=>[t.id,{...t}])),this.unlocked={},this.meta={};try{let t=JSON.parse(localStorage.getItem(jp)||"{}");this.unlocked=t.unlocked||{},this.meta=t.meta||{};for(let e of t.extra||[])this.defs.has(e.id)||this.defs.set(e.id,e)}catch{}this.queue=[],this.showing=!1,this.el=null,setTimeout(()=>{for(let t in this.unlocked)this._steam(t)},2e3)}_save(){let t=[...this.defs.values()].filter(e=>e.extra);try{localStorage.setItem(jp,JSON.stringify({unlocked:this.unlocked,meta:this.meta,extra:t}))}catch{}}steamName(t){return this.defs.get(t)?.steam??"ACH_"+t.toUpperCase().replace(/[^A-Z0-9]/g,"_")}_steam(t){let e=this.steamName(t);try{window.steam?.activateAchievement?window.steam.activateAchievement(e):window.greenworks?.activateAchievement&&window.greenworks.activateAchievement(e,()=>{},()=>{})}catch{}}has(t){return!!this.unlocked[t]}unlock(t,e=null,i=null,s="path"){return this.defs.has(t)||this.defs.set(t,{id:t,title:e??t,desc:i??"",cat:s,extra:!0}),this.unlocked[t]?!1:(this.unlocked[t]=Date.now(),this._save(),this._steam(t),this.queue.push(this.defs.get(t)),this._next(),!0)}remember(t,e){let i=new Set(this.meta[t]||[]);return i.add(e),this.meta[t]=[...i],this._save(),i.size}count(){return Object.keys(this.unlocked).length}async _next(){if(this.showing||!this.queue.length)return;this.showing=!0;let t=this.queue.shift(),e=lt("div","achToast",`<div class="star">\u2726</div><div><div class="lbl">Achievement</div><div class="ttl">${t.title}</div><div class="dsc">${t.desc}</div></div>`);document.getElementById("ui").appendChild(e),x.audio?.sfx("sparkle",{vol:.6}),requestAnimationFrame(()=>e.classList.add("show")),await new Promise(i=>setTimeout(i,3800)),e.classList.remove("show"),await new Promise(i=>setTimeout(i,600)),e.remove(),this.showing=!1,this._next()}show(t=null){let e=x.paused;x.paused=!0;let i=lt("div","achView"),s=lt("div","achPanel"),a=this.defs.size,o=Object.keys(this.unlocked).filter(d=>this.defs.has(d)).length;s.appendChild(lt("div","head",`<h2>Achievements</h2><span>${o} / ${a}</span>`));let r=lt("button","close","Close \u2715");s.querySelector(".head").appendChild(r);let l=lt("div","list"),c=[["story","The story"],["album","The album"],["path","Other lives"],["egg","Little secrets"]];for(let[d,u]of c){let p=[...this.defs.values()].filter(g=>(g.cat??"path")===d);if(p.length){l.appendChild(lt("h3","",u));for(let g of p){let f=!!this.unlocked[g.id];l.appendChild(lt("div","ach"+(f?" on":""),`<div class="star">${f?"\u2726":"\u2727"}</div><div><div class="ttl">${f||!g.hidden?g.title:"???"}</div><div class="dsc">${f||!g.hidden?g.desc:"A secret, for another life."}</div></div>`))}}}s.appendChild(l),i.appendChild(s),document.getElementById("ui").appendChild(i);let h=()=>{i.remove(),x.paused=e&&!!x.director?.menuOpen,x.director?.menuOpen||(x.paused=!1),t&&t()};r.addEventListener("click",h),i.addEventListener("pointerdown",d=>{d.target===i&&h()})}};function Qp(n){let t=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"],e=0;window.addEventListener("keydown",i=>{i.code===t[e]?(e++,e===t.length&&(e=0,n())):e=i.code===t[0]?1:0})}function E1(){let n=new URLSearchParams(location.search);x.debug=n.has("debug"),x.speed=parseFloat(n.get("speed")||"1"),x.auto=n.has("auto"),x.autoSkip=n.has("skiplittle"),x.autoChoice=parseInt(n.get("choice")||"0",10),x.log=[],x.renderer=new cl(document.getElementById("game")),n.has("lowfx")&&(x.renderer.r.setPixelRatio(.5),x.renderer.r.shadowMap.enabled=!1,x.renderer.bloom.enabled=!1,x.renderer.ao.enabled=!1,x.renderer.resize()),x.scene=x.renderer.scene,x.camera=x.renderer.camera,x.input=new hl(x.renderer.r.domElement),x.ui=new dl,x.audio=new fl,x.album=new To,x.director=new Il(ka),x.ach=new Ol,x.achieve=(s,a,o,r)=>x.ach.unlock(s,a,o,r),x.showAchievements=()=>x.ach.show(),Qp(()=>C1()),x.director.onTitle=()=>{x.director.abort(),t0()};for(let s of ka)for(let a of s.moments??[])a.caption&&x.album.register(a.caption.id??a.id,s.chapter,typeof a.caption=="string"?a.caption:a.caption.text,s.id,a.alt);for(let s of ka)(s.extraMoments??[]).forEach(([a,o])=>x.album.register(a,s.chapter,o,s.id));document.getElementById("menuBtn").addEventListener("click",()=>x.director.toggleMenu()),document.getElementById("albumBtn").addEventListener("click",()=>{x.album.open?x.album.hide():x.director.openAlbum()});let t=performance.now(),e=s=>{let a=Math.min(x.auto?.25:.05,(s-t)/1e3);t=s,x.realTime+=a;let o=x.input;if(o.pressed("pause")&&x.director.current&&x.director.toggleMenu(),o.pressed("album")&&x.director.current&&!x.director.menuOpen&&(x.album.open?x.album.hide():x.director.openAlbum()),!x.paused){let r=a*x.timeScale*x.speed;x.dt=r,x.time+=r;for(let l of[...x.updaters])l(r);for(let l of[...x.realUpdaters])l(a*x.speed);x.world&&x.world.update(r,x.time),x.director.update(r,a*x.speed),Lo&&R1(a)}x.ui.update(),x.renderer.update(a),x.renderer.render(),o.endFrame(),requestAnimationFrame(e)};if(requestAnimationFrame(e),n.has("lineup")){P1(n.get("lineup"));return}let i=n.get("scene")??n.get("s");if(i!==null){let s=ka.findIndex(o=>o.id===i);s<0&&(s=parseInt(i,10)||0),x.state.identity=n.get("who")==="father"?"father":"mother",x.state.childName=n.get("child")||x.state.childName,x.ui.fade(1,.01);let a=()=>{x.audio.init(),x.director.start(s)};if(n.has("noaudio"))x.director.start(s);else{let o=lt("div","");o.style.cssText="position:fixed;inset:0;z-index:99;display:flex;align-items:center;justify-content:center;color:#fff;font:20px sans-serif;cursor:pointer;pointer-events:auto",o.textContent="Click to start scene "+ka[s].id,document.body.appendChild(o),o.addEventListener("click",()=>{o.remove(),a()})}return}t0()}var Lo=null,eu=0;function A1(){x.world&&x.world.dispose();let n=new Ls({name:"title"});x.world=n,Lo=n,n.add(Rs({w:9,d:9,h:1,top:U.grassSpring,seed:8}),0,0);let t=ba({stage:3,season:"spring",swing:!0});n.add(t,.6,-.8),Bl=t.userData.swing,zl=0,n.add(vl(),-1.6,1.4,{ry:.6});let e=fe(4);for(let s=0;s<30;s++)n.add(Ma(U.grassDark,s),e.range(-4,4),e.range(-4,4));for(let s=0;s<14;s++)n.add(Ps(e.pick([U.pink,U.yellow,16777215]),s),e.range(-4,4),e.range(-4,4));n.add(is({kind:"blossom",season:"spring",size:.9,seed:3}),-3,-2.6),n.add(Cs(.8,2),3,2.6),n.particlesOf("petals",{area:{w:14,h:8,d:14},count:60}),n.particlesOf("motes",{area:{w:12,h:6,d:12},count:30,opacity:.6});for(let s=0;s<5;s++){let a=Ta(s+1,1.2),o=s*1.3;n.add(a,Math.cos(o)*11,Math.sin(o)*11,{y:-2+s*.6})}let i=x.renderer;i.setFollow(null),i.camGoal.set(0,.6,0),i.zoomGoal=11.5,i.camBounds=null,i.snapCamera(),i.setMood("dawnNursery",0,{dream:.35,tilt:.8})}var Bl=null,zl=0;function R1(n){eu+=n,x.renderer.camAz=45+Math.sin(eu*.05)*25,Bl&&zl>0&&(Bl.rotation.x=Math.sin(eu*2.6)*.6*zl)}function C1(){if(x.world){for(let n of x.world.characters){if(!n.head||n._partyHat)continue;let t=Fi(.55,1.2,8,[15887242,7324639,15976010,9097354][Math.floor(Math.random()*4)]);t.position.y=.75,t.rotation.z=.15,n.head.add(t),n._partyHat=t;let e=Xi(.18,6,4,16777215);e.position.y=1.2,t.add(e)}x.player&&x.world.burst(x.player.position.clone().setY(1.5),{count:80,color:16765152,speed:3}),x.audio.sfx("sparkle"),x.audio.sfx("yay"),x.achieve("konami")}}function t0(){x.director.current=null,x.ui.showHud(!1),x.ui.clock(!1),A1(),x.ui.fade(0,3);let n=document.getElementById("title");n.innerHTML="",n.classList.remove("hidden"),n.appendChild(lt("h1","","Little Moments")),n.appendChild(lt("div","sub","We are born so tiny. And then \u2014 so fast."));let t=lt("div","btns");n.appendChild(t);let e=To.readSave(),i=lt("button","",e?"Begin a new life":"Begin");if(t.appendChild(i),e&&e.sceneIndex>0){let r=lt("button","ghost","Continue");r.addEventListener("click",()=>{x.audio.init(),x.album.load(e),e0(e.sceneIndex)}),t.insertBefore(r,i)}let s=lt("button","ghost","Achievements");s.addEventListener("click",()=>x.ach.show()),t.appendChild(s);let a=0;n.querySelector("h1").style.pointerEvents="auto",n.querySelector("h1").style.cursor="pointer",n.querySelector("h1").addEventListener("click",()=>{++a===5&&Bl&&(zl=1,x.audio.sfx("giggle"),x.achieve("title_swing"))}),n.appendChild(lt("div","foot","Best with headphones \xB7 about two to three hours, in chapters \xB7 progress saves itself<br>WASD / arrows / click to move \xB7 Space to interact \xB7 hold Space to keep a moment \xB7 Esc to pause"));let o=()=>{x.audio.init(),x.audio.music("title",{intensity:.3}),x.audio.ambience({birds:.4,wind:.2})};window.addEventListener("pointerdown",o,{once:!0}),window.addEventListener("keydown",o,{once:!0}),i.addEventListener("click",()=>{x.audio.init(),x.audio.music("title",{intensity:.5}),t.innerHTML="",n.querySelector(".sub").textContent="In this story, you will grow up to become\u2026";let r=lt("div","who");t.appendChild(r);let l=lt("button","","a mother"),c=lt("button","","a father");r.appendChild(l),r.appendChild(c);let h=d=>{x.album.wipe(),x.state.identity=d,x.state.flags={},x.state.stats={emails:0,workCalls:0,workTimes:0},x.achieve("begin"),e0(0)};l.addEventListener("click",()=>h("mother")),c.addEventListener("click",()=>h("father"))})}async function e0(n){let t=document.getElementById("title");await x.ui.fade(1,2.2,"#000"),t.classList.add("hidden"),t.innerHTML="",Lo&&(Lo.dispose(),Lo=null,x.world=null),x.renderer.camAz=45,x.director.start(n)}async function P1(n){let{Character:t,LOOKS:e,youLook:i,childLook:s,Dog:a}=await Promise.resolve().then(()=>(Ds(),Ap));x.ui.fade(0,.1);let o=new Ls({name:"lineup"});x.world=o,o.add(Rs({w:14,d:8,top:U.grassSpring}),0,0),[[e.baby,.7,n==="pose"?"crawl":"sitGround"],[s(1.5),1.5,"idle"],[e.pip,5,"idle"],[e.childDaughter,8,"idle"],[e.theo,13,"idle"],[e.youMother,28,"idle"],[e.youFather,30,"idle"],[e.sam,30,"idle"],[e.mom,34,"idle"],[e.dad,36,"idle"],[e.grandma,70,"idle"],[e.grandpa,75,"idle"]].forEach(([d,u,p],g)=>{let f=new t({...d,age:u});f.place(-5.5+g*1,.5,.35),f.setPose(n==="walk"?"idle":p),n==="walk"&&(f.speed=f.walkSpeed,f._playerMoving=!0),n==="pose"&&f.setPose(["crawl","walk","jump","wave","kneelOpen","carry","hug","sit","cry","laugh","think","crouch"][g],{h:.45}),n==="pose"&&g<2&&(f.speed=f.walkSpeed,f._playerMoving=!0)}),new a().place(5.6,1.6);let c=x.renderer;c.setFollow(null);let h=parseFloat(new URLSearchParams(location.search).get("cx")||"0");c.camGoal.set(h,.9,.5+h*.35),c.zoomGoal=parseFloat(new URLSearchParams(location.search).get("zoom")||"6"),c.snapCamera(),c.setMood("springMorning",0)}window.addEventListener("DOMContentLoaded",E1);window.G=x;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
