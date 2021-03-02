// odoo js namespace
odoo.define('module.relationnal_fields', function(require) {
    "use strict";

    let registry = require('web.field_registry');
    let relational_fields = require('web.relational_fields');

    let M2xNoCreate = relational_fields.FieldMany2Many.extend({
        _renderButtons: function () {
            return;
        },
    });

    registry.add('many2many_kanban_no_create', M2xNoCreate);
});