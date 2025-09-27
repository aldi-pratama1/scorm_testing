SCORM 1.2 Sandbox for Articulate Storyline (with pipwerks wrapper)
=================================================================

Tujuan
------
Kerangka ini membuat file Storyline Anda (story.html) dapat berinteraksi
dengan SCORM API saat diuji di luar LMS (misalnya GitHub Pages).
API SCORM disediakan di parent window; Storyline dimuat via iframe.


Isi Folder
----------
- index.html                   -> Memuat story.html dalam iframe + menyediakan SCORM API
- pipwerks-scorm-api-wrapper.js-> PLACEHOLDER. Ganti dengan file pipwerks resmi.
- scorm_mock_api_12.js         -> Mock LMS SCORM 1.2 (window.API)
- storyline_scorm_boot.js      -> Bridge helper untuk pipwerks (init/set/get/save/quit)


Cara Pakai (ringkas)
--------------------
1) Publish Storyline Anda ke Web (HTML5 Only).
2) Salin 'story.html' dan semua folder aset yang dihasilkan ke folder ini.
3) GANTI file 'pipwerks-scorm-api-wrapper.js' dengan file resmi dari pipwerks.
4) Buka 'index.html' di browser. Tekan F12 -> Console untuk melihat log SCORM.

Tips Trigger (Storyline Execute JavaScript)
-------------------------------------------
- Inisialisasi (slide pertama):
    StorylineSCORM.init();
    StorylineSCORM.set("cmi.core.lesson_status", "incomplete");
    StorylineSCORM.set("cmi.core.student_name", "Demo User");
    StorylineSCORM.save();

- Simpan skor:
    var p = GetPlayer();
    var raw = Number(p.GetVar("UserScore"));
    var max = Math.max(1, Number(p.GetVar("MaxScore")));
    var scaled = (raw/max).toFixed(4);
    StorylineSCORM.set("cmi.core.score.raw", raw);
    StorylineSCORM.set("cmi.core.score.max", max);
    StorylineSCORM.set("cmi.core.score.scaled", scaled);
    StorylineSCORM.save();

- Selesai/keluar:
    StorylineSCORM.set("cmi.core.lesson_status", "completed");
    StorylineSCORM.save();
    StorylineSCORM.quit();


Catatan
-------
- index.html menyuntikkan API di parent frame; Storyline mencari API ke parent/top.
- Saat mem-publish ulang Storyline, Anda tidak perlu mengedit story.html;
  cukup timpa file lama, karena injeksi API terjadi di index.html (parent).

Lisensi
-------
- File 'pipwerks-scorm-api-wrapper.js' di sini hanya placeholder. Ganti dengan
  file resmi dari pipwerks SCORM API Wrapper sesuai lisensinya.
