attribute float vertexId;


uniform float time;
uniform float vertexCount;
uniform vec2 room_res;
uniform vec2 screen_resolution;
uniform mat4 u_projTrans;




varying vec4 v_color;


vec3 posf2(float t, float i) {
	return vec3(
      sin(t+i*.9553) +
      sin(t*1.311+i) +
      sin(t*1.4+i*1.53) +
      sin(t*1.84+i*.76),
      sin(t+i*.79553+2.1) +
      sin(t*1.311+i*1.1311+2.1) +
      sin(t*1.4+i*1.353-2.1) +
      sin(t*1.84+i*.476-2.1),
      sin(t+i*.5553-2.1) +
      sin(t*1.311+i*1.1-2.1) +
      sin(t*1.4+i*1.23+2.1) +
      sin(t*1.84+i*.36+2.1)
	)*.2;
}

vec3 posf0(float t) {
  return posf2(t,-1.)*3.5;
}

vec3 posf(float t, float i) {
  return posf2(t*.3,i) + posf0(t);
}

vec3 push(float t, float i, vec3 ofs, float lerpEnd) {
  vec3 pos = posf(t,i)+ofs;

  vec3 posf = fract(pos+.5)-.5;

  float l = length(posf)*2.;
  return (- posf + posf/l)*(1.-smoothstep(lerpEnd,1.,l));
}

void main() {
  // more or less random movement
  float t = time*.2;
  float i = vertexId+sin(vertexId)*200.;

  vec3 pos = posf(t,i);
  vec3 ofs = vec3(0);
  for (float f = -8.; f < 0.; f++) {
  	  ofs += push(t+f*.05,i,ofs,2.-exp(-f*.1));
    }
    ofs += push(t,i,ofs,.999);

    pos -= posf0(t);

    pos += ofs;


    pos.yz *= mat2(.8,.6,-.6,.8);
    pos.xz *= mat2(.8,.6,-.6,.8);

    pos *= 1.;


    pos.z += .7;

    pos.xy *= .6/pos.z;
    
     pos.xy = pos.xy * 0.5 + 0.5;    //now pos is ranged 0 to 1
      pos.xy *= room_res;        //now pos ranges from 0 to room_res size (game world space)
	pos.x +=  60*16-11*16;
    gl_Position =  	 u_projTrans * vec4(pos.x, pos.y, 0, 1);
    
    //gl_PointSize = abs(1./pos.z);
    if(abs(1./pos.z)>screen_resolution.x/480){
    	gl_PointSize = abs(1./pos.z + screen_resolution.x/480);
    	//gl_PointSize = 2;
    

    
   // v_color = vec4(0,0.75,1,1);
	}else{ gl_PointSize = screen_resolution.x/480;}


	v_color = vec4(abs(ofs/max(length(ofs),1e-9))*.3+.4,1);

}
