

function renderTo(targetId, templateId, context) {
    var template = $('#' + templateId).html();
    var rendered = Mustache.render(template, context);
    $('#' + targetId).html(rendered);
}