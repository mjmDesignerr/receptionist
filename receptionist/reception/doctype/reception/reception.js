// Copyright (c) 2023, Mohammed Jama and contributors
// For license information, please see license.txt

frappe.ui.form.on('Reception', {
	after_save: function(frm) {
		var interval = setInterval(function() {
			frm.refresh();
			console.log('Hiee');
		  }, 5000);
	}
});

// frappe.ui.form.on('Reception', {

// });


