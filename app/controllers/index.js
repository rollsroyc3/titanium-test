var insertBtn = function(title, url, params){
	var importJs = require('import');
	importJs.insertButton($.mainScrollView, title, url, params);
};

var win = $.win;

var button = Ti.UI.createButton({title:'list view', font:{fontWeight:'bold', fontSize:20},textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT});
button.addEventListener('click', function(e){
	var c = Alloy.createController('listview',{});
});
win.add(button);

var button2 = Ti.UI.createButton({title: 'require view'});
button2.addEventListener('click', function(e){
	Alloy.createController('requires/require_view');
});
win.add(button2);


insertBtn('require widget', 'requires/require_widget');
insertBtn('require js', 'requires/request_js');
insertBtn('Test models', 'test_models/index');
insertBtn('Test header and footer', 'test_layout/index');
insertBtn('Test List view', 'test_listviews/index');
insertBtn('Test Geolocation view', 'geolocation/index');
insertBtn('Test Network', 'network/index');
insertBtn('Test Modules', 'test_modules/index');
insertBtn('Test Sync', 'test_sync/index');
insertBtn('Test Network', 'test_networks/index');
insertBtn('Test windows', 'test_windows/index');
insertBtn('Test UI elements', 'ui/index');
insertBtn('Test require xml elements', 'test_requires/index');
insertBtn('Test Pull to update for scroll view', 'layouts/index', {bodyUrl: 'pull_to_update/show'});
insertBtn('Test textfield element', 'layouts/index', {bodyUrl: 'test_editfields/show'});
insertBtn('Test tabgoups', 'tab_groups/index');
insertBtn('Test search bars', 'layouts/index', {bodyUrl: 'test_searchbars/show'});
insertBtn('Test mobileweb problems', 'layouts/index', {bodyUrl: 'test_mobilewebs/show'});
insertBtn('Test tabgroups', 'layouts/index', {bodyUrl: 'test_tabgroups/show'});

Ti.API.info('OS_IOS:' + OS_IOS);
win.open();
