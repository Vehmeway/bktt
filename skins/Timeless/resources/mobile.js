/* Popout menus (header) */

$( function () {
	var toggleTime = 200;

	// Open the various menus
	$( '#user-tools h2' ).on( 'click', function () {
		if ( $( window ).width() < 851 ) {
			$( '#personal-inner, #menus-cover' ).fadeToggle( toggleTime );
		}
	} );
	$( '#site-navigation h2' ).on( 'click', function () {
		if ( $( window ).width() < 851 ) {
			$( '#site-navigation .sidebar-inner, #menus-cover' ).fadeToggle( toggleTime );
		}
	} );
	$( '#site-tools h2' ).on( 'click', function () {
		if ( $( window ).width() < 851 ) {
			$( '#site-tools .sidebar-inner, #menus-cover' ).fadeToggle( toggleTime );
		}
	} );
	$( '#ca-more' ).on( 'click', function () {
		$( '#page-tools .sidebar-inner' ).css( 'top', $( '#ca-more' ).offset().top + 25 );
		if ( $( window ).width() < 851 ) {
			$( '#page-tools .sidebar-inner, #menus-cover' ).fadeToggle( toggleTime );
		}
	} );
	$( '#ca-languages' ).on( 'click', function () {
		$( '#other-languages .sidebar-inner' ).css( 'top', $( '#ca-languages' ).offset().top + 25 );
		if ( $( window ).width() < 851 ) {
			$( '#other-languages .sidebar-inner, #menus-cover' ).fadeToggle( toggleTime );
		}
	} );

	// Close menus on click outside
	$( document ).on( 'click touchstart', function ( e ) {
		if ( $( e.target ).closest( '#menus-cover' ).length > 0 ) {
			$( '#personal-inner' ).fadeOut( toggleTime );
			$( '.sidebar-inner' ).fadeOut( toggleTime );
			$( '#menus-cover' ).fadeOut( toggleTime );
		}
	} );

	$( '#hamburger-menu-icon' ).on( 'click', function () {
		$('#hamburger-menu').css('display', 'flex')
	} );

	$( '#hamburger-menu' ).on( 'click', function () {
		$('#hamburger-menu').css('display', 'none')
	} );
	
	// Nút trên bên trái 
	$( '#sidebar-button' ).on( 'click', function () {
		if ($('#mw-site-navigation').css('display') == 'none') {
			$('#mw-site-navigation').css('display','block')
			$('#sidebar-button').css('background-image','url("'+'@{resourcesRoot}'+'/skins/Timeless/resources/images/nume.svg")')
		} else {
		        $('#mw-site-navigation').css('display','none')
			$('#sidebar-button').css('background-image','url("'+'@{resourcesRoot}'+'/skins/Timeless/resources/images/menu.svg")')
		}
	} );
	
} );
