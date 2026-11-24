// The page's only script, kept in a file so the Content-Security-Policy can refuse inline scripts.

// The phone menu is a <details>: close it once a link in it is chosen, or it stays open over the section.
document.addEventListener('click', function (e) {
  var a = e.target.closest('.mnav a');
  if (a) { var d = a.closest('details'); if (d) d.open = false; }
});

// "What are you interested in?": the ticked apps go along in the WhatsApp message and the email.
// Nothing is sent from this page; it only writes the two links. The words come from the fieldset's
// data attributes, so both languages share this file.
(function () {
  var f = document.getElementById('kies'), wa = document.getElementById('wa-kontak'), em = document.getElementById('epos-kontak');
  if (!f || !wa || !em) return;
  var w = f.dataset;
  function upd() {
    var s = [].map.call(f.querySelectorAll('input[type=checkbox]:checked'), function (c) { return c.value; }),
        o = f.querySelector('input[type=text]').value.trim();
    var t = w.hello + ' ' + (s.length ? s.join(', ') : w.none) + (o ? '. ' + w.other + ': ' + o : '') + '.';
    wa.href = 'https://wa.me/27834565646?text=' + encodeURIComponent(t);
    em.href = 'mailto:info@plaashek.co.za?subject=' + encodeURIComponent(w.subject) + '&body=' + encodeURIComponent(t);
  }
  f.addEventListener('change', upd); f.addEventListener('input', upd); upd();
})();
