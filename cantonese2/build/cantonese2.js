if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_cantonese2());
}
function Keyboard_cantonese2()
{
  var modCodes = KeymanWeb.Codes.modifierCodes;
  var keyCodes = KeymanWeb.Codes.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_cantonese2";
  this.KN="Cantonese Phoneme";
  this.KMINVER="17.0";
  this.KV=null;
  this.KDU=0;
  this.KH='';
  this.KM=1;
  this.KBVER="1.0";
  this.KMBM=modCodes.SHIFT /* 0x0010 */;
  this.KVER="17.0.332.0";
  this.KVS=[];
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.g_main_0=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 27
        k.KDC(1,t);
        k.KO(-1,t,"˥");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 28
        k.KDC(1,t);
        k.KO(-1,t,"˥˩");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 29
        k.KDC(1,t);
        k.KO(-1,t,"˩˥");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 30
        k.KDC(1,t);
        k.KO(-1,t,"˧");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 31
        k.KDC(1,t);
        k.KO(-1,t,"˩");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 32
        k.KDC(1,t);
        k.KO(-1,t,"˩˧");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x5F)) {
      if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 15
        k.KDC(1,t);
        k.KO(-1,t,"t̪");
      }
      else if(k.KFCM(1,t,['l'])){
        r=m=1;   // Line 19
        k.KDC(1,t);
        k.KO(-1,t,"ɬ");
      }
      else if(k.KFCM(1,t,['o'])){
        r=m=1;   // Line 23
        k.KDC(1,t);
        k.KO(-1,t,"ɵ");
      }
      else if(k.KFCM(1,t,['a'])){
        r=m=1;   // Line 24
        k.KDC(1,t);
        k.KO(-1,t,"ɐ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP5 /* 0x65 */)) {
      if(k.KFCM(1,t,['o'])){
        r=m=1;   // Line 22
        k.KDC(1,t);
        k.KO(-1,t,"œ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP7 /* 0x67 */)) {
      if(k.KFCM(1,t,['n'])){
        r=m=1;   // Line 14
        k.KDC(1,t);
        k.KO(-1,t,"ŋ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NP8 /* 0x68 */)) {
      if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 17
        k.KDC(1,t);
        k.KO(-1,t,"t̪ʰ");
      }
      else if(k.KFCM(1,t,['s'])){
        r=m=1;   // Line 18
        k.KDC(1,t);
        k.KO(-1,t,"t͡sʰ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F4 /* 0x73 */)) {
      if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 16
        k.KDC(1,t);
        k.KO(-1,t,"t͡s");
      }
    }
    return r;
  };
}
