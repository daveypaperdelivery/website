// Created by iWeb 3.0.1 local-build-20091207

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,-1,1,590),url:'Delivery_Area_files/stroke.png'},{rect:new IWRect(-2,-2,1,1),url:'Delivery_Area_files/stroke_1.png'},{rect:new IWRect(-1,-2,402,1),url:'Delivery_Area_files/stroke_2.png'},{rect:new IWRect(401,-2,1,1),url:'Delivery_Area_files/stroke_3.png'},{rect:new IWRect(401,-1,1,590),url:'Delivery_Area_files/stroke_4.png'},{rect:new IWRect(401,589,1,1),url:'Delivery_Area_files/stroke_5.png'},{rect:new IWRect(-1,589,402,1),url:'Delivery_Area_files/stroke_6.png'},{rect:new IWRect(-2,589,1,1),url:'Delivery_Area_files/stroke_7.png'}],new IWSize(400,587))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Delivery_Area_files/Delivery_AreaMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
