// scorm_mock_api_12.js – Minimal mock SCORM 1.2 API (for testing outside LMS)
(function (w) {
  function expose(api){
    try{ w.API = api; }catch(e){}
    try{ if(w.parent) w.parent.API = api; }catch(e){}
    try{ if(w.top) w.top.API = api; }catch(e){}
  }
  var _initialized = false;
  var _data = Object.create(null);

  var API = {
    LMSInitialize: function(arg){ console.log("[SCORM12] LMSInitialize()", arg||""); _initialized=true; return "true"; },
    LMSFinish:     function(arg){ console.log("[SCORM12] LMSFinish()", arg||""); _initialized=false; return "true"; },
    LMSGetValue:   function(k){ var v = _data[k] ?? ""; console.log("[SCORM12] Get", k, "=>", v); return String(v); },
    LMSSetValue:   function(k,v){ console.log("[SCORM12] Set", k, "=", v); _data[k]=v; return "true"; },
    LMSCommit:     function(arg){ console.log("[SCORM12] Commit", arg||"", JSON.parse(JSON.stringify(_data))); return "true"; },
    LMSGetLastError:   function(){ return "0"; },
    LMSGetErrorString: function(){ return "No error"; },
    LMSGetDiagnostic:  function(){ return "OK"; }
  };
  expose(API);
})(window);
