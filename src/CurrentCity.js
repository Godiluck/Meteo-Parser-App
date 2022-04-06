import {makeAutoObservable} from "mobx";

export default class CurrentCity {
    constructor() {
        this._name = ''
        this._minTemp = []
        this._maxTemp = []
        this._date = []
        this._text = []
        this._humidity = []
        this._wind = []
        this._target = null
        makeAutoObservable(this);
    }

    setName(name) {
        this._name = name
    }

    setTarget(target) {
        this._target = target
    }

    setText(text) {
        this._text = text
    }

    setMinTemp(minTemp) {
        this._minTemp = minTemp
    }

    setMaxTemp(maxTemp) {
        this._maxTemp = maxTemp
    }

    setDate(date) {
        this._date = date
    }

    setWind(wind) {
        this._wind = wind
    }
    setHumidity(humidity) {
        this._humidity = humidity
    }

    get name() {
        return this._name
    }

    get minTemp() {
        return this._minTemp
    }

    get maxTemp() {
        return this._maxTemp
    }

    get date() {
        return this._date
    }

    get wind() {
        return this._wind
    }

    get humidity() {
        return this._humidity
    }

    get text() {
        return this._text
    }

    get target() {
        return this._target
    }
};