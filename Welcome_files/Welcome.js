// Created by iWeb 3.0.1 local-build-20091208

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,-1,1,74),url:'Welcome_files/stroke.png'},{rect:new IWRect(-2,-2,1,1),url:'Welcome_files/stroke_1.png'},{rect:new IWRect(-1,-2,217,1),url:'Welcome_files/stroke_2.png'},{rect:new IWRect(216,-2,1,1),url:'Welcome_files/stroke_3.png'},{rect:new IWRect(216,-1,1,74),url:'Welcome_files/stroke_4.png'},{rect:new IWRect(216,73,1,1),url:'Welcome_files/stroke_5.png'},{rect:new IWRect(-1,73,217,1),url:'Welcome_files/stroke_6.png'},{rect:new IWRect(-2,73,1,1),url:'Welcome_files/stroke_7.png'}],new IWSize(215,72))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
