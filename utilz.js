(function (mb, Mustache, undefined) {
    mb.renderTo = renderTo;

    function renderTo(targetId, templateId, context) {
        var template = $('#' + templateId).html();
        var rendered = Mustache.render(template, context);
        $('#' + targetId).html(rendered);
    }

})(window.mb = window.mb || {}, Mustache);

//var brick1 = bake('Mykolas');
//mb.render(brick1);