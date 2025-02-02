const construction = require('./construction')
const Typeclass = construction.Typeclass
const MethodFactory = construction.MethodFactory

function _Number () {
	const o = Object.create(_Number.prototype)
	o.__init()
	o.type = Number
	o.typeex = 'Number'
	return o
}
_Number.prototype = Object.create(Typeclass.prototype)
_Number.prototype.constructor = _Number

_Number.prototype.min = MethodFactory(function (min) {
	this.validator = function (value) {
		return value >= min
	}
})

_Number.prototype.max = MethodFactory(function (max) {
	this.validator = function (value) {
		return value <= max
	}
})

_Number.prototype.minx = MethodFactory(function (min) {
	this.validator = function (value) {
		return value > min
	}
})

_Number.prototype.maxx = MethodFactory(function (max) {
	this.validator = function (value) {
		return value < max
	}
})

_Number.prototype.range = MethodFactory(function (min, max) {
	this.validator = function (value) {
		return value >= min && value <= max
	}
})

_Number.prototype.naturalRange = MethodFactory(function (min, max) {
	this.validator = function (value) {
		return value >= min && value < max
	}
})

_Number.prototype.integer = MethodFactory(function () {
	this.validator = function (value) {
		return Number.isInteger(value)
	}
})

_Number.prototype.now = MethodFactory(function () {
	this.value = function () {
		return Math.round(new Date().getTime() / 1000)
	}
})

_Number.prototype.defaultFunc = MethodFactory(function (defaultFunc) {
	this.value = function () {
		if (typeof defaultFunc === 'function') {
			return defaultFunc()
		} else {
			return 0
		}		
	}
})

module.exports = _Number
