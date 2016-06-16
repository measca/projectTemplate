export function install(Vue, option) {
    require("../../js/lib/bootstrap-datetimepicker/css/bootstrap-datetimepicker.css");
    require("../../js/lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.js");

    Vue.directive('datetime', {
        bind() {
            var expression = this.expression;
            var format = "yyyy/mm/dd hh:ii";
            var view = "hour";
            switch (expression) {
                case "day":
                    format = "yyyy/MM/dd hh:00";
                    view = "day";
                    break;
                case "month":
                    format = "yyyy/MM/dd";
                    view = "month";
                    break;
                case "year":
                    format = "yyyy/MM";
                    view = "year";
                    break;
                case "decade":
                    format = "yyyy";
                    view = "decade";
                    break;
            }
            var modifiers = this.modifiers;
            $(this.el).datetimepicker({
                format: format,
                todayHighlight: true,
                endDate: modifiers.enddate ? new Date() : null,
                startDate: modifiers.startdate ? new Date() : null,
                todayBtn: true,
                startView: view,
                minView: view,
                maxView: 'decade'
            });
        }
    });
}