window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
   StorylineSCORM.init();
 StorylineSCORM.set("cmi.core.lesson_status", "incomplete");
 StorylineSCORM.set("cmi.core.student_name", "Demo User");
 StorylineSCORM.save();
}

window.Script2 = function()
{
  StorylineSCORM.set("cmi.core.lesson_status", "completed");
StorylineSCORM.save();
StorylineSCORM.quit();
}

};
