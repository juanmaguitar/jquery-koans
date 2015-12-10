describe('ShowHideAndAmimate', function() {
	beforeEach(function() {
		$('body').append('<div id="fixture"></div>');
		$('#fixture').html(
				'<div class="div_class" id="div-1" />'+
				'<div id="div-2">'+
				'	<div id="div-2-child">'+
				'		<div id="div-2-grandchild" style="width:200px; height:50px; background-color:yellow;">'+
				'			<a id="link1" href="javascript:void(0)">Hello world</a>'+
				'			<a id="link2" href="javascript:void(0)" style="display:none">Hello world</a>'+
				'		</div>'+
				'   </div>'+
				'</div>'+
				'<div class="div_class" id="div-3"></div>');
	});

	afterEach(function() {
		$('#fixture').remove();
	});

	it('shows link', function() {
		$("#link2").show();

		expect($('#link2').is(':visible')).toBeTruthy();
	});

	it('hides link', function() {
		$("#link1").hide();

		expect($('#link1').is(':visible')).toBeFalsy();
	});

	it('toggles link', function() {
		expect($('#link1').is(':visible')).toBeTruthy();

		$('#link1').toggle();

		expect($('#link1').is(':visible')).toBeFalsy();
	});

	it('fades out link', function() {
		$('#link1').fadeOut(1000);
		expect($('#link1').is(':visible')).toBeTruthy();
		waits(1010);
		runs(function() {
				expect($('#link1').is(':visible')).toBeFalsy();
			});
	});

	it('animates link', function() {
		$('#link1').animate({'opacity':'0'}, 1000);
		expect($('#link1').css("opacity")).toEqual('1')
		waits(1010)
		runs(function() {
			expect($('#link1').css("opacity")).toEqual('0')
		})
	});

	it('slides down', function() {
		var done = false;

		$('#div-2-grandchild').hide().slideDown(2000, function() {
			done = true;
		});

		waitsFor(function() {return done});
		runs(function() {
			expect(done).toEqual(true);
		});
	});

});