// storyline_scorm_boot.js – bridge for pipwerks SCORM 1.2
window.SCORM_VERSION = "1.2";
(function () {
  if (!window.pipwerks || !pipwerks.SCORM) {
    console.warn("[Bridge] pipwerks SCORM wrapper belum termuat. Ganti placeholder dengan file resmi.");
    return;
  }
  pipwerks.SCORM.version = "1.2";
  window.StorylineSCORM = {
    init:  function(){ console.log("[Bridge] init"); return pipwerks.SCORM.init(); },
    set:   function(k,v){ return pipwerks.SCORM.set(k,v); },
    get:   function(k){ return pipwerks.SCORM.get(k); },
    save:  function(){ return pipwerks.SCORM.save(); },
    quit:  function(){ return pipwerks.SCORM.quit(); }
  };
})();
