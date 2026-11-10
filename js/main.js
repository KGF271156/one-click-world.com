(function () {
  var FLAGS = {
    ireland: '<svg viewBox="0 0 90 60" preserveAspectRatio="none"><rect width="30" height="60" fill="#169B62"/><rect x="30" width="30" height="60" fill="#fff"/><rect x="60" width="30" height="60" fill="#FF883E"/></svg>',
    italy: '<svg viewBox="0 0 90 60" preserveAspectRatio="none"><rect width="30" height="60" fill="#009246"/><rect x="30" width="30" height="60" fill="#fff"/><rect x="60" width="30" height="60" fill="#CE2B37"/></svg>',
    spain: '<svg viewBox="0 0 90 60" preserveAspectRatio="none"><rect width="90" height="60" fill="#AA151B"/><rect y="15" width="90" height="30" fill="#F1BF00"/></svg>',
    poland: '<svg viewBox="0 0 90 60" preserveAspectRatio="none"><rect width="90" height="30" fill="#fff"/><rect y="30" width="90" height="30" fill="#DC143C"/><rect width="90" height="60" fill="none" stroke="#e6e6e6" stroke-width="1"/></svg>',
    scotland: '<svg viewBox="0 0 90 60" preserveAspectRatio="xMidYMid slice"><rect width="90" height="60" fill="#005EB8"/><path d="M0 0L90 60M90 0L0 60" stroke="#fff" stroke-width="9"/></svg>',
    france: '<svg viewBox="0 0 90 60" preserveAspectRatio="none"><rect width="30" height="60" fill="#0055A4"/><rect x="30" width="30" height="60" fill="#fff"/><rect x="60" width="30" height="60" fill="#EF4135"/><rect width="90" height="60" fill="none" stroke="#e6e6e6" stroke-width="1"/></svg>',
    singapore: '<svg viewBox="0 0 90 60" preserveAspectRatio="none"><rect width="90" height="30" fill="#EF3340"/><rect y="30" width="90" height="30" fill="#fff"/><rect width="90" height="60" fill="none" stroke="#e6e6e6" stroke-width="1"/><circle cx="40" cy="15" r="11" fill="#fff"/><circle cx="45" cy="15" r="9.5" fill="#EF3340"/><g fill="#fff"><polygon points="57.0,2.8 57.8,4.9 60.0,5.0 58.2,6.4 58.9,8.6 57.0,7.3 55.1,8.6 55.8,6.4 54.0,5.0 56.2,4.9"/><polygon points="65.6,9.0 66.3,11.2 68.6,11.2 66.8,12.6 67.4,14.8 65.6,13.5 63.7,14.8 64.3,12.6 62.5,11.2 64.8,11.2"/><polygon points="62.3,19.1 63.1,21.2 65.3,21.3 63.5,22.7 64.2,24.9 62.3,23.6 60.4,24.9 61.1,22.7 59.2,21.3 61.5,21.2"/><polygon points="51.7,19.1 52.5,21.2 54.8,21.3 52.9,22.7 53.6,24.9 51.7,23.6 49.8,24.9 50.5,22.7 48.7,21.3 50.9,21.2"/><polygon points="48.4,9.0 49.2,11.2 51.5,11.2 49.7,12.6 50.3,14.8 48.4,13.5 46.6,14.8 47.2,12.6 45.4,11.2 47.7,11.2"/></g></svg>'
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
