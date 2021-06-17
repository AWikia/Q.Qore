/* Reset and Saving */
function ResetToolbarItems() {
	$('#ModalTCustom .toolbar-customization-items .cpe-button').removeAttr('disabled');
//	$('.mpisto-global-sidebar.mpisto-personal-links .upper-links').empty();
	$('#ModalTCustom  .toolbar-added-items').empty();
	PutItem(26);
	PutItem(18);
	PutItem(27);
	PutItem(0);
	PutItem(21);
	PutItem(20);
}

function SaveToolbarItems() {
	var paintbrush = '<svg xmlns="http://www.w3.org/2000/svg" class="cpe-icon" enable-background="new 0 0 24 24" height="28px" viewBox="0 0 24 24" width="28px" fill="currentColor"><g><rect fill="none" height="24" width="24"/></g><g><g><g><g><path d="M12,22C6.49,22,2,17.51,2,12S6.49,2,12,2s10,4.04,10,9c0,3.31-2.69,6-6,6h-1.77c-0.28,0-0.5,0.22-0.5,0.5 c0,0.12,0.05,0.23,0.13,0.33c0.41,0.47,0.64,1.06,0.64,1.67C14.5,20.88,13.38,22,12,22z M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8 c0.28,0,0.5-0.22,0.5-0.5c0-0.16-0.08-0.28-0.14-0.35c-0.41-0.46-0.63-1.05-0.63-1.65c0-1.38,1.12-2.5,2.5-2.5H16 c2.21,0,4-1.79,4-4C20,7.14,16.41,4,12,4z"/><circle cx="6.5" cy="11.5" r="1.5"/><circle cx="9.5" cy="7.5" r="1.5"/><circle cx="14.5" cy="7.5" r="1.5"/><circle cx="17.5" cy="11.5" r="1.5"/></g></g></g></g></svg>'
	var store = '<svg version="1.1" class="cpe-icon" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentcolor" d="M52.053 0c-1.28 3.968-2.56 7.893-2.56 13.141v991.104c0 9.259 2.603 14.507 7.851 19.755l487.040-515.968-492.331-508.032zM577.237 542.208l125.909 129.92-179.755 102.4s-228.48 129.877-354.475 202.197l408.32-434.517zM611.413 506.752l135.083 140.459c21.163-11.776 186.496-106.325 210.091-119.467 24.917-14.421 22.4-34.133 1.237-44.629-19.584-10.88-184.917-105.6-209.92-120.96l-136.491 144.597zM577.152 472.619l127.317-135.211-181.717-103.723s-296.235-169.472-394.795-226.048l449.195 464.981z"></path></svg>'
	$('.mpisto-global-sidebar.mpisto-personal-links .upper-links').empty();
	var icons = [
				 'dashboard',
				 'articles',
				 'lock',
				 'preformat',
				 'user',
				 'reply',
				 'trash',
				 'pencil',
				 'download',
				 'star',
				 'users',
				 'clock',
				 'images',
				 'upload',
				 'article',
				 'external',
				 'map',
				 'clipboard',
				 'eye',
				 'quiz',
				 'activity',
				 'alert',
				 'refresh',
				 'gear',
				 '@@',
				 'unlock',
				 'link',
				 '@@'
				]
	var names = [
				 'Admin Dashboard',
				 'All Pages',
				 'Block a User',
				 'Command Line',
				 'Contributtions',
				 'Discuss',
				 'Deleted Contributions',
				 'Editcount',
				 'Export',
				 'Followlist',
				 'Global Contributions',
				 'History',
				 'Images',
				 'Import',
				 'Infobox Builder',
				 'Manage Interwiki',
				 'Map Builder',
				 'Noticeboard',
				 'Public Logs',
				 'Quiz Management',
				 'Recent Activity',
				 'Reported Posts',
				 'Random Page',
				 'Special Pages',
				 'Store',
				 'Unblock a user',
				 'What Links Here',
				 'Wiki Personalization'
				]
	var classes = [
				 'dashbord',
				 'pages',
				 'block',
				 'bash',
				 'contributions',
				 'discuss',
				 'delcontribs',
				 'edits',
				 'export',
				 'followlist',
				 'gcontribs',
				 'history',
				 'images',
				 'import',
				 'infobox',
				 'interwiki',
				 'map',
				 'noticeboard',
				 'logs',
				 'quiz',
				 'activity',
				 'discussions-reported',
				 'random-page',
				 'special-pages',
				 'store',
				 'unblock',
				 'whatlinikshere',
				 'designer'
				]
	// Handle Additions
	var additions = ($(".toolbar-added-items .cpe-button[value]").length + 1)
	if (additions > 0) {
		for (let i = 1; i < additions; i++) {
			var value = $(".toolbar-added-items .cpe-button:nth-child(" + i + ")").attr('value');
			var iconic =  '<svg xmlns="http://www.w3.org/2000/svg" class="cpe-icon">' +
							'<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cpe-icons-' + icons[value] + '" />' +
							  '</svg>'
			if (value == 27) {
				var iconic = paintbrush;
			} else if (value == 24) {
				var iconic = store;
				}
			$('.mpisto-global-sidebar.mpisto-personal-links .upper-links').append(
			'<a class="link ' + classes[value] + '" cpe-tooltip="' + names[value] + '">' +
				iconic +
			'</a>' 
			);
		}
	}


/* Rest of script */
$('#ModalTCustom .lightbox > section').prepend ( 
      '<div class="cpe-banner-notification__container" id="floatingbanner" style="top:auto; position:relative;">' +
        '<div class="cpe-banner-notification cpe-success cpe-is-transparent" style="transform:none;" id="BannerToolbar">' +
          '<div class="cpe-banner-notification__icon">' +
            '<svg xmlns="http://www.w3.org/2000/svg" class="cpe-icon cpe-icon-small">' +
              '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cpe-icons-checkmark-small" />' +
            '</svg>' +
          '</div>' +
          '<span class="cpe-banner-notification__text">	Toolbar edited sucessfully!</span>' +
          '<svg onclick="RemoveBannerTB1()" xmlns="http://www.w3.org/2000/svg" class="cpe-banner-notification__close cpe-icon cpe-icon-tiny">' +
            '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cpe-icons-cross-tiny" />' +
          '</svg>' +
        '</div>' +
      '</div>'

);

setTimeout(RemoveBannerTB2, 10)
setTimeout(RemoveBannerTB, 2500);

}

