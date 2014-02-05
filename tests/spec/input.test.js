function setUpHTMLFixture() {
     setFixtures('<div id="input-container">
            <input id="full-name" type="text"></input>
            <div id="input-hint"> 
            </div> 
            <div id="error-container">
                <a id="error-message"></a>
            </div> 
        </div>
        <div id="input-container">
                <input disabled id="special-full-name" type="text"></input>
                <button id="refresh-btt" class="special-full-name-btt"><img src="../img/refresh.png"/></button>
        </div>
        <br>
        <div id="input-container">
            <div>
                <input id="special-full-name" type="text"></input>
                <button id="plus-btt" class="special-full-name-btt"><img src="../img/more.png"/></button>
            </div>
        </div>');
}

describe("On input focus, div with help must me visible", function() {
  beforeEach(function() {
    setUpHTMLFixture();
  });

  it("input-hint visible", function() {
    $('#full-name').focus();
  });
});


