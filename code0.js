gdjs.StartCode = {};
gdjs.StartCode.GDGordonObjects1= [];
gdjs.StartCode.GDGordonObjects2= [];
gdjs.StartCode.GDGordonObjects3= [];
gdjs.StartCode.GDPlatformObjects1= [];
gdjs.StartCode.GDPlatformObjects2= [];
gdjs.StartCode.GDPlatformObjects3= [];
gdjs.StartCode.GDpalmObjects1= [];
gdjs.StartCode.GDpalmObjects2= [];
gdjs.StartCode.GDpalmObjects3= [];
gdjs.StartCode.GDFonObjects1= [];
gdjs.StartCode.GDFonObjects2= [];
gdjs.StartCode.GDFonObjects3= [];
gdjs.StartCode.GDCoinObjects1= [];
gdjs.StartCode.GDCoinObjects2= [];
gdjs.StartCode.GDCoinObjects3= [];
gdjs.StartCode.GDNewTextObjects1= [];
gdjs.StartCode.GDNewTextObjects2= [];
gdjs.StartCode.GDNewTextObjects3= [];
gdjs.StartCode.GDSnipSnapCrabObjects1= [];
gdjs.StartCode.GDSnipSnapCrabObjects2= [];
gdjs.StartCode.GDSnipSnapCrabObjects3= [];
gdjs.StartCode.GDGGObjects1= [];
gdjs.StartCode.GDGGObjects2= [];
gdjs.StartCode.GDGGObjects3= [];
gdjs.StartCode.GDleftObjects1= [];
gdjs.StartCode.GDleftObjects2= [];
gdjs.StartCode.GDleftObjects3= [];
gdjs.StartCode.GDrightObjects1= [];
gdjs.StartCode.GDrightObjects2= [];
gdjs.StartCode.GDrightObjects3= [];
gdjs.StartCode.GDmoveObjects1= [];
gdjs.StartCode.GDmoveObjects2= [];
gdjs.StartCode.GDmoveObjects3= [];


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.StartCode.GDGordonObjects1, gdjs.StartCode.GDGordonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDGordonObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDGordonObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDGordonObjects2[k] = gdjs.StartCode.GDGordonObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDGordonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDGordonObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDGordonObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDGordonObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


