$(document).ready(function(){

/* ==========================================================================
	Tables
	========================================================================== */

	var $table = $('#table'),
		$remove = $('#remove'),
        $remove1 = $('#remove1'),
		selections = [];

	function totalTextFormatter(data) {
		return 'Total';
	}

	function totalNameFormatter(data) {
		return data.length;
	}

	function totalPriceFormatter(data) {
		var total = 0;
		$.each(data, function (i, row) {
			total += +(row.price.substring(1));
		});
		return '$' + total;
	}

	function statusFormatter(data, rowData, index) {
		var classBtn = '',
			classDropup = '',
			pageSize = 10;

		if (data === 'Draft') classBtn = 'btn-danger';
		if (data === 'Pending') classBtn = 'btn-primary';
		if (data === 'Moderation') classBtn = 'btn-warning';
		if (data === 'Published') classBtn = 'btn-success';

		if (index >= pageSize / 2) {
			classDropup = 'dropup';
		}

		return	'<div class="dropdown dropdown-status ' +
				classDropup +
				' ">' +
				'<button class="btn ' +
				classBtn +
				' dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
				data +
				'</button>' +
				'<div class="dropdown-menu">' +
				'<a class="dropdown-item" href="#">Draft</a>' +
				'<a class="dropdown-item" href="#">Pending</a>' +
				'<a class="dropdown-item" href="#">Moderation</a>' +
				'<a class="dropdown-item" href="#">Published</a>' +
				'<div class="dropdown-divider"></div>' +
				'<a class="dropdown-item" href="#">Move to Trash</a>' +
				'</div></div>';
	}

	window.operateEvents = {
		'click .like': function (e, value, row, index) {
			window.open('wenquan.html');
		},
		'click .remove': function (e, value, row, index) {
			$table.bootstrapTable('remove', {
				field: 'id',
				values: [row.id]
			});
		}
	};

	function operateFormatter(value, row, index) {
		return [
			'<a class="like" href="javascript:void(0)" title="编辑">',
			'<i class="glyphicon glyphicon-edit"></i>',
			'</a>  ',
			'<a class="remove" href="javascript:void(0)" title="删除">',
			'<i class="glyphicon glyphicon-remove"></i>',
			'</a>'
		].join('');
	}

	function getIdSelections() {
		return $.map($table.bootstrapTable('getSelections'), function (row) {
			return row.id
		});
	}

	var data = [
		{
			"id": 1,
			"name": "旅游",
			"price": "3"
		},
		{
			"id": 2,
			"name": "就业",
			"price": "5"
		},
		{
			"id": 3,
			"name": "房产",
			"price": "1"
		},
		{
			"id": 4,
			"name": "教育",
			"price": "2"
		},
		{
			"id": 5,
			"name": "医疗",
			"price": "4"
		},
		{
			"id": 6,
			"name": "养老",
			"price": "1"
		},
		{
			"id": 7,
			"name": "环保",
			"price": "2"
		}
	];
	$table.bootstrapTable({
		iconsPrefix: 'font-icon',
		icons: {
			paginationSwitchDown:'font-icon-arrow-square-down',
			paginationSwitchUp: 'font-icon-arrow-square-down up',
			refresh: 'font-icon-refresh',
			toggle: 'font-icon-list-square',
			columns: 'font-icon-list-rotate',
			export: 'font-icon-download',
			detailOpen: 'font-icon-plus',
			detailClose: 'font-icon-minus-1'
		},
		paginationPreText: '<i class="font-icon font-icon-arrow-left"></i>',
		paginationNextText: '<i class="font-icon font-icon-arrow-right"></i>',
		data: data,
		columns: [
			[
				//{
				//	field: 'state',
				//	checkbox: true,
				//	rowspan: 2,
				//	align: 'center',
				//	valign: 'middle'
				//},
				{
					title: '权重项编号',
					field: 'id',
					rowspan: 2,
					align: 'center',
					valign: 'middle',
					sortable: true,
					footerFormatter: totalTextFormatter
				},
				{
					title: '权重详情',
					colspan: 3,
					align: 'center'
				}
			],
			[
				{
					field: 'name',
					title: '权重项名称',
					sortable: true,
					//editable: true,
					//formatter: statusFormatter,
					footerFormatter: totalNameFormatter,
					align: 'center'
				},
				{
					field: 'price',
					title: '所占权重',
					sortable: true,
					align: 'center',
					footerFormatter: totalPriceFormatter
				}
			]
		]
	});

	$table.on('check.bs.table uncheck.bs.table ' +
		'check-all.bs.table uncheck-all.bs.table', function () {
		$remove.prop('disabled', !$table.bootstrapTable('getSelections').length);
		$remove1.prop('disabled', !$table.bootstrapTable('getSelections').length);
		// save your data, here just save the current page
		selections = getIdSelections();
		// push or splice the selections if you want to save all data selections
	});

	$remove.click(function () {
		var ids = getIdSelections();
		$table.bootstrapTable('remove', {
			field: 'id',
			values: ids
		});
		$remove.prop('disabled', true);
	});
	$remove1.click(function () {
		var ids = getIdSelections();
		$table.bootstrapTable('remove', {
			field: 'id',
			values: ids
		});
		$remove1.prop('disabled', true);
	});

	$('#toolbar').find('select').change(function () {
		$table.bootstrapTable('refreshOptions', {
			exportDataType: $(this).val()
		});
	});

/* ========================================================================== */
});
