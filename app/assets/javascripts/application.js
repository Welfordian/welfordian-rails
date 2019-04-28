// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery

$(function () {
    function toggleCheckButton(elem) {
        let checkbox = elem.find('[type="checkbox"]');

        console.log(checkbox.prop('checked'));

        if (checkbox.prop('checked')) {
            checkbox.prop('checked', false);

            elem.removeClass('bg-white text-blue-darkest').addClass('text-white hover:text-blue-darkest');

            if ($('.app-button').find('input:checked').length === 0) {
                $('.app-button:first').find('input').prop('checked', true);

                $('.app-button:first').addClass('bg-white text-blue-darkest').removeClass('text-white hover:text-blue-darkest');
            }
        } else {
            checkbox.prop('checked', true);

            elem.addClass('bg-white text-blue-darkest').removeClass('text-white hover:text-blue-darkest');
        }
    }

    $(document).on('click', '.app-button', function () {
        toggleCheckButton($(this));
    });

    $(document).on('keydown', '.app-button', function (e) {
        console.log(e);
        if (e.which === 13 || e.which === 32) {
            e.preventDefault();

            toggleCheckButton($(this));
        }
    });
});