{

/* Reuse gdjs.StartCode.GDGordonObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDGordonObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDGordonObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDGordonObjects1[k] = gdjs.StartCode.GDGordonObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDGordonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDGordonObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDGordonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDGordonObjects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}}

}


};gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDGordonObjects1Objects = Hashtable.newFrom({"Gordon": gdjs.StartCode.GDGordonObjects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.StartCode.GDCoinObjects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDGordonObjects1Objects = Hashtable.newFrom({"Gordon": gdjs.StartCode.GDGordonObjects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDSnipSnapCrabObjects1Objects = Hashtable.newFrom({"SnipSnapCrab": gdjs.StartCode.GDSnipSnapCrabObjects1});
gdjs.StartCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.StartCode.GDNewTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.StartCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDNewTextObjects2[i].getBehavior("Text").setText("Coin: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


};gdjs.StartCode.asyncCallback9381612 = function (runtimeScene, asyncObjectsList) {

{ //Subevents
gdjs.StartCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.StartCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.StartCode.asyncCallback9381612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDmoveObjects1Objects = Hashtable.newFrom({"move": gdjs.StartCode.GDmoveObjects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.StartCode.GDleftObjects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDmoveObjects1Objects = Hashtable.newFrom({"move": gdjs.StartCode.GDmoveObjects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.StartCode.GDrightObjects1});
gdjs.StartCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "go") > 4;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDSnipSnapCrabObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDSnipSnapCrabObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDSnipSnapCrabObjects1[i].clearForces();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "go");
}}

}


};gdjs.StartCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "go") > 2;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDSnipSnapCrabObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDSnipSnapCrabObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDSnipSnapCrabObjects1[i].addForce(400, 0, 0);
}
}
{ //Subevents
gdjs.StartCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.StartCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.StartCode.GDGordonObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.StartCode.GDGordonObjects1.length !== 0 ? gdjs.StartCode.GDGordonObjects1[0] : null), true, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GG"), gdjs.StartCode.GDGGObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.StartCode.GDleftObjects1);
{for(var i = 0, len = gdjs.StartCode.GDGGObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDGGObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDleftObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "go");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.StartCode.GDGordonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDGordonObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDGordonObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDGordonObjects1[k] = gdjs.StartCode.GDGordonObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDGordonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.StartCode.GDGordonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDGordonObjects1.length;i<l;++i) {
    if ( !(gdjs.StartCode.GDGordonObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDGordonObjects1[k] = gdjs.StartCode.GDGordonObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDGordonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDGordonObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDGordonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDGordonObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.StartCode.GDGordonObjects1);
{for(var i = 0, len = gdjs.StartCode.GDGordonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDGordonObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.StartCode.GDGordonObjects1);
{for(var i = 0, len = gdjs.StartCode.GDGordonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDGordonObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.StartCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.StartCode.GDGordonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDGordonObjects1Objects, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.StartCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.StartCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.StartCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDNewTextObjects1[i].getBehavior("Text").setText("Coin: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.StartCode.GDGordonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDGordonObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDGordonObjects1[i].getY() > 700 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDGordonObjects1[k] = gdjs.StartCode.GDGordonObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDGordonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDGordonObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDGordonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDGordonObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.StartCode.GDGordonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SnipSnapCrab"), gdjs.StartCode.GDSnipSnapCrabObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDGordonObjects1Objects, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDSnipSnapCrabObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDGordonObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDGordonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDGordonObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GG"), gdjs.StartCode.GDGGObjects1);
{for(var i = 0, len = gdjs.StartCode.GDGGObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDGGObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.StartCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.StartCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("move"), gdjs.StartCode.GDmoveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDmoveObjects1Objects, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDleftObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDmoveObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDmoveObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDmoveObjects1[i].returnVariable(gdjs.StartCode.GDmoveObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("move"), gdjs.StartCode.GDmoveObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.StartCode.GDrightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDmoveObjects1Objects, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDrightObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDmoveObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDmoveObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDmoveObjects1[i].returnVariable(gdjs.StartCode.GDmoveObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("move"), gdjs.StartCode.GDmoveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDmoveObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDmoveObjects1[i].getVariableNumber(gdjs.StartCode.GDmoveObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDmoveObjects1[k] = gdjs.StartCode.GDmoveObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDmoveObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDmoveObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDmoveObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDmoveObjects1[i].addForce(100, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("move"), gdjs.StartCode.GDmoveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDmoveObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDmoveObjects1[i].getVariableNumber(gdjs.StartCode.GDmoveObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDmoveObjects1[k] = gdjs.StartCode.GDmoveObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDmoveObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDmoveObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDmoveObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDmoveObjects1[i].addForce(-(100), 0, 0);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "go") > 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SnipSnapCrab"), gdjs.StartCode.GDSnipSnapCrabObjects1);
{for(var i = 0, len = gdjs.StartCode.GDSnipSnapCrabObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDSnipSnapCrabObjects1[i].addForce(-(200), 0, 0);
}
}
{ //Subevents
gdjs.StartCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDGordonObjects1.length = 0;
gdjs.StartCode.GDGordonObjects2.length = 0;
gdjs.StartCode.GDGordonObjects3.length = 0;
gdjs.StartCode.GDPlatformObjects1.length = 0;
gdjs.StartCode.GDPlatformObjects2.length = 0;
gdjs.StartCode.GDPlatformObjects3.length = 0;
gdjs.StartCode.GDpalmObjects1.length = 0;
gdjs.StartCode.GDpalmObjects2.length = 0;
gdjs.StartCode.GDpalmObjects3.length = 0;
gdjs.StartCode.GDFonObjects1.length = 0;
gdjs.StartCode.GDFonObjects2.length = 0;
gdjs.StartCode.GDFonObjects3.length = 0;
gdjs.StartCode.GDCoinObjects1.length = 0;
gdjs.StartCode.GDCoinObjects2.length = 0;
gdjs.StartCode.GDCoinObjects3.length = 0;
gdjs.StartCode.GDNewTextObjects1.length = 0;
gdjs.StartCode.GDNewTextObjects2.length = 0;
gdjs.StartCode.GDNewTextObjects3.length = 0;
gdjs.StartCode.GDSnipSnapCrabObjects1.length = 0;
gdjs.StartCode.GDSnipSnapCrabObjects2.length = 0;
gdjs.StartCode.GDSnipSnapCrabObjects3.length = 0;
gdjs.StartCode.GDGGObjects1.length = 0;
gdjs.StartCode.GDGGObjects2.length = 0;
gdjs.StartCode.GDGGObjects3.length = 0;
gdjs.StartCode.GDleftObjects1.length = 0;
gdjs.StartCode.GDleftObjects2.length = 0;
gdjs.StartCode.GDleftObjects3.length = 0;
gdjs.StartCode.GDrightObjects1.length = 0;
gdjs.StartCode.GDrightObjects2.length = 0;
gdjs.StartCode.GDrightObjects3.length = 0;
gdjs.StartCode.GDmoveObjects1.length = 0;
gdjs.StartCode.GDmoveObjects2.length = 0;
gdjs.StartCode.GDmoveObjects3.length = 0;

gdjs.StartCode.eventsList5(runtimeScene);

return;

}

gdjs['StartCode'] = gdjs.StartCode;
