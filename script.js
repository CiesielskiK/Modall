'use strict';
(function(){


    var modalLinks = document.querySelectorAll('.show-modal');
    var closeButtons = document.querySelectorAll('.modal .close');
    var modals = document.querySelectorAll('.modal');
    console.log(modals);

    var targetedModalLinkAction = function(target) {
        for ( var i = 0; i < modalLinks.length; i++) {
            if ( target == modalLinks[i]) {
                for (var k = 0; k < modals.length; k++) {
                    modals[k].classList.remove('show');
                }
            modals[i].classList.add('show');
            }
        }
    }

    var showModal = function(event) {
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.add('show');
        var target = event.target || event.srcElement;
        console.log(target);
        targetedModalLinkAction(target);
    };

	for(var i = 0; i < modalLinks.length; i++){
        modalLinks[i].addEventListener('click', showModal);
	}


	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};



	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}


	document.querySelector('#modal-overlay').addEventListener('click', hideModal);



	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}


})();
