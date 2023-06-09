/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function (Drupal, drupalSettings) {
    function mapTextContentToAjaxResponse(content) {
        if (content === '') {
            return false;
        }

        try {
            return JSON.parse(content);
        } catch (e) {
            return false;
        }
    }

    function bigPipeProcessPlaceholderReplacement(placeholderReplacement) {
        var placeholderId = placeholderReplacement.getAttribute('data-big-pipe-replacement-for-placeholder-with-id');
        var content = placeholderReplacement.textContent.trim();

        if (typeof drupalSettings.bigPipePlaceholderIds[placeholderId] !== 'undefined') {
            var response = mapTextContentToAjaxResponse(content);

            if (response === false) {
                once.remove('big-pipe', placeholderReplacement);
            } else {
                var ajaxObject = Drupal.ajax({
                    url: '',
                    base: false,
                    element: false,
                    progress: false
                });
                ajaxObject.success(response, 'success');
            }
        }
    }

    var interval = drupalSettings.bigPipeInterval || 50;
    var timeoutID;

    function bigPipeProcessDocument(context) {
        if (!context.querySelector('script[data-big-pipe-event="start"]')) {
            return false;
        }

        once('big-pipe', 'script[data-big-pipe-replacement-for-placeholder-with-id]', context).forEach(bigPipeProcessPlaceholderReplacement);

        if (context.querySelector('script[data-big-pipe-event="stop"]')) {
            if (timeoutID) {
                clearTimeout(timeoutID);
            }

            return true;
        }

        return false;
    }

    function bigPipeProcess() {
        timeoutID = setTimeout(function () {
            if (!bigPipeProcessDocument(document)) {
                bigPipeProcess();
            }
        }, interval);
    }

    bigPipeProcess();
    window.addEventListener('load', function () {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }

        bigPipeProcessDocument(document);
    });
})(Drupal, drupalSettings);
