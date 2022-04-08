var myGameboard = (function(){

    'use strict'
    const _numberSquares = 9;
    const _containerGame = document.querySelector('.container-gameboard');

    function addGameboard(){
        const _gameboard = document.createElement('div');
        _gameboard.classList.add('gameboard');
        _containerGame.appendChild(_gameboard);

        for(var i = 0; i < _numberSquares; i++){
            const _square = document.createElement('div');
            _square.classList.add('square');
            _square.id = `square${i+1}`;
            _gameboard.appendChild(_square);
        }
    }

    return{
        addGameboard : addGameboard
    }
})();

myGameboard.addGameboard();

