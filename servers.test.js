describe('Servers test (with setup and tear-down)', function() {
	beforeEach(function() {
		// initialization logic
		serverNameInput.value = 'Alice';
		allServers = { server1: 'Alice' };
	});

	it('should add a new server to allServers on submitServerInfo()', function() {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Alice');
		expect(serverId).toEqual(1);
		expect(serverNameInput.value).toEqual('');
	});

	it('should update server Table with new Server input on updateServerTable()', function() {
		updateServerTable();

		serverTbody = document.querySelector('#serverTable tbody');
		expect(serverTbody).toBeTruthy();
	});

	afterEach(function() {
		// teardown logic
		allServers = {};
		serverId = 0;
		serverNameInput.value = '';
		serverTbody.innerHTML = '';
	});
});
