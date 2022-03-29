class BadRequestException extends Error {
    constructor(selector = null, msg = '잘못된 요청입니다.') {
        super(msg);
        this._selector = selector;
    }
    get selector() {
        return this._selector;
    }
    set selector(params) {
        this._selector = params;
    }
}