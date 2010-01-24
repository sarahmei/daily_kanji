describe('A Suite ', function () {
  it('has a passing test with one expectation and a really really really really really REALLY REALLY REALLY long spec name', function() {
    expect(true).toEqual(true);
  });

  it('has a passing test with two expectations', function() {
    expect(true).toEqual(true);
    expect(true).toEqual(true);
  });

//  it('has a failing test with one expectation', function() {
//    expect(false).toEqual(true);
//  });
});

describe('Another Suite', function () {
  it('has a passing test with one expectation', function() {
    expect(true).toEqual(true);
  });

  it('has a second passing test with one expectation', function() {
    expect(true).toEqual(true);
  });

  it('has a second passing test with one expectation', function() {
    expect(true).toEqual(true);
  });

//  it('has a failing test with one passing and two failing expectations', function() {
//    expect(true).toEqual(true);
//    expect(false).toEqual(true);
//    expect(17).toEqual(25);
//  });

});