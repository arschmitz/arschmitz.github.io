window.sidescroll = (function() {
		
		// the row elements
	var $rows, $links, $rowsViewport, $rowsOutViewport,
		// the window element
		$win = $(window),
		// we will store the window sizes here
		winSize	= {},
		// used in the scroll setTimeout function
		anim = false,
		// page scroll speed
		scollPageSpeed = 2000 ,
		// page scroll easing
		scollPageEasing = 'easeInOutExpo',
		// perspective?
		hasPerspective = false,
		
		perspective	= hasPerspective && Modernizr.csstransforms3d,
		// initialize function
		init = function() {
			$rows = $('#ss-container > div.ss-row');
			$links = $('#ss-links > a');
			var sticky = new Waypoint.Sticky({
			  element: $('#ss-links')[0],
			  context: $( ".scrollable" )
			});
			// get window sizes
			getWinSize();
			// initialize events
			initEvents();
			// define the inviewport selector
			defineViewport();
			// gets the elements that match the previous selector
			setViewportRows();
			// if perspective add css
			if( perspective ) {
				$rows.css({
					'-webkit-perspective'			: 600,
					'-webkit-perspective-origin'	: '50% 0%'
				});
			}
			// show the pointers for the inviewport rows
			$rowsViewport.find('a.ss-circle').parent().addClass('ss-circle-deco');
			// set positions for each row
			placeRows();
			
		},
		// defines a selector that gathers the row elems that are initially visible.
		// the element is visible if its top is less than the window's height.
		// these elements will not be affected when scrolling the page.
		defineViewport	= function() {
		
			$.extend( $.expr[':'], {
			
				inviewport	: function ( el ) {
					if ( $(el).offset().top < winSize.height ) {
						return true;
					}
					return false;
				}
			
			});
		
		},
		// checks which rows are initially visible 
		setViewportRows	= function() {
			$rowsViewport 		= $rows.filter(':inviewport');
			$rowsOutViewport	= $rows.not( $rowsViewport )
			
		},
		// get window sizes
		getWinSize		= function() {
		
			winSize.width	= $win.width();
			winSize.height	= $win.height();
		
		},
		hammerEvents = function() {
			var pinchEnd;
			$( ".ss-circle, .ss-left h3, .ss-right h3" ).each( function( index, ele ) {
				var ham = new Hammer( ele, {
					domEvents: true
				} );
				ham.get('rotate').set({ enable: true })
				ham.get('pinch').set({ enable: true });
			} );
			$( ".ss-row" ).each( function( index, ele ) {
				var ham = new Hammer( ele, {
					domEvents: true,
					touchAction: "pan-y"
				} );
			} );


			$( ".ss-circle" ).draggable().on( "rotate", function( e ) {
				var gesture = e.gesture || e.originalEvent.gesture;
				$( this ).css( "transform", "rotate( " + gesture.rotation + "deg) scale( " + gesture.scale + ")" );
			} );
			$( ".ss-left h3, .ss-right h3, .dialog-wrap" ).on( "pinch", function( e ) {
				var gesture = e.gesture || e.originalEvent.gesture, ele = $( this );
				clearTimeout( pinchEnd );
				if ( $( this ).is( ".dialog-wrap" ) ) {
					$( this ).addClass( "resizing" );
					ele = ele.find( ".dialog" );
					pinchEnd = setTimeout( function(){
						var gesture = e.gesture || e.originalEvent.gesture;

						ele.closest( ".dialog-wrap" ).removeClass( "dialog-open resizing" );
						ele.css( "transform", "" );
						
					}, 30 );
				}
				ele.css( "transform", "scale( " + gesture.scale + ")" );
			} );
			$( ".ss-left h3, .ss-right h3" ).on( "pinchend", function( e ) {
				var gesture = e.gesture || e.originalEvent.gesture;
				$( this ).css( "transform", "" );
				if ( gesture.scale > 1 ) {
					$( this ).closest( ".ss-row" ).find( ".dialog-wrap" ).addClass( "dialog-open" );
				}
			});
			var sorting = false;
			$( ".ss-row" ).on( "press", function( e ) {
				if( $( e.target ).is( ".ss-row" ) ) {
					$( ".ss-row" )[ sorting ? "removeClass" : "addClass" ]( "timeline-row-outline" );
					$( ".ss-container" ).sortable( sorting ? "destroy" : undefined );
					sorting = !sorting;
				}
			} );
			$( ".ss-row" ).on( "swipe", function() {
				$( this ).remove();
			} );
			$( ".ss-row h3" ).on( "pointerenter pointerleave", function( e ){
				$( this )[ e.type === "pointerenter" ? "addClass" : "removeClass"  ]( "timeline-hover" );
			});
			$('.hjs code').each(function(i, block) {
			    hljs.highlightBlock(block);
			});
		},
		// initialize some events
		initEvents		= function() {
			hammerEvents();
			// navigation menu links.
			// scroll to the respective section.

			$links.on( 'click.Scrolling', function( event ) {

				// scroll to the element that has id = menu's href
				$( $(this).attr('href') ).scrollintoview({
					duration: "slow"
				});
				return false;
			
			});
			$(".scrollable").on({
				// on window resize we need to redefine which rows are initially visible (this ones we will not animate).
				'resize.Scrolling' : function( event ) {
					
					// get the window sizes again
					getWinSize();
					// redefine which rows are initially visible (:inviewport)
					setViewportRows();
					// remove pointers for every row
					$rows.find('a.ss-circle').parent().removeClass('ss-circle-deco');
					// show inviewport rows and respective pointers
					$rowsViewport.each( function() {
					
						$(this).find('div.ss-left')
							   .css({ left   : '0%' })
							   .end()
							   .find('div.ss-right')
							   .css({ right  : '0%' })
							   .end()
							   .find('a.ss-circle').parent()
							   .addClass('ss-circle-deco');
					
					});
				
				},
				// when scrolling the page change the position of each row	
				'scroll.Scrolling' : function( event ) {
					// set a timeout to avoid that the 
					// placeRows function gets called on every scroll trigger
					if( anim ) return false;
					anim = true;
					setTimeout( function() {
						placeRows();
						anim = false;
						
					}, 10 );
				
				}
			});
		
		},
		// sets the position of the rows (left and right row elements).
		// Both of these elements will start with -50% for the left/right (not visible)
		// and this value should be 0% (final position) when the element is on the
		// center of the window.
		placeRows		= function() {
			
				// how much we scrolled so far
			var winscroll	= $win.scrollTop(),
				// the y value for the center of the screen
				winCenter	= winSize.height / 2 + winscroll;
			
			// for every row that is not inviewport
			$rowsOutViewport.each( function(i) {
				
				var $row	= $(this),
					// the left side element
					$rowL	= $row.find('div.ss-left'),
					// the right side element
					$rowR	= $row.find('div.ss-right'),
					// top value
					rowT	= $row.offset().top;
				
				// hide the row if it is under the viewport
				if( rowT > winSize.height + winscroll ) {
					
					if( perspective ) {
					
						$rowL.css({
							'-webkit-transform'	: 'translate3d(-75%, 0, 0) rotateY(-90deg) translate3d(-75%, 0, 0)',
							'opacity'			: 0
						});
						$rowR.css({
							'-webkit-transform'	: 'translate3d(75%, 0, 0) rotateY(90deg) translate3d(75%, 0, 0)',
							'opacity'			: 0
						});
					
					}
					else {
					
						$rowL.css({ left 		: '-50%' });
						$rowR.css({ right 		: '-50%' });
					
					}
					
				}
				// if not, the row should become visible (0% of left/right) as it gets closer to the center of the screen.
				else {
						
						// row's height
					var rowH	= $row.height(),
						// the value on each scrolling step will be proporcional to the distance from the center of the screen to its height
						factor 	= ( ( ( rowT + rowH / 2 ) - winCenter ) / ( winSize.height / 2 + rowH / 2 ) ),
						// value for the left / right of each side of the row.
						// 0% is the limit
						val		= Math.max( factor * 50, 0 );
						
					if( val <= 0 ) {
					
						// when 0% is reached show the pointer for that row
						if( !$row.data('pointer') ) {
						
							$row.data( 'pointer', true );
							$row.find('.ss-circle').parent().addClass('ss-circle-deco');
						
						}
					
					}
					else {
						
						// the pointer should not be shown
						if( $row.data('pointer') ) {
							
							$row.data( 'pointer', false );
							$row.find('.ss-circle').parent().removeClass('ss-circle-deco');
						
						}
						
					}
					
					// set calculated values
					if( perspective ) {
						
						var	t		= Math.max( factor * 75, 0 ),
							r		= Math.max( factor * 90, 0 ),
							o		= Math.min( Math.abs( factor - 1 ), 1 );
						
						$rowL.css({
							'-webkit-transform'	: 'translate3d(-' + t + '%, 0, 0) rotateY(-' + r + 'deg) translate3d(-' + t + '%, 0, 0)',
							'opacity'			: o
						});
						$rowR.css({
							'-webkit-transform'	: 'translate3d(' + t + '%, 0, 0) rotateY(' + r + 'deg) translate3d(' + t + '%, 0, 0)',
							'opacity'			: o
						});
					
					}
					else {
						
						$rowL.css({ left 	: - val + '%' });
						$rowR.css({ right 	: - val + '%' });
						
					}
					
				}	
			
			});
		
		};
	
	return { init : init };

})();