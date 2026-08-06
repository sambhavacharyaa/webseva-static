(function () {
    var toggle = document.getElementById('panel-toggle');
    var buttons = toggle.querySelectorAll('.panel-toggle-btn');
    var panels = {
        cpanel: document.getElementById('panel-cpanel'),
        directadmin: document.getElementById('panel-directadmin')
    };

    function activate(name) {
        Object.keys(panels).forEach(function (key) {
            panels[key].classList.toggle('hidden', key !== name);
        });
        buttons.forEach(function (btn) {
            var isActive = btn.dataset.panel === name;
            btn.classList.toggle('active-cpanel', isActive && name === 'cpanel');
            btn.classList.toggle('active-directadmin', isActive && name === 'directadmin');
        });
    }

    buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            activate(btn.dataset.panel);
        });
    });

    activate('cpanel');
})();