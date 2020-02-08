describe('Payments tests with setup/teardown', function() {
	beforeEach(function() {
		billAmtInput.value = '100';
		tipAmtInput.value = '10';
	});

	it('should add curPayment to all on submitPaymentInfo()', function() {
		submitPaymentInfo();

		expect(paymentId).toEqual(1);
		expect(allPayments['payment1'].billAmt).toEqual('100');
		expect(allPayments['payment1'].tipAmt).toEqual('10');
		expect(allPayments['payment1'].tipPercent).toEqual(10);
		expect(createCurPayment()).not.toEqual('');
	});

	it('should create current payment on createCurPayment()', function() {
		createCurPayment();
		expect(billAmtInput.value).toEqual('100');
		expect(tipAmtInput.value).toEqual('10');
		expect(billAmtInput.value).not.toEqual('');
		expect(tipAmtInput.value).not.toEqual('');
	});
	it('should update payment #paymentTable on appendPaymentTable()', function() {
		let curPayment = createCurPayment();
		allPayments['payment1'] = curPayment;

		appendPaymentTable(curPayment);

		let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

		expect(curTdList.length).toEqual(3);
		expect(curTdList[0].innerText).toEqual('$100');
		expect(curTdList[1].innerText).toEqual('$10');
		expect(curTdList[2].innerText).toEqual('10%');
	});

	afterEach(function() {
		allPayments = {};
		paymentId = 0;
		billAmtInput.value = '';
		tipAmtInput.value = '';
		paymentTbody.innerHTML = '';
		summaryTds[0].innerHTML = '';
		summaryTds[1].innerHTML = '';
		summaryTds[2].innerHTML = '';
		serverTbody.innerHTML = '';
	});
});