function RemoveBannerTB() {
	$('#ModalTCustom .lightbox section #BannerToolbar').attr("style", "");
    var x = document.getElementById("BannerToolbar");
        x.className += " cpe-is-transparent";
	    setTimeout(RemoveBannerTB1, 405) 
}

function RemoveBannerTB2() {
    var x = document.getElementById("BannerToolbar");
       x.className = x.className.replace (" cpe-is-transparent", "");
}

function RemoveBannerTB1() {
    var x = document.getElementById("BannerToolbar");
	document.getElementById("floatingbanner").removeChild(x);
	document.querySelector("#ModalTCustom .lightbox section").removeChild(document.getElementById("floatingbanner"));
}

function PutItem(value) {
	if ($(".toolbar-added-items .cpe-button[value]").length > 9) {
		/* Rest of script */
		$('#ModalTCustom .lightbox > section').prepend ( 
			  '<div class="cpe-banner-notification__container" id="floatingbanner" style="top:auto; position:relative;">' +
				'<div class="cpe-banner-notification cpe-alert cpe-is-transparent" style="transform:none;" id="BannerToolbar">' +
				  '<div class="cpe-banner-notification__icon">' +
					'<svg xmlns="http://www.w3.org/2000/svg" class="cpe-icon cpe-icon-small">' +
					  '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cpe-icons-error-small" />' +
					'</svg>' +
				  '</div>' +
				  '<span class="cpe-banner-notification__text">You can only have up to 10 items in the toolbar at once.</span>' +
				  '<svg onclick="RemoveBannerTB1()" xmlns="http://www.w3.org/2000/svg" class="cpe-banner-notification__close cpe-icon cpe-icon-tiny">' +
					'<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cpe-icons-cross-tiny" />' +
				  '</svg>' +
				'</div>' +
			  '</div>'

		);

		setTimeout(RemoveBannerTB2, 10)
		setTimeout(RemoveBannerTB, 2500);
		return

	}
	var paintbrush = '<svg xmlns="http://www.w3.org/2000/svg" class="cpe-icon" enable-background="new 0 0 24 24" height="28px" viewBox="0 0 24 24" width="28px" fill="currentColor"><g><rect fill="none" height="24" width="24"/></g><g><g><g><g><path d="M12,22C6.49,22,2,17.51,2,12S6.49,2,12,2s10,4.04,10,9c0,3.31-2.69,6-6,6h-1.77c-0.28,0-0.5,0.22-0.5,0.5 c0,0.12,0.05,0.23,0.13,0.33c0.41,0.47,0.64,1.06,0.64,1.67C14.5,20.88,13.38,22,12,22z M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8 c0.28,0,0.5-0.22,0.5-0.5c0-0.16-0.08-0.28-0.14-0.35c-0.41-0.46-0.63-1.05-0.63-1.65c0-1.38,1.12-2.5,2.5-2.5H16 c2.21,0,4-1.79,4-4C20,7.14,16.41,4,12,4z"/><circle cx="6.5" cy="11.5" r="1.5"/><circle cx="9.5" cy="7.5" r="1.5"/><circle cx="14.5" cy="7.5" r="1.5"/><circle cx="17.5" cy="11.5" r="1.5"/></g></g></g></g></svg>'
	var store = '<svg version="1.1" class="cpe-icon" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentcolor" d="M52.053 0c-1.28 3.968-2.56 7.893-2.56 13.141v991.104c0 9.259 2.603 14.507 7.851 19.755l487.040-515.968-492.331-508.032zM577.237 542.208l125.909 129.92-179.755 102.4s-228.48 129.877-354.475 202.197l408.32-434.517zM611.413 506.752l135.083 140.459c21.163-11.776 186.496-106.325 210.091-119.467 24.917-14.421 22.4-34.133 1.237-44.629-19.584-10.88-184.917-105.6-209.92-120.96l-136.491 144.597zM577.152 472.619l127.317-135.211-181.717-103.723s-296.235-169.472-394.795-226.048l449.195 464.981z"></path></svg>'
	$('#ModalTCustom .toolbar-customization-items .cpe-button[value="' + value + '"]').attr('disabled', 'true');
	var icons = [
				 'dashboard',
				 'articles',
				 'lock',
				 'preformat',
				 'user',
				 'reply',
				 'trash',
				 'pencil',
				 'download',
				 'star',
				 'users',
				 'clock',
				 'images',
				 'upload',
				 'article',
				 'external',
				 'map',
				 'clipboard',
				 'eye',
				 'quiz',
				 'activity',
				 'alert',
				 'refresh',
				 'gear',
				 '@@',
				 'unlock',
				 'link',
				 '@@'
				]
	var names = [
				 'Admin Dashboard',
				 'All Pages',
				 'Block a User',
				 'Command Line',
				 'Contributtions',
				 'Discuss',
				 'Deleted Contributions',
				 'Editcount',
				 'Export',
				 'Followlist',
				 'Global Contributions',
				 'History',
				 'Images',
				 'Import',
				 'Infobox Builder',
				 'Manage Interwiki',
				 'Map Builder',
				 'Noticeboard',
				 'Public Logs',
				 'Quiz Management',
				 'Recent Activity',
				 'Reported Posts',
				 'Random Page',
				 'Special Pages',
				 'Store',
				 'Unblock a user',
				 'What Links Here',
				 'Wiki Personalization'
				]
	var classes = [
				 'dashbord',
				 'pages',
				 'block',
				 'bash',
				 'contributions',
				 'discuss',
				 'delcontribs',
				 'edits',
				 'export',
				 'followlist',
				 'gcontribs',
				 'history',
				 'images',
				 'import',
				 'infobox',
				 'interwiki',
				 'map',
				 'noticeboard',
				 'logs',
				 'quiz',
				 'activity',
				 'discussions-reported',
				 'random-page',
				 'special-pages',
				 'store',
				 'unblock',
				 'whatlinikshere',
				 'designer'
				]
	var iconic =  '<svg xmlns="http://www.w3.org/2000/svg" class="cpe-icon">' +
					'<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cpe-icons-' + icons[value] + '" />' +
					  '</svg>'
	if (value == 27) {
		var iconic = paintbrush;
	} else if (value == 24) {
		var iconic = store;
	}

	$('#ModalTCustom  .toolbar-added-items').append(
	'<button value=' + value + ' class="cpe-button cpe-is-secondary cpe-is-square ' + classes[value] + '" title="' + names[value] + '" onclick="RemoveItem(' + value + ')">' +
		iconic +
	'</button>' 
	);
}

function RemoveItem(value) {
	$('#ModalTCustom .toolbar-customization-items .cpe-button[value="' + value + '"]').removeAttr('disabled');
	$('#ModalTCustom .toolbar-added-items .cpe-button[value="' + value + '"]').remove();
}