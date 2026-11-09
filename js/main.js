(function () {
  var FLAGS = {
    ireland: '<svg viewBox="0 0 90 60" preserveAspectRatio="none"><rect width="30" height="60" fill="#169B62"/><rect x="30" width="30" height="60" fill="#fff"/><rect x="60" width="30" height="60" fill="#FF883E"/></svg>',
    italy: '<svg viewBox="0 0 90 60" preserveAspectRatio="none"><rect width="30" height="60" fill="#009246"/><rect x="30" width="30" height="60" fill="#fff"/><rect x="60" width="30" height="60" fill="#CE2B37"/></svg>',
    spain: '<svg viewBox="0 0 90 60" preserveAspectRatio="none"><rect width="90" height="60" fill="#AA151B"/><rect y="15" width="90" height="30" fill="#F1BF00"/></svg>',
    poland: '<svg viewBox="0 0 90 60" preserveAspectRatio="none"><rect width="90" height="30" fill="#fff"/><rect y="30" width="90" height="30" fill="#DC143C"/><rect width="90" height="60" fill="none" stroke="#e6e6e6" stroke-width="1"/></svg>',
    scotland: '<svg viewBox="0 0 90 60" preserveAspectRatio="xMidYMid slice"><rect width="90" height="60" fill="#005EB8"/><path d="M0 0L90 60M90 0L0 60" stroke="#fff" stroke-width="9"/></svg>'
  };
  var grid = document.getElementById('tiles');
  fetch('data/sites.json').then(function (r) { return r.json(); }).then(function (d) {
    grid.innerHTML = d.sites.map(function (s) {
      return '<a class="tile" href="' + s.url + '" target="_blank" rel="noopener">' +
        '<div class="flag">' + (FLAGS[s.id] || '') + (s.status === 'soon' ? '<span class="badge">New</span>' : '') + '</div>' +
        '<div class="body"><div class="stat">' + s.stat + '</div><h3>OneClick ' + s.name + '</h3><p>' + s.tagline + '</p><span class="go">Visit OneClick ' + s.name + ' →</span></div></a>';
    }).join('') +
      '<a class="tile next" href="mailto:info@one-click-world.com?subject=Suggest%20a%20country"><div><div class="stat">Next</div><h3>Your country here</h3><p>Which homeland should we build next? Tell us.</p><span class="go">Suggest a country →</span></div></a>';
  }).catch(function () { grid.innerHTML = '<p>Sites are loading…</p>'; });
  var f = document.getElementById('signup');
  if (f) f.addEventListener('submit', function (e) {
    e.preventDefault();
    var m = f.querySelector('input').value.trim(); if (!m) return;
    location.href = 'mailto:info@one-click-world.com?subject=Keep%20me%20posted&body=' + encodeURIComponent('Please add me to the OneClick World mailing list: ' + m);
  });
})();
