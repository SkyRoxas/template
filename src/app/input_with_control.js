import $ from 'jquery'

const input_control = () => {
    $(document).ready(function() {
        $('.qtyplus').click(function(e) {
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var fieldName = $(this).attr('for');
            // Get its current value
            var currentVal = parseInt($('input[id=' + fieldName + ']').val());
            // If is not undefined
            if (!isNaN(currentVal)) {
                // Increment
                $('input[id=' + fieldName + ']').val(currentVal + 1);
            } else {
                // Otherwise put a 0 there
                $('input[id=' + fieldName + ']').val(0);
            }
        });
        $(".qtyminus").click(function(e) {
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var fieldName = $(this).attr('for');
            // Get its current value
            var currentVal = parseInt($('input[id=' + fieldName + ']').val());
            // If it isn't undefined or its greater than 0
            if (!isNaN(currentVal) && currentVal > 1) {
                // Decrement one
                $('input[id=' + fieldName + ']').val(currentVal - 1);
            } 
        });
    })
}

export default input_control
