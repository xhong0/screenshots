/**
 * @fileOverview 界面界面动态效果
 * @author xhong
 */

/*置顶 && 轮播*/
(function() {
	var top = xhong.$('top'),
		prev = xhong.$('prev'),
		next = xhong.$('next'),
		pagerLi = xhong.$('pager').getElementsByTagName('li'),
		sliderLi = xhong.$('slider').getElementsByTagName('li'),
		sliderLiLenght = sliderLi.length,

		//标记当前页
		prevFlag = sliderLiLenght - 1,
		nextFlag = 1;

	var staticApp = {
		init: function() {
			this.initEvent();
		},

		initEvent: function() {
			var self = this;

			//回到顶部
			xhong.event.addHandler(top, 'click', function() {
				self.goTop();
			});

			// 点击“下标”显示元素
			for (var i = 0; i < pagerLi.length; i++) {
				xhong.event.addHandler(pagerLi[i], 'click', function() {
					var index = Array.prototype.indexOf.call(pagerLi,this);
					self.switchShowHide(sliderLi, pagerLi, index);
				});
			}

			// 点击“prev next”显示元素
			xhong.event.addHandler(prev, 'click', function() {
				self.switchShowHide(sliderLi, pagerLi, prevFlag);
			});

			xhong.event.addHandler(next, 'click', function() {
				self.switchShowHide(sliderLi, pagerLi, nextFlag);
			});
		},

		//返回顶部
		goTop: function() {
			var scrollTop = this.documentScrollTop();
		    this.move(scrollTop);
		},

		//获取或设置文档对象的scrollTop
		documentScrollTop: function(val) {
			var elem = document;
			return (val !== undefined) ?
				elem.documentElement.scrollTop = elem.body.scrollTop = val :
				Math.max(elem.documentElement.scrollTop, elem.body.scrollTop);

		},

		//减速移动滚动条
		move: function(scrollTop) {
			var that = this;
			setTimeout(function() {
				scrollTop = Math.floor((scrollTop * 0.65));
				that.documentScrollTop(scrollTop);
				if (scrollTop != 0) {
					setTimeout(arguments.callee, 25);
				}
			}, 25);
		},


		//切换显示元素
		switchShowHide : function(picElems, acElems, pa) {

			prevFlag = pa - 1 === -1 ? sliderLiLenght -1 : pa - 1 ;
		    nextFlag = (pa + 1) === sliderLiLenght ? 0 : pa + 1 ;

			for (var i = picElems.length - 1; i >= 0; i--) {
				debugger;
				if (i === pa) {
					this.showElement(picElems[i], acElems[i]);
				} else {
					this.hideElement(picElems[i], acElems[i]);
				}
			};
		},

		// 显示元素
		showElement : function(picElem, acElem) {
			debugger;
			picElem.style.display = 'block';

			acElem.style.backgroundImage = 'url(./images/slider/pager-active.png)';
		},

		// 隐藏元素
		hideElement : function(picElem, acElem) {
			debugger;
			picElem.style.display = 'none';

			acElem.style.backgroundImage = 'url(./images/slider/pager.png)';
		}
	}

	staticApp.init();
})();